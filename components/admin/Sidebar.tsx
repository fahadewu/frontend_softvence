'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, FileText, Briefcase, Settings, X, LogOut, MessageSquare } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

interface SidebarProps {
    isOpen: boolean;
    onClose: () => void;
}

const Sidebar = ({ isOpen, onClose }: SidebarProps) => {
    const pathname = usePathname();
    const router = useRouter();

    const handleLogout = async () => {
        try {
            const response = await fetch('/api/auth/logout', {
                method: 'POST',
            });
            if (response.ok) {
                router.push('/admin/login');
            }
        } catch (error) {
            console.error('Logout error:', error);
        }
    };

    const links = [
        { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
        { name: 'Services', href: '/admin/services', icon: Settings },
        { name: 'Case Studies', href: '/admin/case-studies', icon: FileText },
        { name: 'Testimonials', href: '/admin/testimonials', icon: MessageSquare },
        { name: 'Blog Posts', href: '/admin/posts', icon: FileText },
        { name: 'Settings', href: '/admin/settings', icon: Settings },
    ];

    return (
        <>
            {/* Mobile Overlay */}
            <div
                className={`fixed inset-0 z-40 bg-black/50 transition-opacity lg:hidden ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
                    }`}
                onClick={onClose}
            />

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 z-50 h-screen w-64 bg-white border-r border-gray-200 transition-transform duration-300 ease-in-out lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'
                    }`}
            >
                <div className="flex h-16 items-center justify-between px-6 border-b border-gray-100">
                    {/* Logo */}
                    <Link href="/admin">
                        <img src="/assets/images/logo.jpg" alt="Softvence Logo" className="h-8 w-auto" />
                    </Link>
                    <button onClick={onClose} className="lg:hidden text-gray-500 hover:text-gray-700">
                        <X size={24} />
                    </button>
                </div>

                <nav className="p-4 space-y-1 overflow-y-auto" style={{ height: 'calc(100vh - 4rem)' }}>
                    {links.map((link) => {
                        const Icon = link.icon;
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`flex items-center gap-3 px-4 py-3 text-sm font-medium rounded-lg transition-colors ${isActive
                                    ? 'bg-green-50 text-green-700'
                                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                                    }`}
                            >
                                <Icon size={20} />
                                {link.name}
                            </Link>
                        );
                    })}

                    <div className="mt-8 pt-4 border-t border-gray-100">
                        <button
                            onClick={handleLogout}
                            className="flex w-full items-center gap-3 px-4 py-3 text-sm font-medium text-red-600 rounded-lg hover:bg-red-50 transition-colors"
                        >
                            <LogOut size={20} />
                            Logout
                        </button>
                    </div>
                </nav>
            </aside>
        </>
    );
};

export default Sidebar;
