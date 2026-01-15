'use client';

import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import ContactMarquee from './ContactMarquee';
import ContactPopup from './ContactPopup';

interface CaseStudy {
    slug: string;
    title: string;
    categories: string;
}

interface CaseStudyPageClientProps {
    htmlContent: string;
    relatedCaseStudies: CaseStudy[];
    prevCaseStudy: CaseStudy | null;
    nextCaseStudy: CaseStudy | null;
}

export default function CaseStudyPageClient({ 
    htmlContent, 
    relatedCaseStudies, 
    prevCaseStudy, 
    nextCaseStudy 
}: CaseStudyPageClientProps) {
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

            // Initialize Owl Carousel for related case studies
            setTimeout(() => {
                if ((window as any).$ && (window as any).$.fn.owlCarousel) {
                    const $ = (window as any).$;
                    const carousel = $('.related--carousel');
                    if (carousel.length && !carousel.hasClass('owl-loaded')) {
                        carousel.owlCarousel({
                            loop: false,
                            margin: 30,
                            nav: true,
                            dots: false,
                            autoplay: false,
                            navText: ['<', '>'],
                            responsive: {
                                0: {
                                    items: 1
                                },
                                600: {
                                    items: 2
                                },
                                1000: {
                                    items: 3
                                }
                            }
                        });
                    }
                }
            }, 1000);
        }
    }, []);

    return (
        <div id="page" className="site">
            <div className="parent--wrapper">
                <Header />
                <main>
                    <div className="case-study-content" dangerouslySetInnerHTML={{ __html: htmlContent }} suppressHydrationWarning />
                </main>
                <ContactMarquee />
                <ContactPopup />
                <Footer />
            </div>
        </div>
    );
}
