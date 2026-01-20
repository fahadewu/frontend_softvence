import { NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import CaseStudy from '@/models/CaseStudy';

export async function GET(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        await dbConnect();
        const { slug } = await params;
        const caseStudy = await CaseStudy.findOne({ slug });

        if (!caseStudy) {
            return NextResponse.json({ error: 'Case study not found' }, { status: 404 });
        }

        return NextResponse.json(caseStudy);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch case study' }, { status: 500 });
    }
}

export async function PUT(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        await dbConnect();
        const { slug } = await params;
        const body = await request.json();

        if (body.slug && body.slug !== slug) {
            const existing = await CaseStudy.findOne({ slug: body.slug });
            if (existing) {
                return NextResponse.json({ error: 'Slug already exists' }, { status: 400 });
            }
        }

        const updatedCaseStudy = await CaseStudy.findOneAndUpdate({ slug }, body, {
            new: true,
            runValidators: true,
        });

        if (!updatedCaseStudy) {
            return NextResponse.json({ error: 'Case study not found' }, { status: 404 });
        }

        return NextResponse.json(updatedCaseStudy);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update case study' }, { status: 500 });
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: Promise<{ slug: string }> }
) {
    try {
        await dbConnect();
        const { slug } = await params;
        const deletedCaseStudy = await CaseStudy.findOneAndDelete({ slug });

        if (!deletedCaseStudy) {
            return NextResponse.json({ error: 'Case study not found' }, { status: 404 });
        }

        return NextResponse.json({ message: 'Case study deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete case study' }, { status: 500 });
    }
}
