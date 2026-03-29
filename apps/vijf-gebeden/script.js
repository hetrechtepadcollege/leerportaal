const gebeden = [
  {
    id: 'fajr',
    naam: 'Fajr',
    arabisch: 'الفجر',
    betekenis: 'Het ochtendgebed',
    emoji: '🌙',
    tijd: 'Voor zonsopgang — van de eerste ochtendgloren tot zonsopgang.',
    rakat: { sunnahVoor: 2, fard: 2, sunnahNa: 0, witr: 0 },
    belang: 'Fajr bidt men voor zonsopgang. De Profeet ﷺ zei: "Wie Fajr bidt, staat onder de bescherming van Allah."',
    bijzonder: 'In de Adhan van Fajr wordt toegevoegd: "As-Salatu Khayrun mina-n-nawm" — Gebed is beter dan slapen.'
  },
  {
    id: 'dhuhr',
    naam: 'Dhuhr',
    arabisch: 'الظهر',
    betekenis: 'Het middaggebed',
    emoji: '☀️',
    tijd: 'Na het zenit van de zon tot wanneer de schaduw gelijk is aan de lengte van het object.',
    rakat: { sunnahVoor: 4, fard: 4, sunnahNa: 2, witr: 0 },
    belang: 'Dhuhr is een moment van bezinning midden in de dag. Het herinnert ons aan Allah temidden van onze bezigheden.',
    bijzonder: null
  },
  {
    id: 'asr',
    naam: 'Asr',
    arabisch: 'العصر',
    betekenis: 'Het namiddaggebed',
    emoji: '🌤️',
    tijd: 'Als de schaduw tweemaal de lengte van het object bereikt, tot vlak voor zonsondergang.',
    rakat: { sunnahVoor: 4, fard: 4, sunnahNa: 0, witr: 0 },
    belang: 'Allah noemt Asr in de Quran speciaal het "middelste gebed" (2:238). De engelen wisselen elkaar af bij Asr.',
    bijzonder: 'Asr is het gebed dat men het snelst vergeet vanwege het drukke middagprogramma. Wees alert!'
  },
  {
    id: 'maghrib',
    naam: 'Maghrib',
    arabisch: 'المغرب',
    betekenis: 'Het avondgebed',
    emoji: '🌇',
    tijd: 'Direct na zonsondergang tot wanneer de avondschemering verdwijnt.',
    rakat: { sunnahVoor: 0, fard: 3, sunnahNa: 2, witr: 0 },
    belang: 'Maghrib markeert het einde van de dag. In Ramadan wordt bij Maghrib het vasten verbroken (iftar).',
    bijzonder: null
  },
  {
    id: 'isha',
    naam: 'Isha',
    arabisch: 'العشاء',
    betekenis: 'Het nachtgebed',
    emoji: '🌃',
    tijd: 'Na de avondschemering tot middernacht (of Fajr).',
    rakat: { sunnahVoor: 4, fard: 4, sunnahNa: 2, witr: 3 },
    belang: 'Isha is het laatste gebed van de dag. Na Isha wordt de Witr gebeden, die de dag afsluit.',
    bijzonder: 'De Profeet ﷺ liet nooit de Witr achterwege, ook niet op reis.'
  }
];

const quizVragen = [
  { vraag: "Hoeveel fard raka'at heeft het Fajr gebed?", opties: ["1", "2", "3", "4"], correct: 1 },
  { vraag: "Welk gebed heeft 3 fard raka'at?", opties: ["Fajr", "Dhuhr", "Maghrib", "Isha"], correct: 2 },
  { vraag: "Welk gebed wordt het 'middelste gebed' (Al-Wusta) genoemd?", opties: ["Dhuhr", "Fajr", "Isha", "Asr"], correct: 3 },
  { vraag: "Na welk gebed wordt de Witr gebeden?", opties: ["Maghrib", "Asr", "Fajr", "Isha"], correct: 3 },
  { vraag: "Wat wordt er extra gezegd in de Adhan van Fajr?", opties: ["Allahu Akbar (extra)", "As-Salatu Khayrun mina-n-nawm", "Hayya ala-l-Falah (extra)", "La ilaha illa Allah"], correct: 1 },
  { vraag: "Hoeveel fard raka'at heeft het Dhuhr gebed?", opties: ["2", "3", "6", "4"], correct: 3 },
  { vraag: "Wanneer begint het Maghrib gebed?", opties: ["Bij het zenit", "Direct na zonsondergang", "Bij de avondschemering", "Na middernacht"], correct: 1 },
  { vraag: "Hoeveel totale sunnah-raka'at heeft het Isha gebed?", opties: ["2", "4", "7", "5"], correct: 2 }
];

let huidigeGebedIndex = 0;
let huidigeQuizVraagIndex = 0;
let quizBeantwoord = false;

function trackEvent(pad) {
  if (window.goatcounter) {
    window.goatcounter.count({
      path: pad
    });
  }
}

