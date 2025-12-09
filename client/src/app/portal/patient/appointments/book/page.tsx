'use client';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, User, CheckCircle, ChevronRight, ChevronLeft, Stethoscope, Clock, CreditCard } from 'lucide-react';

const specialties = [
    { id: 'cardio', name: 'Cardiology', icon: Stethoscope },
    { id: 'derma', name: 'Dermatology', icon: User },
    { id: 'peds', name: 'Pediatrics', icon: User },
    { id: 'ortho', name: 'Orthopedics', icon: User },
    { id: 'gen', name: 'General Medicine', icon: Stethoscope },
];

const doctors = {
    cardio: [{ id: 1, name: 'Dr. Sarah Wilson' }, { id: 2, name: 'Dr. James Chen' }],
    derma: [{ id: 3, name: 'Dr. Emily Brown' }],
    peds: [{ id: 4, name: 'Dr. Michael Ross' }],
    ortho: [{ id: 5, name: 'Dr. David Kim' }],
    gen: [{ id: 6, name: 'Dr. Lisa Wang' }],
};

const slots = ['09:00 AM', '10:00 AM', '11:00 AM', '02:00 PM', '03:00 PM'];

export default function AppointmentWizard() {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
        specialty: '',
        doctor: '',
        date: '',
        time: '',
    });

    const nextStep = () => setStep(step + 1);
    const prevStep = () => setStep(step - 1);

    const updateForm = (key: string, value: any) => {
        setFormData({ ...formData, [key]: value });
    };

    return (
        <div className="min-h-screen bg-slate-50 dark:bg-slate-900 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white">Book Appointment</h1>
                    <p className="mt-2 text-slate-600 dark:text-slate-400">Follow the steps to schedule your visit.</p>

                    {/* Progress Bar */}
                    <div className="mt-8 flex justify-between items-center relative">
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-full h-1 bg-slate-200 dark:bg-slate-800 -z-10 rounded-full"></div>
                        <div
                            className="absolute left-0 top-1/2 -translate-y-1/2 h-1 bg-blue-600 transition-all duration-500 rounded-full"
                            style={{ width: `${((step - 1) / 3) * 100}%` }}
                        ></div>

                        {[1, 2, 3, 4].map((i) => (
                            <div key={i} className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm transition-all ${step >= i ? 'bg-blue-600 text-white scale-110' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'}`}>
                                {i}
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-2 text-xs font-medium text-slate-500">
                        <span>Specialty</span>
                        <span>Doctor</span>
                        <span>Time</span>
                        <span>Confirm</span>
                    </div>
                </div>

                <div className="bg-white dark:bg-slate-800 rounded-2xl shadow-xl overflow-hidden min-h-[400px] relative">
                    <AnimatePresence mode="wait">
                        {step === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="p-8"
                            >
                                <h2 className="text-xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-2"><Stethoscope size={24} className="text-blue-500" /> Select Specialty</h2>
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                                    {specialties.map((spec) => (
                                        <button
                                            key={spec.id}
                                            onClick={() => { updateForm('specialty', spec.id); nextStep(); }}
                                            className={`p-6 rounded-xl border-2 text-center transition-all flex flex-col items-center gap-3 ${formData.specialty === spec.id ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20' : 'border-slate-100 dark:border-slate-700 hover:border-blue-300'}`}
                                        >
                                            <div className={`p-3 rounded-full ${formData.specialty === spec.id ? 'bg-blue-100 text-blue-600' : 'bg-slate-100 dark:bg-slate-700 text-slate-500'}`}>
                                                <spec.icon size={24} />
                                            </div>
                                            <span className="font-medium text-slate-900 dark:text-white">{spec.name}</span>
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="p-8"
                            >
                                <h2 className="text-xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-2"><User size={24} className="text-blue-500" /> Select Doctor</h2>
                                <div className="space-y-4">
                                    {doctors[formData.specialty as keyof typeof doctors]?.map((doc) => (
                                        <button
                                            key={doc.id}
                                            onClick={() => { updateForm('doctor', doc.name); nextStep(); }}
                                            className={`w-full p-4 rounded-xl border-2 flex items-center gap-4 transition-all ${formData.doctor === doc.name ? 'border-blue-600 bg-blue-50 dark:bg-blue-900/20' : 'border-slate-100 dark:border-slate-700 hover:border-blue-300'}`}
                                        >
                                            <div className="w-12 h-12 bg-slate-200 dark:bg-slate-700 rounded-full flex items-center justify-center font-bold text-slate-500">
                                                DR
                                            </div>
                                            <div className="text-left">
                                                <h3 className="font-bold text-slate-900 dark:text-white">{doc.name}</h3>
                                                <p className="text-sm text-slate-500">Available Today</p>
                                            </div>
                                            <ChevronRight className="ml-auto text-slate-400" />
                                        </button>
                                    ))}
                                </div>
                            </motion.div>
                        )}

                        {step === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="p-8"
                            >
                                <h2 className="text-xl font-bold mb-6 text-slate-900 dark:text-white flex items-center gap-2"><Calendar size={24} className="text-blue-500" /> Select Date & Time</h2>
                                <div className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Date</label>
                                        <input
                                            type="date"
                                            className="w-full px-4 py-3 border border-slate-200 dark:border-slate-700 rounded-xl bg-transparent dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                                            onChange={(e) => updateForm('date', e.target.value)}
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-2">Available Slots</label>
                                        <div className="grid grid-cols-3 gap-3">
                                            {slots.map((s) => (
                                                <button
                                                    key={s}
                                                    onClick={() => updateForm('time', s)}
                                                    className={`py-2 px-4 rounded-lg text-sm font-medium border transition-all ${formData.time === s ? 'bg-blue-600 text-white border-blue-600' : 'border-slate-200 dark:border-slate-700 text-slate-600 dark:text-slate-300 hover:border-blue-400'}`}
                                                >
                                                    {s}
                                                </button>
                                            ))}
                                        </div>
                                    </div>

                                    <button
                                        onClick={nextStep}
                                        disabled={!formData.date || !formData.time}
                                        className="w-full py-4 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                                    >
                                        Continue
                                    </button>
                                </div>
                            </motion.div>
                        )}

                        {step === 4 && (
                            <motion.div
                                key="step4"
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="p-8 text-center"
                            >
                                <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce">
                                    <CheckCircle size={40} />
                                </div>
                                <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">All Set!</h2>
                                <p className="text-slate-600 dark:text-slate-400 mb-8">Please review your appointment details.</p>

                                <div className="bg-slate-50 dark:bg-slate-900 rounded-xl p-6 mb-8 text-left space-y-4 border border-slate-100 dark:border-slate-700">
                                    <div className="flex justify-between items-center pb-4 border-b border-slate-200 dark:border-slate-700">
                                        <span className="text-slate-500">Doctor</span>
                                        <span className="font-bold text-slate-900 dark:text-white">{formData.doctor}</span>
                                    </div>
                                    <div className="flex justify-between items-center pb-4 border-b border-slate-200 dark:border-slate-700">
                                        <span className="text-slate-500">Date & Time</span>
                                        <span className="font-bold text-slate-900 dark:text-white">{formData.date} at {formData.time}</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span className="text-slate-500">Consultation Fee</span>
                                        <span className="font-bold text-green-600">$50.00</span>
                                    </div>
                                </div>

                                <button className="w-full py-4 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 shadow-lg shadow-green-200 dark:shadow-none transition-all hover:scale-[1.02]">
                                    Confirm & Pay
                                </button>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {step > 1 && step < 4 && (
                        <button
                            onClick={prevStep}
                            className="absolute bottom-8 left-8 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 flex items-center gap-1 font-medium transition-colors"
                        >
                            <ChevronLeft size={18} /> Back
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
}
