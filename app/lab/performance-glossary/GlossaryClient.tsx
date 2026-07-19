'use client'

import { useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'

type Category = 'All' | 'Loading' | 'Interactivity' | 'Stability' | 'Network'

const TERMS = [
  {
    abbr: 'TTFB',
    full: 'Time to First Byte',
    category: 'Loading' as Category,
    core: false,
    technical: 'The time from when the browser sends an HTTP request to receiving the first byte of the server response. Includes DNS, TCP, TLS, and server processing time.',
    eli5: 'You order food at a restaurant. TTFB is how long until the waiter acknowledges your order and brings even a glass of water — before the actual meal arrives.',
    good: '< 800ms', needsWork: '< 1800ms', poor: '≥ 1800ms',
    goodVal: 800, poorVal: 1800,
  },
  {
    abbr: 'FCP',
    full: 'First Contentful Paint',
    category: 'Loading' as Category,
    core: false,
    technical: 'The time from page load start until any content (text, image, SVG, or canvas element) first appears on screen.',
    eli5: "You're staring at a blank tab after clicking a link. FCP is the exact moment you first see ANYTHING appear — even just a heading. The blank waiting is finally over.",
    good: '< 1.8s', needsWork: '< 3s', poor: '≥ 3s',
    goodVal: 1800, poorVal: 3000,
  },
  {
    abbr: 'LCP',
    full: 'Largest Contentful Paint',
    category: 'Loading' as Category,
    core: true,
    technical: 'The render time of the largest image or text block visible in the viewport. One of Google\'s three Core Web Vitals.',
    eli5: 'Imagine a news article page. LCP is when the big hero photo finally loads and the page looks "done" to your eyes — not just the text, but the main thing.',
    good: '< 2.5s', needsWork: '< 4s', poor: '≥ 4s',
    goodVal: 2500, poorVal: 4000,
  },
  {
    abbr: 'CLS',
    full: 'Cumulative Layout Shift',
    category: 'Stability' as Category,
    core: true,
    technical: 'Measures visual instability — the total score of unexpected layout shifts that occur during the page\'s entire lifetime. Score from 0 (perfect) upward.',
    eli5: "You're about to tap a button and suddenly an ad loads above it — pushing the button down — and you tap the wrong thing. That's a layout shift. CLS counts how much of that happens.",
    good: '< 0.1', needsWork: '< 0.25', poor: '≥ 0.25',
    goodVal: 0.1, poorVal: 0.25,
    unit: 'score',
  },
  {
    abbr: 'INP',
    full: 'Interaction to Next Paint',
    category: 'Interactivity' as Category,
    core: true,
    technical: 'Measures the latency of all user interactions (clicks, taps, keyboard) throughout the page\'s lifetime. Replaced FID as a Core Web Vital in March 2024.',
    eli5: 'You tap a button. INP measures how quickly the screen visually responds — even if nothing "happens" yet, does it at least look like it heard you? The longer the wait, the worse the score.',
    good: '< 200ms', needsWork: '< 500ms', poor: '≥ 500ms',
    goodVal: 200, poorVal: 500,
  },
  {
    abbr: 'FID',
    full: 'First Input Delay',
    category: 'Interactivity' as Category,
    core: false,
    deprecated: true,
    technical: 'The delay between a user\'s very first interaction and the browser beginning to process it. Retired as a Core Web Vital in 2024 — INP does this job better.',
    eli5: 'Like pressing a button in an elevator and nothing happens for 3 seconds. FID measured that exact pause. INP replaced it because it watches ALL your taps, not just the first one.',
    good: '< 100ms', needsWork: '< 300ms', poor: '≥ 300ms',
    goodVal: 100, poorVal: 300,
  },
  {
    abbr: 'TTI',
    full: 'Time to Interactive',
    category: 'Loading' as Category,
    core: false,
    technical: 'Time until the page is fully interactive — the main thread has quieted, network requests have settled, and user interactions are handled within 50ms.',
    eli5: "A page might LOOK ready but buttons do nothing because JavaScript is still loading. TTI is when the page is ACTUALLY ready to use — not just pretty to look at.",
    good: '< 3.8s', needsWork: '< 7.3s', poor: '≥ 7.3s',
    goodVal: 3800, poorVal: 7300,
  },
  {
    abbr: 'TBT',
    full: 'Total Blocking Time',
    category: 'Interactivity' as Category,
    core: false,
    technical: 'The total time the main thread was blocked by long tasks (> 50ms each) between FCP and TTI, preventing the page from responding to user input.',
    eli5: "Your browser has one brain doing everything. TBT is the total time that brain was too busy with homework to listen to you clicking things. Lower is better.",
    good: '< 200ms', needsWork: '< 600ms', poor: '≥ 600ms',
    goodVal: 200, poorVal: 600,
  },
  {
    abbr: 'SI',
    full: 'Speed Index',
    category: 'Loading' as Category,
    core: false,
    technical: 'Measures how quickly content is visually populated during page load. Rewards pages that progressively render content rather than showing nothing then appearing all at once.',
    eli5: 'Two pages both take 4s to load. One shows nothing for 3.9s then pops in. The other fills in gradually. They finish together but the second feels faster — Speed Index captures that.',
    good: '< 3.4s', needsWork: '< 5.8s', poor: '≥ 5.8s',
    goodVal: 3400, poorVal: 5800,
  },
  {
    abbr: 'DNS',
    full: 'DNS Lookup',
    category: 'Network' as Category,
    core: false,
    technical: 'The time to resolve a human-readable domain name (e.g. sreeramganesan.dev) to a numeric IP address via the Domain Name System.',
    eli5: "You want to visit a friend but only know their name. DNS is like calling a phone book service to get their street address before you can drive there. It happens every time you visit a new site.",
  },
  {
    abbr: 'TCP',
    full: 'TCP Handshake',
    category: 'Network' as Category,
    core: false,
    technical: 'A three-step process (SYN → SYN-ACK → ACK) to establish a reliable connection between the browser and server before any data is exchanged.',
    eli5: '"Can you hear me?" → "Yes, can you hear me?" → "Yes, let\'s talk." That three-step back-and-forth is a TCP handshake. It happens before every new connection, adding a round-trip delay.',
  },
  {
    abbr: 'TLS',
    full: 'TLS Handshake',
    category: 'Network' as Category,
    core: false,
    technical: 'The negotiation process for establishing an encrypted HTTPS connection — exchanging certificates, verifying identities, and agreeing on encryption algorithms.',
    eli5: "Before your secret conversation, you and a friend agree on a code language so no one eavesdropping can understand you. TLS is that agreement, happening invisibly on every HTTPS page.",
  },
  {
    abbr: 'RBR',
    full: 'Render-Blocking Resources',
    category: 'Loading' as Category,
    core: false,
    technical: 'CSS stylesheets and synchronous JavaScript files that the browser must fully download and parse before it can render any content on screen.',
    eli5: "Imagine having to read the entire IKEA manual before you're allowed to open the box. Render-blocking resources make the browser finish reading them before showing you anything.",
  },
  {
    abbr: 'Long Task',
    full: 'Long Task',
    category: 'Interactivity' as Category,
    core: false,
    technical: 'Any JavaScript task that takes more than 50ms to execute on the main thread, blocking rendering and preventing the browser from responding to user input.',
    eli5: "Your browser has one worker that handles everything: JS, drawing pixels, responding to clicks. A Long Task is handing that worker a job so big they go heads-down for 50ms+ ignoring everything else.",
  },
]

const CATEGORIES: Category[] = ['All', 'Loading', 'Interactivity', 'Stability', 'Network']

const CAT_COLORS: Record<string, string> = {
  Loading:      'bg-blue-500/10 text-blue-400 border-blue-500/20',
  Interactivity:'bg-violet-500/10 text-violet-400 border-violet-500/20',
  Stability:    'bg-amber-500/10 text-amber-400 border-amber-500/20',
  Network:      'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
}

function ThresholdBar({ good, needsWork, unit }: { good: string; needsWork: string; unit?: string }) {
  return (
    <div className="mt-3 pt-3 border-t border-surface-800">
      <div className="flex rounded-lg overflow-hidden text-[10px] font-semibold">
        <div className="flex-1 bg-emerald-500/20 text-emerald-400 px-2 py-1 text-center">
          ✓ {good}
        </div>
        <div className="flex-1 bg-amber-500/20 text-amber-400 px-2 py-1 text-center">
          ~ {needsWork}
        </div>
        <div className="flex-1 bg-red-500/20 text-red-400 px-2 py-1 text-center">
          ✗ worse
        </div>
      </div>
      {unit === 'score' && (
        <p className="text-[10px] text-slate-600 mt-1 text-center">lower score = better stability</p>
      )}
    </div>
  )
}

export default function GlossaryClient() {
  const router = useRouter()
  const [query, setQuery]       = useState('')
  const [category, setCategory] = useState<Category>('All')

  const filtered = useMemo(() => {
    const q = query.toLowerCase()
    return TERMS.filter(t => {
      const matchCat = category === 'All' || t.category === category
      const matchQ   = !q || t.abbr.toLowerCase().includes(q) || t.full.toLowerCase().includes(q) || t.eli5.toLowerCase().includes(q)
      return matchCat && matchQ
    })
  }, [query, category])

  return (
    <div className="min-h-screen pt-28 pb-16">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">

        {/* Header */}
        <button
          onClick={() => router.back()}
          className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-300 mb-8 transition-colors"
        >
          ← Back
        </button>

        <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold block mb-2">
          📖 The Lab · Reference
        </span>
        <h1 className="text-4xl font-extrabold mb-2">
          <span className="text-gradient">Performance</span> Glossary
        </h1>
        <p className="text-slate-400 mb-8 text-sm leading-relaxed max-w-xl">
          Every web performance term explained twice — once for engineers, once like you&apos;re five.
          Searchable and filterable.
        </p>

        {/* Search + filters */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <input
            type="text"
            placeholder="Search terms…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            className="flex-1 bg-surface-900 border border-surface-800 rounded-xl px-4 py-2.5 text-sm text-slate-200 placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors"
          />
          <div className="flex gap-2 flex-wrap">
            {CATEGORIES.map(c => (
              <button
                key={c}
                onClick={() => setCategory(c)}
                className={`px-3 py-2 rounded-lg text-xs font-semibold border transition-colors ${
                  category === c
                    ? 'bg-blue-600 border-blue-500 text-white'
                    : 'bg-surface-900 border-surface-800 text-slate-400 hover:text-slate-200 hover:border-blue-500/30'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>

        {/* Core Web Vitals callout */}
        <div className="mb-8 p-4 bg-blue-500/8 border border-blue-500/20 rounded-2xl flex gap-3 items-start">
          <span className="text-2xl flex-shrink-0">🏆</span>
          <div>
            <p className="text-sm font-semibold text-blue-300 mb-0.5">Core Web Vitals</p>
            <p className="text-xs text-slate-400 leading-relaxed">
              Google uses <strong className="text-slate-300">LCP</strong>, <strong className="text-slate-300">INP</strong>, and <strong className="text-slate-300">CLS</strong> as ranking signals.
              These three metrics directly affect your site&apos;s position in search results.
            </p>
          </div>
        </div>

        {/* Results count */}
        <p className="text-xs text-slate-600 mb-4">{filtered.length} term{filtered.length !== 1 ? 's' : ''}</p>

        {/* Grid */}
        <div className="grid sm:grid-cols-2 gap-4">
          {filtered.map(term => (
            <div
              key={term.abbr}
              className="bg-surface-900 border border-surface-800 rounded-2xl p-5 flex flex-col gap-3 hover:border-blue-500/30 transition-colors"
            >
              {/* Top row */}
              <div className="flex items-start justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2 mb-0.5">
                    <span className="text-2xl font-extrabold text-slate-100 font-mono">{term.abbr}</span>
                    {term.core && (
                      <span className="text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-blue-500/20 border border-blue-500/30 text-blue-400">
                        Core Vital
                      </span>
                    )}
                    {'deprecated' in term && term.deprecated && (
                      <span className="text-[10px] font-bold uppercase tracking-widest px-1.5 py-0.5 rounded bg-slate-500/20 border border-slate-500/30 text-slate-500">
                        Deprecated
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-slate-500">{term.full}</p>
                </div>
                <span className={`text-[10px] font-semibold px-2 py-1 rounded-lg border flex-shrink-0 ${CAT_COLORS[term.category]}`}>
                  {term.category}
                </span>
              </div>

              {/* Technical */}
              <div className="bg-surface-800/50 rounded-xl p-3">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-slate-600 mb-1">Technical</p>
                <p className="text-xs text-slate-300 leading-relaxed">{term.technical}</p>
              </div>

              {/* ELI5 */}
              <div className="bg-blue-500/5 border border-blue-500/15 rounded-xl p-3">
                <p className="text-[10px] font-semibold uppercase tracking-widest text-blue-500/70 mb-1">ELI5 — Like I&apos;m 5</p>
                <p className="text-xs text-slate-400 leading-relaxed">{term.eli5}</p>
              </div>

              {/* Threshold bar */}
              {'goodVal' in term && (
                <ThresholdBar good={term.good!} needsWork={term.needsWork!} unit={'unit' in term ? term.unit as string : undefined} />
              )}
            </div>
          ))}

          {filtered.length === 0 && (
            <div className="sm:col-span-2 text-center py-16 text-slate-600">
              No terms match &ldquo;{query}&rdquo;
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
