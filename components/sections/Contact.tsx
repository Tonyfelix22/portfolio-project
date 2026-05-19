'use client'

import { motion } from 'framer-motion'
import { Mail, Linkedin, Github, ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const recipient = 'felixmaloba22@gmail.com'
    const subject = encodeURIComponent(`Portfolio Inquiry from ${formData.name}`)
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )

    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`

    setSubmitted(true)
    setTimeout(() => {
      setFormData({ name: '', email: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  const socialLinks = [
    { icon: Linkedin, label: 'LinkedIn', url: 'https://www.linkedin.com/in/felix-maloba-47ab2240b/' },
    { icon: Github,   label: 'GitHub',   url: 'https://github.com/Tonyfelix22' },
  ]

  return (
    <section
      id="contact"
      className="pt-32 md:pt-48 pb-12 px-6 relative bg-black min-h-screen flex flex-col justify-between overflow-hidden"
    >
      <div className="max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center relative z-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Massive Cinematic Heading */}
          <motion.div className="flex flex-col items-center text-center mb-32" variants={itemVariants}>
            <p className="text-[10px] font-mono tracking-[0.4em] uppercase text-[#D4AF37] mb-8">
              Initiate Contact
            </p>
            <h2 className="text-[15vw] md:text-[12rem] font-heading leading-[0.8] tracking-tighter text-[#F2EFE9] mb-8">
              Let's <br className="md:hidden" /><span className="italic font-light text-muted">Talk.</span>
            </h2>
            <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed mt-6">
              Whether you have a dataset waiting to be deciphered or a strategic initiative needing analytical rigor, I'm ready to collaborate.
            </p>
          </motion.div>

          <motion.div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24" variants={containerVariants}>
            
            {/* Minimal Form */}
            <motion.div className="lg:col-span-7" variants={itemVariants}>
              <form onSubmit={handleSubmit} className="flex flex-col gap-12">
                <div className="relative group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="YOUR NAME"
                    className="w-full bg-transparent border-b border-[#F2EFE9]/10 pb-4 text-sm md:text-base font-medium tracking-widest uppercase text-[#F2EFE9] outline-none transition-colors focus:border-[#D4AF37] placeholder:text-[#F2EFE9]/20"
                    required
                  />
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#D4AF37] transition-all duration-500 group-focus-within:w-full" />
                </div>

                <div className="relative group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="EMAIL ADDRESS"
                    className="w-full bg-transparent border-b border-[#F2EFE9]/10 pb-4 text-sm md:text-base font-medium tracking-widest uppercase text-[#F2EFE9] outline-none transition-colors focus:border-[#D4AF37] placeholder:text-[#F2EFE9]/20"
                    required
                  />
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#D4AF37] transition-all duration-500 group-focus-within:w-full" />
                </div>

                <div className="relative group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="PROJECT DETAILS OR INQUIRY"
                    rows={4}
                    className="w-full bg-transparent border-b border-[#F2EFE9]/10 pb-4 text-sm md:text-base font-medium tracking-widest uppercase text-[#F2EFE9] outline-none transition-colors focus:border-[#D4AF37] placeholder:text-[#F2EFE9]/20 resize-none"
                    required
                  />
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#D4AF37] transition-all duration-500 group-focus-within:w-full" />
                </div>

                <button
                  type="submit"
                  disabled={submitted}
                  className="pill-button w-max group disabled:opacity-50"
                >
                  <span className="relative z-10 flex items-center gap-3">
                    {submitted ? 'TRANSMISSION SENT' : 'TRANSMIT MESSAGE'} 
                    {!submitted && <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
                  </span>
                </button>
              </form>
            </motion.div>

            {/* Direct Contact & Socials */}
            <motion.div className="lg:col-span-5 flex flex-col justify-between pt-2" variants={itemVariants}>
              <div className="flex flex-col gap-12">
                <div>
                  <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted mb-4">Direct Comm Link</p>
                  <a 
                    href="mailto:felixmaloba22@gmail.com" 
                    className="text-xl md:text-2xl font-heading text-[#F2EFE9] hover:text-[#D4AF37] transition-colors"
                  >
                    felixmaloba22@gmail.com
                  </a>
                </div>

                <div>
                  <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted mb-6">Digital Footprint</p>
                  <div className="flex flex-wrap gap-4">
                    {socialLinks.map((social) => (
                      <a
                        key={social.label}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-full border border-[#F2EFE9]/10 flex items-center justify-center text-[#F2EFE9]/60 hover:text-[#D4AF37] hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/5 transition-all duration-300"
                        title={social.label}
                      >
                        <social.icon size={18} />
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

          </motion.div>
        </motion.div>
      </div>

      {/* Cinematic Footer Meta */}
      <div className="w-full max-w-7xl mx-auto mt-32 border-t border-[#F2EFE9]/5 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 relative z-10">
        <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted">
          © {new Date().getFullYear()} Felix Maloba. All rights reserved.
        </p>
        <div className="flex items-center gap-3">
          <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
          <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted">
            SYS_STATUS: ONLINE
          </p>
        </div>
      </div>
    </section>
  )
}
