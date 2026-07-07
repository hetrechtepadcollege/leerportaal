'use strict';

/* ═══════════════════════════════════════════════════════════════
   Du'a DATA
   Arabische tekst in IndoPak-script (ک / ی / لّٰ)
   ═══════════════════════════════════════════════════════════════ */
const MOMENTS = [
    {
        id: 'opstaan',
        icon: '🌙',
        label: 'Bij het opstaan',
        arabicTitle: 'دُعَاءُ الاِسْتِيْقَاظ',
        description: 'Het eerste dat een moslim doet bij het wakker worden: Allah danken voor het nieuwe leven van een nieuwe dag.',
        arabic: 'اَلْحَمْدُ لِلّٰهِ الَّذِیْ أَحْيَانَا بَعْدَ مَا أَمَاتَنَا وَإِلَيْهِ النُّشُوْرُ',
        transliteration: "Alhamdulillāhil-ladhī ahyānā ba'da mā amātanā wa ilayhin-nushūr",
        translation: '"Alle lof is voor Allah die ons levend maakte nadat Hij ons deed sterven, en tot Hem is de opstanding."',
        source: 'Bukhārī',
    },
    {
        id: 'wc-betreden',
        icon: '🚿',
        label: 'Bij het betreden van de badkamer',
        arabicTitle: 'دُعَاءُ دُخُوْلِ الْخَلَاء',
        description: 'Spreek de du\'a uit vóór het betreden — begin de reiniging van de dag met bescherming.',
        arabic: 'بِسْمِ اللّٰهِ ۔ اَللّٰهُمَّ إِنِّیْ أَعُوْذُ بِکَ مِنَ الْخُبُثِ وَالْخَبَائِثِ',
        transliteration: "Bismillāh. Allāhumma innī a'ūdhu bika minal-khubuthi wal-khabā'ith",
        translation: '"In de naam van Allah. O Allah, ik zoek bij U toevlucht tegen de mannelijke en vrouwelijke djinn."',
        source: 'Bukhārī & Muslim',
    },
    {
        id: 'wc-verlaten',
        icon: '✨',
        label: 'Bij het verlaten van de badkamer',
        arabicTitle: 'دُعَاءُ الْخُرُوْجِ مِنَ الْخَلَاء',
        description: 'Een eenvoudige maar krachtige smeekbede om vergiffenis, direct na de reiniging.',
        arabic: 'غُفْرَانَکَ',
        transliteration: 'Ghufrānaka',
        translation: '"Uw vergeving zoek ik."',
        source: 'Abū Dāwūd · Ibn Mājah · Tirmidhī',
        shortDua: true,
    },
    {
        id: 'wudu',
        icon: '💧',
        label: 'Na de wudu',
        arabicTitle: 'دُعَاءٌ بَعْدَ الْوُضُوْء',
        description: 'Na de rituele wassing sluit je met deze getuigenis en smeekbede de wudu af.',
        arabic: 'أَشْهَدُ أَنْ لَّا إِلٰهَ إِلَّا اللّٰهُ وَحْدَهُ لَا شَرِیْکَ لَهُ ، وَأَشْهَدُ أَنَّ مُحَمَّدًا عَبْدُهُ وَرَسُوْلُهُ',
        transliteration: "Ash-hadu al-lā ilāha illallāhu wahdahū lā sharīka lah, wa ash-hadu anna Muḥammadan 'abduhū wa rasūluh",
        translation: '"Ik getuig dat er geen god is behalve Allah, alleen, zonder deelgenoten, en ik getuig dat Mohammed Zijn dienaar en boodschapper is."',
        source: 'Muslim · Tirmidhī',
    },
    {
        id: 'spiegel',
        icon: '🪞',
        label: 'Bij het kijken in de spiegel',
        arabicTitle: 'دُعَاءُ النَّظَرِ فِی الْمِرْآة',
        description: 'Allah verfraaide jouw uiterlijk — vraag Hem ook om verfraaiing van het innerlijk.',
        arabic: 'اَللّٰهُمَّ کَمَا حَسَّنْتَ خَلْقِیْ فَحَسِّنْ خُلُقِیْ',
        transliteration: "Allāhumma kamā ḥassanta khalqī faḥassin khuluqī",
        translation: '"O Allah, zoals U mijn uiterlijk heeft verfraaid, verfraai dan ook mijn karakter."',
        source: 'Aḥmad · Ibn Abī Shayba',
        shortDua: true,
    },
    {
        id: 'ochtend-adhkar',
        icon: '🌅',
        label: 'Ochtend-adhkar',
        arabicTitle: 'أَذْکَارُ الصَّبَاح',
        description: 'Na het Fajr-gebed. De ochtend behoort aan Allah — begin haar met Zijn herdenking.',
        arabic: 'أَصْبَحْنَا وَأَصْبَحَ الْمُلْکُ لِلّٰهِ ، وَالْحَمْدُ لِلّٰهِ ، لَا إِلٰهَ إِلَّا اللّٰهُ وَحْدَهُ لَا شَرِیْکَ لَهُ',
        transliteration: "Aṣbahnā wa aṣbahal-mulku lillāh, walhamdu lillāh, lā ilāha illallāhu wahdahū lā sharīka lah",
        translation: '"Wij zijn de ochtend ingegaan en het koninkrijk behoort aan Allah. Alle lof is voor Allah. Er is geen god behalve Allah, alleen, zonder deelgenoten."',
        source: 'Muslim',
    },
    {
        id: 'aankleden',
        icon: '👕',
        label: 'Bij het aankleden',
        arabicTitle: 'دُعَاءُ لُبْسِ الثَّوْب',
        description: 'Elk kleed is een gunst van Allah. Vraag om het goede ervan en bescherming tegen het slechte.',
        arabic: 'اَللّٰهُمَّ إِنِّیْ أَسْأَلُکَ مِنْ خَيْرِهِ وَخَيْرِ مَا هُوَ لَهُ ، وَأَعُوْذُ بِکَ مِنْ شَرِّهِ وَشَرِّ مَا هُوَ لَهُ',
        transliteration: "Allāhumma innī as'aluka min khayrihī wa khayri mā huwa lah, wa a'ūdhu bika min sharrihī wa sharri mā huwa lah",
        translation: '"O Allah, ik vraag U om het goede ervan en het goede waarvoor het gemaakt is, en ik zoek bij U toevlucht tegen het slechte ervan en het slechte waarvoor het gemaakt is."',
        source: 'Abū Dāwūd · Tirmidhī',
    },
    {
        id: 'verlaten-huis',
        icon: '🚪',
        label: 'Bij het verlaten van huis',
        arabicTitle: 'دُعَاءُ الْخُرُوْج',
        description: 'Elke stap buiten het huis is tawakkul. Begin de dag in de naam van Allah, met vertrouwen op Hem.',
        arabic: 'بِسْمِ اللّٰهِ ، تَوَکَّلْتُ عَلَى اللّٰهِ ، وَلَا حَوْلَ وَلَا قُوَّةَ إِلَّا بِاللّٰهِ',
        transliteration: "Bismillāh, tawakkaltu 'alallāh, wa lā ḥawla wa lā quwwata illā billāh",
        translation: '"In de naam van Allah, ik vertrouw op Allah, en er is geen macht en geen kracht behalve bij Allah."',
        source: 'Abū Dāwūd · Tirmidhī',
    },
    {
        id: 'voertuig',
        icon: '🚗',
        label: 'In het voertuig',
        arabicTitle: 'دُعَاءُ رُکُوْبِ الدَّابَّة',
        description: 'Auto, bus, fiets — elk vervoermiddel is een gunst van Allah die voor ons onderworpen is.',
        arabic: 'سُبْحَانَ الَّذِیْ سَخَّرَ لَنَا هٰذَا وَمَا کُنَّا لَهُ مُقْرِنِیْنَ ، وَإِنَّا إِلٰی رَبِّنَا لَمُنْقَلِبُوْنَ',
        transliteration: "Subḥānal-ladhī sakhkhara lanā hādhā wa mā kunnā lahū muqrinīn, wa innā ilā rabbinā lamunqalibūn",
        translation: '"Verheerlijkt zij Degene die dit voor ons heeft onderworpen, terwijl wij het zelf niet hadden kunnen onderwerpen. En voorwaar, wij keren zeker terug tot onze Heer."',
        source: 'Abū Dāwūd · Tirmidhī (Qur\'ān 43:13-14)',
    },
    {
        id: 'adhan-horen',
        icon: '📢',
        label: 'Bij het horen van de adhān',
        arabicTitle: 'دُعَاءٌ بَعْدَ الْأَذَان',
        description: 'Herhaal de woorden van de mu\'adhdhin mee, en spreek daarna deze smeekbede uit voor de Profeet ﷺ.',
        arabic: 'اَللّٰهُمَّ رَبَّ هٰذِهِ الدَّعْوَةِ التَّامَّةِ ، وَالصَّلَاةِ الْقَائِمَةِ ، آتِ مُحَمَّدًا الْوَسِیْلَةَ وَالْفَضِیْلَةَ ، وَابْعَثْهُ مَقَامًا مَّحْمُوْدًا الَّذِیْ وَعَدْتَهُ',
        transliteration: "Allāhumma Rabba hādhihid-da'watit-tāmmah, waṣ-ṣalātil-qā'imah, āti Muḥammadan al-wasīlata wal-faḍīlah, wab'ath-hu maqāman maḥmūdanil-ladhī wa'adtah",
        translation: '"O Allah, Heer van deze volmaakte oproep en het staande gebed, schenk Muḥammad de wasilah en de voorrangspositie, en verhef hem naar de Geprezen Standplaats die U hem beloofd heeft."',
        source: 'Bukhārī 614',
    },
    {
        id: 'masjid-in',
        icon: '🕌',
        label: 'Bij het betreden van de masjid',
        arabicTitle: 'دُعَاءُ دُخُوْلِ الْمَسْجِد',
        description: 'De masjid is het huis van Allah op aarde. Vraag bij het betreden om toegang tot Zijn genade.',
        arabic: 'اَللّٰهُمَّ افْتَحْ لِیْ أَبْوَابَ رَحْمَتِکَ',
        transliteration: "Allāhummaf-taḥ lī abwāba raḥmatik",
        translation: '"O Allah, open voor mij de deuren van Uw genade."',
        source: 'Muslim',
    },
    {
        id: 'masjid-uit',
        icon: '🌤️',
        label: 'Bij het verlaten van de masjid',
        arabicTitle: 'دُعَاءُ الْخُرُوْجِ مِنَ الْمَسْجِد',
        description: 'Je verlaat het huis van Allah — smeek Hem om Zijn overvloed in je dag mee te dragen.',
        arabic: 'اَللّٰهُمَّ إِنِّیْ أَسْأَلُکَ مِنْ فَضْلِکَ',
        transliteration: "Allāhumma innī as'aluka min faḍlik",
        translation: '"O Allah, ik vraag U om Uw overvloed."',
        source: 'Muslim',
    },
    {
        id: 'eten-voor',
        icon: '🍽️',
        label: 'Voor het eten',
        arabicTitle: 'دُعَاءٌ قَبْلَ الطَّعَام',
        description: 'Elke hap is rizq van Allah. Begin het eten met Zijn naam — ook als je het vergeet, zeg het zodra je het herinnert.',
        arabic: 'بِسْمِ اللّٰهِ',
        transliteration: 'Bismillāh',
        translation: '"In de naam van Allah."',
        source: 'Abū Dāwūd · Tirmidhī',
        shortDua: true,
    },
    {
        id: 'eten-na',
        icon: '🤲',
        label: 'Na het eten',
        arabicTitle: 'دُعَاءٌ بَعْدَ الطَّعَام',
        description: 'Dankbaarheid na het eten sluit de cirkel van rizq. Prijs Allah voor Zijn onschatbare gunst.',
        arabic: 'اَلْحَمْدُ لِلّٰهِ الَّذِیْ أَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِیْنَ',
        transliteration: "Alhamdulillāhil-ladhī aṭ'amanā wa saqānā wa ja'alanā muslimīn",
        translation: '"Alle lof is voor Allah die ons te eten en te drinken gaf en ons tot moslims maakte."',
        source: 'Abū Dāwūd · Tirmidhī',
    },
    {
        id: 'avond-adhkar',
        icon: '🌆',
        label: 'Avond-adhkar',
        arabicTitle: 'أَذْکَارُ الْمَسَاء',
        description: 'Na het \'Aṣr-gebed. De avond behoort ook aan Allah — beëindig haar met Zijn herdenking.',
        arabic: 'أَمْسَيْنَا وَأَمْسَى الْمُلْکُ لِلّٰهِ ، وَالْحَمْدُ لِلّٰهِ ، لَا إِلٰهَ إِلَّا اللّٰهُ وَحْدَهُ لَا شَرِیْکَ لَهُ',
        transliteration: "Amsaynā wa amsal-mulku lillāh, walhamdu lillāh, lā ilāha illallāhu wahdahū lā sharīka lah",
        translation: '"Wij zijn de avond ingegaan en het koninkrijk behoort aan Allah. Alle lof is voor Allah. Er is geen god behalve Allah, alleen, zonder deelgenoten."',
        source: 'Muslim',
    },
    {
        id: 'thuis-in',
        icon: '🏠',
        label: 'Bij het betreden van huis',
        arabicTitle: 'دُعَاءُ دُخُوْلِ الْبَيْت',
        description: 'Het huis is een schuilplaats, een gunst. Betreed het met de naam van Allah en vertrouwen op Hem.',
        arabic: 'بِسْمِ اللّٰهِ وَلَجْنَا ، وَبِسْمِ اللّٰهِ خَرَجْنَا ، وَعَلَى اللّٰهِ رَبِّنَا تَوَکَّلْنَا',
        transliteration: "Bismillāhi walanā, wa bismillāhi kharajnā, wa 'alallāhi rabbinā tawakkalnā",
        translation: '"In de naam van Allah gaan wij naar binnen, in de naam van Allah gaan wij naar buiten, en op Allah, onze Heer, vertrouwen wij."',
        source: 'Abū Dāwūd',
    },
    {
        id: 'slapen',
        icon: '🌙',
        label: 'Voor het slapen',
        arabicTitle: 'دُعَاءُ النَّوْم',
        description: 'Elke slaap is een kleine dood — en een herinnering aan de terugkeer naar Allah. Slaap in Zijn naam.',
        arabic: 'بِاسْمِکَ اَللّٰهُمَّ أَمُوْتُ وَأَحْيَا',
        transliteration: 'Bismika Allāhumma amūtu wa aḥyā',
        translation: '"In Uw naam, O Allah, sterf ik en leef ik."',
        source: 'Bukhārī',
    },
];

