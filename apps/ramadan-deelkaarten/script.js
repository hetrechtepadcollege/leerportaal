// ─── Data: laatste 10 nachten van Ramadan ─────────────────────────────────────

const NACHTEN = [
  {
    nacht: 21,
    oneven: true,
    thema: 'Begin van de Waardevolle Nachten',
    vers: {
      arabisch: 'وَإِذَا سَأَلَكَ عِبَادِي عَنِّي فَإِنِّي قَرِيبٌ ۖ أُجِيبُ دَعْوَةَ الدَّاعِ إِذَا دَعَانِ',
      referentie: 'Al-Baqarah 2:186',
      vertaling: '“En wanneer Mijn dienaren u vragen over Mij, dan ben Ik nabij; Ik beantwoord de oproep van de roeper wanneer hij Mij aanroept.”'
    },
    hadith: {
      tekst: '"De Profeet ﷺ deed in de laatste tien nachten meer inspanning voor aanbidding dan in enige andere periode."',
      bron: 'Sahih Muslim'
    },
    dua: {
      arabisch: 'اللَّهُمَّ إِنَّكَ عُفُوٌّ كَرِيمٌ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',
      transliteratie: "Allāhumma innaka ʿafuwwun karīmun tuḥibbul ʿafwa faʾfu ʿannī",
      betekenis: '"O Allah, U bent de Meest Vergevingsgezinde, en U houdt van vergeving; vergeef mij dus.’"',
      bron: 'Tirmidhi'
    },
    dhikr: {
      arabisch: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ',
      transliteratie: "Subḥānallāhi wa biḥamdihī, Subḥānallāhil ʿaẓīm",
      betekenis: '"Heilig is Allah en alle lof komt Hem toe. Heilig is Allah, de Almachtige."',
      bron: 'Sahih Bukhari & Sahih Muslim'
    }
  },
  {
    nacht: 22,
    oneven: false,
    thema: 'De Deuren van Tawbah',
    vers: {
      arabisch: 'قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَى أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ ۚ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا ۚ إِنَّهُ هُوَ الْغَفُورُ الرَّحِيمُ',
      referentie: 'Az-Zumar 39:53',
      vertaling: '"Zeg: O Mijn dienaren die buitensporig tegen zichzelf zijn geweest, wanhoop niet aan Allahs genade. Voorwaar, Allah vergeeft alle zonden. Voorwaar, Hij is de Vergevende, de Barmhartige."'
    },
    hadith: {
      tekst: '"Elke zoon van Adam zondigt, en de besten van de zondaars zijn degenen die tawbah tonen."',
      bron: 'Tirmidhi'
    },
    dua: {
      arabisch: 'رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ',
      transliteratie: "Rabbanā ẓalamnā anfusanā wa-in lam taghfir lanā wa-tarḥamnā la-nakūnanna minal-khāsirīn",
      betekenis: '"Onze Heer, wij hebben onszelf onrecht aangedaan. Als U ons niet vergeeft en ons niet begenadigt, zullen wij zeker tot de verliezers behoren."',
      bron: 'Al-Aʿraf 7:23'
    },
    dhikr: {
      arabisch: 'أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ',
      transliteratie: "Astaghfirullāhal-ʿaẓīmal-ladhī lā ilāha illā huwal-Ḥayyul-Qayyūm wa-atūbu ilayh",
      betekenis: '"Ik vraag Allah de Geweldige om vergiffenis — er is geen god dan Hij, de Levende, de Zelfbestaande — en ik keer mij in berouw tot Hem."',
      bron: 'Tirmidhi'
    }
  },
  {
    nacht: 23,
    oneven: true,
    thema: 'Zoek de Nacht der Kracht',
    vers: {
      arabisch: 'إِنَّا أَنزَلْنَاهُ فِي لَيْلَةٍ مُّبَارَكَةٍ ۚ إِنَّا كُنَّا مُنذِرِينَ ۝ فِيهَا يُفْرَقُ كُلُّ أَمْرٍ حَكِيمٍ',
      referentie: 'Ad-Dukhan 44:3-4',
      vertaling: '"Voorwaar, Wij zonden hem (de Koran) neer in een gezegende nacht. Voorwaar, Wij zijn de Waarschuwers. Daarin wordt elke wijze zaak beslecht."'
    },
    hadith: {
      tekst: '"Zoek Laylatul Qadr in de oneven nachten van de laatste tien dagen van Ramadan."',
      bron: 'Bukhari & Moeslim'
    },
    dua: {
      arabisch: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',
      transliteratie: "Allāhumma innaka ʿafuwwun tuḥibbu l-ʿafwa fa-ʿfu ʿannī",
      betekenis: '"O Allah, U bent de Vergevende, U houdt van vergeven, vergeef mij."',
      bron: 'Tirmidhi'
    },
    dhikr: {
      arabisch: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
      transliteratie: "Lā ilāha illallāhu waḥdahū lā sharīka lah, lahul-mulku wa-lahul-ḥamdu wa-huwa ʿalā kulli shay'in qadīr",
      betekenis: '"Er is geen god dan Allah, alleen, zonder deelgenoot. Van Hem is de heerschappij en aan Hem komt alle lof toe, en Hij heeft macht over alle zaken."',
      bron: 'Bukhari & Moeslim'
    }
  },
  {
    nacht: 24,
    oneven: false,
    thema: 'Verbinding door Gebed',
    vers: {
      arabisch: 'قُمِ اللَّيْلَ إِلَّا قَلِيلًا ۝ نِّصْفَهُ أَوِ انقُصْ مِنْهُ قَلِيلًا ۝ أَوْ زِدْ عَلَيْهِ وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا',
      referentie: 'Al-Muzzammil 73:2-4',
      vertaling: '"Sta op in de nacht, behalve een weinig. De helft ervan, of verminder er een weinig van, of voeg er iets aan toe. En reciteer de Koran op duidelijke, nadrukkelijke wijze."'
    },
    hadith: {
      tekst: '"Wie in Ramadan staat (in nachtgebed) vanuit geloof en met de verwachting van beloning, zijn eerder begane zonden worden hem vergeven."',
      bron: 'Bukhari & Moeslim'
    },
    dua: {
      arabisch: 'رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِن ذُرِّيَّتِي ۚ رَبَّنَا وَتَقَبَّلْ دُعَاءِ',
      transliteratie: "Rabbij-ʿalnī muqīmaṣ-ṣalāti wa-min dhurriyyatī, rabbanā wa-taqabbal duʿāʾ",
      betekenis: '"Mijn Heer, maak mij een onderhoudende van het gebed en ook uit mijn nageslacht. Onze Heer, en aanvaard mijn smeekbede."',
      bron: 'Ibrahim 14:40'
    },
    dhikr: {
      arabisch: 'اللَّهُ أَكْبَرُ كَبِيرًا، وَالْحَمْدُ لِلَّهِ كَثِيرًا، وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلًا',
      transliteratie: "Allāhu akbaru kabīrā, wal-ḥamdulillāhi kathīrā, wa-subḥānallāhi bukratan wa-aṣīlā",
      betekenis: '"Allah is de Grootste — en alle uitbundige lof komt Allah toe — en glorie zij Allah, \'s morgens vroeg en \'s avonds laat."',
      bron: 'Moeslim'
    }
  },
  {
    nacht: 25,
    oneven: true,
    thema: 'Nacht van Kracht en Besluiten',
    vers: {
      arabisch: 'وَمِنَ اللَّيْلِ فَتَهَجَّدْ بِهِ نَافِلَةً لَّكَ عَسَى أَن يَبْعَثَكَ رَبُّكَ مَقَامًا مَّحْمُودًا',
      referentie: 'Al-Isra 17:79',
      vertaling: '"En bid een deel van de nacht als vrijwillig gebed. Wellicht zal uw Heer u naar een geprezen positie (op de Dag des Oordeels) verheffen."'
    },
    hadith: {
      tekst: '"Op de ochtend na Laylatul Qadr gaat de zon op wit, zonder (stralende) stralen, als een schijf."',
      bron: 'Moeslim'
    },
    dua: {
      arabisch: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',
      transliteratie: "Allāhumma innaka ʿafuwwun tuḥibbu l-ʿafwa fa-ʿfu ʿannī",
      betekenis: '"O Allah, U bent de Vergevende, U houdt van vergeven, vergeef mij."',
      bron: 'Tirmidhi'
    },
    dhikr: {
      arabisch: 'سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ',
      transliteratie: "Subḥānallāhi wal-ḥamdulillāhi wa-lā ilāha illallāhu wallāhu akbar",
      betekenis: '"Glorie zij Allah, en alle lof zij Allah, en er is geen god dan Allah, en Allah is de Grootste."',
      bron: 'Moeslim'
    }
  },
  {
    nacht: 26,
    oneven: false,
    thema: 'Dankbaarheid',
    vers: {
      arabisch: 'وَإِذْ تَأَذَّنَ رَبُّكُمْ لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ ۖ وَلَئِن كَفَرْتُمْ إِنَّ عَذَابِي لَشَدِيدٌ',
      referentie: 'Ibrahim 14:7',
      vertaling: '"En (gedenk) toen uw Heer aankondigde: Als jullie dankbaar zijn, zal Ik jullie zeker meer geven. Maar als jullie ondankbaar zijn, dan is Mijn bestraffing inderdaad zwaar."'
    },
    hadith: {
      tekst: '"Wie niet dankbaar is voor het weinige, zal ook niet dankbaar zijn voor het veel. En wie niet dankbaar is jegens mensen, is niet dankbaar jegens Allah."',
      bron: 'Ahmad'
    },
    dua: {
      arabisch: 'اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ',
      transliteratie: "Allāhumma aʿinnī ʿalā dhikrika wa-shukrika wa-ḥusni ʿibādatik",
      betekenis: '"O Allah, help mij U te gedenken, U dankbaar te zijn en U op de schoonste wijze te aanbidden."',
      bron: 'Abu Dawud & Nasai'
    },
    dhikr: {
      arabisch: 'الْحَمْدُ لِلَّهِ عَلَى كُلِّ حَالٍ',
      transliteratie: "Al-ḥamdulillāhi ʿalā kulli ḥāl",
      betekenis: '"Alle lof zij Allah in elke omstandigheid."',
      bron: 'Ibn Maja'
    }
  },
  {
    nacht: 27,
    oneven: true,
    thema: 'De Meest Gezegende Nacht',
    vers: {
      arabisch: 'إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ ۝ وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ ۝ لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ ۝ تَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ فِيهَا بِإِذْنِ رَبِّهِم مِّن كُلِّ أَمْرٍ ۝ سَلَامٌ هِيَ حَتَّى مَطْلَعِ الْفَجْرِ',
      referentie: 'Al-Qadr 97:1-5',
      vertaling: '"Voorwaar, Wij hebben hem (de Koran) neergezonden in de Nacht van de Verheven Waarde. En wat zal u doen weten wat de Nacht van de Verheven Waarde is? De Nacht van de Verheven Waarde is beter dan duizend maanden. De engelen en de Geest dalen daarin neer met toestemming van hun Heer voor iedere aangelegenheid. Vrede heerst er tot de aanvang van de dageraad."'
    },
    hadith: {
      tekst: '"Ubayy ibn Kaʿb رضي الله عنه zei: \'Bij Allah, ik ken de nacht (van Qadr). Het is de zevenentwinstigste nacht.\' — en noemde haar tekenen."',
      bron: 'Moeslim'
    },
    dua: {
      arabisch: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',
      transliteratie: "Allāhumma innaka ʿafuwwun tuḥibbu l-ʿafwa fa-ʿfu ʿannī",
      betekenis: '"O Allah, U bent de Vergevende, U houdt van vergeven, vergeef mij."',
      bron: 'Tirmidhi'
    },
    dhikr: {
      arabisch: 'لَا إِلَهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ',
      transliteratie: "Lā ilāha illā anta subḥānaka innī kuntu minaẓ-ẓālimīn",
      betekenis: '"Er is geen god dan U, glorie zij U, voorwaar ik behoorde tot de onrechtvaardigen." — Wie dit zegt: Allah verlicht zijn beproeving.',
      bron: 'Al-Anbiya 21:87 | Tirmidhi'
    }
  },
  {
    nacht: 28,
    oneven: false,
    thema: 'De Koran als Leidraad',
    vers: {
      arabisch: 'شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ هُدًى لِّلنَّاسِ وَبَيِّنَاتٍ مِّنَ الْهُدَى وَالْفُرْقَانِ',
      referentie: 'Al-Baqarah 2:185',
      vertaling: '"De maand Ramadan is de maand waarin de Koran is neergezonden als leiding voor de mensen en als duidelijke bewijzen van de leiding en de Onderscheiding."'
    },
    hadith: {
      tekst: '"Jibril bezoekt mij in elke nacht van Ramadan en wij reciteren de Koran aan elkaar."',
      bron: 'Bukhari'
    },
    dua: {
      arabisch: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
      transliteratie: "Rabbanā ātinā fid-dunyā ḥasanatan wa-fil-ākhirati ḥasanatan wa-qinā ʿadhāban-nār",
      betekenis: '"Onze Heer, geef ons het goede in deze wereld en het goede in het hiernamaals, en bescherm ons tegen de bestraffing van het Vuur."',
      bron: 'Al-Baqarah 2:201'
    },
    dhikr: {
      arabisch: 'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ',
      transliteratie: "Ḥasbunallāhu wa-niʿmal-wakīl",
      betekenis: '"Allah is voldoende voor ons, en Hij is de beste Behoeder."',
      bron: 'Al-Imran 3:173 | Bukhari'
    }
  },
  {
    nacht: 29,
    oneven: true,
    thema: 'De Laatste Oneven Nacht',
    vers: {
      arabisch: 'الصَّابِرِينَ وَالصَّادِقِينَ وَالْقَانِتِينَ وَالْمُنفِقِينَ وَالْمُسْتَغْفِرِينَ بِالْأَسْحَارِ',
      referentie: 'Al-Imran 3:17',
      vertaling: '"(Zij zijn) de geduldigen, de oprechten, de gehoorzamen, de gevers (in de weg van Allah), en zij die vergiffenis vragen in de vroege ochtend."'
    },
    hadith: {
      tekst: '"Wie Laylatul Qadr beleeft vanuit geloof en met hoop op beloning, zijn eerder begane zonden worden hem vergeven."',
      bron: 'Bukhari'
    },
    dua: {
      arabisch: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',
      transliteratie: "Allāhumma innaka ʿafuwwun tuḥibbu l-ʿafwa fa-ʿfu ʿannī",
      betekenis: '"O Allah, U bent de Vergevende, U houdt van vergeven, vergeef mij."',
      bron: 'Tirmidhi'
    },
    dhikr: {
      arabisch: 'أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ',
      transliteratie: "Astaghfirullāha wa-atūbu ilayh",
      betekenis: '"Ik vraag Allah om vergiffenis en ik keer mij in berouw tot Hem." — 100 maal per dag.',
      bron: 'Bukhari & Moeslim'
    }
  },
  {
    nacht: 30,
    oneven: false,
    thema: 'Afscheid van Ramadan',
    vers: {
      arabisch: 'لَا يُكَلِّفُ اللَّهُ نَفْسًا إِلَّا وُسْعَهَا ۚ لَهَا مَا كَسَبَتْ وَعَلَيْهَا مَا اكْتَسَبَتْ ۗ رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا',
      referentie: 'Al-Baqarah 2:286',
      vertaling: '"Allah belast een ziel niet meer dan zij kan dragen. Zij krijgt wat zij verdient en zij draagt wat zij verdient. Onze Heer, bestraf ons niet als wij vergeten of een fout begaan."'
    },
    hadith: {
      tekst: '"Allah bevrijdt elke nacht van Ramadan mensen van het Vuur. En dit geschiedt voor elke dienaar tot het einde van de maand."',
      bron: 'Ahmad'
    },
    dua: {
      arabisch: 'رَبَّنَا لَا تُؤَاخِذْنَا إِن نَّسِينَا أَوْ أَخْطَأْنَا ۚ رَبَّنَا وَلَا تَحْمِلْ عَلَيْنَا إِصْرًا كَمَا حَمَلْتَهُ عَلَى الَّذِينَ مِن قَبْلِنَا',
      transliteratie: "Rabbanā lā tuʾākhidhnā in nasīnā aw akhṭaʾnā, rabbanā wa-lā taḥmil ʿalaynā iṣran kamā ḥamaltahū ʿalal-ladhīna min qablinā",
      betekenis: '"Onze Heer, bestraf ons niet als wij vergeten of een fout begaan. Onze Heer, leg ons geen last op zoals U die legde op degenen vóór ons."',
      bron: 'Al-Baqarah 2:286'
    },
    dhikr: {
      arabisch: 'سُبْحَانَ الْمَلِكِ الْقُدُّوسِ',
      transliteratie: "Subḥānal-Malikil-Quddūs",
      betekenis: '"Glorie zij de Heerser, de Heilige." — 3× na het witrgebed, de derde keer met verheven stem.',
      bron: 'Nasai & Abu Dawud'
    }
  }
];

