const LESSONS = [
  {
    title: "Vasten met bewustzijn",
    reference: "Koran, 2:187",
    verseText:
      "\"Eet en drink tot het witte koord zich onderscheidt van het zwarte koord bij het ochtendgloren, en voltooi het vasten tot de avond.\"",
    insight: "Deze āyah leert ritme en discipline. Je dag krijgt barakah door duidelijke grenzen en bewuste keuzes.",
    question: "Wat is de kern van deze les?",
    options: ["Grenzen en discipline respecteren", "Doen waar je zin in hebt", "Alleen in de avond plannen maken"],
    answer: 0,
    action: "Plan vandaag je dag rond je ʿibādah en houd je bewust aan je planning.",
    tip: "Lees de āyah vandaag hardop 3 keer: na Fajr, na Ẓuhr en na ʿIshāʾ."
  },
  {
    title: "De Koran is voor jou geopenbaard",
    reference: "Koran, 21:10",
    verseText:
      "\"Wij hebben een boek aan jullie geopenbaard waarin jullie worden vermeld. Begrijpen jullie het niet?\"",
    insight: "De Koran is geen afstandelijk boek. Het spreekt jou direct aan en helpt je bij dagelijkse keuzes.",
    question: "Wat zegt deze āyah over jouw relatie met de Koran?",
    options: ["De Koran is alleen voor geleerden", "De Koran spreekt de gelovigen direct aan", "De Koran is alleen voor Ramadan"],
    answer: 1,
    action: "Lees vandaag een kort stuk en schrijf 1 punt op dat direct bij jouw leven past.",
    tip: "Kies 1 woord uit de āyah en herhaal dat woord bewust gedurende de dag."
  },
  {
    title: "Allāh bewaakt Zijn openbaring",
    reference: "Koran, 15:9",
    verseText:
      "\"Wij hebben deze goddelijke boodschap zeker geopenbaard en Wij zullen er zeer zeker over waken.\"",
    insight: "Je leert uit een beschermd Boek. Dat geeft vertrouwen, stabiliteit en rust in je geloof.",
    question: "Wat bouw je op met deze āyah?",
    options: ["Twijfel over de basis", "Vertrouwen in de openbaring", "Onverschilligheid"],
    answer: 1,
    action: "Herhaal vandaag deze āyah en neem 2 minuten om je vertrouwen in Allāh te vernieuwen.",
    tip: "Lees deze āyah voor je begint met leren, zodat je met niyyah en rust start."
  },
  {
    title: "Uitdaging van de Koran",
    reference: "Koran, 2:23",
    verseText:
      "\"En als je twijfelt aan wat Wij hebben geopenbaard, presenteer dan een soera zoals het. En als je het niet kunt, vrees dan het vuur.\"",
    insight: "De Koran daagt uit met kracht en waarheid. Deze āyah roept op tot nederigheid en ernst.",
    question: "Welke houding past hierbij?",
    options: ["Nederig blijven en leren", "De boodschap negeren", "Alleen discussieren zonder praktijk"],
    answer: 0,
    action: "Kies vandaag 1 les uit de Koran en zet die om in een concrete daad.",
    tip: "Maak je leessessie zonder telefoon; focus verhoogt tadabbur."
  },
  {
    title: "Duʿā en toekomst voor je gezin",
    reference: "Koran, 14:37",
    verseText:
      "\"O mijn Heer, ik heb enkele van mijn kinderen laten verblijven in een vallei waar geen landbouw is bij Uw Heilige Huis ... voorzie hen van vruchten, zodat zij dankbaarheid kunnen tonen.\"",
    insight: "Ibrāhīm laat zien: vertrouw op Allāh en maak duʿā voor je gezin, juist in moeilijke omstandigheden.",
    question: "Wat staat centraal in deze āyah?",
    options: ["Alleen eigen kracht", "Duʿā, vertrouwen en verantwoordelijkheid", "Alles uitstellen"],
    answer: 1,
    action: "Maak vandaag een oprechte duʿā voor je gezin en voor hun band met de Koran.",
    tip: "Noem vandaag 2 namen van je dierbaren specifiek in je duʿā."
  },
  {
    title: "De kracht van Allāh",
    reference: "Koran, 105:1",
    verseText:
      "\"Heeft u niet gezien wat Uw Heer deed met de mensen van de olifanten? ... Zo veranderde Hij hen in fijngekauwd stro.\"",
    insight: "Soera al-Fil leert dat Allāh alle macht heeft. Hoogmoed en onrecht houden geen stand.",
    question: "Wat leer je hieruit?",
    options: ["Macht van mensen is absoluut", "Allāh beschermt en beschikt", "Geschiedenis is niet relevant"],
    answer: 1,
    action: "Denk vandaag aan 1 zorg en spreek bewust uit dat Allāh de Beste Beschermer is.",
    tip: "Koppel 1 angst vandaag aan tawakkul en schrijf die kort op in je reflectie."
  },
  {
    title: "Sabr en trouw aan je woord",
    reference: "Koran, 38:44",
    verseText:
      "\"En neem in jouw hand een bundel twijgen en sla daarmee, en wees niet meinedig. Voorwaar, Wij vonden hem geduldig. Een voortreffelijke dienaar!\"",
    insight: "Deze āyah benadrukt ṣabr en trouw. Karakter wordt zichtbaar wanneer het moeilijk wordt.",
    question: "Welke eigenschap wordt geprezen?",
    options: ["Geduld en standvastigheid", "Snelle boosheid", "Gemakzucht"],
    answer: 0,
    action: "Kies vandaag 1 moeilijke situatie en reageer bewust met ṣabr.",
    tip: "Zeg voor een moeilijke reactie eerst: Bismillāh, en antwoord daarna rustig."
  },
  {
    title: "Allāhs plan is wijs",
    reference: "Koran, 12:76",
    verseText:
      "\"Zo smeedden Wij een plan voor Yūsuf ... Wij verheffen in rangen wie Wij willen, en boven elke wetende is er een Alwetende.\"",
    insight: "Niet alles is direct zichtbaar, maar Allāhs plan is wijs en rechtvaardig.",
    question: "Wat past bij deze āyah?",
    options: ["Alles meteen willen snappen", "Vertrouwen op Allāhs wijsheid", "Opgeven als iets onduidelijk is"],
    answer: 1,
    action: "Leg vandaag 1 onzekerheid bewust bij Allāh neer en blijf goed handelen.",
    tip: "Sluit je leessessie af met: Hasbunallāhu wa niʿmal-Wakīl."
  },
  {
    title: "Denk aan Allāh, Allāh denkt aan jou",
    reference: "Koran, 2:152",
    verseText: "\"Als jij aan Mij denkt, denk Ik aan jou.\"",
    insight: "Dzikr is verbinding. Kleine momenten van herinnering maken je hart levend.",
    question: "Wat is de kernboodschap?",
    options: ["Dzikr heeft weinig effect", "Dzikr brengt nabijheid", "Dzikr is alleen voor de moskee"],
    answer: 1,
    action: "Plan vandaag drie korte dzikr-momenten: ochtend, middag en avond.",
    tip: "Koppel dzikr aan vaste momenten, zoals na elk verplicht gebed."
  },
  {
    title: "Verlies je dzikr niet",
    reference: "Koran, 43:36",
    verseText:
      "\"En wie zich afwendt van de dzikr van de Meest Barmhartige, voor hem stellen Wij een duivel aan, en die zal zijn metgezel zijn.\"",
    insight: "Als het hart leeg wordt van dzikr, neemt afleiding toe. Bescherm je hart door herinnering aan Allāh.",
    question: "Wat beschermt je volgens deze les?",
    options: ["Meer afleiding", "Regelmatige dzikr", "Uitstellen tot later"],
    answer: 1,
    action: "Vervang vandaag 10 minuten scrollen door Koran-lezen of dzikr.",
    tip: "Maak een korte lijst met je grootste afleiders en kies er vandaag 1 om te beperken."
  },
  {
    title: "Goede woorden groeien",
    reference: "Koran, 14:24",
    verseText: "\"Goede woorden groeien als een stevige boom.\"",
    insight: "Wat je zegt laat sporen na. Goede woorden bouwen mensen op en verbeteren relaties.",
    question: "Welke keuze past hierbij?",
    options: ["Scherpe woorden", "Goede en opbouwende woorden", "Zwijgen uit trots"],
    answer: 1,
    action: "Geef vandaag minstens twee oprechte, goede woorden aan iemand.",
    tip: "Begin je eerste gesprek vandaag met salām en een opbouwende zin."
  },
  {
    title: "Vergeving opent harten",
    reference: "Koran, 24:22",
    verseText: "\"Vergeef en schenk kwijtschelding.\"",
    insight: "Vergeving is kracht, geen zwakte. Het zuivert het hart en versterkt de ummah.",
    question: "Wat brengt vergeving meestal?",
    options: ["Meer rust en herstel", "Meer verdeeldheid", "Geen enkel effect"],
    answer: 0,
    action: "Zet vandaag 1 stap naar verzoening of laat bewust wrok los.",
    tip: "Maak vandaag een korte duʿā voor iemand met wie je spanning hebt."
  }
];

