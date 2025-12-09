'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button, Input, Card, CardHeader, CardContent } from '@/components/ui';

export default function AdminLogin() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Logging in admin with', email);
        // In real app: call API, store token
        router.push('/portal/admin/dashboard');
    };

    return (
        <div className="flex h-screen w-full items-center justify-center bg-slate-50">
            <Card className="w-[350px] bg-white border-purple-200">
                <CardHeader>
                    <h2 className="text-2xl font-bold text-center text-purple-700">Admin Login</h2>
                    <p className="text-center text-sm text-gray-500">System management access</p>
                </CardHeader>
                <CardContent>
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div className="space-y-2">
                            <label className="text-sm font-medium">Email</label>
                            <Input
                                type="email"
                                placeholder="admin@hospital.com"
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
                        <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700">Sign In</Button>
                    </form>
                    <div className="mt-4 text-center text-sm">
                        <Link href="/" className="text-gray-500 hover:underline">Back to Home</Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
