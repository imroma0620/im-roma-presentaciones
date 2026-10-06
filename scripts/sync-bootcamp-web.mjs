/**
 * Copia presentaciones del bootcamp a docs/bootcamp/ para GitHub Pages.
 * Ejecutar tras: node scripts/generar-bootcamp-desde-md.mjs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const out = path.join(root, 'docs', 'bootcamp');

const copies = [
  ['Bootcamp-Dia-1-Presentacion.html', 'dia-1.html'],
  ['Bootcamp-Dia-2-Presentacion.html', 'dia-2.html'],
  ['Bootcamp-Dia-3-Presentacion.html', 'dia-3.html'],
  [path.join('presentaciones', 'propuesta-mentoria-marcas.html'), 'mentoria.html'],
];

if (!fs.existsSync(out)) fs.mkdirSync(out, { recursive: true });

for (const [srcRel, destName] of copies) {
  const src = path.join(root, srcRel);
  const dest = path.join(out, destName);
  if (!fs.existsSync(src)) {
    console.warn('SKIP (no existe):', srcRel);
    continue;
  }
  let html = fs.readFileSync(src, 'utf8');
  if (destName.startsWith('dia-')) {
    html = html.replace(
      '<body>',
      '<body>\n  <a href="index.html" style="position:fixed;top:58px;left:16px;z-index:100;font-size:12px;font-weight:600;color:#4C3AAF;text-decoration:none;font-family:Montserrat,sans-serif;">← Días</a>'
    );
  }
  fs.writeFileSync(dest, html);
  console.log('OK', destName);
}

console.log('\nWeb listo en docs/bootcamp/');
console.log('GitHub Pages: Settings → Pages → Branch main → Folder /docs');
console.log('URL típica: https://imroma0620.github.io/im-roma-presentaciones/bootcamp/');
