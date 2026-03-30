import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'De Vijf Gebeden | Het Rechte Pad College',
  description:
    "Leer alles over de vijf dagelijkse gebeden: tijden, raka'at, betekenis en een quiz.",
  openGraph: {
    type: 'article',
    url: 'https://leer.hetrechtepadcollege.nl/apps/vijf-gebeden/',
    title: 'De Vijf Gebeden — Alles over de dagelijkse gebeden',
    description:
      "Leer alles over de vijf dagelijkse gebeden: tijden, raka'at, betekenis en een quiz.",
    images: [
      {
        url: 'https://leer.hetrechtepadcollege.nl/apps/vijf-gebeden/images/share-banner.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'De Vijf Gebeden — Alles over de dagelijkse gebeden',
    description:
      "Leer alles over de vijf dagelijkse gebeden: tijden, raka'at, betekenis en een quiz.",
    images: ['https://leer.hetrechtepadcollege.nl/apps/vijf-gebeden/images/share-banner.png'],
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl" dir="ltr">
      <head>
        <link rel="icon" href="/icons/favicon.ico" sizes="48x48" />
        <link rel="icon" type="image/svg+xml" href="/icons/favicon.svg" />
        <link rel="icon" type="image/png" href="/icons/favicon-96x96.png" sizes="96x96" />
        <link rel="apple-touch-icon" sizes="180x180" href="/icons/apple-touch-icon.png" />
        <link rel="manifest" href="/icons/site.webmanifest" />
        <meta
          httpEquiv="Content-Security-Policy"
          content="default-src 'self'; script-src 'self' 'unsafe-inline' https://gc.zgo.at; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data:; connect-src 'self' https://hetrechtepadcollege.goatcounter.com;"
        />
      </head>
      <body>
        {children}
        {/* GoatCounter analytics */}
        <script
          data-goatcounter="https://hetrechtepadcollege.goatcounter.com/count"
          async
          src="https://gc.zgo.at/count.js"
          integrity="sha384-DGiREytotlUiLflu8vLo0vvfxKWn36pKPT1ZBhh3R+3vhwrS/4p3H9eys9Zr2bPQ"
          crossOrigin="anonymous"
        />
      </body>
    </html>
  )
}
