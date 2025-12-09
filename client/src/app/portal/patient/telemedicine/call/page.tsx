'use client';
import { useState, useEffect } from 'react';
import { Mic, MicOff, Video, VideoOff, PhoneOff, MessageSquare, MoreVertical, LayoutGrid, Users } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function TelemedicineCall() {
    const router = useRouter();
    const [isMuted, setIsMuted] = useState(false);
    const [isVideoOff, setIsVideoOff] = useState(false);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => setDuration(prev => prev + 1), 1000);
        return () => clearInterval(timer);
    }, []);

    const formatTime = (seconds: number) => {
        const mins = Math.floor(seconds / 60);
        const secs = seconds % 60;
        return `${mins}:${secs.toString().padStart(2, '0')}`;
    };

    return (
        <div className="h-screen w-full bg-slate-900 relative overflow-hidden flex flex-col">
            {/* Header overlay */}
            <div className="absolute top-0 left-0 right-0 p-6 z-10 flex justify-between items-start bg-gradient-to-b from-black/50 to-transparent">
                <div>
                    <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
                        <span className="text-white/80 font-mono text-sm">{formatTime(duration)}</span>
                    </div>
                    <h2 className="text-white font-bold text-lg mt-1">Dr. Sarah Wilson</h2>
                    <p className="text-white/60 text-sm">Cardiology Consultation</p>
                </div>
                <div className="flex gap-2">
                    <button className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-colors">
                        <LayoutGrid size={20} />
                    </button>
                    <button className="p-3 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-colors">
                        <Users size={20} />
                    </button>
                </div>
            </div>

            {/* Main Video Area (Doctor) */}
            <div className="flex-1 relative bg-slate-800 flex items-center justify-center">
                <div className="text-center">
                    <div className="w-24 h-24 bg-slate-700 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-500">
                        <Users size={40} />
                    </div>
                    <p className="text-slate-500">Connecting to secure video stream...</p>
                </div>
                {/* Simulated video overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-purple-900/20 pointer-events-none"></div>
            </div>

            {/* Self View (PIP) */}
            <div className="absolute top-24 right-6 w-32 h-48 bg-black rounded-xl border border-white/20 shadow-2xl overflow-hidden z-20">
                <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                    <div className="w-10 h-10 bg-slate-700 rounded-full flex items-center justify-center text-slate-500">
                        <Users size={20} />
                    </div>
                </div>
                {isVideoOff && (
                    <div className="absolute inset-0 bg-slate-900 flex items-center justify-center text-white/50 text-xs">
                        Camera Off
                    </div>
                )}
            </div>

            {/* Controls Bar */}
            <div className="h-24 bg-slate-900 border-t border-slate-800 flex items-center justify-center gap-4 px-6 z-30">
                <button
                    onClick={() => setIsMuted(!isMuted)}
                    className={`p-4 rounded-full transition-all ${isMuted ? 'bg-red-600 text-white' : 'bg-slate-800 text-white hover:bg-slate-700'}`}
                >
                    {isMuted ? <MicOff size={24} /> : <Mic size={24} />}
                </button>

                <button
                    onClick={() => setIsVideoOff(!isVideoOff)}
                    className={`p-4 rounded-full transition-all ${isVideoOff ? 'bg-red-600 text-white' : 'bg-slate-800 text-white hover:bg-slate-700'}`}
                >
                    {isVideoOff ? <VideoOff size={24} /> : <Video size={24} />}
                </button>

                <button
                    onClick={() => router.back()}
                    className="p-4 bg-red-600 hover:bg-red-700 text-white rounded-full px-8 flex items-center gap-2 transition-all mx-4"
                >
                    <PhoneOff size={24} />
                    <span className="font-bold hidden sm:inline">End Call</span>
                </button>

                <button className="p-4 bg-slate-800 text-white hover:bg-slate-700 rounded-full transition-all relative">
                    <MessageSquare size={24} />
                    <span className="absolute top-2 right-2 w-3 h-3 bg-blue-500 rounded-full border-2 border-slate-900"></span>
                </button>

                <button className="p-4 bg-slate-800 text-white hover:bg-slate-700 rounded-full transition-all">
                    <MoreVertical size={24} />
                </button>
            </div>
        </div>
    );
}
