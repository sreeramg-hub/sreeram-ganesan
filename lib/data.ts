// ─────────────────────────────────────────────────────────────
// Site content — edit this file to update any text on the site
// ─────────────────────────────────────────────────────────────

export const SITE = {
  name: 'Sreeram Ganesan',
  title: 'Senior Full Stack Engineer',
  email: '', // intentionally blank — contact via LinkedIn/GitHub
  location: 'Chicago, IL',
  linkedin: 'https://www.linkedin.com/in/sreeram-ganesan-92237468/',
  github: 'https://github.com/sreeramg-hub',
  available: false,
}

export const HERO = {
  greeting: "Hi, I'm",
  name: 'Sreeram Ganesan',
  bio: `Full Stack Engineer with 15+ years building high-traffic digital products across
    <strong class="text-white">Retail</strong>, <strong class="text-white">Healthcare</strong>, and the emerging
    <strong class="text-white">AI</strong> space.
    From patient-facing healthcare platforms to omnichannel grocery experiences and multi-agent AI systems —
    I build things that scale, perform, and leave users with the feeling that everything just works.`,
  typewriterPhrases: [
    'Senior Full Stack Engineer',
    'Aspiring Principal Engineer',
    'Generative AI Enthusiast',
    'Retail Domain Specialist',
    'Healthcare Tech Builder',
    'Team Leader & Mentor',
  ],
  domains: [
    { label: '🛒 Retail', desc: 'Grocery, e-commerce, POS' },
    { label: '🏥 Healthcare', desc: 'Dental, medical booking' },
    { label: '🤖 AI', desc: 'Agents, automation' },
  ],
  cta: { primary: 'View My Work', secondary: 'Get In Touch' },
}

export const ABOUT = {
  headline: 'Full Stack Roots,',
  headlineAccent: 'AI-Powered Future',
  paragraphs: [
    `I'm a Senior Full Stack Engineer based in Chicago with 15+ years of experience building digital
    products that genuinely scale. My world spans
    <strong class="text-slate-100">Retail</strong> (grocery, e-commerce, in-store POS systems) and
    <strong class="text-slate-100">Healthcare</strong> (dental patient journeys, treatment tools, booking flows) —
    domains where performance and reliability aren't just nice to have, they're the product.`,

    `Now I'm pushing into <strong class="text-slate-100">AI</strong> — building multi-agent systems with CrewAI and
    Anthropic Claude, exploring the MCP ecosystem, and asking the same question I always ask:
    <em class="text-blue-400">how do we make this actually useful?</em>`,
  ],
  personalNote: `I always start by asking why — why does this problem exist, why is this the solution,
    and what would make it better? When you understand something from its very basics, everything else clicks into place.
    It's true for a React hook, a cloud architecture, or an AI model. That curiosity is what I bring to every project —
    and it's what keeps me genuinely excited to show up every day.`,
  stats: [
    { value: 15, suffix: '+', label: 'Years Experience' },
    { value: 3,  suffix: '',  label: 'Domain Expertise' },
    { value: 5,  suffix: '+', label: 'Companies' },
  ],
  certification: {
    label: 'Google Professional Cloud Developer · Certified Apr 2025–2027',
    href: 'https://www.credly.com/badges/d85b03d6-84db-4b01-afbe-3e9a397466a9/public_url',
  },
}

export const SKILLS = {
  intro: `I pick tools that solve problems, not tools that are trendy.
    Every item in this list was earned in production, at scale.`,
  categories: [
    {
      icon: '⚛️',
      name: 'Frontend & Mobile',
      skills: [
        'React.js', 'Next.js 15', 'Vue.js 2/3', 'TypeScript',
        'JavaScript', 'HTML5 / CSS3', 'Tailwind CSS', 'SCSS/SASS',
        'GraphQL', 'Contentful CMS', 'SEO / Technical SEO',
        'React Native', 'Flutter',
        'Responsive Design', 'Web Performance', 'Core Web Vitals', 'Accessibility (WCAG)',
      ],
    },
    {
      icon: '⚙️',
      name: 'Backend & APIs',
      skills: [
        'Node.js', 'Java / J2EE', 'Spring Boot',
        'Kotlin', 'RESTful APIs', 'GraphQL', 'Microservices', 'SQL',
      ],
    },
    {
      icon: '☁️',
      name: 'Cloud & DevOps',
      skills: [
        'Google Cloud (GCP)', 'AWS', 'Docker',
        'Kubernetes', 'CI/CD Pipelines', 'Vercel', 'Supabase',
        'GitHub Actions', 'Git / GitHub',
      ],
    },
    {
      icon: '🤖',
      name: 'AI & Leadership',
      skills: [
        'Generative AI', 'AI Agents', 'Multi-Agent Systems',
        'CrewAI', 'LLM Integration', 'Prompt Engineering',
        'MCP (Model Context Protocol)', 'Python',
        'System Design', 'Team Mentoring', 'Agile / Scrum', 'Architecture Review',
      ],
    },
  ],
}

