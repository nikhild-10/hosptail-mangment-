'use client';

import { useState } from 'react';
import { Card, CardContent, CardHeader, Button } from '@/components/ui';
import { Video, Mic, MicOff, VideoOff, PhoneOff } from 'lucide-react';

export default function TelemedicinePage() {
    const [inCall, setInCall] = useState(false);

    // Placeholder for Video Call UI
    return (
        <div className="space-y-6">
            <h2 className="text-2xl font-bold">Telemedicine Consultation</h2>

            {!inCall ? (
                <Card className="bg-white">
                    <CardHeader>
                        <h3 className="text-lg font-semibold">Upcoming Video Consultations</h3>
                    </CardHeader>
                    <CardContent>
                        <div className="p-4 border rounded-lg flex items-center justify-between bg-gray-50">
                            <div>
                                <h4 className="font-medium">Dr. Emily Stone (Cardiologist)</h4>
                                <p className="text-sm text-gray-500">Today, 4:30 PM - 5:00 PM</p>
                            </div>
                            <Button onClick={() => setInCall(true)}>
                                <Video className="w-4 h-4 mr-2" />
                                Join Call
                            </Button>
                        </div>
                    </CardContent>
                </Card>
            ) : (
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 h-[600px]">
                    <div className="lg:col-span-2 bg-black rounded-xl overflow-hidden relative">
                        {/* Remote Video Placeholder */}
                        <div className="absolute inset-0 flex items-center justify-center text-white/50">
                            <p>Doctor's Video Stream</p>
                        </div>

                        {/* Local Video Picture-in-Picture */}
                        <div className="absolute bottom-4 right-4 w-48 h-36 bg-gray-800 rounded-lg border-2 border-gray-700 overflow-hidden">
                            <div className="w-full h-full flex items-center justify-center text-white/30 text-xs">
                                You
                            </div>
                        </div>

                        {/* Controls */}
                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-4">
                            <button className="p-3 rounded-full bg-gray-700 text-white hover:bg-gray-600">
                                <Mic className="w-5 h-5" />
                            </button>
                            <button className="p-3 rounded-full bg-gray-700 text-white hover:bg-gray-600">
                                <Video className="w-5 h-5" />
                            </button>
                            <button
                                className="p-3 rounded-full bg-red-600 text-white hover:bg-red-700"
                                onClick={() => setInCall(false)}
                            >
                                <PhoneOff className="w-5 h-5" />
                            </button>
                        </div>
                    </div>

                    <div className="bg-white rounded-xl border flex flex-col h-full">
                        <div className="p-4 border-b">
                            <h3 className="font-semibold">Consultation Notes</h3>
                        </div>
                        <div className="flex-1 p-4 overflow-y-auto">
                            <p className="text-sm text-gray-500 italic">Chat or AI transcriptions will appear here...</p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
