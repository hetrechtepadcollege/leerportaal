const gebeden = [
  {
    id: 'fajr',
    naam: 'Fajr',
    arabisch: 'الفجر',
    betekenis: 'Het ochtendgebed',
    emoji: '🌙',
    tijd: 'Van de ochtendschemering (al-ṣubḥ al-ṣādiq) tot zonsopgang. Aanbevolen: wacht tot het licht buiten flink is uitgezaaid.',
    rakatItems: [
      { label: 'Soenna voor', type: 'soenna-mua',  aantal: 2 },
      { label: 'Farḍ',        type: 'fard',         aantal: 2 }
    ],
    belang: 'Fajr bidt men voor zonsopgang. De Profeet ﷺ zei: "Wie Fajr bidt, staat onder de bescherming van Allah."',
    bijzonder: 'In de adzān van Fajr wordt toegevoegd: "Aṣ ṣalātu gayrum minan Nawm" — Het gebed is beter dan slapen. Op deze extra zin antwoord je: "Ṣadaqta wa bararta wa bil ḥaqqi nataqṭa" — U spreekt de waarheid.'
  },
  {
    id: 'dhuhr',
    naam: 'Ẓuhr',
    arabisch: 'الظهر',
    betekenis: 'Het middaggebed',
    emoji: '☀️',
    tijd: 'Na het zenit van de zon (zawāl) tot wanneer de schaduw tweemaal de lengte van het object bereikt (exclusief de eigen schaduw bij zawāl).',
    rakatItems: [
      { label: 'Soenna voor', type: 'soenna-mua',  aantal: 4 },
      { label: 'Farḍ',        type: 'fard',         aantal: 4 },
      { label: 'Soenna na',   type: 'soenna-mua',  aantal: 2 },
      { label: 'Nafl',        type: 'nafl',         aantal: 2 }
    ],
    belang: 'Ẓuhr is een moment van bezinning midden in de dag. Het herinnert ons aan Allah temidden van onze bezigheden.',
    bijzonder: null
  },
  {
    id: 'asr',
    naam: 'ʿAṣr',
    arabisch: 'العصر',
    betekenis: 'Het namiddaggebed',
    emoji: '🌤️',
    tijd: 'Vanaf het einde van het Ẓuhr-gebed tot zonsondergang. Aanbevolen: iets later verrichten, maar niet uitstellen tot de zon geel kleurt.',
    rakatItems: [
      { label: 'Soenna voor', type: 'soenna-ghayr', aantal: 4 },
      { label: 'Farḍ',        type: 'fard',          aantal: 4 }
    ],
    belang: 'Allah noemt ʿAṣr in de Koran speciaal het "middelste gebed" (2:238). De engelen wisselen elkaar af bij ʿAṣr.',
    bijzonder: 'ʿAṣr is het gebed dat men het snelst vergeet vanwege het drukke middagprogramma. Wees alert!'
  },
  {
    id: 'maghrib',
    naam: 'Maghrib',
    arabisch: 'المغرب',
    betekenis: 'Het avondgebed',
    emoji: '🌇',
    tijd: 'Direct na zonsondergang tot het einde van de avondschemering. Aanbevolen: direct verrichten; uitstel is ongewenst.',
    rakatItems: [
      { label: 'Farḍ',      type: 'fard',        aantal: 3 },
      { label: 'Soenna na', type: 'soenna-mua',  aantal: 2 },
      { label: 'Nafl',      type: 'nafl',         aantal: 2 }
    ],
    belang: 'Maghrib markeert het einde van de dag. In Ramadan wordt bij Maghrib het vasten verbroken (iftar).',
    bijzonder: null
  },
  {
    id: 'isha',
    naam: 'ʿIshā',
    arabisch: 'العشاء',
    betekenis: 'Het nachtgebed',
    emoji: '🌃',
    tijd: 'Na de astronomische avondschemering tot het aanbreken van de ochtendschemering. Aanbevolen: een derde van de nacht; uiterlijk tot de ware middernacht.',
    rakatItems: [
      { label: 'Soenna voor', type: 'soenna-ghayr', aantal: 4 },
      { label: 'Farḍ',        type: 'fard',          aantal: 4 },
      { label: 'Soenna na',   type: 'soenna-mua',   aantal: 2 },
      { label: 'Nafl',        type: 'nafl',           aantal: 2 }
    ],
    belang: 'ʿIshā is het laatste gebed van de dag. Na ʿIshā wordt de Witr-ṣalāt gebeden, die de dag afsluit. Het is aanbevolen om ʿIshā uit te stellen tot een derde deel van de nacht.',
    bijzonder: null
  },
  {
    id: 'witr',
    naam: 'Witr',
    arabisch: 'الوتر',
    betekenis: 'Het oneven gebed',
    emoji: '⭐',
    tijd: 'Na het ʿIshā-gebed, bij voorkeur vlak voor het slapengaan. Eindigt bij het aanbreken van de ochtendschemering.',
    rakatItems: [
      { label: 'Wājib', type: 'wajib', aantal: 3 },
      { label: 'Nafl',  type: 'nafl',  aantal: 2 }
    ],
    belang: 'De Witr is wājib (essentieel) — de Profeet ﷺ liet hem nooit achterwege, ook niet op reis. Het opzettelijk achterwege laten is een ernstige fout.',
    bijzonder: 'In de derde rakaʿat wordt na de recitatie van soera al-Fātiḥa en een soera de Duʿā al-Qunūt gereciteerd. "Witr" betekent letterlijk oneven — als symbool voor de eenheid (waḥdāniyyah) van Allah.'
  }
];

