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
    // Ensure directory exists
    const dir = path.dirname(dataFilePath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }

    fs.writeFileSync(dataFilePath, JSON.stringify({ testimonials }, null, 2));
}

export async function GET() {
    try {
        const testimonials = getTestimonials();
        return NextResponse.json(testimonials);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch testimonials' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const testimonials = getTestimonials();

        const newTestimonial = {
            id: Date.now(), // Simple ID generation
            ...body
        };

        testimonials.push(newTestimonial);
        saveTestimonials(testimonials);

        return NextResponse.json(newTestimonial, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create testimonial' }, { status: 500 });
    }
}
