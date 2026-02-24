const starsEl = document.getElementById("stars");
const levelEl = document.getElementById("level");
const modeKidBtn = document.getElementById("mode-kid");
const modeMentorBtn = document.getElementById("mode-mentor");
const modeBadgeEl = document.getElementById("mode-badge");
const factsTitleEl = document.getElementById("facts-title");
const factsListEl = document.getElementById("facts-list");
const mentorNoteCardEl = document.getElementById("mentor-note-card");
const mentorNoteEl = document.getElementById("mentor-note");
const speedTimeEl = document.getElementById("speed-time");
const speedScoreEl = document.getElementById("speed-score");
const speedBarEl = document.getElementById("speed-bar");
const speedQuestionEl = document.getElementById("speed-question");
const speedOptionsEl = document.getElementById("speed-options");
const speedFeedbackEl = document.getElementById("speed-feedback");
const speedStartBtn = document.getElementById("speed-start");
const speedNextBtn = document.getElementById("speed-next");

let stars = 0;
let currentMode = "kid";

const factsByMode = {
  kid: {
    title: "Ramadan-feitjes",
    items: [
      "Vasten in Ramadan betekent niet eten of drinken van de dageraad tot zonsondergang.",
      "Suḥūr is de vroege maaltijd vóór de vastendag; ifṭār is de maaltijd bij zonsondergang.",
      "Ramadan draait ook om delen, geduld, respect en extra aanbidding.",
      "Kinderen mogen oefenen met vasten; de verplichting begint na de puberteit.",
      "Een goede intentie (niyyah) is nodig voor een geldig vasten."
    ]
  },
  mentor: {
    title: "Ramadan-feitjes (ouder-modus)",
    items: [
      "Vasten betekent onthouding van eten en drinken tussen ochtendschemering en zonsondergang.",
      "Suḥūr en ifṭār zijn niet alleen eetmomenten, maar ook leermomenten rond discipline en dankbaarheid.",
      "Intentie (niyyah) helpt jongeren begrijpen dat aanbidding bewust en doelgericht is.",
      "Bij tijdelijke belemmeringen (zoals ziekte) ligt de nadruk op later inhalen van gemiste dagen.",
      "Voor 10-13 jaar is didactiek belangrijk: opbouwen, aanmoedigen en positieve begeleiding."
    ]
  }
};

function addStars(amount) {
  stars += amount;
  starsEl.textContent = String(stars);
  if (stars >= 15) {
    levelEl.textContent = "Ster Expert";
  } else if (stars >= 9) {
    levelEl.textContent = "Ontdekker";
  } else if (stars >= 4) {
    levelEl.textContent = "Leerling";
  }
}

function shuffleArray(arr) {
  const clone = [...arr];
  for (let i = clone.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone;
}

// Quiz game
const quizQuestions = [
  {
    question: "Wat betekent vasten tijdens Ramadan?",
    options: [
      "Van ochtendschemering tot zonsondergang niet eten en drinken",
      "Alleen in de middag niet eten",
      "Alleen snoep overslaan"
    ],
    answer: 0,
    explain:
      "Vasten overdag betekent: van ochtendschemering tot zonsondergang niet eten en drinken.",
    mentorDetail:
      "Koppel dit aan kloktijden en lokale gebedskalender zodat leerlingen de grens van de vastentijd concreet begrijpen."
  },
  {
    question: "Wat is Suḥūr?",
    options: [
      "Een avondspel",
      "Een vroege maaltijd voor de vastendag",
      "Een feestdag na Ramadan"
    ],
    answer: 1,
    explain:
      "Suḥūr is de maaltijd voor de dag begint. Deze maaltijd helpt je je goed voor te bereiden.",
    mentorDetail:
      "Benadruk dat suḥūr ook praktisch helpt: structuur, energie en voorbereiding op een lange schooldag."
  },
  {
    question: "Wat is Tarāwīḥ?",
    options: ["Een nachtgebed in Ramadan", "Een speciale maaltijd", "Een feestdag na Ramadan"],
    answer: 0,
    explain:
      "Tarāwīḥ is een extra gebed in de Ramadan-nachten.",
    mentorDetail:
      "Bespreek dat kinderen stap voor stap kunnen meedoen en korte doelen kunnen zetten."
  },
  {
    question: "Wat is belangrijk bij intentie (niyyah)?",
    options: [
      "Intentie maakt niet uit",
      "Intentie hoort bij een bewuste vastendag",
      "Intentie is alleen voor volwassenen die niet vasten"
    ],
    answer: 1,
    explain:
      "Intentie (niyyah) is belangrijk voor een bewuste en geldige vastendag.",
    mentorDetail:
      "Laat kinderen de intentie (niyyah) in eigen woorden formuleren; dat vergroot begrip zonder te veel abstract taalgebruik."
  },
  {
    question: "Welke uitspraak over kinderen klopt?",
    options: [
      "Vasten is al verplicht vanaf 6 jaar",
      "Kinderen mogen nooit oefenen met vasten",
      "Kinderen kunnen oefenen; verplichting is pas na de puberteit"
    ],
    answer: 2,
    explain:
      "Kinderen kunnen rustig oefenen met vasten, terwijl de verplichting later geldt.",
    mentorDetail:
      "Leg de nadruk op veilige opbouw, gezondheid en motivatie in plaats van druk."
  },
  {
    question: "Wat hoort ook bij Ramadan, naast niet eten en drinken?",
    options: ["Meer ruzie maken", "Delen, geduld en goed gedrag", "Minder helpen thuis"],
    answer: 1,
    explain:
      "Ramadan draait ook om karakter, goede daden en aandacht voor anderen.",
    mentorDetail:
      "Maak het meetbaar met kleine weekopdrachten: delen, hulp thuis en vriendelijk taalgebruik."
  },
  {
    question: "Wat als iemand tijdelijk niet kan vasten (bijvoorbeeld door ziekte)?",
    options: [
      "Nooit meer vasten",
      "De gemiste dagen later inhalen",
      "Altijd meteen fidyah betalen"
    ],
    answer: 1,
    explain:
      "Als je tijdelijk niet kunt vasten, haal je de gemiste dagen later in.",
    mentorDetail:
      "Dit helpt leerlingen snappen dat regels ook rekening houden met haalbaarheid en gezondheid."
  }
];

let quizIndex = 0;
const quizQuestionEl = document.getElementById("quiz-question");
const quizOptionsEl = document.getElementById("quiz-options");
const quizFeedbackEl = document.getElementById("quiz-feedback");
const nextQuestionBtn = document.getElementById("next-question");

function renderQuestion() {
  const q = quizQuestions[quizIndex];
  quizQuestionEl.textContent = q.question;
  quizOptionsEl.innerHTML = "";
  quizFeedbackEl.textContent = "";
  quizFeedbackEl.className = "feedback";

  q.options.forEach((option, idx) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = option;
    btn.addEventListener("click", () => answerQuestion(idx));
    quizOptionsEl.appendChild(btn);
  });
}

