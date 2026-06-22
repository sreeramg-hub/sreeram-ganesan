'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'

const STEPS = [
  {
    emoji: '🧒', tag: 'Step 1 · You', tagColor: 'text-blue-400 border-blue-400/30 bg-blue-400/10',
    title: 'You type a web address',
    simple: `Imagine you want to go to your friend's house. First you have to <em>tell someone the address</em>. When you type <strong>www.google.com</strong> in your browser, that's you saying the address out loud!`,
    detail: `Your browser takes your web address — called a <strong>URL (Uniform Resource Locator)</strong> — and begins a journey to find the site. URLs have three parts: the protocol (<code>https://</code>), the domain (<code>google.com</code>), and the path (<code>/search</code>).`,
    fact: { icon: '💡', text: `The average person types a URL in under 3 seconds. The browser then performs <strong>millions of operations</strong> to load the page in under 1 second!` },
    anim: 'browser',
  },
  {
    emoji: '📖', tag: 'Step 2 · DNS', tagColor: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10',
    title: "The internet checks its phonebook",
    simple: `Your browser knows the <em>name</em> "google.com" but computers talk in numbers! It's like knowing your friend's name but needing their phone number to call them. The internet's phonebook is called <em>DNS</em>.`,
    detail: `<strong>DNS (Domain Name System)</strong> translates "google.com" into an IP address like 142.250.80.46. Your browser checks its cache first, then your router, then a DNS server. This usually completes in <strong>1–20ms</strong>.`,
    fact: { icon: '🌍', text: `There are only <strong>13 root DNS server clusters</strong> in the world, mirrored to thousands of locations. Every web request depends on them.` },
    anim: 'dns',
  },
  {
    emoji: '🤝', tag: 'Step 3 · TCP Handshake', tagColor: 'text-yellow-400 border-yellow-400/30 bg-yellow-400/10',
    title: 'Your browser says "Hello!"',
    simple: `Before asking for anything, your browser and the server do a <em>secret handshake</em>. Like when you meet a friend — "Hey!" ... "Hey!" ... "Ready to talk?" ... "Ready!" This is the <em>TCP Three-Way Handshake</em>.`,
    detail: `<strong>TCP</strong> ensures a reliable connection before data is sent. For HTTPS sites there's also a <strong>TLS handshake</strong> — this is where the 🔒 padlock comes from. Your data gets encrypted so nobody can eavesdrop.`,
    fact: { icon: '🔒', text: `The HTTPS lock icon means your connection is <strong>encrypted</strong>. Data travels as scrambled gibberish that only your browser and the server can decode!` },
    anim: 'handshake',
  },
  {
    emoji: '🖥️', tag: 'Step 4 · Server', tagColor: 'text-orange-400 border-orange-400/30 bg-orange-400/10',
    title: 'The server wakes up!',
    simple: `Now your browser sends a message: <em>"Please give me your homepage!"</em> A powerful computer somewhere in the world receives this, does some work, and gets ready to send back a response.`,
    detail: `The server processes your <strong>HTTP request</strong>. It might query a database, run some code, check authentication, then assembles an <strong>HTTP response</strong> with a status code. <strong>200</strong> = "All good!" · <strong>404</strong> = "Not found!" · <strong>500</strong> = "Something broke!"`,
    fact: { icon: '🌎', text: `Major websites use <strong>CDNs (Content Delivery Networks)</strong> that store copies of the site in hundreds of cities — so you always get the server closest to you!` },
    anim: 'server',
  },
  {
    emoji: '📦', tag: 'Step 5 · Files Arrive', tagColor: 'text-purple-400 border-purple-400/30 bg-purple-400/10',
    title: 'Three magic files fly to you!',
    simple: `The server sends back three special files. Think of them like: <em>HTML is the skeleton</em> 🦴, <em>CSS is the clothes</em> 👗, and <em>JavaScript is the brain</em> 🧠!`,
    detail: `<strong>HTML</strong> defines what's on the page. <strong>CSS</strong> makes it look beautiful. <strong>JavaScript</strong> makes it interactive. These travel as small <strong>data packets of ~1,500 bytes each</strong> that reassemble in your browser.`,
    fact: { icon: '📊', text: `A single webpage might arrive in <strong>hundreds of packets</strong>, all reassembled in the right order using TCP sequence numbers!` },
    anim: 'files',
  },
  {
    emoji: '🎨', tag: 'Step 6 · Rendering', tagColor: 'text-pink-400 border-pink-400/30 bg-pink-400/10',
    title: 'Your browser paints the page!',
    simple: `Now the browser reads those files and <em>builds the page like LEGO bricks</em> 🧱! It figures out where everything goes, what colour it is, and puts it all together for your eyes to see.`,
    detail: `The browser builds a <strong>DOM tree</strong> from HTML, a <strong>CSSOM</strong> from CSS, combines them into a <strong>Render Tree</strong>, runs <strong>Layout</strong> to calculate positions, then <strong>Paints</strong> pixels. All in milliseconds!`,
    fact: { icon: '⚡', text: `For smooth animations, browsers need to render at <strong>60 frames per second</strong> — that's a new frame every <strong>16.67ms</strong>!` },
    anim: 'render',
  },
  {
    emoji: '🎉', tag: 'You did it! 🥳', tagColor: 'text-emerald-400 border-emerald-400/30 bg-emerald-400/10',
    title: 'Your website is here!',
    simple: `In the blink of an eye — you typed a name → internet found its address → browser said hello → server sent files → browser painted the page. <em>Pure magic ✨</em>`,
    detail: `Every time you visit a website, your device silently performs hundreds of complex operations — DNS queries, cryptographic handshakes, data packets, and full browser rendering pipelines — all seamlessly. That's the web. 🌐`,
    fact: { icon: '🚀', text: `A well-optimised site can complete this entire journey — DNS → TCP → Server → Render — in under <strong>500ms</strong>. That's why web performance matters so much!` },
    anim: 'done',
  },
]

