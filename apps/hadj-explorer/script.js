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


const routePoints = Array.from(document.querySelectorAll(".route-point"));
const routeDetailTitleEl = document.getElementById("route-detail-title");
const routeDetailTextEl = document.getElementById("route-detail-text");
let activeRouteIndex = 0;
let routeAutoTimer = null;

function setActiveRoutePoint(index) {
  if (!routePoints.length || !routeDetailTitleEl || !routeDetailTextEl) return;
  activeRouteIndex = (index + routePoints.length) % routePoints.length;
  routePoints.forEach((point, pointIndex) => {
    const isActive = pointIndex === activeRouteIndex;
    point.classList.toggle("active", isActive);
    point.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
  const activePoint = routePoints[activeRouteIndex];
  routeDetailTitleEl.textContent = activePoint.dataset.routeTitle || "";
  routeDetailTextEl.textContent = activePoint.dataset.routeDetail || "";
}

function startRouteAutoPlay() {
  if (!routePoints.length || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  if (routeAutoTimer) clearInterval(routeAutoTimer);
  routeAutoTimer = setInterval(() => setActiveRoutePoint(activeRouteIndex + 1), 5200);
}

routePoints.forEach((point, index) => {
  point.setAttribute("aria-pressed", point.classList.contains("active") ? "true" : "false");
  point.addEventListener("click", () => {
    setActiveRoutePoint(index);
    startRouteAutoPlay();
  });
});
setActiveRoutePoint(0);
startRouteAutoPlay();

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
  kid: { title: "Hadj-feitjes", items: ["Hadj is de bedevaart naar Mekka en is één van de vijf zuilen van de islam.", "Hadj is verplicht voor volwassen moslims die er lichamelijk en financieel toe in staat zijn.", "De belangrijkste hadj-dagen zijn van 8 tot en met 13 Dzūl-Ḥijjah.", "Op de dag van Arafat staan pelgrims in aanbidding en smeekbeden bij Arafat.", "ʿEid al-Adha bestond al vóórdat de hadj verplicht werd: het Offerfeest werd ingesteld in het 2e jaar na de hidjrah, terwijl de hadj-verplichting later kwam, in het 9e jaar na de hidjrah.", "Hadj leert geduld, gelijkheid, nederigheid en vertrouwen op Allah."] },
  mentor: { title: "Hadj-feitjes (ouder-modus)", items: ["Hadj is eenmaal in het leven verplicht voor wie aan de voorwaarden voldoet: islam, volwassenheid, verstand, vrijheid, gezondheid, vermogen, tijd en veilige reisomstandigheden.", "De belangrijkste rituelen vallen van 8 tot en met 13 Dzūl-Ḥijjah; de bredere hadj-periode begint al in Shawwāl en loopt via Dzū al-Qaʿdah tot de eerste tien dagen van Dzūl-Ḥijjah.", "De rituelen volgen een route: Mīqāt, iḥrām, Talbiyah, Kaʾbah, ṭawāf, saʿī, Mina, Arafat, Muzdalifah, ramī, offer, ḥalq/taqṣīr en ṭawāf.", "Arafat is de kern van de hadj; voor wie niet op hadj is, zijn vasten, duʿā, dzikr en barmhartigheid op de Dag van Arafat bijzonder waardevol.", "Jabl al-Raḥmah beklimmen is geen vereiste voor een geldige hadj; de hele vlakte van Arafat is geldig voor het staan.", "ʿEid al-Adha werd al in het 2e jaar na de hidjrah ingesteld. De hadj werd volgens de bekende opvatting later verplicht, in het 9e jaar na de hidjrah; over het precieze jaar noemen geleerden ook andere opvattingen.", "ʿEid al-Adha is het Offerfeest, geen slachtfeest: de nadruk ligt op gehoorzaamheid, dankbaarheid, offerbereidheid en delen."] }
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
  { question: "Wat is de hadj?", options: ["De bedevaart naar Mekka", "Een dagelijks gebed", "Een maand vasten"], answer: 0, explain: "Hadj is de bedevaart naar Mekka en één van de vijf zuilen van de islam.", mentorDetail: "Benadruk dat hadj alleen verplicht is voor wie daartoe in staat is." },
  { question: "In welke islamitische maand vindt de hadj plaats?", options: ["Shawwāl", "Dzūl-Ḥijjah", "Muḥarram"], answer: 1, explain: "Hadj vindt plaats in Dzūl-Ḥijjah, de twaalfde maand van de islamitische kalender.", mentorDetail: "Koppel dit aan de eerste tien dagen van Dzūl-Ḥijjah en ʿEid al-Adha." },
  { question: "Welke uitspraak laat zien hoe belangrijk Arafat is?", options: ["De hadj is Arafat", "De hadj is reizen", "De hadj is alleen ṭawāf"], answer: 0, explain: "De Profeet ﷺ zei: ‘De hadj is Arafat.’ Arafat is dus de kern van de hadj.", mentorDetail: "Leg uit dat sommige rituelen pijlers zijn en andere verplichtingen of aanbevolen daden." },
  { question: "Wat betekent iḥrām?", options: ["Een gewone reistas", "Een gewijde staat voor de bedevaart", "Een feestmaaltijd"], answer: 1, explain: "Iḥrām is de bijzondere staat waarin de pelgrim de hadj of ʿUmrah begint.", mentorDetail: "Bespreek zowel de intentie als de kleding en gedragsregels." },
  { question: "Hoeveel rondes telt een ṭawāf om de Kaʾbah?", options: ["3", "5", "7"], answer: 2, explain: "Een volledige ṭawāf bestaat uit zeven rondes rond de Kaʾbah.", mentorDetail: "Laat kinderen op papier zeven rondes tekenen om het concreet te maken." },
  { question: "Wat hoort bij saʿī?", options: ["Lopen tussen Ṣafā en Marwa", "Stenen verzamelen in Mina", "Slapen in de moskee"], answer: 0, explain: "Saʿī is het lopen tussen Ṣafā en Marwa.", mentorDetail: "Vertel kort over Hajar en haar vertrouwen op Allah." },
  { question: "Wat vieren moslims op 10 Dzūl-Ḥijjah?", options: ["ʿEid al-Fiṭr", "ʿEid al-Adha", "Laylatul Qadr"], answer: 1, explain: "Op 10 Dzūl-Ḥijjah begint ʿEid al-Adha, het Offerfeest.", mentorDetail: "Verbind dit met het verhaal van Ibrāhīm, vrede zij met hem, en gehoorzaamheid aan Allah." }
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
    isCorrect ? "hadj-explorer/quiz-goed" : "hadj-explorer/quiz-fout",
    isCorrect ? "Hadj Explorer quiz goed" : "Hadj Explorer quiz fout"
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
const memoryData = [["Iḥrām", "Gewijde staat waarmee de pelgrim begint"], ["Ṭawāf", "Zeven rondes om de Kaʾbah"], ["Saʿī", "Lopen tussen Ṣafā en Marwa"], ["Arafat", "Belangrijkste staan en smeekbeden tijdens hadj"], ["ramī", "Steniging van de jamarāt"]];

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
      memoryFeedbackEl.textContent += " Benoem samen waarom dit begrip belangrijk is tijdens de hadj.";
    }
    memoryFeedbackEl.className = "feedback good";
    firstPick = null;

    if (memoryMatches === memoryData.length) {
      memoryFeedbackEl.textContent = "Alles gevonden! Geweldig gedaan.";
      addStars(3);
      if (!memoryRoundTracked) {
        trackEvent("hadj-explorer/memory-afgerond", "Hadj Explorer memory afgerond");
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
const correctOrder = ["Iḥrām aannemen vóór de Mīqāt", "Verblijf in Mina op 8 Dzūl-Ḥijjah", "Staan bij Arafat op 9 Dzūl-Ḥijjah", "Nacht in Muzdalifah", "ramī, offer, haar knippen/scheren en ṭawāf"];

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
    isCorrect ? "hadj-explorer/volgorde-goed" : "hadj-explorer/volgorde-fout",
    isCorrect ? "Hadj Explorer volgorde goed" : "Hadj Explorer volgorde fout"
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
const tfStatements = [{ text: "Hadj is één van de vijf zuilen van de islam.", isTrue: true, explain: "Klopt. Hadj is een pijler voor wie ertoe in staat is.", mentorDetail: "Laat het kind de vijf zuilen opnoemen." }, { text: "Arafat is niet belangrijk tijdens de hadj.", isTrue: false, explain: "Klopt niet. Arafat is juist de kern van de hadj.", mentorDetail: "De uitspraak ‘De hadj is Arafat’ helpt dit onthouden." }, { text: "Ṭawāf bestaat uit zeven rondes rond de Kaʾbah.", isTrue: true, explain: "Klopt. Zeven rondes vormen één volledige ṭawāf.", mentorDetail: "Gebruik tellen of tekenen als geheugensteun." }, { text: "Saʿī betekent lopen tussen Ṣafā en Marwa.", isTrue: true, explain: "Klopt. Saʿī hoort bij de rituelen van hadj en ʿUmrah.", mentorDetail: "Koppel dit aan het verhaal van Hajar." }, { text: "Hadj vindt plaats in de maand Shawwāl.", isTrue: false, explain: "Klopt niet. Hadj vindt plaats in Dzūl-Ḥijjah.", mentorDetail: "Shawwāl komt direct na Ramadan; Dzūl-Ḥijjah is later." }, { text: "In iḥrām oefenen pelgrims extra zelfbeheersing.", isTrue: true, explain: "Klopt. Iḥrām vraagt om rust, geduld en goed gedrag.", mentorDetail: "Maak de koppeling met karaktervorming." }, { text: "ʿEid al-Adha hoort bij de dagen van hadj.", isTrue: true, explain: "Klopt. Het Offerfeest begint op 10 Dzūl-Ḥijjah.", mentorDetail: "Bespreek het verschil met ʿEid al-Fiṭr." }];

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
    isCorrect ? "hadj-explorer/klopt-niet-goed" : "hadj-explorer/klopt-niet-fout",
    isCorrect ? "Hadj Explorer klopt-of-niet goed" : "Hadj Explorer klopt-of-niet fout"
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
const scenarios = [{ text: "Je ziet een grote drukte bij de Kaʾbah. Wat past bij hadj-adab?", options: ["Duwen om sneller te zijn", "Rustig blijven en niemand hinderen", "Hard roepen naar iedereen"], answer: 1, explain: "Goed. Een pelgrim probeert rustig, geduldig en vriendelijk te blijven.", mentorDetail: "Bespreek dat aanbidding ook zichtbaar wordt in gedrag." }, { text: "Een vriend weet de volgorde van de rituelen niet meer. Wat doe je?", options: ["Uitlachen", "Samen rustig de stappen herhalen", "Zeggen dat hij moet stoppen"], answer: 1, explain: "Mooi. Elkaar helpen past bij broederschap en zusterschap.", mentorDetail: "Laat het kind de volgorde hardop uitleggen." }, { text: "Tijdens iḥrām word je boos omdat iets lang duurt. Wat is de beste keuze?", options: ["Even ademhalen en sabr tonen", "Ruzie maken", "Iedereen de schuld geven"], answer: 0, explain: "Sterk. Sabr en zelfbeheersing horen bij iḥrām.", mentorDetail: "Gebruik dit om emotieregulatie concreet te maken." }, { text: "Je leert over Arafat. Welke duʿā past daarbij?", options: ["Alleen om speelgoed vragen", "Allah om vergeving en leiding vragen", "Geen duʿā doen"], answer: 1, explain: "Goed. Arafat is een dag van smeekbeden, berouw en hoop.", mentorDetail: "Laat het kind een korte persoonlijke duʿā formuleren." }, { text: "Je familie offert voor ʿEid al-Adha. Wat hoort daarbij?", options: ["Alles zelf houden", "Delen met familie en mensen in nood", "Voedsel verspillen"], answer: 1, explain: "Precies. Delen en dankbaarheid horen bij het Offerfeest.", mentorDetail: "Bespreek de sociale kant van het offer." }, { text: "Je maakt een hadj-routekaart. Wat zet je bij dag 9?", options: ["Arafat", "Laylatul Qadr", "Zakāt al-Fiṭr"], answer: 0, explain: "Goed. Dag 9 van Dzūl-Ḥijjah is de dag van Arafat.", mentorDetail: "Laat het kind de dagen 8, 9 en 10 ordenen." }];

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
    isCorrect ? "hadj-explorer/scenario-goed" : "hadj-explorer/scenario-fout",
    isCorrect ? "Hadj Explorer scenario goed" : "Hadj Explorer scenario fout"
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
const speedPool = [{ question: "Hadj is een van de...", options: ["vijf zuilen", "zes feesten", "drie boeken"], answer: 0, explain: "Hadj is één van de vijf zuilen." }, { question: "Hadj vindt plaats in...", options: ["Dzūl-Ḥijjah", "Shawwāl", "Rajab"], answer: 0, explain: "De hadj is in Dzūl-Ḥijjah." }, { question: "Ṭawāf telt hoeveel rondes?", options: ["7", "4", "10"], answer: 0, explain: "Ṭawāf telt zeven rondes." }, { question: "Saʿī is lopen tussen...", options: ["Ṣafā en Marwa", "Mina en Arafat", "Mekka en Medina"], answer: 0, explain: "Saʿī is tussen Ṣafā en Marwa." }, { question: "De kern van hadj is...", options: ["Arafat", "winkelen", "slapen"], answer: 0, explain: "De Profeet ﷺ zei: De hadj is Arafat." }, { question: "Iḥrām betekent...", options: ["gewijde staat", "einde van hadj", "feestgroet"], answer: 0, explain: "Iḥrām is de gewijde staat." }, { question: "Mina hoort bij...", options: ["hadj", "Zakāt", "Eid al-Fiṭr"], answer: 0, explain: "Pelgrims verblijven in Mina tijdens hadj." }, { question: "Muzdalifah komt na...", options: ["Arafat", "Ramadan", "Jumuʿah"], answer: 0, explain: "Na Arafat gaan pelgrims naar Muzdalifah." }, { question: "ramī betekent...", options: ["steniging van de jamarāt", "zeven rondes", "maaltijd"], answer: 0, explain: "ramī is het werpen bij de jamarāt." }, { question: "ʿEid al-Adha is het...", options: ["Offerfeest", "Suikerfeest", "Nieuwjaar"], answer: 0, explain: "ʿEid al-Adha is het Offerfeest." }, { question: "De Kaʾbah staat in...", options: ["Mekka", "Medina", "Jeruzalem"], answer: 0, explain: "De Kaʾbah staat in Mekka." }, { question: "Een pelgrim hoort vooral...", options: ["geduldig te zijn", "te duwen", "op te scheppen"], answer: 0, explain: "Geduld past bij hadj." }, { question: "De Mīqāt is...", options: ["grenspunt voor iḥrām", "feestdag", "berg op Arafat"], answer: 0, explain: "Vóór de Mīqāt neemt de pelgrim iḥrām aan." }, { question: "Hadj is verplicht voor wie...", options: ["ertoe in staat is", "zes jaar is", "op vakantie wil"], answer: 0, explain: "Hadj is voor wie lichamelijk en financieel in staat is." }, { question: "Na hadj hopen pelgrims op...", options: ["vergeving", "roem", "meer bezit"], answer: 0, explain: "Hadj draait om aanbidding, berouw en vergeving." }];

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
  trackEvent("hadj-explorer/snelheidsronde-afgerond", "Hadj Explorer snelheidsronde afgerond");
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
  trackEvent("hadj-explorer/snelheidsronde-gestart", "Hadj Explorer snelheidsronde gestart");

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
  trackEvent("hadj-explorer/modus-kind", "Hadj Explorer kind-modus");
  renderModeUI();
});

modeMentorBtn.addEventListener("click", () => {
  currentMode = "mentor";
  trackEvent("hadj-explorer/modus-ouder", "Hadj Explorer ouder-modus");
  renderModeUI();
});

checkOrderBtn.addEventListener("click", checkOrder);
shuffleOrderBtn.addEventListener("click", shuffleOrder);

// ─────────────────────────────────────────────────────────────────────────────
// 7. WIE BEN IK? — Raadsels
// ─────────────────────────────────────────────────────────────────────────────

const riddles = [{ clues: ["Ik ben zwart en kubusvormig.", "Pelgrims lopen zeven keer om mij heen.", "Ik sta in Mekka."], answer: "Kaʾbah", options: ["Kaʾbah", "Mina", "Muzdalifah"], explain: "De Kaʾbah staat in al-Masjid al-Ḥarām in Mekka." }, { clues: ["Ik ben een vlakte.", "Op mijn dag staan pelgrims in duʿā.", "Zonder mij is de hadj niet geldig."], answer: "Arafat", options: ["Arafat", "Ṣafā", "Marwa"], explain: "Arafat is de kern van de hadj." }, { clues: ["Ik ben een gewijde staat.", "Je begint mij vóór de Mīqāt.", "Ik vraagt om rust en zelfbeheersing."], answer: "Iḥrām", options: ["Iḥrām", "ramī", "Saʿī"], explain: "Iḥrām is de bijzondere staat waarin de pelgrim de hadj begint." }, { clues: ["Ik heb zeven rondes.", "Ik gebeurt rond de Kaʾbah.", "Mijn naam betekent rondgang."], answer: "Ṭawāf", options: ["Ṭawāf", "Saʿī", "Naḥr"], explain: "Ṭawāf bestaat uit zeven rondes rond de Kaʾbah." }, { clues: ["Ik ben lopen tussen twee heuvels.", "Mijn heuvels heten Ṣafā en Marwa.", "Ik herinnert aan Hajar."], answer: "Saʿī", options: ["Saʿī", "ramī", "Mīqāt"], explain: "Saʿī is het lopen tussen Ṣafā en Marwa." }, { clues: ["Ik begin op 10 Dzūl-Ḥijjah.", "Ik heet ook het Offerfeest.", "Ik herinnert aan Ibrāhīm, vrede zij met hem."], answer: "ʿEid al-Adha", options: ["ʿEid al-Adha", "ʿEid al-Fiṭr", "Laylatul Qadr"], explain: "ʿEid al-Adha is het Offerfeest tijdens de hadj-dagen." }];

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
    isCorrect ? "hadj-explorer/raadsel-goed" : "hadj-explorer/raadsel-fout",
    isCorrect ? "Hadj Explorer raadsel goed" : "Hadj Explorer raadsel fout"
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

const moonQuestions = [{ question: "Welke maand wordt ook de maand van de hadj genoemd?", options: ["Dzūl-Ḥijjah", "Ramadan", "Ṣafar"], answer: 0, explain: "Dzūl-Ḥijjah is de twaalfde maand en de maand van de hadj.", mentorDetail: "De naam betekent letterlijk: de maand van de hadj.", moonPhase: "🕋" }, { question: "Op welke dag van Dzūl-Ḥijjah is Arafat?", options: ["8e", "9e", "12e"], answer: 1, explain: "Arafat is op de 9e dag van Dzūl-Ḥijjah.", mentorDetail: "De 10e dag is het begin van ʿEid al-Adha.", moonPhase: "🌙" }, { question: "Wanneer begint ʿEid al-Adha?", options: ["10 Dzūl-Ḥijjah", "1 Shawwāl", "27 Ramadan"], answer: 0, explain: "ʿEid al-Adha begint op 10 Dzūl-Ḥijjah.", mentorDetail: "Leg het verschil met ʿEid al-Fiṭr uit.", moonPhase: "✨" }, { question: "Welke dagen zijn bekende hadj-dagen?", options: ["8 t/m 13 Dzūl-Ḥijjah", "Alleen vrijdag", "De laatste tien nachten van Ramadan"], answer: 0, explain: "De belangrijkste hadj-rituelen vallen van 8 tot en met 13 Dzūl-Ḥijjah.", mentorDetail: "Maak samen een korte tijdlijn.", moonPhase: "📅" }, { question: "Waarom verschuiven hadj-dagen elk zonnejaar?", options: ["De islamitische kalender is maan-gebaseerd", "Iedereen kiest zelf", "Omdat Mekka verhuist"], answer: 0, explain: "De islamitische kalender volgt de maan en is korter dan het zonnejaar.", mentorDetail: "Daardoor vallen islamitische maanden door de jaren heen in verschillende seizoenen.", moonPhase: "🌗" }];

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
    isCorrect ? "hadj-explorer/maan-goed" : "hadj-explorer/maan-fout",
    isCorrect ? "Hadj Explorer maan goed" : "Hadj Explorer maan fout"
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

const worldTraditions = [{ tradition: "Pelgrims uit de hele wereld verzamelen zich hier voor ṭawāf rond de Kaʾbah.", country: "Mekka", options: ["Mekka", "Medina", "Caïro"], explain: "Mekka is de stad van de Kaʾbah en het hart van de hadj.", mentorDetail: "Bespreek waarom Mekka zo centraal staat in de islam." }, { tradition: "Op deze vlakte staan pelgrims op de 9e Dzūl-Ḥijjah in smeekbeden.", country: "Arafat", options: ["Arafat", "Mina", "Ṣafā"], explain: "Arafat is de plek van het belangrijkste hadj-ritueel.", mentorDetail: "Gebruik de uitspraak ‘De hadj is Arafat’." }, { tradition: "Hier overnachten pelgrims na Arafat en verzamelen zij steentjes voor ramī.", country: "Muzdalifah", options: ["Muzdalifah", "Marwa", "Taif"], explain: "Muzdalifah komt na Arafat in de hadj-route.", mentorDetail: "Laat kinderen de route op een kaart aanwijzen." }, { tradition: "Veel pelgrims verblijven hier in tenten tijdens de hadj-dagen.", country: "Mina", options: ["Mina", "Jeruzalem", "Damascus"], explain: "Mina staat bekend om de tenten en de jamarāt.", mentorDetail: "Bespreek organisatie, veiligheid en geduld in drukte." }, { tradition: "Moslims wereldwijd die niet op hadj zijn, vieren deze dag met gebed, offer en delen.", country: "Wereldwijd", options: ["Wereldwijd", "Alleen Mekka", "Alleen Medina"], explain: "ʿEid al-Adha wordt door moslims over de hele wereld gevierd.", mentorDetail: "Leg uit hoe hadj en de ummah wereldwijd verbonden zijn." }];

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
    isCorrect ? "hadj-explorer/wereld-goed" : "hadj-explorer/wereld-fout",
    isCorrect ? "Hadj Explorer wereld goed" : "Hadj Explorer wereld fout"
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
  "De Qur'an noemt de hadj en het Huis van Allah als tekenen van aanbidding.",
  "Sūrah al-Ḥajj is vernoemd naar de bedevaart.",
  "De Kaʾbah wordt in de Qur'an het eerste huis van aanbidding genoemd.",
  "Dzūl-Ḥijjah is de maand waarin de hadj plaatsvindt.",
  "Arafat herinnert pelgrims aan duʿā, berouw en de ontmoeting met Allah.",
  "Iḥrām leert eenvoud, nederigheid en zelfbeheersing.",
  "Bij saʿī herinneren moslims het vertrouwen van Hajar.",
  "Het Offerfeest herinnert aan Ibrāhīm, vrede zij met hem, en gehoorzaamheid aan Allah."
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
    trackEvent("hadj-explorer/khatm-quran", "Hadj Explorer Khatm al-Qur'an");
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
    deed: "Teken vandaag een kleine hadj-route: Mīqāt, Mekka, Mina, Arafat, Muzdalifah en terug naar Mina.",
    explain: "Mooi! De hadj heeft vaste stappen. Door ze te tekenen onthoud je beter hoe de bedevaart verloopt.",
    mentorDetail: "Laat het kind bij elke plek één zin vertellen: wat gebeurt daar en waarom is die stap belangrijk?"
  },
  {
    deed: "Oefen de talbiyah drie keer rustig: Labbayka Allāhumma labbayk.",
    explain: "Goed gedaan! De talbiyah is een belangrijke uitspraak van de pelgrim na de intentie.",
    mentorDetail: "Bespreek dat de talbiyah betekent dat je Allah antwoordt en Hem gehoorzaamt."
  },
  {
    deed: "Maak een Arafat-duʿā-lijstje met drie smeekbeden: voor jezelf, je familie en de ummah.",
    explain: "Prachtig. Arafat is een dag van duʿā, berouw, hoop en vergeving.",
    mentorDetail: "Houd de duʿā kort, concreet en kindvriendelijk: voor zichzelf, familie en de ummah."
  },
  {
    deed: "Doe vandaag bewust sabr: blijf rustig op een moment waarop je normaal boos zou worden.",
    explain: "Sterk! De hadj leert geduld, zelfbeheersing en nederigheid, zeker in drukte en vermoeidheid.",
    mentorDetail: "Koppel dit aan de iḥrām-regels en het advies om kalm te blijven tijdens de heilige reis."
  },
  {
    deed: "Leer het verschil tussen ʿEid al-Fiṭr en ʿEid al-Adha en leg het aan iemand uit.",
    explain: "Goed bezig! ʿEid al-Adha hoort bij Dzūl-Ḥijjah, de hadj-dagen en het Offerfeest.",
    mentorDetail: "Maak het verschil helder: ʿEid al-Fiṭr volgt na Ramadan; ʿEid al-Adha hoort bij de dagen van hadj en het offer."
  },
  {
    deed: "Deel vandaag iets kleins met iemand of help thuis zonder dat iemand het vraagt.",
    explain: "Mooi! Het Offerfeest herinnert ons aan dankbaarheid, delen en zorgen voor anderen.",
    mentorDetail: "Maak de opdracht praktisch: tafel dekken, opruimen, iets delen of iemand vriendelijk helpen."
  },
  {
    deed: "Zoek op wat iḥrām betekent en noem twee dingen die een pelgrim dan extra goed moet bewaken.",
    explain: "Goed! Iḥrām is niet alleen kleding, maar ook een staat waarin je je gedrag bewaakt.",
    mentorDetail: "Laat het kind voorbeelden noemen: niet ruziën, rustig blijven, nederig zijn en bewust aanbidden."
  },
  {
    deed: "Vertel in je eigen woorden waarom Arafat het hart van de hadj wordt genoemd.",
    explain: "Knap gedaan! De Profeet ﷺ leerde dat Arafat de kern van de hadj is.",
    mentorDetail: "Help het kind de koppeling maken tussen staan op Arafat, duʿā en vergeving."
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
  trackEvent("hadj-explorer/goede-daad-gedaan", "Hadj Explorer goede daad gedaan");
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
// 12. HADJ-PAKKER
// ─────────────────────────────────────────────────────────────────────────────

const chefItems = [{ name: "Iḥrām-kleding 🤍", id: "ihram", good: true, explain: "Iḥrām-kleding herinnert aan eenvoud, gelijkheid en nederigheid." }, { name: "Waterfles 💧", id: "water", good: true, explain: "Water meenemen en gezond blijven is belangrijk bij drukte en warmte." }, { name: "Goede slippers 🩴", id: "slippers", good: true, explain: "Comfortabele, eenvoudige schoenen helpen bij veel lopen." }, { name: "Duʿā-lijstje 🤲", id: "dua", good: true, explain: "Een duʿā-lijst helpt je op bijzondere momenten bewust te smeken." }, { name: "Geduld 🫶", id: "sabr", good: true, explain: "Sabr is misschien wel het belangrijkste wat je meeneemt." }, { name: "Kleine tas 🎒", id: "tas", good: true, explain: "Een lichte tas met noodzakelijke spullen is handig." }, { name: "Opscheppen 🗣️", id: "opscheppen", good: false, explain: "Hadj vraagt juist nederigheid, niet pronken." }, { name: "Duwen 😠", id: "duwen", good: false, explain: "Duwen en boosheid passen niet bij hadj-adab." }, { name: "Overbodige luxe 💎", id: "luxe", good: false, explain: "Hadj leert eenvoud; neem alleen mee wat nuttig is." }];

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
  if (chefSelected.size === 0) { chefFeedbackEl.textContent = "Kies eerst een paar dingen voor je hadj-tas!"; chefFeedbackEl.className = "feedback bad"; return; }
  const selected = chefItems.filter((item) => chefSelected.has(item.id));
  const goodSelected = selected.filter((item) => item.good);
  const badSelected = selected.filter((item) => !item.good);
  const hasIhram = chefSelected.has("ihram");
  const hasWater = chefSelected.has("water");
  const hasSabr = chefSelected.has("sabr");
  let feedback = ""; let starsToAdd = 0; let isGood = false;
  if (goodSelected.length >= 3 && badSelected.length === 0) { isGood = true; starsToAdd = 3; feedback = "Uitstekend! Je hebt een verstandige hadj-voorbereiding gekozen. "; }
  else if (goodSelected.length >= 2) { isGood = true; starsToAdd = 2; feedback = "Goed gedaan! Je tas heeft al belangrijke keuzes. "; }
  else if (goodSelected.length >= 1) { isGood = true; starsToAdd = 1; feedback = "Aardig begin! Kies nog meer dingen die bij hadj passen. "; }
  else { feedback = "Hmm, probeer keuzes te maken die een pelgrim echt helpen. "; }
  if (hasIhram && hasWater && hasSabr) feedback += "Mooi: iḥrām, water en sabr samen laten voorbereiding én karakter zien. ";
  else if (goodSelected.length > 0) feedback += "Tip: denk aan iḥrām, water en vooral sabr. ";
  if (badSelected.length > 0) { const badNames = badSelected.map((i) => i.name).join(", "); feedback += "Let op: " + badNames + " " + (badSelected.length === 1 ? "past" : "passen") + " niet goed bij hadj. "; if (currentMode === "mentor") feedback += badSelected.map((i) => i.explain).join(" "); }
  if (goodSelected.length > 0) feedback += goodSelected.slice(0, 2).map((i) => i.explain).join(" ");
  chefFeedbackEl.textContent = feedback;
  chefFeedbackEl.className = "feedback " + (isGood ? "good" : "bad");
  if (starsToAdd > 0) addStars(starsToAdd);
  trackEvent("hadj-explorer/chef-gecontroleerd", "Hadj Explorer pakker gecontroleerd");
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

const eidQuestions = [{ question: "Wat betekent ʿEid al-Adha?", options: ["Het Offerfeest", "Het breken van het vasten", "Het begin van Ramadan"], answer: 0, explain: "ʿEid al-Adha is het Offerfeest en valt tijdens de hadj-dagen.", mentorDetail: "Leg het verschil uit tussen ʿEid al-Fiṭr en ʿEid al-Adha." }, { question: "Op welke datum begint ʿEid al-Adha?", options: ["10 Dzūl-Ḥijjah", "1 Shawwāl", "27 Ramadan"], answer: 0, explain: "ʿEid al-Adha begint op de 10e van Dzūl-Ḥijjah.", mentorDetail: "De dag ervoor is Arafat." }, { question: "Bij welk profetenverhaal hoort het Offerfeest?", options: ["Ibrāhīm en Ismāʿīl, vrede zij met hen", "Yūsuf, vrede zij met hem", "Nūḥ vrede zij met hem"], answer: 0, explain: "Het Offerfeest herinnert aan het vertrouwen en de gehoorzaamheid van Ibrāhīm en Ismāʿīl.", mentorDetail: "Houd het kindvriendelijk: focus op vertrouwen op Allah." }, { question: "Wat hoort bij ʿEid al-Adha?", options: ["Delen met familie en mensen in nood", "Alleen zelf eten", "Niet bidden"], answer: 0, explain: "Bij het Offerfeest horen gebed, dankbaarheid en delen.", mentorDetail: "Bespreek de sociale waarde van delen." }, { question: "Welke begroeting kun je op ʿEid zeggen?", options: ["ʿEid Mubārak!", "Goedenacht alleen", "Geen begroeting"], answer: 0, explain: "ʿEid Mubārak betekent: gezegend feest!", mentorDetail: "Laat het kind oefenen met een warme begroeting." }];

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
    isCorrect ? "hadj-explorer/eid-goed" : "hadj-explorer/eid-fout",
    isCorrect ? "Hadj Explorer eid goed" : "Hadj Explorer eid fout"
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

// ── ZOEK DE AFWIJKER ────────────────────────────────────
const afwijkerData = [{ items: ["Iḥrām", "Ṭawāf", "Saʿī", "Zakāt al-Fiṭr"], afwijker: "Zakāt al-Fiṭr", uitleg: "Iḥrām, ṭawāf en saʿī horen bij hadj/ʿUmrah. Zakāt al-Fiṭr hoort bij het einde van Ramadan.", mentorDetail: "Mooi moment om ʿEid al-Fiṭr en ʿEid al-Adha te onderscheiden." }, { items: ["Mina", "Arafat", "Muzdalifah", "Badr"], afwijker: "Badr", uitleg: "Mina, Arafat en Muzdalifah zijn plekken in de hadj-route. Badr hoort bij een historische veldslag.", mentorDetail: "Laat de drie hadj-plekken op volgorde zetten." }, { items: ["Sabr", "Nederigheid", "Gelijkheid", "Arrogantie"], afwijker: "Arrogantie", uitleg: "Sabr, nederigheid en gelijkheid zijn lessen van hadj. Arrogantie past daar niet bij.", mentorDetail: "Bespreek waarom iḥrām gelijkheid zichtbaar maakt." }, { items: ["Dzūl-Ḥijjah", "Arafat", "ʿEid al-Adha", "Laylatul Qadr"], afwijker: "Laylatul Qadr", uitleg: "Laylatul Qadr hoort bij Ramadan; de andere drie bij hadj.", mentorDetail: "Kalenderbegrip helpt verwarring voorkomen." }, { items: ["ramī", "Jamarāt", "Muzdalifah", "Tarāwīḥ"], afwijker: "Tarāwīḥ", uitleg: "Tarāwīḥ is een Ramadan-gebed. De andere woorden horen bij hadj.", mentorDetail: "Laat het kind uitleggen wat ramī betekent." }];

let afwijkerIndex = 0;
let afwijkerShuffled = shuffleArray(afwijkerData.map((_, i) => i));
let afwijkerAnswered = false;

const afwijkerRoundEl = document.getElementById("afwijker-round");
const afwijkerOptionsEl = document.getElementById("afwijker-options");
const afwijkerFeedbackEl = document.getElementById("afwijker-feedback");
const afwijkerNextBtn = document.getElementById("afwijker-next");

function renderAfwijker() {
  const dataIndex = afwijkerShuffled[afwijkerIndex % afwijkerShuffled.length];
  const round = afwijkerData[dataIndex];
  afwijkerAnswered = false;
  afwijkerRoundEl.textContent = `Ronde ${(afwijkerIndex % afwijkerData.length) + 1} van ${afwijkerData.length}`;
  afwijkerFeedbackEl.textContent = "";
  afwijkerFeedbackEl.className = "feedback";
  afwijkerOptionsEl.innerHTML = "";

  const shuffledIndices = shuffleArray([0, 1, 2, 3]);
  shuffledIndices.forEach((origIdx) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = round.items[origIdx];
    btn.addEventListener("click", () => {
      if (afwijkerAnswered) return;
      afwijkerAnswered = true;
      const isCorrect = origIdx === round.correct;
      trackEvent(
        isCorrect ? "hadj-explorer/afwijker-goed" : "hadj-explorer/afwijker-fout",
        isCorrect ? "Hadj Explorer afwijker goed" : "Hadj Explorer afwijker fout"
      );
      let feedback = isCorrect
        ? `✓ Goed! ${round.uitleg}`
        : `✗ Niet helemaal. Het juiste antwoord is "${round.items[round.correct]}". ${round.uitleg}`;
      if (currentMode === "mentor") feedback += ` | 💬 ${round.mentorDetail}`;
      afwijkerFeedbackEl.textContent = feedback;
      afwijkerFeedbackEl.className = `feedback ${isCorrect ? "good" : "bad"}`;
      if (isCorrect) addStars(2);
      Array.from(afwijkerOptionsEl.children).forEach((b) => { b.disabled = true; });
    });
    afwijkerOptionsEl.appendChild(btn);
  });
}

afwijkerNextBtn.addEventListener("click", () => {
  afwijkerIndex += 1;
  if (afwijkerIndex % afwijkerData.length === 0) {
    afwijkerShuffled = shuffleArray(afwijkerData.map((_, i) => i));
  }
  renderAfwijker();
});

// ── FOUT-JAGER ───────────────────────────────────────────
const foutjagerVerhalen = [{ titel: "Amina's hadj-route", aantalFouten: 2, segmenten: [ { tekst: "Amina leert dat de hadj begint met ", klikbaar: false }, { tekst: "iḥrām", klikbaar: true, fout: false, uitleg: "Correct! Iḥrām hoort bij het begin van hadj." }, { tekst: ". Daarna gaan pelgrims naar Mina, vervolgens naar ", klikbaar: false }, { tekst: "Arafat", klikbaar: true, fout: false, uitleg: "Correct! Arafat is de kern van hadj." }, { tekst: ", en na Arafat naar ", klikbaar: false }, { tekst: "Laylatul Qadr", klikbaar: true, fout: true, uitleg: "Fout! Na Arafat gaan pelgrims naar Muzdalifah. Laylatul Qadr hoort bij Ramadan." }, { tekst: ". Op 10 Dzūl-Ḥijjah begint ", klikbaar: false }, { tekst: "ʿEid al-Fiṭr", klikbaar: true, fout: true, uitleg: "Fout! Op 10 Dzūl-Ḥijjah begint ʿEid al-Adha." }, { tekst: ".", klikbaar: false } ] }, { titel: "hadj-weetjes", aantalFouten: 2, segmenten: [ { tekst: "Hadj is één van de ", klikbaar: false }, { tekst: "vijf zuilen", klikbaar: true, fout: false, uitleg: "Correct! Hadj is één van de vijf zuilen." }, { tekst: " en vindt plaats in ", klikbaar: false }, { tekst: "Ramadan", klikbaar: true, fout: true, uitleg: "Fout! Hadj vindt plaats in Dzūl-Ḥijjah." }, { tekst: ". Ṭawāf bestaat uit ", klikbaar: false }, { tekst: "zeven rondes", klikbaar: true, fout: false, uitleg: "Correct! Ṭawāf telt zeven rondes." }, { tekst: " om de Kaʾbah. Saʿī is lopen tussen ", klikbaar: false }, { tekst: "Mina en Arafat", klikbaar: true, fout: true, uitleg: "Fout! Saʿī is lopen tussen Ṣafā en Marwa." }, { tekst: ".", klikbaar: false } ] }, { titel: "Gedrag van een pelgrim", aantalFouten: 2, segmenten: [ { tekst: "Een pelgrim probeert tijdens iḥrām ", klikbaar: false }, { tekst: "geduldig", klikbaar: true, fout: false, uitleg: "Correct! Sabr past bij hadj." }, { tekst: " te zijn, drukte rustig te verdragen en niemand te ", klikbaar: false }, { tekst: "duwen", klikbaar: true, fout: true, uitleg: "Fout! Duwen past niet bij hadj-adab." }, { tekst: ". De iḥrām herinnert aan ", klikbaar: false }, { tekst: "gelijkheid", klikbaar: true, fout: false, uitleg: "Correct! Iḥrām laat gelijkheid zien." }, { tekst: " en ", klikbaar: false }, { tekst: "opscheppen", klikbaar: true, fout: true, uitleg: "Fout! Hadj leert nederigheid, niet opscheppen." }, { tekst: ".", klikbaar: false } ] }];

let foutjagerIndex = 0;
let foutjagerGekozen = new Set();
let foutjagerChecked = false;

const foutjagerStoryEl = document.getElementById("foutjager-story");
const foutjagerCountEl = document.getElementById("foutjager-count");
const foutjagerCheckBtn = document.getElementById("foutjager-check");
const foutjagerNextBtn = document.getElementById("foutjager-next");
const foutjagerResultEl = document.getElementById("foutjager-result");

function renderFoutjager() {
  const verhaal = foutjagerVerhalen[foutjagerIndex % foutjagerVerhalen.length];
  foutjagerGekozen = new Set();
  foutjagerChecked = false;
  foutjagerCountEl.textContent = verhaal.aantalFouten;
  foutjagerResultEl.innerHTML = "";
  foutjagerCheckBtn.disabled = false;
  foutjagerStoryEl.innerHTML = "";

  const titleEl = document.createElement("p");
  titleEl.className = "foutjager-titel";
  titleEl.textContent = `📖 ${verhaal.titel}`;
  foutjagerStoryEl.appendChild(titleEl);

  const storyP = document.createElement("p");
  storyP.className = "foutjager-tekst";

  verhaal.segmenten.forEach((seg, idx) => {
    if (!seg.klikbaar) {
      storyP.appendChild(document.createTextNode(seg.tekst));
    } else {
      const span = document.createElement("span");
      span.className = "fout-segment";
      span.textContent = seg.tekst;
      span.dataset.idx = idx;
      span.addEventListener("click", () => {
        if (foutjagerChecked) return;
        if (foutjagerGekozen.has(idx)) {
          foutjagerGekozen.delete(idx);
          span.classList.remove("selected");
        } else {
          foutjagerGekozen.add(idx);
          span.classList.add("selected");
        }
      });
      storyP.appendChild(span);
    }
  });

  foutjagerStoryEl.appendChild(storyP);
}

function checkFoutjager() {
  if (foutjagerChecked) return;
  foutjagerChecked = true;
  foutjagerCheckBtn.disabled = true;

  const verhaal = foutjagerVerhalen[foutjagerIndex % foutjagerVerhalen.length];
  const aantalFouten = verhaal.aantalFouten;
  let aantalGoed = 0;
  let aantalVerkeerd = 0;

  foutjagerStoryEl.querySelectorAll(".fout-segment").forEach((span) => {
    const idx = parseInt(span.dataset.idx, 10);
    const seg = verhaal.segmenten[idx];
    const wasGekozen = foutjagerGekozen.has(idx);
    span.classList.remove("selected");
    if (seg.fout && wasGekozen) {
      span.classList.add("correct-pick");
      aantalGoed += 1;
    } else if (!seg.fout && wasGekozen) {
      span.classList.add("wrong-pick");
      aantalVerkeerd += 1;
    } else if (seg.fout && !wasGekozen) {
      span.classList.add("missed");
    }
  });

  foutjagerResultEl.innerHTML = "";

  const isAllesGoed = aantalGoed === aantalFouten && aantalVerkeerd === 0;
  trackEvent(
    isAllesGoed ? "hadj-explorer/foutjager-perfect" : "hadj-explorer/foutjager-geprobeerd",
    isAllesGoed ? "Hadj Explorer fout-jager perfect" : "Hadj Explorer fout-jager geprobeerd"
  );

  const summary = document.createElement("p");
  summary.className = `feedback ${isAllesGoed ? "good" : "bad"}`;
  summary.textContent = isAllesGoed
    ? `🎉 Perfect! Je vond alle ${aantalFouten} fouten! +3 ⭐`
    : `Je vond ${aantalGoed} van de ${aantalFouten} fouten. Kijk goed naar de uitleg!`;
  foutjagerResultEl.appendChild(summary);

  if (isAllesGoed) {
    addStars(3);
  } else if (aantalGoed > 0) {
    addStars(1);
  }

  verhaal.segmenten.forEach((seg, idx) => {
    if (!seg.klikbaar) return;
    const wasGekozen = foutjagerGekozen.has(idx);
    if (!seg.fout && !wasGekozen) return;
    const div = document.createElement("div");
    if (seg.fout && wasGekozen) {
      div.className = "foutjager-item goed";
      div.textContent = `✓ "${seg.tekst}": ${seg.uitleg}`;
    } else if (seg.fout && !wasGekozen) {
      div.className = "foutjager-item gemist";
      div.textContent = `✗ Gemist — "${seg.tekst}": ${seg.uitleg}`;
    } else {
      div.className = "foutjager-item verkeerd";
      div.textContent = `✗ "${seg.tekst}" is geen fout: ${seg.uitleg}`;
    }
    foutjagerResultEl.appendChild(div);
  });

  if (currentMode === "mentor") {
    const mentorDiv = document.createElement("div");
    mentorDiv.className = "mentor-note";
    mentorDiv.textContent = "💬 Ouder-tip: Lees de uitleg samen na en bespreek welke fouten de slimste afleidingen waren. Vraag je kind ook zelf fouten te verzinnen!";
    foutjagerResultEl.appendChild(mentorDiv);
  }
}

foutjagerCheckBtn.addEventListener("click", checkFoutjager);
foutjagerNextBtn.addEventListener("click", () => {
  foutjagerIndex = (foutjagerIndex + 1) % foutjagerVerhalen.length;
  renderFoutjager();
});

// ── EMOJI DECODER ────────────────────────────────────────
const emojiData = [{ reeks: "🕋🔁7️⃣", antwoord: "Ṭawāf", opties: ["Ṭawāf", "Saʿī", "ramī"], uitleg: "Kaʾbah + rondgaan + zeven = ṭawāf.", mentorDetail: "Laat het kind zeven rondes met de vinger tekenen." }, { reeks: "⛰️🚶‍♂️⛰️", antwoord: "Saʿī", opties: ["Saʿī", "Iḥrām", "Naḥr"], uitleg: "Twee heuvels en lopen: Ṣafā en Marwa.", mentorDetail: "Koppel dit aan Hajar." }, { reeks: "🤍🧘‍♂️🚫😡", antwoord: "Iḥrām", opties: ["Iḥrām", "Bingo", "Zakāt"], uitleg: "Witte/eenvoudige kleding, rust en geen boosheid passen bij iḥrām.", mentorDetail: "Bespreek gedragsregels in iḥrām." }, { reeks: "🏕️🌙🪨", antwoord: "Muzdalifah", opties: ["Muzdalifah", "Medina", "Marwa"], uitleg: "Na Arafat overnachten pelgrims in Muzdalifah en verzamelen steentjes.", mentorDetail: "Plaats Muzdalifah op de hadj-route." }, { reeks: "🎉🐑🤲", antwoord: "ʿEid al-Adha", opties: ["ʿEid al-Adha", "ʿEid al-Fiṭr", "Laylatul Qadr"], uitleg: "Feest + offer + dankbaarheid = ʿEid al-Adha.", mentorDetail: "Leg delen en zorg voor anderen uit." }];

let emojiIndex = 0;
let emojiShuffled = shuffleArray(emojiData.map((_, i) => i));

const emojiDisplayEl = document.getElementById("emoji-display");
const emojiRoundEl = document.getElementById("emoji-round");
const emojiOptionsEl = document.getElementById("emoji-options");
const emojiFeedbackEl = document.getElementById("emoji-feedback");
const emojiNextBtn = document.getElementById("emoji-next");

function renderEmoji() {
  const dataIndex = emojiShuffled[emojiIndex % emojiShuffled.length];
  const item = emojiData[dataIndex];
  emojiDisplayEl.textContent = item.reeks;
  emojiRoundEl.textContent = `Reeks ${(emojiIndex % emojiData.length) + 1} van ${emojiData.length}`;
  emojiFeedbackEl.textContent = "";
  emojiFeedbackEl.className = "feedback";
  emojiOptionsEl.innerHTML = "";

  const shuffledOpties = shuffleArray([...item.opties]);
  shuffledOpties.forEach((optie) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.textContent = optie;
    btn.addEventListener("click", () => {
      const isCorrect = optie === item.antwoord;
      trackEvent(
        isCorrect ? "hadj-explorer/emoji-goed" : "hadj-explorer/emoji-fout",
        isCorrect ? "Hadj Explorer emoji goed" : "Hadj Explorer emoji fout"
      );
      let feedback = isCorrect
        ? `✓ Goed! ${item.uitleg}`
        : `✗ Niet helemaal. Het juiste antwoord is "${item.antwoord}". ${item.uitleg}`;
      if (currentMode === "mentor") feedback += ` | 💬 ${item.mentorDetail}`;
      emojiFeedbackEl.textContent = feedback;
      emojiFeedbackEl.className = `feedback ${isCorrect ? "good" : "bad"}`;
      if (isCorrect) addStars(2);
      Array.from(emojiOptionsEl.children).forEach((b) => { b.disabled = true; });
    });
    emojiOptionsEl.appendChild(btn);
  });
}

