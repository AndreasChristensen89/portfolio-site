/* =========================================================
   EDIT YOUR STORY HERE
   One object per swipe. lat/lon place the pin on the map,
   span = how far the camera zooms in (smaller = closer).
   Stops marked TODO are guesses: edit them to match you.
   ========================================================= */
const STOPS = [
  { intro: true, lat: 38, lon: 25, span: 330 },
  { flag: '🇩🇰', city: 'Skørping', country: 'Denmark', years: '2008–2013', lat: 56.84, lon: 9.89, span: 40,
    title: 'Where it all started',
    items: ['🧸 Nursery assistant, SFO Skattekisten (2008–09)',
            '🤝 Personal helper for a teenager with muscular dystrophy, Rebild Kommune (2011–13): day and night care built on trust'] },
  { flag: '🇩🇰', city: 'Aalborg', country: 'Denmark', years: '2009–2015', lat: 57.05, lon: 9.92, span: 40,
    title: 'University years',
    items: ['🎓 Bachelor: International Business Communication, Chinese Area Studies',
            '🎓 Master: Culture, Communication and Globalization'] },
  { flag: '🇺🇸', city: 'United States', country: 'Semester abroad', years: '', lat: 39, lon: -98, span: 120, // TODO: city, year, details
    title: 'A semester across the Atlantic',
    items: ['✈️ Studied one semester in the United States as part of my degree'] },
  { flag: '🇨🇳', city: 'Shanghai', country: 'China', years: '2013–2014', lat: 31.23, lon: 121.47, span: 45,
    title: 'First time teaching',
    items: ['📰 Communication intern, Nordic Centre, Fudan University',
            '🍎 English instructor at IVY Prep and Kirin Academy (ages 5–12)',
            '🎸 Guitar teacher for high school students at Fudan',
            '🀄 Mandarin language course, Fudan University'] },
  { flag: '🇯🇵', city: 'Osaka', country: 'Japan', years: '2016', lat: 34.69, lon: 135.5, span: 40,
    title: 'English instructor, Mabuchi / Epion',
    items: ['🏫 27 classes a week, kids aged 3–13, beginner to conversational',
            '📝 Homework, testing, grading and keeping parents updated'] },
  { flag: '🇫🇮', city: 'Finland', country: 'Studies abroad', years: '', lat: 60.17, lon: 24.94, span: 60, // TODO: city, year, details
    title: 'Nordic winter chapter',
    items: ['❄️ Lived and studied in Finland'] },
  { flag: '🇩🇰', city: 'Roskilde', country: 'Denmark', years: '2017–2018', lat: 55.64, lon: 12.08, span: 40,
    title: 'Digital transformation at Lyreco',
    items: ['📊 Market analyst intern, Tværfagligt Forum (2017)',
            '📦 Product assistant: product data, safety info, supplier contact',
            '🛒 Content manager for the Scandinavian webshop, leading data projects'] },
  { flag: '🇦🇺', city: 'Queensland', country: 'Australia', years: 'Jan 2019', lat: -27.88, lon: 153.28, span: 80,
    title: 'Ranch hand, Summer Park Equestrian',
    items: ['🐴 Cared for horses, built fences and ranch extensions',
            '☀️ Installed solar panels and waterlines, mended hilly roads'] },
  { flag: '🇫🇷', city: 'Lyon', country: 'France', years: '2019–2022', lat: 45.76, lon: 4.84, span: 45,
    title: 'Scooters, code and a new language',
    items: ['🛴 Voi: vehicle operations team lead, then repair process manager across France',
            '🗣️ DELF B2 French',
            '💻 Diploma in Software Development, Code Institute',
            '🌋 Full-stack developer, Université Claude Bernard Lyon 1: geology databases with Django and Leaflet'] },
  { flag: '🇧🇪', city: 'Brussels', country: 'Belgium · tech', years: '2023–2025', lat: 50.85, lon: 4.35, span: 40,
    title: 'Developer, then test engineer',
    items: ['🧩 Django developer at Omina Technologies, with UX in Figma',
            '🧪 Test engineer at Sopra Steria, ISTQB and Scrum certified',
            '📺 Test automation for Telenet’s Horizon Go app (Java, Cucumber, Selenium)'] },
  { flag: '🇧🇪', city: 'Brussels', country: 'Belgium · education', years: '2025–now', lat: 50.8, lon: 4.34, span: 30,
    title: 'European School of Brussels I',
    items: ['🧑‍🏫 Educational assistant, Danish primary (Nov 2025)',
            '🇬🇧 Substitute L2 English teacher, P5 (2026)',
            '🧠 Learning support teacher: individual plans for linguistic and neurodivergent needs',
            '📚 Substitute class teacher, Danish primary (ongoing)'],
    end: true }
];
const LINKS = [
  { label: 'Email me', href: 'mailto:brogaard89@gmail.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/andreasbrogaard', cls: 'alt' }
];
const INTRO = {
  name: 'Andreas Brogaard Christensen',
  line: 'Education professional · SEN and learning support',
  text: 'Seven countries, nine languages and a lot of classrooms. Swipe down to follow the route.'
};

