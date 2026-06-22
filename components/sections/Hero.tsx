'use client'

import { useEffect, useRef, useState } from 'react'
import { HERO } from '@/lib/data'

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [typedText, setTypedText] = useState('')
  const phraseIdx = useRef(0)
  const charIdx   = useRef(0)
  const deleting  = useRef(false)

  /* ── Typewriter ──────────────────────────────────── */
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>
    function type() {
      const phrases = HERO.typewriterPhrases
      const current = phrases[phraseIdx.current]
      if (deleting.current) {
        setTypedText(current.slice(0, --charIdx.current))
        if (charIdx.current < 0) {
          deleting.current = false
          phraseIdx.current = (phraseIdx.current + 1) % phrases.length
          timeout = setTimeout(type, 400)
        } else {
          timeout = setTimeout(type, 40)
        }
      } else {
        setTypedText(current.slice(0, ++charIdx.current))
        if (charIdx.current === current.length) {
          deleting.current = true
          timeout = setTimeout(type, 2400)
        } else {
          timeout = setTimeout(type, 70)
        }
      }
    }
    timeout = setTimeout(type, 600)
    return () => clearTimeout(timeout)
  }, [])

  /* ── Particle canvas ─────────────────────────────── */
  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')!
    let particles: { x: number; y: number; vx: number; vy: number; r: number; a: number }[] = []
    let W = 0, H = 0
    let mouse = { x: -999, y: -999 }
    let animId: number

    function resize() {
      if (!canvas) return
      W = canvas.width  = canvas.offsetWidth
      H = canvas.height = canvas.offsetHeight
      const count = Math.floor((W * H) / 16000)
      particles = Array.from({ length: count }, () => ({
        x: Math.random() * W, y: Math.random() * H,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 2 + 0.5,
        a: Math.random() * 0.5 + 0.1,
      }))
    }

    function draw() {
      ctx.clearRect(0, 0, W, H)
      for (const p of particles) {
        p.x = (p.x + p.vx + W) % W
        p.y = (p.y + p.vy + H) % H
        const dx = mouse.x - p.x, dy = mouse.y - p.y
        const d  = Math.sqrt(dx * dx + dy * dy)
        if (d < 130) {
          const f = (130 - d) / 130
          p.x -= (dx / d) * f * 1.8
          p.y -= (dy / d) * f * 1.8
        }
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(96,165,250,${p.a})`
        ctx.fill()
      }
      // connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x
          const dy = particles[i].y - particles[j].y
          const d  = Math.sqrt(dx * dx + dy * dy)
          if (d < 110) {
            ctx.beginPath()
            ctx.moveTo(particles[i].x, particles[i].y)
            ctx.lineTo(particles[j].x, particles[j].y)
            ctx.strokeStyle = `rgba(59,130,246,${0.1 * (1 - d / 110)})`
            ctx.lineWidth = 0.8
            ctx.stroke()
          }
        }
      }
      animId = requestAnimationFrame(draw)
    }

    const onMouse = (e: MouseEvent) => {
      const r = canvas.getBoundingClientRect()
      mouse = { x: e.clientX - r.left, y: e.clientY - r.top }
    }
    const onLeave = () => { mouse = { x: -999, y: -999 } }

    window.addEventListener('resize', resize)
    canvas.addEventListener('mousemove', onMouse)
    canvas.addEventListener('mouseleave', onLeave)
    resize()
    draw()
    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden pt-24 pb-16">
      <canvas ref={canvasRef} id="hero-canvas" className="absolute inset-0 w-full h-full" />

      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 w-full">
        {/* Name */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tight mb-4 animate-fade-up">
          {HERO.greeting}{' '}
          <span className="text-gradient">{HERO.name}</span>.
        </h1>

        {/* Typewriter */}
        <div className="text-xl sm:text-2xl font-medium text-slate-400 mb-5 min-h-[2rem]">
          <span>{typedText}</span>
          <span className="tw-cursor" />
        </div>

        {/* Bio */}
        <p
          className="text-lg text-slate-400 max-w-2xl mb-6 leading-relaxed"
          dangerouslySetInnerHTML={{ __html: HERO.bio }}
        />

        {/* Domain badges */}
        <div className="flex flex-wrap gap-2 mb-8">
          {HERO.domains.map((d) => (
            <span
              key={d.label}
              className="px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-300 text-sm font-medium"
              title={d.desc}
            >
              {d.label}
            </span>
          ))}
        </div>

        {/* CTAs */}
        <div className="flex flex-wrap gap-3 mb-12">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5 shadow-glow-blue hover:shadow-glow-blue-lg"
          >
            {HERO.cta.primary}
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-blue-500/40 text-slate-200 hover:border-blue-400 hover:bg-blue-500/10 font-semibold rounded-xl transition-all duration-200 hover:-translate-y-0.5"
          >
            {HERO.cta.secondary}
          </a>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-slate-600 text-xs animate-bounce-slow">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
        scroll
      </div>
    </section>
  )
}
