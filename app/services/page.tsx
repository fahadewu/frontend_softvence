'use client';

import React, { useEffect } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactMarquee from '@/components/ContactMarquee';
import ContactPopup from '@/components/ContactPopup';
import Preloader from '@/components/Preloader';
import servicesData from '@/data/services.json';

export default function Services() {
    const allServices = servicesData.services;

    useEffect(() => {
        // Refresh AOS after component mounts
        const timer = setTimeout(() => {
            if (typeof window !== 'undefined' && (window as any).AOS) {
                (window as any).AOS.refresh();
            }
        }, 100);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div id="page" className="site">
            <div className="parent--wrapper">
                <Header />
                <main>
                    {/* Hero Section */}
                    <section className="services--hero--area section section-dark">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="services--hero--content">
                                        <h4 className="common--sub--heading" data-aos="fade-up" data-aos-duration="1000">SERVICES</h4>
                                        <h1 className="common--heading" data-aos="fade-up" data-aos-duration="1200">
                                            Bringing Brands & Business To Life<br />
                                            <span className="primary--dark">With Strategy & Design.</span>
                                        </h1>
                                        <p className="common--para" data-aos="fade-up" data-aos-duration="1400">
                                            Empower your brand with Softvence Agency – where strategy meets design. Our skilled team brings brands to life through thoughtful planning and creative design. Join us to experience the seamless blend of strategy and design that propels businesses to new heights!
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    {/* Services Grid */}
                    <section className="services--grid--area section section-light">
                        <div className="container">
                            <div className="row">
                                {allServices.map((service, index) => (
                                    <div 
                                        key={service.id} 
                                        className="col-lg-4 col-md-6 mt_50" 
                                        data-aos="fade-up" 
                                        data-aos-duration="1000"
                                        data-aos-delay={index * 100}
                                    >
                                        <Link href={`/services/${service.slug}`} className="service--card">
                                            <div className="service--card--inner">
                                                <div className="service--icon">
                                                    <img src={service.icon} alt={service.title} />
                                                </div>
                                                <h3 className="service--title">{service.title}</h3>
                                                <p className="service--description">{service.shortDescription}</p>
                                                <div className="service--arrow">
                                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                                    </svg>
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* CTA Section */}
                    <section className="cta--section section section-dark">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="cta--content text-center">
                                        <h2 className="common--heading" data-aos="fade-up" data-aos-duration="1000">
                                            Ready To Transform Your<br />
                                            <span className="primary--dark">Digital Presence?</span>
                                        </h2>
                                        <p className="common--para mt_30" data-aos="fade-up" data-aos-duration="1200">
                                            Let's discuss your project and create something amazing together.
                                        </p>
                                        <a 
                                            href="/contact" 
                                            className="button buttonv2 button-click mt_40" 
                                            data-aos="fade-up" 
                                            data-aos-duration="1400"
                                        >
                                            Get Started
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <ContactMarquee />
                </main>
                <Footer />
                <ContactPopup />
                <Preloader />
            </div>
        </div>
    );
}
