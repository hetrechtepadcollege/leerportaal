// Actieve vraagset — gecorrigeerde versie (maart 2026).
// Bronvermelding is uitsluitend voor interne referentie en wordt niet weergegeven in de quiz.
// Geverifieerd via:
// - hetrechtepad.nl artikelen over gebedstijden en qaḍā
// - BSI_N1.pdf voor wuḍū, ghusl, tayammum, voorwaarden van de ṣalāt en geldigheid
const questions = [
    // --- Gebedstijden ---
    {
        question: "Hoeveel gebeden moet je elke dag verrichten?",
        answers: [
            { text: "A) 6", correct: false },
            { text: "B) 5", correct: true },
            { text: "C) 7", correct: false }
        ],
        uitleg: "Gedurende een dag en een nacht zijn vijf gebeden verplicht: Fajr, Ẓuhr, ʿAṣr, Maghrib en ʿIshā.",
        source: "Website: Van dageraad tot nacht: de vijf verplichte gebeden (2025-09-29); BSI_N1.pdf p.49"
    },
    {
        question: "Op welk tijdstip moet je het Fajr-gebed verrichten?",
        answers: [
            { text: "A) Van middernacht tot de ochtendschemering", correct: false },
            { text: "B) Van zonsopgang tot zawāl (het moment dat de zon haar hoogste punt heeft bereikt)", correct: false },
            { text: "C) Van de ochtendschemering tot zonsopgang", correct: true }
        ],
        uitleg: "De tijd van het Fajr-gebed begint bij de ware dageraad. Dit is het moment waarop aan de horizon een licht verschijnt dat zich horizontaal uitstrekt en geleidelijk toeneemt, totdat het de duisternis verdringt. Deze tijd duurt voort tot zonsopgang.",
        source: "Website: De islamitische gebedstijden (2024-01-22); Website: De tijdstippen van de vijf verplichte gebeden (2023-05-25); BSI_N1.pdf p.49"
    },
    {
        question: "Tot wanneer duurt het Ẓuhr-gebed?",
        answers: [
            { text: "A) Tot de schaduw even lang is als het voorwerp", correct: false },
            { text: "B) Tot de schaduw van een voorwerp dubbel zo lang is, exclusief de eigen schaduw", correct: true },
            { text: "C) Tot de zon geel begint te kleuren", correct: false }
        ],
        uitleg: "Het Ẓuhr-gebed begint bij zawāl, het moment waarop de zon haar hoogste punt heeft gepasseerd. Deze tijd duurt voort, totdat de schaduw van een voorwerp twee keer zo lang is als het voorwerp zelf, exclusief de oorspronkelijke middagschaduw.",
        source: "Website: De islamitische gebedstijden (2024-01-22); Website: De tijdstippen van de vijf verplichte gebeden (2023-05-25); BSI_N1.pdf p.49"
    },
    {
        question: "Wat is het aanbevolen tijdstip om het ʿAṣr-gebed te verrichten?",
        answers: [
            { text: "A) Het direct aan het begin van de tijd verrichten", correct: false },
            { text: "B) Het uitstellen tot vlak voor zonsondergang", correct: false },
            { text: "C) Het wat later verrichten, maar niet uitstellen tot de zon geel kleurt", correct: true }
        ],
        uitleg: "Het is aanbevolen het ʿAṣr-gebed iets later binnen de toegestane tijd te verrichten, maar zonder het uit te stellen tot het moment waarop de zon geel begint te kleuren. Het onnodig uitstellen tot vlak voor zonsondergang is afkeurenswaardig.",
        source: "Website: Van dageraad tot nacht: de vijf verplichte gebeden (2025-09-29); BSI_N1.pdf p.49"
    },
    {
        question: "Wanneer begint het Maghrib-gebed?",
        answers: [
            { text: "A) Zodra de zon geel begint te kleuren", correct: false },
            { text: "B) Na het verdwijnen van de avondschemering", correct: false },
            { text: "C) Direct na zonsondergang", correct: true }
        ],
        uitleg: "Het Maghrib-gebed begint zodra de zon volledig onder de horizon is verdwenen. Vanaf dat moment treedt de tijd direct in, zonder wachttijd. Het is aanbevolen het gebed onmiddellijk of kort daarna te verrichten, omdat de tijd van Maghrib relatief kort is en eindigt bij het verdwijnen van de avondschemering.",
        source: "Website: Van dageraad tot nacht: de vijf verplichte gebeden (2025-09-29); Website: De islamitische gebedstijden (2024-01-22); BSI_N1.pdf p.50"
    },
    {
        question: "Tot wanneer mag je het ʿIshā-gebed verrichten?",
        answers: [
            { text: "A) Tot het begin van de ochtendschemering", correct: true },
            { text: "B) Alleen tot de ware middernacht", correct: false },
            { text: "C) Tot de zon opkomt", correct: false }
        ],
        uitleg: "De tijd van het ʿIshā-gebed duurt tot het begin van de ochtendschemering (Fajr). Het is echter aanbevolen het gebed niet onnodig uit te stellen. Het verrichten tot aan de ware middernacht is toegestaan, maar daarna zonder geldige reden uitstellen is afkeurenswaardig.",
        source: "Website: Van dageraad tot nacht: de vijf verplichte gebeden (2025-09-29); BSI_N1.pdf p.50"
    },
    {
        question: "Wanneer mag je geen ṣalāt verrichten?",
        answers: [
            { text: "A) Tijdens zonsopgang", correct: true },
            { text: "B) Tijdens het eerste derde deel van de nacht", correct: false },
            { text: "C) Meteen na de adzān (gebedsoproep) van ʿIshā", correct: false }
        ],
        uitleg: "Er zijn specifieke momenten waarop het verrichten van ṣalāt niet toegestaan is: tijdens zonsopgang, tijdens zonsondergang en de islamitische middag (rond het moment van zawāl, wanneer de zon haar hoogste punt bereikt voordat zij begint te dalen). Op deze momenten zijn alle gebeden verboden.",
        source: "Website: Kan men de verzuimde gebeden (qaḍā) inhalen op de verboden tijdstippen? (2025-03-07); BSI_N1.pdf p.53"
    },
    {
        question: "Wanneer moet de adzān (gebedsoproep) worden gegeven?",
        answers: [
            { text: "A) Kort vóór het ingaan van de tijd, zodat mensen zich kunnen voorbereiden", correct: false },
            { text: "B) Pas nadat de iqāmah is uitgesproken", correct: false },
            { text: "C) Nadat het tijdstip van de ṣalāt (gebed) is aangebroken", correct: true }
        ],
        uitleg: "De adzān is gekoppeld aan het daadwerkelijk intreden van de gebedstijd en mag niet daarvoor worden gegeven. Wordt de adzān vóór het begin van de tijd uitgesproken, dan is deze niet geldig en moet hij worden herhaald. De iqāmah daarentegen volgt pas vlak vóór het daadwerkelijke beginnen van het gebed.",
        source: "BSI_N1.pdf pp.57-58"
    },

    // --- Reinheid ---
    {
        question: "Welke handeling behoort tot de vier verplichtingen van de wuḍū (kleine wassing)?",
        answers: [
            { text: "A) De mond spoelen en de neus reinigen", correct: false },
            { text: "B) De voeten wassen tot en met de enkels", correct: true },
            { text: "C) Een keer over het hele hoofd en de oren strijken", correct: false }
        ],
        uitleg: "De wuḍū heeft vier verplichtingen: het gezicht wassen, beide handen tot en met de ellebogen wassen, over een kwart van het hoofd strijken en de voeten wassen tot en met de enkels. Alleen wanneer deze vier onderdelen zijn verricht, is de wuḍū geldig.",
        source: "BSI_N1.pdf p.12"
    },
    {
        question: "Wat verbreekt je wuḍū (kleine wassing)?",
        answers: [
            { text: "A) Hard lachen buiten het gebed", correct: false },
            { text: "B) Zweten of stinken", correct: false },
            { text: "C) Zo diep slapen dat de spieren van het lichaam ontspannen", correct: true }
        ],
        uitleg: "De wuḍū wordt verbroken door alles wat uit de geslachtsdelen of de anus komt, zoals urine, ontlasting en darmgassen. Ook slapen en flauwvallen verbreken de wuḍū, omdat de spieren ontspannen en de controle over het lichaam wegvalt, waardoor er iets uit de geslachtsdelen of de anus kan vrijkomen dat de wuḍū ongeldig maakt.",
        source: "BSI_N1.pdf p.22"
    },
    {
        question: "Hoeveel verplichtingen heeft de ghusl (grote wassing)?",
        answers: [
            { text: "A) 4", correct: false },
            { text: "B) 3", correct: true },
            { text: "C) 6", correct: false }
        ],
        uitleg: "De ghusl kent drie verplichtingen: de mond spoelen, water in de neus brengen en het gehele lichaam wassen, zodat het water elk deel van de buitenkant van het lichaam bereikt. Alleen wanneer deze drie onderdelen zijn verricht, is de ghusl geldig.",
        source: "BSI_N1.pdf pp.25-26"
    },
    {
        question: "Wat is verplicht bij het wassen van het lichaam tijdens de ghusl?",
        answers: [
            { text: "A) Alleen hoofd, nek en schouders wassen", correct: false },
            { text: "B) Eerst wuḍū (kleine wassing) verrichten en daarna alleen de voeten wassen", correct: false },
            { text: "C) Water van top tot teen over de buitenkant van het hele lichaam laten vloeien", correct: true }
        ],
        uitleg: "Bij ghusl is het verplicht dat water elk deel van de buitenkant van het lichaam bereikt, van top tot teen. Het is niet voldoende om slechts delen van het lichaam te wassen; het water moet overal overheen vloeien. Alleen dan is deze verplichting van de ghusl vervuld.",
        source: "BSI_N1.pdf pp.25-26"
    },
    {
        question: "Wanneer is tayammum (droge reiniging) toegestaan?",
        answers: [
            { text: "A) Wanneer je geen zin hebt om water te gebruiken", correct: false },
            { text: "B) Wanneer watergebruik niet mogelijk of schadelijk is", correct: true },
            { text: "C) Wanneer je bang bent te laat in de moskee te komen", correct: false }
        ],
        uitleg: "Tayammum is toegestaan wanneer het gebruik van water niet mogelijk is of schade veroorzaakt, zoals bij ziekte, extreme kou of wanneer er geen water beschikbaar is binnen een redelijke afstand. In zulke gevallen vervangt tayammum de wuḍū of ghusl.",
        source: "BSI_N1.pdf pp.33, 36"
    },
    {
        question: "Hoeveel keer laat je bij tayammum (droge reiniging) de handen op de grond ploffen?",
        answers: [
            { text: "A) Eén keer", correct: false },
            { text: "B) Twee keer", correct: true },
            { text: "C) Drie keer", correct: false }
        ],
        uitleg: "Bij tayammum laat je twee keer de handen op de grond ploffen: één keer om het gezicht te vegen en een tweede keer om de armen te vegen. Hiermee worden de verplichte onderdelen van de tayammum vervuld.",
        source: "BSI_N1.pdf p.33"
    },
    {
        question: "Wat maakt tayammum (droge reiniging) ongeldig?",
        answers: [
            { text: "A) Alleen het einde van de gebedstijd", correct: false },
            { text: "B) Alles wat de wuḍū (kleine wassing) verbreekt of de ghusl (grote wassing) verplicht maakt", correct: true },
            { text: "C) Alleen het aanraken van aarde met de handen", correct: false }
        ],
        uitleg: "Tayammum wordt ongeldig door alles wat ook de wuḍū verbreekt of de ghusl verplicht maakt. Daarnaast vervalt tayammum zodra men weer in staat is water te gebruiken, omdat het slechts een vervangende vorm van reiniging is.",
        source: "BSI_N1.pdf p.36"
    },
    {
        question: "Welke hand moet gebruikt worden bij istindjā (onderwassing)?",
        answers: [
            { text: "A) De rechterhand, zodat de linkerhand schoon blijft", correct: false },
            { text: "B) Eerst de rechterhand en dan de linkerhand", correct: false },
            { text: "C) De linkerhand", correct: true }
        ],
        uitleg: "Bij istindjā wordt de linkerhand gebruikt voor het reinigen, omdat de rechterhand is gereserveerd voor eervolle handelingen, zoals eten en drinken. Daarom wordt de linkerhand gebruikt voor het verwijderen van onreinheden.",
        source: "BSI_N1.pdf p.39"
    },

    // --- Voorwaarden & uitvoering ---
    {
        question: "Hoeveel voorwaarden heeft de ṣalāt (gebed)?",
        answers: [
            { text: "A) 4", correct: false },
            { text: "B) 6", correct: true },
            { text: "C) 7", correct: false }
        ],
        uitleg: "De ṣalāt kent zes voorwaarden: reinheid, het bedekken van de intieme delen (ʿawrah), het richten naar de qiblah, het intreden van de gebedstijd, de intentie en de openingstakbīr. Zonder deze voorwaarden is het gebed niet geldig.",
        source: "BSI_N1.pdf p.79"
    },
    {
        question: "Wat moet je doen als je twijfelt over de richting van de qiblah (gebedsrichting) en er niemand is om te vragen?",
        answers: [
            { text: "A) Wachten tot iemand de richting voor je kan bevestigen", correct: false },
            { text: "B) Goed nadenken en bidden volgens je beste inschatting", correct: true },
            { text: "C) Altijd de richting volgen waarin de meeste mensen staan", correct: false }
        ],
        uitleg: "Wanneer de richting van de qiblah onbekend is en niemand geraadpleegd kan worden, ben je verplicht taḥarrī te verrichten. Taḥarrī betekent dat je de richting onderzoekt en vervolgens bidt in de richting die jij het meest waarschijnlijk acht.",
        source: "BSI_N1.pdf p.79"
    },
    {
        question: "Welke lichaamsdelen van een vrouw moeten tijdens de ṣalāt bedekt zijn?",
        answers: [
            { text: "A) Het hele lichaam behalve het gezicht en de voeten", correct: false },
            { text: "B) Het hele lichaam behalve gezicht, handpalmen en voeten tot de enkels", correct: true },
            { text: "C) Alles behalve gezicht en handpalmen", correct: false }
        ],
        uitleg: "Voor een vrouw is tijdens de ṣalāt haar hele lichaam ʿawrah, met uitzondering van het gezicht, de handpalmen en de voeten tot de enkels. ʿAwrah betekent de lichaamsdelen die verplicht bedekt moeten zijn.",
        source: "BSI_N1.pdf p.79"
    },
    {
        question: "Welke handeling behoort tot de farḍ (verplicht) van de ṣalāt (gebed)?",
        answers: [
            { text: "A) De eerste tashahhud volledig reciteren", correct: false },
            { text: "B) De adzān (gebedsoproep) geven vóór het gebed", correct: false },
            { text: "C) De qiyām, het staan", correct: true }
        ],
        uitleg: "De ṣalāt kent verplichte handelingen (farḍ), waaronder staan (qiyām), recitatie (qirā'ah), kniebuiging (rukūʾ), grondbuiging (sujūd), de laatste zitting (qaʿdah ākhirah) en het verlaten van het gebed met een niet ṣalāt-handeling (Khurūdj bi ṣunʿihī). Het weglaten van een van deze maakt het gebed ongeldig.",
        source: "BSI_N1.pdf p.86"
    },
    {
        question: "Welke handeling is wājib (essentieel) in de ṣalāt (gebed)?",
        answers: [
            { text: "A) De adzān (gebedsoproep) geven voor iedere individuele ṣalāt (gebed)", correct: false },
            { text: "B) In iedere rakʿat de handen opheffen", correct: false },
            { text: "C) Soera al-Fātiḥa reciteren", correct: true }
        ],
        uitleg: "Het reciteren van Soera al-Fātiḥa behoort tot de wājib-handelingen van de ṣalāt. Het opzettelijk weglaten ervan maakt het gebed ongeldig, en bij het per ongeluk weglaten is sujūd as-sahw (vergissingsbuiging) verplicht.",
        source: "BSI_N1.pdf p.90"
    },
    {
        question: "Wat moet direct volgen op de Koranrecitatie in de ṣalāt (gebed)?",
        answers: [
            { text: "A) Eerst opnieuw soera al-Fātiḥa", correct: false },
            { text: "B) Een korte onderbreking van enkele ademhalingen", correct: false },
            { text: "C) Meteen de rukūʾ", correct: true }
        ],
        uitleg: "Het is essentieel (wājib) dat na de recitatie van Soera al-Fātiḥa en de daaropvolgende Koranrecitatie zonder onnodige onderbreking wordt overgegaan naar de rukūʾ.",
        source: "BSI_N1.pdf p.90"
    },
    {
        question: "Wat is wājib (essentieel) in de Witr?",
        answers: [
            { text: "A) Duʿā Qunūt reciteren", correct: true },
            { text: "B) In alle drie rakaʿāt hardop reciteren", correct: false },
            { text: "C) De ṣalāt (gebed) beëindigen na twee rakaʿāt", correct: false }
        ],
        uitleg: "In de Witr behoort het reciteren van de Duʿā Qunūt (smeekbede) tot de essentiële handelingen (wājib). Laat je dit opzettelijk weg, dan is je gebed ongeldig; laat je het uit vergetelheid weg, dan is sujūd as-sahw (vergissingsneerknieling) noodzakelijk.",
        source: "BSI_N1.pdf pp.90, 116"
    },
    {
        question: "Wie heeft het meeste recht om voor te gaan in het gebed?",
        answers: [
            { text: "A) Degene met de luidste en mooiste stem", correct: false },
            { text: "B) Degene die het dichtst bij de miḥrāb staat", correct: false },
            { text: "C) Degene met de meeste kennis over de regels van ṣalāt (gebed) en reinheid", correct: true }
        ],
        uitleg: "Voorrang om voor te gaan in het gebed ligt bij degene die het meest bekwaam is in de regels van ṣalāt en reinheid, omdat dit ervoor zorgt dat het gebed correct en zonder fouten wordt verricht.",
        source: "BSI_N1.pdf p.104"
    },

    // --- Geldigheid & herstel ---
    {
        question: "Welke handeling maakt de ṣalāt (gebed) ongeldig?",
        answers: [
            { text: "A) Opzettelijk of per vergissing spreken", correct: true },
            { text: "B) Het hoofd licht bewegen zonder de borst af te wenden", correct: false },
            { text: "C) Even je kleding rechttrekken", correct: false }
        ],
        uitleg: "Je ṣalāt (gebed) wordt ongeldig wanneer je spreekt, of dit nu opzettelijk gebeurt, per vergissing of uit vergeetachtigheid, omdat je tijdens het gebed verplicht bent stilte en concentratie te bewaren.",
        source: "BSI_N1.pdf p.109"
    },
    {
        question: "Wat geldt voor het verplaatsen van de grote teen tijdens de ṣalāt (gebed)?",
        answers: [
            { text: "A) Dat daardoor de wuḍū (kleine wassing) verbreekt", correct: false },
            { text: "B) Dat het verbreken van het gebed daardoor een bekende maar onjuiste misvatting is", correct: true },
            { text: "C) Dat dit alleen in een farḍ-ṣalāt (gebed) ongeldig maakt", correct: false }
        ],
        uitleg: "Onder veel mensen is het bekend dat het verplaatsen van de grote teen de ṣalāt ongeldig zou maken, maar dit is onjuist. Een verplaatsen van je grote teen heeft geen invloed op de geldigheid van je gebed en behoort niet tot de handelingen die de ṣalāt verbreken.",
        source: "BSI_N1.pdf p.109"
    },
    {
        question: "Wat wordt bedoeld met sujūd al-sahw (vergissingsbuiging)?",
        answers: [
            { text: "A) Twee extra grondbuigingen om een tekortkoming te herstellen", correct: true },
            { text: "B) Twee extra rakaʿāt na afloop van de ṣalāt (gebed)", correct: false },
            { text: "C) Een extra rukūʾ na de recitatie van Duʿā Qunūt", correct: false }
        ],
        uitleg: "Sujūd al-sahw (vergissingsbuigingen) verricht je wanneer je in de ṣalāt een fout maakt door vergeetachtigheid. Je doet dan twee extra grondbuigingen in de laatste zitting om deze tekortkoming te herstellen.",
        source: "BSI_N1.pdf p.121"
    },
    {
        question: "Wanneer is sujūd al-sahw (vergissingsbuiging) wājib (essentieel)?",
        answers: [
            { text: "A) Wanneer je een wājib-handeling van de ṣalāt (gebed) vergeet", correct: true },
            { text: "B) Wanneer je een soenna-handeling vergeet", correct: false },
            { text: "C) Wanneer je zonder reden zacht reciteert achter de imām", correct: false }
        ],
        uitleg: "Sujūd al-sahw (vergissingsbuigingen) zijn essentieel (wājib) wanneer je een wājib-handeling in de ṣalāt uit vergetelheid weglaat, zodat je daarmee de tekortkoming in je gebed herstelt.",
        source: "BSI_N1.pdf p.121"
    },
    {
        question: "Welke gebedseenheden moeten ingehaald worden als ze gemist zijn?",
        answers: [
            { text: "A) Alleen de eerste soenna-gebedseenheden van Fajr en Ẓuhr", correct: false },
            { text: "B) De farḍ- en wājib-gebedseenheden", correct: true },
            { text: "C) Alle soenna- en nafl-gebedseenheden (vrijwillige gebedseenheden)", correct: false }
        ],
        uitleg: "Je bent verplicht farḍ- en wājib-gebedseenheden in te halen wanneer je ze hebt gemist. Voor soenna- en nafl-gebedseenheden geldt deze verplichting niet.",
        source: "Website: Het inhalen van een levenslang aantal gemiste gebeden (2023-06-05); BSI_N1.pdf p.126"
    },
    {
        question: "Wat betekent qaḍā bij gebeden?",
        answers: [
            { text: "A) Een actueel gebed binnen zijn tijd verrichten", correct: false },
            { text: "B) Een gemist gebed verrichten nadat de tijd is verstreken", correct: true },
            { text: "C) Een ṣalāt (gebed) vervroegd verrichten vóór het tijdstip ingaat", correct: false }
        ],
        uitleg: "Qaḍā betekent dat je een gebed in een later tijdstip verricht nadat de oorspronkelijke tijd is verstreken. Dit geldt voor gebeden die je hebt gemist en alsnog moet inhalen.",
        source: "Website: Het inhalen van een levenslang aantal gemiste gebeden (2023-06-05); BSI_N1.pdf p.126"
    }
];