const DISTRACTOR_ACTIONS = [
  "Lees alleen de titel en ga door naar morgen.",
  "Sla vandaag reflectie over en maak alleen de quiz.",
  "Wacht tot het weekend met toepassen.",
  "Doe alles snel zonder stil te staan bij betekenis.",
  "Focus alleen op scores, niet op toepassing.",
  "Lees zonder niyyah en zonder rustmoment."
];

const FACTS_BY_REFERENCE = {
  "Koran, 2:187": {
    revelation: "Plaats van openbaring: Medina (Madani)",
    fact:
      "Soera al-Baqarah is een Medinese soera. Veel verzen in deze soera, waaronder vastenverzen, geven praktische leefregels voor de groeiende moslimgemeenschap.",
    context:
      "Historisch gezien werden in Medina veel bepalingen geopenbaard die het dagelijks leven, aanbidding en gemeenschapsorde concreet vormgaven."
  },
  "Koran, 21:10": {
    revelation: "Plaats van openbaring: Mekka (Makki)",
    fact:
      "Soera al-Anbiyāʾ behoort tot de Mekkaanse openbaringen en legt veel nadruk op tawḥīd, profetie en herinnering aan eerdere profeten.",
    context:
      "Mekkaanse soera’s richten zich vaak op geloofsfundamenten en het versterken van īmān in een periode van druk en tegenstand."
  },
  "Koran, 15:9": {
    revelation: "Plaats van openbaring: Mekka (Makki)",
    fact:
      "Dit vers wordt in de islamitische wetenschappen vaak aangehaald als kerntekst voor de goddelijke bescherming van de Koran.",
    context:
      "In ulūm al-Qurʾān wordt deze āyah veel gebruikt in discussies over de overdracht, bewaring en betrouwbaarheid van de openbaring."
  },
  "Koran, 2:23": {
    revelation: "Plaats van openbaring: Medina (Madani)",
    fact:
      "De uitdaging om iets vergelijkbaars als de Koran voort te brengen staat bekend als het iʿjāz-thema: de unieke, niet te evenaren aard van de Koran.",
    context:
      "De klassieke geleerden koppelen iʿjāz onder andere aan taal, structuur, inhoudelijke diepte en blijvende impact van de Koran."
  },
  "Koran, 14:37": {
    revelation: "Plaats van openbaring: Mekka (Makki)",
    fact:
      "Soera Ibrāhīm is Mekkaans. De verwijzing naar het Heilige Huis verbindt de geschiedenis van Ibrāhīm met de spirituele betekenis van Mekka.",
    context:
      "Deze passage wordt ook vaak besproken bij thema’s als tawakkul, opvoeding en de spirituele rol van het gezin in het geloof."
  },
  "Koran, 105:1": {
    revelation: "Plaats van openbaring: Mekka (Makki)",
    fact:
      "Soera al-Fīl is een korte Mekkaanse soera. Zij herinnert aan een historische gebeurtenis die de bescherming van het Heilige Huis benadrukt.",
    context:
      "De soera bouwt historisch bewustzijn op: wereldmachten zijn beperkt, terwijl Allāhs bescherming en beschikking doorslaggevend zijn."
  },
  "Koran, 38:44": {
    revelation: "Plaats van openbaring: Mekka (Makki)",
    fact:
      "Soera Ṣād is Mekkaans en bevat meerdere verhalen over profeten waarin geduld, berouw en standvastigheid centraal staan.",
    context:
      "In tafsīr komt deze āyah vaak terug als voorbeeld van wijs handelen binnen de grenzen van gehoorzaamheid en oprechtheid."
  },
  "Koran, 12:76": {
    revelation: "Plaats van openbaring: Mekka (Makki)",
    fact:
      "Soera Yūsuf is volgens de klassieke indeling Mekkaans en staat bekend om haar doorlopende verhaallijn in één soera.",
    context:
      "De doorlopende opbouw maakt deze soera didactisch sterk: je leert geduld, vertrouwen en morele groei over meerdere fases."
  },
  "Koran, 2:152": {
    revelation: "Plaats van openbaring: Medina (Madani)",
    fact:
      "In Medinese verzen zie je vaak een combinatie van spirituele verdieping en gemeenschapsvorming. Dzikr krijgt daarin een centrale plaats.",
    context:
      "Dit vers wordt veel gebruikt in lesopbouw over dagelijkse routine: korte, consistente dzikr-momenten hebben langdurige impact."
  },
  "Koran, 43:36": {
    revelation: "Plaats van openbaring: Mekka (Makki)",
    fact:
      "Soera az-Zukhruf is Mekkaans en waarschuwt herhaaldelijk voor ghaflah (achteloosheid) tegenover openbaring en dzikr.",
    context:
      "Ghaflah wordt in islamitische spiritualiteit gezien als sluipend: daarom zijn bewuste herinneringsmomenten en Qurʾān-routine zo belangrijk."
  },
  "Koran, 14:24": {
    revelation: "Plaats van openbaring: Mekka (Makki)",
    fact:
      "De vergelijking van het goede woord met een stevige boom is een bekend Koranisch beeld dat vaak wordt gebruikt in tafsīr over geloofsgroei.",
    context:
      "Het boombeeld benadrukt worteling, stabiliteit en vruchtbaarheid: goede woorden werken door op lange termijn."
  },
  "Koran, 24:22": {
    revelation: "Plaats van openbaring: Medina (Madani)",
    fact:
      "Soera an-Nūr is Medinees en bevat veel sociale en ethische richtlijnen voor een gezonde gemeenschap, waaronder vergeving en herstel.",
    context:
      "Deze soera verbindt persoonlijke zuiverheid met sociale verantwoordelijkheid, waardoor karaktervorming en gemeenschapszorg samenkomen."
  }
};