emojiNextBtn.addEventListener("click", () => {
  emojiIndex += 1;
  if (emojiIndex % emojiData.length === 0) {
    emojiShuffled = shuffleArray(emojiData.map((_, i) => i));
  }
  renderEmoji();
});

// ── CATEGORIE SORTEERSPEL ────────────────────────────────
const sorterRondes = [{ intro: "Klik elk item aan en plaats het bij: hadj-plek of hadj-ritueel.", categorieen: ["Plek", "Ritueel"], items: [ { label: "Mina", correct: "Plek" }, { label: "Arafat", correct: "Plek" }, { label: "Ṭawāf", correct: "Ritueel" }, { label: "Saʿī", correct: "Ritueel" }, { label: "Muzdalifah", correct: "Plek" }, { label: "ramī", correct: "Ritueel" } ], mentorDetail: "Vraag na afloop om de route hardop te vertellen." }, { intro: "Wat hoort bij goed hadj-gedrag, en wat past er niet bij?", categorieen: ["Past bij hadj", "Past niet"], items: [ { label: "Sabr", correct: "Past bij hadj" }, { label: "Nederigheid", correct: "Past bij hadj" }, { label: "Duwen", correct: "Past niet" }, { label: "Opscheppen", correct: "Past niet" }, { label: "Helpen", correct: "Past bij hadj" }, { label: "Ruzie zoeken", correct: "Past niet" } ], mentorDetail: "Koppel elk woord aan een concrete situatie." }, { intro: "Hoort dit bij ʿEid al-Adha of bij ʿEid al-Fiṭr?", categorieen: ["ʿEid al-Adha", "ʿEid al-Fiṭr"], items: [ { label: "Offerfeest", correct: "ʿEid al-Adha" }, { label: "Na Ramadan", correct: "ʿEid al-Fiṭr" }, { label: "10 Dzūl-Ḥijjah", correct: "ʿEid al-Adha" }, { label: "Zakāt al-Fiṭr", correct: "ʿEid al-Fiṭr" }, { label: "Verhaal van Ibrāhīm", correct: "ʿEid al-Adha" }, { label: "1 Shawwāl", correct: "ʿEid al-Fiṭr" } ], mentorDetail: "Dit voorkomt verwarring tussen de twee feesten." }];

