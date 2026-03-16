const STORAGE_KEY = 'ramadan-herstelkompas-v1';

const missions = [
  {
    id: 'fam-1',
    title: 'Stuur vanavond een oprechte dank-sms naar een ouder of verzorger',
    why: 'Waardering herstelt zachtheid in een relatie zonder eerst een zwaar gesprek te hoeven voeren.',
    action: 'Stuur een persoonlijk bericht met 1 concrete herinnering waarvoor je dankbaar bent.',
    template: 'Assalamu alaikum, ik wilde je oprecht bedanken voor [concrete herinnering]. Moge Allah jou belonen en je hart verruimen. Ameen.',
    dua: 'Allahumma allif baina qulubina wa aslih dhata bainina.',
    focus: 'family',
    levels: ['small', 'medium']
  },
  {
    id: 'fam-2',
    title: 'Vraag rustig vergeving voor een recente harde toon',
    why: 'Een kleine excuses breekt vaak maanden van spanning open.',
    action: 'Noem je fout zonder verdediging en vraag om vergeving in 2 zinnen.',
    template: 'Ik besef dat mijn toon laatst pijnlijk was. Dat was niet goed van mij. Wil je me alsjeblieft vergeven?',
    dua: 'Rabbighfir li wa liwalidayya.',
    focus: 'family',
    levels: ['medium', 'deep']
  },
  {
    id: 'fam-3',
    title: 'Plan een mini-gesprek van 10 minuten met iemand thuis',
    why: 'Herstel begint vaak met luisteren, niet met uitleggen.',
    action: 'Vraag: Wat heb jij de laatste tijd van mij gemist? Luister uit zonder onderbreken.',
    template: 'Heb je vanavond 10 minuten? Ik wil alleen luisteren naar wat jij nodig hebt van mij.',
    dua: 'Allahumma ihdini li ahsani al-akhlaq.',
    focus: 'family',
    levels: ['deep']
  },
  {
    id: 'fr-1',
    title: 'Herstel een vriendschap die stil is gevallen',
    why: 'Een eerste stap hoeft niet groot te zijn om muren te laten zakken.',
    action: 'Stuur een warm bericht zonder druk of verwijt.',
    template: 'Assalamu alaikum, ik dacht vandaag aan je en hoop dat het goed met je gaat. Als je wil, praten we binnenkort even bij.',
    dua: 'Allahumma ajirni min su al-zann wa habbib ilayna al-iman.',
    focus: 'friends',
    levels: ['small', 'medium']
  },
  {
    id: 'fr-2',
    title: 'Bel iemand die je al lang uitstelt',
    why: 'Stemcontact brengt meer oprechtheid dan nog een uitgesteld appje.',
    action: 'Plan vanavond een kort telefoontje van 5 minuten.',
    template: 'Heb je vanavond 5 minuten? Ik wilde je stem even horen en checken hoe het met je is.',
    dua: 'Allahumma aslih li sha ni kullah.',
    focus: 'friends',
    levels: ['medium', 'deep']
  },
  {
    id: 'fr-3',
    title: 'Stop een conflict zonder de ander te ontmaskeren',
    why: 'Eer bewaren is vaak de snelste weg naar herstel.',
    action: 'Stuur: ik kies voor rust en respect, laten we opnieuw beginnen.',
    template: 'Ik wil deze spanning niet langer voeden. Ik kies voor rust en respect. Als jij wilt, beginnen we opnieuw.',
    dua: 'Allahumma salli wasallim ala nabiyyina Muhammad.',
    focus: 'friends',
    levels: ['deep']
  },
  {
    id: 'debt-1',
    title: 'Los een openstaande schuld deels af vanavond',
    why: 'Financieel rechtzetten is een krachtige vorm van tawbah in daden.',
    action: 'Maak een deelbetaling en communiceer je planning helder.',
    template: 'Ik heb je bedrag niet vergeten. Vanavond maak ik [bedrag] over en ik stuur je morgen mijn resterende planning.',
    dua: 'Allahumma ikfini bihalalika an haramika wa aghnini bifadlika amman siwaka.',
    focus: 'debt',
    levels: ['small', 'medium', 'deep']
  },
  {
    id: 'debt-2',
    title: 'Stuur een eerlijk overzicht van wat je nog moet teruggeven',
    why: 'Transparantie herstelt vertrouwen sneller dan stilte.',
    action: 'Maak een korte lijst met bedrag, datum en volgende stap.',
    template: 'Dit is mijn openstaande bedrag: [x]. Ik stel voor: [datum 1] [bedrag], [datum 2] [bedrag].',
    dua: 'Rabbana taqabbal minna innaka anta as-sami al-alim.',
    focus: 'debt',
    levels: ['medium', 'deep']
  },
  {
    id: 'debt-3',
    title: 'Geef iets terug dat je te lang hebt gehouden',
    why: 'Teruggeven is een directe daad van amanah (betrouwbaarheid).',
    action: 'Kies 1 item en regel vanavond overdracht of verzending.',
    template: 'Ik heb nog iets van jou liggen en wil dat netjes teruggeven. Wat past jou het best: ophalen of verzenden?',
    dua: 'Allahumma tahhir qalbi min an-nifaq wa amali min ar-riya.',
    focus: 'debt',
    levels: ['small', 'medium']
  },
  {
    id: 'heart-1',
    title: 'Laat vanavond bewust rancune los in dua',
    why: 'Innerlijke vergeving bevrijdt jouw nacht, ook als het contact nog niet hersteld is.',
    action: 'Noem 1 naam en maak 2 minuten dua voor hun leiding en welzijn.',
    template: 'Ya Allah, geef ons beide leiding, zuiver ons hart en breng rust tussen ons.',
    dua: 'Rabbi inni lima anzalta ilayya min khairin faqir.',
    focus: 'heart',
    levels: ['small', 'medium', 'deep']
  },
  {
    id: 'heart-2',
    title: 'Schrijf een eerlijk reflectiebericht en verwijder het niet',
    why: 'Eerlijkheid op papier maakt je volgende echte stap concreter.',
    action: 'Schrijf in 6 zinnen: mijn fout, hun pijn, mijn volgende daad.',
    template: '1) Wat deed ik? 2) Wat kan dat bij de ander hebben gedaan? 3) Wat ga ik nu anders doen?',
    dua: 'Allahumma la tajal fi qulubina ghillan lilladhina amanu.',
    focus: 'heart',
    levels: ['medium', 'deep']
  },
  {
    id: 'heart-3',
    title: 'Vraag iemand om jou te corrigeren op 1 gedragspunt',
    why: 'Vragen om feedback is een teken van kracht, geen zwakte.',
    action: 'Vraag 1 persoon: welk gedrag van mij maakt contact moeilijk?',
    template: 'Ik wil groeien. Welk gedrag van mij maakt het soms lastig om met mij om te gaan?',
    dua: 'Allahumma inni as aluka nafsan mutmainnah.',
    focus: 'heart',
    levels: ['deep']
  },
  {
    id: 'all-1',
    title: 'Stuur drie korte duas naar drie verschillende mensen',
    why: 'Goed wensen opent gesloten harten en brengt barakah in relaties.',
    action: 'Stuur drie losse berichten met oprechte duas.',
    template: 'Moge Allah je beschermen, je lasten verlichten en je het beste schenken in dunya en akhirah. Ameen.',
    dua: 'Allahumma barik lahum wa lahunna.',
    focus: 'all',
    levels: ['small', 'medium']
  },
  {
    id: 'all-2',
    title: 'Doe een verborgen daad van goedheid voor iemand met wie je spanning hebt',
    why: 'Stille daden veranderen vaak je eigen hart als eerste.',
    action: 'Kies 1 praktische gunst zonder erkenning te zoeken.',
    template: 'Ik wil je iets makkelijks maken vandaag. Zeg maar wat je nu nodig hebt, dan regel ik het insha Allah.',
    dua: 'Allahumma inni a udhu bika min munkarat al-akhlaq.',
    focus: 'all',
    levels: ['medium', 'deep']
  },
  {
    id: 'all-3',
    title: 'Herstel een belofte die je niet bent nagekomen',
    why: 'Betrouwbaarheid is de ruggengraat van sterke relaties.',
    action: 'Kies 1 open belofte en geef vandaag nog een concrete datum.',
    template: 'Je hebt gelijk dat dit bleef liggen. Ik neem verantwoordelijkheid. Uiterlijk [datum] rond ik dit af.',
    dua: 'Allahumma inni as aluka sidqan fil qawl wal amal.',
    focus: 'all',
    levels: ['small', 'medium', 'deep']
  }
];