/* ------------------ simplified world (lon,lat) ------------------ */
const LAND = [
 '-168,66 -162,70 -140,70 -125,70 -110,73 -95,72 -85,70 -80,63 -92,58 -95,52 -82,53 -79,51 -78,60 -70,60 -62,57 -56,52 -66,45 -70,42 -76,38 -76,34 -81,31 -80,25 -83,29 -90,30 -97,27 -97,21 -92,18 -88,21 -87,16 -83,15 -83,10 -77,8 -80,7 -86,11 -92,15 -97,16 -105,20 -109,25 -112,29 -115,31 -117,33 -121,35 -124,40 -124,47 -130,54 -140,60 -150,60 -158,57 -165,60',
 '-77,8 -72,12 -62,10 -52,5 -50,0 -44,-2 -35,-5 -39,-14 -41,-22 -48,-26 -53,-34 -58,-38 -63,-41 -65,-47 -69,-52 -72,-54 -75,-50 -73,-40 -71,-30 -70,-18 -76,-14 -81,-5 -80,0',
 '-17,21 -13,28 -6,35 10,37 11,33 20,31 32,31 35,28 43,12 51,12 47,5 40,-3 40,-15 35,-24 32,-29 26,-34 18,-34 15,-25 12,-12 9,-1 9,4 4,6 -8,4 -13,9 -17,15',
 '-9,37 -9,43 -2,43.5 -1,46 -4,48 2,51 5,53 8,54 8,57 10,57.7 11,54 14,54 20,54.5 21,57 24,59 30,60 25,60 22,61 21,64 25,65 22,65.5 18,62 17,59 16,56 13,55.5 12,57 11,59 8,58 5,59 5,62 10,64 15,68 20,70 28,71 40,68 33,66 40,65 44,68 55,68 70,73 80,73 100,77 115,74 130,71 150,71 170,70 180,68 180,65 170,60 163,58 160,53 156,51 156,58 143,59 138,54 141,48 135,43 129,41 128,35 126,38 125,40 121,40 122,37 119,35 122,31 122,28 117,23 110,21 108,17 106,10 105,9 100,13 100,8 103,1 98,8 97,17 92,22 88,22 80,15 77,8 73,17 70,22 67,25 57,25 56,27 50,30 48,29 51,25 56,24 59,22 52,16 43,13 39,21 35,28 34,31 36,36 30,36 27,37 26,40 29,41 24,40 22,37 19,42 14,45 12,44 16,41 18,40 16,38 11,43 8,44 3,43 -1,37 -5,36',
 '-5,50 -3,51 1,51 2,53 -2,56 -2,58 -5,58.5 -6,56 -3,54 -5,52',
 '-10,52 -6,52 -6,55 -10,54',
 '-24,65 -14,64 -14,66 -22,66.5',
 '-55,60 -43,60 -20,70 -20,82 -45,83 -65,80 -58,75 -52,68',
 '130,31 131,34 135,35 140,36 142,40 141,41.5 140,40 139,37 136,36.5 132,35.5 130,33.5',
 '140,42 145,43 142,45.5',
 '114,-22 114,-34 118,-35 124,-33 131,-31 138,-35 141,-38 147,-38 150,-37 153,-28 153,-25 146,-19 142,-11 140,-17 136,-12 130,-12 126,-14 122,-18',
 '95,5 98,4 106,-6 102,-5', '109,1 117,7 119,1 116,-4 110,-3',
 '172,-34 178,-38 175,-41 172,-41', '167,-46 174,-41 171,-44', '44,-25 50,-15 49,-12 44,-17'
];