let sorterRondeIndex = 0;
let sorterPlaatsingen = {};
let sorterActiefItem = null;
let sorterChecked = false;

const sorterIntroEl = document.getElementById("sorter-intro");
const sorterItemsEl = document.getElementById("sorter-items");
const sorterBucketsEl = document.getElementById("sorter-buckets");
const sorterCheckBtn = document.getElementById("sorter-check");
const sorterResetBtn = document.getElementById("sorter-reset");
const sorterFeedbackEl = document.getElementById("sorter-feedback");

function renderSorter() {
  const ronde = sorterRondes[sorterRondeIndex % sorterRondes.length];
  sorterPlaatsingen = {};
  sorterActiefItem = null;
  sorterChecked = false;
  sorterIntroEl.textContent = ronde.intro;
  sorterFeedbackEl.textContent = "";
  sorterFeedbackEl.className = "feedback";
  sorterCheckBtn.disabled = false;
  sorterItemsEl.innerHTML = "";
  sorterBucketsEl.innerHTML = "";

  const shuffledItems = shuffleArray([...ronde.items]);
  shuffledItems.forEach((item) => {
    const btn = document.createElement("button");
    btn.className = "sorter-item";
    btn.textContent = item.label;
    btn.dataset.label = item.label;
    btn.addEventListener("click", () => {
      if (sorterChecked) return;
      if (sorterActiefItem === btn) {
        btn.classList.remove("active");
        sorterActiefItem = null;
        highlightBuckets(false);
      } else {
        if (sorterActiefItem) sorterActiefItem.classList.remove("active");
        sorterActiefItem = btn;
        btn.classList.add("active");
        highlightBuckets(true);
      }
    });
    sorterItemsEl.appendChild(btn);
  });

  ronde.categorieen.forEach((cat) => {
    const bucket = document.createElement("div");
    bucket.className = "sorter-bucket";
    bucket.dataset.cat = cat;

    const label = document.createElement("span");
    label.className = "sorter-bucket-label";
    label.textContent = cat;
    bucket.appendChild(label);

    const itemsDiv = document.createElement("div");
    itemsDiv.className = "sorter-bucket-items";
    bucket.appendChild(itemsDiv);

    bucket.addEventListener("click", () => {
      if (sorterChecked || !sorterActiefItem) return;
      const itemLabel = sorterActiefItem.dataset.label;
      sorterPlaatsingen[itemLabel] = cat;
      sorterActiefItem.classList.remove("active");
      sorterActiefItem.classList.add("placed");

      const tag = document.createElement("span");
      tag.className = "sorter-placed-tag";
      tag.textContent = itemLabel;
      tag.dataset.label = itemLabel;
      tag.addEventListener("click", (e) => {
        if (sorterChecked) return;
        e.stopPropagation();
        delete sorterPlaatsingen[itemLabel];
        sorterActiefItem = null;
        const origBtn = Array.from(sorterItemsEl.children)
          .find((b) => b.dataset.label === itemLabel);
        if (origBtn) {
          origBtn.classList.remove("placed", "active");
        }
        tag.remove();
        highlightBuckets(false);
      });
      itemsDiv.appendChild(tag);

      sorterActiefItem = null;
      highlightBuckets(false);
    });

    sorterBucketsEl.appendChild(bucket);
  });
}

