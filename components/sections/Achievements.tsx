'use client'

import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import { Award, Code, GitBranch, PieChart } from 'lucide-react'

export default function Achievements() {
  const [counts, setCounts] = useState({
    projects: 0,
    certifications: 0,
    contributions: 0,
    visualizations: 0,
  })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  useEffect(() => {
    const targets = { projects: 24, certifications: 5, contributions: 127, visualizations: 58 }
    const timers: NodeJS.Timeout[] = []

    Object.entries(targets).forEach(([key, target]) => {
      let current = 0
      const increment = target / 50
      const timer = setInterval(() => {
        current += increment
        if (current >= target) {
          setCounts((prev) => ({ ...prev, [key]: target }))
          clearInterval(timer)
        } else {
          setCounts((prev) => ({ ...prev, [key]: Math.floor(current) }))
        }
      }, 30)
      timers.push(timer)
    })

    return () => timers.forEach(clearInterval)
  }, [])

  const achievements = [
    { icon: Code,      number: counts.projects,       label: 'Projects Completed',    description: 'Data analysis and visualization projects delivered' },
    { icon: Award,     number: counts.certifications,  label: 'Certifications',         description: 'Professional certifications and recognitions' },
    { icon: GitBranch, number: counts.contributions,   label: 'Data Analyses',          description: 'Complex data exploration and insights delivered' },
    { icon: PieChart,  number: counts.visualizations,  label: 'Visualizations Created', description: 'Interactive dashboards and charts produced' },
  ]

  const AchievementCard = ({ icon: Icon, number, label, description }: any) => (
    <motion.div
      className="p-8 text-center group relative overflow-hidden"
      style={{
        background: '#0F0F0F',
        border: '1px solid #2A2520',
        borderTop: '2px solid #C9A84C',
        borderRadius: '4px',
      }}
      variants={itemVariants}
      whileHover={{ scale: 1.04, borderColor: '#C9A84C' } as any}
    >
      {/* Hover glow */}
      <motion.div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at top, rgba(201,168,76,0.07) 0%, transparent 70%)' }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="relative z-10 inline-block mb-5"
        animate={{ rotate: [0, 8, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
      >
        <div
          className="p-4"
          style={{
            background: 'rgba(201,168,76,0.08)',
            border: '1px solid rgba(201,168,76,0.2)',
            borderRadius: '4px',
          }}
        >
          <Icon size={28} style={{ color: '#C9A84C' }} />
        </div>
      </motion.div>

      <motion.div
        className="relative z-10 text-4xl font-bold gradient-text mb-2"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {number}+
      </motion.div>

      <h3 className="relative z-10 text-sm font-semibold tracking-wide mb-2" style={{ color: '#F5F0E8' }}>{label}</h3>
      <p className="relative z-10 text-xs leading-relaxed" style={{ color: '#5A5040' }}>{description}</p>
    </motion.div>
  )

  return (
    <section
      className="py-24 px-6 relative"
      style={{ background: '#0A0A0A' }}
    >
      {/* Top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #2A2520, transparent)' }}
      />

      <div className="max-w-6xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Label */}
          <motion.div
            className="flex items-center gap-3 mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-px w-8" style={{ background: '#C9A84C' }} />
            <p className="text-xs tracking-widest uppercase font-semibold" style={{ color: '#C9A84C' }}>
              Achievements & Milestones
            </p>
          </motion.div>

          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">By the Numbers</h2>
            <p className="text-lg max-w-2xl" style={{ color: '#8A8070' }}>
              Quantified impact and accomplishments in data analytics and visualization.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-10"
            variants={containerVariants}
          >
            {achievements.map((a, index) => (
              <AchievementCard key={index} {...a} />
            ))}
          </motion.div>

          {/* Highlights */}
          <motion.div
            className="p-8"
            style={{
              background: '#0F0F0F',
              border: '1px solid #2A2520',
              borderLeft: '2px solid #C9A84C',
              borderRadius: '4px',
            }}
            variants={itemVariants}
          >
            <p className="text-xs tracking-widest uppercase font-semibold mb-8" style={{ color: '#5A5040' }}>
              Highlights & Recognition
            </p>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
              variants={containerVariants}
            >
              {[
                { title: 'Dashboard Design Excellence',  description: 'Created dashboards that improved decision-making efficiency by 40%' },
                { title: 'Data Quality Initiative',       description: 'Led data validation project that reduced errors by 95%' },
                { title: 'Analytics Automation',          description: 'Automated 15+ recurring reports, saving 20+ hours monthly' },
                { title: 'Insight Generation',            description: 'Discovered critical business insights leading to $500K+ revenue impact' },
              ].map((highlight, index) => (
                <motion.div
                  key={index}
                  className="p-5 transition-all"
                  style={{
                    background: '#111111',
                    border: '1px solid #2A2520',
                    borderRadius: '4px',
                  }}
                  variants={itemVariants}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ borderColor: '#C9A84C' } as any}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-1.5 h-1.5 rounded-full" style={{ background: '#C9A84C' }} />
                    <h4 className="font-semibold text-sm" style={{ color: '#F5F0E8' }}>{highlight.title}</h4>
                  </div>
                  <p className="text-xs leading-relaxed pl-3.5" style={{ color: '#8A8070' }}>{highlight.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #2A2520, transparent)' }}
      />
    </section>
  )
}
