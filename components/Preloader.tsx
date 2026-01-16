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

            // Small delay for Splitting to process the DOM
            setTimeout(() => {
                // Activate parent wrapper first (triggers CSS clip-path reveal animation)
                const wrapper = document.querySelector('.parent--wrapper');
                if (wrapper) {
                    // On first load, run the full animation
                    if (isFirstLoad.current) {
                        // Ensure wrapper is active (visible)
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

                // Run GSAP text animations only on first load
                const gsap = (window as any).gsap;
                if (gsap && isFirstLoad.current) {
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

                // Refresh AOS to ensure reveal animations work
                setTimeout(() => {
                    const AOS = (window as any).AOS;
                    if (AOS) {
                        AOS.refresh();
                        // Additional refresh after elements settle
                        setTimeout(() => {
                            AOS.refresh();
                        }, 1000);
                    }
                }, isFirstLoad.current ? 2500 : 100);

                // Mark first load as complete
                isFirstLoad.current = false;

            }, 100);
        };

        // Run on load for first load, run immediately for navigation
        if (isFirstLoad.current) {
            if (document.readyState === 'complete') {
                handleLoad();
            } else {
                window.addEventListener('load', handleLoad);
            }
        } else {
            // On navigation, run immediately
            handleLoad();
        }

        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, [pathname]);

    // No visual element - preloader effect is CSS-based via .parent--wrapper clip-path
    return null;
}
