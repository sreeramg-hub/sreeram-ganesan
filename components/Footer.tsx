import Link from 'next/link'
import { SITE } from '@/lib/data'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-surface-800 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-slate-500">
        <p>
          Built with{' '}
          <span className="text-blue-400 font-medium">Next.js 15 + Tailwind CSS</span>
          {' '}by{' '}
          <Link href="/" className="text-slate-300 hover:text-white transition-colors">
            {SITE.name}
          </Link>
          {' '}· {SITE.location} · {year}
        </p>
        <div className="flex gap-5">
          <a
            href={SITE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            LinkedIn
          </a>
          <a
            href={SITE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  )
}