const state = {
  currentMission: null,
  completed: []
};

const nightSelect = document.getElementById('night');
const intensitySelect = document.getElementById('intensity');
const focusSelect = document.getElementById('focus');
const generateBtn = document.getElementById('generateBtn');
const missionPanel = document.getElementById('missionPanel');
const doneCount = document.getElementById('doneCount');
const uniqueNights = document.getElementById('uniqueNights');
const historyList = document.getElementById('historyList');
const resetBtn = document.getElementById('resetBtn');

function setupNightOptions() {
  const today = new Date();
  for (let night = 21; night <= 30; night += 1) {
    const option = document.createElement('option');
    option.value = String(night);
    option.textContent = `Nacht ${night}`;
    nightSelect.appendChild(option);
  }

  const dayOfMonth = today.getDate();
  const maybeNight = Math.min(30, Math.max(21, dayOfMonth));
  nightSelect.value = String(maybeNight);
}

function loadState() {
  const raw = localStorage.getItem(STORAGE_KEY);
  if (!raw) {
    return;
  }
  try {
    const parsed = JSON.parse(raw);
    if (Array.isArray(parsed.completed)) {
      state.completed = parsed.completed;
    }
  } catch (error) {
    console.warn('Kon app-data niet laden:', error);
  }
}

function saveState() {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify({
      completed: state.completed
    })
  );
}

