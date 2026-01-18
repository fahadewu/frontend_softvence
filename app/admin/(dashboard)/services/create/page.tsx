'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Save, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { AdminPageHeader, AdminInput, AdminTextArea, AdminImageUpload } from '@/components/admin/ui';

export default function CreateServicePage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            router.push('/admin/services');
        }, 1000);
    };

    return (
        <div className="max-w-4xl mx-auto">
            <Link href="/admin/services" className="inline-flex items-center text-sm text-gray-500 hover:text-primary mb-4 transition-colors">
                <ArrowLeft size={16} className="mr-1" />
                Back to Services
            </Link>

            <AdminPageHeader
                title="Add New Service"
                breadcrumbs={[{ label: 'Dashboard', href: '/admin' }, { label: 'Services', href: '/admin/services' }, { label: 'Create' }]}
            />

            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AdminInput label="Service Title" placeholder="e.g. Web Development" required />
                    <AdminInput label="Slug" placeholder="e.g. web-development" required />
                </div>

                <div className="space-y-4">
                    <h3 className="text-sm font-medium text-gray-700">Icons & Images</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <AdminImageUpload label="Icon (SVG)" onChange={() => { }} />
                        <AdminImageUpload label="Cover Image" onChange={() => { }} />
                    </div>
                </div>

                <AdminTextArea label="Short Description" placeholder="Brief summary for list view..." className="min-h-[80px]" />
                <AdminTextArea label="Full Description" placeholder="Detailed description of the service..." className="min-h-[200px]" />

                <div className="pt-6 border-t border-gray-100 flex justify-end gap-3">
                    <button
                        type="button"
                        onClick={() => router.back()}
                        className="px-6 py-2.5 rounded-lg border border-gray-200 text-gray-600 font-medium hover:bg-gray-50 transition-colors"
                    >
                        Cancel
                    </button>
                    <button
                        type="submit"
                        disabled={loading}
                        className="flex items-center gap-2 px-6 py-2.5 bg-primary text-white rounded-lg font-medium hover:bg-primary-dark transition-colors disabled:opacity-70"
                    >
                        <Save size={18} />
                        {loading ? 'Saving...' : 'Save Service'}
                    </button>
                </div>
            </form>
        </div>
    );
}
