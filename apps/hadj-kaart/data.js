export const locations = [
  {
    id: 'miqat-dhulhulayfah',
    name: 'Mīqāt Dhū al-Ḥulayfah',
    arabic: 'ذو الحليفة',
    lat: 24.4074, lng: 39.5467,
    category: 'Mīqāt',
    day: 0,
    color: '#7B5EA7',
    icon: '◉',
    desc: 'De mīqāt (مِيقَات) voor reizigers vanuit Medina en het noorden. Hier trekt de pelgrim het iḥrām aan en spreekt de niyyah uit voordat de heilige grenzen worden betreden. Ook bekend als Abyār ʿAlī.',
    manasik: [
      { icon: '✂️', name: 'Voorbereiding', ar: 'التجهيز', detail: 'Vóór het iḥrām: nagels knippen, oksels en schaamhaar verwijderen, snor knippen. Dit is sunnah.' },
      { icon: '◎', name: 'Ghusl', ar: 'غسل', detail: 'Volledige wassing (ghusl) vóór het iḥrām is sunnah.' },
      { icon: '◻️', name: 'Iḥrām aantrekken', ar: 'الإحرام', detail: 'Mannen: twee witte ongestikte doeken (izār en ridāʾ). Vrouwen: normale islamitische kleding, gezicht onbedekt.' },
      { icon: '◈', name: 'Twee rakʿāt sunnah', ar: 'ركعتا الإحرام', detail: 'Sunnah: twee rakʿāt bidden vóór de niyyah. In de eerste rakʿāt sūrat al-Kāfirūn, in de tweede al-Ikhlāṣ.' },
      { icon: '◉', name: 'Niyyah & Talbiyah', ar: 'النية والتلبية', detail: 'Intentie uitspreken voor ʿumrah (bij Tamattuʿ). Daarna de Talbiyah herhalen tot aankomst bij de Kaʿbah.' }
    ],
    hanafi: 'Het iḥrām mag vóór de mīqāt aangetrokken worden, maar de niyyah en talbiyah moeten bij of vóór de mīqāt worden uitgesproken. De 2-rakʿāt is sunnah muʾakkadah.',
    dua: { ar: 'لَبَّيْكَ اللَّهُمَّ لَبَّيْكَ، لَبَّيْكَ لَا شَرِيكَ لَكَ لَبَّيْكَ، إِنَّ الْحَمْدَ وَالنِّعْمَةَ لَكَ وَالْمُلْكَ، لَا شَرِيكَ لَكَ', nl: 'Hier ben ik, o Allah, hier ben ik. Hier ben ik, U heeft geen deelgenoot, hier ben ik. Voorwaar alle lof, gunst en heerschappij zijn van U. U heeft geen deelgenoot.' }
  },
  {
    id: 'masjid-haram',
    name: 'Masjid al-Ḥarām',
    arabic: 'المسجد الحرام',
    lat: 21.4240, lng: 39.8245,
    category: 'Heiligdom',
    day: 0,
    color: '#C9A84C',
    icon: '🕋',
    desc: 'Het grootste heiligdom van de islam, in het centrum van Mekka. De Kaʿbah staat in het midden; de Masjid al-Ḥarām omsluit de Kaʿbah, Maqām Ibrāhīm, de Ḥijr Ismāʿīl en de Zamzam-put. Bij aankomst begint de pelgrim met de tawāf al-qudūm.',
    manasik: [
      { icon: '🕋', name: 'Tawāf al-Qudūm', ar: 'طواف القدوم', detail: '7 rondes om de Kaʿbah, linksom, beginnen bij de Hajar al-Aswad. Sunnah bij aankomst voor hadjgangers.' },
      { icon: '↔️', name: 'Saʿy', ar: 'السعي', detail: '7 gangen tussen Ṣafā en Marwah, ter herdenking van Hājar (عليها السلام).' },
      { icon: '◎', name: 'Zamzam', ar: 'ماء زمزم', detail: 'Drinken van Zamzam-water na de tawāf is sunnah. Maak een duʿāʾ bij de eerste slok.' }
    ],
    hanafi: 'De tawāf al-qudūm is sunnah — geen dam bij weglaten. De saʿy na tawāf al-qudūm geldt als de definitieve saʿy van de hadj.',
    dua: { ar: 'اللَّهُمَّ أَنْتَ السَّلَامُ وَمِنْكَ السَّلَامُ، فَحَيِّنَا رَبَّنَا بِالسَّلَامِ', nl: 'O Allah, U bent Vrede en van U komt vrede. Verwelkom ons, onze Heer, met vrede.' }
  },
  {
    id: 'kaaba',
    name: 'Al-Kaʿbah',
    arabic: 'الكعبة المشرفة',
    lat: 21.4225, lng: 39.8262,
    category: 'Heiligste plek',
    day: 0,
    color: '#E8C97A',
    icon: '⬡',
    desc: 'Het Huis van Allah (بَيْتُ اللهِ), gebouwd door Ibrāhīm en Ismāʿīl (عليهما السلام). De Hajar al-Aswad bevindt zich in de zuidoosthoek. De Multazam, Maqām Ibrāhīm, Ḥijr Ismāʿīl en de Rukn al-Yamānī omringen de Kaʿbah.',
    manasik: [
      { icon: '◻️', name: 'Iḍṭibāʿ', ar: 'الاضطباع', detail: 'Mannen: leg het bovenste iḥrām-doek (ridāʾ) onder de rechteroksel door en draap het over de linkerschouder. Geldt tijdens de gehele tawāf.' },
      { icon: '◉', name: 'Istilām al-Ḥajar', ar: 'استلام الحجر', detail: 'Begin elke ronde bij de Hajar al-Aswad. Aanraken of kussen is sunnah. Bij drukte: gebaar met de rechterhand en zeg "Allāhu Akbar".' },
      { icon: '◈', name: 'Rukn al-Yamānī', ar: 'الركن اليماني', detail: 'Aanraken met de rechterhand bij elke ronde (sunnah). Niet kussen.' },
      { icon: '🤲', name: 'Multazam', ar: 'الملتزم', detail: 'De ruimte (±2 m) tussen de deur en de Hajar al-Aswad. Omhels de muur en smeek Allah — bijzonder aanbevolen moment voor duʿāʾ.' },
      { icon: '◈', name: 'Maqām Ibrāhīm', ar: 'مقام إبراهيم', detail: 'Na de tawāf: 2 rakʿāt bidden achter Maqām Ibrāhīm is sunnah muʾakkadah.' }
    ],
    hanafi: 'Iḍṭibāʿ is sunnah tijdens de tawāf al-qudūm. Ramal (versnelde pas in eerste 3 ronden) is sunnah muʾakkadah voor mannen. Beide gelden niet bij de tawāf al-ifāḍah.',
    dua: { ar: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ', nl: 'Onze Heer, schenk ons het goede in deze wereld en het goede in het Hiernamaals, en bescherm ons tegen het Hellevuur.' }
  },
  {
    id: 'safa-marwa',
    name: 'Al-Ṣafā & Al-Marwah',
    arabic: 'الصفا والمروة',
    lat: 21.4222, lng: 39.8281,
    category: 'Saʿy',
    day: 0,
    color: '#52B788',
    icon: '↔',
    desc: 'Twee heuvels in de oostelijke corridor van de Masjid al-Ḥarām, verbonden door de Masʿā (مَسْعَى). Hier wordt de Saʿy verricht — 7 gangen ter herdenking van Hājar (عليها السلام) die water zocht voor haar zoon Ismāʿīl (ع).',
    manasik: [
      { icon: '◉', name: 'Begin bij Ṣafā', ar: 'الصفا', detail: 'Klim op Ṣafā, wend je naar de Kaʿbah en verricht duʿāʾ. Spreek de openingsformule uit.' },
      { icon: '↔️', name: '7 gangen', ar: 'سبعة أشواط', detail: 'Ṣafā → Marwah = 1 gang. Marwah → Ṣafā = 2. Totaal 7 gangen, eindigend bij Marwah.' },
      { icon: '◈', name: 'Harwala', ar: 'الهرولة', detail: 'Mannen lopen snel tussen de twee groene palen (±50 m). Dit heet harwala, niet ramal — het is specifiek voor de saʿy.' }
    ],
    hanafi: 'De Saʿy is wājib. Weglaten vereist een dam (دَم). De saʿy na de tawāf al-qudūm is geldig als de definitieve saʿy van de hadj.',
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
    desc: 'Het "tentendorp" op 8 km van Mekka. Op 8 Dhul Hijjah (Yawm al-Tarwiyah) vertrekken pelgrims hierheen na het opnieuw aantrekken van het iḥrām. Minā is ook de verblijfplaats tijdens de Ayyām al-Tashrīq (11–13 Dhul Hijjah) en de locatie van de Jamarāt-bruggen.',
    manasik: [
      { icon: '◻️', name: 'Nieuw iḥrām aantrekken', ar: 'إحرام الحج', detail: 'Op 8 Dhul Hijjah: ghusl verrichten, iḥrām aantrekken en niyyah uitspreken voor de hadj (bij Tamattuʿ). Nu begint het eigenlijke hadjritueel.' },
      { icon: '◉', name: 'Niyyah voor Hadj', ar: 'نية الحج', detail: 'Spreek de intentie uit: "Labbayk Allāhumma Ḥajjan". Herhaal de Talbiyah tot het gooien van de eerste steen op 10 Dhul Hijjah.' },
      { icon: '◈', name: 'Overnachting in Minā', ar: 'المبيت بمنى', detail: 'Overnachten in Minā op de 8e is sunnah. Verricht de 5 gebeden en breng de nacht door met dhikr en recitatie.' },
      { icon: '↔️', name: 'Steenwerpen (later)', ar: 'الرمي', detail: 'Op 10, 11, 12 (en 13) Dhul Hijjah: steengooien naar de Jamarāt.' }
    ],
    hanafi: 'Overnachting in Minā op 8 Dhul Hijjah is sunnah — geen dam bij weglaten. Qaṣr (verkorten) geldt alleen als de pelgrim musāfir is (niet 15+ dagen blijft). Bij Tamattuʿ is het opnieuw aantrekken van iḥrām op dag 8 verplicht.',
    dua: { ar: 'لَبَّيْكَ اللَّهُمَّ حَجًّا', nl: 'Hier ben ik, o Allah, voor de Hadj.' }
  },
  {
    id: 'arafat',
    name: 'ʿArafāt',
    arabic: 'عرفات',
    lat: 21.3547, lng: 39.9845,
    category: 'Wuqūf — Rukn',
    day: 9,
    color: '#E8734A',
    icon: '◉',
    desc: 'Het wuqūf op ʿArafāt (9 Dhul Hijjah) is de absolute kern van de hadj: "Al-Ḥajju ʿArafah." Van Dhuhr tot zonsondergang verblijft de pelgrim hier in gebed en dhikr. Jabal al-Raḥmah (berg van barmhartigheid) bevindt zich op de vlakte.',
    manasik: [
      { icon: '◉', name: 'Wuqūf (stilstaan)', ar: 'الوقوف بعرفة', detail: 'Rukn: aanwezig zijn op de vlakte van ʿArafāt van Dhuhr tot zonsondergang. Missen maakt de hadj ongeldig.' },
      { icon: '🕌', name: 'Khuṭbah & Ṣalāh bij Namirah', ar: 'الخطبة والصلاة', detail: 'Bijwonen van de khuṭbah bij de Masjid al-Namirah. Dhuhr en ʿAṣr worden gecombineerd (jamʿ al-taqrīb) gebeden.' },
      { icon: '🤲', name: 'Duʿāʾ & Dhikr', ar: 'الدعاء والذكر', detail: 'Dit is het hoogtepunt van de hadj. Intense smeekbede, Talbiyah, tawbah en veel ṣalawāt op de Profeet ﷺ.' }
    ],
    hanafi: 'Wuqūf ʿArafāt is een rukn — onmisbaar. Vertrek vóór zonsondergang is makrūh; de hadj blijft geldig mits een dam (schaap) wordt geslacht. Aanwezig zijn vóór Fajr op de 10e (zonder Dhuhr op de 9e) is ook geldig.',
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
    desc: 'De "Berg van Barmhartigheid" op de vlakte van ʿArafāt. Hier gaf de Profeet ﷺ zijn afscheidspreek. Het klimmen van de berg is niet verplicht — de gehele vlakte van ʿArafāt is geldig voor het wuqūf.',
    manasik: [
      { icon: '◈', name: 'Niet verplicht te beklimmen', ar: 'ليس واجباً', detail: 'Het beklimmen is niet vereist. Het wuqūf geldt voor de gehele vlakte. Vermijd de drukte als het ten koste gaat van je duʿāʾ.' },
      { icon: '🤲', name: 'Dhikr & Ṣalawāt', ar: 'الذكر والصلاة', detail: 'Verricht veel ṣalawāt op de Profeet ﷺ, tawbah en duʿāʾ, en herdenk de Dag des Oordeels.' }
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
    desc: 'Tussen ʿArafāt en Minā. Na zonsondergang op 9 Dhul Hijjah reizen pelgrims naar Muzdalifah. De nacht doorbrengen en Fajr hier verrichten is wājib. Ook worden de steentjes voor de Jamarāt hier verzameld.',
    manasik: [
      { icon: '◈', name: 'Maghrib & ʿIshāʾ combineren', ar: 'الجمع بين الصلاتين', detail: 'Bij aankomst: Maghrib en ʿIshāʾ gezamenlijk bidden (jamʿ al-taʾkhīr). Maghrib 3 rakʿāt, ʿIshāʾ 2 of 4 rakʿāt.' },
      { icon: '🌙', name: 'Overnachting', ar: 'المبيت بمزدلفة', detail: 'Wājib: minimaal tot na middernacht in Muzdalifah verblijven. Fajr hier bidden is sunnah.' },
      { icon: '◉', name: 'Wuqūf bij al-Mashʿar al-Ḥarām', ar: 'الوقوف بالمشعر الحرام', detail: 'Na Fajr: stilstaan bij de Mashʿar al-Ḥarām, de qiblah in staan en duʿāʾ verrichten tot vlak voor zonsopgang.' },
      { icon: '◎', name: 'Steentjes verzamelen', ar: 'جمع الحصى', detail: 'Kiezelstenen rapen ter grootte van een druif (±1 cm). 49 stenen voor muʿajjilīn (vroeg vertrek), 70 voor muʾakhkhirīn.' }
    ],
    hanafi: 'Overnachting is wājib — weglaten vereist een dam. Zwakke personen (ouderen, zieken) mogen na middernacht vertrekken. Steentjes mogen ook in Minā worden geraapt.',
    dua: { ar: 'اللَّهُمَّ كَمَا وَقَفْتَنَا فِيهِ وَأَرَيْتَنَا إِيَّاهُ، فَوَفِّقْنَا لِذِكْرِكَ كَمَا هَدَيْتَنَا', nl: 'O Allah, zoals U ons hier deed stilstaan en ons dit toonde, begeleid ons tot Uw dhikr zoals U ons hebt geleid.' }
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
    desc: 'Drie pilaren in Minā die de plaatsen markeren waar Ibrāhīm (عليه السلام) Iblīs met stenen wierp. Op 10 Dhul Hijjah: alleen Jamarāt al-ʿAqabah (de grote). Op 11, 12 en 13: alle drie in volgorde.',
    manasik: [
      { icon: '🪨', name: 'Ramy al-Jamarāt', ar: 'رمي الجمرات', detail: 'Gooi elke steen afzonderlijk met de rechterhand. Zeg bij elke steen "Allāhu Akbar". Gooien, niet gooien en rapen.' },
      { icon: '◉', name: 'Dag 10: alleen al-ʿAqabah', ar: 'يوم النحر', detail: 'Alleen de grote Jamarāt (al-ʿAqabah). 7 stenen. Volgorde daarna: naḥr → ḥalq/taqṣīr → tawāf al-ifāḍah.' },
      { icon: '↔️', name: 'Ayyām al-Tashrīq (11–13)', ar: 'أيام التشريق', detail: 'Volgorde: klein (al-Ūlā) → midden (al-Wusṭā) → groot (al-ʿAqabah). Elk 7 stenen. Na Dhuhr, vóór Maghrib.' }
    ],
    hanafi: 'Ramy is wājib. Gooien vóór Fajr op dag 10 is ongeldig. Weglaten of onjuiste volgorde vereist een dam. Op de Tashrīq-dagen is gooien vóór Dhuhr makrūh (onbevoegd).',
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
    icon: '✦',
    desc: 'Op 10 Dhul Hijjah (Yawm al-Naḥr / ʿĪd al-Aḍḥā) wordt het offerdier geslacht. Bij Ḥajj al-Tamattuʿ is de naḥr wājib als dam voor het combineren van ʿumrah en hadj. Na de naḥr volgen ḥalq en tawāf al-ifāḍah.',
    manasik: [
      { icon: '◉', name: 'Volgorde op dag 10', ar: 'ترتيب يوم النحر', detail: '1. Ramy al-ʿAqabah → 2. Naḥr (offerslachting) → 3. Ḥalq of Taqṣīr → 4. Tawāf al-Ifāḍah. Deze volgorde is wājib.' },
      { icon: '✂️', name: 'Ḥalq of Taqṣīr', ar: 'الحلق أو التقصير', detail: 'Mannen: scheren (ḥalq) is beter. Knippen (taqṣīr) is geldig. Vrouwen: minimaal een vingerbreedte knippen van alle kanten.' },
      { icon: '◈', name: 'Einde iḥrām', ar: 'التحلل', detail: 'Na ḥalq/taqṣīr: de grote taḥallul — alle iḥrām-verboden zijn opgeheven, inclusief het samenzijn met de echtgeno(o)t(e).' }
    ],
    hanafi: 'De volgorde (ramy → naḥr → ḥalq → tawāf) is wājib bij Tamattuʿ en Qirān. Onjuiste volgorde vereist een dam. Ḥalq vóór ramy is een fout — dam vereist.',
    dua: { ar: 'بِسْمِ اللَّهِ وَاللَّهُ أَكْبَرُ، اللَّهُمَّ هَذَا مِنْكَ وَلَكَ', nl: 'In de naam van Allah, Allah is de Grootste. O Allah, dit is van U en voor U.' }
  },
  {
    id: 'tawaf-ifadah',
    name: 'Ṭawāf al-Ifāḍah',
    arabic: 'طواف الإفاضة',
    lat: 21.4210, lng: 39.8258,
    category: 'Rukn — Pijler',
    day: 10,
    color: '#F0C040',
    icon: '🌀',
    desc: 'De meest essentiële tawāf van de hadj — een rukn. Verricht na ramy en naḥr op dag 10. Zonder deze tawāf is de hadj onvolledig. Na deze tawāf is het iḥrām volledig beëindigd.',
    manasik: [
      { icon: '🌀', name: '7 rondes', ar: 'سبعة أشواط', detail: 'Beginnen bij de Hajar al-Aswad, linksom. Geen ramal of iḍṭibāʿ bij deze tawāf.' },
      { icon: '◈', name: 'Ṣalāh na tawāf', ar: 'ركعتا الطواف', detail: '2 rakʿāt achter Maqām Ibrāhīm is sunnah muʾakkadah.' },
      { icon: '◎', name: 'Zamzam drinken', ar: 'شرب زمزم', detail: 'Sunnah na de tawāf. Maak een duʿāʾ bij de eerste slok: voor kennis, gezondheid, of wat je wenst.' }
    ],
    hanafi: 'Ṭawāf al-Ifāḍah is een rukn — onmisbaar. Tijdslimiet: bij voorkeur 10–12 Dhul Hijjah. Daarna is een dam vereist. Ramal geldt hier niet.',
    dua: { ar: 'سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ', nl: 'Glorie aan Allah, alle lof is voor Allah, er is geen god dan Allah, en Allah is de Grootste.' }
  },
  {
    id: 'tawaf-wada',
    name: 'Ṭawāf al-Wadāʿ',
    arabic: 'طواف الوداع',
    lat: 21.4236, lng: 39.8273,
    category: 'Afscheidstawāf — Wājib',
    day: 11,
    color: '#A0522D',
    icon: '◎',
    desc: 'De afscheidstawāf bij het verlaten van Mekka. Wājib voor alle niet-Mekkanen. De pelgrim neemt afscheid van de Kaʿbah met 7 rondes. Na de tawāf direct vertrekken zonder onnodig te talmen.',
    manasik: [
      { icon: '🌀', name: '7 afscheidsrondes', ar: 'سبعة أشواط وداعاً', detail: 'Na de laatste ronde: stilstaan bij de Multazam en smeekbede verrichten. Geen ramal of iḍṭibāʿ.' },
      { icon: '↩️', name: 'Direct vertrekken', ar: 'الخروج فوراً', detail: 'Na de tawāf al-wadāʿ zo snel mogelijk de stad verlaten. Verblijven erna is makrūh tenzij noodzakelijk.' }
    ],
    hanafi: 'Ṭawāf al-Wadāʿ is wājib voor alle niet-Mekkanen. Vrouwen in ḥayḍ zijn vrijgesteld — geen dam vereist. Weglaten zonder geldige reden vereist een dam.',
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
