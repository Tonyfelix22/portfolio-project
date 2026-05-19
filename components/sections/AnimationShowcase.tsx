'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Sparkles } from 'lucide-react'

export default function AnimationShowcase() {
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }

  const goldBox = 'linear-gradient(135deg, #C9A84C, #A08030)'
  const goldBoxLight = 'linear-gradient(135deg, #E8C870, #C9A84C)'
  const goldBoxDark = 'linear-gradient(135deg, #A08030, #8A6820)'

  const animations = [
    {
      name: 'Floating',
      description: 'Smooth floating motion',
      demo: (
        <motion.div
          className="w-12 h-12 rounded"
          style={{ background: goldBox }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      ),
    },
    {
      name: 'Pulse Glow',
      description: 'Pulsing glow effect',
      demo: (
        <motion.div
          className="w-12 h-12 rounded"
          style={{ background: goldBoxDark }}
          animate={{ boxShadow: ['0 0 0 0 rgba(201,168,76,0.7)', '0 0 0 12px rgba(201,168,76,0)'] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      ),
    },
    {
      name: 'Scale Rotate',
      description: 'Scale and rotation',
      demo: (
        <motion.div
          className="w-12 h-12 rounded"
          style={{ background: goldBoxLight }}
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 360] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      ),
    },
    {
      name: 'Shimmer',
      description: 'Opacity shimmer',
      demo: (
        <motion.div
          className="w-12 h-12 rounded"
          style={{ background: goldBox }}
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      ),
    },
    {
      name: 'Stagger List',
      description: 'Staggered animations',
      demo: (
        <div className="flex gap-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-3 h-3 rounded-full"
              style={{ background: '#C9A84C' }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>
      ),
    },
    {
      name: 'Morph Shape',
      description: 'Shape morphing',
      demo: (
        <motion.div
          className="w-12 h-12"
          style={{ background: goldBoxDark }}
          animate={{ borderRadius: ['4px', '50%', '4px'] }}
          transition={{ duration: 2, repeat: Infinity }}
        />
      ),
    },
    {
      name: 'Gradient Shift',
      description: 'Rotating gradient',
      demo: (
        <motion.div
          className="w-12 h-12 rounded"
          style={{ background: 'linear-gradient(45deg, #C9A84C, #E8C870, #A08030)', backgroundSize: '200% 200%' }}
          animate={{ backgroundPosition: ['0% 0%', '100% 100%', '0% 0%'] }}
          transition={{ duration: 3, repeat: Infinity }}
        />
      ),
    },
    {
      name: 'Bounce',
      description: 'Bouncy motion',
      demo: (
        <motion.div
          className="w-12 h-12 rounded"
          style={{ background: goldBox }}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        />
      ),
    },
  ]

  const features = [
    'Scroll-triggered reveal animations',
    'Smooth page transitions',
    'Interactive hover effects',
    'Parallax motion effects',
    'Animated counters & charts',
    'Staggered list animations',
    'Morph & shape transitions',
    'Glowing border effects',
  ]

  return (
    <section id="animations" className="py-24 px-6 relative" style={{ background: '#0D0D0D' }}>
      <div className="absolute top-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #2A2520, transparent)' }} />

      <div className="max-w-6xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true, margin: '-100px' }}>

          {/* Label */}
          <motion.div className="flex items-center gap-3 mb-16" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
            <div className="h-px w-8" style={{ background: '#C9A84C' }} />
            <p className="text-xs tracking-widest uppercase font-semibold" style={{ color: '#C9A84C' }}>Animation Showcase</p>
          </motion.div>

          <motion.div className="mb-16" variants={itemVariants}>
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text flex items-center gap-3">
              <Sparkles size={36} /> In Motion
            </h2>
            <p className="text-lg max-w-2xl" style={{ color: '#8A8070' }}>
              Smooth, interactive animations that bring this portfolio to life. Each element demonstrates advanced motion design principles.
            </p>
          </motion.div>

          {/* Animation Grid */}
          <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4" variants={containerVariants}>
            {animations.map((animation, index) => (
              <motion.div
                key={index}
                className="p-6 flex flex-col items-center justify-center min-h-56 cursor-pointer group relative overflow-hidden card-pop"
                variants={itemVariants}
                onHoverStart={() => setHoverIndex(index)}
                onHoverEnd={() => setHoverIndex(null)}
                whileHover={{ scale: 1.04, borderColor: '#C9A84C' } as any}
              >
                {/* Glow on hover */}
                {hoverIndex === index && (
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{ background: 'radial-gradient(ellipse at top, rgba(201,168,76,0.08) 0%, transparent 70%)' }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  />
                )}

                <div className="relative z-10 flex flex-col items-center gap-6">
                  <div className="flex items-center justify-center">{animation.demo}</div>
                  <div className="text-center">
                    <h3 className="font-semibold text-sm mb-1" style={{ color: '#F5F0E8' }}>{animation.name}</h3>
                    <p className="text-xs" style={{ color: '#5A5040' }}>{animation.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Feature List */}
          <motion.div
            className="mt-10 p-8"
            style={{ background: '#0F0F0F', border: '1px solid #2A2520', borderLeft: '2px solid #C9A84C', borderRadius: '4px' }}
            variants={itemVariants}
          >
            <p className="text-xs tracking-widest uppercase font-semibold mb-8" style={{ color: '#5A5040' }}>Animation Features</p>
            <motion.div className="grid grid-cols-1 md:grid-cols-2 gap-4" variants={containerVariants}>
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3"
                  variants={itemVariants}
                  transition={{ delay: index * 0.05 }}
                >
                  <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: '#C9A84C' }} />
                  <p className="text-sm" style={{ color: '#8A8070' }}>{feature}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px" style={{ background: 'linear-gradient(90deg, transparent, #2A2520, transparent)' }} />
    </section>
  )
}