function answerQuestion(choiceIndex) {
  const current = quizQuestions[quizIndex];
  const isCorrect = choiceIndex === current.answer;

  let feedbackText = isCorrect ? `Goed gedaan! ${current.explain}` : `Bijna! ${current.explain}`;
  if (currentMode === "mentor" && current.mentorDetail) {
    feedbackText += ` Extra uitleg: ${current.mentorDetail}`;
  }

  quizFeedbackEl.textContent = feedbackText;
  quizFeedbackEl.className = `feedback ${isCorrect ? "good" : "bad"}`;

  if (isCorrect) addStars(2);

  Array.from(quizOptionsEl.children).forEach((btn) => {
    btn.disabled = true;
  });
}

nextQuestionBtn.addEventListener("click", () => {
  quizIndex = (quizIndex + 1) % quizQuestions.length;
  renderQuestion();
});

// Memory match game
const memoryData = [
  ["Suḥūr", "Vroege maaltijd voor de vastendag"],
  ["Ifṭār", "Maaltijd bij zonsondergang"],
  ["Tarāwīḥ", "Extra gebed in Ramadan-nachten"],
  ["Ṣadaqah", "Vrijwillig iets geven aan anderen"],
  ["Laylat al-Qadr", "Een bijzondere nacht in de laatste 10 nachten"]
];

let memoryCards = [];
let firstPick = null;
let lockBoard = false;
let memoryMatches = 0;
const memoryGridEl = document.getElementById("memory-grid");
const memoryFeedbackEl = document.getElementById("memory-feedback");

function setupMemory() {
  memoryCards = [];
  memoryMatches = 0;
  memoryFeedbackEl.textContent = "";
  firstPick = null;
  lockBoard = false;

  memoryData.forEach((pair, pairId) => {
    memoryCards.push({ text: pair[0], pairId, matched: false });
    memoryCards.push({ text: pair[1], pairId, matched: false });
  });

  memoryCards.sort(() => Math.random() - 0.5);
  memoryGridEl.innerHTML = "";

  memoryCards.forEach((card, index) => {
    const button = document.createElement("button");
    button.className = "memory-card";
    button.textContent = "?";
    button.dataset.index = String(index);
    button.addEventListener("click", () => revealCard(index));
    memoryGridEl.appendChild(button);
  });
}

function revealCard(index) {
  if (lockBoard) return;

  const card = memoryCards[index];
  const el = memoryGridEl.children[index];

  if (card.matched || el.classList.contains("revealed")) return;

  el.textContent = card.text;
  el.classList.add("revealed");

  if (firstPick === null) {
    firstPick = index;
    return;
  }

  const firstCard = memoryCards[firstPick];
  const firstEl = memoryGridEl.children[firstPick];

  if (firstCard.pairId === card.pairId) {
    card.matched = true;
    firstCard.matched = true;
    el.classList.add("matched");
    firstEl.classList.add("matched");
    memoryMatches += 1;
    addStars(1);
    memoryFeedbackEl.textContent = "Top! Dat is een goede match.";
    if (currentMode === "mentor") {
      memoryFeedbackEl.textContent += " Benoem samen waarom dit begrip belangrijk is in Ramadan.";
    }
    memoryFeedbackEl.className = "feedback good";
    firstPick = null;

    if (memoryMatches === memoryData.length) {
      memoryFeedbackEl.textContent = "Alles gevonden! Geweldig gedaan.";
      addStars(3);
      setTimeout(setupMemory, 1300);
    }
    return;
  }

  lockBoard = true;
  memoryFeedbackEl.textContent = "Niet hetzelfde paar. Probeer opnieuw!";
  if (currentMode === "mentor") {
    memoryFeedbackEl.textContent += " Laat het kind hardop uitleggen wat elk begrip betekent.";
  }
  memoryFeedbackEl.className = "feedback bad";

  setTimeout(() => {
    el.textContent = "?";
    firstEl.textContent = "?";
    el.classList.remove("revealed");
    firstEl.classList.remove("revealed");
    firstPick = null;
    lockBoard = false;
  }, 900);
}

