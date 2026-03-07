'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HomeCTA() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-background relative">
      <div className="max-w-4xl mx-auto">
        <div className="rounded-3xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gradient-to-r dark:from-gray-900/50 dark:to-gray-950/50 p-12 md:p-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-black dark:text-white mb-6 leading-tight">
            Ready to get started?
          </h2>
          
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your project and explore how we can help bring your vision to life.
          </p>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300"
          >
            Get In Touch
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </section>
  )
}