const STORAGE_KEY = "hrpc_quran_quest_progress_v1";
const REFLECTION_KEY = "hrpc_quran_quest_reflections_v1";
const TASKS_KEY = "hrpc_quran_quest_daily_tasks_v1";
const MEMO_KEY = "hrpc_quran_quest_memorization_v1";
const PARTNER_KEY = "hrpc_quran_quest_partner_v1";
const RHYTHM_KEY = "hrpc_quran_quest_rhythm_days_v1";

const RAMADAN_END_ISO = "2026-03-30";
const DEFAULT_POST_RAMADAN_DAYS = [1, 3, 5]; // maandag, woensdag, vrijdag

function trackEvent(path, title) {
  if (window.goatcounter && typeof window.goatcounter.count === "function") {
    window.goatcounter.count({ path, title, event: true });
  }
}

const lessonTitleEl = document.getElementById("lessonTitle");
const lessonVerseEl = document.getElementById("lessonVerse");
const lessonRefEl = document.getElementById("lessonRef");
const revelationContextEl = document.getElementById("revelationContext");
const dailyFactEl = document.getElementById("dailyFact");
const lessonInsightEl = document.getElementById("lessonInsight");
const dailyFactContextEl = document.getElementById("dailyFactContext");
const toggleFactContextBtn = document.getElementById("toggleFactContextBtn");
const readingPromptEl = document.getElementById("readingPrompt");
const readDurationEl = document.getElementById("readDuration");
const startReadTimerBtn = document.getElementById("startReadTimerBtn");
const readTimerLabelEl = document.getElementById("readTimerLabel");
const markReadDoneBtn = document.getElementById("markReadDoneBtn");
const readStatusEl = document.getElementById("readStatus");
const quizQuestionEl = document.getElementById("quizQuestion");
const quizOptionsEl = document.getElementById("quizOptions");
const quizFeedbackEl = document.getElementById("quizFeedback");
const challengeQuestionEl = document.getElementById("challengeQuestion");
const challengeOptionsEl = document.getElementById("challengeOptions");
const challengeFeedbackEl = document.getElementById("challengeFeedback");
const dailyTipEl = document.getElementById("dailyTip");
const applyTipBtn = document.getElementById("applyTipBtn");
const tipStatusEl = document.getElementById("tipStatus");
const completeHintEl = document.getElementById("completeHint");
const completeBtn = document.getElementById("completeBtn");
const streakEl = document.getElementById("streak");
const totalDoneEl = document.getElementById("totalDone");
const todayStatusEl = document.getElementById("todayStatus");
const reflectionInputEl = document.getElementById("reflectionInput");
const saveReflectionBtn = document.getElementById("saveReflectionBtn");
const reflectionStatusEl = document.getElementById("reflectionStatus");
const weekHistoryEl = document.getElementById("weekHistory");
const dailyProgressFillEl = document.getElementById("dailyProgressFill");
const dailyProgressTextEl = document.getElementById("dailyProgressText");

