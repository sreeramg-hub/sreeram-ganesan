import Image from 'next/image'
import { ABOUT } from '@/lib/data'

export default function About() {
  return (
    <section id="about" className="py-14 sm:py-24 bg-surface-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

          {/* Avatar column */}
          <div className="flex flex-col items-center gap-6 reveal">
            <div className="relative">
              <div className="w-64 h-64 rounded-full p-[3px] bg-gradient-to-br from-blue-600 via-blue-400 to-blue-600">
                <div className="w-full h-full rounded-full overflow-hidden">
                  <Image
                    src="/profile.jpg"
                    alt="Sreeram Ganesan"
                    width={400}
                    height={400}
                    className="w-full h-full object-cover object-center"
                    priority
                  />
                </div>
              </div>
            </div>

            {/* Domain expertise pills */}
            <div className="flex gap-3 flex-wrap justify-center">
              <div className="px-4 py-2 rounded-xl border border-emerald-400/20 bg-emerald-400/8 text-center">
                <div className="text-lg">🏥</div>
                <div className="text-xs font-semibold text-emerald-400 mt-0.5">Healthcare</div>
                <div className="text-xs text-slate-500">Dental · Medical</div>
              </div>
              <div className="px-4 py-2 rounded-xl border border-blue-400/20 bg-blue-400/8 text-center">
                <div className="text-lg">🛒</div>
                <div className="text-xs font-semibold text-blue-400 mt-0.5">Retail</div>
                <div className="text-xs text-slate-500">Grocery · E-Commerce</div>
              </div>
              <div className="px-4 py-2 rounded-xl border border-purple-400/20 bg-purple-400/8 text-center">
                <div className="text-lg">🤖</div>
                <div className="text-xs font-semibold text-purple-400 mt-0.5">AI</div>
                <div className="text-xs text-slate-500">Agents · Automation</div>
              </div>
            </div>
          </div>

          {/* Text column */}
          <div className="reveal reveal-delay-1">
            <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2 flex items-center gap-2">
              <span className="w-7 h-px bg-gradient-to-r from-blue-500 to-blue-400 inline-block" />
              About Me
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-snug">
              {ABOUT.headline}{' '}
              <span className="text-gradient">{ABOUT.headlineAccent}</span>
            </h2>

            {ABOUT.paragraphs.map((p, i) => (
              <p
                key={i}
                className="text-slate-400 leading-relaxed mb-4 text-[0.97rem]"
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}

            {/* Personal note callout */}
            <div className="mt-5 border-l-2 border-blue-500 pl-4 text-slate-400 text-sm leading-relaxed italic">
              {ABOUT.personalNote}
            </div>

            {/* Certification */}
            <a
              href={ABOUT.certification.href}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 px-4 py-2 rounded-xl border border-emerald-400/20 bg-emerald-400/8 text-emerald-300 text-sm font-medium hover:border-emerald-400/40 hover:bg-emerald-400/12 transition-colors"
            >
              🏅 {ABOUT.certification.label}
              <span className="text-emerald-400/60 text-xs">↗</span>
            </a>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mt-8">
              {ABOUT.stats.map((s) => (
                <div
                  key={s.label}
                  className="bg-surface-900 border border-surface-800 rounded-xl p-4 text-center hover:border-blue-500/30 transition-colors"
                >
                  <span className="block text-3xl font-extrabold text-gradient">
                    {s.value}{s.suffix}
                  </span>
                  <span className="text-xs text-slate-500 mt-1 block">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
