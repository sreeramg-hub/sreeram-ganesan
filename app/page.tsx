import Hero       from '@/components/sections/Hero'
import About      from '@/components/sections/About'
import Skills     from '@/components/sections/Skills'
import Experience from '@/components/sections/Experience'
import Projects   from '@/components/sections/Projects'
import LabSection from '@/components/sections/LabSection'
import Contact    from '@/components/sections/Contact'
import RevealInit from '@/components/RevealInit'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <LabSection />
      <Contact />
      {/* Initialises IntersectionObserver for .reveal elements */}
      <RevealInit />
    </>
  )
}
