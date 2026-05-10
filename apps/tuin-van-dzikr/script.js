(function () {
    'use strict';

    /* =============================================
       DATA LAYER
       ============================================= */
    var STORAGE_KEY = 'dzikrTuinV2';
    var LEGACY_KEY = 'dzikrTuin';

    var DZIKR_TYPES = [
        'subhanallah',
        'alhamdulillah',
        'allahuakbar',
        'lailahaillallah',
        'subhanallahiwabihamdihi',
        'subhanallahilazim',
        'hasbunallahu',
        'lahawla',
        'astaghfirullah',
        'yahayyuyaqayyum',
        'rabbiinni',
        'husnalkhatimah',
        'ajirniminannar'
    ];

    var DZIKR_ARABIC = {
        subhanallah: '\u0633\u064F\u0628\u0652\u062D\u064E\u0627\u0646\u064E \u0627\u0644\u0644\u0651\u0670\u0647\u0650',
        alhamdulillah: '\u0627\u064E\u0644\u0652\u062D\u064E\u0645\u0652\u062F\u064F \u0644\u0650\u0644\u0651\u0670\u0647\u0650',
        allahuakbar: '\u0627\u064E\u0644\u0644\u0651\u0670\u0647\u064F \u0623\u064E\u0643\u0652\u0628\u064E\u0631\u064F',
        lailahaillallah: '\u0644\u064E\u0627 \u0625\u0650\u0644\u0670\u0647\u064E \u0625\u0650\u0644\u0651\u064E\u0627 \u0627\u0644\u0644\u0651\u0670\u0647\u064F',
        subhanallahiwabihamdihi: 'سُبْحَانَ اللّٰهِ وَبِحَمْدِهِ',
        subhanallahilazim: 'سُبْحَانَ اللّٰهِ الْعَظِيمِ',
        hasbunallahu: 'حَسْبُنَا اللّٰهُ وَنِعْمَ الْوَكِيلُ',
        lahawla: 'لَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ',
        astaghfirullah: 'أَسْتَغْفِرُ اللّٰهَ',
        yahayyuyaqayyum: 'يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ',
        rabbiinni: 'رَبِّ إِنِّي لِمَا أَنْزَلْتَ إِلَيَّ مِنْ خَيْرٍ فَقِيرٌ',
        husnalkhatimah: 'اللّٰهُمَّ إِنِّي أَسْأَلُكَ حُسْنَ الْخَاتِمَةِ',
        ajirniminannar: 'اللّٰهُمَّ أَجِرْنِي مِنَ النَّارِ'
    };

    function emptyCounts() {
        var counts = {};
        DZIKR_TYPES.forEach(function (type) { counts[type] = 0; });
        return counts;
    }

    function ensureCounts(target) {
        target = target || {};
        DZIKR_TYPES.forEach(function (type) {
            if (target[type] == null) target[type] = 0;
        });
        return target;
    }

    function todayKey() {
        return new Date().toISOString().slice(0, 10);
    }

    function defaultState() {
        return {
            version: 2,
            totals: emptyCounts(),
            days: {},
            settings: { tasbihSound: false, selectedDzikr: 'subhanallah' },
            tasbihSession: { dzikrType: 'subhanallah', currentBead: 0, completedRounds: 0 }
        };
    }

    function loadState() {
        try {
            var raw = localStorage.getItem(STORAGE_KEY);
            if (raw) {
                var s = JSON.parse(raw);
                s.days = s.days || {};
                s.tasbihSession = s.tasbihSession || { dzikrType: 'subhanallah', currentBead: 0, completedRounds: 0 };
                s.totals = ensureCounts(s.totals);
                for (var dayKey in s.days) ensureCounts(s.days[dayKey]);
                if (s.tasbihSession && DZIKR_TYPES.indexOf(s.tasbihSession.dzikrType) === -1) {
                    s.tasbihSession.dzikrType = 'subhanallah';
                }
                return s;
            }
        } catch (e) { /* ignore */ }

        // Migrate from V1
        try {
            var v1raw = localStorage.getItem(LEGACY_KEY);
            if (v1raw) {
                var v1 = JSON.parse(v1raw);
                var s = defaultState();
                s.totals.subhanallah = v1.subhanallah || 0;
                s.totals.alhamdulillah = v1.alhamdulillah || 0;
                s.totals.allahuakbar = v1.allahuakbar || 0;
                var today = todayKey();
                s.days[today] = ensureCounts({
                    subhanallah: v1.subhanallah || 0,
                    alhamdulillah: v1.alhamdulillah || 0,
                    allahuakbar: v1.allahuakbar || 0
                });
                return s;
            }
        } catch (e) { /* ignore */ }

        return defaultState();
    }

    function saveState() {
        try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch (e) { /* ignore */ }
    }

    var state = loadState();

    function recordDzikr(type) {
        if (DZIKR_TYPES.indexOf(type) === -1) return;
        ensureCounts(state.totals);
        state.totals[type]++;
        var today = todayKey();
        if (!state.days[today]) {
            state.days[today] = emptyCounts();
        }
        ensureCounts(state.days[today]);
        state.days[today][type]++;
        saveState();
    }

    function getTodayCounts() {
        return ensureCounts(state.days[todayKey()] || emptyCounts());
    }

    function getDayTotal(dateKey) {
        var d = state.days[dateKey];
        if (!d) return 0;
        return DZIKR_TYPES.reduce(function (sum, type) { return sum + (d[type] || 0); }, 0);
    }

    function getStreak() {
        var streak = 0;
        var d = new Date();
        // Check if today has activity, otherwise start from yesterday
        if (getDayTotal(todayKey()) > 0) {
            streak = 1;
            d.setDate(d.getDate() - 1);
        } else {
            d.setDate(d.getDate() - 1);
        }
        while (true) {
            var key = d.toISOString().slice(0, 10);
            if (getDayTotal(key) > 0) {
                streak++;
                d.setDate(d.getDate() - 1);
            } else {
                break;
            }
        }
        return streak;
    }

    function getLongestStreak() {
        var dates = Object.keys(state.days).sort();
        if (dates.length === 0) return 0;
        var longest = 0;
        var current = 0;
        var prev = null;
        for (var i = 0; i < dates.length; i++) {
            if (getDayTotal(dates[i]) === 0) { current = 0; prev = null; continue; }
            if (prev) {
                var p = new Date(prev);
                p.setDate(p.getDate() + 1);
                if (p.toISOString().slice(0, 10) === dates[i]) {
                    current++;
                } else {
                    current = 1;
                }
            } else {
                current = 1;
            }
            if (current > longest) longest = current;
            prev = dates[i];
        }
        return longest;
    }

    function getBestDay() {
        var best = 0;
        var days = state.days;
        for (var key in days) {
            var total = getDayTotal(key);
            if (total > best) best = total;
        }
        return best;
    }

    function getWeekTotal() {
        var total = 0;
        var d = new Date();
        for (var i = 0; i < 7; i++) {
            total += getDayTotal(d.toISOString().slice(0, 10));
            d.setDate(d.getDate() - 1);
        }
        return total;
    }

    function getAllTimeTotal() {
        return DZIKR_TYPES.reduce(function (sum, type) { return sum + (state.totals[type] || 0); }, 0);
    }

    function getSupplementalTotal() {
        return DZIKR_TYPES.reduce(function (sum, type) {
            if (type === 'subhanallah' || type === 'alhamdulillah' || type === 'allahuakbar' || type === 'lailahaillallah') return sum;
            return sum + (state.totals[type] || 0);
        }, 0);
    }

    /* =============================================
       GOATCOUNTER HELPERS
       ============================================= */
    function gcEvent(path, title) {
        if (window.goatcounter && window.goatcounter.count) {
            window.goatcounter.count({ path: path, title: title || '', event: true });
        }
    }

    /* =============================================
       TAB NAVIGATION
       ============================================= */
    var tabs = document.querySelectorAll('.tab');
    var views = document.querySelectorAll('.view');

    function switchTab(viewName) {
        tabs.forEach(function (t) {
            var isActive = t.getAttribute('data-view') === viewName;
            t.classList.toggle('active', isActive);
            t.setAttribute('aria-selected', isActive ? 'true' : 'false');
        });
        views.forEach(function (v) {
            v.classList.toggle('active', v.id === 'view' + viewName.charAt(0).toUpperCase() + viewName.slice(1));
        });

        gcEvent('tuin-van-dzikr/tab/' + viewName, viewName);

        // Refresh view-specific content
        if (viewName === 'stats') renderStats();
        if (viewName === 'patroon') renderPattern();
        if (viewName === 'tasbih') renderTasbih();
    }

    tabs.forEach(function (tab) {
        tab.addEventListener('click', function () {
            switchTab(this.getAttribute('data-view'));
        });
    });

    /* =============================================
       VIEW: TUIN (Garden)
       ============================================= */
    var gardenCanvas = document.getElementById('gardenCanvas');
    var gardenParticles = document.getElementById('gardenParticles');
    var countEls = {};
    DZIKR_TYPES.forEach(function (type) {
        countEls[type] = document.querySelector('[data-count="' + type + '"]');
    });

    function seededRandom(seed) {
        var x = Math.sin(seed * 9301 + 49297) * 49297;
        return x - Math.floor(x);
    }

    function renderCounters() {
        var today = getTodayCounts();
        DZIKR_TYPES.forEach(function (type) {
            if (countEls[type]) countEls[type].textContent = today[type] || 0;
        });
    }

    /* Flower colors */
    var flowerColors = [
        ['#f5a5b8', '#e88ca5'],
        ['#e8a5d0', '#d88cbf'],
        ['#f5b8c8', '#e89caa'],
        ['#d4a5e8', '#c08cd6'],
        ['#f5c4d5', '#e8aab8'],
        ['#e0a0c8', '#d088b0'],
        ['#f0b0d0', '#e095b5'],
        ['#dbb0f0', '#c895e0']
    ];

    function createFlower(index, animate) {
        var el = document.createElement('div');
        var variant = seededRandom(index + 0.99) > 0.6 ? (seededRandom(index + 1.5) > 0.5 ? 'flower-tulip' : 'flower-daisy') : '';
        el.className = 'garden-flower' + (variant ? ' ' + variant : '');
        if (!animate) { el.style.animation = 'none'; el.style.opacity = '1'; }

        var r = seededRandom(index + 0.1);
        var r2 = seededRandom(index + 0.7);
        var leftPct = 2 + r * 28;
        var bottomPct = 8 + r2 * 32;
        var scale = 0.65 + seededRandom(index + 0.3) * 0.65;
        var stemH = 18 + seededRandom(index + 0.5) * 28;
        var colors = flowerColors[index % flowerColors.length];

        el.style.left = leftPct + '%';
        el.style.bottom = bottomPct + '%';
        el.style.transform = 'scale(' + scale + ')';
        if (!animate) el.style.opacity = '1';

        var petalSize = 8 + Math.round(seededRandom(index + 0.9) * 6);

        el.innerHTML =
            '<div class="flower-stem" style="height:' + stemH + 'px"></div>' +
            '<div class="flower-head" style="top:-' + (stemH - 2) + 'px">' +
                '<div class="flower-petal" style="width:' + petalSize + 'px;height:' + petalSize + 'px;background:' + colors[0] + '"></div>' +
                '<div class="flower-petal" style="width:' + petalSize + 'px;height:' + petalSize + 'px;background:' + colors[1] + '"></div>' +
                '<div class="flower-petal" style="width:' + petalSize + 'px;height:' + petalSize + 'px;background:' + colors[0] + '"></div>' +
                '<div class="flower-petal" style="width:' + petalSize + 'px;height:' + petalSize + 'px;background:' + colors[1] + '"></div>' +
                '<div class="flower-petal" style="width:' + petalSize + 'px;height:' + petalSize + 'px;background:' + colors[0] + '"></div>' +
                '<div class="flower-center"></div>' +
            '</div>';

        el.style.animationDelay = '0s, ' + (seededRandom(index + 0.4) * 3).toFixed(1) + 's';
        return el;
    }

    function createTree(index, animate) {
        var el = document.createElement('div');
        var isPine = seededRandom(index + 100.99) > 0.6;
        el.className = 'garden-tree' + (isPine ? ' tree-pine' : '');
        if (!animate) { el.style.animation = 'none'; el.style.opacity = '1'; }

        var r = seededRandom(index + 100.1);
        var r2 = seededRandom(index + 100.7);
        var leftPct = 35 + r * 28;
        var bottomPct = 8 + r2 * 24;
        var scale = 0.7 + seededRandom(index + 100.3) * 0.55;
        var trunkH = 28 + Math.round(seededRandom(index + 100.5) * 22);
        var trunkW = 5 + Math.round(seededRandom(index + 100.6) * 3);
        var canopySize = 26 + Math.round(seededRandom(index + 100.8) * 20);

        el.style.left = leftPct + '%';
        el.style.bottom = bottomPct + '%';
        el.style.transform = 'scale(' + scale + ')';

        var fruitCount = 2 + Math.round(seededRandom(index + 100.9) * 4);
        var fruitsHtml = '';
        for (var f = 0; f < fruitCount; f++) {
            var fx = Math.round(seededRandom(index * 7 + f) * (canopySize - 8));
            var fy = Math.round(seededRandom(index * 11 + f + .3) * (canopySize - 8));
            fruitsHtml += '<div class="tree-fruit" style="left:' + fx + 'px;top:' + fy + 'px"></div>';
        }

        el.innerHTML =
            '<div class="tree-trunk" style="height:' + trunkH + 'px;width:' + trunkW + 'px"></div>' +
            '<div class="tree-canopy" style="width:' + canopySize + 'px;height:' + (isPine ? canopySize * 1.4 : canopySize) + 'px;' +
                'top:-' + (trunkH + canopySize * 0.6) + 'px;left:50%;transform:translateX(-50%)">' +
                fruitsHtml +
            '</div>';

        el.style.animationDelay = '0s, ' + (seededRandom(index + 100.4) * 4).toFixed(1) + 's';
        return el;
    }

    function createStar(index, animate) {
        var el = document.createElement('div');
        el.className = 'garden-star';
        if (!animate) { el.style.animation = 'none'; el.style.opacity = '1'; }

        var r = seededRandom(index + 200.1);
        var r2 = seededRandom(index + 200.7);
        var leftPct = 68 + r * 28;
        var bottomPct = 8 + r2 * 42;
        var size = 12 + Math.round(seededRandom(index + 200.3) * 14);
        var glowSize = size * 2.5;

        el.style.left = leftPct + '%';
        el.style.bottom = bottomPct + '%';

        el.innerHTML =
            '<div class="star-shape" style="width:' + size + 'px;height:' + size + 'px">' +
                '<div class="star-inner" style="width:' + size + 'px;height:' + size + 'px"></div>' +
                '<div class="star-glow" style="width:' + glowSize + 'px;height:' + glowSize + 'px"></div>' +
            '</div>';

        el.style.animationDelay = '0s, ' + (seededRandom(index + 200.4) * 2.5).toFixed(1) + 's';
        return el;
    }

    /* Gem colors */
    var gemColors = [
        ['#c39bd3', '#9b59b6'],
        ['#bb8fce', '#8e44ad'],
        ['#d2b4de', '#a569bd'],
        ['#af7ac5', '#7d3c98'],
        ['#d7bde2', '#9b59b6']
    ];

    function createGem(index, animate) {
        var el = document.createElement('div');
        el.className = 'garden-gem';
        if (!animate) { el.style.animation = 'none'; el.style.opacity = '1'; }

        var r = seededRandom(index + 300.1);
        var r2 = seededRandom(index + 300.7);
        // Spread gems across the full width of the garden
        var leftPct = 5 + r * 88;
        var bottomPct = 5 + r2 * 38;
        var scale = 0.6 + seededRandom(index + 300.3) * 0.6;
        var colors = gemColors[index % gemColors.length];
        var size = 10 + Math.round(seededRandom(index + 300.9) * 8);

        el.style.left = leftPct + '%';
        el.style.bottom = bottomPct + '%';
        el.style.transform = 'scale(' + scale + ')';

        el.innerHTML =
            '<div class="gem-shape" style="width:' + size + 'px;height:' + size + 'px">' +
                '<div class="gem-facet gem-facet-top" style="border-bottom-color:' + colors[0] + '"></div>' +
                '<div class="gem-facet gem-facet-bottom" style="border-top-color:' + colors[1] + '"></div>' +
                '<div class="gem-sparkle"></div>' +
            '</div>';

        el.style.animationDelay = '0s, ' + (seededRandom(index + 300.4) * 3).toFixed(1) + 's';
        return el;
    }

    function renderGarden(animateIndex) {
        gardenCanvas.innerHTML = '';

        var maxF = Math.min(state.totals.subhanallah, 25);
        var maxT = Math.min(state.totals.alhamdulillah, 12);
        var maxS = Math.min(state.totals.allahuakbar, 18);
        var supplementalTotal = getSupplementalTotal();
        var maxG = Math.min((state.totals.lailahaillallah || 0) + supplementalTotal, 15);

        for (var i = 0; i < maxF; i++) {
            var anim = animateIndex && animateIndex.type === 'subhanallah' && i === maxF - 1;
            gardenCanvas.appendChild(createFlower(i, anim));
        }
        for (var j = 0; j < maxT; j++) {
            var anim2 = animateIndex && animateIndex.type === 'alhamdulillah' && j === maxT - 1;
            gardenCanvas.appendChild(createTree(j, anim2));
        }
        for (var k = 0; k < maxS; k++) {
            var anim3 = animateIndex && animateIndex.type === 'allahuakbar' && k === maxS - 1;
            gardenCanvas.appendChild(createStar(k, anim3));
        }
        for (var g = 0; g < maxG; g++) {
            var anim4 = animateIndex && animateIndex.type !== 'subhanallah' && animateIndex.type !== 'alhamdulillah' && animateIndex.type !== 'allahuakbar' && g === maxG - 1;
            gardenCanvas.appendChild(createGem(g, anim4));
        }

        // Scale items beyond visual max
        if (state.totals.subhanallah > 25) {
            var flowers = gardenCanvas.querySelectorAll('.garden-flower');
            var gf = 1 + (state.totals.subhanallah - 25) * 0.02;
            flowers.forEach(function (fl) {
                var m = fl.style.transform.match(/scale\(([^)]+)\)/);
                if (m) fl.style.transform = fl.style.transform.replace(/scale\([^)]+\)/, 'scale(' + (parseFloat(m[1]) * gf).toFixed(2) + ')');
            });
        }
        if (state.totals.alhamdulillah > 12) {
            var trees = gardenCanvas.querySelectorAll('.garden-tree');
            var gf2 = 1 + (state.totals.alhamdulillah - 12) * 0.03;
            trees.forEach(function (tr) {
                var m = tr.style.transform.match(/scale\(([^)]+)\)/);
                if (m) tr.style.transform = tr.style.transform.replace(/scale\([^)]+\)/, 'scale(' + (parseFloat(m[1]) * gf2).toFixed(2) + ')');
            });
        }
        if (state.totals.allahuakbar > 18) {
            var stars = gardenCanvas.querySelectorAll('.garden-star');
            stars.forEach(function (st) {
                var extra = (state.totals.allahuakbar - 18) * 0.4;
                var glow = st.querySelector('.star-glow');
                if (glow) glow.style.boxShadow = '0 0 ' + (8 + extra) + 'px rgba(255,248,220,.6)';
            });
        }
        if ((state.totals.lailahaillallah || 0) + supplementalTotal > 15) {
            var gems = gardenCanvas.querySelectorAll('.garden-gem');
            var gf3 = 1 + (((state.totals.lailahaillallah || 0) + supplementalTotal) - 15) * 0.025;
            gems.forEach(function (gm) {
                var m = gm.style.transform.match(/scale\(([^)]+)\)/);
                if (m) gm.style.transform = gm.style.transform.replace(/scale\([^)]+\)/, 'scale(' + (parseFloat(m[1]) * gf3).toFixed(2) + ')');
            });
        }
    }

    /* Particles */
    function initParticles() {
        gardenParticles.innerHTML = '';
        // Pollen
        for (var i = 0; i < 8; i++) {
            var p = document.createElement('div');
            p.className = 'particle particle-pollen';
            p.style.left = (5 + Math.random() * 90) + '%';
            p.style.bottom = (5 + Math.random() * 40) + '%';
            p.style.animationDelay = (Math.random() * 8).toFixed(1) + 's';
            p.style.animationDuration = (6 + Math.random() * 4).toFixed(1) + 's';
            gardenParticles.appendChild(p);
        }
        // Fireflies
        for (var j = 0; j < 5; j++) {
            var f = document.createElement('div');
            f.className = 'particle particle-firefly';
            f.style.left = (10 + Math.random() * 80) + '%';
            f.style.bottom = (15 + Math.random() * 50) + '%';
            f.style.animationDelay = (Math.random() * 6).toFixed(1) + 's, ' + (Math.random() * 3).toFixed(1) + 's';
            f.style.animationDuration = (5 + Math.random() * 4).toFixed(1) + 's, ' + (2 + Math.random() * 2).toFixed(1) + 's';
            gardenParticles.appendChild(f);
        }
    }

    /* Button ripple */
    function triggerRipple(btn) {
        btn.classList.remove('ripple');
        void btn.offsetWidth;
        btn.classList.add('ripple');
        setTimeout(function () { btn.classList.remove('ripple'); }, 500);
    }

    /* Handle dzikr tap */
    function handleDzikr(type) {
        recordDzikr(type);
        renderCounters();
        renderGarden({ type: type });

        gcEvent('tuin-van-dzikr/tap/' + type, type);

        var totaal = state.totals[type];
        if (totaal === 33 || totaal === 99 || totaal === 333) {
            gcEvent('tuin-van-dzikr/mijlpaal/' + type + '-' + totaal, type + ' ' + totaal + 'x');
        }
    }

    document.querySelectorAll('.dzikr-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var type = this.getAttribute('data-dzikr');
            triggerRipple(this);
            handleDzikr(type);
        });
    });

    /* =============================================
       VIEW: TASBIH
       ============================================= */
    var tasbihCircle = document.getElementById('tasbihCircle');
    var tasbihArabic = document.getElementById('tasbihArabic');
    var tasbihCountEl = document.getElementById('tasbihCount');
    var tasbihRoundsEl = document.getElementById('tasbihRounds');
    var tasbihTapBtn = document.getElementById('tasbihTapBtn');
    var tasbihSoundToggle = document.getElementById('tasbihSoundToggle');
    var audioCtx = null;

    function buildTasbihBeads() {
        tasbihCircle.innerHTML = '';
        var wrapSize = tasbihCircle.parentElement.offsetWidth || 300;
        var radius = (wrapSize / 2) - 18;
        var beadCount = 33;

        for (var i = 0; i < beadCount; i++) {
            var angle = (i / beadCount) * Math.PI * 2 - Math.PI / 2;
            var x = Math.cos(angle) * radius + (wrapSize / 2) - 10;
            var y = Math.sin(angle) * radius + (wrapSize / 2) - 10;

            var bead = document.createElement('button');
            bead.className = 'tasbih-bead';
            bead.setAttribute('aria-label', 'Kraal ' + (i + 1) + ' van 33');
            bead.style.left = x + 'px';
            bead.style.top = y + 'px';

            // Milestone beads (every 11th)
            if ((i + 1) % 11 === 0) {
                bead.classList.add('milestone');
            }

            bead.addEventListener('click', function () { advanceTasbih(); });
            tasbihCircle.appendChild(bead);
        }
    }

    function renderTasbih() {
        if (tasbihCircle.children.length === 0) buildTasbihBeads();
        var session = state.tasbihSession;
        var beads = tasbihCircle.querySelectorAll('.tasbih-bead');

        beads.forEach(function (b, i) {
            b.classList.toggle('completed', i < session.currentBead);
            b.classList.toggle('current', i === session.currentBead);
            b.setAttribute('aria-pressed', i < session.currentBead ? 'true' : 'false');
        });

        tasbihArabic.textContent = DZIKR_ARABIC[session.dzikrType] || '';
        tasbihCountEl.textContent = session.currentBead + ' / 33';
        tasbihRoundsEl.textContent = session.completedRounds > 0 ? session.completedRounds + ' ronde' + (session.completedRounds > 1 ? 'n' : '') + ' voltooid' : '';

        // Sync selector buttons
        document.querySelectorAll('.tasbih-type-btn').forEach(function (btn) {
            btn.classList.toggle('active', btn.getAttribute('data-type') === session.dzikrType);
        });

        tasbihSoundToggle.checked = state.settings.tasbihSound;
    }

    function advanceTasbih() {
        var session = state.tasbihSession;

        // Haptic
        try { navigator.vibrate(15); } catch (e) { /* not supported */ }

        // Sound
        if (state.settings.tasbihSound) playBeadClick();

        // Record dzikr
        recordDzikr(session.dzikrType);

        session.currentBead++;

        if (session.currentBead >= 33) {
            session.completedRounds++;
            session.currentBead = 0;
            saveState();
            renderTasbih();
            showCelebration(session.completedRounds);
            gcEvent('tuin-van-dzikr/tasbih/ronde-klaar', session.dzikrType + ' ronde ' + session.completedRounds);
            return;
        }

        saveState();
        renderTasbih();
    }

    function playBeadClick() {
        try {
            if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            var osc = audioCtx.createOscillator();
            var gain = audioCtx.createGain();
            osc.type = 'sine';
            osc.frequency.value = 800;
            gain.gain.value = 0.08;
            osc.connect(gain);
            gain.connect(audioCtx.destination);
            osc.start();
            gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + 0.04);
            osc.stop(audioCtx.currentTime + 0.05);
        } catch (e) { /* audio not available */ }
    }

    function showCelebration(rounds) {
        var overlay = document.createElement('div');
        overlay.className = 'tasbih-celebration';
        overlay.innerHTML =
            '<div class="tasbih-celebration-content">' +
                '<h2>MashaAllah!</h2>' +
                '<p>Je hebt ronde ' + rounds + ' voltooid (33 &times; ' + rounds + ' = ' + (33 * rounds) + ')</p>' +
                '<button id="celebrationClose">Doorgaan</button>' +
            '</div>';

        document.body.appendChild(overlay);

        overlay.querySelector('#celebrationClose').addEventListener('click', function () {
            overlay.remove();
        });

        overlay.addEventListener('click', function (e) {
            if (e.target === overlay) overlay.remove();
        });
    }

    // Tasbih tap button
    tasbihTapBtn.addEventListener('click', function () { advanceTasbih(); });

    // Tasbih type selector
    document.querySelectorAll('.tasbih-type-btn').forEach(function (btn) {
        btn.addEventListener('click', function () {
            var type = this.getAttribute('data-type');
            state.tasbihSession.dzikrType = type;
            state.tasbihSession.currentBead = 0;
            saveState();
            renderTasbih();
            gcEvent('tuin-van-dzikr/tasbih/dzikr-keuze/' + type, type);
        });
    });

    // Tasbih reset
    document.getElementById('tasbihResetBtn').addEventListener('click', function () {
        state.tasbihSession.currentBead = 0;
        saveState();
        renderTasbih();
    });

    // Sound toggle
    tasbihSoundToggle.addEventListener('change', function () {
        state.settings.tasbihSound = this.checked;
        saveState();
        // Initialize AudioContext on first interaction
        if (this.checked && !audioCtx) {
            try { audioCtx = new (window.AudioContext || window.webkitAudioContext)(); } catch (e) { /* */ }
        }
    });

    /* =============================================
       VIEW: PATROON (Geometric Pattern)
       ============================================= */
    var patroonCanvas = document.getElementById('patroonCanvas');
    var patroonCtx = patroonCanvas ? patroonCanvas.getContext('2d') : null;
    var patroonLevelEl = document.getElementById('patroonLevel');
    var patroonDescEl = document.getElementById('patroonDesc');

    var PATTERN_LEVELS = [
        { min: 0, name: 'Niveau 0', desc: 'Begin met dzikr om je patroon te laten groeien' },
        { min: 1, name: 'Niveau 1 — Kiem', desc: 'Een centrale ster verschijnt' },
        { min: 11, name: 'Niveau 2 — Bloei', desc: 'Bladvormen omringen de ster' },
        { min: 34, name: 'Niveau 3 — Groei', desc: 'Een achthoekig kader vormt zich' },
        { min: 100, name: 'Niveau 4 — Rozet', desc: 'Een rozet met 16-voudige symmetrie' },
        { min: 200, name: 'Niveau 5 — Tessellatie', desc: 'Herhalende sterpatronen verschijnen' },
        { min: 334, name: 'Niveau 6 — Meesterwerk', desc: 'Het volledige patroon ontvouwt zich' },
        { min: 1000, name: 'Niveau 7 — Verlicht', desc: 'Een gouden gloed doordringt het patroon' }
    ];

    function getPatternLevel(total) {
        for (var i = PATTERN_LEVELS.length - 1; i >= 0; i--) {
            if (total >= PATTERN_LEVELS[i].min) return i;
        }
        return 0;
    }

    function renderPattern() {
        if (!patroonCtx) return;

        var wrap = patroonCanvas.parentElement;
        var size = wrap.offsetWidth;
        var dpr = window.devicePixelRatio || 1;
        patroonCanvas.width = size * dpr;
        patroonCanvas.height = size * dpr;
        patroonCtx.setTransform(dpr, 0, 0, dpr, 0, 0);

        var ctx = patroonCtx;
        var cx = size / 2;
        var cy = size / 2;
        var total = getAllTimeTotal();
        var level = getPatternLevel(total);

        // Update info
        patroonLevelEl.textContent = PATTERN_LEVELS[level].name;
        patroonDescEl.textContent = PATTERN_LEVELS[level].desc;

        // Clear
        ctx.clearRect(0, 0, size, size);

        if (total === 0) {
            // Draw faint center dot
            ctx.beginPath();
            ctx.arc(cx, cy, 3, 0, Math.PI * 2);
            ctx.fillStyle = 'rgba(212, 175, 55, .2)';
            ctx.fill();
            return;
        }

        var maxRadius = size * 0.44;

        // Color helpers
        var gold = '#d4af37';
        var goldLight = '#e8d48b';
        var green = '#3d7a2e';
        var greenLight = '#5cb85c';
        var cream = '#fff8dc';
        var purple = '#9b59b6';

        // Proportion of each dzikr type for color mixing
        var pSub = total > 0 ? state.totals.subhanallah / total : 0.25;
        var pAlh = total > 0 ? state.totals.alhamdulillah / total : 0.25;
        var pLai = total > 0 ? state.totals.lailahaillallah / total : 0.25;

        /* --- Layer 1: Central 8-pointed star (level >= 1) --- */
        if (level >= 1) {
            var progress1 = level === 1 ? Math.min(1, (total - 1) / 10) : 1;
            var starR = maxRadius * 0.18 * progress1;
            ctx.save();
            ctx.translate(cx, cy);
            ctx.globalAlpha = 0.3 + progress1 * 0.7;

            // Draw 8-pointed star
            drawStar(ctx, 0, 0, 8, starR, starR * 0.45, gold);

            // Inner detail
            if (progress1 > 0.5) {
                drawStar(ctx, 0, 0, 8, starR * 0.5, starR * 0.25, goldLight);
            }

            ctx.restore();
        }

        /* --- Layer 2: Petal ring (level >= 2) --- */
        if (level >= 2) {
            var progress2 = level === 2 ? Math.min(1, (total - 11) / 23) : 1;
            var petalR = maxRadius * 0.32;
            ctx.save();
            ctx.translate(cx, cy);
            ctx.globalAlpha = progress2 * 0.8;

            for (var p = 0; p < 8; p++) {
                var angle = (p / 8) * Math.PI * 2;
                ctx.save();
                ctx.rotate(angle);
                ctx.translate(0, -petalR * 0.7);

                // Petal shape
                ctx.beginPath();
                var pw = petalR * 0.18 * progress2;
                var ph = petalR * 0.35 * progress2;
                ctx.ellipse(0, 0, pw, ph, 0, 0, Math.PI * 2);
                ctx.fillStyle = 'rgba(61, 122, 46, ' + (0.2 + pAlh * 0.4) + ')';
                ctx.fill();
                ctx.strokeStyle = 'rgba(212, 175, 55, .4)';
                ctx.lineWidth = 0.8;
                ctx.stroke();
                ctx.restore();
            }

            ctx.restore();
        }

        /* --- Layer 3: Octagonal frame (level >= 3) --- */
        if (level >= 3) {
            var progress3 = level === 3 ? Math.min(1, (total - 34) / 66) : 1;
            var frameR = maxRadius * 0.45 * progress3;
            ctx.save();
            ctx.translate(cx, cy);
            ctx.globalAlpha = progress3 * 0.7;

            // Outer octagon
            drawPolygon(ctx, 0, 0, 8, frameR, gold, 1.2);

            // Interlocking squares
            for (var sq = 0; sq < 2; sq++) {
                ctx.save();
                ctx.rotate((sq * Math.PI) / 8);
                drawPolygon(ctx, 0, 0, 4, frameR * 0.85, goldLight, 0.8);
                ctx.restore();
            }

            ctx.restore();
        }

        /* --- Layer 4: 16-fold rosette (level >= 4) --- */
        if (level >= 4) {
            var progress4 = level === 4 ? Math.min(1, (total - 100) / 100) : 1;
            var rosetteR = maxRadius * 0.62 * progress4;
            ctx.save();
            ctx.translate(cx, cy);
            ctx.globalAlpha = progress4 * 0.6;

            for (var r4 = 0; r4 < 16; r4++) {
                var a4 = (r4 / 16) * Math.PI * 2;
                ctx.save();
                ctx.rotate(a4);

                // Radial line
                ctx.beginPath();
                ctx.moveTo(0, -maxRadius * 0.3);
                ctx.lineTo(0, -rosetteR);
                ctx.strokeStyle = 'rgba(212, 175, 55, .3)';
                ctx.lineWidth = 0.6;
                ctx.stroke();

                // Small star at tip
                if (progress4 > 0.3) {
                    drawStar(ctx, 0, -rosetteR, 8, rosetteR * 0.08, rosetteR * 0.04, 'rgba(255, 248, 220, ' + (0.3 + pSub * 0.4) + ')');
                }

                ctx.restore();
            }

            ctx.restore();
        }

        /* --- Layer 5: Tessellation band (level >= 5) --- */
        if (level >= 5) {
            var progress5 = level === 5 ? Math.min(1, (total - 200) / 134) : 1;
            var tessR = maxRadius * 0.78;
            ctx.save();
            ctx.translate(cx, cy);
            ctx.globalAlpha = progress5 * 0.5;

            // Ring of interlocking stars
            var starCount = 12;
            for (var s5 = 0; s5 < starCount; s5++) {
                var a5 = (s5 / starCount) * Math.PI * 2;
                var sx = Math.cos(a5) * tessR * progress5;
                var sy = Math.sin(a5) * tessR * progress5;
                drawStar(ctx, sx, sy, 6, tessR * 0.1, tessR * 0.05, gold);
            }

            // Connecting arcs
            if (progress5 > 0.5) {
                ctx.beginPath();
                ctx.arc(0, 0, tessR * progress5, 0, Math.PI * 2);
                ctx.strokeStyle = 'rgba(212, 175, 55, .2)';
                ctx.lineWidth = 0.8;
                ctx.stroke();
            }

            ctx.restore();
        }

        /* --- Layer 6: Full complex pattern (level >= 6) --- */
        if (level >= 6) {
            var progress6 = level === 6 ? Math.min(1, (total - 334) / 666) : 1;
            ctx.save();
            ctx.translate(cx, cy);
            ctx.globalAlpha = progress6 * 0.4;

            // Fill regions between tessellation
            for (var f6 = 0; f6 < 24; f6++) {
                var a6 = (f6 / 24) * Math.PI * 2;
                var fr = maxRadius * 0.65 + (f6 % 2) * maxRadius * 0.12;
                var fx6 = Math.cos(a6) * fr;
                var fy6 = Math.sin(a6) * fr;

                ctx.beginPath();
                ctx.arc(fx6, fy6, maxRadius * 0.04 * progress6, 0, Math.PI * 2);
                var fillColor = f6 % 4 === 0 ? 'rgba(212, 175, 55, .25)' :
                                f6 % 4 === 1 ? 'rgba(61, 122, 46, .2)' :
                                f6 % 4 === 2 ? 'rgba(155, 89, 182, ' + (0.1 + pLai * 0.25) + ')' :
                                               'rgba(255, 248, 220, .15)';
                ctx.fillStyle = fillColor;
                ctx.fill();
            }

            // Outer octagon frame
            drawPolygon(ctx, 0, 0, 8, maxRadius * 0.9 * progress6, gold, 1);

            ctx.restore();
        }

        /* --- Layer 7: Golden glow (level >= 7) --- */
        if (level >= 7) {
            var progress7 = Math.min(1, (total - 1000) / 500);
            ctx.save();
            var grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, maxRadius);
            grad.addColorStop(0, 'rgba(212, 175, 55, ' + (0.08 * progress7) + ')');
            grad.addColorStop(0.5, 'rgba(212, 175, 55, ' + (0.04 * progress7) + ')');
            grad.addColorStop(1, 'rgba(212, 175, 55, 0)');
            ctx.fillStyle = grad;
            ctx.fillRect(0, 0, size, size);
            ctx.restore();
        }
    }

    /* Drawing helpers */
    function drawStar(ctx, x, y, points, outerR, innerR, color) {
        ctx.beginPath();
        for (var i = 0; i <= points * 2; i++) {
            var r = i % 2 === 0 ? outerR : innerR;
            var a = (i * Math.PI) / points - Math.PI / 2;
            var px = x + Math.cos(a) * r;
            var py = y + Math.sin(a) * r;
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.fillStyle = color;
        ctx.fill();
    }

    function drawPolygon(ctx, x, y, sides, radius, color, lineWidth) {
        ctx.beginPath();
        for (var i = 0; i <= sides; i++) {
            var a = (i / sides) * Math.PI * 2 - Math.PI / 2;
            var px = x + Math.cos(a) * radius;
            var py = y + Math.sin(a) * radius;
            if (i === 0) ctx.moveTo(px, py);
            else ctx.lineTo(px, py);
        }
        ctx.closePath();
        ctx.strokeStyle = color;
        ctx.lineWidth = lineWidth || 1;
        ctx.stroke();
    }

    /* =============================================
       VIEW: STATS
       ============================================= */
    function renderStats() {
        var today = getTodayCounts();

        // Streak
        document.getElementById('statsStreak').textContent = getStreak();
        var fire = document.getElementById('statsStreakFire');
        var streak = getStreak();
        if (streak >= 7) fire.textContent = '\u{1F525}\u{1F525}\u{1F525}';
        else if (streak >= 3) fire.textContent = '\u{1F525}\u{1F525}';
        else if (streak >= 1) fire.textContent = '\u{1F525}';
        else fire.textContent = '';

        // Today
        document.querySelectorAll('[data-stats-today]').forEach(function (el) {
            var type = el.getAttribute('data-stats-today');
            el.textContent = today[type] || 0;
        });

        // Totals
        document.querySelectorAll('[data-stats-total]').forEach(function (el) {
            var type = el.getAttribute('data-stats-total');
            el.textContent = state.totals[type] || 0;
        });

        // Records
        document.getElementById('statsRecordBestDay').textContent = getBestDay();
        document.getElementById('statsRecordLongestStreak').textContent = getLongestStreak();
        document.getElementById('statsRecordWeekTotal').textContent = getWeekTotal();

        // Heatmap
        renderHeatmap();
    }

    function renderHeatmap() {
        var heatmap = document.getElementById('statsHeatmap');
        var monthsEl = document.getElementById('statsHeatmapMonths');
        heatmap.innerHTML = '';
        monthsEl.innerHTML = '';

        // 26 weeks (half year) to keep it compact on mobile
        var weeks = 26;
        var totalDays = weeks * 7;
        var today = new Date();

        // Find the Sunday that starts our grid
        var dayOfWeek = today.getDay(); // 0 = Sunday
        var endDate = new Date(today);
        var startDate = new Date(today);
        startDate.setDate(startDate.getDate() - totalDays + (6 - dayOfWeek) + 1);

        // Month labels
        var monthNames = ['jan', 'feb', 'mrt', 'apr', 'mei', 'jun', 'jul', 'aug', 'sep', 'okt', 'nov', 'dec'];
        var lastMonth = -1;
        var cellWidth = 14; // 12px + 2px gap

        for (var w = 0; w < weeks; w++) {
            var weekStart = new Date(startDate);
            weekStart.setDate(weekStart.getDate() + w * 7);
            var month = weekStart.getMonth();
            if (month !== lastMonth) {
                var span = document.createElement('span');
                span.textContent = monthNames[month];
                span.style.marginLeft = (w * cellWidth) + 'px';
                span.style.position = 'absolute';
                monthsEl.appendChild(span);
                lastMonth = month;
            }
        }
        monthsEl.style.position = 'relative';
        monthsEl.style.height = '16px';

        // Cells
        for (var d = 0; d < totalDays; d++) {
            var cellDate = new Date(startDate);
            cellDate.setDate(cellDate.getDate() + d);
            var key = cellDate.toISOString().slice(0, 10);
            var dayTotal = getDayTotal(key);

            var cell = document.createElement('div');
            cell.className = 'stats-heatmap-cell';

            // Only show cells up to today
            if (cellDate > endDate) {
                cell.style.visibility = 'hidden';
            } else {
                var level = dayTotal === 0 ? 0 :
                            dayTotal <= 10 ? 1 :
                            dayTotal <= 33 ? 2 :
                            dayTotal <= 99 ? 3 : 4;
                cell.setAttribute('data-level', level);
            }

            cell.title = key + ': ' + dayTotal + ' dzikr';
            heatmap.appendChild(cell);
        }
    }

    /* Reset all data */
    document.getElementById('resetBtn').addEventListener('click', function () {
        if (confirm('Weet je zeker dat je ALLE data wilt resetten? Dit omvat je tuin, tasbih, patroon en statistieken. Dit kan niet ongedaan worden gemaakt.')) {
            gcEvent('tuin-van-dzikr/tuin-gereset', 'Alles gereset');
            state = defaultState();
            saveState();
            renderCounters();
            renderGarden(null);
            renderTasbih();
            renderStats();
            renderPattern();
        }
    });

    /* =============================================
       INITIALIZATION
       ============================================= */
    gcEvent('tuin-van-dzikr/app-gestart', 'App gestart');

    renderCounters();
    renderGarden(null);
    initParticles();

    // Defer non-visible views
    setTimeout(function () {
        buildTasbihBeads();
        renderTasbih();
    }, 100);

    // Pattern resize handler
    var patternResizeTimer;
    window.addEventListener('resize', function () {
        clearTimeout(patternResizeTimer);
        patternResizeTimer = setTimeout(function () {
            if (document.getElementById('viewPatroon').classList.contains('active')) {
                renderPattern();
            }
            // Rebuild tasbih beads on resize
            buildTasbihBeads();
            renderTasbih();
        }, 200);
    });

})();
