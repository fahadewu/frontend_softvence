import { notFound } from 'next/navigation';
import fs from 'fs';
import path from 'path';
import CaseStudyPageClient from '@/components/CaseStudyPageClient';
import dbConnect from '@/lib/db';
import CaseStudy from '@/models/CaseStudy';

export const dynamic = 'force-dynamic';

export async function generateStaticParams() {
    try {
        await dbConnect();
        const studies = await CaseStudy.find({}, { slug: 1 }).lean();
        return studies.map((study: any) => ({
            slug: study.slug,
        }));
    } catch (error) {
        console.error('Error generating static params for case studies:', error);
        return [];
    }
}

async function getCaseStudyData(slug: string) {
    await dbConnect();

    // Fetch current study
    const currentStudy = await CaseStudy.findOne({ slug }).lean();
    if (!currentStudy) return null;

    // Fetch all studies to determine prev/next and related
    // We sort by createdAt to match the listing order
    const allStudies = await CaseStudy.find({}).sort({ createdAt: -1 }).lean();

    const currentIndex = allStudies.findIndex((cs: any) => cs.slug === slug);

    const prevCaseStudy = currentIndex > 0 ? allStudies[currentIndex - 1] : null;
    const nextCaseStudy = currentIndex < allStudies.length - 1 ? allStudies[currentIndex + 1] : null;

    // Get related case studies (excluding current one)
    const relatedCaseStudies = allStudies
        .filter((_: any, index: number) => index !== currentIndex)
        .slice(0, 6);

    // Serialization helper
    const serialize = (study: any) => {
        if (!study) return null;
        return {
            ...study,
            _id: study._id.toString(),
            categories: Array.isArray(study.categories) ? study.categories.join(' ') : study.categories,
            createdAt: study.createdAt instanceof Date ? study.createdAt.toISOString() : study.createdAt,
            updatedAt: study.updatedAt instanceof Date ? study.updatedAt.toISOString() : study.updatedAt,
        };
    };

    return {
        currentCaseStudy: serialize(currentStudy),
        prevCaseStudy: serialize(prevCaseStudy),
        nextCaseStudy: serialize(nextCaseStudy),
        relatedCaseStudies: relatedCaseStudies.map(serialize)
    };
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const data = await getCaseStudyData(slug);

    if (!data) {
        return notFound();
    }

    const { currentCaseStudy, prevCaseStudy, nextCaseStudy, relatedCaseStudies } = data;

    // We still attempt to load HTML content for studies that might not have full sections in the database
    // This provides a safety net during transition.
    let htmlContent = '';
    try {
        const projectRoot = process.cwd();
        const caseStudiesDir = path.join(projectRoot, 'case_studies');
        let filePath = path.join(caseStudiesDir, slug, 'index.html');

        if (fs.existsSync(filePath)) {
            htmlContent = fs.readFileSync(filePath, 'utf-8');

            // Basic cleanup for hydration
            htmlContent = htmlContent.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
            htmlContent = htmlContent.replace(/\t/g, '');

            // Extract main content
            const mainMatch = htmlContent.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
            let mainContent = mainMatch ? mainMatch[1] : '';

            if (!mainContent) {
                const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*)<\/body>/i);
                mainContent = bodyMatch ? bodyMatch[1] : htmlContent;
                mainContent = mainContent.replace(/<header[\s\S]*?<\/header>/gi, '');
                mainContent = mainContent.replace(/<footer[\s\S]*?<\/footer>/gi, '');
            }

            // Cleanup
            mainContent = mainContent.replace(/<script[\s\S]*?<\/script>/gi, '');
            mainContent = mainContent.replace(/<script[^>]*>/gi, '');
            mainContent = mainContent.replace(/<section[^>]*class="[^"]*case--studies--area[^"]*"[\s\S]*?<\/section>/gi, '');
            mainContent = mainContent.replace(/<section[^>]*class="[^"]*contact--marquee--area[^"]*"[\s\S]*?<\/section>/gi, '');
            mainContent = mainContent.replace(/<div[^>]*class="[^"]*case-study-navigation[^"]*"[\s\S]*?<\/div>/gi, '');

            // Fix paths
            mainContent = mainContent.replace(/<([a-z0-9]+)([\s\S]*?)bv-data-src="([^"]+)"([\s\S]*?)>/gi, (match, tag, p1, p2, p3) => {
                return `<${tag} src="${p2}" ${p1} ${p3} />`;
            });
            mainContent = mainContent.replace(/src="wp-content\//g, 'src="/wp-content/');
            mainContent = mainContent.replace(/src="assets\//g, 'src="/assets/');
            mainContent = mainContent.replace(/href="\.\.\/\.\.\//g, 'href="/');
            mainContent = mainContent.replace(/href="\.\.\//g, 'href="/case-studies/');
            mainContent = mainContent.replace(/href="([^"]*)\/index\.html"/g, 'href="$1"');
            mainContent = mainContent.replace(/href="([^"]*)index\.html"/g, 'href="$1"');
            mainContent = mainContent.replace(/<link[\s\S]*?>/gi, '');
            mainContent = mainContent.replace(/<meta[\s\S]*?>/gi, '');

            htmlContent = mainContent.trim();
        }
    } catch (e) {
        console.error('Error reading HTML content for case study:', e);
    }

    return (
        <CaseStudyPageClient
            htmlContent={htmlContent}
            caseStudyData={currentCaseStudy}
            relatedCaseStudies={relatedCaseStudies}
            prevCaseStudy={prevCaseStudy}
            nextCaseStudy={nextCaseStudy}
        />
    );
}
