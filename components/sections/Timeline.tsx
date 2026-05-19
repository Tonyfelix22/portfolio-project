'use client'

import { motion } from 'framer-motion'

export default function Timeline() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: [0.16, 1, 0.3, 1] },
    },
  }

  const timelineItems = [
    {
      type: 'education',
      title: 'Bachelor of Science in Data Science',
      company: 'University Name',
      date: '2022 - 2024',
      description: 'Focused on statistical analysis, machine learning, and business analytics with emphasis on real-world data applications.',
    },
    {
      type: 'experience',
      title: 'Data Analytics Internship',
      company: 'Tech Company Inc.',
      date: '2023 - Present',
      description: 'Developed executive dashboards, analyzed customer behavior data, and engineered optimized SQL reporting pipelines.',
    },
    {
      type: 'certification',
      title: 'Google Data Analytics Professional',
      company: 'Coursera',
      date: '2023',
      description: 'Comprehensive certification covering rigorous data analysis, advanced visualization, and business intelligence best practices.',
    },
    {
      type: 'education',
      title: 'Advanced Python for Data Analysis',
      company: 'Online Course Platform',
      date: '2023',
      description: 'Mastered Pandas, NumPy, and complex data manipulation techniques for high-performance data processing.',
    },
    {
      type: 'experience',
      title: 'Junior Data Analyst',
      company: 'Analytics Startup',
      date: '2022 - 2023',
      description: 'Supported data-driven decision making by creating interactive visual narratives and conducting deep exploratory analysis.',
    },
  ]

  return (
    <section
      id="timeline"
      className="py-32 md:py-48 px-6 relative bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Header */}
          <motion.div className="flex flex-col md:flex-row justify-between items-end gap-12 mb-32" variants={itemVariants}>
            <div>
              <div className="flex items-center gap-4 mb-6">
                <div className="h-px w-8 bg-[#D4AF37]" />
                <p className="text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase text-[#D4AF37]">
                  Career Trajectory
                </p>
              </div>
              <h2 className="heading-lg">
                Experience <br />
                <span className="italic font-light text-muted">& Education.</span>
              </h2>
            </div>
            
            <p className="text-muted max-w-sm leading-relaxed text-sm md:text-base pb-2 md:text-right">
              A chronological record of academic foundation, professional milestones, and continuous technical refinement.
            </p>
          </motion.div>

          {/* Timeline List */}
          <div className="flex flex-col border-t border-[#F2EFE9]/10">
            {timelineItems.map((item, index) => (
              <motion.div 
                key={index}
                className="group border-b border-[#F2EFE9]/10 py-12 md:py-16 flex flex-col md:flex-row gap-8 md:gap-16 relative hover:bg-[#F2EFE9]/[0.02] transition-colors"
                variants={itemVariants}
              >
                {/* Accent Line on hover */}
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#D4AF37] scale-y-0 group-hover:scale-y-100 transition-transform duration-500 origin-center" />

                <div className="md:w-1/4 flex flex-col gap-2 pl-4 md:pl-8">
                  <p className="text-[10px] font-mono tracking-[0.3em] uppercase text-muted">{item.date}</p>
                  <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#D4AF37] opacity-0 group-hover:opacity-100 transition-opacity">
                    [{item.type}]
                  </p>
                </div>
                
                <div className="md:w-3/4 flex flex-col gap-4 pl-4 md:pl-0 pr-4 md:pr-16">
                  <h3 className="text-2xl md:text-4xl font-heading text-[#F2EFE9] leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-xs font-medium tracking-[0.2em] uppercase text-[#D4AF37] mb-2">
                    {item.company}
                  </p>
                  <p className="text-muted leading-relaxed max-w-2xl text-sm md:text-base">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
