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
let appOpenTracked = false;
let memoryRoundTracked = false;

function trackEvent(path, title) {
  if (window.goatcounter && typeof window.goatcounter.count === "function") {
    window.goatcounter.count({ path, title, event: true });
  }
}

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
  trackEvent(
    isCorrect ? "ramadan-explorer/quiz-goed" : "ramadan-explorer/quiz-fout",
    isCorrect ? "Ramadan Explorer quiz goed" : "Ramadan Explorer quiz fout"
  );

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
  ["Laylatul Qadr", "Een bijzondere nacht in de laatste 10 nachten"]
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
  memoryRoundTracked = false;

  // Termen (links) en betekenissen (rechts) apart schudden
  const termCards = shuffleArray(
    memoryData.map((pair, pairId) => ({ text: pair[0], pairId, matched: false, type: "term" }))
  );
  const meaningCards = shuffleArray(
    memoryData.map((pair, pairId) => ({ text: pair[1], pairId, matched: false, type: "meaning" }))
  );

  // Interleave: term links, betekenis rechts per rij
  for (let i = 0; i < termCards.length; i++) {
    memoryCards.push(termCards[i]);
    memoryCards.push(meaningCards[i]);
  }

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

  // Zelfde kolom (beide termen of beide betekenissen): wissel selectie
  if (firstCard.type === card.type) {
    firstEl.textContent = "?";
    firstEl.classList.remove("revealed");
    firstPick = index;
    return;
  }

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
      if (!memoryRoundTracked) {
        trackEvent("ramadan-explorer/memory-afgerond", "Ramadan Explorer memory afgerond");
        memoryRoundTracked = true;
      }
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
  }, 2000);
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
  trackEvent(
    isCorrect ? "ramadan-explorer/volgorde-goed" : "ramadan-explorer/volgorde-fout",
    isCorrect ? "Ramadan Explorer volgorde goed" : "Ramadan Explorer volgorde fout"
  );
  if (isCorrect) {
    orderFeedbackEl.textContent = "Perfect! De volgorde klopt helemaal.";
    if (currentMode === "mentor") {
      orderFeedbackEl.textContent += " Bespreek waarom intentie en suḥūr aan het begin van de dag staan.";
    }
    orderFeedbackEl.className = "feedback good";
    addStars(4);
  } else {
    orderFeedbackEl.textContent = "Goed geprobeerd! Denk aan vroeg naar laat.";
    if (currentMode === "mentor") {
      orderFeedbackEl.textContent += " Tip: laat eerst ontbijt/geen eten overdag/ifṭār als ankers kiezen.";
    }
    orderFeedbackEl.className = "feedback bad";
  }
}

