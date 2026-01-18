'use client';

import { useEffect } from 'react';
import Header from './Header';
import Footer from './Footer';
import ContactMarquee from './ContactMarquee';
import ContactPopup from './ContactPopup';

interface CaseStudy {
    slug: string;
    title: string;
    categories: string[] | string;
    image?: string;
    sections?: any[];
}

interface CaseStudyPageClientProps {
    htmlContent: string;
    caseStudyData: any;
    relatedCaseStudies: any[];
    prevCaseStudy: any | null;
    nextCaseStudy: any | null;
}

export default function CaseStudyPageClient({
    htmlContent,
    caseStudyData,
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
    }, [caseStudyData]);

    const renderSections = () => {
        if (!caseStudyData || !caseStudyData.sections) return null;

        return caseStudyData.sections.map((section: any, index: number) => {
            switch (section.type) {
                case 'hero':
                    return (
                        <section key={index} className="case--study--hero--area section section-dark">
                            <div className="case--hero--bg"></div>
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <div className="case--hero--content text-center">
                                            <p className="common--sub--heading" data-aos="fade-up" data-aos-duration="1000">{section.subHeading}</p>
                                            <h1 className="common--heading" data-aos="fade-up" data-aos-duration="1000">{section.heading}</h1>
                                            <div className="case--hero--img">
                                                <img src={section.image} className="w-100" alt={section.heading} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    );
                case 'projectInfo':
                    return (
                        <section key={index} className="project--details--area section section-light">
                            <div className="container">
                                <div className="row">
                                    <div className="details--top">
                                        <div className="row">
                                            <div className="col-md-5 mt_30">
                                                <div className="project--info">
                                                    <div className="info" data-aos="fade-up" data-aos-duration="700">
                                                        <p>Client</p>
                                                        <h4>{section.client}</h4>
                                                    </div>
                                                    <div className="info" data-aos="fade-up" data-aos-duration="700">
                                                        <p>Category</p>
                                                        <h4>{section.category}</h4>
                                                    </div>
                                                    {section.liveUrl && (
                                                        <div className="info" data-aos="fade-up" data-aos-duration="700">
                                                            <p>Live Website</p>
                                                            <a href={section.liveUrl} target="_blank" rel="noopener noreferrer">{section.client} Website</a>
                                                        </div>
                                                    )}
                                                    <div className="info" data-aos="fade-up" data-aos-duration="700">
                                                        <p>Services We Provided</p>
                                                        {(Array.isArray(section.services) ? section.services : (section.services || "").split(",")).map((s: string, i: number) => (
                                                            <h4 key={i}>{s.trim()}</h4>
                                                        ))}
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-7 mt_30">
                                                <div className="project--details--desc">
                                                    <h3 className="common--sub--heading text-uppercase" data-aos="fade-up" data-aos-duration="700">Project Details</h3>
                                                    <h4 className="mt_40" data-aos="fade-up" data-aos-duration="700" dangerouslySetInnerHTML={{ __html: section.description }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    );
                case 'fullWidthImage':
                    return (
                        <section key={index} className="section section-light pt-0">
                            <div className="container">
                                <div className="col-md-12">
                                    <div className="case--study--single--img" data-aos="fade-up" data-aos-duration="700">
                                        <img src={section.image} className="w-100" alt="Featured" />
                                    </div>
                                </div>
                            </div>
                        </section>
                    );
                case 'problemChallengesSolution':
                    return (
                        <section key={index} className="section section-light pt-0">
                            <div className="container">
                                <div className="details--bottom">
                                    <div className="problem--statement">
                                        <div className="row">
                                            <div className="col-md-3 mt_20">
                                                <h4 className="common--sub--heading" data-aos="fade-up" data-aos-duration="700">Problem</h4>
                                            </div>
                                            <div className="col-md-9 mt_20">
                                                <div className="desc">
                                                    <p data-aos="fade-up" data-aos-duration="700">{section.problem}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="challenges--area mt_80">
                                        <div className="row">
                                            <div className="col-md-3 mt_20">
                                                <h4 className="common--sub--heading" data-aos="fade-up" data-aos-duration="700">Challenges</h4>
                                            </div>
                                            <div className="col-md-9 mt_20">
                                                <div className="desc">
                                                    <p data-aos="fade-up" data-aos-duration="700" style={{ whiteSpace: 'pre-line' }}>{section.challenges}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="solution--area mt_80">
                                        <div className="row">
                                            <div className="col-md-3 mt_20">
                                                <h4 className="common--sub--heading" data-aos="fade-up" data-aos-duration="700">Solution</h4>
                                            </div>
                                            <div className="col-md-9 mt_20">
                                                <div className="desc">
                                                    <p data-aos="fade-up" data-aos-duration="700">{section.solution}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    );
                case 'gallery':
                    return (
                        <section key={index} className="case--overview--gallery section section-light pt-0">
                            <div className="container">
                                <div className="row">
                                    {(section.images || []).filter((img: string) => img && img.trim() !== "").map((img: string, i: number) => (
                                        <div key={i} className="col-md-6 mt_30">
                                            <div className="img--area" data-aos="fade-up" data-aos-duration="700">
                                                <img src={img} className="w-100" alt={`Gallery ${i}`} />
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>
                    );
                case 'testimonial':
                    return (
                        <section key={index} className="section section-light pt-0 pb-0">
                            <div className="container">
                                <div className="details--bottom">
                                    <div className="single--testimonial" data-aos="fade-up" data-aos-duration="700">
                                        <h4>WHAT THE CLIENT SAYS</h4>
                                        <div className="testi--body">
                                            <p>{section.quote}</p>
                                            <div className="client--profile d-flex align-items-center">
                                                {section.clientImage && (
                                                    <img src={section.clientImage} alt={section.clientName} />
                                                )}
                                                <p>{section.clientName} <span>{section.clientRole}</span></p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    );
                case 'designProcess':
                    return (
                        <section key={index} className="design--process--area section section-dark">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-3 mt_20">
                                        <div className="single--title">
                                            <h3 className="common--sub--heading mt_10" data-aos="fade-up" data-aos-duration="1000">DESIGN PROCESS</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-9 mt_20">
                                        <div className="about--right--text">
                                            <h3 className="common--heading" data-aos="fade-up" data-aos-duration="1000">{section.headline}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {section.steps && section.steps.length > 0 && (
                                <div id="horizontal-scoll">
                                    <div className="horizontal-scoll-wrapper">
                                        <div className="horizontal">
                                            {section.steps.map((step: any, i: number) => (
                                                <div key={i}>
                                                    <div className="design--card" data-aos="fade-In" data-aos-duration="700">
                                                        <h4>{i + 1}. {step.title}</h4>
                                                        <p>{step.description}</p>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}
                        </section>
                    );
                case 'visualDesigns':
                    return (
                        <section key={index} className="visual--design--area section section-light">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-3 mt_20">
                                        <div className="single--title">
                                            <h3 className="common--sub--heading mt_10" data-aos="fade-up" data-aos-duration="1000">VISUAL DESIGNS</h3>
                                        </div>
                                    </div>
                                    <div className="col-md-9 mt_20">
                                        <div className="about--right--text">
                                            <h3 className="common--heading" data-aos="fade-up" data-aos-duration="1000">{section.headline}</h3>
                                        </div>
                                    </div>

                                    <div className="visual--screen">
                                        <div className="row mt_85">
                                            {(section.images || []).filter((img: string) => img && img.trim() !== "").map((img: string, i: number) => {
                                                let colClass = "col-md-4";
                                                let imgBoxClass = "";

                                                // Pattern: 2 small (col-6), 1 big (col-12), 2 semi (col-5/col-7)
                                                const mod = i % 5;
                                                if (mod === 0 || mod === 1) {
                                                    colClass = "col-md-6 mt_20";
                                                    imgBoxClass = "img--small";
                                                } else if (mod === 2) {
                                                    colClass = "col-md-12 mt_20";
                                                    imgBoxClass = "img--big";
                                                } else if (mod === 3) {
                                                    colClass = "col-md-5 mt_20";
                                                    imgBoxClass = "img--semi";
                                                } else if (mod === 4) {
                                                    colClass = "col-md-7 mt_20";
                                                    imgBoxClass = "img--semi";
                                                }

                                                return (
                                                    <div key={i} className={colClass} data-aos={mod % 2 === 0 ? "fade-right" : "fade-left"} data-aos-duration="700">
                                                        <div className={`visual--image ${imgBoxClass}`}>
                                                            <img src={img} className="w-100" alt={`Visual ${i}`} />
                                                        </div>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                    );
                default:
                    return null;
            }
        });
    };

    return (
        <div id="page" className="site">
            <div className="parent--wrapper">
                <Header />
                <main>
                    {caseStudyData?.sections ? (
                        <div className="case-study-dynamic-content">
                            {renderSections()}
                        </div>
                    ) : (
                        <div className="case-study-content" dangerouslySetInnerHTML={{ __html: htmlContent }} suppressHydrationWarning />
                    )}

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
