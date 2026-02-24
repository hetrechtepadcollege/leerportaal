const MESSAGES = [
  { title: "Begin met Bismillah", text: "Start vandaag bewust met 'Bismillah' bij een taak die je normaal automatisch doet." },
  { title: "Lach naar iemand", text: "Geef vandaag minimaal drie mensen een oprechte glimlach." },
  { title: "Dua voor een ander", text: "Noem iemand bij naam in je dua, zonder dat diegene het hoeft te weten." },
  { title: "Kleine sadaqah", text: "Geef vandaag iets kleins weg: tijd, hulp of een financiële bijdrage." },
  { title: "Dank je wel tegen ouders", text: "Bedank je ouders of verzorgers vandaag bewust voor iets concreets." },
  { title: "Quran-moment", text: "Lees vandaag een kort stukje Quran met aandacht, al is het maar enkele ayaat." },
  { title: "Help in huis", text: "Neem uit jezelf een taak in huis over zonder dat iemand het vraagt." },
  { title: "Zeg iets goeds", text: "Spreek vandaag bewust een compliment uit dat oprecht is." },
  { title: "Bescherm je tong", text: "Laat roddel en negatieve woorden vandaag volledig achterwege." },
  { title: "Sunnah: rechts beginnen", text: "Begin vandaag bij eten en kleding met de rechterkant." },
  { title: "Rustig reageren", text: "Als je geïrriteerd raakt: pauzeer, adem en reageer vriendelijk." },
  { title: "Extra dhikr", text: "Neem vijf minuten voor dhikr, bijvoorbeeld 'SubhanAllah, Alhamdulillah, Allahu Akbar'." },
  { title: "Groet bewust", text: "Begin vandaag gesprekken met een warme salam." },
  { title: "Maak iemand blij", text: "Doe vandaag één onverwachte goede daad voor iemand in je omgeving." },
  { title: "Dua voor ummah", text: "Maak vandaag een korte dua voor moslims wereldwijd." },
  { title: "Kennis delen", text: "Deel vandaag één islamitisch weetje of reminder met iemand." },
  { title: "Sunnah bij eten", text: "Eet vandaag met rust, dankbaarheid en zonder verspilling." },
  { title: "Geduld oefenen", text: "Zie een moeilijk moment vandaag als kans om sabr te trainen." },
  { title: "Vergeving vragen", text: "Zeg vandaag vaker 'Astaghfirullah' op rustige momenten." },
  { title: "Band versterken", text: "Neem contact op met een familielid dat je te weinig spreekt." },
  { title: "Wens het goede", text: "Gun iemand oprecht iets moois en spreek dat ook uit." },
  { title: "Voorbereid bidden", text: "Bereid je gebed voor met rust en focus, zonder haast." },
  { title: "Sunnah: water met adab", text: "Drink vandaag zittend en met aandacht, in meerdere kleine slokken." },
  { title: "Iemand vergeven", text: "Laat vandaag bewust een kleine ergernis los omwille van Allah." },
  { title: "Kleine opruim-actie", text: "Ruim een plek op die vaak rommelig blijft en maak het makkelijk voor anderen." },
  { title: "Leer iets nieuws", text: "Lees of luister vandaag 10 minuten over een islamitisch onderwerp." },
  { title: "Beloon goed gedrag", text: "Moedig een kind, broer, zus of vriend positief aan bij een goede daad." },
  { title: "Wees zacht", text: "Kies vandaag in toon en woorden voor zachtheid, ook bij meningsverschil." },
  { title: "Dua bij iftar", text: "Neem bij iftar een extra moment om gerichte dua te doen." },
  { title: "Sluit af met dankbaarheid", text: "Noem voor het slapen drie dingen waarvoor je Allah dankbaar bent." }
];

const RAMADAN_START_DATE = "2026-02-19";
const TOTAL_DAYS = 30;

const gridEl = document.getElementById("calendar-grid");
const dialogEl = document.getElementById("message-dialog");
const closeDialogBtn = document.getElementById("close-dialog");
const ctaBtn = document.getElementById("cta-btn");
const dialogDayEl = document.getElementById("dialog-day");
const dialogTitleEl = document.getElementById("dialog-title");
const dialogMessageEl = document.getElementById("dialog-message");
const progressTextEl = document.getElementById("progress-text");
const progressBarEl = document.getElementById("progress-bar");

let activeDay = null;
const openedDays = new Set(JSON.parse(localStorage.getItem("ramadan-opened-days") || "[]"));
const completedDays = new Set(JSON.parse(localStorage.getItem("ramadan-completed-days") || "[]"));

function parseLocalDate(dateString) {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day);
}

function getCurrentRamadanDay() {
  const start = parseLocalDate(RAMADAN_START_DATE);
  const now = new Date();
  const today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
  const diffMs = today.getTime() - start.getTime();
  const diffDays = Math.floor(diffMs / 86400000) + 1;

  if (diffDays < 1) return 0;
  return Math.min(diffDays, TOTAL_DAYS);
}

