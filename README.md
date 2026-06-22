# sreeram-ganesan — Personal Portfolio

My personal portfolio and interactive engineering showcase, built with Next.js 15 App Router, TypeScript, and Tailwind CSS.

---

## Stack

| Layer | Tech |
|---|---|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v3 |
| Email | Resend |
| Analytics | Vercel Analytics + Speed Insights |
| Deploy | Vercel |
| Package manager | pnpm |

---

## Project structure

```
app/
  page.tsx                  # Home (Hero → About → Skills → Experience → Projects → Lab → Contact)
  layout.tsx                # Root layout, fonts, analytics
  lab/
    ai-lab/                 # AI Lab — Resume Matcher, Arch Advisor, Coming Soon
    how-web-works/          # Animated URL-to-render journey
    performance/            # Live Core Web Vitals monitor
  api/
    contact/route.ts        # Contact form API route (Resend)

components/
  Nav.tsx
  Footer.tsx
  RevealInit.tsx            # IntersectionObserver for scroll animations
  sections/
    Hero.tsx                # Particle canvas + typewriter
    About.tsx               # Profile photo, domain pills, cert link
    Skills.tsx
    Experience.tsx          # Timeline
    Projects.tsx            # Work achievements + personal/OSS
    LabSection.tsx          # Interactive Experiments cards
    Contact.tsx             # Social links + contact form

lib/
  data.ts                   # Single source of truth for all site content

public/
  profile.jpg
  examples/
    digest.html             # Sample output from sreeram-agent-crew daily digest
    price-alert.html        # Price alert push notification mockup
```

---

## Getting started

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # Production build
```

---

## Features

- **Hero** — Particle canvas with mouse repulsion, typewriter cycling through roles
- **About** — Profile photo, domain expertise pills (Healthcare · Retail · AI), GCP certification link
- **Skills** — Frontend, Backend, AI/Agents, Cloud & DevOps toolkit
- **Experience** — Timeline with current-role pulse indicator
- **Projects** — Work achievements with live/archived status badges + personal OSS projects
- **Interactive Lab**
  - *How the Web Works* — Animated 7-step URL-to-render explainer
  - *AI Lab* — Resume Matcher (keyword scoring), Architecture Advisor (pattern recommender), Coming Soon roadmap
  - *Performance Monitor* — Real FCP/TTFB/Waterfall from the browser's Performance API
- **Contact** — Social links + form backed by Resend API route (email never exposed publicly)

---

## Personal projects featured

| Project | Description |
|---|---|
| [sreeram-agent-crew](https://github.com/sreeramg-hub/sreeram-agent-crew) | Multi-agent AI crew for daily precious metals digest + price alerts (CrewAI + Claude + GitHub Actions) |
| [sreeram-agent-skills](https://github.com/sreeramg-hub/sreeram-agent-skills) | Reusable agentic patterns — YouTube RSS watcher, caption transcriber, attributed-sentiment prompting |
| [Splanner](https://github.com/sreeramg-hub/sprint-hub) | Real-time Planning Poker for agile teams (Next.js 15 + Supabase) |
