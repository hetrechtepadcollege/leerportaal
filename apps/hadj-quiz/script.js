const questions = [
    {
        question: "Waarom is de hadj (islamitische bedevaart naar Mekka) een van de vijf zuilen van de islam?",
        answers: [
            { text: "A) Omdat het een collectieve verplichting (farḍ kifāyah) is die door een groep moslims uitgevoerd moet worden", correct: false },
            { text: "B) Omdat het een eenmalige individuele verplichting (farḍ ʿayn) is voor wie daartoe in staat is", correct: true },
            { text: "C) Omdat het een aanbevolen daad (soenna muʾakkadah) is die sterk wordt aangemoedigd", correct: false }
        ],
        uitleg: "Allah zegt: “En het is een plicht tegenover God voor de mensen om de bedevaart naar het Huis te verrichten, voor zover zij daartoe in staat zijn.” (Koran 3:97). De Profeet ﷺ werd gevraagd of de hadj elk jaar verplicht is, en gaf aan dat dit niet zo is. Daarom wordt de hadj eenmaal verplicht voor wie daartoe in staat is.",
        scene: "pillar",
        detail: "Farḍ ʿayn"
    },
    {
        question: "In welk jaar na de hidjra (het begin van de islamitische jaartelling) werd de hadj verplicht gesteld?",
        answers: [
            { text: "A) In het jaar 6 AH", correct: false },
            { text: "B) In het jaar 9 AH", correct: true },
            { text: "C) In het jaar 10 AH", correct: false }
        ],
        uitleg: "De hadj werd verplicht gesteld in het 9e jaar na de hidjra. De Profeet ﷺ verrichtte zelf de hadj in het 10e jaar, bekend als de afscheidsbedevaart.",
        scene: "timeline",
        detail: "9 AH"
    },
    {
        question: "Tijdens welke dagen worden de belangrijkste rituelen van de hadj verricht?",
        answers: [
            { text: "A) De eerste tien dagen van Dzū al-Ḥijjah (maand van de bedevaart)", correct: false },
            { text: "B) 8 tot en met 13 Dzū al-Ḥijjah", correct: true },
            { text: "C) Alleen 9 en 10 Dzū al-Ḥijjah", correct: false }
        ],
        uitleg: "De hadj-rituelen vinden plaats van 8 tot en met 13 Dzū al-Ḥijjah. Belangrijke dagen zijn onder andere de dag van Arafat (9e) en de offerdag (10e).",
        scene: "calendar",
        detail: "8–13 Dzū al-Ḥijjah"
    },
    {
        question: "Welke voorwaarden maken de hadj verplicht voor een moslim?",
        answers: [
            { text: "A) Geloof, kennis van rituelen en Arabische taalvaardigheid", correct: false },
            { text: "B) Geloof, reisdocumenten, vaccinaties en begeleiding", correct: false },
            { text: "C) Geloof, volwassenheid, toerekeningsvatbaarheid, vrijheid, gezondheid, gezichtsvermogen, financiële draagkracht en tijd", correct: true }
        ],
        uitleg: "De hadj wordt verplicht wanneer aan de voorwaarden wordt voldaan: geloof, volwassenheid, toerekeningsvatbaarheid, vrijheid, gezondheid, gezichtsvermogen, financiële draagkracht en tijd. De financiële draagkracht betekent dat iemand de reis kan bekostigen zonder zijn verplichte lasten te verwaarlozen.",
        scene: "conditions",
        detail: "Voorwaarden"
    },
    {
        question: "Welke drie vormen van hadj worden onderscheiden?",
        answers: [
            { text: "A) ʿUmrah (kleine bedevaart), Hadj en Ziyārah (bezoek)", correct: false },
            { text: "B) Farḍ, Wājib en Soenna", correct: false },
            { text: "C) Qirān, Tamattuʿ en Ifrād", correct: true }
        ],
        uitleg: "De drie vormen verschillen in hoe ʿUmrah en hadj worden gecombineerd. Bij Qirān worden beide in één iḥrām verricht, bij Tamattuʿ gescheiden en bij Ifrād alleen hadj.",
        scene: "routes",
        detail: "3 vormen"
    },
    {
        question: "Welke hadj-vorm geldt als de meest aanbevolen vorm?",
        answers: [
            { text: "A) Tamattuʿ (vorm van hadj)", correct: false },
            { text: "B) Ifrād (vorm van hadj)", correct: false },
            { text: "C) Qirān (vorm van hadj)", correct: true }
        ],
        uitleg: "Bij Qirān combineert de pelgrim ʿUmrah en hadj in één iḥrām en blijft in deze staat tot de dag van het offer. Hierbij is ook een offer verplicht.",
        scene: "routes",
        detail: "Qirān"
    },
    {
        question: "Wat kenmerkt de hadj-vorm Tamattuʿ?",
        answers: [
            { text: "A) Doorlopende iḥrām (gewijde staat)", correct: false },
            { text: "B) Eerst ʿUmrah, daarna uit iḥrām en later opnieuw iḥrām", correct: true },
            { text: "C) Alleen hadj zonder ʿUmrah", correct: false }
        ],
        uitleg: "Bij Tamattuʿ verricht men eerst ʿUmrah en verlaat daarna de iḥrām. Op 8 Dzū al-Ḥijjah wordt opnieuw iḥrām aangenomen voor de hadj. Ook hierbij hoort een offer.",
        scene: "tamattu",
        detail: "Onderbreking"
    },
    {
        question: "Wanneer moet een bedevaartganger uiterlijk de intentie voor iḥrām (gewijde staat) maken?",
        answers: [
            { text: "A) In Mekka vóór de ṭawāf (rondgang)", correct: false },
            { text: "B) In Mina (verblijfplaats tijdens hadj)", correct: false },
            { text: "C) Vóór het passeren van de Mīqāt (grenspunt voor bedevaartgangers)", correct: true }
        ],
        uitleg: "De Mīqāt is een grens die niet zonder iḥrām gepasseerd mag worden. Wie dit wel doet, moet terugkeren of een compensatie verrichten.",
        scene: "miqat",
        detail: "Mīqāt"
    },
    {
        question: "Wanneer wordt iḍṭibāʿ (rechterschouder ontbloten) toegepast tijdens de hadj?",
        answers: [
            { text: "A) Het wordt gedurende de gehele iḥrām toegepast", correct: false },
            { text: "B) Het is verplicht tijdens gebeden", correct: false },
            { text: "C) Het wordt toegepast tijdens een specifieke ṭawāf (rondgang)", correct: true }
        ],
        uitleg: "Iḍṭibāʿ wordt toegepast tijdens een specifieke ṭawāf. In dezelfde ṭawāf wordt in de eerste drie rondes versneld gelopen (raml) door mannen.",
        scene: "ihram",
        detail: "Ṭawāf-specifiek"
    },
    {
        question: "Hoeveel rondes omvat een volledige ṭawāf (rondgang om de Kaʿbah)?",
        answers: [
            { text: "A) 5 rondes", correct: false },
            { text: "B) 7 rondes", correct: true },
            { text: "C) 8 rondes", correct: false }
        ],
        uitleg: "De ṭawāf bestaat uit zeven rondes rond de Kaʿbah en begint bij de Zwarte Steen, die men probeert aan te raken of te groeten.",
        scene: "tawaf",
        detail: "7 rondes"
    },
    {
        question: "Waarom verblijft de bedevaartganger in Mina (plaats nabij Mekka) op de 8e Dzū al-Ḥijjah?",
        answers: [
            { text: "A) Het verrichten van ṭawāf", correct: false },
            { text: "B) Voorbereiding op Arafat", correct: true },
            { text: "C) Het afsluiten van de hadj", correct: false }
        ],
        uitleg: "De bedevaartganger verblijft in Mina en verricht daar de gebeden tot de volgende ochtend, voordat hij naar Arafat vertrekt.",
        scene: "mina",
        detail: "Mina"
    },
    {
        question: "Welke uitspraak van de Profeet ﷺ benadrukt het belang van Arafat tijdens de hadj?",
        answers: [
            { text: "A) 'De hadj is Arafat'", correct: true },
            { text: "B) 'De hadj is Mina'", correct: false },
            { text: "C) 'De hadj is ṭawāf'", correct: false }
        ],
        uitleg: "De Profeet ﷺ zei: “De hadj is Arafat.” Wie het verblijf op Arafat mist, heeft de hadj gemist volgens de jurisprudentie..",
        scene: "arafat",
        detail: "Kern"
    },
    {
        question: "Wat is een aanbevolen daad op de Dag van Arafat voor niet-bedevaartgangers?",
        answers: [
            { text: "A) Vasten", correct: true },
            { text: "B) Een dier offeren", correct: false },
            { text: "C) Jezelf parfumeren", correct: false }
        ],
        uitleg: "De Profeet ﷺ zei dat het vasten op de dag van Arafat de zonden van het voorgaande en het komende jaar uitwist. Voor bedevaartgangers zelf is vasten op deze dag niet aanbevolen.",
        scene: "fasting",
        detail: "Vasten"
    },
    {
        question: "Welke rituelen verricht de bedevaartganger op de 10e Dzū al-Ḥijjah?",
        answers: [
            { text: "A) Steniging (ramy), offer (naḥr), haar knippen/scheren en ṭawāf", correct: true },
            { text: "B) Alleen verblijf in Arafat", correct: false },
            { text: "C) Begin van iḥrām", correct: false }
        ],
        uitleg: "Op de 10e Dzū al-Ḥijjah verricht de bedevaartganger de steniging, het offer, het knippen of scheren van het haar en daarna de ṭawāf. De volgorde van deze handelingen kent ruimte; de Profeet ﷺ gaf aan dat het wisselen van volgorde geen probleem is.",
        scene: "sacrifice",
        detail: "10 Dzū al-Ḥijjah"
    },
    {
        question: "Welke ṭawāf behoort tot de pijlers (arkān) van de hadj?",
        answers: [
            { text: "A) Ṭawāf al-ifāḍah (verplichte rondgang)", correct: true },
            { text: "B) Vrijwillige ṭawāf", correct: false },
            { text: "C) Ṭawāf na terugkeer", correct: false }
        ],
        uitleg: "Ṭawāf al-ifāḍah is een essentiële pijler van de hadj. Zonder deze ṭawāf is de hadj ongeldig.",
        scene: "ifada",
        detail: "Pijler"
    },
    {
        question: "Wat kenmerkt een geaccepteerde hadj (ḥajj mabrūr)?",
        answers: [
            { text: "A) Terugkeren zonder zonden", correct: true },
            { text: "B) Geen verplichtingen meer", correct: false },
            { text: "C) Geen aanbidding meer nodig", correct: false }
        ],
        uitleg: "De Profeet ﷺ zei dat wie de hadj verricht zonder zondig gedrag terugkeert zoals op de dag waarop hij geboren werd. In een andere overlevering wordt vermeld dat een geaccepteerde hadj geen andere beloning heeft dan het Paradijs.",
        scene: "renewal",
        detail: "Vergeving"
    }
];

