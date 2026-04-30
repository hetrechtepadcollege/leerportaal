const prophetenData = [
    {
        id: 'adam',
        number: 1,
        name: 'Adam',
        arabic: 'آدَم',
        period: 'Begin van de mensheid',
        summary: 'De eerste mens en eerste profeet, geschapen door Allah en gezonden naar de aarde.',
        detail: 'Adam (vrede zij met hem) werd door Allah geschapen uit klei en in hem werd de ruh (ziel) geblazen. Hij en Hawa (Eva) woonden aanvankelijk in het paradijs, totdat zij de verboden boom naderden. Na berouw werden zij naar de aarde gezonden, waar het menselijke leven een aanvang nam. De Koran beschrijft zijn verhaal als een les over tawbah (berouw) en de eer van de mens als khalifah (rentmeester) op aarde.',
        quranRefs: ['Al-Baqarah 2:31-37', 'Al-A\'raf 7:11-25', 'Ta-Ha 20:115-123'],
        image: '',
        caption: ''
    },
    {
        id: 'idris',
        number: 2,
        name: 'Idris',
        arabic: 'إِدْرِيس',
        period: 'Vroege mensheid',
        summary: 'Een profeet die door Allah werd verhoogd naar een hoge positie en bekendstaat om zijn wijsheid en kennis.',
        detail: 'Idris (vrede zij met hem) wordt in de Koran geprezen als een oprechte en geduldige profeet. Allah verhoogde hem naar een hoge rang. Veel geleerden identificeren hem met Henoch uit de bijbelse traditie. Hij staat bekend om zijn kennis en vroomheid, en zijn verhaal benadrukt de waarde van geduld en oprechtheid in het geloof.',
        quranRefs: ['Maryam 19:56-57', 'Al-Anbiya 21:85-86'],
        image: '',
        caption: ''
    },
    {
        id: 'nuh',
        number: 3,
        name: 'Nuh',
        arabic: 'نُوح',
        period: '~3000 v. Chr.',
        summary: 'Nuh riep zijn volk 950 jaar op tot de aanbidding van Allah en bouwde de ark die hem en de gelovigen redde van de vloed.',
        detail: 'Nuh (vrede zij met hem) riep zijn volk gedurende 950 jaar op tot tawhid (eenheid van Allah), maar slechts weinigen geloofden. Op bevel van Allah bouwde hij een grote ark. Een enorme vloed kwam over de aarde en vernietigde de ongelovigen. Nuh, zijn gezin en de gelovigen werden gered. Zijn verhaal is een van de meest uitvoerig beschreven profetenverhalen in de Koran en een krachtige les over standvastigheid en vertrouwen op Allah.',
        quranRefs: ['Hud 11:25-49', 'Nuh 71:1-28', 'Al-A\'raf 7:59-64'],
        image: '',
        caption: ''
    },
    {
        id: 'hud',
        number: 4,
        name: 'Hud',
        arabic: 'هُود',
        period: '~2500 v. Chr.',
        summary: 'Hud werd gezonden naar het volk van \'Aad, dat bekendstond om zijn kracht en hoogmoed.',
        detail: 'Hud (vrede zij met hem) werd door Allah gezonden naar het volk van \'Aad, dat woonde in het gebied van al-Ahqaf (het huidige Jemen/Oman). Het volk \'Aad was trots op zijn kracht en bouwwerken, maar bleef volharden in shirk (afgoderij). Omdat zij weigerden te luisteren, werden zij verwoest door een vernietigende storm die zeven nachten en acht dagen aanhield. Het verhaal van Hud herinnert aan de gevaren van hoogmoed en ongehoorzaamheid.',
        quranRefs: ['Hud 11:50-60', 'Al-A\'raf 7:65-72', 'Ash-Shu\'ara 26:123-140'],
        image: '',
        caption: ''
    },
    {
        id: 'salih',
        number: 5,
        name: 'Salih',
        arabic: 'صَالِح',
        period: '~2000 v. Chr.',
        summary: 'Gezonden naar het volk van Thamud; de wonderlijke zij-kameel was het teken van zijn profeetschap.',
        detail: 'Salih (vrede zij met hem) werd gezonden naar het volk van Thamud, dat woonde in de regio al-Hijr (het huidige noordwestelijke Saudi-Arabië). Als bewijs van zijn profeetschap liet Allah een bijzondere zij-kameel tevoorschijn komen uit een rots. Het volk werd verboden haar te deren. Toen zij de kameel doodden, sloeg de straf van Allah toe in de vorm van een luide schreeuw (al-sa\'iqa) die het gehele volk vernietigde.',
        quranRefs: ['Hud 11:61-68', 'Al-A\'raf 7:73-79', 'Ash-Shams 91:11-15'],
        image: '',
        caption: ''
    },
    {
        id: 'ibrahim',
        number: 6,
        name: 'Ibrahim',
        arabic: 'إِبْرَاهِيم',
        period: '~1800 v. Chr.',
        summary: 'De vader der profeten en vriend van Allah (Khalilullah), bouwer van de Ka\'bah en grondlegger van de hanif-traditie.',
        detail: 'Ibrahim (vrede zij met hem) wordt in de Koran "Khalilullah" (de vriend van Allah) en de leider der mensen (imam) genoemd. Hij brak de afgoden van zijn volk stuk, werd door Nimrod in het vuur gegooid maar door Allah gered, migreerde naar het Heilige Land en naar Mekka, en bouwde samen met zijn zoon Ismail de Ka\'bah. De beroemdste beproeving was het bevel zijn zoon te offeren – een daad van volledige overgave die door Allah werd gestopt. Zijn leven is het toonbeeld van tawhid en tawakkul (vertrouwen op Allah).',
        quranRefs: ['Al-Baqarah 2:124-132', 'Ibrahim 14:35-41', 'As-Saffat 37:83-113'],
        image: '',
        caption: ''
    },
    {
        id: 'lut',
        number: 7,
        name: 'Lut',
        arabic: 'لُوط',
        period: '~1800 v. Chr.',
        summary: 'Neef van Ibrahim, gezonden naar de steden Sodom en Gomorra om zijn volk te waarschuwen voor zedelijk verval.',
        detail: 'Lut (vrede zij met hem) was een neef van Ibrahim en werd gezonden naar de steden in de vlakte van de Dode Zee. Zijn volk stond bekend om ernstige zonden, waaronder homoseksuele handelingen, overvallen en het afwijzen van gasten. Ondanks jarenlange waarschuwingen weigerde het volk te luisteren. Engelen kwamen bij Lut en vernietigden daarna de steden. Lut en zijn dochters werden gered; zijn vrouw behoorde tot de achterblijvers en werd meegetroffen door de straf.',
        quranRefs: ['Hud 11:69-83', 'Al-A\'raf 7:80-84', 'Al-Ankabut 29:28-35'],
        image: '',
        caption: ''
    },
    {
        id: 'ismail',
        number: 8,
        name: 'Ismail',
        arabic: 'إِسْمَاعِيل',
        period: '~1750 v. Chr.',
        summary: 'Eerstgeboren zoon van Ibrahim, samen met hem bouwer van de Ka\'bah en stamvader van de Arabieren.',
        detail: 'Ismail (vrede zij met hem) is de eerstgeboren zoon van Ibrahim uit zijn huwelijk met Hajar. Als baby werd hij met zijn moeder door Ibrahim naar de droge vallei van Mekka gebracht op bevel van Allah. Het wonder van de Zamzam-bron ontstond door zijn onrust als kind. Later hielp hij zijn vader bij de bouw van de Ka\'bah. De beproeving van het offer – waarbij Ibrahim beval hem te offeren – betrof Ismail, die bereid was zich te onderwerpen. Hij is stamvader van de Arabische volken en indirect van de Profeet Muhammad ﷺ.',
        quranRefs: ['Al-Baqarah 2:127-129', 'Maryam 19:54-55', 'As-Saffat 37:100-111'],
        image: '',
        caption: ''
    },
    {
        id: 'ishaq',
        number: 9,
        name: 'Ishaq',
        arabic: 'إِسْحَاق',
        period: '~1700 v. Chr.',
        summary: 'Tweede zoon van Ibrahim en Sara, een goede boodschapper die werd begiftigd met profeetschap en het Boek.',
        detail: 'Ishaq (vrede zij met hem) is de tweede zoon van Ibrahim, geboren uit zijn vrouw Sara op hoge leeftijd. Zijn geboorte werd aangekondigd door engelen die Ibrahim bezochten voordat zij naar het volk van Lut gingen. Ishaq is de stamvader van de Israëlitische profetenlijn, waaruit later Yaqub, Yusuf, Musa, Dawud, Sulaiman en Isa (vrede zij met hen allen) voortkwamen. De Koran prijst hem als een goede, rechtvaardige en gezegend profeet.',
        quranRefs: ['Hud 11:71', 'Al-Anbiya 21:72', 'As-Saffat 37:112-113'],
        image: '',
        caption: ''
    },
    {
        id: 'yaqub',
        number: 10,
        name: 'Yaqub',
        arabic: 'يَعْقُوب',
        period: '~1650 v. Chr.',
        summary: 'Zoon van Ishaq, ook bekend als Israël, vader van de twaalf stammen en van de profeet Yusuf.',
        detail: 'Yaqub (vrede zij met hem), ook bekend als Israël (Isra\'il), is de zoon van Ishaq en kleinzoon van Ibrahim. Hij is de vader van twaalf zonen, van wie de twaalf stammen van Israël zijn afgeleid. Zijn meest bekende verhaal in de Koran betreft zijn geliefde zoon Yusuf, wiens verlies hem jarenlang deed treuren totdat zij herenigd werden. Zijn blinde trouwe geduld en zijn tawakkul op Allah worden in de Koran als voorbeeld gesteld.',
        quranRefs: ['Yusuf 12:4-101', 'Al-Baqarah 2:132-133', 'Al-Anbiya 21:72'],
        image: '',
        caption: ''
    },
    {
        id: 'yusuf',
        number: 11,
        name: 'Yusuf',
        arabic: 'يُوسُف',
        period: '~1600 v. Chr.',
        summary: 'Zijn verhaal beslaat een complete soera en wordt in de Koran "het mooiste verhaal" (ahsan al-qasas) genoemd.',
        detail: 'Yusuf (vrede zij met hem) was de geliefde zoon van Yaqub. Zijn broers gooiden hem in een put uit jaloezie, waarna hij als slaaf naar Egypte werd verkocht. Ondanks beproevingen – slavernij, verlokking en gevangenis – bleef hij standvastig. Allah gaf hem de gave om dromen te interpreteren, waarmee hij de farao diende en uiteindelijk minister werd. Zijn verhaal eindigt met verzoening met zijn familie en verheerlijking van Allahs plan. Soera Yusuf (12) vertelt het volledige verhaal en wordt "de mooiste der verhalen" genoemd.',
        quranRefs: ['Yusuf 12:1-111'],
        image: '',
        caption: ''
    },
    {
        id: 'shuaib',
        number: 12,
        name: 'Shu\'aib',
        arabic: 'شُعَيْب',
        period: '~1500 v. Chr.',
        summary: 'Gezonden naar Madyan en Aykah; riep zijn volk op tot eerlijk handelen en rechtvaardigheid.',
        detail: 'Shu\'aib (vrede zij met hem) werd gezonden naar het volk van Madyan en de mensen van al-Aykah. Zijn volk was berucht om het bedriegen bij handel – het gebruiken van te lichte maten en gewichten. Shu\'aib riep hen op tot tawhid en eerlijkheid, maar zij belasterden hem en verwierpen zijn boodschap. Uiteindelijk werden zij getroffen door een aardbeving en een luide schreeuw. Zijn verhaal benadrukt de islamitische nadruk op economische rechtvaardigheid en eerlijkheid.',
        quranRefs: ['Hud 11:84-95', 'Al-A\'raf 7:85-93', 'Ash-Shu\'ara 26:176-190'],
        image: '',
        caption: ''
    },
    {
        id: 'ayyub',
        number: 13,
        name: 'Ayyub',
        arabic: 'أَيُّوب',
        period: '~1400 v. Chr.',
        summary: 'Het symbool van geduld in de islam; hij doorstond jarenlange beproevingen van ziekte en verlies met onwankelbaar geloof.',
        detail: 'Ayyub (vrede zij met hem) wordt in de Koran en de islamitische traditie beschouwd als het ultieme voorbeeld van sabr (geduld). Hij verloor zijn gezondheid, zijn bezittingen en zijn dierbaren. Jarenlang leed hij, maar klaagde niet en bleef Allah danken. Toen hij uiteindelijk tot Allah riep, antwoordde Allah direct en herstelde zijn gezondheid, gaf hem zijn familie terug en verdubbelde zijn zegeningen. Zijn verhaal is een krachtige herinnering dat beproevingen een verheffing kunnen zijn voor de gelovige.',
        quranRefs: ['Al-Anbiya 21:83-84', 'Sad 38:41-44'],
        image: '',
        caption: ''
    },
    {
        id: 'musa',
        number: 14,
        name: 'Musa',
        arabic: 'مُوسَىٰ',
        period: '~1300 v. Chr.',
        summary: 'De meest genoemde profeet in de Koran; ontving de Tawrat en confronteerde de Farao in zijn strijd voor de vrijheid van de Israëlieten.',
        detail: 'Musa (vrede zij met hem) is de meest genoemde profeet in de Koran. Als baby werd hij in de Nijl gelegd om te ontsnappen aan de moord op Israëlitische jongetjes door de Farao. Hij groeide op in het paleis van de Farao zelf. Na het doden van een Egyptenaar vluchtte hij naar Madyan, waar hij trouwde met de dochter van Shu\'aib. Bij de berg Sinai sprak Allah rechtstreeks met hem – vandaar zijn titel "Kalimullah" (degene met wie Allah sprak). Met de tien plagen confronteerde hij de Farao, bevrijdde de Israëlieten, stak de Rode Zee over en ontving de Tawrat (Torah) op de berg Sinai.',
        quranRefs: ['Al-Baqarah 2:49-73', 'Ta-Ha 20:9-98', 'Al-Qasas 28:1-43'],
        image: '',
        caption: ''
    },
    {
        id: 'harun',
        number: 15,
        name: 'Harun',
        arabic: 'هَارُون',
        period: '~1300 v. Chr.',
        summary: 'Broer en metgezel van Musa, aangesteld als zijn helper en woordvoerder in de confrontatie met de Farao.',
        detail: 'Harun (vrede zij met hem) is de oudere broer van Musa. Toen Musa door Allah werd geroepen, bad hij om zijn broer als helper, omdat Harun vloeiender sprak. Allah willigde dit in. Harun stond naast Musa in de confrontatie met de Farao en leidde het volk tijdens Musa\'s verblijf op de berg Sinai. Toen het volk in zijn afwezigheid het gouden kalf begon te aanbidden, probeerde Harun hen tegen te houden maar werd niet gehoord. Hij staat model voor gehoorzaamheid, samenwerking en broederlijke steun.',
        quranRefs: ['Al-A\'raf 7:142', 'Ta-Ha 20:29-36', 'Al-Anbiya 21:48'],
        image: '',
        caption: ''
    },
    {
        id: 'dhul-kifl',
        number: 16,
        name: 'Dhul-Kifl',
        arabic: 'ذُو الْكِفْل',
        period: '~1200 v. Chr.',
        summary: 'Een geduldig en rechtschapen profeet die door Allah werd geprezen om zijn standvastigheid.',
        detail: 'Dhul-Kifl (vrede zij met hem) wordt tweemaal in de Koran genoemd naast Ayyub en Idris. Zijn naam betekent "hij met de verantwoordelijkheid" of "bezitter van het dubbele". Over zijn exacte identiteit bestaat verschil van mening onder geleerden; sommigen identificeren hem met Ezekiël of Elija. De Koran prijst hem als een geduldig, standvastig en rechtschapen dienaar van Allah. Zijn korte vermelding benadrukt de waarde van consistentie en het nakomen van beloften.',
        quranRefs: ['Al-Anbiya 21:85-86', 'Sad 38:48'],
        image: '',
        caption: ''
    },
    {
        id: 'dawud',
        number: 17,
        name: 'Dawud',
        arabic: 'دَاوُود',
        period: '~1000 v. Chr.',
        summary: 'Koning en profeet, versloeg Jalut (Goliath) en ontving de Zabur (Psalmen) van Allah.',
        detail: 'Dawud (vrede zij met hem) was een herderjongen die als enige bereid was de reus Jalut (Goliath) te bevechten. Met zijn slinger versloeg hij hem, waarna hij door Allah koninklijk gezag en profeetschap ontving. Allah gaf hem de Zabur (Psalmen) en de gave om ijzer te vormen zonder vuur. Alle schepselen – vogels en bergen – prezen Allah samen met hem. Hij stond ook bekend als een rechtvaardig rechter. Zijn verhaal benadrukt de kracht van tawakkul en het belang van rechtvaardigheid.',
        quranRefs: ['Al-Baqarah 2:251', 'Sad 38:17-26', 'Al-Anbiya 21:78-80'],
        image: '',
        caption: ''
    },
    {
        id: 'sulaiman',
        number: 18,
        name: 'Sulaiman',
        arabic: 'سُلَيْمَان',
        period: '~950 v. Chr.',
        summary: 'Zoon van Dawud, ontving een uniek koninkrijk over mensen, djinn en dieren, en kon de taal van vogels en dieren begrijpen.',
        detail: 'Sulaiman (vrede zij met hem) is de zoon van Dawud en ontving van Allah een uniek koninkrijk dat niemand voor of na hem zou ontvangen: heerschappij over mensen, djinn en dieren, het begrip van de taal van vogels en dieren, en de wind als dienaar. Zijn hofleven omvatte een ontmoeting met de koningin van Saba (Bilqis) en de wonderlijke communicatie via de hop (hud-hud vogel). Hij bouwde de tempel van Jeruzalem. Zijn gebed om vergeving en dankbaarheid aan Allah sieren het Koranische beeld van hem als een dankbaar en wijs heerser.',
        quranRefs: ['An-Naml 27:15-44', 'Sad 38:30-40', 'Al-Anbiya 21:78-82'],
        image: '',
        caption: ''
    },
    {
        id: 'ilyas',
        number: 19,
        name: 'Ilyas',
        arabic: 'إِلْيَاس',
        period: '~850 v. Chr.',
        summary: 'Gezonden naar het volk dat de afgod Ba\'l aanbad; een rechtschapen profeet die moedig opkwam voor tawhid.',
        detail: 'Ilyas (vrede zij met hem) werd gezonden naar de Israëlieten die de afgod Ba\'l aanbaden. Hij riep hen op tot tawhid en waarschuwde hen voor de gevolgen van hun afgoderij. Zijn oproep werd door de meesten genegeerd. De Koran prijst hem als een trouwe profeet en geeft hem de eer van "vrede op Ilyas" (salam ala Ilyas). Zijn verhaal benadrukt de moed die nodig is om op te komen voor waarheid in een omgeving van weerstand.',
        quranRefs: ['As-Saffat 37:123-132', 'Al-An\'am 6:85'],
        image: '',
        caption: ''
    },
    {
        id: 'al-yasa',
        number: 20,
        name: 'Al-Yasa',
        arabic: 'الْيَسَع',
        period: '~830 v. Chr.',
        summary: 'Opvolger van Ilyas als profeet; door Allah geprezen als behorend tot de besten van de mensen.',
        detail: 'Al-Yasa (vrede zij met hem) was de opvolger van Ilyas in de profetische missie. Hij wordt tweemaal in de Koran vermeld, naast andere grote profeten. De Koran plaatst hem in de rij van uitverkorenen en geeft hem een ereplaats zonder zijn verhaal uitvoerig te beschrijven. Zijn identiteit wordt vaak geassocieerd met Elisa uit de bijbelse traditie. De vermelding toont dat Allah zijn uitverkorenen erkent en verheft, ook al zijn hun verhalen niet altijd uitgebreid beschreven.',
        quranRefs: ['Al-An\'am 6:86', 'Sad 38:48'],
        image: '',
        caption: ''
    },
    {
        id: 'yunus',
        number: 21,
        name: 'Yunus',
        arabic: 'يُونُس',
        period: '~780 v. Chr.',
        summary: 'De profeet van de vis; zijn gebed vanuit de duisternis van de walvisbuik is een van de bekendste du\'a\'s in de Koran.',
        detail: 'Yunus (vrede zij met hem) werd gezonden naar de inwoners van Nineve. Toen hij zijn volk vroegtijdig verliet zonder toestemming van Allah, belandde hij op een schip dat in een storm terechtkwam. Hij werd overboord gegooid en door een grote vis (walvis) ingeslikt. Vanuit de drievoudige duisternis (zee, nacht, vissenbuik) riep hij: "La ilaha illa Anta, subhanaka, inni kuntu min al-zalimin." Allah verhoorde zijn gebed en redde hem. Zijn volk geloofde en werd gespaard. Soera Yunus (10) is naar hem vernoemd.',
        quranRefs: ['Yunus 10:98', 'Al-Anbiya 21:87-88', 'As-Saffat 37:139-148'],
        image: '',
        caption: ''
    },
    {
        id: 'zakariya',
        number: 22,
        name: 'Zakariya',
        arabic: 'زَكَرِيَّا',
        period: '~100 v. Chr.',
        summary: 'Verzorger van Maryam en profeet die op hoge leeftijd smeekte om een kind; zijn gebed werd verhoord met de geboorte van Yahya.',
        detail: 'Zakariya (vrede zij met hem) was de bewaarder van het heiligdom waar Maryam verbleef. Telkens wanneer hij bij haar binnenkwam, vond hij voedsel dat niemand had gebracht. Dit wonder van Allahs voorzorg inspireerde hem tot een dringend gebed om een kind, ondanks zijn hoge leeftijd en de onvruchtbaarheid van zijn vrouw. Allah verhoorde zijn gebed en beloofde hem een zoon genaamd Yahya. Zijn gebed, vol vertrouwen en deemoed, wordt in de Koran vermeld als een les in du\'a en tawakkul.',
        quranRefs: ['Maryam 19:2-11', 'Al-Anbiya 21:89-90', 'Ali \'Imran 3:37-41'],
        image: '',
        caption: ''
    },
    {
        id: 'yahya',
        number: 23,
        name: 'Yahya',
        arabic: 'يَحْيَىٰ',
        period: '~0 v. Chr.',
        summary: 'Zoon van Zakariya, al vóór zijn geboorte door Allah benaamd; een profeet die vanaf zijn jeugd wijsheid en vroomheid bezat.',
        detail: 'Yahya (vrede zij met hem) is de zoon van Zakariya, wiens geboorte een wonder was. Allah noemde hem al vóór zijn geboorte bij naam. De Koran beschrijft hoe Allah hem al in zijn jeugd hikmah (wijsheid) gaf en hoe hij van nature medelevend, rein en vroom was. Hij groeide op als een devoot profeet. Zijn identiteit wordt doorgaans geassocieerd met Johannes de Doper uit de bijbelse traditie. Zijn verhaal is een teken van Allahs macht en de waarde van zuiverheid van hart.',
        quranRefs: ['Maryam 19:12-15', 'Al-Anbiya 21:89-90', 'Ali \'Imran 3:39'],
        image: '',
        caption: ''
    },
    {
        id: 'isa',
        number: 24,
        name: 'Isa',
        arabic: 'عِيسَىٰ',
        period: '~0 n. Chr.',
        summary: 'Geboren uit een maagd, ontving de Indjil (Evangelie) en verrichtte wonderen; de islamitische visie op Isa wijkt af van de christelijke.',
        detail: 'Isa (vrede zij met hem), ook wel Isa ibn Maryam (Jezus, zoon van Maria) genoemd, werd geboren zonder menselijke vader. Zijn moeder Maryam was een kuise, vrome vrouw. Als baby sprak hij al in de wieg om zijn moeder te verdedigen. Allah gaf hem de Indjil (Evangelie) en de gave om blinden te genezen, melaatsen te reinigen en doden tot leven te wekken – allemaal met Allahs toestemming. In de islam is hij een van de grootste profeten en de masih (messias), maar geen god of zoon van God. Hij werd niet gekruisigd maar door Allah verheven; hij zal voor het Laatste Uur terugkeren.',
        quranRefs: ['Maryam 19:16-36', 'Ali \'Imran 3:45-59', 'Al-Ma\'idah 5:110-117'],
        image: '',
        caption: ''
    },
    {
        id: 'muhammad',
        number: 25,
        name: 'Muhammad ﷺ',
        arabic: 'مُحَمَّد',
        period: '570 – 632 n. Chr.',
        summary: 'De Zegel der Profeten (Khatam an-Nabiyyin); de laatste profeet gezonden aan de gehele mensheid met de Koran als eeuwig wonder.',
        detail: 'Muhammad ﷺ is de laatste en sluitende profeet in de lange lijn van Koranische profeten. Hij werd geboren in Mekka in het Jaar van de Olifant (570 n. Chr.) en ontving de eerste openbaring van de Koran in de grot van Hira op zijn 40e levensjaar. Zijn boodschap is universeel en geldig tot de Dag des Oordeels. De Koran noemt hem "een genade voor de werelden" (rahmatan lil-\'alamin). Als Zegel der Profeten (Khatam an-Nabiyyin) wordt na hem geen nieuwe profeet meer gezonden. Zijn leven, de Sunnah, vormt samen met de Koran de leidraad voor de moslimgemeenschap.',
        quranRefs: ['Al-Ahzab 33:40', 'Al-Anbiya 21:107', 'Al-Fath 48:29'],
        image: '',
        caption: ''
    }
];

