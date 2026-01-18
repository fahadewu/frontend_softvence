import React from 'react';
import './admin.css';
import AdminShell from '@/components/admin/AdminShell';

export const metadata = {
    title: 'Admin Dashboard | Softvence',
    description: 'Softvence Admin Panel',
};

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <AdminShell>
            {children}
        </AdminShell>
    );
}
