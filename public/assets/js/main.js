!(function (e) {
    "use strict";
    e(document).ready(function () {
        var initMain = function () {
            // Check if hero animations were already initialized by Preloader
            const heroAnimationsAlreadyRun = window.heroAnimationsInitialized;

            if (
                (gsap.registerPlugin(ScrollTrigger),
                    e(document).on("wheel touchmove", function (o) {
                        e(".parent--wrapper").addClass("delay");
                    }),
                    // Restore hero animations in main.js
                    // Use Check to safely run only once if called multiple times or if preloader handled it (though we want main.js to handle it now)
                    !heroAnimationsAlreadyRun && gsap.timeline().from(".char", { duration: 1, opacity: 0, skewX: 7, stagger: 0.02, y: 200, ease: "power1.inOut" }),
                    !heroAnimationsAlreadyRun && gsap.from(".hero--area .hero--box.branding--area p", { duration: 1, opacity: 0, skewX: 7, stagger: 0.02, y: 200, ease: "power1.inOut" }),
                    !heroAnimationsAlreadyRun && gsap.from(".hero--play--area", { duration: 1.5, opacity: 0, y: 250, ease: "power1.inOut" }),
                    !heroAnimationsAlreadyRun && gsap.fromTo(".circle--hero", { opacity: 0 }, { duration: 1, opacity: 1, delay: 1, ease: "power1.inOut" }),
                    gsap.from(".about--image--wrapper", { duration: 1.5, opacity: 0, y: 250, ease: "power1.inOut" }),
                    gsap.from(".case--hero--img, .case--hero--content, .single--blog--article--area, .blog--details--hero .inner--hero--text, .service--agency--area, .service--hero--para p", {
                        duration: 1.5,
                        opacity: 0,
                        y: 250,
                        stagger: 0.4,
                        ease: "power1.inOut",
                    })
                )) {
            }
        };

        if (document.readyState === 'complete') {
            initMain();
        } else {
            e(window).on("load", initMain);
        }
        e(".hamburger--menu").on("click", function () {
            e(".main--menu, .main--menu .wrapper, body").addClass("show"), e(".main--menu .menu--inner .left>ul>li>a, .menu--contact--info, .main--menu .top--header").removeClass("d-none");
        }),
            e(".menu--close").on("click", function () {
                e(".main--menu, .main--menu .wrapper, body").removeClass("show"), e(".main--menu .menu--inner .left>ul>li>a, .menu--contact--info, .main--menu .top--header").addClass("d-none");
            }),
            e(".contact--toggle, .rotate--circle--wrapper").on("click", function (o) {
                o.preventDefault(), e(".contact--popup--wrapper, .contact--pop-inner").addClass("show"), e(".main--menu, .main--menu .wrapper").addClass("hide--opacity"), e(".contact--pop-inner .container").removeClass("d-none");
            }),
            e(".contact--popup--wrapper .pop-close").on("click", function () {
                e(".contact--popup--wrapper, .contact--pop-inner").removeClass("show"),
                    e(".contact--pop-inner .container").addClass("d-none"),
                    setTimeout(() => {
                        e(".main--menu, .main--menu .wrapper").removeClass("hide--opacity");
                    }, 400),
                    document.querySelectorAll('.contact--popup--wrapper input[type="checkbox"]').forEach(function (e) {
                        e.checked = !1;
                    });
            }),
            e(".portfolio--links > a").on("click", function (o) {
                o.preventDefault(), e(".hover--portfolio--icons").toggleClass("show"), e(this).toggleClass("show");
            }),
            e(".main--menu .menu--inner .left>ul>li.service--dropdown>a").on("click", function (o) {
                o.preventDefault(), e(".service--dropdown .dropdown--menu").toggleClass("show");
            });
        var o = document.querySelector(".main--header"),
            t = 0;
        if (
            ((window.onscroll = function () {
                var e;
                (e = window.pageYOffset || document.documentElement.scrollTop) > t ? o && o.classList.add("hide") : o && o.classList.remove("hide"), (t = e <= 0 ? 0 : e);
            }),
                typeof AOS !== 'undefined' && AOS.init({ duration: 700, easing: "cubic-bezier(0.165, 0.84, 0.44, 1)", once: !0, offset: 100, disable: false }),
                e(".marketplace--box").length > 0 && e(".marketplace--box").tilt({ scale: 1.05, maxGlare: 0.5, easing: "cubic-bezier(.03,.98,.52,.99)", speed: 400 }),
                // Apply custom background colors to img-overlay elements
                e("[data-bgc]").each(function () {
                    var o = e(this).attr("data-bgc");
                    e(this).css({ "background-color": o });
                }),
                // Ensure AOS refresh after elements are ready
                setTimeout(function () {
                    typeof AOS !== 'undefined' && AOS.refresh();
                }, 500),
                window.matchMedia("(min-width: 992px)").matches &&
                (e(".service--dropdown").on("mouseenter mouseleave", function () {
                    e(this).find(".dropdown--menu").toggleClass("active");
                }),
                    e(".service--dropdown .dropdown--menu li a").on("mouseenter", function () {
                        var o = e(this).closest(".service--dropdown").find(".dropdown--menu");
                        setTimeout(function () {
                            o.removeClass("active");
                        }, 50);
                    })),
                e(".service--area ul li a").each(function () {
                    e(this).hover(
                        function () {
                            e(this).next().addClass("active");
                        },
                        function () {
                            e(this).next().removeClass("active");
                        }
                    );
                }),
                e(".counter--wrapper").on("inview", function (o, t) {
                    t &&
                        (e(this)
                            .find(".counter")
                            .each(function () {
                                var o = e(this);
                                e({ Counter: 0 }).animate(
                                    { Counter: o.text() },
                                    {
                                        duration: 6e3,
                                        easing: "swing",
                                        step: function () {
                                            o.text(Math.ceil(this.Counter));
                                        },
                                    }
                                );
                            }),
                            e(this).unbind("inview"));
                }),
                (r = e(".case-gallery")).isotope(),
                e(".filter-button-group").on("click", "li", function () {
                    var o = e(this).attr("data-filter");
                    r.isotope({ filter: o }), e(this).addClass("active").siblings().removeClass("active");
                }),
                window.matchMedia("(min-width: 992px)").matches)
        ) {
            // GSAP ScrollTrigger for .case--studies--area is now handled in MainContent.tsx
        }
        let s, n, i, c, l, p;
        if (
            ((s = e(".body--cursor")),
                (n = 0),
                (i = 0),
                (c = 0),
                (l = 0),
                (function e() {
                    let o = n - c,
                        t = i - l;
                    (c += 0.1 * o), (l += 0.1 * t), s.css({ left: c - 30 + "px", top: l + 70 + "px" }), requestAnimationFrame(e);
                })(),
                e(document).on("mousemove", function (e) {
                    (n = e.pageX), (i = e.pageY);
                    let o = null;
                    document.querySelectorAll(".section").forEach((e) => {
                        let t = e.getBoundingClientRect();
                        i >= t.top + window.scrollY && i <= t.bottom + window.scrollY && (o = e);
                    }),
                        o &&
                        (o.classList.contains("section-dark")
                            ? (s.css({ "border-color": "#747474", "background-color": "rgba(255, 255, 255, 0.02)" }), s.find("p").css("color", "white"))
                            : o.classList.contains("section-light") && (s.css({ "border-color": "rgba(0,0,0,0.2)", "background-color": "rgba(255, 255, 255, 0.05)" }), s.find("p").css("color", "black"))),
                        s.css({ left: n + "px", top: i + "px" });
                }),
                e(".testi--slider").owlCarousel({
                    loop: !0,
                    margin: 20,
                    dots: !1,
                    nav: !0,
                    autoplay: !1,
                    items: 1,
                    navText: [
                        '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none"><path d="M20.7347 12.8594L7.58301 26.011L20.7347 39.1627" stroke="#06540B" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M44.4171 26.0039H7.95215" stroke="#06540B" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
                        '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none"><path d="M31.2658 39.1406L44.4175 25.989L31.2658 12.8373" stroke="#06540B" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M7.58334 25.9961L44.0483 25.9961" stroke="#06540B" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg>',
                    ],
                    animateIn: "fadeIn",
                    animateOut: "fadeOut",
                    slideSpeed: 300,
                    paginationSpeed: 400,
                }),
                e(".related--slider").owlCarousel({ loop: !0, margin: 40, dots: !1, nav: !1, autoplay: !1, items: 2, slideSpeed: 300, responsive: { 992: { items: 2 }, 768: { items: 2 }, 0: { items: 1, margin: 20, stagePadding: 40 } } }),
                e(".related--blog--slider").owlCarousel({ loop: !0, margin: 20, dots: !1, nav: !1, autoplay: !1, items: 3, slideSpeed: 300, responsive: { 992: { items: 3 }, 768: { items: 2 }, 0: { items: 1, stagePadding: 20 } } }),
                e(".showcase--slider").owlCarousel({
                    loop: !0,
                    margin: 20,
                    dots: !1,
                    nav: !0,
                    autoplay: !0,
                    items: 1,
                    navText: [
                        '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">            <path d="M20.7342 12.8594L7.58252 26.011L20.7342 39.1627" stroke="white" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>            <path d="M44.4167 26.0039H7.95166" stroke="white" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>        </svg>',
                        '<svg xmlns="http://www.w3.org/2000/svg" width="52" height="52" viewBox="0 0 52 52" fill="none">            <path d="M31.2658 39.1406L44.4175 25.989L31.2658 12.8373" stroke="white" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>            <path d="M7.58334 25.9961L44.0483 25.9961" stroke="white" stroke-width="3" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>        </svg>',
                    ],
                    animateIn: "fadeIn",
                    animateOut: "fadeOut",
                    slideSpeed: 300,
                    touchDrag: !1,
                    mouseDrag: !1,
                }),
                e(".team--slider").owlCarousel({
                    loop: !0,
                    margin: 75,
                    dots: !1,
                    nav: !1,
                    autoplay: !0,
                    slideTransition: "linear",
                    autoplayTimeout: 5e3,
                    smartSpeed: 5e3,
                    stagePadding: 30,
                    autoWidth: !0,
                    mouseDrag: !1,
                    touchDrag: !1,
                    responsive: { 1500: { margin: 75 }, 576: { margin: 40 }, 0: { margin: 20 } },
                }),
                e(".clients--slider").owlCarousel({ loop: !0, margin: 20, dots: !1, nav: !1, autoplay: !0, slideTransition: "linear", autoplayTimeout: 5e3, smartSpeed: 5e3, stagePadding: 30, autoWidth: !0, mouseDrag: !1, touchDrag: !1 }),
                e(".play--review").magnificPopup({ type: "iframe", iframe: { patterns: { youtube: { index: "youtube.com/", id: "v=", src: "https://www.youtube.com/embed/%id%?autoplay=1" } }, srcAction: "iframe_src" } }),
                e(".button-click, .open-faq").on("mousemove", function () {
                    e(".body--cursor .click").css({ opacity: "1", transform: "translateY(0)" }), e(".body--cursor").css({ transform: "scale(1)" });
                }),
                e(".button-click, .open-faq").on("mouseleave", function () {
                    e(".body--cursor .click").css({ opacity: "0", transform: "translateY(15px)" }), e(".body--cursor").css({ transform: "scale(0.6)" });
                }),
                e(".hamburger--menu img").on("mousemove", function () {
                    e(".body--cursor .open").css({ opacity: "1", transform: "translateY(0)" }), e(".body--cursor").css({ transform: "scale(1)" });
                }),
                e(".hamburger--menu img").on("mouseleave", function () {
                    e(".body--cursor .open").css({ opacity: "0", transform: "translateY(15px)" }), e(".body--cursor").css({ transform: "scale(0.6)" });
                }),
                e(".hero--play--area, .play--review").on("mousemove", function () {
                    e(".body--cursor .play").css({ opacity: "1", transform: "translateY(0)" }), e(".body--cursor").css({ transform: "scale(1)" });
                }),
                e(".hero--play--area, .play--review").on("mouseleave", function () {
                    e(".body--cursor .play").css({ opacity: "0", transform: "translateY(15px)" }), e(".body--cursor").css({ transform: "scale(0.6)" });
                }),
                e(".owl-prev, .owl-next").on("mousemove", function () {
                    var o = e(this).hasClass("owl-prev") ? "prev" : "next";
                    e(".body--cursor ." + o).css({ opacity: "1", transform: "translateY(0)" }), e(".body--cursor").css({ transform: "scale(1)" });
                }),
                e(".owl-prev, .owl-next").on("mouseleave", function () {
                    var o = e(this).hasClass("owl-prev") ? "prev" : "next";
                    e(".body--cursor ." + o).css({ opacity: "0", transform: "translateY(15px)" }), e(".body--cursor").css({ transform: "scale(0.6)" });
                }),
                e(".case--item, .hero--video--area, related--carousel--wrapper, .related--carousel--wrapper").on("mousemove", function () {
                    e(".body--cursor").css({ opacity: "0" });
                }),
                e(".case--item, .hero--video--area, related--carousel--wrapper, .related--carousel--wrapper").on("mouseleave", function () {
                    e(".body--cursor").css({ opacity: "1" });
                }),
                (p = e(".case--cursor")),
                e(".case--studies--area .case--item .img--area").each(function () {
                    let o = e(this);
                    o.on("mousemove", function (e) {
                        let t = e.pageX - o.offset().left,
                            r = e.pageY - o.offset().top;
                        o.find(".case--cursor").css({ left: t + "px", top: r + "px", opacity: 1, transform: "scale(1)" }), p.css({ opacity: 1 });
                    }),
                        o.on("mouseleave", function (e) {
                            o.find(".case--cursor").css({ opacity: 0, transform: "scale(0)" });
                        });
                }),
                e(".hero--video--area").on("click", function () {
                    e(".showrell--video--modal").addClass("active"), e("body").css("overflow", "hidden");
                    var o = e(".showrell--video")[0];
                    o.paused && o.play();
                }),
                e(".showrell--video--modal").on("click", function () {
                    e(this).removeClass("active"), e("body").css("overflow", "auto"), e(".showrell--video")[0].pause();
                }),
                window.matchMedia("(min-width: 992px)").matches)
        ) {
            let u, d, m, $, f, h, g, v;
            e(".main--menu, .contact--popup--wrapper").on("mouseenter", function () {
                _.stop();
            }),
                e(".main--menu, .contact--popup--wrapper").on("mouseleave", function () {
                    _.start();
                }),
                (u = e(".playCursor")),
                (d = e(".hero--video--area")),
                (m = e(".related--case--cursor")),
                ($ = e(".related--carousel--wrapper")),
                (f = 0),
                (h = 0),
                (g = 0),
                (v = 0),
                (function e() {
                    let o = f - g,
                        t = h - v;
                    (g += 0.1 * o), (v += 0.1 * t), u.css({ left: g + "px", top: v + "px" }), m.css({ left: g + "px", top: v + "px" }), requestAnimationFrame(e);
                })(),
                d.on("mousemove", function (e) {
                    (f = e.pageX - d.offset().left), (h = e.pageY - d.offset().top), u.css({ left: f + "px", top: h + "px", opacity: 1, transform: "scale(1)" }), u.css({ opacity: 1 });
                }),
                d.on("mouseleave", function (e) {
                    u.css({ opacity: 0, transform: "scale(0)" });
                }),
                $.each(function () {
                    var o = e(this);
                    o.on("mousemove", function (e) {
                        (f = e.pageX - o.offset().left), (h = e.pageY - o.offset().top), m.css({ left: f + "px", top: h + "px", opacity: 1, transform: "scale(1)" }), m.css({ opacity: 1 });
                    }),
                        o.on("mouseleave", function () {
                            m.css({ opacity: 0, transform: "scale(0)" });
                        });
                });
            let _ = new Lenis({ duration: 1.2, easing: (e) => Math.min(1, 1.001 - Math.pow(2, -10 * e)) });
            function y(e) {
                _.raf(e), requestAnimationFrame(y);
            }
            _.on("scroll", (e) => { }), requestAnimationFrame(y);
        }
        let w, k, b;
        e(".hero--play--area").bind("click", function (o) {
            var t = e(this);
            e("html, body")
                .stop()
                .animate({ scrollTop: e(t.attr("href")).offset().top - "0" + "px" }, 600, "easeInSine"),
                o.preventDefault();
        }),
            e(".work--step--area").length > 0 &&
            ((w = {
                step1: lottie.loadAnimation({ container: document.querySelector(".target1"), renderer: "svg", loop: !0, autoplay: !1, path: "/wp-content/uploads/2024/03/discovery.json" }),
                step2: lottie.loadAnimation({
                    container: document.querySelector(".target2"),
                    renderer: "svg",
                    loop: !0,
                    autoplay: !1,
                    path: "/wp-content/uploads/2024/03/design.json",
                    rendererSettings: { preserveAspectRatio: "xMidYMid meet", forceRender: !1 },
                }),
                step3: lottie.loadAnimation({ container: document.querySelector(".target3"), renderer: "svg", loop: !0, autoplay: !1, path: "/wp-content/uploads/2024/03/development.json" }),
                step4: lottie.loadAnimation({ container: document.querySelector(".target4"), renderer: "svg", loop: !0, autoplay: !1, path: "/wp-content/uploads/2024/03/testing.json" }),
                step5: lottie.loadAnimation({ container: document.querySelector(".target5"), renderer: "svg", loop: !0, autoplay: !1, path: "/wp-content/uploads/2024/03/improve.json" }),
                step6: lottie.loadAnimation({ container: document.querySelector(".target6"), renderer: "svg", loop: !0, autoplay: !1, path: "/wp-content/uploads/2024/03/complete.json" }),
            }),
                (k = {
                    step1: document.querySelector(".step--one"),
                    step2: document.querySelector(".step--two"),
                    step3: document.querySelector(".step--three"),
                    step4: document.querySelector(".step--four"),
                    step5: document.querySelector(".step--five"),
                    step6: document.querySelector(".step--six"),
                }),
                (b = () => {
                    for (let e in k)
                        if (k.hasOwnProperty(e)) {
                            let o = k[e];
                            o.getBoundingClientRect().top <= 600 ? w[e].play() : o.classList.remove("active");
                        }
                }),
                window.addEventListener("scroll", b)),
            // Only call Splitting if not already initialized by Preloader
            !window.splittingInitialized && Splitting(),
            document.querySelectorAll(".choose--card").forEach((e, o) => {
                let t = e.querySelector(".hover--revel--img"),
                    r = e.querySelector(".hover--revel--img img"),
                    a = 0,
                    s = !1;
                function n() {
                    (t.style.opacity = 1), (t.style.transform = "translate(-100%, -50%) rotate(5deg)"), (r.style.transform = "scale(1, 1)"), (t.style.left = a + "px");
                }
                e.addEventListener("mousemove", (o) => {
                    (a = o.clientX - e.getBoundingClientRect().left), s || requestAnimationFrame(n);
                }),
                    e.addEventListener("mouseleave", () => {
                        (s = !0),
                            setTimeout(() => {
                                (t.style.opacity = 0), (t.style.transform = "translate(-50%, -50%) rotate(-5deg)"), (r.style.transform = "scale(0.8, 0.8)"), (s = !1);
                            }, 200);
                    });
            }),
            e("select").niceSelect(),
            document.addEventListener("contextmenu", function (e) { }),
            document.addEventListener("keydown", function (e) { });

        function categoryhandle() {
            var categories = document.querySelectorAll('.contact--popup--wrapper .pop--interest--group label');
            var categoriesSpan = document.querySelectorAll('.contact--popup--wrapper .pop--interest--group label span');

            if (categories) {
                categories.forEach((categori) => {
                    console.log(categori);
                    categori.addEventListener('click', (e) => {
                        var current = e.target;
                        if (current.classList.contains('active')) {
                            current.classList.remove('active');
                        } else {
                            current.classList.add('active');
                        }

                    });
                });
                categoriesSpan.forEach((categorispan) => {

                    categorispan.addEventListener('click', (e) => {
                        var current = e.target.parentElement;
                        console.log(current)
                        if (current.classList.contains('active')) {
                            current.classList.remove('active');
                        } else {
                            current.classList.add('active');
                        }

                    });
                });
            }
        }

        categoryhandle();
    });
})(jQuery);
