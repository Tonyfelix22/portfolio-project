'use client'

import { motion } from 'framer-motion'

export default function Skills() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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

  const skillCategories = [
    {
      title: 'Database & Architecture',
      skills: ['PostgreSQL', 'MySQL', 'Relational Modeling', 'NoSQL', 'Data Warehousing'],
    },
    {
      title: 'Data Processing',
      skills: ['Python', 'Pandas', 'NumPy', 'ETL Pipelines', 'Automation'],
    },
    {
      title: 'Business Intelligence',
      skills: ['Power BI', 'Tableau', 'Looker', 'Advanced Excel', 'DAX'],
    },
    {
      title: 'Strategy & Analysis',
      skills: ['Statistical Modeling', 'Predictive Analytics', 'A/B Testing', 'KPI Architecture'],
    },
  ]

  const proficiencies = [
    { skill: 'Data Modeling & SQL', level: 95 },
    { skill: 'Python Analytics', level: 85 },
    { skill: 'Dashboard Architecture', level: 90 },
    { skill: 'Statistical Rigor', level: 88 },
  ]

  return (
    <section
      id="skills"
      className="py-32 md:py-48 px-6 relative bg-black"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="flex flex-col lg:flex-row gap-20 lg:gap-32"
          initial="hidden"
          whileInView="visible"
          variants={containerVariants}
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Left Column: Heading */}
          <motion.div className="w-full lg:w-1/3 flex flex-col" variants={itemVariants}>
            <div className="flex items-center gap-4 mb-8">
              <div className="h-px w-8 bg-[#D4AF37]" />
              <p className="text-[10px] sm:text-xs font-medium tracking-[0.3em] uppercase text-[#D4AF37]">
                Technical Arsenal
              </p>
            </div>
            
            <h2 className="heading-lg mb-8 sticky top-32">
              Capabilities <br />
              <span className="italic font-light text-muted">& Toolkit.</span>
            </h2>
          </motion.div>

          {/* Right Column: Editorial Lists */}
          <div className="w-full lg:w-2/3 flex flex-col gap-16 md:gap-24 pt-4">
            
            {/* Core Competencies */}
            <div className="flex flex-col gap-12 md:gap-16">
              {skillCategories.map((category, index) => (
                <motion.div 
                  key={index} 
                  className="border-b border-[#F2EFE9]/10 pb-10"
                  variants={itemVariants}
                >
                  <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-[#D4AF37] mb-4">
                    [ 0{index + 1} // {category.title} ]
                  </p>
                  <p className="text-2xl md:text-4xl text-[#F2EFE9] leading-tight font-medium">
                    {category.skills.join(', ')}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Proficiency Indicators */}
            <motion.div className="mt-12" variants={itemVariants}>
              <div className="flex items-center gap-4 mb-12">
                <div className="h-px w-full bg-[#F2EFE9]/5" />
                <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted shrink-0">
                  System Proficiencies
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-10">
                {proficiencies.map((item, index) => (
                  <div key={index} className="flex flex-col gap-3">
                    <div className="flex justify-between items-end">
                      <span className="text-sm font-medium tracking-wide text-[#F2EFE9]">
                        {item.skill}
                      </span>
                      <span className="text-xs font-mono text-[#D4AF37]">
                        {item.level}%
                      </span>
                    </div>
                    {/* Ultra-minimal progress line */}
                    <div className="w-full h-px bg-[#F2EFE9]/5 relative">
                      <motion.div
                        className="absolute top-0 left-0 h-full bg-[#D4AF37]"
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.level}%` }}
                        transition={{ duration: 1.5, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </motion.div>
      </div>
    </section>
  )
}
