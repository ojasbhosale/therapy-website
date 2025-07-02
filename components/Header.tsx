'use client'

import { useState, useEffect } from 'react'
import { Menu, X, Phone, Mail, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navigation = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ]

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMenuOpen(false)
  }

  return (
    <header className={`fixed w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-slate-200/50' 
        : 'bg-black/20 backdrop-blur-sm'
    }`}>
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 sm:h-18 px-4 sm:px-6 lg:px-8">
          {/* Logo */}
          <div className="flex-shrink-0 ">
            <button
              onClick={() => scrollToSection('#hero')}
              className="group flex items-center gap-2 transition-all duration-300 hover:scale-105"
            >
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-gradient-to-r from-slate-700 to-slate-900 rounded-lg flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <div className="hidden sm:block">
                  <div className="text-lg font-bold text-white drop-shadow-lg">
                    Dr. Serena Blake
                  </div>
                  <div className="text-xs text-slate-200 font-medium -mt-1 drop-shadow">
                    Clinical Psychologist
                  </div>
                </div>
                <div className="sm:hidden">
                  <div className="text-lg font-bold text-white drop-shadow-lg">
                    Dr. Blake
                  </div>
                </div>
              </div>
            </button>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className={`relative px-4 py-2 transition-all duration-300 font-medium group rounded-lg ${
                  isScrolled 
                    ? 'text-slate-700 hover:text-slate-900 hover:bg-slate-50' 
                    : 'text-white hover:text-slate-200 hover:bg-white/10'
                }`}
              >
                {item.name}
                <span className={`absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 group-hover:w-6 transition-all duration-300 rounded-full ${
                  isScrolled 
                    ? 'bg-gradient-to-r from-slate-600 to-slate-800' 
                    : 'bg-white'
                }`}></span>
              </button>
            ))}
          </nav>

          {/* Desktop Contact Info */}
          <div className="hidden lg:flex items-center space-x-4">
            <a
              href="tel:+13235550192"
              className={`flex items-center space-x-2 px-3 py-2 text-sm transition-all duration-300 rounded-lg group ${
                isScrolled 
                  ? 'text-slate-600 hover:text-slate-900 hover:bg-slate-50' 
                  : 'text-white hover:text-slate-200 hover:bg-white/10'
              }`}
            >
              <div className={`p-1 rounded-md transition-colors duration-300 ${
                isScrolled 
                  ? 'bg-slate-100 group-hover:bg-slate-200' 
                  : 'bg-white/20 group-hover:bg-white/30'
              }`}>
                <Phone className={`h-3 w-3 ${
                  isScrolled ? 'text-slate-600' : 'text-white'
                }`} />
              </div>
              <span className="font-medium">(323) 555-0192</span>
            </a>
            <Button
              onClick={() => scrollToSection('#contact')}
              size="sm"
              className={`shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 px-4 py-2 rounded-lg font-medium ${
                isScrolled 
                  ? 'bg-slate-800 hover:bg-slate-900 text-white' 
                  : 'bg-white text-slate-800 hover:bg-slate-100'
              }`}
            >
              Book Consult
            </Button>
          </div>

          {/* Mobile Contact & Menu */}
          <div className="flex items-center gap-3 md:hidden">
            {/* Mobile Phone Button */}
            <a
              href="tel:+13235550192"
              className={`p-2 rounded-lg transition-colors duration-300 hover:scale-105 ${
                isScrolled 
                  ? 'bg-slate-100 text-slate-600 hover:bg-slate-200' 
                  : 'bg-white/20 text-white hover:bg-white/30'
              }`}
            >
              <Phone className="h-4 w-4" />
            </a>
            
            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`relative p-2 rounded-lg transition-all duration-300 ${
                isScrolled 
                  ? 'text-slate-700 hover:text-slate-900 hover:bg-slate-100' 
                  : 'text-white hover:text-slate-200 hover:bg-white/10'
              }`}
            >
              <div className="relative w-5 h-5">
                <Menu className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${isMenuOpen ? 'rotate-45 opacity-0' : 'rotate-0 opacity-100'}`} />
                <X className={`absolute inset-0 w-5 h-5 transition-all duration-300 ${isMenuOpen ? 'rotate-0 opacity-100' : '-rotate-45 opacity-0'}`} />
              </div>
            </Button>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        <div className={`md:hidden overflow-hidden transition-all duration-500 ease-out ${
          isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/98 backdrop-blur-lg border-t border-slate-200/50 shadow-lg">
            <div className="px-4 py-6 space-y-2">
              {navigation.map((item, index) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="flex items-center justify-between w-full px-4 py-3 text-slate-700 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all duration-300 group text-left font-medium"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span>{item.name}</span>
                  <div className="w-2 h-2 bg-slate-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </button>
              ))}
              
              {/* Mobile Contact Section */}
              <div className="pt-4 mt-4 border-t border-slate-200/50 space-y-3">
                <div className="text-sm font-semibold text-slate-900 px-4">Get In Touch</div>
                
                <a
                  href="tel:+13235550192"
                  className="flex items-center space-x-3 px-4 py-3 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all duration-300 group"
                >
                  <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-slate-200 transition-colors duration-300">
                    <Phone className="h-4 w-4 text-slate-600" />
                  </div>
                  <div>
                    <div className="font-medium">(323) 555-0192</div>
                    <div className="text-xs text-slate-500">Tap to call</div>
                  </div>
                </a>
                
                <a
                  href="mailto:serena@blakepsychology.com"
                  className="flex items-center space-x-3 px-4 py-3 text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-xl transition-all duration-300 group"
                >
                  <div className="p-2 bg-slate-100 rounded-lg group-hover:bg-slate-200 transition-colors duration-300">
                    <Mail className="h-4 w-4 text-slate-600" />
                  </div>
                  <div>
                    <div className="font-medium text-sm">serena@blakepsychology.com</div>
                    <div className="text-xs text-slate-500">Send email</div>
                  </div>
                </a>
                
                <Button
                  onClick={() => scrollToSection('#contact')}
                  className="w-full bg-slate-800 hover:bg-slate-900 text-white shadow-lg hover:shadow-xl transition-all duration-300 py-3 rounded-xl font-medium mt-4"
                >
                  Book Consultation
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}