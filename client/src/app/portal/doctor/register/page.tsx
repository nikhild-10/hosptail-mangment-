'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button, Input, Card, CardHeader, CardContent } from '@/components/ui';

export default function DoctorRegister() {
    const router = useRouter();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [specialty, setSpecialty] = useState('');
    const [license, setLicense] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleRegister = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // Mock Registration
        setTimeout(() => {
            console.log('Registered Doctor:', { name, email, specialty, license });
            // Simulate success
            router.push('/portal/doctor/login?registered=true');
        }, 1500);
    };

    return (
        <div className="flex min-h-screen w-full items-center justify-center bg-slate-50 py-10">
            <Card className="w-[400px] bg-white animate-fade-in-up">
                <CardHeader>
                    <h2 className="text-2xl font-bold text-center text-blue-700">Doctor Registration</h2>
                    <p className="text-center text-sm text-gray-500">Join our medical team</p>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleRegister} className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Full Name</label>
                            <Input
                                type="text"
                                placeholder="Dr. John Doe"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Specialty</label>
                            <Input
                                type="text"
                                placeholder="Cardiology"
                                value={specialty}
                                onChange={(e) => setSpecialty(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Medical License ID</label>
                            <Input
                                type="text"
                                placeholder="MED-123456"
                                value={license}
                                onChange={(e) => setLicense(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Email</label>
                            <Input
                                type="email"
                                placeholder="doctor@hospital.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Password</label>
                            <Input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <Button type="submit" className="w-full bg-blue-600 hover:bg-blue-700" disabled={isLoading}>
                            {isLoading ? 'Creating Account...' : 'Register'}
                        </Button>
                    </form>
                    <div className="mt-4 text-center text-sm">
                        <span className="text-gray-500">Already have an account? </span>
                        <Link href="/portal/doctor/login" className="text-blue-600 hover:underline">Sign In</Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
