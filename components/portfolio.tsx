'use client'

import { ArrowRight } from 'lucide-react'

export default function Portfolio() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A fully-featured e-commerce platform with real-time inventory and payment processing',
      tags: ['React', 'Node.js', 'Stripe'],
    },
    {
      title: 'Mobile Fitness App',
      category: 'Mobile App',
      description: 'Cross-platform fitness tracking app with AI-powered workout recommendations',
      tags: ['React Native', 'Machine Learning', 'Firebase'],
    },
    {
      title: 'Business Management System',
      category: 'Organization System',
      description: 'Enterprise-level CRM and project management solution for distributed teams',
      tags: ['Next.js', 'PostgreSQL', 'Real-time Sync'],
    },
    {
      title: 'Content Management Platform',
      category: 'Web Development',
      description: 'Intuitive CMS for content creators with advanced analytics and SEO tools',
      tags: ['Vue.js', 'Node.js', 'ElasticSearch'],
    },
    {
      title: 'Social Collaboration App',
      category: 'Mobile App',
      description: 'Team collaboration platform with messaging, file sharing, and video conferencing',
      tags: ['Flutter', 'WebRTC', 'Cloud Storage'],
    },
    {
      title: 'Analytics Dashboard',
      category: 'Web Development',
      description: 'Real-time data visualization dashboard for business intelligence and reporting',
      tags: ['React', 'D3.js', 'WebSocket'],
    },
  ]

  return (
    <section id="portfolio" className="py-12 px-4 sm:px-6 lg:px-8 bg-background relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block mb-6">
            <span className="text-xs font-semibold tracking-[0.15em] text-yellow-400 uppercase bg-yellow-500/10 px-4 py-2 rounded-full border border-yellow-500/20">
              Our Work
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6 max-w-4xl">
            Showcase of <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">successful projects</span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-2xl leading-relaxed">
            Discover how we've helped businesses transform their digital presence and achieve their goals through innovative solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-gray-800 bg-gradient-to-br from-gray-900/50 to-gray-950/50 hover:border-yellow-500/50 transition-all duration-500 p-8 overflow-hidden cursor-pointer"
            >
              {/* Gradient Background */}
              <div className="absolute -top-24 -right-24 w-96 h-96 bg-gradient-to-br from-yellow-500/20 to-orange-600/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-3xl" />
              
              {/* Content */}
              <div className="relative z-10">
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-yellow-400 bg-yellow-500/10 px-3 py-1 rounded-lg border border-yellow-500/20 mb-4">
                  {project.category}
                </span>

                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-400 leading-relaxed text-balance mb-6 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-gray-900/50 text-gray-400 rounded-full border border-gray-800 group-hover:border-yellow-500/30 group-hover:text-yellow-300 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <button className="inline-flex items-center gap-2 text-yellow-400 font-semibold text-sm group/btn hover:text-yellow-300 transition">
                  View Project
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition" />
                </button>

                {/* Bottom Accent Line */}
                <div className="mt-6 h-px bg-gradient-to-r from-yellow-500/0 via-yellow-500/50 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center p-12 rounded-2xl border border-gray-800 bg-gradient-to-r from-gray-900/50 to-gray-950/50">
          <p className="text-gray-400 mb-6">Want to explore more of our work?</p>
          <a 
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 rounded-full bg-gradient-to-r from-yellow-500 to-orange-600 text-white font-semibold hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 group"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  )
}
