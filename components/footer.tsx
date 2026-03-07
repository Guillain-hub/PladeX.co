'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Mail, Phone, Github, Linkedin, Twitter, MapPin, ArrowRight } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-slate-950 to-slate-900 text-white border-t border-slate-800/50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-4 gap-12 mb-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image
                src="/logo_no_white.png"
                alt="PladeX Logo"
                width={40}
                height={40}
                className="w-10 h-10 rounded-lg bg-gray-900 dark:bg-gray-900 p-2"
              />
              <span className="font-bold text-xl text-white">PladeX</span>
            </div>
            <p className="text-slate-200/70 mb-6 leading-relaxed">
              Building digital foundations for innovative businesses worldwide. Your vision, our expertise.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 hover:border-slate-500 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300">
                <Github className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 hover:border-slate-500 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-lg bg-slate-800 border border-slate-700 hover:border-slate-500 hover:bg-slate-700 flex items-center justify-center text-slate-300 hover:text-white transition-all duration-300">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-lg text-white mb-6">Services</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/services" className="text-slate-200 hover:text-white transition-colors font-medium flex items-center gap-2">
                  <span>Web Development</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-200 hover:text-white transition-colors font-medium flex items-center gap-2">
                  <span>Mobile Apps</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-200 hover:text-white transition-colors font-medium flex items-center gap-2">
                  <span>Organization Systems</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="#services" className="text-slate-200 hover:text-white transition-colors font-medium flex items-center gap-2">
                  <span>Consulting</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg text-white mb-6">Company</h4>
            <ul className="space-y-4">
              <li>
                <Link href="#about" className="text-slate-200 hover:text-white transition-colors font-medium flex items-center gap-2">
                  <span>About Us</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <Link href="#portfolio" className="text-slate-200 hover:text-white transition-colors font-medium flex items-center gap-2">
                  <span>Portfolio</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
              <li>
                <a href="#" className="text-slate-200 hover:text-white transition-colors font-medium flex items-center gap-2">
                  <span>Blog</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
              <li>
                <a href="#" className="text-slate-200 hover:text-white transition-colors font-medium flex items-center gap-2">
                  <span>Careers</span>
                  <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-lg text-white mb-6">Contact</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-slate-400 mt-0.5" />
                <a href="mailto:contact@pladex.com" className="text-slate-200 hover:text-white transition-colors text-sm font-medium">
                  contact@pladex.com
                </a>
              </div>
              <div className="flex gap-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-slate-400 mt-0.5" />
                <a href="tel:+250788123456" className="text-slate-200 hover:text-white transition-colors text-sm font-medium">
                  +250 788 123 456
                </a>
              </div>
              <div className="flex gap-3">
                <MapPin className="w-5 h-5 flex-shrink-0 text-slate-400 mt-0.5" />
                <p className="text-slate-200 text-sm font-medium">Kigali, Rwanda</p>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-slate-800 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-300/60 text-sm">&copy; {currentYear} PladeX. All rights reserved.</p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-slate-300/60 hover:text-white transition-colors font-medium">
                Privacy Policy
              </a>
              <a href="#" className="text-slate-300/60 hover:text-white transition-colors font-medium">
                Terms of Service
              </a>
              <a href="#" className="text-slate-300/60 hover:text-white transition-colors font-medium">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