function initApp() {
  const selector = document.getElementById('gebedSelector');

  gebeden.forEach((gebed, index) => {
    const btn = document.createElement('button');
    btn.className = 'gebed-btn' + (index === 0 ? ' actief' : '');
    btn.setAttribute('role', 'tab');
    btn.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
    btn.onclick = () => selecteerGebed(index);

    btn.innerHTML = `
      <span class="gb-emoji">${gebed.emoji}</span>
      <span class="gb-naam">${gebed.naam}</span>
      <span class="gb-arabisch">${gebed.arabisch}</span>
    `;

    selector.appendChild(btn);
  });

  selecteerGebed(0);
  laadVraag();
  trackEvent('vijf-gebeden/app-gestart');
}

function selecteerGebed(index) {
  huidigeGebedIndex = index;

  document.querySelectorAll('.gebed-btn').forEach((btn, i) => {
    btn.classList.toggle('actief', i === index);
    btn.setAttribute('aria-selected', i === index ? 'true' : 'false');
  });

  renderDetail(gebeden[index]);
  trackEvent(`vijf-gebeden/gebed/${gebeden[index].id}`);
}

function renderDetail(gebed) {
  const detail = document.getElementById('gebedDetail');

  let rakatHTML = '';
  const rakatItems = [
    { label: 'Sunnah voor', aantal: gebed.rakat.sunnahVoor },
    { label: 'Fard', aantal: gebed.rakat.fard },
    { label: 'Sunnah na', aantal: gebed.rakat.sunnahNa },
    { label: 'Witr', aantal: gebed.rakat.witr }
  ];

  rakatItems.forEach(item => {
    if (item.aantal > 0) {
      rakatHTML += `
        <div class="rakat-box">
          <div class="rb-getal">${item.aantal}</div>
          <div class="rb-label">${item.label}</div>
        </div>
      `;
    }
  });

  let bijzonderHTML = '';
  if (gebed.bijzonder) {
    bijzonderHTML = `<div class="gd-bijzonder">💡 <strong>Bijzonder:</strong> ${gebed.bijzonder}</div>`;
  }

  detail.innerHTML = `
    <div class="gd-header">
      <div class="gd-arabisch-groot">${gebed.arabisch}</div>
      <div class="gd-info">
        <h2>${gebed.naam}</h2>
        <p>${gebed.betekenis}</p>
      </div>
    </div>

    <div class="rakat-grid">
      ${rakatHTML}
    </div>

    <div class="gd-info-rij">
      <span class="gd-info-icon">🕐</span>
      <div class="gd-info-tekst">
        <strong>Tijdvenster</strong>
        <span>${gebed.tijd}</span>
      </div>
    </div>

    <div class="gd-belang">
      <strong>💫 Belang</strong><br>
      ${gebed.belang}
    </div>

    ${bijzonderHTML}
  `;
}

function laadVraag() {
  const vraag = quizVragen[huidigeQuizVraagIndex];
  quizBeantwoord = false;

  document.getElementById('quizVraag').textContent = `Vraag ${huidigeQuizVraagIndex + 1} van ${quizVragen.length}: ${vraag.vraag}`;

  const optiesDiv = document.getElementById('quizOpties');
  optiesDiv.innerHTML = '';

  vraag.opties.forEach((optie, index) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-optie';
    btn.textContent = optie;
    btn.onclick = () => checkAntwoord(index, btn);
    optiesDiv.appendChild(btn);
  });

  document.getElementById('quizFeedback').textContent = '';
  document.getElementById('quizFeedback').className = 'quiz-feedback';
  document.getElementById('quizVolgende').classList.add('hidden');
}

function checkAntwoord(index, btn) {
  if (quizBeantwoord) return;

  quizBeantwoord = true;
  const vraag = quizVragen[huidigeQuizVraagIndex];
  const isCorrect = index === vraag.correct;
  const vraagNummer = huidigeQuizVraagIndex + 1;

  document.querySelectorAll('.quiz-optie').forEach(optie => {
    optie.style.pointerEvents = 'none';
  });

  if (isCorrect) {
    btn.classList.add('correct');
    document.getElementById('quizFeedback').textContent = '✓ Goed antwoord!';
    document.getElementById('quizFeedback').classList.add('correct');
    trackEvent(`vijf-gebeden/v${vraagNummer}-goed`);
  } else {
    btn.classList.add('wrong');
    const correctBtn = document.querySelectorAll('.quiz-optie')[vraag.correct];
    correctBtn.classList.add('correct');
    document.getElementById('quizFeedback').textContent = '✗ Helaas, niet correct. Zie het groene antwoord.';
    document.getElementById('quizFeedback').classList.add('wrong');
    trackEvent(`vijf-gebeden/v${vraagNummer}-fout`);
  }

  if (huidigeQuizVraagIndex < quizVragen.length - 1) {
    document.getElementById('quizVolgende').classList.remove('hidden');
  } else {
    document.getElementById('quizVolgende').textContent = 'Quiz opnieuw starten →';
    document.getElementById('quizVolgende').classList.remove('hidden');
  }
}

function volgendeQuizVraag() {
  if (huidigeQuizVraagIndex < quizVragen.length - 1) {
    huidigeQuizVraagIndex++;
    laadVraag();
  } else {
    huidigeQuizVraagIndex = 0;
    laadVraag();
  }
}

document.addEventListener('DOMContentLoaded', initApp);