const dailyAyahRefEl = document.getElementById("dailyAyahRef");
const dailyAyahTextEl = document.getElementById("dailyAyahText");
const memoProgressFillEl = document.getElementById("memoProgressFill");
const memoProgressTextEl = document.getElementById("memoProgressText");
const memoListenBtn = document.getElementById("memoListenBtn");
const memoRepeatBtn = document.getElementById("memoRepeatBtn");
const memoCheckBtn = document.getElementById("memoCheckBtn");
const memoStatusEl = document.getElementById("memoStatus");

const weeklyGoalTextEl = document.getElementById("weeklyGoalText");
const weeklyGoalMetaEl = document.getElementById("weeklyGoalMeta");
const weeklyGoalBadgeEl = document.getElementById("weeklyGoalBadge");

const partnerNameInputEl = document.getElementById("partnerNameInput");
const partnerEnableToggleEl = document.getElementById("partnerEnableToggle");
const partnerSaveBtn = document.getElementById("partnerSaveBtn");
const partnerCheckinBtn = document.getElementById("partnerCheckinBtn");
const partnerReminderEl = document.getElementById("partnerReminder");

const rhythmModeTextEl = document.getElementById("rhythmModeText");
const rhythmDaysTextEl = document.getElementById("rhythmDaysText");
const rhythmSaveBtn = document.getElementById("rhythmSaveBtn");
const rhythmStatusEl = document.getElementById("rhythmStatus");
const rhythmDayCheckboxes = {
  0: document.getElementById("rhythmDay0"),
  1: document.getElementById("rhythmDay1"),
  2: document.getElementById("rhythmDay2"),
  3: document.getElementById("rhythmDay3"),
  4: document.getElementById("rhythmDay4"),
  5: document.getElementById("rhythmDay5"),
  6: document.getElementById("rhythmDay6")
};

const taskChips = {
  read: document.getElementById("taskRead"),
  memorize: document.getElementById("taskMemorize"),
  quiz: document.getElementById("taskQuiz"),
  tip: document.getElementById("taskTip"),
  challenge: document.getElementById("taskChallenge"),
  reflection: document.getElementById("taskReflection")
};

const now = new Date();
const todayKey = getDateKey(now);
const lesson = LESSONS[getDayNumberInYear(now) % LESSONS.length];
const progress = readJson(STORAGE_KEY, {});
const reflections = readJson(REFLECTION_KEY, {});
const tasksByDate = readJson(TASKS_KEY, {});
const memoByDate = readJson(MEMO_KEY, {});
const partnerState = readJson(PARTNER_KEY, {
  name: "",
  enabled: false,
  lastCheckinDate: ""
});
const rhythmState = readJson(RHYTHM_KEY, {
  days: DEFAULT_POST_RAMADAN_DAYS
});

const ramadanEndDate = new Date(`${RAMADAN_END_ISO}T23:59:59`);
const isPostRamadanMode = now > ramadanEndDate;

const memoState = memoByDate[todayKey] || {
  listen: false,
  repeat: false,
  check: false
};

const todayTasks = tasksByDate[todayKey] || {
  read: false,
  memorize: false,
  quiz: false,
  tip: false,
  challenge: false,
  reflection: false
};

tasksByDate[todayKey] = todayTasks;
memoByDate[todayKey] = memoState;

let quizLocked = false;
let challengeLocked = false;
let readTimerId = null;
let readRemaining = Number(readDurationEl.value);
let factContextOpen = false;
let appOpenTracked = false;

renderLesson();
renderQuiz();
renderChallenge();
renderTip();
renderReadState();
renderTaskProgress();
renderMemoMeter();
renderPartnerMode();
renderRhythmMode();
renderWeekGoal();
renderStats();
renderWeekHistory();
loadReflection();
updateReadTimerLabel();
if (!appOpenTracked) {
  trackEvent("koran-app/geopend", "Koran-app geopend");
  appOpenTracked = true;
}

