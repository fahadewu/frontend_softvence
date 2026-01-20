'use client';

import React, { useState, useEffect } from 'react';
import { ScrollText, Search, Clock, Shield, User, Info, AlertTriangle, AlertCircle } from 'lucide-react';

interface Log {
    id: string;
    action: string;
    description: string;
    user: string;
    timestamp: string;
    type: 'info' | 'warning' | 'error' | 'success';
}

export default function LogsPage() {
    const [logs, setLogs] = useState<Log[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        fetchLogs();
    }, []);

    const fetchLogs = async () => {
        try {
            const res = await fetch('/api/logs');
            const data = await res.json();
            setLogs(data);
        } catch (error) {
            console.error('Failed to fetch logs');
        } finally {
            setLoading(false);
        }
    };

    const getIcon = (type: string) => {
        switch (type) {
            case 'warning': return <AlertTriangle size={16} className="text-amber-500" />;
            case 'error': return <AlertCircle size={16} className="text-red-500" />;
            case 'success': return <Shield size={16} className="text-green-500" />;
            default: return <Info size={16} className="text-blue-500" />;
        }
    };

    const getBgColor = (type: string) => {
        switch (type) {
            case 'warning': return 'bg-amber-50 border-amber-100';
            case 'error': return 'bg-red-50 border-red-100';
            case 'success': return 'bg-green-50 border-green-100';
            default: return 'bg-blue-50 border-blue-100';
        }
    };

    const filteredLogs = logs.filter(log =>
        log.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.user.toLowerCase().includes(searchTerm.toLowerCase()) ||
        log.action.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (loading) return <div className="p-8 text-center">Loading activity logs...</div>;

    return (
        <div className="max-w-5xl mx-auto py-8 px-4">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                        <ScrollText className="text-gray-500" /> Activity Logs
                    </h1>
                    <p className="text-gray-500 text-sm mt-1">System events and audit trail</p>
                </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm overflow-hidden">
                <div className="p-4 border-b border-gray-100 flex items-center gap-4 bg-gray-50/50">
                    <Search className="text-gray-400" size={20} />
                    <input
                        type="text"
                        placeholder="Search logs..."
                        className="bg-transparent border-none focus:ring-0 w-full text-sm text-gray-700 placeholder-gray-400"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>

                <div className="divide-y divide-gray-100">
                    {filteredLogs.length === 0 ? (
                        <div className="p-12 text-center text-gray-500">No logs found</div>
                    ) : (
                        filteredLogs.map(log => (
                            <div key={log.id} className="p-4 hover:bg-gray-50 transition-colors flex gap-4 items-start">
                                <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center border ${getBgColor(log.type)}`}>
                                    {getIcon(log.type)}
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="flex justify-between items-start mb-1">
                                        <p className="text-sm font-semibold text-gray-900">{log.action}</p>
                                        <span className="text-xs text-gray-400 flex items-center gap-1">
                                            <Clock size={12} />
                                            {new Date(log.timestamp).toLocaleString()}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-2">{log.description}</p>
                                    <div className="flex items-center gap-2 text-xs text-gray-500">
                                        <User size={12} />
                                        <span className="font-medium bg-gray-100 px-2 py-0.5 rounded text-gray-700">{log.user}</span>
                                    </div>
                                </div>
                            </div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
