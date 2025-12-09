'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button, Input, Card, CardHeader, CardContent } from '@/components/ui';

import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';

export default function PatientLogin() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        try {
            await signInWithEmailAndPassword(auth, email, password);
            console.log('Firebase Login Success');
            router.push('/portal/patient/dashboard');
        } catch (err: any) {
            console.error('Login failed', err);
            setError(err.message);
        }
    };

    return (
        <div className="flex h-screen w-full items-center justify-center bg-slate-50">
            <Card className="w-[350px] bg-white">
                <CardHeader>
                    <h2 className="text-2xl font-bold text-center">Patient Login</h2>
                    <p className="text-center text-sm text-gray-500">Enter your credentials to access your portal</p>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Email</label>
                            <Input
                                type="email"
                                placeholder="m@example.com"
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
                        <Button type="submit" className="w-full">Sign In</Button>
                    </form>
                    <div className="mt-4 text-center text-sm">
                        Don't have an account? <Link href="/portal/patient/register" className="text-primary hover:underline">Sign up</Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
