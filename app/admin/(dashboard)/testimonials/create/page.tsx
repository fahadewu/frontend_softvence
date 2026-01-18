'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Save, ArrowLeft, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { AdminPageHeader, AdminInput, AdminTextArea, AdminImageUpload } from '@/components/admin/ui';

export default function CreateTestimonialPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        name: '',
        role: '',
        content: '',
        image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=150&q=80', // Default placeholder
        companyLogo: ''
    });

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch('/api/testimonials', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                router.push('/admin/testimonials');
            } else {
                console.error('Failed to create testimonial');
            }
        } catch (error) {
            console.error('Error creating testimonial', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto">
            <Link href="/admin/testimonials" className="inline-flex items-center text-sm text-gray-500 hover:text-primary mb-4 transition-colors">
                <ArrowLeft size={16} className="mr-1" />
                Back to Testimonials
            </Link>

            <AdminPageHeader
                title="Add New Testimonial"
                breadcrumbs={[{ label: 'Dashboard', href: '/admin' }, { label: 'Testimonials', href: '/admin/testimonials' }, { label: 'Create' }]}
            />

            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AdminInput
                        label="Client Name"
                        placeholder="e.g. Sarah Johnson"
                        required
                        value={formData.name}
                        onChange={(e: any) => setFormData({ ...formData, name: e.target.value })}
                    />
                    <AdminInput
                        label="Role / Position"
                        placeholder="e.g. CEO at Technic"
                        required
                        value={formData.role}
                        onChange={(e: any) => setFormData({ ...formData, role: e.target.value })}
                    />
                </div>

                <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-700">Quote</label>
                    <textarea
                        className="w-full min-h-[120px] px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all text-sm"
                        placeholder="Client's feedback..."
                        required
                        value={formData.content}
                        onChange={(e) => setFormData({ ...formData, content: e.target.value })}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-4">
                        <AdminImageUpload
                            label="Client Photo"
                            value={formData.image}
                            onChange={(value: string | null) => setFormData({ ...formData, image: value || '' })}
                        />
                    </div>
                    <div className="space-y-4">
                        <AdminImageUpload
                            label="Company Logo"
                            value={formData.companyLogo}
                            onChange={(value: string | null) => setFormData({ ...formData, companyLogo: value || '' })}
                        />
                    </div>
                </div>
                <div className="text-xs text-gray-400">
                    * Uploaded images will be kept in base64 format.
                </div>

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
                        {loading ? <Loader2 className="animate-spin" size={18} /> : <Save size={18} />}
                        {loading ? 'Saving...' : 'Save Testimonial'}
                    </button>
                </div>
            </form>
        </div>
    );
}