let currentIdx = 0;
let score = 0;
let quizCompleted = false;
const questionState = questions.map(() => ({
    answered: false,
    selectedIndex: null,
    correct: false,
    earned: false
}));
const primarySceneLabelScenes = new Set(["timeline", "calendar", "fasting", "miqat", "ihram"]);
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
    const restartInlineBtn = document.getElementById("restart-inline-btn");
    const prevQuestionBtn = document.getElementById("prev-question-btn");
    const qTextElement = document.getElementById("question-text");
    const ritualScene = document.getElementById("ritual-scene");
    const btnContainer = document.getElementById("answer-buttons");
    const scoreText = document.getElementById("score-display");
    const progressBar = document.getElementById("progress-bar");
    const correctSound = document.getElementById("correct-sound");
    const wrongSound = document.getElementById("wrong-sound");
    const uitlegContainer = document.getElementById("uitleg-container");
    const uitlegTekst = document.getElementById("uitleg-tekst");
    const nextBtn = document.getElementById("next-btn");
    const shareBtn = document.getElementById("whatsapp-share-btn");
    const quizNavActions = document.querySelector(".quiz-nav-actions");

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

    if (restartInlineBtn) {
        restartInlineBtn.addEventListener("click", window.restartQuiz);
    }

    if (prevQuestionBtn) {
        prevQuestionBtn.addEventListener("click", () => {
            if (currentIdx > 0) {
                currentIdx--;
                quizCompleted = false;
                showQuestion();
            }
        });
    }

    if (shareBtn) {
        shareBtn.addEventListener("click", () => {
            const websiteUrl = window.location.href;
            const uitnodiging = `As-Salām ʿAlaykum! Ik heb net de kennisquiz over de hadj gedaan. Wil jij je kennis ook testen? Hier vind je de quiz: ${websiteUrl}`;
            const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(uitnodiging)}`;
            window.open(whatsappUrl, "_blank", "noopener,noreferrer");
            trackEvent("hadj-quiz/gedeeld-whatsapp", "Hadj quiz gedeeld via WhatsApp");
        });
    }

    function trackQuizCompleted() {
        if (completionTracked) {
            return;
        }
        completionTrackingRequested = true;

        if (trackEvent("hadj-quiz/quiz-voltooid", "Deelnemer heeft de hadj quiz afgerond")) {
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

    function updateNavActions() {
        if (quizNavActions) {
            quizNavActions.classList.toggle("hide", quizCompleted);
        }
        if (prevQuestionBtn) {
            prevQuestionBtn.disabled = currentIdx === 0 || quizCompleted;
        }
    }

    function updateScoreText() {
        scoreText.innerText = `Score: ${score}`;
    }

    function setSceneForQuestion(question, answered) {
        if (!ritualScene) {
            return;
        }
        const sceneDetail = document.getElementById("scene-detail");
        const sceneMarker = ritualScene.querySelector(".scene-marker");
        const sceneDate = ritualScene.querySelector(".scene-date");
        const activeScene = answered ? question.scene || "tawaf" : "generic";
        const showDetailPill = answered && !primarySceneLabelScenes.has(activeScene);
        if (sceneDetail) {
            sceneDetail.innerText = showDetailPill ? question.detail || "" : "";
        }
        if (sceneMarker) {
            sceneMarker.innerText = answered ? question.detail || "" : "";
        }
        if (sceneDate) {
            sceneDate.innerText = answered ? question.detail || "" : "";
        }
        ritualScene.setAttribute("data-scene", activeScene);
        ritualScene.setAttribute("data-answered", answered ? "true" : "false");
        ritualScene.setAttribute("data-detail-pill", showDetailPill ? "true" : "false");
        ritualScene.classList.remove("scene-pulse");
        void ritualScene.offsetWidth;
        ritualScene.classList.add("scene-pulse");
    }

    function showQuestion() {
        resetState();
        quizCompleted = false;
        resultContainer.classList.add("hide");
        uitlegContainer.classList.add("hide");

        const currentQuestion = questions[currentIdx];
        const state = questionState[currentIdx];
        const counterEl = document.getElementById("question-counter");
        if (counterEl) {
            counterEl.textContent = `Vraag ${currentIdx + 1} van ${questions.length}`;
        }
        qTextElement.innerText = currentQuestion.question;
        progressBar.style.width = `${(currentIdx / questions.length) * 100}%`;
        setSceneForQuestion(currentQuestion, state.answered);
        updateNavActions();

        const LETTERS = ['A', 'B', 'C', 'D', 'E'];
        currentQuestion.answers.forEach((answer, answerIndex) => {
            const button = document.createElement("button");
            const ltr = document.createElement("span");
            ltr.className = "btn-letter";
            ltr.textContent = LETTERS[answerIndex] || String(answerIndex + 1);
            const txt = document.createElement("span");
            txt.className = "btn-text";
            txt.textContent = answer.text.replace(/^[A-E]\)\s*/, '');
            button.appendChild(ltr);
            button.appendChild(txt);
            button.classList.add("btn");
            if (state.answered) {
                button.disabled = true;
                if (answer.correct) {
                    button.classList.add("correct");
                } else if (state.selectedIndex === answerIndex) {
                    button.classList.add("wrong");
                }
            } else {
                button.style.cssText = `animation: optionIn 0.28s ${0.04 + answerIndex * 0.055}s ease both`;
                button.addEventListener('animationend', () => { button.style.animation = ''; }, { once: true });
                button.onclick = () => selectAnswer(button, answer.correct, answerIndex);
            }
            btnContainer.appendChild(button);
        });

        if (state.answered) {
            uitlegTekst.innerText = currentQuestion.uitleg;
            uitlegContainer.classList.remove("hide");
        }

        qTextElement.classList.remove("fade-in-element");
        characterImg.classList.remove("fade-in-element", "celebrate", "shake");
        void qTextElement.offsetWidth;
        void characterImg.offsetWidth;
        characterImg.src = "images/mw-neutral.webp";
        qTextElement.classList.add("fade-in-element");
        characterImg.classList.add("fade-in-element");
        if (state.answered) {
            characterImg.src = state.correct ? "images/mw-happy.webp" : "images/mw-sad.webp";
        }
    }

    function selectAnswer(btn, isCorrect, answerIndex) {
        if (btn.disabled) {
            return;
        }
        trackEvent(
            isCorrect ? "hadj-quiz/antwoord-goed" : "hadj-quiz/antwoord-fout",
            isCorrect ? "Hadj quiz antwoord goed" : "Hadj quiz antwoord fout"
        );
        trackEvent(
            isCorrect ? `hadj-quiz/v${currentIdx + 1}-goed` : `hadj-quiz/v${currentIdx + 1}-fout`,
            isCorrect ? `Vraag ${currentIdx + 1} correct` : `Vraag ${currentIdx + 1} fout`
        );

        const huidigeVraag = questions[currentIdx];
        const state = questionState[currentIdx];
        state.answered = true;
        state.selectedIndex = answerIndex;
        state.correct = isCorrect;
        setSceneForQuestion(huidigeVraag, true);

        if (isCorrect) {
            btn.classList.add("correct");
            characterImg.src = "images/mw-happy.webp";
            characterImg.classList.add("celebrate");
            if (correctSound) {
                correctSound.currentTime = 0;
                correctSound.play().catch(() => {});
            }
            if (!state.earned) {
                state.earned = true;
                score++;
                updateScoreText();
            }
        } else {
            btn.classList.add("wrong");
            characterImg.src = "images/mw-sad.webp";
            characterImg.classList.remove("shake");
            void characterImg.offsetWidth;
            characterImg.classList.add("shake");
            if (wrongSound) {
                wrongSound.currentTime = 0;
                wrongSound.play().catch(() => {});
            }
        }

        disableAllAnswerButtons();
        btnContainer.querySelectorAll("button").forEach((button, index) => {
            if (huidigeVraag.answers[index].correct) {
                button.classList.add("correct");
            }
        });
        uitlegTekst.innerText = huidigeVraag.uitleg;
        uitlegContainer.classList.remove("hide");
    }

    function showResult() {
        resetState();
        quizCompleted = true;
        uitlegContainer.classList.add("hide");
        progressBar.style.width = "100%";
        qTextElement.innerText = "Māshā Allāh! Je hebt de Kennisquiz Hadj afgerond.";
        const pct = score / questions.length;
        const scoreLabel = pct >= 0.85 ? "Uitstekend!" : pct >= 0.65 ? "Goed gedaan!" : pct >= 0.45 ? "Aardig op weg!" : "Blijf leren!";
        scoreText.innerHTML = `<div class="score-card"><div class="score-card-number">${score}<span class="score-card-denom"> / ${questions.length}</span></div><div class="score-card-label">${scoreLabel}</div><p class="score-card-dua">Moge Allah jouw kennis vermeerderen, jouw daden accepteren en iedereen die verlangt naar de hadj deze gezegende reis schenken.</p></div>`;
        resultContainer.classList.remove("hide");
        characterImg.src = "images/mw-happy.webp";
        characterImg.classList.add("celebrate");
        if (ritualScene) {
            ritualScene.setAttribute("data-scene", "complete");
            ritualScene.setAttribute("data-answered", "true");
        }
        updateNavActions();

        if (typeof confetti === "function") {
            const duration = 4000;
            const end = Date.now() + duration;
            (function frame() {
                confetti({
                    particleCount: 4,
                    angle: 60,
                    spread: 60,
                    origin: { x: 0 },
                    colors: ["#11100e", "#94692d", "#c18a2f", "#fff7e8", "#e7c47a"]
                });
                confetti({
                    particleCount: 4,
                    angle: 120,
                    spread: 60,
                    origin: { x: 1 },
                    colors: ["#11100e", "#94692d", "#c18a2f", "#fff7e8", "#e7c47a"]
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

    const startScreen = document.getElementById("start-screen");
    const quizScreen = document.getElementById("quiz-screen");
    const startQuizBtn = document.getElementById("start-quiz-btn");

    if (startQuizBtn) {
        startQuizBtn.addEventListener("click", () => {
            startScreen.classList.add("screen-fade-out");
            setTimeout(() => {
                startScreen.classList.add("hide");
                startScreen.classList.remove("screen-fade-out");
                quizScreen.classList.remove("hide");
                quizScreen.classList.add("screen-fade-in");
                showQuestion();
                if (!quizStartTracked) {
                    trackEvent("hadj-quiz/quiz-gestart", "Hadj quiz gestart");
                    quizStartTracked = true;
                }
            }, 320);
        });
    }
});
