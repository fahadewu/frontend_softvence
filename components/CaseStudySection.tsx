'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function CaseStudySection() {
    const sectionRef = useRef<HTMLElement>(null);
    const circleRef = useRef<HTMLDivElement>(null);
    const [filter, setFilter] = useState('*');

    useEffect(() => {
        if (typeof window !== 'undefined') {
            gsap.registerPlugin(ScrollTrigger);

            const section = sectionRef.current;
            const circle = circleRef.current;

            if (section && circle) {
                // Animation
                // Animation matching softvence.agency with sharp rendering fix
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
                        }
                    }
                );
            }
        }
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

    const caseStudies = [
        {
            title: 'Oneisone Entertainment',
            category: 'Branding & Design',
            image: 'https://softvence.agency/wp-content/uploads/2025/11/Web-Devlopment-Cover-02.png',
            link: '/case-studies/oneisone-entertainment-2',
            classes: 'ui-ux vibe-coding'
        },
        {
            title: 'Website Development for a Modern',
            category: 'Branding & Design',
            image: 'https://softvence.agency/wp-content/uploads/2025/11/Web-Development-Cover-01.png',
            link: '/case-studies/website-development-for-a-modern',
            classes: 'ui-ux web-develop'
        },
        {
            title: 'Social & Event Networking App',
            category: 'Branding & Design',
            image: 'https://softvence.agency/wp-content/uploads/2025/11/download-88-1.png',
            link: '/case-studies/connectly-social-event-networking-app',
            classes: 'mobile-app ui-ux'
        },
        {
            title: 'E-commerce Website Dashboard',
            category: 'Branding & Design',
            image: 'https://softvence.agency/wp-content/uploads/2025/11/UI-UX-portfolio-M1.jpg',
            link: '/case-studies/e-commerce-website-dashboard-ui-design',
            classes: 'ui-ux web-develop'
        },
        {
            title: 'Website Development',
            category: 'Branding & Design',
            image: 'https://softvence.agency/wp-content/uploads/2025/11/Web-Devlopment-Cover-03.png',
            link: '/case-studies/website-development',
            classes: 'ui-ux vibe-coding'
        },
        {
            title: 'Theta Analyzers',
            category: 'Branding & Design',
            image: 'https://softvence.agency/wp-content/uploads/2025/11/Dashboard-Cover.png',
            link: '/case-studies/theta-analyzers',
            classes: 'ui-ux'
        },
        {
            title: 'Harmonize – Venue Booking App',
            category: 'Branding & Design',
            image: 'https://softvence.agency/wp-content/uploads/2025/11/UI-UX-portfolio1-1-scaled.jpg',
            link: '/case-studies/harmonize-venue-booking-app',
            classes: 'mobile-app'
        },
        {
            title: 'Crafting Business',
            category: 'Branding & Design',
            image: 'https://softvence.agency/wp-content/uploads/2025/06/working-with-calculator.jpg',
            link: '/case-studies/crafting-brand',
            classes: 'branding ui-ux web-develop'
        },
        {
            title: 'Bank Made',
            category: 'Branding & Design',
            image: 'https://softvence.agency/wp-content/uploads/2025/06/Futuristic-Abstract-Design.jpg',
            link: '/case-studies/bank-made',
            classes: 'branding ui-ux'
        },
        {
            title: 'Colin Wolf Pack',
            category: 'Branding & Design',
            image: 'https://softvence.agency/wp-content/uploads/2024/03/Thumnail-collin.png',
            link: '/case-studies/colin-wolf-pack',
            classes: 'branding mobile-app ui-ux web-develop'
        }
    ];

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

    const filteredCases = filter === '*'
        ? caseStudies
        : caseStudies.filter(item => item.classes.includes(filter.replace('.', '')));

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
                                            {/* Icons can be added back if needed, simplifying for now or copying SVGs */}
                                            {item.name}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="row case-gallery">
                                {filteredCases.map((item, index) => (
                                    <div key={index} className={`col-md-6 mt_85 ${item.classes}`}>
                                        <a href={item.link} className="case--item">
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
                                                <p>{item.category}</p>
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
                        <Link href="/work" className="button buttonv2 button-click">View All Case Studies</Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