/* ═══════════════════════════════════════════════════════════════
   SKY STOPS — kleur + hemellichamen per moment
   rgb waarden voor achtergrond, star opacity (0-1),
   sun position (0-1 = links→rechts, -1 = niet zichtbaar),
   moon opacity (0-1)
   ═══════════════════════════════════════════════════════════════ */
const SKY_STOPS = [
    { r: 7,   g: 10,  b: 35,  star: 1.00, sun: -1,   moon: 0.90 }, // opstaan
    { r: 8,   g: 12,  b: 46,  star: 0.95, sun: -1,   moon: 0.85 }, // wc-in
    { r: 10,  g: 15,  b: 55,  star: 0.88, sun: -1,   moon: 0.78 }, // wc-uit
    { r: 18,  g: 22,  b: 78,  star: 0.60, sun: -0.05,moon: 0.55 }, // wudu (fajr)
    { r: 40,  g: 30,  b: 80,  star: 0.42, sun: -0.02,moon: 0.38 }, // spiegel (pre-dawn)
    { r: 85,  g: 52,  b: 82,  star: 0.20, sun: 0.03, moon: 0.20 }, // ochtend-adhkar (dageraad)
    { r: 198, g: 102, b: 36,  star: 0.00, sun: 0.09, moon: -1   }, // aankleden (zonsopgang)
    { r: 52,  g: 148, b: 212, star: 0.00, sun: 0.22, moon: -1   }, // verlaten-huis (ochtend)
    { r: 34,  g: 132, b: 218, star: 0.00, sun: 0.35, moon: -1   }, // voertuig (halfvoormiddag)
    { r: 28,  g: 122, b: 212, star: 0.00, sun: 0.43, moon: -1   }, // adhan-horen (voormiddag)
    { r: 22,  g: 112, b: 205, star: 0.00, sun: 0.50, moon: -1   }, // masjid-in (middag)
    { r: 28,  g: 118, b: 200, star: 0.00, sun: 0.62, moon: -1   }, // masjid-uit (namiddag)
    { r: 48,  g: 122, b: 188, star: 0.00, sun: 0.70, moon: -1   }, // eten-voor (namiddag)
    { r: 188, g: 118, b: 42,  star: 0.00, sun: 0.80, moon: -1   }, // eten-na (gouden uur)
    { r: 148, g: 50,  b: 70,  star: 0.18, sun: 0.92, moon: 0.25 }, // avond-adhkar (zonsondergang)
    { r: 38,  g: 18,  b: 66,  star: 0.65, sun: -1,   moon: 0.60 }, // thuis-in (schemering)
    { r: 7,   g: 10,  b: 35,  star: 1.00, sun: -1,   moon: 0.88 }, // slapen (nacht)
];

