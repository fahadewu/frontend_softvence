'use client';

import { useEffect } from 'react';

interface CaseStudyContentProps {
    htmlContent: string;
}

export default function CaseStudyContent({ htmlContent }: CaseStudyContentProps) {
    useEffect(() => {
        // Initialize libraries after content is mounted
        if (typeof window !== 'undefined') {
            if ((window as any).Splitting) {
                (window as any).Splitting();
            }
            
            setTimeout(() => {
                if ((window as any).AOS) {
                    (window as any).AOS.refresh();
                }
                if ((window as any).ScrollTrigger) {
                    (window as any).ScrollTrigger.refresh();
                }
            }, 500);
        }
    }, []);

    return <div className="case-study-content" dangerouslySetInnerHTML={{ __html: htmlContent }} suppressHydrationWarning />;
}
