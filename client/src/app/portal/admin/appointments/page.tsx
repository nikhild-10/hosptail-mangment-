'use client';

import React, { useState } from 'react';
import { Table } from '@/components/ui/Table';
import { Calendar, Clock, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

interface Appointment {
    id: number;
    patientName: string;
    doctorName: string;
    date: string;
    time: string;
    type: string;
    status: 'Scheduled' | 'Completed' | 'Cancelled';
}

const initialAppointments: Appointment[] = [
    { id: 1, patientName: 'Alice Johnson', doctorName: 'Dr. John Doe', date: '2024-12-15', time: '10:00 AM', type: 'Checkup', status: 'Scheduled' },
    { id: 2, patientName: 'Bob Williams', doctorName: 'Dr. Jane Smith', date: '2024-12-15', time: '11:00 AM', type: 'Follow-up', status: 'Scheduled' },
    { id: 3, patientName: 'Charlie Davis', doctorName: 'Dr. Sarah Brown', date: '2024-12-14', time: '02:00 PM', type: 'Consultation', status: 'Completed' },
    { id: 4, patientName: 'Diana Evans', doctorName: 'Dr. John Doe', date: '2024-12-16', time: '09:30 AM', type: 'Emergency', status: 'Cancelled' },
];

export default function AppointmentsManagement() {
    const [appointments, setAppointments] = useState<Appointment[]>(initialAppointments);
    const [filterStatus, setFilterStatus] = useState<string>('All');

    const filteredAppointments = filterStatus === 'All'
        ? appointments
        : appointments.filter(apt => apt.status === filterStatus);

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'Scheduled': return 'text-blue-600 bg-blue-50';
            case 'Completed': return 'text-green-600 bg-green-50';
            case 'Cancelled': return 'text-red-600 bg-red-50';
            default: return 'text-slate-600 bg-slate-50';
        }
    };

    const columns = [
        {
            header: 'Patient / Doctor',
            accessor: (apt: Appointment) => (
                <div>
                    <div className="font-bold text-slate-900 dark:text-white">{apt.patientName}</div>
                    <div className="text-xs text-slate-500">with {apt.doctorName}</div>
                </div>
            )
        },
        {
            header: 'Date & Time',
            accessor: (apt: Appointment) => (
                <div className="flex flex-col gap-1 text-sm text-slate-600 dark:text-slate-300">
                    <div className="flex items-center gap-2">
                        <Calendar size={14} /> {apt.date}
                    </div>
                    <div className="flex items-center gap-2">
                        <Clock size={14} /> {apt.time}
                    </div>
                </div>
            )
        },
        {
            header: 'Type',
            accessor: 'type' as keyof Appointment
        },
        {
            header: 'Status',
            accessor: (apt: Appointment) => (
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(apt.status)}`}>
                    {apt.status}
                </span>
            )
        }
    ];

    return (
        <div className="p-8 space-y-8 animate-fade-in-up">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Appointments</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-2">Manage hospital-wide appointment schedules.</p>
                </div>
                <div className="flex gap-2">
                    {['All', 'Scheduled', 'Completed', 'Cancelled'].map(status => (
                        <button
                            key={status}
                            onClick={() => setFilterStatus(status)}
                            className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${filterStatus === status
                                ? 'bg-blue-600 text-white shadow-md'
                                : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
                                }`}
                        >
                            {status}
                        </button>
                    ))}
                </div>
            </div>

            <Table
                data={filteredAppointments}
                columns={columns}
                keyField="id"
                actions={(apt) => (
                    apt.status === 'Scheduled' && (
                        <div className="flex gap-2 justify-end">
                            <button className="text-green-600 hover:bg-green-50 p-2 rounded-lg" title="Mark Complete">
                                <CheckCircle size={18} />
                            </button>
                            <button className="text-red-600 hover:bg-red-50 p-2 rounded-lg" title="Cancel Appointment">
                                <XCircle size={18} />
                            </button>
                        </div>
                    )
                )}
            />
        </div>
    );
}
