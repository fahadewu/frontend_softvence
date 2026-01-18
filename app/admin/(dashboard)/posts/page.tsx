'use client';

import React from 'react';
import Link from 'next/link';
import { Plus, Edit, Trash2, Calendar, FileText } from 'lucide-react';
import { AdminPageHeader } from '@/components/admin/ui';
import Image from 'next/image';

// Mock Data
const posts = [
    { id: 1, title: 'Top 10 Design Trends for 2026', date: 'Jan 15, 2026', category: 'Design', image: 'https://images.unsplash.com/photo-1626785774573-4b7993143d2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', excerpt: 'Discover the latest web and app design trends that will dominate this year.' },
    { id: 2, title: 'Importance of UX Research', date: 'Jan 10, 2026', category: 'UX/UI', image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80', excerpt: 'Why research is the most critical phase in any digital product development.' },
];

export default function PostsPage() {
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
                            <Image src={post.image} alt={post.title} fill className="object-cover" />
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
                            <button className="w-full flex items-center justify-center p-2 rounded-lg bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-colors">
                                <Trash2 size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
