'use client';

import { useEffect, useState } from 'react';

interface CaseStudy {
    slug: string;
    title: string;
    categories: string;
}

interface RelatedCaseStudiesProps {
    relatedCaseStudies: CaseStudy[];
}

export default function RelatedCaseStudies({ relatedCaseStudies }: RelatedCaseStudiesProps) {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        
        // Initialize Owl Carousel after component mounts
        const initCarousel = () => {
            if (typeof window !== 'undefined' && (window as any).jQuery && (window as any).jQuery.fn.owlCarousel) {
                (window as any).jQuery('.related--slider').owlCarousel({
                    loop: true,
                    margin: 30,
                    nav: false,
                    dots: false,
                    autoplay: false,
                    responsive: {
                        0: { items: 1 },
                        600: { items: 2 },
                        1000: { items: 3 }
                    }
                });
            }
        };

        // Wait for jQuery and owl carousel to load
        const timer = setTimeout(initCarousel, 500);
        return () => clearTimeout(timer);
    }, []);

    if (!isMounted) {
        return null;
    }

    return (
        <section className="case--studies--area related--studies--area section section-dark">
            <div className="container">
                <div className="section--title">
                    <p className="common--sub--heading">RELATED CASE STUDIES</p>
                    <h3 className="common--heading">
                        We try our best to innovate, <span className="primary--color">design & <br /> Develop</span> all things together.
                    </h3>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <div className="related--carousel--wrapper">
                            <div className="related--case--cursor">Drag</div>
                            <div className="owl-carousel related--slider">
                                {relatedCaseStudies.map((caseStudy) => (
                                    <div key={caseStudy.slug} className="item">
                                        <a href={`/case-studies/${caseStudy.slug}`} className="case--item">
                                            <div className="img--area">
                                                <div className="img-overlay" data-bgc="#FFB748"></div>
                                                <img
                                                    src={`https://softvence.agency/wp-content/uploads/al_opt_content/IMAGE/softvence.agency/wp-content/uploads/2025/11/${caseStudy.slug.includes('oneisone') ? 'Web-Devlopment-Cover-02' : caseStudy.slug.includes('website-development-for') ? 'Web-Development-Cover-01' : caseStudy.slug.includes('connectly') ? 'download-88-1' : caseStudy.slug.includes('e-commerce') ? 'UI-UX-portfolio-M1' : caseStudy.slug.includes('website-development') && !caseStudy.slug.includes('for') ? 'Web-Devlopment-Cover-03' : caseStudy.slug.includes('theta') ? 'Dashboard-Cover' : caseStudy.slug.includes('harmonize') ? 'UI-UX-portfolio1-1-scaled' : caseStudy.slug.includes('crafting') ? 'working-with-calculator' : caseStudy.slug.includes('bank') ? 'Futuristic-Abstract-Design' : 'Thumnail-collin'}.${caseStudy.slug.includes('connectly') || caseStudy.slug.includes('harmonize') || caseStudy.slug.includes('crafting') || caseStudy.slug.includes('bank') || caseStudy.slug.includes('colin') ? 'jpg' : caseStudy.slug.includes('theta') ? 'png' : 'png'}`.replace('.jpg.png', '.png').replace('.png.jpg', '.jpg')}
                                                    loading="lazy"
                                                    alt={caseStudy.title}
                                                />
                                            </div>
                                            <div className="content">
                                                <h3>{caseStudy.title}</h3>
                                                <p>{caseStudy.categories}</p>
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
    );
}