function isDayUnlocked(day) {
  return day <= getCurrentRamadanDay();
}

function saveState() {
  localStorage.setItem("ramadan-opened-days", JSON.stringify([...openedDays]));
  localStorage.setItem("ramadan-completed-days", JSON.stringify([...completedDays]));
}

function renderProgress() {
  const currentDay = getCurrentRamadanDay();
  const done = [...completedDays].filter((day) => day <= currentDay).length;
  progressTextEl.textContent = `${done} van ${TOTAL_DAYS} goede daden afgevinkt`;
  progressBarEl.style.width = `${(done / TOTAL_DAYS) * 100}%`;
}

function openDoor(day) {
  const tile = gridEl.querySelector(`[data-day="${day}"]`);
  if (!tile || !isDayUnlocked(day)) return;

  openedDays.add(day);
  tile.classList.add("is-open");

  const message = MESSAGES[day - 1];
  dialogDayEl.textContent = `Dag ${day} van Ramadan`;
  dialogTitleEl.textContent = message.title;
  dialogMessageEl.textContent = message.text;
  ctaBtn.textContent = completedDays.has(day) ? "Deze daad is al afgevinkt" : "Ik ga dit vandaag doen";
  ctaBtn.disabled = completedDays.has(day);
  activeDay = day;

  saveState();
  dialogEl.showModal();
}

function buildGrid() {
  gridEl.innerHTML = "";

  const layout = document.createElement("div");
  layout.className = "mosque-layout";

  const leftMinaret = document.createElement("div");
  leftMinaret.className = "minaret minaret-left";

  const mosqueBody = document.createElement("div");
  mosqueBody.className = "mosque-body";

  const bodyGrid = document.createElement("div");
  bodyGrid.className = "body-grid";
  mosqueBody.append(bodyGrid);

  const rightMinaret = document.createElement("div");
  rightMinaret.className = "minaret minaret-right";

  layout.append(leftMinaret, mosqueBody, rightMinaret);

  const fragment = document.createDocumentFragment();
  const currentDay = getCurrentRamadanDay();

  for (let day = 1; day <= TOTAL_DAYS; day += 1) {
    const tile = document.createElement("article");
    tile.className = "tile";
    tile.dataset.day = String(day);
    if (day === TOTAL_DAYS) tile.classList.add("main-door");
    if (day <= 10) tile.classList.add("minaret-window");
    const isUnlocked = day <= currentDay;

    if (!isUnlocked) tile.classList.add("locked");
    if (openedDays.has(day) && isUnlocked) tile.classList.add("is-open");
    if (completedDays.has(day) && isUnlocked) tile.classList.add("done");

    const frame = document.createElement("div");
    frame.className = "window-frame";

    const door = document.createElement("button");
    door.type = "button";
    door.className = "door-button";
    door.setAttribute("aria-label", day === TOTAL_DAYS ? `Open hoofddeur ${day}` : `Open raam ${day}`);
    door.textContent = String(day);
    if (!isUnlocked) {
      door.disabled = true;
      door.setAttribute("aria-label", `Deurtje ${day} is nog vergrendeld`);
    }
    door.addEventListener("click", () => openDoor(day));

    const inside = document.createElement("div");
    inside.className = "inside-message";
    const statusText = !isUnlocked ? "Nog gesloten" : completedDays.has(day) ? "Daad gekozen" : "Open deur";
    inside.innerHTML = `<strong>${day}</strong><span>${statusText}</span>`;

    frame.append(door, inside);
    tile.append(frame);
    if (day <= 5) {
      leftMinaret.append(tile);
    } else if (day <= 10) {
      rightMinaret.append(tile);
    } else {
      fragment.append(tile);
    }
  }

  bodyGrid.append(fragment);
  gridEl.append(layout);
}

closeDialogBtn.addEventListener("click", () => dialogEl.close());
dialogEl.addEventListener("click", (event) => {
  const rect = dialogEl.getBoundingClientRect();
  const clickedInDialog =
    rect.top <= event.clientY &&
    event.clientY <= rect.top + rect.height &&
    rect.left <= event.clientX &&
    event.clientX <= rect.left + rect.width;
  if (!clickedInDialog) dialogEl.close();
});

ctaBtn.addEventListener("click", () => {
  if (!activeDay) return;
  completedDays.add(activeDay);

  const tile = gridEl.querySelector(`[data-day="${activeDay}"]`);
  if (tile) {
    tile.classList.add("done");
    const textEl = tile.querySelector(".inside-message span");
    if (textEl) textEl.textContent = "Daad gekozen";
  }

  saveState();
  renderProgress();
  ctaBtn.textContent = "Deze daad is al afgevinkt";
  ctaBtn.disabled = true;
});

buildGrid();
renderProgress();
