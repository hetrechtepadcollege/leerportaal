const questions = [
    // Q1 — correct: A
    {
        question: "In welk jaar na de Hidjra (A.H.) werd ʿEid ul-Fiṭr voor het eerst gevierd?",
        answers: [
            { text: "A) 1 A.H.", correct: false },
            { text: "B) 2 A.H.", correct: true },
            { text: "C) 10 A.H.", correct: false }
        ],
        uitleg: "ʿEid al-Fiṭr werd ingesteld twee jaar nadat de Profeet ﷺ naar Medina was gemigreerd, in het jaar 2 na de Hidjra (Anno Hegirae). Sindsdien is het een van de twee grote islamitische feestdagen."
    },
    // Q2 — correct: C
    {
        question: "Hoe noemde de Profeet ﷺ de dag van ʿEid al-Fiṭr?",
        answers: [
            { text: "A) Yawm al-Qiyāmah", correct: false },
            { text: "B) Yawm al-ʿArafah", correct: false },
            { text: "C) Yawm al-Jazā", correct: true }
        ],
        uitleg: "De Profeet ﷺ noemde ʿEid al-Fiṭr de 'Yawm al-Jazā'' — de dag van beloning. Dit benadrukt dat ʿEid al-Fiṭr niet zomaar een feestdag is, maar een dag waarop gelovigen beloond worden voor hun toewijding tijdens de Ramadan."
    },
    // Q3 — correct: B
    {
        question: "Klopt het dat 'Suikerfeest' een juiste naam is voor ʿEid al-Fiṭr?",
        answers: [
            { text: "A) Ja, dit is een gangbare islamitische naam", correct: false },
            { text: "B) Nee, dit is eigenlijk een onjuiste aanduiding", correct: true },
            { text: "C) Het is een alternatieve, volkomen toegestane naam", correct: false }
        ],
        uitleg: "De term 'Suikerfeest' is eigenlijk een onjuiste aanduiding voor ʿEid al-Fiṭr. De correcte naam is ʿEid al-Fiṭr, wat 'feest van het vasten' betekent. De focus van ʿEid al-Fiṭr ligt op dankbaarheid, gebed en samenzijn — niet op suiker of snoep."
    },
    // Q4 — correct: A
    {
        question: "Op welk tijdstip wordt het ʿEid al-Fiṭr-gebed verricht?",
        answers: [
            { text: "A) Na zonsopgang, wanneer de zon één speerlengdte hoog staat", correct: true },
            { text: "B) Voor de fadjr (ochtendschemering)", correct: false },
            { text: "C) Rond het middaguur, net als het Ẓuhr-gebed", correct: false }
        ],
        uitleg: "Het ʿEid al-Fiṭr-gebed wordt verricht na zonsopgang, zodra de zon ongeveer één speerlengdte boven de horizon staat — vergelijkbaar met de tijd van het Ishrāq-gebed. Het gebed is niet geldig vóór zonsopgang of na het middaguur."
    },
    // Q5 — correct: C
    {
        question: "Wanneer moet Zakāt al-Fiṭr betaald worden?",
        answers: [
            { text: "A) Na het ʿEid al-Fiṭr-gebed", correct: false },
            { text: "B) Aan het begin van de Ramadan", correct: false },
            { text: "C) Voor het ʿEid al-Fiṭr-gebed", correct: true }
        ],
        uitleg: "Zakāt al-Fiṭr is een verplichte liefdadigheid die vóór het ʿEid al-Fiṭr-gebed betaald dient te worden. Het doel is om ook de armen in staat te stellen om volwaardig deel te nemen aan de vreugde van Eid."
    },
    // Q6 — correct: B
    {
        question: "Welke van de volgende handelingen is soenna op de dag van ʿEid al-Fiṭr?",
        answers: [
            { text: "A) De dag vasten als dankbaarheid", correct: false },
            { text: "B) Een ritueel bad nemen, nieuwe kleding dragen en parfum opdoen", correct: true },
            { text: "C) De hele dag stilte bewaren", correct: false }
        ],
        uitleg: "Op de dag van ʿEid al-Fiṭr is het soenna om een ritueel bad te nemen, schone of nieuwe kleding te dragen en parfum op te doen. Deze handelingen weerspiegelen de vreugde en het feestelijke karakter van de dag."
    },
    // Q7 — correct: A
    {
        question: "Wat eet je traditioneel vóór het ʿEid al-Fiṭr-gebed?",
        answers: [
            { text: "A) Dadels, bij voorkeur een oneven aantal", correct: true },
            { text: "B) Brood met honing", correct: false },
            { text: "C) Vlees en rijst", correct: false }
        ],
        uitleg: "Het is soenna om vóór het ʿEid al-Fiṭr-gebed dadels te eten, bij voorkeur een oneven aantal. Dit onderscheidt ʿEid al-Fiṭr van de gewone Ramadan dagen en breekt symbolisch het vasten definitief."
    },
    // Q8 — correct: C
    {
        question: "Wat is een soenna betreffende de route naar en van het ʿEid al-Fiṭr-gebed?",
        answers: [
            { text: "A) Heen en terug dezelfde route nemen", correct: false },
            { text: "B) Zo ver mogelijk lopen voor extra beloning", correct: false },
            { text: "C) Via een andere route terugkomen dan de heenweg", correct: true }
        ],
        uitleg: "Het is soenna om via een andere route terug te keren dan de route waarmee je naar het ʿEid al-Fiṭr-gebed ging. Hier zijn meerdere verklaringen voor gegeven, waaronder dat er meer mensen getuige zijn van de dag van Eid."
    },
    // Q9 — correct: B
    {
        question: "Hoe heet de lofprijzing die je op ʿEid al-Fiṭr uitspreekt?",
        answers: [
            { text: "A) Tasbīḥ", correct: false },
            { text: "B) Takbīr", correct: true },
            { text: "C) Tashahud", correct: false }
        ],
        uitleg: "Op ʿEid al-Fiṭr wordt de takbīr uitgesproken: 'Allāhu Akbar, Allāhu Akbar, Lā ilāha illallāh, Allāhu Akbar, Allāhu Akbar, wa lillāhil hamd.' Het uitspreken van de takbīr is een uiting van dankbaarheid aan Allah."
    },
    // Q10 — correct: C
    {
        question: "Wordt het ʿEid al-Fiṭr-gebed afgekondigd met een adzān?",
        answers: [
            { text: "A) Ja, net als de vijf dagelijkse gebeden", correct: false },
            { text: "B) Alleen bij grote gemeenschappen", correct: false },
            { text: "C) Nee, er is geen adzān of iqāmah", correct: true }
        ],
        uitleg: "Het ʿEid al-Fiṭr-gebed gaat niet vooraf aan een adzān of iqāmah. Dit is één van de kenmerken die het ʿEid al-Fiṭr-gebed onderscheidt van de reguliere dagelijkse gebeden."
    },
    // Q11 — correct: A
    {
        question: "Hoeveel rakaʿāt heeft het ʿEid al-Fiṭr-gebed?",
        answers: [
            { text: "A) Twee rakaʿāt", correct: true },
            { text: "B) Vier rakaʿāt", correct: false },
            { text: "C) Drie rakaʿāt", correct: false }
        ],
        uitleg: "Het ʿEid al-Fiṭr-gebed bestaat uit twee rakaʿāt. Het is een congregatiegebed dat door de imam wordt voorgegaan en wordt gevolgd door een preek (khutbah)."
    },
    // Q12 — correct: B
    {
        question: "Wat is de eerste stap bij het verrichten van het ʿEid al-Fiṭr-gebed?",
        answers: [
            { text: "A) De takbīr hardop uitspreken", correct: false },
            { text: "B) De niyyah (intentie) formuleren", correct: true },
            { text: "C) Wachten op de adzān", correct: false }
        ],
        uitleg: "Net als bij elk gebed dient men eerst de niyyah (intentie) te formuleren voordat het ʿEid al-Fiṭr-gebed begint. De intentie vormt de innerlijke grondslag van elke daad van aanbidding."
    },
    // Q13 — correct: A
    {
        question: "Hoeveel extra takbīr worden er uitgesproken in het eerste rakaʿāt van het ʿEid al-Fiṭr-gebed (na de openingstakbīr)?",
        answers: [
            { text: "A) Drie extra takbīr", correct: true },
            { text: "B) Twee extra takbīr", correct: false },
            { text: "C) Vier extra takbīr", correct: false }
        ],
        uitleg: "In het eerste rakaʿāt van het ʿEid al-Fiṭr-gebed worden drie extra takbīr uitgesproken na de openingstakbīr. Na elke takbīr worden de handen langs de zij gehangen, totdat na de derde extra takbīr de handen worden gevouwen voor de Koranrecitatie."
    },
    // Q14 — correct: C
    {
        question: "Wat doe je met je handen na elk van de drie extra takbīr in het eerste rakaʿāt?",
        answers: [
            { text: "A) Plaats je handen onder je navel", correct: false },
            { text: "B) Je heft ze op naar je hoofd", correct: false },
            { text: "C) Je laat ze hangen langs je zij", correct: true }
        ],
        uitleg: "Na elke extra takbīr in het eerste rakaʿāt laat je je handen langs je zij hangen. Pas na de derde extra takbīr worden de handen gevouwen en geplaatst onder de navel, waarna de imam begint met de Koranrecitatie."
    },
    // Q15 — correct: B
    {
        question: "Mag je op de dag van ʿEid al-Fiṭr vasten?",
        answers: [
            { text: "A) Ja, als extra dankbaarheid aan Allah", correct: false },
            { text: "B) Nee, vasten op ʿEid al-Fiṭr is verboden (harām)", correct: true },
            { text: "C) Alleen een vrijwillig (nafl) vastendag is toegestaan", correct: false }
        ],
        uitleg: "Het vasten op de dag van ʿEid al-Fiṭr is harām (verboden). De dag van ʿEid is een dag van vreugde, dankbaarheid en gemeenschap — geen dag van onthouding."
    }
];

