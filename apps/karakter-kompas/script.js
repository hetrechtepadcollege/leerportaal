const dilemmas = [
  {
    title: "Spanning in de bestuursgroep",
    category: "Samenwerking",
    text:
      "Tijdens de voorbereiding van een evenement corrigeert een teamlid anderen steeds publiekelijk. De sfeer wordt stroef en mensen trekken zich terug.",
    choices: [
      {
        label: "Direct begrenzen",
        tone: "Je benoemt meteen het gedrag en zet een duidelijke grens.",
        target: { knowledge: 58, empathy: 52, action: 82 },
        outcome:
          "Deze route werkt wanneer je stevig maar precies blijft. Zonder nuance kan het snel als afrekening voelen."
      },
      {
        label: "Eerst verdiepen",
        tone: "Je zoekt context, spreekt apart af en bouwt aan herstel.",
        target: { knowledge: 68, empathy: 84, action: 56 },
        outcome:
          "Dit is vaak sterk voor duurzame rust, zolang je het probleem niet te lang laat doorsudderen."
      },
      {
        label: "Groep laten uitrazen",
        tone: "Je grijpt niet in en hoopt dat de spanning vanzelf zakt.",
        target: { knowledge: 28, empathy: 22, action: 18 },
        outcome:
          "Afwachten geeft soms lucht, maar in dit scenario groeit de schade juist door stilstand."
      }
    ],
    coach:
      "Volwassen spelers mogen hier botsende belangen voelen: rechtvaardigheid, relatiebehoud en tempo trekken niet vanzelf gelijk op."
  },
  {
    title: "Online twijfel en snelle meningen",
    category: "Mediawijsheid",
    text:
      "Je ontvangt een virale video met een stevige religieuze claim. In je omgeving wordt gevraagd om hem direct door te sturen 'zodat iedereen het weet'.",
    choices: [
      {
        label: "Meteen delen",
        tone: "Je vertrouwt op urgentie en verspreidt de boodschap direct.",
        target: { knowledge: 18, empathy: 34, action: 64 },
        outcome:
          "De daadkracht is hoog, maar zonder broncontrole kan je iets misleidends versterken."
      },
      {
        label: "Checken en kaderen",
        tone: "Je onderzoekt bron, context en effect voordat je iets deelt.",
        target: { knowledge: 88, empathy: 70, action: 54 },
        outcome:
          "Deze aanpak past goed bij volwassen educatie: eerst begrijpen, dan pas verspreiden."
      },
      {
        label: "Helemaal negeren",
        tone: "Je laat het passeren om discussie te vermijden.",
        target: { knowledge: 32, empathy: 30, action: 16 },
        outcome:
          "Soms verstandig, maar hier mis je een kans om desinformatie met rust en feiten te corrigeren."
      }
    ],
    coach:
      "Deze case leent zich later goed voor een video-fragment waarin bronkritiek en sociale druk zichtbaar worden."
  },
  {
    title: "Balans tussen zorg en grenzen",
    category: "Gemeenschap",
    text:
      "Een bekende vraagt vaak hulp, maar houdt zich niet aan afspraken. Je wilt goed doen zonder dat anderen of jijzelf uitgeput raken.",
    choices: [
      {
        label: "Altijd ja zeggen",
        tone: "Je blijft helpen, ook als structuur ontbreekt.",
        target: { knowledge: 34, empathy: 76, action: 24 },
        outcome:
          "De intentie is warm, maar zonder duidelijke randvoorwaarden wordt hulp moeilijk vol te houden."
      },
      {
        label: "Helpen met voorwaarden",
        tone: "Je biedt steun, maar koppelt die aan heldere afspraken.",
        target: { knowledge: 74, empathy: 82, action: 72 },
        outcome:
          "Dit is meestal de meest volwassen middenweg: barmhartig, eerlijk en uitvoerbaar."
      },
      {
        label: "Volledig afsluiten",
        tone: "Je stopt per direct alle hulp en communicatie.",
        target: { knowledge: 40, empathy: 18, action: 86 },
        outcome:
          "Soms is afstand nodig, maar als eerste stap is dit vaak harder dan nodig."
      }
    ],
    coach:
      "Een goede uitwerking laat zien dat compassie en grenzen elkaar niet uitsluiten maar juist kunnen versterken."
  }
];

const casesPlayedEl = document.getElementById("cases-played");
const totalScoreEl = document.getElementById("total-score");
const playerLevelEl = document.getElementById("player-level");
const caseTitleEl = document.getElementById("case-title");
const caseCategoryEl = document.getElementById("case-category");
const caseTextEl = document.getElementById("case-text");
const choiceGridEl = document.getElementById("choice-grid");
const knowledgeRangeEl = document.getElementById("knowledge-range");
const empathyRangeEl = document.getElementById("empathy-range");
const actionRangeEl = document.getElementById("action-range");
const knowledgeOutputEl = document.getElementById("knowledge-output");
const empathyOutputEl = document.getElementById("empathy-output");
const actionOutputEl = document.getElementById("action-output");
const analyzeBtn = document.getElementById("analyze-btn");
const nextBtn = document.getElementById("next-btn");
const feedbackStripEl = document.getElementById("feedback-strip");
const balanceScoreEl = document.getElementById("balance-score");
const careScoreEl = document.getElementById("care-score");
const decisiveScoreEl = document.getElementById("decisive-score");
const balanceBarEl = document.getElementById("balance-bar");
const careBarEl = document.getElementById("care-bar");
const decisiveBarEl = document.getElementById("decisive-bar");
const introDialog = document.getElementById("intro-dialog");
const resultDialog = document.getElementById("result-dialog");
const mediaDialog = document.getElementById("media-dialog");
const resultTitleEl = document.getElementById("result-title");
const resultScoreEl = document.getElementById("result-score");
const resultBodyEl = document.getElementById("result-body");
const resultCoachEl = document.getElementById("result-coach");
const mediaTitleEl = document.getElementById("media-title");
const mediaBodyEl = document.getElementById("media-body");

