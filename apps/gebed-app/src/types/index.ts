// ─── Rakat / Prayer units ────────────────────────────────────────────────────

export type RakatType =
  | 'fard'
  | 'soenna-mua'
  | 'soenna-ghayr'
  | 'wajib'
  | 'nafl'

export interface RakatItem {
  label: string
  type: RakatType
  aantal: number
}

// ─── Gebed (Prayer) ───────────────────────────────────────────────────────────

export type GebedId = 'fajr' | 'dhuhr' | 'asr' | 'maghrib' | 'isha' | 'witr'

export interface Gebed {
  id: GebedId
  naam: string
  arabisch: string
  betekenis: string
  emoji: string
  tijd: string
  rakatItems: RakatItem[]
  belang: string
  bijzonder: string | null
}

// ─── Quiz ─────────────────────────────────────────────────────────────────────

export interface QuizVraag {
  vraag: string
  opties: string[]
  /** Zero-based index of the correct option */
  correct: number
}

export type QuizStatus = 'idle' | 'correct' | 'wrong'

export interface QuizState {
  vraagIndex: number
  beantwoord: boolean
  gekozenIndex: number | null
}

// ─── Weetje ───────────────────────────────────────────────────────────────────

export interface Weetje {
  icon: string
  titel: string
  tekst: string
}

// ─── Module registry (for future expansion) ──────────────────────────────────

export type ModuleId =
  | 'gebeden'       // vijf dagelijkse gebeden (current)
  | 'fiqh'          // fiqh regels & beslisboom
  | 'situaties'     // speciale situaties (reizen, ziekte, …)
  | 'dimensie'      // innerlijke dimensie / khushūʿ
  | 'zoek'          // zoekmodule

export interface Module {
  id: ModuleId
  label: string
  beschrijving: string
  beschikbaar: boolean
}
