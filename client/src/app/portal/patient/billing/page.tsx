'use plain';
import React from 'react';
import { CreditCard, Download, Clock } from 'lucide-react';

export default function BillingPage() {
    return (
        <div className="p-8 space-y-8">
            <div>
                <h1 className="text-3xl font-bold text-slate-900">Billing & Payments</h1>
                <p className="text-slate-500 mt-2">Manage your invoices and payment history.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-red-50 text-red-500 rounded-lg">
                            <CreditCard size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-500">Outstanding Balance</p>
                            <p className="text-2xl font-bold text-slate-900">$150.00</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
                    <div className="flex items-center gap-4">
                        <div className="p-3 bg-green-50 text-green-500 rounded-lg">
                            <CreditCard size={24} />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-slate-500">Last Payment</p>
                            <p className="text-2xl font-bold text-slate-900">$200.00</p>
                            <p className="text-xs text-slate-400">Dec 01, 2024</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden">
                <div className="px-6 py-4 border-b border-slate-100 flex items-center justify-between">
                    <h3 className="font-semibold text-slate-900">Invoice History</h3>
                    <button className="text-sm text-blue-600 hover:text-blue-700 font-medium">Download All</button>
                </div>
                <div className="divide-y divide-slate-100">
                    {[1, 2, 3].map((i) => (
                        <div key={i} className="px-6 py-4 flex items-center justify-between hover:bg-slate-50 transition-colors">
                            <div className="flex items-center gap-4">
                                <div className="p-2 bg-slate-100 text-slate-500 rounded-lg">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <p className="font-medium text-slate-900">Dr. Sarah Wilson - Consultation</p>
                                    <p className="text-sm text-slate-500">INV-2023-00{i} • Dec {10 - i}, 2024</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-6">
                                <span className={`px-3 py-1 rounded-full text-xs font-medium ${i === 1 ? 'bg-yellow-100 text-yellow-700' : 'bg-green-100 text-green-700'}`}>
                                    {i === 1 ? 'Pending' : 'Paid'}
                                </span>
                                <p className="font-medium text-slate-900">$75.00</p>
                                <button className="p-2 text-slate-400 hover:text-slate-600">
                                    <Download size={18} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
