const activeQuestions = [
    {
        question: "Wat is kaffārah?",
        answers: [
            { text: "A) Het inhalen van een gemiste vastendag", correct: false },
            { text: "B) Een verplichte, zware boetedoening voor het opzettelijk ongeldig maken van het vasten", correct: true },
            { text: "C) Een vrijwillige liefdadigheid", correct: false }
        ],
        uitleg: "Kaffārah is een verplichte boetedoening: een slaaf vrijkopen; als dat niet kan, 60 dagen aaneengesloten vasten én de verbroken dag (qaḍā) inhalen; als dat ook niet kan vanwege een geldige reden volgens de Sharia, 60 behoeftigen voeden."
    },
    {
        question: "Wat betekent qaḍā?",
        answers: [
            { text: "A) Een vrijwillige extra vastendag", correct: false },
            { text: "B) Een verplichte boetedoening", correct: false },
            { text: "C) Het later inhalen van een gemiste of ongeldig gemaakte vastendag", correct: true }
        ],
        uitleg: "Qaḍā betekent dat je een vastendag die je hebt gemist of ongeldig hebt gemaakt, op een andere dag moet inhalen door opnieuw te vasten."
    },
    {
        question: "Blijft het vasten geldig als beide echtgenoten vergeten dat zij vasten en dan geslachtsgemeenschap hebben?",
        answers: [
            { text: "A) Het vasten blijft geldig", correct: true },
            { text: "B) Het vasten wordt ongeldig", correct: false },
            { text: "C) Boetedoening (kaffārah) wordt verplicht", correct: false }
        ],
        uitleg: "Misschien is het moeilijk voor te stellen, maar het kan gebeuren dat beide echtgenoten vergeten dat zij vasten. Wanneer er in zo’n geval geslachtsgemeenschap plaatsvindt uit vergetelheid, wordt het vasten niet ongeldig."
    },
    {
        question: "Wat is janābah?",
        answers: [
            { text: "A) Een toestand van rituele onreinheid na seksuele ontlading of geslachtsgemeenschap", correct: true },
            { text: "B) Een toestand na het verbreken van het vasten door te eten en drinken", correct: false },
            { text: "C) Een toestand van kleine rituele onreinheid waarvoor wuḍū volstaat", correct: false }
        ],
        uitleg: "Janābah is de toestand na seksuele ontlading of geslachtsgemeenschap waarvoor ghusl verplicht is."
    },
    {
        question: "Is het toegestaan om te kussen tijdens het vasten?",
        answers: [
            { text: "A) Nee, dat is altijd verboden", correct: false },
            { text: "B) Ja, maar alleen als men zichzelf kan beheersen", correct: true },
            { text: "C) Alleen na zonsondergang (ifṭār)", correct: false }
        ],
        uitleg: "Een kus op de wang of op de lippen tijdens het vasten is in principe toegestaan. Wanneer iemand weet dat hij of zij zich na het kussen niet kan beheersen en er een reële kans bestaat op verdere seksuele handelingen en mogelijk geslachtsgemeenschap, dan is het kussen afgekeurd (makrūh). Een dergelijke kus is uitsluitend toegestaan tussen echtgenoten."
    },
    {
        question: "Wat gebeurt er als door kussen een seksuele ontlading plaatsvindt?",
        answers: [
            { text: "A) Het vasten blijft geldig en hoeft niet te worden ingehaald", correct: false },
            { text: "B) Het vasten wordt verbroken; inhalen en boetedoening (kaffārah) zijn verplicht", correct: false },
            { text: "C) Het vasten wordt verbroken en alleen het inhalen van deze dag is verplicht", correct: true }
        ],
        uitleg: "Wanneer als gevolg van kussen een seksuele ontlading plaatsvindt, wordt het vasten ongeldig. Alleen voor de persoon bij wie de ontlading optreedt is het inhalen (qaḍā) verplicht; kaffārah is niet vereist. Deze handeling is uitsluitend toegestaan tussen echtgenoten."
    },
    {
        question: "Blijft het vasten geldig als iemand door alleen te kijken naar pornografisch materiaal een seksuele ontlading krijgt?",
        answers: [
            { text: "A) Het vasten wordt ongeldig", correct: false },
            { text: "B) Kaffārah (boetedoening) wordt verplicht", correct: false },
            { text: "C) Het vasten blijft geldig", correct: true }
        ],
        uitleg: "Hoewel het bekijken van pornografisch materiaal verboden is en een zonde vormt, blijft het vasten geldig wanneer er een seksuele ontlading plaatsvindt door alleen te kijken, zonder lichamelijk contact. Een kaffārah is in dat geval niet verplicht."
    },
    {
        question: "Blijft het vasten geldig als iemand de ochtend bereikt in staat van janābah?",
        answers: [
            { text: "A) Het vasten wordt ongeldig", correct: false },
            { text: "B) Het vasten blijft geldig", correct: true },
            { text: "C) Kaffārah (boetedoening) wordt verplicht", correct: false }
        ],
        uitleg: "Het vasten blijft geldig, ook als iemand de ochtend bereikt in staat van janābah."
    },
    {
        question: "Hoe is het om de rituele wassing (ghusl) die verplicht is bij janābah, opzettelijk uit te stellen tot na het verstrijken van een gebedstijd?",
        answers: [
            { text: "A) Dit is toegestaan", correct: false },
            { text: "B) Dit is aanbevolen", correct: false },
            { text: "C) Dit is zondig en verboden", correct: true }
        ],
        uitleg: "Het opzettelijk uitstellen van ghusl tot na het verstrijken van een gebedstijd is zondig en verboden."
    },
    {
        question: "Wanneer is kaffārah verplicht bij geslachtsgemeenschap tijdens Ramadan?",
        answers: [
            { text: "A) Wanneer men geslachtsgemeenschap heeft gehad terwijl men was vergeten dat men vastte", correct: false },
            { text: "B) Wanneer men overdag geslachtsgemeenschap heeft terwijl men op reis is", correct: false },
            { text: "C) Wanneer men vanaf de avond de intentie had om te vasten, geen reiziger is en zich bewust van het vasten overdag geslachtsgemeenschap heeft gehad", correct: true }
        ],
        uitleg: "Kaffārah is verplicht wanneer men de intentie had om te vasten, geen reiziger is en bewust overdag geslachtsgemeenschap heeft gehad zonder geldige reden. Zowel qaḍā als kaffārah zijn verplicht."
    },
    {
        question: "Wat gebeurt er met het vasten wanneer iemand door enkel te denken aan seks een lozing krijgt, dus zonder zichzelf aan te raken of enig lichamelijk contact?",
        answers: [
            { text: "A) Het vasten blijft geldig", correct: true },
            { text: "B) Het vasten wordt ongeldig", correct: false },
            { text: "C) Kaffārah (boetedoening) wordt verplicht", correct: false }
        ],
        uitleg: "Wanneer een ontlading uitsluitend door gedachten ontstaat en er geen lichamelijk contact is, blijft het vasten geldig. Wel tast dit de spirituele waarde van het vasten aan; men dient zijn gedachten te bewaken."
    },
    {
        question: "Wat gebeurt er met het vasten bij een ontlading (zaadlozing bij een man of vochtafscheiding bij een vrouw) tijdens de slaap?",
        answers: [
            { text: "A) Kaffārah (boetedoening) wordt verplicht", correct: false },
            { text: "B) Het vasten wordt ongeldig", correct: false },
            { text: "C) Het vasten blijft geldig", correct: true }
        ],
        uitleg: "Een ontlading tijdens de slaap gebeurt buiten iemands wil om. Het vasten blijft geldig en kaffārah is niet verplicht."
    },
    {
        question: "Wat gebeurt er als een vochtig voorwerp in de anus wordt geplaatst en de vochtigheid naar binnen doordringt?",
        answers: [
            { text: "A) Het vasten blijft geldig", correct: false },
            { text: "B) Het vasten wordt ongeldig", correct: true },
            { text: "C) Het vasten is ongeldig en kaffārah is vereist", correct: false }
        ],
        uitleg: "Wanneer een vochtig voorwerp in de anus wordt geplaatst en de vochtigheid naar binnen doordringt, wordt het vasten ongeldig. Alleen qaḍā is verplicht."
    },
    {
        question: "Wat gebeurt er als een voorwerp in de vagina wordt geplaatst en een deel buiten blijft?",
        answers: [
            { text: "A) Het vasten wordt ongeldig", correct: false },
            { text: "B) Kaffārah (boetedoening) wordt verplicht", correct: false },
            { text: "C) Het vasten blijft geldig", correct: true }
        ],
        uitleg: "Wanneer een voorwerp in de vagina wordt geplaatst en een deel buiten blijft, wordt het vasten niet ongeldig. Let op: als het voorwerp vochtig is dan zal het vasten wel breken."
    },
    {
        question: "Wat gebeurt er als een droge vinger in de geslachtsopening wordt geplaatst?",
        answers: [
            { text: "A) Het vasten wordt ongeldig", correct: false },
            { text: "B) Het vasten blijft geldig", correct: true },
            { text: "C) Kaffārah (boetedoening) wordt verplicht", correct: false }
        ],
        uitleg: "Wanneer een droge vinger in de geslachtsopening wordt geplaatst, wordt het vasten niet ongeldig."
    },
    {
        question: "Wat gebeurt er als iemand het speeksel van een ander doorslikt, of zijn eigen speeksel eerst uit de mond neemt en daarna doorslikt?",
        answers: [
            { text: "A) Het vasten blijft geldig", correct: false },
            { text: "B) Het vasten wordt ongeldig", correct: true },
            { text: "C) Kaffārah (boetedoening) wordt altijd verplicht", correct: false }
        ],
        uitleg: "Wanneer iemand het speeksel van een ander doorslikt, of zijn eigen speeksel eerst uit de mond neemt en daarna doorslikt, wordt het vasten ongeldig. Alleen qaḍā is verplicht. Indien dit uit genot door een seksuele handeling gebeurt, kan ook kaffārah verplicht worden."
    },
    {
        question: "Wat gebeurt er als door overdreven wassen water in de anus doordringt?",
        answers: [
            { text: "A) Het vasten blijft geldig", correct: false },
            { text: "B) Het vasten wordt ongeldig", correct: true },
            { text: "C) Kaffārah (boetedoening) wordt verplicht", correct: false }
        ],
        uitleg: "Wanneer door overdreven wassen water in de anus doordringt, wordt het vasten ongeldig. Alleen qaḍā is verplicht."
    },
    {
        question: "Wat gebeurt er bij masturbatie zonder ontlading tijdens het vasten?",
        answers: [
            { text: "A) Het vasten wordt ongeldig", correct: false },
            { text: "B) Het vasten blijft geldig", correct: true },
            { text: "C) Kaffārah (boetedoening) wordt verplicht", correct: false }
        ],
        uitleg: "Hoewel masturbatie verboden is, blijft het vasten geldig zolang er geen ontlading plaatsvindt."
    },
    {
        question: "Wat gebeurt er wanneer bij vrijen zonder geslachtsgemeenschap een ontlading plaatsvindt?",
        answers: [
            { text: "A) Het vasten blijft geldig", correct: false },
            { text: "B) Het vasten wordt ongeldig", correct: true },
            { text: "C) Kaffārah (boetedoening) wordt verplicht", correct: false }
        ],
        uitleg: "Wanneer bij het vrijen zonder geslachtsgemeenschap een ontlading plaatsvindt, wordt het vasten ongeldig. Alleen voor de persoon bij wie de ontlading optreedt is qaḍā verplicht."
    },
    {
        question: "Wat is het oordeel bij geslachtsgemeenschap onder dwang tijdens het vasten?",
        answers: [
            { text: "A) Het vasten blijft geldig voor beide partijen", correct: false },
            { text: "B) Het vasten wordt ongeldig en alleen qaḍā is verplicht voor beide", correct: false },
            { text: "C) Het vasten wordt ongeldig; voor de gedwongen persoon is alleen qaḍā verplicht en voor degene die heeft gedwongen zijn zowel qaḍā als kaffārah verplicht", correct: true }
        ],
        uitleg: "Bij geslachtsgemeenschap onder dwang wordt het vasten ongeldig. Voor de gedwongen persoon is alleen qaḍā verplicht. Voor degene die heeft gedwongen zijn zowel qaḍā als kaffārah verplicht."
    }
];