// Order game
const correctOrder = [
  "Suḥūr eten",
  "Intentie maken voor de vastendag",
  "Overdag niet eten en drinken, en goed gedrag tonen",
  "Ifṭār bij zonsondergang",
  "Avondgebed en rust"
];

let currentOrder = [];
const orderListEl = document.getElementById("order-list");
const orderFeedbackEl = document.getElementById("order-feedback");
const checkOrderBtn = document.getElementById("check-order");
const shuffleOrderBtn = document.getElementById("shuffle-order");

function shuffleOrder() {
  currentOrder = [...correctOrder].sort(() => Math.random() - 0.5);
  renderOrder();
  orderFeedbackEl.textContent = "";
  orderFeedbackEl.className = "feedback";
}

function renderOrder() {
  orderListEl.innerHTML = "";
  currentOrder.forEach((item, i) => {
    const li = document.createElement("li");
    li.className = "order-item";

    const text = document.createElement("span");
    text.textContent = item;

    const controls = document.createElement("div");

    const up = document.createElement("button");
    up.className = "move";
    up.textContent = "Omhoog";
    up.disabled = i === 0;
    up.addEventListener("click", () => moveItem(i, -1));

    const down = document.createElement("button");
    down.className = "move";
    down.textContent = "Omlaag";
    down.disabled = i === currentOrder.length - 1;
    down.addEventListener("click", () => moveItem(i, 1));

    controls.appendChild(up);
    controls.appendChild(down);
    li.appendChild(text);
    li.appendChild(controls);
    orderListEl.appendChild(li);
  });
}

function moveItem(index, direction) {
  const newIndex = index + direction;
  [currentOrder[index], currentOrder[newIndex]] = [currentOrder[newIndex], currentOrder[index]];
  renderOrder();
}

function checkOrder() {
  const isCorrect = currentOrder.every((step, index) => step === correctOrder[index]);
  if (isCorrect) {
    orderFeedbackEl.textContent = "Perfect! De volgorde klopt helemaal.";
    if (currentMode === "mentor") {
      orderFeedbackEl.textContent += " Bespreek waarom intentie en suḥūr aan het begin van de dag staan.";
    }
    orderFeedbackEl.className = "feedback good";
    addStars(4);
  } else {
    orderFeedbackEl.textContent = "Nog niet helemaal goed. Denk aan vroeg naar laat.";
    if (currentMode === "mentor") {
      orderFeedbackEl.textContent += " Tip: laat eerst ontbijt/geen eten overdag/ifṭār als ankers kiezen.";
    }
    orderFeedbackEl.className = "feedback bad";
  }
}

// True/False game
const tfStatements = [
  {
    text: "Laylat al-Qadr wordt gezocht in de laatste tien nachten van Ramadan.",
    isTrue: true,
    explain: "Klopt. Veel mensen besteden in die nachten extra aandacht aan aanbidding.",
    mentorDetail: "Laat kinderen benoemen welke goede daden ze in die periode extra willen doen."
  },
  {
    text: "Tijdens Ramadan draait alles alleen om honger hebben.",
    isTrue: false,
    explain: "Klopt niet. Het gaat ook om geduld, vriendelijkheid en goede daden.",
    mentorDetail: "Laat het kind drie voorbeelden noemen van goed gedrag in Ramadan."
  },
  {
    text: "Ṣadaqah betekent dat je vrijwillig geeft of helpt.",
    isTrue: true,
    explain: "Klopt. Ṣadaqah kan geld zijn, maar ook hulp, tijd of vriendelijkheid.",
    mentorDetail: "Laat een kindvriendelijk voorbeeld geven dat vandaag haalbaar is."
  },
  {
    text: "Tarāwīḥ is een maaltijd na schooltijd.",
    isTrue: false,
    explain: "Klopt niet. Tarāwīḥ is een gebed in de Ramadan-avond.",
    mentorDetail: "Koppel het verschil tussen gebed, maaltijd en feestmomenten."
  },
  {
    text: "Intentie (niyyah) betekent dat je bewust de intentie maakt om te vasten.",
    isTrue: true,
    explain: "Klopt. Intentie (niyyah) is een bewuste intentie.",
    mentorDetail: "Laat het kind de intentie in een korte eigen zin omschrijven."
  },
  {
    text: "Ifṭār is de maaltijd bij zonsondergang.",
    isTrue: true,
    explain: "Klopt. Bij zonsondergang wordt het vasten verbroken met Ifṭār.",
    mentorDetail: "Koppel dit aan dagritme: Suḥūr in de ochtend en Ifṭār in de avond."
  },
  {
    text: "Tijdens Ramadan is vriendelijk gedrag niet zo belangrijk.",
    isTrue: false,
    explain: "Klopt niet. Juist vriendelijk en respectvol gedrag is heel belangrijk.",
    mentorDetail: "Laat drie voorbeelden geven van vriendelijk gedrag op school of thuis."
  },
  {
    text: "Als je tijdelijk ziek bent, kun je gemiste vastendagen later inhalen.",
    isTrue: true,
    explain: "Klopt. Bij tijdelijke redenen worden dagen later ingehaald.",
    mentorDetail: "Benadruk dat gezondheid en haalbaarheid altijd meetellen."
  },
  {
    text: "Suḥūr is alleen voor volwassenen en nooit voor jongeren.",
    isTrue: false,
    explain: "Klopt niet. Ook jongeren die oefenen kunnen Suḥūr nemen.",
    mentorDetail: "Bespreek wat een rustige, voedzame Suḥūr kan zijn."
  },
  {
    text: "Qurʾān lezen in kleine dagelijkse stukjes is een goede aanpak.",
    isTrue: true,
    explain: "Klopt. Kleine vaste stapjes werken vaak heel goed.",
    mentorDetail: "Laat een mini-doel kiezen, bijvoorbeeld een paar verzen per dag."
  },
  {
    text: "Ramadan gaat alleen over niet eten en drinken.",
    isTrue: false,
    explain: "Klopt niet. Ramadan gaat ook over aanbidding, karakter en goede daden.",
    mentorDetail: "Vraag welke twee karakterdoelen het kind deze week wil oefenen."
  }
];

