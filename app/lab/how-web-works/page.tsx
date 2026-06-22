import type { Metadata } from 'next'
import HowWebWorksClient from './HowWebWorksClient'

export const metadata: Metadata = {
  title: 'How the Web Works',
  description: 'An animated step-by-step journey from URL to rendered page — explained simply.',
}

export default function HowWebWorksPage() {
  return <HowWebWorksClient />
}
