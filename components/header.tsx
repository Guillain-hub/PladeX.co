"use client"
import Image from 'next/image'
import Link from 'next/link'
import { Menu, Terminal, ShieldCheck } from 'lucide-react'

export default function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 md:px-8 py-4 bg-gradient-to-b from-[#020617]/90 to-transparent backdrop-blur-[4px]">
      <div className="flex flex-col items-start">
        <Link href="/" className="flex items-center gap-0 hover:opacity-90 transition">
          <div className="relative w-12 h-12 md:w-16 md:h-16 flex-shrink-0">
            <Image src="/logo_no_white.png" alt="PladeX" fill style={{ objectFit: 'contain' }} priority />
          </div>
          <span className="text-lg md:text-2xl font-extrabold tracking-tight leading-none ml-0">PladeX</span>
        </Link>

        {/* Subtitle directly under logo + name */}
        <div className="-mt-1 flex flex-col items-start">
          <div className="flex items-center gap-1">
            <div className="w-4 h-px bg-white/10 mr-1" />
            <span className="text-[9px] md:text-[10px] uppercase tracking-tight font-mono text-slate-300 whitespace-nowrap">Global Engineering</span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-8">
        <div className="hidden md:flex gap-8 text-[12px] font-semibold uppercase tracking-wider">
          <Link href="/services" className="text-slate-300 hover:text-white transition">Services</Link>
          <Link href="/projects" className="text-slate-300 hover:text-white transition">Case Studies</Link>
          <Link href="/about" className="text-slate-300 hover:text-white transition">Company</Link>
        </div>

        {/* Customer satisfaction small badge */}
        <div className="hidden md:flex items-center gap-4 bg-white/3 px-4 py-1.5 rounded-md border border-white/6">
          <ShieldCheck size={16} className="text-emerald-400" />
          <div className="text-xs leading-tight">
            <div className="font-semibold text-white">98% Satisfied</div>
            <div className="text-white/60 text-[12px]">24/7 Support</div>
          </div>
        </div>

        <button aria-label="Menu" className="p-2 border border-white/10 rounded-sm hover:bg-white/5 transition text-white">
          <Menu size={18} />
        </button>
      </div>
    </nav>
  )
}