function highlightBuckets(on) {
  sorterBucketsEl.querySelectorAll(".sorter-bucket").forEach((b) => {
    b.classList.toggle("highlight", on);
  });
}

function checkSorter() {
  if (sorterChecked) return;
  const ronde = sorterRondes[sorterRondeIndex % sorterRondes.length];
  const totaal = ronde.items.length;
  const geplaatst = Object.keys(sorterPlaatsingen).length;

  if (geplaatst < totaal) {
    sorterFeedbackEl.textContent = `Nog ${totaal - geplaatst} item(s) te plaatsen!`;
    sorterFeedbackEl.className = "feedback bad";
    return;
  }

  sorterChecked = true;
  sorterCheckBtn.disabled = true;
  let aantalGoed = 0;

  sorterBucketsEl.querySelectorAll(".sorter-placed-tag").forEach((tag) => {
    const item = ronde.items.find((it) => it.label === tag.dataset.label);
    const isCorrect = item && sorterPlaatsingen[item.label] === item.correct;
    tag.classList.add(isCorrect ? "correct" : "incorrect");
    if (isCorrect) aantalGoed += 1;
  });

  sorterItemsEl.querySelectorAll(".sorter-item").forEach((btn) => {
    const item = ronde.items.find((it) => it.label === btn.dataset.label);
    if (item) {
      btn.classList.add(sorterPlaatsingen[item.label] === item.correct ? "correct" : "incorrect");
    }
  });

  const isAllesGoed = aantalGoed === totaal;
  trackEvent(
    isAllesGoed ? "hadj-explorer/sorter-perfect" : "hadj-explorer/sorter-geprobeerd",
    isAllesGoed ? "Hadj Explorer sorter perfect" : "Hadj Explorer sorter geprobeerd"
  );

  if (isAllesGoed) {
    sorterFeedbackEl.textContent = `🎉 Perfect gesorteerd! Alle ${totaal} items kloppen. +3 ⭐`;
    sorterFeedbackEl.className = "feedback good";
    addStars(3);
  } else {
    sorterFeedbackEl.textContent = `${aantalGoed} van de ${totaal} items correct geplaatst. De rode items staan fout.`;
    sorterFeedbackEl.className = "feedback bad";
    if (aantalGoed > 0) addStars(1);
  }

  if (currentMode === "mentor") {
    const mentorDiv = document.createElement("div");
    mentorDiv.className = "mentor-note";
    mentorDiv.textContent = `💬 Ouder-tip: ${ronde.mentorDetail}`;
    sorterBucketsEl.after(mentorDiv);
  }
}

