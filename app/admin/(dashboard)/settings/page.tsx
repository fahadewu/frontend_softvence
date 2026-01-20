'use client';

import React, { useState, useEffect } from 'react';
import { Settings, Save, AlertTriangle, ShieldCheck } from 'lucide-react';

export default function SettingsPage() {
    const [maintenanceEnabled, setMaintenanceEnabled] = useState(false);
    const [pageVisibility, setPageVisibility] = useState({
        about: true,
        blog: true,
        work: true,
        services: true,
        contact: true
    });
    const [loading, setLoading] = useState(true);
    const [saving, setSaving] = useState(false);
    const [message, setMessage] = useState('');

    useEffect(() => {
        fetchSettings();
    }, []);

    const fetchSettings = async () => {
        try {
            const res = await fetch('/api/settings');
            const data = await res.json();
            setMaintenanceEnabled(data.maintenance.enabled);
            if (data.pageVisibility) {
                setPageVisibility(data.pageVisibility);
            }
        } catch (error) {
            console.error('Failed to fetch settings');
        } finally {
            setLoading(false);
        }
    };

    const handleSave = async () => {
        setSaving(true);
        setMessage('');
        try {
            const res = await fetch('/api/settings', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    maintenance: { enabled: maintenanceEnabled },
                    pageVisibility
                })
            });

            if (res.ok) {
                setMessage('Settings updated successfully!');
                setTimeout(() => setMessage(''), 3000);
            } else {
                setMessage('Failed to update settings');
            }
        } catch (error) {
            setMessage('An error occurred');
        } finally {
            setSaving(false);
        }
    };

    const handleTogglePageVisibility = (page: string) => {
        setPageVisibility(prev => ({
            ...prev,
            [page]: !(prev as any)[page]
        }));
    };

    if (loading) return (
        <div className="flex items-center justify-center min-h-[400px]">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
    );

    return (
        <div className="max-w-4xl mx-auto py-8 px-4">
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                        <Settings className="text-primary" /> System Settings
                    </h1>
                    <p className="text-gray-500 text-sm mt-1">Manage global website configuration</p>
                </div>
                <button
                    onClick={handleSave}
                    disabled={saving}
                    className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-2.5 rounded-xl font-medium transition-all shadow-lg shadow-primary/20 disabled:opacity-50"
                >
                    <Save size={18} />
                    {saving ? 'Saving...' : 'Save Changes'}
                </button>
            </div>

            {message && (
                <div className={`mb-6 p-4 rounded-xl flex items-center gap-3 ${message.includes('successfully') ? 'bg-green-50 text-green-700 border border-green-100' : 'bg-red-50 text-red-700 border border-red-100'}`}>
                    <ShieldCheck size={20} />
                    {message}
                </div>
            )}

            <div className="grid grid-cols-1 gap-6">
                {/* Maintenance Mode Card */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-gray-50 flex items-center justify-between">
                        <div className="flex items-center gap-4">
                            <div className={`p-3 rounded-xl ${maintenanceEnabled ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
                                <AlertTriangle size={24} />
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900">Maintenance Mode</h3>
                                <p className="text-sm text-gray-500">Take the website offline for system updates</p>
                            </div>
                        </div>
                        <label className="relative inline-flex items-center cursor-pointer">
                            <input
                                type="checkbox"
                                className="sr-only peer"
                                checked={maintenanceEnabled}
                                onChange={(e) => setMaintenanceEnabled(e.target.checked)}
                            />
                            <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none ring-0 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-red-500"></div>
                        </label>
                    </div>
                </div>

                {/* Page Visibility Card */}
                <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
                    <div className="p-6 border-b border-gray-50 bg-gray-50/30">
                        <h3 className="font-bold text-gray-900">Page Visibility Management</h3>
                        <p className="text-sm text-gray-500 italic">Toggle public visibility for specific areas of the website.</p>
                    </div>
                    <div className="p-6 divide-y divide-gray-50">
                        {Object.entries(pageVisibility).map(([key, value]) => (
                            <div key={key} className="py-4 first:pt-0 last:pb-0 flex items-center justify-between">
                                <div className="flex flex-col">
                                    <span className="font-semibold text-gray-800 capitalize">
                                        {key.replace('-', ' ')} Page
                                    </span>
                                    <span className="text-xs text-gray-400 font-mono">
                                        /{key === 'about' ? 'about-us' : key}
                                    </span>
                                </div>
                                <label className="relative inline-flex items-center cursor-pointer">
                                    <input
                                        type="checkbox"
                                        className="sr-only peer"
                                        checked={value}
                                        onChange={() => handleTogglePageVisibility(key)}
                                    />
                                    <div className="w-14 h-7 bg-gray-200 peer-focus:outline-none ring-0 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-primary"></div>
                                </label>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Future settings placeholders */}
                <div className="bg-white p-8 rounded-2xl border border-dashed border-gray-200 text-center opacity-50">
                    <p className="text-gray-400 text-sm italic">Additional system settings will be available here soon.</p>
                </div>
            </div>
        </div>
    );
}
