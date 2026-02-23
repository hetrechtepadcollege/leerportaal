// Jouw vragenblok met consistente namen: 'question' en 'answers'
const questions = [
    {
        question: "In welke maand van de islamitische kalender begint de Ramadan?",
        answers: [
            { text: "8e maand", correct: false },
            { text: "9e maand", correct: true },
            { text: "10e maand", correct: false }
        ]
    },
    {
        question: "Wat is volgens de Koran het belangrijkste doel van het vasten?",
        answers: [
            { text: "Honger lijden uit medelijden met arme mensen", correct: false },
            { text: "Leren om beter naar Allah te luisteren en dichter bij Hem te komen", correct: true },
            { text: "Afvallen om gezond te blijven", correct: false },
        ]
    },
    { 
        question: "De Profeet, vrede zij met hem, zei dat het vasten de 'helft' is van een belangrijke eigenschap. Welke eigenschap is dit?",
        answers: [
            { text: "Geduld", correct: true },
            { text: "Dankbaarheid", correct: false },
            { text: "Liefdadigheid", correct: false },
        ]
    },
    { 
        question: "Wanneer begint de vastendag in Ramadan?",
        answers: [
            { text: "Als je wakker wordt", correct: false },
            { text: "Bij de ochtendschemering ", correct: true },
            { text: "Vanaf zonsopkomst", correct: false },
        ]
    },
    { 
        question: "Wat is een belangrijke voorwaarde voordat je begint met vasten?",
        answers: [
            { text: "Dat je veel water hebt gedronken", correct: false },
            { text: "Dat je je tanden hebt gepoetst", correct: false },
            { text: "Dat je de intentie hebt gemaakt", correct: true },
        ]
    },
    { 
        question: "Als je per ongeluk iets eet of drinkt omdat je bent vergeten dat je vast, wat moet je dan doen?",
        answers: [
            { text: "Een boete betalen aan de armen", correct: false },
            { text: "Meteen stoppen en gewoon verder gaan met vasten", correct: true },
            { text: "De rest van de dag stoppen met vasten en de vastendag later inhalen", correct: false },
        ]
    },
     { 
        question: "Vanaf welk moment mag je je vasten verbreken?",
        answers: [
            { text: "Zodra je honger krijgt", correct: false },
            { text: "Als je al je werk van de dag af hebt", correct: false },
            { text: "Zodra de zon is ondergegaan", correct: true },
        ]
    },
    { 
        question: "Hoe heet de maaltijd die moslims eten vlak vóór het vasten begint?",
        answers: [
            { text: "Ifṭār", correct: false },
            { text: "Suḥūr", correct: true },
            { text: "Lunch", correct: false },
        ]
    },
    { 
        question: "Wat is volgens de soenna (profetische traditie) een aanbevolen manier om je vasten te verbreken?",
        answers: [
            { text: "Met een uitgebreide maaltijd", correct: false },
            { text: "Met soep", correct: false },
            { text: "Met dadels en water", correct: true },
        ]
    },
    { 
        question: "Welk gebed wordt er speciaal in de avonden van de Ramadan gebeden", 
        answers: [
            {text: "Het Witr-gebed", correct: false},
            {text: "Het Eid-gebed", correct: false},
            {text: "Het Tarāwīḥ-gebed", correct: true}
        ] 
    },
         {
        question: "Welke bijzondere nacht valt in de laatste 10 dagen van de Ramadan?",
        answers: [
            { text: "Laylatul Qadr (De Waardevolle Nacht)", correct: true },
            { text: "Laylatul Miʾradj (De Nacht van de Hemelreis)", correct: false },
            { text: "Laylatul Bar‘at (De Nacht van de Verlossing)", correct: false }        
        ]
    },
    { 
        question: "Welke uitspraak over Laylat al-Qadr (De Waardevolle Nacht) is juist?", 
        answers: [
            {text: "Het is de eerste nacht van de Ramadan", correct: false},
            {text: "Het is een nacht in Ramadan die beter is dan duizend maanden", correct: true},
            {text: "Het is de laatste nacht van de Ramadan", correct: false}
        ] 
    },
    { 
        question: "Wat is de bijzondere band tussen de Koran en de maand Ramadan?", 
        answers: [
            {text: "De Koran mag alleen in de Ramadan gelezen worden", correct: false},
            {text: "Je mag de Koran alleen ’s nachts lezen in de Ramadan.", correct: false},
            {text: "De Koran werd voor het eerst neergezonden in de maand Ramadan", correct: true}
        ] 
    },
    { 
        question: "Waarom wordt aangeraden om in Ramadan extra veel Koran te lezen?", 
        answers: [
            {text: "Omdat je anders niet mee mag doen met ʿEid al-Fitr", correct: false},
            {text: "Omdat je dan geen andere boeken meer mag lezen", correct: false},
            {text: "Omdat Ramadan de maand van de Koran is en het je dichter bij Allah brengt", correct: true}
        ] 
    },
     { 
        question: "Welke van deze daden past het beste bij goed gedrag in Ramadan?", 
        answers: [
            {text: "Veel gamen en tv-kijken om de tijd sneller te laten gaan", correct: false},
            {text: "Zoveel mogelijk slapen zodat je geen honger voelt", correct: false},
            {text: "Geduldig blijven, vriendelijk zijn en ruzie proberen te voorkomen", correct: true}
        ] 
    },
    { 
        question: "Wie hoeft volgens de islam niet te vasten, maar moet het later wel inhalen?", 
        answers: [
            {text: "Iemand die geen zin heeft, want het is niet verplicht", correct: false},
            {text: "Iemand die ziek is of op reis is", correct: true},
            {text: "Iedereen die onder de 18 jaar is", correct: false}
        ] 
    },
     { 
        question: "Wat is 'Iʾtikāf', iets wat vaak in de laatste tien dagen van de Ramadan wordt gedaan?", 
        answers: [
            {text: "Samen met de familie uitgebreid eten tijdens de ifṭār", correct: false},
            {text: "Een spirituele retraite (verblijf) in de moskee om Allah te gedenken", correct: true},
            {text: "Langs de deuren van mensen gaan om geld in te zamelen voor de armen", correct: false}] 
    },
     { 
        question: "Wat is de naam van de poort in het Paradijs speciaal voor vastenden?", 
        answers: [
            {text: "Ar-Rayyaan", correct: true},
            {text: "Al-Firdaws", correct: false},
            {text: "As-Salaam", correct: false}] 
    },
   {
        question: "Wat vieren we aan het einde van de maand Ramadan?",
        answers: [
            { text: "Offerfeest", correct: false },
            { text: "ʿEid al-Fiṭr", correct: true },
            { text: "Islamitische Nieuwjaar", correct: false }
        ]
    },
     {
        question: "Na de Ramadan komt de maand Shawwāl. Waarom vasten veel moslims in die maand nog 6 extra dagen?",
        answers: [
            { text: "Omdat het verplicht is voor iedereen die de Ramadan heeft afgemaakt", correct: false },
            { text: "Omdat ze de Ramadan missen", correct: false },
            { text: "Om een beloning te krijgen alsof je een heel jaar hebt gevast", correct: true }
        ]
    },
   
    
];