// ─── Datum ─────────────────────────────────────────────────────────────────────

const RAMADAN_START_STR = '2026-02-19';
const MS_PER_DAG = 86400000;

function parseLocalDatum(str) {
  const [y, m, d] = str.split('-').map(Number);
  return new Date(y, m - 1, d); // lokale tijdzone, geen UTC-offset probleem
}

// Geeft terug: -1 = te vroeg, 0–9 = huidige nacht (index), 10 = voorbij
function getNachtStatus() {
  const nu = new Date();
  const nacht21Start = parseLocalDatum(RAMADAN_START_STR);
  nacht21Start.setDate(nacht21Start.getDate() + 19);
  nacht21Start.setHours(19, 0, 0, 0); // kaart zichtbaar vanaf 19:00 (na Maghrib)
  const diff = Math.floor((nu - nacht21Start) / MS_PER_DAG);
  if (diff < 0) return -1;
  if (diff > 9) return 10;
  return diff; // 0 = nacht 21, 9 = nacht 30
}

// ─── DOM-render ────────────────────────────────────────────────────────────────

function renderKaart(index) {
  const nacht = NACHTEN[index];

  document.getElementById('nacht-nummer').textContent = `Nacht ${nacht.nacht}`;
  document.getElementById('nacht-thema').textContent = nacht.thema;
  document.getElementById('qadr-badge').hidden = !nacht.oneven;

  document.getElementById('vers-arabisch').textContent = nacht.vers.arabisch;
  document.getElementById('vers-referentie').textContent = nacht.vers.referentie;
  document.getElementById('vers-vertaling').textContent = nacht.vers.vertaling;

  document.getElementById('hadith-tekst').textContent = nacht.hadith.tekst;
  document.getElementById('hadith-bron').textContent = `— ${nacht.hadith.bron}`;

  document.getElementById('dua-arabisch').textContent = nacht.dua.arabisch;
  document.getElementById('dua-transliteratie').textContent = nacht.dua.transliteratie;
  document.getElementById('dua-betekenis').textContent = nacht.dua.betekenis;
  document.getElementById('dua-bron').textContent = `— ${nacht.dua.bron}`;

  document.getElementById('dzikr-arabisch').textContent = nacht.dhikr.arabisch;
  document.getElementById('dzikr-transliteratie').textContent = nacht.dhikr.transliteratie;
  document.getElementById('dzikr-betekenis').textContent = nacht.dhikr.betekenis;
  document.getElementById('dzikr-bron').textContent = `— ${nacht.dhikr.bron}`;

  document.getElementById('kaart').hidden = false;
  document.getElementById('deel-knoppen').hidden = false;

  trackEvent('nacht-bekeken', { nacht: nacht.nacht });
}

