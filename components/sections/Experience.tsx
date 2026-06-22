import { EXPERIENCE } from '@/lib/data'

export default function Experience() {
  return (
    <section id="experience" className="py-14 sm:py-24 bg-surface-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="reveal">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2 flex items-center gap-2">
            <span className="w-7 h-px bg-gradient-to-r from-blue-500 to-blue-400 inline-block" />
            Career
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Where I&apos;ve <span className="text-gradient">Worked</span>
          </h2>
          <p className="text-slate-400 mb-8 sm:mb-12 max-w-xl text-[0.97rem]">
            15+ years across Retail, Healthcare, and AI — delivering digital products at scale, from in-store POS systems to patient-facing platforms and multi-agent automations.
          </p>
        </div>

        <div className="relative pl-6 reveal reveal-delay-1">
          {/* Vertical line */}
          <div className="absolute left-0 top-2 bottom-0 w-px timeline-line" />

          {EXPERIENCE.map((job, i) => (
            <div key={job.company} className={`relative pb-8 sm:pb-12 ${i === EXPERIENCE.length - 1 ? 'pb-0' : ''}`}>
              {/* Timeline dot */}
              <div
                className={`absolute -left-[1.35rem] top-1.5 w-3.5 h-3.5 rounded-full border-2 border-surface-900 ${
                  job.current
                    ? 'bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.6)] animate-pulse-slow'
                    : 'bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.4)]'
                }`}
              />

              <div className="bg-surface-900 border border-surface-800 rounded-2xl p-6 hover:border-blue-500/30 transition-colors group">
                {/* Header */}
                <div className="flex flex-wrap items-start justify-between gap-2 mb-1">
                  <div>
                    <span className="font-mono text-xs text-blue-400 font-semibold">{job.period}</span>
                    {job.current && (
                      <span className="ml-2 text-xs px-2 py-0.5 rounded-full bg-emerald-400/10 text-emerald-400 border border-emerald-400/20 font-medium">
                        Current
                      </span>
                    )}
                  </div>
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full border ${job.domainColor} bg-current/5 border-current/20`}
                    style={{ opacity: 1 }}>
                    <span className={job.domainColor}>{job.domain}</span>
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-100 mt-1">{job.company}</h3>
                <p className="text-sm text-slate-500 mb-4">{job.role} · {job.location}</p>

                <ul className="space-y-2 mb-4">
                  {job.points.map((pt, j) => (
                    <li
                      key={j}
                      className="text-sm text-slate-400 pl-4 relative leading-relaxed"
                    >
                      <span className="absolute left-0 text-blue-400 font-bold">▹</span>
                      <span dangerouslySetInnerHTML={{ __html: pt }} />
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-1.5">
                  {job.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-md bg-blue-500/8 border border-blue-500/20 text-blue-300 font-mono"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
