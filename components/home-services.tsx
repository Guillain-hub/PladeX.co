'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Globe, Smartphone, Server, Binary, ArrowRight, Terminal } from 'lucide-react'

export default function HomeServices() {
  const services = [
    {
      icon: Globe,
      title: 'Web Platforms',
      description: 'High-performance, scalable web architectures built with modern React frameworks and sub-second latency.',
      tag: 'SYS_01',
      accent: 'group-hover:text-cyan-400',
      glow: 'group-hover:bg-cyan-500/10 border-cyan-500/20'
    },
    {
      icon: Smartphone,
      title: 'Mobile Ecosystems',
      description: 'Native iOS and Android applications engineered for high-concurrency and flawless user execution.',
      tag: 'SYS_02',
      accent: 'group-hover:text-purple-400',
      glow: 'group-hover:bg-purple-500/10 border-purple-500/20'
    },
    {
      icon: Server,
      title: 'Core Infrastructure',
      description: 'Enterprise-grade backend solutions, custom ERPs, and secure database architectures.',
      tag: 'SYS_03',
      accent: 'group-hover:text-blue-400',
      glow: 'group-hover:bg-blue-500/10 border-blue-500/20'
    },
    {
      icon: Binary,
      title: 'Technical Architecture',
      description: 'Strategic systems consulting to guide your enterprise digital transformation and cloud migration.',
      tag: 'SYS_04',
      accent: 'group-hover:text-emerald-400',
      glow: 'group-hover:bg-emerald-500/10 border-emerald-500/20'
    },
  ]

  return (
    <section id="services" className="relative py-24 px-6 lg:px-8 bg-[#020617] overflow-hidden select-none">
      
      {/* Background Architectural Grid (Continuing from Hero) */}
      <div className="absolute inset-0 z-[0] opacity-30 pointer-events-none">
        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        {/* Subtle Top Fade */}
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#020617] to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        
        {/* --- HEADER SECTION --- */}
        <div className="mb-16">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-3 bg-indigo-900/30 border border-indigo-500/30 w-fit px-4 py-1.5 rounded-sm backdrop-blur-md mb-8"
          >
            <Terminal size={12} className="text-cyan-400" />
            <span className="text-[10px] font-mono font-bold text-cyan-200 uppercase tracking-[0.3em]">
              Module: Capabilities
            </span>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-12 items-end">
            <div className="md:col-span-2 space-y-4">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.05] tracking-tight">
                Solutions for <br className="hidden md:block" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                  Complex Challenges.
                </span>
              </h2>
              <p className="text-lg text-slate-400 leading-relaxed max-w-2xl font-medium border-l-2 border-white/10 pl-6">
                We engineer comprehensive digital infrastructure tailored to enterprise specifications and aggressive scaling targets.
              </p>
            </div>
            
            <div className="md:text-right">
              <Link
                href="/services"
                className="group inline-flex items-center gap-3 text-[10px] font-bold uppercase tracking-[0.2em] text-white/50 hover:text-cyan-400 transition-colors"
              >
                Execute Full Index
                <div className="p-2 border border-white/10 rounded-sm group-hover:border-cyan-400/50 transition-colors">
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            </div>
          </div>
        </div>

        {/* --- SERVICES GRID --- */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`group relative overflow-hidden rounded-sm border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 p-8 backdrop-blur-xl hover:shadow-[0_0_30px_rgba(0,0,0,0.5)]`}
              >
                {/* Subtle Hover Gradient Background */}
                <div className={`absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none ${service.glow}`} />
                
                <div className="relative z-10 flex flex-col h-full">
                  {/* Top Bar: Icon & System Tag */}
                  <div className="flex justify-between items-start mb-12">
                    <div className="w-14 h-14 rounded-sm bg-[#0f172a]/80 border border-white/10 flex items-center justify-center group-hover:border-white/30 transition-all duration-300 shadow-xl">
                      <Icon className={`w-6 h-6 text-slate-400 transition-colors duration-500 ${service.accent}`} />
                    </div>
                    <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-slate-600 uppercase">
                      {service.tag}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="mt-auto space-y-4">
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {service.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed text-sm font-medium">
                      {service.description}
                    </p>
                  </div>

                  {/* Animated Bottom Line */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-500 to-purple-600 group-hover:w-full transition-all duration-500" />
                </div>
              </motion.div>
            )
          })}
        </div>

      </div>
    </section>
  )
}