// ─── WhatsApp delen ────────────────────────────────────────────────────────────

let huidigIndex = 0;

document.getElementById('btn-whatsapp').addEventListener('click', () => {
  const nacht = NACHTEN[huidigIndex];
  const tekst =
    `🌙 *Nacht ${nacht.nacht} — ${nacht.thema}*\n\n` +
    `📖 *Koranvers (${nacht.vers.referentie})*\n` +
    `${nacht.vers.arabisch}\n` +
    `_${nacht.vers.vertaling}_\n\n` +
    `📜 *Hadith*\n${nacht.hadith.tekst}\n— ${nacht.hadith.bron}\n\n` +
    `🤲 *Du\'a*\n${nacht.dua.arabisch}\n${nacht.dua.transliteratie}\n_${nacht.dua.betekenis}_\n— ${nacht.dua.bron}\n\n` +
    `📿 *Dhikr / Istigfar*\n${nacht.dhikr.arabisch}\n${nacht.dhikr.transliteratie}\n_${nacht.dhikr.betekenis}_\n— ${nacht.dhikr.bron}\n\n` +
    `🕌 _Via HRPC Leerportaal_`;

  window.open(`https://wa.me/?text=${encodeURIComponent(tekst)}`, '_blank', 'noopener,noreferrer');
  trackEvent('deel-whatsapp', { nacht: nacht.nacht });
});