function BrowserAnim() {
  const [url, setUrl] = useState('')
  const [done, setDone] = useState(false)
  const full = 'www.google.com'
  function startTyping() {
    setUrl(''); setDone(false)
    let i = 0
    const t = setInterval(() => {
      setUrl(full.slice(0, ++i))
      if (i >= full.length) { clearInterval(t); setDone(true) }
    }, 80)
  }
  return (
    <div className="w-full max-w-md mx-auto">
      <div className="bg-surface-950 border border-surface-700 rounded-xl overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 bg-surface-900 border-b border-surface-700">
          <span className="w-3 h-3 rounded-full bg-red-500/70" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/70" />
          <span className="w-3 h-3 rounded-full bg-green-500/70" />
          <div className="flex-1 bg-surface-950 rounded-md px-3 py-1 font-mono text-xs flex items-center text-slate-300">
            <span className="text-slate-500 mr-1">https://</span>
            {url}<span className={`tw-cursor ${done ? 'hidden' : ''}`} />
          </div>
        </div>
        <div className="h-20 flex items-center justify-center text-sm text-slate-500">
          {done ? <span className="text-emerald-400 font-medium">✅ Navigating to {full}...</span> : 'Waiting...'}
        </div>
      </div>
      <button onClick={startTyping} className="mt-3 mx-auto block text-xs text-blue-400 hover:text-blue-300 transition-colors">
        ▶ Play animation
      </button>
    </div>
  )
}

function DnsAnim() {
  return (
    <div className="flex items-center gap-3 flex-wrap justify-center w-full">
      {[
        { icon: '🌐', label: 'google.com', sub: 'name', color: 'text-blue-400' },
        { icon: '📖', label: 'DNS Server', sub: 'phonebook', color: 'text-slate-300' },
        { icon: '🔢', label: '142.250.80.46', sub: 'IP address', color: 'text-emerald-400', mono: true },
      ].map((b, i) => (
        <div key={i} className="flex items-center gap-3">
          <div className="bg-surface-900 border border-surface-700 rounded-xl p-4 text-center min-w-[100px]">
            <div className="text-2xl mb-1">{b.icon}</div>
            <div className={`text-xs font-semibold ${b.color} ${b.mono ? 'font-mono' : ''}`}>{b.label}</div>
            <div className="text-xs text-slate-600 mt-0.5">{b.sub}</div>
          </div>
          {i < 2 && <span className="text-blue-400 text-xl animate-pulse">→</span>}
        </div>
      ))}
      <div className="w-full text-center mt-2 font-mono text-xs text-emerald-400">
        ✅ Found! &quot;google.com&quot; → 142.250.80.46
      </div>
    </div>
  )
}

