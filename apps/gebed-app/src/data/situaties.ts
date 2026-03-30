/**
 * Speciale situaties-module data — Ḥanafī fiqh
 * Bronnen: Bahāre Sharīʿat, Durr al-Mukhtār, Radd al-Muḥtār (Ibn ʿĀbidīn),
 *          Fatāwā ʿĀlamgīrī, Hidāyah, BSI N1, BSI N2 (HRPC)
 */

export type SituatieCategorie =
  | 'reizen'
  | 'ziekte'
  | 'vrouw'
  | 'jama'
  | 'jumua'
  | 'eid'
  | 'qada-situaties'

export interface SituatieItem {
  vraag: string
  antwoord: string
  bron?: string
  nota?: string
}

export interface SituatieCategorieMeta {
  id: SituatieCategorie
  label: string
  emoji: string
  beschrijving: string
}

export const situatieCategorieën: SituatieCategorieMeta[] = [
  {
    id: 'reizen',
    label: 'Op reis',
    emoji: '🧳',
    beschrijving: 'Regels voor de reiziger (musāfir): verkorten en samenvoegen van gebeden.',
  },
  {
    id: 'ziekte',
    label: 'Ziekte',
    emoji: '🤒',
    beschrijving: 'Hoe bid je bij ziekte, blessure of fysieke beperking?',
  },
  {
    id: 'vrouw',
    label: 'Vrouw & gebed',
    emoji: '🌸',
    beschrijving: 'Menstruatie, nifās, en andere specifieke regels voor de vrouw.',
  },
  {
    id: 'jama',
    label: 'Gemeenschappelijk gebed',
    emoji: '🕌',
    beschrijving: 'Regels voor het gebed in gemeenschap (jamāʿah) en het imamschap.',
  },
  {
    id: 'jumua',
    label: 'Vrijdagsgebed',
    emoji: '📿',
    beschrijving: 'Regels voor het Jumuʿah-gebed: verplichting, geldigheid en de khuṭbah.',
  },
  {
    id: 'eid',
    label: 'Feestgebeden',
    emoji: '🌙',
    beschrijving: 'Regels voor de ʿEid-gebeden (Fiṭr en Aḍḥā) en de Takbīr al-Tashrīq.',
  },
  {
    id: 'qada-situaties',
    label: 'Inhalen & uitstel',
    emoji: '⏰',
    beschrijving: 'Wanneer en hoe je gemiste gebeden inhaalt in bijzondere omstandigheden.',
  },
]

