const questions = [
    {
        question: "Voor wie is het vasten in Ramadan verplicht?",
        answers: [
            { text: "A) Alleen voor mannen", correct: false },
            { text: "B) Voor elke volwassen en toerekeningsvatbare moslim", correct: true },
            { text: "C) Alleen voor ouderen", correct: false }
        ],
        uitleg: "Het vasten in Ramadan is verplicht voor iedere moslim die de puberteit heeft bereikt, bij verstand is en lichamelijk in staat is om te vasten. Personen die bijvoorbeeld ziek zijn of reizen, kunnen tijdelijk vrijgesteld zijn en dienen het vasten later in te halen."
    },
    {
        question: "Op welke leeftijd moeten kinderen worden aangemoedigd om te vasten?",
        answers: [
            { text: "A) 18 jaar", correct: false },
            { text: "B) 7 jaar", correct: true },
            { text: "C) Alleen als ze zelf willen", correct: false }
        ],
        uitleg: "Hoewel het vasten pas verplicht wordt na het bereiken van de puberteit, is het aanbevolen om kinderen al vanaf zevenjarige leeftijd te laten wennen aan het vasten door hen hierin aan te moedigen. Dit helpt hen om zich geleidelijk voor te bereiden op de verplichting. Vanaf tienjarige leeftijd dienen zij hierin meer aangespoord te worden, zodat zij op latere leeftijd het vasten op een verantwoorde en bewuste manier kunnen verrichten."
    },
    {
        question: "In welke soera staat dat het vasten verplicht is gemaakt?",
        answers: [
            { text: "A) Soera al-Fātiḥah", correct: false },
            { text: "B) Soera al-Baqarah", correct: true },
            { text: "C) Soera al-Kawthar", correct: false }
        ],
        uitleg: "De verplichting tot het vasten is vastgesteld door een expliciet vers uit de Koran, namelijk Soera al-Baqarah (2:183), waarin het vasten wordt voorgeschreven aan de gelovigen. Hierdoor is de verplichting van het vasten gebaseerd op onomstotelijk bewijs uit de openbaring."
    },
    {
        question: "Wat verbreekt het vasten?",
        answers: [
            { text: "A) Slapen", correct: false },
            { text: "B) Eten of drinken terwijl je weet dat je vast", correct: true },
            { text: "C) Douchen", correct: false }
        ],
        uitleg: "Het vasten wordt verbroken wanneer iemand opzettelijk eet of drinkt terwijl hij of zij zich bewust is van het vasten. Handelingen zoals slapen of douchen hebben geen invloed op de geldigheid van het vasten. Als iemand echter per ongeluk eet of drinkt uit vergetelheid, dan blijft het vasten geldig."
    },
    {
        question: "Wordt je vasten verbroken als je opzettelijk braakt en het braaksel meer is dan een mondvol?",
        answers: [
            { text: "A) Ja", correct: true },
            { text: "B) Nee", correct: false },
            { text: "C) Alleen als het weinig is", correct: false }
        ],
        uitleg: "Wanneer je opzettelijk braakt en het braaksel een mondvol of meer bedraagt, dan wordt je vasten hierdoor verbroken. Indien het minder is dan een mondvol, wordt je vasten niet verbroken. Als je echter ongewild moet braken, dan blijft je vasten geldig, ongeacht of het veel of weinig is."
    },
    {
        question: "Verbreekt het doorslikken van je eigen speeksel je vasten?",
        answers: [
            { text: "A) Ja", correct: false },
            { text: "B) Alleen een beetje", correct: false },
            { text: "C) Nee", correct: true }
        ],
        uitleg: "Het doorslikken van je eigen speeksel is een natuurlijke handeling en heeft geen invloed op de geldigheid van je vasten. Daarom wordt je vasten hierdoor niet verbroken."
    },
    {
        question: "Verbreekt het gebruik van een tandenborstel of miswāk-stokje je vasten?",
        answers: [
            { text: "A) Ja", correct: false },
            { text: "B) Nee", correct: true },
            { text: "C) Alleen in de middag", correct: false }
        ],
        uitleg: "Het gebruik van een tandenborstel of miswāk-stokje verbreekt je vasten niet. Wanneer je echter tandpasta gebruikt, dien je extra voorzichtig te zijn dat je niets doorslikt. Als er tandpasta of water in de keel terechtkomt en wordt doorgeslikt, dan wordt je vasten hierdoor verbroken."
    },
    {
        question: "Wordt je vasten verbroken als je tranen inslikt en de zoutigheid ervan in je mond of keel kunt proeven?",
        answers: [
            { text: "A) Ja", correct: true },
            { text: "B) Nee", correct: false },
            { text: "C) Alleen als het na zonsondergang gebeurt", correct: false }
        ],
        uitleg: "Als er een of twee tranen in je mond terechtkomen en je deze inslikt, dan wordt je vasten niet verbroken. Als het echter zoveel tranen zijn dat je de zoutigheid ervan in je hele mond kunt proeven en je deze vervolgens inslikt, dan wordt je vasten hierdoor wel verbroken. Voor zweet geldt dezelfde regel."
    },
    {
        question: "Verbreekt eten of drinken uit vergetelheid je vasten?",
        answers: [
            { text: "A) Ja", correct: false },
            { text: "B) Nee", correct: true },
            { text: "C) Alleen bij drinken", correct: false }
        ],
        uitleg: "Wanneer je uit vergetelheid eet of drinkt terwijl je vast, wordt je vasten hierdoor niet verbroken. Zodra je je herinnert dat je vast, dien je direct te stoppen."
    },
    {
        question: "Wat moet je doen als je per ongeluk iets hebt ingeslikt tijdens het vasten (bijvoorbeeld water tijdens het spoelen van de mond)?",
        answers: [
            { text: "A) Je vasten blijft geldig", correct: false },
            { text: "B) Je vasten is verbroken en je moet deze dag inhalen (qaḍā)", correct: true },
            { text: "C) Je moet direct boetedoening (kaffārah) verrichten", correct: false }
        ],
        uitleg: "Wanneer je per ongeluk iets inslikt, wordt je vasten verbroken en dien je deze dag in te halen (qaḍā), maar boetedoening (kaffārah) is niet verplicht. Dit in tegenstelling tot eten of drinken uit vergeetachtigheid, waarbij je vasten geldig blijft en je direct moet stoppen."
    },
    {
        question: "Moet je iemand eraan herinneren als hij uit vergeetachtigheid eet tijdens het vasten?",
        answers: [
            { text: "A) Ja, altijd", correct: false },
            { text: "B) Nee, nooit", correct: false },
            { text: "C) Het hangt af van zijn toestand", correct: true }
        ],
        uitleg: "Als iemand uit vergeetachtigheid eet of drinkt terwijl hij vast, dient hij eraan herinnerd te worden, tenzij hij lichamelijk zwak is en het vasten hem ernstig zou belasten. In dat geval kan het beter zijn om hem niet te herinneren."
    },
    {
        question: "Wordt je vasten verbroken als je noodgedwongen braakt en het braaksel een mondvol of meer bedraagt?",
        answers: [
            { text: "A) Ja", correct: false },
            { text: "B) Nee", correct: true },
            { text: "C) Alleen als je daarna misselijk blijft", correct: false }
        ],
        uitleg: "Wanneer je noodgedwongen moet braken, wordt je vasten niet verbroken, ook al bedraagt het braaksel een mondvol of minder. Alleen wanneer het braken opzettelijk wordt opgewekt en een mondvol of meer bedraagt, wordt je vasten hierdoor verbroken."
    },
    {
        question: "Verbreekt een injectie je vasten?",
        answers: [
            { text: "A) Ja, omdat er iets in het lichaam wordt ingebracht", correct: false },
            { text: "B) Nee, omdat het niet via een lichaamsopening naar binnen gaat", correct: true },
            { text: "C) Ja, alleen als het een grote hoeveelheid is", correct: false }
        ],
        uitleg: "Een injectie verbreekt je vasten niet, omdat deze niet via een lichaamsopening naar binnen gaat. De sharia baseert haar oordelen op wat uiterlijk waarneembaar is."
    },
    {
        question: "Wat gebeurt er als menstruatie begint tijdens het vasten?",
        answers: [
            { text: "A) Het vasten blijft geldig", correct: false },
            { text: "B) Het vasten wordt verbroken", correct: true },
            { text: "C) Alleen makrūh (afgekeurd)", correct: false }
        ],
        uitleg: "Wanneer de menstruatie begint tijdens het vasten, wordt het vasten verbroken en dient deze dag later te worden ingehaald (qaḍā)."
    },
    {
        question: "Wordt je vasten verbroken als er tijdens wuḍū (kleine wassing) water in je keel komt terwijl je weet dat je vast?",
        answers: [
            { text: "A) Nee", correct: false },
            { text: "B) Ja", correct: true },
            { text: "C) Alleen bij veel water", correct: false }
        ],
        uitleg: "Als er tijdens wuḍū water in je keel terechtkomt terwijl je weet dat je vast, wordt je vasten hierdoor verbroken en dien je deze dag in te halen (qaḍā). Boetedoening (kaffārah) is niet verplicht."
    },
    {
        question: "Verbreekt het doorslikken van slijm je vasten?",
        answers: [
            { text: "A) Ja", correct: false },
            { text: "B) Nee", correct: true },
            { text: "C) Alleen bij ziekte", correct: false }
        ],
        uitleg: "Het doorslikken van slijm verbreekt je vasten niet, zolang het niet eerst wordt uitgespuugd en daarna weer ingeslikt."
    },
    {
        question: "Wat is makrūh (afgekeurd) tijdens het vasten?",
        answers: [
            { text: "A) Slapen", correct: false },
            { text: "B) Iets proeven zonder reden", correct: true },
            { text: "C) Bidden", correct: false }
        ],
        uitleg: "Met proeven wordt hier niet bedoeld dat je een hap neemt en deze doorslikt. Het gaat erom dat je bijvoorbeeld met het puntje van je tong iets proeft en dit daarna weer uitspuugt zonder het door te slikken. Hoewel het vasten hierdoor niet wordt verbroken, is dit zonder een geldige reden makrūh (afgekeurd)."
    },
    {
        question: "Wanneer mag een zieke het vasten laten?",
        answers: [
            { text: "A) Als hij geen zin heeft", correct: false },
            { text: "B) Als het vasten zijn ziekte kan verergeren", correct: true },
            { text: "C) Als hij moe is", correct: false }
        ],
        uitleg: "Een zieke mag het vasten laten wanneer er gegronde vrees is dat het vasten zijn ziekte zal verergeren of het herstel zal vertragen. Deze dagen dienen later te worden ingehaald (qaḍā)."
    },
    {
        question: "Mag iemand fidyah (compensatie) geven als hij nooit meer kan vasten?",
        answers: [
            { text: "A) Nee", correct: false },
            { text: "B) Ja", correct: true },
            { text: "C) Alleen bij ziekte", correct: false }
        ],
        uitleg: "Iemand die nooit meer in staat is om te vasten, zoals een zeer oude en zwakke persoon (shaykh fānī), mag fidyah (compensatie) geven voor elke gemiste vastendag."
    },
    {
        question: "Mag een reiziger het vasten laten tijdens Ramadan?",
        answers: [
            { text: "A) Nee", correct: false },
            { text: "B) Ja", correct: true },
            { text: "C) Alleen 's nachts", correct: false }
        ],
        uitleg: "Een reiziger mag het vasten laten, mits de vasten van de Ramadan voor hem verplicht is geworden terwijl hij zich al in de staat van reis (safar) bevond. Als het vasten voor hem verplicht werd terwijl hij nog geen reiziger was en hij daarna op reis gaat, dan dient hij die dag te vasten."
    },
    {
        question: "Mag je het vasten laten als je bang bent om te sterven door honger of dorst?",
        answers: [
            { text: "A) Nee", correct: false },
            { text: "B) Ja", correct: true },
            { text: "C) Alleen bij hitte", correct: false }
        ],
        uitleg: "Wanneer er gegronde vrees bestaat voor levensgevaar door honger of dorst, is het toegestaan om het vasten te laten."
    }
];

let currentIdx = 0;
let score = 0;
let firstTry = true;
let completionTracked = false;
let completionTrackingRequested = false;
let completionTrackingRetries = 0;

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
        });
    }

    function trackQuizCompleted() {
        if (completionTracked) {
            return;
        }
        completionTrackingRequested = true;

        if (window.goatcounter && typeof window.goatcounter.count === "function") {
            window.goatcounter.count({
                path: "quiz-voltooid",
                title: "Deelnemer heeft de quiz afgerond",
                event: true
            });
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
});