let currentIndex = 0;
let selectedChoice = 0;
let totalScore = 0;
let casesPlayed = 0;

function clamp(value, min, max) {
  return Math.min(Math.max(value, min), max);
}

function getCurrentValues() {
  return {
    knowledge: Number(knowledgeRangeEl.value),
    empathy: Number(empathyRangeEl.value),
    action: Number(actionRangeEl.value)
  };
}

function updateOutputs() {
  const values = getCurrentValues();
  knowledgeOutputEl.value = String(values.knowledge);
  empathyOutputEl.value = String(values.empathy);
  actionOutputEl.value = String(values.action);

  const balance = 100 - Math.abs(values.knowledge - values.action);
  const care = Math.round((values.empathy + Math.min(values.knowledge, 70)) / 1.7);
  const decisive = Math.round((values.action + (100 - Math.abs(values.action - 65))) / 2);

  balanceScoreEl.textContent = `${clamp(Math.round(balance), 0, 100)}%`;
  careScoreEl.textContent = `${clamp(care, 0, 100)}%`;
  decisiveScoreEl.textContent = `${clamp(decisive, 0, 100)}%`;
  balanceBarEl.style.width = `${clamp(balance, 0, 100)}%`;
  careBarEl.style.width = `${clamp(care, 0, 100)}%`;
  decisiveBarEl.style.width = `${clamp(decisive, 0, 100)}%`;
}

function renderChoices(dilemma) {
  choiceGridEl.innerHTML = "";

  dilemma.choices.forEach((choice, index) => {
    const button = document.createElement("button");
    button.className = `choice-btn${selectedChoice === index ? " active" : ""}`;
    button.type = "button";
    button.innerHTML = `<strong>${choice.label}</strong><span>${choice.tone}</span>`;
    button.addEventListener("click", () => {
      selectedChoice = index;
      renderChoices(dilemma);
      feedbackStripEl.textContent = `Actieve aanpak: ${choice.label}. Stem nu de sliders daarop af.`;
    });
    choiceGridEl.appendChild(button);
  });
}

function renderCase() {
  const dilemma = dilemmas[currentIndex];
  caseTitleEl.textContent = dilemma.title;
  caseCategoryEl.textContent = dilemma.category;
  caseTextEl.textContent = dilemma.text;
  selectedChoice = 0;
  feedbackStripEl.textContent = "Kies eerst een aanpak en stem daarna de sliders af.";
  renderChoices(dilemma);
  updateOutputs();
}

function getLevel(score) {
  if (score >= 220) return "Strategische denker";
  if (score >= 140) return "Bewuste afweger";
  if (score >= 70) return "Reflectieve groeier";
  return "Startpositie";
}

function analyzeCurrentCase() {
  const dilemma = dilemmas[currentIndex];
  const choice = dilemma.choices[selectedChoice];
  const values = getCurrentValues();

  const distance =
    Math.abs(values.knowledge - choice.target.knowledge) +
    Math.abs(values.empathy - choice.target.empathy) +
    Math.abs(values.action - choice.target.action);

  const roundScore = clamp(Math.round(100 - distance / 3), 0, 100);
  totalScore += roundScore;
  casesPlayed += 1;

  casesPlayedEl.textContent = String(casesPlayed);
  totalScoreEl.textContent = String(totalScore);
  playerLevelEl.textContent = getLevel(totalScore);

  feedbackStripEl.textContent = `${choice.label}: ${choice.outcome}`;

  resultTitleEl.textContent = `${dilemma.title} • ${choice.label}`;
  resultScoreEl.textContent = `${roundScore} / 100`;
  resultBodyEl.textContent = choice.outcome;
  resultCoachEl.textContent = dilemma.coach;
  resultDialog.showModal();
}

function nextCase() {
  currentIndex = (currentIndex + 1) % dilemmas.length;
  renderCase();
}

function openMediaDialog(type = "overview") {
  if (type === "image") {
    mediaTitleEl.textContent = "Afbeeldingen per scenario";
    mediaBodyEl.innerHTML =
      'Gebruik <code>apps/karakter-kompas/media/</code> voor posters, illustraties of foto\'s en toon ze later in de case-header of in een modal.';
  } else if (type === "video") {
    mediaTitleEl.textContent = "Video-uitleg en scenes";
    mediaBodyEl.innerHTML =
      'Deze app is voorbereid op video in pop-up schermen. Later kun je hier mp4/webm-bestanden of een embed aan koppelen voor uitleg, interviews of scenario-intro\'s.';
  } else {
    mediaTitleEl.textContent = "Ruimte voor beeld en video";
    mediaBodyEl.innerHTML =
      'Voeg later bestanden toe in <code>apps/karakter-kompas/media/</code> en koppel ze aan cases, uitlegschermen of een aparte galerij-sectie.';
  }

  mediaDialog.showModal();
}

document.getElementById("open-intro").addEventListener("click", () => introDialog.showModal());
document.getElementById("open-media").addEventListener("click", () => openMediaDialog());
document.getElementById("open-media-sidebar").addEventListener("click", () => openMediaDialog());

document.querySelectorAll(".media-card").forEach((button) => {
  button.addEventListener("click", () => openMediaDialog(button.dataset.media));
});

[knowledgeRangeEl, empathyRangeEl, actionRangeEl].forEach((input) => {
  input.addEventListener("input", updateOutputs);
});

analyzeBtn.addEventListener("click", analyzeCurrentCase);
nextBtn.addEventListener("click", nextCase);

renderCase();
