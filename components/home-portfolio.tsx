'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'

export default function HomePortfolio() {
  const projects = [
    {
      title: 'E-Commerce Platform',
      category: 'Web Development',
      description: 'A fully-featured e-commerce platform with real-time inventory and payment processing',
      tags: ['React', 'Node.js', 'Stripe'],
      slug: 'ecommerce-platform'
    },
    {
      title: 'Mobile Fitness App',
      category: 'Mobile App',
      description: 'Cross-platform fitness tracking app with AI-powered workout recommendations',
      tags: ['React Native', 'Machine Learning', 'Firebase'],
      slug: 'fitness-app'
    },
    {
      title: 'Business Management System',
      category: 'Organization System',
      description: 'Enterprise-level CRM and project management solution for distributed teams',
      tags: ['Next.js', 'PostgreSQL', 'Real-time Sync'],
      slug: 'business-system'
    },
  ]

  return (
    <section id="portfolio" className="py-12 px-4 sm:px-6 lg:px-8 bg-white dark:bg-background relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="inline-block mb-6">
            <span className="text-xs font-semibold tracking-[0.15em] text-yellow-400 uppercase bg-yellow-500/10 px-4 py-2 rounded-full border border-yellow-500/20">
              Our Work
            </span>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div className="md:col-span-2">
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white leading-[1.1] mb-6">
                Selected <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">projects</span>
              </h2>
              
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                Discover how we've helped businesses transform their digital presence through innovative solutions.
              </p>
            </div>
            <div className="text-right">
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 text-yellow-400 font-semibold hover:text-yellow-300 transition"
              >
                View All Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>

        {/* Projects Grid - Show only 3 items */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link
              key={index}
              href={`/projects/${project.slug}`}
              className="group rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gradient-to-br dark:from-gray-900/50 dark:to-gray-950/50 hover:border-yellow-500/50 transition-all duration-500 p-8 overflow-hidden cursor-pointer"
            >
              {/* Content */}
              <div className="relative z-10">
                <span className="inline-block text-xs font-semibold tracking-widest uppercase text-yellow-400 bg-yellow-500/10 px-3 py-1 rounded-lg border border-yellow-500/20 mb-4">
                  {project.category}
                </span>

                <h3 className="text-2xl font-bold text-black dark:text-white mb-3 group-hover:text-yellow-500 transition-colors">
                  {project.title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-balance mb-6 text-sm">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-2 py-1 text-xs font-medium bg-gray-200 dark:bg-gray-900/50 text-gray-600 dark:text-gray-400 rounded-full border border-gray-300 dark:border-gray-800 group-hover:border-yellow-500/30 group-hover:text-yellow-300 transition-all"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="inline-flex items-center gap-2 text-yellow-400 font-semibold text-sm group-hover:text-yellow-300 transition">
                  View Case Study
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </div>

                {/* Bottom Accent Line */}
                <div className="mt-6 h-px bg-gradient-to-r from-yellow-500/0 via-yellow-500/50 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
