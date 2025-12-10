'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useRef } from 'react';
import { getImagePath } from '@/lib/utils';
import { Navbar } from '@/components/Navbar';
import { ThreeDCard } from '@/components/ui/ThreeDCard';
import { ArrowRight, Clock, Shield, Smartphone } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export default function Home() {
    const targetRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: targetRef,
        offset: ["start start", "end start"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
    const y = useTransform(scrollYProgress, [0, 0.5], [0, 100]);

    return (
        <main className="min-h-screen bg-slate-50 overflow-x-hidden">
            <Navbar />

            {/* Hero Section */}
            <section ref={targetRef} className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden min-h-screen flex items-center">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 -z-10" />

                {/* Animated Background Blobs */}
                <motion.div
                    animate={{ rotate: 360, scale: [1, 1.2, 1] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute top-20 right-20 w-96 h-96 bg-purple-200/30 rounded-full mix-blend-multiply filter blur-3xl"
                />
                <motion.div
                    animate={{ rotate: -360, scale: [1, 1.3, 1] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                    className="absolute -bottom-20 -left-20 w-96 h-96 bg-blue-200/30 rounded-full mix-blend-multiply filter blur-3xl"
                />

                <div className="container mx-auto px-6 text-center relative z-10">
                    <motion.div
                        style={{ opacity, scale, y }}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <motion.span
                            whileHover={{ scale: 1.05 }}
                            className="inline-block py-2 px-6 rounded-full bg-white/80 backdrop-blur-sm border border-blue-100 text-blue-600 font-medium text-sm mb-8 shadow-sm hover:shadow-md transition-all cursor-default"
                        >
                            🏥 Next-Gen Healthcare Management
                        </motion.span>
                        <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-tight">
                            Healthcare Reimagined for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 animate-gradient-x">
                                The Modern World
                            </span>
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Streamline operations, enhance patient care, and access medical services from anywhere.
                            The all-in-one platform for hospitals, doctors, and patients.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#portals"
                            className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200/50 transition-all flex items-center gap-2"
                        >
                            Get Started <ArrowRight size={20} />
                        </motion.a>
                        <motion.a
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            href="#demos"
                            className="px-8 py-4 bg-white/50 backdrop-blur-sm text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:bg-white hover:border-slate-300 transition-all"
                        >
                            View Demo
                        </motion.a>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 50, rotateX: 10 }}
                        animate={{ opacity: 1, y: 0, rotateX: 0 }}
                        transition={{ delay: 0.5, duration: 1, type: "spring" }}
                        className="mt-20 relative max-w-5xl mx-auto perspective-1000"
                    >
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50 group transform transition-transform hover:scale-[1.02] duration-500">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent z-10" />
                            <Image
                                src={getImagePath("/hero.png")}
                                alt="Dashboard Preview"
                                width={1200}
                                height={600}
                                className="w-full h-auto object-cover"
                                priority
                            />
                            <div className="absolute bottom-8 left-8 right-8 z-20 text-left">
                                <blockquote className="text-2xl font-medium text-white italic">
                                    "Bridging the gap between care and convenience, because your health can't wait."
                                </blockquote>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-32 bg-white relative z-20">
                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-16"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-6">Why Choose HealWaitless?</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            We provide a comprehensive suite of tools designed to make healthcare accessible, efficient, and secure.
                        </p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {[
                            {
                                icon: Clock,
                                title: "Smart Scheduling",
                                desc: "Book appointments instantly with real-time availability. Reduce wait times and missed visits.",
                                color: "blue"
                            },
                            {
                                icon: Smartphone,
                                title: "Telemedicine",
                                desc: "Connect with top specialists comfortably from your home via high-quality video consultations.",
                                color: "purple"
                            },
                            {
                                icon: Shield,
                                title: "Secure Records",
                                desc: "Your medical history is encrypted and accessible only to you and authorized healthcare providers.",
                                color: "green"
                            }
                        ].map((feature, idx) => (
                            <ThreeDCard key={idx} className="h-full">
                                <div className="p-8 h-full rounded-2xl bg-slate-50 border border-slate-100/50 hover:bg-white transition-colors">
                                    <div className={`w-16 h-16 rounded-2xl bg-${feature.color}-100 text-${feature.color}-600 flex items-center justify-center mb-6 shadow-inner`}>
                                        <feature.icon size={32} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-slate-900 mb-4">{feature.title}</h3>
                                    <p className="text-slate-600 leading-relaxed text-lg">
                                        {feature.desc}
                                    </p>
                                </div>
                            </ThreeDCard>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portals Section */}
            <section id="portals" className="py-32 bg-slate-50 relative z-20 overflow-hidden">
                <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-slate-200 to-transparent" />

                <div className="container mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-center mb-20"
                    >
                        <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-4">Access Your Portal</h2>
                        <p className="text-lg text-slate-600">Select your role to login to your personalized dashboard.</p>
                    </motion.div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        <ThreeDCard>
                            <Link href="/portal/patient/login" className="block group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all border border-slate-200 h-full">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="w-32 h-32 mb-8 relative drop-shadow-xl">
                                        <Image src={getImagePath("/patient.png")} alt="Patient" fill className="object-contain" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-slate-900 mb-3">Patient</h3>
                                    <p className="text-slate-500 mb-8 text-center text-lg">Book appointments & view records</p>
                                    <span className="inline-flex items-center px-6 py-3 rounded-full bg-blue-50 text-blue-600 font-bold group-hover:bg-blue-600 group-hover:text-white transition-all">
                                        Login Now <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </Link>
                        </ThreeDCard>

                        <ThreeDCard>
                            <Link href="/portal/doctor/login" className="block group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all border border-slate-200 h-full">
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="w-32 h-32 mb-8 relative drop-shadow-xl">
                                        <Image src={getImagePath("/doctor.png")} alt="Doctor" fill className="object-contain" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-slate-900 mb-3">Doctor</h3>
                                    <p className="text-slate-500 mb-8 text-center text-lg">Manage patients & consultations</p>
                                    <span className="inline-flex items-center px-6 py-3 rounded-full bg-purple-50 text-purple-600 font-bold group-hover:bg-purple-600 group-hover:text-white transition-all">
                                        Login Now <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </Link>
                        </ThreeDCard>

                        <ThreeDCard>
                            <Link href="/portal/admin/login" className="block group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg hover:shadow-2xl transition-all border border-slate-200 h-full">
                                <div className="absolute inset-0 bg-gradient-to-br from-slate-800/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10 flex flex-col items-center">
                                    <div className="w-32 h-32 mb-8 relative drop-shadow-xl">
                                        <Image src={getImagePath("/admin.png")} alt="Admin" fill className="object-contain" />
                                    </div>
                                    <h3 className="text-3xl font-bold text-slate-900 mb-3">Admin</h3>
                                    <p className="text-slate-500 mb-8 text-center text-lg">System controls & analytics</p>
                                    <span className="inline-flex items-center px-6 py-3 rounded-full bg-slate-100 text-slate-900 font-bold group-hover:bg-slate-900 group-hover:text-white transition-all">
                                        Login Now <ArrowRight size={18} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </Link>
                        </ThreeDCard>
                    </div>
                </div>
            </section>
        </main>
    );
}
