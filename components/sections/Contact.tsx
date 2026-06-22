'use client'

import { useState } from 'react'
import { CONTACT, SITE } from '@/lib/data'

const LinkedInIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
    <rect x="2" y="9" width="4" height="12"/>
    <circle cx="4" cy="4" r="2"/>
  </svg>
)

const GitHubIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/>
  </svg>
)

const MessageIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
  </svg>
)

const icons: Record<string, React.FC> = {
  linkedin: LinkedInIcon,
  github:   GitHubIcon,
}

type FormState = { name: string; email: string; message: string }
type Status    = 'idle' | 'sending' | 'sent' | 'error'

export default function Contact() {
  const [showForm, setShowForm] = useState(false)
  const [form, setForm]         = useState<FormState>({ name: '', email: '', message: '' })
  const [status, setStatus]     = useState<Status>('idle')
  const [errorMsg, setErrorMsg] = useState('')

  function update(field: keyof FormState) {
    return (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm(f => ({ ...f, [field]: e.target.value }))
  }

  async function submit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    setErrorMsg('')
    try {
      const res  = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      })
      const data = await res.json()
      if (res.ok) {
        setStatus('sent')
        setForm({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
        setErrorMsg(data.error ?? 'Something went wrong.')
      }
    } catch {
      setStatus('error')
      setErrorMsg('Network error. Please try again.')
    }
  }

  const inputClass =
    'w-full bg-surface-950 border border-surface-700 rounded-xl px-4 py-3 text-slate-200 text-sm placeholder:text-slate-600 focus:outline-none focus:border-blue-500/50 transition-colors'

  return (
    <section id="contact" className="py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="max-w-2xl mx-auto text-center reveal">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-2 flex items-center justify-center gap-2">
            <span className="w-7 h-px bg-gradient-to-r from-blue-500 to-blue-400 inline-block" />
            Contact
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Let&apos;s <span className="text-gradient">Connect</span>
          </h2>
          <p
            className="text-slate-400 text-[0.97rem] leading-relaxed mb-10"
            dangerouslySetInnerHTML={{ __html: CONTACT.subline }}
          />

          {/* Links row — Send a Message first */}
          <div className="flex flex-wrap gap-3 justify-center mb-8">
            <button
              onClick={() => setShowForm(v => !v)}
              className={`flex items-center gap-2.5 px-6 py-3 rounded-xl font-medium transition-all duration-200 hover:-translate-y-0.5 ${
                showForm
                  ? 'bg-blue-600 border border-blue-500 text-white'
                  : 'bg-surface-900 border border-surface-800 text-slate-300 hover:border-blue-500/40 hover:text-blue-300 hover:bg-blue-500/8'
              }`}
            >
              <MessageIcon />
              Send a Message
            </button>

            {CONTACT.links.map((link) => {
              const Icon = icons[link.icon]
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5 px-6 py-3 bg-surface-900 border border-surface-800 rounded-xl text-slate-300 font-medium hover:border-blue-500/40 hover:text-blue-300 hover:bg-blue-500/8 hover:-translate-y-0.5 transition-all duration-200"
                >
                  {Icon && <Icon />}
                  {link.label}
                </a>
              )
            })}
          </div>

          {/* Inline form — expands below buttons */}
          {showForm && (
            <div className="bg-surface-900 border border-surface-800 rounded-2xl p-6 sm:p-8 text-left mb-8">
              {status === 'sent' ? (
                <div className="flex flex-col items-center gap-3 py-8 text-center">
                  <span className="text-4xl">✅</span>
                  <p className="font-semibold text-slate-100">Message sent!</p>
                  <p className="text-slate-400 text-sm">Thanks for reaching out — I&apos;ll be in touch soon.</p>
                  <button
                    onClick={() => { setStatus('idle'); setShowForm(false) }}
                    className="mt-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Close
                  </button>
                </div>
              ) : (
                <form onSubmit={submit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-widest text-slate-500 block mb-1.5">Name</label>
                      <input
                        type="text"
                        required
                        value={form.name}
                        onChange={update('name')}
                        placeholder="Your name"
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className="text-xs font-semibold uppercase tracking-widest text-slate-500 block mb-1.5">Email</label>
                      <input
                        type="email"
                        required
                        value={form.email}
                        onChange={update('email')}
                        placeholder="your@email.com"
                        className={inputClass}
                      />
                    </div>
                  </div>
                  <div>
                    <label className="text-xs font-semibold uppercase tracking-widest text-slate-500 block mb-1.5">Message</label>
                    <textarea
                      required
                      rows={5}
                      value={form.message}
                      onChange={update('message')}
                      placeholder="What's on your mind?"
                      className={`${inputClass} resize-none`}
                    />
                  </div>

                  {status === 'error' && (
                    <p className="text-red-400 text-sm">{errorMsg}</p>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'sending'}
                    className="w-full py-3 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {status === 'sending' ? (
                      <><span className="w-4 h-4 rounded-full border-2 border-white/30 border-t-white animate-spin" />Sending...</>
                    ) : 'Send Message →'}
                  </button>
                </form>
              )}
            </div>
          )}

          <p className="text-slate-600 text-sm">
            Based in <span className="text-slate-400">{SITE.location}</span>
          </p>
        </div>
      </div>
    </section>
  )
}
