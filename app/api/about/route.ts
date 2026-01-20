import { NextRequest, NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'about.json');

function getAboutData() {
    if (!fs.existsSync(dataFilePath)) {
        return null;
    }
    const jsonData = fs.readFileSync(dataFilePath, 'utf-8');
    return JSON.parse(jsonData);
}

export async function GET() {
    const data = getAboutData();
    if (!data) {
        return NextResponse.json({ error: 'Data not found' }, { status: 404 });
    }
    return NextResponse.json(data);
}

export async function POST(request: NextRequest) {
    try {
        const data = await request.json();
        fs.mkdirSync(path.dirname(dataFilePath), { recursive: true });
        fs.writeFileSync(dataFilePath, JSON.stringify(data, null, 2));
        return NextResponse.json({ message: 'Data updated successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update data' }, { status: 500 });
    }
}
