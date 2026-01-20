'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Plus, Edit, Trash2, Search, Loader2 } from 'lucide-react';
import { AdminPageHeader } from '@/components/admin/ui';
import Image from 'next/image';

interface CaseStudy {
    _id: string;
    slug: string;
    id: number;
    title: string;
    client: string;
    description: string;
    services: string;
    year: string;
    image: string;
    categories: string[];
}

export default function CaseStudiesPage() {
    const [caseStudies, setCaseStudies] = useState<CaseStudy[]>([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('All');

    useEffect(() => {
        const fetchCaseStudies = async () => {
            try {
                const response = await fetch('/api/case-studies');
                if (response.ok) {
                    const data = await response.json();
                    setCaseStudies(data);
                }
            } catch (error) {
                console.error('Failed to fetch case studies', error);
            } finally {
                setLoading(false);
            }
        };

        fetchCaseStudies();
    }, []);

    const handleDelete = async (slug: string) => {
        if (!confirm('Are you sure you want to delete this case study?')) return;

        try {
            const response = await fetch(`/api/case-studies/${slug}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setCaseStudies(caseStudies.filter((s) => s.slug !== slug));
            } else {
                alert('Failed to delete case study');
            }
        } catch (error) {
            console.error('Error deleting case study', error);
        }
    };

    const filteredStudies = caseStudies.filter(study => {
        const matchesSearch = study.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            study.client.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = categoryFilter === 'All' || study.categories.some(c => c.toLowerCase().includes(categoryFilter.toLowerCase()));
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="space-y-6">
            <AdminPageHeader
                title="Case Studies"
                breadcrumbs={[{ label: 'Dashboard', href: '/admin' }, { label: 'Case Studies' }]}
                actions={
                    <Link
                        href="/admin/case-studies/create"
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium shadow-sm shadow-primary/20"
                    >
                        <Plus size={18} />
                        <span>Add Case Study</span>
                    </Link>
                }
            />

            {/* Filter/Search Bar */}
            <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex flex-col md:flex-row items-center justify-between gap-4">
                <div className="relative flex-1 w-full md:max-w-md">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                        type="text"
                        placeholder="Search case studies..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all font-outfit"
                    />
                </div>
                <select
                    className="w-full md:w-auto px-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-gray-600 focus:outline-none font-outfit"
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}
                >
                    <option value="All">All Categories</option>
                    <option value="ui-ux">UI/UX Design</option>
                    <option value="web-develop">Web Development</option>
                    <option value="mobile-app">Mobile App</option>
                    <option value="vibe-coding">Vibe Coding</option>
                    <option value="branding">Branding</option>
                </select>
            </div>

            {loading ? (
                <div className="flex justify-center py-12">
                    <Loader2 className="animate-spin text-primary" size={32} />
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {filteredStudies.map((study) => (
                        <div key={study._id} className="bg-white rounded-xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-all group font-outfit">
                            <div className="relative h-48 w-full bg-gray-100">
                                <Image
                                    src={study.image}
                                    alt={study.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                                />
                                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-gray-700 shadow-sm flex gap-1">
                                    {study.categories.map(c => (
                                        <span key={c}>{c}</span>
                                    ))}
                                </div>
                            </div>

                            <div className="p-5">
                                <div className="flex justify-between items-start mb-2">
                                    <p className="text-xs font-medium text-gray-500">Client: <span className="text-gray-700">{study.client}</span></p>
                                    <p className="text-xs font-medium text-gray-400">{study.year}</p>
                                </div>
                                <h3 className="text-lg font-bold text-gray-900 mb-2 line-clamp-1" title={study.title}>{study.title}</h3>
                                <p className="text-sm text-gray-500 mb-4 line-clamp-1">{study.services}</p>

                                <div className="flex items-center gap-3 pt-4 border-t border-gray-50">
                                    <Link
                                        href={`/admin/case-studies/${study.slug}`}
                                        className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-gray-50 text-gray-600 font-medium hover:bg-primary hover:text-white transition-colors text-sm"
                                    >
                                        <Edit size={16} />
                                        Edit
                                    </Link>
                                    <button
                                        onClick={() => handleDelete(study.slug)}
                                        className="flex items-center justify-center p-2 rounded-lg bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
                                    >
                                        <Trash2 size={16} />
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
