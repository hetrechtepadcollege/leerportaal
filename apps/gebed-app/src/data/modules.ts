import type { Module } from '@/types'

export const modules: Module[] = [
  {
    id: 'gebeden',
    label: 'Gebeden',
    beschrijving: "De vijf dagelijkse gebeden: tijden, raka\u02bcat, betekenis en quiz",
    beschikbaar: true,
  },
  {
    id: 'fiqh',
    label: 'Fiqh',
    beschrijving: 'Voorwaarden, verplichte handelingen, wājib, soenna en meer',
    beschikbaar: true,
  },
  {
    id: 'situaties',
    label: 'Speciale situaties',
    beschrijving: 'Reizen, ziekte, menstruatie, gemeenschappelijk gebed',
    beschikbaar: true,
  },
  {
    id: 'dimensie',
    label: 'Innerlijke dimensie',
    beschrijving: 'Khushūʿ, murāqabah en de spirituele diepte van de ṣalāt',
    beschikbaar: true,
  },
  {
    id: 'zoek',
    label: 'Zoeken',
    beschrijving: 'Doorzoek alle content over de ṣalāt',
    beschikbaar: false,
  },
]

export const moduleEmoji: Record<string, string> = {
  gebeden:  '🕌',
  fiqh:     '⚖️',
  situaties:'🧳',
  dimensie: '💚',
  zoek:     '🔍',
}
