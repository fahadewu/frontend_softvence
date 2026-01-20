'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Save, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { AdminPageHeader, AdminInput, AdminTextArea, AdminImageUpload } from '@/components/admin/ui';

export default function CreatePostPage() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        excerpt: '',
        content: '',
        image: '',
        tags: '',
        author: 'Softvence Team',
        readingTime: '5 Min'
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        const slug = formData.title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');

        try {
            const response = await fetch('/api/blogs', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    slug,
                    tags: formData.tags.split(',').map(tag => tag.trim()), // Convert comma-separated tags to array
                    date: new Date().toISOString().split('T')[0]
                }),
            });

            if (response.ok) {
                router.push('/admin/posts');
            } else {
                alert('Failed to create post');
            }
        } catch (error) {
            console.error('Error creating post:', error);
            alert('An error occurred');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="max-w-4xl mx-auto">
            <Link href="/admin/posts" className="inline-flex items-center text-sm text-gray-500 hover:text-primary mb-4 transition-colors">
                <ArrowLeft size={16} className="mr-1" />
                Back to Posts
            </Link>

            <AdminPageHeader
                title="Add New Post"
                breadcrumbs={[{ label: 'Dashboard', href: '/admin' }, { label: 'Blog Posts', href: '/admin/posts' }, { label: 'Create' }]}
            />

            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AdminInput
                        label="Post Title"
                        placeholder="e.g. Future of Design"
                        required
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />
                    <AdminInput
                        label="Category"
                        placeholder="e.g. Industry Trends"
                        required
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AdminInput
                        label="Author"
                        placeholder="Author Name"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                    />
                    <AdminInput
                        label="Reading Time"
                        placeholder="e.g. 5 Min"
                        name="readingTime"
                        value={formData.readingTime}
                        onChange={handleChange}
                    />
                </div>
                <AdminInput
                    label="Tags (comma separated)"
                    placeholder="design, ux, web"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                />

                <AdminTextArea
                    label="Excerpt"
                    placeholder="Short summary for list view..."
                    className="min-h-[100px]"
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleChange}
                />

                {/* Note: A rich text editor would typically go here for 'Content' */}
                <AdminTextArea
                    label="Content (HTML/Markdown)"
                    placeholder="Write your post content here..."
                    className="min-h-[300px] font-mono text-sm"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                />

                <div className="space-y-4">
                    <h3 className="text-sm font-medium text-gray-700">Cover Image</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <AdminImageUpload
                            label="Main Image"
                            value={formData.image}
                            onChange={(value) => setFormData(prev => ({ ...prev, image: value || '' }))}
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
                        {loading ? 'Publishing...' : 'Publish Post'}
                    </button>
                </div>
            </form>
        </div>
    );
}