sorterCheckBtn.addEventListener("click", checkSorter);
sorterResetBtn.addEventListener("click", () => {
  sorterRondeIndex = (sorterRondeIndex + 1) % sorterRondes.length;
  const mentorNote = sorterBucketsEl.parentElement.querySelector(".mentor-note");
  if (mentorNote) mentorNote.remove();
  renderSorter();
});

// ── TWEE WAARHEDEN, ÉÉN LEUGEN ──────────────────────────
const twData = [{ statements: ["Hadj is één van de vijf zuilen.", "Hadj vindt plaats in Dzūl-Ḥijjah.", "Hadj is verplicht voor elk kind vanaf zeven jaar."], lieIndex: 2, explanations: ["Correct. Hadj is een pijler.", "Correct. Dzūl-Ḥijjah is de hadj-maand.", "Fout! Hadj is verplicht voor volwassen moslims die ertoe in staat zijn."], mentorDetail: "Bespreek de voorwaarden van verplichting." }, { statements: ["Ṭawāf bestaat uit zeven rondes.", "Saʿī is tussen Ṣafā en Marwa.", "ramī betekent vasten."], lieIndex: 2, explanations: ["Correct. Zeven rondes.", "Correct. Dat is saʿī.", "Fout! ramī is het werpen bij de jamarāt."], mentorDetail: "Laat de drie begrippen koppelen aan bewegingen." }, { statements: ["Arafat is op 9 Dzūl-Ḥijjah.", "ʿEid al-Adha begint op 10 Dzūl-Ḥijjah.", "Laylatul Qadr valt tijdens hadj."], lieIndex: 2, explanations: ["Correct. Arafat is dag 9.", "Correct. ʿEid begint dag 10.", "Fout! Laylatul Qadr hoort bij Ramadan."], mentorDetail: "Maak samen een kalenderlijn." }, { statements: ["Iḥrām vraagt om goed gedrag.", "Mina is een plek in de hadj-route.", "De Kaʾbah staat in Medina."], lieIndex: 2, explanations: ["Correct. Iḥrām vraagt zelfbeheersing.", "Correct. Mina hoort bij hadj.", "Fout! De Kaʾbah staat in Mekka."], mentorDetail: "Gebruik een kaart om Mekka en Medina te onderscheiden." }];

