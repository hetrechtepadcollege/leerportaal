# App Analytics Checklist (GoatCounter)

Gebruik dit bij elke nieuwe app in `apps/<app-naam>/`.

## 1) Voeg het pageview-script toe in `index.html`

Plaats dit vlak voor `</body>`:

```html
<script data-goatcounter="https://hetrechtepadcollege.goatcounter.com/count"
        async src="//gc.zgo.at/count.js"></script>
```

## 2) Voeg een helper toe in `script.js`

```js
function trackEvent(path, title) {
  if (window.goatcounter && typeof window.goatcounter.count === "function") {
    window.goatcounter.count({ path, title, event: true });
    return true;
  }
  return false;
}
```

## 3) Track minimaal deze events

- `appnaam/geopend` (app gestart)
- `appnaam/spel-gestart` (eerste actie/startknop)
- `appnaam/antwoord-goed` of `appnaam/antwoord-fout` (kerninteractie)
- `appnaam/spel-afgerond` (resultaat/finish)

## 4) Naamgeving

- Gebruik consistente `path`-namen met prefix van de app, bijvoorbeeld:
  - `koran-app/dag-afgerond`
  - `ramadan-explorer/snelheidsronde-afgerond`
  - `ramadan-quiz/quiz-voltooid`

## 5) Standaard portal-terugknop (verplicht)

Plaats onderaan elke app (in `index.html`) een vaste knop naar het portaal:

```html
<div class="portal-home-wrap">
  <a class="portal-home-btn" href="https://leer.hetrechtepadcollege.nl/">
    Terug naar Leerportaal
  </a>
</div>
```

Voeg in de app-stylesheet (`style.css` of `styles.css`) minimaal dit toe:

```css
.portal-home-wrap {
  margin-top: 8px;
  text-align: center;
}

.portal-home-btn {
  display: inline-block;
  text-decoration: none;
}
```