// ─── Afbeelding downloaden (Canvas) ───────────────────────────────────────────

document.getElementById('btn-download').addEventListener('click', async () => {
  const nacht = NACHTEN[huidigIndex];
  const btn = document.getElementById('btn-download');
  btn.disabled = true;
  btn.textContent = 'Bezig…';

  try {
    await document.fonts.ready;
    await document.fonts.load('400 40px Amiri');
    await document.fonts.load('700 40px Amiri');
    const dataUrl = tekenKaartCanvas(nacht);
    const link = document.createElement('a');
    link.download = `ramadan-nacht-${nacht.nacht}.png`;
    link.href = dataUrl;
    link.click();
    trackEvent('download-afbeelding', { nacht: nacht.nacht });
  } finally {
    btn.disabled = false;
    btn.innerHTML = '<span class="btn-icon">⬇</span> Download afbeelding';
  }
});

// ─── Canvas generatie ──────────────────────────────────────────────────────────

function tekenKaartCanvas(nacht) {
  const W = 1080, H = 1920;
  const canvas = document.createElement('canvas');
  canvas.width = W;
  canvas.height = H;
  const ctx = canvas.getContext('2d');

  const GOUD = '#C8A96E';
  const GOUD_LICHT = '#E8D5A3';
  const CREAM = '#F0E8D8';
  const MUTED = '#9AABB8';
  const BRON = '#7A8B98';
  const PAD = 72;
  const BREED = W - PAD * 2;

  // — Achtergrond
  const bgGrad = ctx.createLinearGradient(0, 0, 0, H);
  bgGrad.addColorStop(0, '#080F1C');
  bgGrad.addColorStop(0.45, '#0D1A30');
  bgGrad.addColorStop(1, '#080F1C');
  ctx.fillStyle = bgGrad;
  ctx.fillRect(0, 0, W, H);

  // — Subtiel rasterpatroon
  ctx.save();
  ctx.globalAlpha = 0.04;
  ctx.strokeStyle = GOUD;
  ctx.lineWidth = 0.8;
  for (let i = -H; i < W + H; i += 70) {
    ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i + H, H); ctx.stroke();
    ctx.beginPath(); ctx.moveTo(i, 0); ctx.lineTo(i - H, H); ctx.stroke();
  }
  ctx.restore();

  // — Buitenrand
  ctx.strokeStyle = `rgba(200,169,110,0.45)`;
  ctx.lineWidth = 2.5;
  ctx.strokeRect(28, 28, W - 56, H - 56);
  ctx.strokeStyle = `rgba(200,169,110,0.15)`;
  ctx.lineWidth = 1;
  ctx.strokeRect(40, 40, W - 80, H - 80);

  // — Hoekversieringen
  tekenHoekversieringen(ctx, W, H);

  // — Wassende maan bovenaan
  tekenMaan(ctx, W, 110);

  // — Oneven-nacht badge
  let headerY = 200;
  if (nacht.oneven) {
    ctx.fillStyle = 'rgba(200,169,110,0.12)';
    ctx.beginPath();
    ctx.roundRect(W / 2 - 190, headerY, 380, 44, 22);
    ctx.fill();
    ctx.fillStyle = GOUD;
    ctx.font = '500 21px "Noto Sans", sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('✦ Mogelijke Laylatul Qadr ✦', W / 2, headerY + 29);
    headerY += 60;
  }

  // — Nachtnummer
  ctx.fillStyle = GOUD;
  ctx.font = `bold 78px "Cinzel Decorative", "Cinzel", serif`;
  ctx.textAlign = 'center';
  ctx.fillText(`Nacht ${nacht.nacht}`, W / 2, headerY + 75);
  headerY += 95;

  // — Thema
  ctx.fillStyle = GOUD_LICHT;
  ctx.font = '400 34px "Noto Sans", sans-serif';
  ctx.fillText(nacht.thema, W / 2, headerY + 10);
  headerY += 55;

  // — Separator
  let y = headerY + 20;
  y = tekenSeparator(ctx, y, W, PAD, GOUD);
  y += 10;

  // — Verse sectie
  y = tekenSectieLabel(ctx, '📖  Koranvers', y, PAD, GOUD);
  y = tekenArabischTekst(ctx, nacht.vers.arabisch, y, W, PAD, BREED);
  y += 8;
  y = tekenBron(ctx, nacht.vers.referentie, y, PAD, BRON);
  y += 4;
  y = tekenWrapTekst(ctx, nacht.vers.vertaling, y, PAD, CREAM, `400 27px "Noto Sans", sans-serif`, BREED, 42);
  y += 18;

  y = tekenSeparator(ctx, y, W, PAD, GOUD);
  y += 10;

  // — Hadith sectie
  y = tekenSectieLabel(ctx, '📜  Hadith', y, PAD, GOUD);
  y = tekenWrapTekst(ctx, nacht.hadith.tekst, y, PAD, CREAM, `400 27px "Noto Sans", sans-serif`, BREED, 42);
  y += 4;
  y = tekenBron(ctx, `— ${nacht.hadith.bron}`, y, PAD, BRON);
  y += 18;

  y = tekenSeparator(ctx, y, W, PAD, GOUD);
  y += 10;

  // — Du'a sectie
  y = tekenSectieLabel(ctx, "🤲  Du'a", y, PAD, GOUD);
  y = tekenArabischTekst(ctx, nacht.dua.arabisch, y, W, PAD, BREED);
  y += 6;
  y = tekenWrapTekst(ctx, nacht.dua.transliteratie, y, PAD, MUTED, `italic 25px "Noto Sans", sans-serif`, BREED, 38);
  y += 4;
  y = tekenWrapTekst(ctx, nacht.dua.betekenis, y, PAD, CREAM, `400 26px "Noto Sans", sans-serif`, BREED, 40);
  y += 4;
  y = tekenBron(ctx, `— ${nacht.dua.bron}`, y, PAD, BRON);
  y += 18;

  y = tekenSeparator(ctx, y, W, PAD, GOUD);
  y += 10;

  // — Dhikr sectie
  y = tekenSectieLabel(ctx, '📿  Dhikr / Istigfar', y, PAD, GOUD);
  y = tekenArabischTekst(ctx, nacht.dhikr.arabisch, y, W, PAD, BREED);
  y += 6;
  y = tekenWrapTekst(ctx, nacht.dhikr.transliteratie, y, PAD, MUTED, `italic 25px "Noto Sans", sans-serif`, BREED, 38);
  y += 4;
  y = tekenWrapTekst(ctx, nacht.dhikr.betekenis, y, PAD, CREAM, `400 26px "Noto Sans", sans-serif`, BREED, 40);
  y += 4;
  y = tekenBron(ctx, `— ${nacht.dhikr.bron}`, y, PAD, BRON);

  // — Footer
  const footerY = H - 56;
  ctx.strokeStyle = `rgba(200,169,110,0.2)`;
  ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(PAD, footerY - 20); ctx.lineTo(W - PAD, footerY - 20); ctx.stroke();
  ctx.fillStyle = `rgba(200,169,110,0.5)`;
  ctx.font = '400 26px "Noto Sans", sans-serif';
  ctx.textAlign = 'center';
  ctx.fillText('HRPC Leerportaal', W / 2, footerY);

  return canvas.toDataURL('image/png');
}

