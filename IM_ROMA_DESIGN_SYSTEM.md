# 🎨 DESIGN SYSTEM – IM ROMA CREATIVE ECOSYSTEM

## Identidad Visual & Componentes

---

## 📋 ÍNDICE DE CONTENIDOS

1. [Overview de Marca](#overview-de-marca)
2. [Paleta de Color](#paleta-de-color)
3. [Sistema Tipográfico](#sistema-tipográfico)
4. [Componentes UI](#componentes-ui)
5. [Espaciado y Grid](#espaciado-y-grid)
6. [Estados e Interactividad](#estados-e-interactividad)
7. [Elementos Gráficos](#elementos-gráficos)
8. [Aplicaciones Visuales](#aplicaciones-visuales)
9. [Reglas de Uso](#reglas-de-uso)
10. [Checklists de Implementación](#checklists-de-implementación)

---

## OVERVIEW DE MARCA

### Esencia Visual

**IM ROMA** es un ecosistema creativo que comunica autoridad estratégica con profundidad consciente. La identidad visual equilibra:

- **Estructura**: Solidez, confianza, claridad (Negro midnight + Blanco)
- **Energía**: Acción, movimiento, señal de marca (Violeta)
- **Profundidad**: Reflexión, estrategia, análisis (Azul)

### Aplicación Transversal

La paleta y tipografía funcionan en:
- Sitios web y landing pages
- Redes sociales (posts, historias, carruseles)
- Materiales descargables (PDFs, workbooks)
- Presentaciones internas
- Mockups de contenido

---

## PALETA DE COLOR

### Color Primario – Estructura

#### Midnight (#0D0D1A)
- **Uso**: Fondos principales, textos de alta jerarquía, elementos de autoridad
- **Aplicación**: Hero sections, headers, fondos de cards oscuros, cuerpo de texto principal
- **Contrast**: Máximo contraste sobre blanco/off-white

#### Navy Dark (#141428)
- **Uso**: Fondos secundarios, separadores sutiles, elementos recesivos
- **Aplicación**: Sidebars, bordes, overlays livianos
- **Relación con Midnight**: Variante más suave, nunca ambos al mismo tiempo

#### Off-White (#F7F6FF)
- **Uso**: Fondos livianos, contenido extenso, espacios "respiro"
- **Aplicación**: Post cards, fondos de secciones, fondos de tipo
- **Ventaja**: Evita el blanco duro, mantiene calidez

#### Blanco (#FFFFFF)
- **Uso**: Contrastes máximos, espacios muy vacíos, aislamiento visual
- **Aplicación**: Bordes, espacios en blanco, CTAs sobre fondos oscuros
- **Restricción**: No como fondo principal extenso (usar Off-White)

---

### Color Secundario – Señal de Marca (Violeta)

La familia violeta es la identidad de IM ROMA. Usa una sola variante por contexto, nunca mezcles.

#### Deep Violet (#2A1F5C)
- **Uso**: Acento muy sutil, elementos de fondo decorativos
- **Aplicación**: Patrones minimalistas, texturas, bordes de cards
- **Intensidad**: Baja — raramente en primer plano

#### Violet Core (#4C3AAF)
- **Uso**: CTAs, botones primarios, acentos de energía media
- **Aplicación**: Botones principales, links activos, highlights, overlays
- **Frecuencia**: La variante más usada

#### Violet Mid (#7B62D4)
- **Uso**: Elementos secundarios, etiquetas, números, acentos en posts
- **Aplicación**: Labels, kickers, números grandes, decorativos
- **Contraste**: Sobre fondos oscuros y claros (muy versátil)

#### Violet Light (#B8A4F0)
- **Uso**: Texto sobre fondos oscuros, acentos muy suaves
- **Aplicación**: Subtítulos en Midnight, descripciones, borders
- **Restricción**: Nunca sobre Off-White (bajo contraste)

#### Violet Pale (#EAE5FF)
- **Uso**: Fondos de código, backgrounds de bloques, espacios especiales
- **Aplicación**: Code blocks, alerts, highlighted sections
- **Raro**: Casi nunca como fondo extenso

---

### Color Terciario – Profundidad Estratégica (Azul)

Profundidad sin competir con violeta. Úsalo para datos, gráficos, elementos secundarios.

#### Cobalt (#1A2F6E)
- **Uso**: Acentos profundos, datos, gráficos
- **Aplicación**: Líneas en gráficos, badges, elementos de análisis
- **Contexto**: Cuando necesites "más peso" que el violeta

#### Blue Core (#2449C0)
- **Uso**: CTAs secundarias, links, estado activo de navegación
- **Aplicación**: Links en texto, botones secundarios, breadcrumbs activos
- **Contraste**: Óptimo sobre blanco, aceptable sobre gris

#### Blue Light (#5B82E8)
- **Uso**: Acentos suaves, datos de alta prioridad, overlays
- **Aplicación**: Iconos informativos, labels, highlights en tablas
- **Versatilidad**: Funciona sobre blanco y gris

#### Blue Pale (#C8D8FF)
- **Uso**: Fondos muy suaves, backgrounds de datos
- **Aplicación**: Fondos de tablas, fondos de bloques informativos, alerts
- **Rareza**: Incluso más raro que Violet Pale

---

### Reglas de Proporción

```
En cualquier pantalla o pieza:

- Midnight/Navy (Estructura):     60%
- Off-White/Blanco (Respiro):     30%
- Violeta (Energía/Acento):       8%
- Azul (Datos/Profundidad):       2%

NO uses dos acentos simultáneamente (violeta + azul).
Elige UNO como jerarquía visual.
```

---

## SISTEMA TIPOGRÁFICO

### Familia 1 – Display/Headlines: Cinzel (Serif)

**Origen**: Serif moderna con estructura monumental (evoca Roma)

**Características**:
- Serifas delicadas pero presentes
- Peso regular es suficiente para títulos
- No es decorativa ni fantasiosa

**Uso**:
- Wordmark "IM ROMA" (H0)
- Títulos principales (H1)
- Subtítulos estratégicos
- Números grandes / destacados

**Especificación CSS**:
```css
font-family: 'Cinzel', serif;
font-weight: 700;
line-height: 1.1;
letter-spacing: 0.05em;
```

**Tamaños Recomendados**:
- H1 (Hero): 52px
- H2 (Secciones): 32px
- H3 (Subsecciones): 24px
- H4 (Cards): 18px

**Nunca**:
- Cursiva en Cinzel
- Pesos finos (< 400)
- Más de 60 caracteres por línea
- Sobre fondos de textura muy cargada

---

### Familia 2 – Body/Interface: Montserrat (Sans-serif)

**Origen**: Geométrica humanista, extremadamente legible

**Características**:
- Proporciones claras
- Excelente en pantalla
- Funciona en todos los pesos

**Uso**:
- Cuerpo de texto (body)
- Botones y CTAs
- Labels, etiquetas
- Navegación
- Interface completa

**Especificación CSS**:
```css
font-family: 'Montserrat', sans-serif;
font-weight: 400; /* Regular para body */
font-weight: 600; /* Bold para botones/labels */
line-height: 1.5;
letter-spacing: 0;
```

**Tamaños Recomendados**:
- Body Copy: 15px (desktop), 14px (mobile)
- Botones: 11px (pequeños), 13px (normales) – siempre uppercase
- Labels/Tags: 9px – uppercase
- Navigation: 12px

**Pesos Disponibles**:
- 300 (Light): Nunca en body, solo decorativo
- 400 (Regular): Body, descripciones
- 500 (Medium): Énfasis sin ser agresivo
- 600 (Bold): Botones, labels importantes

---

### Familia 3 – Acento/Poesía: Cormorant Garamond (Serif Italic)

**Origen**: Serif clásica con cursiva elegante

**Características**:
- Humanista, personal, reflexiva
- La cursiva es el protagonista
- Muy legible en tamaños medianos

**Uso**:
- Citas de coaching/poesía
- Pull quotes
- Subtítulos reflexivos
- Acentos poéticos

**Especificación CSS**:
```css
font-family: 'Cormorant Garamond', serif;
font-style: italic;
font-weight: 400;
line-height: 1.4;
letter-spacing: 0;
```

**Tamaños Recomendados**:
- Citas grandes: 24px
- Citas medianas: 18px
- Acentos pequeños: 14px

**Restricciones**:
- Máximo 2-3 líneas por cita
- Nunca todo un párrafo
- Solo en contextos reflexivos (NO en CTAs o botones)
- No en mobile (tamaño < 16px)

---

### Jerarquía Tipográfica Completa

```
H1 (Cinzel, 52px, Bold)
│
├─ H2 (Cinzel, 32px, Bold)
│  │
│  ├─ H3 (Cinzel, 24px, Bold)
│  │
│  └─ H4 (Cinzel, 18px, Bold)
│
├─ Body (Montserrat, 15px, Regular)
│  │
│  ├─ Énfasis (Montserrat, 15px, 600)
│  │
│  └─ Pequeño (Montserrat, 13px, Regular)
│
├─ Label/Tag (Montserrat, 9px, 600, uppercase)
│
└─ Cita/Poesía (Cormorant Garamond, 24px, Italic)
```

---

## COMPONENTES UI

### Botones

#### Variante Primaria (Primary CTA)

**Estilo**: Fondo Violet Core, texto blanco

```css
background: #4C3AAF;
color: #FFFFFF;
padding: 12px 24px;
border-radius: 4px;
border: none;
font-family: 'Montserrat', sans-serif;
font-size: 11px;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 0.15em;
cursor: pointer;
transition: all 0.2s ease;
```

**Estados**:
- **Hover**: Brightness +10% (más claro)
- **Active**: Violet Mid (#7B62D4)
- **Disabled**: Opacity 50%, cursor: not-allowed

**Uso**: Acciones principales (Explorar, Comenzar, Enviar)

---

#### Variante Secundaria (Secondary CTA)

**Estilo**: Border Midnight, texto Midnight, fondo transparent

```css
background: transparent;
color: #0D0D1A;
padding: 12px 24px;
border-radius: 4px;
border: 1.5px solid #0D0D1A;
font-family: 'Montserrat', sans-serif;
font-size: 11px;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 0.15em;
cursor: pointer;
transition: all 0.2s ease;
```

**Estados**:
- **Hover**: Background Off-White (#F7F6FF)
- **Active**: Background Violet Pale (#EAE5FF)
- **Disabled**: Opacity 50%

**Uso**: Acciones secundarias (Más información, Cancelar, Saltar)

---

#### Variante Blue (Data/Secondary)

**Estilo**: Fondo Blue Core, texto blanco

```css
background: #2449C0;
color: #FFFFFF;
padding: 12px 24px;
border-radius: 4px;
border: none;
font-family: 'Montserrat', sans-serif;
font-size: 11px;
font-weight: 600;
text-transform: uppercase;
```

**Uso**: CTAs de datos, links prominentes, acciones secundarias

---

### Tags/Etiquetas

Elementos pequeños que clasifican o etiquetan contenido.

#### Tag Violeta

```css
background: #EAE5FF;
color: #2A1F5C;
padding: 5px 12px;
border-radius: 100px;
font-family: 'Montserrat', sans-serif;
font-size: 9px;
font-weight: 600;
text-transform: uppercase;
letter-spacing: 0.18em;
```

#### Tag Azul

```css
background: #C8D8FF;
color: #1A2F6E;
```

#### Tag Oscuro

```css
background: #0D0D1A;
color: #FFFFFF;
```

**Uso**: Categorizaciones, topics, metadata

---

### Cards

#### Card Clara (Light/Default)

```css
background: #F7F6FF;
border-radius: 12px;
padding: 28px;
border: 0.5px solid #EAE5FF;
border-left: 3px solid #4C3AAF; /* Acento violeta */
```

**Contenido**:
```
[Kicker en Montserrat, 9px, uppercase, color Violet Mid]
[Título en Cinzel, 18px, bold]
[Descripción en Montserrat, 13px, color gris medio]
```

#### Card Oscura (Dark Variant)

```css
background: #0D0D1A;
border-radius: 12px;
padding: 28px;
border: none;
border-left: 3px solid #7B62D4; /* Acento Violet Light */
```

**Contenido**:
```
[Kicker en Montserrat, 9px, uppercase, color Violet Light]
[Título en Cinzel, 18px, bold, color Blanco]
[Descripción en Montserrat, 13px, color gris claro]
```

**Uso**: Agrupar conceptos, destacar módulos, contener secciones

---

### Código/Bloques Técnicos

```css
background: #EAE5FF; /* o #F7F6FF en contexto claro */
border-radius: 8px;
padding: 16px;
border-left: 3px solid #4C3AAF;
font-family: 'JetBrains Mono', monospace;
font-size: 12px;
color: #0D0D1A;
line-height: 1.6;
overflow-x: auto;
```

**Uso**: Prompts, snippets de código, comandos técnicos

---

## ESPACIADO Y GRID

### Sistema de Espaciado

Usa múltiplos de 4px como base (escala modular).

```
--spacing-xs:  4px   (bordes internos muy pequeños)
--spacing-sm:  8px   (gaps pequeños)
--spacing-md:  12px  (gaps normales)
--spacing-lg:  16px  (gaps grandes)
--spacing-xl:  24px  (separación de secciones)
--spacing-2xl: 32px  (separación grande de bloques)
--spacing-3xl: 48px  (separación entre secciones)
--spacing-4xl: 64px  (separación principal)
```

### Grid

**Desktop** (>1024px):
```
Contenedor: max-width 1200px, margin: 0 auto
Columnas: 12 columnas, gap 16px
Padding lateral: 40px
```

**Tablet** (768px - 1024px):
```
max-width 100%
Padding lateral: 28px
Columnas: Flexible (2-3)
```

**Mobile** (<768px):
```
max-width 100%
Padding lateral: 16px
Columnas: 1 (full-width)
```

---

## ESTADOS E INTERACTIVIDAD

### Estados de Link

```css
/* Default */
color: #2449C0;
text-decoration: underline;

/* Hover */
color: #5B82E8;
text-decoration: underline;
opacity: 0.8;

/* Active */
color: #4C3AAF;
text-decoration: underline;

/* Visited */
color: #2A1F5C;
```

### Estados de Input

```css
/* Default */
border: 1px solid #EAE5FF;
background: #FFFFFF;
color: #0D0D1A;

/* Focus */
border-color: #4C3AAF;
outline: none;
box-shadow: 0 0 0 3px rgba(76, 58, 175, 0.1);

/* Error */
border-color: #EF4444;
background: rgba(239, 68, 68, 0.05);

/* Disabled */
background: #F7F6FF;
color: #8B8BA8;
cursor: not-allowed;
```

### Hover Effects

**Buttons**: Cambio de color + cursor pointer
**Links**: Underline + color change
**Cards**: Subtle shadow lift, border-color change
**Transitions**: 0.2s ease (nunca instantáneo)

---

## ELEMENTOS GRÁFICOS

### Sistema Orbital

El elemento orbital (anillo + puntos) es central en la marca. Aparece en:
- Wordmark (integrado en tipografía)
- Decorativos (patrones de fondo)
- Iconografía minimalista

**Especificación**:
- Anillo: Stroke 2-3px, color Violet Mid o Violet Core
- Puntos: Diameter 6-8px, color según contexto
- Separación: Equidistante, máximo 5 puntos

---

### Patrones de Fondo

#### Constelaciones (Minimalista)

Usa puntos conectados en color Violet Mid (#7B62D4) o Deep Violet (#2A1F5C) sobre Off-White o fondo oscuro.

```
Opacidad: 10-20%
Tamaño de punto: 3-6px
Espaciado: Aleatorio / pseudo-grid
Uso: Fondos de secciones, bordes decorativos
```

#### Líneas Geométricas

Líneas sutiles que sugieren movimiento (énfasis en dirección).

```
Grosor: 1-2px
Color: Violet Pale o Blue Pale
Opacidad: 10-15%
Ángulo: 45°, vertical, o según contexto
```

---

## APLICACIONES VISUALES

### Hero Section

```
[Fondo oscuro (Midnight)]
  ├─ Headline en Cinzel, 52px, blanco
  ├─ Subtítulo en Montserrat, 15px, Violet Light
  ├─ Botón primario (Violet Core)
  └─ [Opcional] Elemento visual (patrón orbital)
```

### Card Grid (Inicio)

```
[Fondo Off-White]
4 cards en 2x2 (desktop) o 1x4 (mobile)
├─ Cada card con acento violeta izquierdo
├─ Kicker + Título + Descripción
└─ [Opcional] Link implícito (card clickeable)
```

### Post/Article Layout

```
[Fondo Blanco o Off-White]
  ├─ Breadcrumb (Montserrat, 9px)
  ├─ Category Tag (Tag Violeta)
  ├─ Título en Cinzel
  ├─ Subtítulo en Montserrat, 13px, gris
  ├─ Body copy (Montserrat, 15px, line-height 1.6)
  ├─ Pull quote en Cormorant Garamond, 24px
  └─ CTA (Botón o Link)
```

### Sidebar/Navigation

```
[Fondo Navy Dark (#141428) o Off-White]
  ├─ Logo IM ROMA (Cinzel)
  ├─ Buscador (Input con border Violet)
  ├─ Links (Montserrat, 12px, uppercase)
  │  └─ Active: Background Violet Pale, color Violet Core
  └─ Botón secundario (descargar, contacto)
```

---

## REGLAS DE USO

### ✓ CORRECTO

- Usar Cinzel solo para títulos (nunca para body)
- Mezclar Montserrat + Cormorant (body + citas)
- Aplicar violeta como acento, no como fondo extenso
- Mantener contraste 4.5:1 mínimo (WCAG AA)
- Usar Off-White en lugar de Blanco para fondos largos
- Un solo acento (violeta O azul) por sección
- Respetar spacing scale (4px múltiplos)
- Bordes redondeados: 4px o 12px (nunca 8px)

### ✗ EVITAR

- Violeta sobre violeta (bajo contraste)
- Más de dos familias tipográficas en una pieza
- Verde en cualquier contexto (excluido del sistema)
- Fondos muy saturados (limitar a acentos)
- Textos pequeños en Cinzel (ilegible < 16px)
- Cormorant en bloques de texto (solo citas)
- Múltiples acentos simultáneamente (causa confusión visual)
- Transiciones > 0.3s (se sienten lentas)
- Box-shadow agresivas (mantener sutileza)
- Líneas grises genéricas (usar colores del sistema)

---

## CHECKLISTS DE IMPLEMENTACIÓN

### Pre-Desarrollo

```
☐ Variables CSS configuradas (colores, spacing, tipografía)
☐ Fuentes importadas (Cinzel, Montserrat, Cormorant Garamond)
☐ Reset CSS aplicado (margin/padding: 0)
☐ Paleta en archivo de referencia visual
☐ Breakpoints definidos (1024px, 768px, <768px)
```

### Desarrollo

```
☐ Todos los botones con 3 estados (default, hover, active)
☐ Links con color y underline correcto
☐ Cards responsive (2x2 → 1x4 según pantalla)
☐ Inputs con focus state visible
☐ Espaciado consistente (basado en scale de 4px)
☐ Tipografía en jerarquía correcta
☐ Contraste de colores verificado (WebAIM)
```

### Post-Desarrollo

```
☐ Testeado en Chrome, Safari, Firefox
☐ Testeado en iPhone (mobile viewport)
☐ Testeado en iPad (tablet viewport)
☐ Tiempo de carga < 2s
☐ Imágenes optimizadas
☐ Tipografía renders correctamente
☐ Colores exactos a especificación (#hex)
☐ Links funcionan (no 404s)
☐ Formularios (si aplica) validados
```

### Accesibilidad

```
☐ Relación de contraste 4.5:1 mínimo
☐ Botones con min. 44x44px (mobile touch)
☐ Focus visible en navegación por teclado
☐ Alt text en imágenes
☐ Headings en orden (h1 → h2 → h3, nunca saltar)
☐ Color no es único indicador (ej: rojo para error + texto)
```

---

## REFERENCIAS RÁPIDAS

### Hex Color Cheatsheet

```
Estructura:     #0D0D1A (Midnight) | #141428 (Navy) | #F7F6FF (Off-White)
Violeta:        #2A1F5C (Deep) | #4C3AAF (Core) | #7B62D4 (Mid) | #B8A4F0 (Light) | #EAE5FF (Pale)
Azul:           #1A2F6E (Cobalt) | #2449C0 (Core) | #5B82E8 (Light) | #C8D8FF (Pale)
```

### Tipografía Cheatsheet

```
Display:  font-family: 'Cinzel', serif;
Body:     font-family: 'Montserrat', sans-serif;
Acento:   font-family: 'Cormorant Garamond', serif; font-style: italic;
```

### Spacing Cheatsheet

```
xs:  4px   | sm:  8px   | md:  12px  | lg:  16px
xl: 24px   | 2xl: 32px  | 3xl: 48px  | 4xl: 64px
```

---

## 📚 VERSIONADO

**Versión**: 1.0  
**Última actualización**: Junio 2026  
**Creado para**: IM ROMA Creative Ecosystem  
**Responsable**: Diana (Graphic Designer & Digital Strategist)

**Próximas iteraciones**:
- Dark mode variables refinadas
- Animation guidelines
- Micro-interactions documentation
- Component library en Figma
