# Sreeram Ganesan — Personal Website
## Claude Code Project Context

This is Sreeram Ganesan's personal portfolio website built with **Next.js 15 App Router + Tailwind CSS**.
It deploys automatically to Vercel on every merge to `main`.

---

## Tech Stack
- **Framework**: Next.js 15 (App Router, React Server Components)
- **Styling**: Tailwind CSS v3 — dark-mode-first, blue accent palette
- **Language**: TypeScript (strict mode)
- **Analytics**: Vercel Analytics + Speed Insights (zero-config)
- **Fonts**: Inter (body) + Fira Code (mono) via `next/font/google`
- **Deploy**: Vercel — auto on push to `main`

---

## File Structure
```
app/
  layout.tsx              Root layout (Nav, Footer, Analytics)
  page.tsx                Home (all sections)
  not-found.tsx           404 page
  lab/
    page.tsx              Lab hub
    how-web-works/        Animated explainer (client component)
    ai-lab/               AI demos (client component)
    performance/          Live Web Vitals (client component)

components/
  Nav.tsx                 Sticky nav (client — needs scroll)
  Footer.tsx              Simple footer (server)
  RevealInit.tsx          IntersectionObserver wiring (client)
  sections/
    Hero.tsx              Particle canvas + typewriter (client)
    About.tsx             Bio + domain expertise + stats (server)
    Skills.tsx            Tech grid (server)
    Experience.tsx        Timeline (server)
    Projects.tsx          Project cards (server)
    LabSection.tsx        Lab cards (server)
    Contact.tsx           Links only — no personal contact info (server)

lib/
  data.ts                 ALL site content lives here — edit this first
```

---

## Key Rules
1. **All content changes go in `lib/data.ts`** — never hardcode strings in components.
2. **Colour palette**: Blue only. `blue-400 / blue-500 / blue-600`. No purple.
   - Text gradient: `.text-gradient` utility class (globals.css)
   - Dark backgrounds: `surface-950 / surface-900 / surface-800`
3. **No personal contact info on the site** — LinkedIn and GitHub only.
4. **Server Components by default** — add `'use client'` only when the component uses hooks, browser APIs, or event listeners.
5. **Accessibility**: All interactive elements need `aria-label` where icon-only. Colour contrast ratio ≥ 4.5:1.

---

## Common Tasks

### Add a new project
Edit `lib/data.ts` → `PROJECTS` array. Add `{ icon, name, desc, tech, status }`.

### Add a new Lab page
1. Create `app/lab/your-page/page.tsx` (server, metadata export)
2. Create `app/lab/your-page/YourPageClient.tsx` (client, actual UI)
3. Add entry to `LAB_ITEMS` in `lib/data.ts`

### Update contact links
Edit `lib/data.ts` → `CONTACT.links` and `SITE.linkedin` / `SITE.github`.

### Change the typewriter phrases
Edit `lib/data.ts` → `HERO.typewriterPhrases`.

---

## Dev Commands
```bash
pnpm dev       # Start local dev server → http://localhost:3000
pnpm build     # Production build (run before PR)
pnpm lint      # ESLint check
```

---

## Git Workflow
```
main  ──── always deployable, auto-deploys to production
  └── feature/your-change  ← work here, open PR, preview URL auto-generated
```
Never push directly to `main`. Always open a PR.
