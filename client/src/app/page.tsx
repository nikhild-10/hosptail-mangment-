import Link from 'next/link';
import Image from 'next/image';
import { getImagePath } from '@/lib/utils';
import { Navbar } from '@/components/Navbar';
import { ArrowRight, Clock, Shield, Smartphone } from 'lucide-react';

export default function Home() {
    return (
        <main className="min-h-screen bg-slate-50">
            <Navbar />

            {/* Hero Section */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-purple-50 -z-10" />
                <div className="container mx-auto px-6 text-center">

                    <div className="animate-fade-in-up opacity-0" style={{ animationDelay: '0.1s' }}>
                        <span className="inline-block py-2 px-6 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-medium text-sm mb-8 hover:shadow-md transition-shadow cursor-default">
                            🏥 Advanced Healthcare Management System
                        </span>
                        <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-8 leading-tight">
                            Healthcare Reimagined for <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                                The Modern World
                            </span>
                        </h1>
                        <p className="text-xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
                            Streamline operations, enhance patient care, and access medical services from anywhere.
                            The all-in-one platform for hospitals, doctors, and patients.
                        </p>
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up opacity-0" style={{ animationDelay: '0.3s' }}>
                        <a href="#portals" className="px-8 py-4 bg-blue-600 text-white rounded-xl font-bold text-lg hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-200 transition-all transform hover:-translate-y-1 flex items-center gap-2">
                            Get Started <ArrowRight size={20} />
                        </a>
                        <a href="#demos" className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-xl font-bold text-lg hover:bg-slate-50 hover:border-slate-300 transition-all">
                            View Demo
                        </a>
                    </div>

                    <div className="mt-20 relative max-w-5xl mx-auto animate-fade-in-up opacity-0" style={{ animationDelay: '0.5s' }}>
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-slate-200/50 group">
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent z-10" />
                            <Image
                                src={getImagePath("/hero.png")}
                                alt="Dashboard Preview"
                                width={1200}
                                height={600}
                                className="w-full h-auto object-cover transform transition-transform duration-700 group-hover:scale-105"
                                priority
                            />
                            <div className="absolute bottom-8 left-8 right-8 z-20 text-left">
                                <blockquote className="text-2xl font-medium text-white italic">
                                    "Bridging the gap between care and convenience, because your health can't wait."
                                </blockquote>
                            </div>
                        </div>
                        {/* Decorative background blobs */}
                        <div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" />
                        <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: '2s' }} />
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section id="features" className="py-24 bg-white">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Why Choose HealWaitless?</h2>
                        <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                            We provide a comprehensive suite of tools designed to make healthcare accessible, efficient, and secure.
                        </p>
                    </div>

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
                            <div key={idx} className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 hover:bg-white transition-all group cursor-default">
                                <div className={`w-14 h-14 rounded-xl bg-${feature.color}-100 text-${feature.color}-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                    <feature.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    {feature.desc}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Portals Section */}
            <section id="portals" className="py-24 bg-slate-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">Access Your Portal</h2>
                        <p className="text-lg text-slate-600">Select your role to login to your personalized dashboard.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                        <Link href="/portal/patient/login" className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm hover:shadow-2xl transition-all border border-slate-200 hover:border-blue-500/50 text-center">
                            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative z-10">
                                <div className="w-24 h-24 mx-auto mb-6 relative">
                                    <Image src={getImagePath("/patient.png")} alt="Patient" fill className="object-contain group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Patient</h3>
                                <p className="text-slate-500 mb-6">Book appointments & view records</p>
                                <span className="inline-flex items-center text-blue-600 font-semibold group-hover:gap-2 transition-all">
                                    Login Now <ArrowRight size={16} className="ml-1" />
                                </span>
                            </div>
                        </Link>

                        <Link href="/portal/doctor/login" className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm hover:shadow-2xl transition-all border border-slate-200 hover:border-purple-500/50 text-center">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative z-10">
                                <div className="w-24 h-24 mx-auto mb-6 relative">
                                    <Image src={getImagePath("/doctor.png")} alt="Doctor" fill className="object-contain group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Doctor</h3>
                                <p className="text-slate-500 mb-6">Manage patients & consultations</p>
                                <span className="inline-flex items-center text-purple-600 font-semibold group-hover:gap-2 transition-all">
                                    Login Now <ArrowRight size={16} className="ml-1" />
                                </span>
                            </div>
                        </Link>

                        <Link href="/portal/admin/login" className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-sm hover:shadow-2xl transition-all border border-slate-200 hover:border-slate-800/50 text-center">
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-800/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative z-10">
                                <div className="w-24 h-24 mx-auto mb-6 relative">
                                    <Image src={getImagePath("/admin.png")} alt="Admin" fill className="object-contain group-hover:scale-110 transition-transform duration-500" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-2">Admin</h3>
                                <p className="text-slate-500 mb-6">System controls & analytics</p>
                                <span className="inline-flex items-center text-slate-700 font-semibold group-hover:gap-2 transition-all">
                                    Login Now <ArrowRight size={16} className="ml-1" />
                                </span>
                            </div>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
