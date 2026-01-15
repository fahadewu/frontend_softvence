'use client';

import { useEffect } from 'react';
import Link from 'next/link';
import Header from './Header';
import Footer from './Footer';
import ContactMarquee from './ContactMarquee';
import ContactPopup from './ContactPopup';

interface BlogPost {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    category: string;
    readingTime: string;
    image: string;
    author: string;
    date: string;
    tags: string[];
}

interface BlogPostClientProps {
    post: BlogPost;
    relatedPosts: BlogPost[];
    prevPost: BlogPost | null;
    nextPost: BlogPost | null;
}

export default function BlogPostClient({
    post,
    relatedPosts,
    prevPost,
    nextPost
}: BlogPostClientProps) {
    useEffect(() => {
        // Initialize libraries after content is mounted
        if (typeof window !== 'undefined') {
            if ((window as any).Splitting) {
                (window as any).Splitting();
            }

            setTimeout(() => {
                if ((window as any).AOS) {
                    (window as any).AOS.refresh();
                }
                if ((window as any).ScrollTrigger) {
                    (window as any).ScrollTrigger.refresh();
                }
                // Initialize owl carousel for related posts
                const $ = (window as any).jQuery;
                if ($ && $.fn.owlCarousel && $('.related--blog--slider').length > 0) {
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
            }, 500);
        }
    }, []);

    return (
        <div id="page" className="site">
            <div className="parent--wrapper">
                <Header />
                <main>
                    {/* Blog Details Hero - matches original structure */}
                    <section className="blog--details--hero inner--hero--area section section-light">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="inner--hero--text text-center">
                                        <p className="common--sub--heading" data-aos="fade-up" data-aos-duration="1000">{post.category}</p>
                                        <h2 className="common--heading" data-aos="fade-up" data-aos-duration="1000">{post.title}</h2>
                                        <div className="moderator--area" data-aos="fade-up" data-aos-duration="1000">
                                            <div className="moderator--data">
                                                <img
                                                    src="https://softvence.agency/wp-content/uploads/2024/03/softvence-favicon-removebg-preview.png"
                                                    alt={post.author}
                                                    className="moderator--img"
                                                    loading="lazy"
                                                />
                                                <span>{post.author}</span>
                                            </div>
                                            <div className="moderator--data">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                                    <line x1="16" y1="2" x2="16" y2="6"></line>
                                                    <line x1="8" y1="2" x2="8" y2="6"></line>
                                                    <line x1="3" y1="10" x2="21" y2="10"></line>
                                                </svg>
                                                <span>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
                                            </div>
                                            <div className="moderator--data">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                    <circle cx="12" cy="12" r="10"></circle>
                                                    <polyline points="12 6 12 12 16 14"></polyline>
                                                </svg>
                                                <span>{post.readingTime} read</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Single Blog Article Area - matches original structure */}
                    <section className="single--blog--article--area section section-light">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-10 offset-lg-1">
                                    {/* Featured Image */}
                                    <div className="article--feature--img" data-aos="fade-up" data-aos-duration="1000">
                                        <img
                                            src={post.image}
                                            alt={post.title}
                                            className="w-100"
                                            loading="lazy"
                                        />
                                    </div>

                                    {/* Article Content Block */}
                                    <div className="article--block" data-aos="fade-up" data-aos-duration="1000">
                                        <div
                                            className="article--content"
                                            dangerouslySetInnerHTML={{ __html: post.content }}
                                            suppressHydrationWarning
                                        />
                                    </div>

                                    {/* Tags Section */}
                                    {post.tags && post.tags.length > 0 && (
                                        <div className="article--block block--two" data-aos="fade-up" data-aos-duration="1000">
                                            <div className="blog--tags--area">
                                                <h5 className="tags--label">Tags:</h5>
                                                <div className="tags--wrapper">
                                                    {post.tags.map((tag, index) => (
                                                        <span key={index} className="tag--item">{tag}</span>
                                                    ))}
                                                </div>
                                            </div>

                                            {/* Social Share */}
                                            <div className="blog--social">
                                                <p>Share:</p>
                                                <div className="social--icons">
                                                    <a href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`} target="_blank" rel="noopener noreferrer" className="social--icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                                                        </svg>
                                                    </a>
                                                    <a href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="social--icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
                                                        </svg>
                                                    </a>
                                                    <a href={`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&title=${encodeURIComponent(post.title)}`} target="_blank" rel="noopener noreferrer" className="social--icon">
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                                            <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                                                            <rect x="2" y="9" width="4" height="12"></rect>
                                                            <circle cx="4" cy="4" r="2"></circle>
                                                        </svg>
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Blog Navigation - Previous/Next */}
                    {(prevPost || nextPost) && (
                        <section className="blog--navigation--area section section-light">
                            <div className="container">
                                <div className="row">
                                    <div className="col-md-6">
                                        {prevPost && (
                                            <Link href={`/blog/${prevPost.slug}`} className="blog--nav--link prev">
                                                <div className="nav--arrow">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <line x1="19" y1="12" x2="5" y2="12"></line>
                                                        <polyline points="12 19 5 12 12 5"></polyline>
                                                    </svg>
                                                </div>
                                                <div className="nav--text">
                                                    <span className="nav--label">Previous Post</span>
                                                    <h5 className="nav--title">{prevPost.title}</h5>
                                                </div>
                                            </Link>
                                        )}
                                    </div>
                                    <div className="col-md-6 text-right">
                                        {nextPost && (
                                            <Link href={`/blog/${nextPost.slug}`} className="blog--nav--link next">
                                                <div className="nav--text">
                                                    <span className="nav--label">Next Post</span>
                                                    <h5 className="nav--title">{nextPost.title}</h5>
                                                </div>
                                                <div className="nav--arrow">
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                                        <polyline points="12 5 19 12 12 19"></polyline>
                                                    </svg>
                                                </div>
                                            </Link>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}

                    {/* Related Blog Area - matches original structure */}
                    {relatedPosts.length > 0 && (
                        <section className="related--blog--area section section-dark">
                            <div className="container">
                                <div className="section--title text-center">
                                    <p className="common--sub--heading" data-aos="fade-up" data-aos-duration="1000">RELATED ARTICLES</p>
                                    <h3 className="common--heading" data-aos="fade-up" data-aos-duration="1000">
                                        You May Also <span className="primary--color">Like These</span>
                                    </h3>
                                </div>
                                <div className="related--carousel--wrapper" data-aos="fade-up" data-aos-duration="1000">
                                    <div className="owl-carousel related--blog--slider">
                                        {relatedPosts.map((relatedPost) => (
                                            <div key={relatedPost.id} className="item">
                                                <Link href={`/blog/${relatedPost.slug}`} className="blog--box">
                                                    <div className="img--area">
                                                        <img
                                                            src={relatedPost.image}
                                                            alt={relatedPost.title}
                                                            className="w-100"
                                                            loading="lazy"
                                                        />
                                                    </div>
                                                    <div className="blog--content">
                                                        <h4>{relatedPost.title}</h4>
                                                        <div className="category">
                                                            <p>Reading Time {relatedPost.readingTime}</p>
                                                            <p>{relatedPost.category}</p>
                                                        </div>
                                                    </div>
                                                </Link>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    )}
                </main>
                <ContactMarquee />
                <ContactPopup />
                <Footer />
            </div>
        </div>
    );
}
