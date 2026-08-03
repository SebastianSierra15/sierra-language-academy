# AGENTS.md

## Project Context

Sierra Language Academy is a static multipage landing site for a premium online language academy led by Cristian Sierra. The page is written in English and targets learners interested in online language lessons and exam preparation.

Core business facts:

- Brand: Sierra Language Academy.
- Style: white/ivory base with black/charcoal sections and restrained gold accents.
- Languages: English, French, Spanish, Italian, and Portuguese.
- Exams: CELPIP, IELTS, TEF, and TCF.
- Main conversion channel: WhatsApp `+1 (403) 680-3870`.
- WhatsApp URL number: `14036803870`.
- Lead form: Web3Forms via `PUBLIC_WEB3FORMS_ACCESS_KEY`.
- Lead email target for setup: `sebsirra13@gmail.com`.
- Prices are shown in CAD: `$120`, `$440`, `$1100`.
- Recommended future hosting: Cloudflare Pages.

The form must work without a configured Web3Forms key by falling back to a prepared WhatsApp message. Do not add a database, login, dashboard, ecommerce checkout, or payment provider unless explicitly requested.

## Architecture

Keep the project simple, static, and easy to maintain.

- `src/data/site.ts` is the source of truth for business data, CTAs, prices, WhatsApp messages, nav links, languages, exams, methodology, testimonials, and FAQ content.
- `src/pages/*` should compose pages from shared data and components. Avoid duplicating contact numbers, emails, prices, or WhatsApp messages inside page files.
- `src/components/*` should contain reusable presentation and interaction components such as header, footer, page hero, and contact form.
- `src/layouts/BaseLayout.astro` owns shared document structure, metadata defaults, header/footer inclusion, and small global browser interactions.
- `src/styles/global.css` owns design tokens, layout primitives, responsive behavior, and component classes.
- `public/assets/*` contains production assets used by the site. Do not keep duplicate source media folders in the repository.

Treat the architecture as a static-site version of Clean Architecture:

- Business rules and content stay in `src/data`.
- UI components render data and expose minimal behavior.
- Pages orchestrate sections but should not become data stores.
- Browser scripts should be small, progressive enhancements.
- External service details must be isolated and configurable.

## Code Quality Rules

- Keep the site static and dependency-light.
- Prefer Astro components and plain CSS before adding client-side frameworks.
- Do not introduce React, Vue, Svelte, Tailwind, animation libraries, or icon libraries unless a task clearly needs them.
- Keep functions small and named by intent.
- Avoid hardcoded business facts outside `src/data/site.ts`.
- Avoid unsupported marketing claims such as pass rates, success rates, or guaranteed outcomes unless the client provides proof.
- Keep accessibility in mind: semantic HTML, descriptive links, labels for form fields, usable keyboard navigation, and strong contrast.
- Keep animations simple and non-blocking. Content must be visible even if JavaScript fails or animations do not run.
- Maintain responsive behavior for mobile and desktop before considering work complete.

## Comments

Write comments in Spanish only where they are explicitly useful to explain a non-obvious decision, tradeoff, or browser behavior.

Good comment example:

```ts
// Mantiene el formulario usable mientras Web3Forms no tenga una key configurada.
```

Avoid comments that merely repeat the code.

## Repository Hygiene

Keep the GitHub repository clean and focused on the deployable project.

- Do not commit `node_modules`, `dist`, `.astro`, `outputs`, `.env`, local screenshots, downloads, prompt drafts, temporary context files, or exploratory notes.
- Do not commit briefing/context files unless the user explicitly asks for project documentation to include them.
- Keep only assets that the site actually imports or serves.
- Store environment examples in `.env.example`, never real secrets.
- Run `npm run build` before committing implementation changes.
- Run `npm audit --audit-level=high` when dependencies change.

## Deployment Notes

Cloudflare Pages setup:

- Build command: `npm run build`
- Output directory: `dist`
- Environment variable needed for real email delivery: `PUBLIC_WEB3FORMS_ACCESS_KEY`

If `PUBLIC_WEB3FORMS_ACCESS_KEY` is missing, the contact form should keep using the WhatsApp fallback.
