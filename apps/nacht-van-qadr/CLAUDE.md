# Nacht van Qadr — App instructies

## Doel
Een scroll-gebaseerde interactieve verkenner over Laylat al-Qadr (de Nacht van de Macht). Gericht op een **breed volwassen publiek**.

## Structuur
De app bestaat uit opeenvolgende scroll-secties:
1. Hero — titel + Arabische naam
2. Wat is deze nacht?
3. De betekenis van "Qadr" (3 betekenissen)
4. Waarom kregen wij deze nacht? (verhaal + hadith)
5. Soera al-Qadr (volledige tekst + vertaling per vers)
6. Beter dan duizend maanden
7. Wanneer? (het getal 27 + waarom datum verborgen)
8. Vergeving en beloning
9. De engelen dalen neer
10. Tips voor de nacht (inclusief duāʾ met kopieer-knop)
11. Afsluiting

## GoatCounter events
- `nacht-van-qadr/app-gestart` — bij laden
- `nacht-van-qadr/sectie/soera-al-qadr` — scroll
- `nacht-van-qadr/sectie/vergeving` — scroll
- `nacht-van-qadr/sectie/tips` — scroll
- `nacht-van-qadr/dua-gekopieerd` — kopieer-knop

## Technische notities
- Alle JavaScript staat inline in `index.html` (geen `script.js`)
- IntersectionObserver voor fade-in animaties en scroll-tracking
- Arabische tekst: `AlQalamQuranMajeed` font, `<p dir="rtl" lang="ar">`
- CSP: `font-src 'self'` vereist voor lokaal font