/* ============================================================
   RESERVEVRAGEN — niet actief in de quiz
   Om een vraag toe te voegen: verplaats het object naar de
   questions-array hierboven en pas de antwoordletters aan.
   ============================================================

    {
        question: "Op welke dag van de islamitische kalender vindt ʿEid al-Fiṭr plaats?",
        answers: [
            { text: "A) 30 Ramadan", correct: false },
            { text: "B) 10 Dzul Hijjah", correct: false },
            { text: "C) 1 Shawwāl", correct: true }
        ],
        uitleg: "ʿEid al-Fiṭr vindt plaats op 1 Shawwāl, de dag na de laatste dag van de Ramadan. De datum wordt bepaald aan de hand van het zien van de nieuwe maan."
    },
    {
        question: "Wat zijn de twee grote islamitische feestdagen?",
        answers: [
            { text: "A) ʿEid al-Fiṭr en Laylatul Qadr", correct: false },
            { text: "B) ʿEid al-Fiṭr en ʿEid al-Adha", correct: true },
            { text: "C) ʿEid al-Adha en Mawlid an-Nabi", correct: false }
        ],
        uitleg: "De twee grote islamitische feestdagen zijn ʿEid al-Fiṭr (aan het einde van de Ramadan) en ʿEid al-Adha (het Offerfeest). Beide feesten hebben een diepe religieuze betekenis en worden door moslims wereldwijd gevierd."
    },
    {
        question: "Wat is het verschil tussen ʿEid al-Fiṭr en ʿEid al-Adha?",
        answers: [
            { text: "A) ʿEid al-Fiṭr viert het einde van de hadj, ʿEid al-Adha het einde van Ramadan", correct: false },
            { text: "B) ʿEid al-Fiṭr viert het einde van Ramadan, ʿEid al-Adha herdenkt de offerande van Ibrahim ﷺ", correct: true },
            { text: "C) Er is geen verschil, het zijn twee namen voor hetzelfde feest", correct: false }
        ],
        uitleg: "ʿEid al-Fiṭr markeert het einde van de vastmaand Ramadan. ʿEid al-Adha — het Offerfeest — valt op 10 Dzul Hijjah en herdenkt de bereidheid van de Profeet Ibrahim ﷺ om zijn zoon te offeren als daad van gehoorzaamheid aan Allah."
    },

    {
        question: "Wat is de betekenis van het woord 'Fiṭr' in ʿEid al-Fiṭr?",
        answers: [
            { text: "A) Suiker", correct: false },
            { text: "B) Het breken van het vasten / de natuurlijke aanleg", correct: true },
            { text: "C) Beloning", correct: false }
        ],
        uitleg: "Het woord 'Fiṭr' verwijst naar het breken van het vasten, maar ook naar de oorspronkelijke, zuivere menselijke aanleg (fiṭrah). ʿEid al-Fiṭr viert dus zowel het einde van het vasten als de terugkeer naar de zuivere staat van dankbaarheid en verbinding met Allah."
    },

    {
        question: "Wat is de ware betekenis van ʿEid al-Fiṭr volgens Sheikh Abdul Qadir Al-Jilani?",
        answers: [
            { text: "A) ʿEid gaat vooral over feesten, eten en samenkomen met familie", correct: false },
            { text: "B) De ware ʿEid is de aanvaarding van gehoorzaamheid, vergiffenis van zonden en omzetting van slechte daden in goede", correct: true },
            { text: "C) ʿEid is alleen voorbehouden aan degenen die de hele Ramadan gevast hebben", correct: false }
        ],
        uitleg: "Volgens Sheikh Abdul Qadir Al-Jilani is de ware ʿEid niet louter een uitwendig feest, maar een innerlijke ervaring: 'de aanvaarding van gehoorzaamheid aan Allah, vergiffenis van zonden en fouten, en het omzetten van slechte daden in goede daden.' ʿEid al-Fiṭr is dus een dag van spirituele verheffing en dankbaarheid."
    },

    {
        question: "Wat is de khutbah (preek) bij het ʿEid-gebed?",
        answers: [
            { text: "A) Een verplicht onderdeel dat vóór het gebed wordt gehouden", correct: false },
            { text: "B) Een sunnah-preek die ná het gebed wordt gehouden", correct: true },
            { text: "C) Een persoonlijk gebed dat elke moslim individueel uitspreekt", correct: false }
        ],
        uitleg: "De khutbah bij het ʿEid-gebed is een sunnah en wordt ná het gebed gehouden — anders dan bij het vrijdaggebed, waarbij de khutbah vóóraf gaat. Het luisteren naar de preek is aanbevolen maar niet verplicht."
    },

*/

