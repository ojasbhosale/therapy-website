'use client'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { HelpCircle, Sparkles, Clock, MapPin, CreditCard, CheckCircle, MessageCircle } from 'lucide-react'
import { FaCcVisa, FaCcMastercard, FaCcAmex, FaMoneyCheckAlt } from 'react-icons/fa'

export default function FAQ() {
  const faqs = [
    {
      id: '1',
      question: 'Do you accept insurance?',
      answer: 'No, I do not accept insurance directly. However, I provide a detailed superbill after each session that you can submit to your insurance company for potential reimbursement. Many clients find that their out-of-network benefits cover a portion of the cost. I recommend checking with your insurance provider about your out-of-network mental health benefits.',
      icon: CreditCard,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: '2',
      question: 'Are online sessions available?',
      answer: 'Yes! I offer secure, HIPAA-compliant virtual sessions via Zoom on Mondays, Wednesdays, and Fridays from 1 PM to 5 PM. Virtual sessions are just as effective as in-person therapy and offer the convenience of receiving care from the comfort of your own space. All you need is a private location and a stable internet connection.',
      icon: MessageCircle,
      color: 'from-emerald-500 to-teal-500'
    },
    {
      id: '3',
      question: 'What is your cancellation policy?',
      answer: 'I require 24-hour notice for all cancellations or rescheduling requests. This allows me to offer the time slot to other clients who may need it. Cancellations made with less than 24 hours notice will be charged the full session fee, except in cases of emergency or sudden illness.',
      icon: Clock,
      color: 'from-amber-500 to-orange-500'
    },
    {
      id: '4',
      question: 'How long are therapy sessions?',
      answer: 'Individual therapy sessions are 50 minutes long, while couples sessions are 60 minutes. This provides adequate time to explore issues deeply while maintaining a structured therapeutic framework. Most clients find this duration allows for meaningful progress in each session.',
      icon: Clock,
      color: 'from-purple-500 to-pink-500'
    },
    {
      id: '5',
      question: 'How often should I schedule sessions?',
      answer: 'Most clients benefit from weekly sessions initially, especially when working through acute issues like anxiety or recent trauma. As progress is made, we may transition to bi-weekly or monthly sessions for maintenance and continued growth. The frequency will depend on your specific needs and goals.',
      icon: CheckCircle,
      color: 'from-green-500 to-emerald-500'
    },
    {
      id: '6',
      question: 'What should I expect in the first session?',
      answer: 'The first session focuses on getting to know you and understanding what brings you to therapy. We\'ll discuss your concerns, goals, and history. I\'ll explain my therapeutic approach and answer any questions you have. This session helps us determine if we\'re a good fit and creates the foundation for our work together.',
      icon: HelpCircle,
      color: 'from-rose-500 to-red-500'
    }
  ]

  

  return (
    <section id="faq" className="relative min-h-screen overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-indigo-100/30">
        {/* Large Dynamic Gradient Orbs */}
        <div className="absolute top-16 left-[6%] w-[550px] h-[550px] bg-gradient-to-r from-indigo-400/30 to-purple-400/30 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-32 right-[10%] w-[480px] h-[480px] bg-gradient-to-r from-emerald-400/35 to-cyan-400/35 rounded-full blur-3xl animate-float-slow delay-2000"></div>
        <div className="absolute bottom-24 left-[20%] w-[520px] h-[520px] bg-gradient-to-r from-rose-400/25 to-pink-400/25 rounded-full blur-3xl animate-float-slow delay-4000"></div>
        <div className="absolute bottom-40 right-[5%] w-[420px] h-[420px] bg-gradient-to-r from-blue-400/30 to-indigo-400/30 rounded-full blur-3xl animate-float-slow delay-1000"></div>
        
        {/* Medium Floating Elements */}
        <div className="absolute top-[45%] left-[75%] w-[280px] h-[280px] bg-gradient-to-r from-amber-300/20 to-yellow-300/20 rounded-full blur-2xl animate-pulse-slow delay-3000"></div>
        <div className="absolute top-[25%] right-[70%] w-[320px] h-[320px] bg-gradient-to-r from-purple-300/20 to-indigo-300/20 rounded-full blur-2xl animate-pulse-slow delay-5000"></div>
        
        {/* Small Accent Orbs */}
        <div className="absolute top-[60%] left-[40%] w-[160px] h-[160px] bg-gradient-to-r from-teal-300/15 to-emerald-300/15 rounded-full blur-xl animate-float-slow delay-6000"></div>
        <div className="absolute bottom-[30%] right-[45%] w-[200px] h-[200px] bg-gradient-to-r from-violet-300/15 to-purple-300/15 rounded-full blur-xl animate-pulse-slow delay-7000"></div>
        
        {/* Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-indigo-50/20 to-purple-50/20"></div>
      </div>

      <div className="relative z-10 section-padding">
        <div className="container-custom">
          {/* Enhanced Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-white/80 backdrop-blur-sm border border-indigo-200/50 shadow-lg animate-fade-in">
                <Sparkles className="w-4 h-4 mr-2 text-indigo-600" />
                FAQ
              </Badge>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-rose-500 bg-clip-text text-transparent">
                Frequently Asked
              </span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-emerald-600 mt-2 block">
                Questions
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
              Common questions about 
              <span className="text-emerald-600 font-semibold"> therapy sessions, policies, and what to expect</span>
              <br />
              Everything you need to know before we begin
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-12">
            {/* Enhanced FAQ Accordion */}
            <div className="lg:col-span-2 space-y-6">
              <Accordion type="single" collapsible className="space-y-4">
                {faqs.map((faq, index) => {
                  const IconComponent = faq.icon
                  return (
                    <div 
                      key={faq.id}
                      className={`relative animate-fade-in`}
                      style={{ animationDelay: `${(index + 1) * 150}ms` }}
                    >
                      {/* Background Glow Effect */}
                      <div className={`absolute inset-0 bg-gradient-to-r ${faq.color} opacity-5 rounded-2xl blur-xl`}></div>
                      
                      <AccordionItem
                        value={faq.id}
                        className="relative group bg-white/90 backdrop-blur-sm border border-white/20 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1 overflow-hidden"
                      >
                        {/* Decorative Side Border */}
                        <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${faq.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
                        
                        <AccordionTrigger className="px-8 py-6 text-left hover:no-underline group-hover:bg-white/50 transition-colors duration-300">
                          <div className="flex items-start space-x-4 w-full">
                            <div className={`p-3 bg-gradient-to-r ${faq.color} rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                              <IconComponent className="h-5 w-5" />
                            </div>
                            <div className="flex-1">
                              <span className="font-bold text-slate-900 text-lg group-hover:text-indigo-600 transition-colors duration-300">
                                {faq.question}
                              </span>
                            </div>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="px-8 pb-6">
                          <div className="pl-16 text-slate-600 leading-relaxed text-base">
                            {faq.answer}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </div>
                  )
                })}
              </Accordion>
            </div>

            {/* Enhanced Contact & Info Sidebar */}
            <div className="space-y-6 animate-fade-in delay-1000">
              
              {/* Enhanced Quick Info Card */}
              <div className="relative">
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/15 to-teal-400/15 rounded-3xl blur-xl"></div>
                
                <Card className="relative p-8 bg-white/90 backdrop-blur-sm border border-white/20 shadow-xl rounded-2xl space-y-6">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="p-2 bg-emerald-100 rounded-lg">
                      <Sparkles className="w-5 h-5 text-emerald-600" />
                    </div>
                    <h4 className="font-bold text-slate-900 text-lg">Quick Info</h4>
                  </div>

                  {/* Enhanced Session Types */}
                  <div className="space-y-4">
                    <div className="p-4 bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl border border-emerald-100">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-semibold text-slate-800">Individual Session:</span>
                        <div className="text-right">
                          <span className="font-bold text-indigo-600 text-lg">$200</span>
                          <span className="text-slate-500 text-sm"> / 50 min</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-600">One-on-one support tailored to your needs</p>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl border border-blue-100">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-semibold text-slate-800">Couples Session:</span>
                        <div className="text-right">
                          <span className="font-bold text-indigo-600 text-lg">$240</span>
                          <span className="text-slate-500 text-sm"> / 60 min</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-600">Work together to strengthen your relationship</p>
                    </div>

                    <div className="p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-semibold text-slate-800">Free Consultation:</span>
                        <div className="text-right">
                          <span className="font-bold text-emerald-600 text-lg">FREE</span>
                          <span className="text-slate-500 text-sm"> / 15 min</span>
                        </div>
                      </div>
                      <p className="text-xs text-slate-600">Understand how I can help you before starting</p>
                    </div>
                  </div>

                  {/* Enhanced Payment Section */}
                  <div className="pt-4 border-t border-slate-200">
                    <div className="flex items-center gap-2 mb-3">
                      <CreditCard className="w-4 h-4 text-slate-600" />
                      <span className="font-semibold text-slate-700">Accepted Payments:</span>
                    </div>
                    <div className="flex items-center justify-start gap-4 text-3xl text-slate-600 mb-3">
                      <FaCcVisa title="Visa" className="hover:text-blue-600 transition-colors" />
                      <FaCcMastercard title="MasterCard" className="hover:text-red-600 transition-colors" />
                      <FaCcAmex title="AmEx" className="hover:text-blue-500 transition-colors" />
                      <FaMoneyCheckAlt title="Cash / Check" className="hover:text-green-600 transition-colors" />
                    </div>
                    <div className="text-xs text-slate-500 bg-slate-50 p-2 rounded-lg">
                      💡 Superbill provided for insurance reimbursement
                    </div>
                  </div>

                  {/* Enhanced Availability Section */}
                  <div className="pt-4 border-t border-slate-200 space-y-3">
                    <div className="flex items-start gap-3">
                      <Clock className="w-4 h-4 text-emerald-600 mt-0.5" />
                      <div>
                        <span className="text-slate-600 text-sm">Availability:</span>{' '}
                        <span className="font-semibold text-slate-800">Mon – Fri, 10am – 6pm</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-4 h-4 text-indigo-600 mt-0.5" />
                      <div>
                        <span className="text-slate-600 text-sm">Location:</span>{' '}
                        <span className="font-semibold text-slate-800">Los Angeles, CA</span>
                        <div className="text-xs text-slate-500">(In-Person & Online Available)</div>
                      </div>
                    </div>
                  </div>

                  
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}