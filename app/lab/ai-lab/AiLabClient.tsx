'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

/* ── Resume Matcher ─────────────────────────────────── */
const SKILLS_DB = [
  'react','next.js','nextjs','vue','vue.js','typescript','javascript','graphql',
  'node','html','css','tailwind','scss','responsive','performance','core web vitals',
  'java','spring','kotlin','rest','microservices','aws','gcp','docker','kubernetes',
  'ci/cd','git','agile','mentoring','leadership','system design','frontend architecture',
  'generative ai','machine learning','ai','llm','accessibility','wcag','vercel',
  'retail','healthcare','e-commerce','grocery','search','browse',
]

function ResumeMatcher() {
  const [jd, setJd]         = useState('')
  const [result, setResult] = useState<null | { score: number; hits: string[]; extras: string[] }>(null)

  function analyze() {
    const text   = jd.toLowerCase()
    const hits   = SKILLS_DB.filter(s => text.includes(s))
    const words  = [...new Set(text.match(/\b[a-z][a-z.+#-]{1,}\b/g) || [])]
    const jdHits = words.filter(w => SKILLS_DB.some(s => s.includes(w) || w.includes(s)))
    const score  = Math.min(Math.round((jdHits.length / Math.max(words.length * 0.15, 1)) * 100), 97)
    setResult({
      score,
      hits: hits.slice(0, 12),
      extras: ['React', 'Next.js 15', 'TypeScript', 'GCP Certified', 'Team Leadership', 'Retail Domain', 'Healthcare Domain'],
    })
  }

  const color = result
    ? result.score >= 75 ? '#34d399' : result.score >= 50 ? '#fbbf24' : '#fb923c'
    : '#3b82f6'

  const verdict = !result ? '' :
    result.score >= 80 ? '🔥 Excellent Match' :
    result.score >= 60 ? '✅ Strong Match' :
    result.score >= 40 ? '👍 Good Match' : '⚠️ Partial Match'

  return (
    <div className="space-y-4">
      <div>
        <label className="text-xs font-semibold uppercase tracking-widest text-blue-400 block mb-2">
          Paste a Job Description
        </label>
        <textarea
          value={jd}
          onChange={e => setJd(e.target.value)}
          rows={8}
          className="w-full bg-surface-900 border border-surface-700 rounded-xl p-4 text-slate-300 text-sm leading-relaxed resize-none focus:outline-none focus:border-blue-500/50 font-sans placeholder:text-slate-600"
          placeholder="We're looking for a Principal Frontend Engineer with 10+ years of experience in React, TypeScript, and system design. Experience with GraphQL, AWS or GCP, and leading engineering teams is required..."
        />
      </div>
      <button
        onClick={analyze}
        disabled={jd.trim().length < 30}
        className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all disabled:opacity-40 disabled:cursor-not-allowed"
      >
        ⚡ Analyze Match
      </button>

      {result && (
        <div className="bg-surface-900 border border-surface-700 rounded-xl p-5 space-y-4">
          <div className="flex items-center gap-4">
            <svg width="72" height="72" viewBox="0 0 72 72" className="-rotate-90">
              <circle cx="36" cy="36" r="30" fill="none" stroke="#1e293b" strokeWidth="6" />
              <circle
                cx="36" cy="36" r="30" fill="none" strokeWidth="6"
                stroke={color} strokeLinecap="round"
                strokeDasharray={`${2 * Math.PI * 30}`}
                strokeDashoffset={`${2 * Math.PI * 30 * (1 - result.score / 100)}`}
                style={{ transition: 'stroke-dashoffset 1s ease' }}
              />
            </svg>
            <div>
              <div className="text-2xl font-extrabold" style={{ color }}>{result.score}%</div>
              <div className="font-semibold text-slate-100 text-sm">{verdict}</div>
              <div className="text-xs text-slate-500 mt-0.5">match against Sreeram&apos;s profile</div>
            </div>
          </div>
          {result.hits.length > 0 && (
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-2">✅ Matched Skills</p>
              <div className="flex flex-wrap gap-1.5">
                {result.hits.map(s => (
                  <span key={s} className="text-xs px-2.5 py-1 rounded-md bg-emerald-400/10 border border-emerald-400/20 text-emerald-300 font-mono">{s}</span>
                ))}
              </div>
            </div>
          )}
          <div>
            <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold mb-2">💡 Sreeram&apos;s Additional Strengths</p>
            <div className="flex flex-wrap gap-1.5">
              {result.extras.map(s => (
                <span key={s} className="text-xs px-2.5 py-1 rounded-md bg-blue-400/10 border border-blue-400/20 text-blue-300">{s}</span>
              ))}
            </div>
          </div>
        </div>
      )}

      <p className="text-xs text-slate-600 leading-relaxed pt-1">
        💡 <span className="text-slate-500">How this works:</span> Paste any job description and this tool scans it for skills and experience that match Sreeram&apos;s background — things like technologies, domains, and leadership. The score gives you a quick sense of fit. No AI involved yet; it&apos;s smart keyword matching under the hood.
      </p>
    </div>
  )
}

/* ── Architecture Advisor ───────────────────────────── */
const ARCH_DATA: Record<string, { title: string; patterns: { name: string; rec: boolean; desc: string; pros: string[]; cons: string[] }[] }> = {
  marketing: {
    title: 'Marketing / Content Site',
    patterns: [
      { name: 'Static Site Generation (SSG)', rec: true, desc: 'Pre-render all pages at build time. Perfect for content-heavy marketing sites with excellent SEO and CDN-cacheable assets.', pros: ['Blazing fast load times', 'Perfect SEO', 'Zero server costs', 'Global CDN distribution'], cons: ['Build time grows with content', 'Dynamic content needs client fetch', 'Full rebuild for content updates'] },
      { name: 'Incremental Static Regeneration (ISR)', rec: false, desc: 'Pages are pre-built but can be re-validated on a schedule — the best of SSG + SSR for frequently updating content.', pros: ['Fresh content without full rebuilds', 'Same CDN performance as SSG', 'Scales to thousands of pages'], cons: ['More complex infrastructure', 'Requires Next.js or similar', 'Stale-while-revalidate edge cases'] },
    ],
  },
  ecommerce: {
    title: 'E-Commerce Platform',
    patterns: [
      { name: 'Micro-Frontend Architecture', rec: true, desc: 'Split the app into independently deployable frontend modules — Search, Cart, PDP — each owned by a separate team. (This is what I built at Peapod!)', pros: ['Independent team deployments', 'Technology flexibility per module', 'Isolated blast radius for bugs'], cons: ['Initial setup complexity', 'Shared state coordination', 'Performance budget management'] },
      { name: 'SSR with Edge Functions', rec: false, desc: 'Render pages at the edge on each request. Essential for personalized, dynamic content and real-time inventory.', pros: ['Dynamic personalisation', 'Real-time data', 'Good SEO'], cons: ['Server costs', 'Complex deployment', 'Higher TTFB vs static'] },
    ],
  },
  saas: {
    title: 'SaaS / Dashboard App',
    patterns: [
      { name: 'SPA with Route-based Code Splitting', rec: true, desc: 'React SPA with aggressive route-level code splitting. Best for authenticated dashboards where SEO is not critical.', pros: ['Snappy navigation after initial load', 'Rich interactivity', 'Simple CDN deployment'], cons: ['Larger initial bundle', 'Poor SEO (fine for auth apps)', 'Need smart caching strategy'] },
      { name: 'Islands Architecture', rec: false, desc: 'Mostly static HTML with hydrated interactive "islands". Great for dashboards that are mostly read-only with a few interactive widgets.', pros: ['Minimal JS shipped by default', 'Fast initial render', 'Selective hydration'], cons: ['Less mature tooling', 'Complex state sharing between islands'] },
    ],
  },
}

function ArchAdvisor() {
  const [type, setType]           = useState('')
  const [hasAdvised, setHasAdvised] = useState(false)

  // Once the user clicks the button once, result updates automatically on dropdown change
  const result = hasAdvised ? (ARCH_DATA[type || 'marketing'] ?? ARCH_DATA.marketing) : null

  // Suppress unused-variable lint warning — effect is intentionally empty
  useEffect(() => {}, [type])

  return (
    <div className="space-y-4">
      <div className="grid sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs font-semibold uppercase tracking-widest text-blue-400 block mb-2">Project Type</label>
          <select
            value={type}
            onChange={e => setType(e.target.value)}
            className="w-full bg-surface-900 border border-surface-700 rounded-xl px-4 py-2.5 text-slate-300 text-sm focus:outline-none focus:border-blue-500/50"
          >
            <option value="">Select type...</option>
            <option value="marketing">Marketing / Content</option>
            <option value="ecommerce">E-Commerce</option>
            <option value="saas">SaaS / Dashboard</option>
          </select>
        </div>
        <div className="flex items-end">
          <button
            onClick={() => setHasAdvised(true)}
            className="w-full py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all"
          >
            🏗️ Get Architecture Advice
          </button>
        </div>
      </div>

      {result && (
        <div className="space-y-3">
          <p className="text-xs uppercase tracking-widest text-slate-500 font-semibold">
            Recommendations for: <span className="text-blue-400">{result.title}</span>
          </p>
          {result.patterns.map(p => (
            <div key={p.name} className="bg-surface-900 border border-surface-700 rounded-xl p-5">
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <h3 className="font-bold text-slate-100 text-sm">{p.name}</h3>
                {p.rec && <span className="text-xs px-2 py-0.5 rounded-full bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 font-semibold">⭐ Recommended</span>}
              </div>
              <p className="text-slate-400 text-xs leading-relaxed mb-3">{p.desc}</p>
              <div className="grid sm:grid-cols-2 gap-3 text-xs">
                <div>
                  <p className="text-emerald-400 font-semibold mb-1">✅ Pros</p>
                  <ul className="space-y-0.5">
                    {p.pros.map(x => <li key={x} className="text-slate-400 pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-slate-600">{x}</li>)}
                  </ul>
                </div>
                <div>
                  <p className="text-orange-400 font-semibold mb-1">⚠️ Cons</p>
                  <ul className="space-y-0.5">
                    {p.cons.map(x => <li key={x} className="text-slate-400 pl-3 relative before:content-['•'] before:absolute before:left-0 before:text-slate-600">{x}</li>)}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <p className="text-xs text-slate-600 leading-relaxed pt-1">
        💡 <span className="text-slate-500">How this works:</span> Choose the type of product you&apos;re building and get architecture recommendations drawn from Sreeram&apos;s real decisions across Retail and Healthcare platforms.
      </p>
    </div>
  )
}

/* ── Main ───────────────────────────────────────────── */
type Tab = 'resume' | 'arch' | 'roadmap'
const TABS: { id: Tab; label: string }[] = [
  { id: 'resume',  label: '📄 Resume Matcher' },
  { id: 'arch',    label: '🏗️ Arch Advisor'   },
  { id: 'roadmap', label: '🗺️ Coming Soon'    },
]

export default function AiLabClient() {
  const router  = useRouter()
  const [tab, setTab] = useState<Tab>('resume')

  return (
    <div className="min-h-screen pt-28 pb-8">
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <button onClick={() => router.back()} className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-300 mb-8 transition-colors">← Back</button>
        <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold block mb-2">🤖 The Lab · AI</span>
        <h1 className="text-4xl font-extrabold mb-2">
          <span className="text-gradient">AI Lab</span>
        </h1>
        <p className="text-slate-400 mb-8 text-sm leading-relaxed">
          The future of engineering is human + AI. These demos show how I think about AI-augmented workflows.
        </p>

        <div className="flex gap-1 border-b border-surface-800 mb-8 overflow-x-auto">
          {TABS.map(t => (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={`px-4 py-2.5 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                tab === t.id
                  ? 'border-blue-400 text-slate-100'
                  : 'border-transparent text-slate-500 hover:text-slate-300'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>

        {tab === 'resume'  && <ResumeMatcher />}
        {tab === 'arch'    && <ArchAdvisor />}
        {tab === 'roadmap' && (
          <div className="space-y-4">
            {[
              { icon: '💬', title: 'Ask the Engineer — AI Clone', desc: 'Chat with an AI trained on my actual background, projects, and engineering philosophy. Ask about my tech stack, how I approached a specific problem, or what I\'d do differently — powered by a real LLM fine-tuned with my knowledge and experience.' },
              { icon: '🔍', title: 'AI Code Reviewer', desc: 'Paste a React component, get a principal-engineer-style review: performance, accessibility, best practices, and potential bugs.' },
              { icon: '⚡', title: 'Web Performance Auditor', desc: 'Enter a URL and get an AI-powered breakdown of Core Web Vitals with specific, prioritised fixes. Powered by Lighthouse + AI analysis.' },
              { icon: '🤖', title: 'Multi-Agent Sprint Planner', desc: 'Describe a feature in plain English. An agent pipeline breaks it into user stories, estimates complexity, and drafts an implementation plan.' },
              { icon: '♿', title: 'Accessibility Checker Agent', desc: 'AI agent auditing a webpage for WCAG 2.1 compliance — contrast, ARIA labels, keyboard navigation, screen reader compatibility.' },
            ].map(f => (
              <div key={f.title} className="flex gap-4 bg-surface-900 border border-surface-700 rounded-2xl p-5">
                <span className="text-3xl flex-shrink-0">{f.icon}</span>
                <div>
                  <h3 className="font-bold text-slate-100 mb-1">{f.title}</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
