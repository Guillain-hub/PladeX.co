'use client'

import Navigation from '@/components/navigation'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import { Globe, Smartphone, Server, Binary, CheckCircle, Zap, Terminal, ArrowRight, Cpu } from 'lucide-react'

export default function Services() {
  const services = [
    {
      id: '01',
      icon: Globe,
      title: 'Web Platforms',
      description: 'High-performance, scalable web architectures built with modern React frameworks and sub-second latency targets.',
      tag: 'FRONTEND & EDGE NETWORKS',
      themeColor: 'text-cyan-400',
      borderGlow: 'hover:border-cyan-500/50',
      gradient: 'from-cyan-500 to-blue-600',
      benefits: [
        'Responsive Architecture',
        'Real-time Data Sync',
        'Edge Network Deployment',
        'Lighthouse Optimization',
      ],
      technologies: ['React', 'Next.js', 'Node.js', 'PostgreSQL', 'AWS Cloudfront'],
    },
    {
      id: '02',
      icon: Smartphone,
      title: 'Mobile Ecosystems',
      description: 'Native iOS and Android applications engineered for high-concurrency and flawless user execution.',
      tag: 'NATIVE & CROSS-PLATFORM',
      themeColor: 'text-purple-400',
      borderGlow: 'hover:border-purple-500/50',
      gradient: 'from-purple-500 to-pink-600',
      benefits: [
        'Native Metal Performance',
        'Cross-platform Sync',
        'Offline-First Capabilities',
        'Rigorous App Store Compliance',
      ],
      technologies: ['React Native', 'Flutter', 'Swift', 'Kotlin', 'Firebase Auth'],
    },
    {
      id: '03',
      icon: Server,
      title: 'Core Infrastructure',
      description: 'Enterprise-grade backend solutions, custom ERPs, and secure database architectures to streamline global operations.',
      tag: 'ENTERPRISE ARCHITECTURE',
      themeColor: 'text-blue-400',
      borderGlow: 'hover:border-blue-500/50',
      gradient: 'from-blue-500 to-indigo-600',
      benefits: [
        'Custom CRM/ERP Systems',
        'Microservices Architecture',
        'Legacy API Integration',
        'Predictive Data Analytics',
      ],
      technologies: ['Next.js', 'PostgreSQL', 'Redis', 'Elasticsearch', 'Docker/K8s'],
    },
    {
      id: '04',
      icon: Binary,
      title: 'Technical Strategy',
      description: 'Strategic systems consulting to guide your enterprise digital transformation and cloud migration protocols.',
      tag: 'CONSULTING & AUDITING',
      themeColor: 'text-emerald-400',
      borderGlow: 'hover:border-emerald-500/50',
      gradient: 'from-emerald-500 to-teal-600',
      benefits: [
        'Competitor Tech Analysis',
        'Infrastructure Auditing',
        'Security Risk Assessment',
        'Migration Roadmapping',
      ],
      technologies: ['Systems Architecture', 'Cloud Cost Optimization', 'DevOps Strategy'],
    },
  ]

  return (
    <main className="bg-[#020617] min-h-screen text-slate-300 font-sans selection:bg-cyan-500/30">
      <Navigation />

      {/* --- GLOBAL FIXED BACKGROUND --- */}
      <div className="fixed inset-0 z-[0] pointer-events-none">
        {/* Deep, subtle background image */}
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop"
          className="w-full h-full object-cover opacity-[0.06]"
          alt="Global Infrastructure"
        />
        {/* The Architectural Grid overlay */}
        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        {/* Radial Vignette to keep edges dark and focus centered */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)] opacity-80" />
      </div>

      <section className="relative pt-32 pb-24 px-6 lg:px-8 overflow-hidden z-10">
        
        {/* Abstract Glows */}
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto">
          
          {/* --- CINEMATIC ANIMATED HEADER BLOCK --- */}
          <div className="relative w-full rounded-sm overflow-hidden mb-24 border border-white/10 bg-[#020617] shadow-2xl">
            
            {/* Background Image & Animations */}
            <div className="absolute inset-0 z-0">
              {/* NEW IMAGE: High-contrast glowing tech network */}
              <motion.img 
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                src="https://images.unsplash.com/photo-1614064077583-df46b088b77d?q=80&w=2070&auto=format&fit=crop"
                className="w-full h-full object-cover opacity-80 brightness-110 contrast-110 saturate-125"
                alt="Digital Network Infrastructure"
              />
              
              {/* Clean gradients to protect the text readability */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#020617]/60 to-transparent" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-[#020617]/30" />
              
              {/* Tech Scanning Line */}
              <motion.div 
                animate={{ top: ['-10%', '110%'] }}
                transition={{ duration: 6, repeat: Infinity, ease: 'linear' }}
                className="absolute left-0 right-0 h-[1px] bg-cyan-500/50 shadow-[0_0_20px_rgba(34,211,238,0.8)]"
              />
            </div>

            {/* Header Content */}
            <div className="relative z-10 p-8 lg:p-16">
              
              <div className="grid lg:grid-cols-2 gap-12 items-end">
                <h1 className="text-6xl md:text-8xl font-bold text-white leading-[1.05] tracking-[-0.04em]">
                  Engineering <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                    Excellence.
                  </span>
                </h1>
                
                {/* Text Box with frosted glass effect */}
                <div className="bg-[#020617]/60 backdrop-blur-xl border-l-2 border-cyan-500 p-6 rounded-sm">
                  <p className="text-lg text-slate-300 leading-relaxed font-medium">
                    We design, deploy, and scale high-integrity digital products. From user-facing platforms to deep backend infrastructure, we engineer solutions for companies that demand reliability.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* --- SERVICES LIST --- */}

          {/* Compact Intro + Quick-nav for accessibility and structure */}
          <div className="mb-8">
            <h3 className="text-sm font-mono text-slate-400 uppercase tracking-wider">Our Services</h3>
            <p className="mt-3 text-lg text-slate-300 max-w-3xl">We deliver end-to-end engineering across web, mobile and infrastructure stacks — pick a capability to learn more.</p>

            <div className="mt-4 flex flex-wrap gap-2" role="navigation" aria-label="Service quick links">
              {services.map((s) => (
                <a
                  key={s.id}
                  href={`#service-${s.id}`}
                  className="px-3 py-1.5 text-xs font-mono bg-white/[0.03] border border-white/8 text-slate-300 rounded hover:bg-white/[0.06] transition"
                >
                  {s.tag}
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            {services.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div 
                  key={index}
                  id={`service-${service.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5 }}
                  className={`group relative bg-white/[0.02] border border-white/5 ${service.borderGlow} transition-colors duration-500 rounded-sm overflow-hidden backdrop-blur-md`}
                >
                  {/* Subtle Background Hover Effect */}
                  <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 bg-gradient-to-r ${service.gradient}`} />

                  <div className="relative z-10 p-8 lg:p-12 grid lg:grid-cols-12 gap-12 lg:gap-8 items-start">
                    
                    {/* LEFT COLUMN: Main Info */}
                    <div className="lg:col-span-5 space-y-8">
                      <div className="flex items-center justify-between border-b border-white/10 pb-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-sm bg-[#0f172a] border border-white/10 flex items-center justify-center shadow-lg group-hover:border-white/30 transition-colors">
                            <Icon className={`w-5 h-5 ${service.themeColor}`} />
                          </div>
                          <h2 className="text-3xl font-bold text-white tracking-tight">{service.title}</h2>
                        </div>
                        <span className="text-4xl font-mono font-bold text-white/5 group-hover:text-white/10 transition-colors">
                          {service.id}
                        </span>
                      </div>

                      <p className="text-lg text-slate-400 leading-relaxed">
                        {service.description}
                      </p>

                      <div>
                        <span className="text-[10px] font-mono text-slate-500 uppercase tracking-widest block mb-4">Core Benefits Protocol</span>
                        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {service.benefits.map((benefit, i) => (
                            <li key={i} className="flex items-center gap-3 text-sm text-slate-300">
                              <CheckCircle className={`w-4 h-4 ${service.themeColor} flex-shrink-0 opacity-70`} />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    {/* RIGHT COLUMN: Tech & Stats */}
                    <div className="lg:col-span-7 lg:pl-12 lg:border-l border-white/10 space-y-8">
                      
                      {/* Tech Stack */}
                      <div className="bg-[#0f172a]/50 border border-white/5 rounded-sm p-6">
                        <div className="flex items-center gap-2 mb-6">
                          <Cpu className="w-4 h-4 text-slate-500" />
                          <h3 className="text-[10px] font-mono font-bold text-slate-400 uppercase tracking-[0.2em]">
                            Approved Technology Stack
                          </h3>
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {service.technologies.map((tech, i) => (
                            <span
                              key={i}
                              className="px-3 py-1.5 bg-white/[0.03] border border-white/10 text-slate-300 rounded text-xs font-mono hover:bg-white/[0.08] hover:text-white hover:border-white/30 transition-all cursor-default"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Quick Stats */}
                      <div className="grid grid-cols-2 gap-4">
                        <div className="bg-white/[0.02] border border-white/5 p-6 rounded-sm">
                          <div className={`text-3xl font-bold text-white mb-2`}>10+</div>
                          <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Deployments</div>
                        </div>
                        <div className="bg-white/[0.02] border border-white/5 p-6 rounded-sm">
                          <div className={`text-3xl font-bold text-white mb-2`}>99.9%</div>
                          <div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest">Uptime SLA</div>
                        </div>
                      </div>

                    </div>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* --- BOTTOM CTA --- */}
          <div className="mt-24 relative overflow-hidden rounded-sm border border-white/10 bg-[#0f172a]/80 p-12 md:p-20 text-center backdrop-blur-xl">
            {/* CTA Background Effects */}
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[200px] bg-cyan-600/20 blur-[100px] pointer-events-none" />
            
            <div className="relative z-10 space-y-8">
              <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">Initialize Your Infrastructure.</h2>
              <p className="text-lg text-slate-400 max-w-2xl mx-auto font-medium">
                Engage with our senior architects to discuss timelines, technical requirements, and strategic deployment for your next project.
              </p>
              
              <div className="pt-4 flex justify-center">
                <a
                  href="/contact"
                  className="relative group bg-white text-[#020617] px-10 py-5 font-bold uppercase text-[10px] tracking-[0.2em] overflow-hidden hover:shadow-[0_0_40px_rgba(34,211,238,0.3)] transition-all duration-300 rounded-sm inline-flex items-center gap-3"
                >
                  <span className="relative z-10">Request Technical Proposal</span>
                  <div className="relative z-10 p-1 bg-[#020617]/10 rounded-sm group-hover:bg-[#020617]/20 transition-colors">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <div className="absolute inset-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-gradient-to-r from-cyan-400 to-blue-500" />
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