let tfIndex = 0;
const tfStatementEl = document.getElementById("tf-statement");
const tfFeedbackEl = document.getElementById("tf-feedback");
const tfTrueBtn = document.getElementById("tf-true");
const tfFalseBtn = document.getElementById("tf-false");
const tfNextBtn = document.getElementById("tf-next");

function renderTrueFalse() {
  const statement = tfStatements[tfIndex];
  tfStatementEl.textContent = statement.text;
  tfFeedbackEl.textContent = "";
  tfFeedbackEl.className = "feedback";
  tfTrueBtn.disabled = false;
  tfFalseBtn.disabled = false;
}

function answerTrueFalse(choice) {
  const statement = tfStatements[tfIndex];
  const isCorrect = choice === statement.isTrue;
  let feedbackText = isCorrect ? `Top! ${statement.explain}` : `Bijna! ${statement.explain}`;

  if (currentMode === "mentor") {
    feedbackText += ` Extra uitleg: ${statement.mentorDetail}`;
  }

  tfFeedbackEl.textContent = feedbackText;
  tfFeedbackEl.className = `feedback ${isCorrect ? "good" : "bad"}`;

  if (isCorrect) addStars(2);
  tfTrueBtn.disabled = true;
  tfFalseBtn.disabled = true;
}

tfTrueBtn.addEventListener("click", () => answerTrueFalse(true));
tfFalseBtn.addEventListener("click", () => answerTrueFalse(false));
tfNextBtn.addEventListener("click", () => {
  tfIndex = (tfIndex + 1) % tfStatements.length;
  renderTrueFalse();
});

// Scenario game
const scenarios = [
  {
    text: "Je vriend is prikkelbaar tijdens het vasten en snauwt terug. Wat is de beste reactie?",
    options: ["Terug snauwen", "Rustig blijven en vriendelijk reageren", "Iedereen uitlachen"],
    answer: 1,
    explain: "Sterk! Rust en vriendelijk blijven past bij de geest van Ramadan.",
    mentorDetail: "Gebruik dit om emotieregulatie te oefenen in lastige momenten."
  },
  {
    text: "Je klas doet een inzameling in Ramadan. Wat is een sterke keuze?",
    options: ["Niet meedoen en grappen maken", "Een klein bedrag of hulp geven", "Anderen tegenhouden"],
    answer: 1,
    explain: "Goed gekozen. Kleine bijdragen en hulp passen bij de Ramadan-sfeer.",
    mentorDetail: "Bespreek dat bijdragen ook tijd, hulp en aandacht kan zijn."
  },
  {
    text: "Je bent moe bij tarāwīḥ. Wat is een verstandige keuze?",
    options: ["Alles opgeven", "Kort meedoen en rustig opbouwen", "Anderen storen"],
    answer: 1,
    explain: "Mooi. Rustig opbouwen is vaak beter dan forceren of afhaken.",
    mentorDetail: "Koppel dit aan haalbare doelen en positieve routine."
  },
  {
    text: "Een klasgenoot is zijn lunch vergeten. Wat doe je?",
    options: ["Uitlachen", "Helpen en iets delen", "Negeren"],
    answer: 1,
    explain: "Sterk. Helpen en delen laat vriendelijkheid en zorg zien.",
    mentorDetail: "Laat kinderen benoemen hoe ze op school praktisch kunnen helpen."
  },
  {
    text: "Thuis is het druk vlak voor ifṭār en iemand maakt een fout. Wat is de beste houding?",
    options: ["Boos reageren", "Geduldig blijven en rustig helpen", "Weglopen en klagen"],
    answer: 1,
    explain: "Goed. Geduld en rustig helpen zorgen voor een fijne sfeer.",
    mentorDetail: "Bespreek hoe je eerst kunt kalmeren voor je reageert."
  },
  {
    text: "Je ziet online een kwetsende reactie over iemand. Wat past het best?",
    options: ["Meedoen met pesten", "Respectvol blijven en positief reageren", "Nog meer roddels delen"],
    answer: 1,
    explain: "Mooi. Respectvol en vriendelijk reageren past bij goed karakter.",
    mentorDetail: "Koppel dit aan digitale adab en verantwoordelijkheid."
  },
  {
    text: "Je jongere broer of zus wil meedoen met een goede daad. Wat doe je?",
    options: ["Zeggen dat hij/zij te klein is", "Samen een kleine goede daad plannen", "Negeren"],
    answer: 1,
    explain: "Top. Samen kleine goede daden doen motiveert en verbindt.",
    mentorDetail: "Laat een concreet gezinsdoel kiezen voor deze week."
  },
  {
    text: "Iemand zegt iets onaardigs tegen jou op school. Wat is de beste keuze?",
    options: ["Meteen terug schelden", "Rustig blijven en netjes reageren", "Anderen erbij halen om te lachen"],
    answer: 1,
    explain: "Sterk. Rustig en netjes reageren laat zelfbeheersing zien.",
    mentorDetail: "Bespreek taalzinnen om respectvol grenzen aan te geven."
  },
  {
    text: "Na ifṭār is er nog veel eten over. Wat is verstandig?",
    options: ["Alles weggooien", "Bewaren of delen met anderen", "Het laten staan tot het bederft"],
    answer: 1,
    explain: "Goed gekozen. Bewaren of delen voorkomt verspilling.",
    mentorDetail: "Koppel dit aan dankbaarheid en verantwoordelijkheid."
  },
  {
    text: "Je merkt dat iemand alleen zit in de moskee of klas. Wat past bij goed gedrag?",
    options: ["Negeren", "Even groeten en erbij betrekken", "Over die persoon fluisteren"],
    answer: 1,
    explain: "Mooi. Iemand betrekken is een vorm van vriendelijkheid.",
    mentorDetail: "Vraag hoe kleine sociale aandacht groot verschil kan maken."
  },
  {
    text: "Je hebt een drukke dag en weinig tijd. Hoe kun je toch iets goeds doen?",
    options: ["Niets doen", "Kleine haalbare goede daad kiezen", "Anderen afsnauwen"],
    answer: 1,
    explain: "Top. Kleine goede daden tellen ook mee.",
    mentorDetail: "Laat per dag 1 mini-goede-daad formuleren."
  },
  {
    text: "Iemand vraagt hulp bij huiswerk terwijl jij moe bent. Wat is een mooie middenweg?",
    options: ["Nee schreeuwen", "Kort helpen of een geschikt moment afspreken", "De persoon uitlachen"],
    answer: 1,
    explain: "Goed. Helpen kan ook slim en haalbaar gepland worden.",
    mentorDetail: "Bespreek grenzen stellen met vriendelijkheid."
  }
];

