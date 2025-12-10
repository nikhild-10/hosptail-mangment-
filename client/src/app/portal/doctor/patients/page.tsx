'use client';

import React, { useState } from 'react';
import { Table } from '@/components/ui/Table';
import { Search, Activity, FileText } from 'lucide-react';

interface Patient {
    id: number;
    name: string;
    lastSeen: string;
    diagnosis: string;
    status: 'Stable' | 'Critical' | 'Recovering';
}

const myPatients: Patient[] = [
    { id: 201, name: 'Michael Scott', lastSeen: '2 days ago', diagnosis: 'Hypertension', status: 'Stable' },
    { id: 202, name: 'Dwight Schrute', lastSeen: '1 week ago', diagnosis: 'Concussion', status: 'Recovering' },
    { id: 203, name: 'Jim Halpert', lastSeen: '3 weeks ago', diagnosis: 'Common Cold', status: 'Stable' },
    { id: 204, name: 'Pam Beesly', lastSeen: 'Yesterday', diagnosis: 'Migraine', status: 'Stable' },
];

export default function MyPatients() {
    const [searchTerm, setSearchTerm] = useState('');

    const filteredPatients = myPatients.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.diagnosis.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const columns = [
        {
            header: 'Patient Name',
            accessor: (p: Patient) => <span className="font-bold text-slate-900 dark:text-white">{p.name}</span>
        },
        {
            header: 'Diagnosis',
            accessor: 'diagnosis' as keyof Patient
        },
        {
            header: 'Last Seen',
            accessor: 'lastSeen' as keyof Patient,
            className: 'text-slate-500'
        },
        {
            header: 'Status',
            accessor: (p: Patient) => (
                <span className={`px-2 py-1 rounded-md text-xs font-bold ${p.status === 'Critical' ? 'bg-red-100 text-red-700' :
                    p.status === 'Recovering' ? 'bg-green-100 text-green-700' :
                        'bg-blue-100 text-blue-700'
                    }`}>
                    {p.status}
                </span>
            )
        }
    ];

    return (
        <div className="p-8 space-y-8 animate-fade-in-up">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">My Patients</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-2">Access records and history of patients under your care.</p>
                </div>
            </div>

            <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <Search className="text-slate-400" size={20} />
                <input
                    type="text"
                    placeholder="Search by name or diagnosis..."
                    className="flex-1 bg-transparent border-none focus:outline-none text-slate-900 dark:text-white placeholder-slate-400"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <Table
                data={filteredPatients}
                columns={columns}
                keyField="id"
                actions={() => (
                    <div className="flex gap-2 justify-end">
                        <button className="p-2 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors" title="View Records">
                            <FileText size={18} />
                        </button>
                        <button className="p-2 text-purple-600 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors" title="Vitals">
                            <Activity size={18} />
                        </button>
                    </div>
                )}
            />
        </div>
    );
}
