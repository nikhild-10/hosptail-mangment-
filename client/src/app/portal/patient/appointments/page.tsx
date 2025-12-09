'use client';
import React from 'react';
import { Calendar, Clock, MapPin, Video, MoreHorizontal } from 'lucide-react';

export default function AppointmentsPage() {
    return (
        <div className="p-8 space-y-8">
            <div className="flex items-center justify-between">
                <div>
                    <h1 className="text-3xl font-bold text-slate-900">Appointments</h1>
                    <p className="text-slate-500 mt-2">View and manage your scheduled visits.</p>
                </div>
                <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium">
                    New Appointment
                </button>
            </div>

            <div className="space-y-6">
                <h3 className="font-semibold text-slate-900">Upcoming Appointments</h3>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="flex items-start gap-4">
                            <div className="p-4 bg-blue-50 text-blue-600 rounded-xl">
                                <Calendar size={24} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg text-slate-900">General Checkup</h4>
                                <p className="text-slate-500">Dr. Michael Chen</p>
                                <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                                    <div className="flex items-center gap-1">
                                        <Clock size={16} />
                                        <span>Dec 15, 2024 • 10:00 AM</span>
                                    </div>
                                    <div className="flex items-center gap-1">
                                        <MapPin size={16} />
                                        <span>Room 304</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="px-4 py-2 text-blue-600 bg-blue-50 hover:bg-blue-100 rounded-lg font-medium transition-colors">
                                Reschedule
                            </button>
                            <button className="px-4 py-2 text-red-600 bg-red-50 hover:bg-red-100 rounded-lg font-medium transition-colors">
                                Cancel
                            </button>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                        <div className="flex items-start gap-4">
                            <div className="p-4 bg-purple-50 text-purple-600 rounded-xl">
                                <Video size={24} />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg text-slate-900">Follow-up Consultation</h4>
                                <p className="text-slate-500">Dr. Sarah Wilson</p>
                                <div className="flex items-center gap-4 mt-2 text-sm text-slate-500">
                                    <div className="flex items-center gap-1">
                                        <Clock size={16} />
                                        <span>Dec 20, 2024 • 2:30 PM</span>
                                    </div>
                                    <span className="px-2 py-0.5 bg-purple-100 text-purple-700 rounded text-xs font-medium">Telemedicine</span>
                                </div>
                            </div>
                        </div>
                        <div className="flex items-center gap-3">
                            <button className="px-4 py-2 text-slate-600 bg-slate-50 hover:bg-slate-100 rounded-lg font-medium transition-colors">
                                Details
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
