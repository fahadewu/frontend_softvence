'use client';

import React, { useEffect, useState } from 'react';
import Preloader from '@/components/Preloader';
import Header from '@/components/Header';
import ContactMarquee from '@/components/ContactMarquee';
import ContactPopup from '@/components/ContactPopup';
import Footer from '@/components/Footer';
import { AboutData } from '@/types/about';

export default function Page() {
	const [data, setData] = useState<AboutData | null>(null);
	const [showPortfolio, setShowPortfolio] = useState(false);

	const renderAwardSVG = (type: string) => {
		switch (type) {
			case 'fiverr':
				return (
					<svg xmlns="http://www.w3.org/2000/svg" width="168" height="53" viewBox="0 0 168 53" fill="none">
						<path d="M148.421 25.8716H143.035C139.552 25.8716 137.649 28.4644 137.649 32.9833V49.1328H127.248V25.8716H122.9C119.416 25.8716 117.514 28.4644 117.514 32.9833V49.1328H107.088V17.1795H117.514V22.0441C119.243 18.2166 121.516 17.1795 124.975 17.1795H137.649V22.0441C139.379 18.2166 141.652 17.1795 145.11 17.1795H148.594L148.421 25.8716ZM104.667 35.5761H83.1231C83.6419 39.2307 85.8901 41.1321 89.5466 41.1321C92.3137 41.1321 94.2408 39.9221 94.9325 38.0207L104.123 40.6135C101.875 46.1696 96.3161 49.4538 89.5466 49.4538C78.256 49.4538 73.043 40.6135 73.043 32.9586C73.043 25.5012 77.5642 16.6362 88.8548 16.6362C100.837 16.6362 104.84 25.6493 104.84 32.44C104.84 34.0204 104.84 34.8847 104.667 35.5761ZM94.7843 29.5015C94.6113 26.7358 92.536 24.2912 89.0525 24.2912C85.7666 24.2912 83.8395 25.674 83.1478 29.5015H94.7843ZM55.0076 49.1081H64.0253L75.4889 17.3523H65.0629L59.5041 35.9218L53.9452 17.1795H43.5193L55.0076 49.1081ZM12.6615 49.1081H22.9145V25.8716H32.8216V49.1328H43.0746V17.1795H22.9392V15.2781C22.9392 13.2038 24.4957 11.7963 26.7686 11.7963H32.8463V3.12891H25.2121C17.7509 3.12891 12.7109 7.82066 12.7109 14.5867V17.1795H6.80615V25.8469H12.7109V49.1081H12.6615Z" fill="#131313" />
						<path d="M154.844 49.9734C158.328 49.9734 161.268 47.0102 161.268 43.5531C161.268 40.0713 158.328 37.1328 154.844 37.1328C151.361 37.1328 148.421 40.096 148.421 43.5531C148.421 47.0349 151.386 49.9734 154.844 49.9734Z" fill="#1DBF73" />
					</svg>
				);
			case 'upwork':
				return (
					<svg xmlns="http://www.w3.org/2000/svg" width="198" height="58" viewBox="0 0 198 58" fill="none">
						<g clipPath="url(#clip0_3370_5722)">
							<path d="M126.457 13.34C117.756 13.34 110.795 20.3 110.795 29C110.795 37.7 117.756 44.66 126.457 44.66C135.158 44.66 142.119 37.7 142.119 29C142.119 20.3 135.158 13.34 126.457 13.34ZM126.457 38.28C121.43 38.28 117.176 34.22 117.176 29C117.176 23.78 121.236 19.72 126.457 19.72C131.484 19.72 135.738 23.78 135.738 28.8067C135.738 34.0267 131.678 38.28 126.457 38.28ZM161.262 20.88C156.814 20.88 153.141 24.5533 153.141 29V43.8867H146.373V14.3067H153.141V14.3067H153.141V18.9467C155.074 16.0467 158.361 14.3067 161.842 14.3067H163.969V20.88H161.262ZM93.1992 14.3067L98.2266 34.8L103.834 14.3067H110.408L101.9 43.8867H95.1328L89.9121 23.2L84.6914 43.8867H77.9238L69.416 14.3067H75.9902L81.5977 34.8L86.8184 14.3067H93.1992ZM183.691 27.84C188.719 25.1333 191.619 19.9133 191.619 14.1133H185.045C185.045 19.14 180.984 23.0067 176.15 23.0067H175.184V0H168.416V43.8867H175.184V29.9667H175.957C176.73 29.9667 177.504 30.3533 177.891 30.9333L187.365 43.8867H195.486L183.691 27.84Z" fill="#131313" />
							<path d="M53.3672 13.3412C46.0195 13.3412 40.4121 18.1745 38.0918 25.9079C34.6113 20.6879 32.0977 14.8879 30.3574 8.89453H22.4297V29.3879C22.4297 33.4479 19.1426 36.7345 15.082 36.7345C11.0215 36.7345 7.73438 33.4479 7.73438 29.3879V9.08786H0V29.5812C0 37.8945 6.76758 44.8545 15.2754 44.8545C23.7832 44.8545 30.5508 38.0879 30.5508 29.5812V26.1012C32.0977 29.3879 34.0312 32.4812 36.1582 35.3812L31.3242 58.0012H39.4453L42.9258 41.5679C46.0195 43.6945 49.6934 44.8545 53.5605 44.8545C62.2617 44.8545 69.2227 37.8945 69.2227 29.1945C69.0293 20.4945 62.0684 13.3412 53.3672 13.3412ZM53.3672 36.9279C50.0801 36.7345 46.9863 35.5745 44.4727 33.4479L45.0527 30.3545V30.1612C45.6328 26.8745 47.5664 21.2679 53.1738 21.2679C57.4277 21.0745 60.9082 24.5545 61.1016 28.8079C61.2949 33.0612 57.8145 36.5412 53.5605 36.7345L53.3672 36.9279Z" fill="#6FDA44" />
						</g>
						<defs>
							<clipPath id="clip0_3370_5722">
								<rect width="198" height="58" fill="white" />
							</clipPath>
						</defs>
					</svg>
				);
			case 'clutch':
				return (
					<svg xmlns="http://www.w3.org/2000/svg" width="198" height="56" viewBox="0 0 198 56" fill="none">
						<g clipPath="url(#clip0_3370_5725)">
							<path fillRule="evenodd" clipRule="evenodd" d="M194.794 29.9765C195.171 29.5067 195.926 29.5067 196.303 30.0704L197.717 32.0437C198 32.4196 198 32.9834 197.717 33.3593C195.171 36.6481 190.834 39.749 185.46 40.0309C181.311 40.3128 177.823 38.7153 175.937 35.7084C175.56 35.1446 174.711 35.0507 174.334 35.6145C172.071 38.6214 169.431 40.9705 166.603 41.0645C161.606 41.3464 160.191 37.9636 161.417 30.6342C161.511 29.8825 160.851 29.3187 160.191 29.5067C159.154 29.7886 158.023 29.8825 156.891 29.7886C156.42 29.7886 155.949 30.0705 155.854 30.4463C153.969 36.5541 149.631 42.1921 143.88 42.474C140.203 42.6619 134.829 40.5947 135.3 31.8558C135.3 31.1041 134.734 30.6342 134.074 30.8222C132.943 31.198 131.717 31.292 130.491 31.198C130.02 31.198 129.549 31.4799 129.454 31.8558C127.569 37.9636 123.231 43.6016 117.48 43.8835C113.803 44.0714 108.429 42.0041 108.9 33.2653C108.9 32.5136 108.334 32.0437 107.674 32.2317C106.543 32.6075 105.317 32.7015 104.091 32.6075C103.62 32.6075 103.149 32.8894 103.054 33.2653C101.169 39.3731 96.8315 45.0111 91.08 45.293C88.44 45.4809 84.9515 44.4473 83.3486 40.6886C83.0658 39.9369 82.1229 39.8429 81.6515 40.5007C79.3886 43.6016 76.6543 45.9507 73.8258 46.1387C70.9029 46.3266 69.3 45.105 68.5457 43.0378C68.2629 42.286 67.4143 42.0981 66.8486 42.6619C64.8686 45.0111 62.5115 46.7025 60.2486 46.8904C56.6658 47.0783 54.5915 44.4473 54.4972 41.2524C54.3086 37.4938 55.9115 33.1713 57.7029 28.3791C57.9858 27.7213 57.5143 26.9696 56.8543 26.9696C55.8172 26.9696 54.5915 26.7816 53.5543 26.5937C53.0829 26.4997 52.5172 26.7816 52.4229 27.3454C50.2543 34.9567 47.0486 42.38 44.22 46.7964C43.9372 47.2662 43.2772 47.4542 42.8058 47.0783L40.7315 45.5749C40.26 45.293 40.1658 44.6352 40.4486 44.1654C44.4086 37.7757 47.9915 27.8153 49.2172 20.4859C49.3115 20.0161 49.6886 19.6402 50.16 19.6402L52.9886 19.4523C53.6486 19.4523 54.12 20.0161 54.0257 20.6738V20.7678C53.9315 21.3316 54.3086 21.8954 54.8743 21.9894C57.42 22.3652 61.0972 22.3652 63.6429 22.2713C64.3972 22.2713 64.8686 23.023 64.5857 23.6808C62.5115 29.1308 59.7772 36.6481 59.9657 39.561C60.06 40.8766 60.6258 41.6283 61.6629 41.5343C63.6429 41.4403 66.7543 37.3998 69.1115 32.9834C69.1115 32.8894 69.2057 32.7955 69.2057 32.7015C69.96 29.2248 71.1857 25.2782 72.3172 21.3316L72.4115 21.0497C72.5058 20.6738 72.8829 20.3919 73.26 20.298L76.6543 20.11C77.3143 20.11 77.88 20.7678 77.6915 21.4256C77.5029 21.9894 77.3143 22.5532 77.22 23.117C74.2972 32.7955 71.7515 40.8766 75.1457 40.6886C77.3143 40.5947 80.4258 36.836 83.0658 31.6679C83.0658 31.5739 83.16 31.4799 83.16 31.386C83.2543 30.7282 83.4429 29.9765 83.6315 29.2248C85.14 23.023 86.9315 16.9152 88.7229 10.8074C89.2886 8.92808 89.8543 7.04875 90.3258 5.16943C90.42 4.79357 90.7972 4.4177 91.2686 4.4177L94.7572 4.22977C95.4172 4.22977 95.9829 4.88753 95.7943 5.5453C94.38 9.86774 92.9657 14.3781 91.6457 18.7945C91.3629 19.7342 92.4 20.4859 93.1543 19.9221C94.4743 18.9825 96.0772 18.4187 97.5857 18.3247C101.451 18.1368 104.091 21.2376 104.374 26.0299C104.374 26.3118 104.374 26.5937 104.374 26.8756C104.374 27.4394 104.751 27.8153 105.317 27.9092C107.109 28.0972 108.994 27.5334 110.409 26.2178C110.597 26.1239 110.691 25.9359 110.691 25.748C112.106 20.204 113.709 14.754 115.311 9.20998C115.877 7.33065 116.349 5.45133 116.914 3.57201C117.009 3.19614 117.386 2.82028 117.857 2.82028L121.346 2.63235C122.006 2.63235 122.571 3.29011 122.383 3.94787C120.969 8.27031 119.554 12.7807 118.234 17.1971C117.951 18.1368 118.989 18.8885 119.743 18.3247C121.063 17.385 122.666 16.8212 124.174 16.7273C128.04 16.5393 130.68 19.6402 130.963 24.4325C130.963 24.7144 130.963 24.9963 130.963 25.2782C130.963 25.842 131.34 26.2178 131.906 26.3118C133.697 26.4997 135.583 25.9359 136.997 24.6204C137.186 24.5265 137.28 24.3385 137.28 24.1506C138.694 18.6066 140.297 13.1566 141.9 7.61255C142.466 5.73323 142.937 3.85391 143.503 1.97458C143.597 1.59872 143.974 1.22286 144.446 1.22286L147.934 1.03492C148.594 1.03492 149.16 1.69269 148.971 2.35045C147.557 6.67289 146.143 11.1833 144.823 15.5997C144.54 16.5393 145.577 17.2911 146.331 16.7273C147.651 15.7876 149.254 15.2238 150.763 15.1298C154.629 14.9419 157.269 18.0428 157.551 22.8351C157.551 23.117 157.551 23.3989 157.551 23.6808C157.551 24.2446 157.929 24.6204 158.494 24.7144C160.286 24.9023 162.077 24.3385 163.491 23.2109C163.68 23.117 163.774 22.929 163.774 22.6471C165.377 16.4454 167.829 8.17635 170.091 0.377161C170.186 0.00129664 170.563 -0.280602 170.94 -0.374568L174.334 -0.5625C174.994 -0.5625 175.56 0.0952629 175.371 0.753026C172.166 11.2772 169.62 20.3919 168.206 25.842C166.32 33.1713 166.226 35.3326 168.394 35.1446C170.186 35.0507 172.637 32.5136 174.9 28.661C174.994 28.473 174.994 28.3791 175.089 28.1911C175.371 20.4859 180.18 13.4384 187.251 13.0626C191.966 12.7807 194.606 16.3514 194.794 19.8281C195.171 26.4997 188.477 30.8222 182.066 30.4463C181.311 30.3524 180.746 31.198 181.123 31.8558C182.066 33.7351 183.951 34.8627 187.157 34.6748C189.514 35.0507 192.814 32.3256 194.794 29.9765ZM88.44 31.8558C86.9315 37.9636 88.7229 40.3128 91.1743 40.2188C95.1343 40.0309 98.9057 32.7955 98.6229 27.2515C98.5286 24.8083 97.1143 23.5868 95.4172 23.6808C92.5886 23.8687 89.6657 26.9696 88.44 31.8558ZM114.84 30.3523C113.331 36.4601 115.123 38.8093 117.574 38.7153C121.534 38.5274 125.306 31.292 125.023 25.748C124.929 23.3049 123.514 22.0833 121.817 22.1773C119.083 22.3652 116.066 25.4661 114.84 30.3523ZM141.334 28.8489C139.826 34.9567 141.617 37.3058 144.069 37.2119C148.029 37.0239 151.8 29.7886 151.517 24.2446C151.423 21.8014 150.009 20.5799 148.311 20.6738C145.483 20.8618 142.56 23.9627 141.334 28.8489ZM189.137 20.8618C189.137 19.2643 188.1 18.1368 186.497 18.2307C183.386 18.4187 180.934 21.8014 180.086 25.9359C179.991 26.5937 180.463 27.1575 181.123 27.1575C185.177 27.0635 189.231 24.3385 189.137 20.8618ZM41.8629 23.8687C41.4858 11.4652 33.3772 3.29011 21.4029 3.75994C16.2172 3.94787 10.3715 5.92116 5.94004 9.30394C5.5629 9.58584 5.37433 10.2436 5.65718 10.7134L7.5429 13.7203C7.82575 14.2841 8.58004 14.3781 9.05147 14.0022C12.4458 11.1833 16.9715 9.39791 21.4029 9.20998C29.6058 8.83411 35.64 14.0962 35.9229 24.1506C36.3943 35.8964 28.4743 49.3335 15.7458 50.0852C15.2743 50.0852 14.8029 50.0852 14.3315 50.0852C13.6715 50.0852 13.2 49.4275 13.3886 48.7697C15.84 38.9033 18.6686 28.2851 21.5915 18.4187C21.78 17.7609 21.3086 17.0092 20.5543 17.1031L16.9715 17.385C16.5943 17.385 16.2172 17.6669 16.0286 18.1368C13.2 27.8153 10.3715 38.3395 7.92004 48.2059C7.73147 48.7697 7.16575 49.1456 6.69432 48.9576C5.37432 48.4878 4.14861 48.018 3.11147 47.3602C2.64004 47.0783 1.98004 47.2663 1.69718 47.83L0.0943253 51.1189C-0.188532 51.5887 3.9544e-05 52.2465 0.471468 52.4344C4.05433 54.5016 9.61718 55.6292 15.18 55.3473C33.3772 54.3137 42.3343 37.5877 41.8629 23.8687ZM77.5972 8.64618C75.4286 8.74014 73.4486 11.2772 73.5429 13.8143C73.6372 15.5057 74.7686 16.7273 76.4658 16.6333C78.6343 16.5393 80.7086 13.9083 80.6143 11.3712C80.52 9.67981 79.2 8.55221 77.5972 8.64618Z" fill="#131313" />
						</g>
						<defs>
							<clipPath id="clip0_3370_5725">
								<rect width="198" height="55.44" fill="white" />
							</clipPath>
						</defs>
					</svg>
				);
			default:
				return null;
		}
	};

	const togglePortfolio = (e: React.MouseEvent) => {
		e.preventDefault();
		setShowPortfolio(!showPortfolio);
	};

	useEffect(() => {
		fetch('/api/about')
			.then(res => res.json())
			.then(data => setData(data))
			.catch(err => console.error('Error fetching about data:', err));
	}, []);

	useEffect(() => {
		if (data) {
			// Trigger animations and reveals once data is loaded
			const winAny = window as any;
			const Splitting = winAny.Splitting;
			if (Splitting) Splitting();

			// Allow DOM to settle
			requestAnimationFrame(() => {
				document.body.classList.remove('loading');
				const wrapper = document.querySelector('.parent--wrapper');
				if (wrapper) {
					wrapper.classList.add('active');
					wrapper.classList.add('delay');
					// Force styles just in case
					(wrapper as HTMLElement).style.opacity = '1';
					(wrapper as HTMLElement).style.visibility = 'visible';
				}
				// Re-init AOS
				const AOS = winAny.AOS;
				if (AOS) AOS.refresh();
			});
		}
	}, [data]);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const initCarousel = () => {
				const $ = (window as any).jQuery;
				if ($ && $.fn.owlCarousel) {
					$('.team--slider').owlCarousel({
						loop: true,
						margin: 75,
						dots: false,
						nav: false,
						autoplay: true,
						slideTransition: "linear",
						autoplayTimeout: 5000,
						smartSpeed: 5000,
						stagePadding: 30,
						autoWidth: true,
						mouseDrag: false,
						touchDrag: false,
						responsive: { 1500: { margin: 75 }, 576: { margin: 40 }, 0: { margin: 20 } },
					});
				} else {
					// Retry if jQuery or Owl Carousel is not yet loaded
					setTimeout(initCarousel, 100);
				}
			};

			initCarousel();

			// Initialize hover effects for "Why Choose Us" cards
			const cards = document.querySelectorAll(".choose--card");
			cards.forEach((e: any) => {
				let t = e.querySelector(".hover--revel--img"),
					r = e.querySelector(".hover--revel--img img"),
					a = 0,
					s = false;
				function n() {
					if (t && r) {
						(t.style.opacity = '1'), (t.style.transform = "translate(-100%, -50%) rotate(5deg)"), (r.style.transform = "scale(1, 1)"), (t.style.left = a + "px");
					}
				}
				e.addEventListener("mousemove", (o: any) => {
					(a = o.clientX - e.getBoundingClientRect().left), s || requestAnimationFrame(n);
				});
				e.addEventListener("mouseleave", () => {
					(s = true),
						setTimeout(() => {
							if (t && r) {
								(t.style.opacity = '0'), (t.style.transform = "translate(-50%, -50%) rotate(-5deg)"), (r.style.transform = "scale(0.8, 0.8)"), (s = false);
							}
						}, 200);
				});
			});
		}
	}, []);

	if (!data) return <Preloader />;

	return (
		<div id="page" className="site">
			<div className="parent--wrapper">
				<Header />
				<main>
					{/* Copied Content */}


					<section className="inner--hero--area about--inner--hero">
						<div className="container">
							<div className="row">
								<div className="col-md-12">
									<div className="inner--hero--text">
										<h1 data-splitting>{data.hero.title1}									<svg className="char" xmlns="http://www.w3.org/2000/svg" width="110" height="104"
											viewBox="0 0 110 104" fill="none">
											<path
												d="M55 0L60.0256 50.0829L109.21 39.386L63.1315 59.6421L88.5038 103.114L55 65.55L21.4962 103.114L46.8685 59.6421L0.78978 39.386L49.9744 50.0829L55 0Z"
												fill="#00AB0C" />
										</svg>
											<br />
										</h1>
										<h2 data-splitting><span className="primary--dark">{data.hero.title2.split(' ')[0]}</span> {data.hero.title2.split(' ').slice(1).join(' ')}</h2>

										<a href={data.hero.cta.link} className="rotate--circle--wrapper circle--hero">
											<div className="circle--outer">
												<img loading="lazy" src="data:image/png+xml;base64,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" alt="Get a Quote" style={{ animation: 'rotate 10s linear infinite' }} />
											</div>
											<div className="circle--inner">
												<p>{data.hero.cta.text.split(' ').slice(0, 1)} <br />{data.hero.cta.text.split(' ').slice(1).join(' ')}</p>
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



					<section className="about--image--area">
						<div className="about--image--wrapper">
							<img src={data.aboutImage} loading="lazy" className="w-100 bv-tag-attr-replace bv-lazyload-tag-img" alt="" />
						</div>
					</section>


					<section className="who--we--are--area" data-aos="fade-In" data-aos-duration="1000">
						<div className="container">
							<div className="row title--row">
								<div className="col-lg-3 mt_20">
									<div className="single--title">
										<h3 className="common--sub--heading mt_10" data-aos="fade-up" data-aos-duration="1000">
											{data.whoWeAre.heading}
										</h3>
									</div>
								</div>
								<div className="col-lg-9 mt_20">
									<div className="about--right--text">
										<p className="common--para" data-aos="fade-up" data-aos-duration="1000" dangerouslySetInnerHTML={{ __html: data.whoWeAre.description }} />
									</div>
								</div>
							</div>
							<div className="row">
								<div className="col-md-12">
									<div className="counter--wrapper">
										{data.whoWeAre.counters.map((counter, index) => (
											<div key={index} className="counter--box" data-aos="fade-In" data-aos-duration="1000" data-aos-delay={(index + 1) * 300}>
												<p>{counter.label}</p>
												<h2 className={counter.isPrimary ? "primary--color" : ""}>
													<span className={`counter ${counter.isPrimary ? "primary--color" : ""}`}>{counter.value}</span>
													<p className={counter.isPrimary ? "primary--color" : ""}>{counter.suffix}</p>
												</h2>
											</div>
										))}
									</div>
								</div>
							</div>
						</div>
					</section>


					<section className="why--choose--us--area section section-dark" data-aos="fade-In" data-aos-duration="1000">
						<div className="container">
							<div className="row title--row">
								<div className="col-lg-3 mt_20">
									<div className="single--title">
										<h3 className="common--sub--heading mt_10" data-aos="fade-up" data-aos-duration="1000">{data.whyChooseUs.heading}</h3>
									</div>
								</div>
								<div className="col-lg-9 mt_20">
									<div className="about--right--text">
										<h2 className="common--heading" data-aos="fade-up" data-aos-duration="1000">
											{data.whyChooseUs.subHeading.split('Softvence Agency.')[0]}
											<span className="primary--color">Softvence Agency.</span>
										</h2>
									</div>
								</div>
							</div>

							<div className="choose--cards--wrapper">
								{data.whyChooseUs.cards.map((card, index) => (
									<div key={card.id} className="choose--card" data-aos="fade-up" data-aos-duration="1000">
										<p className="card--num">{card.id}</p>
										<div className="choose--text--content">
											<h4>{card.title}</h4>
											<p>{card.description}</p>
										</div>
										<div className="hover--revel--img">
											<img bv-data-src={card.image} className="bv-tag-attr-replace bv-lazyload-tag-img" loading="lazy" src={card.image} alt={card.title} />
										</div>
									</div>
								))}
							</div>
						</div>
					</section>


					<section className="team--area">
						<div className="container">
							<div className="row title--row">
								<div className="col-lg-3 mt_20">
									<div className="single--title">
										<h3 className="common--sub--heading mt_10" data-aos="fade-up" data-aos-duration="1000">
											{data.team.heading}
										</h3>
									</div>
								</div>
								<div className="col-lg-9 mt_20">
									<div className="about--right--text">
										<h2 className="common--heading" data-aos="fade-up" data-aos-duration="1000">
											{data.team.subHeading.split('Digital Innovation.')[0]}
											<span className="primary--dark">Digital Innovation.</span>
										</h2>
										<p className="common--para" data-aos="fade-up" data-aos-duration="1000">
											{data.team.description}
										</p>
									</div>
								</div>
							</div>

							<div className="owl-carousel team--slider" data-aos="fade-In" data-aos-duration="1000">
								{data.team.images.map((img, index) => (
									<div key={index} className="item">
										<div className={`team--box ${index % 2 === 0 ? "img--small" : "img--large"}`}>
											<img bv-data-src={img} className="bv-tag-attr-replace bv-lazyload-tag-img" loading="lazy" src={img} alt={`Team Member ${index + 1}`} />
										</div>
									</div>
								))}
							</div>
						</div>
					</section>


					<section className="award--area section section-dark" data-aos="fade-In" data-aos-duration="1000">
						<div className="container">
							<div className="row title--row">
								<div className="col-lg-3 mt_20">
									<div className="single--title">
										<h3 className="common--sub--heading mt_10" data-aos="fade-up" data-aos-duration="1000">
											{data.awards.heading}</h3>
									</div>
								</div>
								<div className="col-lg-9 mt_20">
									<div className="about--right--text">
										<h2 className="common--heading" data-aos="fade-up" data-aos-duration="1000">
											{data.awards.subHeading.split('Award-Winning Achievements.')[0]}
											<span className="primary--color">Award-Winning Achievements.</span>
										</h2>
									</div>
								</div>
							</div>
							<div className="row mt_100">
								{data.awards.items.map((award, index) => (
									<div key={index} className="col-lg-4 col-sm-6 mt_20" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={index * 200}>
										<div className="marketplace--box">
											{renderAwardSVG(award.type)}
											<p>{award.title}</p>
										</div>
									</div>
								))}
							</div>
						</div>
					</section>


					<section className="portfolio--intro--area section section-light">
						<div className="container">
							<div className="row">
								<div className="col-md-12 mt_20">
									<div className="about--right--text">
										<h2 className="common--heading" data-aos="fade-up" data-aos-duration="1000">
											{data.portfolioIntro.heading.split('establishing ourselves').map((part, i, arr) => (
												<React.Fragment key={i}>
													{part.split('digital service providing agency.').map((subPart, j, subArr) => (
														<React.Fragment key={j}>
															{subPart}
															{j < subArr.length - 1 && <span className="primary--dark">digital service providing agency.</span>}
														</React.Fragment>
													))}
													{i < arr.length - 1 && <span className="primary--dark">establishing ourselves</span>}
												</React.Fragment>
											))}
											<svg xmlns="http://www.w3.org/2000/svg" width="43" height="43" viewBox="0 0 43 43"
												fill="none">
												<path
													d="M21.5 0L23.5162 7.48823C25.0914 13.3387 29.6613 17.9086 35.5118 19.4838L43 21.5L35.5118 23.5162C29.6613 25.0914 25.0914 29.6613 23.5162 35.5118L21.5 43L19.4838 35.5118C17.9086 29.6613 13.3387 25.0914 7.48823 23.5162L0 21.5L7.48823 19.4838C13.3387 17.9086 17.9086 13.3387 19.4838 7.48823L21.5 0Z"
													fill="#06540B" />
											</svg>
										</h2>
										<div className={`portfolio--links ${showPortfolio ? 'active' : ''}`}>
											<a href="#" onClick={togglePortfolio} className="button buttonv2 button-click" data-aos="fade-up"
												data-aos-duration="1000">Our Portfolio</a>
											<ul className="hover--portfolio--icons">
												<li>
													<a href="https://www.facebook.com/softvenceagency/" className="button-click" target="_blank">
														<svg xmlns="http://www.w3.org/2000/svg" width="15" height="28"
															viewBox="0 0 15 28" fill="none">
															<path
																d="M4.61074 27.7614H9.6924V15.1006H13.9416L14.5833 10.175H9.6924V7.0185C9.6924 5.59633 10.0913 4.6251 12.1378 4.6251H14.7567V0.202497C14.3058 0.150467 12.7622 0.0117188 10.9585 0.0117188C7.17759 0.0117188 4.61074 2.31841 4.61074 6.53288V10.175H0.344238V15.1006H4.61074V27.7614Z"
																fill="white" />
														</svg>
													</a>
												</li>
												<li>
													<a href="https://www.instagram.com/softvence/" className="button-click" target="_blank">
														<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
															viewBox="0 0 32 32" fill="none">
															<path
																d="M16.0016 22.41C12.4547 22.41 9.59224 19.5475 9.59224 16.0006C9.59224 12.4538 12.4547 9.59126 16.0016 9.59126C19.5485 9.59126 22.411 12.4538 22.411 16.0006C22.411 19.5475 19.5485 22.41 16.0016 22.41ZM16.0016 11.835C13.7079 11.835 11.836 13.7069 11.836 16.0006C11.836 18.2944 13.7079 20.1663 16.0016 20.1663C18.2954 20.1663 20.1672 18.2944 20.1672 16.0006C20.1672 13.7069 18.2954 11.835 16.0016 11.835ZM22.6735 24.1663C21.8454 24.1663 21.1766 23.4975 21.1766 22.6694C21.1766 21.8413 21.8454 21.1725 22.6735 21.1725C23.5016 21.1725 24.1704 21.8381 24.1704 22.6694C24.1706 22.866 24.1321 23.0608 24.0569 23.2425C23.9818 23.4242 23.8715 23.5893 23.7325 23.7284C23.5934 23.8674 23.4283 23.9777 23.2466 24.0528C23.0649 24.128 22.8701 24.1665 22.6735 24.1663ZM28.4954 16.0006C28.4954 17.7256 28.511 19.435 28.4141 21.1569C28.3172 23.1569 27.861 24.9319 26.3985 26.3944C24.9329 27.86 23.161 28.3131 21.161 28.41C19.436 28.5069 17.7266 28.4913 16.0047 28.4913C14.2797 28.4913 12.5704 28.5069 10.8485 28.41C8.84849 28.3131 7.07349 27.8569 5.61099 26.3944C4.14536 24.9288 3.69224 23.1569 3.59536 21.1569C3.49849 19.4319 3.51411 17.7225 3.51411 16.0006C3.51411 14.2788 3.49849 12.5663 3.59536 10.8444C3.69224 8.84438 4.14849 7.06938 5.61099 5.60688C7.07661 4.14126 8.84849 3.68813 10.8485 3.59126C12.5735 3.49438 14.2829 3.51001 16.0047 3.51001C17.7297 3.51001 19.4391 3.49438 21.161 3.59126C23.161 3.68813 24.936 4.14438 26.3985 5.60688C27.8641 7.07251 28.3172 8.84438 28.4141 10.8444C28.5141 12.5663 28.4954 14.2756 28.4954 16.0006ZM25.7454 8.63188C25.5172 8.06313 25.2422 7.63813 24.8016 7.20063C24.361 6.76001 23.9391 6.48501 23.3704 6.25688C21.7266 5.60376 17.8235 5.75063 16.0016 5.75063C14.1797 5.75063 10.2735 5.60376 8.62974 6.25376C8.06099 6.48188 7.63599 6.75688 7.19849 7.19751C6.75786 7.63813 6.48286 8.06001 6.25474 8.62876C5.60474 10.2756 5.75161 14.1788 5.75161 16.0006C5.75161 17.8225 5.60474 21.7288 6.25474 23.3725C6.48286 23.9413 6.75786 24.3663 7.19849 24.8038C7.63911 25.2413 8.06099 25.5194 8.62974 25.7475C10.2735 26.3975 14.1797 26.2506 16.0016 26.2506C17.8235 26.2506 21.7297 26.3975 23.3735 25.7475C23.9422 25.5194 24.3672 25.2444 24.8047 24.8038C25.2454 24.3631 25.5204 23.9413 25.7485 23.3725C26.3985 21.7288 26.2516 17.8225 26.2516 16.0006C26.2516 14.1788 26.3985 10.2756 25.7454 8.63188Z"
																fill="white" />
														</svg>
													</a>
												</li>
												<li>
													<a href="https://www.linkedin.com/company/softvence-agency/" className="button-click" target="_blank">
														<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30"
															viewBox="0 0 30 30" fill="none">
															<path fillRule="evenodd" clipRule="evenodd"
																d="M11.928 11.3774H16.3655V13.5878C17.0047 12.3165 18.644 11.1743 21.1065 11.1743C25.8271 11.1743 26.9479 13.7049 26.9479 18.3479V26.9469H22.1686V19.4053C22.1686 16.7612 21.5294 15.2701 19.9021 15.2701C17.6451 15.2701 16.7072 16.8771 16.7072 19.4041V26.9469H11.928V11.3774ZM3.7328 26.7438H8.51202V11.1743H3.7328V26.7438ZM9.19664 6.09754C9.19682 6.49812 9.11737 6.89475 8.96292 7.26437C8.80847 7.63398 8.5821 7.96921 8.29695 8.25058C7.71915 8.82483 6.93704 9.14626 6.12241 9.14429C5.30921 9.14374 4.52891 8.82312 3.95025 8.25177C3.66614 7.96945 3.44053 7.63384 3.28635 7.26418C3.13217 6.89452 3.05245 6.49806 3.05176 6.09754C3.05176 5.28865 3.37436 4.51442 3.95145 3.9433C4.52959 3.37118 5.31023 3.05042 6.1236 3.05078C6.93846 3.05078 7.71986 3.37218 8.29695 3.9433C8.87285 4.51442 9.19664 5.28865 9.19664 6.09754Z"
																fill="white" />
														</svg>
													</a>
												</li>
												<li>
													<a href="https://dribbble.com/Softvenceagency" className="button-click" target="_blank">
														<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
															viewBox="0 0 24 24" fill="none">
															<path
																d="M18.5 4.79004C15.9 9.34004 10.89 11.95 5.67 11.48L2.5 11.19"
																stroke="white" strokeWidth="1.5" strokeMiterlimit="10"
																strokeLinecap="round" strokeLinejoin="round"></path>
															<path d="M5.5 19.37C8.1 14.82 13.11 12.21 18.33 12.68L21.5 12.97"
																stroke="white" strokeWidth="1.5" strokeMiterlimit="10"
																strokeLinecap="round" strokeLinejoin="round"></path>
															<path
																d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
																stroke="white" strokeWidth="1.5" strokeMiterlimit="10"
																strokeLinecap="round" strokeLinejoin="round"></path>
															<path
																d="M7.62988 3L10.8099 6.95C12.9399 9.59 14.4499 12.66 15.2499 15.95L16.4599 20.94"
																stroke="white" strokeWidth="1.5" strokeMiterlimit="10"
																strokeLinecap="round" strokeLinejoin="round"></path>
														</svg>
													</a>
												</li>
												<li>
													<a href="https://www.behance.net/softvenceagency" className="button-click" target="_blank">
														<svg xmlns="http://www.w3.org/2000/svg" width="31" height="31"
															viewBox="0 0 31 31" fill="none">
															<path fillRule="evenodd" clipRule="evenodd"
																d="M12.754 15.0497C14.201 15.9226 15.1687 17.5098 15.1687 19.323C15.1687 22.0773 12.9359 24.31 10.1817 24.31H2.70117V14.336V6.85547H8.93494C11.6892 6.85547 13.9219 9.08823 13.9219 11.8425C13.9219 13.0638 13.4829 14.1827 12.754 15.0497ZM5.19468 16.8295V21.8165H10.1817C11.5588 21.8165 12.6752 20.7001 12.6752 19.323C12.6752 17.9459 11.5588 16.8295 10.1817 16.8295H8.93494H5.19468ZM22.1977 21.8165C23.4949 21.8165 24.2921 21.5512 24.7176 21.152C24.9418 20.9417 25.0354 20.7076 25.0354 20.5698H27.5289C27.5289 22.5985 25.7045 24.31 22.1977 24.31C18.7277 24.31 16.4155 22.0607 16.4155 18.0763C16.4155 14.3782 18.386 11.8425 22.0258 11.8425C25.6657 11.8425 27.6362 14.3782 27.6362 18.0763V19.323H19.0194C19.3579 21.0399 20.4643 21.8165 22.1977 21.8165ZM25.0363 16.8295C24.7267 15.1965 23.7381 14.336 22.0258 14.336C20.3136 14.336 19.325 15.1965 19.0154 16.8295H25.0363ZM17.6622 10.5957V8.10222H26.3895V10.5957H17.6622ZM5.19468 9.34898V14.336H8.93494C10.3121 14.336 11.4284 13.2196 11.4284 11.8425C11.4284 10.4654 10.3121 9.34898 8.93494 9.34898H5.19468Z"
																fill="white" />
														</svg>
													</a>
												</li>
											</ul>
										</div>
									</div>
								</div>
							</div>
						</div>
					</section>


					<section className="marquee--area about--marque--area" data-aos="fade-up" data-aos-duration="1000">
						<div className="marquee--wrapper">
							<div className="marquee">
								<div className="marquee__inner-wrap">
									<div className="marquee__inner">
										{data.marqueeLogos.map((logo, index) => (
											<div key={index} className="marquee__item" dangerouslySetInnerHTML={{ __html: logo }} />
										))}
										{/* Repeat for seamless loop */}
										{data.marqueeLogos.map((logo, index) => (
											<div key={`repeat-${index}`} className="marquee__item" dangerouslySetInnerHTML={{ __html: logo }} />
										))}
									</div>
								</div>
							</div>
						</div>
					</section>


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
										<h3 className="common--heading" data-aos="fade-up" data-aos-duration="1000">We value each
											and every client’s <span className="primary--dark">feedback</span> which helps us to<br />
											<span className="primary--dark">improve.</span>
										</h3>
									</div>
								</div>
								<div className="col-md-12">

									<div className="owl-carousel testi--slider" data-aos="fade-In" data-aos-duration="2000">


										<div className="item">
											<div className="testi--box">

												<div className="client--img--area">
													<img src="https://softvence.agency/wp-content/uploads/2024/02/image_2023_12_12T10_54_43_560Z.png" loading="lazy" alt="Steve Zee" />
													<a href="#" className="play--review">
														<svg viewBox="0 0 18 18" version="1.1" fill="#000">
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
															fill="#000">
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





				</main>
				<ContactMarquee />
				<ContactPopup />
				<Footer />
			</div>
		</div>
	);
}
