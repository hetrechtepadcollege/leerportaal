'use strict';

/* ── GoatCounter ── */
function trackEvent(pad) {
    if (window.goatcounter && window.goatcounter.count) {
        window.goatcounter.count({ path: pad, event: true });
    }
}

/* ── Nisaab (goud 85g × €55/g) ── */
const GOUDPRIJS_PER_GRAM = 55;
const NISAAB_GOUD_GRAM   = 85;
const NISAAB_EURO        = GOUDPRIJS_PER_GRAM * NISAAB_GOUD_GRAM; // 4.675

/* ── DOM refs ── */
const inputs = {
    spaargeld: document.getElementById('spaargeld'),
    contant:   document.getElementById('contant'),
    aandelen:  document.getElementById('aandelen'),
    goud:      document.getElementById('goud'),
    handel:    document.getElementById('handel'),
    schulden:  document.getElementById('schulden'),
};

const els = {
    nisaabDisplay:    document.getElementById('nisaabDisplay'),
    totalBezittingen: document.getElementById('totalBezittingen'),
    totalSchulden:    document.getElementById('totalSchulden'),
    zakaatBasis:      document.getElementById('zakaatBasis'),
    nisaabCheck:      document.getElementById('nisaabCheck'),
    checkIcon:        document.getElementById('checkIcon'),
    checkText:        document.getElementById('checkText'),
    zakatResult:      document.getElementById('zakatResult'),
    zakatAmount:      document.getElementById('zakatAmount'),
    btnBereken:       document.getElementById('btnBereken'),
};

/* ── Initialisatie: nisaab tonen ── */
els.nisaabDisplay.textContent = formatEuro(NISAAB_EURO);

/* ── Helpers ── */
function formatEuro(bedrag) {
    return '€\u00a0' + bedrag.toLocaleString('nl-NL', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

function getVal(el) {
    const v = parseFloat(el.value);
    return isNaN(v) || v < 0 ? 0 : v;
}

/* ── Live berekening (voortdurend bijwerken) ── */
function updateLive() {
    const bezittingen = getVal(inputs.spaargeld)
                      + getVal(inputs.contant)
                      + getVal(inputs.aandelen)
                      + getVal(inputs.goud)
                      + getVal(inputs.handel);

    const schulden = getVal(inputs.schulden);
    const basis    = Math.max(0, bezittingen - schulden);

    els.totalBezittingen.textContent = formatEuro(bezittingen);
    els.totalSchulden.textContent    = '− ' + formatEuro(schulden);
    els.zakaatBasis.textContent      = formatEuro(basis);
}

/* ── Knop: bereken en toon resultaat ── */
els.btnBereken.addEventListener('click', () => {
    const bezittingen = getVal(inputs.spaargeld)
                      + getVal(inputs.contant)
                      + getVal(inputs.aandelen)
                      + getVal(inputs.goud)
                      + getVal(inputs.handel);

    const schulden = getVal(inputs.schulden);
    const basis    = Math.max(0, bezittingen - schulden);

    updateLive();

    if (bezittingen === 0 && schulden === 0) {
        // Nog niets ingevuld
        els.checkIcon.textContent = '⬜';
        els.checkText.textContent = 'Vul je bezittingen in om te zien of je zakaat verschuldigd bent.';
        els.zakatResult.classList.remove('visible');
        trackEvent('zakat-calculator/bereken-leeg');
        return;
    }

    if (basis >= NISAAB_EURO) {
        const zakat = basis * 0.025;

        els.checkIcon.textContent = '✅';
        els.checkText.textContent = `Jouw zakaat-basis (${formatEuro(basis)}) overstijgt de nisaab (${formatEuro(NISAAB_EURO)}). Je bent zakaat verschuldigd.`;
        els.zakatAmount.textContent = formatEuro(zakat);
        els.zakatResult.classList.add('visible');

        trackEvent('zakat-calculator/bereken-boven-nisaab');
    } else {
        els.checkIcon.textContent = '❌';
        els.checkText.textContent = `Jouw zakaat-basis (${formatEuro(basis)}) is lager dan de nisaab (${formatEuro(NISAAB_EURO)}). Je bent geen zakaat verschuldigd.`;
        els.zakatResult.classList.remove('visible');

        trackEvent('zakat-calculator/bereken-onder-nisaab');
    }
});

/* ── Live update bij invoer ── */
Object.values(inputs).forEach(input => {
    input.addEventListener('input', updateLive);
});

/* ── Tabs ── */
const tabBtns   = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        const target = btn.dataset.tab;

        tabBtns.forEach(b => {
            b.classList.toggle('active', b === btn);
            b.setAttribute('aria-selected', b === btn ? 'true' : 'false');
        });

        tabPanels.forEach(panel => {
            panel.classList.toggle('active', panel.id === `panel-${target}`);
        });

        trackEvent(`zakat-calculator/tab-${target}`);
    });
});

/* ── Initialisatie ── */
updateLive();
trackEvent('zakat-calculator/app-geopend');
