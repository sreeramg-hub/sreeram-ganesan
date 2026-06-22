import Hero       from '@/components/sections/Hero'
import About      from '@/components/sections/About'
import Skills     from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Projects   from '@/components/sections/Projects'
import LabSection from '@/components/sections/LabSection'
import Contact    from '@/components/sections/Contact'
import RevealInit from '@/components/RevealInit'

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Sreeram Ganesan',
  url: 'https://www.sreeramganesan.dev',
  image: 'https://www.sreeramganesan.dev/profile.jpg',
  jobTitle: 'Senior Frontend Engineer',
  description:
    'Senior Frontend Engineer with 15+ years building high-traffic web applications in Retail and Healthcare. Specializing in React, Next.js, TypeScript, and AI-augmented engineering.',
  worksFor: { '@type': 'Organization', name: 'CVS Health' },
  address: { '@type': 'PostalAddress', addressLocality: 'Chicago', addressRegion: 'IL', addressCountry: 'US' },
  sameAs: [
    'https://www.linkedin.com/in/sreeram-ganesan-92237468/',
    'https://github.com/sreeramg-hub',
  ],
  knowsAbout: [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'AI Agents',
    'Web Performance', 'Frontend Architecture', 'Healthcare Tech', 'Retail Tech',
  ],
}

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <LabSection />
      <Contact />
      <RevealInit />
    </>
  )
}