// Reserve-set (niet actief in de quiz)
const inactiveQuestionBank = [
    {
        question: "Welk gebed wordt direct na het verdwijnen van de avondschemering verricht?",
        answers: [
            { text: "A) Fajr", correct: false },
            { text: "B) ʿIshā", correct: true },
            { text: "C) Maghrib", correct: false }
        ],
        uitleg: "Het ʿIshā-gebed begint nadat de avondschemering is verdwenen en loopt tot aan de ochtendschemering."
    },
    {
        question: "Wat is aanbevolen bij het Maghrib-gebed?",
        answers: [
            { text: "A) Het uitstellen tot laat in de avond", correct: false },
            { text: "B) Het direct na zonsondergang verrichten", correct: true },
            { text: "C) Het samenvoegen met ʿIshā zonder reden", correct: false }
        ],
        uitleg: "Het Maghrib-gebed begint direct na zonsondergang en het is aanbevolen dit spoedig te verrichten."
    },
    {
        question: "Hoe ver moet je bij wuḍū (kleine wassing) je gezicht wassen?",
        answers: [
            { text: "A) Alleen het midden van het gezicht", correct: false },
            { text: "B) Van haargrens tot onder de kin en van oorlel tot oorlel", correct: true },
            { text: "C) Alleen voorhoofd en neus", correct: false }
        ],
        uitleg: "Tot de verplichtingen van de wuḍū (kleine wassing) behoort het wassen van het gezicht vanaf de haargrens tot onder de kin en van de ene oorlel tot de andere."
    },
    {
        question: "Wat betekent ‘wassen’ bij de wuḍū (kleine wassing)?",
        answers: [
            { text: "A) Dat de huid alleen een beetje vochtig wordt", correct: false },
            { text: "B) Dat water over elk deel van het te wassen ledemaat stroomt", correct: true },
            { text: "C) Dat men alleen met natte handen strijkt", correct: false }
        ],
        uitleg: "Bij wassen moet water daadwerkelijk over elk deel van het te wassen oppervlak stromen; alleen vochtig worden is niet voldoende."
    },
    {
        question: "Welke situatie kan de wuḍū (kleine wassing) ongeldig maken?",
        answers: [
            { text: "A) Hardop lachen tijdens een ṣalāt (gebed) met rukūʾ en sujūd", correct: true },
            { text: "B) Stil glimlachen buiten het gebed", correct: false },
            { text: "C) Een korte stilte tijdens recitatie", correct: false }
        ],
        uitleg: "Tot de wuḍū-verbrekers behoort hardop lachen tijdens een ṣalāt (gebed) met knie- en grondbuigingen."
    },
    {
        question: "Wat moet bij ghusl (grote wassing) over het lichaam gebeuren om de verplichting te vervullen?",
        answers: [
            { text: "A) Alleen het hoofd natmaken", correct: false },
            { text: "B) Water van top tot teen over de buitenkant van het hele lichaam laten vloeien", correct: true },
            { text: "C) Alleen wuḍū (kleine wassing) verrichten", correct: false }
        ],
        uitleg: "Een van de drie verplichtingen van ghusl (grote wassing) is dat water over de buitenkant van het hele lichaam vloeit."
    },
    {
        question: "Hoeveel keer sla je bij tayammum (droge reiniging) met de handen op de grond?",
        answers: [
            { text: "A) Eén keer", correct: false },
            { text: "B) Twee keer", correct: true },
            { text: "C) Drie keer", correct: false }
        ],
        uitleg: "Bij tayammum (droge reiniging) sla je eerst op de grond voor het gezicht en daarna opnieuw voor de armen."
    },
    {
        question: "Welke voorwaarde van de ṣalāt (gebed) gaat over lichaam, kleding en gebedsplaats?",
        answers: [
            { text: "A) De tijd", correct: false },
            { text: "B) Reinheid", correct: true },
            { text: "C) De adzān (gebedsoproep)", correct: false }
        ],
        uitleg: "De eerste voorwaarde van de ṣalāt (gebed) is reinheid: lichaam, kleding en gebedsplaats moeten rein zijn."
    },
    {
        question: "Wat is de zesde voorwaarde van de ṣalāt (gebed)?",
        answers: [
            { text: "A) De openingstakbīr", correct: true },
            { text: "B) De iqāmah", correct: false },
            { text: "C) De khuṭbah", correct: false }
        ],
        uitleg: "De openingstakbīr, het uitspreken van Allāhu Akbar bij het begin van het gebed, behoort tot de zes voorwaarden van de ṣalāt (gebed)."
    },
    {
        question: "Welke handeling is wājib (essentieel) in de ṣalāt (gebed)?",
        answers: [
            { text: "A) Soera al-Fātiḥa reciteren", correct: true },
            { text: "B) De adzān (gebedsoproep) geven", correct: false },
            { text: "C) De imām aanraken voor correctie", correct: false }
        ],
        uitleg: "Tot de wājib-handelingen van de ṣalāt (gebed) behoort onder meer het reciteren van soera al-Fātiḥa."
    },
    {
        question: "Wat gebeurt er als je in de ṣalāt (gebed) opzettelijk iemand begroet met woorden?",
        answers: [
            { text: "A) De ṣalāt (gebed) blijft geldig maar wordt makrūh (ongewenst)", correct: false },
            { text: "B) De ṣalāt (gebed) wordt ongeldig", correct: true },
            { text: "C) Alleen de wuḍū (kleine wassing) vervalt", correct: false }
        ],
        uitleg: "Het spreken en ook het begroeten of beantwoorden van een begroeting met woorden maakt de ṣalāt (gebed) ongeldig."
    },
    {
        question: "Wat geldt voor het verplaatsen van de grote teen tijdens de ṣalāt (gebed)?",
        answers: [
            { text: "A) Dat de ṣalāt (gebed) daardoor ongeldig wordt", correct: false },
            { text: "B) Dat dit een bekende maar onjuiste misvatting is", correct: true },
            { text: "C) Dat opnieuw wuḍū (kleine wassing) verplicht wordt", correct: false }
        ],
        uitleg: "Het verbreken van de ṣalāt (gebed) door alleen het verplaatsen van de grote teen is een onjuiste misvatting."
    },
    {
        question: "Wanneer ben je een Ṣāḥib al-tartīb bij gemiste gebeden?",
        answers: [
            { text: "A) Als je minder dan vijf gebeden hebt gemist", correct: true },
            { text: "B) Als je alleen Fajr mist", correct: false },
            { text: "C) Als je meer dan een jaar qaḍā hebt", correct: false }
        ],
        uitleg: "Wie minder dan vijf gebeden heeft gemist, geldt als Ṣāḥib al-tartīb en moet de gemiste gebeden vóór de actuele gebeden in volgorde inhalen."
    },
    {
        question: "Wat is onjuist over al-Qaḍā al-ʿUmrī ṣalāt (gebed)?",
        answers: [
            { text: "A) Dat twee of vier rakaʿāt alle levenslange qaḍā zouden wegwerken", correct: true },
            { text: "B) Dat gemiste farḍ-gebeden moeten worden ingehaald", correct: false },
            { text: "C) Dat qaḍā niet op verboden tijden mag", correct: false }
        ],
        uitleg: "Het is onjuist te denken dat enkele rakaʿāt van al-Qaḍā al-ʿUmrī alle gemiste gebeden van een leven laten vervallen."
    }
];

