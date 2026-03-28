(function () {
  'use strict';

  var DAY_MS = 24 * 60 * 60 * 1000;

  var RULES = [
    { n: 1, category: 'Intro', title: 'Wat is Tajwid?', ar: 'وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا', keyword: 'Zuivere recitatie', definition: 'Correcte uitspraak van elke letter met haar recht.', trigger: 'Bij elke recitatie.', how: 'Lees bedachtzaam en duidelijk.', example: '﴿ [وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا] ﴾', memory: 'Tajwid = zuiver + mooi.', articulation: { type: 'tongue', label: 'Algemeen', tip: 'Elke letter krijgt haar recht.' } },
    { n: 2, category: 'Tempo', title: 'At-Tahqiq', ar: 'التحقيق', keyword: 'Langzaam', definition: 'Langzaamste recitatietempo.', trigger: 'Bij leren en corrigeren.', how: 'Spreek elk teken volledig uit.', example: 'Lees [heel duidelijk].', memory: 'Tahqiq = leer-tempo.', articulation: { type: 'tongue', label: 'Controle', tip: 'Langzaam voor precisie.' } },
    { n: 3, category: 'Tempo', title: 'At-Tadwir', ar: 'التدوير', keyword: 'Middelmatig', definition: 'Niet te langzaam, niet te snel.', trigger: 'Dagelijkse recitatie.', how: 'Behoud balans tussen tempo en duidelijkheid.', example: 'Tempo voor [gebed en dagelijks lezen].', memory: 'Tadwir = balans.', articulation: { type: 'tongue', label: 'Balans', tip: 'Vloeiend en correct.' } },
    { n: 4, category: 'Tempo', title: 'Al-Hadr', ar: 'الحَدر', keyword: 'Snel', definition: 'Vlot lezen met behoud van regels.', trigger: 'Bij langere recitatie (khatm).', how: 'Snel maar niet slordig.', example: 'Snel met [behoud van tajwid].', memory: 'Snelheid mag regels niet breken.', articulation: { type: 'stretch', label: 'Ritme', tip: 'Geen letters inslikken.' } },
    { n: 5, category: 'Fouten', title: 'Lahn al-Jali', ar: 'اللحن الجلي', keyword: 'Grote fout', definition: 'Fout die betekenis kan veranderen.', trigger: 'Bij verkeerde letter of klinker.', how: 'Direct corrigeren en herhalen.', example: '[Harf] of [harakah] verandert.', memory: 'Jali = ernstig zichtbaar.', articulation: { type: 'throat', label: 'Precisie', tip: 'Letter en klinker exact.' } },
    { n: 6, category: 'Fouten', title: 'Lahn al-Khafi', ar: 'اللحن الخفي', keyword: 'Kleine fout', definition: 'Betekenis vaak intact, maar tajwid onjuist.', trigger: 'Bij gemiste eigenschappen/regels.', how: 'Fijn afstellen met oefening.', example: 'Gemiste [izhar/idgham/ikhfa].', memory: 'Khafi = subtiele fout.', articulation: { type: 'echo', label: 'Afwerking', tip: 'Luister op detailniveau.' } },
    { n: 7, category: 'Qiraat', title: '7 Canonieke Qiraat', ar: 'القراءات السبع', keyword: 'Recitatiestijlen', definition: 'Erkende overleveringen van recitatie.', trigger: 'Gevorderde studie.', how: 'Eerst Hafs stabiel beheersen.', example: '[Nafi], [Ibn Kathir], [Asim] ...', memory: 'Verschil in riwayah, één Koran.', articulation: { type: 'tongue', label: 'Consistentie', tip: 'Per riwayah consequent.' } },
    { n: 8, category: 'Overzicht', title: 'Hoofdonderdelen', ar: 'مخارج حركات صفات مد وقف', keyword: 'Leerlijn', definition: 'Makharij, harakat, sifat, madd, waqf.', trigger: 'Bij lesplanning.', how: 'Leer in blokken.', example: '[Makharij] → [Sifat] → [Madd].', memory: 'Structuur geeft rust.', articulation: { type: 'tongue', label: 'Structuur', tip: 'Volg de leerlijn.' } },
    { n: 9, category: 'Makharij', title: '17 articulatiepunten', ar: 'مخارج الحروف', keyword: '5 gebieden', definition: '17 punten verdeeld over 5 hoofdgebieden.', trigger: 'Bij letteruitspraak.', how: 'Koppel letter aan punt.', example: '[Jawf] [Halq] [Lisan] [Shafatan] [Khayshum].', memory: 'Plaats bepaalt klank.', articulation: { type: 'throat', label: 'Makhrajkaart', tip: 'Herken de bron van de klank.' } },
    { n: 10, category: 'Makharij', title: 'Al-Jawf', ar: 'الجوف', keyword: 'Maddletters', definition: 'Mond-keelholte voor maddletters.', trigger: 'Bij lange klinkers.', how: 'Houd klankruimte open.', example: '[ا] [و] [ي].', memory: 'Jawf = ruimte voor verlenging.', articulation: { type: 'stretch', label: 'Open resonantie', tip: 'Laat klank vloeien.' } },
    { n: 11, category: 'Makharij', title: 'Al-Halq', ar: 'الحلق', keyword: 'Keelletters', definition: 'Onder, midden en boven keel.', trigger: 'Bij ء ه / ع ح / غ خ.', how: 'Gebruik juiste keeldeel.', example: 'Onder [ء ه], midden [ع ح], boven [غ خ].', memory: 'Halq-ladder 3 niveaus.', articulation: { type: 'throat', label: 'Keelzones', tip: 'Plaats letter in juiste zone.' } },
    { n: 12, category: 'Makharij', title: 'Al-Lisan', ar: 'اللسان', keyword: 'Tongletters', definition: 'Grootste groep letters komt van de tong.', trigger: 'Bij meerdere lettersets.', how: 'Train achter/midden/voor/zijkant.', example: 'Achter [ق ك], midden [ج ش ي], voor [ن ر].', memory: 'Tong stuurt veel letters.', articulation: { type: 'tongue', label: 'Tongcontrole', tip: 'Voel het actieve tongdeel.' } },
    { n: 13, category: 'Makharij', title: 'Ash-Shafatan', ar: 'الشفتان', keyword: 'Lippenletters', definition: 'Lippenstand bepaalt enkele letters.', trigger: 'Bij ف / ب م / و.', how: 'Onderlip+tanden, sluiting, ronding.', example: '[ف] [ب م] [و].', memory: 'Lippen: raken/sluiten/ronden.', articulation: { type: 'lips', label: 'Lipwerk', tip: 'Lippenstand bewust aansturen.' } },
    { n: 14, category: 'Makharij', title: 'Al-Khayshum', ar: 'الخيشوم', keyword: 'Neusresonantie', definition: 'Bron van ghunnah op nun/mim.', trigger: 'Bij ghunnah-context.', how: 'Nasale resonantie 2 harakah.', example: 'Ghunnah op [ن] en [م].', memory: 'Khayshum geeft ghunnah.', articulation: { type: 'nose', label: 'Neus', tip: 'Laat zachte resonantie horen.' } },
    { n: 15, category: 'Harakat', title: 'Korte klinkers', ar: 'فَ فِ فُ', keyword: 'a i oe', definition: 'Fathah, kasrah, dammah.', trigger: 'Op mutaharrik letters.', how: 'Kort en zuiver lezen.', example: '[فَ]=a [فِ]=i [فُ]=oe.', memory: 'Korte klank, geen verlenging.', articulation: { type: 'tongue', label: 'Klinkers', tip: 'Kort en scherp.' } },
    { n: 16, category: 'Harakat', title: 'Tanwin', ar: 'ً ٍ ٌ', keyword: 'an/in/un', definition: 'Nunatie met eind-n-klank.', trigger: 'Bij dubbele klinkertekens.', how: 'Lichte eind-n uitspreken.', example: '[ـً] an, [ـٍ] in, [ـٌ] un.', memory: 'Tanwin = korte eind-n.', articulation: { type: 'nose', label: 'Eind-n', tip: 'Licht en kort nasaal.' } },
    { n: 17, category: 'Harakat', title: 'Madd-tekens', ar: 'ٰ ٖ ٗ', keyword: 'Lange klinkers', definition: 'Staande tekens voor verlenging.', trigger: 'Bij deze diakritische tekens.', how: 'Verleng volgens madd-context.', example: 'ٰ [aa], ٖ [ie], ٗ [oe].', memory: 'Teken markeert rek.', articulation: { type: 'stretch', label: 'Verlenging', tip: 'Gelijkmatige rek.' } },
    { n: 18, category: 'Tashkil', title: 'Sukun', ar: 'ْ', keyword: 'Rustteken', definition: 'Letter zonder klinker.', trigger: 'Bij sukunteken.', how: 'Stop klank op medeklinker.', example: 'عَلَيْهِ[مْ].', memory: 'Sukun = geen vocaal.', articulation: { type: 'echo', label: 'Afsluiting', tip: 'Geen extra klinker toevoegen.' } },
    { n: 19, category: 'Tashkil', title: 'Shaddah', ar: 'ّ', keyword: 'Verdubbeling', definition: 'Dubbele letter: vasthouden + loslaten.', trigger: 'Bij shaddah.', how: 'Eerste deel sakin, tweede met harakah.', example: 'شَ[رِّ].', memory: 'Shaddah = letter dubbel.', articulation: { type: 'tongue', label: 'Dubbel', tip: 'Twee fasen hoorbaar maken.' } },
    { n: 20, category: 'Tashkil', title: 'Al-Sifr al-Mustadir', ar: 'ۜ', keyword: 'Niet lezen', definition: 'Kan aanduiden dat maddletter niet wordt uitgesproken.', trigger: 'Bij deze markering op maddletter.', how: 'Volg de mushafnotatie.', example: 'Zoals in [أُولَـٰٓئِكَ].', memory: 'Niet elke letter wordt gelezen.', articulation: { type: 'echo', label: 'Stilte', tip: 'Laat gemarkeerde klank weg.' } },
    { n: 21, category: 'Tashkil', title: 'Hamzat al-Wasl', ar: 'ٱ', keyword: 'Verbindingshamzah', definition: 'Alleen gelezen bij starten, weg bij verbinden.', trigger: 'Binnen lopende recitatie.', how: 'Bij verbinding hamzah laten vallen.', example: '[وَٱللّٰهُ] → wallahu.', memory: 'Wasl = verbinden.', articulation: { type: 'tongue', label: 'Verbinding', tip: 'Koppel woorden vloeiend.' } },
    { n: 22, category: 'Sifat', title: 'Sifat-overzicht', ar: 'صفات لازمة وعارضة', keyword: 'Klankeigenschappen', definition: 'Vaste en contextafhankelijke eigenschappen.', trigger: 'Bij klankverfijning.', how: 'Eerst lazimah, dan aridah.', example: '[Hams/Jahr], [Shiddah/Rikhawah].', memory: 'Makharij = waar, sifat = hoe.', articulation: { type: 'tongue', label: 'Klankkleur', tip: 'Geef letter haar karakter.' } },
    { n: 23, category: 'Sifat', title: 'Hams en Jahr', ar: 'همس / جهر', keyword: 'Fluister/stem', definition: 'Hams met ademdoorstroom, jahr met stemkracht.', trigger: 'Bij specifieke lettersets.', how: 'Voel adem versus stemtrilling.', example: 'Hams: [فحثه شخص سكت].', memory: 'Hams fluistert, Jahr klinkt vol.', articulation: { type: 'throat', label: 'Adem', tip: 'Observeer luchtstroom.' } },
    { n: 24, category: 'Sifat', title: 'Shiddah/Rikhawah/Tawassut', ar: 'شدة رخاوة توسط', keyword: 'Krachtniveau', definition: 'Hard, zacht of ertussenin qua klankstroom.', trigger: 'Bij consonantdruk.', how: 'Pas druk per letter aan.', example: 'Shiddah: [أجد قط بكت].', memory: 'Drie standen van klankstroom.', articulation: { type: 'echo', label: 'Stroom', tip: 'Niet alles even hard.' } },
    { n: 25, category: 'Sifat', title: "Isti'la / Istifal", ar: 'استعلاء / استفال', keyword: 'Dik/dun', definition: 'Tonghoogte bepaalt zware of lichte klank.', trigger: 'Bij zware letters en tegenhangers.', how: 'Hoge tong voor tafkhim.', example: "[خ ص ض غ ط ق ظ].", memory: 'Hoge tong = dikke klank.', articulation: { type: 'tongue', label: 'Tonghoogte', tip: 'Kies dik of dun bewust.' } },
    { n: 26, category: 'Sifat', title: 'Safir, Qalqalah, Lin', ar: 'صفير قلقلة لين', keyword: 'Speciale effecten', definition: 'Specifieke letters krijgen specifieke klankkleur.', trigger: 'Bij juiste letter + context.', how: 'Qalqalah alleen op sakin letters.', example: 'Qalqalah: [ق ط ب ج د].', memory: 'Speciale sifat geven kleur.', articulation: { type: 'echo', label: 'Effect', tip: 'Stuiter zonder extra klinker.' } },
    { n: 27, category: 'Ahkam', title: 'Sifat al-Aridah', ar: 'صفات عارضة', keyword: 'Contextafhankelijk', definition: 'Regels afhankelijk van omringende letters.', trigger: 'Bij lam/ra/nun/mim-context.', how: 'Lees altijd de context mee.', example: '[Lam], [Ra], [Nun], [Mim].', memory: 'Context bepaalt uitspraak.', articulation: { type: 'tongue', label: 'Context', tip: 'Kijk één letter vooruit.' } },
    { n: 28, category: 'Ahkam', title: 'Lam Qamariyyah/Shamsiyyah', ar: 'القمريّة / الشمسيّة', keyword: 'Lam wel/niet', definition: 'Voor maanletters lees je lam, voor zonletters niet.', trigger: 'Bij woord met ال.', how: 'Shamsiyyah: volgende letter mushaddad.', example: '[الْقَمَرُ] vs [الشَّمْسُ].', memory: 'Qamariyyah leest lam.', articulation: { type: 'tongue', label: 'Lam', tip: 'Herken letter na ال.' } },
    { n: 29, category: 'Ahkam', title: 'Tafkhim/Tarqiq (ا ل ر)', ar: 'تفخيم ترقيق', keyword: 'Dik of dun', definition: 'Alif, lam, ra volgen contextregels voor dik/dun.', trigger: 'Bij deze letters in woorden.', how: 'Bepaal op basis van harakah/sukun.', example: 'Naam Allah dik/dun volgens vorige klinker.', memory: 'Dikte volgt context.', articulation: { type: 'tongue', label: 'Dikte', tip: 'Kasrah trekt vaak dun.' } },
    { n: 30, category: 'Nun/Tanwin', title: 'Izhar', ar: 'ء هـ ع ح غ خ', keyword: 'Helder', definition: 'Nun/tanwin duidelijk zonder ghunnah.', trigger: 'Bij halqletters.', how: 'N-klank volledig uitspreken.', example: 'مِنْ [هَادٍ].', memory: 'Keelletter = izhar.', articulation: { type: 'throat', label: 'Keel', tip: 'Duidelijke n-klank.' } },
    { n: 31, category: 'Nun/Tanwin', title: 'Idgham', ar: 'يرملون', keyword: 'Samensmelten', definition: 'Nun/tanwin gaat op in volgende letter.', trigger: 'Bij ي ر م ل و ن.', how: 'Met ghunnah bij ينمو, zonder bij ر ل.', example: '[يَنْمُو] / [ر ل].', memory: 'Yarmalun-regel.', articulation: { type: 'nose', label: 'Ghunnah keuze', tip: 'Check met/zonder ghunnah.' } },
    { n: 32, category: 'Nun/Tanwin', title: 'Iqlab en Ikhfa', ar: 'ب + overige', keyword: 'Omzetten/verstoppen', definition: 'Bij ب wordt n→m, bij overige letters verborgen n.', trigger: 'Iqlab bij ب, ikhfa bij rest.', how: 'Beide met 2 harakah ghunnah.', example: 'أَنْ[بِئْهُمْ] / مِنْ [شَرّ].', memory: 'Ba = iqlab, rest ikhfa.', articulation: { type: 'nose', label: 'Verborgen n', tip: 'Zachte nasale overgang.' } },
    { n: 33, category: 'Mim Sakinah', title: 'Mim-regels', ar: 'مْ', keyword: 'Izhar/Idgham/Ikhfa', definition: 'Mim sakin kent drie hoofdregels.', trigger: 'Bij mim + volgende letter.', how: 'Idgham bij م, ikhfa bij ب, anders izhar.', example: 'لَهُمْ [مَا] / ...[بِ].', memory: 'Mim+ba/mim zijn uitzonderingen.', articulation: { type: 'lips', label: 'Lippen', tip: 'Lipsluiting goed sturen.' } },
    { n: 34, category: 'Ghunnah', title: 'Nun/Mim Mushaddadah', ar: 'نّ / مّ', keyword: '2 harakah', definition: 'Nun/mim met shaddah altijd ghunnah.', trigger: 'Bij نّ of مّ.', how: 'Houd 2 harakah nasale klank.', example: 'إِ[نَّ]ا / ثُ[مَّ].', memory: 'Shaddah op nun/mim = ghunnah.', articulation: { type: 'nose', label: 'Ghunnah', tip: 'Stabiele duur.' } },
    { n: 35, category: 'Madd', title: 'Madd al-Asli', ar: 'ا و ي', keyword: 'Natuurlijk 2', definition: 'Basismadd van 2 harakah.', trigger: 'Fathah+alif, kasrah+ya, dammah+waw.', how: 'Rek precies 2 harakah.', example: '[قَالَ] [قِيلَ] [يَقُولُ].', memory: 'Asli is de basis.', articulation: { type: 'stretch', label: 'Basisrek', tip: 'Steady 2 harakah.' } },
    { n: 36, category: 'Madd', title: "Madd al-Far'i", ar: 'مد فرعي', keyword: 'Secundaire madd', definition: 'Langere madd door hamzah/sukun-context.', trigger: 'Muttasil, munfasil, arid, lazim, etc.', how: 'Volg type-specifieke lengte.', example: 'Muttasil 4-5, munfasil 2/4/5, lazim 6.', memory: 'Context verlengt madd.', articulation: { type: 'stretch', label: 'Contextrek', tip: 'Type bepaalt lengte.' } },
    { n: 37, category: 'Waqf', title: 'Basisregels stoppen', ar: 'الوقف', keyword: 'Stopcorrectie', definition: 'Bij stop wordt eindletter vaak sakin.', trigger: 'Bij ayah-einde of waqfteken.', how: 'Stop correct en herstart netjes.', example: '[ة] wordt bij stop vaak [ه].', memory: 'Waqf verandert eindklank.', articulation: { type: 'echo', label: 'Afsluiting', tip: 'Eindig zonder extra klank.' } },
    { n: 38, category: 'Waqf', title: 'Waqf-symbolen', ar: 'م ج لا قلي ق ط صلي ۩', keyword: 'Stop/doorgaan', definition: 'Symbolen in mushaf sturen stop of doorgaan.', trigger: 'Tijdens recitatie uit mushaf.', how: 'Volg elk waqfteken bewust.', example: '[م] stop, [لا] doorgaan, [۩] sajdah.', memory: 'Lees symbool vóór je ademt.', articulation: { type: 'echo', label: 'Ritme', tip: 'Waqf bewaakt betekenis.' } }
  ];

  var LESSONS = [
    { id:'intro', title:'Les 1: Intro en tempo', desc:'Wat is tajwid en welke tempo\'s zijn er?', range:[1,4], points:['Tajwid geeft letters hun rechten.','Drie tempo\'s: tahqiq, tadwir, hadr.','Snelheid nooit boven correctheid.'] },
    { id:'errors', title:'Les 2: Fouten en qiraat', desc:'Lahn en korte qiraat-intro.', range:[5,7], points:['Lahn al-jali kan betekenis veranderen.','Lahn al-khafi is subtieler maar moet weg.','Qiraat zijn erkende recitatie-overleveringen.'] },
    { id:'map', title:'Les 3: Tajwidkaart', desc:'Hoofdonderdelen van het vak.', range:[8,8], points:['Makharij, harakat, sifat, madd, waqf.','Leer in kleine blokken.','Herhaal gericht.'] },
    { id:'makharij', title:'Les 4: Makharij', desc:'Articulatiegebieden.', range:[9,14], points:['17 punten in 5 gebieden.','Elke letter heeft vaste bron.','Khayshum draagt ghunnah.'] },
    { id:'harakat', title:'Les 5: Harakat en tashkil', desc:'Klinkers en leestekens.', range:[15,21], points:['Fathah, kasrah, dammah zijn basis.','Sukun/shaddah sturen lettergedrag.','Hamzat al-wasl valt weg bij verbinding.'] },
    { id:'sifat', title:'Les 6: Sifat al-lazimah', desc:'Vaste klankeigenschappen.', range:[22,26], points:['Sifat bepalen klankkwaliteit.','Werk met tegenstellingen.','Qalqalah/safir/lin geven nuance.'] },
    { id:'ahkam', title:'Les 7: Contextregels', desc:'Lam/ra en contextahkam.', range:[27,29], points:['Context maakt dik of dun.','Lam qamariyyah vs shamsiyyah.','Ra volgt regels van context.'] },
    { id:'nun', title:'Les 8: Nun en Mim regels', desc:'Nun tanwin, mim sakin, ghunnah.', range:[30,34], points:['Nun/tanwin: izhar-idgham-iqlab-ikhfa.','Mim sakin: 3 regels.','Ghunnah meestal 2 harakah.'] },
    { id:'madd', title:'Les 9: Madd', desc:'Natuurlijke en secundaire madd.', range:[35,36], points:['Asli = 2 harakah basis.','Far\'i door extra oorzaak.','Lengte hangt af van type madd.'] },
    { id:'waqf', title:'Les 10: Waqf', desc:'Stopregels en symbolen.', range:[37,38], points:['Bij stop verandert eindklank vaak.','Symbolen bepalen stop/doorgaan.','Goed waqf bewaakt betekenis.'] }
  ];

  var STORAGE_KEY = 'tajweedBasisV2';
  var state = loadState();
  if (!state.lesson) state.lesson = { current: 0, completed: [] };
  if (!Array.isArray(state.lesson.completed)) state.lesson.completed = [];

  function byId(id){ return document.getElementById(id); }

  var searchInput = byId('searchInput');
  var searchWrap = byId('searchWrap');
  var studyUtilities = byId('studyUtilities');
  var toggleDifficultOnly = byId('toggleDifficultOnly');
  var toggleReviewOnly = byId('toggleReviewOnly');
  var dueInfo = byId('dueInfo');
  var rulesGrid = byId('rulesGrid');
  var noResults = byId('noResults');
  var modeGallery = byId('modeGallery');
  var modeFlashcard = byId('modeFlashcard');
  var modeQuiz = byId('modeQuiz');
  var modeLesson = byId('modeLesson');
  var viewGallery = byId('viewGallery');
  var viewFlashcard = byId('viewFlashcard');
  var viewQuiz = byId('viewQuiz');
  var viewLesson = byId('viewLesson');

  var fcCard = byId('fcCard');
  var fcCardInner = byId('fcCardInner');
  var fcNumber = byId('fcNumber');
  var fcCategory = byId('fcCategory');
  var fcTitle = byId('fcTitle');
  var fcArabic = byId('fcArabic');
  var fcKeyword = byId('fcKeyword');
  var fcDefinition = byId('fcDefinition');
  var fcTrigger = byId('fcTrigger');
  var fcHow = byId('fcHow');
  var fcExample = byId('fcExample');
  var fcMemory = byId('fcMemory');
  var fcArticulation = byId('fcArticulation');
  var fcPrev = byId('fcPrev');
  var fcNext = byId('fcNext');
  var fcShuffleBtn = byId('fcShuffleBtn');
  var fcLearnedCheck = byId('fcLearnedCheck');
  var fcDifficultCheck = byId('fcDifficultCheck');
  var fcProgressFill = byId('fcProgressFill');
  var fcProgressText = byId('fcProgressText');
  var fcCounter = byId('fcCounter');
  var reviewHard = byId('reviewHard');
  var reviewGood = byId('reviewGood');
  var reviewEasy = byId('reviewEasy');
  var reviewNextInfo = byId('reviewNextInfo');

  var quizLabel = byId('quizLabel');
  var quizExample = byId('quizExample');
  var quizOptions = byId('quizOptions');
  var quizFeedback = byId('quizFeedback');
  var quizNextBtn = byId('quizNextBtn');
  var quizScore = byId('quizScore');
  var quizArticulation = byId('quizArticulation');

  var lessonProgress = byId('lessonProgress');
  var lessonTitle = byId('lessonTitle');
  var lessonDesc = byId('lessonDesc');
  var lessonNotesList = byId('lessonNotesList');
  var lessonPrevBtn = byId('lessonPrevBtn');
  var lessonNextBtn = byId('lessonNextBtn');
  var lessonCards = byId('lessonCards');
  var lessonCheckpointLabel = byId('lessonCheckpointLabel');
  var lessonCheckpointQuestion = byId('lessonCheckpointQuestion');
  var lessonCheckpointOptions = byId('lessonCheckpointOptions');
  var lessonCheckpointFeedback = byId('lessonCheckpointFeedback');
  var lessonCheckpointNext = byId('lessonCheckpointNext');
  var lessonMarkDone = byId('lessonMarkDone');

  var modalOverlay = byId('modalOverlay');
  var modalClose = byId('modalClose');
  var modalNumber = byId('modalNumber');
  var modalCategory = byId('modalCategory');
  var modalTitle = byId('modalTitle');
  var modalArabic = byId('modalArabic');
  var modalKeyword = byId('modalKeyword');
  var modalDefinition = byId('modalDefinition');
  var modalTrigger = byId('modalTrigger');
  var modalHow = byId('modalHow');
  var modalExample = byId('modalExample');
  var modalMemory = byId('modalMemory');
  var modalArticulation = byId('modalArticulation');

  var order = buildDefaultOrder();
  var currentPos = 0;
  var currentMode = 'gallery';
  var quizState = { current:null, answered:false, lastAnswerIndex:null, deck:[], poolKey:'' };
  var lessonIndex = Math.min(Math.max(state.lesson.current || 0, 0), LESSONS.length - 1);
  var lessonCheckpointState = { current:null, answered:false, decks:{}, lastByLesson:{} };

  function loadState(){
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        var parsed = JSON.parse(raw);
        if (parsed && parsed.version === 2) return parsed;
      }
      var oldRaw = localStorage.getItem('tajweedBasisV1');
      if (oldRaw) {
        var old = JSON.parse(oldRaw);
        return { version:2, learned:Array.isArray(old.learned)?old.learned:[], difficult:[], reviews:{}, lastRule:old.lastRule||1, difficultOnly:false, reviewOnly:false, quiz:{asked:0,correct:0,wrong:0}, lesson:{current:0,completed:[]} };
      }
    } catch(e){}
    return { version:2, learned:[], difficult:[], reviews:{}, lastRule:1, difficultOnly:false, reviewOnly:false, quiz:{asked:0,correct:0,wrong:0}, lesson:{current:0,completed:[]} };
  }

  function saveState(){ try { localStorage.setItem(STORAGE_KEY, JSON.stringify(state)); } catch(e){} }
  function buildDefaultOrder(){ var a=[]; for(var i=0;i<RULES.length;i++) a.push(i); return a; }
  function shuffleArray(arr){ var a=arr.slice(); for(var i=a.length-1;i>0;i--){ var j=Math.floor(Math.random()*(i+1)); var t=a[i]; a[i]=a[j]; a[j]=t; } return a; }
  function escapeHtml(t){ return String(t).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;'); }
  function highlightArabic(t){ return escapeHtml(t).replace(/\[(.*?)\]/g,'<span class="tw-highlight">$1</span>'); }
  function isLearned(n){ return state.learned.indexOf(n)!==-1; }
  function isDifficult(n){ return state.difficult.indexOf(n)!==-1; }
  function setLearned(n,val){ var p=state.learned.indexOf(n); if(val&&p===-1)state.learned.push(n); if(!val&&p!==-1)state.learned.splice(p,1); saveState(); renderProgress(); }
  function setDifficult(n,val){ var p=state.difficult.indexOf(n); if(val&&p===-1)state.difficult.push(n); if(!val&&p!==-1)state.difficult.splice(p,1); saveState(); renderProgress(); }
  function getReview(n){ return state.reviews[n] || { interval:0, dueAt:0 }; }
  function isDue(n){ var r=getReview(n); return !r.dueAt || r.dueAt <= Date.now(); }
  function getDueCount(){ var c=0; for(var i=0;i<RULES.length;i++) if(isDue(RULES[i].n)) c++; return c; }
  function formatDate(ts){ if(!ts) return '-'; return new Date(ts).toLocaleDateString('nl-NL',{day:'2-digit',month:'2-digit'}); }

  function gradeReview(ruleN, level){
    var cur=getReview(ruleN), next=1;
    if(level==='hard') next=1;
    if(level==='good') next=cur.interval>0?Math.max(1,Math.round(cur.interval*2)):1;
    if(level==='easy') next=cur.interval>0?Math.max(3,Math.round(cur.interval*3)):3;
    state.reviews[ruleN]={ interval:next, dueAt:Date.now() + next*DAY_MS };
    setLearned(ruleN,true);
    saveState();
    renderFlashcard();
  }

  function getActiveRuleIndices(){
    var out=[];
    for(var i=0;i<RULES.length;i++){
      var r=RULES[i];
      if(state.difficultOnly && !isDifficult(r.n)) continue;
      if(state.reviewOnly && !isDue(r.n)) continue;
      out.push(i);
    }
    return out.length?out:buildDefaultOrder();
  }

  function updateStudyUtilities(){
    toggleDifficultOnly.textContent='Alleen lastig: ' + (state.difficultOnly?'aan':'uit');
    toggleReviewOnly.textContent='Herhaalmodus: ' + (state.reviewOnly?'aan':'uit');
    dueInfo.textContent=getDueCount() + ' regels toe aan herhaling';
  }

  function illustrationPath(type){ return 'images/articulation/' + (type||'tongue') + '.svg'; }
  function renderArticulation(el,a){
    if(!el) return;
    a = a || { type:'tongue', label:'Articulatie', tip:'-' };
    el.innerHTML = '<span class="art-icon '+a.type+'"><img class="art-illustration" src="'+illustrationPath(a.type)+'" alt="Illustratie '+escapeHtml(a.label)+'"></span><span><strong>'+escapeHtml(a.label)+':</strong> '+escapeHtml(a.tip)+'</span>';
  }

  function renderGallery(filter){
    var txt=(filter||'').toLowerCase().trim(), html='', count=0;
    for(var i=0;i<RULES.length;i++){
      var r=RULES[i];
      if(state.difficultOnly && !isDifficult(r.n)) continue;
      if(state.reviewOnly && !isDue(r.n)) continue;
      var hay=[r.title,r.keyword,r.category,r.example,r.ar].join(' ').toLowerCase();
      if(txt && hay.indexOf(txt)===-1 && String(r.n)!==txt) continue;
      html += '<article class="rule-card'+(isLearned(r.n)?' learned':'')+(isDifficult(r.n)?' difficult':'')+'" data-index="'+i+'">'+
        '<span class="rule-num">Regel '+r.n+'</span><span class="rule-cat">'+escapeHtml(r.category)+'</span><p class="rule-title">'+escapeHtml(r.title)+'</p><p class="rule-keyword">'+escapeHtml(r.keyword)+'</p><p class="rule-arabic" dir="rtl" lang="ar">'+escapeHtml(r.ar)+'</p></article>';
      count++;
    }
    rulesGrid.innerHTML=html; noResults.hidden=count>0;
  }

  function currentRule(){ return RULES[order[currentPos]||0]; }
  function rebuildOrderAndPosition(){
    var cur=currentRule().n; order=getActiveRuleIndices(); currentPos=0;
    for(var i=0;i<order.length;i++){ if(RULES[order[i]].n===cur){ currentPos=i; break; } }
  }

  function renderFlashcard(){
    var r=currentRule(), rev=getReview(r.n);
    fcNumber.textContent='Regel '+r.n; fcCategory.textContent=r.category; fcTitle.textContent=r.title; fcArabic.textContent=r.ar;
    fcKeyword.textContent='Kern: '+r.keyword; fcDefinition.textContent='Definitie: '+r.definition; fcTrigger.textContent='Wanneer: '+r.trigger;
    fcHow.textContent='Uitspraak: '+r.how; fcExample.innerHTML='Voorbeeld: '+highlightArabic(r.example); fcMemory.textContent='Onthouden: '+r.memory;
    renderArticulation(fcArticulation,r.articulation);
    fcCardInner.classList.remove('flipped'); fcLearnedCheck.checked=isLearned(r.n); fcDifficultCheck.checked=isDifficult(r.n);
    fcCounter.textContent=(currentPos+1)+' / '+order.length; reviewNextInfo.textContent='Volgende herhaling: '+formatDate(rev.dueAt)+' ('+(isDue(r.n)?'nu oefenen':'niet nu')+')';
    state.lastRule=r.n; saveState();
  }

  function renderProgress(){
    var learned=state.learned.length, total=RULES.length, pct=total?Math.round((learned/total)*100):0;
    fcProgressFill.style.width=pct+'%'; fcProgressText.textContent=learned+' / '+total+' geleerd';
    updateStudyUtilities(); renderGallery(searchInput.value);
  }

  function goNext(){ currentPos=(currentPos+1)%order.length; renderFlashcard(); }
  function goPrev(){ currentPos=(currentPos-1+order.length)%order.length; renderFlashcard(); }
  function shuffleOrder(){ order=shuffleArray(getActiveRuleIndices()); currentPos=0; renderFlashcard(); }

  function openModal(r){
    modalNumber.textContent='Regel '+r.n; modalCategory.textContent=r.category; modalTitle.textContent=r.title; modalArabic.textContent=r.ar;
    modalKeyword.textContent='Kern: '+r.keyword; modalDefinition.textContent='Definitie: '+r.definition; modalTrigger.textContent='Wanneer: '+r.trigger;
    modalHow.textContent='Uitspraak: '+r.how; modalExample.innerHTML='Voorbeeld: '+highlightArabic(r.example); modalMemory.textContent='Onthouden: '+r.memory;
    renderArticulation(modalArticulation,r.articulation); modalOverlay.hidden=false;
  }
  function closeModal(){ modalOverlay.hidden=true; }

  function lessonRuleIndices(lesson){ var out=[]; for(var i=0;i<RULES.length;i++) if(RULES[i].n>=lesson.range[0]&&RULES[i].n<=lesson.range[1]) out.push(i); return out; }
  function isLessonDone(id){ return state.lesson.completed.indexOf(id)!==-1; }
  function markLessonDone(id){ if(!isLessonDone(id)) { state.lesson.completed.push(id); saveState(); } }

  function buildLessonCheckpoint(lesson){
    var pool=lessonRuleIndices(lesson); if(!pool.length) return null;
    var deck=lessonCheckpointState.decks[lesson.id] || [];
    if(!deck.length){
      deck=shuffleArray(pool);
      if(deck.length>1 && lessonCheckpointState.lastByLesson[lesson.id]!==undefined && deck[0]===lessonCheckpointState.lastByLesson[lesson.id]){
        var sp=1+Math.floor(Math.random()*(deck.length-1)); var tmp=deck[0]; deck[0]=deck[sp]; deck[sp]=tmp;
      }
    }
    var answerIndex=deck.shift(); lessonCheckpointState.decks[lesson.id]=deck;
    var wrongPool=shuffleArray(buildDefaultOrder().filter(function(i){ return i!==answerIndex; }));
    var options=[answerIndex]; while(options.length<4&&wrongPool.length) options.push(wrongPool.pop()); options=shuffleArray(options);
    return { lessonId:lesson.id, answerIndex:answerIndex, options:options };
  }

  function renderLessonCheckpoint(lesson){
    var q=buildLessonCheckpoint(lesson); lessonCheckpointState.current=q; lessonCheckpointState.answered=false;
    if(!q){ lessonCheckpointQuestion.textContent='Geen checkpoint beschikbaar.'; lessonCheckpointOptions.innerHTML=''; lessonCheckpointFeedback.textContent=''; return; }
    lessonCheckpointState.lastByLesson[lesson.id]=q.answerIndex;
    var answer=RULES[q.answerIndex];
    lessonCheckpointLabel.textContent='Checkpoint - '+lesson.title;
    lessonCheckpointQuestion.innerHTML='Welke regel hoort bij dit voorbeeld?<br><span class="lesson-check-ar">'+highlightArabic(answer.example)+'</span>';
    var html='';
    for(var i=0;i<q.options.length;i++){
      var opt=RULES[q.options[i]];
      html += '<button class="quiz-option lesson-option" data-index="'+q.options[i]+'"><strong>'+escapeHtml(opt.title)+'</strong><span>'+escapeHtml(opt.category)+'</span></button>';
    }
    lessonCheckpointOptions.innerHTML=html; lessonCheckpointFeedback.textContent=''; lessonCheckpointFeedback.className='quiz-feedback';
  }

  function onLessonCheckpointAnswer(index){
    if(!lessonCheckpointState.current||lessonCheckpointState.answered) return;
    lessonCheckpointState.answered=true;
    var correct=index===lessonCheckpointState.current.answerIndex;
    var buttons=lessonCheckpointOptions.querySelectorAll('.lesson-option');
    for(var i=0;i<buttons.length;i++){
      var bi=Number(buttons[i].getAttribute('data-index'));
      if(bi===lessonCheckpointState.current.answerIndex) buttons[i].classList.add('is-correct');
      if(bi===index&&!correct) buttons[i].classList.add('is-wrong');
      buttons[i].disabled=true;
    }
    if(correct){ lessonCheckpointFeedback.textContent='Goed. Checkpoint behaald.'; lessonCheckpointFeedback.className='quiz-feedback ok'; setLearned(RULES[index].n,true); }
    else { lessonCheckpointFeedback.textContent='Bijna. Bekijk de kernpunten en probeer opnieuw.'; lessonCheckpointFeedback.className='quiz-feedback bad'; setDifficult(RULES[lessonCheckpointState.current.answerIndex].n,true); }
  }

  function renderLessonView(){
    var lesson=LESSONS[lessonIndex], idxs=lessonRuleIndices(lesson);
    lessonProgress.textContent='Les '+(lessonIndex+1)+' van '+LESSONS.length+(isLessonDone(lesson.id)?' · afgerond':'');
    lessonTitle.textContent=lesson.title; lessonDesc.textContent=lesson.desc;
    lessonPrevBtn.disabled=lessonIndex===0; lessonNextBtn.disabled=lessonIndex===LESSONS.length-1;
    var notes=''; for(var p=0;p<(lesson.points||[]).length;p++) notes += '<li>'+escapeHtml(lesson.points[p])+'</li>'; lessonNotesList.innerHTML=notes;
    var html='';
    for(var i=0;i<idxs.length;i++){
      var r=RULES[idxs[i]];
      html += '<article class="rule-card lesson-card'+(isLearned(r.n)?' learned':'')+'" data-rule-index="'+idxs[i]+'"><span class="rule-num">Regel '+r.n+'</span><span class="rule-cat">'+escapeHtml(r.category)+'</span><p class="rule-title">'+escapeHtml(r.title)+'</p><p class="rule-keyword">'+escapeHtml(r.keyword)+'</p></article>';
    }
    lessonCards.innerHTML=html;
    renderLessonCheckpoint(lesson);
  }

  function buildQuizQuestion(){
    var pool=getActiveRuleIndices(); if(!pool.length) pool=buildDefaultOrder();
    var key=pool.join(','); if(quizState.poolKey!==key){ quizState.poolKey=key; quizState.deck=[]; }
    if(!quizState.deck.length){
      quizState.deck=shuffleArray(pool);
      if(quizState.deck.length>1 && quizState.lastAnswerIndex!==null && quizState.deck[0]===quizState.lastAnswerIndex){
        var swapPos=1+Math.floor(Math.random()*(quizState.deck.length-1)); var t=quizState.deck[0]; quizState.deck[0]=quizState.deck[swapPos]; quizState.deck[swapPos]=t;
      }
    }
    var answerIndex=quizState.deck.shift();
    var wrongPool=shuffleArray(buildDefaultOrder().filter(function(i){ return i!==answerIndex; }));
    var options=[answerIndex]; while(options.length<4&&wrongPool.length) options.push(wrongPool.pop()); options=shuffleArray(options);
    return { answerIndex:answerIndex, options:options, answerRule:RULES[answerIndex] };
  }

  function renderQuizQuestion(q){
    quizState.current=q; quizState.answered=false; quizState.lastAnswerIndex=q.answerIndex;
    state.quiz.asked += 1; saveState();
    quizLabel.textContent='Vraag '+state.quiz.asked;
    quizExample.innerHTML=highlightArabic(q.answerRule.example);
    renderArticulation(quizArticulation,q.answerRule.articulation);
    var html='';
    for(var i=0;i<q.options.length;i++){
      var opt=RULES[q.options[i]];
      html += '<button class="quiz-option" data-index="'+q.options[i]+'"><strong>'+escapeHtml(opt.title)+'</strong><span>'+escapeHtml(opt.category)+'</span></button>';
    }
    quizOptions.innerHTML=html; quizFeedback.textContent=''; updateQuizScore();
  }
  function updateQuizScore(){ quizScore.textContent='Score: '+state.quiz.correct+' goed • '+state.quiz.wrong+' fout'; }
  function nextQuizQuestion(){ renderQuizQuestion(buildQuizQuestion()); }

  function onQuizAnswer(index){
    if(!quizState.current||quizState.answered) return;
    quizState.answered=true;
    var correct=index===quizState.current.answerIndex;
    var btns=quizOptions.querySelectorAll('.quiz-option');
    for(var i=0;i<btns.length;i++){
      var bi=Number(btns[i].getAttribute('data-index'));
      if(bi===quizState.current.answerIndex) btns[i].classList.add('is-correct');
      if(bi===index&&!correct) btns[i].classList.add('is-wrong');
      btns[i].disabled=true;
    }
    if(correct){ state.quiz.correct += 1; quizFeedback.textContent='Goed! Dit is '+quizState.current.answerRule.title+'.'; quizFeedback.className='quiz-feedback ok'; setLearned(quizState.current.answerRule.n,true); }
    else { state.quiz.wrong += 1; quizFeedback.textContent='Bijna. Correct: '+quizState.current.answerRule.title+'.'; quizFeedback.className='quiz-feedback bad'; setDifficult(quizState.current.answerRule.n,true); }
    saveState(); updateQuizScore(); renderProgress();
  }

  function setMode(mode){
    currentMode=mode;
    modeGallery.classList.toggle('active',mode==='gallery'); modeGallery.setAttribute('aria-selected',mode==='gallery'?'true':'false');
    modeFlashcard.classList.toggle('active',mode==='flashcard'); modeFlashcard.setAttribute('aria-selected',mode==='flashcard'?'true':'false');
    modeQuiz.classList.toggle('active',mode==='quiz'); modeQuiz.setAttribute('aria-selected',mode==='quiz'?'true':'false');
    modeLesson.classList.toggle('active',mode==='lesson'); modeLesson.setAttribute('aria-selected',mode==='lesson'?'true':'false');
    viewGallery.classList.toggle('active',mode==='gallery'); viewGallery.hidden=mode!=='gallery';
    viewFlashcard.classList.toggle('active',mode==='flashcard'); viewFlashcard.hidden=mode!=='flashcard';
    viewQuiz.classList.toggle('active',mode==='quiz'); viewQuiz.hidden=mode!=='quiz';
    viewLesson.classList.toggle('active',mode==='lesson'); viewLesson.hidden=mode!=='lesson';
    searchWrap.style.display = mode==='gallery' ? '' : 'none';
    studyUtilities.style.display = mode==='lesson' ? 'none' : '';
    if(mode==='quiz') nextQuizQuestion();
    if(mode==='lesson') renderLessonView();
  }

  searchInput.addEventListener('input', function(){ renderGallery(searchInput.value); });
  toggleDifficultOnly.addEventListener('click', function(){ state.difficultOnly=!state.difficultOnly; rebuildOrderAndPosition(); renderProgress(); renderFlashcard(); });
  toggleReviewOnly.addEventListener('click', function(){ state.reviewOnly=!state.reviewOnly; rebuildOrderAndPosition(); renderProgress(); renderFlashcard(); });

  rulesGrid.addEventListener('click', function(e){ var card=e.target.closest('.rule-card'); if(!card) return; var idx=Number(card.getAttribute('data-index')); if(Number.isNaN(idx)) return; openModal(RULES[idx]); });

  modeGallery.addEventListener('click', function(){ setMode('gallery'); });
  modeFlashcard.addEventListener('click', function(){ setMode('flashcard'); });
  modeQuiz.addEventListener('click', function(){ setMode('quiz'); });
  modeLesson.addEventListener('click', function(){ setMode('lesson'); });

  fcCard.addEventListener('click', function(){ fcCardInner.classList.toggle('flipped'); });
  fcNext.addEventListener('click', function(e){ e.stopPropagation(); goNext(); });
  fcPrev.addEventListener('click', function(e){ e.stopPropagation(); goPrev(); });
  fcShuffleBtn.addEventListener('click', function(e){ e.stopPropagation(); shuffleOrder(); });
  fcLearnedCheck.addEventListener('change', function(e){ setLearned(currentRule().n,e.target.checked); });
  fcDifficultCheck.addEventListener('change', function(e){ setDifficult(currentRule().n,e.target.checked); });
  reviewHard.addEventListener('click', function(){ gradeReview(currentRule().n,'hard'); });
  reviewGood.addEventListener('click', function(){ gradeReview(currentRule().n,'good'); });
  reviewEasy.addEventListener('click', function(){ gradeReview(currentRule().n,'easy'); });

  quizOptions.addEventListener('click', function(e){ var btn=e.target.closest('.quiz-option'); if(!btn) return; onQuizAnswer(Number(btn.getAttribute('data-index'))); });
  quizNextBtn.addEventListener('click', nextQuizQuestion);

  lessonPrevBtn.addEventListener('click', function(){ lessonIndex=Math.max(0,lessonIndex-1); state.lesson.current=lessonIndex; saveState(); renderLessonView(); });
  lessonNextBtn.addEventListener('click', function(){ lessonIndex=Math.min(LESSONS.length-1,lessonIndex+1); state.lesson.current=lessonIndex; saveState(); renderLessonView(); });
  lessonCards.addEventListener('click', function(e){ var card=e.target.closest('.lesson-card'); if(!card) return; var idx=Number(card.getAttribute('data-rule-index')); if(Number.isNaN(idx)) return; openModal(RULES[idx]); });
  lessonCheckpointOptions.addEventListener('click', function(e){ var btn=e.target.closest('.lesson-option'); if(!btn) return; onLessonCheckpointAnswer(Number(btn.getAttribute('data-index'))); });
  lessonCheckpointNext.addEventListener('click', function(){ renderLessonCheckpoint(LESSONS[lessonIndex]); });
  lessonMarkDone.addEventListener('click', function(){ var lesson=LESSONS[lessonIndex]; markLessonDone(lesson.id); lessonProgress.textContent='Les '+(lessonIndex+1)+' van '+LESSONS.length+' · afgerond'; });

  modalClose.addEventListener('click', closeModal);
  modalOverlay.addEventListener('click', function(e){ if(e.target===modalOverlay) closeModal(); });

  document.addEventListener('keydown', function(e){
    if(!modalOverlay.hidden && e.key==='Escape'){ closeModal(); return; }
    if(currentMode!=='flashcard') return;
    if(e.key==='ArrowRight') goNext();
    if(e.key==='ArrowLeft') goPrev();
    if(e.key===' '){ e.preventDefault(); fcCardInner.classList.toggle('flipped'); }
  });

  (function init(){
    var savedRuleN=state.lastRule||1;
    order=getActiveRuleIndices();
    currentPos=0;
    for(var i=0;i<order.length;i++){ if(RULES[order[i]].n===savedRuleN){ currentPos=i; break; } }
    updateStudyUtilities(); renderGallery(''); renderProgress(); renderFlashcard(); updateQuizScore();
  })();
})();
