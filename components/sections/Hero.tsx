'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden flex items-center pt-32 pb-20 mask-fade-bottom"
    >
      {/* Background Graphic: Abstract Data Lines */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-30">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <motion.path
            d="M0,80 C20,80 30,30 50,50 C70,70 80,20 100,40"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="0.1"
            className="animate-dash"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 3, delay: 1 }}
          />
          <motion.path
            d="M0,90 C30,90 40,40 60,60 C80,80 90,30 100,50"
            fill="none"
            stroke="#D4AF37"
            strokeWidth="0.05"
            className="animate-dash"
            style={{ animationDirection: 'reverse', animationDuration: '30s' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            transition={{ duration: 3, delay: 1.5 }}
          />
        </svg>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
        <motion.div
          className="max-w-5xl"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Eyebrow */}
          <motion.div variants={itemVariants} className="flex items-center gap-4 mb-8">
            <div className="h-px w-8 bg-[#D4AF37]" />
            <p className="text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase text-[#D4AF37]">
              Independent Data Strategist
            </p>
          </motion.div>

          {/* Headline */}
          <motion.h1 
            className="heading-xl mb-12"
            variants={itemVariants}
          >
            Turning raw data <br />
            <span className="text-muted italic font-light">into strategic</span> <br />
            clarity.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg md:text-xl max-w-xl leading-relaxed text-muted mb-14"
            variants={itemVariants}
          >
            I architect elegant data models and build insightful visual narratives that empower high-impact decision making.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-8 items-start sm:items-center"
            variants={itemVariants}
          >
            <button 
              className="pill-button group relative overflow-hidden"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <span className="relative z-10 flex items-center gap-3">
                Explore Work <ArrowUpRight size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
              </span>
            </button>
            
            <button className="group flex items-center gap-2 text-sm font-medium tracking-wide text-muted hover:text-[#F2EFE9] transition-colors">
              <span className="relative after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#D4AF37] after:transition-all after:duration-300 group-hover:after:w-full pb-1">
                Download Resume
              </span>
            </button>
          </motion.div>
        </motion.div>

        {/* Floating Accent Details */}
        <motion.div 
          className="absolute right-6 md:right-12 bottom-0 hidden lg:flex flex-col items-end gap-3 animate-float-minimal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 2 }}
        >
          <p className="text-[10px] font-mono tracking-[0.2em] text-muted uppercase">SYS_STATUS: OPTIMAL</p>
          <div className="flex gap-1.5 items-end h-8">
            <div className="w-1 bg-[#D4AF37]/30 animate-pulse h-3" />
            <div className="w-1 bg-[#D4AF37]/50 animate-pulse h-5" style={{ animationDelay: '0.2s' }} />
            <div className="w-1 bg-[#D4AF37]/70 animate-pulse h-4" style={{ animationDelay: '0.4s' }} />
            <div className="w-1 bg-[#D4AF37] h-8" style={{ animationDelay: '0.6s' }} />
          </div>
        </motion.div>
      </div>
    </section>
  )
}