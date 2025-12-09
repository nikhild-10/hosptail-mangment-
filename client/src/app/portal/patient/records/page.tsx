'use client';
import React from 'react';
import { FileText, Download, Share2, Search, Filter } from 'lucide-react';

export default function MedicalRecordsPage() {
    return (
        <div className="p-8 space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Medical Records</h1>
                    <p className="text-slate-500 mt-2">Access and manage your health history and reports.</p>
                </div>
                <div className="flex gap-3">
                    <button className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-lg hover:bg-slate-50 text-slate-700 font-medium">
                        <Filter size={18} /> Filter
                    </button>
                    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium">
                        <Download size={18} /> Export All
                    </button>
                </div>
            </div>

            <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={20} />
                <input
                    type="text"
                    placeholder="Search records by doctor, diagnosis, or date..."
                    className="w-full pl-10 pr-4 py-3 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                    <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-all group">
                        <div className="flex items-start justify-between">
                            <div className="flex gap-4">
                                <div className="p-3 bg-blue-50 text-blue-600 rounded-lg h-fit">
                                    <FileText size={24} />
                                </div>
                                <div>
                                    <h3 className="text-lg font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">
                                        {i === 1 ? 'Annual Physical Examination' : i === 2 ? 'Blood Test Results' : 'X-Ray Report'}
                                    </h3>
                                    <p className="text-slate-500 text-sm mt-1">Dr. Sarah Wilson • Cardiology</p>
                                    <div className="flex gap-3 mt-3">
                                        <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium">PDF</span>
                                        <span className="px-2 py-1 bg-slate-100 text-slate-600 rounded text-xs font-medium">2.4 MB</span>
                                        <span className="text-sm text-slate-400 flex items-center">Dec {12 - i}, 2024</span>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg" title="Share">
                                    <Share2 size={18} />
                                </button>
                                <button className="p-2 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg" title="Download">
                                    <Download size={18} />
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
