import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'testimonials.json');

function getTestimonials() {
    if (!fs.existsSync(dataFilePath)) {
        return [];
    }
    const fileContent = fs.readFileSync(dataFilePath, 'utf8');
    const data = JSON.parse(fileContent);
    return data.testimonials || [];
}

function saveTestimonials(testimonials: any[]) {
    const dir = path.dirname(dataFilePath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(dataFilePath, JSON.stringify({ testimonials }, null, 2));
}

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const testimonials = getTestimonials();
        const testimonial = testimonials.find((t: any) => t.id.toString() === id);

        if (!testimonial) {
            return NextResponse.json({ error: 'Testimonial not found' }, { status: 404 });
        }

        return NextResponse.json(testimonial);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch testimonial' }, { status: 500 });
    }
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const body = await request.json();
        const testimonials = getTestimonials();

        const index = testimonials.findIndex((t: any) => t.id.toString() === id);

        if (index === -1) {
            return NextResponse.json({ error: 'Testimonial not found' }, { status: 404 });
        }

        // Update fields
        testimonials[index] = { ...testimonials[index], ...body };
        saveTestimonials(testimonials);

        return NextResponse.json(testimonials[index]);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update testimonial' }, { status: 500 });
    }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const testimonials = getTestimonials();

        const filteredTestimonials = testimonials.filter((t: any) => t.id.toString() !== id);

        if (filteredTestimonials.length === testimonials.length) {
            return NextResponse.json({ error: 'Testimonial not found' }, { status: 404 });
        }

        saveTestimonials(filteredTestimonials);

        return NextResponse.json({ message: 'Testimonial deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete testimonial' }, { status: 500 });
    }
}