let scenarioIndex = 0;
const scenarioTextEl = document.getElementById("scenario-text");
const scenarioOptionsEl = document.getElementById("scenario-options");
const scenarioFeedbackEl = document.getElementById("scenario-feedback");
const scenarioNextBtn = document.getElementById("scenario-next");

function renderScenario() {
  const scenario = scenarios[scenarioIndex];
  scenarioTextEl.textContent = scenario.text;
  scenarioFeedbackEl.textContent = "";
  scenarioFeedbackEl.className = "feedback";
  scenarioOptionsEl.innerHTML = "";

  scenario.options.forEach((option, idx) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = option;
    btn.addEventListener("click", () => answerScenario(idx));
    scenarioOptionsEl.appendChild(btn);
  });
}

function answerScenario(choiceIndex) {
  const scenario = scenarios[scenarioIndex];
  const isCorrect = choiceIndex === scenario.answer;
  let feedbackText = isCorrect ? `Top! ${scenario.explain}` : `Bijna! ${scenario.explain}`;

  if (currentMode === "mentor") {
    feedbackText += ` Extra uitleg: ${scenario.mentorDetail}`;
  }

  scenarioFeedbackEl.textContent = feedbackText;
  scenarioFeedbackEl.className = `feedback ${isCorrect ? "good" : "bad"}`;

  if (isCorrect) addStars(2);
  Array.from(scenarioOptionsEl.children).forEach((btn) => {
    btn.disabled = true;
  });
}

scenarioNextBtn.addEventListener("click", () => {
  scenarioIndex = (scenarioIndex + 1) % scenarios.length;
  renderScenario();
});

