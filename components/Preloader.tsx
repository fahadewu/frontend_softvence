'use client';

import { useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';

export default function Preloader() {
    const pathname = usePathname();
    const isFirstLoad = useRef(true);

    useEffect(() => {
        const handleLoad = () => {
            // Scroll to top on load to ensure clean start
            if (isFirstLoad.current) {
                window.scrollTo(0, 0);
            }

            // Initialize Splitting.js only once on first load
            const Splitting = (window as any).Splitting;
            if (Splitting && isFirstLoad.current) {
                Splitting();
            }

            // Mark first load as complete
            const wasFirstLoad = isFirstLoad.current;
            isFirstLoad.current = false;

            // Step 1: Hide the preloader overlay first (starts its 0.8s fade-out)
            const overlay = document.querySelector('.preloader--overlay');
            if (overlay) {
                overlay.classList.add('hidden');
            }

            // Step 2: Trigger reveal and text animations after a short overlap (200ms)
            setTimeout(() => {
                // Activate parent wrapper (triggers CSS clip-path reveal animation)
                const wrapper = document.querySelector('.parent--wrapper');
                if (wrapper) {
                    if (wasFirstLoad) {
                        if (!wrapper.classList.contains('active')) {
                            wrapper.classList.add('active');
                        }

                        // Add delay class after clip-path animation or on user interaction
                        const enableScroll = () => {
                            if (wrapper) {
                                wrapper.classList.add('delay');
                            }
                            // Remove loading class from body to enable scrolling
                            document.body.classList.remove('loading');

                            // Refresh AOS and ScrollTrigger once content is relative and scrollable
                            const AOS = (window as any).AOS;
                            if (AOS) AOS.refresh();
                            const gsap = (window as any).gsap;
                            if (gsap && gsap.registerPlugin && (window as any).ScrollTrigger) {
                                (window as any).ScrollTrigger.refresh();
                            }
                        };

                        // Enable scroll on user interaction
                        const interactionEvents = ['wheel', 'touchmove'];
                        const addDelayOnInteraction = () => {
                            enableScroll();
                            interactionEvents.forEach(event => {
                                document.removeEventListener(event, addDelayOnInteraction);
                            });
                        };

                        interactionEvents.forEach(event => {
                            document.addEventListener(event, addDelayOnInteraction, { once: true });
                        });

                        // Also enable after clip-path animation completes (2s)
                        setTimeout(enableScroll, 2100);
                    } else {
                        // On subsequent navigations, ensure classes are set immediately
                        wrapper.classList.add('active', 'delay');
                    }
                }

                // Step 3: Run GSAP text animations
                const gsap = (window as any).gsap;
                if (gsap && wasFirstLoad) {
                    // Animate split characters
                    const chars = document.querySelectorAll(".char");
                    if (chars.length > 0) {
                        gsap.timeline().from(".char", {
                            duration: 1,
                            opacity: 0,
                            skew: 7,
                            stagger: 0.02,
                            y: 200,
                            ease: "power1.inOut"
                        });
                    }

                    // Animate branding paragraph
                    const brandingPara = document.querySelector(".hero--area .hero--box.branding--area p");
                    if (brandingPara) {
                        gsap.from(".hero--area .hero--box.branding--area p", {
                            duration: 1,
                            opacity: 0,
                            skew: 7,
                            stagger: 0.02,
                            y: 200,
                            ease: "power1.inOut"
                        });
                    }

                    // Animate play area
                    const playArea = document.querySelector(".hero--play--area");
                    if (playArea) {
                        gsap.from(".hero--play--area", {
                            duration: 1.5,
                            opacity: 0,
                            y: 250,
                            ease: "power1.inOut"
                        });
                    }

                    // Animate circle hero
                    const circleHero = document.querySelector(".circle--hero");
                    if (circleHero) {
                        gsap.fromTo(".circle--hero",
                            { opacity: 0 },
                            { duration: 1, opacity: 1, delay: 1, ease: "power1.inOut" }
                        );
                    }
                }

                // Refresh AOS
                setTimeout(() => {
                    const AOS = (window as any).AOS;
                    if (AOS) {
                        AOS.refresh();
                        setTimeout(() => {
                            AOS.refresh();
                        }, 1000);
                    }
                }, wasFirstLoad ? 2500 : 100);

            }, 200); // Short overlap with overlay fade-out
        };

        // Run on load for first load, run immediately for navigation
        if (isFirstLoad.current) {
            // Safety timeout: reveal after 3 seconds even if window.onload hasn't fired
            const safetyTimeout = setTimeout(() => {
                console.log('Preloader: Safety timeout triggered');
                handleLoad();
            }, 3000);

            const onWindowLoad = () => {
                clearTimeout(safetyTimeout);
                handleLoad();
            };

            if (document.readyState === 'complete') {
                onWindowLoad();
            } else {
                window.addEventListener('load', onWindowLoad);
            }

            return () => {
                clearTimeout(safetyTimeout);
                window.removeEventListener('load', onWindowLoad);
            };
        } else {
            // On navigation, run immediately
            handleLoad();
        }
    }, [pathname]);

    // Return a visible preloader overlay
    return (
        <div className="preloader--overlay">
            <div className="preloader--spinner"></div>
        </div>
    );
}
