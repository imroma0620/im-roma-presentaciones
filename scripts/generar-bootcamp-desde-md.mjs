/**
 * Genera 3 presentaciones HTML directamente desde el Markdown v3.
 * Sin menús ni iframes: un archivo = un deck (flechas ← →).
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawnSync } from 'child_process';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const presDir = path.join(root, 'presentaciones');
const mdPath = path.join(presDir, 'IM_ROMA_Bootcamp_De_la_Idea_a_un_Creativo_3_Dias_v3.md');

const EXTRA_CSS = `
    .md-body p.lead { max-width: 820px; margin-top: 8px; }
    .md-body ul.bullet-list { max-width: 820px; }
    .md-body blockquote.md-quote {
      font-family: var(--font-accent); font-style: italic; font-size: 18px; line-height: 1.5;
      color: var(--violet-core); border-left: 3px solid var(--violet-pale); padding: 12px 0 12px 20px; margin: 12px 0; max-width: 720px;
    }
    .md-body h3.section { margin-top: 14px; }
    .md-body h4.md-h4 { font-size: 14px; font-weight: 600; color: var(--violet-mid); margin: 12px 0 6px; letter-spacing: 0.06em; }
    .slide-inner.top.md-body { justify-content: flex-start; padding-top: 52px; }
    html, body { height: 100%; overflow: hidden; }
    .top-bar { position: fixed; z-index: 50; }
    .deck {
      position: relative !important; width: 100% !important; height: 100vh !important;
      margin: 0 !important; padding-top: 52px !important; box-sizing: border-box;
      overflow-x: hidden !important; overflow-y: auto !important;
      scroll-snap-type: y mandatory; scroll-behavior: smooth;
    }
    .deck .slide {
      position: relative !important; inset: auto !important;
      opacity: 1 !important; visibility: visible !important; transform: none !important;
      min-height: calc(100vh - 52px); scroll-snap-align: start;
      display: flex; flex-direction: column; z-index: auto !important;
    }
    .deck .slide .slide-inner { flex: 1; }
    .nav-bar { display: none !important; }
    .slide-nav {
      flex-shrink: 0; display: flex; align-items: center; justify-content: space-between;
      gap: 16px; padding: 12px 48px 28px; border-top: 1px solid var(--border-soft); background: #fff;
    }
    .slide-link {
      font-family: var(--font-body); font-size: 14px; font-weight: 600; text-decoration: none;
      color: var(--midnight); padding: 12px 18px; border-radius: 8px; border: 1px solid var(--violet-pale);
      min-width: 130px; text-align: center;
    }
    a.slide-link:hover { background: var(--violet-pale); }
    .slide-link.primary { background: var(--violet-core); color: #fff; border-color: var(--violet-core); }
    .slide-link.primary:hover { filter: brightness(1.05); }
    .slide-link.ghost { visibility: hidden; pointer-events: none; }
    .slide-num { font-size: 13px; color: var(--text-muted); }
`;

function readBaseCss() {
  const clase1 = fs.readFileSync(path.join(presDir, 'clase-1-creacion-imagenes-ia.html'), 'utf8');
  const m = clase1.match(/<style>([\s\S]*?)<\/style>/);
  if (!m) throw new Error('No CSS in clase-1');
  return m[1].replace('@media (max-width: 960px) {', EXTRA_CSS + '\n    @media (max-width: 960px) {');
}

function esc(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

function inlineMd(s) {
  return esc(s).replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
}

function buildDay1Markdown(fullMd, i1, i2) {
  const dayChunk = fullMd.slice(i1, i2);
  const theoryStart = dayChunk.indexOf('## 00:10 — 00:30');
  if (theoryStart < 0) throw new Error('Día 1: no se encontró bloque 00:10 en el MD');
  const classContent = dayChunk.slice(theoryStart);

  return `# Día 1 · De la idea al guion

De la idea a un creativo en 3 días · I'M ROMA

**Sesión 1 de 3** · virtual en vivo · 2 horas · 70% práctica

---

# Qué vamos a aprender hoy

### En esta sesión

- Convertir una **idea** en un **guion audiovisual** pensado para producirse con IA (no solo texto).
- Ordenar el mensaje del anuncio con **AIDA** y llevarlo a **escenas concretas**.
- Definir por plano: sujeto, acción, contexto, movimiento, luz e **intención**.
- Pasar del guion al **prompt** y al **mapa de escenas**.
- **Práctica guiada** (ejemplo torta de banana) y **ejercicio** con tu producto.

### Entregable del día

**Guion audiovisual + mapa de escenas + prompts iniciales** — listo para el Día 2 (producir).

### Los 3 días del bootcamp

- **Día 1 — Diseñar:** idea → guion.
- **Día 2 — Producir:** guion → clips con IA (9:16).
- **Día 3 — Editar:** clips → anuncio + copy.

No empezamos generando imágenes: primero el mensaje, después la producción.

---

${classContent}`;
}

function mdBlockToSlideHtml(block, isFirstCover, coverKind = '') {
  if (!block.trim()) return '';
  const lines = block.split('\n');
  let kicker = '';
  let title = '';
  const parts = [];
  let list = null;

  function flushList() {
    if (!list || !list.length) return;
    parts.push(`<ul class="bullet-list">${list.map((li) => `<li>${inlineMd(li)}</li>`).join('')}</ul>`);
    list = null;
  }

  for (const raw of lines) {
    const line = raw.trimEnd();
    const t = line.trim();
    if (!t) continue;

    if (/^## /.test(t)) {
      flushList();
      if (/\d{2}:\d{2}/.test(t)) kicker = esc(t.slice(3));
      else parts.push(`<h3 class="section">${inlineMd(t.slice(3))}</h3>`);
      continue;
    }
    if (/^# /.test(t)) {
      flushList();
      if (!title) title = inlineMd(t.slice(2));
      else parts.push(`<h3 class="section">${inlineMd(t.slice(2))}</h3>`);
      continue;
    }
    if (/^### /.test(t)) {
      flushList();
      parts.push(`<h3 class="section">${inlineMd(t.slice(4))}</h3>`);
      continue;
    }
    if (/^#### /.test(t)) {
      flushList();
      parts.push(`<h4 class="md-h4">${inlineMd(t.slice(5))}</h4>`);
      continue;
    }
    if (/^> /.test(t)) {
      flushList();
      parts.push(`<blockquote class="md-quote">${inlineMd(t.slice(2))}</blockquote>`);
      continue;
    }
    if (/^[-*] /.test(t)) {
      if (!list) list = [];
      list.push(t.replace(/^[-*] /, ''));
      continue;
    }
    flushList();
    parts.push(`<p class="lead">${inlineMd(t)}</p>`);
  }
  flushList();

  if (!title && !parts.length) return '';

  if (isFirstCover && coverKind === 'day1') {
    const subtitle = parts.find((p) => p.includes('lead'))?.replace(/<\/?p[^>]*>/g, '') || '';
    return `    <section class="slide">
      <div class="slide-inner split-layout">
        <div>
          <p class="kicker">Bootcamp · Sesión 1</p>
          <h1 class="display">De la idea<br><span class="accent">al guion</span></h1>
          <p class="lead" style="margin-top:16px;font-family:var(--font-accent);font-style:italic;font-size:19px;color:var(--violet-core);">De la idea a un creativo en 3 días</p>
          <p class="lead" style="margin-top:12px;">Virtual en vivo · 2 horas · 70% práctica</p>
        </div>
        <div class="visual-frame">
          <div class="visual-art boot-cover" role="img" aria-hidden="true"></div>
          <div class="overlay"><span class="tag-mini">Día 1</span><p class="cap">Diseñar<br><span class="accent" style="font-size:17px;">antes de producir</span></p></div>
        </div>
      </div>
    </section>`;
  }

  if (isFirstCover && title) {
    return `    <section class="slide">
      <div class="slide-inner split-layout">
        <div>
          <p class="kicker">I'M ROMA · Bootcamp</p>
          <h1 class="display">${title.replace(/<strong>/g, '').replace(/<\/strong>/g, '')}</h1>
          ${parts.slice(0, 4).join('\n          ')}
        </div>
        <div class="visual-frame">
          <div class="visual-art boot-cover" role="img" aria-hidden="true"></div>
          <div class="overlay"><span class="tag-mini">En vivo</span><p class="cap">Desde el guion<br><span class="accent">al creativo</span></p></div>
        </div>
      </div>
    </section>`;
  }

  return `    <section class="slide">
      <div class="slide-inner top md-body">
        ${kicker ? `<p class="kicker">${kicker}</p>` : ''}
        ${title ? `<h2 class="slide-title">${title}</h2>` : ''}
        ${parts.join('\n        ')}
      </div>
    </section>`;
}

function sectionToSlides(sectionMd, coverKind = '') {
  const blocks = sectionMd.split(/\n---\n/);
  const slides = [];
  blocks.forEach((b, i) => {
    const html = mdBlockToSlideHtml(b, i === 0, i === 0 ? coverKind : '');
    if (html) slides.push(html);
  });
  return finalizeSlides(slides);
}

function finalizeSlides(rawSlides) {
  const total = rawSlides.length;
  return rawSlides.map((html, i) => {
    const id = `s${i}`;
    let s = html.replace(/<section class="slide(?: active)?">/, `<section id="${id}" class="slide">`);
    if (!s.includes(`id="${id}"`)) {
      s = s.replace('<section ', `<section id="${id}" `);
    }
    const prev =
      i > 0
        ? `<a class="slide-link" href="#s${i - 1}">← Anterior</a>`
        : `<span class="slide-link ghost">← Anterior</span>`;
    const next =
      i < total - 1
        ? `<a class="slide-link primary" href="#s${i + 1}">Siguiente →</a>`
        : `<span class="slide-link ghost">Siguiente →</span>`;
    const nav = `
        <nav class="slide-nav">
          ${prev}
          <span class="slide-num">${i + 1} / ${total}</span>
          ${next}
        </nav>`;
    return s.replace(/\s*<\/section>\s*$/, `${nav}\n    </section>`);
  });
}

function buildDeck(meta, slidesHtml) {
  const css = readBaseCss() + `
    .visual-art.boot-cover { background: linear-gradient(165deg, #F7F6FF 0%, #7B62D4 50%, #2A1F5C 100%); }
  `;
  return `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${meta.title} · I'M ROMA</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600&family=Cormorant+Garamond:ital,wght@1,300;1,400&family=Montserrat:wght@300;400;500;600&display=swap" rel="stylesheet">
  <style>${css}</style>
</head>
<body>
  <header class="top-bar">
    <div class="brand-row">
      <span class="brand">I'M ROMA</span>
      <span class="brand-sep"></span>
      <span class="brand-meta">${meta.meta}</span>
    </div>
    <div class="status-pill"><span class="status-dot"></span> ${meta.status}</div>
  </header>
  <div class="deck" id="deck">
${slidesHtml.join('\n')}
  </div>
  <p style="position:fixed;bottom:4px;right:8px;font-size:10px;color:#8B8BA8;margin:0;z-index:60;">Sin JavaScript · usa enlaces Siguiente →</p>
</body>
</html>`;
}

const md = fs.readFileSync(mdPath, 'utf8');
const i1 = md.indexOf('# DÍA 1');
const i2 = md.indexOf('# DÍA 2');
const i3 = md.indexOf('# DÍA 3');
if (i1 < 0 || i2 < 0 || i3 < 0) throw new Error('No se encontraron marcadores DÍA 1/2/3 en el MD');

const day1md = buildDay1Markdown(md, i1, i2);
const day2md = md.slice(i2, i3);
const day3md = md.slice(i3);

const outputs = [
  {
    pres: 'bootcamp-dia-1-guion.html',
    root: 'Bootcamp-Dia-1-Presentacion.html',
    meta: { title: 'Bootcamp Día 1 · De la idea al guion', meta: 'Bootcamp · Día 1', status: '2 h · desde MD v3' },
    md: day1md,
  },
  {
    pres: 'bootcamp-dia-2-producir.html',
    root: 'Bootcamp-Dia-2-Presentacion.html',
    meta: { title: 'Bootcamp Día 2 · Producir', meta: 'Bootcamp · Día 2', status: '2 h · desde MD v3' },
    md: day2md,
  },
  {
    pres: 'bootcamp-dia-3-editar.html',
    root: 'Bootcamp-Dia-3-Presentacion.html',
    meta: { title: 'Bootcamp Día 3 · Editar', meta: 'Bootcamp · Día 3', status: '2 h · desde MD v3' },
    md: day3md,
  },
];

for (const o of outputs) {
  const coverKind = o.root.includes('Dia-1') ? 'day1' : '';
  const slides = sectionToSlides(o.md, coverKind);
  const html = buildDeck(o.meta, slides);
  fs.writeFileSync(path.join(presDir, o.pres), html);
  fs.writeFileSync(path.join(root, o.root), html);
  console.log(o.root, '→', slides.length, 'slides');
}

// Menú estático sin JavaScript (solo enlaces reales a archivos)
const menuHtml = `<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8">
  <title>Bootcamp · archivos de presentación</title>
  <style>
    body { font-family: system-ui, sans-serif; max-width: 520px; margin: 48px auto; padding: 0 20px; line-height: 1.5; color: #0D0D1A; }
    h1 { font-size: 1.35rem; }
    p { color: #555; font-size: 14px; }
    a.file { display: block; margin: 12px 0; padding: 14px 16px; background: #F7F6FF; border-left: 4px solid #4C3AAF; text-decoration: none; color: #0D0D1A; font-weight: 600; border-radius: 8px; }
    a.file:hover { background: #EAE5FF; }
    a.file small { display: block; font-weight: 400; color: #666; margin-top: 4px; }
    .warn { background: #fff3cd; padding: 12px; border-radius: 8px; font-size: 13px; margin: 20px 0; }
  </style>
</head>
<body>
  <h1>Bootcamp · 3 presentaciones</h1>
  <p>Generadas desde <code>IM_ROMA_Bootcamp_De_la_Idea_a_un_Creativo_3_Dias_v3.md</code>. No hay menú interactivo: abre <strong>directamente</strong> el día que vayas a dictar.</p>
  <div class="warn">En Cursor: clic derecho en el enlace → <strong>Abrir en navegador</strong>, o doble clic en el .html en el Explorador de archivos, o usa los .bat en la raíz.</div>
  <a class="file" href="Bootcamp-Dia-1-Presentacion.html">Día 1 · De la idea al guion<small>Raíz del proyecto</small></a>
  <a class="file" href="Bootcamp-Dia-2-Presentacion.html">Día 2 · Producir<small>Flow · Firefly · Higgsfield</small></a>
  <a class="file" href="Bootcamp-Dia-3-Presentacion.html">Día 3 · Editar<small>CapCut · copy</small></a>
  <p style="font-size:12px;color:#888;">Regenerar: <code>node scripts/generar-bootcamp-desde-md.mjs</code></p>
</body>
</html>`;

fs.writeFileSync(path.join(presDir, 'bootcamp-3-dias.html'), menuHtml);
fs.writeFileSync(path.join(root, 'bootcamp.html'), menuHtml.replace(/href="Bootcamp/g, 'href="Bootcamp'));

console.log('Listo. Abre Bootcamp-Dia-1-Presentacion.html · enlaces Siguiente (sin JS).');

const sync = path.join(__dirname, 'sync-bootcamp-web.mjs');
if (fs.existsSync(sync)) {
  spawnSync(process.execPath, [sync], { stdio: 'inherit', cwd: root });
}