// Speed round game
const speedPool = [
  {
    question: "Wat is suḥūr?",
    options: ["Een vroege maaltijd", "Een feestdag", "Een gebed na zonsondergang"],
    answer: 0,
    explain: "Suḥūr is de vroege maaltijd voor de vastendag.",
    mentorDetail: "Vraag welk ontbijt lang energie geeft."
  },
  {
    question: "Wat is Tarāwīḥ?",
    options: ["Een nachtgebed", "Een ontbijtgerecht", "Een feestdag"],
    answer: 0,
    explain: "Tarāwīḥ is een extra gebed in de Ramadan-avond.",
    mentorDetail: "Vraag hoe je kinderen rustig kunt laten wennen aan meedoen."
  },
  {
    question: "Wat hoort goed bij Ramadan?",
    options: ["Ruzie maken", "Delen en vriendelijk zijn", "Anderen buitensluiten"],
    answer: 1,
    explain: "Goed gedrag en delen zijn belangrijk.",
    mentorDetail: "Laat een praktisch voorbeeld geven voor vandaag."
  },
  {
    question: "Wat betekent intentie (niyyah)?",
    options: ["Een intentie", "Een toetje", "Een sportoefening"],
    answer: 0,
    explain: "Intentie (niyyah) is je bewuste intentie.",
    mentorDetail: "Laat het kind een korte intentie-zin maken."
  },
  {
    question: "Wanneer breek je de vasten met ifṭār?",
    options: ["Bij zonsopgang", "Bij zonsondergang", "Midden op de dag"],
    answer: 1,
    explain: "Ifṭār is bij zonsondergang.",
    mentorDetail: "Koppel dit aan tijdsbesef en dagindeling."
  },
  {
    question: "Wat doe je als je tijdelijk niet kunt vasten?",
    options: ["Later inhalen", "Nooit meer vasten", "Regels negeren"],
    answer: 0,
    explain: "Bij tijdelijke reden kun je de dag later inhalen.",
    mentorDetail: "Benadruk dat gezondheid altijd meetelt."
  },
  {
    question: "Wat is Laylat al-Qadr?",
    options: ["Een bijzondere nacht", "Een maaltijd", "Een schoolvak"],
    answer: 0,
    explain: "Laylat al-Qadr is een bijzondere nacht in Ramadan.",
    mentorDetail: "Laat het kind benoemen welke extra aanbidding het dan wil doen."
  },
  {
    question: "Wat is ṣadaqah?",
    options: ["Vrijwillig geven of helpen", "Een type spel", "Een rustdag"],
    answer: 0,
    explain: "Sadaqah is vrijwillig geven of helpen.",
    mentorDetail: "Bespreek dat hulp en vriendelijkheid ook ṣadaqah kunnen zijn."
  },
  {
    question: "Wat betekent ṣabr?",
    options: ["Geduld en zelfbeheersing", "Altijd winnen", "Zo hard mogelijk praten"],
    answer: 0,
    explain: "Sabr gaat over geduld en zelfbeheersing.",
    mentorDetail: "Bespreek hoe je kalm blijft in een lastig moment."
  },
  {
    question: "Wat doe je met je intentie (niyyah)?",
    options: ["Je maakt een bewuste intentie", "Je negeert het", "Je stelt het uit tot morgenavond"],
    answer: 0,
    explain: "Intentie (niyyah) is je bewuste intentie om te vasten.",
    mentorDetail: "Laat het kind de intentie in eigen woorden formuleren."
  },
  {
    question: "Welke keuze past bij goed gedrag in Ramadan?",
    options: ["Sneller boos worden", "Anderen helpen", "Pesten op school"],
    answer: 1,
    explain: "Anderen helpen past goed bij Ramadan.",
    mentorDetail: "Vraag naar een concrete hulpactie voor vandaag."
  },
  {
    question: "Welke keuze past bij Qurʾān-tijd in Ramadan?",
    options: ["Elke dag een klein stukje lezen", "Nooit openen", "Alleen klagen dat het lang duurt"],
    answer: 0,
    explain: "Kleine, vaste stapjes werken vaak het best.",
    mentorDetail: "Laat een haalbaar leesdoel per dag formuleren."
  },
  {
    question: "Wat kun je oefenen als je nog jong bent?",
    options: ["Rustig opbouwen", "Nooit iets proberen", "Alles tegelijk forceren"],
    answer: 0,
    explain: "Rustig opbouwen is slim en veilig.",
    mentorDetail: "Bespreek wat een haalbaar oefendoel is."
  },
  {
    question: "Wat betekent 'inhalen' bij vasten?",
    options: ["Een spel winnen", "Gemiste dag later vasten", "Meteen opgeven"],
    answer: 1,
    explain: "Inhalen betekent dat je een gemiste dag later vast.",
    mentorDetail: "Koppel dit aan verantwoordelijkheid en planning."
  },
  {
    question: "Wat is een goede online keuze in Ramadan?",
    options: ["Positief reageren", "Pesten in comments", "Roddels verspreiden"],
    answer: 0,
    explain: "Positief en respectvol reageren past bij goed gedrag.",
    mentorDetail: "Koppel dit aan digitale omgangsvormen en verantwoordelijkheid."
  },
  {
    question: "Welke eigenschap hoort bij ṣabr (geduld)?",
    options: ["Kalm blijven bij irritatie", "Sneller boos worden", "Anderen uitlachen"],
    answer: 0,
    explain: "Sabr betekent onder andere kalm en standvastig blijven.",
    mentorDetail: "Laat het kind een voorbeeld noemen van zelfcontrole."
  },
  {
    question: "Wat helpt om gebed niet te vergeten op een drukke dag?",
    options: ["Vooruit plannen", "Alles uitstellen", "Geen ritme hebben"],
    answer: 0,
    explain: "Vooruit plannen helpt om je dag en aanbidding te organiseren.",
    mentorDetail: "Laat een simpele dagplanning maken met vaste momenten."
  },
  {
    question: "Wat hoort bij een sterke Ramadan-routine?",
    options: ["Doelen en regelmaat", "Alles op gevoel doen", "Geen planning"],
    answer: 0,
    explain: "Doelen en regelmaat helpen je om vol te houden.",
    mentorDetail: "Laat het kind 2 haalbare routines kiezen."
  },
  {
    question: "Wat doe je als een vriend moe is door vasten?",
    options: ["Begrip tonen", "Uitlachen", "Boos worden"],
    answer: 0,
    explain: "Begrip en vriendelijkheid passen bij Ramadan.",
    mentorDetail: "Vraag welk gedrag steunend voelt."
  },
  {
    question: "Welke uitspraak klopt?",
    options: ["Ramadan gaat ook over karakter", "Ramadan gaat alleen over eten", "Ramadan heeft geen regels"],
    answer: 0,
    explain: "Ramadan draait ook om karakter en goede daden.",
    mentorDetail: "Laat voorbeelden van karakterdoelen noemen."
  },
  {
    question: "Wat helpt bij een goede suḥūr?",
    options: ["Rustig en voedzaam eten", "Alleen snoep eten", "Niets drinken"],
    answer: 1,
    explain: "Een rustige, voedzame suḥūr helpt je de dag door.",
    mentorDetail: "Bespreek praktische keuzes voor schooldagen."
  },
  {
    question: "Wat is slim tijdens een lastige vastendag?",
    options: ["Meer ruzie zoeken", "Geduld oefenen", "Iedereen negeren"],
    answer: 1,
    explain: "Geduld oefenen is een sterke keuze.",
    mentorDetail: "Laat een coping-tip bedenken voor moeilijke momenten."
  },
  {
    question: "Wat helpt bij schoolstress tijdens het vasten?",
    options: ["Panieken", "Rustig ademhalen en plannen", "Stoppen met alles"],
    answer: 1,
    explain: "Rustig ademhalen en plannen helpt je focus te houden.",
    mentorDetail: "Koppel dit aan zelfregulatie en haalbare taken."
  },
  {
    question: "Welke volgorde klopt?",
    options: ["Suḥūr -> dag -> ifṭār", "Ifṭār -> middag -> suḥūr", "Dag -> suḥūr -> ifṭār"],
    answer: 0,
    explain: "De logische volgorde is suḥūr, dag, ifṭār.",
    mentorDetail: "Gebruik tijdlijnwoorden: eerst, daarna, tenslotte."
  },
  {
    question: "Wat is een goede klas-houding in Ramadan?",
    options: ["Respect voor elkaar", "Onrust maken", "Grapjes ten koste van anderen"],
    answer: 0,
    explain: "Respect voor elkaar is belangrijk.",
    mentorDetail: "Verbind dit aan klasafspraken en sociale veiligheid."
  },
  {
    question: "Waarom is intentie (niyyah) handig voor kinderen?",
    options: ["Het maakt doelen duidelijk", "Het is onbelangrijk", "Het maakt alles moeilijk"],
    answer: 0,
    explain: "Intentie (niyyah) helpt je doelgericht en bewust te handelen.",
    mentorDetail: "Laat het kind een dagdoel koppelen aan de intentie."
  },
  {
    question: "Wat doe je bij een foutje tijdens leren?",
    options: ["Rustig opnieuw proberen", "Stoppen met leren", "Anderen de schuld geven"],
    answer: 0,
    explain: "Opnieuw proberen helpt je groeien.",
    mentorDetail: "Leg de link met groeimindset en geduld."
  },
  {
    question: "Wat is beter voor sfeer thuis?",
    options: ["Vriendelijk praten", "Snauwen", "Iedereen negeren"],
    answer: 0,
    explain: "Vriendelijk praten helpt de sfeer positief te houden.",
    mentorDetail: "Bespreek voorbeeldzinnen voor vriendelijk taalgebruik."
  },
  {
    question: "Wat betekent 'tijdelijk niet kunnen vasten'?",
    options: ["Nu niet, later inhalen", "Nooit meer vasten", "Regels tellen niet"],
    answer: 0,
    explain: "Bij tijdelijke reden kun je later inhalen.",
    mentorDetail: "Benadruk balans tussen regels en gezondheid."
  },
  {
    question: "Wat past bij de laatste tien nachten van Ramadan?",
    options: ["Extra aanbidding en du'a", "Minder aandacht voor gebed", "Alleen langer gamen"],
    answer: 0,
    explain: "Veel mensen richten zich dan extra op aanbidding en smeekbeden.",
    mentorDetail: "Bespreek haalbare avondroutines voor kinderen."
  },
  {
    question: "Wat is een slim doel voor een kind in Ramadan?",
    options: ["Elke dag één kleine goede daad", "Hele dag klagen", "Niets plannen"],
    answer: 0,
    explain: "Kleine, haalbare doelen werken vaak het beste.",
    mentorDetail: "Laat doelen kort en meetbaar formuleren."
  }
];

