const STORAGE_KEY = 'ramadan-einde-reset-v1';

const habitPool = [
  {
    id: 'salah-anchor',
    title: 'Salah-anchor na Fajr',
    summary: 'Na elke Fajr 2 minuten stille dhikr voor je telefoon open gaat.',
    track: 'salah'
  },
  {
    id: 'salah-buffer',
    title: 'Wudu-buffer voor Maghrib',
    summary: '15 minuten voor Maghrib alvast wudu zodat je geen gebed uitstelt.',
    track: 'salah'
  },
  {
    id: 'quran-five',
    title: '5 minuten Koran na Isha',
    summary: 'Lees minimaal 1 pagina direct na Isha, elke dag dezelfde plek.',
    track: 'quran'
  },
  {
    id: 'quran-audio',
    title: 'Koran-audio op vaste route',
    summary: 'Koppel recitatie aan je woon-werk of schoolroute.',
    track: 'quran'
  },
  {
    id: 'dua-three',
    title: '3 vaste dua-momenten',
    summary: 'Na Fajr, voor slapen, en 1x overdag een korte dua-check.',
    track: 'dua'
  },
  {
    id: 'dhikr-pocket',
    title: 'Dhikr in wachttijd',
    summary: 'Gebruik wachttijd (lift, rij, bus) voor 33x dhikr.',
    track: 'dua'
  },
  {
    id: 'character-pause',
    title: '2-seconden sabr-pauze',
    summary: 'Bij irritatie: 2 seconden pauze, dan pas antwoorden.',
    track: 'character'
  },
  {
    id: 'character-repair',
    title: 'Dagelijkse mini-herstelactie',
    summary: 'Herstel elke dag 1 relatie met een dankje, sorry of steunbericht.',
    track: 'character'
  },
  {
    id: 'charity-friday',
    title: 'Wekelijkse sadaqah trigger',
    summary: 'Kies een vast moment in week 1 om sadaqah direct uit te voeren.',
    track: 'character'
  }
];

const dayNames = [
  'Dag 1 na Eid',
  'Dag 2 na Eid',
  'Dag 3 na Eid',
  'Dag 4 na Eid',
  'Dag 5 na Eid',
  'Dag 6 na Eid',
  'Dag 7 na Eid'
];

const state = {
  selectedHabits: [],
  suggestions: [],
  plan: []
};

const panels = {
  1: document.getElementById('step-1'),
  2: document.getElementById('step-2'),
  3: document.getElementById('step-3')
};

const stepEls = Array.from(document.querySelectorAll('.step'));
const habitSuggestions = document.getElementById('habitSuggestions');
const toStep3 = document.getElementById('toStep3');
const planOutput = document.getElementById('planOutput');
const saveState = document.getElementById('saveState');
const buddyInput = document.getElementById('buddy');

function showStep(stepNumber) {
  Object.entries(panels).forEach(([key, panel]) => {
    panel.classList.toggle('active', Number(key) === stepNumber);
  });

  stepEls.forEach((stepEl) => {
    const isActive = Number(stepEl.dataset.step) === stepNumber;
    stepEl.classList.toggle('active', isActive);
  });
}

function scoreLevel(value) {
  if (value === 'laag') return 1;
  if (value === 'middel') return 2;
  return 3;
}

function collectAudit() {
  return {
    salah: document.getElementById('salah').value,
    quran: document.getElementById('quran').value,
    dua: document.getElementById('dua').value,
    character: document.getElementById('character').value,
    timeBudget: Number(document.getElementById('timeBudget').value)
  };
}

function weakestTracks(audit) {
  const entries = [
    ['salah', scoreLevel(audit.salah)],
    ['quran', scoreLevel(audit.quran)],
    ['dua', scoreLevel(audit.dua)],
    ['character', scoreLevel(audit.character)]
  ];

  entries.sort((a, b) => a[1] - b[1]);
  return entries.map((entry) => entry[0]);
}

function buildSuggestions() {
  const audit = collectAudit();
  const focusOrder = weakestTracks(audit);

  const weighted = [];
  focusOrder.forEach((track, index) => {
    const related = habitPool.filter((habit) => habit.track === track);
    const repeat = 4 - index;
    for (let i = 0; i < repeat; i += 1) {
      weighted.push(...related);
    }
  });

  if (audit.timeBudget <= 10) {
    weighted.push(...habitPool.filter((habit) => habit.id === 'dua-three' || habit.id === 'character-pause'));
  }

  const uniqueById = new Map();
  weighted.forEach((habit) => {
    if (!uniqueById.has(habit.id)) {
      uniqueById.set(habit.id, habit);
    }
  });

  const ordered = Array.from(uniqueById.values());
  state.suggestions = ordered.slice(0, 6);
  renderHabitSuggestions();
}

