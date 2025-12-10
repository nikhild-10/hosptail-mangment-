'use client';

import React, { useState } from 'react';
import { Table } from '@/components/ui/Table';
import { Modal } from '@/components/ui/Modal';
import { Plus, Search, FileText, Download } from 'lucide-react';

interface Prescription {
    id: number;
    patientName: string;
    date: string;
    summary: string;
    medications: number;
}

const initialPrescriptions: Prescription[] = [
    { id: 1001, patientName: 'Alice Johnson', date: '2024-12-10', summary: 'Amoxicillin 500mg, twice daily', medications: 1 },
    { id: 1002, patientName: 'Bob Williams', date: '2024-12-09', summary: 'Lisinopril 10mg, once daily', medications: 1 },
];

export default function Prescriptions() {
    const [prescriptions] = useState<Prescription[]>(initialPrescriptions);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const columns = [
        {
            header: 'Date',
            accessor: 'date' as keyof Prescription,
            className: 'text-slate-500'
        },
        {
            header: 'Patient',
            accessor: (p: Prescription) => <span className="font-bold text-slate-900 dark:text-white">{p.patientName}</span>
        },
        {
            header: 'Summary',
            accessor: 'summary' as keyof Prescription
        },
        {
            header: 'Items',
            accessor: (p: Prescription) => <span className="text-xs font-bold bg-slate-100 px-2 py-1 rounded-full">{p.medications} meds</span>
        }
    ];

    return (
        <div className="p-8 space-y-8 animate-fade-in-up">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Prescriptions</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-2">Manage and issue electronic prescriptions.</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium shadow-sm"
                >
                    <Plus size={20} /> New Prescription
                </button>
            </div>

            <Table
                data={prescriptions}
                columns={columns}
                keyField="id"
                actions={() => (
                    <button className="flex items-center gap-2 text-sm text-blue-600 font-medium hover:underline">
                        <Download size={16} /> PDF
                    </button>
                )}
            />

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Issue New Prescription"
            >
                <div className="space-y-4">
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Patient Name</label>
                        <input type="text" className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Search patient..." />
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Medication</label>
                        <input type="text" className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="e.g. Amoxicillin" />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Dosage</label>
                            <input type="text" className="w-full p-2 border border-slate-300 rounded-lg" placeholder="500mg" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Frequency</label>
                            <input type="text" className="w-full p-2 border border-slate-300 rounded-lg" placeholder="Twice daily" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Notes / Instructions</label>
                        <textarea className="w-full p-2 border border-slate-300 rounded-lg h-24 resize-none" placeholder="Take after meals..."></textarea>
                    </div>

                    <div className="flex justify-end gap-3 mt-8 pt-4 border-t border-slate-100">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg font-medium transition-colors"
                        >
                            Cancel
                        </button>
                        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium shadow-sm">
                            Issue Prescription
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