readDurationEl.addEventListener("change", () => {
  if (readTimerId) return;
  readRemaining = Number(readDurationEl.value);
  updateReadTimerLabel();
});

startReadTimerBtn.addEventListener("click", () => {
  if (readTimerId) return;
  trackEvent("koran-app/leesmoment-gestart", "Leesmoment gestart");

  readRemaining = Number(readDurationEl.value);
  updateReadTimerLabel();
  readStatusEl.textContent = "Leestimer loopt... lees de verzen rustig in je Koran.";
  readStatusEl.className = "feedback";
  startReadTimerBtn.disabled = true;
  markReadDoneBtn.disabled = true;

  readTimerId = window.setInterval(() => {
    readRemaining -= 1;
    updateReadTimerLabel();

    if (readRemaining <= 0) {
      window.clearInterval(readTimerId);
      readTimerId = null;
      readRemaining = 0;
      updateReadTimerLabel();
      readStatusEl.textContent = "Leestijd afgerond. Klik nu op 'Ik heb de verzen gelezen'.";
      readStatusEl.className = "feedback good";
      startReadTimerBtn.disabled = false;
      markReadDoneBtn.disabled = false;
    }
  }, 1000);
});

markReadDoneBtn.addEventListener("click", () => {
  setTaskState("read", true);
  trackEvent("koran-app/leesmoment-afgerond", "Leesmoment afgerond");
  readStatusEl.textContent = "Mooi. Je leesmoment is afgevinkt.";
  readStatusEl.className = "feedback good";
  markReadDoneBtn.disabled = true;
});

applyTipBtn.addEventListener("click", () => {
  setTaskState("tip", true);
  trackEvent("koran-app/tip-toegepast", "Tip van de dag toegepast");
  tipStatusEl.textContent = "Top. Tip van de dag is toegepast.";
  tipStatusEl.className = "feedback good";
  applyTipBtn.disabled = true;
});

completeBtn.addEventListener("click", () => {
  if (!isRequiredToday()) {
    completeHintEl.textContent = "Vandaag is een optionele herhalingsdag in het na-Ramadan ritme.";
    completeHintEl.style.color = "#18345a";
    return;
  }

  const completedTasks = getCompletedTaskCount();
  if (completedTasks < 4) {
    completeHintEl.textContent = "Rond eerst minimaal 4 van de 6 stappen af.";
    completeHintEl.style.color = "#b53535";
    return;
  }

  progress[todayKey] = true;
  saveJson(STORAGE_KEY, progress);
  trackEvent("koran-app/dag-afgerond", "Koran-app dag afgerond");
  renderStats();
  renderWeekGoal();
  renderWeekHistory();
  completeBtn.disabled = true;
  completeBtn.textContent = "Vandaag afgerond";
  completeHintEl.textContent = "Goed gedaan. Kom morgen terug voor een nieuwe les.";
  completeHintEl.style.color = "#0f8a45";
});

saveReflectionBtn.addEventListener("click", () => {
  const text = reflectionInputEl.value.trim();
  reflections[todayKey] = text;
  saveJson(REFLECTION_KEY, reflections);
  trackEvent("koran-app/reflectie-opgeslagen", "Reflectie opgeslagen");
  reflectionStatusEl.textContent = text ? "Reflectie opgeslagen." : "Lege reflectie opgeslagen.";
  reflectionStatusEl.className = "feedback good";
  setTaskState("reflection", text.length > 0);
});

toggleFactContextBtn.addEventListener("click", () => {
  factContextOpen = !factContextOpen;
  updateFactContextVisibility();
});

memoListenBtn.addEventListener("click", () => {
  setMemoState("listen", true);
  trackEvent("koran-app/memorisatie-luister", "Memorisatie luisterstap afgerond");
  memoStatusEl.textContent = "Luisterstap afgerond.";
  memoStatusEl.className = "feedback good";
});

memoRepeatBtn.addEventListener("click", () => {
  setMemoState("repeat", true);
  trackEvent("koran-app/memorisatie-herhaal", "Memorisatie herhaalstap afgerond");
  memoStatusEl.textContent = "Herhaalstap afgerond.";
  memoStatusEl.className = "feedback good";
});

memoCheckBtn.addEventListener("click", () => {
  setMemoState("check", true);
  setTaskState("memorize", true);
  trackEvent("koran-app/memorisatie-check", "Memorisatie check afgerond");
  memoStatusEl.textContent = "Check afgerond. Mooie memorisatie-vooruitgang.";
  memoStatusEl.className = "feedback good";
});

partnerSaveBtn.addEventListener("click", () => {
  partnerState.name = partnerNameInputEl.value.trim();
  partnerState.enabled = partnerEnableToggleEl.checked;
  saveJson(PARTNER_KEY, partnerState);
  renderPartnerMode();

  partnerReminderEl.textContent = "Partnerinstellingen opgeslagen.";
  partnerReminderEl.className = "feedback good";
});

partnerCheckinBtn.addEventListener("click", () => {
  if (!partnerState.enabled) {
    partnerReminderEl.textContent = "Zet eerst partner-modus aan.";
    partnerReminderEl.className = "feedback bad";
    return;
  }

  partnerState.lastCheckinDate = todayKey;
  saveJson(PARTNER_KEY, partnerState);
  renderPartnerMode();
  partnerReminderEl.textContent = partnerState.name
    ? `Vandaag samen ingecheckt met ${partnerState.name}.`
    : "Vandaag samen ingecheckt.";
  partnerReminderEl.className = "feedback good";
});