export const situatieItems: Record<SituatieCategorie, SituatieItem[]> = {
  reizen: [
    {
      vraag: 'Wanneer ben je een "reiziger" (musāfir) in de ogen van de sharīʿah?',
      antwoord:
        'Je bent een musāfir wanneer je met de intentie om een reis van drie dagen te maken je woonplaats hebt verlaten. De minimale reisafstand is drie dagreizen, wat neerkomt op circa 92 km (57,83 mijl). Zodra je de bebouwde kom van je woonplaats verlaat met die intentie, beginnen de reisregels te gelden — ook als je met bus, trein of vliegtuig reist.',
      bron: 'Bahāre Sharīʿat, BSI N2',
    },
    {
      vraag: 'Wat doe je als reiziger met de gebeden?',
      antwoord:
        'Als musāfir bid je de 4-rakaʿāt farḍ gebeden (Ẓuhr, ʿAṣr, ʿIshā) in op 2 rakaʿāt. Dit heet qaṣr (verkorten). Fajr (2 rakaʿāt), Maghrib (3 rakaʿāt) en Witr blijven ongewijzigd. Qaṣr is wājib voor de musāfir — het is niet toegestaan 4 rakaʿāt te bidden tenzij je achter een muqīm-imam staat.',
      bron: 'Bahāre Sharīʿat, BSI N2',
      nota: 'Ḥanafī standpunt: qaṣr is wājib, niet slechts toegestaan. Dit verschilt van andere madhabs waarbij het een rukhṣah (tegemoetkoming) is.',
    },
    {
      vraag: 'Wat als een reiziger toch opzettelijk 4 rakaʿāt bidt?',
      antwoord:
        'Als een reiziger opzettelijk 4 rakaʿāt bidt en de tweede zitting (qaʿdah) voltooit, is het gebed geldig maar is het bidden van 4 rakaʿāt zondig — men dient berouw te tonen. De laatste twee rakaʿāt gelden als nafl. Als de tweede zitting echter niet is verricht, is de farḍ ongeldig en moet het gebed opnieuw worden verricht.',
      bron: 'Hidāyah, Fatāwā ʿĀlamgīrī',
    },
    {
      vraag: 'Mag je als Ḥanafī reiziger gebeden samenvoegen (jamʿ)?',
      antwoord:
        'Nee — het samenvoegen van twee gebeden in één tijdvak (jamʿ bayna al-ṣalatain) is in de Ḥanafī school niet toegestaan, ook niet op reis. Elk gebed wordt op zijn eigen tijd verricht. Uitzondering: op ʿArafah (Ẓuhr + ʿAṣr) en Muzdalifah (Maghrib + ʿIshā) tijdens de Ḥajj is samenvoegen toegestaan.',
      bron: 'Radd al-Muḥtār (Ibn ʿĀbidīn)',
      nota: 'Dit is een bekend Ḥanafī standpunt dat afwijkt van de Mālikī, Shāfiʿī en Ḥanbalī scholen die samenvoegen op reis wél toestaan.',
    },
    {
      vraag: 'Wat als je als reiziger achter een muqīm (niet-reizende) imam bidt?',
      antwoord:
        'In dat geval volg je de imam en bid je de volledige 4 rakaʿāt mee. De reiziger die achter een muqīm-imam staat bidt niet in op 2 rakaʿāt.',
      bron: 'Bahāre Sharīʿat',
    },
    {
      vraag: 'Wat als je als muqīm achter een reiziger-imam bidt?',
      antwoord:
        'Als een muqīm (niet-reiziger) achter een reiziger-imam bidt, moet hij na de taslīm van de imam de overige twee rakaʿāt zelf afmaken. Hij doet daarin geen Koranrecitatie, maar blijft staan voor de duur waarin hij normaal soera al-Fātiḥa zou kunnen reciteren. Let op: als de reiziger-imam in plaats van 2 rakaʿāt het volledige gebed van 4 rakaʿāt heeft verricht, is het gebed van de muqīm-volgers ongeldig.',
      bron: 'Bahāre Sharīʿat, al-Fatāwā al-Riḍawiyyah',
    },
    {
      vraag: 'Wanneer eindigt de reizigersstatus?',
      antwoord:
        'De reizigersstatus eindigt wanneer je de intentie vormt om 15 of meer dagen op één plek te verblijven. Zodra je die intentie hebt, bid je weer als muqīm (vol). Als je langer dan 15 dagen verblijft zonder die intentie te hebben gevormd (bijv. door voortdurende omstandigheden), blijf je juridisch een reiziger.',
      bron: 'Durr al-Mukhtār, Radd al-Muḥtār, BSI N2',
    },
    {
      vraag: 'Moet je als reiziger ook soenna-gebeden verrichten?',
      antwoord:
        'Er is geen qaṣr voor soenna-gebeden. Als je als reiziger tijd hebt, kan je de soenna volledig bidden. Als je geen tijd hebt, is het niet verplicht. De soenna van Fajr en de Witr blijven sterk aanbevolen, ook op reis.',
      bron: 'Bahāre Sharīʿat, BSI N2',
    },
  ],

  ziekte: [
    {
      vraag: 'Mag je zittend bidden als je niet kunt staan?',
      antwoord:
        'Ja — als je door ziekte of zwakte niet kunt staan, mag je zittend bidden. Dit is van toepassing bij: verergering van de ziekte, vertraging van het herstel, het optreden van duizeligheid, het veroorzaken van urineverlies, of het veroorzaken van ondraaglijke pijn.',
      bron: 'Ghuniyat al-Mutamallī, Bahāre Sharīʿat',
    },
    {
      vraag: 'Wat als je jezelf ergens aan moet steunen om te staan?',
      antwoord:
        'Als je niet lang kunt staan, is het toch farḍ om staand te bidden zolang je kunt staan — al is het maar voor de duur van het uitspreken van "Allāhu Akbar". Daarna mag je het gebed zittend voortzetten. Als je dit niet doet, is het gebed niet geldig.',
      bron: 'Bahāre Sharīʿat',
    },
    {
      vraag: 'Hoe bid je als je niet kunt buigen (rukūʿ) of neerbuigen (sujūd)?',
      antwoord:
        'Als je vanwege ziekte geen kniebuiging of grondbuiging kunt doen, voer je deze buigingen uit door met het hoofd te gebaren terwijl je zit. Zorg ervoor dat je bij de grondbuiging je hoofd zo ver mogelijk naar voren buigt. Bij de kniebuiging buig je iets minder ver naar voren dan bij de grondbuiging.',
      bron: 'Bahāre Sharīʿat',
    },
    {
      vraag: 'Wat als je helemaal niet kunt zitten (bedlegerig)?',
      antwoord:
        'Als je ook niet kunt zitten, bid je liggend op je rug. De beste manier: ga op je rug liggen met je voeten richting de qiblah en je knieën licht gebogen omhoog (niet volledig uitgestrekt). Je mag een kussen onder je hoofd leggen. De knie- en grondbuigingen verricht je door met je hoofd te gebaren. Het is ook toegestaan om op je zij te liggen met je gezicht naar de qiblah gericht.',
      bron: 'Sharḥ al-Wiqāyah, Bahāre Sharīʿat',
    },
    {
      vraag: 'Wat als je ook niet met je hoofd kunt gebaren?',
      antwoord:
        'Als je niet in staat bent om met je hoofd te gebaren, vervalt de verplichting om de ṣalāt te verrichten. Indien je in deze toestand meer dan zes gebedstijden laat voorbijgaan, is ook het inhalen (qaḍā) van de gemiste gebeden niet langer verplicht.',
      bron: 'BSI N2',
    },
    {
      vraag: 'Hoe lang mag een zieke de ṣalāt uitstellen?',
      antwoord:
        'De ṣalāt mag nooit buiten haar tijdvak worden uitgesteld vanwege ziekte, tenzij men bewusteloos of wilsonbekwaam is. Binnen het tijdvak mag men wachten op een beter moment om de ṣalāt te verrichten, zolang er genoeg tijd overblijft.',
      bron: 'Durr al-Mukhtār',
    },
    {
      vraag: 'Wat als je wuḍūʾ niet kunt bewaren vanwege een medische aandoening?',
      antwoord:
        'Iemand die voortdurend wuḍūʾ verliest door een medische aandoening (bijv. chronische incontinentie of niet-stoppend bloedverlies) wordt een maʿdzūr (verontschuldigde) genoemd. De maʿdzūr vernieuwt de wuḍūʾ bij elke gebedstijd en bidt daarmee alle gebeden van dat tijdvak.',
      bron: 'Fatāwā ʿĀlamgīrī',
    },
  ],

  vrouw: [
    {
      vraag: 'Mag een vrouw bidden tijdens de menstruatie (ḥayḍ)?',
      antwoord:
        'Nee — het verrichten van de ṣalāt is verboden (ḥarām) tijdens de menstruatie (ḥayḍ) en de kraamvloeiing (nifās). Dit is geen straf maar een tegemoetkoming. De gemiste gebeden tijdens ḥayḍ en nifās hoeven NIET te worden ingehaald.',
      bron: 'Fatāwā ʿĀlamgīrī',
    },
    {
      vraag: 'Wanneer moet een vrouw na de menstruatie weer beginnen met bidden?',
      antwoord:
        'Zodra de menstruatie stopt en de vrouw ghusl (ritueel bad) heeft verricht, is het verplicht om de gebeden te hervatten. Als er minder dan de minimale tijdsduur van het gebed over is vóór het einde van het tijdvak, is dat gebed niet verplicht.',
      bron: 'Bahāre Sharīʿat',
    },
    {
      vraag: 'Hoe lang duurt menstruatie (ḥayḍ) en kraamvloeiing (nifās) maximaal?',
      antwoord:
        'Menstruatie (ḥayḍ): minimaal 3 dagen en nachten, maximaal 10 dagen. Kraamvloeiing (nifās): maximaal 40 dagen. Bloed na 40 dagen na de bevalling geldt als istiḥāḍah (afwijkend bloedverlies) en de vrouw bidt dan als gebruikelijk.',
      bron: 'Bahāre Sharīʿat',
      nota: 'Ḥanafī definitie van de maximumduur wijkt af van andere madhabs.',
    },
    {
      vraag: 'Hoe staat de vrouw opgesteld in de jamāʿah?',
      antwoord:
        'Als er een gemengde jamāʿah is (mannen en vrouwen), staan de vrouwen achter de mannen. Het gemeenschappelijk bidden van alleen vrouwen zonder een mannelijke imam is afgekeurd (makrūh taḥrīmī) in de Ḥanafī school.',
      bron: 'BSI N1',
    },
    {
      vraag: 'Zijn Jumuʿah (vrijdagsgebed) en ʿEid-gebed verplicht voor vrouwen?',
      antwoord:
        'Nee — het vrijdagsgebed (Jumuʿah) en de ʿEid-gebeden zijn niet verplicht (wājib) voor vrouwen. Als zij aanwezig zijn en meebidden is dat geldig, maar zij zijn er niet toe verplicht.',
      bron: 'BSI N1',
    },
  ],

  jama: [
    {
      vraag: 'Wat is de beloning voor het gemeenschappelijk gebed?',
      antwoord:
        'De Profeet \u{FDFA} zei: "Het gebed in gemeenschap overtreft het individuele gebed met 27 graden." (Ṣaḥīḥ al-Bukhārī). De jamāʿah is soenna muʿakkadah voor mannen voor de vijf dagelijkse gebeden.',
      bron: 'Ṣaḥīḥ al-Bukhārī, hadīth 645',
    },
    {
      vraag: 'Wie mag imam zijn?',
      antwoord:
        'De meest geschikte persoon als imam is degene met de meeste kennis van de fiqh van het gebed, dan de beste recitator, dan de meest vrome persoon. De eigenaar van een huis of de aangestelde imam van een moskee heeft prioriteit.',
      bron: 'Bahāre Sharīʿat',
    },
    {
      vraag: 'Wat maakt het imamschap ongeldig?',
      antwoord:
        'Het imamschap is ongeldig als: de imam een vrouw is voor een gemengde groep, de imam ritueel onrein is, de imam de Koran niet correct kan reciteren, of als de gebedsvolger kennis heeft van iets waardoor de imam zijn wuḍūʾ heeft verloren.',
      bron: 'Bahāre Sharīʿat',
    },
    {
      vraag: 'Hoe ver mag je als gebedsvolger van de imam verwijderd staan?',
      antwoord:
        'Er mag geen grote lege ruimte zijn tussen de imam en de gebedsvolgers. In de moskee: zolang je de rijen kunt volgen en de bewegingen kunt overnemen. Buiten de moskee: niet meer dan twee rijen afstand (ca. 60 meter) zonder aaneengesloten rijen.',
      bron: 'Durr al-Mukhtār',
    },
    {
      vraag: 'Wat doe je als je de jamāʿah deels mist?',
      antwoord:
        'Als je de jamāʿah deels mist, sluit je aan en volg je de imam tot de taslīm. Daarna maak je de gemiste rakaʿāt zelf af. De rakaʿāt die je met de imam hebt gebeden gelden als het begin van jouw ṣalāt.',
      bron: 'Bahāre Sharīʿat',
    },
  ],

  jumua: [
    {
      vraag: 'Is het vrijdagsgebed (Jumuʿah) farḍ of wājib?',
      antwoord:
        'Het Jumuʿah-gebed is farḍ (verplicht). Deze farḍ is zelfs sterker benadrukt dan de farḍ van het gewone Ẓuhr-gebed. Het vervangt het Ẓuhr-gebed op vrijdag. Als iemand het Jumuʿah-gebed verricht terwijl het niet voor hem verplicht was, is het toch geldig en vervalt het Ẓuhr-gebed.',
      bron: 'Fatāwā ʿĀlamgīrī, Bahāre Sharīʿat, BSI N2',
    },
    {
      vraag: 'Voor wie is het Jumuʿah-gebed verplicht?',
      antwoord:
        'Het Jumuʿah-gebed is verplicht als je aan alle elf voorwaarden voldoet: (1) ingezetene van een stad; (2) vrije man; (3) gezond — in staat naar de centrale moskee te komen; (4) man; (5) toerekeningsvatbaar; (6) volwassen; (7) ziende; (8) lichamelijk in staat om te lopen; (9) niet gedetineerd (tenzij wegens schuld met de middelen om te betalen); (10) geen gegronde angst voor een machthebber of misdadiger; (11) geen vrees voor onheilspellend weer zoals hevige regen of storm.',
      bron: 'Fatāwā ʿĀlamgīrī, Bahāre Sharīʿat, BSI N2',
    },
    {
      vraag: 'Wat zijn de zes voorwaarden voor de geldigheid van de Jumuʿah-dienst?',
      antwoord:
        '1. De Jumuʿah wordt gehouden in een stad of omgeving van een stad. 2. Het gebed wordt geleid door de aangestelde islamitische imam of een door de gemeenschap aangewezen geleerde met de juiste geloofsovertuigingen. 3. Het gebed vindt plaats binnen de tijd van het Ẓuhr-gebed. 4. De khuṭbah (kanselrede) wordt gehouden vóór het gebed binnen de Ẓuhr-tijd. 5. Er zijn naast de imam minimaal drie volwassen mannen aanwezig. 6. De deuren van de moskee zijn open zodat elke moslim vrij kan binnenkomen (ʿumūm al-idzn).',
      bron: 'Fatāwā ʿĀlamgīrī, Bahāre Sharīʿat, BSI N2',
    },
    {
      vraag: 'Hoeveel soenna-rakaʿāt zijn er bij het Jumuʿah-gebed?',
      antwoord:
        'Het Jumuʿah-gebed heeft uitgebreide soenna: 4 rakaʿāt soenna vóór de farḍ (muʿakkadah), dan 2 farḍ, dan 4 rakaʿāt soenna ná de farḍ (muʿakkadah), gevolgd door 2 rakaʿāt soenna. Het is beter om na de 4 soenna ook 2 rakaʿāt te bidden zodat aan beide hadīth-overleveringen recht wordt gedaan.',
      bron: 'Bahāre Sharīʿat, BSI N2',
    },
    {
      vraag: 'Wat zijn de soennahandelingen van de kanselrede (khuṭbah)?',
      antwoord:
        'De khuṭbah kent 19 soennahandelingen, waaronder: de prediker is ritueel rein en staat tijdens de khuṭbah; hij zit vóór aanvang; hij spreekt de khuṭbah hardop uit; hij begint met Alḥamdullilāh; hij prijst Allāh en getuigt van tawḥīd en profeetschap; hij zendt zegenbeden over de Profeet \u{FDFA}; hij reciteert minstens één Koranvers; hij geeft raad in de eerste khuṭbah; hij doet een smeekbede voor de moslims; hij houdt beide khuṭbahs beknopt; hij zit tussen de twee khuṭbahs zo lang als de recitatie van drie verzen zou duren.',
      bron: 'Fatāwā ʿĀlamgīrī, Durr al-Mukhtār, Bahāre Sharīʿat, BSI N2',
    },
    {
      vraag: 'Mag de khuṭbah in een andere taal dan het Arabisch worden gegeven?',
      antwoord:
        'Het geven van de khuṭbah in een andere taal dan het Arabisch, of het vermengen van Arabisch met een andere taal, is in strijd met de overgeleverde soenna (al-sunnat al-mutawāritha) en wordt als makrūh (afkeurenswaardig) beschouwd.',
      bron: 'BSI N2',
    },
    {
      vraag: 'Is het Jumuʿah-gebed verplicht voor reizigers?',
      antwoord:
        'Nee — het Jumuʿah-gebed is niet verplicht voor een reiziger (musāfir). Als een reiziger het Jumuʿah-gebed toch bijwoont en verricht, is het geldig en vervalt het Ẓuhr-gebed.',
      bron: 'Fatāwā ʿĀlamgīrī, Bahāre Sharīʿat',
    },
  ],

  eid: [
    {
      vraag: 'Zijn de ʿEid-gebeden wājib of soenna?',
      antwoord:
        'Beide ʿEid-gebeden (ʿEid al-Fiṭr en ʿEid al-Aḍḥā) zijn wājib (verplicht). Zij delen dezelfde geldigheidsvoorwaarden als het Jumuʿah-gebed. Enkele verschillen: bij de feestgebeden is de khuṭbah soenna (niet voorwaarde) en wordt deze ná het gebed uitgesproken; er is geen adzān of iqāmah — in plaats daarvan mag twee keer worden uitgeroepen "al-Ṣalātu Jāmiʿah".',
      bron: 'Durr al-Mukhtār, BSI N2',
    },
    {
      vraag: 'Wat is het tijdstip van het ʿEid-gebed?',
      antwoord:
        'Het ʿEid-gebed begint vanaf het moment dat de zon een speerlengte is opgekomen (ca. 20 minuten na zonsopgang) tot de zawāl-tijd (islamitische middag, het begin van het Ẓuhr-tijdvak).',
      bron: 'BSI N2',
    },
    {
      vraag: 'Hoe verricht je het ʿEid-gebed?',
      antwoord:
        'Vorm de intentie voor twee wājib rakaʿāt met zes extra takbīrāt. 1e rakaʿah: takbīr al-taḥrīmah → armen binden → thanā → drie extra takbīrāt (handen opheffen bij elke) met armen langs zij → na de derde takbīr armen binden → imam reciteert soera al-Fātiḥa + soera → rukūʿ + sujūd. 2e rakaʿah: imam reciteert soera al-Fātiḥa + soera → drie extra takbīrāt (handen opheffen) met armen langs zij → vierde takbīr → rukūʿ (zonder handen opheffen) → sujūd → tashahhud → taslīm.',
      bron: 'BSI N2',
    },
    {
      vraag: 'Wat is aanbevolen (mustaḥab) op de dag van ʿEid al-Fiṭr?',
      antwoord:
        'Aanbevolen handelingen op ʿEid al-Fiṭr: haar en nagels knippen; ghusl nemen; miswāk gebruiken; beste kleding aantrekken; parfumeren; Fajr in de buurtmoskee bidden; vroeg naar het gebedsterrein vertrekken; ṣadaqat al-fiṭr voldoen vóór het gebed; te voet gaan en op de terugweg een andere route nemen; vóór het gebed een oneven aantal dadels (3, 5 of 7) eten; blijdschap tonen; veel liefdadigheid geven; elkaar feliciteren.',
      bron: 'BSI N2',
    },
    {
      vraag: 'Wat zijn de belangrijkste verschillen tussen ʿEid al-Fiṭr en ʿEid al-Aḍḥā?',
      antwoord:
        'Bij ʿEid al-Aḍḥā: (1) Gebruikelijk om niets te eten vóór het gebed (al is eten niet makrūh); (2) De takbīr wordt luidop gereciteerd op weg naar het gebedsterrein; (3) Wie van plan is te offeren, knipt geen haar of nagels van 1 t/m 10 Dzul-Ḥijjah; (4) De Takbīr al-Tashrīq is wājib na elk van de vijf gemeenschappelijke gebeden van Fajr op 9 Dzul-Ḥijjah (ʿArafah) t/m ʿAṣr op 13 Dzul-Ḥijjah.',
      bron: 'BSI N2',
    },
    {
      vraag: 'Wat is de Takbīr al-Tashrīq en wanneer is het verplicht?',
      antwoord:
        'De Takbīr al-Tashrīq luidt: "Allāhu Akbar, Allāhu Akbar, lā ilāha illallāhu wallāhu Akbar, Allāhu Akbar, wa lillāhil Ḥamd." Het is wājib om deze takbīr minstens één keer (bij voorkeur drie keer) te reciteren na elk van de vijf gemeenschappelijke farḍ-gebeden, van Fajr op 9 Dzul-Ḥijjah (de dag van ʿArafah) tot en met ʿAṣr op 13 Dzul-Ḥijjah — in totaal 23 gebeden.',
      bron: 'BSI N2',
    },
  ],

  'qada-situaties': [
    {
      vraag: 'Wanneer is qaḍā (inhalen) verplicht?',
      antwoord:
        'Qaḍā is verplicht voor alle gemiste farḍ-gebeden en de Witr-ṣalāt. Het is een ernstige zonde om een farḍ-gebed opzettelijk te laten vervallen, maar de verplichting blijft bestaan totdat het is ingehaald.',
      bron: 'BSI N1',
    },
    {
      vraag: 'Moet je de volgorde aanhouden bij het inhalen?',
      antwoord:
        'Als je minder dan 6 gebeden hebt gemist, moet je de volgorde (tartīb) aanhouden. Heb je 6 of meer gemiste gebeden (ṣāḥib al-tartīb), dan vervalt de verplichting tot volgorde en mag je de qaḍā in willekeurige volgorde verrichten.',
      bron: 'Durr al-Mukhtār',
    },
    {
      vraag: 'Hoe verricht je een qaḍā-gebed?',
      antwoord:
        'De intentie is: "Ik haal het gemiste [Fajr/Ẓuhr/ʿAṣr/Maghrib/ʿIshā/Witr]-gebed van [datum/dag] in." De uitvoering is gelijk aan het gewone gebed. Bij meerdere gemiste gebeden van dezelfde naam (bijv. drie gemiste Ẓuhrs) begin je met de oudste.',
      bron: 'Bahāre Sharīʿat',
    },
    {
      vraag: 'Moet je gemiste soenna-gebeden ook inhalen?',
      antwoord:
        'Nee — soenna en nafl gebeden hoeven niet te worden ingehaald. De enige uitzondering is de 2 soenna rakaʿāt van Fajr: als je die mist samen met de farḍ, mag je ze inhalen vóór het ʿAṣr-tijdvak begint. Na ʿAṣr vervalt zelfs dit.',
      bron: 'Bahāre Sharīʿat',
    },
    {
      vraag: 'Wat als je jaren aan gebeden hebt gemist?',
      antwoord:
        'De verplichting tot qaḍā vervalt niet, hoe lang de periode ook is. Je begint met het systematisch inhalen: bereken het aantal gemiste dagen en haalt dagelijks een vast aantal in, bovenop de dagelijkse verplichte gebeden. Oprechte tawbah (berouw) gaat hiermee gepaard.',
      bron: 'Radd al-Muḥtār (Ibn ʿĀbidīn)',
    },
  ],
}
