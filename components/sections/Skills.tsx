import { SKILLS } from '@/lib/data'

export default function Skills() {
  return (
    <section id="skills" className="py-14 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="reveal">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2 flex items-center gap-2">
            <span className="w-7 h-px bg-gradient-to-r from-blue-500 to-blue-400 inline-block" />
            Technical Skills
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            My <span className="text-gradient">Toolkit</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl mb-8 sm:mb-12 italic">
            &ldquo;{SKILLS.intro}&rdquo;
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SKILLS.categories.map((cat, i) => (
            <div
              key={cat.name}
              className={`bg-surface-900 border border-surface-800 rounded-2xl p-5 hover:border-blue-500/30 hover:-translate-y-1 transition-all duration-300 reveal reveal-delay-${i}`}
            >
              <h3 className="text-sm font-semibold text-slate-200 mb-4 flex items-center gap-2">
                <span>{cat.icon}</span> {cat.name}
              </h3>
              <div className="flex flex-wrap gap-1.5">
                {cat.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-2.5 py-1 rounded-md bg-surface-800/80 border border-surface-700 text-slate-400 text-xs hover:border-blue-500/40 hover:text-blue-300 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