function HandshakeAnim() {
  return (
    <div className="w-full space-y-2">
      {[
        { from: 'Browser', to: 'Server', msg: 'SYN — "Hey, you there?"', color: 'text-blue-400 bg-blue-400/8 border-blue-400/20' },
        { from: 'Server', to: 'Browser', msg: 'SYN-ACK — "Yep! I\'m here!"', color: 'text-emerald-400 bg-emerald-400/8 border-emerald-400/20' },
        { from: 'Browser', to: 'Server', msg: 'ACK — "Great, let\'s talk!"', color: 'text-yellow-400 bg-yellow-400/8 border-yellow-400/20' },
      ].map((row, i) => (
        <div key={i} className={`flex items-center justify-between rounded-lg border px-4 py-2.5 text-xs font-medium ${row.color}`}>
          <span className="text-slate-400">{row.from} → {row.to}</span>
          <span className="font-mono">{row.msg}</span>
        </div>
      ))}
    </div>
  )
}

function ServerAnim() {
  return (
    <div className="flex flex-col items-center gap-4 w-full">
      <div className="text-5xl animate-pulse-slow">🖥️</div>
      <div className="w-full max-w-sm bg-surface-950 rounded-lg p-3 font-mono text-xs space-y-1">
        <div className="text-emerald-400">▶ GET / HTTP/2 received from 72.91.xx.xx</div>
        <div className="text-emerald-400">▶ Authenticating... ✓ OK</div>
        <div className="text-emerald-400">▶ Fetching data... <span className="text-yellow-400">200 OK</span> ✓ Ready!</div>
      </div>
    </div>
  )
}

function FilesAnim() {
  return (
    <div className="flex gap-4 justify-center flex-wrap">
      {[
        { icon: '🦴', name: 'index.html', label: 'Structure' },
        { icon: '🎨', name: 'styles.css', label: 'Looks'     },
        { icon: '⚙️', name: 'app.js',     label: 'Behaviour' },
      ].map((f, i) => (
        <div
          key={f.name}
          className="bg-surface-900 border border-surface-700 rounded-xl p-4 text-center"
          style={{ animation: `bounce ${2 + i * 0.3}s ease-in-out infinite` }}
        >
          <div className="text-3xl mb-2">{f.icon}</div>
          <div className="font-mono text-xs text-blue-300">{f.name}</div>
          <div className="text-xs text-slate-500 mt-0.5">{f.label}</div>
        </div>
      ))}
    </div>
  )
}

function RenderAnim() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 w-full">
      {['Parse HTML → DOM', '→', 'Parse CSS → CSSOM', '→', 'Render Tree', '→', '🎨 Paint!'].map((s, i) => (
        <span
          key={i}
          className={s === '→' ? 'text-slate-500 text-lg' : `px-3 py-1.5 rounded-lg text-xs font-semibold border ${
            i === 0 ? 'bg-orange-400/10 text-orange-400 border-orange-400/20' :
            i === 2 ? 'bg-blue-400/10 text-blue-400 border-blue-400/20' :
            i === 4 ? 'bg-yellow-400/10 text-yellow-400 border-yellow-400/20' :
                      'bg-emerald-400/10 text-emerald-400 border-emerald-400/20'
          }`}
        >
          {s}
        </span>
      ))}
    </div>
  )
}

