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
    image?: string;
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
    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.currentTarget;
        const cursor = target.querySelector('.related--case--cursor') as HTMLElement;
        if (cursor) {
            const rect = target.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            cursor.style.left = `${x}px`;
            cursor.style.top = `${y}px`;
            cursor.style.opacity = '1';
            cursor.style.transform = 'scale(1) translate(-50%, -50%)';
        }
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.currentTarget;
        const cursor = target.querySelector('.related--case--cursor') as HTMLElement;
        if (cursor) {
            cursor.style.opacity = '0';
            cursor.style.transform = 'scale(0) translate(-50%, -50%)';
        }
    };

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
                    const carousel = $('.related--slider');
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

                    {/* Related Case Studies */}
                    {relatedCaseStudies.length > 0 && (
                        <section className="case--studies--area related--studies--area section section-dark">
                            <div className="container">
                                <div className="section--title">
                                    <p className="common--sub--heading" data-aos="fade-up" data-aos-duration="1000">RELATED CASE STUDIES</p>
                                    <h3 className="common--heading" data-aos="fade-up" data-aos-duration="1000">
                                        We try our best to innovate, <span className="primary--color">design & <br /> Develop</span> all things together.
                                    </h3>
                                </div>
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="related--carousel--wrapper" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>

                                            <div className="related--case--cursor" style={{ pointerEvents: 'none', transform: 'translate(-50%, -50%) scale(0)', opacity: 0, position: 'absolute', zIndex: 9 }}>Drag</div>

                                            <div className="owl-carousel related--slider" data-aos="fade-In" data-aos-duration="2000">
                                                {relatedCaseStudies.map((study) => (
                                                    <div key={study.slug} className="item" data-aos="fade-up" data-aos-duration="700">
                                                        <a href={`/case-studies/${study.slug}`} className="case--item">
                                                            <div className="img--area">
                                                                <div className="img-overlay" data-bgc="#FFB748" data-aos="reveal-bottom"></div>
                                                                {study.image ? (
                                                                    <img
                                                                        src={study.image}
                                                                        alt={study.title}
                                                                        loading="lazy"
                                                                    />
                                                                ) : (
                                                                    <div style={{ background: '#222', height: '100%', width: '100%' }}></div>
                                                                )}
                                                            </div>
                                                            <div className="content">
                                                                <h3>{study.title}</h3>
                                                                {study.categories && <p>{study.categories}</p>}
                                                            </div>
                                                        </a>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Navigation */}
                    <div className="case-study-navigation section-dark" style={{ padding: '50px 0', borderTop: '1px solid #333' }}>
                        <div className="container">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-5 text-left">
                                    {prevCaseStudy && (
                                        <a href={`/case-studies/${prevCaseStudy.slug}`} className="nav-link prev-link" style={{ color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                                            <span style={{ fontSize: '14px', opacity: 0.7, marginBottom: '5px' }}>Previous Project</span>
                                            <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{prevCaseStudy.title}</span>
                                        </a>
                                    )}
                                </div>
                                <div className="col-2 text-center">
                                    <a href="/case-studies" className="grid-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <rect x="3" y="3" width="7" height="7" fill="white" />
                                            <rect x="14" y="3" width="7" height="7" fill="white" />
                                            <rect x="3" y="14" width="7" height="7" fill="white" />
                                            <rect x="14" y="14" width="7" height="7" fill="white" />
                                        </svg>
                                    </a>
                                </div>
                                <div className="col-5 text-right">
                                    {nextCaseStudy && (
                                        <a href={`/case-studies/${nextCaseStudy.slug}`} className="nav-link next-link" style={{ color: '#fff', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
                                            <span style={{ fontSize: '14px', opacity: 0.7, marginBottom: '5px' }}>Next Project</span>
                                            <span style={{ fontSize: '18px', fontWeight: 'bold' }}>{nextCaseStudy.title}</span>
                                        </a>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <ContactMarquee />
                <ContactPopup />
                <Footer />
            </div>
        </div>
    );
}
