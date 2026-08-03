# Sierra Language Academy

Static multipage landing site for Sierra Language Academy, built with Astro.

## Stack

- Astro static output
- Plain CSS
- Web3Forms-ready contact form
- WhatsApp-first conversion flow

## Local Development

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
```

When the key is not configured, the form falls back to a prepared WhatsApp message.

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
