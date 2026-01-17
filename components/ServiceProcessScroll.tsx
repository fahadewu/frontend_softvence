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
        let ctx: any;

        const initGsap = () => {
            const winAny = window as any;
            const gsap = winAny.gsap;
            const ScrollTrigger = winAny.ScrollTrigger;

            if (!gsap || !ScrollTrigger) {
                setTimeout(initGsap, 100);
                return;
            }

            gsap.registerPlugin(ScrollTrigger);

            const horizontal = horizontalRef.current;
            const scrollContainer = scrollContainerRef.current;

            if (horizontal && scrollContainer) {
                // Ensure proper cleaning before creating new animation
                // With gsap.context, manual kill of previous triggers in the same scope is handled automatically if we revert context,
                // but checking for existing global triggers on these elements is still safe.
                const triggers = ScrollTrigger.getAll();
                triggers.forEach((trigger: any) => {
                    if (trigger.vars.trigger === horizontal || trigger.vars.trigger === ".horizontal") {
                        trigger.kill();
                    }
                });

                ctx = gsap.context(() => {
                    const mm = gsap.matchMedia();

                    mm.add("(min-width: 992px)", () => {
                        gsap.to(horizontal, {
                            x: () => -1 * horizontal.scrollWidth,
                            xPercent: 100,
                            ease: "none",
                            scrollTrigger: {
                                trigger: horizontal,
                                start: "top center",
                                end: "+=2000px",
                                pin: scrollContainer,
                                scrub: 1,
                                invalidateOnRefresh: true,
                            }
                        });
                    });
                }, scrollContainer);

                // Helper function to calculate scroll width minus viewport width (kept for reference if needed in future logic)
                const getScrollAmount = () => {
                    return -(horizontal.scrollWidth - window.innerWidth);
                };
            }
        };

        if (typeof window !== 'undefined') {
            const preloader = document.querySelector('.preloader--overlay');
            const isPreloaderHidden = preloader && preloader.classList.contains('hidden');

            if (preloader && !isPreloaderHidden) {
                const onPreloaderComplete = () => {
                    initGsap();
                    window.removeEventListener('preloaderComplete', onPreloaderComplete);
                };
                window.addEventListener('preloaderComplete', onPreloaderComplete);

                // Safety fallback
                setTimeout(() => {
                    if (!ctx) initGsap();
                }, 3000);

                return () => window.removeEventListener('preloaderComplete', onPreloaderComplete);
            } else {
                if (document.readyState === 'complete') {
                    initGsap();
                } else {
                    window.addEventListener('load', initGsap);
                    return () => window.removeEventListener('load', initGsap);
                }
            }
        }

        return () => {
            if (ctx) ctx.revert();
        };
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
