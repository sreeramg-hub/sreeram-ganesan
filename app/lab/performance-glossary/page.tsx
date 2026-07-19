import type { Metadata } from 'next'
import GlossaryClient from './GlossaryClient'

export const metadata: Metadata = {
  title: 'Performance Glossary',
  description: 'Every web performance term explained twice — technically and like you\'re five. TTFB, LCP, CLS, INP, TBT and more.',
}

export default function PerformanceGlossaryPage() {
  return <GlossaryClient />
}
