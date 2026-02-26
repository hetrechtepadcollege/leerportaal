const questions = [
     {
        question: "Verbreekt eten of drinken uit vergetelheid het vasten?",
        answers: [
            { text: "A) Ja", correct: false },
            { text: "B) Nee", correct: true },
            { text: "C) Alleen bij drinken", correct: false }
        ],
        uitleg: "Wanneer je uit vergetelheid eet of drinkt terwijl je vast, wordt het vasten hierdoor niet verbroken. Zodra je je herinnert dat je vast, dien je direct te stoppen."
    },
    {
        question: "Wat moet je doen als je per ongeluk iets hebt ingeslikt tijdens het vasten (bijvoorbeeld water tijdens het spoelen van de mond)?",
        answers: [
            { text: "A) Het vasten blijft geldig", correct: false },
            { text: "B) Het vasten is verbroken en je moet deze dag inhalen (qaḍā)", correct: true },
            { text: "C) Je moet direct boetedoening (kaffārah) verrichten", correct: false }
        ],
        uitleg: "Wanneer je per ongeluk iets inslikt, wordt je vasten verbroken en dien je deze dag in te halen (qaḍā), maar boetedoening (kaffārah) is niet verplicht. Dit in tegenstelling tot eten of drinken uit vergeetachtigheid, waarbij je vasten geldig blijft en je direct moet stoppen."
    },
     {
        question: "Is het proeven van voedsel zonder reden tijdens het vasten toegestaan?",
        answers: [
            { text: "A) Ja, en het heeft geen invloed op je vasten", correct: false },
            { text: "B) Nee, het is makrūh (afgekeurd)", correct: true },
            { text: "C) Alleen 's avonds", correct: false }
        ],
        uitleg: "Het proeven van voedsel zonder geldige reden is makrūh (afgekeurd), zelfs wanneer je het daarna uitspuugt en niets doorslikt."
    },
    {
        question: "Verbreekt het doorslikken van je eigen speeksel het vasten?",
        answers: [
            { text: "A) Ja", correct: false },
            { text: "B) Alleen een beetje", correct: false },
            { text: "C) Nee", correct: true }
        ],
        uitleg: "Het doorslikken van je eigen speeksel is een natuurlijke handeling en heeft geen invloed op de geldigheid van je vasten. Daarom wordt je vasten hierdoor niet verbroken."
    },
    {
        question: "Verbreekt het aanbrengen van olie op het lichaam het vasten?",
        answers: [
            { text: "A) Ja", correct: false },
            { text: "B) Nee", correct: true },
            { text: "C) Alleen bij geurige olie", correct: false }
        ],
        uitleg: "Het aanbrengen van olie op het lichaam verbreekt het vasten niet, omdat de olie niet via een open lichaamsopening naar de maag binnendringt. Zelfs als de smaak van de olie in de keel wordt waargenomen, blijft het vasten geldig."
    },
    {
        question: "Verbreekt roken (sigaret, waterpijp, shag, sigaar etc.) het vasten?",
        answers: [
            { text: "A) Ja", correct: true },
            { text: "B) Nee", correct: false },
            { text: "C) Alleen bij veel rook", correct: false }
        ],
        uitleg: "Elke vorm van rook die bewust wordt ingeademd bereikt de keel en verbreekt het vasten."
    },
    {
        question: "Verbreekt het gebruik van een tandenborstel of miswāk-stokje het vasten?",
        answers: [
            { text: "A) Ja", correct: false },
            { text: "B) Nee", correct: true },
            { text: "C) Alleen in de middag", correct: false }
        ],
        uitleg: "Het gebruik van een tandenborstel of miswāk-stokje verbreekt je vasten niet. Wanneer je echter tandpasta gebruikt, dien je extra voorzichtig te zijn dat je niets doorslikt. Als er tandpasta of water in de keel terechtkomt en wordt doorgeslikt, dan wordt je vasten hierdoor verbroken."
    },
    {
        question: "Verbreekt het inbrengen van medicatie via de neus het vasten?",
        answers: [
            { text: "A) Ja", correct: true },
            { text: "B) Nee", correct: false },
            { text: "C) Alleen 's nachts", correct: false }
        ],
        uitleg: "Het inbrengen van medicatie via de neus verbreekt je vasten, omdat dit via een open lichaamsopening naar de keel of het hoofd kan bereiken. Hierdoor wordt het vasten ongeldig."
    },
     {
        question: "Verbreekt het binnendringen van water in het oor het vasten?",
        answers: [
            { text: "A) Ja", correct: false },
            { text: "B) Nee", correct: true },
            { text: "C) Alleen bij veel water", correct: false }
        ],
        uitleg: "Het binnendringen van water in het oor verbreekt het vasten niet. Olieachtige medicatie, zoals oordruppels op oliebasis, verbreekt het vasten wél. Hoewel sommige hedendaagse geleerden op basis van moderne medische inzichten anders oordelen, dient men zich te houden aan de sharia, die haar oordelen baseert op wat uiterlijk waarneembaar is."
    },
    {
        question: "Verbreekt een injectie het vasten?",
        answers: [
            { text: "A) Ja, omdat er iets in het lichaam wordt ingebracht", correct: false },
            { text: "B) Ja, alleen als het een grote hoeveelheid is", correct: false },
            { text: "C) Nee, omdat het niet via een lichaamsopening naar binnen gaat", correct: true }
        ],
        uitleg: "Een injectie verbreekt je vasten niet, omdat deze niet via een lichaamsopening naar binnen gaat. De Sharia baseert haar oordelen op wat uiterlijk waarneembaar is."
    },
    {
        question: "Verbreekt het vasten als je medicatie in de ogen aanbrengt?",
        answers: [
            { text: "A) Ja", correct: false },
            { text: "B) Nee", correct: true },
            { text: "C) Alleen bij pijn", correct: false }
        ],
        uitleg: "Het aanbrengen van medicatie in de ogen verbreekt het vasten niet, zelfs als je de smaak ervan in je keel kunt proeven. Het dient duidelijk te zijn dat de mens verplicht is zich te houden aan de Sharia en niet aan wetenschappelijke bevindingen, aangezien de Sharia haar oordelen baseert op wat uiterlijk waarneembaar is."
    },
    {
        question: "Verbreekt een infuus het vasten?",
        answers: [
            { text: "A) Ja", correct: false },
            { text: "B) Nee", correct: true },
            { text: "C) Alleen als het een voedende werking heeft", correct: false }
        ],
        uitleg: "Een infuus verbreekt het vasten niet, omdat het niet via een open lichaamsopening naar binnen gaat, maar direct in de bloedbaan terechtkomt, ook al heeft het een voedende werking. Het is echter aan te raden om dit, indien niet noodzakelijk, te vermijden tijdens het vasten."
    },
    {
        question: "Wordt het vasten verbroken als je bloed doorslikt?",
        answers: [
            { text: "A) Nee", correct: false },
            { text: "B) Ja", correct: false },
            { text: "C) Alleen als je de smaak ervan kunt proeven en het doorslikt", correct: true }
        ],
        uitleg: "Als er meer bloed dan speeksel in je mond is, en dat merk je doordat je de smaak ervan kunt proeven, en je slikt het vervolgens door, dan wordt je vasten hierdoor verbroken. Is dit niet het geval, dan wordt het vasten niet verbroken."
    },
    {
        question: "Wat gebeurt er als menstruatie begint tijdens het vasten?",
        answers: [
            { text: "A) Het vasten wordt verbroken", correct: true },
            { text: "B) Het vasten blijft geldig", correct: false },
            { text: "C) Het vasten blijft geldig, maar is minder goed beloond", correct: false }
        ],
        uitleg: "Wanneer de menstruatie begint tijdens het vasten, wordt het vasten verbroken en dient deze dag later te worden ingehaald (qaḍā)."
    },
    {
        question: "Verbreekt geslachtsgemeenschap het vasten?",
        answers: [
            { text: "A) Nee", correct: false },
            { text: "B) Ja", correct: true },
            { text: "C) Alleen bij zaadlozing", correct: false }
        ],
        uitleg: "Geslachtsgemeenschap verbreekt het vasten ongeacht zaadlozing."
    },
    {
        question: "Verbreekt liegen het vasten?",
        answers: [
            { text: "A) Ja", correct: false },
            { text: "B) Nee", correct: true },
            { text: "C) Alleen bij opzet", correct: false }
        ],
        uitleg: "Liegen verbreekt het vasten niet, maar het vermindert de beloning van je vasten."
    },
    {
        question: "Wie moet qaḍā (inhalen van gemiste vasten) verrichten?",
        answers: [
            { text: "A) Iemand die een verplichte vastendag heeft gemist", correct: true },
            { text: "B) Iemand die een vrijwillige vastendag heeft gemist", correct: false },
            { text: "C) Alleen kinderen", correct: false }
        ],
        uitleg: "Iemand die een verplichte vastendag heeft gemist, dient deze later in te halen (qaḍā)."
    },
    {
        question: "Wanneer is boetedoening (kaffārah) verplicht?",
        answers: [
            { text: "A) Als je opzettelijk eet", correct: false },
            { text: "B) Als je opzettelijk eet en niet op reis bent", correct: false },
            { text: "C) Als je vanaf de avond de intentie hebt gevormd om te vasten, niet op reis bent en vervolgens opzettelijk eet", correct: true }
        ],
        uitleg: "Boetedoening (kaffārah) is verplicht wanneer je vanaf de avond de intentie hebt gevormd om te vasten, je geen reiziger bent en vervolgens overdag in Ramadan opzettelijk het vasten verbreekt door te eten, drinken of geslachtsgemeenschap te hebben zonder geldige reden. In dit geval zijn zowel het inhalen van die dag (qaḍā) als boetedoening (kaffārah) verplicht."
    }
];

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
            const uitnodiging = `As-Salām ʿAlaykum! Ik heb net een leuke Ramadan kennisquiz gedaan. Wil jij je kennis ook testen? Hier vind je de quiz: ${websiteUrl}`;
            const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(uitnodiging)}`;
            window.open(whatsappUrl, "_blank");
            trackEvent("ramadan-quiz-wel-niet/gedeeld-whatsapp", "Ramadan quiz wel/niet gedeeld via WhatsApp");
        });
    }

    function trackQuizCompleted() {
        if (completionTracked) {
            return;
        }
        completionTrackingRequested = true;

        if (trackEvent("ramadan-quiz-wel-niet/quiz-voltooid", "Deelnemer heeft de quiz wel/niet afgerond")) {
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
            isCorrect ? "ramadan-quiz-wel-niet/antwoord-goed" : "ramadan-quiz-wel-niet/antwoord-fout",
            isCorrect ? "Ramadan quiz antwoord goed" : "Ramadan quiz antwoord fout"
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
        qTextElement.innerText = "Māshā Allāh! Je hebt de Ramadan Kennisquiz afgerond.";
        scoreText.innerHTML = `Eindscore: ${score} van de ${questions.length}<br><br>Moge Allah jouw Ramadan vullen met kennis, begrip, geduld en veel goeds. Āmīn!`;
        resultContainer.classList.remove("hide");
        characterImg.src = "images/mw-happy.png";
        characterImg.classList.add("celebrate");

        if (typeof confetti === "function") {
            const duration = 3000;
            const end = Date.now() + duration;
            (function frame() {
                confetti({
                    particleCount: 3,
                    angle: 60,
                    spread: 55,
                    origin: { x: 0 },
                    colors: ["#d4af37", "#ffffff", "#f1c40f"]
                });
                confetti({
                    particleCount: 3,
                    angle: 120,
                    spread: 55,
                    origin: { x: 1 },
                    colors: ["#d4af37", "#ffffff", "#f1c40f"]
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
        trackEvent("ramadan-quiz-wel-niet/quiz-gestart", "Ramadan quiz wel/niet gestart");
        quizStartTracked = true;
    }
});