// True/False game
const tfStatements = [
  {
    text: "Laylatul Qadr wordt gezocht in de laatste tien nachten van Ramadan.",
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
  trackEvent(
    isCorrect ? "ramadan-explorer/klopt-niet-goed" : "ramadan-explorer/klopt-niet-fout",
    isCorrect ? "Ramadan Explorer klopt-of-niet goed" : "Ramadan Explorer klopt-of-niet fout"
  );
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
    text: "Je vriend/vriendin is prikkelbaar tijdens het vasten en reageert daarom kortaf. Wat is de beste reactie?",
    options: ["Rustig blijven en vriendelijk reageren", "Ook kortaf tegen hem doen", "Hem uitlachen"],
    answer: 0,
    explain: "Sterk! Rust en vriendelijk blijven past bij de geest van Ramadan.",
    mentorDetail: "Gebruik dit om emotieregulatie te oefenen in lastige momenten."
  },
  {
    text: '"Je klas zamelt geld en spullen in voor Ramadan. Wat is een goede manier om mee te doen?"',
    options: ["Niet meedoen en grappen maken", "Een klein bedrag geven of je hulp aanbieden", "Anderen tegenhouden om mee te doen"],
    answer: 1,
    explain: "Goed gekozen. Kleine bijdragen en hulp passen bij deze goede actie.",
    mentorDetail: "Bespreek dat bijdragen ook tijd, hulp en aandacht kan zijn."
  },
  {
    text: "Je bent moe bij tarāwīḥ. Wat is een verstandige keuze?",
    options: ["Ermee stoppen", "Anderen storen, omdat je moe bent", "Kort meedoen en rustig opbouwen"],
    answer: 2,
    explain: "Mooi. Rustig opbouwen is vaak beter dan forceren of afhaken.",
    mentorDetail: "Koppel dit aan haalbare doelen en positieve routine."
  },
  {
    text: "Thuis is het druk vlak voor ifṭār en iemand maakt een fout. Wat is de beste houding?",
    options: ["Geduldig blijven en rustig helpen", "Boos reageren", "Weglopen en niet meer helpen"],
    answer: 0,
    explain: "Goed. Geduld en rustig helpen zorgen voor een fijne sfeer.",
    mentorDetail: "Bespreek hoe je eerst kunt kalmeren voor je reageert."
  },
  {
    text: "Je ziet online een kwetsende reactie over iemand. Wat kan je het beste doen?",
    options: ["Meedoen met pesten", "Respectvol blijven en positief reageren", "Nog meer roddels delen"],
    answer: 1,
    explain: "Mooi. Respectvol en vriendelijk reageren past bij goed karakter.",
    mentorDetail: "Koppel dit aan digitale adab en verantwoordelijkheid."
  },
  {
    text: "Je jongere broer of zus wil meedoen met een goede daad. Wat doe je?",
    options: ["Zeggen dat hij/zij te klein is", "Negeren", "Samen een kleine goede daad plannen"],
    answer: 2,
    explain: "Top. Samen kleine goede daden doen motiveert en verbindt.",
    mentorDetail: "Laat een concreet gezinsdoel kiezen voor deze week."
  },
  {
    text: "Iemand zegt iets onaardigs tegen jou op school. Wat is een goede manier om hiermee om te gaan?",
    options: ["Rustig blijven en netjes reageren", "Meteen terug schelden", "Anderen erbij halen om hem of haar te pesten"],
    answer: 0,
    explain: "Sterk. Rustig en netjes reageren laat zelfbeheersing zien.",
    mentorDetail: "Bespreek taalzinnen om respectvol grenzen aan te geven."
  },
  {
    text: "Na ifṭār is er nog veel eten over. Wat is verstandig?",
    options: ["Alles afruimen en weggooien", "Bewaren of delen met anderen", "Het laten staan tot het bederft"],
    answer: 1,
    explain: "Goed gekozen. Bewaren of delen voorkomt verspilling.",
    mentorDetail: "Koppel dit aan dankbaarheid en verantwoordelijkheid."
  },
  {
    text: "Je merkt dat iemand alleen zit in de moskee of klas. Wat past bij goed gedrag?",
    options: ["Hem of haar gewoon negeren", "Diegene zielig vinden", "Even groeten en erbij betrekken"],
    answer: 2,
    explain: "Mooi. Iemand betrekken is een vorm van vriendelijkheid.",
    mentorDetail: "Vraag hoe kleine sociale aandacht groot verschil kan maken."
  },
  {
    text: "Je hebt een drukke dag en weinig tijd. Hoe kun je toch iets goeds doen?",
    options: ["Kleine haalbare goede daad kiezen", "Je hoeft niets goeds te doen", "Anderen vragen je met rust te laten"],
    answer: 0,
    explain: "Top. Kleine goede daden tellen ook mee.",
    mentorDetail: "Laat per dag 1 mini-goede-daad formuleren."
  },
  {
    text: "Iemand vraagt hulp bij het huiswerk terwijl jij moe bent. Wat is een mooie middenweg?",
    options: ["Zeggen dat je geen tijd hebt", "Kort helpen of een geschikt moment afspreken", "De persoon negeren"],
    answer: 1,
    explain: "Goed. Helpen kan ook slim en haalbaar gepland worden.",
    mentorDetail: "Bespreek grenzen stellen met vriendelijkheid."
  },
  {
    text: "Je ziet dat iemand in de klas buitengesloten wordt. Wat kan jij het beste doen?",
    options: ["Meedoen met de rest", "Niets doen, want het is niet jouw probleem", "Diegene groeten en erbij betrekken"],
    answer: 2,
    explain: "Mooi. Iemand betrekken is een sterke daad van barmhartigheid en respect.",
    mentorDetail: "Bespreek concrete zinnen om iemand op een veilige manier erbij te halen."
  },
  {
    text: "Je hebt weinig geld, maar je wilt toch iets goeds doen. Wat is de beste keuze?",
    options: ["Een kleine hulpdaad of vriendelijk woord geven", "Niets doen", "Alleen wachten tot iemand anders iets doet"],
    answer: 0,
    explain: "Top. Goede daden zijn niet alleen geld; ook hulp en vriendelijkheid tellen mee.",
    mentorDetail: "Laat kinderen drie niet-financiële vormen van ṣadaqah noemen."
  },
  {
    text: "Tijdens een online game begint iemand grof te praten. Wat zou je het beste kunnen doen?",
    options: ["Terugschelden", "Respectvol blijven en zo nodig uit de game stappen", "Nog harder terugpraten"],
    answer: 1,
    explain: "Goed gekozen. Digitale adab hoort ook bij goed gedrag en een goed karakter.",
    mentorDetail: "Bespreek grenzen stellen zonder agressie of vernedering. Koppel dit aan digitale adab en verantwoordelijkheid."
  },
  {
    text: "Je zusje/broertje wil meedoen met Qur'an lezen maar leest nog langzaam. Wat doe je?",
    options: ["Uitlachen", "Zeggen dat het geen zin heeft", "Samen kort oefenen en aanmoedigen"],
    answer: 2,
    explain: "Mooi. Aanmoedigen bouwt vertrouwen en liefde voor de Qur'an.",
    mentorDetail: "Maak het haalbaar: korte sessies, positieve feedback, vaste routine."
  },
  {
    text: "Je bent op tijd voor gebed, maar je vrienden willen nog doorpraten. Wat doe je?",
    options: ["Vriendelijk aangeven dat je eerst wilt bidden", "Blijven hangen", "Zeggen dat gebed later wel kan"],
    answer: 0,
    explain: "Goed. Prioriteit geven aan gebed helpt je ritme en discipline opbouwen.",
    mentorDetail: "Bespreek hoe je grenzen stelt zonder bot over te komen."
  },
  {
    text: "In de rij dringt iemand voor. Wat zou je doen?",
    options: ["Meteen schreeuwen", "Kalm aanspreken of geduldig blijven", "Iedereen opjutten tegen die persoon"],
    answer: 1,
    explain: "Mooi. Kalmte en waardigheid passen bij geduld (sabr).",
    mentorDetail: "Laat oefenen met respectvolle taal in lastige situaties."
  },
  {
    text: "Je wilt veel goede daden doen, maar raakt snel geïrriteerd. Wat is slim?",
    options: ["Alles tegelijk doen", "Gewoon stoppen met alles", "Kleine vaste stappen plannen"],
    answer: 2,
    explain: "Goed gekozen. Consistente kleine daden werken vaak het best.",
    mentorDetail: "Koppel dit aan haalbare doelen en volhouden op lange termijn."
  },
  {
    text: "Je vriend is verdrietig en trekt zich terug. Wat is een goede stap?",
    options: ["Rustig contact zoeken en steun aanbieden", "Negeren", "Grapjes maken over zijn gevoel"],
    answer: 0,
    explain: "Mooi. Aandacht en steun zijn vormen van barmhartigheid.",
    mentorDetail: "Oefen empathische zinnen die veilig en steunend zijn."
  },
  {
    text: "Je hebt net iemand gekwetst met woorden. Wat doe je nu?",
    options: ["Doen alsof er niets is gebeurd", "Excuses aanbieden en het herstellen", "De schuld bij de ander leggen"],
    answer: 1,
    explain: "Goed. Herstel na een fout is een teken van goed karakter.",
    mentorDetail: "Bespreek hoe excuses concreet en oprecht gemaakt worden."
  },
  {
    text: "Je bent onderweg en ziet afval op straat. Wat past het best?",
    options: ["Doorlopen", "Er een foto van maken en klagen", "Het oprapen als het veilig kan"],
    answer: 2,
    explain: "Top. Schade van de weg halen is een goede daad.",
    mentorDetail: "Koppel dit aan burgerschap, netheid en religieuze motivatie."
  },
  {
    text: "Je wilt je telefoongebruik in Ramadan verminderen. Wat is een wijze keuze?",
    options: ["Vaste schermtijden en momenten voor goede daden plannen", "Dat is helemaal niet nodig", "Hopen dat het vanzelf beter gaat"],
    answer: 0,
    explain: "Sterk. Duidelijke grenzen helpen om tijd bewust en zinvol te gebruiken.",
    mentorDetail: "Laat een concreet dagplan maken met begin- en stoptijden."
  },
  {
    text: "Je hebt echt honger en ziet eten in de keuken staan. Niemand kijkt. Wat doe je?",
    options: ["Snel een hapje nemen", "Bedenken dat Allah alles ziet en geduld hebben", "Aan je ouders vragen of je iets mag eten"],
    answer: 1,
    explain: "Heel goed. Dit traint je 'Taqwa' (تَقْوَىٰ): het bewustzijn dat Allah ﷻ altijd bij je is.",
    mentorDetail: "Bespreek hoe vasten ons helpt om zelfbeheersing te leren, ook als niemand kijkt."
  },
  {
    text: "Je bent uitgenodigd voor een feestje dat samenvalt met ifṭār-tijd. Wat doe je?",
    options: ["Gewoon gaan en vasten breken op het feestje", "Helemaal niet reageren op de uitnodiging", "Vriendelijk uitleggen dat je liever thuis ifṭār houdt met je familie"],
    answer: 2,
    explain: "Mooi. Ifṭār thuis met familie is een waardevol moment. Vriendelijk communiceren laat respect zien.",
    mentorDetail: "Bespreek hoe je sociale verplichtingen en religieuze routines kunt combineren."
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
  trackEvent(
    isCorrect ? "ramadan-explorer/scenario-goed" : "ramadan-explorer/scenario-fout",
    isCorrect ? "Ramadan Explorer scenario goed" : "Ramadan Explorer scenario fout"
  );
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
    question: "Wat is Laylatul Qadr?",
    options: ["Een bijzondere nacht", "Een maaltijd", "Een schoolvak"],
    answer: 0,
    explain: "Laylatul Qadr is een bijzondere nacht in Ramadan.",
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
  trackEvent("ramadan-explorer/snelheidsronde-afgerond", "Ramadan Explorer snelheidsronde afgerond");
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
  trackEvent("ramadan-explorer/snelheidsronde-gestart", "Ramadan Explorer snelheidsronde gestart");

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
  trackEvent("ramadan-explorer/modus-kind", "Ramadan Explorer kind-modus");
  renderModeUI();
});

