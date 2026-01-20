
import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data/blogPosts.json');

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const postId = parseInt(id);
        const fileContent = await fs.readFile(dataFilePath, 'utf-8');
        const data = JSON.parse(fileContent);
        const post = data.blogPosts.find((p: any) => p.id === postId);

        if (!post) {
            return NextResponse.json({ error: 'Post not found' }, { status: 404 });
        }

        return NextResponse.json(post);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch blog post' }, { status: 500 });
    }
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const postId = parseInt(id);
        const body = await request.json();
        const fileContent = await fs.readFile(dataFilePath, 'utf-8');
        const data = JSON.parse(fileContent);

        const index = data.blogPosts.findIndex((post: any) => post.id === postId);

        if (index === -1) {
            return NextResponse.json({ error: 'Post not found' }, { status: 404 });
        }

        data.blogPosts[index] = { ...data.blogPosts[index], ...body };

        await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2));

        return NextResponse.json(data.blogPosts[index]);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update blog post' }, { status: 500 });
    }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const postId = parseInt(id);
        const fileContent = await fs.readFile(dataFilePath, 'utf-8');
        const data = JSON.parse(fileContent);

        const initialLength = data.blogPosts.length;
        data.blogPosts = data.blogPosts.filter((post: any) => post.id !== postId);

        if (data.blogPosts.length === initialLength) {
            return NextResponse.json({ error: 'Post not found' }, { status: 404 });
        }

        await fs.writeFile(dataFilePath, JSON.stringify(data, null, 2));

        return NextResponse.json({ message: 'Post deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete blog post' }, { status: 500 });
    }
}
