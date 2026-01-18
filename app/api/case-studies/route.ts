import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'data', 'caseStudies.json');

function getCaseStudies() {
    if (!fs.existsSync(dataFilePath)) {
        return [];
    }
    const fileContent = fs.readFileSync(dataFilePath, 'utf8');
    const data = JSON.parse(fileContent);
    return data.caseStudies || [];
}

function saveCaseStudies(caseStudies: any[]) {
    const dir = path.dirname(dataFilePath);
    if (!fs.existsSync(dir)) {
        fs.mkdirSync(dir, { recursive: true });
    }
    fs.writeFileSync(dataFilePath, JSON.stringify({ caseStudies }, null, 2));
}

export async function GET() {
    try {
        const caseStudies = getCaseStudies();
        return NextResponse.json(caseStudies);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch case studies' }, { status: 500 });
    }
}

const caseStudiesDir = path.join(process.cwd(), 'case_studies');

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { slug, content, ...metadata } = body;

        const caseStudies = getCaseStudies();

        const newCaseStudy = {
            id: Date.now(),
            slug,
            ...metadata
        };

        // Save metadata
        caseStudies.push(newCaseStudy);
        saveCaseStudies(caseStudies);

        // Save HTML content if provided
        if (slug && content) {
            const studyPath = path.join(caseStudiesDir, slug);
            if (!fs.existsSync(studyPath)) {
                fs.mkdirSync(studyPath, { recursive: true });
            }
            // Wrap content in simple main/body if it doesn't have it, 
            // but the loader expects at least <main> or <body>
            const fullHtml = `<main>${content}</main>`;
            fs.writeFileSync(path.join(studyPath, 'index.html'), fullHtml);
        }

        return NextResponse.json(newCaseStudy, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to create case study' }, { status: 500 });
    }
}