let twIndex = 0;
let twShuffled = shuffleArray(twData.map((_, i) => i));

const twRoundEl = document.getElementById("tw-round");
const twStatementsEl = document.getElementById("tw-statements");
const twFeedbackEl = document.getElementById("tw-feedback");
const twNextBtn = document.getElementById("tw-next");

function renderTweeWaarheden() {
  const dataIndex = twShuffled[twIndex % twShuffled.length];
  const set = twData[dataIndex];
  twRoundEl.textContent = `Set ${(twIndex % twData.length) + 1} van ${twData.length}`;
  twFeedbackEl.textContent = "";
  twFeedbackEl.className = "feedback";
  twStatementsEl.innerHTML = "";

  set.statements.forEach((stmt, idx) => {
    const btn = document.createElement("button");
    btn.className = "tw-statement-btn";
    btn.textContent = `${idx + 1}. ${stmt}`;
    btn.addEventListener("click", () => {
      const isCorrect = idx === set.leugen;
      trackEvent(
        isCorrect ? "hadj-explorer/tweewaarheden-goed" : "hadj-explorer/tweewaarheden-fout",
        isCorrect ? "Hadj Explorer 2w1l goed" : "Hadj Explorer 2w1l fout"
      );
      Array.from(twStatementsEl.children).forEach((b, i) => {
        b.disabled = true;
        b.classList.add(i === set.leugen ? "correct" : "incorrect");
      });
      let feedback = isCorrect
        ? `✓ Goed gevonden! ${set.uitleg[set.leugen]}`
        : `✗ Niet helemaal. De leugen was uitspraak ${set.leugen + 1}. ${set.uitleg[set.leugen]}`;
      if (currentMode === "mentor") feedback += ` | 💬 ${set.mentorDetail}`;
      twFeedbackEl.textContent = feedback;
      twFeedbackEl.className = `feedback ${isCorrect ? "good" : "bad"}`;
      if (isCorrect) addStars(2);
    });
    twStatementsEl.appendChild(btn);
  });
}

twNextBtn.addEventListener("click", () => {
  twIndex += 1;
  if (twIndex % twData.length === 0) {
    twShuffled = shuffleArray(twData.map((_, i) => i));
  }
  renderTweeWaarheden();
});

// ── WOORDWEB ─────────────────────────────────────────────
const woordwebData = [{ center: "hadj-route", woorden: [ { woord: "Mina", hoorterbij: true }, { woord: "Arafat", hoorterbij: true }, { woord: "Muzdalifah", hoorterbij: true }, { woord: "Jamarāt", hoorterbij: true }, { woord: "Laylatul Qadr", hoorterbij: false }, { woord: "Zakāt al-Fiṭr", hoorterbij: false }, { woord: "Ṣafā", hoorterbij: true }, { woord: "Tarāwīḥ", hoorterbij: false } ], uitleg: "Mina, Arafat, Muzdalifah, Jamarāt en Ṣafā horen bij de hadj-route. Laylatul Qadr, Zakāt al-Fiṭr en Tarāwīḥ horen bij Ramadan.", mentorDetail: "Laat het kind een routekaart tekenen." }, { center: "ʿEid al-Adha", woorden: [ { woord: "Offerfeest", hoorterbij: true }, { woord: "10 Dzūl-Ḥijjah", hoorterbij: true }, { woord: "Ibrāhīm, vrede zij met hem", hoorterbij: true }, { woord: "Delen", hoorterbij: true }, { woord: "1 Shawwāl", hoorterbij: false }, { woord: "Zakāt al-Fiṭr", hoorterbij: false }, { woord: "ʿEid-gebed", hoorterbij: true }, { woord: "Suḥūr", hoorterbij: false } ], uitleg: "ʿEid al-Adha hoort bij het offer, 10 Dzūl-Ḥijjah, Ibrāhīm, vrede zij met hem, delen en het ʿEid-gebed.", mentorDetail: "Bespreek delen met mensen in nood." }, { center: "Iḥrām", woorden: [ { woord: "Intentie", hoorterbij: true }, { woord: "Eenvoud", hoorterbij: true }, { woord: "Sabr", hoorterbij: true }, { woord: "Mīqāt", hoorterbij: true }, { woord: "Opscheppen", hoorterbij: false }, { woord: "Ruzie", hoorterbij: false }, { woord: "Nederigheid", hoorterbij: true }, { woord: "Overdaad", hoorterbij: false } ], uitleg: "Iḥrām draait om intentie, eenvoud, sabr, nederigheid en het beginnen vóór de Mīqāt.", mentorDetail: "Koppel kleding aan innerlijke houding." }];

let wwIndex = 0;
let wwGekozen = new Set();
let wwChecked = false;

const wwCenterEl = document.getElementById("ww-center");
const wwWordsEl = document.getElementById("ww-words");
const wwCheckBtn = document.getElementById("ww-check");
const wwNextBtn = document.getElementById("ww-next");
const wwFeedbackEl = document.getElementById("ww-feedback");

function renderWoordweb() {
  const web = woordwebData[wwIndex % woordwebData.length];
  wwGekozen = new Set();
  wwChecked = false;
  wwCenterEl.textContent = web.center || web.centrum;
  wwFeedbackEl.textContent = "";
  wwFeedbackEl.className = "feedback";
  wwCheckBtn.disabled = false;
  wwWordsEl.innerHTML = "";

  const shuffled = shuffleArray([...web.woorden]);
  shuffled.forEach((item, idx) => {
    const btn = document.createElement("button");
    btn.className = "ww-word";
    btn.textContent = item.woord;
    btn.dataset.idx = idx;
    btn.addEventListener("click", () => {
      if (wwChecked) return;
      if (wwGekozen.has(idx)) {
        wwGekozen.delete(idx);
        btn.classList.remove("selected");
      } else {
        wwGekozen.add(idx);
        btn.classList.add("selected");
      }
    });
    btn._item = item;
    wwWordsEl.appendChild(btn);
  });
}

function checkWoordweb() {
  if (wwChecked) return;
  wwChecked = true;
  wwCheckBtn.disabled = true;
  const web = woordwebData[wwIndex % woordwebData.length];

  let aantalGoed = 0;
  let totaalBijhorend = web.woorden.filter((w) => w.hoorterbij).length;

  Array.from(wwWordsEl.children).forEach((btn, i) => {
    const item = btn._item;
    const wasGekozen = wwGekozen.has(i);
    btn.classList.remove("selected");
    if (item.hoorterbij && wasGekozen) {
      btn.classList.add("correct");
      aantalGoed += 1;
    } else if (!item.hoorterbij && wasGekozen) {
      btn.classList.add("incorrect");
    } else if (item.hoorterbij && !wasGekozen) {
      btn.classList.add("missed");
    }
  });

  const wrongPicks = [...wwGekozen].filter((i) => {
    const btn = wwWordsEl.children[i];
    return btn && !btn._item.hoorterbij;
  }).length;

  const isAllesGoed = aantalGoed === totaalBijhorend && wrongPicks === 0;
  trackEvent(
    isAllesGoed ? "hadj-explorer/woordweb-perfect" : "hadj-explorer/woordweb-geprobeerd",
    isAllesGoed ? "Hadj Explorer woordweb perfect" : "Hadj Explorer woordweb geprobeerd"
  );

  let feedback = isAllesGoed
    ? `🎉 Perfect! Alle ${totaalBijhorend} woorden correct gekozen. +3 ⭐ | ${web.uitleg}`
    : `${aantalGoed} van de ${totaalBijhorend} juiste woorden gevonden. ${web.uitleg}`;
  if (currentMode === "mentor") feedback += ` | 💬 ${web.mentorDetail}`;
  wwFeedbackEl.textContent = feedback;
  wwFeedbackEl.className = `feedback ${isAllesGoed ? "good" : "bad"}`;

  if (isAllesGoed) addStars(3);
  else if (aantalGoed > 0) addStars(1);
}

wwCheckBtn.addEventListener("click", checkWoordweb);
wwNextBtn.addEventListener("click", () => {
  wwIndex = (wwIndex + 1) % woordwebData.length;
  renderWoordweb();
});

// ── RAMADAN BINGO ────────────────────────────────────────
const bingoTermen = ["Iḥrām", "Mīqāt", "Mina", "Arafat", "Muzdalifah", "ramī", "Jamarāt", "Ṭawāf", "Saʿī", "Kaʾbah", "Ṣafā", "Marwa", "Dzūl-Ḥijjah", "ʿEid al-Adha", "Naḥr", "Sabr", "Talbiyah", "Hajar", "Ibrāhīm", "hadj"];

