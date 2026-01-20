import WorkListClient from '@/components/WorkListClient';
import dbConnect from '@/lib/db';
import CaseStudy from '@/models/CaseStudy';

// Force dynamic rendering
export const dynamic = 'force-dynamic';

async function getCaseStudies() {
    try {
        await dbConnect();
        const studies = await CaseStudy.find({}).sort({ createdAt: -1 }).lean();
        return studies.map(cs => ({
            ...cs,
            _id: cs._id.toString(),
            createdAt: cs.createdAt instanceof Date ? cs.createdAt.toISOString() : cs.createdAt,
            updatedAt: cs.updatedAt instanceof Date ? cs.updatedAt.toISOString() : cs.updatedAt,
        }));
    } catch (error) {
        console.error('Failed to fetch case studies:', error);
        return [];
    }
}

export default async function Work() {
    const caseStudies = await getCaseStudies();
    return (
        <WorkListClient initialCaseStudies={caseStudies} />
    );
}
