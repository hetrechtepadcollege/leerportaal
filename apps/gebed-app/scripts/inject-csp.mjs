// Voegt na `next build` (static export) een Content-Security-Policy-meta toe aan elke HTML-pagina
// in out/. Next.js zet de app-data in inline <script>-blokken; die staan we alleen toe via hun
// sha256-hash, zodat er geen 'unsafe-inline' nodig is voor scripts.
import { createHash } from 'node:crypto'
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

const OUT = 'out'
const htmlFiles = (dir) =>
  readdirSync(dir).flatMap((name) => {
    const p = join(dir, name)
    if (statSync(p).isDirectory()) return htmlFiles(p)
    return p.endsWith('.html') ? [p] : []
  })

for (const file of htmlFiles(OUT)) {
  let html = readFileSync(file, 'utf8')
  if (html.includes('http-equiv="Content-Security-Policy"')) continue
  const hashes = new Set()
  for (const m of html.matchAll(/<script(?![^>]*\bsrc=)[^>]*>([\s\S]*?)<\/script>/g)) {
    if (m[1].length) hashes.add(`'sha256-${createHash('sha256').update(m[1], 'utf8').digest('base64')}'`)
  }
  const csp = [
    "default-src 'self'",
    `script-src 'self' ${[...hashes].join(' ')}`.trim(),
    "style-src 'self' 'unsafe-inline'",
    "font-src 'self'",
    "img-src 'self' data:",
    "connect-src 'self' https://hetrechtepadcollege.goatcounter.com",
    "base-uri 'self'",
    "form-action 'self'",
  ].join('; ')
  const meta = `<meta http-equiv="Content-Security-Policy" content="${csp}"/>`
  if (!/<head>/.test(html)) throw new Error(`Geen <head> in ${file}`)
  html = html.replace('<head>', `<head>${meta}`)
  writeFileSync(file, html)
  console.log(`CSP ingevoegd: ${file} (${hashes.size} inline-scripts)`)
}