let currentIdx = 0;
let score = 0;
let firstTry = true;
let completionTracked = false;
let completionTrackingRequested = false;
let completionTrackingRetries = 0;
let quizStartTracked = false;

function trackEvent(path, title) {
    if (window.goatcounter && typeof window.goatcounter.count === "function") {
        window.goatcounter.count({
            path,
            title,
            event: true
        });
        return true;
    }
    return false;
}

window.restartQuiz = function restartQuiz() {
    location.reload();
};

document.addEventListener("DOMContentLoaded", () => {
    const characterImg = document.getElementById("character-img");
    const resultContainer = document.getElementById("result-container");
    const restartBtn = document.getElementById("restart-btn");
    const qTextElement = document.getElementById("question-text");
    const btnContainer = document.getElementById("answer-buttons");
    const scoreText = document.getElementById("score-display");
    const progressBar = document.getElementById("progress-bar");
    const correctSound = document.getElementById("correct-sound");
    const wrongSound = document.getElementById("wrong-sound");
    const uitlegContainer = document.getElementById("uitleg-container");
    const uitlegTekst = document.getElementById("uitleg-tekst");
    const nextBtn = document.getElementById("next-btn");
    const shareBtn = document.getElementById("whatsapp-share-btn");

    if (
        !characterImg ||
        !resultContainer ||
        !qTextElement ||
        !btnContainer ||
        !scoreText ||
        !progressBar ||
        !uitlegContainer ||
        !uitlegTekst ||
        !nextBtn
    ) {
        return;
    }

    if (restartBtn) {
        restartBtn.addEventListener("click", window.restartQuiz);
    }

    if (shareBtn) {
        shareBtn.addEventListener("click", () => {
            const websiteUrl = window.location.href;
            const uitnodiging = `As-Salām ʿAlaykum! Ik heb net een leuke ʿEid al-Fiṭr kennisquiz gedaan. Wil jij je kennis ook testen? Hier vind je de quiz: ${websiteUrl}`;
            const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(uitnodiging)}`;
            window.open(whatsappUrl, "_blank");
            trackEvent("eid-al-fitr-quiz/gedeeld-whatsapp", "ʿEid al-Fiṭr quiz gedeeld via WhatsApp");
        });
    }

    function trackQuizCompleted() {
        if (completionTracked) {
            return;
        }
        completionTrackingRequested = true;

        if (trackEvent("eid-al-fitr-quiz/quiz-voltooid", "Deelnemer heeft de ʿEid quiz afgerond")) {
            completionTracked = true;
            return;
        }

        if (completionTrackingRetries < 10) {
            completionTrackingRetries++;
            setTimeout(trackQuizCompleted, 500);
        }
    }

    window.addEventListener("load", () => {
        if (completionTrackingRequested && !completionTracked) {
            trackQuizCompleted();
        }
    });

    function resetState() {
        while (btnContainer.firstChild) {
            btnContainer.removeChild(btnContainer.firstChild);
        }
    }

    function disableAllAnswerButtons() {
        btnContainer.querySelectorAll("button").forEach((button) => {
            button.disabled = true;
        });
    }

    function showQuestion() {
        resetState();
        firstTry = true;
        resultContainer.classList.add("hide");
        uitlegContainer.classList.add("hide");

        const currentQuestion = questions[currentIdx];
        qTextElement.innerText = currentQuestion.question;
        progressBar.style.width = `${(currentIdx / questions.length) * 100}%`;

        currentQuestion.answers.forEach((answer) => {
            const button = document.createElement("button");
            button.innerText = answer.text;
            button.classList.add("btn");
            button.onclick = () => selectAnswer(button, answer.correct);
            btnContainer.appendChild(button);
        });

        qTextElement.classList.remove("fade-in-element");
        characterImg.classList.remove("fade-in-element", "celebrate", "shake");
        void qTextElement.offsetWidth;
        void characterImg.offsetWidth;
        characterImg.src = "images/mw-neutral.png";
        qTextElement.classList.add("fade-in-element");
        characterImg.classList.add("fade-in-element");
    }

    function selectAnswer(btn, isCorrect) {
        if (btn.disabled) {
            return;
        }
        trackEvent(
            isCorrect ? "eid-al-fitr-quiz/antwoord-goed" : "eid-al-fitr-quiz/antwoord-fout",
            isCorrect ? "Eid quiz antwoord goed" : "Eid quiz antwoord fout"
        );
        trackEvent(
            isCorrect ? `eid-al-fitr-quiz/v${currentIdx + 1}-goed` : `eid-al-fitr-quiz/v${currentIdx + 1}-fout`,
            isCorrect ? `Vraag ${currentIdx + 1} correct` : `Vraag ${currentIdx + 1} fout`
        );

        const huidigeVraag = questions[currentIdx];

        if (isCorrect) {
            btn.classList.add("correct");
            characterImg.src = "images/mw-happy.png";
            characterImg.classList.add("celebrate");
            if (correctSound) {
                correctSound.currentTime = 0;
                correctSound.play().catch(() => {});
            }
            if (firstTry) {
                score++;
                scoreText.innerText = `Score: ${score}`;
            }
        } else {
            btn.classList.add("wrong");
            firstTry = false;
            characterImg.src = "images/mw-sad.png";
            characterImg.classList.remove("shake");
            void characterImg.offsetWidth;
            characterImg.classList.add("shake");
            if (wrongSound) {
                wrongSound.currentTime = 0;
                wrongSound.play().catch(() => {});
            }
        }

        disableAllAnswerButtons();
        uitlegTekst.innerText = huidigeVraag.uitleg;
        uitlegContainer.classList.remove("hide");
    }

    function showResult() {
        resetState();
        uitlegContainer.classList.add("hide");
        progressBar.style.width = "100%";
        qTextElement.innerText = "Māshā Allāh! Je hebt de Kennisquiz ʿEid al-Fiṭr afgerond.";
        scoreText.innerHTML = `Eindscore: ${score} van de ${questions.length}<br><br>Moge Allah jouw ʿEid al-Fiṭr vullen met vreugde, dankbaarheid en zegeningen. ʿEid Mubārak! 🌙`;
        resultContainer.classList.remove("hide");
        characterImg.src = "images/mw-happy.png";
        characterImg.classList.add("celebrate");

        if (typeof confetti === "function") {
            const duration = 4000;
            const end = Date.now() + duration;
            (function frame() {
                confetti({
                    particleCount: 4,
                    angle: 60,
                    spread: 60,
                    origin: { x: 0 },
                    colors: ["#10b981", "#f59e0b", "#ffffff", "#34d399", "#fbbf24"]
                });
                confetti({
                    particleCount: 4,
                    angle: 120,
                    spread: 60,
                    origin: { x: 1 },
                    colors: ["#10b981", "#f59e0b", "#ffffff", "#34d399", "#fbbf24"]
                });
                if (Date.now() < end) {
                    requestAnimationFrame(frame);
                }
            })();
        }

        trackQuizCompleted();
    }

    nextBtn.addEventListener("click", () => {
        uitlegContainer.classList.add("hide");
        currentIdx++;
        if (currentIdx < questions.length) {
            showQuestion();
        } else {
            showResult();
        }
    });

    showQuestion();
    if (!quizStartTracked) {
        trackEvent("eid-al-fitr-quiz/quiz-gestart", "ʿEid al-Fiṭr quiz gestart");
        quizStartTracked = true;
    }
});
