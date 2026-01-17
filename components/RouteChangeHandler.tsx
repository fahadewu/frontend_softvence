'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function RouteChangeHandler() {
    const pathname = usePathname();

    useEffect(() => {
        // Give the DOM time to render before reinitializing
        const timeoutId = setTimeout(() => {
            reinitializeScripts();
        }, 100);

        // Cleanup: clear timeout and remove delegated handlers bound by this component
        return () => {
            clearTimeout(timeoutId);

            // Destroy Lenis smooth scroll instance
            if (typeof window !== 'undefined' && (window as any).lenisInstance) {
                try {
                    (window as any).lenisInstance.destroy();
                    (window as any).lenisInstance = null;
                } catch (cleanupErr) {
                    console.warn('Error destroying Lenis:', cleanupErr);
                }
            }

            // Kill all GSAP ScrollTriggers
            if (typeof window !== 'undefined' && (window as any).ScrollTrigger) {
                try {
                    (window as any).ScrollTrigger.getAll().forEach((st: any) => st.kill());
                } catch (cleanupErr) {
                    console.warn('Error killing ScrollTriggers:', cleanupErr);
                }
            }

            if (typeof window !== 'undefined' && (window as any).jQuery) {
                try {
                    const $ = (window as any).jQuery;
                    // Remove delegated UI handlers and isotope filter handlers
                    $(document).off('.softvenceUI');
                    $(document).off('.softvenceNav');
                    $(document).off('click.isotopeFilter touchstart.isotopeFilter');
                } catch (cleanupErr) {
                    // ignore cleanup errors
                }
            }
        };
    }, [pathname]);

    const reinitializeScripts = () => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const windowAny = window as any;

        // Reinitialize AOS (Animate on Scroll)
        if (typeof window !== 'undefined' && windowAny.AOS) {
            windowAny.AOS.refreshHard();
        }

        // Reinitialize jQuery-based components (wait for jQuery to become available)
        if (typeof window !== 'undefined') {
            const ensurejQuery = (attempts = 0) => {
                const $ = (window as any).jQuery;
                const hasOwl = $ && $.fn && $.fn.owlCarousel;

                if (!hasOwl) {
                    if (attempts < 15) {
                        setTimeout(() => ensurejQuery(attempts + 1), 200);
                    } else {
                        console.warn(`jQuery or owlCarousel not available after ${attempts} retries. (jQuery: ${!!$}, owlCarousel: ${!!($.fn && $.fn.owlCarousel)})`);
                    }
                    return;
                }

                console.log(`Reinitializing jQuery components (attempt ${attempts + 1})...`);

                try {
                    // Destroy existing carousels first to prevent duplicates
                    $('.owl-carousel').each(function (this: HTMLElement) {
                        const $carousel = $(this);
                        if ($carousel.data('owl.carousel')) {
                            $carousel.trigger('destroy.owl.carousel');
                            $carousel.removeClass('owl-loaded owl-hidden');
                            $carousel.find('.owl-stage-outer').children().unwrap();
                        }
                    });

                    // Reinitialize testimonial slider
                    if ($('.testi--slider').length > 0 && $.fn.owlCarousel) {
                        $('.testi--slider').owlCarousel({
                            loop: true,
                            margin: 20,
                            dots: false,
                            nav: true,
                            autoplay: false,
                            items: 1,
                            navText: [
                                '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none"><path d="M20.7347 12.8594L7.58301 26.011L20.7347 39.1627" stroke="#06540B" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M44.4171 26.0039H7.95215" stroke="#06540B" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
                                '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none"><path d="M31.2658 39.1406L44.4175 25.989L31.2658 12.8373" stroke="#06540B" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.58334 25.9961L44.0483 25.9961" stroke="#06540B" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
                            ],
                            animateIn: 'fadeIn',
                            animateOut: 'fadeOut',
                            slideSpeed: 300,
                            paginationSpeed: 400,
                        });
                    }

                    // Reinitialize related slider
                    if ($('.related--slider').length > 0 && $.fn.owlCarousel) {
                        $('.related--slider').owlCarousel({
                            loop: true,
                            margin: 40,
                            dots: false,
                            nav: false,
                            autoplay: false,
                            items: 2,
                            slideSpeed: 300,
                            responsive: {
                                992: { items: 2 },
                                768: { items: 2 },
                                0: { items: 1, margin: 20, stagePadding: 40 }
                            }
                        });
                    }

                    // Reinitialize related blog slider
                    if ($('.related--blog--slider').length > 0 && $.fn.owlCarousel) {
                        $('.related--blog--slider').owlCarousel({
                            loop: true,
                            margin: 20,
                            dots: false,
                            nav: false,
                            autoplay: false,
                            items: 3,
                            slideSpeed: 300,
                            responsive: {
                                992: { items: 3 },
                                768: { items: 2 },
                                0: { items: 1, stagePadding: 20 }
                            }
                        });
                    }

                    // Reinitialize showcase slider
                    if ($('.showcase--slider').length > 0 && $.fn.owlCarousel) {
                        $('.showcase--slider').owlCarousel({
                            loop: true,
                            margin: 20,
                            dots: false,
                            nav: true,
                            autoplay: true,
                            items: 1,
                            navText: [
                                '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none"><path d="M20.7342 12.8594L7.58252 26.011L20.7342 39.1627" stroke="white" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M44.4167 26.0039H7.95166" stroke="white" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
                                '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none"><path d="M31.2658 39.1406L44.4175 25.989L31.2658 12.8373" stroke="white" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.58334 25.9961L44.0483 25.9961" stroke="white" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
                            ],
                            animateIn: 'fadeIn',
                            animateOut: 'fadeOut',
                            slideSpeed: 300,
                            paginationSpeed: 400,
                        });
                    }

                    // Reinitialize tilt effect on marketplace boxes
                    if ($('.marketplace--box').length > 0 && $.fn.tilt) {
                        $('.marketplace--box').tilt({
                            scale: 1.05,
                            maxGlare: 0.5,
                            easing: 'cubic-bezier(.03,.98,.52,.99)',
                            speed: 400
                        });
                    }

                    // Add active class to parent wrapper
                    $('.parent--wrapper').addClass('active');

                    // Reinitialize Isotope and bind filter handlers (delegated)
                    if ($.fn.isotope && $('.case-gallery').length > 0) {
                        try {
                            var $grid = $('.case-gallery');
                            $grid.isotope();

                            // Use delegated handler so it survives DOM replacements
                            $(document).off('click.isotopeFilter touchstart.isotopeFilter', '.filter-button-group li');
                            $(document).on('click.isotopeFilter touchstart.isotopeFilter', '.filter-button-group li', function (this: any, e: any) {
                                var o = $(this).attr('data-filter');
                                $grid.isotope({ filter: o });
                                $(this).addClass('active').siblings().removeClass('active');
                            });
                        } catch (isoErr) {
                            console.warn('Isotope reinit error:', isoErr);
                        }
                    }

                    // Re-bind small UI handlers from main.js using delegated, namespaced events
                    $(document).off('.softvenceUI');

                    // Portfolio toggle
                    $(document).on('click.softvenceUI touchstart.softvenceUI', '.portfolio--links > a', function (this: any, e: any) {
                        e.preventDefault();
                        $('.hover--portfolio--icons').toggleClass('show');
                        $(this).toggleClass('show');
                    });

                    // Service dropdown inside menu
                    $(document).on('click.softvenceUI touchstart.softvenceUI', '.main--menu .menu--inner .left>ul>li.service--dropdown>a', function (this: any, e: any) {
                        e.preventDefault();
                        $('.service--dropdown .dropdown--menu').toggleClass('show');
                    });

                    // Contact popup open
                    $(document).on('click.softvenceUI touchstart.softvenceUI', '.contact--toggle, .rotate--circle--wrapper', function (this: any, e: any) {
                        e.preventDefault();
                        $('.contact--popup--wrapper, .contact--pop-inner').addClass('show');
                        $('.main--menu, .main--menu .wrapper').addClass('hide--opacity');
                        $('.contact--pop-inner .container').removeClass('d-none');
                    });

                    // Contact popup close
                    $(document).on('click.softvenceUI touchstart.softvenceUI', '.contact--popup--wrapper .pop-close', function (this: any, e: any) {
                        e.preventDefault();
                        $('.contact--popup--wrapper, .contact--pop-inner').removeClass('show');
                        $('.contact--pop-inner .container').addClass('d-none');
                        setTimeout(function () {
                            $('.main--menu, .main--menu .wrapper').removeClass('hide--opacity');
                        }, 400);
                        document.querySelectorAll('.contact--popup--wrapper input[type="checkbox"]').forEach(function (el) {
                            (el as HTMLInputElement).checked = false;
                        });
                    });

                    // Video modal open
                    $(document).on('click.softvenceUI touchstart.softvenceUI', '.hero--video--area', function (this: any, e: any) {
                        e.preventDefault();
                        $('.showrell--video--modal').addClass('active');
                        $('body').css('overflow', 'hidden');
                        const video = $('.showrell--video')[0] as HTMLVideoElement;
                        if (video && video.paused) {
                            video.play();
                        }
                    });

                    // Video modal close
                    $(document).on('click.softvenceUI touchstart.softvenceUI', '.showrell--video--modal', function (this: any, e: any) {
                        $(this).removeClass('active');
                        $('body').css('overflow', 'auto');
                        const video = $('.showrell--video')[0] as HTMLVideoElement;
                        if (video) {
                            video.pause();
                        }
                    });

                    // Force full page reload when top navigation menu links are clicked. This ensures all page scripts initialize exactly like a hard refresh.
                    $(document).off('click.softvenceNav', '.main--menu .menu--inner .left>ul>li>a, a.popup-menu, a.logo');
                    $(document).on('click.softvenceNav', '.main--menu .menu--inner .left>ul>li>a, a.popup-menu, a.logo', function (this: any, e: any) {
                        // Respect modifier keys and middle-click for open-in-new-tab
                        if (e.ctrlKey || e.metaKey || e.which === 2) return;
                        var href = $(this).attr('href');
                        if (!href) return;
                        // allow hash-only anchors to behave normally
                        if (href.indexOf('#') === 0) return;
                        e.preventDefault();
                        // Close menu to avoid half transition visuals
                        $('body').removeClass('show');
                        $('.main--menu, .main--menu .wrapper').removeClass('show');
                        setTimeout(function () {
                            window.location.href = href;
                        }, 60);
                    });

                    // Scroll to top on navigation
                    window.scrollTo(0, 0);
                } catch (error) {
                    console.warn('Error reinitializing jQuery components:', error);
                }
            };

            ensurejQuery();
        }

        // Reinitialize Lenis smooth scroll
        if (typeof window !== 'undefined' && windowAny.Lenis) {
            try {
                // Destroy existing instance if it exists
                if (windowAny.lenisInstance) {
                    windowAny.lenisInstance.destroy();
                }

                // Create new Lenis instance
                const lenis = new windowAny.Lenis({
                    duration: 1.2,
                    easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
                    smoothWheel: true,
                });

                // Store instance globally
                windowAny.lenisInstance = lenis;

                // Start the RAF loop
                function raf(time: number) {
                    lenis.raf(time);
                    requestAnimationFrame(raf);
                }
                requestAnimationFrame(raf);

                // Integrate with ScrollTrigger if available
                if (windowAny.ScrollTrigger) {
                    // Update ScrollTrigger on Lenis scroll
                    lenis.on('scroll', windowAny.ScrollTrigger.update);

                    // Setup scrollerProxy so ScrollTrigger reads scroll from Lenis
                    try {
                        const scroller = document.scrollingElement || document.documentElement;
                        windowAny.ScrollTrigger.scrollerProxy(scroller, {
                            scrollTop(value: any) {
                                if (arguments.length) {
                                    // Set position via Lenis
                                    try {
                                        // immediate scrollTo to match expected behavior
                                        if (typeof lenis.scrollTo === 'function') {
                                            lenis.scrollTo(value, { duration: 0, immediate: true });
                                        } else if (typeof lenis.scroll === 'number') {
                                            // fallback: no-op
                                        }
                                    } catch (e) {
                                        // ignore
                                    }
                                }
                                // return current scroll position
                                return lenis && typeof lenis.scroll === 'number' ? lenis.scroll : scroller.scrollTop;
                            },
                            getBoundingClientRect() {
                                return { top: 0, left: 0, width: window.innerWidth, height: window.innerHeight };
                            },
                            // Use transform pinning when possible
                            pinType: (scroller as any).style && (scroller as any).style.transform ? 'transform' : 'fixed'
                        });

                        // Refresh ScrollTrigger after setting scrollerProxy
                        windowAny.ScrollTrigger.refresh();
                        console.log('Lenis scrollerProxy configured for ScrollTrigger');

                        // Ensure ScrollTrigger refresh triggers lenis update
                        windowAny.ScrollTrigger.addEventListener('refresh', () => {
                            if (lenis && typeof lenis.raf === 'function') {
                                lenis.raf(performance.now());
                            }
                        });
                    } catch (err) {
                        console.warn('Error setting ScrollTrigger.scrollerProxy for Lenis:', err);
                    }
                }
            } catch (error) {
                console.warn('Error initializing Lenis:', error);
            }
        }

        // Reinitialize GSAP ScrollTrigger
        if (typeof window !== 'undefined' && windowAny.gsap && windowAny.ScrollTrigger) {
            try {
                // Register ScrollTrigger plugin
                windowAny.gsap.registerPlugin(windowAny.ScrollTrigger);

                // Refresh ScrollTrigger to recalculate positions after a delay
                setTimeout(() => {
                    windowAny.ScrollTrigger.refresh();
                }, 500);
            } catch (error) {
                console.warn('Error initializing ScrollTrigger:', error);
            }
        }

        // Setup body cursor movement and label handlers (re-bind after SPA navigation)
        setupBodyCursorHandlers();

        // Ensure play cursor is visible on touch-only / webview environments (no mousemove)
        const ensurePlayCursorForTouch = () => {
            const isTouch = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
            if (!isTouch) return;

            document.body.classList.add('touch-enabled');

            const showPlay = (el: HTMLElement) => {
                el.style.opacity = '1';
                el.style.transform = 'scale(1)';
            };

            const playEls = Array.from(document.querySelectorAll('.hero--video--area .playCursor')) as HTMLElement[];
            if (playEls.length) {
                playEls.forEach(showPlay);
            }

            // also show on touchstart inside hero area (some webviews don't dispatch mouse events)
            const touchShowHandler = (ev: TouchEvent) => {
                const t = ev.touches && ev.touches[0];
                if (!t) return;
                const target = ev.target as Element | null;
                const hero = target && target.closest && target.closest('.hero--video--area');
                if (hero) {
                    (Array.from((hero as Element).querySelectorAll('.playCursor')) as HTMLElement[]).forEach(showPlay);
                }
            };

            document.addEventListener('touchstart', touchShowHandler, { passive: true });

            // store handler for cleanup
            const winAny = window as any;
            winAny.__softvenceCursor = winAny.__softvenceCursor || {};
            winAny.__softvenceCursor.touchPlayHandler = touchShowHandler;
        };

        ensurePlayCursorForTouch();

        // Add a non-jQuery fallback so navbar clicks produce a full reload (like a hard refresh)
        const winAny = window as any;
        winAny.__softvenceCursor = winAny.__softvenceCursor || {};
        if (!winAny.__softvenceCursor.navClickHandler) {
            const navClickHandler = (ev: MouseEvent) => {
                const target = ev.target as Element | null;
                if (!target) return;
                const anchor = target.closest('.main--menu .menu--inner .left>ul>li>a, a.popup-menu, a.logo') as HTMLAnchorElement | null;
                if (!anchor) return;
                if ((ev as any).ctrlKey || (ev as any).metaKey || (ev as any).which === 2) return; // allow new tab
                const href = anchor.getAttribute('href');
                if (!href) return;
                if (href.startsWith('#')) return; // allow in-page anchors
                ev.preventDefault();
                // Close menu to avoid half transition visuals
                document.body.classList.remove('show');
                document.querySelector('.main--menu')?.classList.remove('show');
                document.querySelector('.main--menu .wrapper')?.classList.remove('show');
                setTimeout(() => {
                    window.location.href = href;
                }, 60);
            };
            // Use non-capturing listener to avoid interfering with other delegated click handlers
            document.addEventListener('click', navClickHandler, false);
            winAny.__softvenceCursor.navClickHandler = navClickHandler;
        }

        // Reset header visibility
        const mainHeader = document.querySelector('.main--header');
        if (mainHeader) {
            mainHeader.classList.remove('hide');
        }

        // Ensure menu is closed after navigation
        document.body.classList.remove('show');
        document.querySelector('.main--menu')?.classList.remove('show');
        document.querySelector('.main--menu .wrapper')?.classList.remove('show');
    };

    // Ensure body cursor is initialized and hover labels are delegated so they work across route changes
    const setupBodyCursorHandlers = () => {
        // Avoid duplicate initialization
        const winAny = window as any;
        if (!winAny.__softvenceCursor) {
            winAny.__softvenceCursor = {};
        }

        const state = winAny.__softvenceCursor;

        // Select cursor element
        const s = document.querySelector('.body--cursor') as HTMLElement | null;
        if (!s) return;

        // Remove previous mousemove handler if present
        if (state.mouseMoveHandler) {
            document.removeEventListener('mousemove', state.mouseMoveHandler);
            state.mouseMoveHandler = undefined;
        }

        // variables for lerp loop
        let n = 0,
            i = 0,
            c = 0,
            l = 0;

        // Start RAF loop only once
        if (!state.rafStarted) {
            state.rafStarted = true;
            const loop = () => {
                const o = n - c,
                    t = i - l;
                c += 0.1 * o;
                l += 0.1 * t;
                // offset to align label inside circle
                s.style.left = c - 30 + 'px';
                s.style.top = l + 70 + 'px';
                requestAnimationFrame(loop);
            };
            requestAnimationFrame(loop);
        }

        // mousemove handler
        const mouseMoveHandler = (e: MouseEvent) => {
            n = e.pageX;
            i = e.pageY;
            // If pointer is inside a .section, set theme colors by checking section class
            let currentSection: Element | null = null;
            document.querySelectorAll('.section').forEach((el) => {
                const r = el.getBoundingClientRect();
                const top = r.top + window.scrollY;
                const bottom = r.bottom + window.scrollY;
                if (i >= top && i <= bottom) currentSection = el;
            });

            if (currentSection) {
                const cs = currentSection as Element;
                if (cs.classList.contains('section-dark')) {
                    s.style.borderColor = '#747474';
                    s.style.backgroundColor = 'rgba(255,255,255,0.02)';
                    (s.querySelectorAll('p') || []).forEach((p: Element) => ((p as HTMLElement).style.color = 'white'));
                } else if (cs.classList.contains('section-light')) {
                    s.style.borderColor = 'rgba(0,0,0,0.2)';
                    s.style.backgroundColor = 'rgba(255,255,255,0.05)';
                    (s.querySelectorAll('p') || []).forEach((p: Element) => ((p as HTMLElement).style.color = 'black'));
                }
            }

            // Also set immediate position for snappy response
            s.style.left = n + 'px';
            s.style.top = i + 'px';
        };

        state.mouseMoveHandler = mouseMoveHandler;
        document.addEventListener('mousemove', mouseMoveHandler, { passive: true });

        // Remove previous delegated handlers if present
        if (state.delegateHandlersInit) return;
        state.delegateHandlersInit = true;

        // Delegated hover handlers to show labels
        const showLabel = (type: string) => {
            const el = s.querySelector('.' + type) as HTMLElement | null;
            if (el) {
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
            s.style.transform = 'scale(1)';
        };
        const hideLabel = (type: string) => {
            const el = s.querySelector('.' + type) as HTMLElement | null;
            if (el) {
                el.style.opacity = '0';
                el.style.transform = 'translateY(15px)';
            }
            s.style.transform = 'scale(0.6)';
        };

        // Fallback handlers for hero play cursor on pointer devices (in case main.js didn't bind)
        if (window.matchMedia('(pointer:fine)').matches && !state.heroCursorInit) {
            state.heroCursorInit = true;

            const heroMouseMove = (ev: MouseEvent) => {
                const target = ev.target as Element | null;
                if (!target) return;
                const hero = target.closest && target.closest('.hero--video--area') as HTMLElement | null;
                if (!hero) return;
                const u = hero.querySelector('.playCursor') as HTMLElement | null;
                if (!u) return;
                const f = ev.pageX - hero.offsetLeft;
                const h = ev.pageY - hero.offsetTop;
                u.style.left = f + 'px';
                u.style.top = h + 'px';
                u.style.opacity = '1';
                u.style.transform = 'scale(1)';
            };

            const heroMouseEnter = (ev: MouseEvent) => {
                const target = ev.target as Element | null;
                const hero = target && target.closest && target.closest('.hero--video--area') as HTMLElement | null;
                if (!hero) return;
                const u = hero.querySelector('.playCursor') as HTMLElement | null;
                if (!u) return;
                u.style.opacity = '1';
                u.style.transform = 'scale(1)';
            };

            const heroMouseLeave = (ev: MouseEvent) => {
                const target = ev.target as Element | null;
                const hero = target && target.closest && target.closest('.hero--video--area') as HTMLElement | null;
                if (!hero) return;
                const u = hero.querySelector('.playCursor') as HTMLElement | null;
                if (!u) return;
                u.style.opacity = '0';
                u.style.transform = 'scale(0)';
            };

            document.addEventListener('mousemove', heroMouseMove);
            document.addEventListener('mouseover', heroMouseEnter);
            document.addEventListener('mouseout', heroMouseLeave);

            // store for cleanup
            state.heroMouseMove = heroMouseMove;
            state.heroMouseEnter = heroMouseEnter;
            state.heroMouseLeave = heroMouseLeave;
        }
        // map selectors to label class names (shared by mouse + touch handlers)
        const map: { [selector: string]: string } = {
            '.button-click': 'click',
            '.open-faq': 'click',
            '.hamburger--menu img': 'open',
            '.hero--play--area': 'play',
            '.play--review': 'play',
            '.owl-prev': 'prev',
            '.owl-next': 'next'
        };

        // delegated bindings for mouse
        const delegatedHandler = (ev: Event) => {
            const target = ev.target as Element | null;
            if (!target) return;

            Object.keys(map).forEach((sel) => {
                const cls = map[sel];
                // if event is mouseover
                if ((ev as any).type === 'mouseover') {
                    if (target.closest && target.closest(sel)) showLabel(cls);
                } else if ((ev as any).type === 'mouseout') {
                    if (target.closest && target.closest(sel)) hideLabel(cls);
                }
            });
        };

        document.addEventListener('mouseover', delegatedHandler);
        document.addEventListener('mouseout', delegatedHandler);

        // touch handlers to make cursor respond on touch devices (mobile webviews)
        const touchStartHandler = (ev: TouchEvent) => {
            const t = ev.touches && ev.touches[0];
            if (!t) return;
            n = t.pageX; i = t.pageY;
            s.style.left = n + 'px';
            s.style.top = i + 'px';
            // show label on touchstart if target matches
            const target = ev.target as Element | null;
            if (target) {
                Object.keys(map).forEach((sel) => {
                    const cls = map[sel];
                    if (target.closest && target.closest(sel)) showLabel(cls);
                });
            }
        };

        const touchMoveHandler = (ev: TouchEvent) => {
            const t = ev.touches && ev.touches[0];
            if (!t) return;
            n = t.pageX; i = t.pageY;
            // immediate update for snappy response
            s.style.left = n + 'px';
            s.style.top = i + 'px';
        };

        const touchEndHandler = (ev: TouchEvent) => {
            // hide all labels on touch end
            Object.keys(map).forEach((sel) => hideLabel(map[sel]));
        };

        document.addEventListener('touchstart', touchStartHandler, { passive: true });
        document.addEventListener('touchmove', touchMoveHandler, { passive: true });
        document.addEventListener('touchend', touchEndHandler);

        // Store handlers so we can remove them on cleanup
        state.delegatedHandler = delegatedHandler;
        state.touchStartHandler = touchStartHandler;
        state.touchMoveHandler = touchMoveHandler;
        state.touchEndHandler = touchEndHandler;
    };

    // Cleanup on unmount: remove any global handlers we added
    // (Note: we already remove jQuery handlers in the effect cleanup; here ensure plain handlers removed)
    useEffect(() => {
        return () => {
            const winAny = window as any;
            const state = winAny.__softvenceCursor || {};
            if (state.mouseMoveHandler) document.removeEventListener('mousemove', state.mouseMoveHandler);
            if (state.delegatedHandler) {
                document.removeEventListener('mouseover', state.delegatedHandler);
                document.removeEventListener('mouseout', state.delegatedHandler);
            }
            if (state.touchStartHandler) document.removeEventListener('touchstart', state.touchStartHandler);
            if (state.touchMoveHandler) document.removeEventListener('touchmove', state.touchMoveHandler);
            if (state.touchEndHandler) document.removeEventListener('touchend', state.touchEndHandler);
            if (state.touchPlayHandler) document.removeEventListener('touchstart', state.touchPlayHandler);
            if (state.heroMouseMove) document.removeEventListener('mousemove', state.heroMouseMove);
            if (state.heroMouseEnter) document.removeEventListener('mouseover', state.heroMouseEnter);
            if (state.heroMouseLeave) document.removeEventListener('mouseout', state.heroMouseLeave);
            // remove non-jQuery nav click handler
            if (winAny.__softvenceCursor && winAny.__softvenceCursor.navClickHandler) {
                document.removeEventListener('click', winAny.__softvenceCursor.navClickHandler, true);
                winAny.__softvenceCursor.navClickHandler = undefined;
            }
        };
    }, []);

    return null;
}
