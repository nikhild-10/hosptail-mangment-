'use client';

import React, { useState } from 'react';
import { Heart, Droplet, AlertTriangle, Search, Activity, Share2, Bell, MapPin } from 'lucide-react';
import { useNotifications } from '@/context/NotificationContext';

export default function DonationHub() {
    const { addNotification } = useNotifications();
    const [requestType, setRequestType] = useState('blood');
    const [urgency, setUrgency] = useState('high');

    const handleBroadcast = () => {
        // Simulated broadcast
        addNotification(
            `URGENT: ${requestType === 'blood' ? 'Blood' : 'Organ'} Needed!`,
            `A patient at St. Mary's Hospital requires ${requestType === 'blood' ? 'O- Negative Blood' : 'Kidney Donor'} immediately. Priority: ${urgency.toUpperCase()}`,
            'critical'
        );
        alert('Emergency Broadcast Sent! All nearby donors have been notified.');
    };

    return (
        <div className="p-8 space-y-8 animate-fade-in-up">
            {/* Hero Section */}
            <div className="relative bg-gradient-to-r from-red-600 to-pink-600 rounded-3xl p-10 text-white overflow-hidden shadow-2xl">
                <div className="relative z-10 max-w-2xl">
                    <span className="inline-block px-4 py-1 bg-white/20 backdrop-blur-md rounded-full text-sm font-bold mb-4 border border-white/30">
                        ❤️ LifeSaver Network
                    </span>
                    <h1 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
                        Give the Gift of Life. <br /> Be a Hero Today.
                    </h1>
                    <p className="text-lg opacity-90 mb-8">
                        Connect directly with patients in urgent need of blood or organ donations. Your single act of kindness can save a life.
                    </p>
                    <div className="flex gap-4">
                        <button className="px-6 py-3 bg-white text-red-600 font-bold rounded-xl hover:bg-red-50 transition-colors shadow-lg">
                            Register as Donor
                        </button>
                        <button className="px-6 py-3 bg-red-800/50 text-white font-bold rounded-xl hover:bg-red-800/70 backdrop-blur-md border border-red-400/30 transition-colors">
                            Find Blood Bank
                        </button>
                    </div>
                </div>

                {/* Decorative Background Elements */}
                <div className="absolute right-0 top-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -mr-20 -mt-20"></div>
                <div className="absolute right-20 bottom-0 w-64 h-64 bg-pink-500/30 rounded-full blur-3xl"></div>
                <Heart className="absolute right-10 bottom-10 text-white/20 animate-pulse" size={200} />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                {/* Live Requests Feed */}
                <div className="lg:col-span-2 space-y-6">
                    <div className="flex items-center justify-between">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                            <Activity className="text-red-500" /> Live Requests
                        </h2>
                        <div className="flex gap-2">
                            <button className="px-3 py-1 bg-red-100 text-red-600 rounded-lg text-sm font-medium hover:bg-red-200 dark:bg-red-900/30 dark:text-red-400">Critical</button>
                            <button className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-sm font-medium hover:bg-slate-200 dark:bg-slate-800 dark:text-slate-400">Nearby</button>
                        </div>
                    </div>

                    {[1, 2, 3].map((i) => (
                        <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow relative overflow-hidden group">
                            <div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
                            <div className="flex flex-col md:flex-row gap-6">
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 bg-red-100 dark:bg-red-900/20 text-red-600 rounded-2xl flex items-center justify-center font-bold text-xl">
                                        {i === 1 ? 'O-' : i === 2 ? 'AB+' : 'KID'}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                                                {i === 3 ? 'Urgent Kidney Transplant' : 'Emergency Blood Requirement'}
                                            </h3>
                                            <p className="text-slate-500 dark:text-slate-400 flex items-center gap-1 mt-1">
                                                <MapPin size={16} /> City General Hospital • 2.5km away
                                            </p>
                                        </div>
                                        <span className="px-3 py-1 bg-red-100 text-red-700 dark:bg-red-900/40 dark:text-red-400 text-xs font-bold rounded-full animate-pulse">
                                            URGENT
                                        </span>
                                    </div>

                                    <div className="mt-4 flex flex-wrap gap-4 text-sm text-slate-600 dark:text-slate-300">
                                        <span className="bg-slate-50 dark:bg-slate-700 px-3 py-1 rounded-lg border border-slate-100 dark:border-slate-600">Patient Age: {20 + i * 5}</span>
                                        <span className="bg-slate-50 dark:bg-slate-700 px-3 py-1 rounded-lg border border-slate-100 dark:border-slate-600">Required by: 2 Hrs</span>
                                    </div>

                                    <div className="mt-6 flex gap-3">
                                        <button className="flex-1 py-2 bg-red-600 text-white rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg shadow-red-200 dark:shadow-none">
                                            Donate Now
                                        </button>
                                        <button className="p-2 border border-slate-200 dark:border-slate-700 rounded-xl text-slate-400 hover:text-blue-600 hover:bg-blue-50 dark:hover:bg-slate-700 transition-colors">
                                            <Share2 size={20} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Request Form */}
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm h-fit">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-6 flex items-center gap-2">
                        <AlertTriangle className="text-orange-500" /> Request Emergency Help
                    </h3>

                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Requirement Type</label>
                            <div className="grid grid-cols-2 gap-2">
                                <button
                                    onClick={() => setRequestType('blood')}
                                    className={`py-2 rounded-lg border font-medium transition-all ${requestType === 'blood' ? 'bg-red-50 border-red-500 text-red-600 dark:bg-red-900/20' : 'border-slate-200 dark:border-slate-700 text-slate-500'}`}
                                >
                                    Blood
                                </button>
                                <button
                                    onClick={() => setRequestType('organ')}
                                    className={`py-2 rounded-lg border font-medium transition-all ${requestType === 'organ' ? 'bg-red-50 border-red-500 text-red-600 dark:bg-red-900/20' : 'border-slate-200 dark:border-slate-700 text-slate-500'}`}
                                >
                                    Organ
                                </button>
                            </div>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Urgency Level</label>
                            <select
                                className="w-full px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-xl bg-transparent focus:ring-2 focus:ring-red-500 outline-none"
                                onChange={(e) => setUrgency(e.target.value)}
                            >
                                <option value="high">High Priority</option>
                                <option value="critical">Critical (Immediate Life Threat)</option>
                            </select>
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Hospital/Location</label>
                            <div className="relative">
                                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
                                <input type="text" placeholder="Enter location..." className="w-full pl-10 pr-4 py-2 border border-slate-200 dark:border-slate-700 rounded-xl bg-transparent outline-none focus:ring-2 focus:ring-red-500" />
                            </div>
                        </div>

                        <div className="pt-4">
                            <button
                                onClick={handleBroadcast}
                                className="w-full py-3 bg-gradient-to-r from-red-600 to-orange-600 text-white rounded-xl font-bold hover:shadow-lg hover:scale-[1.02] transition-all flex items-center justify-center gap-2"
                            >
                                <Bell size={20} /> Broadcast Request
                            </button>
                            <p className="text-xs text-center text-slate-400 mt-3">
                                This will alert all registered donors in a 50km radius.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
