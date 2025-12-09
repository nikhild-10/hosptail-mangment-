import { Card, CardContent, CardHeader } from '@/components/ui';
import { Calendar, Users, Clock, Activity } from 'lucide-react';

export default function DoctorDashboard() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-slate-800">Doctor Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="bg-white">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <h3 className="text-sm font-medium text-gray-500">Total Patients</h3>
                        <Users className="h-4 w-4 text-blue-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">1,234</div>
                        <p className="text-xs text-gray-400 mt-1">+12% from last month</p>
                    </CardContent>
                </Card>

                <Card className="bg-white">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <h3 className="text-sm font-medium text-gray-500">Appointments Today</h3>
                        <Calendar className="h-4 w-4 text-blue-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">8</div>
                        <p className="text-xs text-gray-400 mt-1">3 Telemedicine, 5 In-person</p>
                    </CardContent>
                </Card>

                <Card className="bg-white">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <h3 className="text-sm font-medium text-gray-500">Pending Reports</h3>
                        <Activity className="h-4 w-4 text-blue-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12</div>
                        <p className="text-xs text-gray-400 mt-1">Requires review</p>
                    </CardContent>
                </Card>
                <Card className="bg-white">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <h3 className="text-sm font-medium text-gray-500">Avg. Wait Time</h3>
                        <Clock className="h-4 w-4 text-blue-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">12m</div>
                        <p className="text-xs text-gray-400 mt-1">-2m improvement</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-white">
                    <CardHeader>
                        <h3 className="text-lg font-bold">Today's Schedule</h3>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center justify-between p-3 border rounded-lg">
                                    <div className="flex gap-3 items-center">
                                        <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold">
                                            JS
                                        </div>
                                        <div>
                                            <p className="font-medium">John Smith</p>
                                            <p className="text-xs text-gray-500">General Checkup</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="font-bold text-sm">09:30 AM</p>
                                        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Confirmed</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
}
