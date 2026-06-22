import type { Metadata } from 'next'
import Link from 'next/link'
import { LAB_ITEMS } from '@/lib/data'

export const metadata: Metadata = {
  title: 'The Lab',
  description: 'Interactive experiments — How the Web Works, AI demos, and live Performance monitoring.',
}

export default function LabPage() {
  return (
    <div className="min-h-screen pt-28 pb-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        <Link href="/" className="inline-flex items-center gap-1.5 text-sm text-slate-500 hover:text-slate-300 mb-10 transition-colors">
          ← Back to portfolio
        </Link>
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2">⚗️ The Lab</p>
        <h1 className="text-4xl font-extrabold mb-4">
          Interactive <span className="text-gradient">Experiments</span>
        </h1>
        <p className="text-slate-400 mb-12 max-w-xl leading-relaxed">
          Each experiment here reflects something I genuinely care about — first-principles learning,
          AI-augmented engineering, and performance as a craft.
        </p>
        <div className="grid sm:grid-cols-2 gap-5">
          {LAB_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="group bg-surface-900 border border-surface-800 rounded-2xl p-6 flex flex-col gap-4 hover:border-blue-500/40 hover:-translate-y-1 hover:shadow-glow-blue transition-all duration-300"
            >
              <div className="text-4xl">{item.icon}</div>
              <div>
                <h2 className="font-bold text-slate-100 text-xl mb-2">{item.title}</h2>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
              <span className="text-sm font-semibold text-blue-400 group-hover:text-blue-300 flex items-center gap-1">
                Open <span className="group-hover:translate-x-1 transition-transform inline-block">→</span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
