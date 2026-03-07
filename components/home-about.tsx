'use client'

import Link from 'next/link'
import { Target, Users, Zap, ArrowRight } from 'lucide-react'

export default function HomeAbout() {
  return (
    <section id="about" className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-background relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block mb-6">
            <span className="text-xs font-semibold tracking-[0.15em] text-yellow-400 uppercase bg-yellow-500/10 px-4 py-2 rounded-full border border-yellow-500/20">
              About Us
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white leading-[1.1] mb-6 max-w-4xl">
            Crafting <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">digital excellence</span> for forward-thinking brands
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl leading-relaxed">
            At PladeX, we partner with organizations to design and build reliable, scalable digital systems that support long-term growth and innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Our multidisciplinary team blends strategy, design, and engineering to deliver solutions that are elegant, secure, and built for real-world use. We believe in transparency, collaboration, and pushing the boundaries of what's possible.
            </p>

            {/* Values */}
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-black dark:text-white mb-6">Our Core Values</h3>
              {[
                {
                  icon: Target,
                  title: 'Focused Solutions',
                  desc: 'Purpose-driven systems tailored to your business goals',
                },
                {
                  icon: Users,
                  title: 'Collaborative Approach',
                  desc: 'Transparent communication throughout every phase',
                },
                {
                  icon: Zap,
                  title: 'Modern Technology',
                  desc: 'Built using proven, future-ready frameworks',
                },
              ].map((item, i) => (
                <div key={i} className="group flex gap-4 items-start p-4 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gradient-to-r dark:from-gray-900/30 dark:to-gray-950/30">
                  <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-gray-200 dark:bg-gradient-to-br dark:from-yellow-500/20 dark:to-orange-600/20 border border-gray-300 dark:border-yellow-500/30 flex-shrink-0">
                    <item.icon className="h-5 w-5 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-black dark:text-white text-sm">
                      {item.title}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400 text-xs">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-yellow-400 font-semibold hover:text-yellow-300 transition"
            >
              Learn more about our story
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Stats */}
          <div className="space-y-6">
            {[
              { label: 'Years in Business', value: '5+' },
              { label: 'Projects Delivered', value: '50+' },
              { label: 'Happy Clients', value: '30+' },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gradient-to-br dark:from-gray-900/50 dark:to-gray-950/50 text-center"
              >
                <div className="text-3xl font-bold text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