const characterImg = document.getElementById('quiz-character');

const resultContainer = document.getElementById('result-container');
const restartBtn = document.getElementById('restart-btn');

let currentIdx = 0;
let score = 0;
let firstTry = true;
let completionTracked = false;

window.restartQuiz = function restartQuiz() {
    location.reload();
};

document.addEventListener('DOMContentLoaded', () => {
    // Ensure proper alignment and nesting of functions within the DOMContentLoaded event handler.
    // Fix unmatched brackets and misplaced code.

    const qTextElement = document.getElementById('question-text');
    const btnContainer = document.getElementById('answer-buttons');
    const scoreText = document.getElementById('score-display');
    const progressBar = document.getElementById('progress-bar');
    const correctSound = document.getElementById('correct-sound');
    const wrongSound = document.getElementById('wrong-sound');
    if (restartBtn) {
        restartBtn.addEventListener('click', window.restartQuiz);
    }

    function trackQuizCompleted() {
        if (completionTracked) {
            return;
        }
        if (window.goatcounter && typeof window.goatcounter.count === 'function') {
            window.goatcounter.count({
                path: 'quiz-voltooid',
                title: 'Leerling heeft de quiz afgerond',
                event: true,
            });
            completionTracked = true;
        }
    }

    function showQuestion() {
    resetState();
    firstTry = true;
    let currentQuestion = questions[currentIdx];

    qTextElement.innerText = currentQuestion.question;
    progressBar.style.width = (currentIdx / questions.length) * 100 + "%";

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        button.onclick = () => selectAnswer(button, answer.correct);
        btnContainer.appendChild(button);
    });

    // 1. Verwijder de animatie classes van de tekst en afbeelding
    qTextElement.classList.remove('fade-in-element');
    characterImg.classList.remove('fade-in-element', 'celebrate', 'shake');

    // 2. Forceer een 'reflow' (nodig om de animatie opnieuw te triggeren)
    void qTextElement.offsetWidth; 
    void characterImg.offsetWidth;

    // 3. Stel de neutrale afbeelding in
    characterImg.src = 'images/neutral.png';

    // 4. Voeg de animatie class weer toe
    qTextElement.classList.add('fade-in-element');
    characterImg.classList.add('fade-in-element');
}
    function resetState() {
        while (btnContainer.firstChild) {
            btnContainer.removeChild(btnContainer.firstChild);
        }
    }

    function disableAllAnswerButtons() {
        const answerButtons = btnContainer.querySelectorAll('button');
        answerButtons.forEach(button => {
            button.disabled = true;
        });
    }

    function selectAnswer(btn, isCorrect) {
        if (btn.disabled) {
            return;
        }

        if (isCorrect) {
            btn.classList.add('correct');
            disableAllAnswerButtons();

            characterImg.src = 'images/happy.png';
            characterImg.classList.add('celebrate');

            if (correctSound) {
                correctSound.currentTime = 0;
                correctSound.play().catch(() => {});
            }

            if (firstTry) {
                score++;
                scoreText.innerText = `Score: ${score}`;
            }

            setTimeout(() => {
                currentIdx++;
                if (currentIdx < questions.length) {
                    showQuestion();
                } else {
                    showResult();
                }
            }, 1000);
            return;
        }

        btn.classList.add('wrong');
        btn.disabled = true;
        firstTry = false;

        characterImg.src = 'images/sad.png';
        characterImg.classList.remove('shake');
        void characterImg.offsetWidth;
        characterImg.classList.add('shake');

        if (wrongSound) {
            wrongSound.currentTime = 0;
            wrongSound.play().catch(() => {});
        }
    }

    function showResult() {
    resetState();

    if (progressBar) {
        progressBar.style.width = "100%";
    }

    // 1. Toon de hoofdboodschap in de titel
    qTextElement.innerText = `Māshā Allāh! Je hebt de Ramadan Kennisquiz afgerond. 👍🏽`;
    
    // 2. Toon de score en de wens in de score-sectie
    scoreText.innerHTML = `Eindscore: ${score} van de ${questions.length}<br><br>
    Moge Allah jouw Ramadan vullen met kennis, begrip, geduld en veel goeds. Āmīn!`;

    // 3. MAAK DE RESULT CONTAINER ZICHTBAAR
    resultContainer.classList.remove('hide');

    // 4. Afbeelding aanpassen
    characterImg.src = 'images/happy.png';
    characterImg.classList.add('celebrate');

    // 5. Confetti effect
    if (typeof confetti === 'function') {
        const duration = 3 * 1000;
        const end = Date.now() + duration;

        (function frame() {
            confetti({
                particleCount: 3,
                angle: 60,
                spread: 55,
                origin: { x: 0 },
                colors: ['#d4af37', '#ffffff', '#f1c40f']
            });
            confetti({
                particleCount: 3,
                angle: 120,
                spread: 55,
                origin: { x: 1 },
                colors: ['#d4af37', '#ffffff', '#f1c40f']
            });

            if (Date.now() < end) {
                requestAnimationFrame(frame);
            }
        }());
    }

    trackQuizCompleted();
}

    const shareBtn = document.getElementById('whatsapp-share-btn');
    if (shareBtn) {
        shareBtn.addEventListener('click', () => {
            const websiteUrl = window.location.href;
            const uitnodiging = `As-Salām ʿAlaykum! Ik heb net een leuke Ramadan kennisquiz gedaan. Wil jij je kennis ook testen? Hier vind je de quiz: ${websiteUrl}`;
            const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(uitnodiging)}`;
            window.open(whatsappUrl, '_blank');
        });
    }

    showQuestion();
});