const inactiveQuestions = [
    {
        question: "Wat gebeurt er als iemand uit vergeetachtigheid geslachtsgemeenschap heeft en daarna erop gewezen wordt dat hij vast, maar zich dit nog steeds niet herinnert en vervolgens doorgaat?",
        answers: [
            { text: "A) Het vasten wordt ongeldig", correct: true },
            { text: "B) Het vasten blijft geldig", correct: false },
            { text: "C) Boetedoening (kaffārah) wordt verplicht", correct: false }
        ],
        uitleg: "Wanneer iemand uit vergeetachtigheid geslachtsgemeenschap heeft en daarna erop gewezen wordt dat hij vast, maar zich dit nog steeds niet herinnert en vervolgens doorgaat, wordt zijn vasten ongeldig. Hij dient deze vastendag in te halen (qaḍā), maar er is geen boetedoening verplicht (kaffārah)."
    },
    {
        question: "Wanneer is kussen tijdens het vasten makrūh (afgekeurd)?",
        answers: [
            { text: "A) Bij gebrek aan zelfbeheersing en kans op seksuele handelingen", correct: true },
            { text: "B) Wanneer er geen sprake is van verlangen", correct: false },
            { text: "C) Alleen bij een vrijwillig vasten", correct: false }
        ],
        uitleg: "Wanneer iemand weet dat hij of zij zich niet kan beheersen en er een reële kans bestaat op verdere seksuele handelingen en mogelijk geslachtsgemeenschap, is het kussen afgekeurd (makrūh). Dit geldt uitsluitend tussen echtgenoten."
    },
    {
        question: "Blijft het vasten geldig als er door kussen zonder aanraking van de intieme delen een ontlading ontstaat?",
        answers: [
            { text: "A) Het vasten wordt verbroken", correct: false },
            { text: "B) Het vasten blijft geldig", correct: true },
            { text: "C) Het vasten wordt ongeldig en moet met boetedoening worden ingehaald", correct: false }
        ],
        uitleg: "Kussen is toegestaan voor wie zich kan beheersen. Als dit kan leiden tot verdere seksuele handelingen, is het afgekeurd (makrūh). Ontstaat er door het kussen, zonder aanraking van de intieme delen, een ontlading, dan blijft het vasten geldig. Dit is uitsluitend toegestaan tussen echtgenoten."
    },
    {
        question: "Blijft het vasten geldig wanneer een ontlading uitsluitend door gedachten ontstaat en er geen lichamelijk contact is?",
        answers: [
            { text: "A) Het vasten wordt ongeldig", correct: false },
            { text: "B) Kaffārah (boetedoening) wordt verplicht", correct: false },
            { text: "C) Het vasten blijft geldig", correct: true }
        ],
        uitleg: "Wanneer een ontlading uitsluitend door gedachten ontstaat en er geen lichamelijk contact is, blijft het vasten geldig. Kaffārah is niet verplicht."
    },
    {
        question: "Wat is het oordeel over gedachten die tot ontlading leiden zonder lichamelijk contact?",
        answers: [
            { text: "A) Het vasten blijft geldig", correct: true },
            { text: "B) Het vasten wordt ongeldig", correct: false },
            { text: "C) Kaffārah (boetedoening) wordt verplicht", correct: false }
        ],
        uitleg: "Wanneer een ontlading uitsluitend door gedachten ontstaat en er geen lichamelijk contact is, blijft het vasten geldig. Wel tast dit de spirituele waarde van het vasten aan; men dient zijn gedachten te bewaken."
    },
    {
        question: "Wat gebeurt er als iemand zich direct losmaakt na het herinneren van het vasten?",
        answers: [
            { text: "A) Het vasten blijft geldig", correct: true },
            { text: "B) Het vasten wordt ongeldig", correct: false },
            { text: "C) Kaffārah (boetedoening) wordt verplicht", correct: false }
        ],
        uitleg: "Wanneer iemand zich direct losmaakt na het herinneren van het vasten, wordt dit niet beschouwd als geslachtsgemeenschap. Het vasten blijft geldig, ook als er daarna een ontlading plaatsvindt."
    },
    {
        question: "Wat gebeurt er als iemand zich bij het aanbreken van Fajr direct losmaakt?",
        answers: [
            { text: "A) Het vasten blijft geldig", correct: true },
            { text: "B) Het vasten wordt ongeldig", correct: false },
            { text: "C) Kaffārah (boetedoening) wordt verplicht", correct: false }
        ],
        uitleg: "Wanneer iemand zich bij het aanbreken van Fajr direct losmaakt, wordt dit niet beschouwd als geslachtsgemeenschap. Het vasten blijft geldig, ook als er daarna een ontlading plaatsvindt."
    },
    {
        question: "Wat gebeurt er als iemand zich niet direct losmaakt na het herinneren van het vasten of na het aanbreken van Fajr en in die toestand blijft?",
        answers: [
            { text: "A) Het vasten blijft geldig", correct: false },
            { text: "B) Het vasten wordt ongeldig", correct: true },
            { text: "C) Kaffārah (boetedoening) wordt verplicht", correct: false }
        ],
        uitleg: "Wanneer iemand zich niet direct losmaakt na het herinneren van het vasten of na het aanbreken van Fajr en in die toestand blijft, wordt dit beschouwd als voortzetting van geslachtsgemeenschap. Het vasten wordt ongeldig."
    },
    {
        question: "Blijft het vasten geldig zolang er geen ontlading plaatsvindt?",
        answers: [
            { text: "A) Het vasten blijft geldig", correct: true },
            { text: "B) Het vasten wordt ongeldig", correct: false },
            { text: "C) Kaffārah (boetedoening) wordt verplicht", correct: false }
        ],
        uitleg: "Het vasten blijft geldig zolang er geen ontlading plaatsvindt. Geslachtsgemeenschap via vagina of anus maakt het vasten ongeldig. Anale geslachtsgemeenschap is bovendien verboden."
    },
    {
        question: "Wat gebeurt er bij masturbatie zonder ontlading tijdens het vasten?",
        answers: [
            { text: "A) Het vasten wordt ongeldig", correct: false },
            { text: "B) Het vasten blijft geldig", correct: true },
            { text: "C) Kaffārah (boetedoening) wordt verplicht", correct: false }
        ],
        uitleg: "Hoewel masturbatie verboden is, blijft het vasten geldig zolang er geen ontlading plaatsvindt."
    },
    {
        question: "Wat gebeurt er bij een ontlading tijdens de slaap?",
        answers: [
            { text: "A) Kaffārah (boetedoening) wordt verplicht", correct: false },
            { text: "B) Het vasten wordt ongeldig", correct: false },
            { text: "C) Het vasten blijft geldig", correct: true }
        ],
        uitleg: "Een ontlading tijdens de slaap gebeurt buiten iemands wil om. Het vasten blijft geldig en kaffārah is niet verplicht."
    },
    {
        question: "Wat gebeurt er in een huis waarin iemand zich in staat van janābah bevindt?",
        answers: [
            { text: "A) Het vasten wordt ongeldig", correct: false },
            { text: "B) De engelen van barmhartigheid betreden het huis niet", correct: true },
            { text: "C) Er moet kaffārah worden verricht", correct: false }
        ],
        uitleg: "Er is overgeleverd dat de engelen van barmhartigheid een huis waarin iemand zich in staat van janābah bevindt, niet binnengaan."
    },
    {
        question: "Wat gebeurt er als een voorwerp in de anus wordt geplaatst en een deel buiten blijft?",
        answers: [
            { text: "A) Het vasten wordt ongeldig", correct: false },
            { text: "B) Kaffārah (boetedoening) wordt verplicht", correct: false },
            { text: "C) Het vasten blijft geldig", correct: true }
        ],
        uitleg: "Wanneer een voorwerp in de anus wordt geplaatst en een deel buiten blijft, wordt het vasten niet ongeldig."
    },
    {
        question: "Wat gebeurt er als een vochtig voorwerp in de anus wordt geplaatst en de vochtigheid naar binnen doordringt?",
        answers: [
            { text: "A) Het vasten blijft geldig", correct: false },
            { text: "B) Het vasten wordt ongeldig", correct: true },
            { text: "C) Het vasten is ongeldig en kaffārah is vereist", correct: false }
        ],
        uitleg: "Wanneer een vochtig voorwerp in de anus wordt geplaatst en de vochtigheid naar binnen doordringt, wordt het vasten ongeldig. Alleen qaḍā is verplicht."
    },
    {
        question: "Wat gebeurt er als een voorwerp in de vagina wordt geplaatst en een deel buiten blijft?",
        answers: [
            { text: "A) Het vasten wordt ongeldig", correct: false },
            { text: "B) Kaffārah (boetedoening) wordt verplicht", correct: false },
            { text: "C) Het vasten blijft geldig", correct: true }
        ],
        uitleg: "Wanneer een voorwerp in de vagina wordt geplaatst en een deel buiten blijft, wordt het vasten niet ongeldig."
    },
    {
        question: "Wat gebeurt er als een vochtig voorwerp in de vagina wordt geplaatst en de vochtigheid naar binnen doordringt?",
        answers: [
            { text: "A) Het vasten blijft geldig", correct: false },
            { text: "B) Het vasten wordt ongeldig", correct: true },
            { text: "C) Het vasten is ongeldig en kaffārah is vereist", correct: false }
        ],
        uitleg: "Wanneer een vochtig voorwerp in de vagina wordt geplaatst en de vochtigheid naar binnen doordringt, wordt het vasten ongeldig. Alleen qaḍā is verplicht."
    },
    {
        question: "Wat gebeurt er als watten of een ander voorwerp volledig in de vagina wordt geplaatst?",
        answers: [
            { text: "A) Het vasten blijft geldig", correct: false },
            { text: "B) Het vasten wordt ongeldig", correct: true },
            { text: "C) Kaffārah (boetedoening) wordt verplicht", correct: false }
        ],
        uitleg: "Wanneer watten of een ander voorwerp volledig in de vagina wordt geplaatst, wordt het vasten ongeldig. Alleen qaḍā is verplicht."
    },
    {
        question: "Wat gebeurt er als een droge vinger in de geslachtsopening wordt geplaatst?",
        answers: [
            { text: "A) Het vasten wordt ongeldig", correct: false },
            { text: "B) Het vasten blijft geldig", correct: true },
            { text: "C) Kaffārah (boetedoening) wordt verplicht", correct: false }
        ],
        uitleg: "Wanneer een droge vinger in de geslachtsopening wordt geplaatst, wordt het vasten niet ongeldig."
    },
    {
        question: "Wat gebeurt er als een vochtige vinger in de anus wordt geplaatst en vocht naar binnen doordringt?",
        answers: [
            { text: "A) Het vasten blijft geldig", correct: false },
            { text: "B) Het vasten wordt ongeldig", correct: true },
            { text: "C) Het vasten wordt ongeldig en kaffārah is verplicht", correct: false }
        ],
        uitleg: "Wanneer een vochtige vinger in de anus wordt geplaatst en vocht naar binnen doordringt, wordt het vasten ongeldig. Alleen qaḍā is verplicht."
    },
    {
        question: "Wat gebeurt er als door overdreven wassen water in de anus doordringt?",
        answers: [
            { text: "A) Het vasten blijft geldig", correct: false },
            { text: "B) Het vasten wordt ongeldig", correct: true },
            { text: "C) Kaffārah (boetedoening) wordt verplicht", correct: false }
        ],
        uitleg: "Wanneer door overdreven wassen water in de anus doordringt, wordt het vasten ongeldig. Alleen qaḍā is verplicht."
    },
    {
        question: "Wat gebeurt er als water of olie in de urinebuis binnendringt?",
        answers: [
            { text: "A) Kaffārah (boetedoening) wordt verplicht", correct: false },
            { text: "B) Het vasten wordt ongeldig", correct: false },
            { text: "C) Het vasten blijft geldig", correct: true }
        ],
        uitleg: "Wanneer water of olie in de urinebuis binnendringt, wordt het vasten niet verbroken, zelfs als dit de blaas bereikt."
    }
];