function tekenMaan(ctx, W, centerY) {
  const cx = W / 2;
  ctx.save();
  ctx.fillStyle = '#C8A96E';
  ctx.beginPath();
  ctx.arc(cx, centerY, 38, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalCompositeOperation = 'destination-out';
  ctx.beginPath();
  ctx.arc(cx + 18, centerY - 12, 32, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalCompositeOperation = 'source-over';
  ctx.restore();

  const sterren = [
    { x: cx + 52, y: centerY - 26, f: 22 },
    { x: cx + 68, y: centerY + 12, f: 14 },
    { x: cx + 44, y: centerY + 34, f: 11 }
  ];
  sterren.forEach(s => {
    ctx.fillStyle = '#C8A96E';
    ctx.font = `${s.f}px serif`;
    ctx.textAlign = 'center';
    ctx.fillText('✦', s.x, s.y);
  });
}

function tekenHoekversieringen(ctx, W, H) {
  const sz = 55, of = 28;
  ctx.strokeStyle = 'rgba(200,169,110,0.55)';
  ctx.lineWidth = 2;
  const hoeken = [
    [of, of + sz, of, of, of + sz, of],
    [W - of - sz, of, W - of, of, W - of, of + sz],
    [of, H - of - sz, of, H - of, of + sz, H - of],
    [W - of - sz, H - of, W - of, H - of, W - of, H - of - sz]
  ];
  hoeken.forEach(([x1, y1, x2, y2, x3, y3]) => {
    ctx.beginPath(); ctx.moveTo(x1, y1); ctx.lineTo(x2, y2); ctx.lineTo(x3, y3); ctx.stroke();
  });
  // Klein diamantje in hoek
  [[of + sz / 2, of + sz / 2], [W - of - sz / 2, of + sz / 2],
   [of + sz / 2, H - of - sz / 2], [W - of - sz / 2, H - of - sz / 2]
  ].forEach(([px, py]) => {
    ctx.fillStyle = 'rgba(200,169,110,0.5)';
    ctx.beginPath(); ctx.arc(px, py, 4, 0, Math.PI * 2); ctx.fill();
  });
}

function tekenSeparator(ctx, y, W, pad, kleur) {
  const cx = W / 2;
  ctx.strokeStyle = `rgba(200,169,110,0.25)`;
  ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(pad + 60, y); ctx.lineTo(cx - 24, y); ctx.stroke();
  ctx.beginPath(); ctx.moveTo(cx + 24, y); ctx.lineTo(W - pad - 60, y); ctx.stroke();
  ctx.fillStyle = kleur;
  ctx.font = '18px serif';
  ctx.textAlign = 'center';
  ctx.fillText('❋', cx, y + 7);
  return y + 32;
}

function tekenSectieLabel(ctx, label, y, pad, kleur) {
  ctx.fillStyle = kleur;
  ctx.font = '600 26px "Noto Sans", sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText(label, pad, y);
  return y + 42;
}

function tekenArabischTekst(ctx, tekst, y, W, pad, maxBreed) {
  ctx.save();
  ctx.direction = 'rtl';
  ctx.textAlign = 'right';
  ctx.fillStyle = '#F0E8D8';
  ctx.font = '500 38px Amiri, serif';
  const regels = wrapTekstCanvas(ctx, tekst, maxBreed);
  regels.forEach(regel => {
    ctx.fillText(regel, W - pad, y);
    y += 56;
  });
  ctx.restore();
  return y + 8;
}

function tekenWrapTekst(ctx, tekst, y, pad, kleur, font, maxBreed, regelHoogte) {
  ctx.fillStyle = kleur;
  ctx.font = font;
  ctx.textAlign = 'left';
  const regels = wrapTekstCanvas(ctx, tekst, maxBreed);
  regels.forEach(regel => {
    ctx.fillText(regel, pad, y);
    y += regelHoogte;
  });
  return y;
}

function tekenBron(ctx, tekst, y, pad, kleur) {
  ctx.fillStyle = kleur;
  ctx.font = '400 23px "Noto Sans", sans-serif';
  ctx.textAlign = 'left';
  ctx.fillText(tekst, pad, y);
  return y + 34;
}

function wrapTekstCanvas(ctx, tekst, maxBreed) {
  const woorden = tekst.split(' ');
  const regels = [];
  let regel = '';
  woorden.forEach(woord => {
    const test = regel ? regel + ' ' + woord : woord;
    if (ctx.measureText(test).width > maxBreed && regel) {
      regels.push(regel);
      regel = woord;
    } else {
      regel = test;
    }
  });
  if (regel) regels.push(regel);
  return regels;
}

// ─── GoatCounter tracking ──────────────────────────────────────────────────────

function trackEvent(naam, extra = {}) {
  if (typeof window.goatcounter === 'undefined' || !window.goatcounter.count) return;
  window.goatcounter.count({
    path: `ramadan-deelkaarten/${naam}`,
    title: `Deelkaarten: ${naam}`,
    event: true
  });
}

// ─── Init ──────────────────────────────────────────────────────────────────────

function init() {
  const status = getNachtStatus();
  if (status === -1) {
    document.getElementById('staat-vroeg').hidden = false;
    trackEvent('staat-vroeg');
  } else if (status === 10) {
    document.getElementById('staat-klaar').hidden = false;
    trackEvent('staat-klaar');
  } else {
    huidigIndex = status;
    renderKaart(huidigIndex);
  }
}

init();