const quizVragen = [
  { vraag: "Hoeveel farḍ rakaʿāt heeft het Fajr gebed?", opties: ["1", "2", "3", "4"], correct: 1 },
  { vraag: "Welk gebed heeft 3 farḍ rakaʿāt?", opties: ["Fajr", "Ẓuhr", "Maghrib", "ʿIshā"], correct: 2 },
  { vraag: "Welk gebed wordt het 'middelste gebed' (Al-Wusta) genoemd?", opties: ["Ẓuhr", "Fajr", "ʿIshā", "ʿAṣr"], correct: 3 },
  { vraag: "Na welk gebed wordt de Witr-ṣalāt gebeden?", opties: ["Maghrib", "ʿAṣr", "Fajr", "ʿIshā"], correct: 3 },
  { vraag: "Wat wordt er extra gezegd in de adzān van Fajr?", opties: ["Allāhu Akbar (extra)", "Aṣ ṣalātu gayrum minan Nawm", "Ḥayya ʿalal Falāḥ (extra)", "Lā ilāha illallāh"], correct: 1 },
  { vraag: "Hoeveel farḍ rakaʿāt heeft het Ẓuhr gebed?", opties: ["2", "3", "6", "4"], correct: 3 },
  { vraag: "Wanneer begint het Maghrib gebed?", opties: ["Bij het zenit", "Direct na zonsondergang", "Bij de avondschemering", "Na middernacht"], correct: 1 },
  { vraag: "Hoeveel totale soenna rakaʿāt heeft het ʿIshā gebed (voor en na de farḍ)?", opties: ["2", "4", "6", "8"], correct: 2 },
  { vraag: "Tijdens welke gebeurtenis werden de vijf dagelijkse gebeden verplicht gesteld?", opties: ["De Hidjra naar Medina", "De Miʿrāj (nachtelijke hemelreis)", "De Slag bij Badr", "De verovering van Mekka"], correct: 1 },
  { vraag: "Wat is de Witr-ṣalāt?", opties: ["Een farḍ gebed", "Een wājib gebed", "Een soenna mu'akkadah", "Een nafl gebed"], correct: 1 },
  { vraag: "Hoeveel voorwaarden (shurūṭ) heeft de ṣalāt?", opties: ["4", "5", "6", "7"], correct: 2 },
  { vraag: "Hoeveel totale rakaʿāt heeft het ʿIshā gebed samen met de Witr-ṣalāt?", opties: ["12", "14", "17", "19"], correct: 2 },
  { vraag: "Welke soera moet verplicht in elke rakʿat worden gereciteerd?", opties: ["Al-Ikhlāṣ", "Soera al-Fātiḥa", "Al-Baqara", "Yā-Sīn"], correct: 1 },
  { vraag: "Op welk moment is het niet toegestaan om ṣalāt te verrichten?", opties: ["Na middernacht", "Tijdens de avondschemering", "Tijdens zonsopkomst", "Na het ʿAṣr gebed"], correct: 2 },
  { vraag: "Hoeveel rakaʿāt moet je totaal inhalen als je alle vijf dagelijkse gebeden én de Witr van één dag hebt gemist?", opties: ["17", "20", "24", "28"], correct: 1 },
  { vraag: "Wat is de zesde voorwaarde van de ṣalāt?", opties: ["Het dragen van witte kleding", "De openingstakbīr (Allāhu Akbar)", "Het reciteren van soera al-Fātiḥa", "Het doen van de kniebuiging"], correct: 1 },
  { vraag: "Wanneer eindigt het Ẓuhr gebed (volgens de Ḥanafitische school)?", opties: ["Als de schaduw gelijk is aan het object", "Als de schaduw tweemaal de lengte van het object bereikt", "Bij zonsondergang", "Na één uur"], correct: 1 },
  { vraag: "Hoeveel soenna rakaʿāt heeft het ʿAṣr gebed?", opties: ["0", "2", "4", "6"], correct: 2 }
];

