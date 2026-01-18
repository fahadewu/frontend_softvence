'use client';

import React, { useState, use } from 'react';
import { useRouter } from 'next/navigation';
import { Save, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { AdminPageHeader, AdminInput, AdminTextArea, AdminImageUpload } from '@/components/admin/ui';

export default function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params);
    const router = useRouter();
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        // Simulate API call
        setTimeout(() => {
            setLoading(false);
            router.push('/admin/posts');
        }, 1000);
    };

    return (
        <div className="max-w-4xl mx-auto">
            <Link href="/admin/posts" className="inline-flex items-center text-sm text-gray-500 hover:text-primary mb-4 transition-colors">
                <ArrowLeft size={16} className="mr-1" />
                Back to Posts
            </Link>

            <AdminPageHeader
                title={`Edit Post #${id}`}
                breadcrumbs={[{ label: 'Dashboard', href: '/admin' }, { label: 'Blog Posts', href: '/admin/posts' }, { label: 'Edit' }]}
            />

            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AdminInput label="Post Title" defaultValue="Top 10 Design Trends for 2026" required />
                    <AdminInput label="Category" defaultValue="Design" required />
                </div>

                <AdminTextArea label="Excerpt" defaultValue="Discover the latest web and app design trends that will dominate this year." className="min-h-[100px]" />

                <AdminTextArea
                    label="Content (HTML/Markdown)"
                    defaultValue="<p>Full article content goes here...</p>"
                    className="min-h-[300px] font-mono text-sm"
                />

                <div className="space-y-4">
                    <h3 className="text-sm font-medium text-gray-700">Cover Image</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <AdminImageUpload
                            label="Main Image"
                            value="https://images.unsplash.com/photo-1626785774573-4b7993143d2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
                            onChange={() => { }}
                        />
                    </div>
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
                        <Save size={18} />
                        {loading ? 'Updating...' : 'Update Post'}
                    </button>
                </div>
            </form>
        </div>
    );
}
