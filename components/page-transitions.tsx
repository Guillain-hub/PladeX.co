'use client'

import { AnimatePresence, motion } from 'framer-motion'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function PageTransitions({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 28, scale: 0.975 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: -28, scale: 0.975 }}
        transition={{ duration: 0.12, ease: [0.22, 1, 0.36, 1] }}
        className="min-h-screen bg-[#020617] text-slate-300"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  )
}
