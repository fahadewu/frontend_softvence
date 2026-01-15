'use client';

import React, { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactMarquee from '@/components/ContactMarquee';
import ContactPopup from '@/components/ContactPopup';
import Preloader from '@/components/Preloader';
import caseStudiesData from '@/data/caseStudies.json';

export default function Work() {
    const gridRef = useRef<HTMLDivElement>(null);
    const isotopeRef = useRef<any>(null);
    const [filterKey, setFilterKey] = useState('*');
    const allCaseStudies = caseStudiesData.caseStudies;

    // Initialize Isotope
    useEffect(() => {
        const initIsotope = () => {
            // Check for global Isotope
            if (typeof window !== 'undefined' && gridRef.current) {
                if ((window as any).Isotope) {
                    isotopeRef.current = new (window as any).Isotope(gridRef.current, {
                        itemSelector: '.col-md-6',
                        layoutMode: 'fitRows',
                        percentPosition: true
                    });
                } else if ((window as any).jQuery && (window as any).jQuery(gridRef.current).isotope) {
                    // Fallback to jQuery Isotope if the global constructor isn't valid but jQuery plugin is
                    const $ = (window as any).jQuery;
                    isotopeRef.current = $(gridRef.current).isotope({
                        itemSelector: '.col-md-6',
                        layoutMode: 'fitRows'
                    });
                    // Wrap the jQuery object to match standard API if needed, or just store the instance
                    // Actually jQuery isotope returns the jQuery object, the instance is data.
                    // We can just use the jQuery method to filter.
                    isotopeRef.current = {
                        arrange: (options: any) => $(gridRef.current).isotope(options),
                        destroy: () => $(gridRef.current).isotope('destroy')
                    }
                }
            }
        };

        // Attempt to init immediately or wait for scripts
        if ((window as any).Isotope || ((window as any).jQuery && (window as any).jQuery.fn.isotope)) {
            initIsotope();
        } else {
            const timer = setTimeout(initIsotope, 1000);
            return () => clearTimeout(timer);
        }

        return () => {
            if (isotopeRef.current) {
                isotopeRef.current.destroy();
            }
        }
    }, []);

    // Apply data-bgc background colors and refresh AOS
    useEffect(() => {
        // Apply background colors from data-bgc attribute
        const overlays = document.querySelectorAll('[data-bgc]');
        overlays.forEach((element) => {
            const bgColor = element.getAttribute('data-bgc');
            if (bgColor) {
                (element as HTMLElement).style.backgroundColor = bgColor;
            }
        });

        // Refresh AOS to ensure animations work
        setTimeout(() => {
            if (typeof window !== 'undefined' && (window as any).AOS) {
                (window as any).AOS.refresh();
            }
        }, 300);
    }, [filterKey]); // Re-apply when filter changes

    useEffect(() => {
        if (isotopeRef.current) {
            isotopeRef.current.arrange({ filter: filterKey });
            // Trigger layout after filtering
            setTimeout(() => {
                if (isotopeRef.current && isotopeRef.current.layout) {
                    isotopeRef.current.layout();
                }
            }, 100);
        }
    }, [filterKey]);

    const handleFilterChange = (filter: string) => {
        setFilterKey(filter);
    };

    return (
        <div id="page" className="site">
            <div className="parent--wrapper">
                <Header />
                <main>
                    <section className="inner--hero--area work--inner--hero section section-light">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="inner--hero--text">
                                        <h1 data-splitting>We Define Excellence</h1>
                                        <h2 data-splitting>
                                            <span className="primary--dark">On Every Works</span>
                                            <svg className="ml_35 char" xmlns="http://www.w3.org/2000/svg" width="110" height="104" viewBox="0 0 110 104" fill="none">
                                                <path d="M55 0L60.0256 50.0829L109.21 39.386L63.1315 59.6421L88.5038 103.114L55 65.55L21.4962 103.114L46.8685 59.6421L0.78978 39.386L49.9744 50.0829L55 0Z" fill="#06540B" />
                                            </svg>
                                        </h2>
                                        <h3 data-splitting>We Craft</h3>
                                        
                                        <a href="/contact" className="rotate--circle--wrapper circle--hero">
                                            <div className="circle--outer">
                                                <img loading="lazy" src="data:image/png+xml;base64,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" alt="Get a Quote" style={{ animation: 'rotate 10s linear infinite' }} />
                                            </div>
                                            <div className="circle--inner">
                                                <p>CLICK <br />HERE!</p>
                                                <svg width="50" height="50" viewBox="0 0 50 50" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M37.6455 30.0625L24.9997 42.7083L12.3538 30.0625" stroke="white" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                    <path d="M25 7.29297L25 42.3555" stroke="white" strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            </div>
                                            <style jsx>{`
                                                @keyframes rotate {
                                                    from { transform: rotate(0deg); }
                                                    to { transform: rotate(360deg); }
                                                }
                                            `}</style>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="case--studies--area work--case--studies section section-dark">
                        <div className="container">
                            <div className="section--title">
                                <p className="common--sub--heading" data-aos="fade-up" data-aos-duration="1000">CASE STUDIES</p>
                                <h3 className="common--heading" data-aos="fade-up" data-aos-duration="1000">
                                    We try our best to innovate, <span className="primary--color">design & <br /> Develop</span> all things together.
                                </h3>
                            </div>
                            <div className="row" data-aos="fade-up" data-aos-duration="1000">
                                <div className="col-md-12">
                                    <div className="case--studies--wrapper">
                                        <div className="filters filter-button-group">
                                            <ul>
                                                <li className={filterKey === '.branding' ? 'active button-click' : 'button-click'} data-filter=".branding" onClick={() => handleFilterChange('.branding')}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                        <path d="M2.25 6.75C3.07843 6.75 3.75 6.07843 3.75 5.25C3.75 4.42157 3.07843 3.75 2.25 3.75C1.42157 3.75 0.75 4.42157 0.75 5.25C0.75 6.07843 1.42157 6.75 2.25 6.75Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M15.75 6.75C16.5784 6.75 17.25 6.07843 17.25 5.25C17.25 4.42157 16.5784 3.75 15.75 3.75C14.9216 3.75 14.25 4.42157 14.25 5.25C14.25 6.07843 14.9216 6.75 15.75 6.75Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M14.25 5.25H11.25" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M6.75 5.25H3.75" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M5.625 12.375V13.875C5.625 14.3325 5.3475 14.73 4.9575 14.895C4.815 14.9625 4.665 15 4.5 15H3C2.3775 15 1.875 14.4975 1.875 13.875V12.375C1.875 11.7525 2.3775 11.25 3 11.25H4.5C5.1225 11.25 5.625 11.7525 5.625 12.375Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M16.125 12.375V13.875C16.125 14.4975 15.6225 15 15 15H13.5C13.335 15 13.185 14.9625 13.0425 14.895C12.6525 14.73 12.375 14.3325 12.375 13.875V12.375C12.375 11.7525 12.8775 11.25 13.5 11.25H15C15.6225 11.25 16.125 11.7525 16.125 12.375Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M11.25 4.125V6.375C11.25 6.99 10.74 7.5 10.125 7.5H7.875C7.26 7.5 6.75 6.99 6.75 6.375V4.125C6.75 3.51 7.26 3 7.875 3H10.125C10.74 3 11.25 3.51 11.25 4.125Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M11.25 5.79688C13.0275 6.69688 14.25 8.63189 14.25 10.8744C14.25 11.0019 14.2425 11.1219 14.2275 11.2494" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M3.7725 11.2494C3.7575 11.1219 3.75 11.0019 3.75 10.8744C3.75 8.63189 4.9725 6.69688 6.75 5.79688" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    Branding
                                                </li>
                                                <li className={filterKey === '.mobile-app' ? 'active button-click' : 'button-click'} data-filter=".mobile-app" onClick={() => handleFilterChange('.mobile-app')}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                        <path d="M2.25 6.75C3.07843 6.75 3.75 6.07843 3.75 5.25C3.75 4.42157 3.07843 3.75 2.25 3.75C1.42157 3.75 0.75 4.42157 0.75 5.25C0.75 6.07843 1.42157 6.75 2.25 6.75Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M15.75 6.75C16.5784 6.75 17.25 6.07843 17.25 5.25C17.25 4.42157 16.5784 3.75 15.75 3.75C14.9216 3.75 14.25 4.42157 14.25 5.25C14.25 6.07843 14.9216 6.75 15.75 6.75Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M14.25 5.25H11.25" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M6.75 5.25H3.75" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M5.625 12.375V13.875C5.625 14.3325 5.3475 14.73 4.9575 14.895C4.815 14.9625 4.665 15 4.5 15H3C2.3775 15 1.875 14.4975 1.875 13.875V12.375C1.875 11.7525 2.3775 11.25 3 11.25H4.5C5.1225 11.25 5.625 11.7525 5.625 12.375Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M16.125 12.375V13.875C16.125 14.4975 15.6225 15 15 15H13.5C13.335 15 13.185 14.9625 13.0425 14.895C12.6525 14.73 12.375 14.3325 12.375 13.875V12.375C12.375 11.7525 12.8775 11.25 13.5 11.25H15C15.6225 11.25 16.125 11.7525 16.125 12.375Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M11.25 4.125V6.375C11.25 6.99 10.74 7.5 10.125 7.5H7.875C7.26 7.5 6.75 6.99 6.75 6.375V4.125C6.75 3.51 7.26 3 7.875 3H10.125C10.74 3 11.25 3.51 11.25 4.125Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M11.25 5.79688C13.0275 6.69688 14.25 8.63189 14.25 10.8744C14.25 11.0019 14.2425 11.1219 14.2275 11.2494" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M3.7725 11.2494C3.7575 11.1219 3.75 11.0019 3.75 10.8744C3.75 8.63189 4.9725 6.69688 6.75 5.79688" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    Mobile App
                                                </li>
                                                <li className={filterKey === '.ui-ux' ? 'active button-click' : 'button-click'} data-filter=".ui-ux" onClick={() => handleFilterChange('.ui-ux')}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                        <path d="M2.25 6.75C3.07843 6.75 3.75 6.07843 3.75 5.25C3.75 4.42157 3.07843 3.75 2.25 3.75C1.42157 3.75 0.75 4.42157 0.75 5.25C0.75 6.07843 1.42157 6.75 2.25 6.75Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M15.75 6.75C16.5784 6.75 17.25 6.07843 17.25 5.25C17.25 4.42157 16.5784 3.75 15.75 3.75C14.9216 3.75 14.25 4.42157 14.25 5.25C14.25 6.07843 14.9216 6.75 15.75 6.75Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M14.25 5.25H11.25" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M6.75 5.25H3.75" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M5.625 12.375V13.875C5.625 14.3325 5.3475 14.73 4.9575 14.895C4.815 14.9625 4.665 15 4.5 15H3C2.3775 15 1.875 14.4975 1.875 13.875V12.375C1.875 11.7525 2.3775 11.25 3 11.25H4.5C5.1225 11.25 5.625 11.7525 5.625 12.375Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M16.125 12.375V13.875C16.125 14.4975 15.6225 15 15 15H13.5C13.335 15 13.185 14.9625 13.0425 14.895C12.6525 14.73 12.375 14.3325 12.375 13.875V12.375C12.375 11.7525 12.8775 11.25 13.5 11.25H15C15.6225 11.25 16.125 11.7525 16.125 12.375Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M11.25 4.125V6.375C11.25 6.99 10.74 7.5 10.125 7.5H7.875C7.26 7.5 6.75 6.99 6.75 6.375V4.125C6.75 3.51 7.26 3 7.875 3H10.125C10.74 3 11.25 3.51 11.25 4.125Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M11.25 5.79688C13.0275 6.69688 14.25 8.63189 14.25 10.8744C14.25 11.0019 14.2425 11.1219 14.2275 11.2494" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M3.7725 11.2494C3.7575 11.1219 3.75 11.0019 3.75 10.8744C3.75 8.63189 4.9725 6.69688 6.75 5.79688" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    UI/UX Design
                                                </li>
                                                <li className={filterKey === '.vibe-coding' ? 'active button-click' : 'button-click'} data-filter=".vibe-coding" onClick={() => handleFilterChange('.vibe-coding')}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                        <path d="M2.25 6.75C3.07843 6.75 3.75 6.07843 3.75 5.25C3.75 4.42157 3.07843 3.75 2.25 3.75C1.42157 3.75 0.75 4.42157 0.75 5.25C0.75 6.07843 1.42157 6.75 2.25 6.75Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M15.75 6.75C16.5784 6.75 17.25 6.07843 17.25 5.25C17.25 4.42157 16.5784 3.75 15.75 3.75C14.9216 3.75 14.25 4.42157 14.25 5.25C14.25 6.07843 14.9216 6.75 15.75 6.75Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M14.25 5.25H11.25" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M6.75 5.25H3.75" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M5.625 12.375V13.875C5.625 14.3325 5.3475 14.73 4.9575 14.895C4.815 14.9625 4.665 15 4.5 15H3C2.3775 15 1.875 14.4975 1.875 13.875V12.375C1.875 11.7525 2.3775 11.25 3 11.25H4.5C5.1225 11.25 5.625 11.7525 5.625 12.375Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M16.125 12.375V13.875C16.125 14.4975 15.6225 15 15 15H13.5C13.335 15 13.185 14.9625 13.0425 14.895C12.6525 14.73 12.375 14.3325 12.375 13.875V12.375C12.375 11.7525 12.8775 11.25 13.5 11.25H15C15.6225 11.25 16.125 11.7525 16.125 12.375Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M11.25 4.125V6.375C11.25 6.99 10.74 7.5 10.125 7.5H7.875C7.26 7.5 6.75 6.99 6.75 6.375V4.125C6.75 3.51 7.26 3 7.875 3H10.125C10.74 3 11.25 3.51 11.25 4.125Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M11.25 5.79688C13.0275 6.69688 14.25 8.63189 14.25 10.8744C14.25 11.0019 14.2425 11.1219 14.2275 11.2494" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M3.7725 11.2494C3.7575 11.1219 3.75 11.0019 3.75 10.8744C3.75 8.63189 4.9725 6.69688 6.75 5.79688" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    Vibe Coding
                                                </li>
                                                <li className={filterKey === '.web-develop' ? 'active button-click' : 'button-click'} data-filter=".web-develop" onClick={() => handleFilterChange('.web-develop')}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                                                        <path d="M2.25 6.75C3.07843 6.75 3.75 6.07843 3.75 5.25C3.75 4.42157 3.07843 3.75 2.25 3.75C1.42157 3.75 0.75 4.42157 0.75 5.25C0.75 6.07843 1.42157 6.75 2.25 6.75Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M15.75 6.75C16.5784 6.75 17.25 6.07843 17.25 5.25C17.25 4.42157 16.5784 3.75 15.75 3.75C14.9216 3.75 14.25 4.42157 14.25 5.25C14.25 6.07843 14.9216 6.75 15.75 6.75Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M14.25 5.25H11.25" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M6.75 5.25H3.75" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M5.625 12.375V13.875C5.625 14.3325 5.3475 14.73 4.9575 14.895C4.815 14.9625 4.665 15 4.5 15H3C2.3775 15 1.875 14.4975 1.875 13.875V12.375C1.875 11.7525 2.3775 11.25 3 11.25H4.5C5.1225 11.25 5.625 11.7525 5.625 12.375Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M16.125 12.375V13.875C16.125 14.4975 15.6225 15 15 15H13.5C13.335 15 13.185 14.9625 13.0425 14.895C12.6525 14.73 12.375 14.3325 12.375 13.875V12.375C12.375 11.7525 12.8775 11.25 13.5 11.25H15C15.6225 11.25 16.125 11.7525 16.125 12.375Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M11.25 4.125V6.375C11.25 6.99 10.74 7.5 10.125 7.5H7.875C7.26 7.5 6.75 6.99 6.75 6.375V4.125C6.75 3.51 7.26 3 7.875 3H10.125C10.74 3 11.25 3.51 11.25 4.125Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M11.25 5.79688C13.0275 6.69688 14.25 8.63189 14.25 10.8744C14.25 11.0019 14.2425 11.1219 14.2275 11.2494" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                        <path d="M3.7725 11.2494C3.7575 11.1219 3.75 11.0019 3.75 10.8744C3.75 8.63189 4.9725 6.69688 6.75 5.79688" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    Web Development
                                                </li>
                                            </ul>
                                        </div>

                                        <div className="row grid case-gallery" ref={gridRef}>
                                            {allCaseStudies.map((caseStudy) => (
                                                <div key={caseStudy.id} className={`col-md-6 mt_85 ${caseStudy.categories.join(' ')}`}>
                                                    <a href={`/case-studies/${caseStudy.slug}`} className="case--item">
                                                        <div className="img--area">
                                                            <div
                                                                className="img-overlay"
                                                                data-bgc="#FFB748"
                                                                data-aos="reveal-bottom"
                                                            ></div>
                                                            <img
                                                                className="bv-lazyload-tag-img"
                                                                loading="lazy"
                                                                src={caseStudy.image}
                                                                alt={caseStudy.title}
                                                                onError={(e) => {
                                                                    (e.target as HTMLImageElement).src = `https://placehold.co/600x600?text=${encodeURIComponent(caseStudy.title)}`;
                                                                }}
                                                            />

                                                            <div className="case--cursor">
                                                                view<br />
                                                                case study
                                                            </div>
                                                        </div>
                                                        <div className="content">
                                                            <h3>{caseStudy.title}</h3>
                                                            <p>{caseStudy.categories.join(' ')}</p>
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

                    <section className="sweet--number--area" data-aos="fade-In" data-aos-duration="1000">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="sweet--top--content">
                                        <div className="title">
                                            <h3 className="common--heading" data-aos="fade-up" data-aos-duration="1000">
                                                Ready to Start <span className="primary--dark">Your Next</span><br />
                                                <span className="primary--dark">Project?</span>
                                                <img src="/assets/images/start-primary.svg" className="bv-tag-attr-replace bv-lazyload-tag-img" loading="lazy" alt="" />
                                            </h3>

                                            <div className="sweet--rotate--wrapper" data-aos="zoom-in" data-aos-duration="1000">
                                                <a href="#" className="rotate--circle--wrapper contact--toggle">
                                                    <div className="circle--outer">
                                                        <img loading="lazy" src="data:image/png+xml;base64,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" alt="" />
                                                    </div>
                                                    <div className="circle--inner">
                                                        <p>CLICK <br />HERE!</p>
                                                        <svg width={50} height={50} viewBox="0 0 50 50" fill="none"
                                                            xmlns="http://www.w3.org/2000/svg">
                                                            <path d="M37.6455 30.0625L24.9997 42.7083L12.3538 30.0625"
                                                                stroke="white" strokeWidth="4" strokeMiterlimit="10"
                                                                strokeLinecap="round" strokeLinejoin="round" />
                                                            <path d="M25 7.29297L25 42.3555" stroke="white" strokeWidth="4"
                                                                strokeMiterlimit="10" strokeLinecap="round"
                                                                strokeLinejoin="round" />
                                                        </svg>
                                                    </div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
                <ContactMarquee />
                <ContactPopup />
                <Footer />
            </div>
        </div>
    );
}
