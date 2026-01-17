'use client';

import React, { useEffect, useRef } from 'react';

interface ProcessStep {
    title: string;
    description: string;
}

interface ServiceProcessScrollProps {
    serviceTitle: string;
    processSteps: ProcessStep[];
}

export default function ServiceProcessScroll({ serviceTitle, processSteps }: ServiceProcessScrollProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const horizontalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Dynamic import for GSAP to avoid SSR issues
        const initGsap = async () => {
            const gsap = (await import('gsap')).default;
            const ScrollTrigger = (await import('gsap/ScrollTrigger')).default;

            gsap.registerPlugin(ScrollTrigger);

            const horizontal = horizontalRef.current;
            const scrollContainer = scrollContainerRef.current;

            if (horizontal && scrollContainer) {
                // Ensure proper cleaning before creating new animation
                const triggers = ScrollTrigger.getAll();
                triggers.forEach(trigger => {
                    if (trigger.vars.trigger === horizontal || trigger.vars.trigger === ".horizontal") {
                        trigger.kill();
                    }
                });

                // Helper function to calculate scroll width minus viewport width
                const getScrollAmount = () => {
                    return -(horizontal.scrollWidth - window.innerWidth);
                };

                // Only enable horizontal scroll on desktop
                const mm = gsap.matchMedia();

                mm.add("(min-width: 992px)", () => {
                    gsap.to(horizontal, {
                        x: () => -1 * horizontal.scrollWidth,
                        xPercent: 100, // Offset initial position if needed, or rely on x calc
                        ease: "none",
                        scrollTrigger: {
                            trigger: horizontal,
                            start: "top center", // Adjusted start position
                            end: "+=2000px", // Scroll distance
                            pin: scrollContainer, // Pin the parent container
                            scrub: 1,
                            invalidateOnRefresh: true,
                            // markers: true // Uncomment for debugging
                        }
                    });
                });

                return () => {
                    mm.revert(); // Cleanup matchMedia
                };
            }
        };

        // Initialize GSAP
        initGsap();

    }, [processSteps]); // Re-run if steps change

    return (
        <section className="design--process--area service--design--process section-dark section" ref={scrollContainerRef}>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 mt_20">
                        <div className="single--title">
                            <h3 className="common--sub--heading mt_10" data-aos="fade-up" data-aos-duration="1000">
                                {serviceTitle.toUpperCase()}<br /> DESIGN PROCESS
                            </h3>
                        </div>
                    </div>
                    <div className="col-lg-9 mt_20">
                        <div className="about--right--text">
                            <h3 className="common--heading" data-aos="fade-up" data-aos-duration="1000">
                                Embark on a journey of strategic planning and<br />
                                <span className="primary--color">creative execution with our process.</span>
                            </h3>
                        </div>
                    </div>
                </div>
            </div>
            <div id="horizontal-scoll">
                <div className="horizontal-scoll-wrapper">
                    <div className="horizontal" ref={horizontalRef}>
                        {processSteps.map((step, index) => (
                            <div key={index}>
                                <div className="design--card" data-aos="fade-In" data-aos-duration="700">
                                    <h4>{index + 1}. {step.title}</h4>
                                    <p>{step.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
