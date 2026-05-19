'use client'

import Navbar from '@/components/sections/Navbar'
import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import Projects from '@/components/sections/Projects'
import Dashboard from '@/components/sections/Dashboard'
import Skills from '@/components/sections/Skills'
import Timeline from '@/components/sections/Timeline'
import OtherWorks from '@/components/sections/OtherWorks'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-x-hidden bg-black selection:bg-[#D4AF37]/30 selection:text-[#F2EFE9]">
      {/* Navigation */}
      <Navbar />

      {/* Cinematic Sections */}
      <Hero />
      <About />
      <Projects />
      <Dashboard />
      <Skills />
      <Timeline />
      <OtherWorks />
      <Contact />
    </main>
  )
}