// ─── DOM refs ────────────────────────────────────────────────────────────────
const timelineEl   = document.getElementById('timeline');
const jumpRowEl    = document.getElementById('jump-row');
const modalEl      = document.getElementById('modal');
const modalPeriod  = document.getElementById('modal-period');
const modalArabic  = document.getElementById('modal-arabic');
const modalTitle   = document.getElementById('modal-title');
const modalDesc    = document.getElementById('modal-description');
const imageWrapEl  = document.getElementById('image-wrap');
const videoWrapEl  = document.getElementById('video-wrap');
const quranRefsEl  = document.getElementById('quran-refs');

// ─── Modal ───────────────────────────────────────────────────────────────────
function openModal(index) {
    const prophet = prophetenData[index];
    if (!prophet || !modalEl) return;

    modalPeriod.textContent  = prophet.period || '';
    modalArabic.textContent  = prophet.arabic || '';
    modalTitle.textContent   = prophet.name || '';
    modalDesc.textContent    = prophet.detail || '';

    // Image
    if (prophet.image) {
        imageWrapEl.innerHTML = `
            <img src="${prophet.image}" alt="${prophet.name}">
            <figcaption>${prophet.caption || ''}</figcaption>
        `;
    } else {
        imageWrapEl.innerHTML = '';
    }

    // Video
    if (prophet.video) {
        videoWrapEl.innerHTML = `
            <iframe
                src="${prophet.video}"
                title="Video over ${prophet.name}"
                loading="lazy"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen>
            </iframe>
        `;
    } else {
        videoWrapEl.innerHTML = '';
    }

    // Quran refs
    if (prophet.quranRefs && prophet.quranRefs.length) {
        quranRefsEl.innerHTML = `
            <p class="refs-label">Koranverwijzingen</p>
            <ul class="refs-list">
                ${prophet.quranRefs.map(r => `<li>${r}</li>`).join('')}
            </ul>
        `;
    } else {
        quranRefsEl.innerHTML = '';
    }

    modalEl.hidden = false;
    modalEl.style.display = 'grid';
    document.body.style.overflow = 'hidden';
}