/* ═══════════════════════════════════════════════════════════════
   SKY RENDERER — canvas-gebaseerde lucht met ster, zon en maan
   ═══════════════════════════════════════════════════════════════ */
class SkyRenderer {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx    = canvas.getContext('2d');
        this.progress = 0;   // 0.0 → 1.0
        this.time     = 0;
        this.stars    = [];
        this._raf     = null;

        this._buildStars(220);
        this._resize();

        window.addEventListener('resize', () => this._resize(), { passive: true });
        this._loop(0);
    }

    setProgress(p) { this.progress = Math.max(0, Math.min(1, p)); }

    _resize() {
        const dpr = Math.min(window.devicePixelRatio || 1, 2);
        this.canvas.width  = window.innerWidth  * dpr;
        this.canvas.height = window.innerHeight * dpr;
        this.canvas.style.width  = window.innerWidth  + 'px';
        this.canvas.style.height = window.innerHeight + 'px';
        this.ctx.scale(dpr, dpr);
        this._dpr = dpr;
    }

    _buildStars(n) {
        this.stars = Array.from({ length: n }, () => ({
            x:         Math.random(),
            y:         Math.random() * 0.82,
            r:         0.4 + Math.random() * 1.4,
            bright:    0.3 + Math.random() * 0.7,
            phase:     Math.random() * Math.PI * 2,
            speed:     0.4 + Math.random() * 1.6,
        }));
    }

    _interp(a, b, t) {
        return {
            r:    a.r    + (b.r    - a.r)    * t,
            g:    a.g    + (b.g    - a.g)    * t,
            b:    a.b    + (b.b    - a.b)    * t,
            star: a.star + (b.star - a.star) * t,
            sun:  a.sun  + (b.sun  - a.sun)  * t,
            moon: a.moon + (b.moon - a.moon) * t,
        };
    }

    _stop() {
        const raw   = this.progress * (SKY_STOPS.length - 1);
        const lo    = Math.floor(raw);
        const hi    = Math.min(lo + 1, SKY_STOPS.length - 1);
        const t     = raw - lo;
        return this._interp(SKY_STOPS[lo], SKY_STOPS[hi], t);
    }

    _loop(ts) {
        this.time = ts;
        this._draw();
        this._raf = requestAnimationFrame(t => this._loop(t));
    }

    _draw() {
        const W   = window.innerWidth;
        const H   = window.innerHeight;
        const ctx = this.ctx;
        const s   = this._stop();

        // ── Background ──────────────────────────────────────────
        ctx.fillStyle = `rgb(${s.r|0},${s.g|0},${s.b|0})`;
        ctx.fillRect(0, 0, W, H);

        // ── Horizon glow (dageraad / zonsondergang) ─────────────
        this._drawHorizon(W, H, s);

        // ── Sterren ─────────────────────────────────────────────
        if (s.star > 0.02) this._drawStars(W, H, s.star);

        // ── Zon ─────────────────────────────────────────────────
        if (s.sun >= 0 && s.sun <= 1) this._drawSun(W, H, s.sun);

        // ── Maan ────────────────────────────────────────────────
        if (s.moon > 0.05) this._drawMoon(W, H, s.moon);
    }

    _drawHorizon(W, H, s) {
        const ctx = this.ctx;
        const p   = this.progress;
        let glowAlpha = 0;
        let cr = 255, cg = 130, cb = 50;

        // Zonsopgang ~moment 4-5 (progress 0.27-0.37)
        if (p > 0.25 && p < 0.42) {
            glowAlpha = Math.sin((p - 0.25) / 0.17 * Math.PI) * 0.55;
            cr = 255; cg = 120; cb = 40;
        }
        // Zonsondergang ~moment 11-12 (progress 0.73-0.87)
        else if (p > 0.70 && p < 0.90) {
            glowAlpha = Math.sin((p - 0.70) / 0.20 * Math.PI) * 0.50;
            cr = 240; cg = 70; cb = 55;
        }

        if (glowAlpha < 0.02) return;

        const grad = ctx.createLinearGradient(0, H, 0, H * 0.40);
        grad.addColorStop(0, `rgba(${cr},${cg},${cb},${glowAlpha})`);
        grad.addColorStop(0.4, `rgba(${cr},${cg},${cb},${glowAlpha * 0.25})`);
        grad.addColorStop(1, `rgba(${cr},${cg},${cb},0)`);
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, W, H);
    }

    _drawStars(W, H, opacity) {
        const ctx = this.ctx;
        const t   = this.time * 0.001;

        this.stars.forEach(st => {
            const twinkle = 0.65 + 0.35 * Math.sin(t * st.speed + st.phase);
            const alpha   = st.bright * opacity * twinkle;
            const x       = st.x * W;
            const y       = st.y * H;

            ctx.beginPath();
            ctx.arc(x, y, st.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(255,255,255,${alpha})`;
            ctx.fill();

            if (st.bright > 0.55) {
                const grd = ctx.createRadialGradient(x, y, 0, x, y, st.r * 4);
                grd.addColorStop(0, `rgba(200,220,255,${alpha * 0.35})`);
                grd.addColorStop(1, 'rgba(0,0,0,0)');
                ctx.beginPath();
                ctx.arc(x, y, st.r * 4, 0, Math.PI * 2);
                ctx.fillStyle = grd;
                ctx.fill();
            }
        });
    }

    _drawSun(W, H, pos) {
        const ctx = this.ctx;
        // Parabolische boog: x=pos*W, y hangt af van sin(pos*π)
        const x   = pos * W;
        const arc = H * 0.62;
        const y   = H - arc * Math.sin(pos * Math.PI);
        const r   = 38;

        // Outer glow
        const outer = ctx.createRadialGradient(x, y, r * 0.4, x, y, r * 5);
        outer.addColorStop(0, 'rgba(255,210,60,0.38)');
        outer.addColorStop(0.5, 'rgba(255,160,20,0.12)');
        outer.addColorStop(1, 'rgba(255,100,0,0)');
        ctx.beginPath();
        ctx.arc(x, y, r * 5, 0, Math.PI * 2);
        ctx.fillStyle = outer;
        ctx.fill();

        // Sun body
        const body = ctx.createRadialGradient(x, y, 0, x, y, r);
        body.addColorStop(0, '#fffde7');
        body.addColorStop(0.5, '#ffe082');
        body.addColorStop(1, '#ffa726');
        ctx.beginPath();
        ctx.arc(x, y, r, 0, Math.PI * 2);
        ctx.fillStyle = body;
        ctx.fill();
    }

    _drawMoon(W, H, opacity) {
        const ctx = this.ctx;
        const mx  = W * 0.80;
        const my  = H * 0.20;
        const r   = 28;

        ctx.save();

        // Maan body
        ctx.beginPath();
        ctx.arc(mx, my, r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(238, 235, 210, ${opacity * 0.92})`;
        ctx.fill();

        // Sikkel uitsnede via composite
        ctx.globalCompositeOperation = 'destination-out';
        ctx.beginPath();
        ctx.arc(mx + r * 0.38, my - r * 0.04, r * 0.84, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0,0,0,${opacity * 0.92})`;
        ctx.fill();
        ctx.globalCompositeOperation = 'source-over';

        ctx.restore();

        // Glow rond maan
        const mglow = ctx.createRadialGradient(mx, my, r, mx, my, r * 3.5);
        mglow.addColorStop(0, `rgba(220, 215, 180, ${opacity * 0.18})`);
        mglow.addColorStop(1, 'rgba(0,0,0,0)');
        ctx.beginPath();
        ctx.arc(mx, my, r * 3.5, 0, Math.PI * 2);
        ctx.fillStyle = mglow;
        ctx.fill();
    }

    destroy() {
        if (this._raf) cancelAnimationFrame(this._raf);
        window.removeEventListener('resize', this._resize);
    }
}

/* ═══════════════════════════════════════════════════════════════
   SITUATIONELE DU'AS — niet tijdsgebonden, door omstandigheid
   ═══════════════════════════════════════════════════════════════ */
const SITUATIONAL_DUAS = [
    // ── Categorie 1: Goed & Slecht nieuws ───────────────────────
    {
        id: 'goed-nieuws',
        category: 'nieuws',
        catLabel: 'Goed & Slecht nieuws',
        catColor: '#C9A84C',
        icon: '🌟',
        label: 'Bij goed nieuws',
        description: 'Dankbaarheid is de gepaste reactie op elke gunst van Allah.',
        arabic: 'اَلْحَمْدُ لِلّٰهِ الَّذِیْ بِنِعْمَتِهِ تَتِمُّ الصَّالِحَاتُ',
        transliteration: "Alhamdulillāhil-ladhī bini'matihī tatimmuṣ-ṣāliḥāt",
        translation: '"Alle lof is voor Allah, door Wiens gunst goede zaken worden voltooid."',
        source: 'Ibn Mājah (ḥasan)',
    },
    {
        id: 'slecht-nieuws',
        category: 'nieuws',
        catLabel: 'Goed & Slecht nieuws',
        catColor: '#C9A84C',
        icon: '💔',
        label: 'Bij slecht nieuws of ramp',
        description: 'Bij elk verlies en elke beproeving keert de gelovige terug naar Allah.',
        arabic: 'إِنَّا لِلّٰهِ وَإِنَّا إِلَيْهِ رَاجِعُوْنَ',
        transliteration: "Innā lillāhi wa innā ilayhi rāji'ūn",
        translation: '"Voorwaar, wij behoren aan Allah toe en voorwaar, wij keren tot Hem terug."',
        source: 'Qur\'ān · Al-Baqarah 2:156',
    },
    {
        id: 'bewondering',
        category: 'nieuws',
        catLabel: 'Goed & Slecht nieuws',
        catColor: '#C9A84C',
        icon: '✨',
        label: 'Bij iets bewonderenswaardigs',
        description: 'Bewondering roept de moslim op Allah te gedenken — niet het schepsel te prijzen zonder Schepper.',
        arabic: 'مَا شَاءَ اللّٰهُ ، لَا قُوَّةَ إِلَّا بِاللّٰهِ',
        transliteration: "Māshā'allāh, lā quwwata illā billāh",
        translation: '"Wat Allah wil — er is geen kracht behalve bij Allah."',
        source: 'Qur\'ān · Al-Kahf 18:39',
    },
    // ── Categorie 2: Beproevingen & Emoties ─────────────────────
    {
        id: 'pijn',
        category: 'emoties',
        catLabel: 'Beproevingen & Emoties',
        catColor: '#378ADD',
        icon: '🤲',
        label: 'Bij pijn of ziekte',
        description: 'Leg je hand op de pijnlijke plek, spreek driemaal Bismillāh en daarna zevenmaal deze du\'a.',
        arabic: 'أَعُوْذُ بِاللّٰهِ وَقُدْرَتِهِ مِنْ شَرِّ مَا أَجِدُ وَأُحَاذِرُ',
        transliteration: "A'ūdhu billāhi wa qudratihi min sharri mā ajidu wa uḥādhir",
        translation: '"Ik zoek toevlucht bij Allah en Zijn almacht voor het kwaad dat ik voel en vrees."',
        source: 'Muslim 2202',
    },
    {
        id: 'angst-zorgen',
        category: 'emoties',
        catLabel: 'Beproevingen & Emoties',
        catColor: '#378ADD',
        icon: '🌊',
        label: 'Bij angst of zorgen',
        description: 'De du\'a van de profeet Yūnus ع uit de buik van de vis — Allah verhoort haar snel.',
        arabic: 'لَا إِلٰهَ إِلَّا أَنْتَ سُبْحَانَکَ إِنِّیْ کُنْتُ مِنَ الظَّالِمِیْنَ',
        transliteration: "Lā ilāha illā anta subḥānaka innī kuntu minaẓ-ẓālimīn",
        translation: '"Er is geen god behalve U. Verheerlijkt zijt U. Voorwaar, ik behoorde tot de onrechtvaardigen."',
        source: 'Tirmidhī (ṣaḥīḥ) · Qur\'ān 21:87',
    },
    {
        id: 'woede',
        category: 'emoties',
        catLabel: 'Beproevingen & Emoties',
        catColor: '#378ADD',
        icon: '🔥',
        label: 'Bij woede',
        description: 'Woede is van de shaytān — zijn invloed wordt gebroken door bij Allah toevlucht te zoeken.',
        arabic: 'أَعُوْذُ بِاللّٰهِ مِنَ الشَّيْطَانِ الرَّجِیْمِ',
        transliteration: "A'ūdhu billāhi mina sh-shayṭānir-rajīm",
        translation: '"Ik zoek toevlucht bij Allah voor de vervloekte shaytān."',
        source: 'Bukhārī & Muslim',
        shortDua: true,
    },
    {
        id: 'nood',
        category: 'emoties',
        catLabel: 'Beproevingen & Emoties',
        catColor: '#378ADD',
        icon: '⚓',
        label: 'Bij zwaarte of nood',
        description: 'Wanneer de situatie overweldigend is, volstaat deze verklaring van volledig vertrouwen op Allah.',
        arabic: 'حَسْبُنَا اللّٰهُ وَنِعْمَ الْوَکِیْلُ',
        transliteration: "Ḥasbunallāhu wa ni'mal-wakīl",
        translation: '"Allah is ons genoeg, en Hij is de beste Wakīl (Zaakwaarnemer)."',
        source: 'Qur\'ān 3:173 · Bukhārī',
        shortDua: true,
    },
    // ── Categorie 3: Natuur & bijzondere momenten ────────────────
    {
        id: 'regen',
        category: 'natuur',
        catLabel: 'Natuur & bijzondere momenten',
        catColor: '#1D9E75',
        icon: '🌧️',
        label: 'Bij het vallen van regen',
        description: 'Regen is een teken van Allahs genade — ontvang haar met dankbaarheid en smeekbede.',
        arabic: 'اَللّٰهُمَّ صَيِّبًا نَّافِعًا',
        transliteration: "Allāhumma ṣayyiban nāfi'ā",
        translation: '"O Allah, maak het een zegenrijke regen."',
        source: 'Bukhārī · Abū Dāwūd',
        shortDua: true,
    },
    {
        id: 'donder',
        category: 'natuur',
        catLabel: 'Natuur & bijzondere momenten',
        catColor: '#1D9E75',
        icon: '⛈️',
        label: 'Bij het horen van donder',
        description: 'Donder is een van de tekenen van Allah — de donder zelf prijst Zijn lof.',
        arabic: 'سُبْحَانَ الَّذِیْ یُسَبِّحُ الرَّعْدُ بِحَمْدِهِ',
        transliteration: "Subḥānal-ladhī yusabbiḥur-ra'du biḥamdih",
        translation: '"Verheerlijkt zij Degene die de donder prijst met Zijn lof."',
        source: 'Mālik (ḥasan)',
        shortDua: true,
    },
    {
        id: 'nieuwe-maan',
        category: 'natuur',
        catLabel: 'Natuur & bijzondere momenten',
        catColor: '#1D9E75',
        icon: '🌙',
        label: 'Bij het zien van de nieuwe maan',
        description: 'De nieuwe maan markeert het begin van een islamitische maand — begroet haar met deze du\'a.',
        arabic: 'اَللّٰهُمَّ أَهِلَّهُ عَلَيْنَا بِالْيُمْنِ وَالْإِيْمَانِ ، وَالسَّلَامَةِ وَالْإِسْلَامِ ، رَبِّیْ وَرَبُّکَ اللّٰهُ',
        transliteration: "Allāhumma ahillahu 'alaynā bil-yumni wal-īmān, was-salāmati wal-islām, rabbī wa rabbukallāh",
        translation: '"O Allah, laat hem over ons opgaan met geluk en geloof, met veiligheid en islam. Mijn Heer en uw Heer is Allah."',
        source: 'Tirmidhī · Aḥmad',
    },
    // ── Categorie 4: Sociale momenten ───────────────────────────
    {
        id: 'niezen',
        category: 'sociaal',
        catLabel: 'Sociale momenten',
        catColor: '#D85A30',
        icon: '🤧',
        label: 'Bij het niezen (en het antwoord)',
        description: 'Zeg bij het niezen alhamdulillāh. De aanwezigen antwoorden yarḥamukallāh. Jij zegt dan yahdīkumullāh.',
        arabic: 'اَلْحَمْدُ لِلّٰهِ — يَرْحَمُکَ اللّٰهُ — يَهْدِيْکُمُ اللّٰهُ وَيُصْلِحُ بَالَکُمْ',
        transliteration: "Alḥamdulillāh — Yarḥamukallāh — Yahdīkumullāhu wa yuṣliḥu bālakum",
        translation: '"Alle lof is voor Allah [bij niezen] — Moge Allah jou genadig zijn [antwoord] — Moge Allah jullie leiden en jullie toestand verbeteren [jouw reactie]."',
        source: 'Bukhārī',
    },
    {
        id: 'beproeving-anderen',
        category: 'sociaal',
        catLabel: 'Sociale momenten',
        catColor: '#D85A30',
        icon: '🙏',
        label: 'Bij het zien van iemand in beproeving',
        description: 'Wanneer je iemand in een moeilijkheid ziet, gedenk Allahs gunst op jou — zeg het zachtjes bij jezelf.',
        arabic: 'اَلْحَمْدُ لِلّٰهِ الَّذِیْ عَافَانِیْ مِمَّا ابْتَلَاکَ بِهِ ، وَفَضَّلَنِیْ عَلٰی کَثِیْرٍ مِّمَّنْ خَلَقَ تَفْضِیْلًا',
        transliteration: "Alhamdulillāhil-ladhī 'āfānī mimmab-talāka bih, wa faḍḍalanī 'alā kathīrim-mimman khalaqa tafḍīlā",
        translation: '"Alle lof is voor Allah die mij heeft gespaard van waarmee Hij jou heeft beproefd, en die mij bevoordeeld heeft boven velen van Zijn scheepselen."',
        source: 'Tirmidhī (ḥasan)',
    },
];

/* ═══════════════════════════════════════════════════════════════
   SITUATIONELE SECTIE — bouw grid met categorie-filter
   ═══════════════════════════════════════════════════════════════ */
function buildSituationalSection() {
    const section = document.getElementById('situationalSection');
    if (!section) return;

    // Unieke categorieën
    const cats = [...new Map(SITUATIONAL_DUAS.map(d => [d.category, { key: d.category, label: d.catLabel, color: d.catColor }])).values()];
    let activeCat = 'all';

    // Chips
    const chipsHTML = `
        <div class="sit-chips" role="group" aria-label="Filter op categorie">
            <button class="sit-chip active" data-cat="all">Alle</button>
            ${cats.map(c => `<button class="sit-chip" data-cat="${c.key}" style="--cat-color:${c.color}">${c.label}</button>`).join('')}
        </div>`;

    // Kaarten
    function cardHTML(d, idx) {
        return `
<article class="sit-card" data-cat="${d.category}" style="--cat-color:${d.catColor}" role="article" aria-label="Du'a: ${d.label}">
    <header class="sit-card-header">
        <span class="sit-icon" aria-hidden="true">${d.icon}</span>
        <p class="sit-label">${d.label}</p>
    </header>
    <p class="sit-description">${d.description}</p>
    <p class="sit-arabic${d.shortDua ? ' short-dua' : ''}" dir="rtl" lang="ar">${d.arabic}</p>
    <p class="sit-transliteration">${d.transliteration}</p>
    <p class="sit-translation">${d.translation}</p>
    <footer class="sit-footer">
        <span class="sit-source">${d.source}</span>
        <button class="copy-btn sit-copy-btn" data-sit-index="${idx}" aria-label="Kopieer du'a: ${d.label}">
            <span class="copy-icon" aria-hidden="true">📋</span>
            <span class="copy-label">Kopieer</span>
        </button>
    </footer>
</article>`.trim();
    }

    section.innerHTML = `
<div class="sit-inner">
    <h2 class="sit-title">Du'as voor elk moment</h2>
    <p class="sit-subtitle">Smeekbeden die niet aan een tijdstip zijn gebonden, maar aan de situatie van het moment.</p>
    ${chipsHTML}
    <div class="sit-grid" id="sitGrid">
        ${SITUATIONAL_DUAS.map((d, i) => cardHTML(d, i)).join('\n')}
    </div>
</div>`.trim();

    // Filter-logica
    section.addEventListener('click', (e) => {
        const chip = e.target.closest('.sit-chip');
        if (!chip) return;
        activeCat = chip.dataset.cat;
        section.querySelectorAll('.sit-chip').forEach(c => c.classList.toggle('active', c.dataset.cat === activeCat));
        section.querySelectorAll('.sit-card').forEach(card => {
            const show = activeCat === 'all' || card.dataset.cat === activeCat;
            card.style.display = show ? '' : 'none';
        });
    });

    // IntersectionObserver voor kaart-reveals
    if ('IntersectionObserver' in window) {
        const obs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    obs.unobserve(entry.target);
                    trackEvent('situatie-gezien', `Situatie: ${SITUATIONAL_DUAS[entry.target.dataset.sitIndex]?.id ?? ''}`);
                }
            });
        }, { threshold: 0.12 });
        section.querySelectorAll('.sit-card').forEach(c => obs.observe(c));
    } else {
        section.querySelectorAll('.sit-card').forEach(c => c.classList.add('revealed'));
    }
}

/* ═══════════════════════════════════════════════════════════════
   DOM GENERATIE — bouw alle moment-secties
   ═══════════════════════════════════════════════════════════════ */
function buildMoments() {
    const container = document.getElementById('momentsContainer');
    if (!container) return;

    MOMENTS.forEach((m, i) => {
        const section = document.createElement('section');
        section.className = 'moment-section';
        section.id        = 'moment-' + m.id;
        section.setAttribute('aria-label', m.label);
        section.dataset.momentIndex = i;

        section.innerHTML = `
<article class="dua-card" role="article" aria-label="Du'a: ${m.label}">

    <header class="card-header">
        <span class="card-icon" aria-hidden="true">${m.icon}</span>
        <div class="card-titles">
            <p class="card-moment-label">${m.label}</p>
            <p class="card-arabic-title" dir="rtl" lang="ar">${m.arabicTitle}</p>
        </div>
    </header>

    <p class="card-description">${m.description}</p>

    <div class="card-divider" aria-hidden="true"><span class="card-divider-gem">✦</span></div>

    <div class="dua-arabic-wrap">
        <p class="dua-arabic${m.shortDua ? ' short-dua' : ''}" dir="rtl" lang="ar">${m.arabic}</p>
    </div>

    <p class="dua-transliteration">${m.transliteration}</p>

    <p class="dua-translation">${m.translation}</p>

    <div class="card-divider" aria-hidden="true"><span class="card-divider-gem">✦</span></div>

    <footer class="card-footer">
        <span class="dua-source">${m.source}</span>
        <button class="copy-btn" data-index="${i}" aria-label="Kopieer du'a voor ${m.label}">
            <span class="copy-icon" aria-hidden="true">📋</span>
            <span class="copy-label">Kopieer</span>
        </button>
    </footer>

</article>
        `.trim();

        container.appendChild(section);
    });
}

/* ═══════════════════════════════════════════════════════════════
   RAIL DOTS — bouw navigatiepunten
   ═══════════════════════════════════════════════════════════════ */
function buildRailDots() {
    const dotsEl = document.getElementById('railDots');
    if (!dotsEl) return;

    MOMENTS.forEach((m, i) => {
        const dot = document.createElement('div');
        dot.className = 'rail-dot';
        dot.title     = m.label;
        dot.dataset.index = i;
        dot.addEventListener('click', () => {
            const target = document.getElementById('moment-' + m.id);
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
        dotsEl.appendChild(dot);
    });
}

/* ═══════════════════════════════════════════════════════════════
   KOPIEER KNOP
   ═══════════════════════════════════════════════════════════════ */
function initCopyButtons() {
    document.addEventListener('click', (e) => {
        const btn = e.target.closest('.copy-btn');
        if (!btn) return;

        let m;
        if (btn.dataset.sitIndex !== undefined) {
            m = SITUATIONAL_DUAS[parseInt(btn.dataset.sitIndex, 10)];
        } else {
            m = MOMENTS[parseInt(btn.dataset.index, 10)];
        }
        if (!m) return;

        const text = [
            m.arabic,
            '',
            m.transliteration,
            '',
            m.translation,
            '',
            `— ${m.source}`,
        ].join('\n');

        navigator.clipboard.writeText(text).then(() => {
            btn.classList.add('copied');
            btn.querySelector('.copy-label').textContent = 'Gekopieerd ✓';
            const eventKey = btn.dataset.sitIndex !== undefined ? 'situatie-gekopieerd' : 'dua-gekopieerd';
            trackEvent(eventKey, `Gekopieerd: ${m.id}`);
            setTimeout(() => {
                btn.classList.remove('copied');
                btn.querySelector('.copy-label').textContent = 'Kopieer';
            }, 2500);
        }).catch(() => {
            btn.querySelector('.copy-label').textContent = 'Probeer opnieuw';
            setTimeout(() => {
                btn.querySelector('.copy-label').textContent = 'Kopieer';
            }, 2000);
        });
    });
}

/* ═══════════════════════════════════════════════════════════════
   SCROLL HANDLING — sky progress + rail + kaart-animaties
   ═══════════════════════════════════════════════════════════════ */
function initScroll(sky) {
    const railFill      = document.getElementById('railFill');
    const railCelestial = document.getElementById('railCelestial');
    const celestialBody = document.getElementById('celestialBody');
    const railDots      = Array.from(document.querySelectorAll('.rail-dot'));
    const cards         = Array.from(document.querySelectorAll('.dua-card'));
    const momentSections = Array.from(document.querySelectorAll('.moment-section'));

    let activeMoment = -1;

    function onScroll() {
        const scrollTop    = window.scrollY;
        const docHeight    = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPct    = docHeight > 0 ? scrollTop / docHeight : 0;

        // Sky voortgang
        sky.setProgress(scrollPct);

        // Rail fill
        if (railFill) railFill.style.height = (scrollPct * 100) + '%';

        // Welk moment is actief (meest in beeld)?
        let newActive = -1;
        let bestScore = -Infinity;
        momentSections.forEach((sec, i) => {
            const rect = sec.getBoundingClientRect();
            const vis  = Math.min(rect.bottom, window.innerHeight) - Math.max(rect.top, 0);
            if (vis > bestScore) { bestScore = vis; newActive = i; }
        });

        if (newActive !== activeMoment) {
            activeMoment = newActive;
            railDots.forEach((dot, i) => {
                dot.classList.toggle('active', i === activeMoment);
                dot.classList.toggle('passed', i < activeMoment);
            });

            // Celestiaal lichaam positie op de rail
            if (railCelestial && activeMoment >= 0) {
                const pct = activeMoment / (MOMENTS.length - 1);
                const railEl = document.querySelector('.day-rail');
                if (railEl) {
                    const railH = railEl.offsetHeight;
                    railCelestial.style.top = (pct * railH) + 'px';
                }
                // Zon of maan?
                const stop = SKY_STOPS[activeMoment];
                if (stop && celestialBody) {
                    const isSun = stop.sun >= 0 && stop.sun <= 1;
                    if (isSun) {
                        celestialBody.style.background = '#ffe082';
                        celestialBody.style.boxShadow  = '0 0 8px 3px rgba(255,200,60,0.6)';
                    } else {
                        celestialBody.style.background = 'rgba(238,235,210,0.9)';
                        celestialBody.style.boxShadow  = '0 0 6px 2px rgba(220,215,180,0.4)';
                    }
                }
            }
        }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();

    // Intersection Observer voor kaart-reveals
    if ('IntersectionObserver' in window) {
        const cardObs = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    cardObs.unobserve(entry.target);
                    const idx = parseInt(entry.target.closest('[data-moment-index]')?.dataset.momentIndex ?? '-1', 10);
                    if (idx >= 0) trackEvent('moment-gezien', `Moment: ${MOMENTS[idx].id}`);
                }
            });
        }, { threshold: 0.18, rootMargin: '0px 0px -60px 0px' });

        cards.forEach(card => cardObs.observe(card));

        // Intro + outro reveal
        const fadeEls = document.querySelectorAll('.intro-inner, .outro-inner');
        const fadeObs = new IntersectionObserver((entries) => {
            entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('visible'); fadeObs.unobserve(e.target); } });
        }, { threshold: 0.2 });
        fadeEls.forEach(el => fadeObs.observe(el));
    } else {
        // Fallback: alles direct zichtbaar
        cards.forEach(c => c.classList.add('revealed'));
        document.querySelectorAll('.intro-inner, .outro-inner').forEach(el => el.classList.add('visible'));
    }
}

/* ═══════════════════════════════════════════════════════════════
   GOATCOUNTER
   ═══════════════════════════════════════════════════════════════ */
function trackEvent(path, title) {
    if (window.goatcounter && window.goatcounter.count) {
        window.goatcounter.count({ path: 'dag-vol-dua/' + path, title: title, event: true });
    }
}

/* ═══════════════════════════════════════════════════════════════
   INIT
   ═══════════════════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
    // Bouw DOM
    buildMoments();
    buildRailDots();
    buildSituationalSection();

    // Start sky canvas
    const canvas = document.getElementById('skyCanvas');
    const sky    = canvas ? new SkyRenderer(canvas) : null;

    // Scroll + animaties
    if (sky) initScroll(sky);

    // Kopieer knoppen
    initCopyButtons();

    // GoatCounter: app gestart
    trackEvent('app-gestart', 'Du\'a van de Dag gestart');
});
