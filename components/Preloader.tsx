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

            // Step 2: Immediate content reveal (Cancel dropdown animation)
            const wrapper = document.querySelector('.parent--wrapper') as HTMLElement;
            if (wrapper) {
                // Disable the transition to "cancel" the dropdown animation
                wrapper.style.transition = 'none';
                wrapper.style.clipPath = 'none'; // Ensure fully visible
                // Add classes for final state visibility
                wrapper.classList.add('active', 'delay');
                // Ensure body is not stuck in loading state
                document.body.classList.remove('loading');

                // Dispatch event to signal animation start
                window.dispatchEvent(new Event('preloaderComplete'));
            }

            // Step 3: Run GSAP text animations
            const winAny = window as any;
            const gsap = winAny.gsap;

            // Only run internal animations if not already handled by main.js or if first load
            // But we want it to run on every mount for heroes on navigation
            // Only run internal animations if not already handled by main.js or if first load
            // We delegate these animations back to main.js which now handles check for readiness correctly
            if (gsap) {
                // Mark as initialized if we were to run them, but we let main.js handle it
                // winAny.heroAnimationsInitialized = true; 
            }

            // Refresh AOS and ScrollTrigger
            setTimeout(() => {
                const AOS = winAny.AOS;
                if (AOS) {
                    AOS.refresh();
                }
                const ScrollTrigger = winAny.ScrollTrigger;
                if (ScrollTrigger) {
                    ScrollTrigger.refresh();
                }
            }, 100);

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
