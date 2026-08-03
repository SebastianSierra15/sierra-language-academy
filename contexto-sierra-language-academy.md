# Contexto del Proyecto: Sierra Language Academy

## Resumen

El proyecto consiste en crear una landing page sencilla, sin base de datos, para **Sierra Language Academy**, una academia/profesor de idiomas dirigida por **Cristian Sierra**.

La página debe funcionar como una presencia profesional online para ofrecer clases de idiomas y preparación de exámenes. El objetivo principal es convertir visitantes en contactos por **WhatsApp**, email o reservas de una consulta gratuita.

Sitio/prototipo original revisado:

- https://sierralanguageacademy.base44.app/

## Contexto Inicial

El prototipo actual ya tiene una identidad visual definida:

- Marca: **Sierra Language Academy**
- Logo dorado sobre fondo oscuro.
- Símbolo con letra **S**, pluma y burbuja de conversación.
- Estética premium/académica.
- Idiomas ofrecidos:
  - English
  - French
  - Spanish
  - Italian
  - Portuguese
- Exámenes:
  - CELPIP
  - IELTS
  - TEF
  - TCF
- Contacto visto en el prototipo:
  - Email: `thehispaniclinguist@gmail.com`
  - WhatsApp: `+1 403 680 3870`
  - Ubicación: Victoria, British Columbia, Canada

El prototipo actual se ve funcional, pero la idea es mejorarlo visualmente con:

- Mejor UI.
- Mejor UX.
- Mejor jerarquía visual.
- Mejor paleta de colores.
- Una estética más moderna, agradable y profesional.
- Menos sensación de plantilla genérica.

## Cotización Recomendada

Se recomendó cobrar con descuento familiar, considerando que el desarrollador es junior, vive en Colombia y el cliente es su hermano.

Precio recomendado:

- **$600.000 COP a $750.000 COP**

Incluye:

- Landing responsive.
- Diseño basado en el prototipo actual.
- Secciones principales: inicio, servicios/idiomas, metodología, testimonios, FAQ y contacto.
- Botón de WhatsApp.
- Formulario simple sin base de datos.
- SEO básico.
- Deploy.
- Conexión de dominio.
- 1 o 2 rondas de cambios.

Opciones sugeridas:

| Opción | Incluye | Precio recomendado | Tiempo |
|---|---|---:|---:|
| Básica | One-page sencilla, WhatsApp, contacto, responsive, deploy | $350.000 - $500.000 COP | 2-3 días |
| Recomendada | Landing pulida con 6-8 secciones, formulario real, SEO básico, dominio/deploy | $600.000 - $750.000 COP | 4-6 días |
| Completa | Parecida al prototipo multipágina actual, con páginas separadas y booking tipo Calendly | $900.000 - $1.300.000 COP | 7-10 días |

## Hosting y Dominio

La página no necesita base de datos.

Opciones de hosting:

- **Cloudflare Pages**: buena opción gratuita para landing estática.
- **Netlify Free**: buena opción gratuita para sitios estáticos con dominio personalizado.
- **Vercel**: técnicamente sirve muy bien para una landing, pero el plan Hobby es para uso personal/no comercial; para negocio formal, Vercel recomienda Pro.

Costos externos aproximados:

- Dominio `.com`: aprox. **$35.000 - $70.000 COP/año**, según registrador.
- Hosting estático: puede ser **$0** si se usa Cloudflare Pages o Netlify Free.

## Dirección Visual Definida

Se definieron 3 rutas visuales para pedirle a Stitch diseños diferentes:

### 1. Premium Academic

Paleta:

- Navy profundo: `#07162C`
- Ivory: `#F8F3EA`
- Dorado elegante: `#C9A227`
- Verde salvia: `#6E8B6F`
- Tinta: `#101828`

Sensación:

- Academia boutique.
- Seria.
- Elegante.
- Confiable.
- Profesional.

### 2. Modern Global Learning

Paleta:

- Teal profundo: `#0F4C5C`
- Cream: `#FFF7E8`
- Coral suave: `#E76F51`
- Sky blue: `#8ECAE6`
- Gold: `#D4A017`

Sensación:

- Internacional.
- Fresca.
- Amigable.
- Cálida.
- Moderna.

### 3. Minimal Luxury

Paleta:

- Charcoal: `#0B0B0D`
- Warm white: `#FAF7F0`
- Champagne gold: `#D6B15E`
- Slate blue: `#23364D`
- Emerald: `#1F7A5B`

Sensación:

- Sofisticada.
- Limpia.
- Premium.
- Espaciosa.
- Menos pesada que una página completamente negra/dorada.

## Prompt Para Stitch

Este es el prompt final recomendado para pegar en Stitch:

