import { locations, routeCoords } from './data.js';

let map, routeLine, showRoute = true, activeDay = 'all';
let markers = {};
let activeLocation = null;

window.addEventListener('load', () => {
  map = L.map('map', {
    center: [21.42, 39.86],
    zoom: 12,
    zoomControl: false,
    attributionControl: true
  });

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap'
  }).addTo(map);

  routeLine = L.polyline(routeCoords, {
    color: '#C9A84C',
    weight: 3,
    opacity: 0.7,
    dashArray: '8, 6'
  }).addTo(map);

  locations.forEach(loc => {
    const icon = L.divIcon({
      className: '',
      html: createMarkerHTML(loc),
      iconSize: [60, 70],
      iconAnchor: [30, 64]
    });

    const marker = L.marker([loc.lat, loc.lng], { icon })
      .addTo(map)
      .on('click', () => openPanel(loc));

    markers[loc.id] = { marker, loc };
  });

  setTimeout(() => {
    document.getElementById('loading').classList.add('hidden');
  }, 1600);

  map.on('click', () => closePanel());
});

function createMarkerHTML(loc) {
  return `
    <div class="marker-wrap" id="mw-${loc.id}">
      <div class="marker-pin" style="background: linear-gradient(135deg, ${loc.color}dd, ${loc.color}88)">
        <div class="marker-pulse" style="border: 2px solid ${loc.color}55"></div>
        <span class="icon">${loc.icon}</span>
      </div>
      <div class="marker-label">${loc.name.split(' ').slice(0, 2).join(' ')}</div>
    </div>
  `;
}

function openPanel(loc) {
  activeLocation = loc;
  document.getElementById('panel-cat').textContent = loc.category;
  document.getElementById('panel-name').textContent = loc.name;
  document.getElementById('panel-arabic').textContent = loc.arabic;

  let html = '';

  html += `<div class="location-badges">`;
  if (loc.day === 0) html += `<span class="badge badge-day">Vóór / Hele Hadj</span>`;
  else if (loc.day === 8) html += `<span class="badge badge-day">8 Dhul Hijjah</span>`;
  else if (loc.day === 9) html += `<span class="badge badge-day">9 Dhul Hijjah</span>`;
  else if (loc.day === 10) html += `<span class="badge badge-day">10 Dhul Hijjah</span>`;
  else if (loc.day === 11) html += `<span class="badge badge-day">11–13 Dhul Hijjah</span>`;
  html += `<span class="badge badge-type">${loc.category}</span>`;
  html += `<span class="badge badge-hanafi">Hanafi</span>`;
  html += `</div>`;

  html += `<p class="panel-desc">${loc.desc}</p>`;

  if (loc.manasik && loc.manasik.length) {
    html += `<div class="panel-section-title">Manāsik</div>`;
    html += `<div class="manasik-list">`;
    loc.manasik.forEach(m => {
      html += `<div class="manasik-item">
        <div class="manasik-icon">${m.icon}</div>
        <div class="manasik-text">
          <div class="manasik-name">${m.name} <span class="ar">${m.ar}</span></div>
          <div class="manasik-detail">${m.detail}</div>
        </div>
      </div>`;
    });
    html += `</div>`;
  }

  if (loc.hanafi) {
    html += `<div class="hanafi-note">
      <div class="hanafi-note-title">🕌 Hanafi-madhhab</div>
      <div class="hanafi-note-text">${loc.hanafi}</div>
    </div>`;
  }

  if (loc.dua) {
    html += `<div class="panel-section-title">Aanbevolen Duʿāʾ</div>`;
    html += `<div class="dua-box">
      <div class="dua-arabic">${loc.dua.ar}</div>
      <div class="dua-dutch">${loc.dua.nl}</div>
    </div>`;
  }

  document.getElementById('panel-body').innerHTML = html;
  document.getElementById('info-panel').classList.add('open');

  map.flyTo([loc.lat, loc.lng], Math.max(map.getZoom(), 14), { duration: 0.8 });
}

function closePanel() {
  document.getElementById('info-panel').classList.remove('open');
  activeLocation = null;
}

function toggleRoute(btn, show) {
  document.querySelectorAll('.route-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  showRoute = show;
  if (show) {
    routeLine.addTo(map);
  } else {
    map.removeLayer(routeLine);
  }
}

function filterDay(btn, day) {
  document.querySelectorAll('.day-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  activeDay = day;

  closePanel();

  Object.values(markers).forEach(({ marker, loc }) => {
    const el = marker.getElement();
    if (!el) return;
    const show = day === 'all' || loc.day === day;
    el.style.opacity = show ? '1' : '0.18';
    el.style.pointerEvents = show ? 'auto' : 'none';
  });

  if (day === 9) map.flyTo([21.3547, 39.9845], 13, { duration: 1 });
  else if (day === 10) map.flyTo([21.4150, 39.8850], 13, { duration: 1 });
  else if (day === 8 || day === 11) map.flyTo([21.4133, 39.8928], 14, { duration: 1 });
  else map.flyTo([21.42, 39.86], 12, { duration: 1 });
}

// Touch swipe down to close panel
let touchStartY = 0;
document.getElementById('info-panel').addEventListener('touchstart', e => {
  touchStartY = e.touches[0].clientY;
}, { passive: true });
document.getElementById('info-panel').addEventListener('touchend', e => {
  const diff = e.changedTouches[0].clientY - touchStartY;
  if (diff > 60) closePanel();
}, { passive: true });

// Expose to HTML onclick attributes
window.toggleRoute = toggleRoute;
window.filterDay = filterDay;
window.closePanel = closePanel;
