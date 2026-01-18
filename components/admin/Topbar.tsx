'use client';

import React from 'react';
import { Menu, Search, Bell, User } from 'lucide-react';

interface TopbarProps {
    onMenuClick: () => void;
}

const Topbar = ({ onMenuClick }: TopbarProps) => {
    return (
        <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between bg-white px-6 border-b border-gray-100 shadow-sm">
            <div className="flex items-center gap-4">
                <button
                    onClick={onMenuClick}
                    className="lg:hidden text-gray-500 hover:text-gray-700"
                >
                    <Menu size={24} />
                </button>

                {/* Search Bar (Optional) */}
                <div className="hidden md:flex items-center gap-2 px-3 py-2 bg-gray-50 rounded-full w-64 border border-gray-200 focus-within:ring-2 focus-within:ring-primary/20">
                    <Search size={18} className="text-gray-400" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent border-none outline-none text-sm text-gray-700 w-full placeholder-gray-400"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button className="relative text-gray-500 hover:text-gray-700 transition-colors">
                    <Bell size={20} />
                    <span className="absolute top-0 right-0 h-2 w-2 bg-red-500 rounded-full ring-2 ring-white"></span>
                </button>

                <div className="flex items-center gap-3 pl-4 border-l border-gray-100">
                    <div className="hidden md:block text-right">
                        <p className="text-sm font-semibold text-gray-900">Admin User</p>
                        <p className="text-xs text-gray-500">Super Admin</p>
                    </div>
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary ring-2 ring-white shadow-sm">
                        <User size={20} />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Topbar;
