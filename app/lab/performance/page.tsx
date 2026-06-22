import type { Metadata } from 'next'
import PerformanceClient from './PerformanceClient'

export const metadata: Metadata = {
  title: 'Performance Monitor',
  description: 'Live Core Web Vitals measurement of this site — LCP, FCP, TTFB, CLS, INP with real-time scores.',
}

export default function PerformancePage() {
  return <PerformanceClient />
}
