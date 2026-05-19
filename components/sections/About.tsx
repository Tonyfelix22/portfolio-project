'use client'

import { motion } from 'framer-motion'
import { Database, TrendingUp, Code } from 'lucide-react'

export default function About() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  }

  const skills = [
    { category: 'Databases', proficiency: 85, items: ['SQL', 'PostgreSQL', 'MySQL'], icon: Database },
    { category: 'Analytics', proficiency: 40, items: ['Power BI', 'Excel'], icon: TrendingUp },
    { category: 'Programming', proficiency: 75, items: ['Python', 'Pandas', 'NumPy'], icon: Code },
  ]

  return (
    <section
      id="about"
      className="py-24 px-6 relative"
      style={{ background: '#0A0A0A' }}
    >
      {/* Section top border */}
      <div
        className="absolute top-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #2A2520, transparent)' }}
      />

      <div className="max-w-6xl mx-auto">

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
            About Me
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Left Column - Photo + stat blocks */}
          <motion.div variants={itemVariants} className="space-y-6">

            {/* Photo placeholder */}
            <div
              className="w-full aspect-square flex items-center justify-center relative overflow-hidden"
              style={{
                background: '#0F0F0F',
                border: '1px solid #2A2520',
                borderRadius: '4px',
              }}
            >
              {/* Corner accents */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t-2 border-l-2" style={{ borderColor: '#C9A84C' }} />
              <div className="absolute top-0 right-0 w-6 h-6 border-t-2 border-r-2" style={{ borderColor: '#C9A84C' }} />
              <div className="absolute bottom-0 left-0 w-6 h-6 border-b-2 border-l-2" style={{ borderColor: '#C9A84C' }} />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b-2 border-r-2" style={{ borderColor: '#C9A84C' }} />

              <div className="text-center">
                <p className="text-sm" style={{ color: '#5A5040' }}>Photo Placeholder</p>
                <p className="text-xs mt-2" style={{ color: '#3A3028' }}>Add your professional photo here</p>
              </div>
            </div>

            {/* Stat row */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { label: 'Projects Completed', value: '24' },
                { label: 'Tools Mastered', value: '8+' },
              ].map((stat) => (
                <div
                  key={stat.label}
                  className="p-4"
                  style={{
                    background: '#0F0F0F',
                    border: '1px solid #2A2520',
                    borderTop: '2px solid #C9A84C',
                    borderRadius: '4px',
                  }}
                >
                  <p className="text-2xl font-bold gradient-text">{stat.value}</p>
                  <p className="text-xs mt-1" style={{ color: '#5A5040' }}>{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column - Bio and Skills */}
          <motion.div variants={itemVariants} className="space-y-10">

            <div className="space-y-4">
              <h2
                className="text-4xl font-bold"
                style={{ color: '#F5F0E8' }}
              >
                Turning data into <span className="gradient-text">decisions.</span>
              </h2>
              <p className="text-lg leading-relaxed" style={{ color: '#8A8070' }}>
                I am a data analyst with a keen eye for uncovering insights from complex datasets.
                With expertise in SQL, Python, and advanced visualization tools, I transform raw
                data into actionable business intelligence.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: '#8A8070' }}>
                My goal is to bridge the gap between data science and user-friendly visualization,
                making findings accessible to any audience.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              <p className="text-xs tracking-widest uppercase font-semibold" style={{ color: '#5A5040' }}>
                Core Skills
              </p>
              {skills.map((skill, index) => {
                const Icon = skill.icon
                return (
                  <motion.div
                    key={skill.category}
                    className="p-5"
                    style={{
                      background: '#0F0F0F',
                      border: '1px solid #2A2520',
                      borderLeft: '2px solid #C9A84C',
                      borderRadius: '4px',
                    }}
                    variants={itemVariants}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <Icon size={16} style={{ color: '#C9A84C' }} />
                        <h3 className="font-semibold text-sm" style={{ color: '#F5F0E8' }}>
                          {skill.category}
                        </h3>
                      </div>
                      <span className="text-xs font-mono" style={{ color: '#5A5040' }}>
                        {skill.proficiency}%
                      </span>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {skill.items.map((item) => (
                        <span
                          key={item}
                          className="text-xs px-2 py-1"
                          style={{
                            background: 'rgba(201, 168, 76, 0.06)',
                            color: '#C9A84C',
                            border: '1px solid rgba(201, 168, 76, 0.15)',
                            borderRadius: '2px',
                          }}
                        >
                          {item}
                        </span>
                      ))}
                    </div>

                    {/* Progress bar */}
                    <div
                      className="w-full h-px"
                      style={{ background: '#1E1E1E' }}
                    >
                      <motion.div
                        className="h-full"
                        style={{ background: '#C9A84C' }}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.proficiency}%` }}
                        transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                )
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Section bottom border */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: 'linear-gradient(90deg, transparent, #2A2520, transparent)' }}
      />
    </section>
  )
}

