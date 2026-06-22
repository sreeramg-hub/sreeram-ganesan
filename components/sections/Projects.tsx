import { PROJECTS } from '@/lib/data'

const GitHubIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.603-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
)

const ExternalLinkIcon = () => (
  <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
  </svg>
)

type Project = typeof import('@/lib/data').PROJECTS[number]

function StatusBadge({ status }: { status: Project['status'] }) {
  if (status === 'live') return (
    <span className="absolute top-4 right-4 text-xs px-2 py-0.5 rounded bg-emerald-400/10 border border-emerald-400/20 text-emerald-400 font-medium flex items-center gap-1">
      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse inline-block" />
      Live
    </span>
  )
  if (status === 'legacy') return (
    <span className="absolute top-4 right-4 text-xs px-2 py-0.5 rounded bg-amber-400/10 border border-amber-400/20 text-amber-400 font-medium">
      Archived
    </span>
  )
  return (
    <span className="absolute top-4 right-4 text-xs px-2 py-0.5 rounded bg-yellow-400/10 border border-yellow-400/20 text-yellow-400 font-medium">
      Write-up coming
    </span>
  )
}

const workProjects     = PROJECTS.filter(p => p.type === 'work')
const personalProjects = PROJECTS.filter(p => p.type === 'personal')

export default function Projects() {
  return (
    <section id="projects" className="py-14 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div className="reveal">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2 flex items-center gap-2">
            <span className="w-7 h-px bg-gradient-to-r from-blue-500 to-blue-400 inline-block" />
            Projects
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Greatest Things I&apos;ve <span className="text-gradient">Built</span>
          </h2>
        </div>

        {/* ── Professional Achievements ───────────────────────── */}
        <div className="reveal">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mt-10 mb-6">
            Professional Achievements
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {workProjects.map((p, i) => (
            <div
              key={p.name}
              className={`relative bg-surface-900 border border-surface-800 rounded-2xl p-6 overflow-hidden group flex flex-col reveal reveal-delay-${i % 3}`}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />

              <StatusBadge status={p.status} />

              {'company' in p && p.company && (
                <span className="text-xs text-slate-500 font-medium mb-3 block">{p.company}</span>
              )}

              <div className="text-4xl mb-3">{p.icon}</div>
              <h3 className="font-bold text-slate-100 mb-2 pr-20">{p.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{p.desc}</p>

              <div className="flex flex-wrap gap-1.5 mb-4">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-blue-500/8 border border-blue-500/20 text-blue-300 font-mono">
                    {t}
                  </span>
                ))}
              </div>

              {/* Links */}
              {'links' in p && p.links && p.links.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-blue-500/30 text-blue-400 hover:text-blue-300 hover:border-blue-400/50 hover:bg-blue-500/10 transition-colors"
                    >
                      <ExternalLinkIcon />
                      {link.label}
                    </a>
                  ))}
                </div>
              )}

              {'demo' in p && p.demo && !('links' in p && p.links) && (
                <div className="mt-auto">
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs px-3 py-1.5 w-fit rounded-lg border border-blue-500/30 text-blue-400 hover:text-blue-300 hover:border-blue-400/50 hover:bg-blue-500/10 transition-colors"
                  >
                    <ExternalLinkIcon />
                    Try it live
                  </a>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* ── Open Source / Personal ──────────────────────────── */}
        <div className="reveal">
          <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mt-10 sm:mt-16 mb-6">
            Open Source / Personal
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {personalProjects.map((p, i) => (
            <div
              key={p.name}
              className={`relative bg-surface-900 border border-surface-800 rounded-2xl p-6 overflow-hidden group flex flex-col reveal reveal-delay-${i}`}
            >
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-brand scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
              <StatusBadge status={p.status} />
              <div className="text-4xl mb-4">{p.icon}</div>
              <h3 className="font-bold text-slate-100 mb-2 pr-16">{p.name}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">{p.desc}</p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {p.tech.map((t) => (
                  <span key={t} className="text-xs px-2.5 py-1 rounded-md bg-blue-500/8 border border-blue-500/20 text-blue-300 font-mono">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap gap-2 mt-auto">
                {'github' in p && p.github && (
                  <a
                    href={p.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-surface-700 text-slate-400 hover:text-slate-200 hover:border-slate-600 transition-colors"
                  >
                    <GitHubIcon />
                    GitHub
                  </a>
                )}
                {'demo' in p && p.demo && (
                  <a
                    href={p.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-blue-500/30 text-blue-400 hover:text-blue-300 hover:border-blue-400/50 hover:bg-blue-500/10 transition-colors"
                  >
                    <ExternalLinkIcon />
                    Live Demo
                  </a>
                )}
                {'links' in p && p.links && p.links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg border border-blue-500/30 text-blue-400 hover:text-blue-300 hover:border-blue-400/50 hover:bg-blue-500/10 transition-colors"
                  >
                    <ExternalLinkIcon />
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