rhythmSaveBtn.addEventListener("click", () => {
  const chosenDays = Object.entries(rhythmDayCheckboxes)
    .filter(([, checkbox]) => checkbox.checked)
    .map(([day]) => Number(day))
    .sort((a, b) => a - b);

  if (chosenDays.length === 0) {
    rhythmStatusEl.textContent = "Kies minimaal 1 vaste dag.";
    rhythmStatusEl.className = "feedback bad";
    return;
  }

  rhythmState.days = chosenDays;
  saveJson(RHYTHM_KEY, rhythmState);
  rhythmStatusEl.textContent = "Na-Ramadan ritme opgeslagen.";
  rhythmStatusEl.className = "feedback good";
  renderRhythmMode();
  renderTaskProgress();
  renderWeekGoal();
  renderWeekHistory();
  renderStats();
});

function renderLesson() {
  const factData = FACTS_BY_REFERENCE[lesson.reference];

  lessonTitleEl.textContent = lesson.title;
  lessonVerseEl.textContent = lesson.verseText;
  lessonRefEl.textContent = lesson.reference;
  revelationContextEl.textContent = factData
    ? factData.revelation
    : "Plaats van openbaring: niet gespecificeerd";

  dailyFactEl.textContent = factData
    ? factData.fact
    : "Koran-feit: blijf dagelijks lezen met tadabbur; consistentie is de sleutel tot een blijvende band.";

  lessonInsightEl.textContent = lesson.insight;
  dailyFactContextEl.textContent = factData?.context || "";
  factContextOpen = false;
  updateFactContextVisibility();
  readingPromptEl.textContent = `Lees vandaag vers ${getVerseOnly(lesson.reference)} van de Koran bij voorkeur uit een mushaf (het lezen uit de mushaf brengt extra zegeningen). Als het echt niet anders kan, lees dan vanaf je mobiel of iets anders. Herhaal de vers minimaal 3 keer en probeer haar ook te memoriseren.`;
}

function updateFactContextVisibility() {
  const hasContext = dailyFactContextEl.textContent.trim().length > 0;
  toggleFactContextBtn.hidden = !hasContext;
  if (!hasContext) {
    dailyFactContextEl.hidden = true;
    return;
  }

  dailyFactContextEl.hidden = !factContextOpen;
  toggleFactContextBtn.textContent = factContextOpen ? "Verberg extra context" : "Toon meer context";
}

function renderQuiz() {
  quizQuestionEl.textContent = lesson.question;
  quizFeedbackEl.textContent = "";
  quizFeedbackEl.className = "feedback";
  quizOptionsEl.innerHTML = "";

  lesson.options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.type = "button";
    btn.textContent = option;
    btn.addEventListener("click", () => answerQuiz(index));
    quizOptionsEl.appendChild(btn);
  });
}

function answerQuiz(choice) {
  if (quizLocked) return;
  quizLocked = true;

  const isCorrect = choice === lesson.answer;
  quizFeedbackEl.textContent = isCorrect
    ? "Goed gedaan. Dit past bij de les van vandaag."
    : "Bijna. Lees de les nog een keer en probeer morgen opnieuw.";
  quizFeedbackEl.className = `feedback ${isCorrect ? "good" : "bad"}`;

  [...quizOptionsEl.children].forEach((button, index) => {
    button.disabled = true;
    if (index === lesson.answer) {
      button.style.border = "2px solid #0f8a45";
    }
  });

  setTaskState("quiz", true);
  trackEvent(
    isCorrect ? "koran-app/quiz-goed" : "koran-app/quiz-fout",
    isCorrect ? "Koran-app quizvraag goed" : "Koran-app quizvraag fout"
  );
}

function renderChallenge() {
  challengeLocked = false;
  challengeFeedbackEl.textContent = "";
  challengeFeedbackEl.className = "feedback";
  challengeQuestionEl.textContent = "Welke stap helpt vandaag het meest om je band met de Koran te versterken?";

  const options = buildChallengeOptions();
  challengeOptionsEl.innerHTML = "";

  options.forEach((option, index) => {
    const btn = document.createElement("button");
    btn.className = "option-btn";
    btn.type = "button";
    btn.textContent = option;
    btn.addEventListener("click", () => answerChallenge(option, options));
    challengeOptionsEl.appendChild(btn);
  });
}

function answerChallenge(choice, options) {
  if (challengeLocked) return;
  challengeLocked = true;

  const isCorrect = choice === lesson.action;
  challengeFeedbackEl.textContent = isCorrect
    ? "Sterk gekozen. Dit is precies de praktijkstap van vandaag."
    : "Dat is niet de beste keuze voor vandaag. Kies de stap die direct bij de les hoort.";
  challengeFeedbackEl.className = `feedback ${isCorrect ? "good" : "bad"}`;

  [...challengeOptionsEl.children].forEach((button, index) => {
    button.disabled = true;
    if (options[index] === lesson.action) {
      button.style.border = "2px solid #0f8a45";
    }
  });

  setTaskState("challenge", true);
  trackEvent(
    isCorrect ? "koran-app/challenge-goed" : "koran-app/challenge-fout",
    isCorrect ? "Koran-app challenge goed" : "Koran-app challenge fout"
  );
}

