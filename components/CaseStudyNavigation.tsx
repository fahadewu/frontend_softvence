'use client';

import { useEffect, useState } from 'react';

interface CaseStudy {
    slug: string;
    title: string;
}

interface CaseStudyNavigationProps {
    prevCaseStudy: CaseStudy | null;
    nextCaseStudy: CaseStudy | null;
}

export default function CaseStudyNavigation({ prevCaseStudy, nextCaseStudy }: CaseStudyNavigationProps) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    if (!isMounted || (!prevCaseStudy && !nextCaseStudy)) {
        return null;
    }

    return (
        <section className="case-study-navigation section section-dark">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        {prevCaseStudy && (
                            <a href={`/case-studies/${prevCaseStudy.slug}`} className="nav-link prev-link">
                                <span className="nav-label">← Previous Project</span>
                                <h4>{prevCaseStudy.title}</h4>
                            </a>
                        )}
                    </div>
                    <div className="col-md-6">
                        {nextCaseStudy && (
                            <a href={`/case-studies/${nextCaseStudy.slug}`} className="nav-link next-link">
                                <span className="nav-label">Next Project →</span>
                                <h4>{nextCaseStudy.title}</h4>
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
}
