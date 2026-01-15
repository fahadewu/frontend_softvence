'use client';

import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactMarquee from '@/components/ContactMarquee';
import ContactPopup from '@/components/ContactPopup';
import blogPostsData from '@/data/blogPosts.json';

const allBlogPosts = blogPostsData.blogPosts;

export default function Page() {
	useEffect(() => {
		if (typeof window !== 'undefined' && (window as any).Splitting) {
			(window as any).Splitting();
		}
		setTimeout(() => {
			if ((window as any).AOS) (window as any).AOS.refresh();
			if ((window as any).ScrollTrigger) (window as any).ScrollTrigger.refresh();
		}, 500);
	}, []);

	return (
		<div id="page" className="site">
			<div className="parent--wrapper">
				<Header />
				<main>
			{/* Copied Content */}


			<section className="inner--hero--area blog--hero--inner section section-light">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="inner--hero--text">
								<h1 data-splitting>Everyday Blog
									<svg className="char" xmlns="http://www.w3.org/2000/svg" width="110" height="104" viewBox="0 0 110 104" fill="none">
										<path d="M55 0L60.0256 50.0829L109.21 39.386L63.1315 59.6421L88.5038 103.114L55 65.55L21.4962 103.114L46.8685 59.6421L0.78978 39.386L49.9744 50.0829L55 0Z" fill="#00AB0C" />
									</svg>
									<br />
								</h1>
								<h2 data-splitting><span className="primary--dark">Read & Learn</span></h2>
							</div>
						</div>
					</div>
				</div>
			</section>


			<section className="case--studies--area blog--filter--area section section-dark">
				<div className="container">
					<div className="section--title">
						<p className="common--sub--heading" data-aos="fade-up" data-aos-duration="1000">Blog</p>
						<h3 className="common--heading" data-aos="fade-up" data-aos-duration="1000">Read About new Updates and Also<br />
							<span className="primary--color">about us</span> and our company</h3>
					</div>
					<div className="row" data-aos="fade-up" data-aos-duration="1000">
						<div className="col-md-12">

							<div className="case--studies--wrapper">

								<div className="filters filter-button-group">
									<ul>
										<li className="active button-click" data-filter="*">
											<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
												<path d="M2.25 6.75C3.07843 6.75 3.75 6.07843 3.75 5.25C3.75 4.42157 3.07843 3.75 2.25 3.75C1.42157 3.75 0.75 4.42157 0.75 5.25C0.75 6.07843 1.42157 6.75 2.25 6.75Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M15.75 6.75C16.5784 6.75 17.25 6.07843 17.25 5.25C17.25 4.42157 16.5784 3.75 15.75 3.75C14.9216 3.75 14.25 4.42157 14.25 5.25C14.25 6.07843 14.9216 6.75 15.75 6.75Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M14.25 5.25H11.25" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M6.75 5.25H3.75" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M5.625 12.375V13.875C5.625 14.3325 5.3475 14.73 4.9575 14.895C4.815 14.9625 4.665 15 4.5 15H3C2.3775 15 1.875 14.4975 1.875 13.875V12.375C1.875 11.7525 2.3775 11.25 3 11.25H4.5C5.1225 11.25 5.625 11.7525 5.625 12.375Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M16.125 12.375V13.875C16.125 14.4975 15.6225 15 15 15H13.5C13.335 15 13.185 14.9625 13.0425 14.895C12.6525 14.73 12.375 14.3325 12.375 13.875V12.375C12.375 11.7525 12.8775 11.25 13.5 11.25H15C15.6225 11.25 16.125 11.7525 16.125 12.375Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M11.25 4.125V6.375C11.25 6.99 10.74 7.5 10.125 7.5H7.875C7.26 7.5 6.75 6.99 6.75 6.375V4.125C6.75 3.51 7.26 3 7.875 3H10.125C10.74 3 11.25 3.51 11.25 4.125Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M11.25 5.79688C13.0275 6.69688 14.25 8.63189 14.25 10.8744C14.25 11.0019 14.2425 11.1219 14.2275 11.2494" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M3.7725 11.2494C3.7575 11.1219 3.75 11.0019 3.75 10.8744C3.75 8.63189 4.9725 6.69688 6.75 5.79688" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
											All Blog
										</li>
										<li className="button-click" data-filter=".web-design">
											<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
												<path d="M2.25 6.75C3.07843 6.75 3.75 6.07843 3.75 5.25C3.75 4.42157 3.07843 3.75 2.25 3.75C1.42157 3.75 0.75 4.42157 0.75 5.25C0.75 6.07843 1.42157 6.75 2.25 6.75Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M15.75 6.75C16.5784 6.75 17.25 6.07843 17.25 5.25C17.25 4.42157 16.5784 3.75 15.75 3.75C14.9216 3.75 14.25 4.42157 14.25 5.25C14.25 6.07843 14.9216 6.75 15.75 6.75Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M14.25 5.25H11.25" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M6.75 5.25H3.75" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M5.625 12.375V13.875C5.625 14.3325 5.3475 14.73 4.9575 14.895C4.815 14.9625 4.665 15 4.5 15H3C2.3775 15 1.875 14.4975 1.875 13.875V12.375C1.875 11.7525 2.3775 11.25 3 11.25H4.5C5.1225 11.25 5.625 11.7525 5.625 12.375Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M16.125 12.375V13.875C16.125 14.4975 15.6225 15 15 15H13.5C13.335 15 13.185 14.9625 13.0425 14.895C12.6525 14.73 12.375 14.3325 12.375 13.875V12.375C12.375 11.7525 12.8775 11.25 13.5 11.25H15C15.6225 11.25 16.125 11.7525 16.125 12.375Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M11.25 4.125V6.375C11.25 6.99 10.74 7.5 10.125 7.5H7.875C7.26 7.5 6.75 6.99 6.75 6.375V4.125C6.75 3.51 7.26 3 7.875 3H10.125C10.74 3 11.25 3.51 11.25 4.125Z" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M11.25 5.79688C13.0275 6.69688 14.25 8.63189 14.25 10.8744C14.25 11.0019 14.2425 11.1219 14.2275 11.2494" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
												<path d="M3.7725 11.2494C3.7575 11.1219 3.75 11.0019 3.75 10.8744C3.75 8.63189 4.9725 6.69688 6.75 5.79688" stroke="white" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
											</svg>
											Web Design									</li>

									</ul>
								</div>

								<div className="row case-gallery">
									{allBlogPosts.map((post) => (
										<div key={post.id} className="col-lg-4 col-md-6 mt_80 webdesign">
											<a href={`/blog/${post.slug}`} className="blog--box">
												<div className="img--area">
													<img 
														src={post.image} 
														alt={post.title}
														className="w-100 wp-post-image"
														loading="lazy"
													/>
												</div>
												<div className="blog--content">
													<h4>{post.title}</h4>
													<div className="category">
														<p>Reading Time {post.readingTime}</p>
														<p>{post.category}</p>
													</div>
												</div>
											</a>
										</div>
									))}
								</div>
							</div>
						</div>

						<ul className="pagination--wrapper" data-aos="fade-In" data-aos-duration="1000">
							<li>
								<a href="#">1</a>
							</li>
							<li>
								<a href="#">2</a>
							</li>
							<li>
								<a href="#">3</a>
							</li>
							<li>
								<a href="#">4</a>
							</li>
							<li>
								<a href="#">5</a>
							</li>
							<li>
								<a href="#">6</a>
							</li>
							<li>
								<a href="#">7</a>
							</li>
							<li>
								<a href="#">8</a>
							</li>
							<li>
								<a href="#">9</a>
							</li>
							<li>
								<a href="#" className="page--dots">..............</a>
							</li>
							<li>
								<a href="#">20</a>
							</li>
						</ul>
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