function renderHabitSuggestions() {
  habitSuggestions.innerHTML = state.suggestions
    .map((habit) => {
      const checked = state.selectedHabits.includes(habit.id) ? 'checked' : '';
      return `
        <label class="habit-card">
          <input type="checkbox" value="${habit.id}" ${checked}>
          <h3>${habit.title}</h3>
          <p>${habit.summary}</p>
        </label>
      `;
    })
    .join('');

  const checkboxes = Array.from(habitSuggestions.querySelectorAll('input[type="checkbox"]'));
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      const selected = checkboxes.filter((box) => box.checked).map((box) => box.value);
      if (selected.length > 3) {
        checkbox.checked = false;
        return;
      }
      state.selectedHabits = selected;
      toStep3.disabled = state.selectedHabits.length !== 3;
    });
  });

  toStep3.disabled = state.selectedHabits.length !== 3;
}

function generatePlan() {
  const habits = state.selectedHabits
    .map((id) => habitPool.find((habit) => habit.id === id))
    .filter(Boolean);

  state.plan = dayNames.map((day, index) => {
    const rotating = [
      habits[index % habits.length],
      habits[(index + 1) % habits.length],
      habits[(index + 2) % habits.length]
    ];
    return {
      day,
      actions: rotating.map((habit) => habit.title)
    };
  });

  renderPlan();
}

function renderPlan() {
  planOutput.innerHTML = state.plan
    .map((entry) => {
      const items = entry.actions.map((action) => `<li>${action}</li>`).join('');
      return `
        <article class="plan-day">
          <h4>${entry.day}</h4>
          <ul>${items}</ul>
        </article>
      `;
    })
    .join('');
}

function exportPlanText() {
  const buddy = buddyInput.value.trim();
  const lines = ['Ramadan Einde-Reset: 7-daags behoudplan', ''];

  if (buddy) {
    lines.push(`Accountability buddy: ${buddy}`);
    lines.push('');
  }

  state.plan.forEach((entry) => {
    lines.push(entry.day);
    entry.actions.forEach((action) => lines.push(`- ${action}`));
    lines.push('');
  });

  return lines.join('\n');
}

function savePlanLocal() {
  const payload = {
    selectedHabits: state.selectedHabits,
    plan: state.plan,
    buddy: buddyInput.value.trim(),
    savedAt: new Date().toISOString()
  };

  localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
  saveState.textContent = 'Plan opgeslagen op dit apparaat.';
}

async function copyPlan() {
  const text = exportPlanText();
  try {
    await navigator.clipboard.writeText(text);
    saveState.textContent = 'Plan gekopieerd.';
  } catch (error) {
    const helper = document.createElement('textarea');
    helper.value = text;
    document.body.appendChild(helper);
    helper.select();
    document.execCommand('copy');
    document.body.removeChild(helper);
    saveState.textContent = 'Plan gekopieerd.';
  }
}

function loadSavedPlan() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return;
  }

  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed.selectedHabits) && parsed.selectedHabits.length === 3) {
      state.selectedHabits = parsed.selectedHabits;
      state.plan = Array.isArray(parsed.plan) ? parsed.plan : [];
      buddyInput.value = parsed.buddy || '';
      if (state.plan.length === 7) {
        renderPlan();
      }
    }
  } catch (error) {
    console.warn('Kon opgeslagen plan niet laden:', error);
  }
}

function initActions() {
  document.getElementById('toStep2').addEventListener('click', () => {
    state.selectedHabits = [];
    buildSuggestions();
    showStep(2);
  });

  document.getElementById('backTo1').addEventListener('click', () => showStep(1));
  document.getElementById('backTo2').addEventListener('click', () => showStep(2));

  toStep3.addEventListener('click', () => {
    generatePlan();
    saveState.textContent = '';
    showStep(3);
  });

  document.getElementById('savePlan').addEventListener('click', savePlanLocal);
  document.getElementById('copyPlan').addEventListener('click', copyPlan);
}

loadSavedPlan();
initActions();
showStep(1);
