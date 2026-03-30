/**
 * Fiqh-module data — volledig gebaseerd op BSI N1 (Het Rechte Pad College)
 * Bronnen: Anwāre Sharīʿat (Mufti Jalaluddin Ahmad Amjadi),
 *          Durr al-Mukhtār, Bahāre Sharīʿat, Fatāwā ʿĀlamgīrī
 * Madhab: Ḥanafī
 */

export type FiqhCategorie =
  | 'voorwaarden'
  | 'fard'
  | 'wajib'
  | 'soenna'
  | 'ongeldig'
  | 'makruh'
  | 'sahw'
  | 'qada'

export interface FiqhItem {
  id: string
  categorie: FiqhCategorie
  titel: string
  omschrijving: string
  bron?: string
  nota?: string
}

export interface FiqhCategorieMeta {
  id: FiqhCategorie
  label: string
  emoji: string
  kleur: string
  borderKleur: string
  bgKleur: string
  uitleg: string
}

// ─── Categorieën ─────────────────────────────────────────────────────────────

export const fiqhCategorieën: FiqhCategorieMeta[] = [
  {
    id: 'voorwaarden',
    label: 'Voorwaarden (Shurūṭ)',
    emoji: '📋',
    kleur: '#1a3a8a',
    borderKleur: 'border-[#1a3a8a]',
    bgKleur: 'bg-[rgba(26,58,138,0.07)]',
    uitleg:
      'De zes voorwaarden moeten vóór het begin van de ṣalāt vervuld zijn. Zonder één van deze voorwaarden is de ṣalāt ongeldig.',
  },
  {
    id: 'fard',
    label: 'Verplichte handelingen (Farḍ)',
    emoji: '🟢',
    kleur: '#1a7a45',
    borderKleur: 'border-[#1a7a45]',
    bgKleur: 'bg-[rgba(26,122,69,0.07)]',
    uitleg:
      'De zes farḍ handelingen zijn de pijlers van de ṣalāt. Het weglaten van één ervan maakt de ṣalāt volledig ongeldig — ook niet te herstellen met een vergissingsbuiging.',
  },
  {
    id: 'wajib',
    label: 'Essentiële handelingen (Wājib)',
    emoji: '🟠',
    kleur: '#c96a00',
    borderKleur: 'border-[#c96a00]',
    bgKleur: 'bg-[rgba(201,106,0,0.07)]',
    uitleg:
      'Wājib handelingen zijn verplicht maar van een lager niveau dan farḍ. Het opzettelijk weglaten maakt de ṣalāt ongeldig. Per vergissing weglaten vereist een sujūd al-sahw (vergissingsbuiging).',
  },
  {
    id: 'soenna',
    label: 'Soenna handelingen',
    emoji: '🔵',
    kleur: '#1a3a8a',
    borderKleur: 'border-[#4f8fd4]',
    bgKleur: 'bg-[rgba(79,143,212,0.07)]',
    uitleg:
      'Soenna handelingen zijn de handelingen van de Profeet ﷺ die hij regelmatig verrichtte. Het weglaten ervan is afgekeurd maar maakt de ṣalāt niet ongeldig.',
  },
  {
    id: 'ongeldig',
    label: 'Wat de ṣalāt ongeldig maakt',
    emoji: '❌',
    kleur: '#b91c1c',
    borderKleur: 'border-[#b91c1c]',
    bgKleur: 'bg-[rgba(185,28,28,0.07)]',
    uitleg:
      'Deze handelingen of omstandigheden breken de ṣalāt. De ṣalāt moet dan opnieuw worden begonnen.',
  },
  {
    id: 'makruh',
    label: 'Afgekeurde handelingen (Makrūh)',
    emoji: '⚠️',
    kleur: '#b89000',
    borderKleur: 'border-[#b89000]',
    bgKleur: 'bg-[rgba(184,144,0,0.07)]',
    uitleg:
      'Makrūh handelingen verminderen de beloning van de ṣalāt. Makrūh taḥrīmī (sterk afgekeurd) vereist herhaling van de ṣalāt; makrūh tanzīhī (licht afgekeurd) niet.',
  },
  {
    id: 'sahw',
    label: 'Vergissingsbuiging (Sujūd al-Sahw)',
    emoji: '🔄',
    kleur: '#5c6e8a',
    borderKleur: 'border-[#5c6e8a]',
    bgKleur: 'bg-[rgba(92,110,138,0.07)]',
    uitleg:
      'Als een wājib handeling per vergissing wordt weggelaten, kan de ṣalāt worden hersteld met de sujūd al-sahw: twee extra grondbuigingen aan het einde.',
  },
  {
    id: 'qada',
    label: 'Gemiste gebeden (Qaḍā)',
    emoji: '⏰',
    kleur: '#1f294d',
    borderKleur: 'border-[#1f294d]',
    bgKleur: 'bg-[rgba(31,41,77,0.07)]',
    uitleg:
      'Een gemist gebed moet zo snel mogelijk worden ingehaald (qaḍā). Alleen de farḍ en Witr-rakaʿāt hoeven te worden ingehaald — soenna en nafl vervallen.',
  },
]

