import type { Metadata } from 'next'
import { Inter, Fira_Code } from 'next/font/google'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Nav from '@/components/Nav'
import Footer from '@/components/Footer'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const firaCode = Fira_Code({
  subsets: ['latin'],
  variable: '--font-fira-code',
  display: 'swap',
  weight: ['400', '500'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.sreeramganesan.dev'),
  title: {
    default: 'Sreeram Ganesan — Senior Frontend Engineer',
    template: '%s | Sreeram Ganesan',
  },
  description:
    'Senior Frontend Engineer with 15+ years building high-traffic web applications in Retail and Healthcare. Specializing in React, Next.js, TypeScript, and AI-augmented engineering.',
  keywords: [
    'Sreeram Ganesan', 'Frontend Engineer', 'Senior Frontend Engineer',
    'React', 'Next.js', 'TypeScript', 'Principal Engineer',
    'Frontend Architect', 'Chicago', 'Healthcare Tech', 'Retail Tech',
    'AI Agents', 'CrewAI', 'Web Performance',
  ],
  authors: [{ name: 'Sreeram Ganesan', url: 'https://www.sreeramganesan.dev' }],
  creator: 'Sreeram Ganesan',
  openGraph: {
    title: 'Sreeram Ganesan — Senior Frontend Engineer',
    description: 'Senior Frontend Engineer with 15+ years in Retail & Healthcare tech. React, Next.js, AI agents.',
    url: 'https://www.sreeramganesan.dev',
    siteName: 'Sreeram Ganesan',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sreeram Ganesan — Senior Frontend Engineer',
    description: 'Senior Frontend Engineer with 15+ years in Retail & Healthcare tech. React, Next.js, AI agents.',
    creator: '@sreeramganesan',
  },
  alternates: {
    canonical: 'https://www.sreeramganesan.dev',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, 'max-image-preview': 'large' },
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${firaCode.variable} scroll-smooth`}
    >
      <body className="bg-surface-950 text-slate-100 font-sans antialiased">
        <Nav />
        <main>{children}</main>
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
