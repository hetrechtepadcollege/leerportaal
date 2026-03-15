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
      betekenis: '"O Allah, U bent de Meest Vergevingsgezinde, en U houdt van vergeving; vergeef mij dus."',
      bron: 'Tirmidzī'
    },
    dzikr: {
      arabisch: 'سُبْحَانَ اللَّهِ وَبِحَمْدِهِ، سُبْحَانَ اللَّهِ الْعَظِيمِ',
      transliteratie: "Subḥānallāhi wa biḥamdihī, Subḥānallāhil ʿaẓīm",
      betekenis: '"Heilig is Allah en alle lof komt Hem toe. Heilig is Allah, de Almachtige."',
      bron: 'Sahih Bukhari & Sahih Muslim'
    }
  },
  {
    nacht: 22,
    oneven: false,
    thema: 'De Deuren van Tawbah (berouw)',
    vers: {
      arabisch: 'قُلْ يَا عِبَادِيَ الَّذِينَ أَسْرَفُوا عَلَى أَنفُسِهِمْ لَا تَقْنَطُوا مِن رَّحْمَةِ اللَّهِ ۚ إِنَّ اللَّهَ يَغْفِرُ الذُّنُوبَ جَمِيعًا ۚ إِنَّهُ هُوَ الْغَفُورُ الرَّحِيمُ',
      referentie: 'Az-Zumar 39:53',
      vertaling: '"Zeg: \'O Mijn dienaren die buitensporig zijn geweest tegenover julliezelf, wanhoopt niet aan de barmhartigheid van Allah. Voorwaar, Allah vergeeft de zonden tezamen. Hij is de Vergevende, de Barmhartige.\'"'
    },
    hadith: {
      tekst: '"Elke mens maakt fouten en de besten onder degenen die fouten maken zijn degenen die berouw tonen."',
      bron: 'Tirmidzī'
    },
    dua: {
      arabisch: 'رَبَّنَا ظَلَمْنَا أَنفُسَنَا وَإِن لَّمْ تَغْفِرْ لَنَا وَتَرْحَمْنَا لَنَكُونَنَّ مِنَ الْخَاسِرِينَ',
      transliteratie: "Rabbanā ẓalamnā anfusanā wa-in lam taghfir lanā wa-tarḥamnā la-nakūnanna minal-khāsirīn",
      betekenis: '"Onze Heer, wij hebben onszelf onrecht aangedaan en als U ons niet vergeeft en geen erbarmen met ons hebt, dan zullen wij zeker bij de verliezers behoren."',
      bron: 'Al-Aʿraf 7:23'
    },
    dzikr: {
      arabisch: 'أَسْتَغْفِرُ اللَّهَ الْعَظِيمَ الَّذِي لَا إِلَهَ إِلَّا هُوَ الْحَيُّ الْقَيُّومُ وَأَتُوبُ إِلَيْهِ',
      transliteratie: "Astaghfirullāhal-ʿaẓīmal-ladhī lā ilāha illā huwal-Ḥayyul-Qayyūm wa-atūbu ilayh",
      betekenis: '"Ik vraag vergiffenis aan Allah, de Almachtige  — er is geen god dan Hij, de Levende, de Zelfbestaande — en ik toon berouw aan Hem."',
      bron: 'Tirmidzī'
    }
  },
  {
    nacht: 23,
    oneven: true,
    thema: 'Zoek de Nacht van Qadr',
    vers: {
      arabisch: 'اِنَّاۤ اَنْزَلْنٰهُ فِیْ لَیْلَةِ الْقَدْرِؕ',
      referentie: 'al-Qadr 97:1',
      vertaling: '“Voorwaar, Wij hebben het (de Koran) neergezonden in de Nacht van Qadr."'
    },
    hadith: {
      tekst: '"Zoek Laylatul Qadr in de oneven nachten van de laatste tien dagen van Ramadan."',
      bron: 'Sahih Bukhari & Sahih Muslim'
    },
    dua: {
      arabisch: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',
      transliteratie: "Allāhumma innaka ʿafuwwun tuḥibbu l-ʿafwa fa-ʿfu ʿannī",
      betekenis: '"O Allah, U bent de Vergevende, U houdt van vergeven, vergeef mij."',
      bron: 'Tirmidzī'
    },
    dzikr: {
      arabisch: 'لَا إِلَهَ إِلَّا اللَّهُ وَحْدَهُ لَا شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ',
      transliteratie: "Lā ilāha illallāhu waḥdahū lā sharīka lah, lahul-mulku wa-lahul-ḥamdu wa-huwa ʿalā kulli shay'in qadīr",
      betekenis: '"Er is geen god dan Allah, alleen, zonder deelgenoot. Van Hem is de heerschappij en aan Hem komt alle lof toe, en Hij heeft macht over alle zaken."',
      bron: 'Sahih Bukhari & Sahih Muslim'
    }
  },
  {
    nacht: 24,
    oneven: false,
    thema: 'Verbinding door Gebed',
    vers: {
      arabisch: 'قُمِ اللَّيْلَ إِلَّا قَلِيلًا ۝ نِّصْفَهُ أَوِ انقُصْ مِنْهُ قَلِيلًا ۝ أَوْ زِدْ عَلَيْهِ وَرَتِّلِ الْقُرْآنَ تَرْتِيلًا',
      referentie: 'Al-Muzzammil 73:2-4',
      vertaling: '"Blijf de nacht overeind, behalve een klein deel: de helft ervan of trek er een klein deel van af, of voeg er iets aan toe en draag de Koran voor met een duidelijke voordracht."'
    },
    hadith: {
      tekst: '"Wie in de nacht van Laylatul Qadr staat in gebed, met oprecht geloof en om goede daden te verrichten, voor hem worden de zonden die hij eerder heeft begaan vergeven."',
      bron: 'Sahih Bukhari'
    },
    dua: {
      arabisch: 'رَبِّ اجْعَلْنِي مُقِيمَ الصَّلَاةِ وَمِن ذُرِّيَّتِي ۚ رَبَّنَا وَتَقَبَّلْ دُعَاءِ',
      transliteratie: "Rabbij-ʿalnī muqīmaṣ-ṣalāti wa-min dhurriyyatī, rabbanā wa-taqabbal duʿāʾ",
      betekenis: '"Mijn Heer, maak dat ik het gebed onderhoud en ook een deel van mijn nakomelingen. Onze Heer, aanvaard mijn gebed."',
      bron: 'Ibrahim 14:40'
    },
    dzikr: {
      arabisch: 'اللَّهُ أَكْبَرُ كَبِيرًا، وَالْحَمْدُ لِلَّهِ كَثِيرًا، وَسُبْحَانَ اللَّهِ بُكْرَةً وَأَصِيلًا',
      transliteratie: "Allāhu akbaru kabīrā, wal-ḥamdulillāhi kathīrā, wa-subḥānallāhi bukratan wa-aṣīlā",
      betekenis: '"Allah is de Grootste — en alle uitbundige lof komt Allah toe — en glorie zij Allah, \'s morgens vroeg en \'s avonds laat."',
      bron: 'Sahih Muslim'
    }
  },
  {
    nacht: 25,
    oneven: true,
    thema: 'Nacht van Qadr en Besluiten',
    vers: {
      arabisch: 'وَمِنَ اللَّيْلِ فَتَهَجَّدْ بِهِ نَافِلَةً لَّكَ عَسَى أَن يَبْعَثَكَ رَبُّكَ مَقَامًا مَّحْمُودًا',
      referentie: 'Al-Isra 17:79',
      vertaling: '"En bid een deel van de nacht als vrijwillig gebed. Wellicht zal uw Heer u naar een geprezen positie (op de Dag des Oordeels) verheffen."'
    },
    hadith: {
      tekst: '"...het teken daarvan is dat op die dag de zon helder opkomt zonder stralen."',
      bron: 'Sahih Muslim'
    },
    dua: {
      arabisch: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',
      transliteratie: "Allāhumma innaka ʿafuwwun tuḥibbu l-ʿafwa fa-ʿfu ʿannī",
      betekenis: '"O Allah, U bent de Vergevende, U houdt van vergeven, vergeef mij."',
      bron: 'Tirmidzī'
    },
    dzikr: {
      arabisch: 'سُبْحَانَ اللَّهِ وَالْحَمْدُ لِلَّهِ وَلَا إِلَهَ إِلَّا اللَّهُ وَاللَّهُ أَكْبَرُ',
      transliteratie: "Subḥānallāhi wal-ḥamdulillāhi wa-lā ilāha illallāhu wallāhu akbar",
      betekenis: '"Glorie zij Allah, en alle lof zij Allah, en er is geen god dan Allah, en Allah is de Grootste."',
      bron: 'Sahih Muslim'
    }
  },
  {
    nacht: 26,
    oneven: false,
    thema: 'Dankbaarheid',
    vers: {
      arabisch: 'وَإِذْ تَأَذَّنَ رَبُّكُمْ لَئِن شَكَرْتُمْ لَأَزِيدَنَّكُمْ',
      referentie: 'Ibrahim 14:7',
      vertaling: '"En (gedenk) toen jullie Heer aankondigde: Als jullie dankbaar zijn, zal Ik jullie zeker meer geven."'
    },
    hadith: {
      tekst: '"Wie niet dankbaar is voor het weinige, zal ook niet dankbaar zijn voor het vele. En wie niet dankbaar is jegens mensen, is niet dankbaar jegens Allah."',
      bron: 'Ahmad'
    },
    dua: {
      arabisch: 'اللَّهُمَّ أَعِنِّي عَلَى ذِكْرِكَ وَشُكْرِكَ وَحُسْنِ عِبَادَتِكَ',
      transliteratie: "Allāhumma aʿinnī ʿalā dzikrika wa-shukrika wa-ḥusni ʿibādatik",
      betekenis: '"O Allah, help mij U te gedenken, U dankbaar te zijn en U te aanbidden op de beste wijze."',
      bron: 'Abu Dawud & Nasaʾi'
    },
    dzikr: {
      arabisch: 'الْحَمْدُ لِلَّهِ عَلَى كُلِّ حَالٍ',
      transliteratie: "Alḥamdulillāhi ʿalā kulli ḥāl",
      betekenis: '"Alle lof zij Allah in elke omstandigheid."',
      bron: 'Ibn Majah'
    }
  },
  {
    nacht: 27,
    oneven: true,
    thema: 'De Meest Gezegende Nacht',
    vers: {
      arabisch: 'إِنَّا أَنزَلْنَاهُ فِي لَيْلَةِ الْقَدْرِ ۝ وَمَا أَدْرَاكَ مَا لَيْلَةُ الْقَدْرِ ۝ لَيْلَةُ الْقَدْرِ خَيْرٌ مِّنْ أَلْفِ شَهْرٍ ۝ تَنَزَّلُ الْمَلَائِكَةُ وَالرُّوحُ فِيهَا بِإِذْنِ رَبِّهِم مِّن كُلِّ أَمْرٍ ۝ سَلَامٌ هِيَ حَتَّى مَطْلَعِ الْفَجْرِ',
      referentie: 'Al-Qadr 97:1-5',
      vertaling: '"Wij hebben hem [de Koran] neergezonden in de nacht van de beslissing. En wat laat jou weten wat de nacht van de beslissing is? De engelen en de geest [Djibriel] dalen daarin neer met de toestemming van hun Heer voor elke beschikking. De engelen en de Geest dalen daarin neer met toestemming van hun Heer voor iedere aangelegenheid. Vrede is zij tot aan de aanbrekende dageraad."'
    },
    hadith: {
      tekst: '"Wanneer de laatste tien nachten (van de Ramadan) aanbraken, maakte de Profeet ﷺ zijn nachten levendig (met aanbidding), wekte hij zijn gezin en maakte hij zijn lendendoek vast."',
      bron: 'Sahih al-Bukhari & Sahih Muslim'
    },
    dua: {
      arabisch: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',
      transliteratie: "Allāhumma innaka ‘afuwwun tuḥibbul ‘afwa fa‘fu ‘annī",
      betekenis: '"O Allah, U bent de Vergevende, U houdt van vergeven, vergeef mij."',
      bron: 'Tirmidzī'
    },
    dzikr: {
      arabisch: 'لَا إِلَهَ إِلَّا أَنتَ سُبْحَانَكَ إِنِّي كُنتُ مِنَ الظَّالِمِينَ',
      transliteratie: "Lā ilāha illā anta subḥānaka innī kuntu minaẓ-ẓālimīn",
      betekenis: '"Er is geen god dan U, geprezen zij U, voorwaar ik behoorde tot de onrechtplegers."',
      bron: 'Al-Anbiya 21:87 | Tirmidzī'
    }
  },
  {
    nacht: 28,
    oneven: false,
    thema: 'De Koran als Leidraad',
    vers: {
      arabisch: 'شَهْرُ رَمَضَانَ الَّذِي أُنزِلَ فِيهِ الْقُرْآنُ هُدًى لِّلنَّاسِ وَبَيِّنَاتٍ مِّنَ الْهُدَى وَالْفُرْقَانِ',
      referentie: 'Al-Baqarah 2:185',
      vertaling: 'De maand Ramadan is het waarin de Koran is neergezonden als een leidraad voor de mensen en als duidelijke bewijzen van de leidraad en van het onderscheid. Wie van jullie dan die maand aanwezig is, die moet daarin vasten, maar wie ziek is of op reis, dan een aantal andere dagen. Allah wenst voor jullie het gemakkelijke en Hij wenst voor jullie niet het moeilijke. (Hij wenst) dat jullie het aantal dagen volmaken en dat jullie Allah prijzen om Zijn grootheid, omdat Hij jullie de weg gewezen heeft. Misschien zullen jullie dank betuigen.'
    },
    hadith: {
      tekst: '"Jibrīl ontmoette hem (De Boodschapper van Allah ﷺ) elke nacht in Ramaḍān, en zij bestudeerden samen de Koran."',
      bron: 'Sahih Bukhari & Sahih Muslim'
    },
    dua: {
      arabisch: 'رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ',
      transliteratie: "Rabbanā ātinā fī ad-dunyā ḥasanatan wa fī al-ākhirati ḥasanatan wa qinā ʿadhāba an-nār",
      betekenis: '"Onze Heer, geef ons in deze wereld het goede en in het Hiernamaals het goede, en bescherm ons tegen de bestraffing van het Vuur."',
      bron: 'Al-Baqarah 2:201'
    },
    dzikr: {
      arabisch: 'حَسْبُنَا اللَّهُ وَنِعْمَ الْوَكِيلُ',
      transliteratie: "Ḥasbunā Allāhu wa niʿma al-wakīl",
      betekenis: '"Allah is genoeg voor ons, en Hij is de beste Behoeder."',
      bron: 'Al-Imran 3:173 | Sahih Bukhari'
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
      bron: 'Sahih Bukhari'
    },
    dua: {
      arabisch: 'اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي',
      transliteratie: "Allāhumma innaka ‘afuwwun tuḥibbul ‘afwa fa‘fu ‘annī",
      betekenis: '"O Allah, U bent de Vergevende, U houdt van vergeven, vergeef mij."',
      bron: 'Tirmidzī'
    },
    dzikr: {
      arabisch: 'أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ',
      transliteratie: "Astaghfirullāha wa atūbu ilayh",
      betekenis: '"Ik vraag Allah om vergeving en ik keer mij in berouw tot Hem."',
      bron: 'Sahih Bukhari & Sahih Muslim'
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
      betekenis: '"Onze Heer, reken het ons niet aan als wij vergeten of fouten maken. Onze Heer, leg ons geen last op zoals U die aan hen die er vóór ons waren hebt opgelegd."',
      bron: 'Al-Baqarah 2:286'
    },
    dzikr: {
      arabisch: 'سُبْحَانَ الْمَلِكِ الْقُدُّوسِ',
      transliteratie: "Subḥānal-Malikil-Quddūs",
      betekenis: '"Glorie zij de Koning (Heerser), de Heilige."',
      bron: 'Nasāʾī & Abu Dawud'
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
  nacht21Start.setHours(18, 0, 0, 0); // kaart zichtbaar vanaf 18:00 (na Maghrib)
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
  document.getElementById('qadr-badge').hidden = false;

  document.getElementById('vers-arabisch').textContent = nacht.vers.arabisch;
  document.getElementById('vers-referentie').textContent = nacht.vers.referentie;
  document.getElementById('vers-vertaling').textContent = nacht.vers.vertaling;

  document.getElementById('hadith-tekst').textContent = nacht.hadith.tekst;
  document.getElementById('hadith-bron').textContent = `— ${nacht.hadith.bron}`;

  document.getElementById('dua-arabisch').textContent = nacht.dua.arabisch;
  document.getElementById('dua-transliteratie').textContent = nacht.dua.transliteratie;
  document.getElementById('dua-betekenis').textContent = nacht.dua.betekenis;
  document.getElementById('dua-bron').textContent = `— ${nacht.dua.bron}`;

  document.getElementById('dzikr-arabisch').textContent = nacht.dzikr.arabisch;
  document.getElementById('dzikr-transliteratie').textContent = nacht.dzikr.transliteratie;
  document.getElementById('dzikr-betekenis').textContent = nacht.dzikr.betekenis;
  document.getElementById('dzikr-bron').textContent = `— ${nacht.dzikr.bron}`;

  document.getElementById('kaart').hidden = false;
  document.getElementById('deel-knoppen').hidden = false;

  updateNavButtons(index, getNachtStatus());
  trackEvent('nacht-bekeken', { nacht: nacht.nacht });
}

// ─── WhatsApp delen ────────────────────────────────────────────────────────────

let huidigIndex = 0;

document.getElementById('btn-whatsapp').addEventListener('click', () => {
  const nacht = NACHTEN[huidigIndex];
  const tekst =
    `🌙 *Nacht ${nacht.nacht} — ${nacht.thema}*\n\n` +
    `📖 *Koran (${nacht.vers.referentie})*\n` +
    `${nacht.vers.arabisch}\n` +
    `_${nacht.vers.vertaling}_\n\n` +
    `📜 *Hadith*\n${nacht.hadith.tekst}\n— ${nacht.hadith.bron}\n\n` +
    `🤲 *Duāʾ*\n${nacht.dua.arabisch}\n${nacht.dua.transliteratie}\n_${nacht.dua.betekenis}_\n— ${nacht.dua.bron}\n\n` +
    `📿 *Dzikr / Istighfār*\n${nacht.dzikr.arabisch}\n${nacht.dzikr.transliteratie}\n_${nacht.dzikr.betekenis}_\n— ${nacht.dzikr.bron}\n\n` +
    `🕌 _Via Het Rechte Pad College Leerportaal_`;

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
    await document.fonts.load('400 40px AlQalamQuranMajeed');
    await document.fonts.load('400 40px Amiri');
    const dataUrl = await tekenKaartCanvas(nacht);
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

async function tekenKaartCanvas(nacht) {
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
    ctx.fillText('✦ Mogelijk Laylatul Qadr ✦', W / 2, headerY + 29);
    headerY += 60;
  }

  // — Nachtnummer
  ctx.fillStyle = GOUD;
  ctx.font = `bold 78px "Cinzel Decorative", "Cinzel", serif`;
  ctx.textAlign = 'center';
  ctx.fillText(`Nacht ${nacht.nacht}`, W / 2, headerY + 75);
  headerY += 120;

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
  y = tekenSectieLabel(ctx, '📖  Koran', y, PAD, GOUD);
  y += 16;
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

  // — Duāʾ sectie
  y = tekenSectieLabel(ctx, "🤲🏽  Duāʾ", y, PAD, GOUD);
  y += 16;
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

  // — Dzikr sectie
  y = tekenSectieLabel(ctx, '📿  Dzikr / Istighfār', y, PAD, GOUD);
  y += 16;
  y = tekenArabischTekst(ctx, nacht.dzikr.arabisch, y, W, PAD, BREED);
  y += 6;
  y = tekenWrapTekst(ctx, nacht.dzikr.transliteratie, y, PAD, MUTED, `italic 25px "Noto Sans", sans-serif`, BREED, 38);
  y += 4;
  y = tekenWrapTekst(ctx, nacht.dzikr.betekenis, y, PAD, CREAM, `400 26px "Noto Sans", sans-serif`, BREED, 40);
  y += 4;
  y = tekenBron(ctx, `— ${nacht.dzikr.bron}`, y, PAD, BRON);

  // — Footer
  const footerY = H - 56;
  ctx.strokeStyle = `rgba(200,169,110,0.2)`;
  ctx.lineWidth = 1;
  ctx.beginPath(); ctx.moveTo(PAD, footerY - 20); ctx.lineTo(W - PAD, footerY - 20); ctx.stroke();

  const logo = await new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = 'images/HRPC-logo-white.png';
  });
  const logoH = 120;
  const logoW = logo.naturalWidth * (logoH / logo.naturalHeight);
  ctx.globalAlpha = 0.9;
  ctx.drawImage(logo, W / 2 - logoW / 2, footerY - logoH, logoW, logoH);
  ctx.globalAlpha = 1;

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
  ctx.font = '400 38px AlQalamQuranMajeed, Amiri, serif';
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

// ─── Nacht-navigatie ───────────────────────────────────────────────────────────

function updateNavButtons(index, maxIndex) {
  const nav = document.getElementById('nacht-nav');
  const btnVorige = document.getElementById('btn-vorige-nacht');
  const btnVolgende = document.getElementById('btn-volgende-nacht');

  const heeftVorige = index > 0;
  const heeftVolgende = index < maxIndex;

  btnVorige.hidden = !heeftVorige;
  btnVolgende.hidden = !heeftVolgende;
  nav.hidden = !heeftVorige && !heeftVolgende;

  if (heeftVorige) btnVorige.textContent = `← Nacht ${NACHTEN[index - 1].nacht}`;
  if (heeftVolgende) btnVolgende.textContent = `Nacht ${NACHTEN[index + 1].nacht} →`;
}

document.getElementById('btn-vorige-nacht').addEventListener('click', () => {
  if (huidigIndex > 0) {
    huidigIndex -= 1;
    renderKaart(huidigIndex);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

document.getElementById('btn-volgende-nacht').addEventListener('click', () => {
  if (huidigIndex < getNachtStatus()) {
    huidigIndex += 1;
    renderKaart(huidigIndex);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
});

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
