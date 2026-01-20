'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Plus, Edit, Trash2, Calendar, FileText } from 'lucide-react';
import { AdminPageHeader } from '@/components/admin/ui';
import Image from 'next/image';

export default function PostsPage() {
    const [posts, setPosts] = useState<any[]>([]);

    const fetchPosts = async () => {
        const response = await fetch('/api/blogs');
        if (response.ok) {
            const data = await response.json();
            setPosts(data);
        }
    };

    useEffect(() => {
        fetchPosts();
    }, []);

    const handleDelete = async (id: number) => {
        if (confirm('Are you sure you want to delete this post?')) {
            const response = await fetch(`/api/blogs/${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                fetchPosts();
            } else {
                alert('Failed to delete post');
            }
        }
    };

    return (
        <div className="space-y-6">
            <AdminPageHeader
                title="Blog Posts"
                breadcrumbs={[{ label: 'Dashboard', href: '/admin' }, { label: 'Blog Posts' }]}
                actions={
                    <Link
                        href="/admin/posts/create"
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium shadow-sm shadow-primary/20"
                    >
                        <Plus size={18} />
                        <span>Add New Post</span>
                    </Link>
                }
            />

            <div className="space-y-4">
                {posts.map((post) => (
                    <div key={post.id} className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col md:flex-row gap-6 hover:shadow-md transition-all">
                        <div className="relative w-full md:w-48 h-32 rounded-lg overflow-hidden flex-shrink-0">
                            {post.image ? (
                                <Image src={post.image} alt={post.title} fill className="object-cover" />
                            ) : (
                                <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">No Image</div>
                            )}
                        </div>

                        <div className="flex-1 py-1">
                            <div className="flex items-center gap-3 text-xs text-gray-400 mb-2">
                                <div className="flex items-center gap-1">
                                    <Calendar size={12} />
                                    <span>{post.date}</span>
                                </div>
                                <span className="w-1 h-1 rounded-full bg-gray-300"></span>
                                <span className="text-primary font-medium">{post.category}</span>
                            </div>

                            <h3 className="text-lg font-bold text-gray-900 mb-2">{post.title}</h3>
                            <p className="text-gray-500 text-sm mb-4 line-clamp-2">{post.excerpt}</p>
                        </div>

                        <div className="flex md:flex-col items-center justify-center gap-3 border-t md:border-t-0 md:border-l border-gray-50 pt-4 md:pt-0 md:pl-4">
                            <Link
                                href={`/admin/posts/${post.id}`}
                                className="w-full flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-gray-50 text-gray-600 font-medium hover:bg-primary hover:text-white transition-colors text-sm"
                            >
                                <Edit size={16} />
                                Edit
                            </Link>
                            <button
                                onClick={() => handleDelete(post.id)}
                                className="w-full flex items-center justify-center p-2 rounded-lg bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
                            >
                                <Trash2 size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