function hashString(input) {
  let hash = 0;
  for (let i = 0; i < input.length; i += 1) {
    hash = (hash << 5) - hash + input.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

function pickMission() {
  const night = nightSelect.value;
  const intensity = intensitySelect.value;
  const focus = focusSelect.value;

  const pool = missions.filter((mission) => {
    const levelMatch = mission.levels.includes(intensity);
    const focusMatch = focus === 'all' || mission.focus === focus || mission.focus === 'all';
    return levelMatch && focusMatch;
  });

  const safePool = pool.length > 0 ? pool : missions;
  const seed = `${night}-${intensity}-${focus}-${state.completed.length}`;
  const index = hashString(seed) % safePool.length;
  state.currentMission = {
    ...safePool[index],
    night
  };

  renderMission();
}

function renderMission() {
  if (!state.currentMission) {
    return;
  }

  const mission = state.currentMission;

  missionPanel.innerHTML = `
    <h2>Jouw stap voor vannacht</h2>
    <div class="mission-chip-row">
      <span class="mission-chip">Nacht ${mission.night}</span>
      <span class="mission-chip">${mission.focus}</span>
      <span class="mission-chip">${mission.levels.join(' / ')}</span>
    </div>
    <h3 class="mission-title">${mission.title}</h3>
    <p class="mission-text">${mission.why}</p>

    <div class="block">
      <strong>Concrete Actie</strong>
      <p class="mission-note">${mission.action}</p>
    </div>

    <div class="block">
      <strong>Script Om Te Gebruiken</strong>
      <p class="mission-note" id="missionTemplate">${mission.template}</p>
    </div>

    <div class="block">
      <strong>Korte Dua</strong>
      <p class="mission-note">${mission.dua}</p>
    </div>

    <label for="reflection">Na afloop: korte reflectie (optioneel)</label>
    <textarea id="reflection" placeholder="Wat ging goed? Wat is je volgende kleine stap?"></textarea>

    <div class="actions">
      <button type="button" class="action-btn" id="doneBtn">Gemarkeerd als gedaan</button>
      <button type="button" class="action-btn secondary" id="copyBtn">Kopieer script</button>
      <button type="button" class="action-btn warn" id="newBtn">Andere stap</button>
    </div>
  `;

  const doneBtn = document.getElementById('doneBtn');
  const copyBtn = document.getElementById('copyBtn');
  const newBtn = document.getElementById('newBtn');

  doneBtn.addEventListener('click', completeCurrentMission);
  copyBtn.addEventListener('click', copyCurrentScript);
  newBtn.addEventListener('click', pickMission);
}

function completeCurrentMission() {
  if (!state.currentMission) {
    return;
  }

  const reflection = document.getElementById('reflection');
  const item = {
    id: state.currentMission.id,
    title: state.currentMission.title,
    night: state.currentMission.night,
    reflection: reflection ? reflection.value.trim() : '',
    at: new Date().toISOString()
  };

  state.completed.unshift(item);
  saveState();
  renderProgress();

  const button = document.getElementById('doneBtn');
  if (button) {
    button.textContent = 'Opgeslagen';
    button.disabled = true;
  }
}

async function copyCurrentScript() {
  if (!state.currentMission) {
    return;
  }

  const text = state.currentMission.template;
  try {
    await navigator.clipboard.writeText(text);
    flashCopyButton('Gekopieerd');
  } catch (error) {
    const helper = document.createElement('textarea');
    helper.value = text;
    document.body.appendChild(helper);
    helper.select();
    document.execCommand('copy');
    document.body.removeChild(helper);
    flashCopyButton('Gekopieerd');
  }
}

function flashCopyButton(label) {
  const copyBtn = document.getElementById('copyBtn');
  if (!copyBtn) {
    return;
  }
  const old = copyBtn.textContent;
  copyBtn.textContent = label;
  window.setTimeout(() => {
    copyBtn.textContent = old;
  }, 1300);
}

function renderProgress() {
  doneCount.textContent = String(state.completed.length);

  const nights = new Set(state.completed.map((item) => item.night));
  uniqueNights.textContent = String(nights.size);

  if (state.completed.length === 0) {
    historyList.innerHTML = '<li class="empty">Nog geen stappen afgerond.</li>';
    return;
  }

  historyList.innerHTML = state.completed
    .map((item) => {
      const date = new Date(item.at);
      const formatted = date.toLocaleString('nl-NL', {
        day: '2-digit',
        month: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
      });
      const reflectionLine = item.reflection ? ` - ${item.reflection}` : '';
      return `<li>${item.title}<span>Nacht ${item.night} | ${formatted}${reflectionLine}</span></li>`;
    })
    .join('');
}

function resetAppData() {
  const confirmed = window.confirm('Weet je zeker dat je alle voortgang in Ramadan Herstelkompas wilt wissen?');
  if (!confirmed) {
    return;
  }

  state.currentMission = null;
  state.completed = [];
  localStorage.removeItem(STORAGE_KEY);
  missionPanel.innerHTML = '<h2>Jouw stap voor vannacht</h2><p class="placeholder">Kies je instellingen en druk op <em>Geef mijn herstelstap</em>.</p>';
  renderProgress();
}

setupNightOptions();
loadState();
renderProgress();

generateBtn.addEventListener('click', pickMission);
resetBtn.addEventListener('click', resetAppData);
