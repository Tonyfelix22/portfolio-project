'use client'

import { motion } from 'framer-motion'
import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts'
import { ArrowUpRight, ArrowDownRight } from 'lucide-react'

export default function Dashboard() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] } },
  }

  const revenueData = [
    { month: 'Jan', revenue: 4000 },
    { month: 'Feb', revenue: 3000 },
    { month: 'Mar', revenue: 2000 },
    { month: 'Apr', revenue: 2780 },
    { month: 'May', revenue: 1890 },
    { month: 'Jun', revenue: 2390 },
  ]

  const userGrowthData = [
    { month: 'Jan', users: 400 },
    { month: 'Feb', users: 600 },
    { month: 'Mar', users: 800 },
    { month: 'Apr', users: 1100 },
    { month: 'May', users: 1500 },
    { month: 'Jun', users: 1800 },
  ]

  const categoryData = [
    { name: 'Core', value: 35 },
    { name: 'Growth', value: 25 },
    { name: 'Emerging', value: 20 },
    { name: 'Stable', value: 20 },
  ]

  const COLORS = ['#D4AF37', '#A08030', '#7A6020', '#4A3B10']

  const tooltipStyle = {
    backgroundColor: '#050505',
    border: '1px solid rgba(242, 239, 233, 0.1)',
    borderRadius: '0px',
    color: '#F2EFE9',
    fontFamily: 'Satoshi, sans-serif',
    fontSize: '12px'
  }

  return (
    <section
      id="dashboard"
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
                  Live Telemetry
                </p>
              </div>
              <h2 className="heading-lg">
                System <br />
                <span className="italic font-light text-muted">Intelligence.</span>
              </h2>
            </div>
            
            <div className="flex items-center gap-6">
               <div className="flex items-center gap-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                  <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted">Real-time sync</p>
               </div>
               <div className="h-4 w-px bg-[#F2EFE9]/10" />
               <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted">Last updated: Just now</p>
            </div>
          </motion.div>

          {/* Floating Minimal KPIs */}
          <motion.div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 mb-32" variants={containerVariants}>
            {[
              { title: 'Gross Volume', value: '$12.5M', change: '+12.5%' },
              { title: 'Active Nodes', value: '1,845', change: '+8.2%' },
              { title: 'Velocity', value: '23.4x', change: '-2.1%' },
              { title: 'System Load', value: '87.3%', change: '+3.2%' },
            ].map((kpi, idx) => (
              <motion.div key={idx} variants={itemVariants} className="flex flex-col gap-4 border-l border-[#F2EFE9]/5 pl-6">
                <p className="text-[10px] font-mono tracking-[0.2em] uppercase text-muted">{kpi.title}</p>
                <div className="flex items-baseline gap-4">
                  <p className="text-4xl md:text-5xl font-heading text-[#F2EFE9]">{kpi.value}</p>
                  <span className={`text-[10px] font-mono tracking-widest ${kpi.change.startsWith('+') ? 'text-[#D4AF37]' : 'text-muted'}`}>
                    {kpi.change}
                  </span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Cinematic Charts Layout */}
          <div className="flex flex-col gap-32">
            
            {/* Top Chart Row */}
            <motion.div className="w-full flex flex-col gap-8" variants={itemVariants}>
              <div className="flex items-center justify-between border-b border-[#F2EFE9]/10 pb-6">
                 <p className="text-xs tracking-[0.3em] uppercase text-[#F2EFE9]">Revenue Architecture</p>
                 <button className="text-[10px] tracking-widest uppercase text-muted hover:text-[#D4AF37] transition-colors">Export Report</button>
              </div>
              <div className="h-[400px] w-full pt-8">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={revenueData}>
                    <CartesianGrid strokeDasharray="3 3" stroke="rgba(242, 239, 233, 0.05)" vertical={false} />
                    <XAxis dataKey="month" stroke="rgba(242, 239, 233, 0.3)" tick={{ fontSize: 10, fill: '#F2EFE9', opacity: 0.5 }} axisLine={false} tickLine={false} dy={10} />
                    <YAxis stroke="rgba(242, 239, 233, 0.3)" tick={{ fontSize: 10, fill: '#F2EFE9', opacity: 0.5 }} axisLine={false} tickLine={false} dx={-10} />
                    <Tooltip contentStyle={tooltipStyle} cursor={{ stroke: 'rgba(212, 175, 55, 0.2)' }} />
                    <Line
                      type="monotone"
                      dataKey="revenue"
                      stroke="#D4AF37"
                      strokeWidth={2}
                      dot={false}
                      activeDot={{ r: 4, fill: '#F2EFE9', strokeWidth: 0 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </motion.div>

            {/* Bottom Row: Split Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-24">
              
              {/* User Growth */}
              <motion.div className="flex flex-col gap-8" variants={itemVariants}>
                <div className="flex items-center justify-between border-b border-[#F2EFE9]/10 pb-6">
                   <p className="text-xs tracking-[0.3em] uppercase text-[#F2EFE9]">Network Expansion</p>
                </div>
                <div className="h-[300px] w-full pt-8">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={userGrowthData} barSize={4}>
                      <CartesianGrid strokeDasharray="3 3" stroke="rgba(242, 239, 233, 0.05)" vertical={false} />
                      <XAxis dataKey="month" stroke="rgba(242, 239, 233, 0.3)" tick={{ fontSize: 10, fill: '#F2EFE9', opacity: 0.5 }} axisLine={false} tickLine={false} dy={10} />
                      <YAxis stroke="rgba(242, 239, 233, 0.3)" tick={{ fontSize: 10, fill: '#F2EFE9', opacity: 0.5 }} axisLine={false} tickLine={false} dx={-10} />
                      <Tooltip contentStyle={tooltipStyle} cursor={{ fill: 'rgba(242, 239, 233, 0.02)' }} />
                      <Bar dataKey="users" fill="#D4AF37" radius={[0, 0, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>

              {/* Distribution & Performance */}
              <motion.div className="flex flex-col gap-8" variants={itemVariants}>
                <div className="flex items-center justify-between border-b border-[#F2EFE9]/10 pb-6">
                   <p className="text-xs tracking-[0.3em] uppercase text-[#F2EFE9]">Asset Distribution</p>
                </div>
                <div className="flex flex-col md:flex-row items-center gap-12 pt-8">
                  <div className="h-[200px] w-[200px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie
                          data={categoryData}
                          cx="50%"
                          cy="50%"
                          innerRadius={60}
                          outerRadius={80}
                          paddingAngle={2}
                          dataKey="value"
                          stroke="none"
                        >
                          {categoryData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                          ))}
                        </Pie>
                        <Tooltip contentStyle={tooltipStyle} />
                      </PieChart>
                    </ResponsiveContainer>
                  </div>
                  
                  {/* Legend / Metrics List */}
                  <div className="flex flex-col gap-6 w-full">
                    {[
                      { metric: 'Conversion', value: '3.24%', status: 'up' },
                      { metric: 'Session Avg', value: '4m 32s', status: 'up' },
                      { metric: 'Bounce', value: '42.3%', status: 'down' },
                    ].map((item, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-[10px] tracking-[0.2em] uppercase text-muted">{item.metric}</span>
                        <div className="flex items-center gap-3">
                          <span className="font-mono text-sm text-[#F2EFE9]">{item.value}</span>
                          {item.status === 'up' ? (
                            <ArrowUpRight size={14} className="text-[#D4AF37]" />
                          ) : (
                            <ArrowDownRight size={14} className="text-muted" />
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
              
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