export const EXPERIENCE = [
  {
    current: true,
    period: '2023 — Present',
    company: 'The Aspen Group',
    role: 'Senior Software Engineer',
    location: 'Chicago, IL',
    domain: 'Healthcare',
    domainColor: 'text-emerald-400',
    points: [
      'Currently building and enhancing <strong class="text-slate-200">Treatment Navigator</strong> — a digital tool that transforms how patients review and understand their treatment plans — and a <strong class="text-slate-200">Patient Portal</strong> giving Aspen patients a unified hub for their dental health journey.',
      'Led full-stack development on a <strong class="text-slate-200">multi-tenant digital platform</strong> powering Aspen Dental and brands including ClearChoice, WellNow, and Lovet — high-traffic healthcare sites used by millions of patients.',
      'Shipped key product innovations: <strong class="text-slate-200">Dentrino</strong> (AI-enhanced smile simulation) and a multi-brand blog platform migrated from legacy Gatsby to Next.js + Contentful — driving organic traffic growth and improving patient conversion.',
      'Mentored engineers and defined full-stack architecture standards across the team.',
    ],
    tech: ['Next.js', 'React.js', 'GraphQL', 'TypeScript', 'Contentful', 'Node.js'],
  },
  {
    current: false,
    period: 'May 2020 — Jun 2023',
    company: 'Peapod Digital Labs',
    role: 'Software Engineer II → III',
    location: 'Chicago, IL',
    domain: 'Retail / Grocery',
    domainColor: 'text-blue-400',
    points: [
      'Led full-stack engineering for <strong class="text-slate-200">Search, Browse, and Monetization</strong> on the PRISM omnichannel platform — a multi-tenant system powering four major Ahold Delhaize grocery brands.',
      'Drove new revenue by integrating <strong class="text-slate-200">Citrus Ads</strong> — a third-party sponsored ad engine serving placements across search results, category pages, and product carousels.',
      'Improved online grocery conversion through web performance optimisation, SEO page generation, and UX improvements — where a 100ms improvement and smart ad placements translate to measurable revenue.',
      'Promoted to Eng III in 2.5 years; mentored team and led agile delivery improvements.',
    ],
    tech: ['Vue.js 2+', 'Tailwind CSS', 'Kotlin', 'SCSS', 'JavaScript', 'Citrus Ads'],
  },
  {
    current: false,
    period: 'Aug 2016 — Apr 2020',
    company: 'Sears Holdings Corporation',
    role: 'Software Engineer III',
    location: 'Hoffman Estates, IL',
    domain: 'Retail / E-Commerce',
    domainColor: 'text-blue-400',
    points: [
      'Built <strong class="text-slate-200">ShopSears</strong> — an iPad-based mobile POS to replace costly IBM kiosks in Sears stores, enabling associates to scan and complete checkout on the sales floor. Solved EMV chip payment integration via a real-time socket tunnel, enabling $10K+ transactions on-device.',
      'Delivered <strong class="text-slate-200">Cart & Checkout</strong> for sears.com mobile — a micro-frontend showcase where each team owned their tech and handed off only a cart ID at the boundary. Shipped through Thanksgiving war-room-level traffic.',
      'Led migration of backend services to <strong class="text-slate-200">AWS</strong>, improving scalability and system resilience during peak retail events.',
    ],
    tech: ['Angular 2', 'Java / Spring', 'AWS', 'Microservices', 'REST APIs', 'JavaScript'],
  },
  {
    current: false,
    period: 'Jun 2009 — Jul 2016',
    company: 'Mastech Inc / Infosys Ltd',
    role: 'Technology Analyst → Senior Engineer',
    location: 'Chicago / India',
    domain: 'Retail / Enterprise',
    domainColor: 'text-blue-400',
    points: [
      'Collaborated with enterprise retail clients: <strong class="text-slate-200">Sears, JCPenney, Adidas</strong> — from requirements through delivery.',
      'Expert in Retail Mobile POS systems; built web and Android apps used in stores nationwide.',
      '7 years of full-stack development across JavaScript, AngularJS, Java/J2EE, and Android SDK.',
    ],
    tech: ['AngularJS', 'Java / J2EE', 'Spring', 'Android', 'HTML5 / CSS'],
  },
]