function renderTip() {
  dailyTipEl.textContent = lesson.tip;
  applyTipBtn.disabled = todayTasks.tip;
  tipStatusEl.textContent = todayTasks.tip ? "Tip van de dag al toegepast." : "";
  tipStatusEl.className = todayTasks.tip ? "feedback good" : "feedback";
}

function renderReadState() {
  if (todayTasks.read) {
    readStatusEl.textContent = "Leesmoment al afgerond voor vandaag.";
    readStatusEl.className = "feedback good";
    markReadDoneBtn.disabled = true;
  }
}

function renderTaskProgress() {
  const completedTasks = getCompletedTaskCount();
  const percent = Math.round((completedTasks / 6) * 100);

  dailyProgressFillEl.style.width = `${percent}%`;
  dailyProgressTextEl.textContent = `${completedTasks} van 6 stappen afgerond`;

  Object.keys(taskChips).forEach((key) => {
    taskChips[key].classList.toggle("done", todayTasks[key]);
  });

  if (!isRequiredToday()) {
    completeHintEl.style.color = "#18345a";
    completeHintEl.textContent = "Na-Ramadan ritme: vandaag is een optionele herhalingsdag.";
    return;
  }

  completeHintEl.style.color = "#4c5f78";
  completeHintEl.textContent = "Rond minimaal 4 van de 6 stappen af om je dag te markeren.";
}

function renderMemoMeter() {
  dailyAyahRefEl.textContent = lesson.reference;
  dailyAyahTextEl.textContent = lesson.verseText;

  const doneCount = Object.values(memoState).filter(Boolean).length;
  const percent = Math.round((doneCount / 3) * 100);
  memoProgressFillEl.style.width = `${percent}%`;
  memoProgressTextEl.textContent = `${doneCount} van 3 stappen afgerond`;

  memoListenBtn.disabled = memoState.listen;
  memoRepeatBtn.disabled = memoState.repeat;
  memoCheckBtn.disabled = memoState.check;

  if (memoState.check) {
    todayTasks.memorize = true;
    tasksByDate[todayKey] = todayTasks;
    saveJson(TASKS_KEY, tasksByDate);
  }

  if (doneCount === 3) {
    memoStatusEl.textContent = "Vers van de dag volledig afgerond.";
    memoStatusEl.className = "feedback good";
  }
}

function renderWeekGoal() {
  const weekCount = getCompletedDaysInCurrentWeek();
  const target = getWeeklyTarget();
  weeklyGoalTextEl.textContent = `Deze week: ${weekCount} van ${target} dagen afgerond.`;

  weeklyGoalMetaEl.textContent = isPostRamadanMode
    ? `Na-Ramadan modus actief: doel is ${target} vaste dag(en) per week.`
    : "Ramadanmodus actief: streef naar minimaal 5 van 7 dagen.";

  const achieved = weekCount >= target;
  weeklyGoalBadgeEl.hidden = !achieved;
}

function renderPartnerMode() {
  partnerNameInputEl.value = partnerState.name || "";
  partnerEnableToggleEl.checked = Boolean(partnerState.enabled);
  partnerCheckinBtn.disabled = !partnerState.enabled;

  if (!partnerState.enabled) {
    partnerReminderEl.textContent = "Partner-modus staat uit.";
    partnerReminderEl.className = "feedback";
    return;
  }

  if (partnerState.lastCheckinDate === todayKey) {
    partnerReminderEl.textContent = partnerState.name
      ? `Vandaag ingecheckt met ${partnerState.name}.`
      : "Vandaag ingecheckt met je partner.";
    partnerReminderEl.className = "feedback good";
    return;
  }

  partnerReminderEl.textContent = partnerState.name
    ? `Herinnering: check vandaag in met ${partnerState.name}.`
    : "Herinnering: check vandaag in met je partner.";
  partnerReminderEl.className = "feedback bad";
}

function renderRhythmMode() {
  const selectedRhythmDays = getSelectedRhythmDays();
  const requiredRhythmDay = isRequiredRhythmDay();
  const dayNames = toDutchDayNames(selectedRhythmDays);
  Object.entries(rhythmDayCheckboxes).forEach(([day, checkbox]) => {
    checkbox.checked = selectedRhythmDays.includes(Number(day));
  });

  if (isPostRamadanMode) {
    rhythmModeTextEl.textContent = "Na-Ramadan ritme is actief.";
    rhythmDaysTextEl.textContent = `Vaste dagen: ${dayNames.join(", ")}. Vandaag: ${requiredRhythmDay ? "actieve lesdag" : "herhalingsdag"}.`;
    return;
  }

  rhythmModeTextEl.textContent = "Ramadan-dagritme is actief.";
  rhythmDaysTextEl.textContent = `Na Ramadan schakelt de app automatisch over naar jouw vaste dagen (${dayNames.join(", ")}).`;
}

function normalizeRhythmDays(days) {
  const fallback = [...DEFAULT_POST_RAMADAN_DAYS];
  if (!Array.isArray(days)) return fallback;

  const clean = days
    .map((d) => Number(d))
    .filter((d) => Number.isInteger(d) && d >= 0 && d <= 6);

  const unique = [...new Set(clean)].sort((a, b) => a - b);
  return unique.length > 0 ? unique : fallback;
}

