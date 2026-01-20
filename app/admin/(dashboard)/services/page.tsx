'use client';

import React from 'react';
import Link from 'next/link';
import { Plus, Edit, Trash2, Settings } from 'lucide-react';
import { AdminPageHeader } from '@/components/admin/ui';
import Image from 'next/image';

// Mock Data matching services.json
const services = [
    {
        id: 1,
        title: 'Web Development',
        slug: 'web-development',
        shortDescription: "Unlock the potential of your online presence with Softvence Agency's expert Web Development services.",
        icon: 'https://softvence.agency/wp-content/uploads/2024/03/web-dev-icon.svg',
        image: 'https://softvence.agency/wp-content/uploads/2025/11/Web-Development-Cover-01.png'
    },
    {
        id: 2,
        title: 'UX/UI Design',
        slug: 'ux-ui-design',
        shortDescription: 'Transform your digital products with exceptional user experience and stunning visual design.',
        icon: 'https://softvence.agency/wp-content/uploads/2024/03/ui-ux-icon.svg',
        image: 'https://softvence.agency/wp-content/uploads/2025/11/UI-UX-portfolio-M1.jpg'
    },
    {
        id: 3,
        title: 'Mobile App Development',
        slug: 'mobile-app-development',
        shortDescription: 'Build powerful mobile applications that engage users and drive business growth.',
        icon: 'https://softvence.agency/wp-content/uploads/2024/03/mobile-app-icon.svg',
        image: 'https://softvence.agency/wp-content/uploads/2025/11/download-88-1.png'
    },
];

export default function ServicesPage() {
    return (
        <div className="space-y-6">
            <AdminPageHeader
                title="Services"
                breadcrumbs={[{ label: 'Dashboard', href: '/admin' }, { label: 'Services' }]}
                actions={
                    <Link
                        href="/admin/services/create"
                        className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors font-medium shadow-sm shadow-primary/20"
                    >
                        <Plus size={18} />
                        <span>Add Service</span>
                    </Link>
                }
            />

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {services.map((service) => (
                    <div key={service.id} className="relative bg-white p-6 rounded-xl border border-gray-100 shadow-sm hover:shadow-md transition-all group flex flex-col h-full">
                        <div className="flex items-center gap-4 mb-4">
                            <div className="w-12 h-12 rounded-lg bg-gray-50 flex items-center justify-center p-2 shrink-0">
                                <img src={service.icon} alt="" className="w-full h-full object-contain" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 line-clamp-1">{service.title}</h3>
                                <p className="text-xs text-gray-400 font-mono">/{service.slug}</p>
                            </div>
                        </div>

                        <p className="text-gray-500 text-sm mb-6 line-clamp-3 flex-grow">{service.shortDescription}</p>

                        <div className="relative h-40 w-full bg-gray-100 rounded-lg overflow-hidden mb-4">
                            <Image
                                src={service.image}
                                alt={service.title}
                                fill
                                className="object-cover"
                            />
                        </div>

                        <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-50">
                            <Link
                                href={`/admin/services/${service.slug}`}
                                className="flex-1 flex items-center justify-center gap-2 py-2 rounded-lg bg-gray-50 text-gray-600 font-medium hover:bg-primary hover:text-white transition-colors text-sm"
                            >
                                <Edit size={16} />
                                Edit
                            </Link>
                            <button className="flex items-center justify-center p-2 rounded-lg bg-red-50 text-red-500 hover:bg-red-500 hover:text-white transition-colors">
                                <Trash2 size={16} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
