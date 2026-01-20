import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';
import settingsData from './data/settings.json';

const SECRET_KEY = process.env.JWT_SECRET || 'softvence-admin-secret-key-2026-';
const key = new TextEncoder().encode(SECRET_KEY);

export async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // 1. Maintenance Mode Check
    const isMaintenanceMode = settingsData.maintenance.enabled;
    const isMaintenancePage = pathname === '/maintenance';
    const isAdminRoute = pathname.startsWith('/admin');
    const isApiRoute = pathname.startsWith('/api');
    const isAsset = pathname.includes('/assets/') || pathname.includes('.');

    if (isMaintenanceMode && !isAdminRoute && !isMaintenancePage && !isApiRoute && !isAsset) {
        return NextResponse.redirect(new URL('/maintenance', request.url));
    }

    // 2. Page Visibility Check
    if (!isAdminRoute && !isApiRoute && !isAsset && !isMaintenancePage) {
        const visibility = (settingsData as any).pageVisibility || {};
        const pathMap: Record<string, string> = {
            '/about-us': 'about',
            '/blog': 'blog',
            '/work': 'work',
            '/services': 'services',
            '/contact': 'contact'
        };

        for (const [path, key] of Object.entries(pathMap)) {
            if (pathname === path || pathname.startsWith(path + '/')) {
                if ((visibility as any)[key] === false) {
                    return NextResponse.rewrite(new URL('/404', request.url));
                }
            }
        }
    }

    // Redirect maintenance page to home if mode is OFF
    if (!isMaintenanceMode && isMaintenancePage) {
        return NextResponse.redirect(new URL('/', request.url));
    }

    // 3. Admin Route Protection
    if (isAdminRoute) {
        const session = request.cookies.get('admin_session')?.value;

        if (pathname.startsWith('/admin/login')) {
            if (session) {
                try {
                    await jwtVerify(session, key);
                    return NextResponse.redirect(new URL('/admin', request.url));
                } catch (e) { }
            }
            return NextResponse.next();
        }

        if (!session) {
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }

        try {
            await jwtVerify(session, key);
            return NextResponse.next();
        } catch (error) {
            return NextResponse.redirect(new URL('/admin/login', request.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
