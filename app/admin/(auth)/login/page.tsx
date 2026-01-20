'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export default function LoginPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');

        try {
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                router.push('/admin');
            } else {
                setError(data.message || 'Login failed. Please try again.');
            }
        } catch (err) {
            setError('An error occurred. Please check your connection.');
            console.error('Login error:', err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
            <div className="p-8 pb-6 text-center">
                {/* Logo */}
                <div className="inline-flex items-center justify-center mb-4">
                    <img src="/assets/images/logo.jpg" alt="Softvence Logo" className="h-12 w-auto" />
                </div>
                <h1 className="text-2xl font-bold text-gray-900">Welcome Back</h1>
                <p className="text-gray-500 mt-2">Sign in to access your admin dashboard</p>
            </div>

            <div className="p-8 pt-0">
                {error && (
                    <div className="mb-4 p-3 bg-red-50 border border-red-200 text-red-600 text-sm rounded-xl text-center font-medium">
                        {error}
                    </div>
                )}
                <form onSubmit={handleLogin} className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Email Address</label>
                        <div className="relative">
                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="admin@softvence.com"
                                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-gray-900 placeholder-gray-400"
                                required
                            />
                        </div>
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
                        <div className="relative">
                            <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                className="w-full pl-10 pr-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-gray-900 placeholder-gray-400"
                                required
                            />
                        </div>
                    </div>

                    <div className="flex items-center justify-between text-sm">
                        <label className="flex items-center gap-2 cursor-pointer">
                            <input type="checkbox" className="rounded border-gray-300 text-primary focus:ring-primary" />
                            <span className="text-gray-600">Remember me</span>
                        </label>
                        <Link href="#" className="text-primary font-medium hover:underline">Forgot password?</Link>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-primary hover:bg-primary-dark text-white rounded-xl font-semibold transition-all shadow-lg shadow-primary/30 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                        {loading ? 'Signing in...' : 'Sign In'}
                        {!loading && <ArrowRight size={18} />}
                    </button>
                </form>
            </div>

            <div className="p-4 bg-gray-50 text-center text-sm text-gray-500 border-t border-gray-100">
                &copy; {new Date().getFullYear()} Softvence. All rights reserved.
            </div>
        </div>
    );
}