export const PROJECTS = [
  // ── Professional Achievements ────────────────────────────────
  {
    icon: '📝',
    company: 'The Aspen Group',
    name: 'Multi-Brand Blog Platform',
    desc: `The dental world had a content problem — blogs trapped on a creaking Gatsby setup, impossible to scale across brands. I led the migration to a Next.js + Contentful architecture built for multi-tenant operation from day one: one content model, infinite brands. SEO climbed, organic traffic followed, and patient conversion went with it. A new blog page across any brand now goes live in minutes. That's what the right architecture unlocks.`,
    tech: ['Next.js', 'Contentful', 'TypeScript', 'SEO', 'Multi-tenant'],
    status: 'live' as const,
    type: 'work' as const,
    links: [
      { label: 'AspenDental', href: 'https://www.aspendental.com/dental-care-resources/why-does-my-tooth-hurt-when-i-run/' },
      { label: 'ClearChoice', href: 'https://www.clearchoice.com/dental-implant-resources/zygomatic-dental-implants/' },
      { label: 'Lovet', href: 'https://www.lovet.com/blog/ear-mites-vs-ear-infection-cats/' },
    ],
  },
  {
    icon: '😁',
    company: 'The Aspen Group',
    name: 'Dentrino — Smile Try-On',
    desc: `What if a patient could see their new smile before the first appointment? Dentrino — a third-party AI-enhanced smile simulation tool — answers that question. I led the end-to-end integration: performance-optimised image handling, a multi-tenant architecture ready to scale across future brands, and a UX delicate enough not to distract from the magic. Dental anxiety is real; showing patients their future smile turns hesitation into action.`,
    tech: ['Next.js', 'TypeScript', 'Image Processing', 'Multi-tenant', 'React'],
    status: 'live' as const,
    type: 'work' as const,
    demo: 'https://www.aspendental.com/smile-try-on/',
  },
  {
    icon: '💰',
    company: 'Peapod Digital Labs',
    name: 'Sponsored Ads Platform',
    desc: `Grocery e-commerce has a margin problem — sponsored ads are part of the answer. I led the full integration of Citrus Ads into the PRISM platform from zero to revenue: sponsored products in search results, category carousels, homepage placements, and a scalable system so a new ad spot never required a code deploy. Along the way: reverse proxies, CloudFlare routing, secure third-party API handshakes, and enough edge cases to fill a postmortem. Every one solved. (The brilliant folks at Peapod later built their own in-house ads engine and migrated away — so this integration is no longer live, but the engineering lessons are very much alive.)`,
    tech: ['Vue.js', 'Citrus Ads', 'Reverse Proxy', 'CloudFlare'],
    status: 'legacy' as const,
    type: 'work' as const,
  },
  {
    icon: '🛍️',
    company: 'Peapod Digital Labs',
    name: 'Browse Aisles & Hero Banner',
    desc: `A complete overhaul of how grocery shoppers navigate online — bringing the in-store aisle-browsing experience to the browser. I helped architect the Browse Aisles feature from the ground up, working closely with the design team to model the category hierarchy into a system that was multi-tenant, scalable, and intuitive across four grocery brands. The Hero Banner brought its own challenge: high-traffic, large images, real performance stakes. Solved with Intersection Observer, lazy loading, and a thoughtful image delivery pipeline. The kind of work where you see the before, the after, and understand exactly why it matters.`,
    tech: ['Vue.js', 'Intersection Observer', 'Lazy Loading', 'Multi-tenant', 'Kotlin'],
    status: 'live' as const,
    type: 'work' as const,
    links: [
      { label: 'Stop & Shop', href: 'https://stopandshop.com/home' },
      { label: 'S&S Aisles', href: 'https://stopandshop.com/browse-aisles/categories/1/categories/921-deli-prepared-food' },
      { label: "Martin's Foods", href: 'https://martinsfoods.com/' },
      { label: "Martin's Aisles", href: 'https://martinsfoods.com/browse-aisles/categories/1/categories/85-bread-bakery' },
    ],
  },
  {
    icon: '🏪',
    company: 'Sears Holdings',
    name: 'ShopSears — Mobile POS',
    desc: `Long before Apple Pay ruled checkout counters, Sears put an iPad in every associate's hands and reinvented in-store checkout. I was part of the team that built ShopSears — a full mobile POS to replace costly IBM kiosks. When the industry shifted to EMV chip payments, the hardware couldn't keep up. So we engineered a real-time socket tunnel between the iPad and the store's existing payment device. The result: a customer confidently completing a $13K transaction on an iPad without missing a beat. Unfortunately, Sears stores have since closed — but the innovation lives on in every mobile checkout you see at retailers today. Sears was just early.`,
    tech: ['Angular', 'Spring', 'Socket.io', 'EMV Payments', 'iPad / iOS'],
    status: 'legacy' as const,
    type: 'work' as const,
  },
  {
    icon: '🛒',
    company: 'Sears Holdings',
    name: 'Sears.com Cart & Checkout',
    desc: `A quiet lesson in how large-scale frontend architecture should work. Each team on sears.com owned their tech stack end to end — we owned Cart & Checkout, received a cart ID at the boundary, and handed a completed order back out. Users never felt the seams. Shipped through Thanksgiving war-room-level traffic with dashboards, monitoring systems, and the CEO watching. That kind of pressure teaches you what resilient architecture actually means.`,
    tech: ['Angular 2', 'AWS', 'Java / Spring', 'Microservices', 'REST APIs'],
    status: 'legacy' as const,
    type: 'work' as const,
    links: [
      { label: 'sears.com/cart', href: 'https://www.sears.com/cart' },
    ],
  },
  // ── Open Source / Personal ───────────────────────────────────
  {
    icon: '🤖',
    name: 'sreeram-agent-crew',
    desc: 'Multi-agent AI crew that monitors markets & YouTube channels, synthesises expert opinions with full attribution, and delivers a daily HTML digest email. Runs free on GitHub Actions.',
    tech: ['CrewAI', 'Python', 'Claude', 'GitHub Actions'],
    status: 'live' as const,
    type: 'personal' as const,
    github: 'https://github.com/sreeramg-hub/sreeram-agent-crew',
    links: [
      { label: 'Daily Digest',  href: '/examples/digest.html' },
      { label: 'Price Alert',   href: '/examples/price-alert.html' },
    ],
  },
  {
    icon: '🧩',
    name: 'sreeram-agent-skills',
    desc: 'Reusable agentic patterns extracted from sreeram-agent-crew — YouTube RSS watcher, caption transcriber, attributed-sentiment prompting, and more.',
    tech: ['Python', 'CrewAI', 'Claude'],
    status: 'live' as const,
    type: 'personal' as const,
    github: 'https://github.com/sreeramg-hub/sreeram-agent-skills',
  },
  {
    icon: '🃏',
    name: 'Splanner',
    desc: 'Real-time Planning Poker for agile teams — live voting, Scrum Master controls, drag-and-drop backlog, countdown timer, and session export. Runs on Vercel + Supabase free tier.',
    tech: ['Next.js 15', 'Supabase', 'Framer Motion', 'Tailwind'],
    status: 'live' as const,
    type: 'personal' as const,
    github: 'https://github.com/sreeramg-hub/sprint-hub',
    demo: 'https://sprint-hub-omega.vercel.app/',
  },
]

