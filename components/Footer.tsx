'use client'

import Link from 'next/link'
import { Mail, MapPin, Phone, Linkedin, Instagram } from 'lucide-react'
import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer className="relative bg-gradient-to-tr from-primary/5 via-white to-primary/10 border-t border-gray-200 mt-24 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Subtle Animated Background - Matching About Section */}
      <div className="absolute inset-0">
        {/* Large Floating Gradient Orbs */}
        <div className="absolute top-10 left-[10%] w-[400px] h-[400px] bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-32 right-[15%] w-[350px] h-[350px] bg-gradient-to-r from-emerald-400/15 to-blue-400/15 rounded-full blur-3xl animate-float-slow delay-2000"></div>
        <div className="absolute bottom-20 left-[20%] w-[300px] h-[300px] bg-gradient-to-r from-pink-400/15 to-purple-400/15 rounded-full blur-3xl animate-float-slow delay-4000"></div>
        
        {/* Overlay for Cohesion */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-50/10 to-pink-50/10"></div>
      </div>

      <div className="relative z-10 container-custom grid md:grid-cols-3 gap-12 text-gray-700">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">Dr. Serena Blake, PsyD</h3>
          <div className="space-y-4 text-sm leading-relaxed">
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary mt-0.5" />
              <span>1287 Maplewood Drive<br />Los Angeles, CA 90026</span>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary mt-0.5" />
              <a href="tel:+13235550192" className="hover:underline">
                (323) 555-0192
              </a>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary mt-0.5" />
              <a href="mailto:serena@blakepsychology.com" className="hover:underline">
                serena@blakepsychology.com
              </a>
            </div>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">Quick Links</h3>
          <ul className="space-y-3 text-sm text-gray-700">
            {[
              ['About', '#about'],
              ['Services', '#services'],
              ['FAQ', '#faq'],
              ['Contact', '#contact'],
            ].map(([label, href], idx) => (
              <li key={idx}>
                <Link
                  href={href}
                  className="hover:text-primary transition-colors duration-200"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Social & Credits */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <h3 className="text-xl font-bold text-gray-900 mb-4">Connect</h3>
          <div className="flex items-center gap-4 mb-6">
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:scale-105 transition-transform"
            >
              <div className="p-2 bg-primary/10 text-primary rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </div>
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group hover:scale-105 transition-transform"
            >
              <div className="p-2 bg-primary/10 text-primary rounded-full group-hover:bg-primary group-hover:text-white transition-colors">
                <Instagram className="w-5 h-5" />
              </div>
            </a>
          </div>
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Dr. Serena Blake. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  )
}