function DoneAnim() {
  return (
    <div className="flex flex-col items-center gap-4">
      <div className="text-5xl" style={{ animation: 'bounce 0.8s ease-in-out infinite alternate' }}>🎉</div>
      <div className="flex gap-2 text-2xl">🎊 🥳 🎈 ✨ 🎊</div>
      <p className="text-sm text-slate-300 font-semibold text-center">All of this happened in under 1 second!</p>
      <div className="grid grid-cols-4 gap-2 w-full max-w-sm">
        {[
          { label: 'DNS', time: '~20ms',    color: 'text-blue-400'  },
          { label: 'TCP+TLS', time: '~80ms',   color: 'text-yellow-400'},
          { label: 'Server', time: '~200ms',  color: 'text-orange-400'},
          { label: 'Render', time: '~150ms',  color: 'text-emerald-400'},
        ].map((m) => (
          <div key={m.label} className="bg-surface-900 border border-surface-700 rounded-lg p-2 text-center">
            <div className="text-xs text-slate-500">{m.label}</div>
            <div className={`text-xs font-mono font-semibold ${m.color}`}>{m.time}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

const ANIM_MAP: Record<string, React.FC> = {
  browser: BrowserAnim, dns: DnsAnim, handshake: HandshakeAnim,
  server: ServerAnim, files: FilesAnim, render: RenderAnim, done: DoneAnim,
}

export default function HowWebWorksClient() {
  const router  = useRouter()
  const [started, setStarted]   = useState(false)
  const [current, setCurrent]   = useState(0)
  const TOTAL = STEPS.length

  if (!started) {
    return (
      <div className="min-h-screen pt-28 flex flex-col items-center px-4 text-center">
        <button onClick={() => router.back()} className="mb-10 text-sm text-slate-500 hover:text-slate-300 transition-colors w-full max-w-md text-left">← Back</button>
        <span className="text-xs uppercase tracking-widest text-blue-400 font-semibold mb-4">⚗️ The Lab · Educational</span>
        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
          What happens when<br /><span className="text-gradient">you hit Enter?</span>
        </h1>
        <p className="text-slate-400 max-w-md mb-3 leading-relaxed">
          An animated journey from URL to rendered page — explained simply enough for a 5-year-old.
        </p>
        <p className="text-slate-500 text-sm max-w-sm mb-8 italic">
          &ldquo;I built this because I believe the best engineers understand their tools from first principles,
          and I love explaining things simply enough that anyone can follow.&rdquo;
        </p>
        <button
          onClick={() => setStarted(true)}
          className="px-8 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all hover:-translate-y-0.5 shadow-glow-blue"
        >
          🚀 Start the Journey
        </button>
      </div>
    )
  }

  const step = STEPS[current]
  const Anim = ANIM_MAP[step.anim]

  return (
    <div className="min-h-screen pt-28 pb-8 px-4">
      {/* Top bar */}
      <div className="max-w-2xl mx-auto flex items-center justify-between mb-6">
        <button onClick={() => router.back()} className="text-sm text-slate-500 hover:text-slate-300 transition-colors">← Back</button>
        <span className="text-xs text-slate-500 font-mono">{current + 1} / {TOTAL}</span>
      </div>

      {/* Progress dots */}
      <div className="flex justify-center gap-1.5 mb-8">
        {STEPS.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`h-1.5 rounded-full transition-all duration-300 ${
              i < current ? 'w-6 bg-blue-500' : i === current ? 'w-8 bg-blue-400' : 'w-4 bg-surface-700'
            }`}
          />
        ))}
      </div>

      {/* Step card */}
      <div className="max-w-2xl mx-auto bg-surface-900 border border-surface-800 rounded-2xl p-6 sm:p-8">
        <div className="text-5xl mb-4">{step.emoji}</div>
        <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full border mb-4 ${step.tagColor}`}>
          {step.tag}
        </span>
        <h2 className="text-2xl sm:text-3xl font-extrabold mb-4">{step.title}</h2>

        {/* Simple explanation */}
        <div className="bg-blue-500/5 border-l-2 border-blue-500 rounded-r-xl px-4 py-3 mb-4 text-sm leading-relaxed text-slate-300"
          dangerouslySetInnerHTML={{ __html: step.simple }} />

        {/* Animation */}
        <div className="bg-surface-950 border border-surface-800 rounded-xl p-5 my-5 flex items-center justify-center min-h-[140px]">
          <Anim />
        </div>

        {/* Technical detail */}
        <p className="text-slate-400 text-sm leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: step.detail }} />

        {/* Fun fact */}
        <div className="flex gap-3 bg-blue-500/5 border border-blue-500/15 rounded-xl p-4 text-sm text-slate-400">
          <span className="text-xl flex-shrink-0">{step.fact.icon}</span>
          <span dangerouslySetInnerHTML={{ __html: step.fact.text }} />
        </div>
      </div>

      {/* Navigation */}
      <div className="max-w-2xl mx-auto flex items-center justify-between mt-6">
        <button
          onClick={() => setCurrent(c => c - 1)}
          disabled={current === 0}
          className="px-5 py-2.5 rounded-xl border border-surface-700 text-slate-400 text-sm font-semibold hover:border-surface-600 hover:text-slate-200 transition-all disabled:opacity-30 disabled:cursor-not-allowed"
        >
          ← Back
        </button>
        <button
          onClick={() => current === TOTAL - 1 ? setStarted(false) : setCurrent(c => c + 1)}
          className="px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold transition-all hover:-translate-y-0.5"
        >
          {current === TOTAL - 1 ? '🔄 Start Over' : 'Next →'}
        </button>
      </div>
    </div>
  )
}