function toDutchDayNames(dayNumbers) {
  const map = {
    0: "zondag",
    1: "maandag",
    2: "dinsdag",
    3: "woensdag",
    4: "donderdag",
    5: "vrijdag",
    6: "zaterdag"
  };
  return dayNumbers.map((d) => map[d]);
}

function renderStats() {
  const doneDays = Object.keys(progress).filter((key) => progress[key]);
  const todayDone = Boolean(progress[todayKey]);
  const completedTasks = getCompletedTaskCount();

  streakEl.textContent = `${calculateStreak(progress, now)} dagen`;
  totalDoneEl.textContent = `${doneDays.length} dagen`;

  if (todayDone) {
    todayStatusEl.textContent = "Afgerond";
    completeBtn.disabled = true;
    completeBtn.textContent = "Vandaag afgerond";
    return;
  }

  if (!isRequiredToday) {
    todayStatusEl.textContent = "Herhalingsdag";
    completeBtn.disabled = true;
    completeBtn.textContent = "Optionele herhalingsdag";
    return;
  }

  todayStatusEl.textContent = "Open";
  completeBtn.disabled = completedTasks < 4;
  completeBtn.textContent = "Markeer vandaag als afgerond";
}

function renderWeekHistory() {
  weekHistoryEl.innerHTML = "";

  for (let offset = 6; offset >= 0; offset -= 1) {
    const date = new Date(now);
    date.setDate(now.getDate() - offset);
    const key = getDateKey(date);
    const chip = document.createElement("div");
    chip.className = `day-chip ${progress[key] ? "done" : ""}`;

    const dayName = date.toLocaleDateString("nl-NL", { weekday: "short" });
    const dayNum = date.toLocaleDateString("nl-NL", { day: "2-digit", month: "2-digit" });

    chip.innerHTML = `<span>${dayName}</span><strong>${dayNum}</strong><span>${progress[key] ? "✅" : "⬜"}</span>`;
    weekHistoryEl.appendChild(chip);
  }
}

function updateReadTimerLabel() {
  const minutes = String(Math.floor(readRemaining / 60)).padStart(2, "0");
  const seconds = String(readRemaining % 60).padStart(2, "0");
  readTimerLabelEl.textContent = `${minutes}:${seconds}`;
}

function loadReflection() {
  const reflection = reflections[todayKey] || "";
  reflectionInputEl.value = reflection;
  if (reflection.trim().length > 0) {
    todayTasks.reflection = true;
    tasksByDate[todayKey] = todayTasks;
    saveJson(TASKS_KEY, tasksByDate);
  }
}

function setTaskState(taskKey, value) {
  todayTasks[taskKey] = value;
  tasksByDate[todayKey] = todayTasks;
  saveJson(TASKS_KEY, tasksByDate);
  renderTaskProgress();
  renderStats();
}

function setMemoState(key, value) {
  memoState[key] = value;
  memoByDate[todayKey] = memoState;
  saveJson(MEMO_KEY, memoByDate);
  renderMemoMeter();
  renderTaskProgress();
  renderStats();
}

function getCompletedTaskCount() {
  return Object.values(todayTasks).filter(Boolean).length;
}

function getCompletedDaysInCurrentWeek() {
  const { start, end } = getWeekRange(now);
  let count = 0;

  const cursor = new Date(start);
  while (cursor <= end) {
    if (progress[getDateKey(cursor)]) {
      count += 1;
    }
    cursor.setDate(cursor.getDate() + 1);
  }

  return count;
}

function getSelectedRhythmDays() {
  return normalizeRhythmDays(rhythmState.days);
}

function isRequiredRhythmDay() {
  return getSelectedRhythmDays().includes(now.getDay());
}

function isRequiredToday() {
  return !isPostRamadanMode || isRequiredRhythmDay();
}

function getWeeklyTarget() {
  return isPostRamadanMode ? getSelectedRhythmDays().length : 5;
}

function getWeekRange(date) {
  const current = new Date(date);
  const day = current.getDay();
  const shiftToMonday = (day + 6) % 7;

  const start = new Date(current);
  start.setDate(current.getDate() - shiftToMonday);
  start.setHours(0, 0, 0, 0);

  const end = new Date(start);
  end.setDate(start.getDate() + 6);
  end.setHours(23, 59, 59, 999);

  return { start, end };
}

function buildChallengeOptions() {
  const distractors = shuffleArray(
    DISTRACTOR_ACTIONS.filter((item) => item !== lesson.action)
  ).slice(0, 2);

  return shuffleArray([lesson.action, ...distractors]);
}

function shuffleArray(arr) {
  const clone = [...arr];
  for (let i = clone.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [clone[i], clone[j]] = [clone[j], clone[i]];
  }
  return clone;
}

function calculateStreak(progressMap, fromDate) {
  let streak = 0;
  const cursor = new Date(fromDate);

  while (progressMap[getDateKey(cursor)]) {
    streak += 1;
    cursor.setDate(cursor.getDate() - 1);
  }

  return streak;
}

function getDayNumberInYear(date) {
  const start = new Date(date.getFullYear(), 0, 0);
  const diff = date - start;
  const oneDay = 1000 * 60 * 60 * 24;
  return Math.floor(diff / oneDay);
}

function getDateKey(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function getVerseOnly(reference) {
  const parts = reference.split(",");
  return parts.length > 1 ? parts[1].trim() : reference.trim();
}

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveJson(key, value) {
  localStorage.setItem(key, JSON.stringify(value));
}
