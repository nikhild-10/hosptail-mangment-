import { Card, CardContent, CardHeader } from '@/components/ui';
import { Calendar, Activity, AlertCircle } from 'lucide-react';

export default function PatientDashboard() {
    return (
        <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <Card className="bg-white">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <h3 className="text-sm font-medium text-gray-500">Upcoming Appointments</h3>
                        <Calendar className="h-4 w-4 text-primary" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">2</div>
                        <p className="text-xs text-gray-400 mt-1">Next: Tomorrow with Dr. Smith</p>
                    </CardContent>
                </Card>

                <Card className="bg-white">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <h3 className="text-sm font-medium text-gray-500">Pending Bills</h3>
                        <AlertCircle className="h-4 w-4 text-red-500" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$150.00</div>
                        <p className="text-xs text-gray-400 mt-1">Due by Dec 25, 2024</p>
                    </CardContent>
                </Card>

                <Card className="bg-white">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <h3 className="text-sm font-medium text-gray-500">Recent Lab Results</h3>
                        <Activity className="h-4 w-4 text-accent" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1 New</div>
                        <p className="text-xs text-gray-400 mt-1">Blood Test - Normal</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-white">
                    <CardHeader>
                        <h3 className="text-lg font-bold">Quick Actions</h3>
                    </CardHeader>
                    <CardContent className="grid gap-4">
                        <button className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors flex items-center justify-between">
                            <span className="font-medium">Book New Appointment</span>
                            <span>→</span>
                        </button>
                        <button className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors flex items-center justify-between">
                            <span className="font-medium">Request Prescription Refill</span>
                            <span>→</span>
                        </button>
                        <button className="w-full text-left p-3 rounded-lg border hover:bg-gray-50 transition-colors flex items-center justify-between">
                            <span className="font-medium">Talk to AI Health Assistant</span>
                            <span>→</span>
                        </button>
                    </CardContent>
                </Card>

                <Card className="bg-white">
                    <CardHeader>
                        <h3 className="text-lg font-bold">Health Timeline</h3>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            <div className="flex gap-4">
                                <div className="bg-primary/10 p-2 rounded-full h-fit">
                                    <Activity className="w-4 h-4 text-primary" />
                                </div>
                                <div>
                                    <p className="text-sm font-medium">Routine Checkup Completed</p>
                                    <p className="text-xs text-gray-500">Yesterday, 10:00 AM</p>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
