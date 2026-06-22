'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NAV_LINKS = [
  { href: '/#about',      label: 'About'      },
  { href: '/#skills',     label: 'Skills'     },
  { href: '/#experience', label: 'Experience' },
  { href: '/#projects',   label: 'Projects'   },
  { href: '/#lab',        label: 'Lab'        },
]

export default function Nav() {
  const [scrolled, setScrolled]   = useState(false)
  const [menuOpen, setMenuOpen]   = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Close menu on route change
  useEffect(() => setMenuOpen(false), [pathname])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-surface-950/90 backdrop-blur-xl border-b border-surface-800 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex items-center justify-between">
        {/* Logo */}
        <Link
          href="/"
          className="text-lg font-bold text-slate-100 hover:text-blue-400 transition-colors"
        >
          SG<span className="text-blue-400">.</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className="text-sm font-medium text-slate-400 hover:text-slate-100 transition-colors relative group"
              >
                {label}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-gradient-to-r from-blue-500 to-blue-400 group-hover:w-full transition-all duration-300" />
              </a>
            </li>
          ))}
          <li>
            <Link
              href="/#contact"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-colors shadow-glow-blue"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* Hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-6 h-0.5 bg-slate-300 transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-slate-300 transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-slate-300 transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden absolute top-full left-0 right-0 ${menuOpen ? 'block' : 'hidden'}`}>
        <div className="bg-[#0c0c14] border-t border-surface-800 px-6 py-4 flex flex-col gap-4 shadow-2xl">
          {NAV_LINKS.map(({ href, label }) => (
            <a
              key={href}
              href={href}
              className="text-slate-300 hover:text-white font-medium transition-colors py-1"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <Link
            href="/#contact"
            className="w-fit px-5 py-2 bg-blue-600 text-white font-semibold rounded-lg"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  )
}
