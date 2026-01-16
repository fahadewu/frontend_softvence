'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import caseStudiesData from '@/data/caseStudies.json';
import CaseStudySection from './CaseStudySection';

const allCaseStudies = caseStudiesData.caseStudies;

export default function MainContent() {


	useEffect(() => {
		// Refresh AOS after component mounts to ensure animations work
		const timer = setTimeout(() => {
			if (typeof window !== 'undefined' && (window as any).AOS) {
				(window as any).AOS.refresh();
			}
		}, 100);

		return () => clearTimeout(timer);
	}, []);

	// Initialize Lottie animations for "How We Work" section
	useEffect(() => {
		if (typeof window === 'undefined') return;

		const initLottie = () => {
			const lottie = (window as any).lottie;
			if (!lottie) return;

			// Check if containers exist
			const containers = {
				target1: document.querySelector('.target1'),
				target2: document.querySelector('.target2'),
				target3: document.querySelector('.target3'),
				target4: document.querySelector('.target4'),
				target5: document.querySelector('.target5'),
				target6: document.querySelector('.target6'),
			};

			// Only initialize if all containers exist and are empty
			if (!containers.target1 || containers.target1.children.length > 0) return;

			const animations: any = {
				step1: lottie.loadAnimation({
					container: containers.target1,
					renderer: 'svg',
					loop: true,
					autoplay: false,
					path: '/wp-content/uploads/2024/03/discovery.json'
				}),
				step2: lottie.loadAnimation({
					container: containers.target2,
					renderer: 'svg',
					loop: true,
					autoplay: false,
					path: '/wp-content/uploads/2024/03/design.json'
				}),
				step3: lottie.loadAnimation({
					container: containers.target3,
					renderer: 'svg',
					loop: true,
					autoplay: false,
					path: '/wp-content/uploads/2024/03/development.json'
				}),
				step4: lottie.loadAnimation({
					container: containers.target4,
					renderer: 'svg',
					loop: true,
					autoplay: false,
					path: '/wp-content/uploads/2024/03/testing.json'
				}),
				step5: lottie.loadAnimation({
					container: containers.target5,
					renderer: 'svg',
					loop: true,
					autoplay: false,
					path: '/wp-content/uploads/2024/03/improve.json'
				}),
				step6: lottie.loadAnimation({
					container: containers.target6,
					renderer: 'svg',
					loop: true,
					autoplay: false,
					path: '/wp-content/uploads/2024/03/complete.json'
				}),
			};

			// Scroll handler to play animations when in view
			const steps = {
				step1: document.querySelector('.step--one'),
				step2: document.querySelector('.step--two'),
				step3: document.querySelector('.step--three'),
				step4: document.querySelector('.step--four'),
				step5: document.querySelector('.step--five'),
				step6: document.querySelector('.step--six'),
			};

			const handleScroll = () => {
				Object.keys(steps).forEach((key) => {
					const step = steps[key as keyof typeof steps];
					if (step && animations[key]) {
						const rect = step.getBoundingClientRect();
						if (rect.top <= 600) {
							animations[key].play();
						}
					}
				});
			};

			window.addEventListener('scroll', handleScroll);

			return () => {
				window.removeEventListener('scroll', handleScroll);
				// Destroy animations on cleanup
				Object.values(animations).forEach((anim: any) => anim?.destroy());
			};
		};

		// Wait for lottie library to load
		const timer = setTimeout(initLottie, 1000);
		return () => clearTimeout(timer);
	}, []);

	return (
		<>

			<section className="hero--area section-light">
				<div className="hero--contents--wrapper">

					<div className="branding--area hero--box">
						<h1 data-splitting>Branding</h1>
						<p>A digital agency focused on web design and development! We have designers, developers, strategists, and producers building elevated websites in USA.</p>
					</div>

					<div className="design--area hero--box">
						<h2 data-splitting>Design</h2>
						<a href="#hero--video" className="hero--play--area">
							<div className="play--img--area">
								<img src="https://softvence.agency/wp-content/uploads/al_opt_content/IMAGE/softvence-assect.vercel.app//assets/images/hero-play1.png?bv_host=softvence-assect.vercel.app&amp;bv-resized-infos=bv_resized_mobile%3A155%2A156%3Bbv_resized_ipad%3A155%2A156%3Bbv_resized_desktop%3A155%2A156" data-bv-data- loading="lazy" className="img1 data-bv-tag-attr-replace data-bv-lazyload-tag-img" alt="" />
								<img loading="lazy" className="img2" src="data:image/png+xml;base64,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" alt="" />
							</div>
							<div className="play--text">
								<h4>We are the <br />USA-based company </h4>
								<p>watch the video</p>
							</div>
						</a>
					</div>

					<div className="development--area hero--box">

						<a href="#" className="rotate--circle--wrapper circle--hero contact--toggle">
							<div className="circle--outer">
								<img loading="lazy" src="data:image/png+xml;base64,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" alt="" />
							</div>
							<div className="circle--inner">
								<p>CLICK <br />HERE!</p>
								<svg width={50} height={50} viewBox="0 0 50 50" fill="none"
									xmlns="http://www.w3.org/2000/svg">
									<path d="M37.6455 30.0625L24.9997 42.7083L12.3538 30.0625" stroke="white"
										strokeWidth="4" strokeMiterlimit="10" strokeLinecap="round"
										strokeLinejoin="round" />
									<path d="M25 7.29297L25 42.3555" stroke="white" strokeWidth="4" strokeMiterlimit="10"
										strokeLinecap="round" strokeLinejoin="round" />
								</svg>
							</div>
						</a>
						<h2 data-splitting>Development</h2>
					</div>
				</div>
			</section>


			<section className="hero--video--area" id="showrell--video--modal" data-aos="fade-In" data-aos-duration="1800">
				<div className="row">
					<div className="col-md-12">
						<div className="video--showrell--showcase">
							<img src="https://softvence.agency/wp-content/uploads/2025/11/Softvence.png?bv_host=softvence.agency&amp;bv-resized-infos=bv_resized_mobile%3A480%2A267%3Bbv_resized_ipad%3A820%2A457%3Bbv_resized_desktop%3A1319%2A735" data-bv-data- loading="lazy" className="showcase--img data-bv-tag-attr-replace data-bv-lazyload-tag-img" alt="" />
						</div>
					</div>
				</div>
				<div className="playCursor">
					<img src="https://softvence.agency/wp-content/uploads/al_opt_content/IMAGE/softvence-assect.vercel.app//assets/images/rotate-showrell-img.png?bv_host=softvence-assect.vercel.app&amp;bv-resized-infos=bv_resized_mobile%3A375%2A469%3Bbv_resized_ipad%3A375%2A469%3Bbv_resized_desktop%3A375%2A469" data-bv-data- className="bv-tag-attr-replace data-bv-lazyload-tag-img" loading="lazy" alt="" />
					<svg viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink" fill="#fff">
						<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
						<g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
						<g id="SVGRepo_iconCarrier">
							<title>multimedia / 9 - multimedia, play icon</title>
							<g id="Free-Icons" stroke="none" strokeWidth="1" fill="#fff" fillRule="evenodd"
								strokeLinecap="round" strokeLinejoin="round">
								<g transform="translate(-749.000000, -379.000000)" id="Group" stroke="#fff"
									strokeWidth="2">
									<g transform="translate(745.000000, 376.000000)" id="Shape">
										<path
											d="M5,4.67805648 C5,4.56284567 5.03231968,4.44953549 5.09390785,4.34882312 C5.29405709,4.02152811 5.74836552,3.90360587 6.10863414,4.08543644 L20.6160344,11.4074417 C20.7378493,11.4689227 20.8382812,11.5601626 20.9059562,11.6708284 C21.1061054,11.9981234 20.976303,12.4108512 20.6160344,12.5926818 L6.10863414,19.9146871 C5.99777542,19.9706384 5.87304972,20 5.7462319,20 C5.3340994,20 5,19.6964791 5,19.322067 L5,4.67805648 Z">
										</path>
									</g>
								</g>
							</g>
						</g>
					</svg>
				</div>
			</section>


			<section className="about--area section section-light">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 mt_20">
							<div className="single--title">
								<h3 className="common--sub--heading mt_10" data-aos="fade-up" data-aos-duration="1000">ABOUT
									US</h3>
							</div>
						</div>
						<div className="col-lg-9 mt_20">
							<div className="about--right--text">
								<h3 className="common--heading" data-aos="fade-up" data-aos-duration="1000">We are the
									USA-based company offering a wide Range of services at
									<span className="primary--dark">a competitively low cost.</span>
								</h3>
								<p className="common--para" data-aos="fade-up" data-aos-duration="1000">Step into the future of digital excellence with Softvence Agency, where we provide a spectrum of services at a competitive cost! Our passionate team blends creativity with functionality, ensuring success that connects with vision. Softvence Agency – where quality meets affordability, creating a digital impact.</p>
								<a href="/about-us" className="button buttonv2 button-click" data-aos="fade-up"
									data-aos-duration="1000">Learn More</a>
							</div>
						</div>
					</div>
				</div>
			</section>



			<section className="service--area" data-aos="fade-In" data-aos-duration="1800">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="service--item--box">
								<img src="https://softvence.agency/wp-content/uploads/al_opt_content/IMAGE/softvence-assect.vercel.app//assets/images/service-preview.png?bv_host=softvence-assect.vercel.app&amp;bv-resized-infos=bv_resized_mobile%3A480%2A250%3Bbv_resized_ipad%3A820%2A427%3Bbv_resized_desktop%3A1536%2A800" data-bv-data- loading="lazy" className="showcase--img data-bv-tag-attr-replace data-bv-lazyload-tag-img" alt="" />
								<h3 className="common--sub--heading">SERVICES</h3>
								<ul>
									<li>
										<Link href="/services/brand-identity-design">
											Brand Identity Design											<img src="/assets/images/arrow-right.svg" data-bv-data- className="bv-tag-attr-replace data-bv-lazyload-tag-img" loading="lazy" alt="" />
										</Link>
										<div className="img--area">
											<img src="https://softvence.agency/wp-content/uploads/2025/11/Branding-scaled.png?bv_host=softvence.agency&amp;bv-resized-infos=bv_resized_mobile%3A480%2A250%3Bbv_resized_ipad%3A820%2A427%3Bbv_resized_desktop%3A1536%2A800" data-bv-data- loading="lazy" className="w-100 data-bv-tag-attr-replace data-bv-lazyload-tag-img" alt="" />
										</div>
									</li>
									<li>
										<Link href="/services/consultation">
											Consultation											<img src="/assets/images/arrow-right.svg" data-bv-data- className="bv-tag-attr-replace data-bv-lazyload-tag-img" loading="lazy" alt="" />
										</Link>
										<div className="img--area">
											<img src="https://softvence.agency/wp-content/uploads/2025/11/Consultation.png?bv_host=softvence.agency&amp;bv-resized-infos=bv_resized_mobile%3A480%2A250%3Bbv_resized_ipad%3A820%2A427%3Bbv_resized_desktop%3A1536%2A800" data-bv-data- loading="lazy" className="w-100 data-bv-tag-attr-replace data-bv-lazyload-tag-img" alt="" />
										</div>
									</li>
									<li>
										<Link href="/services/data-analytics">
											Data Analytics											<img src="/assets/images/arrow-right.svg" data-bv-data- className="bv-tag-attr-replace data-bv-lazyload-tag-img" loading="lazy" alt="" />
										</Link>
										<div className="img--area">
											<img src="https://softvence.agency/wp-content/uploads/2025/11/Data.png?bv_host=softvence.agency&amp;bv-resized-infos=bv_resized_mobile%3A480%2A250%3Bbv_resized_ipad%3A820%2A427%3Bbv_resized_desktop%3A1536%2A800" data-bv-data- loading="lazy" className="w-100 data-bv-tag-attr-replace data-bv-lazyload-tag-img" alt="" />
										</div>
									</li>
									<li>
										<Link href="/services/mobile-app-development">
											Mobile App Development											<img src="/assets/images/arrow-right.svg" data-bv-data- className="bv-tag-attr-replace data-bv-lazyload-tag-img" loading="lazy" alt="" />
										</Link>
										<div className="img--area">
											<img src="https://softvence.agency/wp-content/uploads/2025/11/Mobile.png?bv_host=softvence.agency&amp;bv-resized-infos=bv_resized_mobile%3A480%2A250%3Bbv_resized_ipad%3A820%2A427%3Bbv_resized_desktop%3A1536%2A800" data-bv-data- loading="lazy" className="w-100 data-bv-tag-attr-replace data-bv-lazyload-tag-img" alt="" />
										</div>
									</li>
									<li>
										<Link href="/services/ux-ui-design">
											UX/UI Design											<img src="/assets/images/arrow-right.svg" data-bv-data- className="bv-tag-attr-replace data-bv-lazyload-tag-img" loading="lazy" alt="" />
										</Link>
										<div className="img--area">
											<img src="https://softvence.agency/wp-content/uploads/2025/11/UI-UX-55.png?bv_host=softvence.agency&amp;bv-resized-infos=bv_resized_mobile%3A480%2A250%3Bbv_resized_ipad%3A820%2A427%3Bbv_resized_desktop%3A1536%2A800" data-bv-data- loading="lazy" className="w-100 data-bv-tag-attr-replace data-bv-lazyload-tag-img" alt="" />
										</div>
									</li>
									<li>
										<Link href="/services/vibe-coding-development-service">
											Vibe coding											<img src="/assets/images/arrow-right.svg" data-bv-data- className="bv-tag-attr-replace data-bv-lazyload-tag-img" loading="lazy" alt="" />
										</Link>
										<div className="img--area">
											<img src="https://softvence.agency/wp-content/uploads/2025/02/6-Design.jpg?bv_host=softvence.agency&amp;bv-resized-infos=bv_resized_mobile%3A480%2A270%3Bbv_resized_ipad%3A820%2A461%3Bbv_resized_desktop%3A1380%2A776" data-bv-data- loading="lazy" className="w-100 data-bv-tag-attr-replace data-bv-lazyload-tag-img" alt="" />
										</div>
									</li>
									<li>
										<Link href="/services/web-development">
											Web Development											<img src="/assets/images/arrow-right.svg" data-bv-data- className="bv-tag-attr-replace data-bv-lazyload-tag-img" loading="lazy" alt="" />
										</Link>
										<div className="img--area">
											<img src="https://softvence.agency/wp-content/uploads/2024/02/Frame-10-1.png?bv_host=softvence.agency&amp;bv-resized-infos=bv_resized_mobile%3A480%2A250%3Bbv_resized_ipad%3A820%2A427%3Bbv_resized_desktop%3A1080%2A563" data-bv-data- loading="lazy" className="w-100 data-bv-tag-attr-replace data-bv-lazyload-tag-img" alt="" />
										</div>
									</li>
								</ul>
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
										Bringing <span className="primary--dark">Brands & Business</span> to Life<br /> with
										<span className="primary--dark">strategy & design.</span>
										<img src="/assets/images/start-primary.svg" data-bv-data- className="bv-tag-attr-replace data-bv-lazyload-tag-img" loading="lazy" alt="" />
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
								<p className="common--para" data-aos="fade-up" data-aos-duration="1000">Empower your brand with Softvence Agency – where strategy meets design. Our skilled team brings brands to life through thoughtful planning and creative design. Join us to experience the seamless blend of strategy and design that propels businesses to new heights!</p>
							</div>

							<div className="counter--wrapper">

								<div className="counter--box" data-aos="fade-In" data-aos-duration="1000"
									data-aos-delay="300">
									<p>Clients Served</p>
									<h2>
										<span className="counter">40000</span>
										<p>+</p>
									</h2>
								</div>

								<div className="counter--box" data-aos="fade-In" data-aos-duration="1000"
									data-aos-delay="600">
									<p>Team Members</p>
									<h2>
										<span className="counter">400</span>
										<p>+</p>
									</h2>
								</div>

								<div className="counter--box" data-aos="fade-In" data-aos-duration="1000"
									data-aos-delay="900">
									<p>Years Of Experience</p>
									<h2 className="primary--color">
										<span className="counter primary--color">7</span>
										<p className="primary--color">+</p>
									</h2>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>


			<section className="marquee--area" data-aos="fade-up" data-aos-duration="1000">
				<div className="marquee--wrapper">
					<div className="marquee">
						<div className="marquee__inner-wrap">
							<div className="marquee__inner">
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={60} height={33} viewBox="0 0 60 33"
										fill="none">
										<path fillRule="evenodd" clipRule="evenodd"
											d="M-45.4155 30.604L-45.4156 30.604C-46.098 30.6739 -46.7907 30.7449 -47.5001 30.8323L-53.191 14.3686V31.5328C-54.9694 31.708 -56.5699 31.9415 -58.2891 32.2334V0.765625H-53.5467L-47.0851 18.6305V0.765625H-42.0463V30.1901C-43.1597 30.3728 -44.2731 30.4869 -45.4155 30.604ZM-28.7037 12.2648L-28.7036 12.2648C-27.5257 12.2363 -26.3752 12.2085 -25.5072 12.2085V17.1125C-27.7006 17.1125 -30.3089 17.1125 -32.2059 17.2293V24.527C-31.2822 24.4713 -30.3524 24.4097 -29.4186 24.3479L-29.4186 24.3479L-29.4185 24.3479L-29.4185 24.3478L-29.4184 24.3478L-29.4184 24.3478C-27.4158 24.2151 -25.3945 24.0812 -23.3731 24.0016V28.7305L-37.1854 29.7814V0.765625H-23.3731V5.6697H-32.2059V12.3252C-31.2045 12.3252 -29.939 12.2946 -28.7037 12.2648ZM-10.0351 5.72808H-4.87778C-4.87778 5.72808 -4.87778 0.765625 -4.8185 0.765625H-20.172V5.72808H-15.0147V28.3802C-13.4141 28.3218 -11.695 28.3218 -10.0351 28.3218V5.72808ZM3.24446 11.9749H10.0617V16.879H3.24446V28.0299H-1.67578V0.765625H12.255V5.6697H3.24446V11.9749ZM25.5455 23.9444C23.8312 23.8451 22.1036 23.7451 20.376 23.7097V0.765625H15.3965V28.3218C19.961 28.4386 24.407 28.6721 28.853 28.964V24.1184C27.7585 24.0725 26.6547 24.0086 25.5455 23.9444ZM34.743 29.422L34.7432 29.422C35.8114 29.4856 36.8961 29.5502 37.9808 29.6646V0.765625H33.0605V29.3143C33.6151 29.3548 34.1767 29.3882 34.743 29.422ZM53.4537 15.7114L59.7967 0.765625H54.2837L50.7861 8.99746L47.5257 0.765625H42.1905L48 15.5362L41.5977 29.8982C42.3091 29.9916 43.0205 30.0663 43.7318 30.141C44.7989 30.2531 45.8659 30.3652 46.9329 30.5403L50.6083 22.1918L54.1651 31.2993C54.8294 31.4015 55.4865 31.5109 56.1414 31.62C57.3565 31.8223 58.5641 32.0233 59.7967 32.175L53.4537 15.7114Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={120} height={31} viewBox="0 0 120 31"
										fill="none">
										<path fillRule="evenodd" clipRule="evenodd"
											d="M17.9285 2.59615C17.9285 3.8195 16.8615 4.86809 15.6166 4.86809C14.3717 4.86809 13.3047 3.8195 13.3047 2.59615C13.3047 1.3728 14.3717 0.324219 15.6166 0.324219C16.8615 0.324219 17.9285 1.3728 17.9285 2.59615ZM15.616 6.73242C14.2526 6.73242 13.1855 7.78101 13.1855 9.12086C13.1855 10.4607 14.2526 11.5093 15.616 11.5093C16.9795 11.5093 18.0465 10.4607 18.0465 9.12086C18.0465 7.72275 16.9795 6.73242 15.616 6.73242ZM13.1271 15.5287C13.1271 14.1888 14.2534 13.082 15.6169 13.082C16.9803 13.082 18.1659 14.1888 18.1066 15.5287C18.1066 16.8686 16.9803 17.9754 15.6169 17.9754C14.2534 17.9754 13.1271 16.8686 13.1271 15.5287ZM15.616 19.5479C14.2526 19.5479 13.1855 20.5964 13.1855 21.9363C13.1855 23.2762 14.2526 24.3247 15.616 24.3247C16.9795 24.3247 18.0465 23.2762 18.0465 21.9363C18.0465 20.6547 16.9795 19.5479 15.616 19.5479ZM13.3047 28.4028C13.3047 27.1794 14.3717 26.1309 15.6166 26.1309C16.9208 26.1309 17.9285 27.1794 17.9285 28.4028C17.9285 29.6261 16.8615 30.6747 15.6166 30.6747C14.3717 30.6747 13.3047 29.6261 13.3047 28.4028ZM22.0198 6.44141C20.5378 6.44141 19.293 7.66476 19.293 9.12112C19.293 10.5775 20.5378 11.8008 22.0198 11.8008C23.5018 11.8008 24.7467 10.5775 24.7467 9.12112C24.7467 7.66476 23.5018 6.44141 22.0198 6.44141ZM19.1738 15.5872C19.1738 14.0144 20.478 12.791 22.0193 12.791C23.5605 12.791 24.8647 14.0144 24.8647 15.5872C24.8647 17.1601 23.5605 18.3835 22.0193 18.3835C20.4187 18.3835 19.1738 17.1019 19.1738 15.5872ZM22.0198 19.2568C20.5378 19.2568 19.293 20.4802 19.293 21.9366C19.293 23.3929 20.5378 24.6163 22.0198 24.6163C23.5018 24.6163 24.7467 23.3929 24.7467 21.9366C24.7467 20.4802 23.5018 19.2568 22.0198 19.2568ZM25.457 15.5289C25.457 13.7813 26.939 12.4414 28.5989 12.4414C30.2587 12.4414 31.6222 13.7813 31.7407 15.5289C31.7407 17.2765 30.3773 18.6164 28.5989 18.6164C26.8205 18.6164 25.457 17.16 25.457 15.5289ZM9.15488 7.02344C8.02856 7.02344 7.08008 7.95551 7.08008 9.06235C7.08008 10.1692 8.02856 11.1013 9.15488 11.1013C10.2812 11.1013 11.2297 10.1692 11.2297 9.06235C11.2297 7.95551 10.3405 7.02344 9.15488 7.02344ZM6.96289 15.5285C6.96289 14.3051 7.91137 13.373 9.15625 13.373C10.4011 13.373 11.3496 14.3051 11.3496 15.5285C11.3496 16.7518 10.4011 17.6839 9.15625 17.6839C7.91137 17.6839 6.96289 16.7518 6.96289 15.5285ZM9.15488 19.8398C8.02856 19.8398 7.08008 20.7719 7.08008 21.8788C7.08008 22.9856 8.02856 23.9177 9.15488 23.9177C10.2812 23.9177 11.2297 22.9856 11.2297 21.8788C11.2297 20.7719 10.3405 19.8398 9.15488 19.8398ZM0.796875 15.587C0.796875 14.5384 1.62679 13.7228 2.69383 13.7228C3.76087 13.7228 4.59079 14.5384 4.59079 15.587C4.59079 16.6355 3.76087 17.4511 2.69383 17.4511C1.62679 17.4511 0.796875 16.6355 0.796875 15.587Z"
											fill="white" />
										<path
											d="M55.3349 11.5703C55.0978 11.5703 54.9199 11.8033 54.9199 11.9781V28.1147C54.9199 28.3477 55.157 28.5224 55.3349 28.5224H57.2911C57.5282 28.5224 57.7061 28.2894 57.7061 28.1147V11.9781C57.7061 11.7451 57.469 11.5703 57.2911 11.5703H55.3349Z"
											fill="white" />
										<path
											d="M56.4028 4.75391C55.3358 4.75391 54.5059 5.56947 54.5059 6.61806C54.5059 7.66664 55.3358 8.48221 56.4028 8.48221C57.4699 8.48221 58.2998 7.66664 58.2998 6.61806C58.2998 5.56947 57.4106 4.75391 56.4028 4.75391Z"
											fill="white" />
										<path
											d="M97.4247 11.5703C97.1876 11.5703 97.0098 11.8033 97.0098 11.9781V28.1147C97.0098 28.3477 97.2469 28.5224 97.4247 28.5224H99.381C99.6181 28.5224 99.7959 28.2894 99.7959 28.1147V11.9781C99.7959 11.7451 99.5588 11.5703 99.381 11.5703H97.4247Z"
											fill="white" />
										<path
											d="M98.3716 4.75391C97.3045 4.75391 96.4746 5.56947 96.4746 6.61806C96.4746 7.66664 97.3045 8.48221 98.3716 8.48221C99.4386 8.48221 100.269 7.66664 100.269 6.61806C100.269 5.56947 99.4386 4.75391 98.3716 4.75391Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M118.387 26.756C118.375 26.8126 118.345 26.881 118.272 26.9494C118.272 27.0659 118.149 27.1824 117.902 27.1242L117.997 27.2334C117.984 27.2382 117.973 27.241 117.964 27.241H117.779L117.778 27.2407H117.531V27.0663V26.542H117.964C118.087 26.542 118.21 26.542 118.272 26.6585C118.345 26.6585 118.375 26.699 118.387 26.756ZM117.531 27.2407H117.47V27.765H117.223V26.3086H117.778H118.025C118.149 26.3086 118.272 26.4251 118.272 26.4251C118.396 26.4251 118.396 26.5416 118.396 26.5416V26.6581C118.396 26.6822 118.396 26.7162 118.387 26.756C118.396 26.7958 118.396 26.8437 118.396 26.8915C118.396 27.008 118.396 27.1245 118.272 27.1245C118.2 27.1245 118.128 27.1645 118.068 27.1976C118.041 27.2122 118.017 27.2255 117.997 27.2334L118.458 27.765H118.211L117.779 27.241H117.531V27.2407Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M116.453 27.0664C116.453 26.3674 117.105 25.7266 117.817 25.7266C118.587 25.7266 119.18 26.3091 119.18 27.0664C119.18 27.7655 118.528 28.4063 117.817 28.4063C117.105 28.4063 116.453 27.7655 116.453 27.0664ZM116.572 27.0661C116.572 27.7652 117.106 28.2895 117.817 28.2895C118.469 28.2895 119.062 27.7652 119.062 27.0661C119.062 26.3671 118.529 25.8428 117.817 25.8428C117.106 25.8428 116.572 26.3671 116.572 27.0661Z"
											fill="white" />
										<path
											d="M71.6371 14.1918C71.8743 14.1918 72.0521 13.9588 72.0521 13.7841V11.8617C72.0521 11.6286 71.815 11.4539 71.6371 11.4539H67.4283V5.27888C67.4283 5.04586 67.1911 4.87109 67.0133 4.87109H65.0571C64.8199 4.87109 64.6421 5.10411 64.6421 5.27888V11.4539H62.5673C62.3302 11.4539 62.1523 11.6869 62.1523 11.8617V13.7841C62.1523 14.0171 62.3895 14.1918 62.5673 14.1918H64.6421V23.5126C64.6421 26.3671 66.5983 28.2312 69.4438 28.2312H71.5186C71.7557 28.2312 71.9335 27.9982 71.9335 27.8235V25.901C71.9335 25.668 71.6964 25.4933 71.5186 25.4933H69.7402C68.3767 25.4933 67.4283 24.5612 67.4283 23.1048V14.1336H71.6371V14.1918Z"
											fill="white" />
										<path
											d="M113.252 14.1918C113.489 14.1918 113.667 13.9588 113.667 13.7841V11.8617C113.667 11.6286 113.43 11.4539 113.252 11.4539H109.043V5.27888C109.043 5.04586 108.806 4.87109 108.629 4.87109H106.672C106.435 4.87109 106.257 5.10411 106.257 5.27888V11.4539H104.183C103.945 11.4539 103.768 11.6869 103.768 11.8617V13.7841C103.768 14.0171 104.005 14.1918 104.183 14.1918H106.257V23.5126C106.257 26.3671 108.214 28.2312 111.059 28.2312H113.134C113.371 28.2312 113.549 27.9982 113.549 27.8235V25.901C113.549 25.668 113.312 25.4933 113.134 25.4933H111.237C109.873 25.4933 108.925 24.5612 108.925 23.1048V14.1336H113.193L113.252 14.1918Z"
											fill="white" />
										<path
											d="M42.8862 14.1907V27.9388C42.8862 28.1718 43.1234 28.3466 43.3012 28.3466H45.2574C45.4946 28.3466 45.6724 28.1136 45.6724 27.9388V14.1907H50.2962C50.5334 14.1907 50.7112 13.9577 50.7112 13.7829V11.8605C50.7112 11.6275 50.4741 11.4527 50.2962 11.4527H45.6724V7.84092C45.6724 6.38455 46.7394 5.39422 47.9843 5.39422H50.2962C50.5334 5.39422 50.7112 5.1612 50.7112 4.98644V3.06403C50.7112 2.83101 50.4741 2.65625 50.2962 2.65625H48.1029C45.1982 2.65625 42.8862 5.04469 42.8862 7.78266V11.4527H40.8114C40.5743 11.4527 40.3965 11.6857 40.3965 11.8605V13.7829C40.3965 14.0159 40.6336 14.1907 40.8114 14.1907H42.8862Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M84.7375 10.9277C87.0494 10.9277 89.2428 11.8598 90.7841 13.4909C92.3253 15.1221 93.1553 17.394 93.1553 19.899C93.1553 26.1322 88.8278 28.9284 84.6782 28.9284C80.4693 28.9284 76.2012 26.1905 76.2012 19.899V2.94685C76.2012 2.77208 76.379 2.53906 76.6161 2.53906H78.5724C78.7502 2.53906 78.9873 2.71383 78.9873 2.94685V13.1997C80.3508 11.8598 82.5441 10.9277 84.7375 10.9277ZM78.9277 19.9575C78.9277 23.045 80.469 26.3073 84.6779 26.3073C88.8868 26.3073 90.3688 23.045 90.4281 19.9575C90.4281 16.2292 88.1161 13.666 84.6779 13.666C81.2397 13.666 78.9277 16.171 78.9277 19.9575Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={119} height={39} viewBox="0 0 119 39"
										fill="none">
										<path
											d="M29.2361 13.7558H15.4143V17.8313H25.2431C24.7517 23.574 19.9602 26.1058 15.4758 26.1058C9.70135 26.1058 4.66408 21.5363 4.66408 15.176C4.66408 8.93927 9.45563 4.12277 15.4758 4.12277C20.1445 4.12277 22.8474 7.08677 22.8474 7.08677L25.6732 4.12277C25.6732 4.12277 21.9874 0.047268 15.2915 0.047268C6.7527 -0.014482 0.179688 7.21027 0.179688 15.0525C0.179688 22.7095 6.38412 30.1813 15.5372 30.1813C23.5845 30.1813 29.4818 24.6855 29.4818 16.4728C29.4818 14.7438 29.2361 13.7558 29.2361 13.7558Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M30.7715 20.3635C30.7715 15.1765 34.8259 10.7305 40.4774 10.7305C45.1461 10.7305 50.1834 14.065 50.2448 20.487C50.2448 26.168 45.9447 30.1817 40.6003 30.1817C34.703 30.1817 30.7715 25.674 30.7715 20.3635ZM45.9446 20.4873C45.9446 16.9058 43.3031 14.6211 40.5387 14.6211C37.4058 14.6211 35.01 17.0911 35.0715 20.4256C35.0715 23.8836 37.4672 26.3536 40.5387 26.3536C43.3645 26.3536 45.9446 24.0688 45.9446 20.4873Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M51.9043 20.3635C51.9043 15.1765 55.9587 10.7305 61.6102 10.7305C66.2789 10.7305 71.3162 14.065 71.3776 20.487C71.3776 26.168 67.0775 30.1817 61.7331 30.1817C55.8358 30.1817 51.9043 25.674 51.9043 20.3635ZM67.0774 20.4873C67.0774 16.9058 64.4359 14.6211 61.6716 14.6211C58.5386 14.6211 56.1428 17.0911 56.2043 20.4256C56.2043 23.8836 58.6001 26.3536 61.6716 26.3536C64.4973 26.3536 67.0774 24.0688 67.0774 20.4873Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M73.0352 20.4877C73.0352 15.3625 77.0895 10.793 82.3111 10.793C84.584 10.793 86.304 11.6575 87.4098 13.016V11.3487H91.4642V28.824C91.4642 35.6782 87.5326 38.951 82.3725 38.951C77.6424 38.951 75.0009 36.0487 73.7109 33.27L77.4581 31.7262C78.011 32.9612 79.4853 35.1842 82.434 35.1842C85.5055 35.1842 87.5326 33.1465 87.5326 29.812V27.8977C86.3655 29.1945 84.9526 30.2442 82.1882 30.2442C77.7653 30.2442 73.0352 26.2922 73.0352 20.4877ZM87.8394 20.5491C87.8394 16.8441 85.1979 14.6211 82.6793 14.6211C79.9764 14.6211 77.3349 16.7823 77.2734 20.6108C77.2734 24.1306 79.8535 26.4153 82.6179 26.4153C85.2593 26.4153 87.8394 24.3776 87.8394 20.5491Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M100.617 20.4252C100.617 14.6207 104.733 10.7305 109.647 10.7305C113.456 10.7305 116.343 13.324 117.633 16.288L118.309 17.8935L105.347 23.3275C106.146 24.8095 107.374 26.2915 110.077 26.2915C112.473 26.2915 113.948 24.9947 114.808 23.6362L118.186 25.921C116.712 27.897 114.132 30.1817 110.077 30.1817C105.224 30.1817 100.617 26.5385 100.617 20.4252ZM113.395 16.5967C112.78 15.4235 111.552 14.4972 109.77 14.4972C107.006 14.4972 104.303 17.3995 104.794 20.24L113.395 16.5967Z"
											fill="white" />
										<path d="M94.4746 29.6247H98.7133V0.972656H94.4746V29.6247Z" fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={119} height={37} viewBox="0 0 119 37"
										fill="none">
										<path fillRule="evenodd" clipRule="evenodd"
											d="M33.5255 24.8799C33.7025 25.2916 33.8794 25.762 34.0564 26.2325C34.5872 27.5851 34.7052 28.8789 34.5283 30.1728C34.1154 32.878 32.3458 35.2304 29.7505 36.2889C28.8067 36.7006 27.804 36.877 26.7422 36.877C26.4473 36.877 26.0934 36.877 25.7985 36.8182C24.5598 36.7006 23.3211 36.289 22.0824 35.5832C20.6078 34.7599 19.1332 33.5249 17.4816 31.7606C15.83 33.5249 14.4144 34.7599 12.8807 35.5832C11.6421 36.289 10.4034 36.6418 9.16468 36.8182C9.01726 36.8182 8.8551 36.8329 8.69294 36.8476L8.6928 36.8476C8.53059 36.8623 8.36838 36.877 8.22092 36.877C7.15919 36.877 6.15644 36.7006 5.21268 36.2889C2.67632 35.2304 0.788799 32.9368 0.375904 30.1728C0.198948 28.8201 0.375904 27.5263 0.847784 26.2325C1.02474 25.7032 1.20169 25.2916 1.37865 24.8799C1.67358 24.233 1.9685 23.5861 2.20444 22.998L2.26343 22.9392C4.85877 17.4111 7.57208 11.8242 10.4034 6.29609L10.5213 6.06086C10.8163 5.53159 11.1112 4.94351 11.4061 4.35544L11.4061 4.35538C11.4855 4.23092 11.565 4.10429 11.6453 3.97632L11.6453 3.97632L11.6453 3.97631C11.9823 3.4391 12.334 2.8783 12.7628 2.35586C14.0015 0.944427 15.653 0.121094 17.4816 0.121094C19.2511 0.121094 20.9617 0.944427 22.1414 2.41466C22.7312 3.06157 23.1441 3.76728 23.4981 4.41419L23.4981 4.41429C23.793 5.00235 24.0879 5.59041 24.3828 6.11966L24.5008 6.3549C27.3911 11.883 30.1044 17.4699 32.6407 22.998H32.6997C32.9357 23.5861 33.2306 24.233 33.5255 24.8799ZM62.5458 9.35455C62.5458 10.7072 61.484 11.7657 60.1274 11.7657C58.7707 11.7657 57.709 10.7072 57.709 9.35455C57.709 8.00193 58.7707 6.94336 60.1274 6.94336C61.543 7.00217 62.5458 8.06074 62.5458 9.35455ZM52.6962 14.1761V14.7642C52.6962 14.7642 51.5755 13.2939 49.0981 13.2939C45.0871 13.2939 41.9609 16.352 41.9609 20.5863C41.9609 24.7618 45.0871 27.8787 49.0981 27.8787C51.5755 27.8787 52.6962 26.3497 52.6962 26.3497V26.9966C52.6962 27.2906 52.9322 27.5258 53.2271 27.5258H56.2353V13.6468H53.2271C52.8732 13.6468 52.6962 13.882 52.6962 14.1761ZM49.6879 24.5274C51.0446 24.5274 52.1653 23.8217 52.6962 22.9983V18.0583C52.1653 17.2938 50.9856 16.5293 49.6879 16.5293C47.3285 16.5293 45.5 17.9995 45.5 20.5283C45.5 23.0572 47.3285 24.5274 49.6879 24.5274ZM58.3574 13.6475H61.8965V27.4677H58.3574V13.6475ZM107.67 14.7647C107.67 14.7647 108.849 13.2944 111.268 13.2944C115.279 13.2944 118.405 16.3525 118.405 20.528C118.405 24.7035 115.279 27.8204 111.268 27.8204C108.79 27.8204 107.67 26.2913 107.67 26.2913V26.9382C107.67 27.2323 107.434 27.4675 107.139 27.4675H104.131V7.00181H107.67V14.7647ZM110.678 24.4678C109.322 24.4678 108.26 23.7621 107.67 22.9388V17.9988C108.201 17.2343 109.38 16.4697 110.678 16.4697C113.038 16.4697 114.866 17.94 114.866 20.4688C114.866 22.9976 113.038 24.4678 110.678 24.4678ZM102.303 27.5258V19.2925C102.303 16.9401 101.831 15.6463 100.651 14.6466C99.5896 13.7644 98.2919 13.2939 96.7583 13.2939C95.4016 13.2939 94.045 13.7056 92.9832 14.7642V14.1761C92.9832 13.882 92.7473 13.6468 92.4524 13.6468H89.6211V27.5258H93.1602V17.8811C93.868 17.0578 94.9887 16.5285 96.0505 16.5285C97.997 16.5285 98.7638 17.4106 98.7638 19.7042V27.5258H102.303ZM81.0085 13.2944C78.5901 13.2944 77.4104 14.7647 77.4104 14.7647V7.00181H73.8713V27.4675H76.8795C77.1745 27.4675 77.4104 27.2323 77.4104 26.9382V26.2913C77.4104 26.2913 78.5311 27.8204 81.0085 27.8204C85.0195 27.8204 88.1457 24.7035 88.1457 20.528C88.2047 16.3525 85.0785 13.2944 81.0085 13.2944ZM77.4102 22.9388C78 23.7621 79.0617 24.4678 80.4184 24.4678C82.7778 24.4678 84.6063 22.9976 84.6063 20.4688C84.6063 17.94 82.7778 16.4697 80.4184 16.4697C79.1207 16.4697 77.941 17.2343 77.4102 17.9988V22.9388ZM70.8626 13.2939C71.9243 13.2939 72.5142 13.4704 72.5142 13.4704V16.7637C72.5142 16.7637 69.5649 15.7639 67.7364 17.8811V27.5258H64.1973V13.6468H67.2055C67.5004 13.6468 67.7364 13.882 67.7364 14.1761V14.7642C68.3262 13.9997 69.7419 13.2939 70.8626 13.2939ZM17.4226 28.1144C15.4171 25.5856 14.1194 23.2332 13.7065 21.2925C13.5296 20.4692 13.4706 19.7047 13.5886 19.0578C13.6475 18.4697 13.8835 17.9404 14.1784 17.5287C14.8862 16.5289 16.0659 15.882 17.4226 15.882C18.7792 15.882 20.0179 16.4701 20.6668 17.5287C20.9617 17.9992 21.1976 18.4697 21.2566 19.0578C21.3746 19.7047 21.3156 20.4692 21.1386 21.2925C20.7258 23.2332 19.4281 25.5856 17.4226 28.1144ZM28.8067 34.1718C30.6352 33.4661 31.9329 31.8194 32.1689 29.8787C32.2868 28.879 32.1689 27.9968 31.9919 27.0559C31.928 26.8648 31.8469 26.6738 31.7578 26.4641C31.6823 26.2865 31.6012 26.0954 31.52 25.8797C31.3726 25.5856 31.2398 25.2769 31.1071 24.9681C30.9744 24.6594 30.8417 24.3506 30.6942 24.0566V23.9978C28.1579 18.5285 25.4446 12.9416 22.6133 7.47228L22.4953 7.23705L22.4953 7.23702C22.2004 6.64893 21.9054 6.06085 21.6105 5.53157C21.3156 4.94347 20.9617 4.35538 20.5488 3.8849C19.782 3.00276 18.7203 2.53228 17.5995 2.53228C16.4788 2.53228 15.4171 3.00276 14.6503 3.8849C14.2374 4.41419 13.8835 4.94347 13.5886 5.53157C13.2936 6.11966 12.9987 6.70776 12.7038 7.23705L12.5858 7.47228C9.69555 12.9416 6.98223 18.5285 4.44587 23.9978L4.38689 24.0566C4.09196 24.6447 3.79704 25.2916 3.5611 25.8797C3.38414 26.2913 3.20719 26.703 3.08922 27.0559C2.67632 28.1144 2.61734 28.9966 2.73531 29.9375C2.97125 31.8194 4.26892 33.4661 6.09746 34.2306C6.92325 34.5247 7.86701 34.7011 8.86975 34.5835C9.81351 34.4659 10.7573 34.1718 11.701 33.6425C12.9987 32.878 14.3554 31.7606 15.889 30.0551C13.4706 27.0559 11.937 24.2918 11.4061 21.8806C11.1112 20.7632 11.0522 19.7047 11.2292 18.7637C11.4061 17.8228 11.701 16.9994 12.2319 16.2349C13.3526 14.647 15.2991 13.6473 17.4226 13.6473C19.5461 13.6473 21.4926 14.5882 22.6133 16.2349C23.1441 16.9994 23.4391 17.8228 23.616 18.7637C23.734 19.7047 23.675 20.7632 23.4391 21.8806C22.8492 24.2918 21.3746 26.997 18.9562 29.9963C20.4898 31.7018 21.7875 32.8192 23.1441 33.5837C24.1469 34.113 25.0317 34.407 25.9754 34.5247C26.9782 34.6423 27.9219 34.5247 28.8067 34.1718Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={136} height={39} viewBox="0 0 136 39"
										fill="none">
										<path
											d="M24.7247 3.43111C24.184 1.65952 22.2916 0.70559 20.5343 1.25069C18.777 1.7958 17.8308 3.70366 18.3715 5.47524L27.0227 32.3216C27.631 33.9569 29.3882 34.9108 31.0779 34.4339C32.8352 33.8888 33.9166 32.049 33.3759 30.2775C33.3759 30.2093 24.7247 3.43111 24.7247 3.43111Z"
											fill="white" />
										<path
											d="M11.3419 7.86079C10.8012 6.08921 8.90876 5.13528 7.1515 5.68038C5.39424 6.22548 4.44802 8.13335 4.98871 9.90493L13.6399 36.7513C14.2481 38.3866 16.0054 39.3405 17.6951 38.8636C19.4523 38.3184 20.5337 36.4787 19.993 34.7071C19.993 34.639 11.3419 7.86079 11.3419 7.86079Z"
											fill="white" />
										<path
											d="M35.6731 25.7103C37.4304 25.1652 38.3766 23.2574 37.8359 21.4858C37.2952 19.7142 35.4028 18.7603 33.6455 19.3054L6.94861 27.9589C5.32652 28.5721 4.3803 30.3437 4.85341 32.0472C5.39411 33.8188 7.21896 34.909 8.97622 34.3639C9.1114 34.3639 35.6731 25.7103 35.6731 25.7103Z"
											fill="white" />
										<path
											d="M12.4907 33.2751C14.248 32.7299 16.4783 31.9804 18.8439 31.1628C18.3032 29.3912 17.5597 27.1426 16.7487 24.7578L10.3955 26.8701L12.4907 33.2751Z"
											fill="white" />
										<path
											d="M25.9399 28.8454C28.3731 28.0277 30.6034 27.3463 32.2931 26.7331C31.7524 24.9615 31.009 22.713 30.1979 20.3281L23.8447 22.4404L25.9399 28.8454Z"
											fill="white" />
										<path
											d="M31.2794 12.1518C33.0366 11.6066 33.9828 9.69879 33.4421 7.9272C32.9014 6.15561 31.009 5.20168 29.2517 5.74679L2.62244 14.4684C1.00035 15.0817 0.0541306 16.8533 0.52724 18.5567C1.06794 20.3964 2.89279 21.4866 4.65005 20.8734C4.71764 20.8734 31.2794 12.1518 31.2794 12.1518Z"
											fill="white" />
										<path
											d="M8.16453 19.7165C9.9218 19.1714 12.1522 18.4218 14.5177 17.6042C13.7067 15.1512 13.0308 12.9027 12.4225 11.1992L6.06934 13.3115L8.16453 19.7165Z"
											fill="white" />
										<path
											d="M21.5473 15.3532C23.9805 14.5355 26.2109 13.8541 27.9005 13.2409C27.0895 10.7879 26.4136 8.53939 25.8053 6.83594L19.4521 8.94821L21.5473 15.3532Z"
											fill="white" />
										<path
											d="M62.6395 10.5177C63.7885 11.0628 63.9237 11.4035 62.9774 13.1751C62.0312 15.0148 61.8285 15.0829 60.6119 14.606C59.125 13.9927 57.3001 13.5157 56.0836 13.5157C54.1235 13.5157 52.8394 14.1971 52.8394 15.2873C52.8394 18.8305 64.1264 16.9226 64.1264 24.5541C64.1264 28.3698 60.8822 30.8909 56.016 30.8909C53.4477 30.8909 50.2711 30.0051 48.1083 28.9149C47.0269 28.3698 46.9593 28.0291 47.9055 26.1894C48.7166 24.6222 48.9869 24.4178 50.1359 24.8948C52.0283 25.7124 54.3263 26.3257 55.9484 26.3257C57.7732 26.3257 58.9222 25.5762 58.9222 24.486C58.9222 21.0109 47.4324 22.6462 47.4324 15.2873C47.4324 11.4035 50.6766 8.74609 55.4753 8.74609C57.7732 8.95051 60.6795 9.63189 62.6395 10.5177Z"
											fill="white" />
										<path
											d="M71.7645 1.52218V29.8676C71.7645 30.2764 71.2914 30.7533 70.6832 30.7533H67.7093C67.0335 30.7533 66.6279 30.2764 66.6279 29.8676V1.52218C66.6279 0.0912827 67.0335 0.0231448 69.1962 0.0231448C71.6294 -0.0449932 71.7645 0.159421 71.7645 1.52218Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M92.7151 29.595V17.3983C92.7151 12.0836 89.133 8.94922 83.4557 8.94922C80.8874 8.94922 78.0488 9.76687 76.0211 11.1296C74.9397 11.811 74.9397 12.1517 76.0211 13.8551C77.1701 15.5586 77.3729 15.6267 78.4543 15.0135C79.806 14.1958 81.4957 13.6507 82.915 13.6507C85.8889 13.6507 87.6461 15.0135 87.6461 17.262V18.6929C86.2268 18.0797 84.4695 17.739 82.5771 17.739C77.5081 17.739 74.1963 20.4645 74.1963 24.5528C74.1963 28.3685 77.1701 30.9578 81.5633 30.9578C83.8612 30.9578 86.1592 30.0038 87.7137 28.2323L87.6461 29.5269C87.5785 30.2083 88.0516 30.6852 88.7275 30.6852H91.6338C92.242 30.6852 92.7151 30.2764 92.7151 29.595ZM82.1713 26.8698C80.3464 26.8698 79.1299 25.9158 79.1299 24.4849C79.1299 22.7133 80.9547 21.3506 83.6582 21.3506C84.9424 21.3506 86.4293 21.555 87.5783 22.032V23.9398C86.4293 25.7796 84.4017 26.8698 82.1713 26.8698Z"
											fill="white" />
										<path
											d="M112.79 10.5836C113.871 11.1968 113.871 11.5375 112.722 13.3772C111.641 15.0807 111.438 15.217 110.221 14.6037C109.343 14.1268 107.856 13.7179 106.707 13.7179C102.99 13.7179 100.556 16.1709 100.556 19.9185C100.556 23.8023 102.99 26.3916 106.707 26.3916C107.991 26.3916 109.613 25.9146 110.627 25.3014C111.708 24.6881 111.911 24.6881 113.06 26.3916C114.074 27.9588 114.074 28.2994 113.128 28.9808C111.505 30.1392 108.87 31.025 106.572 31.025C99.7453 31.025 95.1494 26.596 95.1494 19.9866C95.1494 13.3772 99.7453 9.01641 106.639 9.01641C108.802 8.94827 111.235 9.62965 112.79 10.5836Z"
											fill="white" />
										<path
											d="M135.162 28.0281C136.04 29.1183 135.702 29.5272 133.54 30.2767C131.377 31.0943 131.039 31.0262 130.295 30.0041L124.145 21.7594L121.374 24.4168V29.7997C121.374 30.2085 120.901 30.6855 120.293 30.6855H117.319C116.643 30.6855 116.237 30.2085 116.237 29.7997V1.52247C116.237 0.0915754 116.643 0.0234375 118.806 0.0234375C121.306 0.0234375 121.374 0.227851 121.374 1.52247V17.603L129.755 9.49461C130.701 8.60882 131.174 8.67695 132.864 9.76716C134.689 10.9255 134.824 11.2662 133.945 12.152L127.727 18.2844L135.162 28.0281Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={120} height={31} viewBox="0 0 120 31"
										fill="none">
										<path fillRule="evenodd" clipRule="evenodd"
											d="M17.8299 2.59615C17.8299 3.8195 16.7629 4.86809 15.518 4.86809C14.2731 4.86809 13.2061 3.8195 13.2061 2.59615C13.2061 1.3728 14.2731 0.324219 15.518 0.324219C16.7629 0.324219 17.8299 1.3728 17.8299 2.59615ZM15.5193 6.73242C14.1559 6.73242 13.0889 7.78101 13.0889 9.12086C13.0889 10.4607 14.1559 11.5093 15.5193 11.5093C16.8828 11.5093 17.9498 10.4607 17.9498 9.12086C17.9498 7.72275 16.8828 6.73242 15.5193 6.73242ZM13.0303 15.5287C13.0303 14.1889 14.1566 13.082 15.52 13.082C16.8835 13.082 18.0691 14.1889 18.0098 15.5287C18.0098 16.8686 16.8835 17.9754 15.52 17.9754C14.1566 17.9754 13.0303 16.8686 13.0303 15.5287ZM15.5193 19.5479C14.1559 19.5479 13.0889 20.5964 13.0889 21.9363C13.0889 23.2762 14.1559 24.3247 15.5193 24.3247C16.8828 24.3247 17.9498 23.2762 17.9498 21.9363C17.9498 20.6547 16.8828 19.5479 15.5193 19.5479ZM13.2061 28.4028C13.2061 27.1794 14.2731 26.1309 15.518 26.1309C16.8221 26.1309 17.8299 27.1794 17.8299 28.4028C17.8299 29.6261 16.7629 30.6747 15.518 30.6747C14.2731 30.6747 13.2061 29.6261 13.2061 28.4028ZM21.9212 6.44141C20.4392 6.44141 19.1943 7.66476 19.1943 9.12112C19.1943 10.5775 20.4392 11.8008 21.9212 11.8008C23.4032 11.8008 24.6481 10.5775 24.6481 9.12112C24.6481 7.66476 23.4032 6.44141 21.9212 6.44141ZM19.0732 15.5872C19.0732 14.0144 20.3774 12.791 21.9187 12.791C23.46 12.791 24.7641 14.0144 24.7641 15.5872C24.7641 17.1601 23.46 18.3835 21.9187 18.3835C20.3181 18.3835 19.0732 17.1019 19.0732 15.5872ZM21.9212 19.2568C20.4392 19.2568 19.1943 20.4802 19.1943 21.9366C19.1943 23.3929 20.4392 24.6163 21.9212 24.6163C23.4032 24.6163 24.6481 23.3929 24.6481 21.9366C24.6481 20.4802 23.4032 19.2568 21.9212 19.2568ZM25.3584 15.5289C25.3584 13.7813 26.8404 12.4414 28.5002 12.4414C30.1601 12.4414 31.5235 13.7813 31.6421 15.5289C31.6421 17.2765 30.2786 18.6164 28.5002 18.6164C26.7218 18.6164 25.3584 17.16 25.3584 15.5289ZM9.0582 7.02344C7.93188 7.02344 6.9834 7.95551 6.9834 9.06235C6.9834 10.1692 7.93188 11.1013 9.0582 11.1013C10.1845 11.1013 11.133 10.1692 11.133 9.06235C11.133 7.95551 10.2438 7.02344 9.0582 7.02344ZM6.8623 15.5285C6.8623 14.3051 7.81078 13.373 9.05566 13.373C10.3005 13.373 11.249 14.3051 11.249 15.5285C11.249 16.7518 10.3005 17.6839 9.05566 17.6839C7.81078 17.6839 6.8623 16.7518 6.8623 15.5285ZM9.0582 19.8398C7.93188 19.8398 6.9834 20.7719 6.9834 21.8788C6.9834 22.9856 7.93188 23.9177 9.0582 23.9177C10.1845 23.9177 11.133 22.9856 11.133 21.8788C11.133 20.7719 10.2438 19.8398 9.0582 19.8398ZM0.698242 15.587C0.698242 14.5384 1.52816 13.7228 2.5952 13.7228C3.66224 13.7228 4.49216 14.5384 4.49216 15.587C4.49216 16.6355 3.66224 17.4511 2.5952 17.4511C1.52816 17.4511 0.698242 16.6355 0.698242 15.587Z"
											fill="white" />
										<path
											d="M55.2343 11.5703C54.9972 11.5703 54.8193 11.8033 54.8193 11.9781V28.1147C54.8193 28.3477 55.0565 28.5224 55.2343 28.5224H57.1905C57.4277 28.5224 57.6055 28.2894 57.6055 28.1147V11.9781C57.6055 11.7451 57.3684 11.5703 57.1905 11.5703H55.2343Z"
											fill="white" />
										<path
											d="M56.3022 4.75391C55.2352 4.75391 54.4053 5.56947 54.4053 6.61806C54.4053 7.66664 55.2352 8.48221 56.3022 8.48221C57.3693 8.48221 58.1992 7.66664 58.1992 6.61806C58.1992 5.56947 57.31 4.75391 56.3022 4.75391Z"
											fill="white" />
										<path
											d="M97.3241 11.5703C97.087 11.5703 96.9092 11.8033 96.9092 11.9781V28.1147C96.9092 28.3477 97.1463 28.5224 97.3241 28.5224H99.2804C99.5175 28.5224 99.6953 28.2894 99.6953 28.1147V11.9781C99.6953 11.7451 99.4582 11.5703 99.2804 11.5703H97.3241Z"
											fill="white" />
										<path
											d="M98.271 4.75391C97.2039 4.75391 96.374 5.56947 96.374 6.61806C96.374 7.66664 97.2039 8.48221 98.271 8.48221C99.338 8.48221 100.168 7.66664 100.168 6.61806C100.168 5.56947 99.338 4.75391 98.271 4.75391Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M118.289 26.756C118.276 26.8126 118.246 26.881 118.174 26.9494C118.174 27.0659 118.05 27.1824 117.803 27.1242L117.898 27.2334C117.886 27.2382 117.874 27.241 117.865 27.241H117.68L117.68 27.2407H117.433V27.0663V26.542H117.865C117.988 26.542 118.112 26.542 118.174 26.6585C118.246 26.6585 118.276 26.699 118.289 26.756ZM117.433 27.2407H117.371V27.765H117.124V26.3086H117.68H117.927C118.05 26.3086 118.174 26.4251 118.174 26.4251C118.297 26.4251 118.297 26.5416 118.297 26.5416V26.6581C118.297 26.6822 118.297 26.7162 118.289 26.756C118.297 26.7958 118.297 26.8437 118.297 26.8915C118.297 27.008 118.297 27.1245 118.174 27.1245C118.101 27.1245 118.029 27.1645 117.969 27.1976C117.943 27.2122 117.919 27.2255 117.898 27.2334L118.359 27.765H118.112L117.68 27.241H117.433V27.2407Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M116.351 27.0664C116.351 26.3674 117.003 25.7266 117.714 25.7266C118.485 25.7266 119.077 26.3091 119.077 27.0664C119.077 27.7655 118.425 28.4063 117.714 28.4063C117.003 28.4063 116.351 27.7655 116.351 27.0664ZM116.468 27.0661C116.468 27.7652 117.001 28.2895 117.713 28.2895C118.365 28.2895 118.958 27.7652 118.958 27.0661C118.958 26.3671 118.424 25.8428 117.713 25.8428C117.001 25.8428 116.468 26.3671 116.468 27.0661Z"
											fill="white" />
										<path
											d="M71.5346 14.1918C71.7717 14.1918 71.9496 13.9588 71.9496 13.7841V11.8617C71.9496 11.6286 71.7124 11.4539 71.5346 11.4539H67.3257V5.27888C67.3257 5.04586 67.0886 4.87109 66.9108 4.87109H64.9545C64.7174 4.87109 64.5396 5.10411 64.5396 5.27888V11.4539H62.4648C62.2276 11.4539 62.0498 11.6869 62.0498 11.8617V13.7841C62.0498 14.0171 62.2869 14.1918 62.4648 14.1918H64.5396V23.5126C64.5396 26.3671 66.4958 28.2312 69.3412 28.2312H71.416C71.6532 28.2312 71.831 27.9982 71.831 27.8235V25.901C71.831 25.668 71.5939 25.4933 71.416 25.4933H69.6376C68.2742 25.4933 67.3257 24.5612 67.3257 23.1048V14.1336H71.5346V14.1918Z"
											fill="white" />
										<path
											d="M113.152 14.1918C113.389 14.1918 113.567 13.9588 113.567 13.7841V11.8617C113.567 11.6286 113.33 11.4539 113.152 11.4539H108.943V5.27888C108.943 5.04586 108.706 4.87109 108.528 4.87109H106.572C106.335 4.87109 106.157 5.10411 106.157 5.27888V11.4539H104.082C103.845 11.4539 103.667 11.6869 103.667 11.8617V13.7841C103.667 14.0171 103.904 14.1918 104.082 14.1918H106.157V23.5126C106.157 26.3671 108.113 28.2312 110.958 28.2312H113.033C113.27 28.2312 113.448 27.9982 113.448 27.8235V25.901C113.448 25.668 113.211 25.4933 113.033 25.4933H111.136C109.773 25.4933 108.824 24.5612 108.824 23.1048V14.1336H113.093L113.152 14.1918Z"
											fill="white" />
										<path
											d="M42.7857 14.1907V27.9388C42.7857 28.1718 43.0228 28.3466 43.2006 28.3466H45.1569C45.394 28.3466 45.5718 28.1136 45.5718 27.9388V14.1907H50.1957C50.4328 14.1907 50.6106 13.9577 50.6106 13.7829V11.8605C50.6106 11.6275 50.3735 11.4527 50.1957 11.4527H45.5718V7.84092C45.5718 6.38455 46.6389 5.39422 47.8837 5.39422H50.1957C50.4328 5.39422 50.6106 5.1612 50.6106 4.98644V3.06403C50.6106 2.83101 50.3735 2.65625 50.1957 2.65625H48.0023C45.0976 2.65625 42.7857 5.04469 42.7857 7.78266V11.4527H40.7109C40.4737 11.4527 40.2959 11.6857 40.2959 11.8605V13.7829C40.2959 14.0159 40.533 14.1907 40.7109 14.1907H42.7857Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M84.6369 10.9277C86.9488 10.9277 89.1422 11.8598 90.6835 13.4909C92.2247 15.1221 93.0547 17.394 93.0547 19.899C93.0547 26.1322 88.7272 28.9284 84.5776 28.9284C80.3687 28.9284 76.1006 26.1905 76.1006 19.899V2.94685C76.1006 2.77208 76.2784 2.53906 76.5155 2.53906H78.4718C78.6496 2.53906 78.8867 2.71383 78.8867 2.94685V13.1997C80.2502 11.8598 82.4435 10.9277 84.6369 10.9277ZM78.8271 19.9575C78.8271 23.045 80.3684 26.3073 84.5773 26.3073C88.7862 26.3073 90.2682 23.045 90.3275 19.9575C90.3275 16.2292 88.0155 13.666 84.5773 13.666C81.1391 13.666 78.8271 16.171 78.8271 19.9575Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={119} height={37} viewBox="0 0 119 37"
										fill="none">
										<path fillRule="evenodd" clipRule="evenodd"
											d="M33.2946 24.8799C33.4715 25.2916 33.6485 25.762 33.8254 26.2325C34.3563 27.5851 34.4743 28.8789 34.2973 30.1728C33.8844 32.878 32.1149 35.2304 29.5195 36.2889C28.5758 36.7006 27.573 36.877 26.5113 36.877C26.2163 36.877 25.8624 36.877 25.5675 36.8182C24.3288 36.7006 23.0901 36.289 21.8515 35.5832C20.3768 34.7599 18.9022 33.5249 17.2506 31.7606C15.599 33.5249 14.1834 34.7599 12.6498 35.5832C11.4111 36.289 10.1724 36.6418 8.93372 36.8182C8.7863 36.8182 8.62414 36.8329 8.46198 36.8476L8.46184 36.8476C8.29963 36.8623 8.13742 36.877 7.98996 36.877C6.92823 36.877 5.92548 36.7006 4.98172 36.2889C2.44536 35.2304 0.557842 32.9368 0.144947 30.1728C-0.0320086 28.8201 0.144947 27.5263 0.616827 26.2325C0.793782 25.7032 0.970738 25.2916 1.14769 24.8799C1.44262 24.233 1.73754 23.5861 1.97348 22.998L2.03247 22.9392C4.62781 17.4111 7.34113 11.8242 10.1724 6.29609L10.2904 6.06086C10.5853 5.53159 10.8802 4.94351 11.1751 4.35544L11.1752 4.35538C11.2546 4.23092 11.334 4.10429 11.4143 3.97632L11.4143 3.97632L11.4143 3.97631C11.7513 3.4391 12.1031 2.8783 12.5318 2.35586C13.7705 0.944427 15.4221 0.121094 17.2506 0.121094C19.0202 0.121094 20.7307 0.944427 21.9104 2.41466C22.5003 3.06157 22.9132 3.76728 23.2671 4.41419L23.2671 4.41429C23.5621 5.00235 23.857 5.59041 24.1519 6.11966L24.2698 6.3549C27.1601 11.883 29.8734 17.4699 32.4098 22.998H32.4688C32.7047 23.5861 32.9996 24.233 33.2946 24.8799ZM62.3168 9.35455C62.3168 10.7072 61.255 11.7657 59.8984 11.7657C58.5417 11.7657 57.48 10.7072 57.48 9.35455C57.48 8.00193 58.5417 6.94336 59.8984 6.94336C61.314 7.00217 62.3168 8.06074 62.3168 9.35455ZM52.4653 14.1761V14.7642C52.4653 14.7642 51.3445 13.2939 48.8672 13.2939C44.8562 13.2939 41.73 16.352 41.73 20.5863C41.73 24.7618 44.8562 27.8787 48.8672 27.8787C51.3445 27.8787 52.4653 26.3497 52.4653 26.3497V26.9966C52.4653 27.2906 52.7012 27.5258 52.9961 27.5258H56.0044V13.6468H52.9961C52.6422 13.6468 52.4653 13.882 52.4653 14.1761ZM49.457 24.5274C50.8136 24.5274 51.9344 23.8217 52.4652 22.9983V18.0583C51.9344 17.2938 50.7547 16.5293 49.457 16.5293C47.0976 16.5293 45.269 17.9995 45.269 20.5283C45.269 23.0572 47.0976 24.5274 49.457 24.5274ZM58.1284 13.6475H61.6675V27.4677H58.1284V13.6475ZM107.437 14.7648C107.437 14.7648 108.617 13.2946 111.035 13.2946C115.046 13.2946 118.172 16.3527 118.172 20.5281C118.172 24.7036 115.046 27.8205 111.035 27.8205C108.558 27.8205 107.437 26.2915 107.437 26.2915V26.9384C107.437 27.2324 107.201 27.4677 106.906 27.4677H103.898V7.00195H107.437V14.7648ZM110.445 24.4678C109.089 24.4678 108.027 23.7621 107.437 22.9388V17.9988C107.968 17.2343 109.148 16.4697 110.445 16.4697C112.805 16.4697 114.633 17.94 114.633 20.4688C114.633 22.9976 112.805 24.4678 110.445 24.4678ZM102.072 27.5258V19.2925C102.072 16.9401 101.6 15.6463 100.42 14.6466C99.3586 13.7644 98.0609 13.2939 96.5273 13.2939C95.1707 13.2939 93.814 13.7056 92.7523 14.7642V14.1761C92.7523 13.882 92.5163 13.6468 92.2214 13.6468H89.3901V27.5258H92.9292V17.8811C93.6371 17.0578 94.7578 16.5285 95.8195 16.5285C97.766 16.5285 98.5328 17.4106 98.5328 19.7042V27.5258H102.072ZM80.7775 13.2944C78.3591 13.2944 77.1794 14.7647 77.1794 14.7647V7.00181H73.6403V27.4675H76.6486C76.9435 27.4675 77.1794 27.2323 77.1794 26.9382V26.2913C77.1794 26.2913 78.3002 27.8204 80.7775 27.8204C84.7885 27.8204 87.9147 24.7035 87.9147 20.528C87.9737 16.3525 84.8475 13.2944 80.7775 13.2944ZM77.1792 22.9388C77.7691 23.7621 78.8308 24.4678 80.1874 24.4678C82.5468 24.4678 84.3754 22.9976 84.3754 20.4688C84.3754 17.94 82.5468 16.4697 80.1874 16.4697C78.8898 16.4697 77.7101 17.2343 77.1792 17.9988V22.9388ZM70.6336 13.2939C71.6953 13.2939 72.2852 13.4704 72.2852 13.4704V16.7637C72.2852 16.7637 69.3359 15.7639 67.5074 17.8811V27.5258H63.9683V13.6468H66.9765C67.2714 13.6468 67.5074 13.882 67.5074 14.1761V14.7642C68.0972 13.9997 69.5129 13.2939 70.6336 13.2939ZM17.1916 28.1144C15.1861 25.5856 13.8885 23.2332 13.4756 21.2925C13.2986 20.4692 13.2396 19.7047 13.3576 19.0578C13.4166 18.4697 13.6525 17.9404 13.9475 17.5287C14.6553 16.5289 15.835 15.882 17.1916 15.882C18.5483 15.882 19.787 16.4701 20.4358 17.5287C20.7307 17.9992 20.9667 18.4697 21.0257 19.0578C21.1436 19.7047 21.0846 20.4692 20.9077 21.2925C20.4948 23.2332 19.1971 25.5856 17.1916 28.1144ZM28.5738 34.1717C30.4023 33.466 31.7 31.8194 31.936 29.8787C32.0539 28.8789 31.936 27.9967 31.759 27.0558C31.6951 26.8648 31.614 26.6737 31.5249 26.464C31.4494 26.2864 31.3683 26.0954 31.2871 25.8796C31.1397 25.5856 31.0069 25.2768 30.8742 24.9681C30.7415 24.6593 30.6088 24.3506 30.4613 24.0565V23.9977C27.925 18.5284 25.2117 12.9415 22.3804 7.47223L22.2624 7.23699C21.9675 6.64889 21.6726 6.0608 21.3776 5.53151C21.0827 4.94342 20.7288 4.35532 20.3159 3.88485C19.5491 3.0027 18.4874 2.53223 17.3666 2.53223C16.2459 2.53223 15.1842 3.0027 14.4174 3.88485C14.0045 4.41413 13.6506 4.94342 13.3557 5.53151L13.3556 5.5316C13.0607 6.11966 12.7658 6.70773 12.4709 7.23699L12.3529 7.47223C9.46264 12.9415 6.74933 18.5284 4.21297 23.9977L4.15399 24.0565C3.85906 24.6446 3.56413 25.2915 3.32819 25.8796C3.15124 26.2913 2.97428 26.7029 2.85631 27.0558C2.44342 28.1144 2.38443 28.9965 2.5024 29.9375C2.73834 31.8194 4.03602 33.466 5.86455 34.2306C6.69034 34.5246 7.6341 34.701 8.63685 34.5834C9.58061 34.4658 10.5244 34.1717 11.4681 33.6425C12.7658 32.8779 14.1225 31.7606 15.6561 30.0551C13.2377 27.0558 11.7041 24.2917 11.1732 21.8806C10.8783 20.7632 10.8193 19.7046 10.9963 18.7637C11.1732 17.8227 11.4681 16.9994 11.999 16.2348C13.1197 14.647 15.0662 13.6472 17.1897 13.6472C19.3131 13.6472 21.2597 14.5882 22.3804 16.2348C22.9112 16.9994 23.2062 17.8227 23.3831 18.7637C23.5011 19.7046 23.4421 20.7632 23.2062 21.8806C22.6163 24.2917 21.1417 26.997 18.7233 29.9963C20.2569 31.7017 21.5546 32.8191 22.9112 33.5837C23.914 34.1129 24.7988 34.407 25.7425 34.5246C26.7453 34.6422 27.689 34.5246 28.5738 34.1717Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={136} height={39} viewBox="0 0 136 39"
										fill="none">
										<path
											d="M24.7247 3.43111C24.184 1.65952 22.2916 0.70559 20.5343 1.25069C18.777 1.7958 17.8308 3.70366 18.3715 5.47524L27.0227 32.3216C27.631 33.9569 29.3882 34.9108 31.0779 34.4339C32.8352 33.8888 33.9166 32.049 33.3759 30.2775C33.3759 30.2093 24.7247 3.43111 24.7247 3.43111Z"
											fill="white" />
										<path
											d="M11.3419 7.86079C10.8012 6.08921 8.90876 5.13528 7.1515 5.68038C5.39424 6.22548 4.44802 8.13335 4.98871 9.90493L13.6399 36.7513C14.2481 38.3866 16.0054 39.3405 17.6951 38.8636C19.4523 38.3184 20.5337 36.4787 19.993 34.7071C19.993 34.639 11.3419 7.86079 11.3419 7.86079Z"
											fill="white" />
										<path
											d="M35.6731 25.7103C37.4304 25.1652 38.3766 23.2574 37.8359 21.4858C37.2952 19.7142 35.4028 18.7603 33.6455 19.3054L6.94861 27.9589C5.32652 28.5721 4.3803 30.3437 4.85341 32.0472C5.39411 33.8188 7.21896 34.909 8.97622 34.3639C9.1114 34.3639 35.6731 25.7103 35.6731 25.7103Z"
											fill="white" />
										<path
											d="M12.4907 33.2751C14.248 32.7299 16.4783 31.9804 18.8439 31.1628C18.3032 29.3912 17.5597 27.1426 16.7487 24.7578L10.3955 26.8701L12.4907 33.2751Z"
											fill="white" />
										<path
											d="M25.9399 28.8454C28.3731 28.0277 30.6034 27.3463 32.2931 26.7331C31.7524 24.9615 31.009 22.713 30.1979 20.3281L23.8447 22.4404L25.9399 28.8454Z"
											fill="white" />
										<path
											d="M31.2794 12.1518C33.0366 11.6066 33.9828 9.69879 33.4421 7.9272C32.9014 6.15561 31.009 5.20168 29.2517 5.74679L2.62244 14.4684C1.00035 15.0817 0.0541306 16.8533 0.52724 18.5567C1.06794 20.3964 2.89279 21.4866 4.65005 20.8734C4.71764 20.8734 31.2794 12.1518 31.2794 12.1518Z"
											fill="white" />
										<path
											d="M8.16453 19.7165C9.9218 19.1714 12.1522 18.4218 14.5177 17.6042C13.7067 15.1512 13.0308 12.9027 12.4225 11.1992L6.06934 13.3115L8.16453 19.7165Z"
											fill="white" />
										<path
											d="M21.5473 15.3532C23.9805 14.5355 26.2109 13.8541 27.9005 13.2409C27.0895 10.7879 26.4136 8.53939 25.8053 6.83594L19.4521 8.94821L21.5473 15.3532Z"
											fill="white" />
										<path
											d="M62.6395 10.5177C63.7885 11.0628 63.9237 11.4035 62.9774 13.1751C62.0312 15.0148 61.8285 15.0829 60.6119 14.606C59.125 13.9927 57.3001 13.5157 56.0836 13.5157C54.1235 13.5157 52.8394 14.1971 52.8394 15.2873C52.8394 18.8305 64.1264 16.9226 64.1264 24.5541C64.1264 28.3698 60.8822 30.8909 56.016 30.8909C53.4477 30.8909 50.2711 30.0051 48.1083 28.9149C47.0269 28.3698 46.9593 28.0291 47.9055 26.1894C48.7166 24.6222 48.9869 24.4178 50.1359 24.8948C52.0283 25.7124 54.3263 26.3257 55.9484 26.3257C57.7732 26.3257 58.9222 25.5762 58.9222 24.486C58.9222 21.0109 47.4324 22.6462 47.4324 15.2873C47.4324 11.4035 50.6766 8.74609 55.4753 8.74609C57.7732 8.95051 60.6795 9.63189 62.6395 10.5177Z"
											fill="white" />
										<path
											d="M71.7645 1.52218V29.8676C71.7645 30.2764 71.2914 30.7533 70.6832 30.7533H67.7093C67.0335 30.7533 66.6279 30.2764 66.6279 29.8676V1.52218C66.6279 0.0912827 67.0335 0.0231448 69.1962 0.0231448C71.6294 -0.0449932 71.7645 0.159421 71.7645 1.52218Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M92.7151 29.595V17.3983C92.7151 12.0836 89.133 8.94922 83.4557 8.94922C80.8874 8.94922 78.0488 9.76687 76.0211 11.1296C74.9397 11.811 74.9397 12.1517 76.0211 13.8551C77.1701 15.5586 77.3729 15.6267 78.4543 15.0135C79.806 14.1958 81.4957 13.6507 82.915 13.6507C85.8889 13.6507 87.6461 15.0135 87.6461 17.262V18.6929C86.2268 18.0797 84.4695 17.739 82.5771 17.739C77.5081 17.739 74.1963 20.4645 74.1963 24.5528C74.1963 28.3685 77.1701 30.9578 81.5633 30.9578C83.8612 30.9578 86.1592 30.0038 87.7137 28.2323L87.6461 29.5269C87.5785 30.2083 88.0516 30.6852 88.7275 30.6852H91.6338C92.242 30.6852 92.7151 30.2764 92.7151 29.595ZM82.1713 26.8698C80.3464 26.8698 79.1299 25.9158 79.1299 24.4849C79.1299 22.7133 80.9547 21.3506 83.6582 21.3506C84.9424 21.3506 86.4293 21.555 87.5783 22.032V23.9398C86.4293 25.7796 84.4017 26.8698 82.1713 26.8698Z"
											fill="white" />
										<path
											d="M112.79 10.5836C113.871 11.1968 113.871 11.5375 112.722 13.3772C111.641 15.0807 111.438 15.217 110.221 14.6037C109.343 14.1268 107.856 13.7179 106.707 13.7179C102.99 13.7179 100.556 16.1709 100.556 19.9185C100.556 23.8023 102.99 26.3916 106.707 26.3916C107.991 26.3916 109.613 25.9146 110.627 25.3014C111.708 24.6881 111.911 24.6881 113.06 26.3916C114.074 27.9588 114.074 28.2994 113.128 28.9808C111.505 30.1392 108.87 31.025 106.572 31.025C99.7453 31.025 95.1494 26.596 95.1494 19.9866C95.1494 13.3772 99.7453 9.01641 106.639 9.01641C108.802 8.94827 111.235 9.62965 112.79 10.5836Z"
											fill="white" />
										<path
											d="M135.162 28.0281C136.04 29.1183 135.702 29.5272 133.54 30.2767C131.377 31.0943 131.039 31.0262 130.295 30.0041L124.145 21.7594L121.374 24.4168V29.7997C121.374 30.2085 120.901 30.6855 120.293 30.6855H117.319C116.643 30.6855 116.237 30.2085 116.237 29.7997V1.52247C116.237 0.0915754 116.643 0.0234375 118.806 0.0234375C121.306 0.0234375 121.374 0.227851 121.374 1.52247V17.603L129.755 9.49461C130.701 8.60882 131.174 8.67695 132.864 9.76716C134.689 10.9255 134.824 11.2662 133.945 12.152L127.727 18.2844L135.162 28.0281Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={119} height={37} viewBox="0 0 119 37"
										fill="none">
										<path fillRule="evenodd" clipRule="evenodd"
											d="M33.5255 24.8799C33.7025 25.2916 33.8794 25.762 34.0564 26.2325C34.5872 27.5851 34.7052 28.8789 34.5283 30.1728C34.1154 32.878 32.3458 35.2304 29.7505 36.2889C28.8067 36.7006 27.804 36.877 26.7422 36.877C26.4473 36.877 26.0934 36.877 25.7985 36.8182C24.5598 36.7006 23.3211 36.289 22.0824 35.5832C20.6078 34.7599 19.1332 33.5249 17.4816 31.7606C15.83 33.5249 14.4144 34.7599 12.8807 35.5832C11.6421 36.289 10.4034 36.6418 9.16468 36.8182C9.01726 36.8182 8.8551 36.8329 8.69294 36.8476L8.6928 36.8476C8.53059 36.8623 8.36838 36.877 8.22092 36.877C7.15919 36.877 6.15644 36.7006 5.21268 36.2889C2.67632 35.2304 0.788799 32.9368 0.375904 30.1728C0.198948 28.8201 0.375904 27.5263 0.847784 26.2325C1.02474 25.7032 1.20169 25.2916 1.37865 24.8799C1.67358 24.233 1.9685 23.5861 2.20444 22.998L2.26343 22.9392C4.85877 17.4111 7.57208 11.8242 10.4034 6.29609L10.5213 6.06086C10.8163 5.53159 11.1112 4.94351 11.4061 4.35544L11.4061 4.35538C11.4855 4.23092 11.565 4.10429 11.6453 3.97632L11.6453 3.97632L11.6453 3.97631C11.9823 3.4391 12.334 2.8783 12.7628 2.35586C14.0015 0.944427 15.653 0.121094 17.4816 0.121094C19.2511 0.121094 20.9617 0.944427 22.1414 2.41466C22.7312 3.06157 23.1441 3.76728 23.4981 4.41419L23.4981 4.41429C23.793 5.00235 24.0879 5.59041 24.3828 6.11966L24.5008 6.3549C27.3911 11.883 30.1044 17.4699 32.6407 22.998H32.6997C32.9357 23.5861 33.2306 24.233 33.5255 24.8799ZM62.5458 9.35455C62.5458 10.7072 61.484 11.7657 60.1274 11.7657C58.7707 11.7657 57.709 10.7072 57.709 9.35455C57.709 8.00193 58.7707 6.94336 60.1274 6.94336C61.543 7.00217 62.5458 8.06074 62.5458 9.35455ZM52.6962 14.1761V14.7642C52.6962 14.7642 51.5755 13.2939 49.0981 13.2939C45.0871 13.2939 41.9609 16.352 41.9609 20.5863C41.9609 24.7618 45.0871 27.8787 49.0981 27.8787C51.5755 27.8787 52.6962 26.3497 52.6962 26.3497V26.9966C52.6962 27.2906 52.9322 27.5258 53.2271 27.5258H56.2353V13.6468H53.2271C52.8732 13.6468 52.6962 13.882 52.6962 14.1761ZM49.6879 24.5274C51.0446 24.5274 52.1653 23.8217 52.6962 22.9983V18.0583C52.1653 17.2938 50.9856 16.5293 49.6879 16.5293C47.3285 16.5293 45.5 17.9995 45.5 20.5283C45.5 23.0572 47.3285 24.5274 49.6879 24.5274ZM58.3574 13.6475H61.8965V27.4677H58.3574V13.6475ZM107.67 14.7647C107.67 14.7647 108.849 13.2944 111.268 13.2944C115.279 13.2944 118.405 16.3525 118.405 20.528C118.405 24.7035 115.279 27.8204 111.268 27.8204C108.79 27.8204 107.67 26.2913 107.67 26.2913V26.9382C107.67 27.2323 107.434 27.4675 107.139 27.4675H104.131V7.00181H107.67V14.7647ZM110.678 24.4678C109.322 24.4678 108.26 23.7621 107.67 22.9388V17.9988C108.201 17.2343 109.38 16.4697 110.678 16.4697C113.038 16.4697 114.866 17.94 114.866 20.4688C114.866 22.9976 113.038 24.4678 110.678 24.4678ZM102.303 27.5258V19.2925C102.303 16.9401 101.831 15.6463 100.651 14.6466C99.5896 13.7644 98.2919 13.2939 96.7583 13.2939C95.4016 13.2939 94.045 13.7056 92.9832 14.7642V14.1761C92.9832 13.882 92.7473 13.6468 92.4524 13.6468H89.6211V27.5258H93.1602V17.8811C93.868 17.0578 94.9887 16.5285 96.0505 16.5285C97.997 16.5285 98.7638 17.4106 98.7638 19.7042V27.5258H102.303ZM81.0085 13.2944C78.5901 13.2944 77.4104 14.7647 77.4104 14.7647V7.00181H73.8713V27.4675H76.8795C77.1745 27.4675 77.4104 27.2323 77.4104 26.9382V26.2913C77.4104 26.2913 78.5311 27.8204 81.0085 27.8204C85.0195 27.8204 88.1457 24.7035 88.1457 20.528C88.2047 16.3525 85.0785 13.2944 81.0085 13.2944ZM77.4102 22.9388C78 23.7621 79.0617 24.4678 80.4184 24.4678C82.7778 24.4678 84.6063 22.9976 84.6063 20.4688C84.6063 17.94 82.7778 16.4697 80.4184 16.4697C79.1207 16.4697 77.941 17.2343 77.4102 17.9988V22.9388ZM70.8626 13.2939C71.9243 13.2939 72.5142 13.4704 72.5142 13.4704V16.7637C72.5142 16.7637 69.5649 15.7639 67.7364 17.8811V27.5258H64.1973V13.6468H67.2055C67.5004 13.6468 67.7364 13.882 67.7364 14.1761V14.7642C68.3262 13.9997 69.7419 13.2939 70.8626 13.2939ZM17.4226 28.1144C15.4171 25.5856 14.1194 23.2332 13.7065 21.2925C13.5296 20.4692 13.4706 19.7047 13.5886 19.0578C13.6475 18.4697 13.8835 17.9404 14.1784 17.5287C14.8862 16.5289 16.0659 15.882 17.4226 15.882C18.7792 15.882 20.0179 16.4701 20.6668 17.5287C20.9617 17.9992 21.1976 18.4697 21.2566 19.0578C21.3746 19.7047 21.3156 20.4692 21.1386 21.2925C20.7258 23.2332 19.4281 25.5856 17.4226 28.1144ZM28.8067 34.1718C30.6352 33.4661 31.9329 31.8194 32.1689 29.8787C32.2868 28.879 32.1689 27.9968 31.9919 27.0559C31.928 26.8648 31.8469 26.6738 31.7578 26.4641C31.6823 26.2865 31.6012 26.0954 31.52 25.8797C31.3726 25.5856 31.2398 25.2769 31.1071 24.9681C30.9744 24.6594 30.8417 24.3506 30.6942 24.0566V23.9978C28.1579 18.5285 25.4446 12.9416 22.6133 7.47228L22.4953 7.23705L22.4953 7.23702C22.2004 6.64893 21.9054 6.06085 21.6105 5.53157C21.3156 4.94347 20.9617 4.35538 20.5488 3.8849C19.782 3.00276 18.7203 2.53228 17.5995 2.53228C16.4788 2.53228 15.4171 3.00276 14.6503 3.8849C14.2374 4.41419 13.8835 4.94347 13.5886 5.53157C13.2936 6.11966 12.9987 6.70776 12.7038 7.23705L12.5858 7.47228C9.69555 12.9416 6.98223 18.5285 4.44587 23.9978L4.38689 24.0566C4.09196 24.6447 3.79704 25.2916 3.5611 25.8797C3.38414 26.2913 3.20719 26.703 3.08922 27.0559C2.67632 28.1144 2.61734 28.9966 2.73531 29.9375C2.97125 31.8194 4.26892 33.4661 6.09746 34.2306C6.92325 34.5247 7.86701 34.7011 8.86975 34.5835C9.81351 34.4659 10.7573 34.1718 11.701 33.6425C12.9987 32.878 14.3554 31.7606 15.889 30.0551C13.4706 27.0559 11.937 24.2918 11.4061 21.8806C11.1112 20.7632 11.0522 19.7047 11.2292 18.7637C11.4061 17.8228 11.701 16.9994 12.2319 16.2349C13.3526 14.647 15.2991 13.6473 17.4226 13.6473C19.5461 13.6473 21.4926 14.5882 22.6133 16.2349C23.1441 16.9994 23.4391 17.8228 23.616 18.7637C23.734 19.7047 23.675 20.7632 23.4391 21.8806C22.8492 24.2918 21.3746 26.997 18.9562 29.9963C20.4898 31.7018 21.7875 32.8192 23.1441 33.5837C24.1469 34.113 25.0317 34.407 25.9754 34.5247C26.9782 34.6423 27.9219 34.5247 28.8067 34.1718Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={136} height={39} viewBox="0 0 136 39"
										fill="none">
										<path
											d="M24.7247 3.43111C24.184 1.65952 22.2916 0.70559 20.5343 1.25069C18.777 1.7958 17.8308 3.70366 18.3715 5.47524L27.0227 32.3216C27.631 33.9569 29.3882 34.9108 31.0779 34.4339C32.8352 33.8888 33.9166 32.049 33.3759 30.2775C33.3759 30.2093 24.7247 3.43111 24.7247 3.43111Z"
											fill="white" />
										<path
											d="M11.3419 7.86079C10.8012 6.08921 8.90876 5.13528 7.1515 5.68038C5.39424 6.22548 4.44802 8.13335 4.98871 9.90493L13.6399 36.7513C14.2481 38.3866 16.0054 39.3405 17.6951 38.8636C19.4523 38.3184 20.5337 36.4787 19.993 34.7071C19.993 34.639 11.3419 7.86079 11.3419 7.86079Z"
											fill="white" />
										<path
											d="M35.6731 25.7103C37.4304 25.1652 38.3766 23.2574 37.8359 21.4858C37.2952 19.7142 35.4028 18.7603 33.6455 19.3054L6.94861 27.9589C5.32652 28.5721 4.3803 30.3437 4.85341 32.0472C5.39411 33.8188 7.21896 34.909 8.97622 34.3639C9.1114 34.3639 35.6731 25.7103 35.6731 25.7103Z"
											fill="white" />
										<path
											d="M12.4907 33.2751C14.248 32.7299 16.4783 31.9804 18.8439 31.1628C18.3032 29.3912 17.5597 27.1426 16.7487 24.7578L10.3955 26.8701L12.4907 33.2751Z"
											fill="white" />
										<path
											d="M25.9399 28.8454C28.3731 28.0277 30.6034 27.3463 32.2931 26.7331C31.7524 24.9615 31.009 22.713 30.1979 20.3281L23.8447 22.4404L25.9399 28.8454Z"
											fill="white" />
										<path
											d="M31.2794 12.1518C33.0366 11.6066 33.9828 9.69879 33.4421 7.9272C32.9014 6.15561 31.009 5.20168 29.2517 5.74679L2.62244 14.4684C1.00035 15.0817 0.0541306 16.8533 0.52724 18.5567C1.06794 20.3964 2.89279 21.4866 4.65005 20.8734C4.71764 20.8734 31.2794 12.1518 31.2794 12.1518Z"
											fill="white" />
										<path
											d="M8.16453 19.7165C9.9218 19.1714 12.1522 18.4218 14.5177 17.6042C13.7067 15.1512 13.0308 12.9027 12.4225 11.1992L6.06934 13.3115L8.16453 19.7165Z"
											fill="white" />
										<path
											d="M21.5473 15.3532C23.9805 14.5355 26.2109 13.8541 27.9005 13.2409C27.0895 10.7879 26.4136 8.53939 25.8053 6.83594L19.4521 8.94821L21.5473 15.3532Z"
											fill="white" />
										<path
											d="M62.6395 10.5177C63.7885 11.0628 63.9237 11.4035 62.9774 13.1751C62.0312 15.0148 61.8285 15.0829 60.6119 14.606C59.125 13.9927 57.3001 13.5157 56.0836 13.5157C54.1235 13.5157 52.8394 14.1971 52.8394 15.2873C52.8394 18.8305 64.1264 16.9226 64.1264 24.5541C64.1264 28.3698 60.8822 30.8909 56.016 30.8909C53.4477 30.8909 50.2711 30.0051 48.1083 28.9149C47.0269 28.3698 46.9593 28.0291 47.9055 26.1894C48.7166 24.6222 48.9869 24.4178 50.1359 24.8948C52.0283 25.7124 54.3263 26.3257 55.9484 26.3257C57.7732 26.3257 58.9222 25.5762 58.9222 24.486C58.9222 21.0109 47.4324 22.6462 47.4324 15.2873C47.4324 11.4035 50.6766 8.74609 55.4753 8.74609C57.7732 8.95051 60.6795 9.63189 62.6395 10.5177Z"
											fill="white" />
										<path
											d="M71.7645 1.52218V29.8676C71.7645 30.2764 71.2914 30.7533 70.6832 30.7533H67.7093C67.0335 30.7533 66.6279 30.2764 66.6279 29.8676V1.52218C66.6279 0.0912827 67.0335 0.0231448 69.1962 0.0231448C71.6294 -0.0449932 71.7645 0.159421 71.7645 1.52218Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M92.7151 29.595V17.3983C92.7151 12.0836 89.133 8.94922 83.4557 8.94922C80.8874 8.94922 78.0488 9.76687 76.0211 11.1296C74.9397 11.811 74.9397 12.1517 76.0211 13.8551C77.1701 15.5586 77.3729 15.6267 78.4543 15.0135C79.806 14.1958 81.4957 13.6507 82.915 13.6507C85.8889 13.6507 87.6461 15.0135 87.6461 17.262V18.6929C86.2268 18.0797 84.4695 17.739 82.5771 17.739C77.5081 17.739 74.1963 20.4645 74.1963 24.5528C74.1963 28.3685 77.1701 30.9578 81.5633 30.9578C83.8612 30.9578 86.1592 30.0038 87.7137 28.2323L87.6461 29.5269C87.5785 30.2083 88.0516 30.6852 88.7275 30.6852H91.6338C92.242 30.6852 92.7151 30.2764 92.7151 29.595ZM82.1713 26.8698C80.3464 26.8698 79.1299 25.9158 79.1299 24.4849C79.1299 22.7133 80.9547 21.3506 83.6582 21.3506C84.9424 21.3506 86.4293 21.555 87.5783 22.032V23.9398C86.4293 25.7796 84.4017 26.8698 82.1713 26.8698Z"
											fill="white" />
										<path
											d="M112.79 10.5836C113.871 11.1968 113.871 11.5375 112.722 13.3772C111.641 15.0807 111.438 15.217 110.221 14.6037C109.343 14.1268 107.856 13.7179 106.707 13.7179C102.99 13.7179 100.556 16.1709 100.556 19.9185C100.556 23.8023 102.99 26.3916 106.707 26.3916C107.991 26.3916 109.613 25.9146 110.627 25.3014C111.708 24.6881 111.911 24.6881 113.06 26.3916C114.074 27.9588 114.074 28.2994 113.128 28.9808C111.505 30.1392 108.87 31.025 106.572 31.025C99.7453 31.025 95.1494 26.596 95.1494 19.9866C95.1494 13.3772 99.7453 9.01641 106.639 9.01641C108.802 8.94827 111.235 9.62965 112.79 10.5836Z"
											fill="white" />
										<path
											d="M135.162 28.0281C136.04 29.1183 135.702 29.5272 133.54 30.2767C131.377 31.0943 131.039 31.0262 130.295 30.0041L124.145 21.7594L121.374 24.4168V29.7997C121.374 30.2085 120.901 30.6855 120.293 30.6855H117.319C116.643 30.6855 116.237 30.2085 116.237 29.7997V1.52247C116.237 0.0915754 116.643 0.0234375 118.806 0.0234375C121.306 0.0234375 121.374 0.227851 121.374 1.52247V17.603L129.755 9.49461C130.701 8.60882 131.174 8.67695 132.864 9.76716C134.689 10.9255 134.824 11.2662 133.945 12.152L127.727 18.2844L135.162 28.0281Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={120} height={31} viewBox="0 0 120 31"
										fill="none">
										<path fillRule="evenodd" clipRule="evenodd"
											d="M17.8299 2.59615C17.8299 3.8195 16.7629 4.86809 15.518 4.86809C14.2731 4.86809 13.2061 3.8195 13.2061 2.59615C13.2061 1.3728 14.2731 0.324219 15.518 0.324219C16.7629 0.324219 17.8299 1.3728 17.8299 2.59615ZM15.5193 6.73242C14.1559 6.73242 13.0889 7.78101 13.0889 9.12086C13.0889 10.4607 14.1559 11.5093 15.5193 11.5093C16.8828 11.5093 17.9498 10.4607 17.9498 9.12086C17.9498 7.72275 16.8828 6.73242 15.5193 6.73242ZM13.0303 15.5287C13.0303 14.1889 14.1566 13.082 15.52 13.082C16.8835 13.082 18.0691 14.1889 18.0098 15.5287C18.0098 16.8686 16.8835 17.9754 15.52 17.9754C14.1566 17.9754 13.0303 16.8686 13.0303 15.5287ZM15.5193 19.5479C14.1559 19.5479 13.0889 20.5964 13.0889 21.9363C13.0889 23.2762 14.1559 24.3247 15.5193 24.3247C16.8828 24.3247 17.9498 23.2762 17.9498 21.9363C17.9498 20.6547 16.8828 19.5479 15.5193 19.5479ZM13.2061 28.4028C13.2061 27.1794 14.2731 26.1309 15.518 26.1309C16.8221 26.1309 17.8299 27.1794 17.8299 28.4028C17.8299 29.6261 16.7629 30.6747 15.518 30.6747C14.2731 30.6747 13.2061 29.6261 13.2061 28.4028ZM21.9212 6.44141C20.4392 6.44141 19.1943 7.66476 19.1943 9.12112C19.1943 10.5775 20.4392 11.8008 21.9212 11.8008C23.4032 11.8008 24.6481 10.5775 24.6481 9.12112C24.6481 7.66476 23.4032 6.44141 21.9212 6.44141ZM19.0732 15.5872C19.0732 14.0144 20.3774 12.791 21.9187 12.791C23.46 12.791 24.7641 14.0144 24.7641 15.5872C24.7641 17.1601 23.46 18.3835 21.9187 18.3835C20.3181 18.3835 19.0732 17.1019 19.0732 15.5872ZM21.9212 19.2568C20.4392 19.2568 19.1943 20.4802 19.1943 21.9366C19.1943 23.3929 20.4392 24.6163 21.9212 24.6163C23.4032 24.6163 24.6481 23.3929 24.6481 21.9366C24.6481 20.4802 23.4032 19.2568 21.9212 19.2568ZM25.3584 15.5289C25.3584 13.7813 26.8404 12.4414 28.5002 12.4414C30.1601 12.4414 31.5235 13.7813 31.6421 15.5289C31.6421 17.2765 30.2786 18.6164 28.5002 18.6164C26.7218 18.6164 25.3584 17.16 25.3584 15.5289ZM9.0582 7.02344C7.93188 7.02344 6.9834 7.95551 6.9834 9.06235C6.9834 10.1692 7.93188 11.1013 9.0582 11.1013C10.1845 11.1013 11.133 10.1692 11.133 9.06235C11.133 7.95551 10.2438 7.02344 9.0582 7.02344ZM6.8623 15.5285C6.8623 14.3051 7.81078 13.373 9.05566 13.373C10.3005 13.373 11.249 14.3051 11.249 15.5285C11.249 16.7518 10.3005 17.6839 9.05566 17.6839C7.81078 17.6839 6.8623 16.7518 6.8623 15.5285ZM9.0582 19.8398C7.93188 19.8398 6.9834 20.7719 6.9834 21.8788C6.9834 22.9856 7.93188 23.9177 9.0582 23.9177C10.1845 23.9177 11.133 22.9856 11.133 21.8788C11.133 20.7719 10.2438 19.8398 9.0582 19.8398ZM0.698242 15.587C0.698242 14.5384 1.52816 13.7228 2.5952 13.7228C3.66224 13.7228 4.49216 14.5384 4.49216 15.587C4.49216 16.6355 3.66224 17.4511 2.5952 17.4511C1.52816 17.4511 0.698242 16.6355 0.698242 15.587Z"
											fill="white" />
										<path
											d="M55.2343 11.5703C54.9972 11.5703 54.8193 11.8033 54.8193 11.9781V28.1147C54.8193 28.3477 55.0565 28.5224 55.2343 28.5224H57.1905C57.4277 28.5224 57.6055 28.2894 57.6055 28.1147V11.9781C57.6055 11.7451 57.3684 11.5703 57.1905 11.5703H55.2343Z"
											fill="white" />
										<path
											d="M56.3022 4.75391C55.2352 4.75391 54.4053 5.56947 54.4053 6.61806C54.4053 7.66664 55.2352 8.48221 56.3022 8.48221C57.3693 8.48221 58.1992 7.66664 58.1992 6.61806C58.1992 5.56947 57.31 4.75391 56.3022 4.75391Z"
											fill="white" />
										<path
											d="M97.3241 11.5703C97.087 11.5703 96.9092 11.8033 96.9092 11.9781V28.1147C96.9092 28.3477 97.1463 28.5224 97.3241 28.5224H99.2804C99.5175 28.5224 99.6953 28.2894 99.6953 28.1147V11.9781C99.6953 11.7451 99.4582 11.5703 99.2804 11.5703H97.3241Z"
											fill="white" />
										<path
											d="M98.271 4.75391C97.2039 4.75391 96.374 5.56947 96.374 6.61806C96.374 7.66664 97.2039 8.48221 98.271 8.48221C99.338 8.48221 100.168 7.66664 100.168 6.61806C100.168 5.56947 99.338 4.75391 98.271 4.75391Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M118.289 26.756C118.276 26.8126 118.246 26.881 118.174 26.9494C118.174 27.0659 118.05 27.1824 117.803 27.1242L117.898 27.2334C117.886 27.2382 117.874 27.241 117.865 27.241H117.68L117.68 27.2407H117.433V27.0663V26.542H117.865C117.988 26.542 118.112 26.542 118.174 26.6585C118.246 26.6585 118.276 26.699 118.289 26.756ZM117.433 27.2407H117.371V27.765H117.124V26.3086H117.68H117.927C118.05 26.3086 118.174 26.4251 118.174 26.4251C118.297 26.4251 118.297 26.5416 118.297 26.5416V26.6581C118.297 26.6822 118.297 26.7162 118.289 26.756C118.297 26.7958 118.297 26.8437 118.297 26.8915C118.297 27.008 118.297 27.1245 118.174 27.1245C118.101 27.1245 118.029 27.1645 117.969 27.1976C117.943 27.2122 117.919 27.2255 117.898 27.2334L118.359 27.765H118.112L117.68 27.241H117.433V27.2407Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M116.351 27.0664C116.351 26.3674 117.003 25.7266 117.714 25.7266C118.485 25.7266 119.077 26.3091 119.077 27.0664C119.077 27.7655 118.425 28.4063 117.714 28.4063C117.003 28.4063 116.351 27.7655 116.351 27.0664ZM116.468 27.0661C116.468 27.7652 117.001 28.2895 117.713 28.2895C118.365 28.2895 118.958 27.7652 118.958 27.0661C118.958 26.3671 118.424 25.8428 117.713 25.8428C117.001 25.8428 116.468 26.3671 116.468 27.0661Z"
											fill="white" />
										<path
											d="M71.5346 14.1918C71.7717 14.1918 71.9496 13.9588 71.9496 13.7841V11.8617C71.9496 11.6286 71.7124 11.4539 71.5346 11.4539H67.3257V5.27888C67.3257 5.04586 67.0886 4.87109 66.9108 4.87109H64.9545C64.7174 4.87109 64.5396 5.10411 64.5396 5.27888V11.4539H62.4648C62.2276 11.4539 62.0498 11.6869 62.0498 11.8617V13.7841C62.0498 14.0171 62.2869 14.1918 62.4648 14.1918H64.5396V23.5126C64.5396 26.3671 66.4958 28.2312 69.3412 28.2312H71.416C71.6532 28.2312 71.831 27.9982 71.831 27.8235V25.901C71.831 25.668 71.5939 25.4933 71.416 25.4933H69.6376C68.2742 25.4933 67.3257 24.5612 67.3257 23.1048V14.1336H71.5346V14.1918Z"
											fill="white" />
										<path
											d="M113.152 14.1918C113.389 14.1918 113.567 13.9588 113.567 13.7841V11.8617C113.567 11.6286 113.33 11.4539 113.152 11.4539H108.943V5.27888C108.943 5.04586 108.706 4.87109 108.528 4.87109H106.572C106.335 4.87109 106.157 5.10411 106.157 5.27888V11.4539H104.082C103.845 11.4539 103.667 11.6869 103.667 11.8617V13.7841C103.667 14.0171 103.904 14.1918 104.082 14.1918H106.157V23.5126C106.157 26.3671 108.113 28.2312 110.958 28.2312H113.033C113.27 28.2312 113.448 27.9982 113.448 27.8235V25.901C113.448 25.668 113.211 25.4933 113.033 25.4933H111.136C109.773 25.4933 108.824 24.5612 108.824 23.1048V14.1336H113.093L113.152 14.1918Z"
											fill="white" />
										<path
											d="M42.7857 14.1907V27.9388C42.7857 28.1718 43.0228 28.3466 43.2006 28.3466H45.1569C45.394 28.3466 45.5718 28.1136 45.5718 27.9388V14.1907H50.1957C50.4328 14.1907 50.6106 13.9577 50.6106 13.7829V11.8605C50.6106 11.6275 50.3735 11.4527 50.1957 11.4527H45.5718V7.84092C45.5718 6.38455 46.6389 5.39422 47.8837 5.39422H50.1957C50.4328 5.39422 50.6106 5.1612 50.6106 4.98644V3.06403C50.6106 2.83101 50.3735 2.65625 50.1957 2.65625H48.0023C45.0976 2.65625 42.7857 5.04469 42.7857 7.78266V11.4527H40.7109C40.4737 11.4527 40.2959 11.6857 40.2959 11.8605V13.7829C40.2959 14.0159 40.533 14.1907 40.7109 14.1907H42.7857Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M84.6369 10.9277C86.9488 10.9277 89.1422 11.8598 90.6835 13.4909C92.2247 15.1221 93.0547 17.394 93.0547 19.899C93.0547 26.1322 88.7272 28.9284 84.5776 28.9284C80.3687 28.9284 76.1006 26.1905 76.1006 19.899V2.94685C76.1006 2.77208 76.2784 2.53906 76.5155 2.53906H78.4718C78.6496 2.53906 78.8867 2.71383 78.8867 2.94685V13.1997C80.2502 11.8598 82.4435 10.9277 84.6369 10.9277ZM78.8271 19.9575C78.8271 23.045 80.3684 26.3073 84.5773 26.3073C88.7862 26.3073 90.2682 23.045 90.3275 19.9575C90.3275 16.2292 88.0155 13.666 84.5773 13.666C81.1391 13.666 78.8271 16.171 78.8271 19.9575Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={119} height={37} viewBox="0 0 119 37"
										fill="none">
										<path fillRule="evenodd" clipRule="evenodd"
											d="M33.2946 24.8799C33.4715 25.2916 33.6485 25.762 33.8254 26.2325C34.3563 27.5851 34.4743 28.8789 34.2973 30.1728C33.8844 32.878 32.1149 35.2304 29.5195 36.2889C28.5758 36.7006 27.573 36.877 26.5113 36.877C26.2163 36.877 25.8624 36.877 25.5675 36.8182C24.3288 36.7006 23.0901 36.289 21.8515 35.5832C20.3768 34.7599 18.9022 33.5249 17.2506 31.7606C15.599 33.5249 14.1834 34.7599 12.6498 35.5832C11.4111 36.289 10.1724 36.6418 8.93372 36.8182C8.7863 36.8182 8.62414 36.8329 8.46198 36.8476L8.46184 36.8476C8.29963 36.8623 8.13742 36.877 7.98996 36.877C6.92823 36.877 5.92548 36.7006 4.98172 36.2889C2.44536 35.2304 0.557842 32.9368 0.144947 30.1728C-0.0320086 28.8201 0.144947 27.5263 0.616827 26.2325C0.793782 25.7032 0.970738 25.2916 1.14769 24.8799C1.44262 24.233 1.73754 23.5861 1.97348 22.998L2.03247 22.9392C4.62781 17.4111 7.34113 11.8242 10.1724 6.29609L10.2904 6.06086C10.5853 5.53159 10.8802 4.94351 11.1751 4.35544L11.1752 4.35538C11.2546 4.23092 11.334 4.10429 11.4143 3.97632L11.4143 3.97632L11.4143 3.97631C11.7513 3.4391 12.1031 2.8783 12.5318 2.35586C13.7705 0.944427 15.4221 0.121094 17.2506 0.121094C19.0202 0.121094 20.7307 0.944427 21.9104 2.41466C22.5003 3.06157 22.9132 3.76728 23.2671 4.41419L23.2671 4.41429C23.5621 5.00235 23.857 5.59041 24.1519 6.11966L24.2698 6.3549C27.1601 11.883 29.8734 17.4699 32.4098 22.998H32.4688C32.7047 23.5861 32.9996 24.233 33.2946 24.8799ZM62.3168 9.35455C62.3168 10.7072 61.255 11.7657 59.8984 11.7657C58.5417 11.7657 57.48 10.7072 57.48 9.35455C57.48 8.00193 58.5417 6.94336 59.8984 6.94336C61.314 7.00217 62.3168 8.06074 62.3168 9.35455ZM52.4653 14.1761V14.7642C52.4653 14.7642 51.3445 13.2939 48.8672 13.2939C44.8562 13.2939 41.73 16.352 41.73 20.5863C41.73 24.7618 44.8562 27.8787 48.8672 27.8787C51.3445 27.8787 52.4653 26.3497 52.4653 26.3497V26.9966C52.4653 27.2906 52.7012 27.5258 52.9961 27.5258H56.0044V13.6468H52.9961C52.6422 13.6468 52.4653 13.882 52.4653 14.1761ZM49.457 24.5274C50.8136 24.5274 51.9344 23.8217 52.4652 22.9983V18.0583C51.9344 17.2938 50.7547 16.5293 49.457 16.5293C47.0976 16.5293 45.269 17.9995 45.269 20.5283C45.269 23.0572 47.0976 24.5274 49.457 24.5274ZM58.1284 13.6475H61.6675V27.4677H58.1284V13.6475ZM107.437 14.7648C107.437 14.7648 108.617 13.2946 111.035 13.2946C115.046 13.2946 118.172 16.3527 118.172 20.5281C118.172 24.7036 115.046 27.8205 111.035 27.8205C108.558 27.8205 107.437 26.2915 107.437 26.2915V26.9384C107.437 27.2324 107.201 27.4677 106.906 27.4677H103.898V7.00195H107.437V14.7648ZM110.445 24.4678C109.089 24.4678 108.027 23.7621 107.437 22.9388V17.9988C107.968 17.2343 109.148 16.4697 110.445 16.4697C112.805 16.4697 114.633 17.94 114.633 20.4688C114.633 22.9976 112.805 24.4678 110.445 24.4678ZM102.072 27.5258V19.2925C102.072 16.9401 101.6 15.6463 100.42 14.6466C99.3586 13.7644 98.0609 13.2939 96.5273 13.2939C95.1707 13.2939 93.814 13.7056 92.7523 14.7642V14.1761C92.7523 13.882 92.5163 13.6468 92.2214 13.6468H89.3901V27.5258H92.9292V17.8811C93.6371 17.0578 94.7578 16.5285 95.8195 16.5285C97.766 16.5285 98.5328 17.4106 98.5328 19.7042V27.5258H102.072ZM80.7775 13.2944C78.3591 13.2944 77.1794 14.7647 77.1794 14.7647V7.00181H73.6403V27.4675H76.6486C76.9435 27.4675 77.1794 27.2323 77.1794 26.9382V26.2913C77.1794 26.2913 78.3002 27.8204 80.7775 27.8204C84.7885 27.8204 87.9147 24.7035 87.9147 20.528C87.9737 16.3525 84.8475 13.2944 80.7775 13.2944ZM77.1792 22.9388C77.7691 23.7621 78.8308 24.4678 80.1874 24.4678C82.5468 24.4678 84.3754 22.9976 84.3754 20.4688C84.3754 17.94 82.5468 16.4697 80.1874 16.4697C78.8898 16.4697 77.7101 17.2343 77.1792 17.9988V22.9388ZM70.6336 13.2939C71.6953 13.2939 72.2852 13.4704 72.2852 13.4704V16.7637C72.2852 16.7637 69.3359 15.7639 67.5074 17.8811V27.5258H63.9683V13.6468H66.9765C67.2714 13.6468 67.5074 13.882 67.5074 14.1761V14.7642C68.0972 13.9997 69.5129 13.2939 70.6336 13.2939ZM17.1916 28.1144C15.1861 25.5856 13.8885 23.2332 13.4756 21.2925C13.2986 20.4692 13.2396 19.7047 13.3576 19.0578C13.4166 18.4697 13.6525 17.9404 13.9475 17.5287C14.6553 16.5289 15.835 15.882 17.1916 15.882C18.5483 15.882 19.787 16.4701 20.4358 17.5287C20.7307 17.9992 20.9667 18.4697 21.0257 19.0578C21.1436 19.7047 21.0846 20.4692 20.9077 21.2925C20.4948 23.2332 19.1971 25.5856 17.1916 28.1144ZM28.5738 34.1717C30.4023 33.466 31.7 31.8194 31.936 29.8787C32.0539 28.8789 31.936 27.9967 31.759 27.0558C31.6951 26.8648 31.614 26.6737 31.5249 26.464C31.4494 26.2864 31.3683 26.0954 31.2871 25.8796C31.1397 25.5856 31.0069 25.2768 30.8742 24.9681C30.7415 24.6593 30.6088 24.3506 30.4613 24.0565V23.9977C27.925 18.5284 25.2117 12.9415 22.3804 7.47223L22.2624 7.23699C21.9675 6.64889 21.6726 6.0608 21.3776 5.53151C21.0827 4.94342 20.7288 4.35532 20.3159 3.88485C19.5491 3.0027 18.4874 2.53223 17.3666 2.53223C16.2459 2.53223 15.1842 3.0027 14.4174 3.88485C14.0045 4.41413 13.6506 4.94342 13.3557 5.53151L13.3556 5.5316C13.0607 6.11966 12.7658 6.70773 12.4709 7.23699L12.3529 7.47223C9.46264 12.9415 6.74933 18.5284 4.21297 23.9977L4.15399 24.0565C3.85906 24.6446 3.56413 25.2915 3.32819 25.8796C3.15124 26.2913 2.97428 26.7029 2.85631 27.0558C2.44342 28.1144 2.38443 28.9965 2.5024 29.9375C2.73834 31.8194 4.03602 33.466 5.86455 34.2306C6.69034 34.5246 7.6341 34.701 8.63685 34.5834C9.58061 34.4658 10.5244 34.1717 11.4681 33.6425C12.7658 32.8779 14.1225 31.7606 15.6561 30.0551C13.2377 27.0558 11.7041 24.2917 11.1732 21.8806C10.8783 20.7632 10.8193 19.7046 10.9963 18.7637C11.1732 17.8227 11.4681 16.9994 11.999 16.2348C13.1197 14.647 15.0662 13.6472 17.1897 13.6472C19.3131 13.6472 21.2597 14.5882 22.3804 16.2348C22.9112 16.9994 23.2062 17.8227 23.3831 18.7637C23.5011 19.7046 23.4421 20.7632 23.2062 21.8806C22.6163 24.2917 21.1417 26.997 18.7233 29.9963C20.2569 31.7017 21.5546 32.8191 22.9112 33.5837C23.914 34.1129 24.7988 34.407 25.7425 34.5246C26.7453 34.6422 27.689 34.5246 28.5738 34.1717Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={136} height={39} viewBox="0 0 136 39"
										fill="none">
										<path
											d="M24.7247 3.43111C24.184 1.65952 22.2916 0.70559 20.5343 1.25069C18.777 1.7958 17.8308 3.70366 18.3715 5.47524L27.0227 32.3216C27.631 33.9569 29.3882 34.9108 31.0779 34.4339C32.8352 33.8888 33.9166 32.049 33.3759 30.2775C33.3759 30.2093 24.7247 3.43111 24.7247 3.43111Z"
											fill="white" />
										<path
											d="M11.3419 7.86079C10.8012 6.08921 8.90876 5.13528 7.1515 5.68038C5.39424 6.22548 4.44802 8.13335 4.98871 9.90493L13.6399 36.7513C14.2481 38.3866 16.0054 39.3405 17.6951 38.8636C19.4523 38.3184 20.5337 36.4787 19.993 34.7071C19.993 34.639 11.3419 7.86079 11.3419 7.86079Z"
											fill="white" />
										<path
											d="M35.6731 25.7103C37.4304 25.1652 38.3766 23.2574 37.8359 21.4858C37.2952 19.7142 35.4028 18.7603 33.6455 19.3054L6.94861 27.9589C5.32652 28.5721 4.3803 30.3437 4.85341 32.0472C5.39411 33.8188 7.21896 34.909 8.97622 34.3639C9.1114 34.3639 35.6731 25.7103 35.6731 25.7103Z"
											fill="white" />
										<path
											d="M12.4907 33.2751C14.248 32.7299 16.4783 31.9804 18.8439 31.1628C18.3032 29.3912 17.5597 27.1426 16.7487 24.7578L10.3955 26.8701L12.4907 33.2751Z"
											fill="white" />
										<path
											d="M25.9399 28.8454C28.3731 28.0277 30.6034 27.3463 32.2931 26.7331C31.7524 24.9615 31.009 22.713 30.1979 20.3281L23.8447 22.4404L25.9399 28.8454Z"
											fill="white" />
										<path
											d="M31.2794 12.1518C33.0366 11.6066 33.9828 9.69879 33.4421 7.9272C32.9014 6.15561 31.009 5.20168 29.2517 5.74679L2.62244 14.4684C1.00035 15.0817 0.0541306 16.8533 0.52724 18.5567C1.06794 20.3964 2.89279 21.4866 4.65005 20.8734C4.71764 20.8734 31.2794 12.1518 31.2794 12.1518Z"
											fill="white" />
										<path
											d="M8.16453 19.7165C9.9218 19.1714 12.1522 18.4218 14.5177 17.6042C13.7067 15.1512 13.0308 12.9027 12.4225 11.1992L6.06934 13.3115L8.16453 19.7165Z"
											fill="white" />
										<path
											d="M21.5473 15.3532C23.9805 14.5355 26.2109 13.8541 27.9005 13.2409C27.0895 10.7879 26.4136 8.53939 25.8053 6.83594L19.4521 8.94821L21.5473 15.3532Z"
											fill="white" />
										<path
											d="M62.6395 10.5177C63.7885 11.0628 63.9237 11.4035 62.9774 13.1751C62.0312 15.0148 61.8285 15.0829 60.6119 14.606C59.125 13.9927 57.3001 13.5157 56.0836 13.5157C54.1235 13.5157 52.8394 14.1971 52.8394 15.2873C52.8394 18.8305 64.1264 16.9226 64.1264 24.5541C64.1264 28.3698 60.8822 30.8909 56.016 30.8909C53.4477 30.8909 50.2711 30.0051 48.1083 28.9149C47.0269 28.3698 46.9593 28.0291 47.9055 26.1894C48.7166 24.6222 48.9869 24.4178 50.1359 24.8948C52.0283 25.7124 54.3263 26.3257 55.9484 26.3257C57.7732 26.3257 58.9222 25.5762 58.9222 24.486C58.9222 21.0109 47.4324 22.6462 47.4324 15.2873C47.4324 11.4035 50.6766 8.74609 55.4753 8.74609C57.7732 8.95051 60.6795 9.63189 62.6395 10.5177Z"
											fill="white" />
										<path
											d="M71.7645 1.52218V29.8676C71.7645 30.2764 71.2914 30.7533 70.6832 30.7533H67.7093C67.0335 30.7533 66.6279 30.2764 66.6279 29.8676V1.52218C66.6279 0.0912827 67.0335 0.0231448 69.1962 0.0231448C71.6294 -0.0449932 71.7645 0.159421 71.7645 1.52218Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M92.7151 29.595V17.3983C92.7151 12.0836 89.133 8.94922 83.4557 8.94922C80.8874 8.94922 78.0488 9.76687 76.0211 11.1296C74.9397 11.811 74.9397 12.1517 76.0211 13.8551C77.1701 15.5586 77.3729 15.6267 78.4543 15.0135C79.806 14.1958 81.4957 13.6507 82.915 13.6507C85.8889 13.6507 87.6461 15.0135 87.6461 17.262V18.6929C86.2268 18.0797 84.4695 17.739 82.5771 17.739C77.5081 17.739 74.1963 20.4645 74.1963 24.5528C74.1963 28.3685 77.1701 30.9578 81.5633 30.9578C83.8612 30.9578 86.1592 30.0038 87.7137 28.2323L87.6461 29.5269C87.5785 30.2083 88.0516 30.6852 88.7275 30.6852H91.6338C92.242 30.6852 92.7151 30.2764 92.7151 29.595ZM82.1713 26.8698C80.3464 26.8698 79.1299 25.9158 79.1299 24.4849C79.1299 22.7133 80.9547 21.3506 83.6582 21.3506C84.9424 21.3506 86.4293 21.555 87.5783 22.032V23.9398C86.4293 25.7796 84.4017 26.8698 82.1713 26.8698Z"
											fill="white" />
										<path
											d="M112.79 10.5836C113.871 11.1968 113.871 11.5375 112.722 13.3772C111.641 15.0807 111.438 15.217 110.221 14.6037C109.343 14.1268 107.856 13.7179 106.707 13.7179C102.99 13.7179 100.556 16.1709 100.556 19.9185C100.556 23.8023 102.99 26.3916 106.707 26.3916C107.991 26.3916 109.613 25.9146 110.627 25.3014C111.708 24.6881 111.911 24.6881 113.06 26.3916C114.074 27.9588 114.074 28.2994 113.128 28.9808C111.505 30.1392 108.87 31.025 106.572 31.025C99.7453 31.025 95.1494 26.596 95.1494 19.9866C95.1494 13.3772 99.7453 9.01641 106.639 9.01641C108.802 8.94827 111.235 9.62965 112.79 10.5836Z"
											fill="white" />
										<path
											d="M135.162 28.0281C136.04 29.1183 135.702 29.5272 133.54 30.2767C131.377 31.0943 131.039 31.0262 130.295 30.0041L124.145 21.7594L121.374 24.4168V29.7997C121.374 30.2085 120.901 30.6855 120.293 30.6855H117.319C116.643 30.6855 116.237 30.2085 116.237 29.7997V1.52247C116.237 0.0915754 116.643 0.0234375 118.806 0.0234375C121.306 0.0234375 121.374 0.227851 121.374 1.52247V17.603L129.755 9.49461C130.701 8.60882 131.174 8.67695 132.864 9.76716C134.689 10.9255 134.824 11.2662 133.945 12.152L127.727 18.2844L135.162 28.0281Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={120} height={31} viewBox="0 0 120 31"
										fill="none">
										<path fillRule="evenodd" clipRule="evenodd"
											d="M17.9285 2.59615C17.9285 3.8195 16.8615 4.86809 15.6166 4.86809C14.3717 4.86809 13.3047 3.8195 13.3047 2.59615C13.3047 1.3728 14.3717 0.324219 15.6166 0.324219C16.8615 0.324219 17.9285 1.3728 17.9285 2.59615ZM15.616 6.73242C14.2526 6.73242 13.1855 7.78101 13.1855 9.12086C13.1855 10.4607 14.2526 11.5093 15.616 11.5093C16.9795 11.5093 18.0465 10.4607 18.0465 9.12086C18.0465 7.72275 16.9795 6.73242 15.616 6.73242ZM13.1271 15.5287C13.1271 14.1888 14.2534 13.082 15.6169 13.082C16.9803 13.082 18.1659 14.1888 18.1066 15.5287C18.1066 16.8686 16.9803 17.9754 15.6169 17.9754C14.2534 17.9754 13.1271 16.8686 13.1271 15.5287ZM15.616 19.5479C14.2526 19.5479 13.1855 20.5964 13.1855 21.9363C13.1855 23.2762 14.2526 24.3247 15.616 24.3247C16.9795 24.3247 18.0465 23.2762 18.0465 21.9363C18.0465 20.6547 16.9795 19.5479 15.616 19.5479ZM13.3047 28.4028C13.3047 27.1794 14.3717 26.1309 15.6166 26.1309C16.9208 26.1309 17.9285 27.1794 17.9285 28.4028C17.9285 29.6261 16.8615 30.6747 15.6166 30.6747C14.3717 30.6747 13.3047 29.6261 13.3047 28.4028ZM22.0198 6.44141C20.5378 6.44141 19.293 7.66476 19.293 9.12112C19.293 10.5775 20.5378 11.8008 22.0198 11.8008C23.5018 11.8008 24.7467 10.5775 24.7467 9.12112C24.7467 7.66476 23.5018 6.44141 22.0198 6.44141ZM19.1738 15.5872C19.1738 14.0144 20.478 12.791 22.0193 12.791C23.5605 12.791 24.8647 14.0144 24.8647 15.5872C24.8647 17.1601 23.5605 18.3835 22.0193 18.3835C20.4187 18.3835 19.1738 17.1019 19.1738 15.5872ZM22.0198 19.2568C20.5378 19.2568 19.293 20.4802 19.293 21.9366C19.293 23.3929 20.5378 24.6163 22.0198 24.6163C23.5018 24.6163 24.7467 23.3929 24.7467 21.9366C24.7467 20.4802 23.5018 19.2568 22.0198 19.2568ZM25.457 15.5289C25.457 13.7813 26.939 12.4414 28.5989 12.4414C30.2587 12.4414 31.6222 13.7813 31.7407 15.5289C31.7407 17.2765 30.3773 18.6164 28.5989 18.6164C26.8205 18.6164 25.457 17.16 25.457 15.5289ZM9.15488 7.02344C8.02856 7.02344 7.08008 7.95551 7.08008 9.06235C7.08008 10.1692 8.02856 11.1013 9.15488 11.1013C10.2812 11.1013 11.2297 10.1692 11.2297 9.06235C11.2297 7.95551 10.3405 7.02344 9.15488 7.02344ZM6.96289 15.5285C6.96289 14.3051 7.91137 13.373 9.15625 13.373C10.4011 13.373 11.3496 14.3051 11.3496 15.5285C11.3496 16.7518 10.4011 17.6839 9.15625 17.6839C7.91137 17.6839 6.96289 16.7518 6.96289 15.5285ZM9.15488 19.8398C8.02856 19.8398 7.08008 20.7719 7.08008 21.8788C7.08008 22.9856 8.02856 23.9177 9.15488 23.9177C10.2812 23.9177 11.2297 22.9856 11.2297 21.8788C11.2297 20.7719 10.3405 19.8398 9.15488 19.8398ZM0.796875 15.587C0.796875 14.5384 1.62679 13.7228 2.69383 13.7228C3.76087 13.7228 4.59079 14.5384 4.59079 15.587C4.59079 16.6355 3.76087 17.4511 2.69383 17.4511C1.62679 17.4511 0.796875 16.6355 0.796875 15.587Z"
											fill="white" />
										<path
											d="M55.3349 11.5703C55.0978 11.5703 54.9199 11.8033 54.9199 11.9781V28.1147C54.9199 28.3477 55.157 28.5224 55.3349 28.5224H57.2911C57.5282 28.5224 57.7061 28.2894 57.7061 28.1147V11.9781C57.7061 11.7451 57.469 11.5703 57.2911 11.5703H55.3349Z"
											fill="white" />
										<path
											d="M56.4028 4.75391C55.3358 4.75391 54.5059 5.56947 54.5059 6.61806C54.5059 7.66664 55.3358 8.48221 56.4028 8.48221C57.4699 8.48221 58.2998 7.66664 58.2998 6.61806C58.2998 5.56947 57.4106 4.75391 56.4028 4.75391Z"
											fill="white" />
										<path
											d="M97.4247 11.5703C97.1876 11.5703 97.0098 11.8033 97.0098 11.9781V28.1147C97.0098 28.3477 97.2469 28.5224 97.4247 28.5224H99.381C99.6181 28.5224 99.7959 28.2894 99.7959 28.1147V11.9781C99.7959 11.7451 99.5588 11.5703 99.381 11.5703H97.4247Z"
											fill="white" />
										<path
											d="M98.3716 4.75391C97.3045 4.75391 96.4746 5.56947 96.4746 6.61806C96.4746 7.66664 97.3045 8.48221 98.3716 8.48221C99.4386 8.48221 100.269 7.66664 100.269 6.61806C100.269 5.56947 99.4386 4.75391 98.3716 4.75391Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M118.387 26.756C118.375 26.8126 118.345 26.881 118.272 26.9494C118.272 27.0659 118.149 27.1824 117.902 27.1242L117.997 27.2334C117.984 27.2382 117.973 27.241 117.964 27.241H117.779L117.778 27.2407H117.531V27.0663V26.542H117.964C118.087 26.542 118.21 26.542 118.272 26.6585C118.345 26.6585 118.375 26.699 118.387 26.756ZM117.531 27.2407H117.47V27.765H117.223V26.3086H117.778H118.025C118.149 26.3086 118.272 26.4251 118.272 26.4251C118.396 26.4251 118.396 26.5416 118.396 26.5416V26.6581C118.396 26.6822 118.396 26.7162 118.387 26.756C118.396 26.7958 118.396 26.8437 118.396 26.8915C118.396 27.008 118.396 27.1245 118.272 27.1245C118.2 27.1245 118.128 27.1645 118.068 27.1976C118.041 27.2122 118.017 27.2255 117.997 27.2334L118.458 27.765H118.211L117.779 27.241H117.531V27.2407Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M116.453 27.0664C116.453 26.3674 117.105 25.7266 117.817 25.7266C118.587 25.7266 119.18 26.3091 119.18 27.0664C119.18 27.7655 118.528 28.4063 117.817 28.4063C117.105 28.4063 116.453 27.7655 116.453 27.0664ZM116.572 27.0661C116.572 27.7652 117.106 28.2895 117.817 28.2895C118.469 28.2895 119.062 27.7652 119.062 27.0661C119.062 26.3671 118.529 25.8428 117.817 25.8428C117.106 25.8428 116.572 26.3671 116.572 27.0661Z"
											fill="white" />
										<path
											d="M71.6371 14.1918C71.8743 14.1918 72.0521 13.9588 72.0521 13.7841V11.8617C72.0521 11.6286 71.815 11.4539 71.6371 11.4539H67.4283V5.27888C67.4283 5.04586 67.1911 4.87109 67.0133 4.87109H65.0571C64.8199 4.87109 64.6421 5.10411 64.6421 5.27888V11.4539H62.5673C62.3302 11.4539 62.1523 11.6869 62.1523 11.8617V13.7841C62.1523 14.0171 62.3895 14.1918 62.5673 14.1918H64.6421V23.5126C64.6421 26.3671 66.5983 28.2312 69.4438 28.2312H71.5186C71.7557 28.2312 71.9335 27.9982 71.9335 27.8235V25.901C71.9335 25.668 71.6964 25.4933 71.5186 25.4933H69.7402C68.3767 25.4933 67.4283 24.5612 67.4283 23.1048V14.1336H71.6371V14.1918Z"
											fill="white" />
										<path
											d="M113.252 14.1918C113.489 14.1918 113.667 13.9588 113.667 13.7841V11.8617C113.667 11.6286 113.43 11.4539 113.252 11.4539H109.043V5.27888C109.043 5.04586 108.806 4.87109 108.629 4.87109H106.672C106.435 4.87109 106.257 5.10411 106.257 5.27888V11.4539H104.183C103.945 11.4539 103.768 11.6869 103.768 11.8617V13.7841C103.768 14.0171 104.005 14.1918 104.183 14.1918H106.257V23.5126C106.257 26.3671 108.214 28.2312 111.059 28.2312H113.134C113.371 28.2312 113.549 27.9982 113.549 27.8235V25.901C113.549 25.668 113.312 25.4933 113.134 25.4933H111.237C109.873 25.4933 108.925 24.5612 108.925 23.1048V14.1336H113.193L113.252 14.1918Z"
											fill="white" />
										<path
											d="M42.8862 14.1907V27.9388C42.8862 28.1718 43.1234 28.3466 43.3012 28.3466H45.2574C45.4946 28.3466 45.6724 28.1136 45.6724 27.9388V14.1907H50.2962C50.5334 14.1907 50.7112 13.9577 50.7112 13.7829V11.8605C50.7112 11.6275 50.4741 11.4527 50.2962 11.4527H45.6724V7.84092C45.6724 6.38455 46.7394 5.39422 47.9843 5.39422H50.2962C50.5334 5.39422 50.7112 5.1612 50.7112 4.98644V3.06403C50.7112 2.83101 50.4741 2.65625 50.2962 2.65625H48.1029C45.1982 2.65625 42.8862 5.04469 42.8862 7.78266V11.4527H40.8114C40.5743 11.4527 40.3965 11.6857 40.3965 11.8605V13.7829C40.3965 14.0159 40.6336 14.1907 40.8114 14.1907H42.8862Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M84.7375 10.9277C87.0494 10.9277 89.2428 11.8598 90.7841 13.4909C92.3253 15.1221 93.1553 17.394 93.1553 19.899C93.1553 26.1322 88.8278 28.9284 84.6782 28.9284C80.4693 28.9284 76.2012 26.1905 76.2012 19.899V2.94685C76.2012 2.77208 76.379 2.53906 76.6161 2.53906H78.5724C78.7502 2.53906 78.9873 2.71383 78.9873 2.94685V13.1997C80.3508 11.8598 82.5441 10.9277 84.7375 10.9277ZM78.9277 19.9575C78.9277 23.045 80.469 26.3073 84.6779 26.3073C88.8868 26.3073 90.3688 23.045 90.4281 19.9575C90.4281 16.2292 88.1161 13.666 84.6779 13.666C81.2397 13.666 78.9277 16.171 78.9277 19.9575Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={119} height={39} viewBox="0 0 119 39"
										fill="none">
										<path
											d="M29.2361 13.7558H15.4143V17.8313H25.2431C24.7517 23.574 19.9602 26.1058 15.4758 26.1058C9.70135 26.1058 4.66408 21.5363 4.66408 15.176C4.66408 8.93927 9.45563 4.12277 15.4758 4.12277C20.1445 4.12277 22.8474 7.08677 22.8474 7.08677L25.6732 4.12277C25.6732 4.12277 21.9874 0.047268 15.2915 0.047268C6.7527 -0.014482 0.179688 7.21027 0.179688 15.0525C0.179688 22.7095 6.38412 30.1813 15.5372 30.1813C23.5845 30.1813 29.4818 24.6855 29.4818 16.4728C29.4818 14.7438 29.2361 13.7558 29.2361 13.7558Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M30.7715 20.3635C30.7715 15.1765 34.8259 10.7305 40.4774 10.7305C45.1461 10.7305 50.1834 14.065 50.2448 20.487C50.2448 26.168 45.9447 30.1817 40.6003 30.1817C34.703 30.1817 30.7715 25.674 30.7715 20.3635ZM45.9446 20.4873C45.9446 16.9058 43.3031 14.6211 40.5387 14.6211C37.4058 14.6211 35.01 17.0911 35.0715 20.4256C35.0715 23.8836 37.4672 26.3536 40.5387 26.3536C43.3645 26.3536 45.9446 24.0688 45.9446 20.4873Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M51.9043 20.3635C51.9043 15.1765 55.9587 10.7305 61.6102 10.7305C66.2789 10.7305 71.3162 14.065 71.3776 20.487C71.3776 26.168 67.0775 30.1817 61.7331 30.1817C55.8358 30.1817 51.9043 25.674 51.9043 20.3635ZM67.0774 20.4873C67.0774 16.9058 64.4359 14.6211 61.6716 14.6211C58.5386 14.6211 56.1428 17.0911 56.2043 20.4256C56.2043 23.8836 58.6001 26.3536 61.6716 26.3536C64.4973 26.3536 67.0774 24.0688 67.0774 20.4873Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M73.0352 20.4877C73.0352 15.3625 77.0895 10.793 82.3111 10.793C84.584 10.793 86.304 11.6575 87.4098 13.016V11.3487H91.4642V28.824C91.4642 35.6782 87.5326 38.951 82.3725 38.951C77.6424 38.951 75.0009 36.0487 73.7109 33.27L77.4581 31.7262C78.011 32.9612 79.4853 35.1842 82.434 35.1842C85.5055 35.1842 87.5326 33.1465 87.5326 29.812V27.8977C86.3655 29.1945 84.9526 30.2442 82.1882 30.2442C77.7653 30.2442 73.0352 26.2922 73.0352 20.4877ZM87.8394 20.5491C87.8394 16.8441 85.1979 14.6211 82.6793 14.6211C79.9764 14.6211 77.3349 16.7823 77.2734 20.6108C77.2734 24.1306 79.8535 26.4153 82.6179 26.4153C85.2593 26.4153 87.8394 24.3776 87.8394 20.5491Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M100.617 20.4252C100.617 14.6207 104.733 10.7305 109.647 10.7305C113.456 10.7305 116.343 13.324 117.633 16.288L118.309 17.8935L105.347 23.3275C106.146 24.8095 107.374 26.2915 110.077 26.2915C112.473 26.2915 113.948 24.9947 114.808 23.6362L118.186 25.921C116.712 27.897 114.132 30.1817 110.077 30.1817C105.224 30.1817 100.617 26.5385 100.617 20.4252ZM113.395 16.5967C112.78 15.4235 111.552 14.4972 109.77 14.4972C107.006 14.4972 104.303 17.3995 104.794 20.24L113.395 16.5967Z"
											fill="white" />
										<path d="M94.4746 29.6247H98.7133V0.972656H94.4746V29.6247Z" fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={119} height={37} viewBox="0 0 119 37"
										fill="none">
										<path fillRule="evenodd" clipRule="evenodd"
											d="M33.5255 24.8799C33.7025 25.2916 33.8794 25.762 34.0564 26.2325C34.5872 27.5851 34.7052 28.8789 34.5283 30.1728C34.1154 32.878 32.3458 35.2304 29.7505 36.2889C28.8067 36.7006 27.804 36.877 26.7422 36.877C26.4473 36.877 26.0934 36.877 25.7985 36.8182C24.5598 36.7006 23.3211 36.289 22.0824 35.5832C20.6078 34.7599 19.1332 33.5249 17.4816 31.7606C15.83 33.5249 14.4144 34.7599 12.8807 35.5832C11.6421 36.289 10.4034 36.6418 9.16468 36.8182C9.01726 36.8182 8.8551 36.8329 8.69294 36.8476L8.6928 36.8476C8.53059 36.8623 8.36838 36.877 8.22092 36.877C7.15919 36.877 6.15644 36.7006 5.21268 36.2889C2.67632 35.2304 0.788799 32.9368 0.375904 30.1728C0.198948 28.8201 0.375904 27.5263 0.847784 26.2325C1.02474 25.7032 1.20169 25.2916 1.37865 24.8799C1.67358 24.233 1.9685 23.5861 2.20444 22.998L2.26343 22.9392C4.85877 17.4111 7.57208 11.8242 10.4034 6.29609L10.5213 6.06086C10.8163 5.53159 11.1112 4.94351 11.4061 4.35544L11.4061 4.35538C11.4855 4.23092 11.565 4.10429 11.6453 3.97632L11.6453 3.97632L11.6453 3.97631C11.9823 3.4391 12.334 2.8783 12.7628 2.35586C14.0015 0.944427 15.653 0.121094 17.4816 0.121094C19.2511 0.121094 20.9617 0.944427 22.1414 2.41466C22.7312 3.06157 23.1441 3.76728 23.4981 4.41419L23.4981 4.41429C23.793 5.00235 24.0879 5.59041 24.3828 6.11966L24.5008 6.3549C27.3911 11.883 30.1044 17.4699 32.6407 22.998H32.6997C32.9357 23.5861 33.2306 24.233 33.5255 24.8799ZM62.5458 9.35455C62.5458 10.7072 61.484 11.7657 60.1274 11.7657C58.7707 11.7657 57.709 10.7072 57.709 9.35455C57.709 8.00193 58.7707 6.94336 60.1274 6.94336C61.543 7.00217 62.5458 8.06074 62.5458 9.35455ZM52.6962 14.1761V14.7642C52.6962 14.7642 51.5755 13.2939 49.0981 13.2939C45.0871 13.2939 41.9609 16.352 41.9609 20.5863C41.9609 24.7618 45.0871 27.8787 49.0981 27.8787C51.5755 27.8787 52.6962 26.3497 52.6962 26.3497V26.9966C52.6962 27.2906 52.9322 27.5258 53.2271 27.5258H56.2353V13.6468H53.2271C52.8732 13.6468 52.6962 13.882 52.6962 14.1761ZM49.6879 24.5274C51.0446 24.5274 52.1653 23.8217 52.6962 22.9983V18.0583C52.1653 17.2938 50.9856 16.5293 49.6879 16.5293C47.3285 16.5293 45.5 17.9995 45.5 20.5283C45.5 23.0572 47.3285 24.5274 49.6879 24.5274ZM58.3574 13.6475H61.8965V27.4677H58.3574V13.6475ZM107.67 14.7647C107.67 14.7647 108.849 13.2944 111.268 13.2944C115.279 13.2944 118.405 16.3525 118.405 20.528C118.405 24.7035 115.279 27.8204 111.268 27.8204C108.79 27.8204 107.67 26.2913 107.67 26.2913V26.9382C107.67 27.2323 107.434 27.4675 107.139 27.4675H104.131V7.00181H107.67V14.7647ZM110.678 24.4678C109.322 24.4678 108.26 23.7621 107.67 22.9388V17.9988C108.201 17.2343 109.38 16.4697 110.678 16.4697C113.038 16.4697 114.866 17.94 114.866 20.4688C114.866 22.9976 113.038 24.4678 110.678 24.4678ZM102.303 27.5258V19.2925C102.303 16.9401 101.831 15.6463 100.651 14.6466C99.5896 13.7644 98.2919 13.2939 96.7583 13.2939C95.4016 13.2939 94.045 13.7056 92.9832 14.7642V14.1761C92.9832 13.882 92.7473 13.6468 92.4524 13.6468H89.6211V27.5258H93.1602V17.8811C93.868 17.0578 94.9887 16.5285 96.0505 16.5285C97.997 16.5285 98.7638 17.4106 98.7638 19.7042V27.5258H102.303ZM81.0085 13.2944C78.5901 13.2944 77.4104 14.7647 77.4104 14.7647V7.00181H73.8713V27.4675H76.8795C77.1745 27.4675 77.4104 27.2323 77.4104 26.9382V26.2913C77.4104 26.2913 78.5311 27.8204 81.0085 27.8204C85.0195 27.8204 88.1457 24.7035 88.1457 20.528C88.2047 16.3525 85.0785 13.2944 81.0085 13.2944ZM77.4102 22.9388C78 23.7621 79.0617 24.4678 80.4184 24.4678C82.7778 24.4678 84.6063 22.9976 84.6063 20.4688C84.6063 17.94 82.7778 16.4697 80.4184 16.4697C79.1207 16.4697 77.941 17.2343 77.4102 17.9988V22.9388ZM70.8626 13.2939C71.9243 13.2939 72.5142 13.4704 72.5142 13.4704V16.7637C72.5142 16.7637 69.5649 15.7639 67.7364 17.8811V27.5258H64.1973V13.6468H67.2055C67.5004 13.6468 67.7364 13.882 67.7364 14.1761V14.7642C68.3262 13.9997 69.7419 13.2939 70.8626 13.2939ZM17.4226 28.1144C15.4171 25.5856 14.1194 23.2332 13.7065 21.2925C13.5296 20.4692 13.4706 19.7047 13.5886 19.0578C13.6475 18.4697 13.8835 17.9404 14.1784 17.5287C14.8862 16.5289 16.0659 15.882 17.4226 15.882C18.7792 15.882 20.0179 16.4701 20.6668 17.5287C20.9617 17.9992 21.1976 18.4697 21.2566 19.0578C21.3746 19.7047 21.3156 20.4692 21.1386 21.2925C20.7258 23.2332 19.4281 25.5856 17.4226 28.1144ZM28.8067 34.1718C30.6352 33.4661 31.9329 31.8194 32.1689 29.8787C32.2868 28.879 32.1689 27.9968 31.9919 27.0559C31.928 26.8648 31.8469 26.6738 31.7578 26.4641C31.6823 26.2865 31.6012 26.0954 31.52 25.8797C31.3726 25.5856 31.2398 25.2769 31.1071 24.9681C30.9744 24.6594 30.8417 24.3506 30.6942 24.0566V23.9978C28.1579 18.5285 25.4446 12.9416 22.6133 7.47228L22.4953 7.23705L22.4953 7.23702C22.2004 6.64893 21.9054 6.06085 21.6105 5.53157C21.3156 4.94347 20.9617 4.35538 20.5488 3.8849C19.782 3.00276 18.7203 2.53228 17.5995 2.53228C16.4788 2.53228 15.4171 3.00276 14.6503 3.8849C14.2374 4.41419 13.8835 4.94347 13.5886 5.53157C13.2936 6.11966 12.9987 6.70776 12.7038 7.23705L12.5858 7.47228C9.69555 12.9416 6.98223 18.5285 4.44587 23.9978L4.38689 24.0566C4.09196 24.6447 3.79704 25.2916 3.5611 25.8797C3.38414 26.2913 3.20719 26.703 3.08922 27.0559C2.67632 28.1144 2.61734 28.9966 2.73531 29.9375C2.97125 31.8194 4.26892 33.4661 6.09746 34.2306C6.92325 34.5247 7.86701 34.7011 8.86975 34.5835C9.81351 34.4659 10.7573 34.1718 11.701 33.6425C12.9987 32.878 14.3554 31.7606 15.889 30.0551C13.4706 27.0559 11.937 24.2918 11.4061 21.8806C11.1112 20.7632 11.0522 19.7047 11.2292 18.7637C11.4061 17.8228 11.701 16.9994 12.2319 16.2349C13.3526 14.647 15.2991 13.6473 17.4226 13.6473C19.5461 13.6473 21.4926 14.5882 22.6133 16.2349C23.1441 16.9994 23.4391 17.8228 23.616 18.7637C23.734 19.7047 23.675 20.7632 23.4391 21.8806C22.8492 24.2918 21.3746 26.997 18.9562 29.9963C20.4898 31.7018 21.7875 32.8192 23.1441 33.5837C24.1469 34.113 25.0317 34.407 25.9754 34.5247C26.9782 34.6423 27.9219 34.5247 28.8067 34.1718Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={136} height={39} viewBox="0 0 136 39"
										fill="none">
										<path
											d="M24.7247 3.43111C24.184 1.65952 22.2916 0.70559 20.5343 1.25069C18.777 1.7958 17.8308 3.70366 18.3715 5.47524L27.0227 32.3216C27.631 33.9569 29.3882 34.9108 31.0779 34.4339C32.8352 33.8888 33.9166 32.049 33.3759 30.2775C33.3759 30.2093 24.7247 3.43111 24.7247 3.43111Z"
											fill="white" />
										<path
											d="M11.3419 7.86079C10.8012 6.08921 8.90876 5.13528 7.1515 5.68038C5.39424 6.22548 4.44802 8.13335 4.98871 9.90493L13.6399 36.7513C14.2481 38.3866 16.0054 39.3405 17.6951 38.8636C19.4523 38.3184 20.5337 36.4787 19.993 34.7071C19.993 34.639 11.3419 7.86079 11.3419 7.86079Z"
											fill="white" />
										<path
											d="M35.6731 25.7103C37.4304 25.1652 38.3766 23.2574 37.8359 21.4858C37.2952 19.7142 35.4028 18.7603 33.6455 19.3054L6.94861 27.9589C5.32652 28.5721 4.3803 30.3437 4.85341 32.0472C5.39411 33.8188 7.21896 34.909 8.97622 34.3639C9.1114 34.3639 35.6731 25.7103 35.6731 25.7103Z"
											fill="white" />
										<path
											d="M12.4907 33.2751C14.248 32.7299 16.4783 31.9804 18.8439 31.1628C18.3032 29.3912 17.5597 27.1426 16.7487 24.7578L10.3955 26.8701L12.4907 33.2751Z"
											fill="white" />
										<path
											d="M25.9399 28.8454C28.3731 28.0277 30.6034 27.3463 32.2931 26.7331C31.7524 24.9615 31.009 22.713 30.1979 20.3281L23.8447 22.4404L25.9399 28.8454Z"
											fill="white" />
										<path
											d="M31.2794 12.1518C33.0366 11.6066 33.9828 9.69879 33.4421 7.9272C32.9014 6.15561 31.009 5.20168 29.2517 5.74679L2.62244 14.4684C1.00035 15.0817 0.0541306 16.8533 0.52724 18.5567C1.06794 20.3964 2.89279 21.4866 4.65005 20.8734C4.71764 20.8734 31.2794 12.1518 31.2794 12.1518Z"
											fill="white" />
										<path
											d="M8.16453 19.7165C9.9218 19.1714 12.1522 18.4218 14.5177 17.6042C13.7067 15.1512 13.0308 12.9027 12.4225 11.1992L6.06934 13.3115L8.16453 19.7165Z"
											fill="white" />
										<path
											d="M21.5473 15.3532C23.9805 14.5355 26.2109 13.8541 27.9005 13.2409C27.0895 10.7879 26.4136 8.53939 25.8053 6.83594L19.4521 8.94821L21.5473 15.3532Z"
											fill="white" />
										<path
											d="M62.6395 10.5177C63.7885 11.0628 63.9237 11.4035 62.9774 13.1751C62.0312 15.0148 61.8285 15.0829 60.6119 14.606C59.125 13.9927 57.3001 13.5157 56.0836 13.5157C54.1235 13.5157 52.8394 14.1971 52.8394 15.2873C52.8394 18.8305 64.1264 16.9226 64.1264 24.5541C64.1264 28.3698 60.8822 30.8909 56.016 30.8909C53.4477 30.8909 50.2711 30.0051 48.1083 28.9149C47.0269 28.3698 46.9593 28.0291 47.9055 26.1894C48.7166 24.6222 48.9869 24.4178 50.1359 24.8948C52.0283 25.7124 54.3263 26.3257 55.9484 26.3257C57.7732 26.3257 58.9222 25.5762 58.9222 24.486C58.9222 21.0109 47.4324 22.6462 47.4324 15.2873C47.4324 11.4035 50.6766 8.74609 55.4753 8.74609C57.7732 8.95051 60.6795 9.63189 62.6395 10.5177Z"
											fill="white" />
										<path
											d="M71.7645 1.52218V29.8676C71.7645 30.2764 71.2914 30.7533 70.6832 30.7533H67.7093C67.0335 30.7533 66.6279 30.2764 66.6279 29.8676V1.52218C66.6279 0.0912827 67.0335 0.0231448 69.1962 0.0231448C71.6294 -0.0449932 71.7645 0.159421 71.7645 1.52218Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M92.7151 29.595V17.3983C92.7151 12.0836 89.133 8.94922 83.4557 8.94922C80.8874 8.94922 78.0488 9.76687 76.0211 11.1296C74.9397 11.811 74.9397 12.1517 76.0211 13.8551C77.1701 15.5586 77.3729 15.6267 78.4543 15.0135C79.806 14.1958 81.4957 13.6507 82.915 13.6507C85.8889 13.6507 87.6461 15.0135 87.6461 17.262V18.6929C86.2268 18.0797 84.4695 17.739 82.5771 17.739C77.5081 17.739 74.1963 20.4645 74.1963 24.5528C74.1963 28.3685 77.1701 30.9578 81.5633 30.9578C83.8612 30.9578 86.1592 30.0038 87.7137 28.2323L87.6461 29.5269C87.5785 30.2083 88.0516 30.6852 88.7275 30.6852H91.6338C92.242 30.6852 92.7151 30.2764 92.7151 29.595ZM82.1713 26.8698C80.3464 26.8698 79.1299 25.9158 79.1299 24.4849C79.1299 22.7133 80.9547 21.3506 83.6582 21.3506C84.9424 21.3506 86.4293 21.555 87.5783 22.032V23.9398C86.4293 25.7796 84.4017 26.8698 82.1713 26.8698Z"
											fill="white" />
										<path
											d="M112.79 10.5836C113.871 11.1968 113.871 11.5375 112.722 13.3772C111.641 15.0807 111.438 15.217 110.221 14.6037C109.343 14.1268 107.856 13.7179 106.707 13.7179C102.99 13.7179 100.556 16.1709 100.556 19.9185C100.556 23.8023 102.99 26.3916 106.707 26.3916C107.991 26.3916 109.613 25.9146 110.627 25.3014C111.708 24.6881 111.911 24.6881 113.06 26.3916C114.074 27.9588 114.074 28.2994 113.128 28.9808C111.505 30.1392 108.87 31.025 106.572 31.025C99.7453 31.025 95.1494 26.596 95.1494 19.9866C95.1494 13.3772 99.7453 9.01641 106.639 9.01641C108.802 8.94827 111.235 9.62965 112.79 10.5836Z"
											fill="white" />
										<path
											d="M135.162 28.0281C136.04 29.1183 135.702 29.5272 133.54 30.2767C131.377 31.0943 131.039 31.0262 130.295 30.0041L124.145 21.7594L121.374 24.4168V29.7997C121.374 30.2085 120.901 30.6855 120.293 30.6855H117.319C116.643 30.6855 116.237 30.2085 116.237 29.7997V1.52247C116.237 0.0915754 116.643 0.0234375 118.806 0.0234375C121.306 0.0234375 121.374 0.227851 121.374 1.52247V17.603L129.755 9.49461C130.701 8.60882 131.174 8.67695 132.864 9.76716C134.689 10.9255 134.824 11.2662 133.945 12.152L127.727 18.2844L135.162 28.0281Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={120} height={31} viewBox="0 0 120 31"
										fill="none">
										<path fillRule="evenodd" clipRule="evenodd"
											d="M17.8299 2.59615C17.8299 3.8195 16.7629 4.86809 15.518 4.86809C14.2731 4.86809 13.2061 3.8195 13.2061 2.59615C13.2061 1.3728 14.2731 0.324219 15.518 0.324219C16.7629 0.324219 17.8299 1.3728 17.8299 2.59615ZM15.5193 6.73242C14.1559 6.73242 13.0889 7.78101 13.0889 9.12086C13.0889 10.4607 14.1559 11.5093 15.5193 11.5093C16.8828 11.5093 17.9498 10.4607 17.9498 9.12086C17.9498 7.72275 16.8828 6.73242 15.5193 6.73242ZM13.0303 15.5287C13.0303 14.1889 14.1566 13.082 15.52 13.082C16.8835 13.082 18.0691 14.1889 18.0098 15.5287C18.0098 16.8686 16.8835 17.9754 15.52 17.9754C14.1566 17.9754 13.0303 16.8686 13.0303 15.5287ZM15.5193 19.5479C14.1559 19.5479 13.0889 20.5964 13.0889 21.9363C13.0889 23.2762 14.1559 24.3247 15.5193 24.3247C16.8828 24.3247 17.9498 23.2762 17.9498 21.9363C17.9498 20.6547 16.8828 19.5479 15.5193 19.5479ZM13.2061 28.4028C13.2061 27.1794 14.2731 26.1309 15.518 26.1309C16.8221 26.1309 17.8299 27.1794 17.8299 28.4028C17.8299 29.6261 16.7629 30.6747 15.518 30.6747C14.2731 30.6747 13.2061 29.6261 13.2061 28.4028ZM21.9212 6.44141C20.4392 6.44141 19.1943 7.66476 19.1943 9.12112C19.1943 10.5775 20.4392 11.8008 21.9212 11.8008C23.4032 11.8008 24.6481 10.5775 24.6481 9.12112C24.6481 7.66476 23.4032 6.44141 21.9212 6.44141ZM19.0732 15.5872C19.0732 14.0144 20.3774 12.791 21.9187 12.791C23.46 12.791 24.7641 14.0144 24.7641 15.5872C24.7641 17.1601 23.46 18.3835 21.9187 18.3835C20.3181 18.3835 19.0732 17.1019 19.0732 15.5872ZM21.9212 19.2568C20.4392 19.2568 19.1943 20.4802 19.1943 21.9366C19.1943 23.3929 20.4392 24.6163 21.9212 24.6163C23.4032 24.6163 24.6481 23.3929 24.6481 21.9366C24.6481 20.4802 23.4032 19.2568 21.9212 19.2568ZM25.3584 15.5289C25.3584 13.7813 26.8404 12.4414 28.5002 12.4414C30.1601 12.4414 31.5235 13.7813 31.6421 15.5289C31.6421 17.2765 30.2786 18.6164 28.5002 18.6164C26.7218 18.6164 25.3584 17.16 25.3584 15.5289ZM9.0582 7.02344C7.93188 7.02344 6.9834 7.95551 6.9834 9.06235C6.9834 10.1692 7.93188 11.1013 9.0582 11.1013C10.1845 11.1013 11.133 10.1692 11.133 9.06235C11.133 7.95551 10.2438 7.02344 9.0582 7.02344ZM6.8623 15.5285C6.8623 14.3051 7.81078 13.373 9.05566 13.373C10.3005 13.373 11.249 14.3051 11.249 15.5285C11.249 16.7518 10.3005 17.6839 9.05566 17.6839C7.81078 17.6839 6.8623 16.7518 6.8623 15.5285ZM9.0582 19.8398C7.93188 19.8398 6.9834 20.7719 6.9834 21.8788C6.9834 22.9856 7.93188 23.9177 9.0582 23.9177C10.1845 23.9177 11.133 22.9856 11.133 21.8788C11.133 20.7719 10.2438 19.8398 9.0582 19.8398ZM0.698242 15.587C0.698242 14.5384 1.52816 13.7228 2.5952 13.7228C3.66224 13.7228 4.49216 14.5384 4.49216 15.587C4.49216 16.6355 3.66224 17.4511 2.5952 17.4511C1.52816 17.4511 0.698242 16.6355 0.698242 15.587Z"
											fill="white" />
										<path
											d="M55.2343 11.5703C54.9972 11.5703 54.8193 11.8033 54.8193 11.9781V28.1147C54.8193 28.3477 55.0565 28.5224 55.2343 28.5224H57.1905C57.4277 28.5224 57.6055 28.2894 57.6055 28.1147V11.9781C57.6055 11.7451 57.3684 11.5703 57.1905 11.5703H55.2343Z"
											fill="white" />
										<path
											d="M56.3022 4.75391C55.2352 4.75391 54.4053 5.56947 54.4053 6.61806C54.4053 7.66664 55.2352 8.48221 56.3022 8.48221C57.3693 8.48221 58.1992 7.66664 58.1992 6.61806C58.1992 5.56947 57.31 4.75391 56.3022 4.75391Z"
											fill="white" />
										<path
											d="M97.3241 11.5703C97.087 11.5703 96.9092 11.8033 96.9092 11.9781V28.1147C96.9092 28.3477 97.1463 28.5224 97.3241 28.5224H99.2804C99.5175 28.5224 99.6953 28.2894 99.6953 28.1147V11.9781C99.6953 11.7451 99.4582 11.5703 99.2804 11.5703H97.3241Z"
											fill="white" />
										<path
											d="M98.271 4.75391C97.2039 4.75391 96.374 5.56947 96.374 6.61806C96.374 7.66664 97.2039 8.48221 98.271 8.48221C99.338 8.48221 100.168 7.66664 100.168 6.61806C100.168 5.56947 99.338 4.75391 98.271 4.75391Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M118.289 26.756C118.276 26.8126 118.246 26.881 118.174 26.9494C118.174 27.0659 118.05 27.1824 117.803 27.1242L117.898 27.2334C117.886 27.2382 117.874 27.241 117.865 27.241H117.68L117.68 27.2407H117.433V27.0663V26.542H117.865C117.988 26.542 118.112 26.542 118.174 26.6585C118.246 26.6585 118.276 26.699 118.289 26.756ZM117.433 27.2407H117.371V27.765H117.124V26.3086H117.68H117.927C118.05 26.3086 118.174 26.4251 118.174 26.4251C118.297 26.4251 118.297 26.5416 118.297 26.5416V26.6581C118.297 26.6822 118.297 26.7162 118.289 26.756C118.297 26.7958 118.297 26.8437 118.297 26.8915C118.297 27.008 118.297 27.1245 118.174 27.1245C118.101 27.1245 118.029 27.1645 117.969 27.1976C117.943 27.2122 117.919 27.2255 117.898 27.2334L118.359 27.765H118.112L117.68 27.241H117.433V27.2407Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M116.351 27.0664C116.351 26.3674 117.003 25.7266 117.714 25.7266C118.485 25.7266 119.077 26.3091 119.077 27.0664C119.077 27.7655 118.425 28.4063 117.714 28.4063C117.003 28.4063 116.351 27.7655 116.351 27.0664ZM116.468 27.0661C116.468 27.7652 117.001 28.2895 117.713 28.2895C118.365 28.2895 118.958 27.7652 118.958 27.0661C118.958 26.3671 118.424 25.8428 117.713 25.8428C117.001 25.8428 116.468 26.3671 116.468 27.0661Z"
											fill="white" />
										<path
											d="M71.5346 14.1918C71.7717 14.1918 71.9496 13.9588 71.9496 13.7841V11.8617C71.9496 11.6286 71.7124 11.4539 71.5346 11.4539H67.3257V5.27888C67.3257 5.04586 67.0886 4.87109 66.9108 4.87109H64.9545C64.7174 4.87109 64.5396 5.10411 64.5396 5.27888V11.4539H62.4648C62.2276 11.4539 62.0498 11.6869 62.0498 11.8617V13.7841C62.0498 14.0171 62.2869 14.1918 62.4648 14.1918H64.5396V23.5126C64.5396 26.3671 66.4958 28.2312 69.3412 28.2312H71.416C71.6532 28.2312 71.831 27.9982 71.831 27.8235V25.901C71.831 25.668 71.5939 25.4933 71.416 25.4933H69.6376C68.2742 25.4933 67.3257 24.5612 67.3257 23.1048V14.1336H71.5346V14.1918Z"
											fill="white" />
										<path
											d="M113.152 14.1918C113.389 14.1918 113.567 13.9588 113.567 13.7841V11.8617C113.567 11.6286 113.33 11.4539 113.152 11.4539H108.943V5.27888C108.943 5.04586 108.706 4.87109 108.528 4.87109H106.572C106.335 4.87109 106.157 5.10411 106.157 5.27888V11.4539H104.082C103.845 11.4539 103.667 11.6869 103.667 11.8617V13.7841C103.667 14.0171 103.904 14.1918 104.082 14.1918H106.157V23.5126C106.157 26.3671 108.113 28.2312 110.958 28.2312H113.033C113.27 28.2312 113.448 27.9982 113.448 27.8235V25.901C113.448 25.668 113.211 25.4933 113.033 25.4933H111.136C109.773 25.4933 108.824 24.5612 108.824 23.1048V14.1336H113.093L113.152 14.1918Z"
											fill="white" />
										<path
											d="M42.7857 14.1907V27.9388C42.7857 28.1718 43.0228 28.3466 43.2006 28.3466H45.1569C45.394 28.3466 45.5718 28.1136 45.5718 27.9388V14.1907H50.1957C50.4328 14.1907 50.6106 13.9577 50.6106 13.7829V11.8605C50.6106 11.6275 50.3735 11.4527 50.1957 11.4527H45.5718V7.84092C45.5718 6.38455 46.6389 5.39422 47.8837 5.39422H50.1957C50.4328 5.39422 50.6106 5.1612 50.6106 4.98644V3.06403C50.6106 2.83101 50.3735 2.65625 50.1957 2.65625H48.0023C45.0976 2.65625 42.7857 5.04469 42.7857 7.78266V11.4527H40.7109C40.4737 11.4527 40.2959 11.6857 40.2959 11.8605V13.7829C40.2959 14.0159 40.533 14.1907 40.7109 14.1907H42.7857Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M84.6369 10.9277C86.9488 10.9277 89.1422 11.8598 90.6835 13.4909C92.2247 15.1221 93.0547 17.394 93.0547 19.899C93.0547 26.1322 88.7272 28.9284 84.5776 28.9284C80.3687 28.9284 76.1006 26.1905 76.1006 19.899V2.94685C76.1006 2.77208 76.2784 2.53906 76.5155 2.53906H78.4718C78.6496 2.53906 78.8867 2.71383 78.8867 2.94685V13.1997C80.2502 11.8598 82.4435 10.9277 84.6369 10.9277ZM78.8271 19.9575C78.8271 23.045 80.3684 26.3073 84.5773 26.3073C88.7862 26.3073 90.2682 23.045 90.3275 19.9575C90.3275 16.2292 88.0155 13.666 84.5773 13.666C81.1391 13.666 78.8271 16.171 78.8271 19.9575Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={119} height={37} viewBox="0 0 119 37"
										fill="none">
										<path fillRule="evenodd" clipRule="evenodd"
											d="M33.2946 24.8799C33.4715 25.2916 33.6485 25.762 33.8254 26.2325C34.3563 27.5851 34.4743 28.8789 34.2973 30.1728C33.8844 32.878 32.1149 35.2304 29.5195 36.2889C28.5758 36.7006 27.573 36.877 26.5113 36.877C26.2163 36.877 25.8624 36.877 25.5675 36.8182C24.3288 36.7006 23.0901 36.289 21.8515 35.5832C20.3768 34.7599 18.9022 33.5249 17.2506 31.7606C15.599 33.5249 14.1834 34.7599 12.6498 35.5832C11.4111 36.289 10.1724 36.6418 8.93372 36.8182C8.7863 36.8182 8.62414 36.8329 8.46198 36.8476L8.46184 36.8476C8.29963 36.8623 8.13742 36.877 7.98996 36.877C6.92823 36.877 5.92548 36.7006 4.98172 36.2889C2.44536 35.2304 0.557842 32.9368 0.144947 30.1728C-0.0320086 28.8201 0.144947 27.5263 0.616827 26.2325C0.793782 25.7032 0.970738 25.2916 1.14769 24.8799C1.44262 24.233 1.73754 23.5861 1.97348 22.998L2.03247 22.9392C4.62781 17.4111 7.34113 11.8242 10.1724 6.29609L10.2904 6.06086C10.5853 5.53159 10.8802 4.94351 11.1751 4.35544L11.1752 4.35538C11.2546 4.23092 11.334 4.10429 11.4143 3.97632L11.4143 3.97632L11.4143 3.97631C11.7513 3.4391 12.1031 2.8783 12.5318 2.35586C13.7705 0.944427 15.4221 0.121094 17.2506 0.121094C19.0202 0.121094 20.7307 0.944427 21.9104 2.41466C22.5003 3.06157 22.9132 3.76728 23.2671 4.41419L23.2671 4.41429C23.5621 5.00235 23.857 5.59041 24.1519 6.11966L24.2698 6.3549C27.1601 11.883 29.8734 17.4699 32.4098 22.998H32.4688C32.7047 23.5861 32.9996 24.233 33.2946 24.8799ZM62.3168 9.35455C62.3168 10.7072 61.255 11.7657 59.8984 11.7657C58.5417 11.7657 57.48 10.7072 57.48 9.35455C57.48 8.00193 58.5417 6.94336 59.8984 6.94336C61.314 7.00217 62.3168 8.06074 62.3168 9.35455ZM52.4653 14.1761V14.7642C52.4653 14.7642 51.3445 13.2939 48.8672 13.2939C44.8562 13.2939 41.73 16.352 41.73 20.5863C41.73 24.7618 44.8562 27.8787 48.8672 27.8787C51.3445 27.8787 52.4653 26.3497 52.4653 26.3497V26.9966C52.4653 27.2906 52.7012 27.5258 52.9961 27.5258H56.0044V13.6468H52.9961C52.6422 13.6468 52.4653 13.882 52.4653 14.1761ZM49.457 24.5274C50.8136 24.5274 51.9344 23.8217 52.4652 22.9983V18.0583C51.9344 17.2938 50.7547 16.5293 49.457 16.5293C47.0976 16.5293 45.269 17.9995 45.269 20.5283C45.269 23.0572 47.0976 24.5274 49.457 24.5274ZM58.1284 13.6475H61.6675V27.4677H58.1284V13.6475ZM107.437 14.7648C107.437 14.7648 108.617 13.2946 111.035 13.2946C115.046 13.2946 118.172 16.3527 118.172 20.5281C118.172 24.7036 115.046 27.8205 111.035 27.8205C108.558 27.8205 107.437 26.2915 107.437 26.2915V26.9384C107.437 27.2324 107.201 27.4677 106.906 27.4677H103.898V7.00195H107.437V14.7648ZM110.445 24.4678C109.089 24.4678 108.027 23.7621 107.437 22.9388V17.9988C107.968 17.2343 109.148 16.4697 110.445 16.4697C112.805 16.4697 114.633 17.94 114.633 20.4688C114.633 22.9976 112.805 24.4678 110.445 24.4678ZM102.072 27.5258V19.2925C102.072 16.9401 101.6 15.6463 100.42 14.6466C99.3586 13.7644 98.0609 13.2939 96.5273 13.2939C95.1707 13.2939 93.814 13.7056 92.7523 14.7642V14.1761C92.7523 13.882 92.5163 13.6468 92.2214 13.6468H89.3901V27.5258H92.9292V17.8811C93.6371 17.0578 94.7578 16.5285 95.8195 16.5285C97.766 16.5285 98.5328 17.4106 98.5328 19.7042V27.5258H102.072ZM80.7775 13.2944C78.3591 13.2944 77.1794 14.7647 77.1794 14.7647V7.00181H73.6403V27.4675H76.6486C76.9435 27.4675 77.1794 27.2323 77.1794 26.9382V26.2913C77.1794 26.2913 78.3002 27.8204 80.7775 27.8204C84.7885 27.8204 87.9147 24.7035 87.9147 20.528C87.9737 16.3525 84.8475 13.2944 80.7775 13.2944ZM77.1792 22.9388C77.7691 23.7621 78.8308 24.4678 80.1874 24.4678C82.5468 24.4678 84.3754 22.9976 84.3754 20.4688C84.3754 17.94 82.5468 16.4697 80.1874 16.4697C78.8898 16.4697 77.7101 17.2343 77.1792 17.9988V22.9388ZM70.6336 13.2939C71.6953 13.2939 72.2852 13.4704 72.2852 13.4704V16.7637C72.2852 16.7637 69.3359 15.7639 67.5074 17.8811V27.5258H63.9683V13.6468H66.9765C67.2714 13.6468 67.5074 13.882 67.5074 14.1761V14.7642C68.0972 13.9997 69.5129 13.2939 70.6336 13.2939ZM17.1916 28.1144C15.1861 25.5856 13.8885 23.2332 13.4756 21.2925C13.2986 20.4692 13.2396 19.7047 13.3576 19.0578C13.4166 18.4697 13.6525 17.9404 13.9475 17.5287C14.6553 16.5289 15.835 15.882 17.1916 15.882C18.5483 15.882 19.787 16.4701 20.4358 17.5287C20.7307 17.9992 20.9667 18.4697 21.0257 19.0578C21.1436 19.7047 21.0846 20.4692 20.9077 21.2925C20.4948 23.2332 19.1971 25.5856 17.1916 28.1144ZM28.5738 34.1717C30.4023 33.466 31.7 31.8194 31.936 29.8787C32.0539 28.8789 31.936 27.9967 31.759 27.0558C31.6951 26.8648 31.614 26.6737 31.5249 26.464C31.4494 26.2864 31.3683 26.0954 31.2871 25.8796C31.1397 25.5856 31.0069 25.2768 30.8742 24.9681C30.7415 24.6593 30.6088 24.3506 30.4613 24.0565V23.9977C27.925 18.5284 25.2117 12.9415 22.3804 7.47223L22.2624 7.23699C21.9675 6.64889 21.6726 6.0608 21.3776 5.53151C21.0827 4.94342 20.7288 4.35532 20.3159 3.88485C19.5491 3.0027 18.4874 2.53223 17.3666 2.53223C16.2459 2.53223 15.1842 3.0027 14.4174 3.88485C14.0045 4.41413 13.6506 4.94342 13.3557 5.53151L13.3556 5.5316C13.0607 6.11966 12.7658 6.70773 12.4709 7.23699L12.3529 7.47223C9.46264 12.9415 6.74933 18.5284 4.21297 23.9977L4.15399 24.0565C3.85906 24.6446 3.56413 25.2915 3.32819 25.8796C3.15124 26.2913 2.97428 26.7029 2.85631 27.0558C2.44342 28.1144 2.38443 28.9965 2.5024 29.9375C2.73834 31.8194 4.03602 33.466 5.86455 34.2306C6.69034 34.5246 7.6341 34.701 8.63685 34.5834C9.58061 34.4658 10.5244 34.1717 11.4681 33.6425C12.7658 32.8779 14.1225 31.7606 15.6561 30.0551C13.2377 27.0558 11.7041 24.2917 11.1732 21.8806C10.8783 20.7632 10.8193 19.7046 10.9963 18.7637C11.1732 17.8227 11.4681 16.9994 11.999 16.2348C13.1197 14.647 15.0662 13.6472 17.1897 13.6472C19.3131 13.6472 21.2597 14.5882 22.3804 16.2348C22.9112 16.9994 23.2062 17.8227 23.3831 18.7637C23.5011 19.7046 23.4421 20.7632 23.2062 21.8806C22.6163 24.2917 21.1417 26.997 18.7233 29.9963C20.2569 31.7017 21.5546 32.8191 22.9112 33.5837C23.914 34.1129 24.7988 34.407 25.7425 34.5246C26.7453 34.6422 27.689 34.5246 28.5738 34.1717Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={136} height={39} viewBox="0 0 136 39"
										fill="none">
										<path
											d="M24.7247 3.43111C24.184 1.65952 22.2916 0.70559 20.5343 1.25069C18.777 1.7958 17.8308 3.70366 18.3715 5.47524L27.0227 32.3216C27.631 33.9569 29.3882 34.9108 31.0779 34.4339C32.8352 33.8888 33.9166 32.049 33.3759 30.2775C33.3759 30.2093 24.7247 3.43111 24.7247 3.43111Z"
											fill="white" />
										<path
											d="M11.3419 7.86079C10.8012 6.08921 8.90876 5.13528 7.1515 5.68038C5.39424 6.22548 4.44802 8.13335 4.98871 9.90493L13.6399 36.7513C14.2481 38.3866 16.0054 39.3405 17.6951 38.8636C19.4523 38.3184 20.5337 36.4787 19.993 34.7071C19.993 34.639 11.3419 7.86079 11.3419 7.86079Z"
											fill="white" />
										<path
											d="M35.6731 25.7103C37.4304 25.1652 38.3766 23.2574 37.8359 21.4858C37.2952 19.7142 35.4028 18.7603 33.6455 19.3054L6.94861 27.9589C5.32652 28.5721 4.3803 30.3437 4.85341 32.0472C5.39411 33.8188 7.21896 34.909 8.97622 34.3639C9.1114 34.3639 35.6731 25.7103 35.6731 25.7103Z"
											fill="white" />
										<path
											d="M12.4907 33.2751C14.248 32.7299 16.4783 31.9804 18.8439 31.1628C18.3032 29.3912 17.5597 27.1426 16.7487 24.7578L10.3955 26.8701L12.4907 33.2751Z"
											fill="white" />
										<path
											d="M25.9399 28.8454C28.3731 28.0277 30.6034 27.3463 32.2931 26.7331C31.7524 24.9615 31.009 22.713 30.1979 20.3281L23.8447 22.4404L25.9399 28.8454Z"
											fill="white" />
										<path
											d="M31.2794 12.1518C33.0366 11.6066 33.9828 9.69879 33.4421 7.9272C32.9014 6.15561 31.009 5.20168 29.2517 5.74679L2.62244 14.4684C1.00035 15.0817 0.0541306 16.8533 0.52724 18.5567C1.06794 20.3964 2.89279 21.4866 4.65005 20.8734C4.71764 20.8734 31.2794 12.1518 31.2794 12.1518Z"
											fill="white" />
										<path
											d="M8.16453 19.7165C9.9218 19.1714 12.1522 18.4218 14.5177 17.6042C13.7067 15.1512 13.0308 12.9027 12.4225 11.1992L6.06934 13.3115L8.16453 19.7165Z"
											fill="white" />
										<path
											d="M21.5473 15.3532C23.9805 14.5355 26.2109 13.8541 27.9005 13.2409C27.0895 10.7879 26.4136 8.53939 25.8053 6.83594L19.4521 8.94821L21.5473 15.3532Z"
											fill="white" />
										<path
											d="M62.6395 10.5177C63.7885 11.0628 63.9237 11.4035 62.9774 13.1751C62.0312 15.0148 61.8285 15.0829 60.6119 14.606C59.125 13.9927 57.3001 13.5157 56.0836 13.5157C54.1235 13.5157 52.8394 14.1971 52.8394 15.2873C52.8394 18.8305 64.1264 16.9226 64.1264 24.5541C64.1264 28.3698 60.8822 30.8909 56.016 30.8909C53.4477 30.8909 50.2711 30.0051 48.1083 28.9149C47.0269 28.3698 46.9593 28.0291 47.9055 26.1894C48.7166 24.6222 48.9869 24.4178 50.1359 24.8948C52.0283 25.7124 54.3263 26.3257 55.9484 26.3257C57.7732 26.3257 58.9222 25.5762 58.9222 24.486C58.9222 21.0109 47.4324 22.6462 47.4324 15.2873C47.4324 11.4035 50.6766 8.74609 55.4753 8.74609C57.7732 8.95051 60.6795 9.63189 62.6395 10.5177Z"
											fill="white" />
										<path
											d="M71.7645 1.52218V29.8676C71.7645 30.2764 71.2914 30.7533 70.6832 30.7533H67.7093C67.0335 30.7533 66.6279 30.2764 66.6279 29.8676V1.52218C66.6279 0.0912827 67.0335 0.0231448 69.1962 0.0231448C71.6294 -0.0449932 71.7645 0.159421 71.7645 1.52218Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M92.7151 29.595V17.3983C92.7151 12.0836 89.133 8.94922 83.4557 8.94922C80.8874 8.94922 78.0488 9.76687 76.0211 11.1296C74.9397 11.811 74.9397 12.1517 76.0211 13.8551C77.1701 15.5586 77.3729 15.6267 78.4543 15.0135C79.806 14.1958 81.4957 13.6507 82.915 13.6507C85.8889 13.6507 87.6461 15.0135 87.6461 17.262V18.6929C86.2268 18.0797 84.4695 17.739 82.5771 17.739C77.5081 17.739 74.1963 20.4645 74.1963 24.5528C74.1963 28.3685 77.1701 30.9578 81.5633 30.9578C83.8612 30.9578 86.1592 30.0038 87.7137 28.2323L87.6461 29.5269C87.5785 30.2083 88.0516 30.6852 88.7275 30.6852H91.6338C92.242 30.6852 92.7151 30.2764 92.7151 29.595ZM82.1713 26.8698C80.3464 26.8698 79.1299 25.9158 79.1299 24.4849C79.1299 22.7133 80.9547 21.3506 83.6582 21.3506C84.9424 21.3506 86.4293 21.555 87.5783 22.032V23.9398C86.4293 25.7796 84.4017 26.8698 82.1713 26.8698Z"
											fill="white" />
										<path
											d="M112.79 10.5836C113.871 11.1968 113.871 11.5375 112.722 13.3772C111.641 15.0807 111.438 15.217 110.221 14.6037C109.343 14.1268 107.856 13.7179 106.707 13.7179C102.99 13.7179 100.556 16.1709 100.556 19.9185C100.556 23.8023 102.99 26.3916 106.707 26.3916C107.991 26.3916 109.613 25.9146 110.627 25.3014C111.708 24.6881 111.911 24.6881 113.06 26.3916C114.074 27.9588 114.074 28.2994 113.128 28.9808C111.505 30.1392 108.87 31.025 106.572 31.025C99.7453 31.025 95.1494 26.596 95.1494 19.9866C95.1494 13.3772 99.7453 9.01641 106.639 9.01641C108.802 8.94827 111.235 9.62965 112.79 10.5836Z"
											fill="white" />
										<path
											d="M135.162 28.0281C136.04 29.1183 135.702 29.5272 133.54 30.2767C131.377 31.0943 131.039 31.0262 130.295 30.0041L124.145 21.7594L121.374 24.4168V29.7997C121.374 30.2085 120.901 30.6855 120.293 30.6855H117.319C116.643 30.6855 116.237 30.2085 116.237 29.7997V1.52247C116.237 0.0915754 116.643 0.0234375 118.806 0.0234375C121.306 0.0234375 121.374 0.227851 121.374 1.52247V17.603L129.755 9.49461C130.701 8.60882 131.174 8.67695 132.864 9.76716C134.689 10.9255 134.824 11.2662 133.945 12.152L127.727 18.2844L135.162 28.0281Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={119} height={37} viewBox="0 0 119 37"
										fill="none">
										<path fillRule="evenodd" clipRule="evenodd"
											d="M33.5255 24.8799C33.7025 25.2916 33.8794 25.762 34.0564 26.2325C34.5872 27.5851 34.7052 28.8789 34.5283 30.1728C34.1154 32.878 32.3458 35.2304 29.7505 36.2889C28.8067 36.7006 27.804 36.877 26.7422 36.877C26.4473 36.877 26.0934 36.877 25.7985 36.8182C24.5598 36.7006 23.3211 36.289 22.0824 35.5832C20.6078 34.7599 19.1332 33.5249 17.4816 31.7606C15.83 33.5249 14.4144 34.7599 12.8807 35.5832C11.6421 36.289 10.4034 36.6418 9.16468 36.8182C9.01726 36.8182 8.8551 36.8329 8.69294 36.8476L8.6928 36.8476C8.53059 36.8623 8.36838 36.877 8.22092 36.877C7.15919 36.877 6.15644 36.7006 5.21268 36.2889C2.67632 35.2304 0.788799 32.9368 0.375904 30.1728C0.198948 28.8201 0.375904 27.5263 0.847784 26.2325C1.02474 25.7032 1.20169 25.2916 1.37865 24.8799C1.67358 24.233 1.9685 23.5861 2.20444 22.998L2.26343 22.9392C4.85877 17.4111 7.57208 11.8242 10.4034 6.29609L10.5213 6.06086C10.8163 5.53159 11.1112 4.94351 11.4061 4.35544L11.4061 4.35538C11.4855 4.23092 11.565 4.10429 11.6453 3.97632L11.6453 3.97632L11.6453 3.97631C11.9823 3.4391 12.334 2.8783 12.7628 2.35586C14.0015 0.944427 15.653 0.121094 17.4816 0.121094C19.2511 0.121094 20.9617 0.944427 22.1414 2.41466C22.7312 3.06157 23.1441 3.76728 23.4981 4.41419L23.4981 4.41429C23.793 5.00235 24.0879 5.59041 24.3828 6.11966L24.5008 6.3549C27.3911 11.883 30.1044 17.4699 32.6407 22.998H32.6997C32.9357 23.5861 33.2306 24.233 33.5255 24.8799ZM62.5458 9.35455C62.5458 10.7072 61.484 11.7657 60.1274 11.7657C58.7707 11.7657 57.709 10.7072 57.709 9.35455C57.709 8.00193 58.7707 6.94336 60.1274 6.94336C61.543 7.00217 62.5458 8.06074 62.5458 9.35455ZM52.6962 14.1761V14.7642C52.6962 14.7642 51.5755 13.2939 49.0981 13.2939C45.0871 13.2939 41.9609 16.352 41.9609 20.5863C41.9609 24.7618 45.0871 27.8787 49.0981 27.8787C51.5755 27.8787 52.6962 26.3497 52.6962 26.3497V26.9966C52.6962 27.2906 52.9322 27.5258 53.2271 27.5258H56.2353V13.6468H53.2271C52.8732 13.6468 52.6962 13.882 52.6962 14.1761ZM49.6879 24.5274C51.0446 24.5274 52.1653 23.8217 52.6962 22.9983V18.0583C52.1653 17.2938 50.9856 16.5293 49.6879 16.5293C47.3285 16.5293 45.5 17.9995 45.5 20.5283C45.5 23.0572 47.3285 24.5274 49.6879 24.5274ZM58.3574 13.6475H61.8965V27.4677H58.3574V13.6475ZM107.67 14.7647C107.67 14.7647 108.849 13.2944 111.268 13.2944C115.279 13.2944 118.405 16.3525 118.405 20.528C118.405 24.7035 115.279 27.8204 111.268 27.8204C108.79 27.8204 107.67 26.2913 107.67 26.2913V26.9382C107.67 27.2323 107.434 27.4675 107.139 27.4675H104.131V7.00181H107.67V14.7647ZM110.678 24.4678C109.322 24.4678 108.26 23.7621 107.67 22.9388V17.9988C108.201 17.2343 109.38 16.4697 110.678 16.4697C113.038 16.4697 114.866 17.94 114.866 20.4688C114.866 22.9976 113.038 24.4678 110.678 24.4678ZM102.303 27.5258V19.2925C102.303 16.9401 101.831 15.6463 100.651 14.6466C99.5896 13.7644 98.2919 13.2939 96.7583 13.2939C95.4016 13.2939 94.045 13.7056 92.9832 14.7642V14.1761C92.9832 13.882 92.7473 13.6468 92.4524 13.6468H89.6211V27.5258H93.1602V17.8811C93.868 17.0578 94.9887 16.5285 96.0505 16.5285C97.997 16.5285 98.7638 17.4106 98.7638 19.7042V27.5258H102.303ZM81.0085 13.2944C78.5901 13.2944 77.4104 14.7647 77.4104 14.7647V7.00181H73.8713V27.4675H76.8795C77.1745 27.4675 77.4104 27.2323 77.4104 26.9382V26.2913C77.4104 26.2913 78.5311 27.8204 81.0085 27.8204C85.0195 27.8204 88.1457 24.7035 88.1457 20.528C88.2047 16.3525 85.0785 13.2944 81.0085 13.2944ZM77.4102 22.9388C78 23.7621 79.0617 24.4678 80.4184 24.4678C82.7778 24.4678 84.6063 22.9976 84.6063 20.4688C84.6063 17.94 82.7778 16.4697 80.4184 16.4697C79.1207 16.4697 77.941 17.2343 77.4102 17.9988V22.9388ZM70.8626 13.2939C71.9243 13.2939 72.5142 13.4704 72.5142 13.4704V16.7637C72.5142 16.7637 69.5649 15.7639 67.7364 17.8811V27.5258H64.1973V13.6468H67.2055C67.5004 13.6468 67.7364 13.882 67.7364 14.1761V14.7642C68.3262 13.9997 69.7419 13.2939 70.8626 13.2939ZM17.4226 28.1144C15.4171 25.5856 14.1194 23.2332 13.7065 21.2925C13.5296 20.4692 13.4706 19.7047 13.5886 19.0578C13.6475 18.4697 13.8835 17.9404 14.1784 17.5287C14.8862 16.5289 16.0659 15.882 17.4226 15.882C18.7792 15.882 20.0179 16.4701 20.6668 17.5287C20.9617 17.9992 21.1976 18.4697 21.2566 19.0578C21.3746 19.7047 21.3156 20.4692 21.1386 21.2925C20.7258 23.2332 19.4281 25.5856 17.4226 28.1144ZM28.8067 34.1718C30.6352 33.4661 31.9329 31.8194 32.1689 29.8787C32.2868 28.879 32.1689 27.9968 31.9919 27.0559C31.928 26.8648 31.8469 26.6738 31.7578 26.4641C31.6823 26.2865 31.6012 26.0954 31.52 25.8797C31.3726 25.5856 31.2398 25.2769 31.1071 24.9681C30.9744 24.6594 30.8417 24.3506 30.6942 24.0566V23.9978C28.1579 18.5285 25.4446 12.9416 22.6133 7.47228L22.4953 7.23705L22.4953 7.23702C22.2004 6.64893 21.9054 6.06085 21.6105 5.53157C21.3156 4.94347 20.9617 4.35538 20.5488 3.8849C19.782 3.00276 18.7203 2.53228 17.5995 2.53228C16.4788 2.53228 15.4171 3.00276 14.6503 3.8849C14.2374 4.41419 13.8835 4.94347 13.5886 5.53157C13.2936 6.11966 12.9987 6.70776 12.7038 7.23705L12.5858 7.47228C9.69555 12.9416 6.98223 18.5285 4.44587 23.9978L4.38689 24.0566C4.09196 24.6447 3.79704 25.2916 3.5611 25.8797C3.38414 26.2913 3.20719 26.703 3.08922 27.0559C2.67632 28.1144 2.61734 28.9966 2.73531 29.9375C2.97125 31.8194 4.26892 33.4661 6.09746 34.2306C6.92325 34.5247 7.86701 34.7011 8.86975 34.5835C9.81351 34.4659 10.7573 34.1718 11.701 33.6425C12.9987 32.878 14.3554 31.7606 15.889 30.0551C13.4706 27.0559 11.937 24.2918 11.4061 21.8806C11.1112 20.7632 11.0522 19.7047 11.2292 18.7637C11.4061 17.8228 11.701 16.9994 12.2319 16.2349C13.3526 14.647 15.2991 13.6473 17.4226 13.6473C19.5461 13.6473 21.4926 14.5882 22.6133 16.2349C23.1441 16.9994 23.4391 17.8228 23.616 18.7637C23.734 19.7047 23.675 20.7632 23.4391 21.8806C22.8492 24.2918 21.3746 26.997 18.9562 29.9963C20.4898 31.7018 21.7875 32.8192 23.1441 33.5837C24.1469 34.113 25.0317 34.407 25.9754 34.5247C26.9782 34.6423 27.9219 34.5247 28.8067 34.1718Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={136} height={39} viewBox="0 0 136 39"
										fill="none">
										<path
											d="M24.7247 3.43111C24.184 1.65952 22.2916 0.70559 20.5343 1.25069C18.777 1.7958 17.8308 3.70366 18.3715 5.47524L27.0227 32.3216C27.631 33.9569 29.3882 34.9108 31.0779 34.4339C32.8352 33.8888 33.9166 32.049 33.3759 30.2775C33.3759 30.2093 24.7247 3.43111 24.7247 3.43111Z"
											fill="white" />
										<path
											d="M11.3419 7.86079C10.8012 6.08921 8.90876 5.13528 7.1515 5.68038C5.39424 6.22548 4.44802 8.13335 4.98871 9.90493L13.6399 36.7513C14.2481 38.3866 16.0054 39.3405 17.6951 38.8636C19.4523 38.3184 20.5337 36.4787 19.993 34.7071C19.993 34.639 11.3419 7.86079 11.3419 7.86079Z"
											fill="white" />
										<path
											d="M35.6731 25.7103C37.4304 25.1652 38.3766 23.2574 37.8359 21.4858C37.2952 19.7142 35.4028 18.7603 33.6455 19.3054L6.94861 27.9589C5.32652 28.5721 4.3803 30.3437 4.85341 32.0472C5.39411 33.8188 7.21896 34.909 8.97622 34.3639C9.1114 34.3639 35.6731 25.7103 35.6731 25.7103Z"
											fill="white" />
										<path
											d="M12.4907 33.2751C14.248 32.7299 16.4783 31.9804 18.8439 31.1628C18.3032 29.3912 17.5597 27.1426 16.7487 24.7578L10.3955 26.8701L12.4907 33.2751Z"
											fill="white" />
										<path
											d="M25.9399 28.8454C28.3731 28.0277 30.6034 27.3463 32.2931 26.7331C31.7524 24.9615 31.009 22.713 30.1979 20.3281L23.8447 22.4404L25.9399 28.8454Z"
											fill="white" />
										<path
											d="M31.2794 12.1518C33.0366 11.6066 33.9828 9.69879 33.4421 7.9272C32.9014 6.15561 31.009 5.20168 29.2517 5.74679L2.62244 14.4684C1.00035 15.0817 0.0541306 16.8533 0.52724 18.5567C1.06794 20.3964 2.89279 21.4866 4.65005 20.8734C4.71764 20.8734 31.2794 12.1518 31.2794 12.1518Z"
											fill="white" />
										<path
											d="M8.16453 19.7165C9.9218 19.1714 12.1522 18.4218 14.5177 17.6042C13.7067 15.1512 13.0308 12.9027 12.4225 11.1992L6.06934 13.3115L8.16453 19.7165Z"
											fill="white" />
										<path
											d="M21.5473 15.3532C23.9805 14.5355 26.2109 13.8541 27.9005 13.2409C27.0895 10.7879 26.4136 8.53939 25.8053 6.83594L19.4521 8.94821L21.5473 15.3532Z"
											fill="white" />
										<path
											d="M62.6395 10.5177C63.7885 11.0628 63.9237 11.4035 62.9774 13.1751C62.0312 15.0148 61.8285 15.0829 60.6119 14.606C59.125 13.9927 57.3001 13.5157 56.0836 13.5157C54.1235 13.5157 52.8394 14.1971 52.8394 15.2873C52.8394 18.8305 64.1264 16.9226 64.1264 24.5541C64.1264 28.3698 60.8822 30.8909 56.016 30.8909C53.4477 30.8909 50.2711 30.0051 48.1083 28.9149C47.0269 28.3698 46.9593 28.0291 47.9055 26.1894C48.7166 24.6222 48.9869 24.4178 50.1359 24.8948C52.0283 25.7124 54.3263 26.3257 55.9484 26.3257C57.7732 26.3257 58.9222 25.5762 58.9222 24.486C58.9222 21.0109 47.4324 22.6462 47.4324 15.2873C47.4324 11.4035 50.6766 8.74609 55.4753 8.74609C57.7732 8.95051 60.6795 9.63189 62.6395 10.5177Z"
											fill="white" />
										<path
											d="M71.7645 1.52218V29.8676C71.7645 30.2764 71.2914 30.7533 70.6832 30.7533H67.7093C67.0335 30.7533 66.6279 30.2764 66.6279 29.8676V1.52218C66.6279 0.0912827 67.0335 0.0231448 69.1962 0.0231448C71.6294 -0.0449932 71.7645 0.159421 71.7645 1.52218Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M92.7151 29.595V17.3983C92.7151 12.0836 89.133 8.94922 83.4557 8.94922C80.8874 8.94922 78.0488 9.76687 76.0211 11.1296C74.9397 11.811 74.9397 12.1517 76.0211 13.8551C77.1701 15.5586 77.3729 15.6267 78.4543 15.0135C79.806 14.1958 81.4957 13.6507 82.915 13.6507C85.8889 13.6507 87.6461 15.0135 87.6461 17.262V18.6929C86.2268 18.0797 84.4695 17.739 82.5771 17.739C77.5081 17.739 74.1963 20.4645 74.1963 24.5528C74.1963 28.3685 77.1701 30.9578 81.5633 30.9578C83.8612 30.9578 86.1592 30.0038 87.7137 28.2323L87.6461 29.5269C87.5785 30.2083 88.0516 30.6852 88.7275 30.6852H91.6338C92.242 30.6852 92.7151 30.2764 92.7151 29.595ZM82.1713 26.8698C80.3464 26.8698 79.1299 25.9158 79.1299 24.4849C79.1299 22.7133 80.9547 21.3506 83.6582 21.3506C84.9424 21.3506 86.4293 21.555 87.5783 22.032V23.9398C86.4293 25.7796 84.4017 26.8698 82.1713 26.8698Z"
											fill="white" />
										<path
											d="M112.79 10.5836C113.871 11.1968 113.871 11.5375 112.722 13.3772C111.641 15.0807 111.438 15.217 110.221 14.6037C109.343 14.1268 107.856 13.7179 106.707 13.7179C102.99 13.7179 100.556 16.1709 100.556 19.9185C100.556 23.8023 102.99 26.3916 106.707 26.3916C107.991 26.3916 109.613 25.9146 110.627 25.3014C111.708 24.6881 111.911 24.6881 113.06 26.3916C114.074 27.9588 114.074 28.2994 113.128 28.9808C111.505 30.1392 108.87 31.025 106.572 31.025C99.7453 31.025 95.1494 26.596 95.1494 19.9866C95.1494 13.3772 99.7453 9.01641 106.639 9.01641C108.802 8.94827 111.235 9.62965 112.79 10.5836Z"
											fill="white" />
										<path
											d="M135.162 28.0281C136.04 29.1183 135.702 29.5272 133.54 30.2767C131.377 31.0943 131.039 31.0262 130.295 30.0041L124.145 21.7594L121.374 24.4168V29.7997C121.374 30.2085 120.901 30.6855 120.293 30.6855H117.319C116.643 30.6855 116.237 30.2085 116.237 29.7997V1.52247C116.237 0.0915754 116.643 0.0234375 118.806 0.0234375C121.306 0.0234375 121.374 0.227851 121.374 1.52247V17.603L129.755 9.49461C130.701 8.60882 131.174 8.67695 132.864 9.76716C134.689 10.9255 134.824 11.2662 133.945 12.152L127.727 18.2844L135.162 28.0281Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={120} height={31} viewBox="0 0 120 31"
										fill="none">
										<path fillRule="evenodd" clipRule="evenodd"
											d="M17.8299 2.59615C17.8299 3.8195 16.7629 4.86809 15.518 4.86809C14.2731 4.86809 13.2061 3.8195 13.2061 2.59615C13.2061 1.3728 14.2731 0.324219 15.518 0.324219C16.7629 0.324219 17.8299 1.3728 17.8299 2.59615ZM15.5193 6.73242C14.1559 6.73242 13.0889 7.78101 13.0889 9.12086C13.0889 10.4607 14.1559 11.5093 15.5193 11.5093C16.8828 11.5093 17.9498 10.4607 17.9498 9.12086C17.9498 7.72275 16.8828 6.73242 15.5193 6.73242ZM13.0303 15.5287C13.0303 14.1889 14.1566 13.082 15.52 13.082C16.8835 13.082 18.0691 14.1889 18.0098 15.5287C18.0098 16.8686 16.8835 17.9754 15.52 17.9754C14.1566 17.9754 13.0303 16.8686 13.0303 15.5287ZM15.5193 19.5479C14.1559 19.5479 13.0889 20.5964 13.0889 21.9363C13.0889 23.2762 14.1559 24.3247 15.5193 24.3247C16.8828 24.3247 17.9498 23.2762 17.9498 21.9363C17.9498 20.6547 16.8828 19.5479 15.5193 19.5479ZM13.2061 28.4028C13.2061 27.1794 14.2731 26.1309 15.518 26.1309C16.8221 26.1309 17.8299 27.1794 17.8299 28.4028C17.8299 29.6261 16.7629 30.6747 15.518 30.6747C14.2731 30.6747 13.2061 29.6261 13.2061 28.4028ZM21.9212 6.44141C20.4392 6.44141 19.1943 7.66476 19.1943 9.12112C19.1943 10.5775 20.4392 11.8008 21.9212 11.8008C23.4032 11.8008 24.6481 10.5775 24.6481 9.12112C24.6481 7.66476 23.4032 6.44141 21.9212 6.44141ZM19.0732 15.5872C19.0732 14.0144 20.3774 12.791 21.9187 12.791C23.46 12.791 24.7641 14.0144 24.7641 15.5872C24.7641 17.1601 23.46 18.3835 21.9187 18.3835C20.3181 18.3835 19.0732 17.1019 19.0732 15.5872ZM21.9212 19.2568C20.4392 19.2568 19.1943 20.4802 19.1943 21.9366C19.1943 23.3929 20.4392 24.6163 21.9212 24.6163C23.4032 24.6163 24.6481 23.3929 24.6481 21.9366C24.6481 20.4802 23.4032 19.2568 21.9212 19.2568ZM25.3584 15.5289C25.3584 13.7813 26.8404 12.4414 28.5002 12.4414C30.1601 12.4414 31.5235 13.7813 31.6421 15.5289C31.6421 17.2765 30.2786 18.6164 28.5002 18.6164C26.7218 18.6164 25.3584 17.16 25.3584 15.5289ZM9.0582 7.02344C7.93188 7.02344 6.9834 7.95551 6.9834 9.06235C6.9834 10.1692 7.93188 11.1013 9.0582 11.1013C10.1845 11.1013 11.133 10.1692 11.133 9.06235C11.133 7.95551 10.2438 7.02344 9.0582 7.02344ZM6.8623 15.5285C6.8623 14.3051 7.81078 13.373 9.05566 13.373C10.3005 13.373 11.249 14.3051 11.249 15.5285C11.249 16.7518 10.3005 17.6839 9.05566 17.6839C7.81078 17.6839 6.8623 16.7518 6.8623 15.5285ZM9.0582 19.8398C7.93188 19.8398 6.9834 20.7719 6.9834 21.8788C6.9834 22.9856 7.93188 23.9177 9.0582 23.9177C10.1845 23.9177 11.133 22.9856 11.133 21.8788C11.133 20.7719 10.2438 19.8398 9.0582 19.8398ZM0.698242 15.587C0.698242 14.5384 1.52816 13.7228 2.5952 13.7228C3.66224 13.7228 4.49216 14.5384 4.49216 15.587C4.49216 16.6355 3.66224 17.4511 2.5952 17.4511C1.52816 17.4511 0.698242 16.6355 0.698242 15.587Z"
											fill="white" />
										<path
											d="M55.2343 11.5703C54.9972 11.5703 54.8193 11.8033 54.8193 11.9781V28.1147C54.8193 28.3477 55.0565 28.5224 55.2343 28.5224H57.1905C57.4277 28.5224 57.6055 28.2894 57.6055 28.1147V11.9781C57.6055 11.7451 57.3684 11.5703 57.1905 11.5703H55.2343Z"
											fill="white" />
										<path
											d="M56.3022 4.75391C55.2352 4.75391 54.4053 5.56947 54.4053 6.61806C54.4053 7.66664 55.2352 8.48221 56.3022 8.48221C57.3693 8.48221 58.1992 7.66664 58.1992 6.61806C58.1992 5.56947 57.31 4.75391 56.3022 4.75391Z"
											fill="white" />
										<path
											d="M97.3241 11.5703C97.087 11.5703 96.9092 11.8033 96.9092 11.9781V28.1147C96.9092 28.3477 97.1463 28.5224 97.3241 28.5224H99.2804C99.5175 28.5224 99.6953 28.2894 99.6953 28.1147V11.9781C99.6953 11.7451 99.4582 11.5703 99.2804 11.5703H97.3241Z"
											fill="white" />
										<path
											d="M98.271 4.75391C97.2039 4.75391 96.374 5.56947 96.374 6.61806C96.374 7.66664 97.2039 8.48221 98.271 8.48221C99.338 8.48221 100.168 7.66664 100.168 6.61806C100.168 5.56947 99.338 4.75391 98.271 4.75391Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M118.289 26.756C118.276 26.8126 118.246 26.881 118.174 26.9494C118.174 27.0659 118.05 27.1824 117.803 27.1242L117.898 27.2334C117.886 27.2382 117.874 27.241 117.865 27.241H117.68L117.68 27.2407H117.433V27.0663V26.542H117.865C117.988 26.542 118.112 26.542 118.174 26.6585C118.246 26.6585 118.276 26.699 118.289 26.756ZM117.433 27.2407H117.371V27.765H117.124V26.3086H117.68H117.927C118.05 26.3086 118.174 26.4251 118.174 26.4251C118.297 26.4251 118.297 26.5416 118.297 26.5416V26.6581C118.297 26.6822 118.297 26.7162 118.289 26.756C118.297 26.7958 118.297 26.8437 118.297 26.8915C118.297 27.008 118.297 27.1245 118.174 27.1245C118.101 27.1245 118.029 27.1645 117.969 27.1976C117.943 27.2122 117.919 27.2255 117.898 27.2334L118.359 27.765H118.112L117.68 27.241H117.433V27.2407Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M116.351 27.0664C116.351 26.3674 117.003 25.7266 117.714 25.7266C118.485 25.7266 119.077 26.3091 119.077 27.0664C119.077 27.7655 118.425 28.4063 117.714 28.4063C117.003 28.4063 116.351 27.7655 116.351 27.0664ZM116.468 27.0661C116.468 27.7652 117.001 28.2895 117.713 28.2895C118.365 28.2895 118.958 27.7652 118.958 27.0661C118.958 26.3671 118.424 25.8428 117.713 25.8428C117.001 25.8428 116.468 26.3671 116.468 27.0661Z"
											fill="white" />
										<path
											d="M71.5346 14.1918C71.7717 14.1918 71.9496 13.9588 71.9496 13.7841V11.8617C71.9496 11.6286 71.7124 11.4539 71.5346 11.4539H67.3257V5.27888C67.3257 5.04586 67.0886 4.87109 66.9108 4.87109H64.9545C64.7174 4.87109 64.5396 5.10411 64.5396 5.27888V11.4539H62.4648C62.2276 11.4539 62.0498 11.6869 62.0498 11.8617V13.7841C62.0498 14.0171 62.2869 14.1918 62.4648 14.1918H64.5396V23.5126C64.5396 26.3671 66.4958 28.2312 69.3412 28.2312H71.416C71.6532 28.2312 71.831 27.9982 71.831 27.8235V25.901C71.831 25.668 71.5939 25.4933 71.416 25.4933H69.6376C68.2742 25.4933 67.3257 24.5612 67.3257 23.1048V14.1336H71.5346V14.1918Z"
											fill="white" />
										<path
											d="M113.152 14.1918C113.389 14.1918 113.567 13.9588 113.567 13.7841V11.8617C113.567 11.6286 113.33 11.4539 113.152 11.4539H108.943V5.27888C108.943 5.04586 108.706 4.87109 108.528 4.87109H106.572C106.335 4.87109 106.157 5.10411 106.157 5.27888V11.4539H104.082C103.845 11.4539 103.667 11.6869 103.667 11.8617V13.7841C103.667 14.0171 103.904 14.1918 104.082 14.1918H106.157V23.5126C106.157 26.3671 108.113 28.2312 110.958 28.2312H113.033C113.27 28.2312 113.448 27.9982 113.448 27.8235V25.901C113.448 25.668 113.211 25.4933 113.033 25.4933H111.136C109.773 25.4933 108.824 24.5612 108.824 23.1048V14.1336H113.093L113.152 14.1918Z"
											fill="white" />
										<path
											d="M42.7857 14.1907V27.9388C42.7857 28.1718 43.0228 28.3466 43.2006 28.3466H45.1569C45.394 28.3466 45.5718 28.1136 45.5718 27.9388V14.1907H50.1957C50.4328 14.1907 50.6106 13.9577 50.6106 13.7829V11.8605C50.6106 11.6275 50.3735 11.4527 50.1957 11.4527H45.5718V7.84092C45.5718 6.38455 46.6389 5.39422 47.8837 5.39422H50.1957C50.4328 5.39422 50.6106 5.1612 50.6106 4.98644V3.06403C50.6106 2.83101 50.3735 2.65625 50.1957 2.65625H48.0023C45.0976 2.65625 42.7857 5.04469 42.7857 7.78266V11.4527H40.7109C40.4737 11.4527 40.2959 11.6857 40.2959 11.8605V13.7829C40.2959 14.0159 40.533 14.1907 40.7109 14.1907H42.7857Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M84.6369 10.9277C86.9488 10.9277 89.1422 11.8598 90.6835 13.4909C92.2247 15.1221 93.0547 17.394 93.0547 19.899C93.0547 26.1322 88.7272 28.9284 84.5776 28.9284C80.3687 28.9284 76.1006 26.1905 76.1006 19.899V2.94685C76.1006 2.77208 76.2784 2.53906 76.5155 2.53906H78.4718C78.6496 2.53906 78.8867 2.71383 78.8867 2.94685V13.1997C80.2502 11.8598 82.4435 10.9277 84.6369 10.9277ZM78.8271 19.9575C78.8271 23.045 80.3684 26.3073 84.5773 26.3073C88.7862 26.3073 90.2682 23.045 90.3275 19.9575C90.3275 16.2292 88.0155 13.666 84.5773 13.666C81.1391 13.666 78.8271 16.171 78.8271 19.9575Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={119} height={37} viewBox="0 0 119 37"
										fill="none">
										<path fillRule="evenodd" clipRule="evenodd"
											d="M33.2946 24.8799C33.4715 25.2916 33.6485 25.762 33.8254 26.2325C34.3563 27.5851 34.4743 28.8789 34.2973 30.1728C33.8844 32.878 32.1149 35.2304 29.5195 36.2889C28.5758 36.7006 27.573 36.877 26.5113 36.877C26.2163 36.877 25.8624 36.877 25.5675 36.8182C24.3288 36.7006 23.0901 36.289 21.8515 35.5832C20.3768 34.7599 18.9022 33.5249 17.2506 31.7606C15.599 33.5249 14.1834 34.7599 12.6498 35.5832C11.4111 36.289 10.1724 36.6418 8.93372 36.8182C8.7863 36.8182 8.62414 36.8329 8.46198 36.8476L8.46184 36.8476C8.29963 36.8623 8.13742 36.877 7.98996 36.877C6.92823 36.877 5.92548 36.7006 4.98172 36.2889C2.44536 35.2304 0.557842 32.9368 0.144947 30.1728C-0.0320086 28.8201 0.144947 27.5263 0.616827 26.2325C0.793782 25.7032 0.970738 25.2916 1.14769 24.8799C1.44262 24.233 1.73754 23.5861 1.97348 22.998L2.03247 22.9392C4.62781 17.4111 7.34113 11.8242 10.1724 6.29609L10.2904 6.06086C10.5853 5.53159 10.8802 4.94351 11.1751 4.35544L11.1752 4.35538C11.2546 4.23092 11.334 4.10429 11.4143 3.97632L11.4143 3.97632L11.4143 3.97631C11.7513 3.4391 12.1031 2.8783 12.5318 2.35586C13.7705 0.944427 15.4221 0.121094 17.2506 0.121094C19.0202 0.121094 20.7307 0.944427 21.9104 2.41466C22.5003 3.06157 22.9132 3.76728 23.2671 4.41419L23.2671 4.41429C23.5621 5.00235 23.857 5.59041 24.1519 6.11966L24.2698 6.3549C27.1601 11.883 29.8734 17.4699 32.4098 22.998H32.4688C32.7047 23.5861 32.9996 24.233 33.2946 24.8799ZM62.3168 9.35455C62.3168 10.7072 61.255 11.7657 59.8984 11.7657C58.5417 11.7657 57.48 10.7072 57.48 9.35455C57.48 8.00193 58.5417 6.94336 59.8984 6.94336C61.314 7.00217 62.3168 8.06074 62.3168 9.35455ZM52.4653 14.1761V14.7642C52.4653 14.7642 51.3445 13.2939 48.8672 13.2939C44.8562 13.2939 41.73 16.352 41.73 20.5863C41.73 24.7618 44.8562 27.8787 48.8672 27.8787C51.3445 27.8787 52.4653 26.3497 52.4653 26.3497V26.9966C52.4653 27.2906 52.7012 27.5258 52.9961 27.5258H56.0044V13.6468H52.9961C52.6422 13.6468 52.4653 13.882 52.4653 14.1761ZM49.457 24.5274C50.8136 24.5274 51.9344 23.8217 52.4652 22.9983V18.0583C51.9344 17.2938 50.7547 16.5293 49.457 16.5293C47.0976 16.5293 45.269 17.9995 45.269 20.5283C45.269 23.0572 47.0976 24.5274 49.457 24.5274ZM58.1284 13.6475H61.6675V27.4677H58.1284V13.6475ZM107.437 14.7648C107.437 14.7648 108.617 13.2946 111.035 13.2946C115.046 13.2946 118.172 16.3527 118.172 20.5281C118.172 24.7036 115.046 27.8205 111.035 27.8205C108.558 27.8205 107.437 26.2915 107.437 26.2915V26.9384C107.437 27.2324 107.201 27.4677 106.906 27.4677H103.898V7.00195H107.437V14.7648ZM110.445 24.4678C109.089 24.4678 108.027 23.7621 107.437 22.9388V17.9988C107.968 17.2343 109.148 16.4697 110.445 16.4697C112.805 16.4697 114.633 17.94 114.633 20.4688C114.633 22.9976 112.805 24.4678 110.445 24.4678ZM102.072 27.5258V19.2925C102.072 16.9401 101.6 15.6463 100.42 14.6466C99.3586 13.7644 98.0609 13.2939 96.5273 13.2939C95.1707 13.2939 93.814 13.7056 92.7523 14.7642V14.1761C92.7523 13.882 92.5163 13.6468 92.2214 13.6468H89.3901V27.5258H92.9292V17.8811C93.6371 17.0578 94.7578 16.5285 95.8195 16.5285C97.766 16.5285 98.5328 17.4106 98.5328 19.7042V27.5258H102.072ZM80.7775 13.2944C78.3591 13.2944 77.1794 14.7647 77.1794 14.7647V7.00181H73.6403V27.4675H76.6486C76.9435 27.4675 77.1794 27.2323 77.1794 26.9382V26.2913C77.1794 26.2913 78.3002 27.8204 80.7775 27.8204C84.7885 27.8204 87.9147 24.7035 87.9147 20.528C87.9737 16.3525 84.8475 13.2944 80.7775 13.2944ZM77.1792 22.9388C77.7691 23.7621 78.8308 24.4678 80.1874 24.4678C82.5468 24.4678 84.3754 22.9976 84.3754 20.4688C84.3754 17.94 82.5468 16.4697 80.1874 16.4697C78.8898 16.4697 77.7101 17.2343 77.1792 17.9988V22.9388ZM70.6336 13.2939C71.6953 13.2939 72.2852 13.4704 72.2852 13.4704V16.7637C72.2852 16.7637 69.3359 15.7639 67.5074 17.8811V27.5258H63.9683V13.6468H66.9765C67.2714 13.6468 67.5074 13.882 67.5074 14.1761V14.7642C68.0972 13.9997 69.5129 13.2939 70.6336 13.2939ZM17.1916 28.1144C15.1861 25.5856 13.8885 23.2332 13.4756 21.2925C13.2986 20.4692 13.2396 19.7047 13.3576 19.0578C13.4166 18.4697 13.6525 17.9404 13.9475 17.5287C14.6553 16.5289 15.835 15.882 17.1916 15.882C18.5483 15.882 19.787 16.4701 20.4358 17.5287C20.7307 17.9992 20.9667 18.4697 21.0257 19.0578C21.1436 19.7047 21.0846 20.4692 20.9077 21.2925C20.4948 23.2332 19.1971 25.5856 17.1916 28.1144ZM28.5738 34.1717C30.4023 33.466 31.7 31.8194 31.936 29.8787C32.0539 28.8789 31.936 27.9967 31.759 27.0558C31.6951 26.8648 31.614 26.6737 31.5249 26.464C31.4494 26.2864 31.3683 26.0954 31.2871 25.8796C31.1397 25.5856 31.0069 25.2768 30.8742 24.9681C30.7415 24.6593 30.6088 24.3506 30.4613 24.0565V23.9977C27.925 18.5284 25.2117 12.9415 22.3804 7.47223L22.2624 7.23699C21.9675 6.64889 21.6726 6.0608 21.3776 5.53151C21.0827 4.94342 20.7288 4.35532 20.3159 3.88485C19.5491 3.0027 18.4874 2.53223 17.3666 2.53223C16.2459 2.53223 15.1842 3.0027 14.4174 3.88485C14.0045 4.41413 13.6506 4.94342 13.3557 5.53151L13.3556 5.5316C13.0607 6.11966 12.7658 6.70773 12.4709 7.23699L12.3529 7.47223C9.46264 12.9415 6.74933 18.5284 4.21297 23.9977L4.15399 24.0565C3.85906 24.6446 3.56413 25.2915 3.32819 25.8796C3.15124 26.2913 2.97428 26.7029 2.85631 27.0558C2.44342 28.1144 2.38443 28.9965 2.5024 29.9375C2.73834 31.8194 4.03602 33.466 5.86455 34.2306C6.69034 34.5246 7.6341 34.701 8.63685 34.5834C9.58061 34.4658 10.5244 34.1717 11.4681 33.6425C12.7658 32.8779 14.1225 31.7606 15.6561 30.0551C13.2377 27.0558 11.7041 24.2917 11.1732 21.8806C10.8783 20.7632 10.8193 19.7046 10.9963 18.7637C11.1732 17.8227 11.4681 16.9994 11.999 16.2348C13.1197 14.647 15.0662 13.6472 17.1897 13.6472C19.3131 13.6472 21.2597 14.5882 22.3804 16.2348C22.9112 16.9994 23.2062 17.8227 23.3831 18.7637C23.5011 19.7046 23.4421 20.7632 23.2062 21.8806C22.6163 24.2917 21.1417 26.997 18.7233 29.9963C20.2569 31.7017 21.5546 32.8191 22.9112 33.5837C23.914 34.1129 24.7988 34.407 25.7425 34.5246C26.7453 34.6422 27.689 34.5246 28.5738 34.1717Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={136} height={39} viewBox="0 0 136 39"
										fill="none">
										<path
											d="M24.7247 3.43111C24.184 1.65952 22.2916 0.70559 20.5343 1.25069C18.777 1.7958 17.8308 3.70366 18.3715 5.47524L27.0227 32.3216C27.631 33.9569 29.3882 34.9108 31.0779 34.4339C32.8352 33.8888 33.9166 32.049 33.3759 30.2775C33.3759 30.2093 24.7247 3.43111 24.7247 3.43111Z"
											fill="white" />
										<path
											d="M11.3419 7.86079C10.8012 6.08921 8.90876 5.13528 7.1515 5.68038C5.39424 6.22548 4.44802 8.13335 4.98871 9.90493L13.6399 36.7513C14.2481 38.3866 16.0054 39.3405 17.6951 38.8636C19.4523 38.3184 20.5337 36.4787 19.993 34.7071C19.993 34.639 11.3419 7.86079 11.3419 7.86079Z"
											fill="white" />
										<path
											d="M35.6731 25.7103C37.4304 25.1652 38.3766 23.2574 37.8359 21.4858C37.2952 19.7142 35.4028 18.7603 33.6455 19.3054L6.94861 27.9589C5.32652 28.5721 4.3803 30.3437 4.85341 32.0472C5.39411 33.8188 7.21896 34.909 8.97622 34.3639C9.1114 34.3639 35.6731 25.7103 35.6731 25.7103Z"
											fill="white" />
										<path
											d="M12.4907 33.2751C14.248 32.7299 16.4783 31.9804 18.8439 31.1628C18.3032 29.3912 17.5597 27.1426 16.7487 24.7578L10.3955 26.8701L12.4907 33.2751Z"
											fill="white" />
										<path
											d="M25.9399 28.8454C28.3731 28.0277 30.6034 27.3463 32.2931 26.7331C31.7524 24.9615 31.009 22.713 30.1979 20.3281L23.8447 22.4404L25.9399 28.8454Z"
											fill="white" />
										<path
											d="M31.2794 12.1518C33.0366 11.6066 33.9828 9.69879 33.4421 7.9272C32.9014 6.15561 31.009 5.20168 29.2517 5.74679L2.62244 14.4684C1.00035 15.0817 0.0541306 16.8533 0.52724 18.5567C1.06794 20.3964 2.89279 21.4866 4.65005 20.8734C4.71764 20.8734 31.2794 12.1518 31.2794 12.1518Z"
											fill="white" />
										<path
											d="M8.16453 19.7165C9.9218 19.1714 12.1522 18.4218 14.5177 17.6042C13.7067 15.1512 13.0308 12.9027 12.4225 11.1992L6.06934 13.3115L8.16453 19.7165Z"
											fill="white" />
										<path
											d="M21.5473 15.3532C23.9805 14.5355 26.2109 13.8541 27.9005 13.2409C27.0895 10.7879 26.4136 8.53939 25.8053 6.83594L19.4521 8.94821L21.5473 15.3532Z"
											fill="white" />
										<path
											d="M62.6395 10.5177C63.7885 11.0628 63.9237 11.4035 62.9774 13.1751C62.0312 15.0148 61.8285 15.0829 60.6119 14.606C59.125 13.9927 57.3001 13.5157 56.0836 13.5157C54.1235 13.5157 52.8394 14.1971 52.8394 15.2873C52.8394 18.8305 64.1264 16.9226 64.1264 24.5541C64.1264 28.3698 60.8822 30.8909 56.016 30.8909C53.4477 30.8909 50.2711 30.0051 48.1083 28.9149C47.0269 28.3698 46.9593 28.0291 47.9055 26.1894C48.7166 24.6222 48.9869 24.4178 50.1359 24.8948C52.0283 25.7124 54.3263 26.3257 55.9484 26.3257C57.7732 26.3257 58.9222 25.5762 58.9222 24.486C58.9222 21.0109 47.4324 22.6462 47.4324 15.2873C47.4324 11.4035 50.6766 8.74609 55.4753 8.74609C57.7732 8.95051 60.6795 9.63189 62.6395 10.5177Z"
											fill="white" />
										<path
											d="M71.7645 1.52218V29.8676C71.7645 30.2764 71.2914 30.7533 70.6832 30.7533H67.7093C67.0335 30.7533 66.6279 30.2764 66.6279 29.8676V1.52218C66.6279 0.0912827 67.0335 0.0231448 69.1962 0.0231448C71.6294 -0.0449932 71.7645 0.159421 71.7645 1.52218Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M92.7151 29.595V17.3983C92.7151 12.0836 89.133 8.94922 83.4557 8.94922C80.8874 8.94922 78.0488 9.76687 76.0211 11.1296C74.9397 11.811 74.9397 12.1517 76.0211 13.8551C77.1701 15.5586 77.3729 15.6267 78.4543 15.0135C79.806 14.1958 81.4957 13.6507 82.915 13.6507C85.8889 13.6507 87.6461 15.0135 87.6461 17.262V18.6929C86.2268 18.0797 84.4695 17.739 82.5771 17.739C77.5081 17.739 74.1963 20.4645 74.1963 24.5528C74.1963 28.3685 77.1701 30.9578 81.5633 30.9578C83.8612 30.9578 86.1592 30.0038 87.7137 28.2323L87.6461 29.5269C87.5785 30.2083 88.0516 30.6852 88.7275 30.6852H91.6338C92.242 30.6852 92.7151 30.2764 92.7151 29.595ZM82.1713 26.8698C80.3464 26.8698 79.1299 25.9158 79.1299 24.4849C79.1299 22.7133 80.9547 21.3506 83.6582 21.3506C84.9424 21.3506 86.4293 21.555 87.5783 22.032V23.9398C86.4293 25.7796 84.4017 26.8698 82.1713 26.8698Z"
											fill="white" />
										<path
											d="M112.79 10.5836C113.871 11.1968 113.871 11.5375 112.722 13.3772C111.641 15.0807 111.438 15.217 110.221 14.6037C109.343 14.1268 107.856 13.7179 106.707 13.7179C102.99 13.7179 100.556 16.1709 100.556 19.9185C100.556 23.8023 102.99 26.3916 106.707 26.3916C107.991 26.3916 109.613 25.9146 110.627 25.3014C111.708 24.6881 111.911 24.6881 113.06 26.3916C114.074 27.9588 114.074 28.2994 113.128 28.9808C111.505 30.1392 108.87 31.025 106.572 31.025C99.7453 31.025 95.1494 26.596 95.1494 19.9866C95.1494 13.3772 99.7453 9.01641 106.639 9.01641C108.802 8.94827 111.235 9.62965 112.79 10.5836Z"
											fill="white" />
										<path
											d="M135.162 28.0281C136.04 29.1183 135.702 29.5272 133.54 30.2767C131.377 31.0943 131.039 31.0262 130.295 30.0041L124.145 21.7594L121.374 24.4168V29.7997C121.374 30.2085 120.901 30.6855 120.293 30.6855H117.319C116.643 30.6855 116.237 30.2085 116.237 29.7997V1.52247C116.237 0.0915754 116.643 0.0234375 118.806 0.0234375C121.306 0.0234375 121.374 0.227851 121.374 1.52247V17.603L129.755 9.49461C130.701 8.60882 131.174 8.67695 132.864 9.76716C134.689 10.9255 134.824 11.2662 133.945 12.152L127.727 18.2844L135.162 28.0281Z"
											fill="white" />
									</svg>
								</div>
							</div>
						</div>
					</div>
					<div className="marquee v2">
						<div className="marquee__inner-wrap">
							<div className="marquee__inner">
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={60} height={33} viewBox="0 0 60 33"
										fill="none">
										<path fillRule="evenodd" clipRule="evenodd"
											d="M-45.4155 30.604L-45.4156 30.604C-46.098 30.6739 -46.7907 30.7449 -47.5001 30.8323L-53.191 14.3686V31.5328C-54.9694 31.708 -56.5699 31.9415 -58.2891 32.2334V0.765625H-53.5467L-47.0851 18.6305V0.765625H-42.0463V30.1901C-43.1597 30.3728 -44.2731 30.4869 -45.4155 30.604ZM-28.7037 12.2648L-28.7036 12.2648C-27.5257 12.2363 -26.3752 12.2085 -25.5072 12.2085V17.1125C-27.7006 17.1125 -30.3089 17.1125 -32.2059 17.2293V24.527C-31.2822 24.4713 -30.3524 24.4097 -29.4186 24.3479L-29.4186 24.3479L-29.4185 24.3479L-29.4185 24.3478L-29.4184 24.3478L-29.4184 24.3478C-27.4158 24.2151 -25.3945 24.0812 -23.3731 24.0016V28.7305L-37.1854 29.7814V0.765625H-23.3731V5.6697H-32.2059V12.3252C-31.2045 12.3252 -29.939 12.2946 -28.7037 12.2648ZM-10.0351 5.72808H-4.87778C-4.87778 5.72808 -4.87778 0.765625 -4.8185 0.765625H-20.172V5.72808H-15.0147V28.3802C-13.4141 28.3218 -11.695 28.3218 -10.0351 28.3218V5.72808ZM3.24446 11.9749H10.0617V16.879H3.24446V28.0299H-1.67578V0.765625H12.255V5.6697H3.24446V11.9749ZM25.5455 23.9444C23.8312 23.8451 22.1036 23.7451 20.376 23.7097V0.765625H15.3965V28.3218C19.961 28.4386 24.407 28.6721 28.853 28.964V24.1184C27.7585 24.0725 26.6547 24.0086 25.5455 23.9444ZM34.743 29.422L34.7432 29.422C35.8114 29.4856 36.8961 29.5502 37.9808 29.6646V0.765625H33.0605V29.3143C33.6151 29.3548 34.1767 29.3882 34.743 29.422ZM53.4537 15.7114L59.7967 0.765625H54.2837L50.7861 8.99746L47.5257 0.765625H42.1905L48 15.5362L41.5977 29.8982C42.3091 29.9916 43.0205 30.0663 43.7318 30.141C44.7989 30.2531 45.8659 30.3652 46.9329 30.5403L50.6083 22.1918L54.1651 31.2993C54.8294 31.4015 55.4865 31.5109 56.1414 31.62C57.3565 31.8223 58.5641 32.0233 59.7967 32.175L53.4537 15.7114Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={120} height={31} viewBox="0 0 120 31"
										fill="none">
										<path fillRule="evenodd" clipRule="evenodd"
											d="M17.9285 2.59615C17.9285 3.8195 16.8615 4.86809 15.6166 4.86809C14.3717 4.86809 13.3047 3.8195 13.3047 2.59615C13.3047 1.3728 14.3717 0.324219 15.6166 0.324219C16.8615 0.324219 17.9285 1.3728 17.9285 2.59615ZM15.616 6.73242C14.2526 6.73242 13.1855 7.78101 13.1855 9.12086C13.1855 10.4607 14.2526 11.5093 15.616 11.5093C16.9795 11.5093 18.0465 10.4607 18.0465 9.12086C18.0465 7.72275 16.9795 6.73242 15.616 6.73242ZM13.1271 15.5287C13.1271 14.1888 14.2534 13.082 15.6169 13.082C16.9803 13.082 18.1659 14.1888 18.1066 15.5287C18.1066 16.8686 16.9803 17.9754 15.6169 17.9754C14.2534 17.9754 13.1271 16.8686 13.1271 15.5287ZM15.616 19.5479C14.2526 19.5479 13.1855 20.5964 13.1855 21.9363C13.1855 23.2762 14.2526 24.3247 15.616 24.3247C16.9795 24.3247 18.0465 23.2762 18.0465 21.9363C18.0465 20.6547 16.9795 19.5479 15.616 19.5479ZM13.3047 28.4028C13.3047 27.1794 14.3717 26.1309 15.6166 26.1309C16.9208 26.1309 17.9285 27.1794 17.9285 28.4028C17.9285 29.6261 16.8615 30.6747 15.6166 30.6747C14.3717 30.6747 13.3047 29.6261 13.3047 28.4028ZM22.0198 6.44141C20.5378 6.44141 19.293 7.66476 19.293 9.12112C19.293 10.5775 20.5378 11.8008 22.0198 11.8008C23.5018 11.8008 24.7467 10.5775 24.7467 9.12112C24.7467 7.66476 23.5018 6.44141 22.0198 6.44141ZM19.1738 15.5872C19.1738 14.0144 20.478 12.791 22.0193 12.791C23.5605 12.791 24.8647 14.0144 24.8647 15.5872C24.8647 17.1601 23.5605 18.3835 22.0193 18.3835C20.4187 18.3835 19.1738 17.1019 19.1738 15.5872ZM22.0198 19.2568C20.5378 19.2568 19.293 20.4802 19.293 21.9366C19.293 23.3929 20.5378 24.6163 22.0198 24.6163C23.5018 24.6163 24.7467 23.3929 24.7467 21.9366C24.7467 20.4802 23.5018 19.2568 22.0198 19.2568ZM25.457 15.5289C25.457 13.7813 26.939 12.4414 28.5989 12.4414C30.2587 12.4414 31.6222 13.7813 31.7407 15.5289C31.7407 17.2765 30.3773 18.6164 28.5989 18.6164C26.8205 18.6164 25.457 17.16 25.457 15.5289ZM9.15488 7.02344C8.02856 7.02344 7.08008 7.95551 7.08008 9.06235C7.08008 10.1692 8.02856 11.1013 9.15488 11.1013C10.2812 11.1013 11.2297 10.1692 11.2297 9.06235C11.2297 7.95551 10.3405 7.02344 9.15488 7.02344ZM6.96289 15.5285C6.96289 14.3051 7.91137 13.373 9.15625 13.373C10.4011 13.373 11.3496 14.3051 11.3496 15.5285C11.3496 16.7518 10.4011 17.6839 9.15625 17.6839C7.91137 17.6839 6.96289 16.7518 6.96289 15.5285ZM9.15488 19.8398C8.02856 19.8398 7.08008 20.7719 7.08008 21.8788C7.08008 22.9856 8.02856 23.9177 9.15488 23.9177C10.2812 23.9177 11.2297 22.9856 11.2297 21.8788C11.2297 20.7719 10.3405 19.8398 9.15488 19.8398ZM0.796875 15.587C0.796875 14.5384 1.62679 13.7228 2.69383 13.7228C3.76087 13.7228 4.59079 14.5384 4.59079 15.587C4.59079 16.6355 3.76087 17.4511 2.69383 17.4511C1.62679 17.4511 0.796875 16.6355 0.796875 15.587Z"
											fill="white" />
										<path
											d="M55.3349 11.5703C55.0978 11.5703 54.9199 11.8033 54.9199 11.9781V28.1147C54.9199 28.3477 55.157 28.5224 55.3349 28.5224H57.2911C57.5282 28.5224 57.7061 28.2894 57.7061 28.1147V11.9781C57.7061 11.7451 57.469 11.5703 57.2911 11.5703H55.3349Z"
											fill="white" />
										<path
											d="M56.4028 4.75391C55.3358 4.75391 54.5059 5.56947 54.5059 6.61806C54.5059 7.66664 55.3358 8.48221 56.4028 8.48221C57.4699 8.48221 58.2998 7.66664 58.2998 6.61806C58.2998 5.56947 57.4106 4.75391 56.4028 4.75391Z"
											fill="white" />
										<path
											d="M97.4247 11.5703C97.1876 11.5703 97.0098 11.8033 97.0098 11.9781V28.1147C97.0098 28.3477 97.2469 28.5224 97.4247 28.5224H99.381C99.6181 28.5224 99.7959 28.2894 99.7959 28.1147V11.9781C99.7959 11.7451 99.5588 11.5703 99.381 11.5703H97.4247Z"
											fill="white" />
										<path
											d="M98.3716 4.75391C97.3045 4.75391 96.4746 5.56947 96.4746 6.61806C96.4746 7.66664 97.3045 8.48221 98.3716 8.48221C99.4386 8.48221 100.269 7.66664 100.269 6.61806C100.269 5.56947 99.4386 4.75391 98.3716 4.75391Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M118.387 26.756C118.375 26.8126 118.345 26.881 118.272 26.9494C118.272 27.0659 118.149 27.1824 117.902 27.1242L117.997 27.2334C117.984 27.2382 117.973 27.241 117.964 27.241H117.779L117.778 27.2407H117.531V27.0663V26.542H117.964C118.087 26.542 118.21 26.542 118.272 26.6585C118.345 26.6585 118.375 26.699 118.387 26.756ZM117.531 27.2407H117.47V27.765H117.223V26.3086H117.778H118.025C118.149 26.3086 118.272 26.4251 118.272 26.4251C118.396 26.4251 118.396 26.5416 118.396 26.5416V26.6581C118.396 26.6822 118.396 26.7162 118.387 26.756C118.396 26.7958 118.396 26.8437 118.396 26.8915C118.396 27.008 118.396 27.1245 118.272 27.1245C118.2 27.1245 118.128 27.1645 118.068 27.1976C118.041 27.2122 118.017 27.2255 117.997 27.2334L118.458 27.765H118.211L117.779 27.241H117.531V27.2407Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M116.453 27.0664C116.453 26.3674 117.105 25.7266 117.817 25.7266C118.587 25.7266 119.18 26.3091 119.18 27.0664C119.18 27.7655 118.528 28.4063 117.817 28.4063C117.105 28.4063 116.453 27.7655 116.453 27.0664ZM116.572 27.0661C116.572 27.7652 117.106 28.2895 117.817 28.2895C118.469 28.2895 119.062 27.7652 119.062 27.0661C119.062 26.3671 118.529 25.8428 117.817 25.8428C117.106 25.8428 116.572 26.3671 116.572 27.0661Z"
											fill="white" />
										<path
											d="M71.6371 14.1918C71.8743 14.1918 72.0521 13.9588 72.0521 13.7841V11.8617C72.0521 11.6286 71.815 11.4539 71.6371 11.4539H67.4283V5.27888C67.4283 5.04586 67.1911 4.87109 67.0133 4.87109H65.0571C64.8199 4.87109 64.6421 5.10411 64.6421 5.27888V11.4539H62.5673C62.3302 11.4539 62.1523 11.6869 62.1523 11.8617V13.7841C62.1523 14.0171 62.3895 14.1918 62.5673 14.1918H64.6421V23.5126C64.6421 26.3671 66.5983 28.2312 69.4438 28.2312H71.5186C71.7557 28.2312 71.9335 27.9982 71.9335 27.8235V25.901C71.9335 25.668 71.6964 25.4933 71.5186 25.4933H69.7402C68.3767 25.4933 67.4283 24.5612 67.4283 23.1048V14.1336H71.6371V14.1918Z"
											fill="white" />
										<path
											d="M113.252 14.1918C113.489 14.1918 113.667 13.9588 113.667 13.7841V11.8617C113.667 11.6286 113.43 11.4539 113.252 11.4539H109.043V5.27888C109.043 5.04586 108.806 4.87109 108.629 4.87109H106.672C106.435 4.87109 106.257 5.10411 106.257 5.27888V11.4539H104.183C103.945 11.4539 103.768 11.6869 103.768 11.8617V13.7841C103.768 14.0171 104.005 14.1918 104.183 14.1918H106.257V23.5126C106.257 26.3671 108.214 28.2312 111.059 28.2312H113.134C113.371 28.2312 113.549 27.9982 113.549 27.8235V25.901C113.549 25.668 113.312 25.4933 113.134 25.4933H111.237C109.873 25.4933 108.925 24.5612 108.925 23.1048V14.1336H113.193L113.252 14.1918Z"
											fill="white" />
										<path
											d="M42.8862 14.1907V27.9388C42.8862 28.1718 43.1234 28.3466 43.3012 28.3466H45.2574C45.4946 28.3466 45.6724 28.1136 45.6724 27.9388V14.1907H50.2962C50.5334 14.1907 50.7112 13.9577 50.7112 13.7829V11.8605C50.7112 11.6275 50.4741 11.4527 50.2962 11.4527H45.6724V7.84092C45.6724 6.38455 46.7394 5.39422 47.9843 5.39422H50.2962C50.5334 5.39422 50.7112 5.1612 50.7112 4.98644V3.06403C50.7112 2.83101 50.4741 2.65625 50.2962 2.65625H48.1029C45.1982 2.65625 42.8862 5.04469 42.8862 7.78266V11.4527H40.8114C40.5743 11.4527 40.3965 11.6857 40.3965 11.8605V13.7829C40.3965 14.0159 40.6336 14.1907 40.8114 14.1907H42.8862Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M84.7375 10.9277C87.0494 10.9277 89.2428 11.8598 90.7841 13.4909C92.3253 15.1221 93.1553 17.394 93.1553 19.899C93.1553 26.1322 88.8278 28.9284 84.6782 28.9284C80.4693 28.9284 76.2012 26.1905 76.2012 19.899V2.94685C76.2012 2.77208 76.379 2.53906 76.6161 2.53906H78.5724C78.7502 2.53906 78.9873 2.71383 78.9873 2.94685V13.1997C80.3508 11.8598 82.5441 10.9277 84.7375 10.9277ZM78.9277 19.9575C78.9277 23.045 80.469 26.3073 84.6779 26.3073C88.8868 26.3073 90.3688 23.045 90.4281 19.9575C90.4281 16.2292 88.1161 13.666 84.6779 13.666C81.2397 13.666 78.9277 16.171 78.9277 19.9575Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={119} height={39} viewBox="0 0 119 39"
										fill="none">
										<path
											d="M29.2361 13.7558H15.4143V17.8313H25.2431C24.7517 23.574 19.9602 26.1058 15.4758 26.1058C9.70135 26.1058 4.66408 21.5363 4.66408 15.176C4.66408 8.93927 9.45563 4.12277 15.4758 4.12277C20.1445 4.12277 22.8474 7.08677 22.8474 7.08677L25.6732 4.12277C25.6732 4.12277 21.9874 0.047268 15.2915 0.047268C6.7527 -0.014482 0.179688 7.21027 0.179688 15.0525C0.179688 22.7095 6.38412 30.1813 15.5372 30.1813C23.5845 30.1813 29.4818 24.6855 29.4818 16.4728C29.4818 14.7438 29.2361 13.7558 29.2361 13.7558Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M30.7715 20.3635C30.7715 15.1765 34.8259 10.7305 40.4774 10.7305C45.1461 10.7305 50.1834 14.065 50.2448 20.487C50.2448 26.168 45.9447 30.1817 40.6003 30.1817C34.703 30.1817 30.7715 25.674 30.7715 20.3635ZM45.9446 20.4873C45.9446 16.9058 43.3031 14.6211 40.5387 14.6211C37.4058 14.6211 35.01 17.0911 35.0715 20.4256C35.0715 23.8836 37.4672 26.3536 40.5387 26.3536C43.3645 26.3536 45.9446 24.0688 45.9446 20.4873Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M51.9043 20.3635C51.9043 15.1765 55.9587 10.7305 61.6102 10.7305C66.2789 10.7305 71.3162 14.065 71.3776 20.487C71.3776 26.168 67.0775 30.1817 61.7331 30.1817C55.8358 30.1817 51.9043 25.674 51.9043 20.3635ZM67.0774 20.4873C67.0774 16.9058 64.4359 14.6211 61.6716 14.6211C58.5386 14.6211 56.1428 17.0911 56.2043 20.4256C56.2043 23.8836 58.6001 26.3536 61.6716 26.3536C64.4973 26.3536 67.0774 24.0688 67.0774 20.4873Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M73.0352 20.4877C73.0352 15.3625 77.0895 10.793 82.3111 10.793C84.584 10.793 86.304 11.6575 87.4098 13.016V11.3487H91.4642V28.824C91.4642 35.6782 87.5326 38.951 82.3725 38.951C77.6424 38.951 75.0009 36.0487 73.7109 33.27L77.4581 31.7262C78.011 32.9612 79.4853 35.1842 82.434 35.1842C85.5055 35.1842 87.5326 33.1465 87.5326 29.812V27.8977C86.3655 29.1945 84.9526 30.2442 82.1882 30.2442C77.7653 30.2442 73.0352 26.2922 73.0352 20.4877ZM87.8394 20.5491C87.8394 16.8441 85.1979 14.6211 82.6793 14.6211C79.9764 14.6211 77.3349 16.7823 77.2734 20.6108C77.2734 24.1306 79.8535 26.4153 82.6179 26.4153C85.2593 26.4153 87.8394 24.3776 87.8394 20.5491Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M100.617 20.4252C100.617 14.6207 104.733 10.7305 109.647 10.7305C113.456 10.7305 116.343 13.324 117.633 16.288L118.309 17.8935L105.347 23.3275C106.146 24.8095 107.374 26.2915 110.077 26.2915C112.473 26.2915 113.948 24.9947 114.808 23.6362L118.186 25.921C116.712 27.897 114.132 30.1817 110.077 30.1817C105.224 30.1817 100.617 26.5385 100.617 20.4252ZM113.395 16.5967C112.78 15.4235 111.552 14.4972 109.77 14.4972C107.006 14.4972 104.303 17.3995 104.794 20.24L113.395 16.5967Z"
											fill="white" />
										<path d="M94.4746 29.6247H98.7133V0.972656H94.4746V29.6247Z" fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={119} height={37} viewBox="0 0 119 37"
										fill="none">
										<path fillRule="evenodd" clipRule="evenodd"
											d="M33.5255 24.8799C33.7025 25.2916 33.8794 25.762 34.0564 26.2325C34.5872 27.5851 34.7052 28.8789 34.5283 30.1728C34.1154 32.878 32.3458 35.2304 29.7505 36.2889C28.8067 36.7006 27.804 36.877 26.7422 36.877C26.4473 36.877 26.0934 36.877 25.7985 36.8182C24.5598 36.7006 23.3211 36.289 22.0824 35.5832C20.6078 34.7599 19.1332 33.5249 17.4816 31.7606C15.83 33.5249 14.4144 34.7599 12.8807 35.5832C11.6421 36.289 10.4034 36.6418 9.16468 36.8182C9.01726 36.8182 8.8551 36.8329 8.69294 36.8476L8.6928 36.8476C8.53059 36.8623 8.36838 36.877 8.22092 36.877C7.15919 36.877 6.15644 36.7006 5.21268 36.2889C2.67632 35.2304 0.788799 32.9368 0.375904 30.1728C0.198948 28.8201 0.375904 27.5263 0.847784 26.2325C1.02474 25.7032 1.20169 25.2916 1.37865 24.8799C1.67358 24.233 1.9685 23.5861 2.20444 22.998L2.26343 22.9392C4.85877 17.4111 7.57208 11.8242 10.4034 6.29609L10.5213 6.06086C10.8163 5.53159 11.1112 4.94351 11.4061 4.35544L11.4061 4.35538C11.4855 4.23092 11.565 4.10429 11.6453 3.97632L11.6453 3.97632L11.6453 3.97631C11.9823 3.4391 12.334 2.8783 12.7628 2.35586C14.0015 0.944427 15.653 0.121094 17.4816 0.121094C19.2511 0.121094 20.9617 0.944427 22.1414 2.41466C22.7312 3.06157 23.1441 3.76728 23.4981 4.41419L23.4981 4.41429C23.793 5.00235 24.0879 5.59041 24.3828 6.11966L24.5008 6.3549C27.3911 11.883 30.1044 17.4699 32.6407 22.998H32.6997C32.9357 23.5861 33.2306 24.233 33.5255 24.8799ZM62.5458 9.35455C62.5458 10.7072 61.484 11.7657 60.1274 11.7657C58.7707 11.7657 57.709 10.7072 57.709 9.35455C57.709 8.00193 58.7707 6.94336 60.1274 6.94336C61.543 7.00217 62.5458 8.06074 62.5458 9.35455ZM52.6962 14.1761V14.7642C52.6962 14.7642 51.5755 13.2939 49.0981 13.2939C45.0871 13.2939 41.9609 16.352 41.9609 20.5863C41.9609 24.7618 45.0871 27.8787 49.0981 27.8787C51.5755 27.8787 52.6962 26.3497 52.6962 26.3497V26.9966C52.6962 27.2906 52.9322 27.5258 53.2271 27.5258H56.2353V13.6468H53.2271C52.8732 13.6468 52.6962 13.882 52.6962 14.1761ZM49.6879 24.5274C51.0446 24.5274 52.1653 23.8217 52.6962 22.9983V18.0583C52.1653 17.2938 50.9856 16.5293 49.6879 16.5293C47.3285 16.5293 45.5 17.9995 45.5 20.5283C45.5 23.0572 47.3285 24.5274 49.6879 24.5274ZM58.3574 13.6475H61.8965V27.4677H58.3574V13.6475ZM107.67 14.7647C107.67 14.7647 108.849 13.2944 111.268 13.2944C115.279 13.2944 118.405 16.3525 118.405 20.528C118.405 24.7035 115.279 27.8204 111.268 27.8204C108.79 27.8204 107.67 26.2913 107.67 26.2913V26.9382C107.67 27.2323 107.434 27.4675 107.139 27.4675H104.131V7.00181H107.67V14.7647ZM110.678 24.4678C109.322 24.4678 108.26 23.7621 107.67 22.9388V17.9988C108.201 17.2343 109.38 16.4697 110.678 16.4697C113.038 16.4697 114.866 17.94 114.866 20.4688C114.866 22.9976 113.038 24.4678 110.678 24.4678ZM102.303 27.5258V19.2925C102.303 16.9401 101.831 15.6463 100.651 14.6466C99.5896 13.7644 98.2919 13.2939 96.7583 13.2939C95.4016 13.2939 94.045 13.7056 92.9832 14.7642V14.1761C92.9832 13.882 92.7473 13.6468 92.4524 13.6468H89.6211V27.5258H93.1602V17.8811C93.868 17.0578 94.9887 16.5285 96.0505 16.5285C97.997 16.5285 98.7638 17.4106 98.7638 19.7042V27.5258H102.303ZM81.0085 13.2944C78.5901 13.2944 77.4104 14.7647 77.4104 14.7647V7.00181H73.8713V27.4675H76.8795C77.1745 27.4675 77.4104 27.2323 77.4104 26.9382V26.2913C77.4104 26.2913 78.5311 27.8204 81.0085 27.8204C85.0195 27.8204 88.1457 24.7035 88.1457 20.528C88.2047 16.3525 85.0785 13.2944 81.0085 13.2944ZM77.4102 22.9388C78 23.7621 79.0617 24.4678 80.4184 24.4678C82.7778 24.4678 84.6063 22.9976 84.6063 20.4688C84.6063 17.94 82.7778 16.4697 80.4184 16.4697C79.1207 16.4697 77.941 17.2343 77.4102 17.9988V22.9388ZM70.8626 13.2939C71.9243 13.2939 72.5142 13.4704 72.5142 13.4704V16.7637C72.5142 16.7637 69.5649 15.7639 67.7364 17.8811V27.5258H64.1973V13.6468H67.2055C67.5004 13.6468 67.7364 13.882 67.7364 14.1761V14.7642C68.3262 13.9997 69.7419 13.2939 70.8626 13.2939ZM17.4226 28.1144C15.4171 25.5856 14.1194 23.2332 13.7065 21.2925C13.5296 20.4692 13.4706 19.7047 13.5886 19.0578C13.6475 18.4697 13.8835 17.9404 14.1784 17.5287C14.8862 16.5289 16.0659 15.882 17.4226 15.882C18.7792 15.882 20.0179 16.4701 20.6668 17.5287C20.9617 17.9992 21.1976 18.4697 21.2566 19.0578C21.3746 19.7047 21.3156 20.4692 21.1386 21.2925C20.7258 23.2332 19.4281 25.5856 17.4226 28.1144ZM28.8067 34.1718C30.6352 33.4661 31.9329 31.8194 32.1689 29.8787C32.2868 28.879 32.1689 27.9968 31.9919 27.0559C31.928 26.8648 31.8469 26.6738 31.7578 26.4641C31.6823 26.2865 31.6012 26.0954 31.52 25.8797C31.3726 25.5856 31.2398 25.2769 31.1071 24.9681C30.9744 24.6594 30.8417 24.3506 30.6942 24.0566V23.9978C28.1579 18.5285 25.4446 12.9416 22.6133 7.47228L22.4953 7.23705L22.4953 7.23702C22.2004 6.64893 21.9054 6.06085 21.6105 5.53157C21.3156 4.94347 20.9617 4.35538 20.5488 3.8849C19.782 3.00276 18.7203 2.53228 17.5995 2.53228C16.4788 2.53228 15.4171 3.00276 14.6503 3.8849C14.2374 4.41419 13.8835 4.94347 13.5886 5.53157C13.2936 6.11966 12.9987 6.70776 12.7038 7.23705L12.5858 7.47228C9.69555 12.9416 6.98223 18.5285 4.44587 23.9978L4.38689 24.0566C4.09196 24.6447 3.79704 25.2916 3.5611 25.8797C3.38414 26.2913 3.20719 26.703 3.08922 27.0559C2.67632 28.1144 2.61734 28.9966 2.73531 29.9375C2.97125 31.8194 4.26892 33.4661 6.09746 34.2306C6.92325 34.5247 7.86701 34.7011 8.86975 34.5835C9.81351 34.4659 10.7573 34.1718 11.701 33.6425C12.9987 32.878 14.3554 31.7606 15.889 30.0551C13.4706 27.0559 11.937 24.2918 11.4061 21.8806C11.1112 20.7632 11.0522 19.7047 11.2292 18.7637C11.4061 17.8228 11.701 16.9994 12.2319 16.2349C13.3526 14.647 15.2991 13.6473 17.4226 13.6473C19.5461 13.6473 21.4926 14.5882 22.6133 16.2349C23.1441 16.9994 23.4391 17.8228 23.616 18.7637C23.734 19.7047 23.675 20.7632 23.4391 21.8806C22.8492 24.2918 21.3746 26.997 18.9562 29.9963C20.4898 31.7018 21.7875 32.8192 23.1441 33.5837C24.1469 34.113 25.0317 34.407 25.9754 34.5247C26.9782 34.6423 27.9219 34.5247 28.8067 34.1718Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={136} height={39} viewBox="0 0 136 39"
										fill="none">
										<path
											d="M24.7247 3.43111C24.184 1.65952 22.2916 0.70559 20.5343 1.25069C18.777 1.7958 17.8308 3.70366 18.3715 5.47524L27.0227 32.3216C27.631 33.9569 29.3882 34.9108 31.0779 34.4339C32.8352 33.8888 33.9166 32.049 33.3759 30.2775C33.3759 30.2093 24.7247 3.43111 24.7247 3.43111Z"
											fill="white" />
										<path
											d="M11.3419 7.86079C10.8012 6.08921 8.90876 5.13528 7.1515 5.68038C5.39424 6.22548 4.44802 8.13335 4.98871 9.90493L13.6399 36.7513C14.2481 38.3866 16.0054 39.3405 17.6951 38.8636C19.4523 38.3184 20.5337 36.4787 19.993 34.7071C19.993 34.639 11.3419 7.86079 11.3419 7.86079Z"
											fill="white" />
										<path
											d="M35.6731 25.7103C37.4304 25.1652 38.3766 23.2574 37.8359 21.4858C37.2952 19.7142 35.4028 18.7603 33.6455 19.3054L6.94861 27.9589C5.32652 28.5721 4.3803 30.3437 4.85341 32.0472C5.39411 33.8188 7.21896 34.909 8.97622 34.3639C9.1114 34.3639 35.6731 25.7103 35.6731 25.7103Z"
											fill="white" />
										<path
											d="M12.4907 33.2751C14.248 32.7299 16.4783 31.9804 18.8439 31.1628C18.3032 29.3912 17.5597 27.1426 16.7487 24.7578L10.3955 26.8701L12.4907 33.2751Z"
											fill="white" />
										<path
											d="M25.9399 28.8454C28.3731 28.0277 30.6034 27.3463 32.2931 26.7331C31.7524 24.9615 31.009 22.713 30.1979 20.3281L23.8447 22.4404L25.9399 28.8454Z"
											fill="white" />
										<path
											d="M31.2794 12.1518C33.0366 11.6066 33.9828 9.69879 33.4421 7.9272C32.9014 6.15561 31.009 5.20168 29.2517 5.74679L2.62244 14.4684C1.00035 15.0817 0.0541306 16.8533 0.52724 18.5567C1.06794 20.3964 2.89279 21.4866 4.65005 20.8734C4.71764 20.8734 31.2794 12.1518 31.2794 12.1518Z"
											fill="white" />
										<path
											d="M8.16453 19.7165C9.9218 19.1714 12.1522 18.4218 14.5177 17.6042C13.7067 15.1512 13.0308 12.9027 12.4225 11.1992L6.06934 13.3115L8.16453 19.7165Z"
											fill="white" />
										<path
											d="M21.5473 15.3532C23.9805 14.5355 26.2109 13.8541 27.9005 13.2409C27.0895 10.7879 26.4136 8.53939 25.8053 6.83594L19.4521 8.94821L21.5473 15.3532Z"
											fill="white" />
										<path
											d="M62.6395 10.5177C63.7885 11.0628 63.9237 11.4035 62.9774 13.1751C62.0312 15.0148 61.8285 15.0829 60.6119 14.606C59.125 13.9927 57.3001 13.5157 56.0836 13.5157C54.1235 13.5157 52.8394 14.1971 52.8394 15.2873C52.8394 18.8305 64.1264 16.9226 64.1264 24.5541C64.1264 28.3698 60.8822 30.8909 56.016 30.8909C53.4477 30.8909 50.2711 30.0051 48.1083 28.9149C47.0269 28.3698 46.9593 28.0291 47.9055 26.1894C48.7166 24.6222 48.9869 24.4178 50.1359 24.8948C52.0283 25.7124 54.3263 26.3257 55.9484 26.3257C57.7732 26.3257 58.9222 25.5762 58.9222 24.486C58.9222 21.0109 47.4324 22.6462 47.4324 15.2873C47.4324 11.4035 50.6766 8.74609 55.4753 8.74609C57.7732 8.95051 60.6795 9.63189 62.6395 10.5177Z"
											fill="white" />
										<path
											d="M71.7645 1.52218V29.8676C71.7645 30.2764 71.2914 30.7533 70.6832 30.7533H67.7093C67.0335 30.7533 66.6279 30.2764 66.6279 29.8676V1.52218C66.6279 0.0912827 67.0335 0.0231448 69.1962 0.0231448C71.6294 -0.0449932 71.7645 0.159421 71.7645 1.52218Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M92.7151 29.595V17.3983C92.7151 12.0836 89.133 8.94922 83.4557 8.94922C80.8874 8.94922 78.0488 9.76687 76.0211 11.1296C74.9397 11.811 74.9397 12.1517 76.0211 13.8551C77.1701 15.5586 77.3729 15.6267 78.4543 15.0135C79.806 14.1958 81.4957 13.6507 82.915 13.6507C85.8889 13.6507 87.6461 15.0135 87.6461 17.262V18.6929C86.2268 18.0797 84.4695 17.739 82.5771 17.739C77.5081 17.739 74.1963 20.4645 74.1963 24.5528C74.1963 28.3685 77.1701 30.9578 81.5633 30.9578C83.8612 30.9578 86.1592 30.0038 87.7137 28.2323L87.6461 29.5269C87.5785 30.2083 88.0516 30.6852 88.7275 30.6852H91.6338C92.242 30.6852 92.7151 30.2764 92.7151 29.595ZM82.1713 26.8698C80.3464 26.8698 79.1299 25.9158 79.1299 24.4849C79.1299 22.7133 80.9547 21.3506 83.6582 21.3506C84.9424 21.3506 86.4293 21.555 87.5783 22.032V23.9398C86.4293 25.7796 84.4017 26.8698 82.1713 26.8698Z"
											fill="white" />
										<path
											d="M112.79 10.5836C113.871 11.1968 113.871 11.5375 112.722 13.3772C111.641 15.0807 111.438 15.217 110.221 14.6037C109.343 14.1268 107.856 13.7179 106.707 13.7179C102.99 13.7179 100.556 16.1709 100.556 19.9185C100.556 23.8023 102.99 26.3916 106.707 26.3916C107.991 26.3916 109.613 25.9146 110.627 25.3014C111.708 24.6881 111.911 24.6881 113.06 26.3916C114.074 27.9588 114.074 28.2994 113.128 28.9808C111.505 30.1392 108.87 31.025 106.572 31.025C99.7453 31.025 95.1494 26.596 95.1494 19.9866C95.1494 13.3772 99.7453 9.01641 106.639 9.01641C108.802 8.94827 111.235 9.62965 112.79 10.5836Z"
											fill="white" />
										<path
											d="M135.162 28.0281C136.04 29.1183 135.702 29.5272 133.54 30.2767C131.377 31.0943 131.039 31.0262 130.295 30.0041L124.145 21.7594L121.374 24.4168V29.7997C121.374 30.2085 120.901 30.6855 120.293 30.6855H117.319C116.643 30.6855 116.237 30.2085 116.237 29.7997V1.52247C116.237 0.0915754 116.643 0.0234375 118.806 0.0234375C121.306 0.0234375 121.374 0.227851 121.374 1.52247V17.603L129.755 9.49461C130.701 8.60882 131.174 8.67695 132.864 9.76716C134.689 10.9255 134.824 11.2662 133.945 12.152L127.727 18.2844L135.162 28.0281Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={120} height={31} viewBox="0 0 120 31"
										fill="none">
										<path fillRule="evenodd" clipRule="evenodd"
											d="M17.8299 2.59615C17.8299 3.8195 16.7629 4.86809 15.518 4.86809C14.2731 4.86809 13.2061 3.8195 13.2061 2.59615C13.2061 1.3728 14.2731 0.324219 15.518 0.324219C16.7629 0.324219 17.8299 1.3728 17.8299 2.59615ZM15.5193 6.73242C14.1559 6.73242 13.0889 7.78101 13.0889 9.12086C13.0889 10.4607 14.1559 11.5093 15.5193 11.5093C16.8828 11.5093 17.9498 10.4607 17.9498 9.12086C17.9498 7.72275 16.8828 6.73242 15.5193 6.73242ZM13.0303 15.5287C13.0303 14.1889 14.1566 13.082 15.52 13.082C16.8835 13.082 18.0691 14.1889 18.0098 15.5287C18.0098 16.8686 16.8835 17.9754 15.52 17.9754C14.1566 17.9754 13.0303 16.8686 13.0303 15.5287ZM15.5193 19.5479C14.1559 19.5479 13.0889 20.5964 13.0889 21.9363C13.0889 23.2762 14.1559 24.3247 15.5193 24.3247C16.8828 24.3247 17.9498 23.2762 17.9498 21.9363C17.9498 20.6547 16.8828 19.5479 15.5193 19.5479ZM13.2061 28.4028C13.2061 27.1794 14.2731 26.1309 15.518 26.1309C16.8221 26.1309 17.8299 27.1794 17.8299 28.4028C17.8299 29.6261 16.7629 30.6747 15.518 30.6747C14.2731 30.6747 13.2061 29.6261 13.2061 28.4028ZM21.9212 6.44141C20.4392 6.44141 19.1943 7.66476 19.1943 9.12112C19.1943 10.5775 20.4392 11.8008 21.9212 11.8008C23.4032 11.8008 24.6481 10.5775 24.6481 9.12112C24.6481 7.66476 23.4032 6.44141 21.9212 6.44141ZM19.0732 15.5872C19.0732 14.0144 20.3774 12.791 21.9187 12.791C23.46 12.791 24.7641 14.0144 24.7641 15.5872C24.7641 17.1601 23.46 18.3835 21.9187 18.3835C20.3181 18.3835 19.0732 17.1019 19.0732 15.5872ZM21.9212 19.2568C20.4392 19.2568 19.1943 20.4802 19.1943 21.9366C19.1943 23.3929 20.4392 24.6163 21.9212 24.6163C23.4032 24.6163 24.6481 23.3929 24.6481 21.9366C24.6481 20.4802 23.4032 19.2568 21.9212 19.2568ZM25.3584 15.5289C25.3584 13.7813 26.8404 12.4414 28.5002 12.4414C30.1601 12.4414 31.5235 13.7813 31.6421 15.5289C31.6421 17.2765 30.2786 18.6164 28.5002 18.6164C26.7218 18.6164 25.3584 17.16 25.3584 15.5289ZM9.0582 7.02344C7.93188 7.02344 6.9834 7.95551 6.9834 9.06235C6.9834 10.1692 7.93188 11.1013 9.0582 11.1013C10.1845 11.1013 11.133 10.1692 11.133 9.06235C11.133 7.95551 10.2438 7.02344 9.0582 7.02344ZM6.8623 15.5285C6.8623 14.3051 7.81078 13.373 9.05566 13.373C10.3005 13.373 11.249 14.3051 11.249 15.5285C11.249 16.7518 10.3005 17.6839 9.05566 17.6839C7.81078 17.6839 6.8623 16.7518 6.8623 15.5285ZM9.0582 19.8398C7.93188 19.8398 6.9834 20.7719 6.9834 21.8788C6.9834 22.9856 7.93188 23.9177 9.0582 23.9177C10.1845 23.9177 11.133 22.9856 11.133 21.8788C11.133 20.7719 10.2438 19.8398 9.0582 19.8398ZM0.698242 15.587C0.698242 14.5384 1.52816 13.7228 2.5952 13.7228C3.66224 13.7228 4.49216 14.5384 4.49216 15.587C4.49216 16.6355 3.66224 17.4511 2.5952 17.4511C1.52816 17.4511 0.698242 16.6355 0.698242 15.587Z"
											fill="white" />
										<path
											d="M55.2343 11.5703C54.9972 11.5703 54.8193 11.8033 54.8193 11.9781V28.1147C54.8193 28.3477 55.0565 28.5224 55.2343 28.5224H57.1905C57.4277 28.5224 57.6055 28.2894 57.6055 28.1147V11.9781C57.6055 11.7451 57.3684 11.5703 57.1905 11.5703H55.2343Z"
											fill="white" />
										<path
											d="M56.3022 4.75391C55.2352 4.75391 54.4053 5.56947 54.4053 6.61806C54.4053 7.66664 55.2352 8.48221 56.3022 8.48221C57.3693 8.48221 58.1992 7.66664 58.1992 6.61806C58.1992 5.56947 57.31 4.75391 56.3022 4.75391Z"
											fill="white" />
										<path
											d="M97.3241 11.5703C97.087 11.5703 96.9092 11.8033 96.9092 11.9781V28.1147C96.9092 28.3477 97.1463 28.5224 97.3241 28.5224H99.2804C99.5175 28.5224 99.6953 28.2894 99.6953 28.1147V11.9781C99.6953 11.7451 99.4582 11.5703 99.2804 11.5703H97.3241Z"
											fill="white" />
										<path
											d="M98.271 4.75391C97.2039 4.75391 96.374 5.56947 96.374 6.61806C96.374 7.66664 97.2039 8.48221 98.271 8.48221C99.338 8.48221 100.168 7.66664 100.168 6.61806C100.168 5.56947 99.338 4.75391 98.271 4.75391Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M118.289 26.756C118.276 26.8126 118.246 26.881 118.174 26.9494C118.174 27.0659 118.05 27.1824 117.803 27.1242L117.898 27.2334C117.886 27.2382 117.874 27.241 117.865 27.241H117.68L117.68 27.2407H117.433V27.0663V26.542H117.865C117.988 26.542 118.112 26.542 118.174 26.6585C118.246 26.6585 118.276 26.699 118.289 26.756ZM117.433 27.2407H117.371V27.765H117.124V26.3086H117.68H117.927C118.05 26.3086 118.174 26.4251 118.174 26.4251C118.297 26.4251 118.297 26.5416 118.297 26.5416V26.6581C118.297 26.6822 118.297 26.7162 118.289 26.756C118.297 26.7958 118.297 26.8437 118.297 26.8915C118.297 27.008 118.297 27.1245 118.174 27.1245C118.101 27.1245 118.029 27.1645 117.969 27.1976C117.943 27.2122 117.919 27.2255 117.898 27.2334L118.359 27.765H118.112L117.68 27.241H117.433V27.2407Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M116.351 27.0664C116.351 26.3674 117.003 25.7266 117.714 25.7266C118.485 25.7266 119.077 26.3091 119.077 27.0664C119.077 27.7655 118.425 28.4063 117.714 28.4063C117.003 28.4063 116.351 27.7655 116.351 27.0664ZM116.468 27.0661C116.468 27.7652 117.001 28.2895 117.713 28.2895C118.365 28.2895 118.958 27.7652 118.958 27.0661C118.958 26.3671 118.424 25.8428 117.713 25.8428C117.001 25.8428 116.468 26.3671 116.468 27.0661Z"
											fill="white" />
										<path
											d="M71.5346 14.1918C71.7717 14.1918 71.9496 13.9588 71.9496 13.7841V11.8617C71.9496 11.6286 71.7124 11.4539 71.5346 11.4539H67.3257V5.27888C67.3257 5.04586 67.0886 4.87109 66.9108 4.87109H64.9545C64.7174 4.87109 64.5396 5.10411 64.5396 5.27888V11.4539H62.4648C62.2276 11.4539 62.0498 11.6869 62.0498 11.8617V13.7841C62.0498 14.0171 62.2869 14.1918 62.4648 14.1918H64.5396V23.5126C64.5396 26.3671 66.4958 28.2312 69.3412 28.2312H71.416C71.6532 28.2312 71.831 27.9982 71.831 27.8235V25.901C71.831 25.668 71.5939 25.4933 71.416 25.4933H69.6376C68.2742 25.4933 67.3257 24.5612 67.3257 23.1048V14.1336H71.5346V14.1918Z"
											fill="white" />
										<path
											d="M113.152 14.1918C113.389 14.1918 113.567 13.9588 113.567 13.7841V11.8617C113.567 11.6286 113.33 11.4539 113.152 11.4539H108.943V5.27888C108.943 5.04586 108.706 4.87109 108.528 4.87109H106.572C106.335 4.87109 106.157 5.10411 106.157 5.27888V11.4539H104.082C103.845 11.4539 103.667 11.6869 103.667 11.8617V13.7841C103.667 14.0171 103.904 14.1918 104.082 14.1918H106.157V23.5126C106.157 26.3671 108.113 28.2312 110.958 28.2312H113.033C113.27 28.2312 113.448 27.9982 113.448 27.8235V25.901C113.448 25.668 113.211 25.4933 113.033 25.4933H111.136C109.773 25.4933 108.824 24.5612 108.824 23.1048V14.1336H113.093L113.152 14.1918Z"
											fill="white" />
										<path
											d="M42.7857 14.1907V27.9388C42.7857 28.1718 43.0228 28.3466 43.2006 28.3466H45.1569C45.394 28.3466 45.5718 28.1136 45.5718 27.9388V14.1907H50.1957C50.4328 14.1907 50.6106 13.9577 50.6106 13.7829V11.8605C50.6106 11.6275 50.3735 11.4527 50.1957 11.4527H45.5718V7.84092C45.5718 6.38455 46.6389 5.39422 47.8837 5.39422H50.1957C50.4328 5.39422 50.6106 5.1612 50.6106 4.98644V3.06403C50.6106 2.83101 50.3735 2.65625 50.1957 2.65625H48.0023C45.0976 2.65625 42.7857 5.04469 42.7857 7.78266V11.4527H40.7109C40.4737 11.4527 40.2959 11.6857 40.2959 11.8605V13.7829C40.2959 14.0159 40.533 14.1907 40.7109 14.1907H42.7857Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M84.6369 10.9277C86.9488 10.9277 89.1422 11.8598 90.6835 13.4909C92.2247 15.1221 93.0547 17.394 93.0547 19.899C93.0547 26.1322 88.7272 28.9284 84.5776 28.9284C80.3687 28.9284 76.1006 26.1905 76.1006 19.899V2.94685C76.1006 2.77208 76.2784 2.53906 76.5155 2.53906H78.4718C78.6496 2.53906 78.8867 2.71383 78.8867 2.94685V13.1997C80.2502 11.8598 82.4435 10.9277 84.6369 10.9277ZM78.8271 19.9575C78.8271 23.045 80.3684 26.3073 84.5773 26.3073C88.7862 26.3073 90.2682 23.045 90.3275 19.9575C90.3275 16.2292 88.0155 13.666 84.5773 13.666C81.1391 13.666 78.8271 16.171 78.8271 19.9575Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={119} height={37} viewBox="0 0 119 37"
										fill="none">
										<path fillRule="evenodd" clipRule="evenodd"
											d="M33.2946 24.8799C33.4715 25.2916 33.6485 25.762 33.8254 26.2325C34.3563 27.5851 34.4743 28.8789 34.2973 30.1728C33.8844 32.878 32.1149 35.2304 29.5195 36.2889C28.5758 36.7006 27.573 36.877 26.5113 36.877C26.2163 36.877 25.8624 36.877 25.5675 36.8182C24.3288 36.7006 23.0901 36.289 21.8515 35.5832C20.3768 34.7599 18.9022 33.5249 17.2506 31.7606C15.599 33.5249 14.1834 34.7599 12.6498 35.5832C11.4111 36.289 10.1724 36.6418 8.93372 36.8182C8.7863 36.8182 8.62414 36.8329 8.46198 36.8476L8.46184 36.8476C8.29963 36.8623 8.13742 36.877 7.98996 36.877C6.92823 36.877 5.92548 36.7006 4.98172 36.2889C2.44536 35.2304 0.557842 32.9368 0.144947 30.1728C-0.0320086 28.8201 0.144947 27.5263 0.616827 26.2325C0.793782 25.7032 0.970738 25.2916 1.14769 24.8799C1.44262 24.233 1.73754 23.5861 1.97348 22.998L2.03247 22.9392C4.62781 17.4111 7.34113 11.8242 10.1724 6.29609L10.2904 6.06086C10.5853 5.53159 10.8802 4.94351 11.1751 4.35544L11.1752 4.35538C11.2546 4.23092 11.334 4.10429 11.4143 3.97632L11.4143 3.97632L11.4143 3.97631C11.7513 3.4391 12.1031 2.8783 12.5318 2.35586C13.7705 0.944427 15.4221 0.121094 17.2506 0.121094C19.0202 0.121094 20.7307 0.944427 21.9104 2.41466C22.5003 3.06157 22.9132 3.76728 23.2671 4.41419L23.2671 4.41429C23.5621 5.00235 23.857 5.59041 24.1519 6.11966L24.2698 6.3549C27.1601 11.883 29.8734 17.4699 32.4098 22.998H32.4688C32.7047 23.5861 32.9996 24.233 33.2946 24.8799ZM62.3168 9.35455C62.3168 10.7072 61.255 11.7657 59.8984 11.7657C58.5417 11.7657 57.48 10.7072 57.48 9.35455C57.48 8.00193 58.5417 6.94336 59.8984 6.94336C61.314 7.00217 62.3168 8.06074 62.3168 9.35455ZM52.4653 14.1761V14.7642C52.4653 14.7642 51.3445 13.2939 48.8672 13.2939C44.8562 13.2939 41.73 16.352 41.73 20.5863C41.73 24.7618 44.8562 27.8787 48.8672 27.8787C51.3445 27.8787 52.4653 26.3497 52.4653 26.3497V26.9966C52.4653 27.2906 52.7012 27.5258 52.9961 27.5258H56.0044V13.6468H52.9961C52.6422 13.6468 52.4653 13.882 52.4653 14.1761ZM49.457 24.5274C50.8136 24.5274 51.9344 23.8217 52.4652 22.9983V18.0583C51.9344 17.2938 50.7547 16.5293 49.457 16.5293C47.0976 16.5293 45.269 17.9995 45.269 20.5283C45.269 23.0572 47.0976 24.5274 49.457 24.5274ZM58.1284 13.6475H61.6675V27.4677H58.1284V13.6475ZM107.437 14.7648C107.437 14.7648 108.617 13.2946 111.035 13.2946C115.046 13.2946 118.172 16.3527 118.172 20.5281C118.172 24.7036 115.046 27.8205 111.035 27.8205C108.558 27.8205 107.437 26.2915 107.437 26.2915V26.9384C107.437 27.2324 107.201 27.4677 106.906 27.4677H103.898V7.00195H107.437V14.7648ZM110.445 24.4678C109.089 24.4678 108.027 23.7621 107.437 22.9388V17.9988C107.968 17.2343 109.148 16.4697 110.445 16.4697C112.805 16.4697 114.633 17.94 114.633 20.4688C114.633 22.9976 112.805 24.4678 110.445 24.4678ZM102.072 27.5258V19.2925C102.072 16.9401 101.6 15.6463 100.42 14.6466C99.3586 13.7644 98.0609 13.2939 96.5273 13.2939C95.1707 13.2939 93.814 13.7056 92.7523 14.7642V14.1761C92.7523 13.882 92.5163 13.6468 92.2214 13.6468H89.3901V27.5258H92.9292V17.8811C93.6371 17.0578 94.7578 16.5285 95.8195 16.5285C97.766 16.5285 98.5328 17.4106 98.5328 19.7042V27.5258H102.072ZM80.7775 13.2944C78.3591 13.2944 77.1794 14.7647 77.1794 14.7647V7.00181H73.6403V27.4675H76.6486C76.9435 27.4675 77.1794 27.2323 77.1794 26.9382V26.2913C77.1794 26.2913 78.3002 27.8204 80.7775 27.8204C84.7885 27.8204 87.9147 24.7035 87.9147 20.528C87.9737 16.3525 84.8475 13.2944 80.7775 13.2944ZM77.1792 22.9388C77.7691 23.7621 78.8308 24.4678 80.1874 24.4678C82.5468 24.4678 84.3754 22.9976 84.3754 20.4688C84.3754 17.94 82.5468 16.4697 80.1874 16.4697C78.8898 16.4697 77.7101 17.2343 77.1792 17.9988V22.9388ZM70.6336 13.2939C71.6953 13.2939 72.2852 13.4704 72.2852 13.4704V16.7637C72.2852 16.7637 69.3359 15.7639 67.5074 17.8811V27.5258H63.9683V13.6468H66.9765C67.2714 13.6468 67.5074 13.882 67.5074 14.1761V14.7642C68.0972 13.9997 69.5129 13.2939 70.6336 13.2939ZM17.1916 28.1144C15.1861 25.5856 13.8885 23.2332 13.4756 21.2925C13.2986 20.4692 13.2396 19.7047 13.3576 19.0578C13.4166 18.4697 13.6525 17.9404 13.9475 17.5287C14.6553 16.5289 15.835 15.882 17.1916 15.882C18.5483 15.882 19.787 16.4701 20.4358 17.5287C20.7307 17.9992 20.9667 18.4697 21.0257 19.0578C21.1436 19.7047 21.0846 20.4692 20.9077 21.2925C20.4948 23.2332 19.1971 25.5856 17.1916 28.1144ZM28.5738 34.1717C30.4023 33.466 31.7 31.8194 31.936 29.8787C32.0539 28.8789 31.936 27.9967 31.759 27.0558C31.6951 26.8648 31.614 26.6737 31.5249 26.464C31.4494 26.2864 31.3683 26.0954 31.2871 25.8796C31.1397 25.5856 31.0069 25.2768 30.8742 24.9681C30.7415 24.6593 30.6088 24.3506 30.4613 24.0565V23.9977C27.925 18.5284 25.2117 12.9415 22.3804 7.47223L22.2624 7.23699C21.9675 6.64889 21.6726 6.0608 21.3776 5.53151C21.0827 4.94342 20.7288 4.35532 20.3159 3.88485C19.5491 3.0027 18.4874 2.53223 17.3666 2.53223C16.2459 2.53223 15.1842 3.0027 14.4174 3.88485C14.0045 4.41413 13.6506 4.94342 13.3557 5.53151L13.3556 5.5316C13.0607 6.11966 12.7658 6.70773 12.4709 7.23699L12.3529 7.47223C9.46264 12.9415 6.74933 18.5284 4.21297 23.9977L4.15399 24.0565C3.85906 24.6446 3.56413 25.2915 3.32819 25.8796C3.15124 26.2913 2.97428 26.7029 2.85631 27.0558C2.44342 28.1144 2.38443 28.9965 2.5024 29.9375C2.73834 31.8194 4.03602 33.466 5.86455 34.2306C6.69034 34.5246 7.6341 34.701 8.63685 34.5834C9.58061 34.4658 10.5244 34.1717 11.4681 33.6425C12.7658 32.8779 14.1225 31.7606 15.6561 30.0551C13.2377 27.0558 11.7041 24.2917 11.1732 21.8806C10.8783 20.7632 10.8193 19.7046 10.9963 18.7637C11.1732 17.8227 11.4681 16.9994 11.999 16.2348C13.1197 14.647 15.0662 13.6472 17.1897 13.6472C19.3131 13.6472 21.2597 14.5882 22.3804 16.2348C22.9112 16.9994 23.2062 17.8227 23.3831 18.7637C23.5011 19.7046 23.4421 20.7632 23.2062 21.8806C22.6163 24.2917 21.1417 26.997 18.7233 29.9963C20.2569 31.7017 21.5546 32.8191 22.9112 33.5837C23.914 34.1129 24.7988 34.407 25.7425 34.5246C26.7453 34.6422 27.689 34.5246 28.5738 34.1717Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={136} height={39} viewBox="0 0 136 39"
										fill="none">
										<path
											d="M24.7247 3.43111C24.184 1.65952 22.2916 0.70559 20.5343 1.25069C18.777 1.7958 17.8308 3.70366 18.3715 5.47524L27.0227 32.3216C27.631 33.9569 29.3882 34.9108 31.0779 34.4339C32.8352 33.8888 33.9166 32.049 33.3759 30.2775C33.3759 30.2093 24.7247 3.43111 24.7247 3.43111Z"
											fill="white" />
										<path
											d="M11.3419 7.86079C10.8012 6.08921 8.90876 5.13528 7.1515 5.68038C5.39424 6.22548 4.44802 8.13335 4.98871 9.90493L13.6399 36.7513C14.2481 38.3866 16.0054 39.3405 17.6951 38.8636C19.4523 38.3184 20.5337 36.4787 19.993 34.7071C19.993 34.639 11.3419 7.86079 11.3419 7.86079Z"
											fill="white" />
										<path
											d="M35.6731 25.7103C37.4304 25.1652 38.3766 23.2574 37.8359 21.4858C37.2952 19.7142 35.4028 18.7603 33.6455 19.3054L6.94861 27.9589C5.32652 28.5721 4.3803 30.3437 4.85341 32.0472C5.39411 33.8188 7.21896 34.909 8.97622 34.3639C9.1114 34.3639 35.6731 25.7103 35.6731 25.7103Z"
											fill="white" />
										<path
											d="M12.4907 33.2751C14.248 32.7299 16.4783 31.9804 18.8439 31.1628C18.3032 29.3912 17.5597 27.1426 16.7487 24.7578L10.3955 26.8701L12.4907 33.2751Z"
											fill="white" />
										<path
											d="M25.9399 28.8454C28.3731 28.0277 30.6034 27.3463 32.2931 26.7331C31.7524 24.9615 31.009 22.713 30.1979 20.3281L23.8447 22.4404L25.9399 28.8454Z"
											fill="white" />
										<path
											d="M31.2794 12.1518C33.0366 11.6066 33.9828 9.69879 33.4421 7.9272C32.9014 6.15561 31.009 5.20168 29.2517 5.74679L2.62244 14.4684C1.00035 15.0817 0.0541306 16.8533 0.52724 18.5567C1.06794 20.3964 2.89279 21.4866 4.65005 20.8734C4.71764 20.8734 31.2794 12.1518 31.2794 12.1518Z"
											fill="white" />
										<path
											d="M8.16453 19.7165C9.9218 19.1714 12.1522 18.4218 14.5177 17.6042C13.7067 15.1512 13.0308 12.9027 12.4225 11.1992L6.06934 13.3115L8.16453 19.7165Z"
											fill="white" />
										<path
											d="M21.5473 15.3532C23.9805 14.5355 26.2109 13.8541 27.9005 13.2409C27.0895 10.7879 26.4136 8.53939 25.8053 6.83594L19.4521 8.94821L21.5473 15.3532Z"
											fill="white" />
										<path
											d="M62.6395 10.5177C63.7885 11.0628 63.9237 11.4035 62.9774 13.1751C62.0312 15.0148 61.8285 15.0829 60.6119 14.606C59.125 13.9927 57.3001 13.5157 56.0836 13.5157C54.1235 13.5157 52.8394 14.1971 52.8394 15.2873C52.8394 18.8305 64.1264 16.9226 64.1264 24.5541C64.1264 28.3698 60.8822 30.8909 56.016 30.8909C53.4477 30.8909 50.2711 30.0051 48.1083 28.9149C47.0269 28.3698 46.9593 28.0291 47.9055 26.1894C48.7166 24.6222 48.9869 24.4178 50.1359 24.8948C52.0283 25.7124 54.3263 26.3257 55.9484 26.3257C57.7732 26.3257 58.9222 25.5762 58.9222 24.486C58.9222 21.0109 47.4324 22.6462 47.4324 15.2873C47.4324 11.4035 50.6766 8.74609 55.4753 8.74609C57.7732 8.95051 60.6795 9.63189 62.6395 10.5177Z"
											fill="white" />
										<path
											d="M71.7645 1.52218V29.8676C71.7645 30.2764 71.2914 30.7533 70.6832 30.7533H67.7093C67.0335 30.7533 66.6279 30.2764 66.6279 29.8676V1.52218C66.6279 0.0912827 67.0335 0.0231448 69.1962 0.0231448C71.6294 -0.0449932 71.7645 0.159421 71.7645 1.52218Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M92.7151 29.595V17.3983C92.7151 12.0836 89.133 8.94922 83.4557 8.94922C80.8874 8.94922 78.0488 9.76687 76.0211 11.1296C74.9397 11.811 74.9397 12.1517 76.0211 13.8551C77.1701 15.5586 77.3729 15.6267 78.4543 15.0135C79.806 14.1958 81.4957 13.6507 82.915 13.6507C85.8889 13.6507 87.6461 15.0135 87.6461 17.262V18.6929C86.2268 18.0797 84.4695 17.739 82.5771 17.739C77.5081 17.739 74.1963 20.4645 74.1963 24.5528C74.1963 28.3685 77.1701 30.9578 81.5633 30.9578C83.8612 30.9578 86.1592 30.0038 87.7137 28.2323L87.6461 29.5269C87.5785 30.2083 88.0516 30.6852 88.7275 30.6852H91.6338C92.242 30.6852 92.7151 30.2764 92.7151 29.595ZM82.1713 26.8698C80.3464 26.8698 79.1299 25.9158 79.1299 24.4849C79.1299 22.7133 80.9547 21.3506 83.6582 21.3506C84.9424 21.3506 86.4293 21.555 87.5783 22.032V23.9398C86.4293 25.7796 84.4017 26.8698 82.1713 26.8698Z"
											fill="white" />
										<path
											d="M112.79 10.5836C113.871 11.1968 113.871 11.5375 112.722 13.3772C111.641 15.0807 111.438 15.217 110.221 14.6037C109.343 14.1268 107.856 13.7179 106.707 13.7179C102.99 13.7179 100.556 16.1709 100.556 19.9185C100.556 23.8023 102.99 26.3916 106.707 26.3916C107.991 26.3916 109.613 25.9146 110.627 25.3014C111.708 24.6881 111.911 24.6881 113.06 26.3916C114.074 27.9588 114.074 28.2994 113.128 28.9808C111.505 30.1392 108.87 31.025 106.572 31.025C99.7453 31.025 95.1494 26.596 95.1494 19.9866C95.1494 13.3772 99.7453 9.01641 106.639 9.01641C108.802 8.94827 111.235 9.62965 112.79 10.5836Z"
											fill="white" />
										<path
											d="M135.162 28.0281C136.04 29.1183 135.702 29.5272 133.54 30.2767C131.377 31.0943 131.039 31.0262 130.295 30.0041L124.145 21.7594L121.374 24.4168V29.7997C121.374 30.2085 120.901 30.6855 120.293 30.6855H117.319C116.643 30.6855 116.237 30.2085 116.237 29.7997V1.52247C116.237 0.0915754 116.643 0.0234375 118.806 0.0234375C121.306 0.0234375 121.374 0.227851 121.374 1.52247V17.603L129.755 9.49461C130.701 8.60882 131.174 8.67695 132.864 9.76716C134.689 10.9255 134.824 11.2662 133.945 12.152L127.727 18.2844L135.162 28.0281Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={119} height={37} viewBox="0 0 119 37"
										fill="none">
										<path fillRule="evenodd" clipRule="evenodd"
											d="M33.5255 24.8799C33.7025 25.2916 33.8794 25.762 34.0564 26.2325C34.5872 27.5851 34.7052 28.8789 34.5283 30.1728C34.1154 32.878 32.3458 35.2304 29.7505 36.2889C28.8067 36.7006 27.804 36.877 26.7422 36.877C26.4473 36.877 26.0934 36.877 25.7985 36.8182C24.5598 36.7006 23.3211 36.289 22.0824 35.5832C20.6078 34.7599 19.1332 33.5249 17.4816 31.7606C15.83 33.5249 14.4144 34.7599 12.8807 35.5832C11.6421 36.289 10.4034 36.6418 9.16468 36.8182C9.01726 36.8182 8.8551 36.8329 8.69294 36.8476L8.6928 36.8476C8.53059 36.8623 8.36838 36.877 8.22092 36.877C7.15919 36.877 6.15644 36.7006 5.21268 36.2889C2.67632 35.2304 0.788799 32.9368 0.375904 30.1728C0.198948 28.8201 0.375904 27.5263 0.847784 26.2325C1.02474 25.7032 1.20169 25.2916 1.37865 24.8799C1.67358 24.233 1.9685 23.5861 2.20444 22.998L2.26343 22.9392C4.85877 17.4111 7.57208 11.8242 10.4034 6.29609L10.5213 6.06086C10.8163 5.53159 11.1112 4.94351 11.4061 4.35544L11.4061 4.35538C11.4855 4.23092 11.565 4.10429 11.6453 3.97632L11.6453 3.97632L11.6453 3.97631C11.9823 3.4391 12.334 2.8783 12.7628 2.35586C14.0015 0.944427 15.653 0.121094 17.4816 0.121094C19.2511 0.121094 20.9617 0.944427 22.1414 2.41466C22.7312 3.06157 23.1441 3.76728 23.4981 4.41419L23.4981 4.41429C23.793 5.00235 24.0879 5.59041 24.3828 6.11966L24.5008 6.3549C27.3911 11.883 30.1044 17.4699 32.6407 22.998H32.6997C32.9357 23.5861 33.2306 24.233 33.5255 24.8799ZM62.5458 9.35455C62.5458 10.7072 61.484 11.7657 60.1274 11.7657C58.7707 11.7657 57.709 10.7072 57.709 9.35455C57.709 8.00193 58.7707 6.94336 60.1274 6.94336C61.543 7.00217 62.5458 8.06074 62.5458 9.35455ZM52.6962 14.1761V14.7642C52.6962 14.7642 51.5755 13.2939 49.0981 13.2939C45.0871 13.2939 41.9609 16.352 41.9609 20.5863C41.9609 24.7618 45.0871 27.8787 49.0981 27.8787C51.5755 27.8787 52.6962 26.3497 52.6962 26.3497V26.9966C52.6962 27.2906 52.9322 27.5258 53.2271 27.5258H56.2353V13.6468H53.2271C52.8732 13.6468 52.6962 13.882 52.6962 14.1761ZM49.6879 24.5274C51.0446 24.5274 52.1653 23.8217 52.6962 22.9983V18.0583C52.1653 17.2938 50.9856 16.5293 49.6879 16.5293C47.3285 16.5293 45.5 17.9995 45.5 20.5283C45.5 23.0572 47.3285 24.5274 49.6879 24.5274ZM58.3574 13.6475H61.8965V27.4677H58.3574V13.6475ZM107.67 14.7647C107.67 14.7647 108.849 13.2944 111.268 13.2944C115.279 13.2944 118.405 16.3525 118.405 20.528C118.405 24.7035 115.279 27.8204 111.268 27.8204C108.79 27.8204 107.67 26.2913 107.67 26.2913V26.9382C107.67 27.2323 107.434 27.4675 107.139 27.4675H104.131V7.00181H107.67V14.7647ZM110.678 24.4678C109.322 24.4678 108.26 23.7621 107.67 22.9388V17.9988C108.201 17.2343 109.38 16.4697 110.678 16.4697C113.038 16.4697 114.866 17.94 114.866 20.4688C114.866 22.9976 113.038 24.4678 110.678 24.4678ZM102.303 27.5258V19.2925C102.303 16.9401 101.831 15.6463 100.651 14.6466C99.5896 13.7644 98.2919 13.2939 96.7583 13.2939C95.4016 13.2939 94.045 13.7056 92.9832 14.7642V14.1761C92.9832 13.882 92.7473 13.6468 92.4524 13.6468H89.6211V27.5258H93.1602V17.8811C93.868 17.0578 94.9887 16.5285 96.0505 16.5285C97.997 16.5285 98.7638 17.4106 98.7638 19.7042V27.5258H102.303ZM81.0085 13.2944C78.5901 13.2944 77.4104 14.7647 77.4104 14.7647V7.00181H73.8713V27.4675H76.8795C77.1745 27.4675 77.4104 27.2323 77.4104 26.9382V26.2913C77.4104 26.2913 78.5311 27.8204 81.0085 27.8204C85.0195 27.8204 88.1457 24.7035 88.1457 20.528C88.2047 16.3525 85.0785 13.2944 81.0085 13.2944ZM77.4102 22.9388C78 23.7621 79.0617 24.4678 80.4184 24.4678C82.7778 24.4678 84.6063 22.9976 84.6063 20.4688C84.6063 17.94 82.7778 16.4697 80.4184 16.4697C79.1207 16.4697 77.941 17.2343 77.4102 17.9988V22.9388ZM70.8626 13.2939C71.9243 13.2939 72.5142 13.4704 72.5142 13.4704V16.7637C72.5142 16.7637 69.5649 15.7639 67.7364 17.8811V27.5258H64.1973V13.6468H67.2055C67.5004 13.6468 67.7364 13.882 67.7364 14.1761V14.7642C68.3262 13.9997 69.7419 13.2939 70.8626 13.2939ZM17.4226 28.1144C15.4171 25.5856 14.1194 23.2332 13.7065 21.2925C13.5296 20.4692 13.4706 19.7047 13.5886 19.0578C13.6475 18.4697 13.8835 17.9404 14.1784 17.5287C14.8862 16.5289 16.0659 15.882 17.4226 15.882C18.7792 15.882 20.0179 16.4701 20.6668 17.5287C20.9617 17.9992 21.1976 18.4697 21.2566 19.0578C21.3746 19.7047 21.3156 20.4692 21.1386 21.2925C20.7258 23.2332 19.4281 25.5856 17.4226 28.1144ZM28.8067 34.1718C30.6352 33.4661 31.9329 31.8194 32.1689 29.8787C32.2868 28.879 32.1689 27.9968 31.9919 27.0559C31.928 26.8648 31.8469 26.6738 31.7578 26.4641C31.6823 26.2865 31.6012 26.0954 31.52 25.8797C31.3726 25.5856 31.2398 25.2769 31.1071 24.9681C30.9744 24.6594 30.8417 24.3506 30.6942 24.0566V23.9978C28.1579 18.5285 25.4446 12.9416 22.6133 7.47228L22.4953 7.23705L22.4953 7.23702C22.2004 6.64893 21.9054 6.06085 21.6105 5.53157C21.3156 4.94347 20.9617 4.35538 20.5488 3.8849C19.782 3.00276 18.7203 2.53228 17.5995 2.53228C16.4788 2.53228 15.4171 3.00276 14.6503 3.8849C14.2374 4.41419 13.8835 4.94347 13.5886 5.53157C13.2936 6.11966 12.9987 6.70776 12.7038 7.23705L12.5858 7.47228C9.69555 12.9416 6.98223 18.5285 4.44587 23.9978L4.38689 24.0566C4.09196 24.6447 3.79704 25.2916 3.5611 25.8797C3.38414 26.2913 3.20719 26.703 3.08922 27.0559C2.67632 28.1144 2.61734 28.9966 2.73531 29.9375C2.97125 31.8194 4.26892 33.4661 6.09746 34.2306C6.92325 34.5247 7.86701 34.7011 8.86975 34.5835C9.81351 34.4659 10.7573 34.1718 11.701 33.6425C12.9987 32.878 14.3554 31.7606 15.889 30.0551C13.4706 27.0559 11.937 24.2918 11.4061 21.8806C11.1112 20.7632 11.0522 19.7047 11.2292 18.7637C11.4061 17.8228 11.701 16.9994 12.2319 16.2349C13.3526 14.647 15.2991 13.6473 17.4226 13.6473C19.5461 13.6473 21.4926 14.5882 22.6133 16.2349C23.1441 16.9994 23.4391 17.8228 23.616 18.7637C23.734 19.7047 23.675 20.7632 23.4391 21.8806C22.8492 24.2918 21.3746 26.997 18.9562 29.9963C20.4898 31.7018 21.7875 32.8192 23.1441 33.5837C24.1469 34.113 25.0317 34.407 25.9754 34.5247C26.9782 34.6423 27.9219 34.5247 28.8067 34.1718Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={136} height={39} viewBox="0 0 136 39"
										fill="none">
										<path
											d="M24.7247 3.43111C24.184 1.65952 22.2916 0.70559 20.5343 1.25069C18.777 1.7958 17.8308 3.70366 18.3715 5.47524L27.0227 32.3216C27.631 33.9569 29.3882 34.9108 31.0779 34.4339C32.8352 33.8888 33.9166 32.049 33.3759 30.2775C33.3759 30.2093 24.7247 3.43111 24.7247 3.43111Z"
											fill="white" />
										<path
											d="M11.3419 7.86079C10.8012 6.08921 8.90876 5.13528 7.1515 5.68038C5.39424 6.22548 4.44802 8.13335 4.98871 9.90493L13.6399 36.7513C14.2481 38.3866 16.0054 39.3405 17.6951 38.8636C19.4523 38.3184 20.5337 36.4787 19.993 34.7071C19.993 34.639 11.3419 7.86079 11.3419 7.86079Z"
											fill="white" />
										<path
											d="M35.6731 25.7103C37.4304 25.1652 38.3766 23.2574 37.8359 21.4858C37.2952 19.7142 35.4028 18.7603 33.6455 19.3054L6.94861 27.9589C5.32652 28.5721 4.3803 30.3437 4.85341 32.0472C5.39411 33.8188 7.21896 34.909 8.97622 34.3639C9.1114 34.3639 35.6731 25.7103 35.6731 25.7103Z"
											fill="white" />
										<path
											d="M12.4907 33.2751C14.248 32.7299 16.4783 31.9804 18.8439 31.1628C18.3032 29.3912 17.5597 27.1426 16.7487 24.7578L10.3955 26.8701L12.4907 33.2751Z"
											fill="white" />
										<path
											d="M25.9399 28.8454C28.3731 28.0277 30.6034 27.3463 32.2931 26.7331C31.7524 24.9615 31.009 22.713 30.1979 20.3281L23.8447 22.4404L25.9399 28.8454Z"
											fill="white" />
										<path
											d="M31.2794 12.1518C33.0366 11.6066 33.9828 9.69879 33.4421 7.9272C32.9014 6.15561 31.009 5.20168 29.2517 5.74679L2.62244 14.4684C1.00035 15.0817 0.0541306 16.8533 0.52724 18.5567C1.06794 20.3964 2.89279 21.4866 4.65005 20.8734C4.71764 20.8734 31.2794 12.1518 31.2794 12.1518Z"
											fill="white" />
										<path
											d="M8.16453 19.7165C9.9218 19.1714 12.1522 18.4218 14.5177 17.6042C13.7067 15.1512 13.0308 12.9027 12.4225 11.1992L6.06934 13.3115L8.16453 19.7165Z"
											fill="white" />
										<path
											d="M21.5473 15.3532C23.9805 14.5355 26.2109 13.8541 27.9005 13.2409C27.0895 10.7879 26.4136 8.53939 25.8053 6.83594L19.4521 8.94821L21.5473 15.3532Z"
											fill="white" />
										<path
											d="M62.6395 10.5177C63.7885 11.0628 63.9237 11.4035 62.9774 13.1751C62.0312 15.0148 61.8285 15.0829 60.6119 14.606C59.125 13.9927 57.3001 13.5157 56.0836 13.5157C54.1235 13.5157 52.8394 14.1971 52.8394 15.2873C52.8394 18.8305 64.1264 16.9226 64.1264 24.5541C64.1264 28.3698 60.8822 30.8909 56.016 30.8909C53.4477 30.8909 50.2711 30.0051 48.1083 28.9149C47.0269 28.3698 46.9593 28.0291 47.9055 26.1894C48.7166 24.6222 48.9869 24.4178 50.1359 24.8948C52.0283 25.7124 54.3263 26.3257 55.9484 26.3257C57.7732 26.3257 58.9222 25.5762 58.9222 24.486C58.9222 21.0109 47.4324 22.6462 47.4324 15.2873C47.4324 11.4035 50.6766 8.74609 55.4753 8.74609C57.7732 8.95051 60.6795 9.63189 62.6395 10.5177Z"
											fill="white" />
										<path
											d="M71.7645 1.52218V29.8676C71.7645 30.2764 71.2914 30.7533 70.6832 30.7533H67.7093C67.0335 30.7533 66.6279 30.2764 66.6279 29.8676V1.52218C66.6279 0.0912827 67.0335 0.0231448 69.1962 0.0231448C71.6294 -0.0449932 71.7645 0.159421 71.7645 1.52218Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M92.7151 29.595V17.3983C92.7151 12.0836 89.133 8.94922 83.4557 8.94922C80.8874 8.94922 78.0488 9.76687 76.0211 11.1296C74.9397 11.811 74.9397 12.1517 76.0211 13.8551C77.1701 15.5586 77.3729 15.6267 78.4543 15.0135C79.806 14.1958 81.4957 13.6507 82.915 13.6507C85.8889 13.6507 87.6461 15.0135 87.6461 17.262V18.6929C86.2268 18.0797 84.4695 17.739 82.5771 17.739C77.5081 17.739 74.1963 20.4645 74.1963 24.5528C74.1963 28.3685 77.1701 30.9578 81.5633 30.9578C83.8612 30.9578 86.1592 30.0038 87.7137 28.2323L87.6461 29.5269C87.5785 30.2083 88.0516 30.6852 88.7275 30.6852H91.6338C92.242 30.6852 92.7151 30.2764 92.7151 29.595ZM82.1713 26.8698C80.3464 26.8698 79.1299 25.9158 79.1299 24.4849C79.1299 22.7133 80.9547 21.3506 83.6582 21.3506C84.9424 21.3506 86.4293 21.555 87.5783 22.032V23.9398C86.4293 25.7796 84.4017 26.8698 82.1713 26.8698Z"
											fill="white" />
										<path
											d="M112.79 10.5836C113.871 11.1968 113.871 11.5375 112.722 13.3772C111.641 15.0807 111.438 15.217 110.221 14.6037C109.343 14.1268 107.856 13.7179 106.707 13.7179C102.99 13.7179 100.556 16.1709 100.556 19.9185C100.556 23.8023 102.99 26.3916 106.707 26.3916C107.991 26.3916 109.613 25.9146 110.627 25.3014C111.708 24.6881 111.911 24.6881 113.06 26.3916C114.074 27.9588 114.074 28.2994 113.128 28.9808C111.505 30.1392 108.87 31.025 106.572 31.025C99.7453 31.025 95.1494 26.596 95.1494 19.9866C95.1494 13.3772 99.7453 9.01641 106.639 9.01641C108.802 8.94827 111.235 9.62965 112.79 10.5836Z"
											fill="white" />
										<path
											d="M135.162 28.0281C136.04 29.1183 135.702 29.5272 133.54 30.2767C131.377 31.0943 131.039 31.0262 130.295 30.0041L124.145 21.7594L121.374 24.4168V29.7997C121.374 30.2085 120.901 30.6855 120.293 30.6855H117.319C116.643 30.6855 116.237 30.2085 116.237 29.7997V1.52247C116.237 0.0915754 116.643 0.0234375 118.806 0.0234375C121.306 0.0234375 121.374 0.227851 121.374 1.52247V17.603L129.755 9.49461C130.701 8.60882 131.174 8.67695 132.864 9.76716C134.689 10.9255 134.824 11.2662 133.945 12.152L127.727 18.2844L135.162 28.0281Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={120} height={31} viewBox="0 0 120 31"
										fill="none">
										<path fillRule="evenodd" clipRule="evenodd"
											d="M17.8299 2.59615C17.8299 3.8195 16.7629 4.86809 15.518 4.86809C14.2731 4.86809 13.2061 3.8195 13.2061 2.59615C13.2061 1.3728 14.2731 0.324219 15.518 0.324219C16.7629 0.324219 17.8299 1.3728 17.8299 2.59615ZM15.5193 6.73242C14.1559 6.73242 13.0889 7.78101 13.0889 9.12086C13.0889 10.4607 14.1559 11.5093 15.5193 11.5093C16.8828 11.5093 17.9498 10.4607 17.9498 9.12086C17.9498 7.72275 16.8828 6.73242 15.5193 6.73242ZM13.0303 15.5287C13.0303 14.1889 14.1566 13.082 15.52 13.082C16.8835 13.082 18.0691 14.1889 18.0098 15.5287C18.0098 16.8686 16.8835 17.9754 15.52 17.9754C14.1566 17.9754 13.0303 16.8686 13.0303 15.5287ZM15.5193 19.5479C14.1559 19.5479 13.0889 20.5964 13.0889 21.9363C13.0889 23.2762 14.1559 24.3247 15.5193 24.3247C16.8828 24.3247 17.9498 23.2762 17.9498 21.9363C17.9498 20.6547 16.8828 19.5479 15.5193 19.5479ZM13.2061 28.4028C13.2061 27.1794 14.2731 26.1309 15.518 26.1309C16.8221 26.1309 17.8299 27.1794 17.8299 28.4028C17.8299 29.6261 16.7629 30.6747 15.518 30.6747C14.2731 30.6747 13.2061 29.6261 13.2061 28.4028ZM21.9212 6.44141C20.4392 6.44141 19.1943 7.66476 19.1943 9.12112C19.1943 10.5775 20.4392 11.8008 21.9212 11.8008C23.4032 11.8008 24.6481 10.5775 24.6481 9.12112C24.6481 7.66476 23.4032 6.44141 21.9212 6.44141ZM19.0732 15.5872C19.0732 14.0144 20.3774 12.791 21.9187 12.791C23.46 12.791 24.7641 14.0144 24.7641 15.5872C24.7641 17.1601 23.46 18.3835 21.9187 18.3835C20.3181 18.3835 19.0732 17.1019 19.0732 15.5872ZM21.9212 19.2568C20.4392 19.2568 19.1943 20.4802 19.1943 21.9366C19.1943 23.3929 20.4392 24.6163 21.9212 24.6163C23.4032 24.6163 24.6481 23.3929 24.6481 21.9366C24.6481 20.4802 23.4032 19.2568 21.9212 19.2568ZM25.3584 15.5289C25.3584 13.7813 26.8404 12.4414 28.5002 12.4414C30.1601 12.4414 31.5235 13.7813 31.6421 15.5289C31.6421 17.2765 30.2786 18.6164 28.5002 18.6164C26.7218 18.6164 25.3584 17.16 25.3584 15.5289ZM9.0582 7.02344C7.93188 7.02344 6.9834 7.95551 6.9834 9.06235C6.9834 10.1692 7.93188 11.1013 9.0582 11.1013C10.1845 11.1013 11.133 10.1692 11.133 9.06235C11.133 7.95551 10.2438 7.02344 9.0582 7.02344ZM6.8623 15.5285C6.8623 14.3051 7.81078 13.373 9.05566 13.373C10.3005 13.373 11.249 14.3051 11.249 15.5285C11.249 16.7518 10.3005 17.6839 9.05566 17.6839C7.81078 17.6839 6.8623 16.7518 6.8623 15.5285ZM9.0582 19.8398C7.93188 19.8398 6.9834 20.7719 6.9834 21.8788C6.9834 22.9856 7.93188 23.9177 9.0582 23.9177C10.1845 23.9177 11.133 22.9856 11.133 21.8788C11.133 20.7719 10.2438 19.8398 9.0582 19.8398ZM0.698242 15.587C0.698242 14.5384 1.52816 13.7228 2.5952 13.7228C3.66224 13.7228 4.49216 14.5384 4.49216 15.587C4.49216 16.6355 3.66224 17.4511 2.5952 17.4511C1.52816 17.4511 0.698242 16.6355 0.698242 15.587Z"
											fill="white" />
										<path
											d="M55.2343 11.5703C54.9972 11.5703 54.8193 11.8033 54.8193 11.9781V28.1147C54.8193 28.3477 55.0565 28.5224 55.2343 28.5224H57.1905C57.4277 28.5224 57.6055 28.2894 57.6055 28.1147V11.9781C57.6055 11.7451 57.3684 11.5703 57.1905 11.5703H55.2343Z"
											fill="white" />
										<path
											d="M56.3022 4.75391C55.2352 4.75391 54.4053 5.56947 54.4053 6.61806C54.4053 7.66664 55.2352 8.48221 56.3022 8.48221C57.3693 8.48221 58.1992 7.66664 58.1992 6.61806C58.1992 5.56947 57.31 4.75391 56.3022 4.75391Z"
											fill="white" />
										<path
											d="M97.3241 11.5703C97.087 11.5703 96.9092 11.8033 96.9092 11.9781V28.1147C96.9092 28.3477 97.1463 28.5224 97.3241 28.5224H99.2804C99.5175 28.5224 99.6953 28.2894 99.6953 28.1147V11.9781C99.6953 11.7451 99.4582 11.5703 99.2804 11.5703H97.3241Z"
											fill="white" />
										<path
											d="M98.271 4.75391C97.2039 4.75391 96.374 5.56947 96.374 6.61806C96.374 7.66664 97.2039 8.48221 98.271 8.48221C99.338 8.48221 100.168 7.66664 100.168 6.61806C100.168 5.56947 99.338 4.75391 98.271 4.75391Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M118.289 26.756C118.276 26.8126 118.246 26.881 118.174 26.9494C118.174 27.0659 118.05 27.1824 117.803 27.1242L117.898 27.2334C117.886 27.2382 117.874 27.241 117.865 27.241H117.68L117.68 27.2407H117.433V27.0663V26.542H117.865C117.988 26.542 118.112 26.542 118.174 26.6585C118.246 26.6585 118.276 26.699 118.289 26.756ZM117.433 27.2407H117.371V27.765H117.124V26.3086H117.68H117.927C118.05 26.3086 118.174 26.4251 118.174 26.4251C118.297 26.4251 118.297 26.5416 118.297 26.5416V26.6581C118.297 26.6822 118.297 26.7162 118.289 26.756C118.297 26.7958 118.297 26.8437 118.297 26.8915C118.297 27.008 118.297 27.1245 118.174 27.1245C118.101 27.1245 118.029 27.1645 117.969 27.1976C117.943 27.2122 117.919 27.2255 117.898 27.2334L118.359 27.765H118.112L117.68 27.241H117.433V27.2407Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M116.351 27.0664C116.351 26.3674 117.003 25.7266 117.714 25.7266C118.485 25.7266 119.077 26.3091 119.077 27.0664C119.077 27.7655 118.425 28.4063 117.714 28.4063C117.003 28.4063 116.351 27.7655 116.351 27.0664ZM116.468 27.0661C116.468 27.7652 117.001 28.2895 117.713 28.2895C118.365 28.2895 118.958 27.7652 118.958 27.0661C118.958 26.3671 118.424 25.8428 117.713 25.8428C117.001 25.8428 116.468 26.3671 116.468 27.0661Z"
											fill="white" />
										<path
											d="M71.5346 14.1918C71.7717 14.1918 71.9496 13.9588 71.9496 13.7841V11.8617C71.9496 11.6286 71.7124 11.4539 71.5346 11.4539H67.3257V5.27888C67.3257 5.04586 67.0886 4.87109 66.9108 4.87109H64.9545C64.7174 4.87109 64.5396 5.10411 64.5396 5.27888V11.4539H62.4648C62.2276 11.4539 62.0498 11.6869 62.0498 11.8617V13.7841C62.0498 14.0171 62.2869 14.1918 62.4648 14.1918H64.5396V23.5126C64.5396 26.3671 66.4958 28.2312 69.3412 28.2312H71.416C71.6532 28.2312 71.831 27.9982 71.831 27.8235V25.901C71.831 25.668 71.5939 25.4933 71.416 25.4933H69.6376C68.2742 25.4933 67.3257 24.5612 67.3257 23.1048V14.1336H71.5346V14.1918Z"
											fill="white" />
										<path
											d="M113.152 14.1918C113.389 14.1918 113.567 13.9588 113.567 13.7841V11.8617C113.567 11.6286 113.33 11.4539 113.152 11.4539H108.943V5.27888C108.943 5.04586 108.706 4.87109 108.528 4.87109H106.572C106.335 4.87109 106.157 5.10411 106.157 5.27888V11.4539H104.082C103.845 11.4539 103.667 11.6869 103.667 11.8617V13.7841C103.667 14.0171 103.904 14.1918 104.082 14.1918H106.157V23.5126C106.157 26.3671 108.113 28.2312 110.958 28.2312H113.033C113.27 28.2312 113.448 27.9982 113.448 27.8235V25.901C113.448 25.668 113.211 25.4933 113.033 25.4933H111.136C109.773 25.4933 108.824 24.5612 108.824 23.1048V14.1336H113.093L113.152 14.1918Z"
											fill="white" />
										<path
											d="M42.7857 14.1907V27.9388C42.7857 28.1718 43.0228 28.3466 43.2006 28.3466H45.1569C45.394 28.3466 45.5718 28.1136 45.5718 27.9388V14.1907H50.1957C50.4328 14.1907 50.6106 13.9577 50.6106 13.7829V11.8605C50.6106 11.6275 50.3735 11.4527 50.1957 11.4527H45.5718V7.84092C45.5718 6.38455 46.6389 5.39422 47.8837 5.39422H50.1957C50.4328 5.39422 50.6106 5.1612 50.6106 4.98644V3.06403C50.6106 2.83101 50.3735 2.65625 50.1957 2.65625H48.0023C45.0976 2.65625 42.7857 5.04469 42.7857 7.78266V11.4527H40.7109C40.4737 11.4527 40.2959 11.6857 40.2959 11.8605V13.7829C40.2959 14.0159 40.533 14.1907 40.7109 14.1907H42.7857Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M84.6369 10.9277C86.9488 10.9277 89.1422 11.8598 90.6835 13.4909C92.2247 15.1221 93.0547 17.394 93.0547 19.899C93.0547 26.1322 88.7272 28.9284 84.5776 28.9284C80.3687 28.9284 76.1006 26.1905 76.1006 19.899V2.94685C76.1006 2.77208 76.2784 2.53906 76.5155 2.53906H78.4718C78.6496 2.53906 78.8867 2.71383 78.8867 2.94685V13.1997C80.2502 11.8598 82.4435 10.9277 84.6369 10.9277ZM78.8271 19.9575C78.8271 23.045 80.3684 26.3073 84.5773 26.3073C88.7862 26.3073 90.2682 23.045 90.3275 19.9575C90.3275 16.2292 88.0155 13.666 84.5773 13.666C81.1391 13.666 78.8271 16.171 78.8271 19.9575Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={119} height={37} viewBox="0 0 119 37"
										fill="none">
										<path fillRule="evenodd" clipRule="evenodd"
											d="M33.2946 24.8799C33.4715 25.2916 33.6485 25.762 33.8254 26.2325C34.3563 27.5851 34.4743 28.8789 34.2973 30.1728C33.8844 32.878 32.1149 35.2304 29.5195 36.2889C28.5758 36.7006 27.573 36.877 26.5113 36.877C26.2163 36.877 25.8624 36.877 25.5675 36.8182C24.3288 36.7006 23.0901 36.289 21.8515 35.5832C20.3768 34.7599 18.9022 33.5249 17.2506 31.7606C15.599 33.5249 14.1834 34.7599 12.6498 35.5832C11.4111 36.289 10.1724 36.6418 8.93372 36.8182C8.7863 36.8182 8.62414 36.8329 8.46198 36.8476L8.46184 36.8476C8.29963 36.8623 8.13742 36.877 7.98996 36.877C6.92823 36.877 5.92548 36.7006 4.98172 36.2889C2.44536 35.2304 0.557842 32.9368 0.144947 30.1728C-0.0320086 28.8201 0.144947 27.5263 0.616827 26.2325C0.793782 25.7032 0.970738 25.2916 1.14769 24.8799C1.44262 24.233 1.73754 23.5861 1.97348 22.998L2.03247 22.9392C4.62781 17.4111 7.34113 11.8242 10.1724 6.29609L10.2904 6.06086C10.5853 5.53159 10.8802 4.94351 11.1751 4.35544L11.1752 4.35538C11.2546 4.23092 11.334 4.10429 11.4143 3.97632L11.4143 3.97632L11.4143 3.97631C11.7513 3.4391 12.1031 2.8783 12.5318 2.35586C13.7705 0.944427 15.4221 0.121094 17.2506 0.121094C19.0202 0.121094 20.7307 0.944427 21.9104 2.41466C22.5003 3.06157 22.9132 3.76728 23.2671 4.41419L23.2671 4.41429C23.5621 5.00235 23.857 5.59041 24.1519 6.11966L24.2698 6.3549C27.1601 11.883 29.8734 17.4699 32.4098 22.998H32.4688C32.7047 23.5861 32.9996 24.233 33.2946 24.8799ZM62.3168 9.35455C62.3168 10.7072 61.255 11.7657 59.8984 11.7657C58.5417 11.7657 57.48 10.7072 57.48 9.35455C57.48 8.00193 58.5417 6.94336 59.8984 6.94336C61.314 7.00217 62.3168 8.06074 62.3168 9.35455ZM52.4653 14.1761V14.7642C52.4653 14.7642 51.3445 13.2939 48.8672 13.2939C44.8562 13.2939 41.73 16.352 41.73 20.5863C41.73 24.7618 44.8562 27.8787 48.8672 27.8787C51.3445 27.8787 52.4653 26.3497 52.4653 26.3497V26.9966C52.4653 27.2906 52.7012 27.5258 52.9961 27.5258H56.0044V13.6468H52.9961C52.6422 13.6468 52.4653 13.882 52.4653 14.1761ZM49.457 24.5274C50.8136 24.5274 51.9344 23.8217 52.4652 22.9983V18.0583C51.9344 17.2938 50.7547 16.5293 49.457 16.5293C47.0976 16.5293 45.269 17.9995 45.269 20.5283C45.269 23.0572 47.0976 24.5274 49.457 24.5274ZM58.1284 13.6475H61.6675V27.4677H58.1284V13.6475ZM107.437 14.7648C107.437 14.7648 108.617 13.2946 111.035 13.2946C115.046 13.2946 118.172 16.3527 118.172 20.5281C118.172 24.7036 115.046 27.8205 111.035 27.8205C108.558 27.8205 107.437 26.2915 107.437 26.2915V26.9384C107.437 27.2324 107.201 27.4677 106.906 27.4677H103.898V7.00195H107.437V14.7648ZM110.445 24.4678C109.089 24.4678 108.027 23.7621 107.437 22.9388V17.9988C107.968 17.2343 109.148 16.4697 110.445 16.4697C112.805 16.4697 114.633 17.94 114.633 20.4688C114.633 22.9976 112.805 24.4678 110.445 24.4678ZM102.072 27.5258V19.2925C102.072 16.9401 101.6 15.6463 100.42 14.6466C99.3586 13.7644 98.0609 13.2939 96.5273 13.2939C95.1707 13.2939 93.814 13.7056 92.7523 14.7642V14.1761C92.7523 13.882 92.5163 13.6468 92.2214 13.6468H89.3901V27.5258H92.9292V17.8811C93.6371 17.0578 94.7578 16.5285 95.8195 16.5285C97.766 16.5285 98.5328 17.4106 98.5328 19.7042V27.5258H102.072ZM80.7775 13.2944C78.3591 13.2944 77.1794 14.7647 77.1794 14.7647V7.00181H73.6403V27.4675H76.6486C76.9435 27.4675 77.1794 27.2323 77.1794 26.9382V26.2913C77.1794 26.2913 78.3002 27.8204 80.7775 27.8204C84.7885 27.8204 87.9147 24.7035 87.9147 20.528C87.9737 16.3525 84.8475 13.2944 80.7775 13.2944ZM77.1792 22.9388C77.7691 23.7621 78.8308 24.4678 80.1874 24.4678C82.5468 24.4678 84.3754 22.9976 84.3754 20.4688C84.3754 17.94 82.5468 16.4697 80.1874 16.4697C78.8898 16.4697 77.7101 17.2343 77.1792 17.9988V22.9388ZM70.6336 13.2939C71.6953 13.2939 72.2852 13.4704 72.2852 13.4704V16.7637C72.2852 16.7637 69.3359 15.7639 67.5074 17.8811V27.5258H63.9683V13.6468H66.9765C67.2714 13.6468 67.5074 13.882 67.5074 14.1761V14.7642C68.0972 13.9997 69.5129 13.2939 70.6336 13.2939ZM17.1916 28.1144C15.1861 25.5856 13.8885 23.2332 13.4756 21.2925C13.2986 20.4692 13.2396 19.7047 13.3576 19.0578C13.4166 18.4697 13.6525 17.9404 13.9475 17.5287C14.6553 16.5289 15.835 15.882 17.1916 15.882C18.5483 15.882 19.787 16.4701 20.4358 17.5287C20.7307 17.9992 20.9667 18.4697 21.0257 19.0578C21.1436 19.7047 21.0846 20.4692 20.9077 21.2925C20.4948 23.2332 19.1971 25.5856 17.1916 28.1144ZM28.5738 34.1717C30.4023 33.466 31.7 31.8194 31.936 29.8787C32.0539 28.8789 31.936 27.9967 31.759 27.0558C31.6951 26.8648 31.614 26.6737 31.5249 26.464C31.4494 26.2864 31.3683 26.0954 31.2871 25.8796C31.1397 25.5856 31.0069 25.2768 30.8742 24.9681C30.7415 24.6593 30.6088 24.3506 30.4613 24.0565V23.9977C27.925 18.5284 25.2117 12.9415 22.3804 7.47223L22.2624 7.23699C21.9675 6.64889 21.6726 6.0608 21.3776 5.53151C21.0827 4.94342 20.7288 4.35532 20.3159 3.88485C19.5491 3.0027 18.4874 2.53223 17.3666 2.53223C16.2459 2.53223 15.1842 3.0027 14.4174 3.88485C14.0045 4.41413 13.6506 4.94342 13.3557 5.53151L13.3556 5.5316C13.0607 6.11966 12.7658 6.70773 12.4709 7.23699L12.3529 7.47223C9.46264 12.9415 6.74933 18.5284 4.21297 23.9977L4.15399 24.0565C3.85906 24.6446 3.56413 25.2915 3.32819 25.8796C3.15124 26.2913 2.97428 26.7029 2.85631 27.0558C2.44342 28.1144 2.38443 28.9965 2.5024 29.9375C2.73834 31.8194 4.03602 33.466 5.86455 34.2306C6.69034 34.5246 7.6341 34.701 8.63685 34.5834C9.58061 34.4658 10.5244 34.1717 11.4681 33.6425C12.7658 32.8779 14.1225 31.7606 15.6561 30.0551C13.2377 27.0558 11.7041 24.2917 11.1732 21.8806C10.8783 20.7632 10.8193 19.7046 10.9963 18.7637C11.1732 17.8227 11.4681 16.9994 11.999 16.2348C13.1197 14.647 15.0662 13.6472 17.1897 13.6472C19.3131 13.6472 21.2597 14.5882 22.3804 16.2348C22.9112 16.9994 23.2062 17.8227 23.3831 18.7637C23.5011 19.7046 23.4421 20.7632 23.2062 21.8806C22.6163 24.2917 21.1417 26.997 18.7233 29.9963C20.2569 31.7017 21.5546 32.8191 22.9112 33.5837C23.914 34.1129 24.7988 34.407 25.7425 34.5246C26.7453 34.6422 27.689 34.5246 28.5738 34.1717Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={136} height={39} viewBox="0 0 136 39"
										fill="none">
										<path
											d="M24.7247 3.43111C24.184 1.65952 22.2916 0.70559 20.5343 1.25069C18.777 1.7958 17.8308 3.70366 18.3715 5.47524L27.0227 32.3216C27.631 33.9569 29.3882 34.9108 31.0779 34.4339C32.8352 33.8888 33.9166 32.049 33.3759 30.2775C33.3759 30.2093 24.7247 3.43111 24.7247 3.43111Z"
											fill="white" />
										<path
											d="M11.3419 7.86079C10.8012 6.08921 8.90876 5.13528 7.1515 5.68038C5.39424 6.22548 4.44802 8.13335 4.98871 9.90493L13.6399 36.7513C14.2481 38.3866 16.0054 39.3405 17.6951 38.8636C19.4523 38.3184 20.5337 36.4787 19.993 34.7071C19.993 34.639 11.3419 7.86079 11.3419 7.86079Z"
											fill="white" />
										<path
											d="M35.6731 25.7103C37.4304 25.1652 38.3766 23.2574 37.8359 21.4858C37.2952 19.7142 35.4028 18.7603 33.6455 19.3054L6.94861 27.9589C5.32652 28.5721 4.3803 30.3437 4.85341 32.0472C5.39411 33.8188 7.21896 34.909 8.97622 34.3639C9.1114 34.3639 35.6731 25.7103 35.6731 25.7103Z"
											fill="white" />
										<path
											d="M12.4907 33.2751C14.248 32.7299 16.4783 31.9804 18.8439 31.1628C18.3032 29.3912 17.5597 27.1426 16.7487 24.7578L10.3955 26.8701L12.4907 33.2751Z"
											fill="white" />
										<path
											d="M25.9399 28.8454C28.3731 28.0277 30.6034 27.3463 32.2931 26.7331C31.7524 24.9615 31.009 22.713 30.1979 20.3281L23.8447 22.4404L25.9399 28.8454Z"
											fill="white" />
										<path
											d="M31.2794 12.1518C33.0366 11.6066 33.9828 9.69879 33.4421 7.9272C32.9014 6.15561 31.009 5.20168 29.2517 5.74679L2.62244 14.4684C1.00035 15.0817 0.0541306 16.8533 0.52724 18.5567C1.06794 20.3964 2.89279 21.4866 4.65005 20.8734C4.71764 20.8734 31.2794 12.1518 31.2794 12.1518Z"
											fill="white" />
										<path
											d="M8.16453 19.7165C9.9218 19.1714 12.1522 18.4218 14.5177 17.6042C13.7067 15.1512 13.0308 12.9027 12.4225 11.1992L6.06934 13.3115L8.16453 19.7165Z"
											fill="white" />
										<path
											d="M21.5473 15.3532C23.9805 14.5355 26.2109 13.8541 27.9005 13.2409C27.0895 10.7879 26.4136 8.53939 25.8053 6.83594L19.4521 8.94821L21.5473 15.3532Z"
											fill="white" />
										<path
											d="M62.6395 10.5177C63.7885 11.0628 63.9237 11.4035 62.9774 13.1751C62.0312 15.0148 61.8285 15.0829 60.6119 14.606C59.125 13.9927 57.3001 13.5157 56.0836 13.5157C54.1235 13.5157 52.8394 14.1971 52.8394 15.2873C52.8394 18.8305 64.1264 16.9226 64.1264 24.5541C64.1264 28.3698 60.8822 30.8909 56.016 30.8909C53.4477 30.8909 50.2711 30.0051 48.1083 28.9149C47.0269 28.3698 46.9593 28.0291 47.9055 26.1894C48.7166 24.6222 48.9869 24.4178 50.1359 24.8948C52.0283 25.7124 54.3263 26.3257 55.9484 26.3257C57.7732 26.3257 58.9222 25.5762 58.9222 24.486C58.9222 21.0109 47.4324 22.6462 47.4324 15.2873C47.4324 11.4035 50.6766 8.74609 55.4753 8.74609C57.7732 8.95051 60.6795 9.63189 62.6395 10.5177Z"
											fill="white" />
										<path
											d="M71.7645 1.52218V29.8676C71.7645 30.2764 71.2914 30.7533 70.6832 30.7533H67.7093C67.0335 30.7533 66.6279 30.2764 66.6279 29.8676V1.52218C66.6279 0.0912827 67.0335 0.0231448 69.1962 0.0231448C71.6294 -0.0449932 71.7645 0.159421 71.7645 1.52218Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M92.7151 29.595V17.3983C92.7151 12.0836 89.133 8.94922 83.4557 8.94922C80.8874 8.94922 78.0488 9.76687 76.0211 11.1296C74.9397 11.811 74.9397 12.1517 76.0211 13.8551C77.1701 15.5586 77.3729 15.6267 78.4543 15.0135C79.806 14.1958 81.4957 13.6507 82.915 13.6507C85.8889 13.6507 87.6461 15.0135 87.6461 17.262V18.6929C86.2268 18.0797 84.4695 17.739 82.5771 17.739C77.5081 17.739 74.1963 20.4645 74.1963 24.5528C74.1963 28.3685 77.1701 30.9578 81.5633 30.9578C83.8612 30.9578 86.1592 30.0038 87.7137 28.2323L87.6461 29.5269C87.5785 30.2083 88.0516 30.6852 88.7275 30.6852H91.6338C92.242 30.6852 92.7151 30.2764 92.7151 29.595ZM82.1713 26.8698C80.3464 26.8698 79.1299 25.9158 79.1299 24.4849C79.1299 22.7133 80.9547 21.3506 83.6582 21.3506C84.9424 21.3506 86.4293 21.555 87.5783 22.032V23.9398C86.4293 25.7796 84.4017 26.8698 82.1713 26.8698Z"
											fill="white" />
										<path
											d="M112.79 10.5836C113.871 11.1968 113.871 11.5375 112.722 13.3772C111.641 15.0807 111.438 15.217 110.221 14.6037C109.343 14.1268 107.856 13.7179 106.707 13.7179C102.99 13.7179 100.556 16.1709 100.556 19.9185C100.556 23.8023 102.99 26.3916 106.707 26.3916C107.991 26.3916 109.613 25.9146 110.627 25.3014C111.708 24.6881 111.911 24.6881 113.06 26.3916C114.074 27.9588 114.074 28.2994 113.128 28.9808C111.505 30.1392 108.87 31.025 106.572 31.025C99.7453 31.025 95.1494 26.596 95.1494 19.9866C95.1494 13.3772 99.7453 9.01641 106.639 9.01641C108.802 8.94827 111.235 9.62965 112.79 10.5836Z"
											fill="white" />
										<path
											d="M135.162 28.0281C136.04 29.1183 135.702 29.5272 133.54 30.2767C131.377 31.0943 131.039 31.0262 130.295 30.0041L124.145 21.7594L121.374 24.4168V29.7997C121.374 30.2085 120.901 30.6855 120.293 30.6855H117.319C116.643 30.6855 116.237 30.2085 116.237 29.7997V1.52247C116.237 0.0915754 116.643 0.0234375 118.806 0.0234375C121.306 0.0234375 121.374 0.227851 121.374 1.52247V17.603L129.755 9.49461C130.701 8.60882 131.174 8.67695 132.864 9.76716C134.689 10.9255 134.824 11.2662 133.945 12.152L127.727 18.2844L135.162 28.0281Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={120} height={31} viewBox="0 0 120 31"
										fill="none">
										<path fillRule="evenodd" clipRule="evenodd"
											d="M17.9285 2.59615C17.9285 3.8195 16.8615 4.86809 15.6166 4.86809C14.3717 4.86809 13.3047 3.8195 13.3047 2.59615C13.3047 1.3728 14.3717 0.324219 15.6166 0.324219C16.8615 0.324219 17.9285 1.3728 17.9285 2.59615ZM15.616 6.73242C14.2526 6.73242 13.1855 7.78101 13.1855 9.12086C13.1855 10.4607 14.2526 11.5093 15.616 11.5093C16.9795 11.5093 18.0465 10.4607 18.0465 9.12086C18.0465 7.72275 16.9795 6.73242 15.616 6.73242ZM13.1271 15.5287C13.1271 14.1888 14.2534 13.082 15.6169 13.082C16.9803 13.082 18.1659 14.1888 18.1066 15.5287C18.1066 16.8686 16.9803 17.9754 15.6169 17.9754C14.2534 17.9754 13.1271 16.8686 13.1271 15.5287ZM15.616 19.5479C14.2526 19.5479 13.1855 20.5964 13.1855 21.9363C13.1855 23.2762 14.2526 24.3247 15.616 24.3247C16.9795 24.3247 18.0465 23.2762 18.0465 21.9363C18.0465 20.6547 16.9795 19.5479 15.616 19.5479ZM13.3047 28.4028C13.3047 27.1794 14.3717 26.1309 15.6166 26.1309C16.9208 26.1309 17.9285 27.1794 17.9285 28.4028C17.9285 29.6261 16.8615 30.6747 15.6166 30.6747C14.3717 30.6747 13.3047 29.6261 13.3047 28.4028ZM22.0198 6.44141C20.5378 6.44141 19.293 7.66476 19.293 9.12112C19.293 10.5775 20.5378 11.8008 22.0198 11.8008C23.5018 11.8008 24.7467 10.5775 24.7467 9.12112C24.7467 7.66476 23.5018 6.44141 22.0198 6.44141ZM19.1738 15.5872C19.1738 14.0144 20.478 12.791 22.0193 12.791C23.5605 12.791 24.8647 14.0144 24.8647 15.5872C24.8647 17.1601 23.5605 18.3835 22.0193 18.3835C20.4187 18.3835 19.1738 17.1019 19.1738 15.5872ZM22.0198 19.2568C20.5378 19.2568 19.293 20.4802 19.293 21.9366C19.293 23.3929 20.5378 24.6163 22.0198 24.6163C23.5018 24.6163 24.7467 23.3929 24.7467 21.9366C24.7467 20.4802 23.5018 19.2568 22.0198 19.2568ZM25.457 15.5289C25.457 13.7813 26.939 12.4414 28.5989 12.4414C30.2587 12.4414 31.6222 13.7813 31.7407 15.5289C31.7407 17.2765 30.3773 18.6164 28.5989 18.6164C26.8205 18.6164 25.457 17.16 25.457 15.5289ZM9.15488 7.02344C8.02856 7.02344 7.08008 7.95551 7.08008 9.06235C7.08008 10.1692 8.02856 11.1013 9.15488 11.1013C10.2812 11.1013 11.2297 10.1692 11.2297 9.06235C11.2297 7.95551 10.3405 7.02344 9.15488 7.02344ZM6.96289 15.5285C6.96289 14.3051 7.91137 13.373 9.15625 13.373C10.4011 13.373 11.3496 14.3051 11.3496 15.5285C11.3496 16.7518 10.4011 17.6839 9.15625 17.6839C7.91137 17.6839 6.96289 16.7518 6.96289 15.5285ZM9.15488 19.8398C8.02856 19.8398 7.08008 20.7719 7.08008 21.8788C7.08008 22.9856 8.02856 23.9177 9.15488 23.9177C10.2812 23.9177 11.2297 22.9856 11.2297 21.8788C11.2297 20.7719 10.3405 19.8398 9.15488 19.8398ZM0.796875 15.587C0.796875 14.5384 1.62679 13.7228 2.69383 13.7228C3.76087 13.7228 4.59079 14.5384 4.59079 15.587C4.59079 16.6355 3.76087 17.4511 2.69383 17.4511C1.62679 17.4511 0.796875 16.6355 0.796875 15.587Z"
											fill="white" />
										<path
											d="M55.3349 11.5703C55.0978 11.5703 54.9199 11.8033 54.9199 11.9781V28.1147C54.9199 28.3477 55.157 28.5224 55.3349 28.5224H57.2911C57.5282 28.5224 57.7061 28.2894 57.7061 28.1147V11.9781C57.7061 11.7451 57.469 11.5703 57.2911 11.5703H55.3349Z"
											fill="white" />
										<path
											d="M56.4028 4.75391C55.3358 4.75391 54.5059 5.56947 54.5059 6.61806C54.5059 7.66664 55.3358 8.48221 56.4028 8.48221C57.4699 8.48221 58.2998 7.66664 58.2998 6.61806C58.2998 5.56947 57.4106 4.75391 56.4028 4.75391Z"
											fill="white" />
										<path
											d="M97.4247 11.5703C97.1876 11.5703 97.0098 11.8033 97.0098 11.9781V28.1147C97.0098 28.3477 97.2469 28.5224 97.4247 28.5224H99.381C99.6181 28.5224 99.7959 28.2894 99.7959 28.1147V11.9781C99.7959 11.7451 99.5588 11.5703 99.381 11.5703H97.4247Z"
											fill="white" />
										<path
											d="M98.3716 4.75391C97.3045 4.75391 96.4746 5.56947 96.4746 6.61806C96.4746 7.66664 97.3045 8.48221 98.3716 8.48221C99.4386 8.48221 100.269 7.66664 100.269 6.61806C100.269 5.56947 99.4386 4.75391 98.3716 4.75391Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M118.387 26.756C118.375 26.8126 118.345 26.881 118.272 26.9494C118.272 27.0659 118.149 27.1824 117.902 27.1242L117.997 27.2334C117.984 27.2382 117.973 27.241 117.964 27.241H117.779L117.778 27.2407H117.531V27.0663V26.542H117.964C118.087 26.542 118.21 26.542 118.272 26.6585C118.345 26.6585 118.375 26.699 118.387 26.756ZM117.531 27.2407H117.47V27.765H117.223V26.3086H117.778H118.025C118.149 26.3086 118.272 26.4251 118.272 26.4251C118.396 26.4251 118.396 26.5416 118.396 26.5416V26.6581C118.396 26.6822 118.396 26.7162 118.387 26.756C118.396 26.7958 118.396 26.8437 118.396 26.8915C118.396 27.008 118.396 27.1245 118.272 27.1245C118.2 27.1245 118.128 27.1645 118.068 27.1976C118.041 27.2122 118.017 27.2255 117.997 27.2334L118.458 27.765H118.211L117.779 27.241H117.531V27.2407Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M116.453 27.0664C116.453 26.3674 117.105 25.7266 117.817 25.7266C118.587 25.7266 119.18 26.3091 119.18 27.0664C119.18 27.7655 118.528 28.4063 117.817 28.4063C117.105 28.4063 116.453 27.7655 116.453 27.0664ZM116.572 27.0661C116.572 27.7652 117.106 28.2895 117.817 28.2895C118.469 28.2895 119.062 27.7652 119.062 27.0661C119.062 26.3671 118.529 25.8428 117.817 25.8428C117.106 25.8428 116.572 26.3671 116.572 27.0661Z"
											fill="white" />
										<path
											d="M71.6371 14.1918C71.8743 14.1918 72.0521 13.9588 72.0521 13.7841V11.8617C72.0521 11.6286 71.815 11.4539 71.6371 11.4539H67.4283V5.27888C67.4283 5.04586 67.1911 4.87109 67.0133 4.87109H65.0571C64.8199 4.87109 64.6421 5.10411 64.6421 5.27888V11.4539H62.5673C62.3302 11.4539 62.1523 11.6869 62.1523 11.8617V13.7841C62.1523 14.0171 62.3895 14.1918 62.5673 14.1918H64.6421V23.5126C64.6421 26.3671 66.5983 28.2312 69.4438 28.2312H71.5186C71.7557 28.2312 71.9335 27.9982 71.9335 27.8235V25.901C71.9335 25.668 71.6964 25.4933 71.5186 25.4933H69.7402C68.3767 25.4933 67.4283 24.5612 67.4283 23.1048V14.1336H71.6371V14.1918Z"
											fill="white" />
										<path
											d="M113.252 14.1918C113.489 14.1918 113.667 13.9588 113.667 13.7841V11.8617C113.667 11.6286 113.43 11.4539 113.252 11.4539H109.043V5.27888C109.043 5.04586 108.806 4.87109 108.629 4.87109H106.672C106.435 4.87109 106.257 5.10411 106.257 5.27888V11.4539H104.183C103.945 11.4539 103.768 11.6869 103.768 11.8617V13.7841C103.768 14.0171 104.005 14.1918 104.183 14.1918H106.257V23.5126C106.257 26.3671 108.214 28.2312 111.059 28.2312H113.134C113.371 28.2312 113.549 27.9982 113.549 27.8235V25.901C113.549 25.668 113.312 25.4933 113.134 25.4933H111.237C109.873 25.4933 108.925 24.5612 108.925 23.1048V14.1336H113.193L113.252 14.1918Z"
											fill="white" />
										<path
											d="M42.8862 14.1907V27.9388C42.8862 28.1718 43.1234 28.3466 43.3012 28.3466H45.2574C45.4946 28.3466 45.6724 28.1136 45.6724 27.9388V14.1907H50.2962C50.5334 14.1907 50.7112 13.9577 50.7112 13.7829V11.8605C50.7112 11.6275 50.4741 11.4527 50.2962 11.4527H45.6724V7.84092C45.6724 6.38455 46.7394 5.39422 47.9843 5.39422H50.2962C50.5334 5.39422 50.7112 5.1612 50.7112 4.98644V3.06403C50.7112 2.83101 50.4741 2.65625 50.2962 2.65625H48.1029C45.1982 2.65625 42.8862 5.04469 42.8862 7.78266V11.4527H40.8114C40.5743 11.4527 40.3965 11.6857 40.3965 11.8605V13.7829C40.3965 14.0159 40.6336 14.1907 40.8114 14.1907H42.8862Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M84.7375 10.9277C87.0494 10.9277 89.2428 11.8598 90.7841 13.4909C92.3253 15.1221 93.1553 17.394 93.1553 19.899C93.1553 26.1322 88.8278 28.9284 84.6782 28.9284C80.4693 28.9284 76.2012 26.1905 76.2012 19.899V2.94685C76.2012 2.77208 76.379 2.53906 76.6161 2.53906H78.5724C78.7502 2.53906 78.9873 2.71383 78.9873 2.94685V13.1997C80.3508 11.8598 82.5441 10.9277 84.7375 10.9277ZM78.9277 19.9575C78.9277 23.045 80.469 26.3073 84.6779 26.3073C88.8868 26.3073 90.3688 23.045 90.4281 19.9575C90.4281 16.2292 88.1161 13.666 84.6779 13.666C81.2397 13.666 78.9277 16.171 78.9277 19.9575Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={119} height={39} viewBox="0 0 119 39"
										fill="none">
										<path
											d="M29.2361 13.7558H15.4143V17.8313H25.2431C24.7517 23.574 19.9602 26.1058 15.4758 26.1058C9.70135 26.1058 4.66408 21.5363 4.66408 15.176C4.66408 8.93927 9.45563 4.12277 15.4758 4.12277C20.1445 4.12277 22.8474 7.08677 22.8474 7.08677L25.6732 4.12277C25.6732 4.12277 21.9874 0.047268 15.2915 0.047268C6.7527 -0.014482 0.179688 7.21027 0.179688 15.0525C0.179688 22.7095 6.38412 30.1813 15.5372 30.1813C23.5845 30.1813 29.4818 24.6855 29.4818 16.4728C29.4818 14.7438 29.2361 13.7558 29.2361 13.7558Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M30.7715 20.3635C30.7715 15.1765 34.8259 10.7305 40.4774 10.7305C45.1461 10.7305 50.1834 14.065 50.2448 20.487C50.2448 26.168 45.9447 30.1817 40.6003 30.1817C34.703 30.1817 30.7715 25.674 30.7715 20.3635ZM45.9446 20.4873C45.9446 16.9058 43.3031 14.6211 40.5387 14.6211C37.4058 14.6211 35.01 17.0911 35.0715 20.4256C35.0715 23.8836 37.4672 26.3536 40.5387 26.3536C43.3645 26.3536 45.9446 24.0688 45.9446 20.4873Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M51.9043 20.3635C51.9043 15.1765 55.9587 10.7305 61.6102 10.7305C66.2789 10.7305 71.3162 14.065 71.3776 20.487C71.3776 26.168 67.0775 30.1817 61.7331 30.1817C55.8358 30.1817 51.9043 25.674 51.9043 20.3635ZM67.0774 20.4873C67.0774 16.9058 64.4359 14.6211 61.6716 14.6211C58.5386 14.6211 56.1428 17.0911 56.2043 20.4256C56.2043 23.8836 58.6001 26.3536 61.6716 26.3536C64.4973 26.3536 67.0774 24.0688 67.0774 20.4873Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M73.0352 20.4877C73.0352 15.3625 77.0895 10.793 82.3111 10.793C84.584 10.793 86.304 11.6575 87.4098 13.016V11.3487H91.4642V28.824C91.4642 35.6782 87.5326 38.951 82.3725 38.951C77.6424 38.951 75.0009 36.0487 73.7109 33.27L77.4581 31.7262C78.011 32.9612 79.4853 35.1842 82.434 35.1842C85.5055 35.1842 87.5326 33.1465 87.5326 29.812V27.8977C86.3655 29.1945 84.9526 30.2442 82.1882 30.2442C77.7653 30.2442 73.0352 26.2922 73.0352 20.4877ZM87.8394 20.5491C87.8394 16.8441 85.1979 14.6211 82.6793 14.6211C79.9764 14.6211 77.3349 16.7823 77.2734 20.6108C77.2734 24.1306 79.8535 26.4153 82.6179 26.4153C85.2593 26.4153 87.8394 24.3776 87.8394 20.5491Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M100.617 20.4252C100.617 14.6207 104.733 10.7305 109.647 10.7305C113.456 10.7305 116.343 13.324 117.633 16.288L118.309 17.8935L105.347 23.3275C106.146 24.8095 107.374 26.2915 110.077 26.2915C112.473 26.2915 113.948 24.9947 114.808 23.6362L118.186 25.921C116.712 27.897 114.132 30.1817 110.077 30.1817C105.224 30.1817 100.617 26.5385 100.617 20.4252ZM113.395 16.5967C112.78 15.4235 111.552 14.4972 109.77 14.4972C107.006 14.4972 104.303 17.3995 104.794 20.24L113.395 16.5967Z"
											fill="white" />
										<path d="M94.4746 29.6247H98.7133V0.972656H94.4746V29.6247Z" fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={119} height={37} viewBox="0 0 119 37"
										fill="none">
										<path fillRule="evenodd" clipRule="evenodd"
											d="M33.5255 24.8799C33.7025 25.2916 33.8794 25.762 34.0564 26.2325C34.5872 27.5851 34.7052 28.8789 34.5283 30.1728C34.1154 32.878 32.3458 35.2304 29.7505 36.2889C28.8067 36.7006 27.804 36.877 26.7422 36.877C26.4473 36.877 26.0934 36.877 25.7985 36.8182C24.5598 36.7006 23.3211 36.289 22.0824 35.5832C20.6078 34.7599 19.1332 33.5249 17.4816 31.7606C15.83 33.5249 14.4144 34.7599 12.8807 35.5832C11.6421 36.289 10.4034 36.6418 9.16468 36.8182C9.01726 36.8182 8.8551 36.8329 8.69294 36.8476L8.6928 36.8476C8.53059 36.8623 8.36838 36.877 8.22092 36.877C7.15919 36.877 6.15644 36.7006 5.21268 36.2889C2.67632 35.2304 0.788799 32.9368 0.375904 30.1728C0.198948 28.8201 0.375904 27.5263 0.847784 26.2325C1.02474 25.7032 1.20169 25.2916 1.37865 24.8799C1.67358 24.233 1.9685 23.5861 2.20444 22.998L2.26343 22.9392C4.85877 17.4111 7.57208 11.8242 10.4034 6.29609L10.5213 6.06086C10.8163 5.53159 11.1112 4.94351 11.4061 4.35544L11.4061 4.35538C11.4855 4.23092 11.565 4.10429 11.6453 3.97632L11.6453 3.97632L11.6453 3.97631C11.9823 3.4391 12.334 2.8783 12.7628 2.35586C14.0015 0.944427 15.653 0.121094 17.4816 0.121094C19.2511 0.121094 20.9617 0.944427 22.1414 2.41466C22.7312 3.06157 23.1441 3.76728 23.4981 4.41419L23.4981 4.41429C23.793 5.00235 24.0879 5.59041 24.3828 6.11966L24.5008 6.3549C27.3911 11.883 30.1044 17.4699 32.6407 22.998H32.6997C32.9357 23.5861 33.2306 24.233 33.5255 24.8799ZM62.5458 9.35455C62.5458 10.7072 61.484 11.7657 60.1274 11.7657C58.7707 11.7657 57.709 10.7072 57.709 9.35455C57.709 8.00193 58.7707 6.94336 60.1274 6.94336C61.543 7.00217 62.5458 8.06074 62.5458 9.35455ZM52.6962 14.1761V14.7642C52.6962 14.7642 51.5755 13.2939 49.0981 13.2939C45.0871 13.2939 41.9609 16.352 41.9609 20.5863C41.9609 24.7618 45.0871 27.8787 49.0981 27.8787C51.5755 27.8787 52.6962 26.3497 52.6962 26.3497V26.9966C52.6962 27.2906 52.9322 27.5258 53.2271 27.5258H56.2353V13.6468H53.2271C52.8732 13.6468 52.6962 13.882 52.6962 14.1761ZM49.6879 24.5274C51.0446 24.5274 52.1653 23.8217 52.6962 22.9983V18.0583C52.1653 17.2938 50.9856 16.5293 49.6879 16.5293C47.3285 16.5293 45.5 17.9995 45.5 20.5283C45.5 23.0572 47.3285 24.5274 49.6879 24.5274ZM58.3574 13.6475H61.8965V27.4677H58.3574V13.6475ZM107.67 14.7647C107.67 14.7647 108.849 13.2944 111.268 13.2944C115.279 13.2944 118.405 16.3525 118.405 20.528C118.405 24.7035 115.279 27.8204 111.268 27.8204C108.79 27.8204 107.67 26.2913 107.67 26.2913V26.9382C107.67 27.2323 107.434 27.4675 107.139 27.4675H104.131V7.00181H107.67V14.7647ZM110.678 24.4678C109.322 24.4678 108.26 23.7621 107.67 22.9388V17.9988C108.201 17.2343 109.38 16.4697 110.678 16.4697C113.038 16.4697 114.866 17.94 114.866 20.4688C114.866 22.9976 113.038 24.4678 110.678 24.4678ZM102.303 27.5258V19.2925C102.303 16.9401 101.831 15.6463 100.651 14.6466C99.5896 13.7644 98.2919 13.2939 96.7583 13.2939C95.4016 13.2939 94.045 13.7056 92.9832 14.7642V14.1761C92.9832 13.882 92.7473 13.6468 92.4524 13.6468H89.6211V27.5258H93.1602V17.8811C93.868 17.0578 94.9887 16.5285 96.0505 16.5285C97.997 16.5285 98.7638 17.4106 98.7638 19.7042V27.5258H102.303ZM81.0085 13.2944C78.5901 13.2944 77.4104 14.7647 77.4104 14.7647V7.00181H73.8713V27.4675H76.8795C77.1745 27.4675 77.4104 27.2323 77.4104 26.9382V26.2913C77.4104 26.2913 78.5311 27.8204 81.0085 27.8204C85.0195 27.8204 88.1457 24.7035 88.1457 20.528C88.2047 16.3525 85.0785 13.2944 81.0085 13.2944ZM77.4102 22.9388C78 23.7621 79.0617 24.4678 80.4184 24.4678C82.7778 24.4678 84.6063 22.9976 84.6063 20.4688C84.6063 17.94 82.7778 16.4697 80.4184 16.4697C79.1207 16.4697 77.941 17.2343 77.4102 17.9988V22.9388ZM70.8626 13.2939C71.9243 13.2939 72.5142 13.4704 72.5142 13.4704V16.7637C72.5142 16.7637 69.5649 15.7639 67.7364 17.8811V27.5258H64.1973V13.6468H67.2055C67.5004 13.6468 67.7364 13.882 67.7364 14.1761V14.7642C68.3262 13.9997 69.7419 13.2939 70.8626 13.2939ZM17.4226 28.1144C15.4171 25.5856 14.1194 23.2332 13.7065 21.2925C13.5296 20.4692 13.4706 19.7047 13.5886 19.0578C13.6475 18.4697 13.8835 17.9404 14.1784 17.5287C14.8862 16.5289 16.0659 15.882 17.4226 15.882C18.7792 15.882 20.0179 16.4701 20.6668 17.5287C20.9617 17.9992 21.1976 18.4697 21.2566 19.0578C21.3746 19.7047 21.3156 20.4692 21.1386 21.2925C20.7258 23.2332 19.4281 25.5856 17.4226 28.1144ZM28.8067 34.1718C30.6352 33.4661 31.9329 31.8194 32.1689 29.8787C32.2868 28.879 32.1689 27.9968 31.9919 27.0559C31.928 26.8648 31.8469 26.6738 31.7578 26.4641C31.6823 26.2865 31.6012 26.0954 31.52 25.8797C31.3726 25.5856 31.2398 25.2769 31.1071 24.9681C30.9744 24.6594 30.8417 24.3506 30.6942 24.0566V23.9978C28.1579 18.5285 25.4446 12.9416 22.6133 7.47228L22.4953 7.23705L22.4953 7.23702C22.2004 6.64893 21.9054 6.06085 21.6105 5.53157C21.3156 4.94347 20.9617 4.35538 20.5488 3.8849C19.782 3.00276 18.7203 2.53228 17.5995 2.53228C16.4788 2.53228 15.4171 3.00276 14.6503 3.8849C14.2374 4.41419 13.8835 4.94347 13.5886 5.53157C13.2936 6.11966 12.9987 6.70776 12.7038 7.23705L12.5858 7.47228C9.69555 12.9416 6.98223 18.5285 4.44587 23.9978L4.38689 24.0566C4.09196 24.6447 3.79704 25.2916 3.5611 25.8797C3.38414 26.2913 3.20719 26.703 3.08922 27.0559C2.67632 28.1144 2.61734 28.9966 2.73531 29.9375C2.97125 31.8194 4.26892 33.4661 6.09746 34.2306C6.92325 34.5247 7.86701 34.7011 8.86975 34.5835C9.81351 34.4659 10.7573 34.1718 11.701 33.6425C12.9987 32.878 14.3554 31.7606 15.889 30.0551C13.4706 27.0559 11.937 24.2918 11.4061 21.8806C11.1112 20.7632 11.0522 19.7047 11.2292 18.7637C11.4061 17.8228 11.701 16.9994 12.2319 16.2349C13.3526 14.647 15.2991 13.6473 17.4226 13.6473C19.5461 13.6473 21.4926 14.5882 22.6133 16.2349C23.1441 16.9994 23.4391 17.8228 23.616 18.7637C23.734 19.7047 23.675 20.7632 23.4391 21.8806C22.8492 24.2918 21.3746 26.997 18.9562 29.9963C20.4898 31.7018 21.7875 32.8192 23.1441 33.5837C24.1469 34.113 25.0317 34.407 25.9754 34.5247C26.9782 34.6423 27.9219 34.5247 28.8067 34.1718Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={136} height={39} viewBox="0 0 136 39"
										fill="none">
										<path
											d="M24.7247 3.43111C24.184 1.65952 22.2916 0.70559 20.5343 1.25069C18.777 1.7958 17.8308 3.70366 18.3715 5.47524L27.0227 32.3216C27.631 33.9569 29.3882 34.9108 31.0779 34.4339C32.8352 33.8888 33.9166 32.049 33.3759 30.2775C33.3759 30.2093 24.7247 3.43111 24.7247 3.43111Z"
											fill="white" />
										<path
											d="M11.3419 7.86079C10.8012 6.08921 8.90876 5.13528 7.1515 5.68038C5.39424 6.22548 4.44802 8.13335 4.98871 9.90493L13.6399 36.7513C14.2481 38.3866 16.0054 39.3405 17.6951 38.8636C19.4523 38.3184 20.5337 36.4787 19.993 34.7071C19.993 34.639 11.3419 7.86079 11.3419 7.86079Z"
											fill="white" />
										<path
											d="M35.6731 25.7103C37.4304 25.1652 38.3766 23.2574 37.8359 21.4858C37.2952 19.7142 35.4028 18.7603 33.6455 19.3054L6.94861 27.9589C5.32652 28.5721 4.3803 30.3437 4.85341 32.0472C5.39411 33.8188 7.21896 34.909 8.97622 34.3639C9.1114 34.3639 35.6731 25.7103 35.6731 25.7103Z"
											fill="white" />
										<path
											d="M12.4907 33.2751C14.248 32.7299 16.4783 31.9804 18.8439 31.1628C18.3032 29.3912 17.5597 27.1426 16.7487 24.7578L10.3955 26.8701L12.4907 33.2751Z"
											fill="white" />
										<path
											d="M25.9399 28.8454C28.3731 28.0277 30.6034 27.3463 32.2931 26.7331C31.7524 24.9615 31.009 22.713 30.1979 20.3281L23.8447 22.4404L25.9399 28.8454Z"
											fill="white" />
										<path
											d="M31.2794 12.1518C33.0366 11.6066 33.9828 9.69879 33.4421 7.9272C32.9014 6.15561 31.009 5.20168 29.2517 5.74679L2.62244 14.4684C1.00035 15.0817 0.0541306 16.8533 0.52724 18.5567C1.06794 20.3964 2.89279 21.4866 4.65005 20.8734C4.71764 20.8734 31.2794 12.1518 31.2794 12.1518Z"
											fill="white" />
										<path
											d="M8.16453 19.7165C9.9218 19.1714 12.1522 18.4218 14.5177 17.6042C13.7067 15.1512 13.0308 12.9027 12.4225 11.1992L6.06934 13.3115L8.16453 19.7165Z"
											fill="white" />
										<path
											d="M21.5473 15.3532C23.9805 14.5355 26.2109 13.8541 27.9005 13.2409C27.0895 10.7879 26.4136 8.53939 25.8053 6.83594L19.4521 8.94821L21.5473 15.3532Z"
											fill="white" />
										<path
											d="M62.6395 10.5177C63.7885 11.0628 63.9237 11.4035 62.9774 13.1751C62.0312 15.0148 61.8285 15.0829 60.6119 14.606C59.125 13.9927 57.3001 13.5157 56.0836 13.5157C54.1235 13.5157 52.8394 14.1971 52.8394 15.2873C52.8394 18.8305 64.1264 16.9226 64.1264 24.5541C64.1264 28.3698 60.8822 30.8909 56.016 30.8909C53.4477 30.8909 50.2711 30.0051 48.1083 28.9149C47.0269 28.3698 46.9593 28.0291 47.9055 26.1894C48.7166 24.6222 48.9869 24.4178 50.1359 24.8948C52.0283 25.7124 54.3263 26.3257 55.9484 26.3257C57.7732 26.3257 58.9222 25.5762 58.9222 24.486C58.9222 21.0109 47.4324 22.6462 47.4324 15.2873C47.4324 11.4035 50.6766 8.74609 55.4753 8.74609C57.7732 8.95051 60.6795 9.63189 62.6395 10.5177Z"
											fill="white" />
										<path
											d="M71.7645 1.52218V29.8676C71.7645 30.2764 71.2914 30.7533 70.6832 30.7533H67.7093C67.0335 30.7533 66.6279 30.2764 66.6279 29.8676V1.52218C66.6279 0.0912827 67.0335 0.0231448 69.1962 0.0231448C71.6294 -0.0449932 71.7645 0.159421 71.7645 1.52218Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M92.7151 29.595V17.3983C92.7151 12.0836 89.133 8.94922 83.4557 8.94922C80.8874 8.94922 78.0488 9.76687 76.0211 11.1296C74.9397 11.811 74.9397 12.1517 76.0211 13.8551C77.1701 15.5586 77.3729 15.6267 78.4543 15.0135C79.806 14.1958 81.4957 13.6507 82.915 13.6507C85.8889 13.6507 87.6461 15.0135 87.6461 17.262V18.6929C86.2268 18.0797 84.4695 17.739 82.5771 17.739C77.5081 17.739 74.1963 20.4645 74.1963 24.5528C74.1963 28.3685 77.1701 30.9578 81.5633 30.9578C83.8612 30.9578 86.1592 30.0038 87.7137 28.2323L87.6461 29.5269C87.5785 30.2083 88.0516 30.6852 88.7275 30.6852H91.6338C92.242 30.6852 92.7151 30.2764 92.7151 29.595ZM82.1713 26.8698C80.3464 26.8698 79.1299 25.9158 79.1299 24.4849C79.1299 22.7133 80.9547 21.3506 83.6582 21.3506C84.9424 21.3506 86.4293 21.555 87.5783 22.032V23.9398C86.4293 25.7796 84.4017 26.8698 82.1713 26.8698Z"
											fill="white" />
										<path
											d="M112.79 10.5836C113.871 11.1968 113.871 11.5375 112.722 13.3772C111.641 15.0807 111.438 15.217 110.221 14.6037C109.343 14.1268 107.856 13.7179 106.707 13.7179C102.99 13.7179 100.556 16.1709 100.556 19.9185C100.556 23.8023 102.99 26.3916 106.707 26.3916C107.991 26.3916 109.613 25.9146 110.627 25.3014C111.708 24.6881 111.911 24.6881 113.06 26.3916C114.074 27.9588 114.074 28.2994 113.128 28.9808C111.505 30.1392 108.87 31.025 106.572 31.025C99.7453 31.025 95.1494 26.596 95.1494 19.9866C95.1494 13.3772 99.7453 9.01641 106.639 9.01641C108.802 8.94827 111.235 9.62965 112.79 10.5836Z"
											fill="white" />
										<path
											d="M135.162 28.0281C136.04 29.1183 135.702 29.5272 133.54 30.2767C131.377 31.0943 131.039 31.0262 130.295 30.0041L124.145 21.7594L121.374 24.4168V29.7997C121.374 30.2085 120.901 30.6855 120.293 30.6855H117.319C116.643 30.6855 116.237 30.2085 116.237 29.7997V1.52247C116.237 0.0915754 116.643 0.0234375 118.806 0.0234375C121.306 0.0234375 121.374 0.227851 121.374 1.52247V17.603L129.755 9.49461C130.701 8.60882 131.174 8.67695 132.864 9.76716C134.689 10.9255 134.824 11.2662 133.945 12.152L127.727 18.2844L135.162 28.0281Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={120} height={31} viewBox="0 0 120 31"
										fill="none">
										<path fillRule="evenodd" clipRule="evenodd"
											d="M17.8299 2.59615C17.8299 3.8195 16.7629 4.86809 15.518 4.86809C14.2731 4.86809 13.2061 3.8195 13.2061 2.59615C13.2061 1.3728 14.2731 0.324219 15.518 0.324219C16.7629 0.324219 17.8299 1.3728 17.8299 2.59615ZM15.5193 6.73242C14.1559 6.73242 13.0889 7.78101 13.0889 9.12086C13.0889 10.4607 14.1559 11.5093 15.5193 11.5093C16.8828 11.5093 17.9498 10.4607 17.9498 9.12086C17.9498 7.72275 16.8828 6.73242 15.5193 6.73242ZM13.0303 15.5287C13.0303 14.1889 14.1566 13.082 15.52 13.082C16.8835 13.082 18.0691 14.1889 18.0098 15.5287C18.0098 16.8686 16.8835 17.9754 15.52 17.9754C14.1566 17.9754 13.0303 16.8686 13.0303 15.5287ZM15.5193 19.5479C14.1559 19.5479 13.0889 20.5964 13.0889 21.9363C13.0889 23.2762 14.1559 24.3247 15.5193 24.3247C16.8828 24.3247 17.9498 23.2762 17.9498 21.9363C17.9498 20.6547 16.8828 19.5479 15.5193 19.5479ZM13.2061 28.4028C13.2061 27.1794 14.2731 26.1309 15.518 26.1309C16.8221 26.1309 17.8299 27.1794 17.8299 28.4028C17.8299 29.6261 16.7629 30.6747 15.518 30.6747C14.2731 30.6747 13.2061 29.6261 13.2061 28.4028ZM21.9212 6.44141C20.4392 6.44141 19.1943 7.66476 19.1943 9.12112C19.1943 10.5775 20.4392 11.8008 21.9212 11.8008C23.4032 11.8008 24.6481 10.5775 24.6481 9.12112C24.6481 7.66476 23.4032 6.44141 21.9212 6.44141ZM19.0732 15.5872C19.0732 14.0144 20.3774 12.791 21.9187 12.791C23.46 12.791 24.7641 14.0144 24.7641 15.5872C24.7641 17.1601 23.46 18.3835 21.9187 18.3835C20.3181 18.3835 19.0732 17.1019 19.0732 15.5872ZM21.9212 19.2568C20.4392 19.2568 19.1943 20.4802 19.1943 21.9366C19.1943 23.3929 20.4392 24.6163 21.9212 24.6163C23.4032 24.6163 24.6481 23.3929 24.6481 21.9366C24.6481 20.4802 23.4032 19.2568 21.9212 19.2568ZM25.3584 15.5289C25.3584 13.7813 26.8404 12.4414 28.5002 12.4414C30.1601 12.4414 31.5235 13.7813 31.6421 15.5289C31.6421 17.2765 30.2786 18.6164 28.5002 18.6164C26.7218 18.6164 25.3584 17.16 25.3584 15.5289ZM9.0582 7.02344C7.93188 7.02344 6.9834 7.95551 6.9834 9.06235C6.9834 10.1692 7.93188 11.1013 9.0582 11.1013C10.1845 11.1013 11.133 10.1692 11.133 9.06235C11.133 7.95551 10.2438 7.02344 9.0582 7.02344ZM6.8623 15.5285C6.8623 14.3051 7.81078 13.373 9.05566 13.373C10.3005 13.373 11.249 14.3051 11.249 15.5285C11.249 16.7518 10.3005 17.6839 9.05566 17.6839C7.81078 17.6839 6.8623 16.7518 6.8623 15.5285ZM9.0582 19.8398C7.93188 19.8398 6.9834 20.7719 6.9834 21.8788C6.9834 22.9856 7.93188 23.9177 9.0582 23.9177C10.1845 23.9177 11.133 22.9856 11.133 21.8788C11.133 20.7719 10.2438 19.8398 9.0582 19.8398ZM0.698242 15.587C0.698242 14.5384 1.52816 13.7228 2.5952 13.7228C3.66224 13.7228 4.49216 14.5384 4.49216 15.587C4.49216 16.6355 3.66224 17.4511 2.5952 17.4511C1.52816 17.4511 0.698242 16.6355 0.698242 15.587Z"
											fill="white" />
										<path
											d="M55.2343 11.5703C54.9972 11.5703 54.8193 11.8033 54.8193 11.9781V28.1147C54.8193 28.3477 55.0565 28.5224 55.2343 28.5224H57.1905C57.4277 28.5224 57.6055 28.2894 57.6055 28.1147V11.9781C57.6055 11.7451 57.3684 11.5703 57.1905 11.5703H55.2343Z"
											fill="white" />
										<path
											d="M56.3022 4.75391C55.2352 4.75391 54.4053 5.56947 54.4053 6.61806C54.4053 7.66664 55.2352 8.48221 56.3022 8.48221C57.3693 8.48221 58.1992 7.66664 58.1992 6.61806C58.1992 5.56947 57.31 4.75391 56.3022 4.75391Z"
											fill="white" />
										<path
											d="M97.3241 11.5703C97.087 11.5703 96.9092 11.8033 96.9092 11.9781V28.1147C96.9092 28.3477 97.1463 28.5224 97.3241 28.5224H99.2804C99.5175 28.5224 99.6953 28.2894 99.6953 28.1147V11.9781C99.6953 11.7451 99.4582 11.5703 99.2804 11.5703H97.3241Z"
											fill="white" />
										<path
											d="M98.271 4.75391C97.2039 4.75391 96.374 5.56947 96.374 6.61806C96.374 7.66664 97.2039 8.48221 98.271 8.48221C99.338 8.48221 100.168 7.66664 100.168 6.61806C100.168 5.56947 99.338 4.75391 98.271 4.75391Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M118.289 26.756C118.276 26.8126 118.246 26.881 118.174 26.9494C118.174 27.0659 118.05 27.1824 117.803 27.1242L117.898 27.2334C117.886 27.2382 117.874 27.241 117.865 27.241H117.68L117.68 27.2407H117.433V27.0663V26.542H117.865C117.988 26.542 118.112 26.542 118.174 26.6585C118.246 26.6585 118.276 26.699 118.289 26.756ZM117.433 27.2407H117.371V27.765H117.124V26.3086H117.68H117.927C118.05 26.3086 118.174 26.4251 118.174 26.4251C118.297 26.4251 118.297 26.5416 118.297 26.5416V26.6581C118.297 26.6822 118.297 26.7162 118.289 26.756C118.297 26.7958 118.297 26.8437 118.297 26.8915C118.297 27.008 118.297 27.1245 118.174 27.1245C118.101 27.1245 118.029 27.1645 117.969 27.1976C117.943 27.2122 117.919 27.2255 117.898 27.2334L118.359 27.765H118.112L117.68 27.241H117.433V27.2407Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M116.351 27.0664C116.351 26.3674 117.003 25.7266 117.714 25.7266C118.485 25.7266 119.077 26.3091 119.077 27.0664C119.077 27.7655 118.425 28.4063 117.714 28.4063C117.003 28.4063 116.351 27.7655 116.351 27.0664ZM116.468 27.0661C116.468 27.7652 117.001 28.2895 117.713 28.2895C118.365 28.2895 118.958 27.7652 118.958 27.0661C118.958 26.3671 118.424 25.8428 117.713 25.8428C117.001 25.8428 116.468 26.3671 116.468 27.0661Z"
											fill="white" />
										<path
											d="M71.5346 14.1918C71.7717 14.1918 71.9496 13.9588 71.9496 13.7841V11.8617C71.9496 11.6286 71.7124 11.4539 71.5346 11.4539H67.3257V5.27888C67.3257 5.04586 67.0886 4.87109 66.9108 4.87109H64.9545C64.7174 4.87109 64.5396 5.10411 64.5396 5.27888V11.4539H62.4648C62.2276 11.4539 62.0498 11.6869 62.0498 11.8617V13.7841C62.0498 14.0171 62.2869 14.1918 62.4648 14.1918H64.5396V23.5126C64.5396 26.3671 66.4958 28.2312 69.3412 28.2312H71.416C71.6532 28.2312 71.831 27.9982 71.831 27.8235V25.901C71.831 25.668 71.5939 25.4933 71.416 25.4933H69.6376C68.2742 25.4933 67.3257 24.5612 67.3257 23.1048V14.1336H71.5346V14.1918Z"
											fill="white" />
										<path
											d="M113.152 14.1918C113.389 14.1918 113.567 13.9588 113.567 13.7841V11.8617C113.567 11.6286 113.33 11.4539 113.152 11.4539H108.943V5.27888C108.943 5.04586 108.706 4.87109 108.528 4.87109H106.572C106.335 4.87109 106.157 5.10411 106.157 5.27888V11.4539H104.082C103.845 11.4539 103.667 11.6869 103.667 11.8617V13.7841C103.667 14.0171 103.904 14.1918 104.082 14.1918H106.157V23.5126C106.157 26.3671 108.113 28.2312 110.958 28.2312H113.033C113.27 28.2312 113.448 27.9982 113.448 27.8235V25.901C113.448 25.668 113.211 25.4933 113.033 25.4933H111.136C109.773 25.4933 108.824 24.5612 108.824 23.1048V14.1336H113.093L113.152 14.1918Z"
											fill="white" />
										<path
											d="M42.7857 14.1907V27.9388C42.7857 28.1718 43.0228 28.3466 43.2006 28.3466H45.1569C45.394 28.3466 45.5718 28.1136 45.5718 27.9388V14.1907H50.1957C50.4328 14.1907 50.6106 13.9577 50.6106 13.7829V11.8605C50.6106 11.6275 50.3735 11.4527 50.1957 11.4527H45.5718V7.84092C45.5718 6.38455 46.6389 5.39422 47.8837 5.39422H50.1957C50.4328 5.39422 50.6106 5.1612 50.6106 4.98644V3.06403C50.6106 2.83101 50.3735 2.65625 50.1957 2.65625H48.0023C45.0976 2.65625 42.7857 5.04469 42.7857 7.78266V11.4527H40.7109C40.4737 11.4527 40.2959 11.6857 40.2959 11.8605V13.7829C40.2959 14.0159 40.533 14.1907 40.7109 14.1907H42.7857Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M84.6369 10.9277C86.9488 10.9277 89.1422 11.8598 90.6835 13.4909C92.2247 15.1221 93.0547 17.394 93.0547 19.899C93.0547 26.1322 88.7272 28.9284 84.5776 28.9284C80.3687 28.9284 76.1006 26.1905 76.1006 19.899V2.94685C76.1006 2.77208 76.2784 2.53906 76.5155 2.53906H78.4718C78.6496 2.53906 78.8867 2.71383 78.8867 2.94685V13.1997C80.2502 11.8598 82.4435 10.9277 84.6369 10.9277ZM78.8271 19.9575C78.8271 23.045 80.3684 26.3073 84.5773 26.3073C88.7862 26.3073 90.2682 23.045 90.3275 19.9575C90.3275 16.2292 88.0155 13.666 84.5773 13.666C81.1391 13.666 78.8271 16.171 78.8271 19.9575Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={119} height={37} viewBox="0 0 119 37"
										fill="none">
										<path fillRule="evenodd" clipRule="evenodd"
											d="M33.2946 24.8799C33.4715 25.2916 33.6485 25.762 33.8254 26.2325C34.3563 27.5851 34.4743 28.8789 34.2973 30.1728C33.8844 32.878 32.1149 35.2304 29.5195 36.2889C28.5758 36.7006 27.573 36.877 26.5113 36.877C26.2163 36.877 25.8624 36.877 25.5675 36.8182C24.3288 36.7006 23.0901 36.289 21.8515 35.5832C20.3768 34.7599 18.9022 33.5249 17.2506 31.7606C15.599 33.5249 14.1834 34.7599 12.6498 35.5832C11.4111 36.289 10.1724 36.6418 8.93372 36.8182C8.7863 36.8182 8.62414 36.8329 8.46198 36.8476L8.46184 36.8476C8.29963 36.8623 8.13742 36.877 7.98996 36.877C6.92823 36.877 5.92548 36.7006 4.98172 36.2889C2.44536 35.2304 0.557842 32.9368 0.144947 30.1728C-0.0320086 28.8201 0.144947 27.5263 0.616827 26.2325C0.793782 25.7032 0.970738 25.2916 1.14769 24.8799C1.44262 24.233 1.73754 23.5861 1.97348 22.998L2.03247 22.9392C4.62781 17.4111 7.34113 11.8242 10.1724 6.29609L10.2904 6.06086C10.5853 5.53159 10.8802 4.94351 11.1751 4.35544L11.1752 4.35538C11.2546 4.23092 11.334 4.10429 11.4143 3.97632L11.4143 3.97632L11.4143 3.97631C11.7513 3.4391 12.1031 2.8783 12.5318 2.35586C13.7705 0.944427 15.4221 0.121094 17.2506 0.121094C19.0202 0.121094 20.7307 0.944427 21.9104 2.41466C22.5003 3.06157 22.9132 3.76728 23.2671 4.41419L23.2671 4.41429C23.5621 5.00235 23.857 5.59041 24.1519 6.11966L24.2698 6.3549C27.1601 11.883 29.8734 17.4699 32.4098 22.998H32.4688C32.7047 23.5861 32.9996 24.233 33.2946 24.8799ZM62.3168 9.35455C62.3168 10.7072 61.255 11.7657 59.8984 11.7657C58.5417 11.7657 57.48 10.7072 57.48 9.35455C57.48 8.00193 58.5417 6.94336 59.8984 6.94336C61.314 7.00217 62.3168 8.06074 62.3168 9.35455ZM52.4653 14.1761V14.7642C52.4653 14.7642 51.3445 13.2939 48.8672 13.2939C44.8562 13.2939 41.73 16.352 41.73 20.5863C41.73 24.7618 44.8562 27.8787 48.8672 27.8787C51.3445 27.8787 52.4653 26.3497 52.4653 26.3497V26.9966C52.4653 27.2906 52.7012 27.5258 52.9961 27.5258H56.0044V13.6468H52.9961C52.6422 13.6468 52.4653 13.882 52.4653 14.1761ZM49.457 24.5274C50.8136 24.5274 51.9344 23.8217 52.4652 22.9983V18.0583C51.9344 17.2938 50.7547 16.5293 49.457 16.5293C47.0976 16.5293 45.269 17.9995 45.269 20.5283C45.269 23.0572 47.0976 24.5274 49.457 24.5274ZM58.1284 13.6475H61.6675V27.4677H58.1284V13.6475ZM107.437 14.7648C107.437 14.7648 108.617 13.2946 111.035 13.2946C115.046 13.2946 118.172 16.3527 118.172 20.5281C118.172 24.7036 115.046 27.8205 111.035 27.8205C108.558 27.8205 107.437 26.2915 107.437 26.2915V26.9384C107.437 27.2324 107.201 27.4677 106.906 27.4677H103.898V7.00195H107.437V14.7648ZM110.445 24.4678C109.089 24.4678 108.027 23.7621 107.437 22.9388V17.9988C107.968 17.2343 109.148 16.4697 110.445 16.4697C112.805 16.4697 114.633 17.94 114.633 20.4688C114.633 22.9976 112.805 24.4678 110.445 24.4678ZM102.072 27.5258V19.2925C102.072 16.9401 101.6 15.6463 100.42 14.6466C99.3586 13.7644 98.0609 13.2939 96.5273 13.2939C95.1707 13.2939 93.814 13.7056 92.7523 14.7642V14.1761C92.7523 13.882 92.5163 13.6468 92.2214 13.6468H89.3901V27.5258H92.9292V17.8811C93.6371 17.0578 94.7578 16.5285 95.8195 16.5285C97.766 16.5285 98.5328 17.4106 98.5328 19.7042V27.5258H102.072ZM80.7775 13.2944C78.3591 13.2944 77.1794 14.7647 77.1794 14.7647V7.00181H73.6403V27.4675H76.6486C76.9435 27.4675 77.1794 27.2323 77.1794 26.9382V26.2913C77.1794 26.2913 78.3002 27.8204 80.7775 27.8204C84.7885 27.8204 87.9147 24.7035 87.9147 20.528C87.9737 16.3525 84.8475 13.2944 80.7775 13.2944ZM77.1792 22.9388C77.7691 23.7621 78.8308 24.4678 80.1874 24.4678C82.5468 24.4678 84.3754 22.9976 84.3754 20.4688C84.3754 17.94 82.5468 16.4697 80.1874 16.4697C78.8898 16.4697 77.7101 17.2343 77.1792 17.9988V22.9388ZM70.6336 13.2939C71.6953 13.2939 72.2852 13.4704 72.2852 13.4704V16.7637C72.2852 16.7637 69.3359 15.7639 67.5074 17.8811V27.5258H63.9683V13.6468H66.9765C67.2714 13.6468 67.5074 13.882 67.5074 14.1761V14.7642C68.0972 13.9997 69.5129 13.2939 70.6336 13.2939ZM17.1916 28.1144C15.1861 25.5856 13.8885 23.2332 13.4756 21.2925C13.2986 20.4692 13.2396 19.7047 13.3576 19.0578C13.4166 18.4697 13.6525 17.9404 13.9475 17.5287C14.6553 16.5289 15.835 15.882 17.1916 15.882C18.5483 15.882 19.787 16.4701 20.4358 17.5287C20.7307 17.9992 20.9667 18.4697 21.0257 19.0578C21.1436 19.7047 21.0846 20.4692 20.9077 21.2925C20.4948 23.2332 19.1971 25.5856 17.1916 28.1144ZM28.5738 34.1717C30.4023 33.466 31.7 31.8194 31.936 29.8787C32.0539 28.8789 31.936 27.9967 31.759 27.0558C31.6951 26.8648 31.614 26.6737 31.5249 26.464C31.4494 26.2864 31.3683 26.0954 31.2871 25.8796C31.1397 25.5856 31.0069 25.2768 30.8742 24.9681C30.7415 24.6593 30.6088 24.3506 30.4613 24.0565V23.9977C27.925 18.5284 25.2117 12.9415 22.3804 7.47223L22.2624 7.23699C21.9675 6.64889 21.6726 6.0608 21.3776 5.53151C21.0827 4.94342 20.7288 4.35532 20.3159 3.88485C19.5491 3.0027 18.4874 2.53223 17.3666 2.53223C16.2459 2.53223 15.1842 3.0027 14.4174 3.88485C14.0045 4.41413 13.6506 4.94342 13.3557 5.53151L13.3556 5.5316C13.0607 6.11966 12.7658 6.70773 12.4709 7.23699L12.3529 7.47223C9.46264 12.9415 6.74933 18.5284 4.21297 23.9977L4.15399 24.0565C3.85906 24.6446 3.56413 25.2915 3.32819 25.8796C3.15124 26.2913 2.97428 26.7029 2.85631 27.0558C2.44342 28.1144 2.38443 28.9965 2.5024 29.9375C2.73834 31.8194 4.03602 33.466 5.86455 34.2306C6.69034 34.5246 7.6341 34.701 8.63685 34.5834C9.58061 34.4658 10.5244 34.1717 11.4681 33.6425C12.7658 32.8779 14.1225 31.7606 15.6561 30.0551C13.2377 27.0558 11.7041 24.2917 11.1732 21.8806C10.8783 20.7632 10.8193 19.7046 10.9963 18.7637C11.1732 17.8227 11.4681 16.9994 11.999 16.2348C13.1197 14.647 15.0662 13.6472 17.1897 13.6472C19.3131 13.6472 21.2597 14.5882 22.3804 16.2348C22.9112 16.9994 23.2062 17.8227 23.3831 18.7637C23.5011 19.7046 23.4421 20.7632 23.2062 21.8806C22.6163 24.2917 21.1417 26.997 18.7233 29.9963C20.2569 31.7017 21.5546 32.8191 22.9112 33.5837C23.914 34.1129 24.7988 34.407 25.7425 34.5246C26.7453 34.6422 27.689 34.5246 28.5738 34.1717Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={136} height={39} viewBox="0 0 136 39"
										fill="none">
										<path
											d="M24.7247 3.43111C24.184 1.65952 22.2916 0.70559 20.5343 1.25069C18.777 1.7958 17.8308 3.70366 18.3715 5.47524L27.0227 32.3216C27.631 33.9569 29.3882 34.9108 31.0779 34.4339C32.8352 33.8888 33.9166 32.049 33.3759 30.2775C33.3759 30.2093 24.7247 3.43111 24.7247 3.43111Z"
											fill="white" />
										<path
											d="M11.3419 7.86079C10.8012 6.08921 8.90876 5.13528 7.1515 5.68038C5.39424 6.22548 4.44802 8.13335 4.98871 9.90493L13.6399 36.7513C14.2481 38.3866 16.0054 39.3405 17.6951 38.8636C19.4523 38.3184 20.5337 36.4787 19.993 34.7071C19.993 34.639 11.3419 7.86079 11.3419 7.86079Z"
											fill="white" />
										<path
											d="M35.6731 25.7103C37.4304 25.1652 38.3766 23.2574 37.8359 21.4858C37.2952 19.7142 35.4028 18.7603 33.6455 19.3054L6.94861 27.9589C5.32652 28.5721 4.3803 30.3437 4.85341 32.0472C5.39411 33.8188 7.21896 34.909 8.97622 34.3639C9.1114 34.3639 35.6731 25.7103 35.6731 25.7103Z"
											fill="white" />
										<path
											d="M12.4907 33.2751C14.248 32.7299 16.4783 31.9804 18.8439 31.1628C18.3032 29.3912 17.5597 27.1426 16.7487 24.7578L10.3955 26.8701L12.4907 33.2751Z"
											fill="white" />
										<path
											d="M25.9399 28.8454C28.3731 28.0277 30.6034 27.3463 32.2931 26.7331C31.7524 24.9615 31.009 22.713 30.1979 20.3281L23.8447 22.4404L25.9399 28.8454Z"
											fill="white" />
										<path
											d="M31.2794 12.1518C33.0366 11.6066 33.9828 9.69879 33.4421 7.9272C32.9014 6.15561 31.009 5.20168 29.2517 5.74679L2.62244 14.4684C1.00035 15.0817 0.0541306 16.8533 0.52724 18.5567C1.06794 20.3964 2.89279 21.4866 4.65005 20.8734C4.71764 20.8734 31.2794 12.1518 31.2794 12.1518Z"
											fill="white" />
										<path
											d="M8.16453 19.7165C9.9218 19.1714 12.1522 18.4218 14.5177 17.6042C13.7067 15.1512 13.0308 12.9027 12.4225 11.1992L6.06934 13.3115L8.16453 19.7165Z"
											fill="white" />
										<path
											d="M21.5473 15.3532C23.9805 14.5355 26.2109 13.8541 27.9005 13.2409C27.0895 10.7879 26.4136 8.53939 25.8053 6.83594L19.4521 8.94821L21.5473 15.3532Z"
											fill="white" />
										<path
											d="M62.6395 10.5177C63.7885 11.0628 63.9237 11.4035 62.9774 13.1751C62.0312 15.0148 61.8285 15.0829 60.6119 14.606C59.125 13.9927 57.3001 13.5157 56.0836 13.5157C54.1235 13.5157 52.8394 14.1971 52.8394 15.2873C52.8394 18.8305 64.1264 16.9226 64.1264 24.5541C64.1264 28.3698 60.8822 30.8909 56.016 30.8909C53.4477 30.8909 50.2711 30.0051 48.1083 28.9149C47.0269 28.3698 46.9593 28.0291 47.9055 26.1894C48.7166 24.6222 48.9869 24.4178 50.1359 24.8948C52.0283 25.7124 54.3263 26.3257 55.9484 26.3257C57.7732 26.3257 58.9222 25.5762 58.9222 24.486C58.9222 21.0109 47.4324 22.6462 47.4324 15.2873C47.4324 11.4035 50.6766 8.74609 55.4753 8.74609C57.7732 8.95051 60.6795 9.63189 62.6395 10.5177Z"
											fill="white" />
										<path
											d="M71.7645 1.52218V29.8676C71.7645 30.2764 71.2914 30.7533 70.6832 30.7533H67.7093C67.0335 30.7533 66.6279 30.2764 66.6279 29.8676V1.52218C66.6279 0.0912827 67.0335 0.0231448 69.1962 0.0231448C71.6294 -0.0449932 71.7645 0.159421 71.7645 1.52218Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M92.7151 29.595V17.3983C92.7151 12.0836 89.133 8.94922 83.4557 8.94922C80.8874 8.94922 78.0488 9.76687 76.0211 11.1296C74.9397 11.811 74.9397 12.1517 76.0211 13.8551C77.1701 15.5586 77.3729 15.6267 78.4543 15.0135C79.806 14.1958 81.4957 13.6507 82.915 13.6507C85.8889 13.6507 87.6461 15.0135 87.6461 17.262V18.6929C86.2268 18.0797 84.4695 17.739 82.5771 17.739C77.5081 17.739 74.1963 20.4645 74.1963 24.5528C74.1963 28.3685 77.1701 30.9578 81.5633 30.9578C83.8612 30.9578 86.1592 30.0038 87.7137 28.2323L87.6461 29.5269C87.5785 30.2083 88.0516 30.6852 88.7275 30.6852H91.6338C92.242 30.6852 92.7151 30.2764 92.7151 29.595ZM82.1713 26.8698C80.3464 26.8698 79.1299 25.9158 79.1299 24.4849C79.1299 22.7133 80.9547 21.3506 83.6582 21.3506C84.9424 21.3506 86.4293 21.555 87.5783 22.032V23.9398C86.4293 25.7796 84.4017 26.8698 82.1713 26.8698Z"
											fill="white" />
										<path
											d="M112.79 10.5836C113.871 11.1968 113.871 11.5375 112.722 13.3772C111.641 15.0807 111.438 15.217 110.221 14.6037C109.343 14.1268 107.856 13.7179 106.707 13.7179C102.99 13.7179 100.556 16.1709 100.556 19.9185C100.556 23.8023 102.99 26.3916 106.707 26.3916C107.991 26.3916 109.613 25.9146 110.627 25.3014C111.708 24.6881 111.911 24.6881 113.06 26.3916C114.074 27.9588 114.074 28.2994 113.128 28.9808C111.505 30.1392 108.87 31.025 106.572 31.025C99.7453 31.025 95.1494 26.596 95.1494 19.9866C95.1494 13.3772 99.7453 9.01641 106.639 9.01641C108.802 8.94827 111.235 9.62965 112.79 10.5836Z"
											fill="white" />
										<path
											d="M135.162 28.0281C136.04 29.1183 135.702 29.5272 133.54 30.2767C131.377 31.0943 131.039 31.0262 130.295 30.0041L124.145 21.7594L121.374 24.4168V29.7997C121.374 30.2085 120.901 30.6855 120.293 30.6855H117.319C116.643 30.6855 116.237 30.2085 116.237 29.7997V1.52247C116.237 0.0915754 116.643 0.0234375 118.806 0.0234375C121.306 0.0234375 121.374 0.227851 121.374 1.52247V17.603L129.755 9.49461C130.701 8.60882 131.174 8.67695 132.864 9.76716C134.689 10.9255 134.824 11.2662 133.945 12.152L127.727 18.2844L135.162 28.0281Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={119} height={37} viewBox="0 0 119 37"
										fill="none">
										<path fillRule="evenodd" clipRule="evenodd"
											d="M33.5255 24.8799C33.7025 25.2916 33.8794 25.762 34.0564 26.2325C34.5872 27.5851 34.7052 28.8789 34.5283 30.1728C34.1154 32.878 32.3458 35.2304 29.7505 36.2889C28.8067 36.7006 27.804 36.877 26.7422 36.877C26.4473 36.877 26.0934 36.877 25.7985 36.8182C24.5598 36.7006 23.3211 36.289 22.0824 35.5832C20.6078 34.7599 19.1332 33.5249 17.4816 31.7606C15.83 33.5249 14.4144 34.7599 12.8807 35.5832C11.6421 36.289 10.4034 36.6418 9.16468 36.8182C9.01726 36.8182 8.8551 36.8329 8.69294 36.8476L8.6928 36.8476C8.53059 36.8623 8.36838 36.877 8.22092 36.877C7.15919 36.877 6.15644 36.7006 5.21268 36.2889C2.67632 35.2304 0.788799 32.9368 0.375904 30.1728C0.198948 28.8201 0.375904 27.5263 0.847784 26.2325C1.02474 25.7032 1.20169 25.2916 1.37865 24.8799C1.67358 24.233 1.9685 23.5861 2.20444 22.998L2.26343 22.9392C4.85877 17.4111 7.57208 11.8242 10.4034 6.29609L10.5213 6.06086C10.8163 5.53159 11.1112 4.94351 11.4061 4.35544L11.4061 4.35538C11.4855 4.23092 11.565 4.10429 11.6453 3.97632L11.6453 3.97632L11.6453 3.97631C11.9823 3.4391 12.334 2.8783 12.7628 2.35586C14.0015 0.944427 15.653 0.121094 17.4816 0.121094C19.2511 0.121094 20.9617 0.944427 22.1414 2.41466C22.7312 3.06157 23.1441 3.76728 23.4981 4.41419L23.4981 4.41429C23.793 5.00235 24.0879 5.59041 24.3828 6.11966L24.5008 6.3549C27.3911 11.883 30.1044 17.4699 32.6407 22.998H32.6997C32.9357 23.5861 33.2306 24.233 33.5255 24.8799ZM62.5458 9.35455C62.5458 10.7072 61.484 11.7657 60.1274 11.7657C58.7707 11.7657 57.709 10.7072 57.709 9.35455C57.709 8.00193 58.7707 6.94336 60.1274 6.94336C61.543 7.00217 62.5458 8.06074 62.5458 9.35455ZM52.6962 14.1761V14.7642C52.6962 14.7642 51.5755 13.2939 49.0981 13.2939C45.0871 13.2939 41.9609 16.352 41.9609 20.5863C41.9609 24.7618 45.0871 27.8787 49.0981 27.8787C51.5755 27.8787 52.6962 26.3497 52.6962 26.3497V26.9966C52.6962 27.2906 52.9322 27.5258 53.2271 27.5258H56.2353V13.6468H53.2271C52.8732 13.6468 52.6962 13.882 52.6962 14.1761ZM49.6879 24.5274C51.0446 24.5274 52.1653 23.8217 52.6962 22.9983V18.0583C52.1653 17.2938 50.9856 16.5293 49.6879 16.5293C47.3285 16.5293 45.5 17.9995 45.5 20.5283C45.5 23.0572 47.3285 24.5274 49.6879 24.5274ZM58.3574 13.6475H61.8965V27.4677H58.3574V13.6475ZM107.67 14.7647C107.67 14.7647 108.849 13.2944 111.268 13.2944C115.279 13.2944 118.405 16.3525 118.405 20.528C118.405 24.7035 115.279 27.8204 111.268 27.8204C108.79 27.8204 107.67 26.2913 107.67 26.2913V26.9382C107.67 27.2323 107.434 27.4675 107.139 27.4675H104.131V7.00181H107.67V14.7647ZM110.678 24.4678C109.322 24.4678 108.26 23.7621 107.67 22.9388V17.9988C108.201 17.2343 109.38 16.4697 110.678 16.4697C113.038 16.4697 114.866 17.94 114.866 20.4688C114.866 22.9976 113.038 24.4678 110.678 24.4678ZM102.303 27.5258V19.2925C102.303 16.9401 101.831 15.6463 100.651 14.6466C99.5896 13.7644 98.2919 13.2939 96.7583 13.2939C95.4016 13.2939 94.045 13.7056 92.9832 14.7642V14.1761C92.9832 13.882 92.7473 13.6468 92.4524 13.6468H89.6211V27.5258H93.1602V17.8811C93.868 17.0578 94.9887 16.5285 96.0505 16.5285C97.997 16.5285 98.7638 17.4106 98.7638 19.7042V27.5258H102.303ZM81.0085 13.2944C78.5901 13.2944 77.4104 14.7647 77.4104 14.7647V7.00181H73.8713V27.4675H76.8795C77.1745 27.4675 77.4104 27.2323 77.4104 26.9382V26.2913C77.4104 26.2913 78.5311 27.8204 81.0085 27.8204C85.0195 27.8204 88.1457 24.7035 88.1457 20.528C88.2047 16.3525 85.0785 13.2944 81.0085 13.2944ZM77.4102 22.9388C78 23.7621 79.0617 24.4678 80.4184 24.4678C82.7778 24.4678 84.6063 22.9976 84.6063 20.4688C84.6063 17.94 82.7778 16.4697 80.4184 16.4697C79.1207 16.4697 77.941 17.2343 77.4102 17.9988V22.9388ZM70.8626 13.2939C71.9243 13.2939 72.5142 13.4704 72.5142 13.4704V16.7637C72.5142 16.7637 69.5649 15.7639 67.7364 17.8811V27.5258H64.1973V13.6468H67.2055C67.5004 13.6468 67.7364 13.882 67.7364 14.1761V14.7642C68.3262 13.9997 69.7419 13.2939 70.8626 13.2939ZM17.4226 28.1144C15.4171 25.5856 14.1194 23.2332 13.7065 21.2925C13.5296 20.4692 13.4706 19.7047 13.5886 19.0578C13.6475 18.4697 13.8835 17.9404 14.1784 17.5287C14.8862 16.5289 16.0659 15.882 17.4226 15.882C18.7792 15.882 20.0179 16.4701 20.6668 17.5287C20.9617 17.9992 21.1976 18.4697 21.2566 19.0578C21.3746 19.7047 21.3156 20.4692 21.1386 21.2925C20.7258 23.2332 19.4281 25.5856 17.4226 28.1144ZM28.8067 34.1718C30.6352 33.4661 31.9329 31.8194 32.1689 29.8787C32.2868 28.879 32.1689 27.9968 31.9919 27.0559C31.928 26.8648 31.8469 26.6738 31.7578 26.4641C31.6823 26.2865 31.6012 26.0954 31.52 25.8797C31.3726 25.5856 31.2398 25.2769 31.1071 24.9681C30.9744 24.6594 30.8417 24.3506 30.6942 24.0566V23.9978C28.1579 18.5285 25.4446 12.9416 22.6133 7.47228L22.4953 7.23705L22.4953 7.23702C22.2004 6.64893 21.9054 6.06085 21.6105 5.53157C21.3156 4.94347 20.9617 4.35538 20.5488 3.8849C19.782 3.00276 18.7203 2.53228 17.5995 2.53228C16.4788 2.53228 15.4171 3.00276 14.6503 3.8849C14.2374 4.41419 13.8835 4.94347 13.5886 5.53157C13.2936 6.11966 12.9987 6.70776 12.7038 7.23705L12.5858 7.47228C9.69555 12.9416 6.98223 18.5285 4.44587 23.9978L4.38689 24.0566C4.09196 24.6447 3.79704 25.2916 3.5611 25.8797C3.38414 26.2913 3.20719 26.703 3.08922 27.0559C2.67632 28.1144 2.61734 28.9966 2.73531 29.9375C2.97125 31.8194 4.26892 33.4661 6.09746 34.2306C6.92325 34.5247 7.86701 34.7011 8.86975 34.5835C9.81351 34.4659 10.7573 34.1718 11.701 33.6425C12.9987 32.878 14.3554 31.7606 15.889 30.0551C13.4706 27.0559 11.937 24.2918 11.4061 21.8806C11.1112 20.7632 11.0522 19.7047 11.2292 18.7637C11.4061 17.8228 11.701 16.9994 12.2319 16.2349C13.3526 14.647 15.2991 13.6473 17.4226 13.6473C19.5461 13.6473 21.4926 14.5882 22.6133 16.2349C23.1441 16.9994 23.4391 17.8228 23.616 18.7637C23.734 19.7047 23.675 20.7632 23.4391 21.8806C22.8492 24.2918 21.3746 26.997 18.9562 29.9963C20.4898 31.7018 21.7875 32.8192 23.1441 33.5837C24.1469 34.113 25.0317 34.407 25.9754 34.5247C26.9782 34.6423 27.9219 34.5247 28.8067 34.1718Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={136} height={39} viewBox="0 0 136 39"
										fill="none">
										<path
											d="M24.7247 3.43111C24.184 1.65952 22.2916 0.70559 20.5343 1.25069C18.777 1.7958 17.8308 3.70366 18.3715 5.47524L27.0227 32.3216C27.631 33.9569 29.3882 34.9108 31.0779 34.4339C32.8352 33.8888 33.9166 32.049 33.3759 30.2775C33.3759 30.2093 24.7247 3.43111 24.7247 3.43111Z"
											fill="white" />
										<path
											d="M11.3419 7.86079C10.8012 6.08921 8.90876 5.13528 7.1515 5.68038C5.39424 6.22548 4.44802 8.13335 4.98871 9.90493L13.6399 36.7513C14.2481 38.3866 16.0054 39.3405 17.6951 38.8636C19.4523 38.3184 20.5337 36.4787 19.993 34.7071C19.993 34.639 11.3419 7.86079 11.3419 7.86079Z"
											fill="white" />
										<path
											d="M35.6731 25.7103C37.4304 25.1652 38.3766 23.2574 37.8359 21.4858C37.2952 19.7142 35.4028 18.7603 33.6455 19.3054L6.94861 27.9589C5.32652 28.5721 4.3803 30.3437 4.85341 32.0472C5.39411 33.8188 7.21896 34.909 8.97622 34.3639C9.1114 34.3639 35.6731 25.7103 35.6731 25.7103Z"
											fill="white" />
										<path
											d="M12.4907 33.2751C14.248 32.7299 16.4783 31.9804 18.8439 31.1628C18.3032 29.3912 17.5597 27.1426 16.7487 24.7578L10.3955 26.8701L12.4907 33.2751Z"
											fill="white" />
										<path
											d="M25.9399 28.8454C28.3731 28.0277 30.6034 27.3463 32.2931 26.7331C31.7524 24.9615 31.009 22.713 30.1979 20.3281L23.8447 22.4404L25.9399 28.8454Z"
											fill="white" />
										<path
											d="M31.2794 12.1518C33.0366 11.6066 33.9828 9.69879 33.4421 7.9272C32.9014 6.15561 31.009 5.20168 29.2517 5.74679L2.62244 14.4684C1.00035 15.0817 0.0541306 16.8533 0.52724 18.5567C1.06794 20.3964 2.89279 21.4866 4.65005 20.8734C4.71764 20.8734 31.2794 12.1518 31.2794 12.1518Z"
											fill="white" />
										<path
											d="M8.16453 19.7165C9.9218 19.1714 12.1522 18.4218 14.5177 17.6042C13.7067 15.1512 13.0308 12.9027 12.4225 11.1992L6.06934 13.3115L8.16453 19.7165Z"
											fill="white" />
										<path
											d="M21.5473 15.3532C23.9805 14.5355 26.2109 13.8541 27.9005 13.2409C27.0895 10.7879 26.4136 8.53939 25.8053 6.83594L19.4521 8.94821L21.5473 15.3532Z"
											fill="white" />
										<path
											d="M62.6395 10.5177C63.7885 11.0628 63.9237 11.4035 62.9774 13.1751C62.0312 15.0148 61.8285 15.0829 60.6119 14.606C59.125 13.9927 57.3001 13.5157 56.0836 13.5157C54.1235 13.5157 52.8394 14.1971 52.8394 15.2873C52.8394 18.8305 64.1264 16.9226 64.1264 24.5541C64.1264 28.3698 60.8822 30.8909 56.016 30.8909C53.4477 30.8909 50.2711 30.0051 48.1083 28.9149C47.0269 28.3698 46.9593 28.0291 47.9055 26.1894C48.7166 24.6222 48.9869 24.4178 50.1359 24.8948C52.0283 25.7124 54.3263 26.3257 55.9484 26.3257C57.7732 26.3257 58.9222 25.5762 58.9222 24.486C58.9222 21.0109 47.4324 22.6462 47.4324 15.2873C47.4324 11.4035 50.6766 8.74609 55.4753 8.74609C57.7732 8.95051 60.6795 9.63189 62.6395 10.5177Z"
											fill="white" />
										<path
											d="M71.7645 1.52218V29.8676C71.7645 30.2764 71.2914 30.7533 70.6832 30.7533H67.7093C67.0335 30.7533 66.6279 30.2764 66.6279 29.8676V1.52218C66.6279 0.0912827 67.0335 0.0231448 69.1962 0.0231448C71.6294 -0.0449932 71.7645 0.159421 71.7645 1.52218Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M92.7151 29.595V17.3983C92.7151 12.0836 89.133 8.94922 83.4557 8.94922C80.8874 8.94922 78.0488 9.76687 76.0211 11.1296C74.9397 11.811 74.9397 12.1517 76.0211 13.8551C77.1701 15.5586 77.3729 15.6267 78.4543 15.0135C79.806 14.1958 81.4957 13.6507 82.915 13.6507C85.8889 13.6507 87.6461 15.0135 87.6461 17.262V18.6929C86.2268 18.0797 84.4695 17.739 82.5771 17.739C77.5081 17.739 74.1963 20.4645 74.1963 24.5528C74.1963 28.3685 77.1701 30.9578 81.5633 30.9578C83.8612 30.9578 86.1592 30.0038 87.7137 28.2323L87.6461 29.5269C87.5785 30.2083 88.0516 30.6852 88.7275 30.6852H91.6338C92.242 30.6852 92.7151 30.2764 92.7151 29.595ZM82.1713 26.8698C80.3464 26.8698 79.1299 25.9158 79.1299 24.4849C79.1299 22.7133 80.9547 21.3506 83.6582 21.3506C84.9424 21.3506 86.4293 21.555 87.5783 22.032V23.9398C86.4293 25.7796 84.4017 26.8698 82.1713 26.8698Z"
											fill="white" />
										<path
											d="M112.79 10.5836C113.871 11.1968 113.871 11.5375 112.722 13.3772C111.641 15.0807 111.438 15.217 110.221 14.6037C109.343 14.1268 107.856 13.7179 106.707 13.7179C102.99 13.7179 100.556 16.1709 100.556 19.9185C100.556 23.8023 102.99 26.3916 106.707 26.3916C107.991 26.3916 109.613 25.9146 110.627 25.3014C111.708 24.6881 111.911 24.6881 113.06 26.3916C114.074 27.9588 114.074 28.2994 113.128 28.9808C111.505 30.1392 108.87 31.025 106.572 31.025C99.7453 31.025 95.1494 26.596 95.1494 19.9866C95.1494 13.3772 99.7453 9.01641 106.639 9.01641C108.802 8.94827 111.235 9.62965 112.79 10.5836Z"
											fill="white" />
										<path
											d="M135.162 28.0281C136.04 29.1183 135.702 29.5272 133.54 30.2767C131.377 31.0943 131.039 31.0262 130.295 30.0041L124.145 21.7594L121.374 24.4168V29.7997C121.374 30.2085 120.901 30.6855 120.293 30.6855H117.319C116.643 30.6855 116.237 30.2085 116.237 29.7997V1.52247C116.237 0.0915754 116.643 0.0234375 118.806 0.0234375C121.306 0.0234375 121.374 0.227851 121.374 1.52247V17.603L129.755 9.49461C130.701 8.60882 131.174 8.67695 132.864 9.76716C134.689 10.9255 134.824 11.2662 133.945 12.152L127.727 18.2844L135.162 28.0281Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={120} height={31} viewBox="0 0 120 31"
										fill="none">
										<path fillRule="evenodd" clipRule="evenodd"
											d="M17.8299 2.59615C17.8299 3.8195 16.7629 4.86809 15.518 4.86809C14.2731 4.86809 13.2061 3.8195 13.2061 2.59615C13.2061 1.3728 14.2731 0.324219 15.518 0.324219C16.7629 0.324219 17.8299 1.3728 17.8299 2.59615ZM15.5193 6.73242C14.1559 6.73242 13.0889 7.78101 13.0889 9.12086C13.0889 10.4607 14.1559 11.5093 15.5193 11.5093C16.8828 11.5093 17.9498 10.4607 17.9498 9.12086C17.9498 7.72275 16.8828 6.73242 15.5193 6.73242ZM13.0303 15.5287C13.0303 14.1889 14.1566 13.082 15.52 13.082C16.8835 13.082 18.0691 14.1889 18.0098 15.5287C18.0098 16.8686 16.8835 17.9754 15.52 17.9754C14.1566 17.9754 13.0303 16.8686 13.0303 15.5287ZM15.5193 19.5479C14.1559 19.5479 13.0889 20.5964 13.0889 21.9363C13.0889 23.2762 14.1559 24.3247 15.5193 24.3247C16.8828 24.3247 17.9498 23.2762 17.9498 21.9363C17.9498 20.6547 16.8828 19.5479 15.5193 19.5479ZM13.2061 28.4028C13.2061 27.1794 14.2731 26.1309 15.518 26.1309C16.8221 26.1309 17.8299 27.1794 17.8299 28.4028C17.8299 29.6261 16.7629 30.6747 15.518 30.6747C14.2731 30.6747 13.2061 29.6261 13.2061 28.4028ZM21.9212 6.44141C20.4392 6.44141 19.1943 7.66476 19.1943 9.12112C19.1943 10.5775 20.4392 11.8008 21.9212 11.8008C23.4032 11.8008 24.6481 10.5775 24.6481 9.12112C24.6481 7.66476 23.4032 6.44141 21.9212 6.44141ZM19.0732 15.5872C19.0732 14.0144 20.3774 12.791 21.9187 12.791C23.46 12.791 24.7641 14.0144 24.7641 15.5872C24.7641 17.1601 23.46 18.3835 21.9187 18.3835C20.3181 18.3835 19.0732 17.1019 19.0732 15.5872ZM21.9212 19.2568C20.4392 19.2568 19.1943 20.4802 19.1943 21.9366C19.1943 23.3929 20.4392 24.6163 21.9212 24.6163C23.4032 24.6163 24.6481 23.3929 24.6481 21.9366C24.6481 20.4802 23.4032 19.2568 21.9212 19.2568ZM25.3584 15.5289C25.3584 13.7813 26.8404 12.4414 28.5002 12.4414C30.1601 12.4414 31.5235 13.7813 31.6421 15.5289C31.6421 17.2765 30.2786 18.6164 28.5002 18.6164C26.7218 18.6164 25.3584 17.16 25.3584 15.5289ZM9.0582 7.02344C7.93188 7.02344 6.9834 7.95551 6.9834 9.06235C6.9834 10.1692 7.93188 11.1013 9.0582 11.1013C10.1845 11.1013 11.133 10.1692 11.133 9.06235C11.133 7.95551 10.2438 7.02344 9.0582 7.02344ZM6.8623 15.5285C6.8623 14.3051 7.81078 13.373 9.05566 13.373C10.3005 13.373 11.249 14.3051 11.249 15.5285C11.249 16.7518 10.3005 17.6839 9.05566 17.6839C7.81078 17.6839 6.8623 16.7518 6.8623 15.5285ZM9.0582 19.8398C7.93188 19.8398 6.9834 20.7719 6.9834 21.8788C6.9834 22.9856 7.93188 23.9177 9.0582 23.9177C10.1845 23.9177 11.133 22.9856 11.133 21.8788C11.133 20.7719 10.2438 19.8398 9.0582 19.8398ZM0.698242 15.587C0.698242 14.5384 1.52816 13.7228 2.5952 13.7228C3.66224 13.7228 4.49216 14.5384 4.49216 15.587C4.49216 16.6355 3.66224 17.4511 2.5952 17.4511C1.52816 17.4511 0.698242 16.6355 0.698242 15.587Z"
											fill="white" />
										<path
											d="M55.2343 11.5703C54.9972 11.5703 54.8193 11.8033 54.8193 11.9781V28.1147C54.8193 28.3477 55.0565 28.5224 55.2343 28.5224H57.1905C57.4277 28.5224 57.6055 28.2894 57.6055 28.1147V11.9781C57.6055 11.7451 57.3684 11.5703 57.1905 11.5703H55.2343Z"
											fill="white" />
										<path
											d="M56.3022 4.75391C55.2352 4.75391 54.4053 5.56947 54.4053 6.61806C54.4053 7.66664 55.2352 8.48221 56.3022 8.48221C57.3693 8.48221 58.1992 7.66664 58.1992 6.61806C58.1992 5.56947 57.31 4.75391 56.3022 4.75391Z"
											fill="white" />
										<path
											d="M97.3241 11.5703C97.087 11.5703 96.9092 11.8033 96.9092 11.9781V28.1147C96.9092 28.3477 97.1463 28.5224 97.3241 28.5224H99.2804C99.5175 28.5224 99.6953 28.2894 99.6953 28.1147V11.9781C99.6953 11.7451 99.4582 11.5703 99.2804 11.5703H97.3241Z"
											fill="white" />
										<path
											d="M98.271 4.75391C97.2039 4.75391 96.374 5.56947 96.374 6.61806C96.374 7.66664 97.2039 8.48221 98.271 8.48221C99.338 8.48221 100.168 7.66664 100.168 6.61806C100.168 5.56947 99.338 4.75391 98.271 4.75391Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M118.289 26.756C118.276 26.8126 118.246 26.881 118.174 26.9494C118.174 27.0659 118.05 27.1824 117.803 27.1242L117.898 27.2334C117.886 27.2382 117.874 27.241 117.865 27.241H117.68L117.68 27.2407H117.433V27.0663V26.542H117.865C117.988 26.542 118.112 26.542 118.174 26.6585C118.246 26.6585 118.276 26.699 118.289 26.756ZM117.433 27.2407H117.371V27.765H117.124V26.3086H117.68H117.927C118.05 26.3086 118.174 26.4251 118.174 26.4251C118.297 26.4251 118.297 26.5416 118.297 26.5416V26.6581C118.297 26.6822 118.297 26.7162 118.289 26.756C118.297 26.7958 118.297 26.8437 118.297 26.8915C118.297 27.008 118.297 27.1245 118.174 27.1245C118.101 27.1245 118.029 27.1645 117.969 27.1976C117.943 27.2122 117.919 27.2255 117.898 27.2334L118.359 27.765H118.112L117.68 27.241H117.433V27.2407Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M116.351 27.0664C116.351 26.3674 117.003 25.7266 117.714 25.7266C118.485 25.7266 119.077 26.3091 119.077 27.0664C119.077 27.7655 118.425 28.4063 117.714 28.4063C117.003 28.4063 116.351 27.7655 116.351 27.0664ZM116.468 27.0661C116.468 27.7652 117.001 28.2895 117.713 28.2895C118.365 28.2895 118.958 27.7652 118.958 27.0661C118.958 26.3671 118.424 25.8428 117.713 25.8428C117.001 25.8428 116.468 26.3671 116.468 27.0661Z"
											fill="white" />
										<path
											d="M71.5346 14.1918C71.7717 14.1918 71.9496 13.9588 71.9496 13.7841V11.8617C71.9496 11.6286 71.7124 11.4539 71.5346 11.4539H67.3257V5.27888C67.3257 5.04586 67.0886 4.87109 66.9108 4.87109H64.9545C64.7174 4.87109 64.5396 5.10411 64.5396 5.27888V11.4539H62.4648C62.2276 11.4539 62.0498 11.6869 62.0498 11.8617V13.7841C62.0498 14.0171 62.2869 14.1918 62.4648 14.1918H64.5396V23.5126C64.5396 26.3671 66.4958 28.2312 69.3412 28.2312H71.416C71.6532 28.2312 71.831 27.9982 71.831 27.8235V25.901C71.831 25.668 71.5939 25.4933 71.416 25.4933H69.6376C68.2742 25.4933 67.3257 24.5612 67.3257 23.1048V14.1336H71.5346V14.1918Z"
											fill="white" />
										<path
											d="M113.152 14.1918C113.389 14.1918 113.567 13.9588 113.567 13.7841V11.8617C113.567 11.6286 113.33 11.4539 113.152 11.4539H108.943V5.27888C108.943 5.04586 108.706 4.87109 108.528 4.87109H106.572C106.335 4.87109 106.157 5.10411 106.157 5.27888V11.4539H104.082C103.845 11.4539 103.667 11.6869 103.667 11.8617V13.7841C103.667 14.0171 103.904 14.1918 104.082 14.1918H106.157V23.5126C106.157 26.3671 108.113 28.2312 110.958 28.2312H113.033C113.27 28.2312 113.448 27.9982 113.448 27.8235V25.901C113.448 25.668 113.211 25.4933 113.033 25.4933H111.136C109.773 25.4933 108.824 24.5612 108.824 23.1048V14.1336H113.093L113.152 14.1918Z"
											fill="white" />
										<path
											d="M42.7857 14.1907V27.9388C42.7857 28.1718 43.0228 28.3466 43.2006 28.3466H45.1569C45.394 28.3466 45.5718 28.1136 45.5718 27.9388V14.1907H50.1957C50.4328 14.1907 50.6106 13.9577 50.6106 13.7829V11.8605C50.6106 11.6275 50.3735 11.4527 50.1957 11.4527H45.5718V7.84092C45.5718 6.38455 46.6389 5.39422 47.8837 5.39422H50.1957C50.4328 5.39422 50.6106 5.1612 50.6106 4.98644V3.06403C50.6106 2.83101 50.3735 2.65625 50.1957 2.65625H48.0023C45.0976 2.65625 42.7857 5.04469 42.7857 7.78266V11.4527H40.7109C40.4737 11.4527 40.2959 11.6857 40.2959 11.8605V13.7829C40.2959 14.0159 40.533 14.1907 40.7109 14.1907H42.7857Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M84.6369 10.9277C86.9488 10.9277 89.1422 11.8598 90.6835 13.4909C92.2247 15.1221 93.0547 17.394 93.0547 19.899C93.0547 26.1322 88.7272 28.9284 84.5776 28.9284C80.3687 28.9284 76.1006 26.1905 76.1006 19.899V2.94685C76.1006 2.77208 76.2784 2.53906 76.5155 2.53906H78.4718C78.6496 2.53906 78.8867 2.71383 78.8867 2.94685V13.1997C80.2502 11.8598 82.4435 10.9277 84.6369 10.9277ZM78.8271 19.9575C78.8271 23.045 80.3684 26.3073 84.5773 26.3073C88.7862 26.3073 90.2682 23.045 90.3275 19.9575C90.3275 16.2292 88.0155 13.666 84.5773 13.666C81.1391 13.666 78.8271 16.171 78.8271 19.9575Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={119} height={37} viewBox="0 0 119 37"
										fill="none">
										<path fillRule="evenodd" clipRule="evenodd"
											d="M33.2946 24.8799C33.4715 25.2916 33.6485 25.762 33.8254 26.2325C34.3563 27.5851 34.4743 28.8789 34.2973 30.1728C33.8844 32.878 32.1149 35.2304 29.5195 36.2889C28.5758 36.7006 27.573 36.877 26.5113 36.877C26.2163 36.877 25.8624 36.877 25.5675 36.8182C24.3288 36.7006 23.0901 36.289 21.8515 35.5832C20.3768 34.7599 18.9022 33.5249 17.2506 31.7606C15.599 33.5249 14.1834 34.7599 12.6498 35.5832C11.4111 36.289 10.1724 36.6418 8.93372 36.8182C8.7863 36.8182 8.62414 36.8329 8.46198 36.8476L8.46184 36.8476C8.29963 36.8623 8.13742 36.877 7.98996 36.877C6.92823 36.877 5.92548 36.7006 4.98172 36.2889C2.44536 35.2304 0.557842 32.9368 0.144947 30.1728C-0.0320086 28.8201 0.144947 27.5263 0.616827 26.2325C0.793782 25.7032 0.970738 25.2916 1.14769 24.8799C1.44262 24.233 1.73754 23.5861 1.97348 22.998L2.03247 22.9392C4.62781 17.4111 7.34113 11.8242 10.1724 6.29609L10.2904 6.06086C10.5853 5.53159 10.8802 4.94351 11.1751 4.35544L11.1752 4.35538C11.2546 4.23092 11.334 4.10429 11.4143 3.97632L11.4143 3.97632L11.4143 3.97631C11.7513 3.4391 12.1031 2.8783 12.5318 2.35586C13.7705 0.944427 15.4221 0.121094 17.2506 0.121094C19.0202 0.121094 20.7307 0.944427 21.9104 2.41466C22.5003 3.06157 22.9132 3.76728 23.2671 4.41419L23.2671 4.41429C23.5621 5.00235 23.857 5.59041 24.1519 6.11966L24.2698 6.3549C27.1601 11.883 29.8734 17.4699 32.4098 22.998H32.4688C32.7047 23.5861 32.9996 24.233 33.2946 24.8799ZM62.3168 9.35455C62.3168 10.7072 61.255 11.7657 59.8984 11.7657C58.5417 11.7657 57.48 10.7072 57.48 9.35455C57.48 8.00193 58.5417 6.94336 59.8984 6.94336C61.314 7.00217 62.3168 8.06074 62.3168 9.35455ZM52.4653 14.1761V14.7642C52.4653 14.7642 51.3445 13.2939 48.8672 13.2939C44.8562 13.2939 41.73 16.352 41.73 20.5863C41.73 24.7618 44.8562 27.8787 48.8672 27.8787C51.3445 27.8787 52.4653 26.3497 52.4653 26.3497V26.9966C52.4653 27.2906 52.7012 27.5258 52.9961 27.5258H56.0044V13.6468H52.9961C52.6422 13.6468 52.4653 13.882 52.4653 14.1761ZM49.457 24.5274C50.8136 24.5274 51.9344 23.8217 52.4652 22.9983V18.0583C51.9344 17.2938 50.7547 16.5293 49.457 16.5293C47.0976 16.5293 45.269 17.9995 45.269 20.5283C45.269 23.0572 47.0976 24.5274 49.457 24.5274ZM58.1284 13.6475H61.6675V27.4677H58.1284V13.6475ZM107.437 14.7648C107.437 14.7648 108.617 13.2946 111.035 13.2946C115.046 13.2946 118.172 16.3527 118.172 20.5281C118.172 24.7036 115.046 27.8205 111.035 27.8205C108.558 27.8205 107.437 26.2915 107.437 26.2915V26.9384C107.437 27.2324 107.201 27.4677 106.906 27.4677H103.898V7.00195H107.437V14.7648ZM110.445 24.4678C109.089 24.4678 108.027 23.7621 107.437 22.9388V17.9988C107.968 17.2343 109.148 16.4697 110.445 16.4697C112.805 16.4697 114.633 17.94 114.633 20.4688C114.633 22.9976 112.805 24.4678 110.445 24.4678ZM102.072 27.5258V19.2925C102.072 16.9401 101.6 15.6463 100.42 14.6466C99.3586 13.7644 98.0609 13.2939 96.5273 13.2939C95.1707 13.2939 93.814 13.7056 92.7523 14.7642V14.1761C92.7523 13.882 92.5163 13.6468 92.2214 13.6468H89.3901V27.5258H92.9292V17.8811C93.6371 17.0578 94.7578 16.5285 95.8195 16.5285C97.766 16.5285 98.5328 17.4106 98.5328 19.7042V27.5258H102.072ZM80.7775 13.2944C78.3591 13.2944 77.1794 14.7647 77.1794 14.7647V7.00181H73.6403V27.4675H76.6486C76.9435 27.4675 77.1794 27.2323 77.1794 26.9382V26.2913C77.1794 26.2913 78.3002 27.8204 80.7775 27.8204C84.7885 27.8204 87.9147 24.7035 87.9147 20.528C87.9737 16.3525 84.8475 13.2944 80.7775 13.2944ZM77.1792 22.9388C77.7691 23.7621 78.8308 24.4678 80.1874 24.4678C82.5468 24.4678 84.3754 22.9976 84.3754 20.4688C84.3754 17.94 82.5468 16.4697 80.1874 16.4697C78.8898 16.4697 77.7101 17.2343 77.1792 17.9988V22.9388ZM70.6336 13.2939C71.6953 13.2939 72.2852 13.4704 72.2852 13.4704V16.7637C72.2852 16.7637 69.3359 15.7639 67.5074 17.8811V27.5258H63.9683V13.6468H66.9765C67.2714 13.6468 67.5074 13.882 67.5074 14.1761V14.7642C68.0972 13.9997 69.5129 13.2939 70.6336 13.2939ZM17.1916 28.1144C15.1861 25.5856 13.8885 23.2332 13.4756 21.2925C13.2986 20.4692 13.2396 19.7047 13.3576 19.0578C13.4166 18.4697 13.6525 17.9404 13.9475 17.5287C14.6553 16.5289 15.835 15.882 17.1916 15.882C18.5483 15.882 19.787 16.4701 20.4358 17.5287C20.7307 17.9992 20.9667 18.4697 21.0257 19.0578C21.1436 19.7047 21.0846 20.4692 20.9077 21.2925C20.4948 23.2332 19.1971 25.5856 17.1916 28.1144ZM28.5738 34.1717C30.4023 33.466 31.7 31.8194 31.936 29.8787C32.0539 28.8789 31.936 27.9967 31.759 27.0558C31.6951 26.8648 31.614 26.6737 31.5249 26.464C31.4494 26.2864 31.3683 26.0954 31.2871 25.8796C31.1397 25.5856 31.0069 25.2768 30.8742 24.9681C30.7415 24.6593 30.6088 24.3506 30.4613 24.0565V23.9977C27.925 18.5284 25.2117 12.9415 22.3804 7.47223L22.2624 7.23699C21.9675 6.64889 21.6726 6.0608 21.3776 5.53151C21.0827 4.94342 20.7288 4.35532 20.3159 3.88485C19.5491 3.0027 18.4874 2.53223 17.3666 2.53223C16.2459 2.53223 15.1842 3.0027 14.4174 3.88485C14.0045 4.41413 13.6506 4.94342 13.3557 5.53151L13.3556 5.5316C13.0607 6.11966 12.7658 6.70773 12.4709 7.23699L12.3529 7.47223C9.46264 12.9415 6.74933 18.5284 4.21297 23.9977L4.15399 24.0565C3.85906 24.6446 3.56413 25.2915 3.32819 25.8796C3.15124 26.2913 2.97428 26.7029 2.85631 27.0558C2.44342 28.1144 2.38443 28.9965 2.5024 29.9375C2.73834 31.8194 4.03602 33.466 5.86455 34.2306C6.69034 34.5246 7.6341 34.701 8.63685 34.5834C9.58061 34.4658 10.5244 34.1717 11.4681 33.6425C12.7658 32.8779 14.1225 31.7606 15.6561 30.0551C13.2377 27.0558 11.7041 24.2917 11.1732 21.8806C10.8783 20.7632 10.8193 19.7046 10.9963 18.7637C11.1732 17.8227 11.4681 16.9994 11.999 16.2348C13.1197 14.647 15.0662 13.6472 17.1897 13.6472C19.3131 13.6472 21.2597 14.5882 22.3804 16.2348C22.9112 16.9994 23.2062 17.8227 23.3831 18.7637C23.5011 19.7046 23.4421 20.7632 23.2062 21.8806C22.6163 24.2917 21.1417 26.997 18.7233 29.9963C20.2569 31.7017 21.5546 32.8191 22.9112 33.5837C23.914 34.1129 24.7988 34.407 25.7425 34.5246C26.7453 34.6422 27.689 34.5246 28.5738 34.1717Z"
											fill="white" />
									</svg>
								</div>
								<div className="marquee__img">
									<svg xmlns="http://www.w3.org/2000/svg" width={136} height={39} viewBox="0 0 136 39"
										fill="none">
										<path
											d="M24.7247 3.43111C24.184 1.65952 22.2916 0.70559 20.5343 1.25069C18.777 1.7958 17.8308 3.70366 18.3715 5.47524L27.0227 32.3216C27.631 33.9569 29.3882 34.9108 31.0779 34.4339C32.8352 33.8888 33.9166 32.049 33.3759 30.2775C33.3759 30.2093 24.7247 3.43111 24.7247 3.43111Z"
											fill="white" />
										<path
											d="M11.3419 7.86079C10.8012 6.08921 8.90876 5.13528 7.1515 5.68038C5.39424 6.22548 4.44802 8.13335 4.98871 9.90493L13.6399 36.7513C14.2481 38.3866 16.0054 39.3405 17.6951 38.8636C19.4523 38.3184 20.5337 36.4787 19.993 34.7071C19.993 34.639 11.3419 7.86079 11.3419 7.86079Z"
											fill="white" />
										<path
											d="M35.6731 25.7103C37.4304 25.1652 38.3766 23.2574 37.8359 21.4858C37.2952 19.7142 35.4028 18.7603 33.6455 19.3054L6.94861 27.9589C5.32652 28.5721 4.3803 30.3437 4.85341 32.0472C5.39411 33.8188 7.21896 34.909 8.97622 34.3639C9.1114 34.3639 35.6731 25.7103 35.6731 25.7103Z"
											fill="white" />
										<path
											d="M12.4907 33.2751C14.248 32.7299 16.4783 31.9804 18.8439 31.1628C18.3032 29.3912 17.5597 27.1426 16.7487 24.7578L10.3955 26.8701L12.4907 33.2751Z"
											fill="white" />
										<path
											d="M25.9399 28.8454C28.3731 28.0277 30.6034 27.3463 32.2931 26.7331C31.7524 24.9615 31.009 22.713 30.1979 20.3281L23.8447 22.4404L25.9399 28.8454Z"
											fill="white" />
										<path
											d="M31.2794 12.1518C33.0366 11.6066 33.9828 9.69879 33.4421 7.9272C32.9014 6.15561 31.009 5.20168 29.2517 5.74679L2.62244 14.4684C1.00035 15.0817 0.0541306 16.8533 0.52724 18.5567C1.06794 20.3964 2.89279 21.4866 4.65005 20.8734C4.71764 20.8734 31.2794 12.1518 31.2794 12.1518Z"
											fill="white" />
										<path
											d="M8.16453 19.7165C9.9218 19.1714 12.1522 18.4218 14.5177 17.6042C13.7067 15.1512 13.0308 12.9027 12.4225 11.1992L6.06934 13.3115L8.16453 19.7165Z"
											fill="white" />
										<path
											d="M21.5473 15.3532C23.9805 14.5355 26.2109 13.8541 27.9005 13.2409C27.0895 10.7879 26.4136 8.53939 25.8053 6.83594L19.4521 8.94821L21.5473 15.3532Z"
											fill="white" />
										<path
											d="M62.6395 10.5177C63.7885 11.0628 63.9237 11.4035 62.9774 13.1751C62.0312 15.0148 61.8285 15.0829 60.6119 14.606C59.125 13.9927 57.3001 13.5157 56.0836 13.5157C54.1235 13.5157 52.8394 14.1971 52.8394 15.2873C52.8394 18.8305 64.1264 16.9226 64.1264 24.5541C64.1264 28.3698 60.8822 30.8909 56.016 30.8909C53.4477 30.8909 50.2711 30.0051 48.1083 28.9149C47.0269 28.3698 46.9593 28.0291 47.9055 26.1894C48.7166 24.6222 48.9869 24.4178 50.1359 24.8948C52.0283 25.7124 54.3263 26.3257 55.9484 26.3257C57.7732 26.3257 58.9222 25.5762 58.9222 24.486C58.9222 21.0109 47.4324 22.6462 47.4324 15.2873C47.4324 11.4035 50.6766 8.74609 55.4753 8.74609C57.7732 8.95051 60.6795 9.63189 62.6395 10.5177Z"
											fill="white" />
										<path
											d="M71.7645 1.52218V29.8676C71.7645 30.2764 71.2914 30.7533 70.6832 30.7533H67.7093C67.0335 30.7533 66.6279 30.2764 66.6279 29.8676V1.52218C66.6279 0.0912827 67.0335 0.0231448 69.1962 0.0231448C71.6294 -0.0449932 71.7645 0.159421 71.7645 1.52218Z"
											fill="white" />
										<path fillRule="evenodd" clipRule="evenodd"
											d="M92.7151 29.595V17.3983C92.7151 12.0836 89.133 8.94922 83.4557 8.94922C80.8874 8.94922 78.0488 9.76687 76.0211 11.1296C74.9397 11.811 74.9397 12.1517 76.0211 13.8551C77.1701 15.5586 77.3729 15.6267 78.4543 15.0135C79.806 14.1958 81.4957 13.6507 82.915 13.6507C85.8889 13.6507 87.6461 15.0135 87.6461 17.262V18.6929C86.2268 18.0797 84.4695 17.739 82.5771 17.739C77.5081 17.739 74.1963 20.4645 74.1963 24.5528C74.1963 28.3685 77.1701 30.9578 81.5633 30.9578C83.8612 30.9578 86.1592 30.0038 87.7137 28.2323L87.6461 29.5269C87.5785 30.2083 88.0516 30.6852 88.7275 30.6852H91.6338C92.242 30.6852 92.7151 30.2764 92.7151 29.595ZM82.1713 26.8698C80.3464 26.8698 79.1299 25.9158 79.1299 24.4849C79.1299 22.7133 80.9547 21.3506 83.6582 21.3506C84.9424 21.3506 86.4293 21.555 87.5783 22.032V23.9398C86.4293 25.7796 84.4017 26.8698 82.1713 26.8698Z"
											fill="white" />
										<path
											d="M112.79 10.5836C113.871 11.1968 113.871 11.5375 112.722 13.3772C111.641 15.0807 111.438 15.217 110.221 14.6037C109.343 14.1268 107.856 13.7179 106.707 13.7179C102.99 13.7179 100.556 16.1709 100.556 19.9185C100.556 23.8023 102.99 26.3916 106.707 26.3916C107.991 26.3916 109.613 25.9146 110.627 25.3014C111.708 24.6881 111.911 24.6881 113.06 26.3916C114.074 27.9588 114.074 28.2994 113.128 28.9808C111.505 30.1392 108.87 31.025 106.572 31.025C99.7453 31.025 95.1494 26.596 95.1494 19.9866C95.1494 13.3772 99.7453 9.01641 106.639 9.01641C108.802 8.94827 111.235 9.62965 112.79 10.5836Z"
											fill="white" />
										<path
											d="M135.162 28.0281C136.04 29.1183 135.702 29.5272 133.54 30.2767C131.377 31.0943 131.039 31.0262 130.295 30.0041L124.145 21.7594L121.374 24.4168V29.7997C121.374 30.2085 120.901 30.6855 120.293 30.6855H117.319C116.643 30.6855 116.237 30.2085 116.237 29.7997V1.52247C116.237 0.0915754 116.643 0.0234375 118.806 0.0234375C121.306 0.0234375 121.374 0.227851 121.374 1.52247V17.603L129.755 9.49461C130.701 8.60882 131.174 8.67695 132.864 9.76716C134.689 10.9255 134.824 11.2662 133.945 12.152L127.727 18.2844L135.162 28.0281Z"
											fill="white" />
									</svg>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>



			<section className="work--step--area">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 mt_20">
							<div className="single--title">
								<h3 className="common--sub--heading mt_10" data-aos="fade-up" data-aos-duration="1000">HOW
									WE WORK</h3>
							</div>
						</div>
						<div className="col-lg-9 mt_20">
							<div className="about--right--text">
								<h3 className="common--heading" data-aos="fade-up" data-aos-duration="1000">From Scratch to
									<span className="primary--dark">Viable Product</span> We<br /> Follow <span
										className="primary--dark">Many Steps.</span>
								</h3>
								<p className="common--para" data-aos="fade-up" data-aos-duration="1000">At Softvence, our journey from concept to a viable product involves strategic planning, innovative design, and precise development. We prioritize constant communication, rigorous testing, and client feedback to ensure a seamless transition, from scratch to a robust, viable product. With a methodical approach, we turn ideas into reality, guaranteeing excellence at every step.</p>
							</div>
						</div>
					</div>
					<div className="row">
						<div className="work--steps--wrapper">
							<div className="work--step step--one">
								<div className="row align-items-center">
									<div className="col-md-6">
										<div className="lottie--container target1">
										</div>
									</div>
									<div className="col-md-6">
										<div className="design--contents">
											<div className="step--number">01</div>
											<h3>Discovery</h3>
											<ul className="step--info">
												<li>
													<img src="https://softvence-assect.vercel.app/assets/images/check.svg" data-bv-data- className="bv-tag-attr-replace data-bv-lazyload-tag-img" loading="lazy" alt="" />
													<p>We ensure that all requirements are understood.</p>
												</li>
												<li className="mt_20">
													<img src="https://softvence-assect.vercel.app/assets/images/check.svg" data-bv-data- className="bv-tag-attr-replace data-bv-lazyload-tag-img" loading="lazy" alt="" />
													<p>We will advise you without obligation and evaluate the best
														solution together with you.</p>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="work--step step--two">
								<div className="row row-reverse align-items-center">
									<div className="col-md-6">
										<div className="lottie--container target2"></div>
									</div>
									<div className="col-md-6">
										<div className="design--contents">
											<div className="step--number">02</div>
											<h3>Design</h3>
											<ul className="step--info">
												<li>
													<img src="https://softvence-assect.vercel.app/assets/images/check.svg" data-bv-data- className="bv-tag-attr-replace data-bv-lazyload-tag-img" loading="lazy" alt="" />
													<p>In the design phase, the look of the website is developed and
														presented.</p>
												</li>
												<li className="mt_20">
													<img src="https://softvence-assect.vercel.app/assets/images/check.svg" data-bv-data- className="bv-tag-attr-replace data-bv-lazyload-tag-img" loading="lazy" alt="" />
													<p>The prototype will be developed until your complete satisfaction
													</p>
												</li>
												<li className="mt_20">
													<img src="https://softvence-assect.vercel.app/assets/images/check.svg" data-bv-data- className="bv-tag-attr-replace data-bv-lazyload-tag-img" loading="lazy" alt="" />
													<p>Additions are recorded in writing and incorporated into the
														development phase</p>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="work--step step--three">
								<div className="row align-items-center">
									<div className="col-md-6">
										<div className="lottie--container target3"></div>
									</div>
									<div className="col-md-6">
										<div className="design--contents">
											<div className="step--number">03</div>
											<h3>Development</h3>
											<ul className="step--info">
												<li>
													<img src="https://softvence-assect.vercel.app/assets/images/check.svg" data-bv-data- className="bv-tag-attr-replace data-bv-lazyload-tag-img" loading="lazy" alt="" />
													<p>The website is implemented based on the prototype</p>
												</li>
												<li className="mt_20">
													<img src="https://softvence-assect.vercel.app/assets/images/check.svg" data-bv-data- className="bv-tag-attr-replace data-bv-lazyload-tag-img" loading="lazy" alt="" />
													<p>You will receive regular insight into ongoing work.</p>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="work--step step--four">
								<div className="row row-reverse align-items-center">
									<div className="col-md-6">
										<div className="lottie--container target4"></div>
									</div>
									<div className="col-md-6">
										<div className="design--contents">
											<div className="step--number">04</div>
											<h3>Testing</h3>
											<ul className="step--info">
												<li>
													<img src="https://softvence-assect.vercel.app/assets/images/check.svg" data-bv-data- className="bv-tag-attr-replace data-bv-lazyload-tag-img" loading="lazy" alt="" />
													<p>From our end we Ensure testing the functionalities and make sure
														everything works well.</p>
												</li>
												<li className="mt_20">
													<img src="https://softvence-assect.vercel.app/assets/images/check.svg" data-bv-data- className="bv-tag-attr-replace data-bv-lazyload-tag-img" loading="lazy" alt="" />
													<p>quality Assurance is the most important task to handle the whole
														websit</p>
												</li>
												<li className="mt_20">
													<img src="https://softvence-assect.vercel.app/assets/images/check.svg" data-bv-data- className="bv-tag-attr-replace data-bv-lazyload-tag-img" loading="lazy" alt="" />
													<p>Additions are recorded in writing and incorporated into the
														development phase</p>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="work--step step--five">
								<div className="row align-items-center">
									<div className="col-md-6">
										<div className="lottie--container target5"></div>
									</div>
									<div className="col-md-6">
										<div className="design--contents">
											<div className="step--number">05</div>
											<h3>Improvement</h3>
											<ul className="step--info">
												<li>
													<img src="https://softvence-assect.vercel.app/assets/images/check.svg" data-bv-data- className="bv-tag-attr-replace data-bv-lazyload-tag-img" loading="lazy" alt="" />
													<p>The findings from the testing phase are corrected and
														implemented.</p>
												</li>
												<li className="mt_20">
													<img src="https://softvence-assect.vercel.app/assets/images/check.svg" data-bv-data- className="bv-tag-attr-replace data-bv-lazyload-tag-img" loading="lazy" alt="" />
													<p>Last but not least, the customer checks the website through its
														paces.</p>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
							<div className="work--step step--six">
								<div className="row row-reverse align-items-center">
									<div className="col-md-6">
										<div className="lottie--container target6"></div>
									</div>
									<div className="col-md-6">
										<div className="design--contents">
											<div className="step--number">06</div>
											<h3>Completion</h3>
											<ul className="step--info">
												<li>
													<img src="https://softvence-assect.vercel.app/assets/images/check.svg" data-bv-data- className="bv-tag-attr-replace data-bv-lazyload-tag-img" loading="lazy" alt="" />
													<p>Hooray! The website is live and working properly.</p>
												</li>
												<li className="mt_20">
													<img src="https://softvence-assect.vercel.app/assets/images/check.svg" data-bv-data- className="bv-tag-attr-replace data-bv-lazyload-tag-img" loading="lazy" alt="" />
													<p>We stands behind this product and you are completely satisfied
														with your new website.</p>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>


			<CaseStudySection />



			<section className="testimonial--area section section-light">
				<div className="container">
					<div className="row title--row">
						<div className="col-lg-3 mt_20">
							<div className="single--title">
								<h3 className="common--sub--heading mt_10" data-aos="fade-up" data-aos-duration="1000">
									TESTIMONIALS</h3>
							</div>
						</div>
						<div className="col-lg-9 mt_20">
							<div className="testimonial--right--title">
								<h3 className="common--heading" data-aos="fade-up" data-aos-duration="1000">
									We value each and every client’s <span className="primary--dark">feedback</span> which helps us to<br />
									<span className="primary--dark">improve.</span>								</h3>
							</div>
						</div>
						<div className="col-md-12">

							<div className="owl-carousel testi--slider" data-aos="fade-In" data-aos-duration="2000">

								<div className="item">
									<div className="testi--box">

										<div className="client--img--area">
											<img src="https://softvence.agency/wp-content/uploads/2024/02/image_2023_12_12T10_54_43_560Z.png" loading="lazy" alt="Steve Zee" />
											<a href="#" className="play--review">
												<svg viewBox="0 0 18 18" version="1.1"
													xmlns="http://www.w3.org/2000/svg"
													xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000">
													<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
													<g id="SVGRepo_tracerCarrier" strokeLinecap="round"
														strokeLinejoin="round"></g>
													<g id="SVGRepo_iconCarrier">
														<title>multimedia / 9 - multimedia, play icon</title>
														<g id="Free-Icons" stroke="none" strokeWidth="1" fill="#000"
															fillRule="evenodd" strokeLinecap="round"
															strokeLinejoin="round">
															<g transform="translate(-749.000000, -379.000000)"
																id="Group" stroke="#000" strokeWidth="2">
																<g transform="translate(745.000000, 376.000000)"
																	id="Shape">
																	<path
																		d="M5,4.67805648 C5,4.56284567 5.03231968,4.44953549 5.09390785,4.34882312 C5.29405709,4.02152811 5.74836552,3.90360587 6.10863414,4.08543644 L20.6160344,11.4074417 C20.7378493,11.4689227 20.8382812,11.5601626 20.9059562,11.6708284 C21.1061054,11.9981234 20.976303,12.4108512 20.6160344,12.5926818 L6.10863414,19.9146871 C5.99777542,19.9706384 5.87304972,20 5.7462319,20 C5.3340994,20 5,19.6964791 5,19.322067 L5,4.67805648 Z">
																	</path>
																</g>
															</g>
														</g>
													</g>
												</svg>
											</a>
										</div>

										<div className="client--content">
											<p>Softvence Agency and their team were so professional. From the first discussion all the way through to the end they were exceptional. Their communication and patience are first class and this was so important to me whilst building a website. The quality of their work is superb! They have the skills to be able to do pretty much anything you ask of them and so this makes this very valuable. I will be using them for all future websites and any other website design and development help. Thanks team Softvence :)</p>
											<div className="company--name">
												<h4>Steve Zee. <span>Founder at iMU &amp; RegS Company</span></h4>
												<img src="https://softvence.agency/wp-content/uploads/2024/02/Gold-iMU-1.png" loading="lazy" alt="iMU Logo" />
											</div>
										</div>
									</div>
								</div>
								<div className="item">
									<div className="testi--box">

										<div className="client--img--area">
											<img src="https://softvence.agency/wp-content/uploads/2024/02/client3-scaled.jpg" loading="lazy" alt="Colin Hartlieb" />
											<a href="#" className="play--review">
												<svg viewBox="0 0 18 18" version="1.1"
													xmlns="http://www.w3.org/2000/svg"
													xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000">
													<g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
													<g id="SVGRepo_tracerCarrier" strokeLinecap="round"
														strokeLinejoin="round"></g>
													<g id="SVGRepo_iconCarrier">
														<title>multimedia / 9 - multimedia, play icon</title>
														<g id="Free-Icons" stroke="none" strokeWidth="1" fill="#000"
															fillRule="evenodd" strokeLinecap="round"
															strokeLinejoin="round">
															<g transform="translate(-749.000000, -379.000000)"
																id="Group" stroke="#000" strokeWidth="2">
																<g transform="translate(745.000000, 376.000000)"
																	id="Shape">
																	<path
																		d="M5,4.67805648 C5,4.56284567 5.03231968,4.44953549 5.09390785,4.34882312 C5.29405709,4.02152811 5.74836552,3.90360587 6.10863414,4.08543644 L20.6160344,11.4074417 C20.7378493,11.4689227 20.8382812,11.5601626 20.9059562,11.6708284 C21.1061054,11.9981234 20.976303,12.4108512 20.6160344,12.5926818 L6.10863414,19.9146871 C5.99777542,19.9706384 5.87304972,20 5.7462319,20 C5.3340994,20 5,19.6964791 5,19.322067 L5,4.67805648 Z">
																	</path>
																</g>
															</g>
														</g>
													</g>
												</svg>
											</a>
										</div>

										<div className="client--content">
											<p>Softvence Agency was amazing to work with. They went above and beyond with our project. They delivered the Webflow site just as our wireframe showed and he was able to work out any bugs or fixes we requested in the span of 3-4 weeks without hesitation. That tells you they actually care about customer satisfaction instead of just doing the bare minimum. I appreciate all your hard work on this, team Softvence! 5 out of 5 stars! I highly recommend Softvence Agency for any website design and development projects!</p>
											<div className="company--name">
												<h4>colin hartlieb. <span>Founder at colinwolfpack</span></h4>
												<img src="https://softvence.agency/wp-content/uploads/2024/02/softy_black.png" loading="lazy" alt="Colinwolfpack Logo" />
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>


			<section className="faq--area section section-dark" data-aos="fade-In" data-aos-duration="1800">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 mt_20">

							<div className="section--title">
								<h3 className="common--sub--heading text--left" data-aos="fade-up" data-aos-duration="1000">Faq</h3>
							</div>

						</div>
						<div className="col-lg-9 mt_20">

							<div className="testimonial--right--title">
								<h3 className="common--heading" data-aos="fade-up" data-aos-duration="1000">Frequently <span className="primary--color"> Asked Questions</span></h3>
								<p className="common--para" data-aos="fade-up" data-aos-duration="1000">Softvence Agency and their team were so professional.</p>
							</div>


							<div className="accordion mt_50" id="accordionExample">

								<div className="accordion-item" data-aos="fade-up" data-aos-duration="1000">
									<h2 className="accordion-header">
										<button className="accordion-button open-faq " data-bs-toggle="collapse"
											data-bs-target="#faqcollapse1" aria-expanded="true">
											<p>Why is branding crucial for my business?</p>
										</button>
									</h2>
									<div id="faqcollapse1" className="accordion-collapse collapse show "
										data-bs-parent="#accordionExample">
										<div className="accordion-body">
											<p>Branding is your business&#039;s visual identity. It fosters recognition, builds trust, and sets you apart. It&#039;s the face of your brand, making it indispensable for a lasting impression.</p>
										</div>
									</div>
								</div>
								<div className="accordion-item" data-aos="fade-up" data-aos-duration="1000">
									<h2 className="accordion-header">
										<button className="accordion-button open-faq collapsed" data-bs-toggle="collapse"
											data-bs-target="#faqcollapse2" aria-expanded="true">
											<p>How long does it take to develop a brand guideline?</p>
										</button>
									</h2>
									<div id="faqcollapse2" className="accordion-collapse collapse  "
										data-bs-parent="#accordionExample">
										<div className="accordion-body">
											<p>Designing a unique brand guideline takes time, typically ranging from a few days to a couple of weeks. The duration depends on the complexity and depth required for your brand.</p>
										</div>
									</div>
								</div>
								<div className="accordion-item" data-aos="fade-up" data-aos-duration="1000">
									<h2 className="accordion-header">
										<button className="accordion-button open-faq collapsed" data-bs-toggle="collapse"
											data-bs-target="#faqcollapse3" aria-expanded="true">
											<p>What specific areas do you specialize in as a UI/UX agency?</p>
										</button>
									</h2>
									<div id="faqcollapse3" className="accordion-collapse collapse  "
										data-bs-parent="#accordionExample">
										<div className="accordion-body">
											<p>At Softvence Agency, we specialize in crafting design solutions blending interactivity, visual aesthetics, and user-friendly intuitiveness. Our expertise covers websites, web and mobile apps, enterprise software, AR/VR interfaces, brand identity, front-end web design and many more.</p>
										</div>
									</div>
								</div>
								<div className="accordion-item" data-aos="fade-up" data-aos-duration="1000">
									<h2 className="accordion-header">
										<button className="accordion-button open-faq collapsed" data-bs-toggle="collapse"
											data-bs-target="#faqcollapse4" aria-expanded="true">
											<p>How will investing in UI/UX design impact my business growth?</p>
										</button>
									</h2>
									<div id="faqcollapse4" className="accordion-collapse collapse  "
										data-bs-parent="#accordionExample">
										<div className="accordion-body">
											<p>Imagine your business as a digital masterpiece, carefully shaped by the artistry of UI/UX design. Keeping this in focus, investing in UI/UX design will help you to craft experiences that resonate. Our intuitive web experiences are powerful catalysts for business growth, attracting new users and expanding your user base.</p>
										</div>
									</div>
								</div>
								<div className="accordion-item" data-aos="fade-up" data-aos-duration="1000">
									<h2 className="accordion-header">
										<button className="accordion-button open-faq collapsed" data-bs-toggle="collapse"
											data-bs-target="#faqcollapse5" aria-expanded="true">
											<p>How long does it take to develop a website?</p>
										</button>
									</h2>
									<div id="faqcollapse5" className="accordion-collapse collapse  "
										data-bs-parent="#accordionExample">
										<div className="accordion-body">
											<p>Website development timelines vary based on complexity. We ensure a balance between speed and precision, delivering results within weeks for simpler sites and a few months for complex projects.</p>
										</div>
									</div>
								</div>
								<div className="accordion-item" data-aos="fade-up" data-aos-duration="1000">
									<h2 className="accordion-header">
										<button className="accordion-button open-faq collapsed" data-bs-toggle="collapse"
											data-bs-target="#faqcollapse6" aria-expanded="true">
											<p>What technologies do you use for web development?</p>
										</button>
									</h2>
									<div id="faqcollapse6" className="accordion-collapse collapse  "
										data-bs-parent="#accordionExample">
										<div className="accordion-body">
											<p>Our web development leverages cutting-edge technologies including HTML, CSS, JavaScript, and frameworks like React or Angular, tailored to your project&#039;s needs.

												We stay updated with the latest frameworks, ensuring optimal performance, security, and scalability.
											</p>
										</div>
									</div>
								</div>
								<div className="accordion-item" data-aos="fade-up" data-aos-duration="1000">
									<h2 className="accordion-header">
										<button className="accordion-button open-faq collapsed" data-bs-toggle="collapse"
											data-bs-target="#faqcollapse7" aria-expanded="true">
											<p>What platforms do you develop mobile apps for?</p>
										</button>
									</h2>
									<div id="faqcollapse7" className="accordion-collapse collapse  "
										data-bs-parent="#accordionExample">
										<div className="accordion-body">
											<p>We specialize in developing mobile apps for iOS and Android platforms, ensuring a seamless accessibility and consistent user experience across different devices.</p>
										</div>
									</div>
								</div>
								<div className="accordion-item" data-aos="fade-up" data-aos-duration="1000">
									<h2 className="accordion-header">
										<button className="accordion-button open-faq collapsed" data-bs-toggle="collapse"
											data-bs-target="#faqcollapse8" aria-expanded="true">
											<p>How do you ensure app security and user data protection?</p>
										</button>
									</h2>
									<div id="faqcollapse8" className="accordion-collapse collapse  "
										data-bs-parent="#accordionExample">
										<div className="accordion-body">
											<p>Security is a top priority. We implement robust encryption, secure coding practices, and follow industry best practices to safeguard user data, ensuring a secure app environment.</p>
										</div>
									</div>
								</div>
								<div className="accordion-item" data-aos="fade-up" data-aos-duration="1000">
									<h2 className="accordion-header">
										<button className="accordion-button open-faq collapsed" data-bs-toggle="collapse"
											data-bs-target="#faqcollapse9" aria-expanded="true">
											<p>What topics can be discussed during a consultation session?</p>
										</button>
									</h2>
									<div id="faqcollapse9" className="accordion-collapse collapse  "
										data-bs-parent="#accordionExample">
										<div className="accordion-body">
											<p>Our consultation covers various aspects, including project requirements, goals, timelines, budget considerations, and how our services align with your business objectives.</p>
										</div>
									</div>
								</div>
								<div className="accordion-item" data-aos="fade-up" data-aos-duration="1000">
									<h2 className="accordion-header">
										<button className="accordion-button open-faq collapsed" data-bs-toggle="collapse"
											data-bs-target="#faqcollapse10" aria-expanded="true">
											<p>How do I schedule a consultation with your team?</p>
										</button>
									</h2>
									<div id="faqcollapse10" className="accordion-collapse collapse  "
										data-bs-parent="#accordionExample">
										<div className="accordion-body">
											<p>Scheduling a consultation is easy. Simply reach out to us through our website&#039;s contact form or email, and our team will promptly arrange a suitable time for a discussion.</p>
										</div>
									</div>
								</div>

							</div>


						</div>
					</div>
				</div>
			</section>


			<section className="blog--area section section-light">
				<div className="container">
					<div className="row">
						<div className="col-lg-3 mt_20">
							<div className="single--title">
								<h3 className="common--sub--heading mt_10" data-aos="fade-up" data-aos-duration="1000">NEWS
									& BLOG</h3>
							</div>
						</div>
						<div className="col-lg-9 mt_20">
							<div className="testimonial--right--title">
								<h3 className="common--heading" data-aos="fade-up" data-aos-duration="1000">We Provide
									valuable & <span className="primary--dark">new Details
										on technologies</span> in our everyday blogs.
								</h3>
								<p className="common--para" data-aos="fade-up" data-aos-duration="1000">
									Dive into our insightful blogs for valuable tech details! Explore the latest in innovation and stay ahead with Softvence Agency.								</p>
							</div>
						</div>
					</div>
					<div className="row mt_50 blog--row">
						<div className="col-lg-4 col-md-6 mt_20" data-aos="fade-up" data-aos-duration="1000">

							<a className="blog--box" href="low-fidelity-vs-high-fidelity-prototyping-a-complete-guide/index.html">
								<div className="img--area">
									<img src="https://softvence.agency/wp-content/uploads/2024/02/Frame-8631.png?bv_host=softvence.agency&amp;bv-resized-infos=bv_resized_mobile%3A179%2A230%3Bbv_resized_ipad%3A179%2A230%3Bbv_resized_desktop%3A179%2A230" data-bv-data- loading="lazy" className="w-100 data-bv-tag-attr-replace data-bv-lazyload-tag-img" alt="" />
								</div>
								<div className="blog--content">
									<h4>Low-Fidelity vs High-Fidelity Prototyping: A Complete Guide</h4>
									<div className="category">
										<p>Reading Time 3 Min</p>
										<p>
											Web Design										</p>
									</div>
								</div>
							</a>
						</div>
						<div className="col-lg-4 col-md-6 mt_20" data-aos="fade-up" data-aos-duration="1000">

							<a className="blog--box" href="who-are-you-affiliated-with/index.html">
								<div className="img--area">
									<img src="https://softvence.agency/wp-content/uploads/2024/02/blog1.png?bv_host=softvence.agency&amp;bv-resized-infos=bv_resized_mobile%3A427%2A357%3Bbv_resized_ipad%3A427%2A357%3Bbv_resized_desktop%3A427%2A357" data-bv-data- loading="lazy" className="w-100 data-bv-tag-attr-replace data-bv-lazyload-tag-img" alt="" />
								</div>
								<div className="blog--content">
									<h4>Who are you affiliated with?</h4>
									<div className="category">
										<p>Reading Time 1 Min</p>
										<p>
											Web Design										</p>
									</div>
								</div>
							</a>
						</div>
						<div className="btn--area text-center">
							<a href="/blog" className="button buttonv2 mt_100 button-click" data-aos="fade-up"
								data-aos-duration="1000">View All</a>
						</div>
					</div>
				</div>
			</section>



			<div className="showrell--video--modal">
				<div className="modal--item">
					<video className="showrell--video" preload="metadata" loop playsInline src="https://softvence.agency/wp-content/uploads/2025/11/From-the-very-beginning-we-believed-in.mp4"></video>
				</div>
			</div>




		</>
	);
}