const speedCategories = ["kennis", "gedrag", "routine", "reflectie"];

function getSpeedCategory(questionText) {
  const text = questionText.toLowerCase();

  if (text.includes("wat is") || text.includes("wat betekent") || text.includes("welke uitspraak")) {
    return "kennis";
  }

  if (
    text.includes("vriend") ||
    text.includes("houding") ||
    text.includes("sfeer") ||
    text.includes("online") ||
    text.includes("gedrag")
  ) {
    return "gedrag";
  }

  if (
    text.includes("volgorde") ||
    text.includes("routine") ||
    text.includes("planning") ||
    text.includes("schoolstress") ||
    text.includes("gebed niet te vergeten")
  ) {
    return "routine";
  }

  return "reflectie";
}

function buildBalancedSpeedQueue() {
  const buckets = {
    kennis: [],
    gedrag: [],
    routine: [],
    reflectie: []
  };

  speedPool.forEach((item) => {
    const category = getSpeedCategory(item.question);
    buckets[category].push(item);
  });

  speedCategories.forEach((category) => {
    buckets[category] = shuffleArray(buckets[category]);
  });

  const cycle = shuffleArray(speedCategories);
  const queue = [];
  let remaining = speedPool.length;

  while (remaining > 0) {
    cycle.forEach((category) => {
      const candidate = buckets[category].pop();
      if (candidate) {
        queue.push(candidate);
        remaining -= 1;
      }
    });
  }

  return queue;
}

