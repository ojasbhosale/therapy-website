'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Heart, Users, Shield, ArrowRight, Sparkles, CheckCircle } from 'lucide-react'
import Image from 'next/image'

export default function Services() {
    const services = [
        {
            id: 1,
            title: 'Anxiety & Stress Management',
            description: 'Learn effective coping strategies and mindfulness techniques to manage anxiety, reduce stress, and regain control over your daily life. Using evidence-based approaches like CBT and relaxation techniques.',
            icon: Shield,
            image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            price: '$200',
            duration: '50 min',
            color: 'from-blue-500 to-cyan-500',
            bgColor: 'from-blue-400/30 to-cyan-400/30',
            success: '95% success rate'
        },
        {
            id: 2,
            title: 'Relationship Counseling',
            description: 'Strengthen communication, rebuild trust, and develop healthier relationship patterns. Whether for couples or individuals working on relationship skills, create deeper connections with those you love.',
            icon: Users,
            image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            price: '$240',
            duration: '60 min',
            color: 'from-pink-500 to-rose-500',
            bgColor: 'from-pink-400/30 to-rose-400/30',
            success: '90% satisfaction'
        },
        {
            id: 3,
            title: 'Trauma Recovery',
            description: 'Gentle, trauma-informed therapy to help you process difficult experiences and build resilience. Using specialized techniques to support your healing journey at your own pace.',
            icon: Heart,
            image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
            price: '$200',
            duration: '50 min',
            color: 'from-green-500 to-emerald-500',
            bgColor: 'from-green-400/30 to-emerald-400/30',
            success: '92% improvement'
        }
    ]

    const scrollToContact = () => {
        const element = document.querySelector('#contact')
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <section id="services" className="relative min-h-screen overflow-hidden">
            {/* Enhanced Animated Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-blue-100/30">
                {/* Large Dynamic Gradient Orbs */}
                <div className="absolute top-20 left-[8%] w-[600px] h-[600px] bg-gradient-to-r from-emerald-400/35 to-teal-400/35 rounded-full blur-3xl animate-float-slow"></div>
                <div className="absolute top-40 right-[12%] w-[500px] h-[500px] bg-gradient-to-r from-blue-400/40 to-indigo-400/40 rounded-full blur-3xl animate-float-slow delay-2000"></div>
                <div className="absolute bottom-32 left-[15%] w-[550px] h-[550px] bg-gradient-to-r from-purple-400/30 to-pink-400/30 rounded-full blur-3xl animate-float-slow delay-4000"></div>
                <div className="absolute bottom-20 right-[8%] w-[450px] h-[450px] bg-gradient-to-r from-rose-400/35 to-orange-400/35 rounded-full blur-3xl animate-float-slow delay-1000"></div>

                {/* Medium Floating Elements */}
                <div className="absolute top-[30%] left-[70%] w-[300px] h-[300px] bg-gradient-to-r from-cyan-300/25 to-blue-300/25 rounded-full blur-2xl animate-pulse-slow delay-3000"></div>
                <div className="absolute top-[65%] right-[60%] w-[350px] h-[350px] bg-gradient-to-r from-emerald-300/25 to-green-300/25 rounded-full blur-2xl animate-pulse-slow delay-5000"></div>

                {/* Small Accent Orbs */}
                <div className="absolute top-[15%] left-[45%] w-[180px] h-[180px] bg-gradient-to-r from-violet-300/20 to-purple-300/20 rounded-full blur-xl animate-float-slow delay-6000"></div>
                <div className="absolute bottom-[60%] right-[25%] w-[220px] h-[220px] bg-gradient-to-r from-amber-300/20 to-yellow-300/20 rounded-full blur-xl animate-pulse-slow delay-7000"></div>

                {/* Overlay for Depth */}
                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-emerald-50/30 to-blue-50/30"></div>
            </div>

            <div className="relative z-10 section-padding">
                <div className="container-custom">
                    {/* Enhanced Header */}
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 mb-6">
                            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium bg-white/80 backdrop-blur-sm border border-emerald-200/50 shadow-lg animate-fade-in">
                                <Sparkles className="w-4 h-4 mr-2 text-emerald-600" />
                                Our Services
                            </Badge>
                        </div>

                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
                            <span className="bg-gradient-to-r from-pink-400 via-rose-400 to-rose-500 bg-clip-text text-transparent">
                                Specialized Therapy
                            </span>
                            <br />
                            <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-emerald-600 mt-2 block">
                                Evidence-Based Solutions
                            </span>
                        </h2>

                        <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed animate-fade-in delay-300">
                            Tailored therapeutic approaches designed to meet your
                            <span className="text-emerald-600 font-semibold"> unique needs and goals</span>
                            <br />
                            Your path to healing and growth starts here
                        </p>
                    </div>

                    {/* Enhanced Services Grid */}
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {services.map((service, index) => {
                            const IconComponent = service.icon
                            return (
                                <div
                                    key={service.id}
                                    className={`relative animate-fade-in`}
                                    style={{ animationDelay: `${(index + 1) * 200}ms` }}
                                >
                                    {/* Background Glow Effect */}
                                    <div className={`absolute inset-0 bg-gradient-to-r ${service.bgColor} rounded-3xl blur-2xl transform rotate-3 opacity-60`} />

                                    <Card className="relative group overflow-visible hover:shadow-2xl transition-all duration-700 border-0 shadow-lg hover:scale-105 hover:-translate-y-2 bg-white/90 backdrop-blur-sm">
                                        {/* Image Section */}
                                        <div className="relative h-56 overflow-hidden z-0">
                                            <Image
                                                src={service.image}
                                                alt={service.title}
                                                fill
                                                className="object-cover group-hover:scale-110 transition-transform duration-700"
                                            />
                                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-80 group-hover:opacity-90 transition-opacity duration-300`} />

                                            {/* Floating Icon */}
                                            <div className="absolute inset-0 flex items-center justify-center z-10">
                                                <div className="bg-white/20 backdrop-blur-sm rounded-full p-6 group-hover:scale-110 group-hover:bg-white/30 transition-all duration-500">
                                                    <IconComponent className="h-10 w-10 text-white" />
                                                </div>
                                            </div>

                                            {/* Success Badge */}
                                            <div className="absolute top-4 right-4 z-20 bg-white/95 backdrop-blur-sm rounded-xl px-3 py-2 shadow-lg transform group-hover:scale-105 transition-transform duration-300">
                                                <div className="flex items-center gap-1">
                                                    <CheckCircle className="w-4 h-4 text-emerald-500" />
                                                    <span className="text-xs font-semibold text-slate-700">{service.success}</span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* ✅ Floating Price Tag - smaller size, same perfect placement */}
                                        <div className="absolute top-[186px] left-6 right-6 z-30 bg-gradient-to-r from-white/98 to-white/95 backdrop-blur-md rounded-xl p-3 shadow-xl border border-white/30 group-hover:shadow-2xl group-hover:scale-[1.03] transition-all duration-500">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center gap-2">
                                                    <div className="bg-emerald-500 text-white rounded-full w-7 h-7 flex items-center justify-center">
                                                        <span className="text-xs font-bold">$</span>
                                                    </div>
                                                    <div>
                                                        <span className="text-xl font-bold text-slate-800">{service.price}</span>
                                                        <span className="text-xs text-slate-500 ml-1">/ session</span>
                                                    </div>
                                                </div>
                                                <div className="text-right">
                                                    <Badge variant="outline" className="text-[10px] font-semibold bg-emerald-50 border-emerald-200 text-emerald-700 px-2 py-0.5">
                                                        {service.duration}
                                                    </Badge>
                                                    <div className="text-[10px] text-slate-500 mt-0.5">duration</div>
                                                </div>
                                            </div>
                                        </div>


                                        {/* Card Header */}
                                        <CardHeader className="pt-14 pb-4 relative z-10">
                                            <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors duration-300">
                                                {service.title}
                                            </CardTitle>
                                        </CardHeader>

                                        {/* Card Content */}
                                        <CardContent className="pt-0 pb-8 relative z-10">
                                            <p className="text-slate-600 leading-relaxed mb-6">
                                                {service.description}
                                            </p>

                                            <Button
                                                onClick={scrollToContact}
                                                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-3 group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-105"
                                            >
                                                Get Started Today
                                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                                            </Button>
                                        </CardContent>

                                        {/* Decorative Corners */}
                                        <div className="absolute top-4 left-4 w-6 h-6 border-l-2 border-t-2 border-white/40 group-hover:border-white/60 transition-colors duration-300" />
                                        <div className="absolute bottom-4 right-4 w-6 h-6 border-r-2 border-b-2 border-white/40 group-hover:border-white/60 transition-colors duration-300" />
                                    </Card>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </section>
    )
}