const bingoOmschrijvingen = [{ term: "Iḥrām", tekst: "De gewijde staat waarmee de pelgrim hadj of ʿUmrah begint." }, { term: "Mīqāt", tekst: "Grenspunt waarvóór de pelgrim iḥrām aanneemt." }, { term: "Mina", tekst: "Plek met tenten waar pelgrims tijdens hadj verblijven." }, { term: "Arafat", tekst: "De belangrijkste plek van de hadj op de 9e Dzūl-Ḥijjah." }, { term: "Muzdalifah", tekst: "Plek waar pelgrims na Arafat overnachten." }, { term: "ramī", tekst: "Het werpen bij de jamarāt." }, { term: "Jamarāt", tekst: "De plaatsen waar pelgrims steentjes werpen." }, { term: "Ṭawāf", tekst: "Zeven rondes rond de Kaʾbah." }, { term: "Saʿī", tekst: "Lopen tussen Ṣafā en Marwa." }, { term: "Kaʾbah", tekst: "Het Huis van Allah in Mekka waar pelgrims omheen lopen." }, { term: "Ṣafā", tekst: "Een van de twee heuvels van saʿī." }, { term: "Marwa", tekst: "Een van de twee heuvels van saʿī." }, { term: "Dzūl-Ḥijjah", tekst: "De islamitische maand waarin hadj plaatsvindt." }, { term: "ʿEid al-Adha", tekst: "Het Offerfeest op 10 Dzūl-Ḥijjah." }, { term: "Naḥr", tekst: "Het offer dat bij ʿEid al-Adha en hadj hoort." }, { term: "Sabr", tekst: "Geduld, een belangrijke les van hadj." }, { term: "Talbiyah", tekst: "De woorden waarmee pelgrims Allah antwoorden: Labbayk Allāhumma labbayk." }, { term: "Hajar", tekst: "Haar verhaal wordt herinnerd bij saʿī tussen Ṣafā en Marwa." }, { term: "Ibrāhīm", tekst: "Profeet wiens gehoorzaamheid wordt herdacht bij het Offerfeest." }, { term: "hadj", tekst: "De bedevaart naar Mekka, één van de vijf zuilen." }];

let bingoGrid = [];
let bingoMarked = new Set();
let bingoOmschrijvingIndex = 0;
let bingoShuffledOmschrijvingen = [];
let bingoBingo = false;
let bingoWinningLine = new Set();
let bingoCurrentAnswered = false;
let bingoWrongFlashIndex = null;
let bingoWrongFlashTimer = null;

const bingoClueEl = document.getElementById("bingo-clue");
const bingoGridEl = document.getElementById("bingo-grid");
const bingoNextClueBtn = document.getElementById("bingo-next-clue");
const bingoResetBtn = document.getElementById("bingo-reset");
const bingoFeedbackEl = document.getElementById("bingo-feedback");

function initBingo() {
  bingoGrid = shuffleArray([...bingoTermen]).slice(0, 16);
  bingoMarked = new Set();
  bingoOmschrijvingIndex = 0;
  bingoShuffledOmschrijvingen = shuffleArray(
    bingoOmschrijvingen.filter((omschrijving) => bingoGrid.includes(omschrijving.term))
  );
  bingoBingo = false;
  bingoWinningLine = new Set();
  bingoCurrentAnswered = false;
  bingoWrongFlashIndex = null;
  if (bingoWrongFlashTimer) clearTimeout(bingoWrongFlashTimer);
  bingoWrongFlashTimer = null;
  bingoFeedbackEl.textContent = "";
  bingoFeedbackEl.className = "feedback";
  renderBingoGrid();
  renderBingoClue();
}

function renderBingoGrid() {
  bingoGridEl.innerHTML = "";
  bingoGrid.forEach((term, idx) => {
    const cell = document.createElement("div");
    cell.className = "bingo-cell";
    if (bingoWinningLine.has(idx)) {
      cell.classList.add("bingo");
    } else if (bingoMarked.has(idx)) {
      cell.classList.add("marked");
    }
    if (bingoWrongFlashIndex === idx) cell.classList.add("wrong");
    cell.textContent = term;
    cell.dataset.idx = idx;
    cell.addEventListener("click", () => {
      answerBingoCell(idx);
    });
    bingoGridEl.appendChild(cell);
  });
}

function renderBingoClue() {
  if (bingoOmschrijvingIndex < bingoShuffledOmschrijvingen.length) {
    bingoClueEl.textContent = bingoShuffledOmschrijvingen[bingoOmschrijvingIndex].tekst;
  } else {
    bingoClueEl.textContent = "Alle omschrijvingen zijn voorbij. Start een nieuw spel om opnieuw te spelen!";
  }
}

function answerBingoCell(idx) {
  if (bingoBingo || bingoOmschrijvingIndex >= bingoShuffledOmschrijvingen.length) return;
  if (bingoMarked.has(idx)) {
    bingoFeedbackEl.textContent = "Dit vakje had je al goed. Kies het vakje dat bij de huidige omschrijving hoort.";
    bingoFeedbackEl.className = "feedback bad";
    return;
  }

  const current = bingoShuffledOmschrijvingen[bingoOmschrijvingIndex];
  const chosenTerm = bingoGrid[idx];
  if (chosenTerm !== current.term) {
    bingoFeedbackEl.textContent = `Nog niet: "${chosenTerm}" past niet bij deze omschrijving. Probeer het juiste vakje te vinden.`;
    bingoFeedbackEl.className = "feedback bad";
    bingoWrongFlashIndex = idx;
    renderBingoGrid();
    if (bingoWrongFlashTimer) clearTimeout(bingoWrongFlashTimer);
    bingoWrongFlashTimer = setTimeout(() => {
      bingoWrongFlashIndex = null;
      renderBingoGrid();
    }, 700);
    trackEvent("hadj-explorer/bingo-fout", "Hadj Explorer bingo fout vakje");
    return;
  }

  bingoMarked.add(idx);
  bingoCurrentAnswered = true;
  bingoFeedbackEl.textContent = `Goed! "${chosenTerm}" hoort bij deze omschrijving.`;
  bingoFeedbackEl.className = "feedback good";
  addStars(1);
  trackEvent("hadj-explorer/bingo-goed", "Hadj Explorer bingo goed vakje");
  renderBingoGrid();
  checkBingoWin();
}

function checkBingoWin() {
  const lines = [
    [0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15],
    [0, 4, 8, 12], [1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15],
    [0, 5, 10, 15], [3, 6, 9, 12]
  ];

  const winningLine = lines.find((line) => line.every((idx) => bingoMarked.has(idx)));
  if (winningLine && !bingoBingo) {
    bingoBingo = true;
    bingoWinningLine = new Set(winningLine);
    bingoFeedbackEl.textContent = "🎉 BINGO! Geweldig! +3 ⭐";
    bingoFeedbackEl.className = "feedback good";
    addStars(3);
    trackEvent("hadj-explorer/bingo-bingo", "Hadj Explorer bingo gewonnen");
    renderBingoGrid();
  }
}

bingoNextClueBtn.addEventListener("click", () => {
  if (bingoBingo) return;
  if (bingoOmschrijvingIndex >= bingoShuffledOmschrijvingen.length) return;
  if (!bingoCurrentAnswered && bingoOmschrijvingIndex < bingoShuffledOmschrijvingen.length) {
    bingoFeedbackEl.textContent = "Kies eerst het juiste vakje bij deze omschrijving.";
    bingoFeedbackEl.className = "feedback bad";
    return;
  }
  bingoOmschrijvingIndex += 1;
  bingoCurrentAnswered = false;
  bingoWrongFlashIndex = null;
  if (bingoWrongFlashTimer) clearTimeout(bingoWrongFlashTimer);
  bingoWrongFlashTimer = null;
  renderBingoClue();
  renderBingoGrid();
  bingoFeedbackEl.textContent = "";
  bingoFeedbackEl.className = "feedback";
  trackEvent("hadj-explorer/bingo-volgende", "Hadj Explorer bingo volgende omschrijving");
});

bingoResetBtn.addEventListener("click", () => {
  initBingo();
  trackEvent("hadj-explorer/bingo-reset", "Hadj Explorer bingo nieuw spel");
});

// ── VERDIEPINGSRONDES UIT HRP-ARTIKELEN ─────────────────
function createArticleQuiz(config) {
  let index = 0;
  const questionEl = document.getElementById(`${config.id}-question`);
  const optionsEl = document.getElementById(`${config.id}-options`);
  const feedbackEl = document.getElementById(`${config.id}-feedback`);
  const nextBtn = document.getElementById(`${config.id}-next`);

  function render() {
    const q = config.data[index];
    questionEl.textContent = q.question;
    optionsEl.innerHTML = "";
    feedbackEl.textContent = "";
    feedbackEl.className = "feedback";
    q.options.forEach((option, optionIndex) => {
      const btn = document.createElement("button");
      btn.className = "option-btn";
      btn.textContent = option;
      btn.addEventListener("click", () => answer(optionIndex));
      optionsEl.appendChild(btn);
    });
  }

  function answer(optionIndex) {
    const q = config.data[index];
    const isCorrect = optionIndex === q.answer;
    let feedback = isCorrect ? `Goed! ${q.explain}` : `Bijna. ${q.explain}`;
    if (currentMode === "mentor" && q.mentorDetail) feedback += ` Extra uitleg: ${q.mentorDetail}`;
    feedbackEl.textContent = feedback;
    feedbackEl.className = `feedback ${isCorrect ? "good" : "bad"}`;
    if (isCorrect) addStars(config.stars || 2);
    Array.from(optionsEl.children).forEach((btn) => { btn.disabled = true; });
    trackEvent(
      isCorrect ? `hadj-explorer/${config.id}-goed` : `hadj-explorer/${config.id}-fout`,
      isCorrect ? `Hadj Explorer ${config.label} goed` : `Hadj Explorer ${config.label} fout`
    );
  }

  nextBtn.addEventListener("click", () => {
    index = (index + 1) % config.data.length;
    render();
  });

  return render;
}

const hadjVormenData = [
  { question: "Een pelgrim doet ʿumrah en hadj samen in één iḥrām en blijft in iḥrām tot de dag van het offer. Welke vorm is dit?", options: ["Qirān", "Tamattuʾ", "Ifrād"], answer: 0, explain: "Dit is Qirān: ʿumrah en hadj worden gecombineerd in één staat van iḥrām.", mentorDetail: "Qirān is de vorm waarbij ʿumrah en hadj samen worden gecombineerd in één iḥrām." },
  { question: "Een pelgrim doet eerst ʿumrah, verlaat daarna iḥrām, en neemt later opnieuw iḥrām aan voor hadj. Welke vorm is dit?", options: ["Ifrād", "Tamattuʾ", "Qirān"], answer: 1, explain: "Dit is Tamattuʾ: eerst ʿumrah, daarna later opnieuw iḥrām voor hadj.", mentorDetail: "Tamattuʾ is een veelvoorkomende vorm: eerst ʿumrah, daarna later opnieuw iḥrām voor hadj." },
  { question: "Een pelgrim maakt bij de Mīqāt intentie voor alleen hadj, zonder ʿumrah te combineren. Welke vorm is dit?", options: ["Ifrād", "Tamattuʾ", "Qirān"], answer: 0, explain: "Dit is Ifrād: de pelgrim verricht alleen hadj.", mentorDetail: "Gebruik dit om het verschil tussen combineren, onderbreken en enkelvoudig verrichten te laten zien." }
];