const CATEGORIES = [
    "Gebedstijden",
    "Reinheid",
    "Voorwaarden & uitvoering",
    "Geldigheid & herstel"
];

function getCategoryLabel(idx) {
    if (idx < 8) return CATEGORIES[0];
    if (idx < 16) return CATEGORIES[1];
    if (idx < 24) return CATEGORIES[2];
    return CATEGORIES[3];
}

let currentIdx = 0;
let score = 0;
let firstTry = true;
let completionTracked = false;
let completionTrackingRequested = false;
let completionTrackingRetries = 0;
let quizStartTracked = false;
const TRACK_DEBUG_ENABLED =
    new URLSearchParams(window.location.search).get("trackdebug") === "1" ||
    window.localStorage.getItem("gebedQuizTrackDebug") === "1";

function trackEvent(path, title) {
    if (TRACK_DEBUG_ENABLED) {
        console.log("[Kennisquiz Gebed tracking]", { path, title });
    }

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

function trackQuestionAnswer(questionIdx, isCorrect, categoryLabel) {
    const questionNumber = String(questionIdx + 1).padStart(2, "0");
    const resultLabel = isCorrect ? "goed" : "fout";
    const path = `gebed-quiz/vraag-${questionNumber}-${resultLabel}`;
    const title = `Kennisquiz Gebed vraag ${questionNumber} ${resultLabel} (${categoryLabel})`;

    trackEvent(path, title);
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
    const categoryBadge = document.getElementById("category-badge");

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
            const uitnodiging = `As-Salām ʿAlaykum! Ik heb net een leuke kennisquiz over het gebed gedaan. Wil jij je kennis ook testen? Hier vind je de quiz: ${websiteUrl}`;
            const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(uitnodiging)}`;
            window.open(whatsappUrl, "_blank");
            trackEvent("gebed-quiz/gedeeld-whatsapp", "Kennisquiz Gebed gedeeld via WhatsApp");
        });
    }

    function trackQuizCompleted() {
        if (completionTracked) {
            return;
        }
        completionTrackingRequested = true;

        if (trackEvent("gebed-quiz/quiz-voltooid", "Deelnemer heeft de Kennisquiz Gebed afgerond")) {
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

        if (categoryBadge) categoryBadge.innerText = getCategoryLabel(currentIdx);

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
        const categoryLabel = getCategoryLabel(currentIdx);

        trackEvent(
            isCorrect ? "gebed-quiz/antwoord-goed" : "gebed-quiz/antwoord-fout",
            isCorrect ? "Kennisquiz Gebed antwoord goed" : "Kennisquiz Gebed antwoord fout"
        );
        trackQuestionAnswer(currentIdx, isCorrect, categoryLabel);

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
            characterImg.src = "images/mw-thinking.png";
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
        qTextElement.innerText = "Māshā Allāh! Je hebt de Kennisquiz Gebed afgerond.";
        scoreText.innerHTML = `Eindscore: ${score} van de ${questions.length}<br><br>Moge Allah ons allen helpen ons gebed te onderhouden met aandacht, eerbiedigheid en toewijding. Āmīn!`;
        resultContainer.classList.remove("hide");
        characterImg.src = "images/mw-dua.png";
        characterImg.classList.add("end");

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
        trackEvent("gebed-quiz/quiz-gestart", "Kennisquiz Gebed gestart");
        quizStartTracked = true;
    }
});
