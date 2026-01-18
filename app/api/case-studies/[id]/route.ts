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

const caseStudiesDir = path.join(process.cwd(), 'case_studies');

export async function GET(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const caseStudies = getCaseStudies();
        const study = caseStudies.find((s: any) => s.id.toString() === id);

        if (!study) {
            return NextResponse.json({ error: 'Case study not found' }, { status: 404 });
        }

        // Try to fetch HTML content
        let content = '';
        if (study.slug) {
            const htmlPath = path.join(caseStudiesDir, study.slug, 'index.html');
            if (fs.existsSync(htmlPath)) {
                const fullHtml = fs.readFileSync(htmlPath, 'utf8');
                // Extract content inside <main> or <body>
                const mainMatch = fullHtml.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
                content = mainMatch ? mainMatch[1] : fullHtml;
            }
        }

        return NextResponse.json({ ...study, content });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to fetch case study' }, { status: 500 });
    }
}

export async function PUT(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const body = await request.json();
        const { slug, content, ...metadata } = body;

        const caseStudies = getCaseStudies();
        const index = caseStudies.findIndex((s: any) => s.id.toString() === id);

        if (index === -1) {
            return NextResponse.json({ error: 'Case study not found' }, { status: 404 });
        }

        const oldSlug = caseStudies[index].slug;
        const newSlug = slug || oldSlug;

        // Update metadata
        caseStudies[index] = { ...caseStudies[index], slug: newSlug, ...metadata };
        saveCaseStudies(caseStudies);

        // Update/Rename files
        if (oldSlug && newSlug && oldSlug !== newSlug) {
            const oldPath = path.join(caseStudiesDir, oldSlug);
            const newPath = path.join(caseStudiesDir, newSlug);
            if (fs.existsSync(oldPath)) {
                fs.renameSync(oldPath, newPath);
            }
        }

        if (newSlug && content !== undefined) {
            const studyPath = path.join(caseStudiesDir, newSlug);
            if (!fs.existsSync(studyPath)) {
                fs.mkdirSync(studyPath, { recursive: true });
            }
            const fullHtml = `<main>${content}</main>`;
            fs.writeFileSync(path.join(studyPath, 'index.html'), fullHtml);
        }

        return NextResponse.json(caseStudies[index]);
    } catch (error) {
        return NextResponse.json({ error: 'Failed to update case study' }, { status: 500 });
    }
}

export async function DELETE(request: Request, { params }: { params: Promise<{ id: string }> }) {
    try {
        const { id } = await params;
        const caseStudies = getCaseStudies();
        const study = caseStudies.find((s: any) => s.id.toString() === id);

        if (!study) {
            return NextResponse.json({ error: 'Case study not found' }, { status: 404 });
        }

        // Delete from JSON
        const filteredStudies = caseStudies.filter((s: any) => s.id.toString() !== id);
        saveCaseStudies(filteredStudies);

        // Delete files
        if (study.slug) {
            const studyPath = path.join(caseStudiesDir, study.slug);
            if (fs.existsSync(studyPath)) {
                fs.rmSync(studyPath, { recursive: true, force: true });
            }
        }

        return NextResponse.json({ message: 'Case study deleted successfully' });
    } catch (error) {
        return NextResponse.json({ error: 'Failed to delete case study' }, { status: 500 });
    }
}
