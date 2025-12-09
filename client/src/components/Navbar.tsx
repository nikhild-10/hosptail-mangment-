'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { Menu, X, Activity, Mic } from 'lucide-react';
import { ThemeToggle } from './ThemeToggle';
import { useVoiceNavigation } from '@/hooks/useVoiceNavigation';
import { NotificationBell } from './NotificationBell';

export function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const { isListening, startListening } = useVoiceNavigation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-2 font-bold text-2xl text-slate-800">
                    <div className="p-2 bg-blue-600 rounded-lg text-white">
                        <Activity size={24} />
                    </div>
                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
                        HealWaitless
                    </span>
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center gap-8">
                    <a href="#" className="font-medium text-slate-600 hover:text-blue-600 transition-colors">Home</a>
                    <a href="#features" className="font-medium text-slate-600 hover:text-blue-600 transition-colors">Features</a>
                    <a href="#about" className="font-medium text-slate-600 hover:text-blue-600 transition-colors">About</a>
                    <div className="flex items-center gap-4">
                        <Link href="/portal/patient/login" className="font-medium text-slate-600 hover:text-blue-600 transition-colors">
                            Patient Login
                        </Link>
                        <Link href="/portal/doctor/login" className="px-5 py-2.5 bg-blue-600 text-white rounded-full font-medium hover:bg-blue-700 hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                            Doctor Access
                        </Link>
                        <NotificationBell />
                        <ThemeToggle />
                        <button
                            onClick={startListening}
                            className={`p-2 rounded-lg transition-colors ${isListening ? 'bg-red-100 text-red-600 animate-pulse' : 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 hover:bg-slate-200'}`}
                            title="Voice Navigation (Try 'Dark Mode', 'Go Home')"
                        >
                            <Mic size={20} />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden p-2 text-slate-600"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    {isMobileMenuOpen ? <X /> : <Menu />}
                </button>

                {/* Mobile Menu Overlay */}
                {isMobileMenuOpen && (
                    <div className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col gap-4 shadow-xl md:hidden animate-in slide-in-from-top-5">
                        <a href="#" className="text-lg font-medium text-slate-600" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
                        <a href="#features" className="text-lg font-medium text-slate-600" onClick={() => setIsMobileMenuOpen(false)}>Features</a>
                        <Link href="/portal/patient/login" className="text-lg font-medium text-slate-600" onClick={() => setIsMobileMenuOpen(false)}>Patient Login</Link>
                        <Link href="/portal/doctor/login" className="text-lg font-medium text-blue-600" onClick={() => setIsMobileMenuOpen(false)}>Doctor Access</Link>
                    </div>
                )}
            </div>
        </nav>
    );
}