// ─── Fiqh items ───────────────────────────────────────────────────────────────

export const fiqhItems: FiqhItem[] = [
  // ── Voorwaarden ─────────────────────────────────────────────────
  {
    id: 'v1',
    categorie: 'voorwaarden',
    titel: '1. Reinheid (Ṭahārah)',
    omschrijving:
      'Het lichaam, de kleding én de gebedsplaats moeten rein zijn van najasat (rituele onreinheid). Onreinheid ter grootte van een dirham of meer maakt de ṣalāt ongeldig.',
    bron: 'Fatāwā ʿĀlamgīrī',
  },
  {
    id: 'v2',
    categorie: 'voorwaarden',
    titel: '2. Bedekking van de privédelen (Sitr al-ʿAwrah)',
    omschrijving:
      'Man: van de navel tot en met onder de knieën (knieën inbegrepen). Vrouw: het gehele lichaam behalve gezicht, handpalmen en voeten tot de enkels. Een transparante sjaal die het haar zichtbaar laat maakt de ṣalāt van de vrouw ongeldig.',
    bron: 'Fatāwā ʿĀlamgīrī',
  },
  {
    id: 'v3',
    categorie: 'voorwaarden',
    titel: '3. Gebedsrichting (Istiqbāl al-Qiblah)',
    omschrijving:
      'Het gezicht moet gericht zijn naar de Kaʿbah. Bij twijfel over de richting: vraag het aan iemand, of volg je beste inschatting. Als achteraf blijkt dat de richting onjuist was, is de ṣalāt toch geldig.',
    bron: 'Durr al-Mukhtār, Bahāre Sharīʿat',
  },
  {
    id: 'v4',
    categorie: 'voorwaarden',
    titel: '4. Gebedstijd (Waqt)',
    omschrijving:
      'Elk gebed moet binnen het vastgestelde tijdvenster worden verricht. Een ṣalāt vóór de vastgestelde tijd bidden is ongeldig.',
    bron: 'Durr al-Mukhtār, Bahāre Sharīʿat',
  },
  {
    id: 'v5',
    categorie: 'voorwaarden',
    titel: '5. Intentie (Niyyah)',
    omschrijving:
      'De intentie is het vastberaden voornemen in het hart voor de te bidden ṣalāt. Uitspreken is aanbevolen maar niet verplicht — en mag in elke taal. Zeg: "Ik heb mij voorgenomen" (niet "Ik neem mij voor").',
    bron: 'Durr al-Mukhtār, Bahāre Sharīʿat',
  },
  {
    id: 'v6',
    categorie: 'voorwaarden',
    titel: '6. Openingstakbīr (Takbīr al-Taḥrīmah)',
    omschrijving:
      'Het uitspreken van "Allāhu Akbar" terwijl de handen worden opgeheven — voor mannen tot de oren, voor vrouwen tot de schouders. Dit is zowel de zesde voorwaarde als de eerste wājib handeling.',
    bron: 'Bahāre Sharīʿat',
  },

  // ── Farḍ handelingen ─────────────────────────────────────────────
  {
    id: 'f1',
    categorie: 'fard',
    titel: '1. Staan (Qiyām)',
    omschrijving:
      'De ṣalāt staand verrichten is verplicht. Zonder geldige reden zittend bidden maakt de ṣalāt ongeldig. Het nafl-gebed mag wel zittend worden verricht.',
    bron: 'Bahāre Sharīʿat',
  },
  {
    id: 'f2',
    categorie: 'fard',
    titel: '2. Koranrecitatie (Qirāʾat)',
    omschrijving:
      'In de eerste twee rakaʿāt van de farḍ, in alle rakaʿāt van Witr en soenna, en in alle rakaʿāt van het nafl-gebed moet de Koran worden gereciteerd. De minimale graad: jezelf kunnen horen.',
    bron: 'Bahāre Sharīʿat',
  },
  {
    id: 'f3',
    categorie: 'fard',
    titel: '3. Kniebuiging (Rukūʿ)',
    omschrijving:
      'Het vooroverbuigen tot de handen de knieën kunnen aanraken. De kniebuiging is per rakaʿah eenmaal farḍ.',
    bron: 'BSI N1',
  },
  {
    id: 'f4',
    categorie: 'fard',
    titel: '4. Grondbuiging (Sujūd)',
    omschrijving:
      'Het neerknielen met het voorhoofd op de grond. Per rakaʿah zijn twee grondbuigingen farḍ. Minimaal de onderkant van drie tenen moet de grond raken.',
    bron: 'BSI N1',
  },
  {
    id: 'f5',
    categorie: 'fard',
    titel: '5. Laatste zitting (Qaʿdah Ākhirah)',
    omschrijving:
      'De zitting aan het einde van de ṣalāt die lang genoeg duurt om de Tashahhud volledig te reciteren. Dit is de verplichte afsluiting van de ṣalāt.',
    bron: 'BSI N1',
  },
  {
    id: 'f6',
    categorie: 'fard',
    titel: '6. Afsluiting (Khurūj bi Ṣunʿihi)',
    omschrijving:
      'Het bewust beëindigen van de ṣalāt door een handeling die buiten de ṣalāt valt — zoals de salām (taslīm) of het spreken.',
    bron: 'BSI N1',
  },

  // ── Wājib handelingen (selectie) ─────────────────────────────────
  {
    id: 'w1',
    categorie: 'wajib',
    titel: 'Openingstakbīr met "Allāhu Akbar"',
    omschrijving:
      'De exacte woorden "Allāhu Akbar" uitspreken bij de openingstakbīr. Dit is zowel de zesde voorwaarde als de eerste wājib.',
    bron: 'BSI N1',
  },
  {
    id: 'w2',
    categorie: 'wajib',
    titel: 'Soera al-Fātiḥa reciteren',
    omschrijving:
      'In elke rakaʿah moet soera al-Fātiḥa worden gereciteerd, vóór de verdere Koranrecitatie, en slechts eenmaal per rakaʿah.',
    bron: 'BSI N1',
  },
  {
    id: 'w3',
    categorie: 'wajib',
    titel: 'Extra soera na al-Fātiḥa',
    omschrijving:
      'In de eerste twee rakaʿāt van farḍ en in alle rakaʿāt van Witr, soenna en nafl moet na al-Fātiḥa een soera of minstens drie korte verzen worden gereciteerd.',
    bron: 'BSI N1',
  },
  {
    id: 'w4',
    categorie: 'wajib',
    titel: 'Rechtop staan na rukūʿ (Qawmah)',
    omschrijving:
      'Na de kniebuiging volledig rechtop gaan staan voordat men overgaat tot de grondbuiging.',
    bron: 'BSI N1',
  },
  {
    id: 'w5',
    categorie: 'wajib',
    titel: 'Zitten tussen twee grondbuigingen (Jalsah)',
    omschrijving:
      'Tussen de twee grondbuigingen rechtop gaan zitten. Dit moment mag niet worden overgeslagen.',
    bron: 'BSI N1',
  },
  {
    id: 'w6',
    categorie: 'wajib',
    titel: 'Tashahhud in de eerste zitting (Qaʿdah Ūlā)',
    omschrijving:
      'In de eerste zitting (bij gebeden van 3 of 4 rakaʿāt) alleen de Tashahhud reciteren — niets anders.',
    bron: 'BSI N1',
  },
  {
    id: 'w7',
    categorie: 'wajib',
    titel: 'Duʿā al-Qunūt in Witr',
    omschrijving:
      'In de derde rakaʿah van de Witr-ṣalāt de Duʿā al-Qunūt reciteren na soera al-Fātiḥa en de extra soera, vóór de rukūʿ.',
    bron: 'BSI N1',
  },
  {
    id: 'w8',
    categorie: 'wajib',
    titel: 'Taslīm (salām) tweemaal uitspreken',
    omschrijving:
      'De ṣalāt afsluiten met tweemaal "as-Salāmu ʿalaykum wa raḥmatullāh" — rechts en links.',
    bron: 'BSI N1',
  },
  {
    id: 'w9',
    categorie: 'wajib',
    titel: 'Stil zijn achter de imam',
    omschrijving:
      'Wanneer de imam de Koran reciteert, moeten de gebedsvolgers zwijgen en luisteren. Zij herhalen de recitatie niet (ook soera al-Fātiḥa niet — Ḥanafī standpunt).',
    bron: 'BSI N1',
    nota: 'Dit is het bekende Ḥanafī standpunt, afwijkend van de Shāfiʿī school.',
  },

  // ── Soenna handelingen (selectie) ───────────────────────────────
  {
    id: 's1',
    categorie: 'soenna',
    titel: 'Handen opheffen bij de openingstakbīr',
    omschrijving:
      'Bij de openingstakbīr de handen opheffen: mannen tot de oren, vrouwen tot de schouders. Vingers in een natuurlijke, niet-gespreide houding.',
    bron: 'Durr al-Mukhtār, Bahāre Sharīʿat',
  },
  {
    id: 's2',
    categorie: 'soenna',
    titel: 'Armen binden na de takbīr',
    omschrijving:
      'Na de openingstakbīr de armen binden (rechterhand over linkerhand op de borst). Niet laten hangen.',
    bron: 'Durr al-Mukhtār, Bahāre Sharīʿat',
  },
  {
    id: 's3',
    categorie: 'soenna',
    titel: 'Thanā, Taʿawwudz, Tasmiyyah en Āmīn',
    omschrijving:
      'Na de openingstakbīr zacht de Thanā reciteren, daarna Taʿawwudz (aʿūdzu billāh), Tasmiyyah (bismillāh) en na al-Fātiḥa Āmīn — alles zacht.',
    bron: 'Durr al-Mukhtār, Bahāre Sharīʿat',
    nota: 'Āmīn zacht uitspreken is het Ḥanafī standpunt. Hardop zeggen is Shāfiʿī.',
  },
  {
    id: 's4',
    categorie: 'soenna',
    titel: 'Drie keer tasbīḥ in rukūʿ',
    omschrijving:
      'Tijdens de kniebuiging minstens drie keer "Subḥāna Rabbiyal ʿAẓīm" reciteren.',
    bron: 'Durr al-Mukhtār, Bahāre Sharīʿat',
  },
  {
    id: 's5',
    categorie: 'soenna',
    titel: 'Drie keer tasbīḥ in sujūd',
    omschrijving:
      'Tijdens elke grondbuiging minstens drie keer "Subḥāna Rabbiyal Aʿlā" reciteren.',
    bron: 'Durr al-Mukhtār, Bahāre Sharīʿat',
  },
  {
    id: 's6',
    categorie: 'soenna',
    titel: 'Volgorde in de grondbuiging',
    omschrijving:
      'Neergaan: eerst knieën, dan handen, dan neus, dan voorhoofd. Opstaan: eerst voorhoofd, dan neus, dan handen, dan knieën.',
    bron: 'Durr al-Mukhtār, Bahāre Sharīʿat',
  },
  {
    id: 's7',
    categorie: 'soenna',
    titel: 'Wijsvinger bij de Tashahhud',
    omschrijving:
      'Bij het uitspreken van de Shahādah in de Tashahhud de wijsvinger opheffen als teken van tawḥīd.',
    bron: 'Durr al-Mukhtār, Bahāre Sharīʿat',
  },

  // ── Wat de ṣalāt ongeldig maakt ────────────────────────────────
  {
    id: 'o1',
    categorie: 'ongeldig',
    titel: 'Spreken',
    omschrijving:
      'Bewust of per vergissing spreken tijdens de ṣalāt — ook al is het één woord — maakt de ṣalāt ongeldig.',
    bron: 'BSI N1',
  },
  {
    id: 'o2',
    categorie: 'ongeldig',
    titel: 'Eten of drinken',
    omschrijving:
      'Eten of drinken tijdens de ṣalāt maakt deze ongeldig, ook als het een heel klein beetje is.',
    bron: 'BSI N1',
  },
  {
    id: 'o3',
    categorie: 'ongeldig',
    titel: 'Rituele onreinheid (ḥadath)',
    omschrijving:
      'Als de wuḍūʾ (kleine reiniging) of ghusl (grote reiniging) wordt verbroken tijdens de ṣalāt, is de ṣalāt ongeldig.',
    bron: 'BSI N1',
  },
  {
    id: 'o4',
    categorie: 'ongeldig',
    titel: 'Wegdraaien van de qiblah',
    omschrijving:
      'Als de borst wegdraait van de richting van de qiblah zonder geldige reden, is de ṣalāt ongeldig.',
    bron: 'BSI N1',
  },
  {
    id: 'o5',
    categorie: 'ongeldig',
    titel: 'Lachen',
    omschrijving:
      'Hardop lachen (waarbij anderen het kunnen horen) maakt zowel de ṣalāt als de wuḍūʾ ongeldig.',
    bron: 'BSI N1',
  },
  {
    id: 'o6',
    categorie: 'ongeldig',
    titel: 'Opzettelijk weglaten van een farḍ',
    omschrijving:
      'Het opzettelijk weglaten van een van de zes farḍ handelingen maakt de ṣalāt ongeldig en kan niet worden hersteld met een vergissingsbuiging.',
    bron: 'BSI N1',
  },

  // ── Makrūh ──────────────────────────────────────────────────────
  {
    id: 'm1',
    categorie: 'makruh',
    titel: 'Onnodige bewegingen',
    omschrijving:
      'Onnodige bewegingen tijdens de ṣalāt, zoals friemelen aan de kleding, zijn makrūh tanzīhī (licht afgekeurd).',
    bron: 'BSI N1',
  },
  {
    id: 'm2',
    categorie: 'makruh',
    titel: 'Ogen sluiten',
    omschrijving:
      'Ogen sluiten zonder noodzaak tijdens de ṣalāt is makrūh tanzīhī. Men kijkt naar de plek van de sujūd.',
    bron: 'BSI N1',
  },
  {
    id: 'm3',
    categorie: 'makruh',
    titel: 'Naar de hemel kijken',
    omschrijving:
      'Omhoog kijken tijdens de ṣalāt is makrūh taḥrīmī (sterk afgekeurd).',
    bron: 'BSI N1',
  },
  {
    id: 'm4',
    categorie: 'makruh',
    titel: 'Bidden met onreinheid kleiner dan een dirham',
    omschrijving:
      'Als er onreinheid is kleiner dan een dirham, is bidden zonder reiniging makrūh taḥrīmī — herhaling van de ṣalāt is dan noodzakelijk.',
    bron: 'Bahāre Sharīʿat',
  },

  // ── Sujūd al-Sahw ────────────────────────────────────────────────
  {
    id: 'sh1',
    categorie: 'sahw',
    titel: 'Wanneer is de sujūd al-sahw verplicht?',
    omschrijving:
      'De sujūd al-sahw is wājib wanneer een wājib handeling per vergissing is weggelaten of verplaatst — zoals het vergeten van de eerste zitting (qaʿdah ūlā) of de Duʿā al-Qunūt.',
    bron: 'BSI N1',
  },
  {
    id: 'sh2',
    categorie: 'sahw',
    titel: 'Hoe wordt de sujūd al-sahw verricht?',
    omschrijving:
      'Na de Tashahhud in de laatste zitting: doe de taslīm naar rechts, verricht twee grondbuigingen, ga daarna opnieuw zitten, reciteer de Tashahhud en sluit af met de taslīm naar beide zijden.',
    bron: 'BSI N1',
  },
  {
    id: 'sh3',
    categorie: 'sahw',
    titel: 'Opzettelijke weglating helpt de sujūd al-sahw niet',
    omschrijving:
      'De sujūd al-sahw herstelt alleen vergissingen, niet opzettelijke weglatingen. Bij opzettelijk weglaten van een wājib moet de volledige ṣalāt opnieuw worden verricht.',
    bron: 'BSI N1',
  },

  // ── Qaḍā ─────────────────────────────────────────────────────────
  {
    id: 'q1',
    categorie: 'qada',
    titel: 'Wat moet worden ingehaald?',
    omschrijving:
      'Alleen de farḍ rakaʿāt en de Witr-ṣalāt (wājib) moeten worden ingehaald. Soenna en nafl rakaʿāt vervallen bij het missen en hoeven niet te worden ingehaald.',
    bron: 'BSI N1',
  },
  {
    id: 'q2',
    categorie: 'qada',
    titel: 'Hoeveel rakaʿāt per dag in te halen?',
    omschrijving:
      'Een volledige gemiste dag: 20 rakaʿāt — 2 (Fajr farḍ) + 4 (Ẓuhr farḍ) + 4 (ʿAṣr farḍ) + 3 (Maghrib farḍ) + 4 (ʿIshā farḍ) + 3 (Witr wājib).',
    bron: 'BSI N1',
  },
  {
    id: 'q3',
    categorie: 'qada',
    titel: 'Zo snel mogelijk inhalen',
    omschrijving:
      'Een gemist gebed moet zo spoedig mogelijk worden ingehaald. Uitstel zonder geldige reden is een zonde. Bij meer dan vijf gemiste gebeden vervalt de verplichting om de volgorde aan te houden.',
    bron: 'BSI N1',
  },
]
