'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Plus, Edit, Trash2, Quote, Loader2 } from 'lucide-react';
import { AdminPageHeader } from '@/components/admin/ui';
import Image from 'next/image';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    image: string;
    content: string;
}

export default function TestimonialsPage() {
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchTestimonials = async () => {
            try {
                const response = await fetch('/api/testimonials');
                if (response.ok) {
                    const data = await response.json();
                    setTestimonials(data);
                }
            } catch (error) {
                console.error('Failed to fetch testimonials', error);
            } finally {
                setLoading(false);
            }
        };

        fetchTestimonials();
    }, []);

    const handleDelete = async (id: number) => {
        if (!confirm('Are you sure you want to delete this testimonial?')) return;

        try {
            const response = await fetch(`/api/testimonials/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                setTestimonials(testimonials.filter((t) => t.id !== id));
            } else {
                alert('Failed to delete testimonial');
            }
        } catch (error) {
            console.error('Error deleting testimonial', error);
        }
    };

    return (
        <div className="space-y-6">
            <AdminPageHeader
                title="Testimonials"
                breadcrumbs={[{ label: 'Dashboard', href: '/admin' }, { label: 'Testimonials' }]}
                actions={
                    <Link
                        href="/admin/testimonials/create"
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium shadow-sm shadow-primary/20"
                    >
                        <Plus size={18} />
                        <span>Add Testimonial</span>
                    </Link>
                }
            />

            {loading ? (
                <div className="flex justify-center py-12">
                    <Loader2 className="animate-spin text-primary" size={32} />
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((t) => (
                        <div key={t.id} className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm relative group">
                            <Quote className="absolute top-6 right-6 text-gray-100" size={40} />

                            <div className="flex items-center gap-4 mb-4 relative z-10">
                                <div className="relative w-12 h-12 rounded-full overflow-hidden border border-gray-100">
                                    <Image src={t.image} alt={t.name} fill className="object-cover" />
                                </div>
                                <div>
                                    <h3 className="text-sm font-bold text-gray-900">{t.name}</h3>
                                    <p className="text-xs text-gray-500">{t.role}</p>
                                </div>
                            </div>

                            <p className="text-gray-600 text-sm leading-relaxed mb-6 italic relative z-10">"{t.content}"</p>

                            <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-50 relative z-10">
                                <Link
                                    href={`/admin/testimonials/${t.id}`}
                                    className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-gray-50 text-gray-600 font-medium hover:bg-primary hover:text-white transition-colors text-sm"
                                >
                                    <Edit size={16} />
                                    Edit
                                </Link>
                                <button
                                    onClick={() => handleDelete(t.id)}
                                    className="flex items-center justify-center p-2 rounded-lg bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-colors"
                                >
                                    <Trash2 size={16} />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}
