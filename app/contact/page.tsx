'use client'

import Navigation from '@/components/navigation'
import Contact from '@/components/contact'
import Footer from '@/components/footer'
import { motion } from 'framer-motion'
import { Terminal } from 'lucide-react'

export default function ContactPage() {
  return (
    <main className="bg-[#020617] min-h-screen text-slate-300 font-sans selection:bg-cyan-500/30">
      <Navigation />

      {/* --- GLOBAL FIXED BACKGROUND --- */}
      <div className="fixed inset-0 z-[0] pointer-events-none">
        <div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)] opacity-80" />
      </div>

      <section className="relative pt-32 pb-24 px-6 lg:px-8 overflow-hidden z-10 min-h-screen flex flex-col">
        
        {/* Abstract Glows */}
        <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[150px] pointer-events-none" />

        <div className="relative z-10 max-w-7xl mx-auto w-full flex-1">
          
          {/* --- HEADER --- */}
          <div className="mb-16">
            
            <div className="grid lg:grid-cols-2 gap-12 items-end">
              <h1 className="text-6xl md:text-8xl font-bold text-white leading-[1.05] tracking-[-0.04em]">
                Initialize <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 drop-shadow-[0_0_30px_rgba(34,211,238,0.2)]">
                  Connection.
                </span>
              </h1>
              <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-medium border-l-2 border-white/10 pl-6 lg:mb-4">
                Submit your project parameters, technical requirements, or RFP. Our lead architects review all transmissions and deploy a response within 24 hours.
              </p>
            </div>
          </div>

          {/* --- CONTACT COMPONENT WRAPPER --- */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="relative bg-[#0f172a]/40 border border-white/10 rounded-sm p-4 md:p-8 backdrop-blur-xl shadow-2xl"
          >
            {/* The imported Contact component goes here */}
            <Contact />
          </motion.div>

        </div>
      </section>

      <Footer />
    </main>
  )
}