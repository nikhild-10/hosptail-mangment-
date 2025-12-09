'use client';

import React from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
    LineChart, Line, PieChart, Pie, Cell
} from 'recharts';
import { TrendingUp, Users, DollarSign, Activity } from 'lucide-react';

const visitData = [
    { name: 'Mon', visits: 45 },
    { name: 'Tue', visits: 52 },
    { name: 'Wed', visits: 38 },
    { name: 'Thu', visits: 65 },
    { name: 'Fri', visits: 48 },
    { name: 'Sat', visits: 25 },
    { name: 'Sun', visits: 10 },
];

const revenueData = [
    { name: 'Jan', revenue: 4000 },
    { name: 'Feb', revenue: 3000 },
    { name: 'Mar', revenue: 5000 },
    { name: 'Apr', revenue: 4500 },
    { name: 'May', revenue: 6000 },
    { name: 'Jun', revenue: 5500 },
];

const pieData = [
    { name: 'Cardiology', value: 400, color: '#0ea5e9' },
    { name: 'Pediatrics', value: 300, color: '#6366f1' },
    { name: 'Neurology', value: 300, color: '#10b981' },
    { name: 'Orthopedics', value: 200, color: '#f59e0b' },
];

export default function AdminDashboard() {
    return (
        <div className="p-8 space-y-8 animate-fade-in-up">
            <div>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Hospital Analytics</h1>
                <p className="text-slate-500 dark:text-slate-400 mt-2">Real-time system overview and performance metrics.</p>
            </div>

            {/* KPI Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {[
                    { label: 'Total Revenue', value: '$124,500', icon: DollarSign, color: 'green', change: '+12.5%' },
                    { label: 'Active Patients', value: '3,240', icon: Users, color: 'blue', change: '+5.2%' },
                    { label: 'Avg Wait Time', value: '14m', icon: Activity, color: 'orange', change: '-2.4%' },
                    { label: 'Growth Rate', value: '8.4%', icon: TrendingUp, color: 'purple', change: '+1.1%' },
                ].map((stat, i) => (
                    <div key={i} className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow">
                        <div className="flex justify-between items-start mb-4">
                            <div className={`p-3 bg-${stat.color}-50 dark:bg-${stat.color}-900/20 text-${stat.color}-600 rounded-xl`}>
                                <stat.icon size={24} />
                            </div>
                            <span className={`text-xs font-bold px-2 py-1 rounded-full ${stat.change.startsWith('+') ? 'bg-green-100 text-green-700 dark:bg-green-900/30' : 'bg-red-100 text-red-700 dark:bg-red-900/30'}`}>
                                {stat.change}
                            </span>
                        </div>
                        <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{stat.value}</h3>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">{stat.label}</p>
                    </div>
                ))}
            </div>

            {/* Charts Row 1 */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-6">Patient Visits (Weekly)</h3>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={visitData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                    cursor={{ fill: '#f1f5f9' }}
                                />
                                <Bar dataKey="visits" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-6">Revenue Trends</h3>
                    <div className="h-[300px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={revenueData}>
                                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                                <YAxis axisLine={false} tickLine={false} tick={{ fill: '#64748b' }} />
                                <Tooltip
                                    contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                                />
                                <Line type="monotone" dataKey="revenue" stroke="#10b981" strokeWidth={3} dot={{ r: 4 }} activeDot={{ r: 6 }} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>

            {/* Charts Row 2 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm">
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white mb-6">Department Dist.</h3>
                    <div className="h-[250px] w-full">
                        <ResponsiveContainer width="100%" height="100%">
                            <PieChart>
                                <Pie
                                    data={pieData}
                                    cx="50%"
                                    cy="50%"
                                    innerRadius={60}
                                    outerRadius={80}
                                    paddingAngle={5}
                                    dataKey="value"
                                >
                                    {pieData.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={entry.color} />
                                    ))}
                                </Pie>
                                <Tooltip />
                            </PieChart>
                        </ResponsiveContainer>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4 mt-4">
                        {pieData.map((entry, i) => (
                            <div key={i} className="flex items-center gap-2 text-xs">
                                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: entry.color }}></div>
                                <span>{entry.name}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="md:col-span-2 bg-gradient-to-br from-blue-600 to-purple-700 rounded-2xl p-8 text-white flex flex-col justify-center relative overflow-hidden">
                    <div className="relative z-10">
                        <h2 className="text-3xl font-bold mb-4">System Status: Healthy</h2>
                        <p className="opacity-90 max-w-lg mb-8">All servers are running optimally. Database latency is low (12ms). Next backup scheduled for 02:00 AM.</p>
                        <button className="px-6 py-3 bg-white text-blue-900 font-bold rounded-xl hover:bg-blue-50 transition-colors inline-flex items-center gap-2 w-fit">
                            <Activity size={20} /> View System Logs
                        </button>
                    </div>
                    <div className="absolute right-0 bottom-0 opacity-10">
                        <Activity size={300} />
                    </div>
                </div>
            </div>
        </div>
    );
}
