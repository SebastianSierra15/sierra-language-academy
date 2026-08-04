# Sierra Language Academy

Static multipage landing site for Sierra Language Academy, built with Astro.

## Stack

- Astro static output
- Plain CSS
- Web3Forms-ready contact form
- WhatsApp-first conversion flow

## Local Development

From the parent workspace folder, enter the repository first:

```bash
cd sierra-language-academy
```

Then install and run the site:

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

## Contact Form

The form is wired for Web3Forms through:

```bash
PUBLIC_WEB3FORMS_ACCESS_KEY=
PUBLIC_SITE_URL=https://sierra-language-academy.sierralanguageacademy2026.workers.dev
```

When the key is not configured, the form falls back to a prepared WhatsApp message.

`PUBLIC_SITE_URL` should be changed to the final production domain before deployment so canonical URLs, sitemap, robots, Open Graph, Twitter cards, and JSON-LD use the real domain.

## Deployment

Recommended hosting: Cloudflare Pages.

Build command:

```bash
npm run build
```

Output directory:

```bash
dist
```
