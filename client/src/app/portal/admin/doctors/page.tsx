'use client';

import React, { useState } from 'react';
import { Table } from '@/components/ui/Table';
import { Modal } from '@/components/ui/Modal';
import { Plus, Edit2, Trash2, Search, Mail, Phone, BadgeCheck } from 'lucide-react';

interface Doctor {
    id: number;
    name: string;
    specialty: string;
    email: string;
    phone: string;
    status: 'Active' | 'On Leave';
}

const initialDoctors: Doctor[] = [
    { id: 1, name: 'Dr. John Doe', specialty: 'Cardiology', email: 'john.doe@hospital.com', phone: '+1 234 567 8900', status: 'Active' },
    { id: 2, name: 'Dr. Jane Smith', specialty: 'Pediatrics', email: 'jane.smith@hospital.com', phone: '+1 234 567 8901', status: 'Active' },
    { id: 3, name: 'Dr. Robert Wilson', specialty: 'Neurology', email: 'robert.wilson@hospital.com', phone: '+1 234 567 8902', status: 'On Leave' },
    { id: 4, name: 'Dr. Sarah Brown', specialty: 'Orthopedics', email: 'sarah.brown@hospital.com', phone: '+1 234 567 8903', status: 'Active' },
];

export default function DoctorsManagement() {
    const [doctors, setDoctors] = useState<Doctor[]>(initialDoctors);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredDoctors = doctors.filter(doctor =>
        doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialty.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const columns = [
        {
            header: 'Doctor Info',
            accessor: (doctor: Doctor) => (
                <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                        {doctor.name.split(' ').map(n => n[0]).join('').substring(0, 2)}
                    </div>
                    <div>
                        <div className="font-medium text-slate-900 dark:text-white">{doctor.name}</div>
                        <div className="text-xs text-slate-500">{doctor.specialty}</div>
                    </div>
                </div>
            )
        },
        {
            header: 'Contact',
            accessor: (doctor: Doctor) => (
                <div className="text-sm space-y-1">
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                        <Mail size={14} /> {doctor.email}
                    </div>
                    <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400">
                        <Phone size={14} /> {doctor.phone}
                    </div>
                </div>
            )
        },
        {
            header: 'Status',
            accessor: (doctor: Doctor) => (
                <span className={`px-2 py-1 rounded-full text-xs font-semibold ${doctor.status === 'Active'
                        ? 'bg-green-100 text-green-700 dark:bg-green-900/30'
                        : 'bg-amber-100 text-amber-700 dark:bg-amber-900/30'
                    }`}>
                    {doctor.status}
                </span>
            )
        }
    ];

    return (
        <div className="p-8 space-y-8 animate-fade-in-up">
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Doctors Directory</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-2">Manage medical staff and department assignments.</p>
                </div>
                <button
                    onClick={() => setIsModalOpen(true)}
                    className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium shadow-sm hover:shadow-blue-200"
                >
                    <Plus size={20} /> Add New Doctor
                </button>
            </div>

            <div className="flex items-center gap-4 bg-white dark:bg-slate-800 p-4 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                <Search className="text-slate-400" size={20} />
                <input
                    type="text"
                    placeholder="Search by name or specialty..."
                    className="flex-1 bg-transparent border-none focus:outline-none text-slate-900 dark:text-white placeholder-slate-400"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>

            <Table
                data={filteredDoctors}
                columns={columns}
                keyField="id"
                actions={(doctor) => (
                    <div className="flex items-center justify-end gap-2">
                        <button className="p-2 text-slate-500 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors" title="Edit">
                            <Edit2 size={18} />
                        </button>
                        <button className="p-2 text-slate-500 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors" title="Delete">
                            <Trash2 size={18} />
                        </button>
                    </div>
                )}
            />

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                title="Add New Doctor"
            >
                <div className="space-y-4">
                    <p className="text-slate-500 mb-4">Enter the details for the new medical staff member.</p>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">First Name</label>
                            <input type="text" className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="John" />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Last Name</label>
                            <input type="text" className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="Doe" />
                        </div>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Specialty</label>
                        <select className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none">
                            <option>Cardiology</option>
                            <option>Neurology</option>
                            <option>Pediatrics</option>
                            <option>Orthopedics</option>
                            <option>General Medicine</option>
                        </select>
                    </div>
                    <div className="space-y-2">
                        <label className="text-sm font-medium text-slate-700 dark:text-slate-300">Email Address</label>
                        <input type="email" className="w-full p-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 outline-none" placeholder="doctor@hospital.com" />
                    </div>
                    <div className="flex justify-end gap-3 mt-8 pt-4 border-t border-slate-100">
                        <button
                            onClick={() => setIsModalOpen(false)}
                            className="px-4 py-2 text-slate-600 hover:bg-slate-100 rounded-lg font-medium transition-colors"
                        >
                            Cancel
                        </button>
                        <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 font-medium shadow-sm">
                            Save Doctor
                        </button>
                    </div>
                </div>
            </Modal>
        </div>
    );
}
