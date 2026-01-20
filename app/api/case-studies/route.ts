import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import CaseStudy from '@/models/CaseStudy';

export async function GET() {
    try {
        await dbConnect();
        const caseStudies = await CaseStudy.find({}).sort({ createdAt: -1 });
        return NextResponse.json(caseStudies);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch case studies' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        await dbConnect();
        const body = await request.json();
        const newCaseStudy = await CaseStudy.create(body);
        return NextResponse.json(newCaseStudy);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create case study' }, { status: 500 });
    }
}