/* ------------------ map setup ------------------ */
const NS = 'http://www.w3.org/2000/svg', $ = s => document.querySelector(s);
const el = (n, a, p) => { const e = document.createElementNS(NS, n); for (const k in a) e.setAttribute(k, a[k]); if (p) p.append(e); return e; };
const X = lon => (lon + 180) * 1000 / 360, Y = lat => (90 - lat) * 500 / 180;
const map = $('#map'), layer = $('#layer'), plane = $('#plane'), card = $('#card');

STOPS.forEach(s => { s.x = X(s.lon); s.y = Y(s.lat); });

let g = '';
for (let lo = -180; lo <= 180; lo += 30) g += `M${X(lo)} 0V500`;
for (let la = -60; la <= 60; la += 30) g += `M0 ${Y(la)}H1000`;
el('path', { d: g, class: 'grid' }, layer);
el('rect', { x: 0, y: Y(-72), width: 1000, height: 500 - Y(-72), class: 'ice' }, layer);
LAND.forEach(p => el('polygon', { class: 'land',
  points: p.split(' ').map(q => { const [lo, la] = q.split(','); return X(+lo) + ',' + Y(+la); }).join(' ') }, layer));

const routeEls = [], pinEls = [], ringEls = [];
const leg = (a, b) => {
  let x1 = b.x; const dx = x1 - a.x;
  if (dx > 500) x1 -= 1000; if (dx < -500) x1 += 1000;
  const d = Math.hypot(x1 - a.x, b.y - a.y);
  return { x0: a.x, y0: a.y, x1, y1: b.y, d, cx: (a.x + x1) / 2, cy: (a.y + b.y) / 2 - d * .22 };
};
STOPS.forEach((s, i) => {
  if (i > 1) { const L = leg(STOPS[i - 1], s);
    if (L.d > 3) routeEls[i] = el('path', { class: 'route', d: `M${L.x0} ${L.y0}Q${L.cx} ${L.cy} ${L.x1} ${L.y1}` }, layer); }
});
STOPS.forEach((s, i) => { if (!s.intro) {
  ringEls[i] = el('circle', { class: 'ring', cx: s.x, cy: s.y }, layer);
  pinEls[i] = el('circle', { class: 'pin', cx: s.x, cy: s.y }, layer);
} });
[-1000, 1000].forEach(dx => el('use', { href: '#layer', x: dx }, map));
map.append(plane); // keep plane above the copies

let camSpan = STOPS[0].span;
function cam(x, y, span) {
  camSpan = span;
  const w = span, h = w / (innerWidth / innerHeight);
  map.setAttribute('viewBox', `${x - w / 2} ${y - .28 * h} ${w} ${h}`);
  const r = span * .009;
  pinEls.forEach(p => p && p.setAttribute('r', r));
  ringEls.forEach(p => p && p.setAttribute('r', r * 2.6));
}
let camPos = [STOPS[0].x, STOPS[0].y];
cam(...camPos, STOPS[0].span);
addEventListener('resize', () => cam(...camPos, camSpan));

/* ------------------ travel animation ------------------ */
function fly(a, b, done) {
  const L = leg(a, b), showPlane = !a.intro && !b.intro && L.d > 3;
  const dur = L.d < 3 ? 1100 : 1500 + Math.min(2200, L.d * 6);
  const bump = 1 + Math.min(2.5, L.d / 90), t0 = performance.now();
  const reduce = matchMedia('(prefers-reduced-motion:reduce)').matches;
  if (showPlane) plane.removeAttribute('display');
  (function frame(now) {
    const t = reduce ? 1 : Math.min(1, (now - t0) / dur);
    const e = t < .5 ? 2 * t * t : 1 - Math.pow(-2 * t + 2, 2) / 2, u = 1 - e;
    const px = u * u * L.x0 + 2 * u * e * L.cx + e * e * L.x1;
    const py = u * u * L.y0 + 2 * u * e * L.cy + e * e * L.y1;
    const span = Math.exp(Math.log(a.span) * u + Math.log(b.span) * e) * (1 + (bump - 1) * Math.sin(Math.PI * e));
    camPos = [px, py]; cam(px, py, span);
    if (showPlane) {
      const ang = Math.atan2(2 * u * (L.cy - L.y0) + 2 * e * (L.y1 - L.cy), 2 * u * (L.cx - L.x0) + 2 * e * (L.x1 - L.cx));
      plane.setAttribute('transform', `translate(${px} ${py}) rotate(${ang * 180 / Math.PI}) scale(${span * .0028})`);
    }
    if (t < 1) requestAnimationFrame(frame);
    else { plane.setAttribute('display', 'none'); camPos = [b.x, b.y]; done(); }
  })(t0);
}

