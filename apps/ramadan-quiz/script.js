const questions = [
    {
        question: "Wat is de definitie van vasten volgens de sharia?",
        answers: [
            { text: "A) Geen vlees eten van zonsopgang tot zonsondergang.", correct: false },
            { text: "B) Allah dienen door vanaf de ochtendschemering tot zonsondergang niet te eten, drinken of geslachtsgemeenschap te hebben.", correct: true },
            { text: "C) Je onthouden van wereldse zaken gedurende de gehele maand Ramadan.", correct: false }
        ],
        uitleg: "De sharia-definitie vereist een intentie en onthouding van specifieke zaken tussen dageraad en zonsondergang."
    },
    {
        question: "Wat is het oordeel over iemand die het vasten van de Ramadan verwerpt?",
        answers: [
            { text: "A) Deze persoon wordt niet als moslim beschouwd.", correct: true },
            { text: "B) Deze persoon is een grote zondaar, maar blijft moslim.", correct: false },
            { text: "C) Deze persoon hoeft alleen een boetedoening te verrichten.", correct: false }
        ],
        uitleg: "Het vasten is een fundamentele verplichting; wie dit verwerpt, valt buiten de islam en wie het zonder geldige reden nalaat, begaat een grote zonde."
    },
    {
        question: "Wat moet een vrouw doen die vastendagen mist vanwege haar menstruatie?",
        answers: [
            { text: "A) Zij hoeft deze dagen niet in te halen.", correct: false },
            { text: "B) Zij moet deze dagen inhalen nadat de periode is geëindigd.", correct: true },
            { text: "C) Zij moet een boete (kaffārah) betalen voor elke gemiste dag.", correct: false }
        ],
        uitleg: "Inhalen is verplicht voor gemiste dagen door menstruatie- of kraamperiode zodra deze voorbij is."
    },
    {
        question: "Tot wanneer kan men de intentie maken voor de actuele vastendagen van Ramadan?",
        answers: [
            { text: "A) Alleen vóór de ochtendschemering.", correct: false },
            { text: "B) Tussen zonsondergang en de islamitische middag.", correct: true },
            { text: "C) De hele dag door, zolang men nog niets gegeten heeft.", correct: false }
        ],
        uitleg: "Voor de actuele Ramadan-dagen mag de intentie tot aan de 'islamitische middag' worden gevormd."
    },
    {
        question: "Wat wordt bedoeld met de 'islamitische middag'?",
        answers: [
            { text: "A) Precies 12:00 uur in de middag.", correct: false },
            { text: "B) De helft van de tijd tussen ochtendschemering en zonsondergang.", correct: true },
            { text: "C) Het tijdstip van het namiddaggebed ('Asr).", correct: false }
        ],
        uitleg: "De islamitische middag is precies het midden tussen het begin van de dageraad en het moment van zonsondergang."
    },
    {
        question: "Is het hardop uitspreken van de intentie verplicht?",
        answers: [
            { text: "A) Ja, zonder uitspraak is het vasten ongeldig.", correct: false },
            { text: "B) Nee, het is je innerlijke vastberadenheid, maar hardop zeggen is aanbevolen.", correct: true },
            { text: "C) Het is alleen verplicht voor mensen die voor het eerst vasten.", correct: false }
        ],
        uitleg: "De intentie zit in het hart. De mondelinge uitspraak is 'mustahab' (aanbevolen), maar niet verplicht voor de geldigheid."
    },
    {
        question: "Wat is de regel voor iemand die vergeet dat hij vast en per ongeluk eet?",
        answers: [
            { text: "A) Het vasten is direct verbroken en moet worden ingehaald.", correct: false },
            { text: "B) Het vasten blijft geldig en men moet gewoon doorgaan.", correct: true },
            { text: "C) Men moet 60 dagen achter elkaar vasten als boete.", correct: false }
        ],
        uitleg: "Eten of drinken uit pure vergeetachtigheid verbreekt het vasten niet."
    },
    {
        question: "Wat moet een hoogbejaarde doen die fysiek niet meer in staat is om te vasten?",
        answers: [
            { text: "A) Hij is vrijgesteld en hoeft niets te doen.", correct: false },
            { text: "B) Hij moet voor elke dag tweemaal een behoeftige voeden of een bedrag (fidyah) geven.", correct: true },
            { text: "C) Hij moet zijn kinderen opdracht geven namens hem te vasten.", correct: false }
        ],
        uitleg: "Dit is de verplichte compensatie (fidyah) voor wie blijvend niet kan vasten door bijvoorbeeld ouderdom."
    },
    {
        question: "Wat is 'Wājib al-Kifāyah' (collectieve plicht) met betrekking tot de maanwaarneming?",
        answers: [
            { text: "A) Iedere individuele moslim moet de maan persoonlijk proberen te zien.", correct: false },
            { text: "B) Alleen de imam van de centrale moskee is hiervoor verantwoordelijk.", correct: false },
            { text: "C) Als een voldoende aantal mensen de maan observeert, is de rest van de gemeenschap ontslagen van de plicht.", correct: true }
        ],
        uitleg: "Dit is een gemeenschappelijke plicht die vervalt voor de rest als enkelen deze uitvoeren."
    },
    {
        question: "Wat verbreekt het vasten en vereist zowel inhalen als boetedoening (kaffārah)?",
        answers: [
            { text: "A) Het eten van kiezels of papier.", correct: false },
            { text: "B) Het bewust eten, drinken of gemeenschap hebben gedurende de vastenperiode van de Ramadan zonder geldige reden.", correct: true },
            { text: "C) Het per ongeluk inslikken van water tijdens de wassing.", correct: false }
        ],
        uitleg: "Boetedoening is specifiek van toepassing op het opzettelijk verbreken van de huidige Ramadan-vasten met voedsel, drank of gemeenschap."
    },
    {
        question: "Verbreekt het doorslikken van eigen speeksel het vasten?",
        answers: [
            { text: "A) Ja, het wordt beschouwd als drinken.", correct: false },
            { text: "B) Nee, dit is toegestaan en verbreekt het vasten niet.", correct: true },
            { text: "C) Alleen als het speeksel buiten de mond is geweest en weer is opgenomen.", correct: false }
        ],
        uitleg: "Het speeksel dat zich in de mond bevindt, verbreekt het vasten niet bij doorslikken."
    },
    {
        question: "Wat verbreekt het vasten bij het poetsen van de tanden met tandpasta?",
        answers: [
            { text: "A) Niets, het is altijd toegestaan.", correct: false },
            { text: "B) Als er iets van de pasta of de smaak in de keel terechtkomt.", correct: true },
            { text: "C) Het is alleen toegestaan als men de tanden daarna drie keer spoelt.", correct: false }
        ],
        uitleg: "Als stoffen of smaken de keel bereiken, is het vasten verbroken."
    },
    {
        question: "Wat is de 'boetedoening' (kaffārah) voor het opzettelijk verbreken van een Ramadan-vastendag?",
        answers: [
            { text: "A) 30 dagen achtereenvolgens vasten.", correct: false },
            { text: "B) 60 dagen achtereenvolgens vasten of 60 behoeftigen voeden.", correct: true },
            { text: "C) 10 arme mensen kleden.", correct: false }
        ],
        uitleg: "De kaffārah bestaat uit 60 opeenvolgende dagen vasten; als dat niet kan, moet men 60 armen voeden."
    },
    {
        question: "Wanneer moet men stoppen met eten voor de suḥūr?",
        answers: [
            { text: "A) Bij het horen van de Adhān (oproep tot het gebed).", correct: false },
            { text: "B) Bij het aanbreken van de ochtendschemering (fadjr).", correct: true },
            { text: "C) Wanneer de zon opkomt.", correct: false }
        ],
        uitleg: "Het vasten begint strikt bij de ochtendschemering."
    },
    {
        question: "Wat is de status van roddelen tijdens het vasten?",
        answers: [
            { text: "A) Het verbreekt het vasten onmiddellijk.", correct: false },
            { text: "B) Het verbreekt het vasten niet, maar is een grote zonde en maakt het vasten afkeurenswaardig (makrūh).", correct: true },
            { text: "C) Het heeft geen invloed op het vasten, zolang men niet liegt.", correct: false }
        ],
        uitleg: "Roddelen verbreekt het vasten juridisch niet, maar ontneemt het wel zijn spirituele licht en waarde."
    },
    {
        question: "Wanneer is een zieke vrijgesteld van het vasten?",
        answers: [
            { text: "A) Bij elke vorm van ongemak of lichte hoofdpijn.", correct: false },
            { text: "B) Alleen als een deskundige moslimarts (die geen zondaar is) adviseert dat vasten schadelijk is.", correct: true },
            { text: "C) Als men zich simpelweg niet fit voelt.", correct: false }
        ],
        uitleg: "Er moet een sterk vermoeden van schade zijn, idealiter bevestigd door een betrouwbare moslimarts."
    },
    {
        question: "Verbreekt het toedienen van neus- of oordruppels het vasten?",
        answers: [
            { text: "A) Oordruppels verbreken het wel, neusdruppels niet.", correct: false },
            { text: "B) Beide verbreken het vasten als ze intern doordringen.", correct: true },
            { text: "C) Oordruppels verbreken het vasten alleen als het trommelvlies doorboord is.", correct: false }
        ],
        uitleg: "Oliedruppels in de oren of neusdruppels verbreken het vasten en inhalen is vereist."
    },
    {
        question: "Hoe zit het met de vastenplicht voor kinderen?",
        answers: [
            { text: "A) Vasten is verplicht vanaf zeven jaar.", correct: false },
            { text: "B) Het vasten is pas verplicht na het bereiken van de puberteit, maar oudere kinderen moeten aangemoedigd worden te vasten.", correct: true },
            { text: "C) De verplichting van het vasten geldt pas na het huwelijk.", correct: false }
        ],
        uitleg: "Het vasten is niet verplicht voor kinderen die nog niet de puberteit hebben bereikt, maar oudere kinderen die kunnen vasten moeten sterk worden aangemoedigd."
    },
    {
        question: "Wat is de minimumbepaling voor reizen om vrijgesteld te zijn van vasten en wat is het advies?",
        answers: [
            { text: "A) Elke afstand geldt als reis en men moet altijd doorvasten.", correct: false },
            { text: "B) Reizen is gedefinieerd als een tocht van minstens drie dagen (ongeveer 92 km); als het geen kwaad kan, is vasten beter, maar bij moeilijkheid mag men het vasten verbreken.", correct: true },
            { text: "C) Men moet bij elke reis het vasten verbreken.", correct: false }
        ],
        uitleg: "Reizen wordt omschreven als een tocht met een afstand van drie dagen; het is beter te vasten als het geen kwaad kan, maar wanneer het reizen moeilijk is mag men het vasten laten en later inhalen."
    },
    {
        question: "Wat is volgens de overleveringen de aanbevolen manier om met de suḥūr en de ifṭār om te gaan?",
        answers: [
            { text: "A) Suḥūr vroeg nemen en ifṭār uitstellen.", correct: false },
            { text: "B) Suḥūr uitstellen tot vlak voor de dageraad en ifṭār zo snel mogelijk verrichten na zonsondergang.", correct: true },
            { text: "C) Er is geen specifieke aanbeveling.", correct: false }
        ],
        uitleg: "De Profeet, vrede zij met hem, zei dat het volk in goede staat blijft zolang ze de ifṭār bespoedigen en de suḥūr uitstellen; het is een soenna om de suḥūr laat te nemen en de ifṭār snel te doen."
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
