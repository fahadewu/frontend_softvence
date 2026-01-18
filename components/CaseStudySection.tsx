'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import caseStudiesData from '@/data/caseStudies.json';

export default function CaseStudySection() {
    const sectionRef = useRef<HTMLElement>(null);
    const circleRef = useRef<HTMLDivElement>(null);
    const [filter, setFilter] = useState('*');

    useEffect(() => {
        let ctx: any;
        let initInterval: NodeJS.Timeout;

        const initAnimation = () => {
            const winAny = window as any;
            const gsap = winAny.gsap;
            const ScrollTrigger = winAny.ScrollTrigger;

            if (!gsap || !ScrollTrigger) {
                return false;
            }

            // Only register if not already done (gsap handles this safely though)
            gsap.registerPlugin(ScrollTrigger);

            const section = sectionRef.current;
            const circle = circleRef.current;

            if (section && circle && !ctx) {
                ctx = gsap.context(() => {
                    gsap.fromTo(circle,
                        { width: 0, height: 0 },
                        {
                            width: '10000px',
                            height: '10000px',
                            ease: 'none',
                            scrollTrigger: {
                                trigger: section,
                                start: '-8% center',
                                end: 'center center',
                                scrub: 0.5,
                                invalidateOnRefresh: true,
                            }
                        }
                    );
                }, section);
                return true;
            }
            return !!ctx;
        };

        if (typeof window !== 'undefined') {
            // Robust Polling Strategy:
            // Attempt to initialize every 200ms until successful or timeout
            // Also force refresh for a few seconds to handle layout shifts
            let attempts = 0;
            const maxAttempts = 20; // 4 seconds

            initInterval = setInterval(() => {
                attempts++;
                const success = initAnimation();

                if (success) {
                    // Force refresh to catch layout updates
                    const winAny = window as any;
                    if (winAny.ScrollTrigger) winAny.ScrollTrigger.refresh();
                }

                if (attempts >= maxAttempts) {
                    clearInterval(initInterval);
                }
            }, 200);
        }

        return () => {
            if (initInterval) clearInterval(initInterval);
            if (ctx) ctx.revert();
        };
    }, []);

    const handleFilterClick = (filterValue: string) => {
        setFilter(filterValue);
    };

    const filterItems = [
        { name: 'All', value: '*' },
        { name: 'Branding', value: '.branding' },
        { name: 'Mobile App', value: '.mobile-app' },
        { name: 'UI/UX Design', value: '.ui-ux' },
        { name: 'Vibe Coding', value: '.vibe-coding' },
        { name: 'Web Development', value: '.web-develop' }
    ];

    const allCaseStudies = caseStudiesData.caseStudies;

    const filteredCases = filter === '*'
        ? allCaseStudies.slice(0, 6)
        : allCaseStudies.filter(item => item.categories.some((c: string) => c.toLowerCase().includes(filter.replace('.', ''))));

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.currentTarget;
        const cursor = target.querySelector('.case--cursor') as HTMLElement;
        if (cursor) {
            const rect = target.getBoundingClientRect();
            const x = e.clientX - rect.left + 20;
            const y = e.clientY - rect.top + 20;

            cursor.style.left = `${x}px`;
            cursor.style.top = `${y}px`;
            cursor.style.opacity = '1';
            cursor.style.transform = 'scale(1) translate(-50%, -50%)';
        }
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLDivElement>) => {
        const target = e.currentTarget;
        const cursor = target.querySelector('.case--cursor') as HTMLElement;
        if (cursor) {
            cursor.style.opacity = '0';
            cursor.style.transform = 'scale(0) translate(-50%, -50%)';
        }
    };

    return (
        <section ref={sectionRef} className="case--studies--area home--case section section-dark">
            <div ref={circleRef} className="scale--circle"></div>
            <div className="container">
                <div className="section--title">
                    <p className="common--sub--heading" data-aos="fade-up" data-aos-duration="1000">CASE STUDIES</p>
                    <h3 className="common--heading" data-aos="fade-up" data-aos-duration="1000">We try our best to
                        innovate, <span className="primary--color">design & <br /> Develop</span> all things together.
                    </h3>
                </div>
                <div className="row" data-aos="fade-up" data-aos-duration="1000">
                    <div className="col-md-12">
                        <div className="case--studies--wrapper">
                            <div className="filters filter-button-group">
                                <ul>
                                    {filterItems.map((item, index) => (
                                        <li
                                            key={index}
                                            className={`button-click ${filter === item.value ? 'active' : ''}`}
                                            onClick={() => handleFilterClick(item.value)}
                                            data-filter={item.value}
                                        >
                                            {item.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="row case-gallery">
                                {filteredCases.map((item, index) => (
                                    <div key={index} className={`col-md-6 mt_85 ${item.categories.join(' ')}`}>
                                        <a href={`/case-studies/${item.slug}`} className="case--item">
                                            <div className="img--area" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave}>
                                                <div className="img-overlay" data-bgc="#FFB748" data-aos="reveal-bottom"></div>
                                                <img
                                                    loading="lazy"
                                                    src={item.image}
                                                    alt={item.title}
                                                />
                                                <div className="case--cursor" style={{ pointerEvents: 'none', transform: 'translate(-50%, -50%) scale(0)', opacity: 0, position: 'absolute' }}>
                                                    view<br />
                                                    case study
                                                </div>
                                            </div>
                                            <div className="content">
                                                <h3>{item.title}</h3>
                                                <p>{item.description}</p>
                                            </div>
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-5">
                    <div className="col-md-12 text-center" data-aos="fade-up" data-aos-duration="1000">
                        <a href="/work" className="button buttonv2 button-click">View All Case Studies</a>
                    </div>
                </div>
            </div>
        </section>
    );
}