const voorwaardenData = [
  { question: "Iemand is volwassen, moslim, gezond, heeft genoeg geld en de reis is veilig. Wat geldt dan?", options: ["Hadj wordt een serieuze verplichting", "Hadj is alleen leuk als vakantie", "Hadj geldt pas na pensionering"], answer: 0, explain: "Als aan de voorwaarden is voldaan, moet de hadj serieus worden nagekomen.", mentorDetail: "Wanneer iemand aan de voorwaarden voldoet, hoort diegene de verplichting serieus te nemen en niet achteloos uit te stellen." },
  { question: "Een kind verricht hadj voordat het volwassen is. Telt dat als de verplichte hadj?", options: ["Ja, altijd", "Nee, het is dan vrijwillig", "Alleen als het kind zeven jaar is"], answer: 1, explain: "Voor een kind is de hadj vrijwillig en vervangt die niet automatisch de verplichte hadj later.", mentorDetail: "Dit sluit aan bij de uitleg over volwassenheid als voorwaarde." },
  { question: "Iemand heeft geen geld voor reis, verblijf en gezin thuis. Is hadj dan verplicht?", options: ["Nee, vermogen is een voorwaarde", "Ja, lenen is altijd verplicht", "Alleen als vrienden meegaan"], answer: 0, explain: "Financiële draagkracht is een voorwaarde voor verplichting.", mentorDetail: "Denk aan reiskosten, levensonderhoud en verantwoordelijkheden thuis." },
  { question: "De weg naar hadj is aantoonbaar onveilig. Wat betekent dat?", options: ["De verplichting kan worden uitgesteld", "Je moet toch meteen gaan", "hadj wordt ongeldig voor altijd"], answer: 0, explain: "Veilige reisomstandigheden horen bij de voorwaarden.", mentorDetail: "Maak duidelijk dat dit een fiqh-nuance is, geen gebrek aan verlangen naar hadj." },
  { question: "Welke reeks noemt de app in oudermodus als voorwaarden?", options: ["Islam, volwassenheid, verstand, vrijheid, gezondheid, vermogen, tijd en veiligheid", "Alleen leeftijd en paspoort", "Alleen genoeg vrije dagen"], answer: 0, explain: "Dit zijn de belangrijkste voorwaarden die in de oudermodus worden samengevat.", mentorDetail: "Bespreek bij volwassen leerlingen ook extra voorwaarden zoals veiligheid, begeleiding en persoonlijke omstandigheden." }
];

const arafatKeuzeData = [
  { question: "Wat is de beste omschrijving van Arafat tijdens hadj?", options: ["Het hart van de hadj", "Een gewone rustplek", "Een plek voor marktbezoek"], answer: 0, explain: "Arafat is de kern van de hadj.", mentorDetail: "Zonder het staan bij Arafat is de hadj niet geldig." },
  { question: "Wat is voor niet-pelgrims een sterke aanbidding op de Dag van Arafat?", options: ["Vasten", "Winkelen", "Extra slapen"], answer: 0, explain: "Voor wie niet op hadj is, is vasten op de Dag van Arafat bijzonder verdienstelijk.", mentorDetail: "Bespreek ook duʿā, dzikr, extra aanbidding en barmhartigheid op deze dag." },
  { question: "Wat past het beste bij de momenten op Arafat?", options: ["Duʿā, berouw en hoop", "Ruzie en haast", "Pronken met spullen"], answer: 0, explain: "Arafat is een dag van smeekbeden, berouw en hoop op vergeving.", mentorDetail: "Laat het kind drie korte duʿā’s formuleren: voor zichzelf, familie en de ummah." },
  { question: "Moet je Jabl al-Raḥmah beklimmen voor een geldige hadj?", options: ["Nee", "Ja, altijd", "Alleen als je jong bent"], answer: 0, explain: "Nee. De vlakte van Arafat is geldig; de berg beklimmen is geen vereiste.", mentorDetail: "Maak duidelijk: het staan op de vlakte van Arafat is het ritueel; de berg beklimmen is geen voorwaarde." }
];

const routeDetailData = [
  { question: "Welke stap hoort vóór het aannemen van iḥrām?", options: ["Voorbereiden met reinheid en intentie", "ramī doen", "Naar Muzdalifah vertrekken"], answer: 0, explain: "Voor iḥrām bereid je je voor met reinheid, kleding en intentie.", mentorDetail: "Noem de voorbereiding: ghusl, persoonlijke verzorging, kleding, intentie en Talbiyah." },
  { question: "Wat zeg je na de intentie als belangrijke uitspraak van de pelgrim?", options: ["Talbiyah", "Takbīr al-Janāzah", "Suḥūr"], answer: 0, explain: "De Talbiyah is de bekende oproep: Labbayk Allāhumma labbayk.", mentorDetail: "Bespreek dat de Talbiyah bewust en eerbiedig wordt uitgesproken." },
  { question: "Wat doe je bij de Kaʾbah als ṭawāf?", options: ["Zeven rondes", "Drie sprongen", "Vijf nachten slapen"], answer: 0, explain: "Ṭawāf bestaat uit zeven rondes rond de Kaʾbah.", mentorDetail: "Mooie plek om ook Maqām Ibrāhīm, Zamzam en Multazam kort te noemen." },
  { question: "Welke stap komt na Arafat?", options: ["Muzdalifah", "Ramadan", "Badr"], answer: 0, explain: "Na Arafat gaan pelgrims naar Muzdalifah.", mentorDetail: "Daar worden Maghrib en ʿIshāʾ gecombineerd en worden steentjes verzameld." },
  { question: "Welke volgorde past bij dag 10 in eenvoudige vorm?", options: ["ramī, offer, knippen/scheren, ṭawāf", "Saʿī, slapen, Ramadan, zakāt", "Mīqāt, Arafat, Shawwāl, tarāwīḥ"], answer: 0, explain: "Op dag 10 horen ramī, offer, knippen/scheren en ṭawāf bij de route.", mentorDetail: "Voor volwassen uitleg kun je termen als naḥr, ḥalq, taqṣīr en ṭawāf al-ifāḍah noemen." }
];

const offerfeestData = [
  { question: "Waarom noemen we ʿEid al-Adha liever Offerfeest dan slachtfeest?", options: ["Omdat de nadruk ligt op gehoorzaamheid en offerbereidheid", "Omdat er geen offer bestaat", "Omdat het alleen om eten gaat"], answer: 0, explain: "Offerfeest legt de nadruk op gehoorzaamheid, dankbaarheid en delen.", mentorDetail: "Leg uit dat Offerfeest de aanbidding en gehoorzaamheid centraal zet, niet alleen het slachten." },
  { question: "Wat hoort bij de dag van ʿEid?", options: ["Netheid, mooie kleding, takbīr en feestgebed", "Boosheid en ruzie", "Alleen thuis blijven zonder groet"], answer: 0, explain: "Netheid, mooie kleding, takbīr en het feestgebed passen bij ʿEid.", mentorDetail: "Noem ook de gebruikelijke ʿEid-adab: verzorgd zijn, takbīr, het feestgebed en elkaar groeten." },
  { question: "Wat is een mooie manier om met offervlees om te gaan?", options: ["Delen met armen, familie en eigen gezin", "Alles verspillen", "Niemand iets geven"], answer: 0, explain: "Delen hoort bij de sociale betekenis van het Offerfeest.", mentorDetail: "Leg uit dat het vlees wordt gedeeld met het eigen gezin, familie en mensen die het nodig hebben." },
  { question: "Welke houding past bij het offer?", options: ["Dankbaarheid en nabijheid tot Allah zoeken", "Opscheppen", "Alleen aan status denken"], answer: 0, explain: "Het offer is een daad van aanbidding, dankbaarheid en medeleven.", mentorDetail: "Koppel dit aan Ibrāhīm, vrede zij met hem, en de zorg voor anderen." }
];

const hadithKaartData = [
  { question: "De Profeet ﷺ leerde dat hadj één keer verplicht is voor wie ertoe in staat is. Welke les hoort daarbij?", options: ["Allah belast naar vermogen", "Hadj moet elk jaar door iedereen", "Hadj is nooit verplicht"], answer: 0, explain: "Hadj is geen jaarlijkse verplichting voor iedereen, maar eenmaal voor wie ertoe in staat is.", mentorDetail: "Dit sluit aan bij de hadith waarin de Profeet ﷺ niet elk jaar verplicht maakte." },
  { question: "Wat betekent hadj mabrūr in eenvoudige taal?", options: ["Een geaccepteerde, oprechte hadj", "Een snelle reis", "Een dure koffer"], answer: 0, explain: "Hadj mabrūr is een oprechte en geaccepteerde hadj.", mentorDetail: "De overleveringen noemen het Paradijs als beloning voor hadj mabrūr." },
  { question: "Welke les hoort bij: terugkeren alsof je opnieuw geboren bent?", options: ["Hadj draait om berouw en zuivering", "Hadj draait om roem", "Hadj draait om winkelen"], answer: 0, explain: "Hadj leert berouw, zuivering en een nieuw begin.", mentorDetail: "Koppel dit aan goed gedrag: geen ruzie, geen zonde, geen pronken." },
  { question: "Wat leren de overleveringen over ʿumrah tot ʿumrah?", options: ["Dat aanbidding tussen beide vergeving kan brengen", "Dat ʿumrah hetzelfde is als vakantie", "Dat hadj niet nodig is"], answer: 0, explain: "De overleveringen tonen de waarde van herhaalde aanbidding en vergeving.", mentorDetail: "Leg rustig uit dat ʿumrah waardevol is, maar hadj voor wie ertoe in staat is een eigen verplichting blijft." }
];

const renderhadjVormen = createArticleQuiz({ id: "hadjvorm", label: "hadj-vormen", data: hadjVormenData });
const renderVoorwaarden = createArticleQuiz({ id: "voorwaarden", label: "Voorwaarde-checker", data: voorwaardenData });
const renderArafatKeuze = createArticleQuiz({ id: "arafatkeuze", label: "Arafat keuzes", data: arafatKeuzeData });
const renderRouteDetail = createArticleQuiz({ id: "routedetail", label: "Route details", data: routeDetailData });
const renderOfferfeest = createArticleQuiz({ id: "offerfeest", label: "Offerfeest keuzes", data: offerfeestData });
const renderHadithKaart = createArticleQuiz({ id: "hadithkaart", label: "Hadith kaarten", data: hadithKaartData });

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
renderAfwijker();
renderFoutjager();
renderEmoji();
renderSorter();
renderTweeWaarheden();
renderWoordweb();
initBingo();
renderhadjVormen();
renderVoorwaarden();
renderArafatKeuze();
renderRouteDetail();
renderOfferfeest();
renderHadithKaart();
renderModeUI();
if (!appOpenTracked) {
  trackEvent("hadj-explorer/geopend", "Hadj Explorer geopend");
  appOpenTracked = true;
}
