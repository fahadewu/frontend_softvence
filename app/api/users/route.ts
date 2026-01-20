import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import User from '@/models/User';

export async function GET() {
    try {
        await dbConnect();
        const users = await User.find({}).sort({ createdAt: -1 });
        return NextResponse.json(users);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch users' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        await dbConnect();
        const body = await request.json();

        if (!body.name || !body.email) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const newUser = await User.create({
            name: body.name,
            email: body.email,
            role: body.role || 'Admin',
            status: 'Active'
        });

        return NextResponse.json({ message: 'User created successfully', data: newUser }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create user' }, { status: 500 });
    }
}
