'use client'

import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { MapPin, Clock, Award, Heart, Star, Sparkles } from 'lucide-react'
import Image from 'next/image'

export default function About() {
  return (
    <section id="about" className="relative min-h-screen overflow-hidden">
      {/* Hero-Matching Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-white to-purple-100/30">
        {/* Large Floating Gradient Orbs - More Visible */}
        <div className="absolute top-10 left-[10%] w-[500px] h-[500px] bg-gradient-to-r from-purple-400/40 to-pink-400/40 rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute top-32 right-[15%] w-[400px] h-[400px] bg-gradient-to-r from-emerald-400/35 to-blue-400/35 rounded-full blur-3xl animate-float-slow delay-2000"></div>
        <div className="absolute bottom-20 left-[20%] w-[450px] h-[450px] bg-gradient-to-r from-pink-400/35 to-purple-400/35 rounded-full blur-3xl animate-float-slow delay-4000"></div>
        <div className="absolute bottom-40 right-[10%] w-[350px] h-[350px] bg-gradient-to-r from-blue-400/40 to-emerald-400/40 rounded-full blur-3xl animate-float-slow delay-1000"></div>
        
        {/* Medium Orbs for Depth */}
        <div className="absolute top-[60%] left-[5%] w-[250px] h-[250px] bg-gradient-to-r from-purple-300/30 to-pink-300/30 rounded-full blur-2xl animate-pulse-slow delay-3000"></div>
        <div className="absolute top-[20%] right-[5%] w-[300px] h-[300px] bg-gradient-to-r from-emerald-300/30 to-blue-300/30 rounded-full blur-2xl animate-pulse-slow delay-5000"></div>
        
        {/* Small Accent Orbs */}
        <div className="absolute top-[40%] left-[60%] w-[150px] h-[150px] bg-gradient-to-r from-rose-300/25 to-orange-300/25 rounded-full blur-xl animate-float-slow delay-6000"></div>
        <div className="absolute top-[70%] right-[40%] w-[200px] h-[200px] bg-gradient-to-r from-indigo-300/25 to-purple-300/25 rounded-full blur-xl animate-pulse-slow delay-7000"></div>
        
        {/* Overlay Gradient for Cohesion */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-purple-50/20 to-pink-50/20"></div>
      </div>

      <div className="relative z-10 section-padding">
        <div className="container-custom">
          {/* Enhanced Header */}
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 mb-6">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-white/80 backdrop-blur-sm border border-emerald-200/50 shadow-lg animate-fade-in">
                <Sparkles className="w-4 h-4 mr-2 text-emerald-600" />
                About Dr. Blake
              </Badge>
            </div>
            
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
            <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-rose-500 bg-clip-text text-transparent font-bold">
              Dr. Serena Blake
            </span>




              <br />
              <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-emerald-600 mt-2 block">
                PsyD, Clinical Psychologist
              </span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
              Transforming lives through 
              <span className="text-emerald-600 font-semibold"> compassionate, evidence-based therapy</span>
              <br />
              Your journey to mental wellness starts here
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Enhanced Image Section */}
            <div className="relative animate-fade-in delay-500">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 to-blue-400/20 rounded-3xl blur-3xl transform rotate-6"></div>
              
              <div className="relative rounded-3xl overflow-hidden shadow-2xl transform hover:scale-105 transition-all duration-700 ease-out">
                <Image
                  src="/images/headshot.png"
                  width={600}
                  height={800}
                  className="w-full object-cover"
                  priority
                  alt="Dr. Serena Blake, PsyD"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/30 via-transparent to-transparent" />
                
                {/* Floating Elements */}
                <div className="absolute top-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-3 shadow-xl animate-bounce">
                  <Star className="w-6 h-6 text-amber-500 fill-current" />
                </div>
              </div>
              
              {/* Enhanced Floating Stats */}
              <div className="absolute -bottom-8 -right-8 bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 animate-fade-in delay-1000">
                <div className="text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">
                    500+
                  </div>
                  <div className="text-sm text-slate-600 font-medium">Happy Clients</div>
                  <div className="flex justify-center mt-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 text-amber-400 fill-current" />
                    ))}
                  </div>
                </div>
              </div>

              {/* Additional Floating Badge */}
              <div className="absolute -top-6 -left-6 bg-emerald-500 text-white rounded-2xl p-4 shadow-xl animate-pulse">
                <div className="text-center">
                  <Award className="w-6 h-6 mx-auto mb-1" />
                  <div className="text-xs font-semibold">Licensed</div>
                </div>
              </div>
            </div>

            {/* Enhanced Content Section */}
            <div className="space-y-8 animate-fade-in delay-700">
              {/* Main Description */}
              <div className="space-y-6">
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-blue-500 rounded-full"></div>
                  <p className="text-lg text-slate-700 leading-relaxed pl-8">
                    Dr. Serena Blake is a <span className="font-semibold text-emerald-600">licensed clinical psychologist (PsyD)</span> based in Los Angeles, CA, with eight years of dedicated experience and over 500 successful client sessions. She masterfully blends cutting-edge, evidence-based approaches—including cognitive-behavioral therapy and mindfulness practices—with deeply compassionate, personalized care.
                  </p>
                </div>
                
                <div className="relative">
                  <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-purple-500 rounded-full"></div>
                  <p className="text-lg text-slate-700 leading-relaxed pl-8">
                    Whether you connect in her welcoming Maplewood Drive office or through secure virtual sessions, Dr. Blake creates a <span className="font-semibold text-emerald-600">transformative sanctuary</span> where healing, growth, and empowerment flourish.
                  </p>
                </div>
              </div>

              {/* Enhanced Info Cards Grid */}
              <div className="grid sm:grid-cols-2 gap-4">
                <Card className="group p-6 border-0 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white/90">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-emerald-100 rounded-xl group-hover:bg-emerald-200 transition-colors duration-300">
                      <MapPin className="h-6 w-6 text-emerald-600" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-lg">Location</div>
                      <div className="text-slate-600 font-medium">Los Angeles, CA</div>
                    </div>
                  </div>
                </Card>

                <Card className="group p-6 border-0 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white/90">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-blue-100 rounded-xl group-hover:bg-blue-200 transition-colors duration-300">
                      <Award className="h-6 w-6 text-blue-600" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-lg">Experience</div>
                      <div className="text-slate-600 font-medium">8+ Years Practice</div>
                    </div>
                  </div>
                </Card>

                <Card className="group p-6 border-0 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white/90">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-purple-100 rounded-xl group-hover:bg-purple-200 transition-colors duration-300">
                      <Clock className="h-6 w-6 text-purple-600" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-lg">Availability</div>
                      <div className="text-slate-600 font-medium">Flexible Hours</div>
                    </div>
                  </div>
                </Card>

                <Card className="group p-6 border-0 bg-white/70 backdrop-blur-sm shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 hover:bg-white/90">
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-rose-100 rounded-xl group-hover:bg-rose-200 transition-colors duration-300">
                      <Heart className="h-6 w-6 text-rose-600" />
                    </div>
                    <div>
                      <div className="font-bold text-slate-900 text-lg">Approach</div>
                      <div className="text-slate-600 font-medium">Evidence-Based</div>
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