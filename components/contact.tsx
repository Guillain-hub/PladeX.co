'use client'

import React from "react"
import { useState } from 'react'
import { Mail, Phone, MapPin, ArrowRight } from 'lucide-react'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setTimeout(() => {
      setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', message: '' })
      setSubmitted(false)
    }, 3000)
  }

  return (
    <section id="contact" className="py-12 px-4 sm:px-6 lg:px-8 relative">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 text-center">
          <div className="inline-block mb-6">
            <span className="text-xs font-semibold tracking-[0.15em] text-yellow-400 uppercase bg-yellow-500/10 px-4 py-2 rounded-full border border-yellow-500/20">
              Get In Touch
            </span>
          </div>
          
          <h2 className="text-5xl md:text-6xl lg:text-7xl font-bold text-black dark:text-white leading-[1.1] mb-6 max-w-4xl mx-auto">
            Let's Start Your <span className="bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">Digital Journey</span>
          </h2>
          
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Ready to transform your vision into reality? Reach out to our team and let's discuss how we can help.
          </p>
        </div>

        {/* Contact Info Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div className="group p-8 rounded-xl border border-white/10 bg-white/[0.02] hover:border-yellow-500/50 transition-all duration-300 text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-500/20 to-orange-600/20 border border-yellow-500/30 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:border-yellow-400/50 transition-all duration-300">
              <Mail className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Email</h3>
            <a href="mailto:contact@pladex.com" className="text-slate-300 hover:text-yellow-600 transition">
              contact@pladex.com
            </a>
          </div>

          <div className="group p-8 rounded-xl border border-white/10 bg-white/[0.02] hover:border-yellow-500/50 transition-all duration-300 text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-500/20 to-orange-600/20 border border-yellow-500/30 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:border-yellow-400/50 transition-all duration-300">
              <Phone className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Phone</h3>
            <a href="tel:+250788123456" className="text-slate-300 hover:text-yellow-600 transition">
              +250 788 123 456
            </a>
          </div>

          <div className="group p-8 rounded-xl border border-white/10 bg-white/[0.02] hover:border-yellow-500/50 transition-all duration-300 text-center">
              <div className="w-14 h-14 bg-gradient-to-br from-yellow-500/20 to-orange-600/20 border border-yellow-500/30 rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:border-yellow-400/50 transition-all duration-300">
              <MapPin className="w-6 h-6 text-yellow-400" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Location</h3>
            <p className="text-slate-300">Kigali, Rwanda</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="max-w-2xl mx-auto rounded-2xl border border-white/10 bg-white/[0.02] p-8 md:p-12">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="firstName" className="block text-sm font-semibold text-white mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-white/10 rounded-lg bg-white/5 text-white placeholder:text-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-semibold text-white mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-white/10 rounded-lg bg-white/5 text-white placeholder:text-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-white mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-white/10 rounded-lg bg-white/5 text-white placeholder:text-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-white mb-2">
                  Phone (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-white/10 rounded-lg bg-white/5 text-white placeholder:text-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition"
                />
              </div>
            </div>

            <div>
              <label htmlFor="company" className="block text-sm font-semibold text-white mb-2">
                Company (Optional)
              </label>
              <input
                type="text"
                id="company"
                name="company"
                value={formData.company}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-white/10 rounded-lg bg-white/5 text-white placeholder:text-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-white mb-2">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full px-4 py-3 border border-white/10 rounded-lg bg-white/5 text-white placeholder:text-slate-400 focus:outline-none focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 transition resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitted}
              className="w-full px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-600 text-white rounded-lg font-semibold hover:shadow-2xl hover:shadow-yellow-500/50 transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {submitted ? '✓ Message Sent' : 'Send Message'}
              {!submitted && <ArrowRight className="w-4 h-4" />}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