```text
Design 3 distinct high-fidelity landing page concepts for “Sierra Language Academy”, an online multilingual academy by Cristian Sierra.

Use the attached logo as the main brand reference: elegant gold, deep navy/black, speech bubble, feather pen, refined serif typography, premium academic feeling. The current prototype feels too generic and visually heavy, so redesign it with better UI, UX, hierarchy, spacing, color balance, and a more polished modern look.

The landing page is for an online language teacher/academy offering English, French, Spanish, Italian, and Portuguese lessons, plus CELPIP, IELTS, TEF, and TCF exam preparation.

Create 3 clearly different visual directions:

1. Premium Academic
Palette: deep navy #07162C, warm ivory #F8F3EA, elegant gold #C9A227, sage green #6E8B6F, ink #101828.
Feeling: boutique academy, elegant, academic, trustworthy, professional.

2. Modern Global Learning
Palette: deep teal #0F4C5C, cream #FFF7E8, soft coral #E76F51, sky blue #8ECAE6, gold #D4A017.
Feeling: fresh, international, friendly, warm, active, modern.

3. Minimal Luxury
Palette: charcoal #0B0B0D, warm white #FAF7F0, champagne gold #D6B15E, slate blue #23364D, emerald #1F7A5B.
Feeling: sophisticated, clean, calm, premium, spacious, less dark/heavy than the current prototype.

For each concept, include:
- Desktop landing page design.
- Mobile responsive version.
- Sticky top navigation with logo, links, and primary CTA.
- Hero section with strong headline, short value proposition, language/exam badges, and CTA buttons.
- Visual area showing online learning, multilingual communication, or a premium study environment.
- Sections for benefits, languages offered, exam preparation, methodology, testimonials, FAQ preview, and final contact CTA.
- Contact options: WhatsApp, email, and “Book a free consultation”.
- No database, no dashboard, no login, no ecommerce.

Main conversion goal:
Get visitors to send a WhatsApp message or book a free consultation.

UX requirements:
- The first screen must immediately explain what the academy offers.
- Use clear CTA hierarchy: primary CTA “Book Free Consultation”, secondary CTA “Explore Programs”.
- Keep text readable with strong contrast.
- Do not overuse gold; use it only for highlights, icons, dividers, buttons, and premium accents.
- Avoid a fully black page unless it is the Minimal Luxury concept, and even there use warm surfaces and enough breathing room.
- Avoid generic stock-photo feeling.
- Use elegant cards, clean iconography, soft shadows, and strong spacing.
- Make the design feel polished enough for a real premium language academy.

Typography:
- Elegant serif for headings, similar to Cormorant Garamond or Playfair Display.
- Clean sans-serif for body text, similar to Inter, Manrope, or Source Sans 3.
- Avoid overly decorative fonts.

Suggested copy:
Headline options:
“Learn Languages. Unlock Opportunities.”
“Personalized Online Language Lessons for Real-World Goals.”
“Speak With Confidence. Study With Purpose.”

Supporting copy:
“Private and small-group online lessons in English, French, Spanish, Italian, and Portuguese. Exam preparation for CELPIP, IELTS, TEF, and TCF.”

Primary CTA:
“Book Free Consultation”

Secondary CTA:
“Explore Programs”

Brand tone:
Premium, warm, trustworthy, international, human, academic, modern.

Important:
The 3 proposals must look clearly different from each other while still respecting the Sierra Language Academy brand and logo.
```

## Lo Que Se Implementó En Este Workspace

Aunque la intención final era obtener un prompt para Stitch, también se implementó una página comparativa funcional con las 3 rutas visuales.

La página creada contiene:

- Una landing comparativa con los 3 conceptos:
  - Premium Academic.
  - Modern Global Learning.
  - Minimal Luxury.
- Logo real integrado.
- Navegación superior.
- Hero por cada concepto.
- Badges de idiomas y exámenes.
- CTAs:
  - `Book Free Consultation`
  - `Explore Programs`
  - WhatsApp
  - Email
- Secciones:
  - Beneficios.
  - Metodología.
  - Testimonios.
  - FAQ.
  - CTA final.
- Diseño responsive.
- Build validado.

URL privada de producción generada:

- https://sierra-language-academy-concepts.sebasirra.chatgpt.site

Nota:

- La URL puede requerir autorización porque fue publicada como sitio privado.

## Archivos Relevantes

Archivos principales modificados/creados:

- `app/page.tsx`: contenido de la landing comparativa.
- `app/globals.css`: estilos, paletas y responsive.
- `app/layout.tsx`: metadatos, favicon y fuentes.
- `public/sierra-logo.png`: logo usado en la página.
- `.openai/hosting.json`: configuración del proyecto de Sites.

Capturas generadas:

- `outputs/sierra-desktop.png`
- `outputs/sierra-mobile.png`
- `outputs/sierra-mobile-full.png`

## Validaciones Realizadas

Se ejecutó:

- `npm run build`

Resultado:

- Build completado correctamente.

También se hicieron capturas con Playwright para revisar:

- Vista desktop.
- Vista mobile.
- Vista mobile full page.

## Próximos Pasos Recomendados

1. Pasar el prompt a Stitch junto con el logo.
2. Elegir uno de los 3 diseños que entregue Stitch.
3. Ajustar copy final:
   - Nombre exacto del profesor.
   - País/ciudad objetivo.
   - Testimonios reales.
   - Precios o paquetes si se quieren mostrar.
4. Implementar la landing final basada en el diseño elegido.
5. Conectar:
   - WhatsApp real.
   - Email real.
   - Calendly, Google Calendar o formulario simple si se necesita agenda.
6. Comprar dominio.
7. Desplegar en Cloudflare Pages, Netlify o Vercel.

## Decisiones Tomadas

- La página será principalmente en inglés, porque el prototipo actual está en inglés y la academia apunta a estudiantes internacionales.
- No se usará base de datos.
- El objetivo principal será contacto por WhatsApp o reserva de consulta gratuita.
- El dorado del logo se conserva como acento, no como color dominante.
- Se evita una página completamente negra/dorada porque puede sentirse pesada.
- Se recomienda una estética premium, pero cálida y legible.

