const TOTAL_DAYS = 30;
const RAMADAN_START_DATE = "2026-02-19";

const FALLBACK_MESSAGES = Array.from({ length: TOTAL_DAYS }, (_, index) => ({
  daad: `Goede daad ${index + 1}`,
  toelichting: "Voer vandaag bewust een kleine daad uit met oprechte intentie."
}));

const gridEl = document.getElementById("calendar-grid");
const dialogEl = document.getElementById("message-dialog");
const closeDialogBtn = document.getElementById("close-dialog");
const ctaBtn = document.getElementById("cta-btn");
const dialogDayEl = document.getElementById("dialog-day");
const dialogTitleEl = document.getElementById("dialog-title");
const dialogMessageEl = document.getElementById("dialog-message");
const progressTextEl = document.getElementById("progress-text");
const progressBarEl = document.getElementById("progress-bar");

let messages = [...FALLBACK_MESSAGES];
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

function normalizeMessage(item, index) {
  if (item && typeof item.title === "string" && typeof item.text === "string") {
    return {
      daad: item.title.trim() || `Goede daad ${index + 1}`,
      toelichting: item.text.trim()
    };
  }

  const ctaRaw = typeof item?.cta === "string" ? item.cta : "";
  const cta = ctaRaw.replace(/\s+/g, " ").trim();
  const split = cta.match(/^(.+?[.!?])(?:\s+|$)(.*)$/u);

  const daad = split?.[1]?.trim() || cta || `Goede daad ${index + 1}`;
  const toelichting =
    split?.[2]?.trim() || "Voer deze daad vandaag bewust en met oprechte intentie uit.";

  return { daad, toelichting };
}

function extractMessageArray(data) {
  if (Array.isArray(data)) return data;
  if (data && Array.isArray(data.active)) return data.active;
  return null;
}

async function loadMessages() {
  const candidateFiles = ["daden.json", "daden2.json"];

  for (const filename of candidateFiles) {
    try {
      const response = await fetch(`./${filename}`, { cache: "no-store" });
      if (!response.ok) throw new Error(`Kon ${filename} niet laden (${response.status})`);

      const data = await response.json();
      const source = extractMessageArray(data);
      if (!source || source.length < TOTAL_DAYS) {
        throw new Error(`${filename} bevat niet genoeg items`);
      }

      messages = source.slice(0, TOTAL_DAYS).map((item, index) => normalizeMessage(item, index));
      return;
    } catch (error) {
      console.warn(`Kon ${filename} niet gebruiken:`, error);
    }
  }

  console.warn("Geen geldig daden-bestand beschikbaar, fallback-teksten actief.");
}

function openDoor(day) {
  const tile = gridEl.querySelector(`[data-day="${day}"]`);
  if (!tile || !isDayUnlocked(day)) return;

  tile.classList.add("click-burst");
  window.setTimeout(() => tile.classList.remove("click-burst"), 420);

  openedDays.add(day);
  tile.classList.add("is-open");

  const message = messages[day - 1] || FALLBACK_MESSAGES[day - 1];
  dialogDayEl.textContent = `Dag ${day} van Ramadan`;
  dialogTitleEl.textContent = message.daad;
  dialogMessageEl.textContent = message.toelichting;
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

async function init() {
  await loadMessages();
  buildGrid();
  renderProgress();
}

init();
