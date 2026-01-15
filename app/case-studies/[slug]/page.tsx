import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import CaseStudyPageClient from '@/components/CaseStudyPageClient';
import caseStudiesData from '@/data/caseStudies.json';

// Get all case studies from JSON
const allCaseStudies = caseStudiesData.caseStudies.map(cs => ({
    slug: cs.slug,
    title: cs.title,
    categories: cs.categories.join(' ')
}));

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;

    // Find current case study index
    const currentIndex = allCaseStudies.findIndex(cs => cs.slug === slug);
    if (currentIndex === -1) {
        return notFound();
    }

    // Get previous and next case studies
    const prevCaseStudy = currentIndex > 0 ? allCaseStudies[currentIndex - 1] : null;
    const nextCaseStudy = currentIndex < allCaseStudies.length - 1 ? allCaseStudies[currentIndex + 1] : null;

    // Get related case studies (excluding current one)
    const relatedCaseStudies = allCaseStudies.filter((_, index) => index !== currentIndex).slice(0, 6);

    // Correct path: project root/case_studies
    const projectRoot = process.cwd();
    const caseStudiesDir = path.join(projectRoot, 'case_studies');
    let filePath = path.join(caseStudiesDir, slug, 'index.html');

    if (!fs.existsSync(filePath)) {
        return notFound();
    }

    let htmlContent = fs.readFileSync(filePath, 'utf-8');

    // Normalize line endings and whitespace to prevent hydration mismatches
    htmlContent = htmlContent.replace(/\r\n/g, '\n').replace(/\r/g, '\n');
    // Normalize tabs to spaces
    htmlContent = htmlContent.replace(/\t/g, '');

    // Extract main content only (everything inside <main> tag)
    const mainMatch = htmlContent.match(/<main[^>]*>([\s\S]*?)<\/main>/i);
    let mainContent = mainMatch ? mainMatch[1] : '';

    if (!mainContent) {
        // Fallback: try to extract body content
        const bodyMatch = htmlContent.match(/<body[^>]*>([\s\S]*)<\/body>/i);
        mainContent = bodyMatch ? bodyMatch[1] : htmlContent;
        
        // Remove Header if we're using body
        mainContent = mainContent.replace(/<header[\s\S]*?<\/header>/gi, '');
        // Remove Footer
        mainContent = mainContent.replace(/<footer[\s\S]*?<\/footer>/gi, '');
    }

    // Remove ALL Scripts (including those in the body)
    mainContent = mainContent.replace(/<script[\s\S]*?<\/script>/gi, '');
    mainContent = mainContent.replace(/<script[^>]*>/gi, ''); // Remove unclosed script tags

    // Remove existing related case studies section (we'll add our own)
    mainContent = mainContent.replace(/<section[^>]*class="[^"]*case--studies--area[^"]*"[\s\S]*?<\/section>/gi, '');

    // Remove contact marquee (we'll add it via component)
    mainContent = mainContent.replace(/<section[^>]*class="[^"]*contact--marquee--area[^"]*"[\s\S]*?<\/section>/gi, '');

    // Remove navigation sections if they exist
    mainContent = mainContent.replace(/<div[^>]*class="[^"]*case-study-navigation[^"]*"[\s\S]*?<\/div>/gi, '');

    // Fix image paths: Use bv-data-src as src if available
    mainContent = mainContent.replace(/<img([^>]*)bv-data-src="([^"]+)"([^>]*)>/g, (match, p1, p2, p3) => {
        return `<img src="${p2}" ${p1} ${p3} />`;
    });

    // Fix any relative wp-content/assets paths
    mainContent = mainContent.replace(/src="wp-content\//g, 'src="/wp-content/');
    mainContent = mainContent.replace(/src="assets\//g, 'src="/assets/');
    mainContent = mainContent.replace(/href="\.\.\/\.\.\//g, 'href="/');
    mainContent = mainContent.replace(/href="\.\.\//g, 'href="/case-studies/');
    
    // Remove link tags (stylesheets that might conflict) - but keep them if inside head
    mainContent = mainContent.replace(/<link[\s\S]*?>/gi, '');
    
    // Remove meta tags
    mainContent = mainContent.replace(/<meta[\s\S]*?>/gi, '');
    
    // Simple trim only - avoid aggressive whitespace removal
    mainContent = mainContent.trim();

    return (
        <CaseStudyPageClient 
            htmlContent={mainContent}
            relatedCaseStudies={relatedCaseStudies}
            prevCaseStudy={prevCaseStudy}
            nextCaseStudy={nextCaseStudy}
        />
    );
}
