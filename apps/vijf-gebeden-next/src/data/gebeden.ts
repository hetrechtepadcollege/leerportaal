import type { Gebed } from '@/types'

export const gebeden: Gebed[] = [
  {
    id: 'fajr',
    naam: 'Fajr',
    arabisch: 'الفجر',
    betekenis: 'Het ochtendgebed',
    emoji: '🌙',
    tijd:
      'Van de ochtendschemering (al-ṣubḥ al-ṣādiq) tot zonsopgang. Aanbevolen: wacht tot het licht buiten flink is uitgezaaid.',
    rakatItems: [
      { label: 'Soenna voor', type: 'soenna-mua', aantal: 2 },
      { label: 'Farḍ', type: 'fard', aantal: 2 },
    ],
    belang:
      'Fajr bidt men voor zonsopgang. De Profeet ﷺ zei: "Wie Fajr bidt, staat onder de bescherming van Allah."',
    bijzonder:
      'In de adzān van Fajr wordt toegevoegd: "Aṣ ṣalātu gayrum minan Nawm" — Het gebed is beter dan slapen. Op deze extra zin antwoord je: "Ṣadaqta wa bararta wa bil ḥaqqi nataqṭa" — U spreekt de waarheid.',
  },
  {
    id: 'dhuhr',
    naam: 'Ẓuhr',
    arabisch: 'الظهر',
    betekenis: 'Het middaggebed',
    emoji: '☀️',
    tijd:
      'Na het zenit van de zon (zawāl) tot wanneer de schaduw tweemaal de lengte van het object bereikt (exclusief de eigen schaduw bij zawāl).',
    rakatItems: [
      { label: 'Soenna voor', type: 'soenna-mua', aantal: 4 },
      { label: 'Farḍ', type: 'fard', aantal: 4 },
      { label: 'Soenna na', type: 'soenna-mua', aantal: 2 },
      { label: 'Nafl', type: 'nafl', aantal: 2 },
    ],
    belang:
      'Ẓuhr is een moment van bezinning midden in de dag. Het herinnert ons aan Allah temidden van onze bezigheden.',
    bijzonder: null,
  },
  {
    id: 'asr',
    naam: 'ʿAṣr',
    arabisch: 'العصر',
    betekenis: 'Het namiddaggebed',
    emoji: '🌤️',
    tijd:
      'Vanaf het einde van het Ẓuhr-gebed tot zonsondergang. Aanbevolen: iets later verrichten, maar niet uitstellen tot de zon geel kleurt.',
    rakatItems: [
      { label: 'Soenna voor', type: 'soenna-ghayr', aantal: 4 },
      { label: 'Farḍ', type: 'fard', aantal: 4 },
    ],
    belang:
      'Allah noemt ʿAṣr in de Koran speciaal het "middelste gebed" (2:238). De engelen wisselen elkaar af bij ʿAṣr.',
    bijzonder:
      'ʿAṣr is het gebed dat men het snelst vergeet vanwege het drukke middagprogramma. Wees alert!',
  },
  {
    id: 'maghrib',
    naam: 'Maghrib',
    arabisch: 'المغرب',
    betekenis: 'Het avondgebed',
    emoji: '🌇',
    tijd:
      'Direct na zonsondergang tot het einde van de avondschemering. Aanbevolen: direct verrichten; uitstel is ongewenst.',
    rakatItems: [
      { label: 'Farḍ', type: 'fard', aantal: 3 },
      { label: 'Soenna na', type: 'soenna-mua', aantal: 2 },
      { label: 'Nafl', type: 'nafl', aantal: 2 },
    ],
    belang:
      'Maghrib markeert het einde van de dag. In Ramadan wordt bij Maghrib het vasten verbroken (iftar).',
    bijzonder: null,
  },
  {
    id: 'isha',
    naam: 'ʿIshā',
    arabisch: 'العشاء',
    betekenis: 'Het nachtgebed',
    emoji: '🌃',
    tijd:
      'Na de astronomische avondschemering tot het aanbreken van de ochtendschemering. Aanbevolen: een derde van de nacht; uiterlijk tot de ware middernacht.',
    rakatItems: [
      { label: 'Soenna voor', type: 'soenna-ghayr', aantal: 4 },
      { label: 'Farḍ', type: 'fard', aantal: 4 },
      { label: 'Soenna na', type: 'soenna-mua', aantal: 2 },
      { label: 'Nafl', type: 'nafl', aantal: 2 },
    ],
    belang:
      'ʿIshā is het laatste gebed van de dag. Na ʿIshā wordt de Witr-ṣalāt gebeden, die de dag afsluit. Het is aanbevolen om ʿIshā uit te stellen tot een derde deel van de nacht.',
    bijzonder: null,
  },
  {
    id: 'witr',
    naam: 'Witr',
    arabisch: 'الوتر',
    betekenis: 'Het oneven gebed',
    emoji: '⭐',
    tijd:
      'Na het ʿIshā-gebed, bij voorkeur vlak voor het slapengaan. Eindigt bij het aanbreken van de ochtendschemering.',
    rakatItems: [
      { label: 'Wājib', type: 'wajib', aantal: 3 },
      { label: 'Nafl', type: 'nafl', aantal: 2 },
    ],
    belang:
      'De Witr is wājib (essentieel) — de Profeet ﷺ liet hem nooit achterwege, ook niet op reis. Het opzettelijk achterwege laten is een ernstige fout.',
    bijzonder:
      'In de derde rakaʿat wordt na de recitatie van soera al-Fātiḥa en een soera de Duʿā al-Qunūt gereciteerd. "Witr" betekent letterlijk oneven — als symbool voor de eenheid (waḥdāniyyah) van Allah.',
  },
]