modeMentorBtn.addEventListener("click", () => {
  currentMode = "mentor";
  trackEvent("ramadan-explorer/modus-ouder", "Ramadan Explorer ouder-modus");
  renderModeUI();
});

checkOrderBtn.addEventListener("click", checkOrder);
shuffleOrderBtn.addEventListener("click", shuffleOrder);

// ─────────────────────────────────────────────────────────────────────────────
// 7. WIE BEN IK? — Raadsels
// ─────────────────────────────────────────────────────────────────────────────

const riddles = [
  {
    clues: [
      "Ik ben een maaltijd.",
      "Ik wordt gegeten als het nog donker is, vlak voor de dageraad.",
      "Ik geef energie voor de lange vastendag."
    ],
    answer: "Suḥūr",
    options: ["Suḥūr", "Ifṭār", "Tarāwīḥ"],
    explain: "Suḥūr is de vroege ochtendmaaltijd vóór de vastendag begint, gegeten voor de dageraad.",
    mentorDetail: "Bespreek waarom een voedzame suḥūr energie geeft voor school en het vasten."
  },
  {
    clues: [
      "Ik ben een maaltijd.",
      "Ik wordt genuttigd als de zon ondergaat.",
      "Ik begint traditioneel met dadels en water."
    ],
    answer: "Ifṭār",
    options: ["Suḥūr", "Ifṭār", "Laylatul Qadr"],
    explain: "Ifṭār is de maaltijd bij zonsondergang waarmee het vasten gebroken wordt.",
    mentorDetail: "De soenna om te beginnen met dadels en water heeft ook praktische voordelen: snel energie na een lange dag."
  },
  {
    clues: [
      "Ik ben een nacht.",
      "Ik ben beter dan duizend maanden.",
      "Ik zit verborgen in de laatste tien nachten van Ramadan."
    ],
    answer: "Laylatul Qadr",
    options: ["ʿEid al-Fitr", "Laylatul Qadr", "Tarāwīḥ"],
    explain: "Laylatul Qadr (de Nacht van de Macht) is de heiligste nacht van Ramadan.",
    mentorDetail: "Bespreek welke eenvoudige ibadat kinderen in die nacht kunnen doen: du'a, Qur'an lezen, dhikr."
  },
  {
    clues: [
      "Ik ben een gebed.",
      "Ik word 's avonds gebeden, niet overdag.",
      "Ik ben speciaal en bestaat alleen in de maand Ramadan."
    ],
    answer: "Tarāwīḥ",
    options: ["Tarāwīḥ", "Suḥūr", "Ṣadaqah"],
    explain: "Tarāwīḥ is het extra nachtgebed dat moslims alleen in Ramadan verrichten.",
    mentorDetail: "Kinderen kunnen korte rondes meedoen — zelfs twee raka'at is een mooie, haalbare start."
  },
  {
    clues: [
      "Ik ben geen ding, maar een gevoel en een keuze.",
      "Ik helpt je kalm te blijven als je het moeilijk hebt.",
      "Mijn naam betekent geduld en zelfbeheersing in het Arabisch."
    ],
    answer: "Ṣabr",
    options: ["Ṣabr", "Niyyah", "Ṣadaqah"],
    explain: "Ṣabr betekent geduld en zelfbeheersing — een kernwaarde van Ramadan.",
    mentorDetail: "Geef voorbeelden: kalm blijven in de rij, vriendelijk reageren als je moe bent, rustig blijven bij irritatie."
  },
  {
    clues: [
      "Ik ben een bewuste keuze die je maakt in je hart.",
      "Zonder mij is een vastendag niet geldig.",
      "Ik wordt gemaakt vóór de dag begint."
    ],
    answer: "Niyyah",
    options: ["Niyyah", "Ifṭār", "Eid"],
    explain: "Niyyah (intentie) is de bewuste keuze om te vasten — essentieel voor een geldige vastendag.",
    mentorDetail: "Laat kinderen de intentie in eigen woorden uitspreken, bij voorkeur voor het slapengaan."
  },
  {
    clues: [
      "Ik ben een feestdag.",
      "Ik komt direct ná de maand Ramadan.",
      "Moslims over de hele wereld vieren mij met gebed, eten en familie."
    ],
    answer: "ʿEid al-Fitr",
    options: ["ʿEid al-Fitr", "Laylatul Qadr", "Suḥūr"],
    explain: "ʿEid al-Fitr is het feest dat de succesvolle afsluiting van Ramadan viert.",
    mentorDetail: "Bespreek hoe ʿEid al-Fitr in de familie gevierd wordt en welke tradities daarbij horen."
  }
];

let riddleIndex = 0;
const riddleCluesEl = document.getElementById("riddle-clues");
const riddleOptionsEl = document.getElementById("riddle-options");
const riddleFeedbackEl = document.getElementById("riddle-feedback");
const riddleNextBtn = document.getElementById("riddle-next");

function renderRiddle() {
  const r = riddles[riddleIndex];
  riddleFeedbackEl.textContent = "";
  riddleFeedbackEl.className = "feedback";
  riddleOptionsEl.innerHTML = "";
  riddleCluesEl.innerHTML = "";

  r.clues.forEach((clue, idx) => {
    const div = document.createElement("div");
    div.className = "riddle-clue";
    div.textContent = `Aanwijzing ${idx + 1}: ${clue}`;
    riddleCluesEl.appendChild(div);
  });

  r.options.forEach((option) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = option;
    btn.addEventListener("click", () => answerRiddle(option));
    riddleOptionsEl.appendChild(btn);
  });
}

