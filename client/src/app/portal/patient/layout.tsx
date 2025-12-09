import { Sidebar } from '@/components/Sidebar';

export default function PatientLayout({ children }: { children: React.ReactNode }) {
    return (
        <div className="flex min-h-screen bg-slate-50">
            <Sidebar />
            <div className="flex-1 ml-64">
                <header className="h-16 bg-white border-b border-gray-200 flex items-center px-8 justify-between sticky top-0 z-10">
                    <h2 className="text-lg font-semibold">Welcome back, John Doe</h2>
                    <div className="h-8 w-8 bg-primary rounded-full flex items-center justify-center text-white font-bold">
                        JD
                    </div>
                </header>
                <main className="p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
