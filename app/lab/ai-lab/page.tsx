import type { Metadata } from 'next'
import AiLabClient from './AiLabClient'

export const metadata: Metadata = {
  title: 'AI Lab',
  description: 'Live AI-powered demos: Resume Matcher, Architecture Advisor, and Ask the Engineer chatbot.',
}

export default function AiLabPage() {
  return <AiLabClient />
}