function answerRiddle(choice) {
  const r = riddles[riddleIndex];
  const isCorrect = choice === r.answer;
  trackEvent(
    isCorrect ? "ramadan-explorer/raadsel-goed" : "ramadan-explorer/raadsel-fout",
    isCorrect ? "Ramadan Explorer raadsel goed" : "Ramadan Explorer raadsel fout"
  );
  let feedback = isCorrect
    ? `Goed geraden! ${r.explain}`
    : `Goed geprobeerd! Het antwoord is ${r.answer}. ${r.explain}`;
  if (currentMode === "mentor" && r.mentorDetail) {
    feedback += ` Extra uitleg: ${r.mentorDetail}`;
  }
  riddleFeedbackEl.textContent = feedback;
  riddleFeedbackEl.className = `feedback ${isCorrect ? "good" : "bad"}`;
  if (isCorrect) addStars(2);
  Array.from(riddleOptionsEl.children).forEach((btn) => { btn.disabled = true; });
}

riddleNextBtn.addEventListener("click", () => {
  riddleIndex = (riddleIndex + 1) % riddles.length;
  renderRiddle();
});

// ─────────────────────────────────────────────────────────────────────────────
// 8. MAANKALENDER MYSTERIE
// ─────────────────────────────────────────────────────────────────────────────

const moonQuestions = [
  {
    question: "De islamitische kalender volgt de maan. Hoeveel dagen heeft een maanmaand?",
    options: ["29 of 30 dagen", "31 dagen", "28 dagen"],
    answer: 0,
    explain: "Een maanmaand duurt 29 of 30 dagen, afhankelijk van wanneer de nieuwe maan gezien wordt.",
    mentorDetail: "Vergelijk met de zonnekalender: 365 dagen per jaar vs 354 dagen voor de maankalender.",
    moonPhase: "🌑"
  },
  {
    question: "Waarom verschuift Ramadan elk jaar met ongeveer 10-11 dagen?",
    options: [
      "Het islamitische jaar heeft ~11 dagen minder dan het zonnejaar",
      "Moslims kiezen zelf wanneer Ramadan is",
      "Ramadan valt altijd in de winter"
    ],
    answer: 0,
    explain: "Het islamitische jaar heeft 354 dagen. Daardoor begint Ramadan elk jaar ~11 dagen eerder.",
    mentorDetail: "Over 33 jaar doorloopt Ramadan alle seizoenen — zomer, herfst, winter én lente.",
    moonPhase: "🌒"
  },
  {
    question: "Hoe weten moslims wanneer Ramadan begint?",
    options: [
      "Door de nieuwe maansikkel (hilāl) te zien",
      "Door een vaste datum in de kalender",
      "Ramadan begint altijd op een maandag"
    ],
    answer: 0,
    explain: "Ramadan begint wanneer de nieuwe maansikkel (hilāl) gezien of bevestigd wordt.",
    mentorDetail: "In sommige landen volgen moslims lokale waarneming, in andere landen gebruiken ze astronomische berekeningen.",
    moonPhase: "🌙"
  },
  {
    question: "Hoeveel maanden telt de islamitische kalender?",
    options: ["12 maanden", "13 maanden", "10 maanden"],
    answer: 0,
    explain: "De islamitische kalender heeft 12 maanden. Ramadan is de negende maand.",
    mentorDetail: "De twaalfde maand, Dhū al-Ḥijja, is de maand van de bedevaart (Ḥajj) en Eid al-Adha.",
    moonPhase: "🌕"
  },
  {
    question: "In welke maand van de islamitische kalender valt Ramadan?",
    options: ["De negende maand", "De eerste maand", "De twaalfde maand"],
    answer: 0,
    explain: "Ramadan is de negende maand van de islamitische (Hijri) kalender.",
    mentorDetail: "De naam 'Ramaḍān' komt van het Arabische woord voor hitte — een verwijzing naar zijn oorspronkelijke zomerpositie.",
    moonPhase: "🌓"
  },
  {
    question: "Als Ramadan dit jaar op 1 maart begint, wanneer begint het waarschijnlijk volgend jaar?",
    options: [
      "Rond 18 of 19 februari (±11 dagen eerder)",
      "Precies op 1 maart",
      "Rond 15 april (later)"
    ],
    answer: 0,
    explain: "De islamitische kalender is ~11 dagen korter, dus Ramadan begint elk jaar ~11 dagen eerder.",
    mentorDetail: "Goed rekensommetje: 2026 ~1 mrt, 2027 ~18 feb, 2028 ~8 feb — zo schuift het op.",
    moonPhase: "🌗"
  }
];

let moonIndex = 0;
const moonDisplayEl = document.getElementById("moon-display");
const moonQuestionEl = document.getElementById("moon-question");
const moonOptionsEl = document.getElementById("moon-options");
const moonFeedbackEl = document.getElementById("moon-feedback");
const moonNextBtn = document.getElementById("moon-next");

function renderMoonQuestion() {
  const q = moonQuestions[moonIndex];
  moonDisplayEl.textContent = q.moonPhase;
  moonQuestionEl.textContent = q.question;
  moonOptionsEl.innerHTML = "";
  moonFeedbackEl.textContent = "";
  moonFeedbackEl.className = "feedback";

  q.options.forEach((option, idx) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = option;
    btn.addEventListener("click", () => answerMoonQuestion(idx));
    moonOptionsEl.appendChild(btn);
  });
}

function answerMoonQuestion(choiceIndex) {
  const q = moonQuestions[moonIndex];
  const isCorrect = choiceIndex === q.answer;
  trackEvent(
    isCorrect ? "ramadan-explorer/maan-goed" : "ramadan-explorer/maan-fout",
    isCorrect ? "Ramadan Explorer maan goed" : "Ramadan Explorer maan fout"
  );
  let feedback = isCorrect ? `Top! ${q.explain}` : `Bijna! ${q.explain}`;
  if (currentMode === "mentor") feedback += ` Extra uitleg: ${q.mentorDetail}`;
  moonFeedbackEl.textContent = feedback;
  moonFeedbackEl.className = `feedback ${isCorrect ? "good" : "bad"}`;
  if (isCorrect) addStars(2);
  Array.from(moonOptionsEl.children).forEach((btn) => { btn.disabled = true; });
}

moonNextBtn.addEventListener("click", () => {
  moonIndex = (moonIndex + 1) % moonQuestions.length;
  renderMoonQuestion();
});

// ─────────────────────────────────────────────────────────────────────────────
// 9. RAMADAN RONDOM DE WERELD
// ─────────────────────────────────────────────────────────────────────────────

