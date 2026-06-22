'use client'

import { useEffect } from 'react'

// Lightweight client component that wires up IntersectionObserver
// for all .reveal elements on the page.
export default function RevealInit() {
  useEffect(() => {
    // Restore scroll position when returning from a lab page
    const saved = sessionStorage.getItem('homeScroll')
    if (saved) {
      sessionStorage.removeItem('homeScroll')
      requestAnimationFrame(() => window.scrollTo({ top: parseInt(saved), behavior: 'instant' }))
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('visible')
            observer.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    )
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return null
}