/* ------------------ cards + swipe ------------------ */
const dots = $('#dots'), where = $('#where');
STOPS.forEach(() => dots.append(document.createElement('i')));
let cur = 0, busy = false;

function render() {
  const s = STOPS[cur];
  [...dots.children].forEach((d, i) => d.classList.toggle('on', i <= cur));
  ringEls.forEach((r, i) => r && r.classList.toggle('live', i === cur));
  pinEls.forEach((p, i) => p && p.classList.toggle('on', i <= cur));
  routeEls.forEach((r, i) => r && r.classList.toggle('done', i <= cur));
  where.textContent = s.intro ? '' : `${s.flag} ${s.city}`;
  const next = '<button class="nx" data-act="next">Swipe down<b>↓</b></button>';
  card.innerHTML = '<div class="grab"></div>' + (s.intro
    ? `<div class="head"><div class="flag">🌍</div><div><h1>${INTRO.name}</h1><div class="sub">${INTRO.line}</div></div></div>
       <p class="lead">${INTRO.text}</p>${next}`
    : `<div class="head"><div class="flag">${s.flag}</div><div><h2>${s.city}</h2><div class="sub">${[s.country, s.years].filter(Boolean).join(' · ')}</div></div></div>
       <div class="title">${s.title}</div><ul>${s.items.map(t => `<li>${t}</li>`).join('')}</ul>` +
      (s.end ? `<div class="btns">${LINKS.map(l => `<a class="btn ${l.cls || ''}" href="${l.href}" target="_blank" rel="noopener">${l.label}</a>`).join('')}
        <button class="btn ghost" data-act="restart">Start over</button></div>` : next));
}

function go(i) {
  if (busy) return; busy = true;
  card.style.transform = ''; card.classList.remove('drag'); card.classList.add('out');
  setTimeout(() => fly(STOPS[cur], STOPS[i], () => {
    cur = i; render();
    card.classList.remove('out'); card.classList.add('in');
    setTimeout(() => { card.classList.remove('in'); busy = false; }, 560);
  }), 300);
}
const next = () => { if (cur < STOPS.length - 1) go(cur + 1); };

let y0 = null;
card.addEventListener('pointerdown', e => {
  if (busy || e.target.closest('a')) return;
  y0 = e.clientY; card.setPointerCapture(e.pointerId); card.classList.add('drag');
});
card.addEventListener('pointermove', e => {
  if (y0 === null) return;
  const dy = Math.max(0, e.clientY - y0);
  card.style.transform = `translateY(${dy}px)`; card.style.opacity = 1 - dy / 500;
});
const release = e => {
  if (y0 === null) return;
  const dy = e.clientY - y0; y0 = null; card.classList.remove('drag'); card.style.opacity = '';
  if (dy > 70) next(); else if (dy < 6 && e.target.closest('[data-act]')) act(e.target.closest('[data-act]').dataset.act);
  card.style.transform = '';
};
card.addEventListener('pointerup', release);
card.addEventListener('pointercancel', () => { y0 = null; card.classList.remove('drag'); card.style.transform = ''; card.style.opacity = ''; });

function act(a) { if (a === 'next') next(); if (a === 'restart') go(0); }
addEventListener('keydown', e => { if (e.key === 'ArrowDown' || e.key === ' ') { e.preventDefault(); next(); } });
let wheelAt = 0;
addEventListener('wheel', e => { if (e.deltaY > 25 && Date.now() - wheelAt > 1200) { wheelAt = Date.now(); next(); } }, { passive: true });

render();
card.classList.add('in');
