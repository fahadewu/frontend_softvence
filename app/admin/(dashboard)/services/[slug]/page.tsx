'use client';

import React, { useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { Save, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { AdminPageHeader, AdminInput, AdminTextArea, AdminImageUpload } from '@/components/admin/ui';

export default function EditServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = use(params);
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
                title={`Edit Service: ${slug}`}
                breadcrumbs={[{ label: 'Dashboard', href: '/admin' }, { label: 'Services', href: '/admin/services' }, { label: 'Edit' }]}
            />

            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AdminInput label="Service Title" defaultValue="Web Development" required />
                    <AdminInput label="Slug" defaultValue="web-development" required />
                </div>

                <div className="space-y-4">
                    <h3 className="text-sm font-medium text-gray-700">Icons & Images</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <AdminImageUpload
                            label="Icon (SVG)"
                            value="https://softvence.agency/wp-content/uploads/2024/03/web-dev-icon.svg"
                            onChange={() => { }}
                        />
                        <AdminImageUpload
                            label="Cover Image"
                            value="https://softvence.agency/wp-content/uploads/2025/11/Web-Development-Cover-01.png"
                            onChange={() => { }}
                        />
                    </div>
                </div>

                <AdminTextArea
                    label="Short Description"
                    defaultValue="Unlock the potential of your online presence with Softvence Agency's expert Web Development services."
                    className="min-h-[80px]"
                />
                <AdminTextArea
                    label="Full Description"
                    defaultValue="We craft responsive, visually stunning websites tailored to your brand. Elevate your digital footprint, streamline functionalities, and drive engagement..."
                    className="min-h-[200px]"
                />

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
                        {loading ? 'Saving Changes...' : 'Save Changes'}
                    </button>
                </div>
            </form>
        </div>
    );
}
