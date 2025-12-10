'use client';

import React, { useState } from 'react';
import { Table } from '@/components/ui/Table';
import { Modal } from '@/components/ui/Modal';
import { Search, Mail, Phone, Calendar, FileText, User } from 'lucide-react';

interface Patient {
    id: number;
    name: string;
    age: number;
    gender: string;
    lastVisit: string;
    condition: string;
    email: string;
    phone: string;
}

const initialPatients: Patient[] = [
    { id: 101, name: 'Alice Johnson', age: 34, gender: 'Female', lastVisit: '2024-12-01', condition: 'Flu', email: 'alice@example.com', phone: '+1 555 0101' },
    { id: 102, name: 'Bob Williams', age: 45, gender: 'Male', lastVisit: '2024-11-28', condition: 'Hypertension', email: 'bob@example.com', phone: '+1 555 0102' },
    { id: 103, name: 'Charlie Davis', age: 28, gender: 'Male', lastVisit: '2024-12-05', condition: 'Routine Checkup', email: 'charlie@example.com', phone: '+1 555 0103' },
    { id: 104, name: 'Diana Evans', age: 52, gender: 'Female', lastVisit: '2024-12-08', condition: 'Diabetes', email: 'diana@example.com', phone: '+1 555 0104' },
];

export default function PatientsManagement() {
    const [patients] = useState<Patient[]>(initialPatients);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedPatient, setSelectedPatient] = useState<Patient | null>(null);

    const filteredPatients = patients.filter(patient =>
        patient.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.condition.toLowerCase().includes(searchTerm.toLowerCase()) ||
        patient.id.toString().includes(searchTerm)
    );

    const columns = [
        {
            header: 'Patient Name',
            accessor: (patient: Patient) => (
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">
                        <User size={20} />
                    </div>
                    <div>
                        <div className="font-medium text-slate-900 dark:text-white">{patient.name} <span className="text-xs text-slate-400 font-normal">#{patient.id}</span></div>
                        <div className="text-xs text-slate-500">{patient.age} yrs • {patient.gender}</div>
                    </div>
                </div>
            )
        },
        {
            header: 'Contact',
            accessor: (patient: Patient) => (
                <div className="text-sm space-y-1">
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                        <Mail size={14} /> {patient.email}
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                        <Phone size={14} /> {patient.phone}
                    </div>
                </div>
            )
        },
        {
            header: 'Medical Info',
            accessor: (patient: Patient) => (
                <div>
                    <span className="block font-medium text-slate-900 dark:text-white">{patient.condition}</span>
                    <span className="text-xs text-slate-500">Last Visit: {patient.lastVisit}</span>
                </div>
            )
        }
    ];

    return (
        <div className="p-8 space-y-8 animate-fade-in-up">
            <div>
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Patient Records</h1>
                <p className="text-slate-500 dark:text-slate-400 mt-2">View and manage registered patients.</p>
            </div>

            <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <Search className="text-slate-400" size={20} />
                <input
                    type="text"
                    placeholder="Search patients by name, ID, or condition..."
                    className="flex-1 bg-transparent border-none focus:outline-none text-slate-900 dark:text-white placeholder-slate-400"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <Table
                data={filteredPatients}
                columns={columns}
                keyField="id"
                onRowClick={(patient) => setSelectedPatient(patient)}
                actions={() => (
                    <button className="text-blue-600 hover:text-blue-800 hover:underline font-medium text-sm">
                        View Details
                    </button>
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
                            <div className="w-16 h-16 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 text-2xl font-bold">
                                {selectedPatient.name[0]}
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{selectedPatient.name}</h3>
                                <p className="text-slate-500">ID: #{selectedPatient.id}</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Demographics</label>
                                <p className="font-medium text-slate-900 dark:text-white">{selectedPatient.age} Years, {selectedPatient.gender}</p>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Primary Condition</label>
                                <p className="font-medium text-slate-900 dark:text-white">{selectedPatient.condition}</p>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Email</label>
                                <p className="font-medium text-slate-900 dark:text-white">{selectedPatient.email}</p>
                            </div>
                            <div className="space-y-1">
                                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Phone</label>
                                <p className="font-medium text-slate-900 dark:text-white">{selectedPatient.phone}</p>
                            </div>
                        </div>

                        <div className="pt-6 border-t border-slate-100">
                            <h4 className="font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                <FileText size={18} /> Medical History
                            </h4>
                            <div className="bg-slate-50 dark:bg-slate-700/30 p-4 rounded-lg text-sm text-slate-600 dark:text-slate-300">
                                <p>No detailed history available in preview mode.</p>
                            </div>
                        </div>

                        <div className="flex justify-end pt-4">
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
