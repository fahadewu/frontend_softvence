import { NextResponse } from 'next/server';
import { encrypt } from '@/lib/auth';
import { cookies } from 'next/headers';

// Hardcoded admin credentials for now
const ADMIN_EMAIL = 'admin@softvence.com';
const ADMIN_PASSWORD = 'admin123';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { email, password } = body;

        console.log(`Login attempt for: ${email}`);

        // 1. Validation: Ensure email and password are provided
        if (!email || !password) {
            return NextResponse.json(
                { message: 'Email and password are required' },
                { status: 400 }
            );
        }

        // 2. Authentication: Verify credentials
        if (email === ADMIN_EMAIL && password === ADMIN_PASSWORD) {
            // Create the session
            const expires = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours
            const session = await encrypt({
                user: { email: ADMIN_EMAIL, name: 'Admin' },
                expires
            });

            // Save the session in a cookie
            const cookieStore = await cookies();
            cookieStore.set('admin_session', session, {
                expires,
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                path: '/',
            });

            return NextResponse.json({ message: 'Login successful' });
        } else {
            return NextResponse.json(
                { message: 'Invalid email or password' },
                { status: 401 }
            );
        }
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json(
            { message: 'Internal server error' },
            { status: 500 }
        );
    }
}