function closeModal() {
    if (!modalEl) return;
    modalEl.hidden = true;
    modalEl.style.display = 'none';
    document.body.style.overflow = '';
    if (videoWrapEl) videoWrapEl.innerHTML = '';
}

// ─── Timeline item ────────────────────────────────────────────────────────────
function createTimelineItem(prophet, index) {
    const item = document.createElement('article');
    item.className = 'timeline-item';
    item.id = `prophet-${prophet.id}`;
    item.style.animationDelay = `${index * 60}ms`;

    item.innerHTML = `
        <div class="connector" aria-hidden="true">
            <div class="dot"></div>
        </div>
        <div class="event-card">
            <p class="prophet-number">Profeet ${prophet.number} van 25</p>
            <p class="arabic-heading">${prophet.arabic}</p>
            <h3 class="event-title">${prophet.name}</h3>
            <p class="event-period">${prophet.period}</p>
            <p class="event-summary">${prophet.summary}</p>
            <button class="detail-btn" type="button">Ontdek meer</button>
        </div>
    `;

    item.querySelector('.detail-btn').addEventListener('click', () => openModal(index));
    item.querySelector('.event-card').addEventListener('click', (e) => {
        if (e.target.closest('.detail-btn')) return;
        openModal(index);
    });

    return item;
}

// ─── Jump buttons ─────────────────────────────────────────────────────────────
function setupJumpButtons() {
    prophetenData.forEach((prophet) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'jump-btn';
        btn.textContent = prophet.name;
        btn.title = prophet.arabic;
        btn.addEventListener('click', () => {
            const el = document.getElementById(`prophet-${prophet.id}`);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
        });
        jumpRowEl.appendChild(btn);
    });
}

// ─── Modal events ─────────────────────────────────────────────────────────────
function setupModalActions() {
    document.getElementById('modal-close').addEventListener('click', closeModal);
    modalEl.addEventListener('click', (e) => {
        if (e.target === modalEl) closeModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !modalEl.hidden) closeModal();
    });
}

// ─── Init ─────────────────────────────────────────────────────────────────────
function init() {
    prophetenData.forEach((prophet, i) => {
        timelineEl.appendChild(createTimelineItem(prophet, i));
    });
    setupJumpButtons();
    setupModalActions();
    closeModal();
}

init();

window.openModal  = openModal;
window.closeModal = closeModal;
