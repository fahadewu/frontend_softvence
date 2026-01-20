
import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data/blogPosts.json');

export async function GET() {
    try {
        const fileContent = await fs.readFile(dataFilePath, 'utf-8');
        const data = JSON.parse(fileContent);
        return NextResponse.json(data.blogPosts);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 });
    }
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const fileContent = await fs.readFile(dataFilePath, 'utf-8');
        const data = JSON.parse(fileContent);

        const newPost = {
            id: Date.now(), // Simple ID generation
            ...body,
            date: new Date().toISOString().split('T')[0] // Auto-set date if not provided
        };

        data.blogPosts.unshift(newPost); // Add to beginning

        await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2));

        return NextResponse.json(newPost);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create blog post' }, { status: 500 });
    }
}