const worldTraditions = [
  {
    tradition: "In dit land hangen mensen kleurrijke lantaarns genaamd 'fanous' door de straten tijdens Ramadan.",
    country: "Egypte",
    options: ["Egypte", "Marokko", "Pakistan"],
    explain: "De fanous-lantaarn is een iconisch Egyptisch Ramadan-symbool, al eeuwenlang in gebruik.",
    mentorDetail: "Bespreek hoe cultuur en religie samen Ramadan-tradities vormen, terwijl de kern van vasten overal hetzelfde is."
  },
  {
    tradition: "In dit land wordt het vasten traditioneel gebroken met 'harira', een rijke tomaten-linzensoep.",
    country: "Marokko",
    options: ["Marokko", "Egypte", "Indonesië"],
    explain: "Harira is een traditionele Marokkaanse soep die al generaties bij iftar gegeten wordt.",
    mentorDetail: "Voedsel verbindt generaties — bespreek welke gerechten jullie eigen familie bij iftar eet en waarom."
  },
  {
    tradition: "In dit land klinkt vlak voor iftar een grote trom genaamd 'bedug' om het einde van de vastendag aan te kondigen.",
    country: "Indonesië",
    options: ["Indonesië", "Turkije", "Nigeria"],
    explain: "De bedug-trom is een eeuwenoude islamitisch-Indonesische traditie.",
    mentorDetail: "Indonesië heeft met ruim 230 miljoen moslims de grootste moslimbevolking ter wereld."
  },
  {
    tradition: "In dit land loopt een 'davulcu' (trommelspeler) 's nachts door de straten om mensen wakker te maken voor suḥūr.",
    country: "Turkije",
    options: ["Turkije", "Soedan", "Marokko"],
    explain: "De davulcu is een geliefde Turkse Ramadan-traditie die teruggaat tot het Ottomaanse Rijk.",
    mentorDetail: "Bespreek hoe gemeenschappelijke tradities mensen verbinden tijdens Ramadan."
  },
  {
    tradition: "In dit Golfland worden speciale 'Ramadan-tenten' opgezet waar families en vrienden samen iftar houden.",
    country: "De Emiraten",
    options: ["De Emiraten", "Algerije", "Tunesië"],
    explain: "Ramadan-tenten in de Golf zijn gezellige ontmoetingsplaatsen — een teken van islamitische gastvrijheid.",
    mentorDetail: "Gastvrijheid (diyāfa) is een kernwaarde in de islamitische cultuur, en Ramadan versterkt dat."
  },
  {
    tradition: "In sommige steden in dit West-Afrikaanse land klinkt een kanonschot bij zonsondergang om iftar aan te kondigen.",
    country: "Nigeria",
    options: ["Nigeria", "Indonesië", "Marokko"],
    explain: "In Nigeria gebruiken sommige steden een kanonschot als communaal iftar-signaal.",
    mentorDetail: "Ramadan verbindt moslims wereldwijd, maar elke cultuur heeft zijn eigen mooie tradities."
  },
  {
    tradition: "In dit land worden straten en bazaars verlicht met kleurrijke versiering al weken vóór Eid.",
    country: "Pakistan",
    options: ["Pakistan", "Egypte", "Turkije"],
    explain: "In Pakistan worden straten en markten vrolijk versierd voor Ramadan en het naderende Eid-feest.",
    mentorDetail: "Decoraties en verlichting maken de sfeer van Ramadan voelbaar voor de hele gemeenschap."
  }
];

let worldIndex = 0;
const worldTraditionEl = document.getElementById("world-tradition");
const worldOptionsEl = document.getElementById("world-options");
const worldFeedbackEl = document.getElementById("world-feedback");
const worldNextBtn = document.getElementById("world-next");

function renderWorldTradition() {
  const t = worldTraditions[worldIndex];
  worldTraditionEl.textContent = t.tradition;
  worldOptionsEl.innerHTML = "";
  worldFeedbackEl.textContent = "";
  worldFeedbackEl.className = "feedback";

  shuffleArray(t.options).forEach((country) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = country;
    btn.addEventListener("click", () => answerWorldTradition(country));
    worldOptionsEl.appendChild(btn);
  });
}

function answerWorldTradition(choice) {
  const t = worldTraditions[worldIndex];
  const isCorrect = choice === t.country;
  trackEvent(
    isCorrect ? "ramadan-explorer/wereld-goed" : "ramadan-explorer/wereld-fout",
    isCorrect ? "Ramadan Explorer wereld goed" : "Ramadan Explorer wereld fout"
  );
  let feedback = isCorrect
    ? `Goed! ${t.explain}`
    : `Goed geprobeerd! Het is ${t.country}. ${t.explain}`;
  if (currentMode === "mentor") feedback += ` Extra uitleg: ${t.mentorDetail}`;
  worldFeedbackEl.textContent = feedback;
  worldFeedbackEl.className = `feedback ${isCorrect ? "good" : "bad"}`;
  if (isCorrect) addStars(2);
  Array.from(worldOptionsEl.children).forEach((btn) => { btn.disabled = true; });
}

worldNextBtn.addEventListener("click", () => {
  worldIndex = (worldIndex + 1) % worldTraditions.length;
  renderWorldTradition();
});

// ─────────────────────────────────────────────────────────────────────────────
// 10. QUR'AN VERKENNER
// ─────────────────────────────────────────────────────────────────────────────

const quranFacts = [
  "De Qur'an werd in de maand Ramadan geopenbaard aan de Profeet Muḥammad ﷺ.",
  "De Qur'an is verdeeld in 30 gelijke delen, 'Juz'' (جُزْء) genaamd.",
  "Als je elke dag 1 Juz' leest, heb je de hele Qur'an in één Ramadan uitgelezen. Dit heet 'Khatm al-Qur'an'.",
  "De Qur'an heeft 114 soera's (hoofdstukken).",
  "Tijdens Tarāwīḥ-gebeden lezen imams elke avond een deel van de Qur'an voor.",
  "De eerste geopenbaarde woorden zijn 'Iqraʾ' (اقْرَأْ) — 'Lees!' — in Soerat al-ʿAlaq.",
  "De langste soera is Soerat al-Baqara (de Koe), met 286 verzen.",
  "De kortste soera is Soerat al-Kawthar, met slechts 3 verzen.",
  "De Qur'an werd in 23 jaar geopenbaard — beetje bij beetje, passend bij elke situatie.",
  "Het woord 'Qur'an' betekent 'het gereciteerde' of 'dat wat gelezen wordt'.",
  "De Qur'an heeft 6236 verzen (āyāt).",
  "De Profeet ﷺ herhaalde elke Ramadan de Qur'an samen met de engel Jibrīl (Gabriël).",
  "Juz' 1 begint met Soerat al-Fātiḥa — de opening van de Qur'an.",
  "Juz' 30 bevat de kortste soera's — veel ervan ken je misschien al uit gebed.",
  "Elke letter van de Qur'an die je leest, telt als een goede daad."
];

