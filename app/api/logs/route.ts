import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Log from '@/models/Log';

export async function GET() {
    try {
        await dbConnect();
        const logs = await Log.find({}).sort({ timestamp: -1 }).limit(100);
        return NextResponse.json(logs);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch logs' }, { status: 500 });
    }
}

export async function POST(request: NextRequest) {
    try {
        await dbConnect();
        const body = await request.json();

        const newLog = await Log.create({
            action: body.action || 'Unknown Action',
            description: body.description || '',
            user: body.user || 'System',
            type: body.type || 'info',
            timestamp: new Date()
        });

        return NextResponse.json({ message: 'Log added', data: newLog }, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create log' }, { status: 500 });
    }
}