const speedTotalTime = 45;
let speedTimeLeft = speedTotalTime;
let speedCorrect = 0;
let speedTimerId = null;
let speedRunning = false;
let speedQueue = [];
let speedCurrent = null;
let lastSpeedQuestion = "";

function updateSpeedUI() {
  speedTimeEl.textContent = String(speedTimeLeft);
  speedScoreEl.textContent = String(speedCorrect);
  speedBarEl.style.width = `${(speedTimeLeft / speedTotalTime) * 100}%`;
}

function renderSpeedQuestion() {
  if (!speedRunning) return;

  if (speedQueue.length === 0) {
    speedQueue = buildBalancedSpeedQueue();
  }

  if (speedQueue[0].question === lastSpeedQuestion && speedQueue.length > 1) {
    const alternativeIndex = speedQueue.findIndex((item) => item.question !== lastSpeedQuestion);
    if (alternativeIndex > 0) {
      const [alternative] = speedQueue.splice(alternativeIndex, 1);
      speedQueue.unshift(alternative);
    }
  }

  speedCurrent = speedQueue.shift();
  lastSpeedQuestion = speedCurrent.question;
  speedQuestionEl.textContent = speedCurrent.question;
  speedFeedbackEl.textContent = "";
  speedFeedbackEl.className = "feedback";
  speedOptionsEl.innerHTML = "";

  speedCurrent.options.forEach((option, idx) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = option;
    btn.addEventListener("click", () => answerSpeedQuestion(idx));
    speedOptionsEl.appendChild(btn);
  });
}

function endSpeedRound() {
  speedRunning = false;
  if (speedTimerId) {
    clearInterval(speedTimerId);
    speedTimerId = null;
  }

  speedOptionsEl.innerHTML = "";
  speedQuestionEl.textContent = "Ronde klaar!";
  let summary = `Je had ${speedCorrect} goede antwoorden in 45 seconden.`;
  if (speedCorrect >= 6) {
    addStars(3);
    summary += " Bonus! +3 sterren voor een superscore.";
  }
  if (currentMode === "mentor") {
    summary += " Bespreek kort welke vraag het lastigst was en waarom.";
  }
  speedFeedbackEl.textContent = summary;
  speedFeedbackEl.className = "feedback good";
}

function startSpeedRound() {
  if (speedTimerId) {
    clearInterval(speedTimerId);
  }

  speedRunning = true;
  speedTimeLeft = speedTotalTime;
  speedCorrect = 0;
  speedQueue = buildBalancedSpeedQueue();
  speedCurrent = null;
  lastSpeedQuestion = "";
  speedFeedbackEl.textContent = "";
  speedFeedbackEl.className = "feedback";
  updateSpeedUI();
  renderSpeedQuestion();

  speedTimerId = setInterval(() => {
    speedTimeLeft -= 1;
    updateSpeedUI();
    if (speedTimeLeft <= 0) {
      endSpeedRound();
    }
  }, 1000);
}

function answerSpeedQuestion(choiceIndex) {
  if (!speedRunning || !speedCurrent) return;

  const isCorrect = choiceIndex === speedCurrent.answer;
  let feedbackText = isCorrect ? `Top! ${speedCurrent.explain}` : `Bijna! ${speedCurrent.explain}`;

  if (currentMode === "mentor") {
    feedbackText += ` Extra uitleg: ${speedCurrent.mentorDetail}`;
  }

  if (isCorrect) {
    speedCorrect += 1;
    addStars(1);
  }

  speedFeedbackEl.textContent = feedbackText;
  speedFeedbackEl.className = `feedback ${isCorrect ? "good" : "bad"}`;
  updateSpeedUI();

  Array.from(speedOptionsEl.children).forEach((btn) => {
    btn.disabled = true;
  });
}

speedStartBtn.addEventListener("click", startSpeedRound);
speedNextBtn.addEventListener("click", () => {
  if (speedRunning) {
    renderSpeedQuestion();
  }
});

function renderFacts() {
  const modeData = factsByMode[currentMode];
  factsTitleEl.textContent = modeData.title;
  factsListEl.innerHTML = "";
  modeData.items.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    factsListEl.appendChild(li);
  });
}

function renderModeUI() {
  const mentorActive = currentMode === "mentor";
  modeKidBtn.classList.toggle("active", !mentorActive);
  modeMentorBtn.classList.toggle("active", mentorActive);
  modeBadgeEl.textContent = mentorActive ? "Ouder-modus actief" : "Kind-modus actief";
  mentorNoteCardEl.hidden = !mentorActive;
  mentorNoteEl.textContent = mentorActive
    ? "Gebruik de extra uitleg in feedback om door te vragen: wat betekent dit in het dagelijks leven van het kind?"
    : "";
  renderFacts();
}

modeKidBtn.addEventListener("click", () => {
  currentMode = "kid";
  renderModeUI();
});

modeMentorBtn.addEventListener("click", () => {
  currentMode = "mentor";
  renderModeUI();
});

checkOrderBtn.addEventListener("click", checkOrder);
shuffleOrderBtn.addEventListener("click", shuffleOrder);

renderQuestion();
setupMemory();
shuffleOrder();
renderTrueFalse();
renderScenario();
updateSpeedUI();
renderModeUI();
