'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as z from 'zod'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Checkbox } from '@/components/ui/checkbox'
import { MapPin, Phone, Mail, Monitor, Calendar, CheckCircle, Sparkles, Heart, Shield, Clock } from 'lucide-react'

const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  phone: z.string().min(10, 'Please enter a valid phone number'),
  email: z.string().email('Please enter a valid email address'),
  reason: z.string().min(10, 'Please tell us more about what brings you here'),
  preferredTime: z.string().min(5, 'Please specify your preferred time'),
  agreeContact: z.boolean().refine((val) => val === true, 'You must agree to be contacted'),
})

type ContactFormData = z.infer<typeof contactSchema>

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  })

  const agreeContact = watch('agreeContact')

  const onSubmit = async (data: ContactFormData) => {
    setIsLoading(true)
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    console.log('Form submitted:', data)
    setIsSubmitted(true)
    setIsLoading(false)
    reset()
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Office Location',
      detail: '1287 Maplewood Drive',
      subtitle: 'Los Angeles, CA 90026',
      action: 'Get Directions',
      href: 'https://maps.google.com/?q=1287+Maplewood+Drive+Los+Angeles+CA+90026',
      color: 'from-emerald-500 to-teal-500',
      bgColor: 'from-emerald-50 to-teal-50',
      borderColor: 'border-emerald-200'
    },
    {
      icon: Phone,
      title: 'Phone',
      detail: '(323) 555-0192',
      subtitle: 'Call or text anytime',
      action: 'Call Now',
      href: 'tel:+13235550192', 
      color: 'from-blue-500 to-indigo-500',
      bgColor: 'from-blue-50 to-indigo-50',
      borderColor: 'border-blue-200'
    },
    {
      icon: Mail,
      title: 'Email',
      detail: 'serena@blakepsychology.com',
      subtitle: 'Replies within 24 hours',
      action: 'Send Email',
      href: 'mailto:serena@blakepsychology.com',
      color: 'from-purple-500 to-pink-500',
      bgColor: 'from-purple-50 to-pink-50',
      borderColor: 'border-purple-200'
    },
  ]
      
  const scheduleInfo = [
    {
      icon: Calendar,
      title: 'In-Person Sessions',
      time: 'Tuesday & Thursday',
      hours: '10:00 AM – 6:00 PM',
      location: 'Maplewood Drive Office',
      color: 'from-amber-500 to-orange-500',
      bgColor: 'from-amber-50 to-orange-50',
      borderColor: 'border-amber-200'
    },
    {
      icon: Monitor,
      title: 'Virtual Sessions',
      time: 'Mon, Wed & Fri',
      hours: '1:00 PM – 5:00 PM',
      location: 'Secure Zoom Platform',
      color: 'from-cyan-500 to-blue-500',
      bgColor: 'from-cyan-50 to-blue-50',
      borderColor: 'border-cyan-200'
    },
  ]

  if (isSubmitted) {
    return (
      <section id="contact" className="relative min-h-screen overflow-hidden">
        {/* Enhanced Success Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-100/30">
          <div className="absolute top-20 left-[10%] w-[400px] h-[400px] bg-gradient-to-r from-emerald-400/30 to-teal-400/30 rounded-full blur-3xl animate-float-slow"></div>
          <div className="absolute bottom-20 right-[10%] w-[350px] h-[350px] bg-gradient-to-r from-green-400/25 to-emerald-400/25 rounded-full blur-3xl animate-float-slow delay-2000"></div>
        </div>

        <div className="relative z-10 section-padding">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center">
              <div className="relative animate-fade-in">
                {/* Success Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/10 to-teal-400/10 rounded-3xl blur-xl"></div>
                
                <Card className="relative p-12 bg-white/90 backdrop-blur-sm border border-white/20 shadow-2xl rounded-3xl">
                  <div className="space-y-8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-2xl animate-pulse-slow"></div>
                      <div className="relative w-20 h-20 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center mx-auto shadow-2xl">
                        <CheckCircle className="h-10 w-10 text-white animate-bounce" />
                      </div>
                    </div>
                    <div className="space-y-4">
                      <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                        Thank you for reaching out!
                      </h2>
                      <p className="text-lg text-slate-600 leading-relaxed">
                        I&apos;ve received your message and will get back to you within 24 hours. 
                        I look forward to connecting with you soon and supporting you on your journey.
                      </p>
                    </div>
                    <Button 
                      onClick={() => setIsSubmitted(false)}
                      className="bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
                    >
                      Send Another Message
                    </Button>
                  </div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="contact" className="relative min-h-screen overflow-hidden">
      {/* Enhanced Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-blue-100/30">
        {/* Large Dynamic Gradient Orbs */}
        <div className="absolute top-20 left-[8%] w-[500px] h-[500px] bg-gradient-to-r from-blue-400/25 to-indigo-400/25 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-40 right-[12%] w-[450px] h-[450px] bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-float-slow delay-2000"></div>
        <div className="absolute bottom-32 left-[15%] w-[480px] h-[480px] bg-gradient-to-r from-emerald-400/20 to-teal-400/20 rounded-full blur-3xl animate-float-slow delay-4000"></div>
        <div className="absolute bottom-20 right-[8%] w-[380px] h-[380px] bg-gradient-to-r from-cyan-400/25 to-blue-400/25 rounded-full blur-3xl animate-float-slow delay-1000"></div>
        
        {/* Medium Floating Elements */}
        <div className="absolute top-[50%] left-[70%] w-[250px] h-[250px] bg-gradient-to-r from-amber-300/15 to-yellow-300/15 rounded-full blur-2xl animate-pulse-slow delay-3000"></div>
        <div className="absolute top-[30%] right-[75%] w-[300px] h-[300px] bg-gradient-to-r from-rose-300/15 to-pink-300/15 rounded-full blur-2xl animate-pulse-slow delay-5000"></div>
        
        {/* Small Accent Orbs */}
        <div className="absolute top-[65%] left-[45%] w-[150px] h-[150px] bg-gradient-to-r from-violet-300/10 to-purple-300/10 rounded-full blur-xl animate-float-slow delay-6000"></div>
        <div className="absolute bottom-[40%] right-[50%] w-[180px] h-[180px] bg-gradient-to-r from-teal-300/10 to-emerald-300/10 rounded-full blur-xl animate-pulse-slow delay-7000"></div>
        
        {/* Overlay for Depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-blue-50/10 to-indigo-50/10"></div>
      </div>

      <div className="relative z-10 section-padding">
        <div className="container-custom">
          {/* Enhanced Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-white/80 backdrop-blur-sm border border-blue-200/50 shadow-lg animate-fade-in">
                <Heart className="w-4 h-4 mr-2 text-blue-600" />
                Contact
              </Badge>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
              <span className="bg-gradient-to-r from-slate-800 via-slate-700 to-slate-800 bg-clip-text text-transparent">
                Ready to Begin Your
              </span>
              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-emerald-600 mt-2 block">
                Healing Journey?
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
              Take the first step towards 
              <span className="text-emerald-600 font-semibold"> better mental health and wellbeing</span>
              <br />
              I&#39;m here to support you every step of the way
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Enhanced Contact Form */}
            <div className="relative animate-fade-in delay-500">
              {/* Form Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-3xl blur-xl"></div>
              
              <Card className="relative bg-white/90 backdrop-blur-sm border border-white/20 shadow-2xl rounded-2xl overflow-hidden">
                {/* Decorative Top Border */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500"></div>
                
                <CardHeader className="pb-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl text-white shadow-lg">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-slate-900">
                        Book Your Free Consultation
                      </CardTitle>
                    </div>
                  </div>
                  <p className="text-slate-600 leading-relaxed">
                    Fill out the form below and I&#39;ll get back to you within 24 hours to schedule your free 15-minute consultation.
                  </p>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                    {/* Name */}
                    <div className="space-y-2 group">
                      <Label htmlFor="name" className="text-slate-700 font-medium">Full Name *</Label>
                      <Input
                        id="name"
                        {...register('name')}
                        placeholder="Enter your full name"
                        className={`transition-all duration-300 bg-slate-50/50 border-slate-200 focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 ${errors.name ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' : ''}`}
                      />
                      {errors.name && (
                        <p className="text-sm text-red-500 animate-fade-in">{errors.name.message}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="space-y-2 group">
                      <Label htmlFor="phone" className="text-slate-700 font-medium">Phone Number *</Label>
                      <Input
                        id="phone"
                        {...register('phone')}
                        placeholder="(555) 123-4567"
                        className={`transition-all duration-300 bg-slate-50/50 border-slate-200 focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 ${errors.phone ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' : ''}`}
                      />
                      {errors.phone && (
                        <p className="text-sm text-red-500 animate-fade-in">{errors.phone.message}</p>
                      )}
                    </div>

                    {/* Email */}
                    <div className="space-y-2 group">
                      <Label htmlFor="email" className="text-slate-700 font-medium">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        {...register('email')}
                        placeholder="your.email@example.com"
                        className={`transition-all duration-300 bg-slate-50/50 border-slate-200 focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 ${errors.email ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' : ''}`}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500 animate-fade-in">{errors.email.message}</p>
                      )}
                    </div>

                    {/* Reason */}
                    <div className="space-y-2 group">
                      <Label htmlFor="reason" className="text-slate-700 font-medium">What brings you here? *</Label>
                      <Textarea
                        id="reason"
                        {...register('reason')}
                        placeholder="Tell me a bit about what you'd like to work on or any questions you have..."
                        rows={4}
                        className={`transition-all duration-300 bg-slate-50/50 border-slate-200 focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 resize-none ${errors.reason ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' : ''}`}
                      />
                      {errors.reason && (
                        <p className="text-sm text-red-500 animate-fade-in">{errors.reason.message}</p>
                      )}
                    </div>

                    {/* Preferred Time */}
                    <div className="space-y-2 group">
                      <Label htmlFor="preferredTime" className="text-slate-700 font-medium">Preferred time to reach you *</Label>
                      <Input
                        id="preferredTime"
                        {...register('preferredTime')}
                        placeholder="e.g., Weekday mornings, Tuesday evenings, etc."
                        className={`transition-all duration-300 bg-slate-50/50 border-slate-200 focus:bg-white focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20 ${errors.preferredTime ? 'border-red-400 focus:border-red-400 focus:ring-red-400/20' : ''}`}
                      />
                      {errors.preferredTime && (
                        <p className="text-sm text-red-500 animate-fade-in">{errors.preferredTime.message}</p>
                      )}
                    </div>

                    {/* Consent Checkbox */}
                    <div className="flex items-start space-x-3 p-4 bg-slate-50/50 rounded-xl border border-slate-200">
                      <Checkbox
                        id="agreeContact"
                        checked={agreeContact}
                        onCheckedChange={(checked) => setValue('agreeContact', checked as boolean)}
                        className={`mt-0.5 ${errors.agreeContact ? 'border-red-400' : 'border-slate-300'}`}
                      />
                      <div className="space-y-1">
                        <Label htmlFor="agreeContact" className="text-sm font-normal cursor-pointer text-slate-700 leading-relaxed">
                          I agree to be contacted by Dr. Serena Blake regarding my inquiry and understand that this information will be kept confidential *
                        </Label>
                        {errors.agreeContact && (
                          <p className="text-sm text-red-500 animate-fade-in">{errors.agreeContact.message}</p>
                        )}
                      </div>
                    </div>

                    <Button
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-blue-500 to-indigo-500 hover:from-blue-600 hover:to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
                      disabled={isLoading}
                    >
                      {isLoading ? (
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          Submitting...
                        </div>
                      ) : (
                        'Send Message & Book Consultation'
                      )}
                    </Button>

                    {/* Security Note */}
                    <div className="flex items-center gap-2 text-xs text-slate-500 bg-slate-50/50 p-3 rounded-lg">
                      <Shield className="w-4 h-4 text-emerald-500" />
                      <span>Your information is secure and confidential</span>
                    </div>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Sidebar */}
            <div className="space-y-8 animate-fade-in delay-700">
              {/* Contact Info Cards */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <div className="p-2 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-lg">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  Get In Touch
                </h3>
                
                {contactInfo.map((item, idx) => (
                  <div 
                    key={idx}
                    className={`relative group animate-fade-in`}
                    style={{ animationDelay: `${(idx + 1) * 200}ms` }}
                  >
                    {/* Background Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-5 rounded-2xl blur-xl group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    <div className={`relative bg-white/90 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1`}>
                      {/* Decorative Side Border */}
                      <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${item.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300 rounded-l-2xl`}></div>
                      
                      <div className="flex items-start gap-4">
                        <div className={`p-3 bg-gradient-to-r ${item.color} rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors duration-300">
                            {item.title}
                          </h4>
                          <p className="text-slate-700 font-medium">{item.detail}</p>
                          <p className="text-sm text-slate-500">{item.subtitle}</p>
                          <a
                            href={item.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={`inline-block mt-2 text-sm font-medium bg-gradient-to-r ${item.color} bg-clip-text text-transparent hover:underline transition-all duration-300`}
                          >
                            {item.action} →
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Schedule Info Cards */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                  <div className="p-2 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  Session Schedule
                </h3>
                
                {scheduleInfo.map((item, idx) => (
                  <div 
                    key={idx}
                    className={`relative group animate-fade-in`}
                    style={{ animationDelay: `${(idx + 4) * 200}ms` }}
                  >
                    {/* Background Glow Effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-5 rounded-2xl blur-xl group-hover:opacity-10 transition-opacity duration-300`}></div>
                    
                    <div className={`relative bg-white/90 backdrop-blur-sm border border-white/20 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1`}>
                      {/* Decorative Side Border */}
                      <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b ${item.color} opacity-60 group-hover:opacity-100 transition-opacity duration-300 rounded-l-2xl`}></div>
                      
                      <div className="flex items-start gap-4">
                        <div className={`p-3 bg-gradient-to-r ${item.color} rounded-xl text-white shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                          <item.icon className="h-5 w-5" />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-bold text-slate-900 text-lg group-hover:text-blue-600 transition-colors duration-300">
                            {item.title}
                          </h4>
                          <p className="text-slate-700 font-medium">{item.time}</p>
                          <p className="text-sm text-slate-500">{item.hours}</p>
                          <p className="text-sm text-slate-500">{item.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}