const questions = activeQuestions;

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
    const disclaimerContainer = document.getElementById("disclaimer-container");
    const disclaimerBtn = document.getElementById("disclaimer-btn");
    const quizContent = document.getElementById("quiz-content");

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

    if (disclaimerBtn) {
        disclaimerBtn.addEventListener("click", () => {
            disclaimerContainer.classList.add("hide");
            quizContent.classList.remove("hide");
            showQuestion();
            if (!quizStartTracked) {
                trackEvent("ramadan-intimiteit/quiz-gestart", "Kennisquiz Ramadan Intimiteit gestart");
                quizStartTracked = true;
            }
        });
    }

    if (restartBtn) {
        restartBtn.addEventListener("click", window.restartQuiz);
    }

    if (shareBtn) {
        shareBtn.addEventListener("click", () => {
            const websiteUrl = window.location.href;
            const uitnodiging = `As-Salām ʿAlaykum! Ik heb net een leuke Ramadan kennisquiz gedaan over intimiteit en vasten. Wil jij je kennis ook testen? Hier vind je de quiz: ${websiteUrl}`;
            const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(uitnodiging)}`;
            window.open(whatsappUrl, "_blank");
            trackEvent("ramadan-intimiteit/gedeeld-whatsapp", "Kennisquiz Ramadan Intimiteit gedeeld via WhatsApp");
        });
    }

    function trackQuizCompleted() {
        if (completionTracked) {
            return;
        }
        completionTrackingRequested = true;

        if (trackEvent("ramadan-intimiteit/quiz-voltooid", "Deelnemer heeft de Kennisquiz Ramadan Intimiteit afgerond")) {
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
            isCorrect ? "ramadan-intimiteit/antwoord-goed" : "ramadan-intimiteit/antwoord-fout",
            isCorrect ? "Kennisquiz Ramadan Intimiteit antwoord goed" : "Kennisquiz Ramadan Intimiteit antwoord fout"
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
        qTextElement.innerText = "Māshā Allāh! Je hebt de Kennisquiz Ramadan afgerond.";
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

});
