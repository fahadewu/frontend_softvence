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

            // Initialize Splitting.js
            const Splitting = (window as any).Splitting;
            if (Splitting) {
                // Always call Splitting to ensure new content is processed on navigation
                Splitting();
            }

            // Mark first load as complete
            const wasFirstLoad = isFirstLoad.current;
            isFirstLoad.current = false;

            // Step 1: Hide the preloader overlay
            const overlay = document.querySelector('.preloader--overlay');
            if (overlay) {
                overlay.classList.add('hidden');
            }

            // Step 2: Trigger reveal and text animations
            setTimeout(() => {
                const wrapper = document.querySelector('.parent--wrapper');
                if (wrapper) {
                    wrapper.classList.add('active', 'delay');
                    // Ensure body is not stuck in loading state
                    document.body.classList.remove('loading');
                }

                // Step 3: Run GSAP text animations
                const winAny = window as any;
                const gsap = winAny.gsap;

                // Only run internal animations if not already handled by main.js or if first load
                // But we want it to run on every mount for heroes on navigation
                if (gsap) {
                    winAny.heroAnimationsInitialized = true;

                    // Animate split characters
                    const chars = document.querySelectorAll(".char");
                    if (chars.length > 0) {
                        gsap.timeline().from(".char", {
                            duration: 1,
                            opacity: 0,
                            skewX: 7, // Fixed: GSAP 3 uses skewX instead of skew
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
                            skewX: 7, // Fixed: GSAP 3 uses skewX instead of skew
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
                    const AOS = winAny.AOS;
                    if (AOS) {
                        AOS.refresh();
                    }
                }, 100);

            }, wasFirstLoad ? 200 : 0);
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
