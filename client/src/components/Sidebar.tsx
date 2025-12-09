'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/components/ui';
import { LayoutDashboard, Calendar, FileText, Pill, CreditCard, Video, Settings, LogOut } from 'lucide-react';

const menuItems = [
    { name: 'Dashboard', href: '/portal/patient/dashboard', icon: LayoutDashboard },
    { name: 'Appointments', href: '/portal/patient/appointments', icon: Calendar },
    { name: 'Medical Records', href: '/portal/patient/records', icon: FileText },
    { name: 'Prescriptions', href: '/portal/patient/prescriptions', icon: Pill },
    { name: 'Billing', href: '/portal/patient/billing', icon: CreditCard },
    { name: 'Telemedicine', href: '/portal/patient/telemedicine', icon: Video },
    { name: 'Settings', href: '/portal/patient/settings', icon: Settings },
];

export function Sidebar() {
    const pathname = usePathname();

    return (
        <div className="flex flex-col h-screen w-64 bg-slate-900 text-white fixed left-0 top-0 border-r border-slate-800">
            <div className="p-6">
                <h1 className="text-xl font-bold">HealWaitless</h1>
                <p className="text-xs text-slate-400">Patient Portal</p>
            </div>

            <nav className="flex-1 px-4 space-y-2">
                {menuItems.map((item) => {
                    const Icon = item.icon;
                    const isActive = pathname === item.href;
                    return (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={cn(
                                "flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors",
                                isActive ? "bg-primary text-white" : "text-slate-400 hover:text-white hover:bg-slate-800"
                            )}
                        >
                            <Icon size={18} />
                            {item.name}
                        </Link>
                    );
                })}
            </nav>

            <div className="p-4 border-t border-slate-800">
                <button className="flex items-center gap-3 px-4 py-3 text-sm font-medium text-red-400 hover:bg-slate-800 w-full rounded-lg transition-colors">
                    <LogOut size={18} />
                    Sign Out
                </button>
            </div>
        </div>
    );
}