export const LAB_ITEMS = [
  {
    href: '/lab/how-web-works',
    icon: '🌐',
    title: 'How the Web Works',
    desc: `An animated, step-by-step journey from URL to rendered page — explained simply enough for anyone to follow.
      I built this because I believe in learning from first principles and love making complex things click.`,
    tags: ['Animation', 'Educational', 'First Principles'],
    tagColor: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10',
    status: 'live' as const,
  },
  {
    href: '/lab/ai-lab',
    icon: '🤖',
    title: 'AI Lab',
    desc: `Live demos: Resume Match Analyzer and Frontend Architecture Advisor — with an AI-powered "Ask the Engineer" chatbot coming soon.
      The future of engineering is human + AI collaboration — I'm actively building in this space.`,
    tags: ['Generative AI', 'Interactive', 'Agents'],
    tagColor: 'text-blue-400 border-blue-400/30 bg-blue-400/10',
    status: 'live' as const,
  },
  {
    href: '/lab/performance',
    icon: '⚡',
    title: 'Performance Monitor',
    desc: `Live Core Web Vitals measurement of this site itself — LCP, FCP, TTFB, CLS, INP.
      Real scores, real explanations, and the exact techniques used to achieve them.`,
    tags: ['Core Web Vitals', 'Live Metrics', 'Performance'],
    tagColor: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10',
    status: 'live' as const,
  },
  {
    href: '/lab/performance-glossary',
    icon: '📖',
    title: 'Performance Glossary',
    desc: `Every web performance term explained twice — once technically, once like you're five.
      TTFB, LCP, CLS, INP, TBT and 10 more. Searchable, filterable, ELI5-friendly.`,
    tags: ['Reference', 'Core Web Vitals', 'ELI5'],
    tagColor: 'text-blue-400 border-blue-400/30 bg-blue-400/10',
    status: 'live' as const,
  },
]

export const CONTACT = {
  headline: "Let's Connect",
  subline: `I'm open to <strong class="text-white">Principal Engineer</strong> and
    <strong class="text-white">Staff Engineer</strong> opportunities — across Healthcare, Retail, or AI-driven product companies.
    Whether it's a role, a collaboration, or just a good engineering conversation, reach out.`,
  links: [
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sreeram-ganesan-92237468/', icon: 'linkedin' },
    { label: 'GitHub',   href: 'https://github.com/sreeramg-hub',       icon: 'github'   },
  ],
}