let juzRead = new Array(30).fill(false);
let juzFactIndex = 0;
const juzMilestonesAwarded = new Set();

// TIJDELIJK UITGESCHAKELD — Qur'an Verkenner wordt nog aangepast
// const juzGridEl = document.getElementById("juz-grid");
// const juzProgressEl = document.getElementById("juz-progress");
// const quranFactEl = document.getElementById("quran-fact");
// const juzResetBtn = document.getElementById("juz-reset");

function buildJuzGrid() {
  juzGridEl.innerHTML = "";
  for (let i = 1; i <= 30; i++) {
    const box = document.createElement("button");
    box.className = "juz-box" + (juzRead[i - 1] ? " read" : "");
    box.textContent = String(i);
    box.setAttribute("aria-label", `Juz' ${i}${juzRead[i - 1] ? " — gelezen" : ""}`);
    box.addEventListener("click", () => toggleJuz(i - 1));
    juzGridEl.appendChild(box);
  }
  updateJuzProgress();
}

function toggleJuz(index) {
  juzRead[index] = !juzRead[index];
  const box = juzGridEl.children[index];
  box.classList.toggle("read", juzRead[index]);
  box.setAttribute("aria-label", `Juz' ${index + 1}${juzRead[index] ? " — gelezen" : ""}`);

  quranFactEl.textContent = quranFacts[juzFactIndex % quranFacts.length];
  juzFactIndex++;

  updateJuzProgress();

  const readCount = juzRead.filter(Boolean).length;

  if (juzRead[index] && readCount === 10 && !juzMilestonesAwarded.has(10)) {
    juzMilestonesAwarded.add(10);
    quranFactEl.textContent = "Geweldig! Je hebt 10 Juz' gelezen. Ga zo door! " + quranFacts[juzFactIndex % quranFacts.length];
    juzFactIndex++;
    addStars(2);
  } else if (juzRead[index] && readCount === 20 && !juzMilestonesAwarded.has(20)) {
    juzMilestonesAwarded.add(20);
    quranFactEl.textContent = "Super! Al 20 Juz' gelezen! Je bent er bijna! " + quranFacts[juzFactIndex % quranFacts.length];
    juzFactIndex++;
    addStars(3);
  } else if (readCount === 30 && !juzMilestonesAwarded.has(30)) {
    juzMilestonesAwarded.add(30);
    quranFactEl.textContent = "Masha'Allah! Je hebt de hele Qur'an doorlopen — Khatm al-Qur'an!";
    addStars(5);
    trackEvent("ramadan-explorer/khatm-quran", "Ramadan Explorer Khatm al-Qur'an");
  }
}

function updateJuzProgress() {
  const readCount = juzRead.filter(Boolean).length;
  juzProgressEl.textContent = `${readCount} / 30 Juz' gelezen`;
}

// TIJDELIJK UITGESCHAKELD — Qur'an Verkenner wordt nog aangepast
// juzResetBtn.addEventListener("click", () => {
//   juzRead = new Array(30).fill(false);
//   juzFactIndex = 0;
//   juzMilestonesAwarded.clear();
//   quranFactEl.textContent = "";
//   buildJuzGrid();
// });

// ─────────────────────────────────────────────────────────────────────────────
// 11. GOEDE DADEN UITDAGING
// ─────────────────────────────────────────────────────────────────────────────

const goodDeeds = [
  {
    deed: "Zeg vandaag 3 keer 'JazākAllāhu khayranja' (Moge Allah jou belonen met het goede) tegen iemand om dankbaarheid te tonen.",
    explain: "Dankbaarheid uitspreken is een kleine maar krachtige daad van vriendelijkheid.",
    mentorDetail: "Oefent sociale vaardigheden en dankbaarheid — kernwaarden van Ramadan."
  },
  {
    deed: "Help zonder gevraagd te worden met een klusje in huis.",
    explain: "Onverwacht helpen verrast mensen aangenaam en versterkt de band thuis.",
    mentorDetail: "Ṣadaqah zijn ook goede daden met je tijd en energie, niet alleen geld."
  },
  {
    deed: "Geef iemand een oprecht, vriendelijk compliment.",
    explain: "Een goed woord is ṣadaqah — het kost niets maar betekent heel veel.",
    mentorDetail: "Laat het kind bedenken wat ze oprecht waarderen in iemand."
  },
  {
    deed: "Ruim een rommeltje op dat niet van jou is.",
    explain: "Schade of rommel van de weg halen is een bekende goede daad in de islam.",
    mentorDetail: "Koppel aan zorg voor de omgeving en de gemeenschap."
  },
  {
    deed: "Bid vandaag voor iemand die het moeilijk heeft.",
    explain: "Du'a voor anderen is een van de mooiste vormen van ṣadaqah — het kost niets.",
    mentorDetail: "Zelfs jonge kinderen kunnen leren bidden voor anderen — kort en gemeend."
  },
  {
    deed: "Leg je telefoon een half uur weg en doe iets zinvols.",
    explain: "Bewust omgaan met je tijd is een teken van discipline en zelfbeheersing.",
    mentorDetail: "Bespreek samen wat zinvol tijdgebruik is tijdens Ramadan."
  },
  {
    deed: "Maak iemand thuis blij met een kleine verrassing (een glas water, een vriendelijk briefje).",
    explain: "Kleine gebaren van liefde zijn krachtige goede daden.",
    mentorDetail: "Laat het kind zelf bedenken wat die persoon blij van wordt."
  },
  {
    deed: "Lees vandaag een paar verzen uit de Qur'an, ook al is het maar heel kort.",
    explain: "Elke letter van de Qur'an die je leest telt als een goede daad.",
    mentorDetail: "Haalbaar houden: zelfs Soerat al-Ikhlāṣ (3 verzen) telt mee."
  },
  {
    deed: "Glimlach naar iedereen die je vandaag tegenkomt.",
    explain: "Een glimlach is ṣadaqah — de makkelijkste goede daad die er bestaat!",
    mentorDetail: "Wetenschappelijk bewezen: glimlachen verbetert ook je eigen stemming."
  },
  {
    deed: "Vraag een familielid hoe hun dag was en luister echt.",
    explain: "Echte aandacht geven is een diepe vorm van zorg en respect.",
    mentorDetail: "Actief luisteren is een sociale vaardigheid die kinderen bewust kunnen oefenen."
  },
  {
    deed: "Vergeef iemand in je hart voor iets kleins waarvoor je nog boos bent.",
    explain: "Vergeven is een van de edelste eigenschappen — goed voor jezelf én voor de ander.",
    mentorDetail: "Vergeven hoeft niet hardop — het begint in je eigen hart."
  },
  {
    deed: "Besteed 10 minuten aan du'a — bid voor jou, je familie en alle moslims.",
    explain: "Du'a is een directe verbinding met Allah. In Ramadan worden du'a's extra verhoord.",
    mentorDetail: "Laat het kind een eigen du'a in zijn eigen taal formuleren."
  }
];

