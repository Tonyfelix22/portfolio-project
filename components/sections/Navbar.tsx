'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Menu, X } from 'lucide-react'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const sections = [
    { id: 'projects', label: 'Work' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ]

  const scrollToSection = (id: string) => {
    setIsOpen(false)
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <motion.nav
      className={`fixed top-6 left-1/2 -translate-x-1/2 z-50 transition-all duration-500 w-full max-w-3xl px-4 md:px-0`}
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
    >
      <div 
        className="backdrop-blur-xl bg-black/50 border border-[#F2EFE9]/10 rounded-full px-8 py-4 flex items-center justify-between"
        style={{ boxShadow: '0 20px 40px -10px rgba(0,0,0,0.8)' }}
      >
        {/* Logo / Name */}
        <div className="flex items-center gap-6 cursor-pointer" onClick={() => scrollToSection('home')}>
          <span className="text-[#F2EFE9] font-medium tracking-wide text-sm">Felix Maloba</span>
          
          {/* Status Indicator */}
          <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#D4AF37]/5 border border-[#D4AF37]/20">
            <div className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#D4AF37]"></span>
            </div>
            <span className="text-[10px] uppercase tracking-widest text-[#D4AF37] font-medium">Available</span>
          </div>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="text-xs font-medium uppercase tracking-widest text-[#F2EFE9]/60 hover:text-[#D4AF37] transition-colors"
            >
              {section.label}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-[#F2EFE9]/80 hover:text-[#D4AF37] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          className="md:hidden mt-4 backdrop-blur-xl bg-black/80 border border-[#F2EFE9]/10 rounded-2xl p-6 flex flex-col gap-6"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
        >
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="text-sm font-medium uppercase tracking-widest text-[#F2EFE9]/80 hover:text-[#D4AF37] transition-colors text-left pb-4 border-b border-[#F2EFE9]/5 last:border-0"
            >
              {section.label}
            </button>
          ))}
          <div className="flex items-center gap-3 mt-2">
            <div className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4AF37] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#D4AF37]"></span>
            </div>
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-medium">Available for any works related </span>
          </div>
        </motion.div>
      )}
    </motion.nav>
  )
}