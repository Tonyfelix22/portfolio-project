'use client'

import { motion } from 'framer-motion'
import { Github, Linkedin, Mail, Heart } from 'lucide-react'

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  }

  return (
    <footer
      style={{
        background: '#0A0A0A',
        borderTop: '1px solid #2A2520',
      }}
    >
      <motion.div
        className="max-w-6xl mx-auto px-6 py-12"
        initial="hidden"
        whileInView="visible"
        variants={containerVariants}
        viewport={{ once: true }}
      >
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10"
          variants={containerVariants}
        >
          {/* Brand */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl font-bold gradient-text mb-3">DA</h3>
            <p className="text-sm leading-relaxed" style={{ color: '#5A5040' }}>
              Data Analyst Portfolio.<br />Crafted with precision and creativity.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <p className="text-xs tracking-widest uppercase font-semibold mb-5" style={{ color: '#5A5040' }}>
              Quick Links
            </p>
            <ul className="space-y-2">
              {['home', 'projects', 'skills', 'contact'].map((link) => (
                <li key={link}>
                  <a
                    href={`#${link}`}
                    className="text-sm capitalize transition-colors"
                    style={{ color: '#8A8070' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#C9A84C')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = '#8A8070')}
                  >
                    {link.charAt(0).toUpperCase() + link.slice(1)}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social */}
          <motion.div variants={itemVariants}>
            <p className="text-xs tracking-widest uppercase font-semibold mb-5" style={{ color: '#5A5040' }}>
              Connect
            </p>
            <div className="flex gap-3">
              {[
                { href: 'https://www.linkedin.com/in/felix-maloba-47ab2240b/', icon: Linkedin, label: 'LinkedIn' },
                { href: 'https://github.com/Tonyfelix22', icon: Github, label: 'GitHub' },
                { href: 'mailto:felixmaloba22@gmail.com', icon: Mail, label: 'Email' },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== 'Email' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  className="p-2 transition-all"
                  style={{
                    background: '#111111',
                    border: '1px solid #2A2520',
                    borderRadius: '4px',
                    color: '#8A8070',
                  }}
                  whileHover={{ scale: 1.1, borderColor: '#C9A84C', color: '#C9A84C' } as any}
                  whileTap={{ scale: 0.95 }}
                  title={label}
                >
                  <Icon size={18} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          className="h-px mb-8"
          style={{ background: 'linear-gradient(90deg, transparent, #C9A84C, transparent)' }}
          variants={itemVariants}
        />

        {/* Copyright */}
        <motion.div
          className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm"
          style={{ color: '#5A5040' }}
          variants={itemVariants}
        >
          <p>© 2026 Data Analyst Portfolio. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <p>Made with</p>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Heart size={14} style={{ color: '#C9A84C' }} />
            </motion.div>
            <p>using React, Next.js &amp; Framer Motion</p>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}
