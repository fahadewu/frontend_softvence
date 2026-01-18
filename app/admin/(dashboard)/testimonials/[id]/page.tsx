'use client';

import React, { useState, useEffect, use } from 'react';
import { useRouter } from 'next/navigation';
import { Save, ArrowLeft, Loader2 } from 'lucide-react';
import Link from 'next/link';
import { AdminPageHeader, AdminInput, AdminTextArea, AdminImageUpload } from '@/components/admin/ui';

export default function EditTestimonialPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [fetching, setFetching] = useState(true);
    const [formData, setFormData] = useState({
        name: '',
        role: '',
        content: '',
        image: '',
        companyLogo: ''
    });

    useEffect(() => {
        const fetchTestimonial = async () => {
            try {
                const response = await fetch(`/api/testimonials/${id}`);
                if (response.ok) {
                    const data = await response.json();
                    setFormData({
                        name: data.name,
                        role: data.role,
                        content: data.content,
                        image: data.image,
                        companyLogo: data.companyLogo || ''
                    });
                } else {
                    console.error('Failed to fetch testimonial');
                    router.push('/admin/testimonials');
                }
            } catch (error) {
                console.error('Error fetching testimonial', error);
            } finally {
                setFetching(false);
            }
        };
        fetchTestimonial();
    }, [id, router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(`/api/testimonials/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                router.push('/admin/testimonials');
            } else {
                console.error('Failed to update testimonial');
            }
        } catch (error) {
            console.error('Error updating testimonial', error);
        } finally {
            setLoading(false);
        }
    };

    if (fetching) {
        return (
            <div className="flex justify-center py-12">
                <Loader2 className="animate-spin text-primary" size={32} />
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto">
            <Link href="/admin/testimonials" className="inline-flex items-center text-sm text-gray-500 hover:text-primary mb-4 transition-colors">
                <ArrowLeft size={16} className="mr-1" />
                Back to Testimonials
            </Link>

            <AdminPageHeader
                title={`Edit Testimonial #${id}`}
                breadcrumbs={[{ label: 'Dashboard', href: '/admin' }, { label: 'Testimonials', href: '/admin/testimonials' }, { label: 'Edit' }]}
            />

            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AdminInput
                        label="Client Name"
                        value={formData.name}
                        onChange={(e: any) => setFormData({ ...formData, name: e.target.value })}
                        required
                    />
                    <AdminInput
                        label="Role / Position"
                        value={formData.role}
                        onChange={(e: any) => setFormData({ ...formData, role: e.target.value })}
                        required
                    />
                </div>

                <div className="space-y-4">
                    <AdminTextArea
                        label="Quote"
                        value={formData.content}
                        onChange={(e: any) => setFormData({ ...formData, content: e.target.value })}
                        required
                        className="min-h-[120px]"
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
                        {loading ? 'Saving...' : 'Save Changes'}
                    </button>
                </div>
            </form>
        </div>
    );
}
