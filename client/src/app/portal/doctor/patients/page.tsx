'use client';

import React, { useState } from 'react';
import { Table } from '@/components/ui/Table';
import { Modal } from '@/components/ui/Modal';
import { Search, Activity, FileText } from 'lucide-react';

interface Patient {
    id: number;
    name: string;
    lastSeen: string;
    diagnosis: string;
    status: 'Stable' | 'Critical' | 'Recovering';
    // Mock details for "Full Information"
    age?: number;
    gender?: string;
    email?: string;
    phone?: string;
}

const myPatients: Patient[] = [
    { id: 201, name: 'Michael Scott', lastSeen: '2 days ago', diagnosis: 'Hypertension', status: 'Stable', age: 45, gender: 'Male', email: 'mscott@dundermifflin.com', phone: '555-0199' },
    { id: 202, name: 'Dwight Schrute', lastSeen: '1 week ago', diagnosis: 'Concussion', status: 'Recovering', age: 40, gender: 'Male', email: 'dschrute@farms.com', phone: '555-0123' },
    { id: 203, name: 'Jim Halpert', lastSeen: '3 weeks ago', diagnosis: 'Common Cold', status: 'Stable', age: 36, gender: 'Male', email: 'jhalpert@athleap.com', phone: '555-0144' },
    { id: 204, name: 'Pam Beesly', lastSeen: 'Yesterday', diagnosis: 'Migraine', status: 'Stable', age: 35, gender: 'Female', email: 'pbeesly@art.com', phone: '555-0155' },
];

export default function MyPatients() {
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

    const filteredPatients = myPatients.filter(p =>
        p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.diagnosis.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.id.toString().includes(searchTerm)
    );

    const columns = [
        {
            header: 'Patient Info',
            accessor: (p: Patient) => (
                <div>
                    <div className="font-bold text-slate-900 dark:text-white">{p.name}</div>
                    <div className="text-xs text-slate-500">ID: #{p.id}</div>
                </div>
            )
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
                    placeholder="Search by name, ID, or diagnosis..."
                    className="flex-1 bg-transparent border-none focus:outline-none text-slate-900 dark:text-white placeholder-slate-400"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <Table
                data={filteredPatients}
                columns={columns}
                keyField="id"
                actions={(patient) => (
                    <div className="flex gap-2 justify-end">
                        <button
                            onClick={() => setSelectedPatient(patient)}
                            className="p-2 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                            title="View Records"
                        >
                            <FileText size={18} />
                        </button>
                        <button className="p-2 text-purple-600 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors" title="Vitals">
                            <Activity size={18} />
                        </button>
                    </div>
                )}
            />

            <Modal
                isOpen={!!selectedPatient}
                onClose={() => setSelectedPatient(null)}
                title="Patient Details"
            >
                {selectedPatient && (
                    <div className="space-y-6">
                        <div className="flex items-center gap-4 pb-6 border-b border-slate-100">
                            <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 text-2xl font-bold">
                                {selectedPatient.name[0]}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{selectedPatient.name}</h3>
                                <p className="text-slate-500">ID: #{selectedPatient.id}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Status</label>
                                <span className={`inline-block px-2 py-1 rounded-md text-xs font-bold ${selectedPatient.status === 'Critical' ? 'bg-red-100 text-red-700' :
                                    selectedPatient.status === 'Recovering' ? 'bg-green-100 text-green-700' :
                                        'bg-blue-100 text-blue-700'
                                    }`}>
                                    {selectedPatient.status}
                                </span>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Diagnosis</label>
                                <p className="font-medium text-slate-900 dark:text-white">{selectedPatient.diagnosis}</p>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Age/Gender</label>
                                <p className="font-medium text-slate-900 dark:text-white">{selectedPatient.age || 'N/A'} / {selectedPatient.gender || 'N/A'}</p>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Contact</label>
                                <p className="font-medium text-slate-900 dark:text-white">{selectedPatient.phone || 'N/A'}</p>
                            </div>
                        </div>

                        <div className="flex justify-end pt-4 border-t border-slate-100">
                            <button
                                onClick={() => setSelectedPatient(null)}
                                className="px-6 py-2 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 font-medium transition-colors"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
}
