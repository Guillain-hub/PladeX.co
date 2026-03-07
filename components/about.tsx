'use client'

import { Lightbulb, Users, Target, Zap, ShieldCheck, Rocket } from 'lucide-react'

export default function About() {
  return (
    <section id="about" className="py-12 px-4 sm:px-6 lg:px-8 bg-background relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block mb-6">
            <span className="text-xs font-semibold tracking-[0.15em] text-yellow-400 uppercase bg-yellow-500/10 px-4 py-2 rounded-full border border-yellow-500/20">
              About Us
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 max-w-4xl">
            Crafting <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">digital excellence</span> for forward-thinking brands
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            At PladeX, we partner with organizations to design and build reliable, scalable digital systems that support long-term growth and innovation.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <p className="text-lg text-gray-300 leading-relaxed">
              Our multidisciplinary team blends strategy, design, and engineering to deliver solutions that are elegant, secure, and built for real-world use. We believe in transparency, collaboration, and pushing the boundaries of what's possible.
            </p>

            {/* Values */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-6">Our Core Values</h3>
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
                <div key={i} className="group flex gap-4 items-start p-4 rounded-xl border border-gray-800 bg-gradient-to-r from-gray-900/30 to-gray-950/30 hover:border-yellow-500/30 transition-all duration-300">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-gradient-to-br from-yellow-500/20 to-orange-600/20 border border-yellow-500/30 group-hover:border-yellow-400/50 group-hover:scale-110 transition-all duration-300 flex-shrink-0">
                    <item.icon className="h-6 w-6 text-yellow-400" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white mb-1 group-hover:text-blue-300 transition-colors">
                      {item.title}
                    </h4>
                    <p className="text-gray-400 text-sm">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div className="flex flex-col gap-6">
            {[
              { number: '50+', label: 'Projects Delivered' },
              { number: '30+', label: 'Satisfied Clients' },
              { number: '5+', label: 'Years in Industry' },
              { number: '100%', label: 'Customer Satisfaction' },
            ].map((stat, i) => (
              <div
                key={i}
                className="p-6 rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900/50 to-gray-950/50 hover:border-yellow-500/50 transition-all duration-300 text-center group"
              >
                <div className="text-4xl font-bold text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text mb-2 group-hover:scale-110 transition-transform">
                  {stat.number}
                </div>
                <p className="text-gray-400 text-sm">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Features Grid */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-white mb-8">Why Choose PladeX</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Lightbulb,
                title: 'Innovation',
                desc: 'Forward-thinking ideas backed by practical execution',
              },
              {
                icon: Rocket,
                title: 'Performance',
                desc: 'Optimized systems built for speed and reliability',
              },
              {
                icon: ShieldCheck,
                title: 'Security',
                desc: 'Industry-standard practices to safeguard your data',
              },
              {
                icon: Zap,
                title: 'Scalability',
                desc: 'Infrastructure that grows with your organization',
              },
            ].map((card, i) => (
              <div
                key={i}
                className="group p-6 rounded-xl border border-gray-800 bg-gradient-to-br from-gray-900/50 to-gray-950/50 hover:border-yellow-500/50 hover:bg-gradient-to-br hover:from-gray-900/70 hover:to-gray-900/50 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-yellow-500/20 to-orange-600/20 border border-yellow-500/30 flex items-center justify-center mb-4 group-hover:scale-125 group-hover:border-yellow-400/50 transition-all duration-300">
                  <card.icon className="w-6 h-6 text-yellow-400" />
                </div>
                <h4 className="font-semibold text-lg text-white mb-2 group-hover:text-blue-300 transition-colors">
                  {card.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center p-8 rounded-2xl border border-gray-800 bg-gradient-to-r from-gray-900/50 to-gray-950/50">
          <h3 className="text-3xl font-bold text-white mb-4">Ready to Work Together?</h3>
          <p className="text-gray-400 mb-6">Let's discuss how we can help bring your vision to life</p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 group"
          >
            Get In Touch
            <span className="group-hover:translate-x-1 transition-transform">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}
