import { Card, CardContent, CardHeader } from '@/components/ui';
import { Users, DollarSign, Activity, Server } from 'lucide-react';

export default function AdminDashboard() {
    return (
        <div className="space-y-6">
            <h1 className="text-3xl font-bold text-slate-800">Admin Dashboard</h1>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                <Card className="bg-white border-purple-100">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <h3 className="text-sm font-medium text-gray-500">Total Staff</h3>
                        <Users className="h-4 w-4 text-purple-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">145</div>
                        <p className="text-xs text-gray-400 mt-1">24 Doctors, 80 Nurses</p>
                    </CardContent>
                </Card>

                <Card className="bg-white border-purple-100">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <h3 className="text-sm font-medium text-gray-500">Revenue (Monthly)</h3>
                        <DollarSign className="h-4 w-4 text-purple-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">$524k</div>
                        <p className="text-xs text-green-500 mt-1">↑ 8.2% vs last month</p>
                    </CardContent>
                </Card>

                <Card className="bg-white border-purple-100">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <h3 className="text-sm font-medium text-gray-500">System Health</h3>
                        <Server className="h-4 w-4 text-purple-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold text-green-600">99.9%</div>
                        <p className="text-xs text-gray-400 mt-1">All systems operational</p>
                    </CardContent>
                </Card>
                <Card className="bg-white border-purple-100">
                    <CardHeader className="flex flex-row items-center justify-between pb-2">
                        <h3 className="text-sm font-medium text-gray-500">Active Sessions</h3>
                        <Activity className="h-4 w-4 text-purple-600" />
                    </CardHeader>
                    <CardContent>
                        <div className="text-2xl font-bold">842</div>
                        <p className="text-xs text-gray-400 mt-1">Current active users</p>
                    </CardContent>
                </Card>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <Card className="bg-white">
                    <CardHeader>
                        <h3 className="text-lg font-bold">Recent System Activity</h3>
                    </CardHeader>
                    <CardContent>
                        <div className="space-y-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="flex items-center justify-between p-3 border-b last:border-0">
                                    <div className="flex gap-3 items-center">
                                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                                        <div>
                                            <p className="font-medium text-sm">New Staff Account Created</p>
                                            <p className="text-xs text-gray-500">Dr. Sarah Wilson joined Cardiology</p>
                                        </div>
                                    </div>
                                    <div className="text-right">
                                        <p className="text-xs text-gray-400">2 mins ago</p>
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
