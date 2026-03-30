/**
 * Innerlijke dimensie-module data
 * Bronnen: Iḥyāʾ ʿUlūm al-Dīn (Imām al-Ghazālī), Kimiyā-yi Saʿādat (al-Ghazālī),
 *          Maktūbāt-e-Imām Rabbānī (Shaykh Aḥmad Sirhindī), BSI N1
 * Pad: Taṣawwuf (klassieke soefistische traditie binnen Ahl-us-Sunnah)
 */

export interface DimensieThema {
  id: string
  icon: string
  titel: string
  arabisch?: string
  inleiding: string
  punten: string[]
  citaat?: {
    tekst: string
    bron: string
  }
  bron?: string
}

export const dimensieThemas: DimensieThema[] = [
  {
    id: 'khushu',
    icon: '💚',
    titel: 'Khushūʿ — aanwezigheid van het hart',
    arabisch: 'الخشوع',
    inleiding:
      'Khushūʿ is de aanwezigheid en overgave van het hart tijdens de ṣalāt — de stille taal van het hart tegenover Allah. Het is de ziel van het gebed: zonder khushūʿ zijn de bewegingen aanwezig, maar is de essentie afwezig.',
    punten: [
      'Khushūʿ betekent dat het hart aanwezig is bij elk woord en elke handeling van de ṣalāt.',
      'Allah zegt in de Koran: "Zeker, de gelovigen zijn succesvol — zij die in hun gebed nederig zijn." (23:1-2)',
      'Imām al-Ghazālī onderscheidt zes innerlijke stadia van het gebed: aanwezigheid van het hart (ḥuḍūr al-qalb), begrip (tafahhum), eerbied (taʿẓīm), vrees (hayba), hoop (rajāʾ) en schaamte (ḥayāʾ).',
      'Het beginpunt is de intentie (niyyah): breng je hart aanwezig vóórdat je de takbīr uitspreekt.',
      'Kijk naar de plek van de sujūd tijdens het staan — dit helpt de blik en aandacht te richten.',
      'Verstaan wat je reciteert verdiept khushūʿ enorm — leer de betekenis van soera al-Fātiḥa en de kortere soeras die je reciteert.',
    ],
    citaat: {
      tekst:
        '"Het gebed zonder aanwezigheid van het hart is als een lichaam zonder ziel — het ziet eruit als een levend wezen, maar het is geen levend wezen."',
      bron: 'Iḥyāʾ ʿUlūm al-Dīn, Imām al-Ghazālī',
    },
    bron: 'Iḥyāʾ ʿUlūm al-Dīn (Imām al-Ghazālī), hoofdstuk over de esoterica van het gebed',
  },
  {
    id: 'niyyah-qalb',
    icon: '🌱',
    titel: 'De intentie als poort',
    arabisch: 'النية',
    inleiding:
      'De niyyah (intentie) is niet slechts een juridische voorwaarde — het is de poort waarmee je van de wereld naar de aanwezigheid van Allah overgaat. Elke ṣalāt begint met een bewuste overgang.',
    punten: [
      'Niyyah is het besluit van het hart, niet slechts woorden op de tong.',
      'Voor de openingstakbīr: laat de gedachten aan de wereld gaan. De tekbīr — "Allāhu Akbar" (Allah is groter) — bevestigt dat Allah groter is dan alles wat je achterlaat.',
      'Imām al-Ghazālī beschrijft de voorbereidingsfase: reinig je hart van gehechtheid aan bezittingen, status en mensen vóórdat je de ṣalāt betreedt.',
      'De kwaliteit van de niyyah bepaalt de waarde van het gebed. Twee mensen verrichten uiterlijk hetzelfde gebed — de innerlijke waarde kan oneindig verschillen.',
      'Herhaal dit bij elke ṣalāt bewust: "Ik treed nu de aanwezigheid van Allah binnen."',
    ],
    citaat: {
      tekst:
        '"Handelingen worden beoordeeld naar hun intenties, en voor iedereen is wat hij heeft bedoeld."',
      bron: 'Ṣaḥīḥ al-Bukhārī & Muslim, overgeleverd door ʿUmar ibn al-Khaṭṭāb',
    },
    bron: 'Iḥyāʾ ʿUlūm al-Dīn',
  },
  {
    id: 'fatiha',
    icon: '📖',
    titel: 'Soera al-Fātiḥa — een dialoog met Allah',
    arabisch: 'الفاتحة',
    inleiding:
      'Soera al-Fātiḥa is geen eenrichtingsrecitatie — het is een dialoog. Allah zegt in een ḥadīth qudsī: "Ik heb het gebed verdeeld tussen Mijzelf en Mijn dienaar in twee helften."',
    punten: [
      'Ḥadīth qudsī (Ṣaḥīḥ Muslim): "Wanneer de dienaar zegt \'Al-ḥamdu lillāhi rabb il-ʿālamīn\', zegt Allah: \'Mijn dienaar heeft Mij geprezen.\' Wanneer hij zegt \'Ar-raḥmānir raḥīm\', zegt Allah: \'Mijn dienaar heeft Mij geëerd.\'..."',
      'Al-Fātiḥa bevat drie secties: lofprijzing van Allah (verzen 1-4), aanbidding en smeekbede (vers 5), en het verzoek om leiding (verzen 6-7).',
      '"Iyyāka naʿbudu wa iyyāka nastaʿīn" — "U alleen aanbidden wij en U alleen vragen wij om hulp." Dit vers is het hart van de soera: volledige overgave én totale afhankelijkheid.',
      'Reciteren met begrip verdiept het gebed immens. Leer de woordelijke betekenis van elk vers.',
      'De Profeet ﷺ noemde soera al-Fātiḥa "Umm al-Qurʾān" — de Moeder van de Koran — vanwege haar omvattende betekenis.',
    ],
    citaat: {
      tekst:
        '"Ik heb het gebed verdeeld tussen Mijzelf en Mijn dienaar in twee gelijke helften, en voor Mijn dienaar is wat hij vraagt."',
      bron: 'Ḥadīth qudsī, Ṣaḥīḥ Muslim 395',
    },
    bron: 'Ṣaḥīḥ Muslim, Iḥyāʾ ʿUlūm al-Dīn',
  },
  {
    id: 'sujud',
    icon: '🤲',
    titel: 'De grondbuiging (Sujūd) — het hoogtepunt',
    arabisch: 'السجود',
    inleiding:
      'De sujūd is het meest verheven moment van de ṣalāt. De Profeet ﷺ zei: "De slaaf is het dichtst bij zijn Heer wanneer hij in sujūd is — vermeerder dan je smeekbede."',
    punten: [
      'In de sujūd is het hoofd — het meest geëerde deel van het lichaam — op de grond, op hetzelfde niveau als de voeten. Dit is de ultieme uitdrukking van tawāḍuʿ (nederigheid).',
      'De Profeet ﷺ zei: "De dienaar is het dichtst bij Allah wanneer hij in sujūd is." (Ṣaḥīḥ Muslim 482)',
      'Neem de tijd in de sujūd — het is de plek voor duʿā. Smeek Allah in je eigen taal als je dat wenst, ná de verplichte tasbīḥ.',
      'Imām al-Ghazālī schrijft: visualiseer in de sujūd de Dag des Oordeels — hoe alle schepselen neerbúigen voor Allah. Jij doet dit nu vrijwillig.',
      'De sujūd is het symbool van de totale istiḥlāk (opgaan in Allah) — het doel van het spirituele pad.',
    ],
    citaat: {
      tekst:
        '"De dichtstbijzijnde toestand van de dienaar ten opzichte van zijn Heer is wanneer hij in sujūd is. Vermeerder dan je smeekbede."',
      bron: 'Ṣaḥīḥ Muslim 482, overgeleverd door Abū Hurayrah',
    },
    bron: 'Ṣaḥīḥ Muslim, Iḥyāʾ ʿUlūm al-Dīn',
  },
  {
    id: 'muraqaba',
    icon: '👁️',
    titel: 'Murāqabah — bewustzijn van Allah\'s aanwezigheid',
    arabisch: 'المراقبة',
    inleiding:
      'Murāqabah is het bewustzijn dat Allah jou ziet en kent. De Profeet ﷺ omschreef iḥsān als: "Allah aanbidden alsof je Hem ziet; en als je Hem niet ziet, weet dan dat Hij jou ziet."',
    punten: [
      'Iḥsān (het goede doen in de hoogste mate) is de top van de dīn — het is de basis van khushūʿ.',
      'Praktijk: zeg vóór de openingstakbīr innerlijk: "Allah ziet mij nu." Laat dit besef je houding, je snelheid en je aandacht beïnvloeden.',
      'Imām al-Ghazālī beschrijft het als ḥayāʾ (schaamte voor Allah) — wanneer je werkelijk voelt dat Allah je gedachten en innerlijke toestand kent, verlaat de onachtzaamheid vanzelf.',
      'Shaykh Aḥmad Sirhindī (Mujaddid Alf-e-Thānī) schreef: murāqabah in de ṣalāt is de kortste weg naar qurb (nabijheid tot Allah).',
      'De ṣalāt is vijf keer per dag een herinnering: het leven is korter dan je denkt, en Allah is altijd aanwezig.',
    ],
    citaat: {
      tekst:
        '"Iḥsān is: Allah aanbidden alsof je Hem ziet. Als je Hem niet ziet — weet dan zeker dat Hij jou ziet."',
      bron: 'Ṣaḥīḥ Muslim 8, Jibrīl-ḥadīth',
    },
    bron: 'Ṣaḥīḥ Muslim, Maktūbāt-e-Imām Rabbānī',
  },
  {
    id: 'praktisch',
    icon: '🛠️',
    titel: 'Praktische tips voor khushūʿ',
    inleiding:
      'Khushūʿ is een vaardigheid die groeit met oefening en oprechte inspanning. Hier zijn concrete stappen om de kwaliteit van je gebed stap voor stap te verbeteren.',
    punten: [
      'Bereid je voor: maak wuḍūʾ rustig en bewust. Zie het als de voorbereiding op een ontmoeting.',
      'Bid op tijd — niet op het laatste moment. Haast is de vijand van khushūʿ.',
      'Zoek een rustige plek zonder afleidingen. Zet je telefoon op stil.',
      'Bid langzaam. De meeste mensen bidden te snel. Gun jezelf de tijd voor elke positie.',
      'Leer de betekenis van wat je reciteert: soera al-Fātiḥa, al-Ikhlāṣ, Tashahhud, Durūd Ibrāhīm.',
      'Na het gebed: blijf even zitten. Verbreek de verbinding niet direct. Reciteer tasbīḥ (33× Subḥānallāh, 33× Alḥamdulillāh, 33× Allāhu Akbar) met aandacht.',
      'Wees geduldig: khushūʿ groeit door de jaren heen. Iedere ṣalāt is een kans, geen examen.',
    ],
    bron: 'Iḥyāʾ ʿUlūm al-Dīn, Imām al-Ghazālī — Boek van het gebed',
  },
]
