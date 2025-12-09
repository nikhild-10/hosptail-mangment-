'use client';
import React from 'react';
import { Pill, AlertCircle, RefreshCw } from 'lucide-react';

export default function PrescriptionsPage() {
    return (
        <div className="p-8 space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-slate-900">Prescriptions</h1>
                <p className="text-slate-500 mt-2">View your current medications and prescription history.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {[1, 2].map((i) => (
                    <div key={i} className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between">
                        <div>
                            <div className="flex items-start justify-between mb-4">
                                <div className="p-3 bg-teal-50 text-teal-600 rounded-lg">
                                    <Pill size={24} />
                                </div>
                                <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-medium">Active</span>
                            </div>
                            <h3 className="text-lg font-bold text-slate-900 mb-1">Amoxicillin</h3>
                            <p className="text-sm text-slate-500 mb-4">500mg • Take 1 tablet every 8 hours</p>

                            <div className="space-y-2 text-sm">
                                <div className="flex justify-between text-slate-600">
                                    <span>Prescribed by:</span>
                                    <span className="font-medium">Dr. Michael Chen</span>
                                </div>
                                <div className="flex justify-between text-slate-600">
                                    <span>Date:</span>
                                    <span className="font-medium">Dec 01, 2024</span>
                                </div>
                                <div className="flex justify-between text-slate-600">
                                    <span>Refills:</span>
                                    <span className="font-medium text-slate-900">2 remaining</span>
                                </div>
                            </div>
                        </div>

                        <button className="w-full mt-6 py-2 flex items-center justify-center gap-2 border border-blue-200 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors font-medium">
                            <RefreshCw size={16} />
                            Request Refill
                        </button>
                    </div>
                ))}

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm flex flex-col items-center justify-center text-center opacity-75">
                    <div className="p-4 bg-slate-100 text-slate-400 rounded-full mb-4">
                        <AlertCircle size={32} />
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900">Expired Prescription</h3>
                    <p className="text-sm text-slate-500 mt-2">Lisinopril 10mg</p>
                    <p className="text-xs text-slate-400 mt-1">Ended: Nov 15, 2024</p>
                </div>
            </div>
        </div>
    );
}
