import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

interface BreadcrumbItem {
    label: string;
    href?: string;
}

interface AdminPageHeaderProps {
    title: string;
    breadcrumbs: BreadcrumbItem[];
    actions?: React.ReactNode;
}

export const AdminPageHeader = ({ title, breadcrumbs, actions }: AdminPageHeaderProps) => {
    return (
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
            <div>
                <nav className="flex items-center gap-1 text-sm text-gray-500 mb-1">
                    {breadcrumbs.map((item, index) => (
                        <React.Fragment key={index}>
                            {index > 0 && <ChevronRight size={14} />}
                            {item.href ? (
                                <Link href={item.href} className="hover:text-primary transition-colors">
                                    {item.label}
                                </Link>
                            ) : (
                                <span className="text-gray-900 font-medium">{item.label}</span>
                            )}
                        </React.Fragment>
                    ))}
                </nav>
                <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
            </div>

            {actions && (
                <div className="flex items-center gap-3">
                    {actions}
                </div>
            )}
        </div>
    );
};
