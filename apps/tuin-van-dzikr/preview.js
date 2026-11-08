/* ── Data ───────────────────────────────────────────────── */
const adhkar = [
  { arabic: 'سُبْحَانَ اللَّهِ', label: 'SubḥānAllāh',    target: 33, startAt: 28 },
  { arabic: 'اَلْحَمْدُ لِلَّهِ', label: 'Alḥamdulillāh', target: 33, startAt: 0  },
  { arabic: 'اَللَّهُ أَكْبَرُ',  label: 'Allāhu Akbar',   target: 34, startAt: 0  },
];

/* ── State ──────────────────────────────────────────────── */
let dhikrIndex = 0;
let count       = adhkar[0].startAt;
let animating   = false;
const BEADS     = 33;
const RADIUS    = 84; // px from center of 200px wrap

/* ── DOM ────────────────────────────────────────────────── */
const circle        = document.getElementById('tasbihCircle');
const centerArabic  = document.getElementById('centerArabic');
const centerCount   = document.getElementById('centerCount');
const centerRounds  = document.getElementById('centerRounds');
const tapBtn        = document.getElementById('tapBtn');
const celebration   = document.getElementById('celebration');
const celebTitle    = document.getElementById('celebrationTitle');
const celebArabic   = document.getElementById('celebrationArabic');
const celebSub      = document.getElementById('celebrationSub');
const selectorBtns  = [
  document.getElementById('btn0'),
  document.getElementById('btn1'),
  document.getElementById('btn2'),
];

/* ── Build bead ring ────────────────────────────────────── */
function buildBeads() {
  circle.innerHTML = '';
  const cx = 100, cy = 100; // center of 200×200 wrap
  for (let i = 0; i < BEADS; i++) {
    const angle = (i / BEADS) * 2 * Math.PI - Math.PI / 2;
    const x = cx + RADIUS * Math.cos(angle);
    const y = cy + RADIUS * Math.sin(angle);
    const bead = document.createElement('div');
    bead.className = 'tasbih-bead' + (i % 11 === 0 ? ' milestone' : '');
    bead.id = 'bead' + i;
    bead.style.left = x + 'px';
    bead.style.top  = y + 'px';
    circle.appendChild(bead);
  }
}

function updateBeads() {
  for (let i = 0; i < BEADS; i++) {
    const bead = document.getElementById('bead' + i);
    if (!bead) continue;
    bead.classList.remove('completed', 'current');
    if (i < count) bead.classList.add('completed');
    else if (i === count && count < adhkar[dhikrIndex].target) bead.classList.add('current');
  }
}

function updateCenter(d) {
  centerArabic.textContent = d.arabic;
  centerCount.textContent  = count + ' / ' + d.target;
  centerRounds.textContent = '';
}

function updateSelector(index) {
  selectorBtns.forEach((b, i) => {
    b.classList.toggle('active', i === index);
  });
}

function bumpCount() {
  centerCount.classList.add('bump');
  setTimeout(() => centerCount.classList.remove('bump'), 160);
}

/* ── Tap logic ──────────────────────────────────────────── */
function doTap() {
  if (animating) return;
  const d = adhkar[dhikrIndex];

  tapBtn.classList.add('pressed');
  setTimeout(() => tapBtn.classList.remove('pressed'), 130);

  count++;
  updateBeads();
  centerCount.textContent = count + ' / ' + d.target;
  bumpCount();

  if (count >= d.target) {
    animating = true;

    // Show celebration
    setTimeout(() => {
      celebTitle.textContent  = 'Voltooid';
      celebArabic.textContent = d.arabic;
      celebSub.textContent    = d.target + '× ' + d.label;
      celebration.classList.add('show');

      setTimeout(() => {
        celebration.classList.remove('show');

        // Next dhikr
        dhikrIndex = (dhikrIndex + 1) % adhkar.length;
        count = adhkar[dhikrIndex].startAt;

        updateSelector(dhikrIndex);
        buildBeads();
        updateBeads();
        updateCenter(adhkar[dhikrIndex]);

        setTimeout(() => { animating = false; }, 300);
      }, 1600);
    }, 200);
  }
}

/* ── Auto-play ──────────────────────────────────────────── */
function scheduleNext() {
  const d = adhkar[dhikrIndex];
  const remaining = d.target - count;
  const delay = remaining <= 4 ? 650 : 850;
  return setTimeout(() => {
    doTap();
    timeoutId = scheduleNext();
  }, delay);
}

/* ── Init ───────────────────────────────────────────────── */
buildBeads();
updateBeads();
updateCenter(adhkar[0]);

let timeoutId;
setTimeout(() => { timeoutId = scheduleNext(); }, 1000);
