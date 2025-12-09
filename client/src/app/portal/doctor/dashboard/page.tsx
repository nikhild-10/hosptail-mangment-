'use client';

import React from 'react';
import { Users, Calendar, Activity, Clock, Video, FileText, Smartphone } from 'lucide-react';

export default function DoctorDashboard() {
    return (
        <div className="p-8 space-y-8 animate-fade-in-up">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Doctor Dashboard</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-2">Welcome back, Dr. Wilson. You have 4 appointments today.</p>
                </div>
                <div className="flex gap-4">
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors">
                        <Video size={18} /> Start Telemedicine
                    </button>
                </div>
            </div>

            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { label: 'Pending Appointments', value: '12', icon: Calendar, color: 'blue' },
                    { label: 'Total Patients', value: '1,234', icon: Users, color: 'purple' },
                    { label: 'Consultations', value: '85', icon: Activity, color: 'green' },
                    { label: 'Online Now', value: '3', icon: Smartphone, color: 'orange' },
                ].map((stat, i) => (
                    <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                        <div className="flex justify-between items-start">
                            <div>
                                <p className="text-sm font-medium text-slate-500 dark:text-slate-400">{stat.label}</p>
                                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mt-2">{stat.value}</h3>
                            </div>
                            <div className={`p-3 bg-${stat.color}-50 dark:bg-${stat.color}-900/20 text-${stat.color}-600 rounded-xl`}>
                                <stat.icon size={24} />
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Patient Queue */}
                <div className="lg:col-span-2 bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-slate-100 dark:border-slate-700 flex justify-between items-center">
                        <h3 className="font-bold text-lg text-slate-900 dark:text-white">Patient Queue</h3>
                        <span className="px-3 py-1 bg-green-100 text-green-700 text-xs font-bold rounded-full">Live</span>
                    </div>
                    <div className="divide-y divide-slate-100 dark:divide-slate-700">
                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className="p-6 flex items-center justify-between hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors group">
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 bg-slate-100 dark:bg-slate-700 rounded-full flex items-center justify-center font-bold text-slate-600 dark:text-slate-300">
                                        {String.fromCharCode(64 + i)}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 dark:text-white group-hover:text-blue-600 transition-colors">Patient Name {i}</h4>
                                        <p className="text-sm text-slate-500 dark:text-slate-400 flex items-center gap-2">
                                            <Clock size={14} /> 10:{i}0 AM • General Checkup
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <button className="px-4 py-2 text-sm font-medium bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100">Review</button>
                                    <button className="px-4 py-2 text-sm font-medium bg-green-600 text-white rounded-lg hover:bg-green-700">Call</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Recent Activity */}
                <div className="bg-white dark:bg-slate-800 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm p-6">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-6">Recent Activity</h3>
                    <div className="space-y-6">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex gap-4">
                                <div className="mt-1">
                                    <div className="w-2 h-2 rounded-full bg-blue-500 ring-4 ring-blue-100 dark:ring-blue-900/30"></div>
                                </div>
                                <div>
                                    <p className="text-sm text-slate-900 dark:text-slate-200 font-medium">New Prescription Created</p>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">For Patient #1023 • Amoxicillin</p>
                                    <p className="text-xs text-slate-400 mt-2">2 hours ago</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
