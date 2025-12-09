'use client';
import { Phone, AlertTriangle, X } from 'lucide-react';
import { useState } from 'react';

export function SOSButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 left-6 w-14 h-14 bg-red-600 rounded-full flex items-center justify-center text-white shadow-lg shadow-red-500/50 hover:scale-110 transition-transform z-50 animate-pulse"
                title="Emergency SOS"
            >
                <span className="font-bold text-xs absolute -top-2 bg-white text-red-600 px-2 py-0.5 rounded-full border border-red-200 shadow-sm whitespace-nowrap">SOS</span>
                <Phone size={24} />
            </button>

            {isOpen && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-[60] flex items-center justify-center p-4 animate-in fade-in">
                    <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 max-w-sm w-full shadow-2xl border border-red-100 dark:border-red-900/30 text-center relative">
                        <button
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200"
                        >
                            <X size={20} />
                        </button>

                        <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 text-red-600 rounded-full flex items-center justify-center mx-auto mb-4 animate-bounce">
                            <AlertTriangle size={32} />
                        </div>

                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Emergency Assistance</h2>
                        <p className="text-slate-600 dark:text-slate-400 mb-6">If this is a medical emergency, please call emergency services immediately.</p>

                        <div className="space-y-3">
                            <a href="tel:911" className="block w-full py-3 bg-red-600 text-white rounded-xl font-bold text-lg hover:bg-red-700 transition-colors">
                                Call 911 (US)
                            </a>
                            <a href="tel:112" className="block w-full py-3 bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-400 rounded-xl font-bold hover:bg-red-200 dark:hover:bg-red-900/40 transition-colors">
                                Call 112 (EU)
                            </a>
                            <a href="tel:102" className="block w-full py-3 bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-300 rounded-xl font-bold hover:bg-slate-200 transition-colors">
                                Call Ambulance (102)
                            </a>
                        </div>

                        <p className="mt-4 text-xs text-slate-400">Your location coordinates have been pre-fetched.</p>
                    </div>
                </div>
            )}
        </>
    );
}
