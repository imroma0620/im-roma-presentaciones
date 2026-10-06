# Publicar el bootcamp en la web (GitHub Pages)

## 1. Sincronizar archivos

```bash
node scripts/generar-bootcamp-desde-md.mjs
node scripts/sync-bootcamp-web.mjs
```

Queda la app en **`docs/bootcamp/index.html`** con enlaces a `dia-1.html`, `dia-2.html`, `dia-3.html` (sin JavaScript en el menú).

## 2. Subir a GitHub

Commit y push de la carpeta `docs/` (y el resto si quieres).

Repositorio: `imroma0620/im-roma-presentaciones`

## 3. Activar GitHub Pages

En GitHub → **Settings** → **Pages** → **Build and deployment**:

- Source: **Deploy from a branch**
- Branch: **master** (o main) → carpeta **`/docs`**
- Save

En unos minutos la URL será algo como:

**https://imroma0620.github.io/im-roma-presentaciones/bootcamp/**

(Prueba también `/bootcamp/index.html` si la raíz no redirige.)

## PDF (opcional)

Desde la carpeta del proyecto, con Puppeteer instalado:

```bash
npm init -y
npm install puppeteer
node scripts/generar-pdf-bootcamp-dias.mjs
```

PDFs en `documentos/Bootcamp-Dia-1-Guion.pdf`, etc.

También puedes abrir cualquier `dia-N.html` en Chrome → **Imprimir** → **Guardar como PDF**.
