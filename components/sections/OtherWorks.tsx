'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { useState } from 'react'

export default function OtherWorks() {
  const [activeCategory, setActiveCategory] = useState<string>('all')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  }

  const categories = ['all', 'Web Design', 'Creative Coding', 'Open Source', 'Personal Projects']

  const works = [
    { id: 1, title: 'Interactive Portfolio Website', description: 'Custom portfolio showcasing data science projects with smooth animations', category: 'Web Design', technologies: ['React', 'Next.js', 'Framer Motion'] },
    { id: 2, title: 'Data Viz Playground', description: 'Interactive tool for experimenting with different data visualization techniques', category: 'Creative Coding', technologies: ['React', 'Recharts', 'D3.js'] },
    { id: 3, title: 'Analytics CLI Tool', description: 'Command-line tool for quick data analysis and report generation', category: 'Open Source', technologies: ['Python', 'Click', 'Pandas'] },
    { id: 4, title: 'Design System Components', description: 'Reusable component library for modern web applications', category: 'Web Design', technologies: ['React', 'TypeScript', 'Storybook'] },
    { id: 5, title: 'Generative Art Experiments', description: 'Creative coding projects exploring algorithmic design and motion', category: 'Creative Coding', technologies: ['Canvas', 'Three.js', 'JavaScript'] },
    { id: 6, title: 'Data Pipeline Framework', description: 'Open source framework for building scalable data pipelines', category: 'Open Source', technologies: ['Python', 'Airflow', 'PostgreSQL'] },
  ]

  const filteredWorks = activeCategory === 'all' ? works : works.filter((w) => w.category === activeCategory)

  return (
    <section id="works" className="py-32 md:py-48 px-6 relative bg-black">

      <div className="max-w-7xl mx-auto">
        <motion.div initial="hidden" whileInView="visible" variants={containerVariants} viewport={{ once: true, margin: '-100px' }}>

          {/* Header */}
          <motion.div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-24 md:mb-32" variants={itemVariants}>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-8 bg-[#D4AF37]" />
                <p className="text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase text-[#D4AF37]">
                  Beyond Analytics
                </p>
              </div>
              <h2 className="heading-lg">
                Peripheral <br />
                <span className="italic font-light text-muted">Explorations.</span>
              </h2>
            </div>
            
            <p className="text-muted max-w-sm leading-relaxed text-sm md:text-base pb-2 md:text-right">
              Creative projects and contributions beyond traditional data analytics — encompassing web design, creative coding, and open source frameworks.
            </p>
          </motion.div>

          {/* Filters */}
          <motion.div className="flex flex-wrap gap-4 mb-16" variants={itemVariants}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[10px] uppercase tracking-[0.2em] px-4 py-2 rounded-full border transition-all duration-300 ${
                  activeCategory === cat 
                    ? 'border-[#D4AF37] text-[#D4AF37] bg-[#D4AF37]/5' 
                    : 'border-[#F2EFE9]/10 text-muted hover:border-[#F2EFE9]/30 hover:text-[#F2EFE9]'
                }`}
              >
                {cat}
              </button>
            ))}
          </motion.div>

          {/* Directory List */}
          <motion.div className="flex flex-col border-t border-[#F2EFE9]/10" variants={containerVariants} key={activeCategory}>
            {filteredWorks.map((work) => (
              <motion.div
                key={work.id}
                className="group border-b border-[#F2EFE9]/10 py-8 md:py-10 flex flex-col md:flex-row md:items-center justify-between gap-6 hover:bg-[#F2EFE9]/[0.02] transition-colors relative"
                variants={itemVariants}
                layout
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {/* Hover Line */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#D4AF37] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-center" />

                <div className="flex flex-col gap-3 pl-4 md:pl-8 md:w-1/2">
                  <h3 className="text-xl md:text-3xl font-heading text-[#F2EFE9]">{work.title}</h3>
                  <p className="text-sm md:text-base text-muted max-w-lg leading-relaxed">{work.description}</p>
                </div>
                
                <div className="flex flex-col md:flex-row md:items-center justify-between md:justify-end gap-6 md:gap-16 w-full md:w-1/2 pl-4 md:pl-0 pr-4 md:pr-8">
                  <div className="flex flex-wrap gap-2">
                    {work.technologies.slice(0, 2).map((tech) => (
                      <span key={tech} className="text-[10px] font-mono tracking-widest uppercase text-muted">
                        [{tech}]
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex items-center gap-6">
                    <span className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#D4AF37] whitespace-nowrap">
                      {work.category}
                    </span>
                    <button className="text-[#F2EFE9] group-hover:text-[#D4AF37] transition-colors p-2 rounded-full border border-transparent group-hover:border-[#D4AF37]/30 group-hover:bg-[#D4AF37]/5">
                      <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredWorks.length === 0 && (
            <motion.div className="text-center py-24" variants={itemVariants}>
              <p className="text-muted font-mono text-sm tracking-widest uppercase">No records found matching criteria.</p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  )
}