const weetjes = [
  {
    icon: '🌙',
    titel: 'Verplicht gesteld tijdens de Miʿrāj',
    tekst: 'De vijf dagelijkse gebeden zijn het enige religieuze gebod dat Allah de Profeet ﷺ persoonlijk gaf tijdens de Miʿrāj (nachtelijke hemelreis) — zonder tussenkomst van een engel. Alle andere geboden kwamen via openbaring op aarde.'
  },
  {
    icon: '👼',
    titel: 'Jibrīl leerde de gebedstijden',
    tekst: 'Jibrīl ʿalayhis salām demonstreerde de gebedstijden persoonlijk aan de Profeet ﷺ over twee opeenvolgende dagen: de eerste dag aan het vroegst mogelijke tijdstip, de tweede dag aan het laatste. Zo werd de volledige bandbreedte van elk tijdvenster duidelijk gemaakt.'
  },
  {
    icon: '🏆',
    titel: 'Het geliefdste deed bij Allah',
    tekst: 'Een metgezel vroeg de Profeet ﷺ welk deed Allah het meest liefheeft. Het antwoord: "Het gebed op de vastgestelde tijd (ṣalāt op zijn tijd)." Gevolgd door: het eren van de ouders, en daarna inspanning op het pad van Allah.'
  },
  {
    icon: '🌊',
    titel: 'De rivier van zuivering',
    tekst: 'De Profeet ﷺ vergeleek de ṣalāt met een grote stromende rivier voor je deur, waarin je vijf keer per dag een bad neemt. "Zou er nog vuil overblijven?" Zo wassen de vijf dagelijkse gebeden de zonden weg die zich tussentijds ophopen.'
  },
  {
    icon: '📖',
    titel: 'Alle vijf gebeden in één vers',
    tekst: 'In de Koran (17:78) worden alle vijf gebedstijden samengevat: "Onderhoud het gebed bij het neigen van de zon tot het aanbreken van de nacht, en de Koranrecitatie bij het ochtendgloren." ʿAṣr, Maghrib en ʿIshā vallen onder "neigen tot nacht"; Fajr is de "ochtendrecitatie".'
  },
  {
    icon: '🚫',
    titel: 'Verboden tijdstippen',
    tekst: 'Het is niet toegestaan om ṣalāt te verrichten tijdens: zonsopkomst (ca. 20 min.), zonsondergang (ca. 20 min.) en de ware islamitische middag (ca. 40–50 min.). Uitzondering: de actuele ʿAṣr mag bij zonsondergang nog worden verricht als die nog niet gebeden is.'
  },
  {
    icon: '🔢',
    titel: 'Witr betekent "oneven"',
    tekst: 'De naam "Witr" betekent letterlijk oneven. Het gebed heeft een oneven aantal rakaʿāt (3) als symbool voor de eenheid (waḥdāniyyah) en uniciteit van Allah. De Profeet ﷺ liet de Witr-ṣalāt nooit achterwege, ook niet op reis.'
  },
  {
    icon: '🔄',
    titel: 'Wat moet je inhalen bij een gemist gebed?',
    tekst: 'Alleen de farḍ rakaʿāt en de Witr (wājib) moeten worden ingehaald bij een gemist gebed. Soenna- en nafl-eenheden vervallen en hoeven niet te worden ingehaald. Een volledige dag omvat 20 in te halen rakaʿāt: 2 (Fajr) + 4 (Ẓuhr) + 4 (ʿAṣr) + 3 (Maghrib) + 4 (ʿIshā) + 3 (Witr).'
  }
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
  renderWeetjes();
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
  gebed.rakatItems.forEach(item => {
    rakatHTML += `
      <div class="rakat-box rakat-${item.type}">
        <div class="rb-getal">${item.aantal}</div>
        <div class="rb-label">${item.label}</div>
      </div>
    `;
  });

  const legendaHTML = `
    <div class="rakat-legenda">
      <span class="rl-item rl-fard">Farḍ</span>
      <span class="rl-item rl-soenna-mua">Essentiële soenna</span>
      <span class="rl-item rl-soenna-ghayr">Niet-essentiële soenna</span>
      <span class="rl-item rl-wajib">Wājib</span>
      <span class="rl-item rl-nafl">Nafl</span>
    </div>
  `;

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
    ${legendaHTML}

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

function renderWeetjes() {
  const container = document.getElementById('weetjesContainer');
  if (!container) return;

  weetjes.forEach(w => {
    const el = document.createElement('div');
    el.className = 'weetje-kaart';
    el.innerHTML = `
      <div class="wk-icon">${w.icon}</div>
      <div class="wk-body">
        <strong class="wk-titel">${w.titel}</strong>
        <p class="wk-tekst">${w.tekst}</p>
      </div>
    `;
    container.appendChild(el);
  });
}

document.addEventListener('DOMContentLoaded', initApp);
