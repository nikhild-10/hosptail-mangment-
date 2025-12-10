'use client';

import React, { useState } from 'react';
import { Table } from '@/components/ui/Table';
import { Modal } from '@/components/ui/Modal';
import { Calendar, Clock, Video, MapPin, User, FileText } from 'lucide-react';

interface Appointment {
    id: number;
    patientName: string;
    age: number;
    gender: 'Male' | 'Female';
    time: string;
    type: 'In-Person' | 'Telemedicine';
    reason: string;
    status: 'Upcoming' | 'Completed';
}

const initialAppointments: Appointment[] = [
    { id: 1, patientName: 'Alice Johnson', age: 34, gender: 'Female', time: '09:00 AM', type: 'In-Person', reason: 'Annual Checkup', status: 'Upcoming' },
    { id: 2, patientName: 'Charlie Davis', age: 28, gender: 'Male', time: '10:30 AM', type: 'Telemedicine', reason: 'Follow-up (Headache)', status: 'Upcoming' },
    { id: 3, patientName: 'Diana Evans', age: 52, gender: 'Female', time: '11:15 AM', type: 'In-Person', reason: 'Back Pain', status: 'Upcoming' },
    { id: 4, patientName: 'Bob Williams', age: 45, gender: 'Male', time: '02:00 PM', type: 'Telemedicine', reason: 'Prescription Renewal', status: 'Upcoming' },
];

export default function DoctorSchedule() {
    const [appointments] = useState<Appointment[]>(initialAppointments);
    const [selectedAppointment, setSelectedAppointment] = useState<Appointment | null>(null);

    const columns = [
        {
            header: 'Time',
            accessor: (apt: Appointment) => (
                <div className="flex items-center gap-2 font-medium text-slate-900 dark:text-white">
                    <Clock size={16} className="text-blue-500" /> {apt.time}
                </div>
            )
        },
        {
            header: 'Patient Details',
            accessor: (apt: Appointment) => (
                <div>
                    <div className="font-bold text-slate-900 dark:text-white">{apt.patientName}</div>
                    <div className="text-xs text-slate-500">{apt.age}y • {apt.gender}</div>
                </div>
            )
        },
        {
            header: 'Type',
            accessor: (apt: Appointment) => (
                <span className={`flex items-center gap-1.5 text-xs font-bold px-2 py-1 rounded-md ${apt.type === 'Telemedicine'
                    ? 'bg-purple-100 text-purple-700 dark:bg-purple-900/30'
                    : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30'
                    }`}>
                    {apt.type === 'Telemedicine' ? <Video size={12} /> : <MapPin size={12} />}
                    {apt.type}
                </span>
            )
        },
        {
            header: 'Reason',
            accessor: 'reason' as keyof Appointment,
            className: 'text-slate-600 dark:text-slate-300'
        }
    ];

    return (
        <div className="p-8 space-y-8 animate-fade-in-up">
            <div className="flex justify-between items-center">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">My Schedule</h1>
                    <p className="text-slate-500 dark:text-slate-400 mt-2">Appointments for {new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}.</p>
                </div>
                <div className="flex gap-3">
                    <button className="px-4 py-2 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors text-slate-600 dark:text-slate-300">
                        Previous Day
                    </button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded-xl hover:bg-blue-700 transition-colors font-medium">
                        Next Day
                    </button>
                </div>
            </div>

            <Table
                data={appointments}
                columns={columns}
                keyField="id"
                onRowClick={(apt) => setSelectedAppointment(apt)}
                actions={() => (
                    <button className="text-blue-600 hover:text-blue-800 font-medium text-sm bg-blue-50 px-3 py-1.5 rounded-lg hover:bg-blue-100 transition-colors">
                        View
                    </button>
                )}
            />

            <Modal
                isOpen={!!selectedAppointment}
                onClose={() => setSelectedAppointment(null)}
                title="Appointment Details"
            >
                {selectedAppointment && (
                    <div className="space-y-6">
                        <div className="flex gap-4 items-start">
                            <div className="w-16 h-16 rounded-full bg-slate-100 flex items-center justify-center text-slate-500">
                                <User size={32} />
                            </div>
                            <div>
                                <h3 className="text-xl font-bold text-slate-900 dark:text-white">{selectedAppointment.patientName}</h3>
                                <p className="text-slate-500">{selectedAppointment.age} Years • {selectedAppointment.gender}</p>
                                <div className="flex items-center gap-2 mt-2 text-sm font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded w-fit">
                                    <Clock size={14} /> Today, {selectedAppointment.time}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Medical Reason</label>
                            <div className="p-3 bg-slate-50 dark:bg-slate-700/30 rounded-lg text-slate-700 dark:text-slate-300 text-sm">
                                {selectedAppointment.reason}
                            </div>
                        </div>

                        <div className="flex gap-3 pt-4">
                            <button className="flex-1 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-bold transition-colors">
                                Start Consultation
                            </button>
                            <button className="flex-1 py-3 bg-white border border-slate-200 text-slate-700 rounded-xl hover:bg-slate-50 font-bold transition-colors">
                                Reschedule
                            </button>
                        </div>
                    </div>
                )}
            </Modal>
        </div>
    );
}