let currentDeedIndex = 0;
let deedIndices = [];

const deedDisplayEl = document.getElementById("deed-display");
const deedDoneBtn = document.getElementById("deed-done");
const deedShuffleBtn = document.getElementById("deed-shuffle");
const deedFeedbackEl = document.getElementById("deed-feedback");

function initDeeds() {
  deedIndices = shuffleArray([...Array(goodDeeds.length).keys()]);
  currentDeedIndex = 0;
  renderDeed();
}

function renderDeed() {
  const deed = goodDeeds[deedIndices[currentDeedIndex % deedIndices.length]];
  deedDisplayEl.textContent = deed.deed;
  deedFeedbackEl.textContent = "";
  deedFeedbackEl.className = "feedback";
  deedDoneBtn.disabled = false;
}

function completeDeed() {
  const deed = goodDeeds[deedIndices[currentDeedIndex % deedIndices.length]];
  let feedback = `Geweldig! ${deed.explain}`;
  if (currentMode === "mentor") feedback += ` Tip voor ouder: ${deed.mentorDetail}`;
  deedFeedbackEl.textContent = feedback;
  deedFeedbackEl.className = "feedback good";
  addStars(2);
  deedDoneBtn.disabled = true;
  trackEvent("ramadan-explorer/goede-daad-gedaan", "Ramadan Explorer goede daad gedaan");
}

deedDoneBtn.addEventListener("click", completeDeed);
deedShuffleBtn.addEventListener("click", () => {
  currentDeedIndex++;
  if (currentDeedIndex >= deedIndices.length) {
    deedIndices = shuffleArray([...Array(goodDeeds.length).keys()]);
    currentDeedIndex = 0;
  }
  renderDeed();
});

// ─────────────────────────────────────────────────────────────────────────────
// 12. RAMADAN-CHEF
// ─────────────────────────────────────────────────────────────────────────────

const chefItems = [
  { name: "Dadels 🍂", id: "dadels", good: true, explain: "Soenna! De Profeet ﷺ brak zijn vasten met dadels — snel energie voor de maag." },
  { name: "Water 💧", id: "water", good: true, explain: "Beginnen met water is gezond en een soenna: rehydratie na een lange vastendag." },
  { name: "Linzensoep 🍲", id: "soep", good: true, explain: "Soep vult rustig aan en geeft energie zonder de maag te zwaar te belasten." },
  { name: "Brood 🫓", id: "brood", good: true, explain: "Koolhydraten geven duurzame energie na het vasten." },
  { name: "Fruit 🍊", id: "fruit", good: true, explain: "Fruit geeft vitamines, mineralen en suikers snel terug na het vasten." },
  { name: "Salade 🥗", id: "salade", good: true, explain: "Verse groenten geven vitamines en vezel voor een goede spijsvertering." },
  { name: "Cola 🥤", id: "cola", good: false, explain: "Koolzuur en veel suiker zijn niet ideaal als eerste na een lange vastendag." },
  { name: "Chips 🍟", id: "chips", good: false, explain: "Vettig en zout voedsel belasten de maag na het vasten." },
  { name: "Snoep 🍭", id: "snoep", good: false, explain: "Veel suiker ineens geeft een snelle energiepiek maar daarna ook een dip." }
];

let chefSelected = new Set();
const chefItemsEl = document.getElementById("chef-items");
const chefSelectedEl = document.getElementById("chef-selected");
const chefCheckBtn = document.getElementById("chef-check");
const chefResetBtn = document.getElementById("chef-reset");
const chefFeedbackEl = document.getElementById("chef-feedback");

function buildChefItems() {
  chefItemsEl.innerHTML = "";
  chefItems.forEach((item) => {
    const btn = document.createElement("button");
    btn.className = "chef-item" + (chefSelected.has(item.id) ? " selected" : "");
    btn.textContent = item.name;
    btn.addEventListener("click", () => toggleChefItem(item.id, btn));
    chefItemsEl.appendChild(btn);
  });
  updateChefPlate();
}

function toggleChefItem(id, btn) {
  if (chefSelected.has(id)) {
    chefSelected.delete(id);
    btn.classList.remove("selected");
  } else {
    chefSelected.add(id);
    btn.classList.add("selected");
  }
  updateChefPlate();
}

function updateChefPlate() {
  chefSelectedEl.innerHTML = "";
  chefItems
    .filter((item) => chefSelected.has(item.id))
    .forEach((item) => {
      const tag = document.createElement("span");
      tag.className = "chef-selected-tag";
      tag.textContent = item.name;
      chefSelectedEl.appendChild(tag);
    });
}

function checkChefMeal() {
  if (chefSelected.size === 0) {
    chefFeedbackEl.textContent = "Kies eerst een paar etenswaren voor je iftar-bord!";
    chefFeedbackEl.className = "feedback bad";
    return;
  }

  const selected = chefItems.filter((item) => chefSelected.has(item.id));
  const goodSelected = selected.filter((item) => item.good);
  const badSelected = selected.filter((item) => !item.good);
  const hasDadels = chefSelected.has("dadels");
  const hasWater = chefSelected.has("water");

  let feedback = "";
  let starsToAdd = 0;
  let isGood = false;

  if (goodSelected.length >= 3 && badSelected.length === 0) {
    isGood = true;
    starsToAdd = 3;
    feedback = "Uitstekend! Je hebt een mooie, gezonde iftar-maaltijd samengesteld. ";
  } else if (goodSelected.length >= 2) {
    isGood = true;
    starsToAdd = 2;
    feedback = "Goed gedaan! Je hebt goede keuzes gemaakt. ";
  } else if (goodSelected.length >= 1) {
    isGood = true;
    starsToAdd = 1;
    feedback = "Aardig begin! Probeer meer gezonde keuzes te maken. ";
  } else {
    feedback = "Hmm, probeer eens andere keuzes voor je iftar-bord. ";
  }

  if (hasDadels && hasWater) {
    feedback += "Top! Je begint met dadels en water — precies de soenna van de Profeet ﷺ! ";
  } else if (!hasDadels && goodSelected.length > 0) {
    feedback += "Tip: de Profeet ﷺ begon iftar altijd met dadels. ";
  }

  if (badSelected.length > 0) {
    const badNames = badSelected.map((i) => i.name).join(", ");
    feedback += `Let op: ${badNames} ${badSelected.length === 1 ? "is" : "zijn"} niet ideaal als eerste na het vasten. `;
    if (currentMode === "mentor") {
      feedback += badSelected.map((i) => i.explain).join(" ");
    }
  }

  if (goodSelected.length > 0) {
    feedback += goodSelected.slice(0, 2).map((i) => i.explain).join(" ");
  }

  chefFeedbackEl.textContent = feedback;
  chefFeedbackEl.className = `feedback ${isGood ? "good" : "bad"}`;
  if (starsToAdd > 0) addStars(starsToAdd);
  trackEvent("ramadan-explorer/chef-gecontroleerd", "Ramadan Explorer chef gecontroleerd");
}

