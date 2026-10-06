/**
 * Exporta PDF (una slide por página) de los 3 días del bootcamp.
 * Requiere: npm install puppeteer  (en esta carpeta o global)
 */
import puppeteer from 'puppeteer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const root = path.join(__dirname, '..');
const outDir = path.join(root, 'documentos');

const days = [
  { html: 'Bootcamp-Dia-1-Presentacion.html', pdf: 'Bootcamp-Dia-1-Guion.pdf' },
  { html: 'Bootcamp-Dia-2-Presentacion.html', pdf: 'Bootcamp-Dia-2-Producir.pdf' },
  { html: 'Bootcamp-Dia-3-Presentacion.html', pdf: 'Bootcamp-Dia-3-Editar.pdf' },
];

const printCss = `
  @page { size: 297mm 210mm; margin: 0; }
  html, body { overflow: visible !important; height: auto !important; background: #fff !important; }
  .top-bar { position: relative !important; }
  .slide-nav, p[style*="position:fixed"] { display: none !important; }
  .deck {
    position: relative !important; width: 100% !important; height: auto !important;
    overflow: visible !important; padding-top: 0 !important;
  }
  .deck .slide {
    position: relative !important; opacity: 1 !important; visibility: visible !important;
    transform: none !important; display: flex !important; flex-direction: column !important;
    min-height: 210mm !important; width: 297mm !important;
    page-break-after: always; page-break-inside: avoid;
    box-sizing: border-box;
  }
  .deck .slide:last-child { page-break-after: auto; }
  .slide-inner { padding: 16mm 18mm 12mm !important; max-width: none !important; }
  .slide-title { font-size: 22px !important; }
  .display { font-size: 32px !important; }
  .lead, .bullet-list li { font-size: 11px !important; line-height: 1.45 !important; }
  .visual-frame { max-height: 140mm !important; }
`;

if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

const browser = await puppeteer.launch({ headless: true, args: ['--no-sandbox'] });

for (const d of days) {
  const htmlPath = path.join(root, d.html);
  if (!fs.existsSync(htmlPath)) {
    console.warn('SKIP', d.html);
    continue;
  }
  const fileUrl = 'file:///' + htmlPath.replace(/\\/g, '/');
  const pdfPath = path.join(outDir, d.pdf);
  const page = await browser.newPage();
  await page.goto(fileUrl, { waitUntil: 'networkidle0', timeout: 120000 });
  await page.addStyleTag({ content: printCss });
  await page.pdf({
    path: pdfPath,
    printBackground: true,
    preferCSSPageSize: true,
    margin: { top: 0, right: 0, bottom: 0, left: 0 },
  });
  await page.close();
  console.log('PDF:', pdfPath);
}

await browser.close();
console.log('Listo.');
