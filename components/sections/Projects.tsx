'use client'

import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'

export default function Projects() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  }

  const projects = [
    {
      id: 'sales-dashboard',
      title: 'Sales Analytics & Forecasting',
      description: 'An interactive sales performance ecosystem analyzing quarterly revenue trends, regional KPIs, and predictive modeling for next-quarter targets.',
      technologies: ['Power BI', 'SQL', 'Predictive Modeling'],
    },
    {
      id: 'churn-analysis',
      title: 'Customer Churn Prediction',
      description: 'Advanced predictive analysis utilizing Python to identify at-risk customers, uncover hidden behavioral patterns, and deploy retention optimization strategies.',
      technologies: ['Python', 'Pandas', 'Statistical Modeling'],
    },
    {
      id: 'netflix-data',
      title: 'Global Streaming Exploration',
      description: 'An in-depth, art-directed exploration of streaming data revealing content performance, regional user preferences, and recommendation algorithm opportunities.',
      technologies: ['Python', 'Tableau', 'Data Storytelling'],
    },
    {
      id: 'financial-kpi',
      title: 'Executive Financial Intelligence',
      description: 'A bespoke executive-level dashboard tracking high-level financial metrics, profit margins, and granular business performance indicators in real-time.',
      technologies: ['Tableau', 'SQL', 'Financial Modeling'],
    },
  ]

  return (
    <section
      id="projects"
      className="py-32 md:py-48 px-6 relative bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Editorial Section Header */}
          <motion.div className="mb-32 md:mb-48 flex flex-col md:flex-row md:items-end justify-between gap-8" variants={itemVariants}>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-8 bg-[#D4AF37]" />
                <p className="text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase text-[#D4AF37]">
                  Selected Work
                </p>
              </div>
              <h2 className="heading-lg max-w-2xl">
                Data turned into <br />
                <span className="italic font-light text-muted">narrative.</span>
              </h2>
            </div>
            
            <p className="text-muted max-w-sm leading-relaxed text-sm md:text-base pb-2">
              A curated selection of projects demonstrating my approach to data architecture, analytical rigor, and visual storytelling.
            </p>
          </motion.div>

          {/* Projects List - Staggered Layout */}
          <div className="flex flex-col gap-32 md:gap-48">
            {projects.map((project, index) => {
              const isEven = index % 2 === 0;
              
              return (
                <motion.div 
                  key={project.id}
                  className={`relative flex flex-col md:flex-row gap-12 lg:gap-24 items-center ${isEven ? 'md:flex-row-reverse' : ''}`}
                  variants={itemVariants}
                >
                  {/* Huge Background Number */}
                  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-bold text-[#F2EFE9]/[0.03] select-none z-0 pointer-events-none font-heading leading-none">
                    0{index + 1}
                  </div>

                  {/* Image Block */}
                  <div className="w-full md:w-3/5 relative z-10 group cursor-pointer">
                    <div className="aspect-[4/3] md:aspect-[16/10] bg-[#050505] border border-[#F2EFE9]/10 relative overflow-hidden flex items-center justify-center">
                        {/* Minimal data-viz style placeholder */}
                        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(212,175,55,0.03)_1px,transparent_1px)] bg-[size:30px_30px] transition-transform duration-700 group-hover:scale-105" />
                        
                        {/* Abstract animated elements based on index to make them distinct */}
                        {index % 2 === 0 ? (
                          <div className="w-32 h-32 rounded-full border border-[#D4AF37]/20 absolute animate-pulse" style={{ animationDuration: '4s' }} />
                        ) : (
                          <div className="w-full h-px bg-[#D4AF37]/20 absolute rotate-45 transform origin-center" />
                        )}

                        <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black to-transparent z-10" />
                        
                        <div className="relative z-20 flex flex-col items-center gap-4 transition-transform duration-500 group-hover:scale-105">
                          <p className="font-mono text-[10px] text-[#D4AF37]/60 tracking-[0.3em] uppercase">
                            [ SYS_DATA_{index + 1} ]
                          </p>
                          <div className="h-px w-12 bg-[#D4AF37]/40" />
                        </div>
                    </div>
                  </div>

                  {/* Text Block */}
                  <div className={`w-full md:w-2/5 relative z-10 flex flex-col ${isEven ? 'items-start md:items-end md:text-right' : 'items-start text-left'}`}>
                    <h3 className="text-3xl md:text-5xl font-heading mb-6 text-[#F2EFE9] leading-[1.1] tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-muted leading-relaxed mb-8 md:text-lg">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className={`flex flex-wrap gap-2 mb-10 ${isEven ? 'md:justify-end' : 'justify-start'}`}>
                      {project.technologies.map(tech => (
                        <span key={tech} className="text-[10px] font-mono tracking-widest uppercase text-[#D4AF37] px-4 py-1.5 border border-[#D4AF37]/20 rounded-full bg-[#D4AF37]/5">
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Action */}
                    <button className="group flex items-center gap-3 text-xs font-medium tracking-[0.2em] uppercase text-[#F2EFE9] hover:text-[#D4AF37] transition-colors">
                      <span className="relative pb-1 after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#D4AF37] after:transition-all after:duration-300 group-hover:after:w-full">
                        View Case Study
                      </span>
                      <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                    </button>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
