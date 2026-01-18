import React from 'react';
import { Users, FileText, Eye, TrendingUp } from 'lucide-react';

export default function AdminDashboard() {
    const stats = [
        { title: 'Total Views', value: '12,345', change: '+12%', icon: Eye, color: 'text-blue-600', bg: 'bg-blue-100' },
        { title: 'Blog Posts', value: '24', change: '+2', icon: FileText, color: 'text-purple-600', bg: 'bg-purple-100' },
        { title: 'Case Studies', value: '18', change: '+4', icon: Users, color: 'text-primary', bg: 'bg-green-100' }, // using primary which is green
        { title: 'Engagement', value: '89%', change: '+5%', icon: TrendingUp, color: 'text-orange-600', bg: 'bg-orange-100' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                <span className="text-sm text-gray-500">Welcome back, Admin</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 transition-transform hover:-translate-y-1">
                            <div className={`p-3 rounded-lg ${stat.bg} ${stat.color}`}>
                                <Icon size={24} />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                                <div className="flex items-center gap-2">
                                    <h3 className="text-xl font-bold text-gray-900">{stat.value}</h3>
                                    <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full">{stat.change}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
                {/* Recent Activity Mockup */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h2 className="text-lg font-bold text-gray-800 mb-4">Recent Activity</h2>
                    <div className="space-y-4">
                        {[1, 2, 3].map((i) => (
                            <div key={i} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer">
                                <div className="h-2 w-2 rounded-full bg-primary flex-shrink-0"></div>
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-gray-900">New blog post "Design Trends 2026" published</p>
                                    <p className="text-xs text-gray-500">2 hours ago</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h2 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <button className="p-4 border border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-primary hover:text-primary transition-all flex flex-col items-center justify-center gap-2">
                            <FileText size={20} />
                            <span className="text-sm font-medium">Add Post</span>
                        </button>
                        <button className="p-4 border border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-primary hover:text-primary transition-all flex flex-col items-center justify-center gap-2">
                            <Users size={20} />
                            <span className="text-sm font-medium">Add User</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
