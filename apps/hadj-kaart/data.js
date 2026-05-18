export const locations = [
  {
    id: 'miqat-dhulhulayfah',
    name: 'Mīqāt Dhū al-Ḥulayfah',
    arabic: 'ذو الحليفة',
    lat: 24.4074, lng: 39.5467,
    category: 'Mīqāt',
    day: 0,
    color: '#7B5EA7',
    icon: '🔵',
    desc: 'De mīqāt (مِيقَات) voor reizigers vanuit Medina en vanuit het noorden. Hier leggen pelgrims de iḥrām (إِحْرَام) aan voordat ze de heilige grenzen betreden. Ook bekend als Abyār ʿAlī.',
    manasik: [
      { icon: '🛁', name: 'Ghusl', ar: 'غسل', detail: 'Volledige wassing voor het iḥrām is sunnah.' },
      { icon: '🤍', name: 'Iḥrām aantrekken', ar: 'الإحرام', detail: 'Twee witte ongestikte doeken voor mannen. Vrouwen: normale islamitische kleding.' },
      { icon: '🙏', name: 'Niyyah & Talbiyah', ar: 'النية والتلبية', detail: 'Intentie uitspreken voor hadj of ʿumrah, gevolgd door de Talbiyah.' }
    ],
    hanafi: 'Volgens de Hanafi-madhhab is het aantrekken van het iḥrām vóór de mīqāt toegestaan maar de niyyah en talbiyah moeten vóór of bij de mīqāt worden uitgesproken.',
    dua: { ar: 'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ', nl: 'Hier ben ik, o Allah, hier ben ik. Hier ben ik, U heeft geen deelgenoot, hier ben ik.' }
  },
  {
    id: 'masjid-haram',
    name: 'Masjid al-Ḥarām',
    arabic: 'المسجد الحرام',
    lat: 21.4225, lng: 39.8262,
    category: 'Heiligdom',
    day: 0,
    color: '#C9A84C',
    icon: '🕋',
    desc: 'Het grootste heiligdom van de islam, in het centrum van Mekka. De Kaʿbah staat hier, de qiblah voor alle moslims wereldwijd. Elke pelgrim begint hier met de tawāf al-qudūm (ṭَوَاف القدوم).',
    manasik: [
      { icon: '🕋', name: 'Tawāf al-Qudūm', ar: 'طواف القدوم', detail: '7 rondes om de Kaʿbah, beginnen bij de Hajar al-Aswad. Sunnah bij aankomst.' },
      { icon: '🏃', name: 'Saʿy', ar: 'السعي', detail: '7 ronden tussen Ṣafā en Marwah, ter herdenking van Hājar (ع).' },
      { icon: '💧', name: 'Zamzam', ar: 'ماء زمزم', detail: 'Drinken van Zamzam-water is sunnah na de tawāf.' }
    ],
    hanafi: 'De tawāf al-qudūm is sunnah (niet verplicht) voor hadjgangers. Ontbreekt men het, is er geen dam vereist. De saʿy na tawāf al-qudūm voldoet ook als de definitieve saʿy.',
    dua: { ar: 'اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، فَحَيِّنَا رَبَّنَا بِالسَّلَامِ', nl: 'O Allah, U bent Vrede en van U komt vrede, verwelkom ons, onze Heer, met vrede.' }
  },
  {
    id: 'kaaba',
    name: 'Al-Kaʿbah',
    arabic: 'الكعبة المشرفة',
    lat: 21.42251, lng: 39.82619,
    category: 'Heiligste plek',
    day: 0,
    color: '#E8C97A',
    icon: '⭐',
    desc: 'Het Huis van Allah (بَيْتُ اللهِ), gebouwd door Ibrāhīm en zijn zoon Ismāʿīl (عليهما السلام). De Hajar al-Aswad (zwarte steen) bevindt zich in de zuidoostelijke hoek. De Multazam, Maqām Ibrāhīm en de Ḥijr Ismāʿīl bevinden zich rondom.',
    manasik: [
      { icon: '🖤', name: 'Istilām al-Ḥajar', ar: 'استلام الحجر', detail: 'Aanraken of kussen van de Hajar al-Aswad bij elke ronde. Bij drukte: gebaren met de hand.' },
      { icon: '🤲', name: 'Multazam', ar: 'الملتزم', detail: 'De ruimte tussen de deur en Hajar al-Aswad — bijzonder geschikt voor duʿāʾ.' },
      { icon: '🙏', name: 'Maqām Ibrāhīm', ar: 'مقام إبراهيم', detail: 'Na de tawāf 2 rakʿāt bidden achter Maqām Ibrāhīm is sunnah.' }
    ],
    hanafi: 'Het is sunnah om bij elke tawāfronde de Hajar al-Aswad aan te raken. Bij het bidden achter Maqām Ibrāhīm geldt: twee rakʿāt na elke tawāf is sunnah muʾakkadah.',
    dua: { ar: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ', nl: 'Onze Heer, schenk ons het goede in deze wereld en het goede in het Hiernamaals, en bescherm ons tegen het Hellevuur.' }
  },
  {
    id: 'safa-marwa',
    name: 'Al-Ṣafā & Al-Marwah',
    arabic: 'الصفا والمروة',
    lat: 21.4234, lng: 39.8274,
    category: 'Ritual',
    day: 0,
    color: '#52B788',
    icon: '🏃',
    desc: 'Twee heuvels binnen de Masjid al-Ḥarām, verbonden door de Masʿā (مَسْعَى). Hier wordt de Saʿy verricht — 7 gangen ter herdenking van Hājar (عليها السلام) die water zocht voor haar zoon Ismāʿīl (ع).',
    manasik: [
      { icon: '1️⃣', name: 'Begin bij Ṣafā', ar: 'الصفا', detail: 'Klimmen op Ṣafā, de Kaʿbah in de richting staan en duʿāʾ verrichten.' },
      { icon: '↔️', name: '7 gangen', ar: 'سبعة أشواط', detail: 'Ṣafā → Marwah is 1 gang. Marwah → Ṣafā is 2. Eindigen bij Marwah.' },
      { icon: '🏃', name: 'Ramal (haastige pas)', ar: 'الرمل', detail: 'Mannen lopen snel tussen de groene palen (ongeveer 50 meter).' }
    ],
    hanafi: 'De Saʿy is wājib (verplicht) bij de Hanafi-madhhab. Het weglaten vereist een dam (دَم). De Saʿy na tawāf al-qudūm is geldig als de definitieve Saʿy.',
    dua: { ar: 'إِنَّ الصَّفَا وَالْمَرْوَةَ مِنْ شَعَائِرِ اللَّهِ، أَبْدَأُ بِمَا بَدَأَ اللَّهُ بِهِ', nl: 'Voorwaar, Ṣafā en Marwah behoren tot de tekenen van Allah. Ik begin met wat Allah mee begonnen is.' }
  },
  {
    id: 'mina',
    name: 'Minā',
    arabic: 'منى',
    lat: 21.4133, lng: 39.8928,
    category: 'Verblijfplaats',
    day: 8,
    color: '#4A90D9',
    icon: '⛺',
    desc: 'Het "tentendorp" op 8 km van Mekka. Pelgrims verblijven hier op 8 Dhul Hijjah (Yawm al-Tarwiyah), en op de Ayyām al-Tashrīq (11, 12, 13 Dhul Hijjah). Hier bevinden zich de Jamarāt-bruggen voor het steenwerpen.',
    manasik: [
      { icon: '🌙', name: 'Overnachting in Minā', ar: 'المبيت بمنى', detail: 'Op 8 Dhul Hijjah: verblijven in Minā vóór vertrek naar ʿArafāt. Sunnah.' },
      { icon: '🙏', name: '5 gebeden in Minā', ar: 'الصلوات الخمس', detail: 'Dhuhr, ʿAṣr, Maghrib, ʿIshāʾ en Fajr — elk op tijd, zonder qaṣr tenzij op reis.' },
      { icon: '🪨', name: 'Steenwerpen (later)', ar: 'الرمي', detail: 'Op 10, 11, 12 (en 13) Dhul Hijjah wordt hier gesteengooid naar de Jamarāt.' }
    ],
    hanafi: 'Overnachting in Minā op 8 Dhul Hijjah is sunnah. Het salāh inkorten (qaṣr) geldt alleen als de pelgrim echt musāfir (reiziger) is en niet van plan is 15+ dagen te blijven.',
    dua: { ar: 'اللَّهُمَّ هَذِهِ مِنًى فَامْنُنْ عَلَيَّ بِمَا مَنَنْتَ بِهِ عَلَى أَوْلِيَائِكَ', nl: 'O Allah, dit is Minā — schenk mij dezelfde gunst die U Uw geliefden heeft geschonken.' }
  },
  {
    id: 'arafat',
    name: 'ʿArafāt',
    arabic: 'عرفات',
    lat: 21.3547, lng: 39.9845,
    category: 'Wuqūf — Pijler van Hadj',
    day: 9,
    color: '#E8734A',
    icon: '🌄',
    desc: 'Het wuqūf (وُقُوف) op ʿArafāt op 9 Dhul Hijjah is de absolute kern van de hadj: "Al-Ḥajju ʿArafah" — de hadj ís ʿArafāt. Van Dhuhr tot zonsondergang staan pelgrims hier in gebed en dhikr. Jabal al-Raḥmah (berg van barmhartigheid) bevindt zich hier.',
    manasik: [
      { icon: '☀️', name: 'Wuqūf (stilstaan)', ar: 'الوقوف بعرفة', detail: 'Verplicht: aanwezig zijn op ʿArafāt van Dhuhr tot zonsondergang op 9 Dhul Hijjah.' },
      { icon: '🕌', name: 'Khuṭbah & Ṣalāh', ar: 'الخطبة والصلاة', detail: 'Dhuhr en ʿAṣr worden gecombineerd (jamʿ al-taqrīb) bij de Masjid al-Namirah.' },
      { icon: '🤲', name: 'Duʿāʾ & Dhikr', ar: 'الدعاء والذكر', detail: 'Dit is het moment van de hadj — intense smeekbede, Talbiyah, tawbah.' }
    ],
    hanafi: 'Wuqūf ʿArafāt is een rukn (پرکن) — de absolute pijler. Missen betekent dat de hadj ongeldig is. Vertrek vóór zonsondergang (ifdāḍ) vóór de imām is makrūh maar de hadj blijft geldig mits een schaap als kaffarah wordt geslacht.',
    dua: { ar: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ', nl: 'Er is geen god dan Allah, alleen, zonder deelgenoot. Hem behoort het koninkrijk en alle lof, en Hij heeft macht over alles.' }
  },
  {
    id: 'jabal-rahmah',
    name: 'Jabal al-Raḥmah',
    arabic: 'جبل الرحمة',
    lat: 21.3553, lng: 39.9877,
    category: 'Historische plek',
    day: 9,
    color: '#D4845A',
    icon: '⛰️',
    desc: 'De "Berg van Barmhartigheid" op de vlakte van ʿArafāt. Hier zou de ontmoeting hebben plaatsgevonden van Ādam en Ḥawwāʾ (عليهما السلام) na hun daling op aarde. De Profeet ﷺ gaf hier zijn afscheidspreek.',
    manasik: [
      { icon: '⛰️', name: 'Klimmen is niet verplicht', ar: 'ليس واجباً', detail: 'Het is sunnah om hier duʿāʾ te verrichten, maar de wuqūf geldt voor de gehele vlakte.' },
      { icon: '📿', name: 'Dhikr & Ṣalawāt', ar: 'الذكر والصلاة', detail: 'Veel ṣalawāt op de Profeet ﷺ, tawbah en herinnering aan de Dag des Oordeels.' }
    ],
    hanafi: 'Verblijf op de berg zelf is niet vereist. De gehele vlakte van ʿArafāt is geldig voor het wuqūf.',
    dua: { ar: 'اللَّهُمَّ اغْفِرْ لِي وَارْحَمْنِي وَتُبْ عَلَيَّ إِنَّكَ أَنْتَ التَّوَّابُ الرَّحِيمُ', nl: 'O Allah, vergeef mij, heb medelijden met mij en aanvaard mijn berouw. Voorwaar U bent de Vergevingsgezinde, de Barmhartige.' }
  },
  {
    id: 'muzdalifah',
    name: 'Muzdalifah',
    arabic: 'مزدلفة',
    lat: 21.3825, lng: 39.9361,
    category: 'Overnachting — Wājib',
    day: 9,
    color: '#5B8DB8',
    icon: '🌙',
    desc: 'Tussen ʿArafāt en Minā ligt Muzdalifah. Na zonsondergang op 9 Dhul Hijjah vertrekken pelgrims hier naartoe. De nacht doorbrengen en de Fajr-ṣalāh hier verrichten is wājib. Ook worden hier 49 (of 70) steentjes voor de Jamarāt verzameld.',
    manasik: [
      { icon: '🌙', name: 'Overnachting', ar: 'المبيت بمزدلفة', detail: 'Wājib: de nacht (na middernacht) in Muzdalifah doorbrengen.' },
      { icon: '🌅', name: 'Fajr & Wuqūf', ar: 'الوقوف بالمشعر الحرام', detail: 'Fajr bidden en daarna wachten tot na zonsopgang bij al-Mashʿar al-Ḥarām.' },
      { icon: '🪨', name: 'Steentjes rapen', ar: 'جمع الحصى', detail: 'Kleine kiezelstenen rapen voor de Jamarāt: 49 voor muʿajjilīn, 70 voor muʾakhkhirīn.' }
    ],
    hanafi: 'Overnachting in Muzdalifah is wājib. Het weglaten vereist een dam. Zwakke personen (ouderen, zieken) mogen na middernacht vertrekken. De Maghrib en ʿIshāʾ worden bij aankomst gecombineerd als jamʿ.',
    dua: { ar: 'اللَّهُمَّ كَمَا وَقَفْتَنَا فِيهِ وَأَرَيْتَنَا إِيَّاهُ، فَوَفِّقْنَا لِذِكْرِكَ كَمَا هَدَيْتَنَا', nl: 'O Allah, zoals U ons hier deed stilstaan en ons dit toonde, begeleidt ons tot Uw dhikr zoals U ons hebt geleid.' }
  },
  {
    id: 'jamarat',
    name: 'Al-Jamarāt',
    arabic: 'الجمرات',
    lat: 21.4223, lng: 39.8737,
    category: 'Steenwerpen — Wājib',
    day: 10,
    color: '#C0392B',
    icon: '🪨',
    desc: 'Drie pilaren in Minā die de plaatsen markeren waar Ibrāhīm (عليه السلام) Iblīs met stenen wierp. Pelgrims gooien op 10 Dhul Hijjah 7 stenen naar Jamarāt al-ʿAqabah (de grote pijler), en op 11, 12 (en 13) naar alle drie.',
    manasik: [
      { icon: '🎯', name: 'Ramy al-Jamarāt', ar: 'رمي الجمرات', detail: 'Elke steen afzonderlijk gooien met de rechterhand, elke keer Allāhu Akbar zeggen.' },
      { icon: '📅', name: 'Volgorde op 10 Dhul Hijjah', ar: 'يوم النحر', detail: 'Alleen Jamarāt al-ʿAqabah (de grote). 7 stenen. Daarna: naḥr, ḥalq, tawāf al-ifāḍah.' },
      { icon: '📅', name: 'Ayyām al-Tashrīq', ar: 'أيام التشريق', detail: '11, 12 en 13: alle drie de Jamarāt, elk 7 stenen, na middag vóór Maghrib.' }
    ],
    hanafi: 'Ramy is wājib. Gooien vóór Fajr op 10 Dhul Hijjah is niet geldig. Op 10 alleen de grote Jamarāt. Het weglaten of incorrect uitvoeren vereist een dam. Volgorde op Ayyām al-Tashrīq: klein → midden → groot.',
    dua: { ar: 'اللَّهُمَّ اجْعَلْهُ حَجًّا مَبْرُورًا وَذَنْبًا مَغْفُورًا وَسَعْيًا مَشْكُورًا', nl: 'O Allah, maak dit een aanvaarde hadj, een vergeven zonde en een gewaardeerde inspanning.' }
  },
  {
    id: 'nahr',
    name: 'Naḥr — Offerslachting',
    arabic: 'النحر',
    lat: 21.4150, lng: 39.8850,
    category: 'Ritual — Wājib',
    day: 10,
    color: '#8B2020',
    icon: '🐑',
    desc: 'Op 10 Dhul Hijjah (Yawm al-Naḥr / ʿĪd al-Aḍḥā) wordt het offerdier geslacht in Minā of buiten de heilige grenzen. Dit is wājib voor de hadjganger die een dam aan zichzelf verplicht heeft (o.a. bij Ḥajj al-Tamattuʿ).',
    manasik: [
      { icon: '📋', name: 'Volgorde op 10 Dhul Hijjah', ar: 'ترتيب يوم النحر', detail: '1. Ramy ʿAqabah → 2. Naḥr → 3. Ḥalq/Taqṣīr → 4. Tawāf al-Ifāḍah' },
      { icon: '✂️', name: 'Ḥalq of Taqṣīr', ar: 'الحلق أو التقصير', detail: 'Mannen: scheren (ḥalq) is beter. Knippen (taqṣīr) is ook geldig. Vrouwen: vingerbreedte knippen.' }
    ],
    hanafi: 'De volgorde (ramy → naḥr → ḥalq → tawāf) is wājib bij Ḥajj al-Qirān en Tamattuʿ. Onjuiste volgorde vereist een dam. Ḥalq vóór ramy is een fout — dam vereist.',
    dua: { ar: 'بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ، اللَّهُمَّ هَذَا مِنْكَ وَلَكَ', nl: 'In de naam van Allah, Allah is de Grootste. O Allah, dit is van U en voor U.' }
  },
  {
    id: 'tawaf-ifadah',
    name: 'Ṭawāf al-Ifāḍah',
    arabic: 'طواف الإفاضة',
    lat: 21.4226, lng: 39.8264,
    category: 'Rukn — Pijler',
    day: 10,
    color: '#F0C040',
    icon: '🌀',
    desc: 'De meest essentiële tawāf van de hadj — een rukn. Wordt verricht na het verlaten van ʿArafāt, in Minā na ramy en naḥr. Na deze tawāf wordt het iḥrām volledig beëindigd. Zonder deze tawāf is de hadj onvolledig.',
    manasik: [
      { icon: '🌀', name: '7 rondes', ar: 'سبعة أشواط', detail: 'Beginnen bij Hajar al-Aswad, linksom, eindigen bij Hajar al-Aswad.' },
      { icon: '🙏', name: 'Ṣalāh na tawāf', ar: 'ركعتا الطواف', detail: '2 rakʿāt achter Maqām Ibrāhīm (sunnah muʾakkadah).' },
      { icon: '💧', name: 'Zamzam drinken', ar: 'شرب زمزم', detail: 'Sunnah na de tawāf — duʿāʾ uitspreken voor de eerste slok.' }
    ],
    hanafi: 'Tawāf al-Ifāḍah is een rukn — onmisbaar. De tijdslimiet is van 10 t/m 12 Dhul Hijjah (afdwingbaar); daarna is er een dam vereist. Ramal (haastig lopen) is hier niet van toepassing.',
    dua: { ar: 'سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ', nl: 'Glorie aan Allah, alle lof is voor Allah, er is geen god dan Allah, en Allah is de Grootste.' }
  },
  {
    id: 'masjid-aisha',
    name: 'Masjid ʿĀʾishah (Tanʿīm)',
    arabic: 'مسجد عائشة — التنعيم',
    lat: 21.4508, lng: 39.8117,
    category: 'Mīqāt (ʿUmrah vanuit Mekka)',
    day: 0,
    color: '#9B59B6',
    icon: '🕌',
    desc: 'De dichtstbijzijnde mīqāt voor inwoners van Mekka of voor hadjgangers die een extra ʿumrah willen verrichten. Hier trok ʿĀʾishah (رضي الله عنها) haar iḥrām aan op verzoek van de Profeet ﷺ.',
    manasik: [
      { icon: '🤍', name: 'Iḥrām voor ʿUmrah', ar: 'إحرام العمرة', detail: 'Hier het iḥrām aantrekken voor een nafilah ʿumrah na de hadj.' }
    ],
    hanafi: 'Mensen die in Mekka verblijven (muqīmūn) moeten voor de ʿumrah de ḥill verlaten en iḥrām aantrekken. Tanʿīm is de meest gebruikte locatie hiervoor.',
    dua: { ar: 'لَبَّيْكَ اللَّهُمَّ عُمْرَةً', nl: 'Hier ben ik, o Allah, voor de ʿUmrah.' }
  },
  {
    id: 'tawaf-wada',
    name: 'Ṭawāf al-Wadāʿ',
    arabic: 'طواف الوداع',
    lat: 21.4227, lng: 39.8261,
    category: 'Afscheidstawāf — Wājib',
    day: 11,
    color: '#A0522D',
    icon: '👋',
    desc: 'De afscheidstawāf bij het verlaten van Mekka. Verplicht voor alle niet-Mekkanen. De pelgrim neemt afscheid van de Kaʿbah met 7 rondes en de wens dat hij/zij terugkeert. Na de tawāf direct vertrekken zonder te talmen.',
    manasik: [
      { icon: '🌀', name: '7 afscheidsrondes', ar: 'سبعة أشواط وداعاً', detail: 'Na de laatste ronde bij de deur van de Kaʿbah staan en smeekbede verrichten.' },
      { icon: '🚶', name: 'Direct vertrekken', ar: 'الخروج فوراً', detail: 'Na de tawāf al-wadāʿ niet langer verblijven dan noodzakelijk (sunnah).' }
    ],
    hanafi: 'Tawāf al-Wadāʿ is wājib voor alle hadjgangers die geen inwoner van Mekka zijn. Vrouwen in ḥayḍ zijn vrijgesteld. Weglaten vereist een dam.',
    dua: { ar: 'اللَّهُمَّ لَا تَجْعَلْهُ آخِرَ الْعَهْدِ مِنْ بَيْتِكَ، وَارْزُقْنِي الْعَوْدَةَ إِلَيْهِ', nl: 'O Allah, laat dit niet het laatste afscheid zijn van Uw Huis, en schenk mij de terugkeer ernaar.' }
  }
];

export const routeCoords = [
  [24.4074, 39.5467],   // Miqat
  [21.4225, 39.8262],   // Haram
  [21.4133, 39.8928],   // Mina
  [21.3547, 39.9845],   // Arafat
  [21.3825, 39.9361],   // Muzdalifah
  [21.4133, 39.8928],   // Mina terug
  [21.4225, 39.8262],   // Haram (tawaf ifadah)
];
