'use client';

import React, { useState, use, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Save, ArrowLeft } from 'lucide-react';
import Link from 'next/link';
import { AdminPageHeader, AdminInput, AdminTextArea, AdminImageUpload } from '@/components/admin/ui';

export default function EditPostPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = use(params); // Unwrapping params using React.use() for Next.js 15+
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [isFetching, setIsFetching] = useState(true);
    const [formData, setFormData] = useState({
        title: '',
        category: '',
        excerpt: '',
        content: '',
        image: '',
        tags: '',
        author: '',
        readingTime: ''
    });

    useEffect(() => {
        const fetchPost = async () => {
            console.log('Fetching post with ID:', id);
            if (!id) return;
            try {
                const response = await fetch(`/api/blogs/${id}`);
                console.log('Fetch response status:', response.status);
                if (response.ok) {
                    const data = await response.json();
                    console.log('Fetched data:', data);
                    setFormData({
                        ...data,
                        tags: Array.isArray(data.tags) ? data.tags.join(', ') : data.tags || ''
                    });
                } else {
                    console.error('Fetch failed');
                    alert('Failed to load post data');
                }
            } catch (error) {
                console.error('Failed to fetch post', error);
                alert('An error occurred while loading post');
            } finally {
                setIsFetching(false);
            }
        };
        fetchPost();
    }, [id]);

    if (isFetching) {
        return (
            <div className="flex items-center justify-center p-20">
                <div className="text-gray-500 font-medium animate-pulse">Loading post data...</div>
            </div>
        );
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await fetch(`/api/blogs/${id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    ...formData,
                    tags: formData.tags.split(',').map(tag => tag.trim())
                }),
            });

            if (response.ok) {
                router.push('/admin/posts');
            } else {
                alert('Failed to update post');
            }
        } catch (error) {
            console.error('Error updating post:', error);
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
                title={`Edit Post #${id}`}
                breadcrumbs={[{ label: 'Dashboard', href: '/admin' }, { label: 'Blog Posts', href: '/admin/posts' }, { label: 'Edit' }]}
            />

            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AdminInput
                        label="Post Title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                    />
                    <AdminInput
                        label="Category"
                        name="category"
                        value={formData.category}
                        onChange={handleChange}
                        required
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <AdminInput
                        label="Author"
                        name="author"
                        value={formData.author}
                        onChange={handleChange}
                    />
                    <AdminInput
                        label="Reading Time"
                        name="readingTime"
                        value={formData.readingTime}
                        onChange={handleChange}
                    />
                </div>
                <AdminInput
                    label="Tags (comma separated)"
                    name="tags"
                    value={formData.tags}
                    onChange={handleChange}
                />

                <AdminTextArea
                    label="Excerpt"
                    name="excerpt"
                    value={formData.excerpt}
                    onChange={handleChange}
                    className="min-h-[100px]"
                />

                <AdminTextArea
                    label="Content (HTML/Markdown)"
                    name="content"
                    value={formData.content}
                    onChange={handleChange}
                    className="min-h-[300px] font-mono text-sm"
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
                        {loading ? 'Updating...' : 'Update Post'}
                    </button>
                </div>
            </form>
        </div>
    );
}
