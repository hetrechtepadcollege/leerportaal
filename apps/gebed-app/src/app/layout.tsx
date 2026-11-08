import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Het Gebed | Het Rechte Pad College',
  description: 'Ontdek en leer alles over het gebed.',
  referrer: 'strict-origin-when-cross-origin',
  // Nog niet live: niet laten indexeren. Verwijder bij live-zetting.
  robots: { index: false, follow: false },
  openGraph: {
    type: 'article',
    url: 'https://leer.hetrechtepadcollege.nl/apps/vijf-gebeden/',
    title: 'Het Gebed — Ontdek en leer alles over het gebed',
    description: 'Ontdek en leer alles over het gebed.',
    images: [
      {
        url: 'https://leer.hetrechtepadcollege.nl/apps/vijf-gebeden/images/share-banner.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Het Gebed — Ontdek en leer alles over het gebed',
    description: 'Ontdek en leer alles over het gebed.',
    images: ['https://leer.hetrechtepadcollege.nl/apps/vijf-gebeden/images/share-banner.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" dir="ltr">
      <head>
        <link rel="stylesheet" href="/fonts/fonts.css" />
        <link rel="icon" href="/icons/favicon.ico" sizes="48x48" />
        <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />
        <link rel="icon" type="image/png" href="/icons/favicon-96x96.png" sizes="96x96" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/icons/site.webmanifest" />
        {/* CSP-meta wordt na de build ingevoegd door scripts/inject-csp.mjs (met hashes van
            de inline-scripts), niet hier — een meta-CSP blokkeert de Next.js dev-runtime. */}
      </head>
      <body>
        {children}
        {/* GoatCounter analytics */}
        <script
          data-goatcounter="https://hetrechtepadcollege.goatcounter.com/count"
          async
          src="/vendor/goatcounter/count.js"
        />
      </body>
    </html>
  )
}
