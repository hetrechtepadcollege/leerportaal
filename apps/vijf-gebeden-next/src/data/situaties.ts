/**
 * Speciale situaties-module data — Ḥanafī fiqh
 * Bronnen: Bahāre Sharīʿat, Durr al-Mukhtār, Radd al-Muḥtār (Ibn ʿĀbidīn),
 *          Fatāwā ʿĀlamgīrī, SeekersGuidance (Ḥanafī)
 */

export type SituatieCategorie =
  | 'reizen'
  | 'ziekte'
  | 'vrouw'
  | 'jama'
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
        'Je bent een musāfir wanneer je van plan bent om minimaal 77 km (drie dagreizen) te reizen, je vertrek- of woonplaats hebt verlaten, en niet van plan bent om op de bestemming langer dan 15 dagen te verblijven. Zodra je de bebouwde kom van je woonplaats verlaat, beginnen de reisregels te gelden.',
      bron: 'Durr al-Mukhtār, Bahāre Sharīʿat',
    },
    {
      vraag: 'Wat doe je als reiziger met de gebeden?',
      antwoord:
        'Als musāfir bid je de 4-rakaʿāt farḍ gebeden (Ẓuhr, ʿAṣr, ʿIshā) in op 2 rakaʿāt. Dit heet qaṣr (verkorten). Fajr (2 rakaʿāt) en Maghrib (3 rakaʿāt) blijven ongewijzigd. Qaṣr is wājib voor de musāfir — het is niet toegestaan 4 rakaʿāt te bidden tenzij je achter een muqīm (niet-reizende) imam staat.',
      bron: 'Bahāre Sharīʿat',
      nota: 'Ḥanafī standpunt: qaṣr is wājib, niet slechts toegestaan. Dit verschilt van andere madhabs waarbij het een rukhṣah (tegemoetkoming) is.',
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
        'In dat geval volg je de imam en bid je de volledige 4 rakaʿāt mee. De reiziger die achter een muqīm-imam bidt, bidt niet in op 2 rakaʿāt.',
      bron: 'Bahāre Sharīʿat',
    },
    {
      vraag: 'Wanneer eindigt de reizigersstatus?',
      antwoord:
        'De reizigersstatus eindigt wanneer je de intentie vormt om 15 of meer dagen op één plek te verblijven. Zodra je die intentie hebt, bid je weer als muqīm (vol). Als je langer dan 15 dagen verblijft zonder die intentie te hebben gevormd (bijv. door omstandigheden), blijf je juridisch een reiziger.',
      bron: 'Durr al-Mukhtār',
    },
    {
      vraag: 'Moet je als reiziger ook soenna-gebeden verrichten?',
      antwoord:
        'De soenna-gebeden vervallen niet formeel, maar het is tijdens een echte reis toegestaan om de soenna (behalve die van Fajr en de Witr) weg te laten. De soenna van Fajr en de Witr blijven sterk aanbevolen, ook op reis.',
      bron: 'Bahāre Sharīʿat',
    },
  ],

  ziekte: [
    {
      vraag: 'Mag je zittend bidden als je niet kunt staan?',
      antwoord:
        'Ja — als je vanwege ziekte of zwakte niet kunt staan, of als staan de ziekte verergert of de genezing vertraagt, mag je zittend bidden. Het gebed is dan volledig geldig. Je hoeft geen rakaʿāt in te halen.',
      bron: 'Bahāre Sharīʿat',
    },
    {
      vraag: 'Hoe bid je als je niet kunt buigen (rukūʿ) of neerbuigen (sujūd)?',
      antwoord:
        'Als je niet kunt buigen of neerbuigen, maak je de bewegingen met je hoofd — voor rukūʿ iets vooroverbuigen, voor sujūd iets dieper vooroverbuigen. Je hoeft geen kussen of iets naar je toe te brengen voor de sujūd.',
      bron: 'Bahāre Sharīʿat',
    },
    {
      vraag: 'Wat als je helemaal niet kunt bewegen (bijv. bedlegerig)?',
      antwoord:
        'Als je niet kunt zitten, bid je liggend op je rug, met je gezicht richting de qiblah indien mogelijk. Je maakt de bewegingen met je ogen of in je hart als zelfs een hoofdbeweging onmogelijk is. De ṣalāt vervalt pas volledig bij bewusteloosheid.',
      bron: 'Bahāre Sharīʿat',
    },
    {
      vraag: 'Hoe lang mag een zieke de ṣalāt uitstellen?',
      antwoord:
        'De ṣalāt mag nooit worden uitgesteld buiten haar tijdvak vanwege ziekte, tenzij men bewusteloos of wilsonbekwaam is. Binnen het tijdvak mag men wachten op een moment dat men de ṣalāt beter kan verrichten, zolang er genoeg tijd overblijft.',
      bron: 'Durr al-Mukhtār',
    },
    {
      vraag: 'Wat als je wuḍūʾ niet kunt bewaren vanwege een medische aandoening?',
      antwoord:
        'Iemand die voortdurend wuḍūʾ verliest door een medische aandoening (zoals chronische incontinentie of niet-stoppend bloedverlies) wordt een maʿdzūr (verontschuldigde) genoemd. De maʿdzūr vernieuwt de wuḍūʾ bij elke gebedstijd en bidt daarmee alle gebeden van dat tijdvak.',
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
        "De Profeet \u{FDFA} zei: \"Het gebed in gemeenschap overtreft het individuele gebed met 27 graden.\" (Ṣaḥīḥ al-Bukhārī). De jamāʿah is soenna mu\u02bfakkadah voor mannen voor de vijf dagelijkse gebeden.",
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