function resetChef() {
  chefSelected.clear();
  chefFeedbackEl.textContent = "";
  chefFeedbackEl.className = "feedback";
  buildChefItems();
}

chefCheckBtn.addEventListener("click", checkChefMeal);
chefResetBtn.addEventListener("click", resetChef);

// ─────────────────────────────────────────────────────────────────────────────
// 13. EID VERKENNER
// ─────────────────────────────────────────────────────────────────────────────

const eidQuestions = [
  {
    question: "Wat betekent 'ʿEid al-Fitr'?",
    options: ["Het feest van het breken van het vasten", "Het feest van het offer", "Het begin van Ramadan"],
    answer: 0,
    explain: "'Fitr' betekent het breken van het vasten — ʿEid al-Fitr viert de afsluiting van Ramadan.",
    mentorDetail: "Er is ook ʿEid al-Adha (het offerfeest) — een ander groot islamitisch feest, zo'n twee maanden later."
  },
  {
    question: "Wat is Zakāt al-Fitr?",
    options: [
      "Een verplichte gift vóór het 'Eid-gebed aan mensen in nood",
      "Een vrijwillige gift",
      "Een speciaal 'Eid-gebed"
    ],
    answer: 0,
    explain: "Zakāt al-Fitr is een verplichte aalmoes vóór het 'Eid-gebed, zodat ook armen feest kunnen vieren.",
    mentorDetail: "Zakāt al-Fitr is een symbool van gemeenschap: niemand mag 'Eid in armoede vieren."
  },
  {
    question: "Wanneer wordt het 'Eid-gebed gebeden?",
    options: ["'s Ochtends vroeg, na zonsopgang", "'s Middags", "'s Avonds bij zonsondergang"],
    answer: 0,
    explain: "Het 'Eid-gebed wordt vroeg in de ochtend gebeden, na zonsopgang.",
    mentorDetail: "Het is een feestelijk sociaal moment: families gaan samen naar de moskee of een grote open plek."
  },
  {
    question: "Wat is een bekende 'Eid-begroeting in het Arabisch?",
    options: ["'Eid Mubārak!", "Bismillāh!", "Alhamdulillāh!"],
    answer: 0,
    explain: "'Eid Mubārak!' betekent 'Gezegend feest!' — de meest gebruikte 'Eid-begroeting.",
    mentorDetail: "Er zijn ook andere begroetingen: 'Kullu ʿām wa antum bikhair' (Moge elk jaar voorbijgaan terwijl jullie in goede staat (gezondheid en voorspoed) verkeren.)."
  },
  {
    question: "Waarom is ʿEid al-Fitr zo bijzonder na Ramadan?",
    options: [
      "Omdat je een hele maand van discipline en aanbidding viert",
      "Omdat je op 'Eid niet hoeft te bidden",
      "Omdat het altijd in de zomer valt"
    ],
    answer: 0,
    explain: "ʿEid al-Fitr is een dankfeest en beloning voor een maand vol discipline, aanbidding en goed karakter.",
    mentorDetail: "Bespreek wat het kind trots op zichzelf maakt na Ramadan."
  },
  {
    question: "Wat eet je traditioneel op 'Eid-ochtend vóór het gebed?",
    options: ["Een oneven aantal dadels", "Een grote maaltijd", "Niets — je vast nog"],
    answer: 0,
    explain: "Het is soenna om op 'Eid-ochtend een oneven aantal dadels te eten vóór het gebed.",
    mentorDetail: "Dit is het tegenovergestelde van 'Eid al-Adha, waarbij je juist ná het gebed eet."
  },
  {
    question: "Ramadan eindigt als de nieuwe maan gezien wordt en 'Eid begint. Hoe heet deze maansikkel?",
    options: ["Hilāl", "Laylatul Qadr", "Tarāwīḥ"],
    answer: 0,
    explain: "De hilāl (nieuwe maansikkel) markeert zowel het begin als het einde van Ramadan.",
    mentorDetail: "Vroeger gingen mensen naar buiten om de maan te zoeken — een mooie gemeenschappelijke traditie."
  }
];

let eidIndex = 0;
const eidQuestionEl = document.getElementById("eid-question");
const eidOptionsEl = document.getElementById("eid-options");
const eidFeedbackEl = document.getElementById("eid-feedback");
const eidNextBtn = document.getElementById("eid-next");

function renderEidQuestion() {
  const q = eidQuestions[eidIndex];
  eidQuestionEl.textContent = q.question;
  eidOptionsEl.innerHTML = "";
  eidFeedbackEl.textContent = "";
  eidFeedbackEl.className = "feedback";

  q.options.forEach((option, idx) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = option;
    btn.addEventListener("click", () => answerEidQuestion(idx));
    eidOptionsEl.appendChild(btn);
  });
}

function answerEidQuestion(choiceIndex) {
  const q = eidQuestions[eidIndex];
  const isCorrect = choiceIndex === q.answer;
  trackEvent(
    isCorrect ? "ramadan-explorer/eid-goed" : "ramadan-explorer/eid-fout",
    isCorrect ? "Ramadan Explorer eid goed" : "Ramadan Explorer eid fout"
  );
  let feedback = isCorrect ? `Top! ${q.explain}` : `Bijna! ${q.explain}`;
  if (currentMode === "mentor") feedback += ` Extra uitleg: ${q.mentorDetail}`;
  eidFeedbackEl.textContent = feedback;
  eidFeedbackEl.className = `feedback ${isCorrect ? "good" : "bad"}`;
  if (isCorrect) addStars(2);
  Array.from(eidOptionsEl.children).forEach((btn) => { btn.disabled = true; });
}

eidNextBtn.addEventListener("click", () => {
  eidIndex = (eidIndex + 1) % eidQuestions.length;
  renderEidQuestion();
});

renderQuestion();
setupMemory();
shuffleOrder();
renderTrueFalse();
renderScenario();
updateSpeedUI();
renderRiddle();
renderMoonQuestion();
renderWorldTradition();
// buildJuzGrid(); // TIJDELIJK UITGESCHAKELD — Qur'an Verkenner wordt nog aangepast
initDeeds();
buildChefItems();
renderEidQuestion();
renderModeUI();
if (!appOpenTracked) {
  trackEvent("ramadan-explorer/geopend", "Ramadan Explorer geopend");
  appOpenTracked = true;
}
