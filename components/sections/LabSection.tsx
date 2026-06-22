'use client'

import Link from 'next/link'
import { LAB_ITEMS } from '@/lib/data'

function saveScroll() {
  if (typeof window !== 'undefined') {
    sessionStorage.setItem('homeScroll', window.scrollY.toString())
  }
}

export default function LabSection() {
  return (
    <section id="lab" className="py-24 bg-surface-900/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="reveal">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2 flex items-center gap-2">
            <span className="w-7 h-px bg-gradient-to-r from-blue-500 to-blue-400 inline-block" />
            The Lab
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Interactive <span className="text-gradient">Experiments</span>
          </h2>
          <p className="text-slate-400 mb-12 max-w-xl text-[0.97rem]">
            Where I explore ideas that go beyond the day job. Each experiment reflects something I genuinely
            believe in — first-principles thinking, AI-augmented engineering, and obsessing over performance.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {LAB_ITEMS.map((item, i) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={saveScroll}
              className={`group bg-surface-900 border border-surface-800 rounded-2xl p-6 flex flex-col gap-4 hover:border-blue-500/40 hover:-translate-y-1 hover:shadow-glow-blue transition-all duration-300 reveal reveal-delay-${i}`}
            >
              <div className="text-4xl">{item.icon}</div>
              <div>
                <h3 className="font-bold text-slate-100 text-lg mb-2">{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
              <div className="flex flex-wrap gap-1.5 mt-auto">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className={`text-xs px-2.5 py-1 rounded-full border font-medium ${item.tagColor}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <span className="text-sm font-semibold text-blue-400 group-hover:text-blue-300 flex items-center gap-1 transition-colors">
                Explore
                <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
