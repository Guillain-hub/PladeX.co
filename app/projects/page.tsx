'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Terminal, Activity, Monitor, Smartphone, LayoutDashboard } from 'lucide-react'

export default function Projects() {
  const projects = [
    {
      title: 'Global E-Commerce Engine',
      category: 'Web Architecture',
      icon: Monitor,
      code: 'DEP_01',
      description: 'A high-concurrency e-commerce platform processing thousands of transactions per second with real-time inventory sync.',
      tags: ['Next.js', 'Node.js', 'Redis', 'PostgreSQL'],
      slug: 'ecommerce-platform',
      results: '3x Conversion Lift',
      // Real Website Homepage UI
      image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'AI Fitness Ecosystem',
      category: 'Mobile Application',
      icon: Smartphone,
      code: 'DEP_02',
      description: 'Cross-platform mobile application utilizing device-native machine learning for real-time biomechanical analysis.',
      tags: ['React Native', 'CoreML', 'Firebase', 'WebSockets'],
      slug: 'fitness-app',
      results: '50K+ Daily Active Users',
      // Real Mobile App UI (Fitness/Running on phone)
      image: 'https://images.unsplash.com/photo-1594882645126-14020914d58d?q=80&w=2085&auto=format&fit=crop'
    },
    {
      title: 'Enterprise Management Core',
      category: 'System Infrastructure',
      icon: LayoutDashboard,
      code: 'DEP_03',
      description: 'Bespoke ERP and project management solution built for distributed teams, featuring end-to-end encrypted collaboration.',
      tags: ['React', 'Go', 'Docker', 'Kubernetes'],
      slug: 'business-system',
      results: '40% Efficiency Increase',
      // Real SaaS Dashboard UI
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Content Delivery Network',
      category: 'Web Architecture',
      icon: Monitor,
      code: 'DEP_04',
      description: 'Custom CMS and content delivery platform utilizing edge computing for global sub-100ms asset loading.',
      tags: ['Vue.js', 'AWS', 'ElasticSearch', 'GraphQL'],
      slug: 'content-platform',
      results: '99.99% Global Uptime',
      // Real Website/CMS Layout
      image: 'https://images.unsplash.com/photo-1507721999472-8ed4421c4af2?q=80&w=2070&auto=format&fit=crop'
    },
    {
      title: 'Secure Comms Protocol',
      category: 'Mobile Application',
      icon: Smartphone,
      code: 'DEP_05',
      description: 'Zero-trust team collaboration platform featuring peer-to-peer encrypted messaging and secure file infrastructure.',
      tags: ['Flutter', 'WebRTC', 'Rust', 'PostgreSQL'],
      slug: 'collaboration-app',
      results: 'Adopted by 15 Enterprises',
      // Real Mobile Chat/Social App UI
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop'
    },
    {
      title: 'Live Data Analytics Hub',
      category: 'System Infrastructure',
      icon: LayoutDashboard,
      code: 'DEP_06',
      description: 'Real-time data visualization dashboard capable of ingesting and rendering millions of concurrent data points.',
      tags: ['Next.js', 'D3.js', 'Kafka', 'ClickHouse'],
      slug: 'analytics-dashboard',
      results: '50M+ Events Processed Daily',
      // Real Data Analytics Chart UI
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop'
    },
  ]

  return (
    <main className="bg-[#020617] min-h-screen text-slate-300 font-sans selection:bg-cyan-500/30">
      <Navigation />

      {/* --- GLOBAL FIXED BACKGROUND --- */}
      <div className="fixed inset-0 z-[0] pointer-events-none">
        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)] opacity-80" />
      </div>

      <section className="relative pt-32 pb-24 px-6 lg:px-8 overflow-hidden z-10">
        <div className="relative z-10 max-w-7xl mx-auto">
          
          {/* --- HEADER --- */}
          <div className="mb-20">
            
            <div className="grid lg:grid-cols-2 gap-12 items-end">
              <h1 className="text-6xl md:text-8xl font-bold text-white leading-[1.05] tracking-[-0.04em]">
                Proven <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                  Executions.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-medium border-l-2 border-white/10 pl-6 lg:mb-4">
                Review our architectural track record. A curated selection of high-performance web platforms, native mobile applications, and enterprise systems successfully deployed into production.
              </p>
            </div>
          </div>

          {/* --- PROJECTS GRID --- */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-24">
            {projects.map((project, index) => {
              const Icon = project.icon
              return (
                <Link
                  key={index}
                  href={`/projects/${project.slug}`}
                  className="group relative flex flex-col rounded-sm overflow-hidden border border-white/10 bg-[#0f172a]/40 hover:bg-[#0f172a]/80 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]"
                >
                  {/* 1. Image Showcase Top Half */}
                  <div className="relative h-56 w-full overflow-hidden border-b border-white/5 bg-[#020617]">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out opacity-80 group-hover:opacity-100"
                    />
                    
                    {/* Gradient Fade into Content */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#0f172a] to-transparent" />
                  </div>

                  {/* 2. Content Details Bottom Half */}
                  <div className="relative z-10 flex flex-col flex-1 p-6 lg:p-8">
                    
                    {/* Header: Code & Category */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2 text-[10px] font-mono font-bold tracking-[0.2em] text-cyan-400 uppercase">
                        <Icon size={12} className="text-cyan-400" />
                        {project.category}
                      </div>
                      <span className="text-[10px] font-mono text-white/30 tracking-widest">{project.code}</span>
                    </div>

                    <h3 className="text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-cyan-400 transition-colors duration-300">
                      {project.title}
                    </h3>

                    <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-1">
                      {project.description}
                    </p>

                    {/* Tech Stack Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {project.tags.slice(0, 3).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-white/5 border border-white/10 text-slate-300 rounded-sm text-[10px] font-mono tracking-widest uppercase group-hover:border-cyan-500/30 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Results / CTA Bar */}
                    <div className="pt-4 flex items-center justify-between border-t border-white/10 mt-auto">
                      <div className="flex flex-col">
                        <span className="text-[9px] font-mono text-slate-500 uppercase tracking-widest mb-1">Performance Yield</span>
                        <div className="flex items-center gap-2 text-purple-400">
                          <Activity size={12} />
                          <span className="text-xs font-bold uppercase tracking-wide">{project.results}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Hover Accent Line */}
                  <div className="absolute bottom-0 left-0 h-[2px] w-0 bg-gradient-to-r from-cyan-500 to-purple-600 group-hover:w-full transition-all duration-500" />
                </Link>
              )
            })}
          </div>

          {/* --- BOTTOM CTA --- */}
          <div className="relative overflow-hidden rounded-sm border border-white/10 bg-[#0f172a]/80 p-12 md:p-20 text-center backdrop-blur-xl">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] bg-purple-600/20 blur-[100px] pointer-events-none" />
            
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Require a Custom Architecture?</h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
                Our team is ready to audit your requirements and engineer a high-performance solution that scales with your ambition.
              </p>
              
              <div className="pt-4 flex justify-center">
                <a
                  href="/contact"
                  className="relative group bg-white text-[#020617] px-10 py-5 font-bold uppercase text-[10px] tracking-[0.2em] overflow-hidden hover:shadow-[0_0_40px_rgba(168,85,247,0.3)] transition-all duration-300 rounded-sm inline-flex items-center gap-3"
                >
                  <span className="relative z-10">Initialize New Project</span>
                  <div className="relative z-10 p-1 bg-[#020617]/10 rounded-sm group-hover:bg-[#020617]/20 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-r from-cyan-400 to-purple-600" />
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  )
}