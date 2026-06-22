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
  title: {
    default: 'Sreeram Ganesan — Senior Frontend Engineer',
    template: '%s | Sreeram Ganesan',
  },
  description:
    'Senior Frontend Engineer specializing in React, Next.js, and modern web architecture. 15+ years building high-traffic web applications in Retail and Healthcare.',
  keywords: [
    'Frontend Engineer', 'React', 'Next.js', 'TypeScript', 'Principal Engineer',
    'Frontend Architect', 'Chicago', 'Healthcare Tech', 'Retail Tech',
  ],
  authors: [{ name: 'Sreeram Ganesan' }],
  openGraph: {
    title: 'Sreeram Ganesan — Senior Frontend Engineer',
    description: 'Building exceptional web experiences in Retail & Healthcare tech.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sreeram Ganesan — Senior Frontend Engineer',
    description: 'Building exceptional web experiences in Retail & Healthcare tech.',
  },
  robots: { index: true, follow: true },
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
