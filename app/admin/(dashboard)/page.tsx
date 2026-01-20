import React from 'react';
import Link from 'next/link';
import { Users, FileText, Eye, TrendingUp, MessageSquare, Star, Briefcase } from 'lucide-react';
import blogData from '@/data/blogPosts.json';
import caseStudiesData from '@/data/caseStudies.json';
import servicesData from '@/data/services.json';
import testimonialsData from '@/data/testimonials.json';

export default function AdminDashboard() {
    const blogCount = blogData.blogPosts.length;
    const caseStudiesCount = caseStudiesData.caseStudies.length;
    const servicesCount = servicesData.services.length;
    const testimonialsCount = testimonialsData.testimonials.length;

    // Get recent items (assuming last added are at the end, reverse to show newest first)
    // If IDs are incremental, we can sort by ID. For now, just taking slices.
    const recentBlogs = [...blogData.blogPosts].reverse().slice(0, 3);
    const recentCaseStudies = [...caseStudiesData.caseStudies].reverse().slice(0, 3);

    const stats = [
        { title: 'Blog Posts', value: blogCount.toString(), change: 'Total', icon: FileText, color: 'text-purple-600', bg: 'bg-purple-100' },
        { title: 'Case Studies', value: caseStudiesCount.toString(), change: 'Total', icon: Briefcase, color: 'text-blue-600', bg: 'bg-blue-100' },
        { title: 'Services', value: servicesCount.toString(), change: 'Active', icon: Star, color: 'text-orange-600', bg: 'bg-orange-100' },
        { title: 'Testimonials', value: testimonialsCount.toString(), change: 'Received', icon: MessageSquare, color: 'text-green-600', bg: 'bg-green-100' },
    ];

    return (
        <div className="space-y-6">
            <div className="flex items-center justify-between">
                <h1 className="text-2xl font-bold text-gray-800">Dashboard</h1>
                <span className="text-sm text-gray-500">Overview</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-center gap-4 transition-transform hover:-translate-y-1">
                            <div className={`p-3 rounded-lg ${stat.bg} ${stat.color}`}>
                                <Icon size={24} />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-500">{stat.title}</p>
                                <div className="flex items-center gap-2">
                                    <h3 className="text-xl font-bold text-gray-900">{stat.value}</h3>
                                    <span className="text-xs font-medium text-gray-600 bg-gray-100 px-2 py-0.5 rounded-full">{stat.change}</span>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 pt-4">
                {/* Recent Content */}
                <div className="space-y-6">
                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-bold text-gray-800">Recent Blog Posts</h2>
                            <Link href="/admin/posts" className="text-sm text-primary hover:underline">View All</Link>
                        </div>
                        <div className="space-y-4">
                            {recentBlogs.map((post) => (
                                <Link href={`/admin/posts/${post.id}`} key={post.id} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors cursor-pointer block">
                                    <div className="h-10 w-10 rounded bg-gray-200 overflow-hidden flex-shrink-0">
                                        {post.image ? (
                                            <img src={post.image} alt={post.title} className="h-full w-full object-cover" />
                                        ) : (
                                            <FileText className="h-full w-full p-2 text-gray-400" />
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate">{post.title}</p>
                                        <p className="text-xs text-gray-500">{post.category || 'Uncategorized'}</p>
                                    </div>
                                </Link>
                            ))}
                            {recentBlogs.length === 0 && (
                                <p className="text-sm text-gray-500 text-center py-4">No blog posts found.</p>
                            )}
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                        <div className="flex items-center justify-between mb-4">
                            <h2 className="text-lg font-bold text-gray-800">Recent Case Studies</h2>
                            <Link href="/admin/case-studies" className="text-sm text-primary hover:underline">View All</Link>
                        </div>
                        <div className="space-y-4">
                            {recentCaseStudies.map((study) => (
                                <div key={study.id} className="flex items-center gap-4 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                                    <div className="h-10 w-10 rounded bg-gray-200 overflow-hidden flex-shrink-0">
                                        {study.image ? (
                                            <img src={study.image} alt={study.title} className="h-full w-full object-cover" />
                                        ) : (
                                            <Briefcase className="h-full w-full p-2 text-gray-400" />
                                        )}
                                    </div>
                                    <div className="flex-1 min-w-0">
                                        <p className="text-sm font-medium text-gray-900 truncate">{study.title}</p>
                                        <p className="text-xs text-gray-500">{study.client || 'Client Name'}</p>
                                    </div>
                                </div>
                            ))}
                            {recentCaseStudies.length === 0 && (
                                <p className="text-sm text-gray-500 text-center py-4">No case studies found.</p>
                            )}
                        </div>
                    </div>
                </div>

                {/* Quick Actions */}
                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-fit">
                    <h2 className="text-lg font-bold text-gray-800 mb-4">Quick Actions</h2>
                    <div className="grid grid-cols-2 gap-4">
                        <Link href="/admin/posts/create" className="p-4 border border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-primary hover:text-primary transition-all flex flex-col items-center justify-center gap-2">
                            <FileText size={20} />
                            <span className="text-sm font-medium">Add Post</span>
                        </Link>
                        <Link href="/admin/case-studies/create" className="p-4 border border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-primary hover:text-primary transition-all flex flex-col items-center justify-center gap-2">
                            <Briefcase size={20} />
                            <span className="text-sm font-medium">Add Case Study</span>
                        </Link>
                        <Link href="/admin/testimonials" className="p-4 border border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-primary hover:text-primary transition-all flex flex-col items-center justify-center gap-2">
                            <MessageSquare size={20} />
                            <span className="text-sm font-medium">Manage Reviews</span>
                        </Link>
                        <Link href="/" target="_blank" className="p-4 border border-dashed border-gray-300 rounded-lg text-gray-500 hover:border-primary hover:text-primary transition-all flex flex-col items-center justify-center gap-2">
                            <Eye size={20} />
                            <span className="text-sm font-medium">View Site</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
