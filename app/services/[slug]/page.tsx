'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import servicesData from '@/data/services.json';
import caseStudiesData from '@/data/caseStudies.json';
import Image from 'next/image';
import ServiceProcessScroll from '@/components/ServiceProcessScroll';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactMarquee from '@/components/ContactMarquee';
import ContactPopup from '@/components/ContactPopup';

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const service = servicesData.services.find((s: any) => s.slug === slug);

  if (!service) {
    notFound();
  }

  const [activeServiceAccordion, setActiveServiceAccordion] = useState<number>(0);
  const [activeFaqAccordion, setActiveFaqAccordion] = useState<number | null>(0);

  // Get related case studies based on service
  const relatedCaseStudies = caseStudiesData.caseStudies.slice(0, 6);

  useEffect(() => {
    // Refresh AOS after component mounts
    const timer = setTimeout(() => {
      if (typeof window !== 'undefined' && (window as any).AOS) {
        (window as any).AOS.refresh();
      }
    }, 500);

    // Initialize Owl Carousels
    if (typeof window !== 'undefined') {
      const initCarousels = () => {
        const $ = (window as any).jQuery;
        if ($ && $.fn.owlCarousel) {
          // Showcase Slider
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
            animateIn: "fadeIn",
            animateOut: "fadeOut",
            slideSpeed: 300,
            touchDrag: false,
            mouseDrag: false,
          });

          // Clients Slider (Client Work)
          $('.clients--slider').owlCarousel({
            loop: true,
            margin: 20,
            dots: false,
            nav: false,
            autoplay: true,
            slideTransition: "linear",
            autoplayTimeout: 5000,
            smartSpeed: 5000,
            stagePadding: 30,
            autoWidth: true,
            mouseDrag: false,
            touchDrag: false
          });
        } else {
          // Retry if jQuery or Owl Carousel is not yet loaded
          setTimeout(initCarousels, 100);
        }
      };
      initCarousels();
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="inner--hero--area service--hero--area section-light section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="inner--hero--text">
                  <h1 data-splitting>
                    {service.title.split(' ')[0]} {service.title.split(' ')[1]}
                    <svg className="char" xmlns="http://www.w3.org/2000/svg" width="110" height="104" viewBox="0 0 110 104" fill="none">
                      <path d="M55 0L60.0256 50.0829L109.21 39.386L63.1315 59.6421L88.5038 103.114L55 65.55L21.4962 103.114L46.8685 59.6421L0.78978 39.386L49.9744 50.0829L55 0Z" fill="#00AB0C" />
                    </svg>
                    <br />
                  </h1>
                  <h2 data-splitting>
                    <span className="primary--dark">{service.title.split(' ').slice(2).join(' ')}</span>
                  </h2>
                  <div className="service--hero--para">
                    <p dangerouslySetInnerHTML={{ __html: service.shortDescription }} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Service Agency Section */}
        <section className="service--agency--area section-dark section">
          <div className="container">
            <div className="row align-items-end">
              <div className="col-lg-5">
                <div className="img--area">
                  <Image
                    src={service.image}
                    alt={service.title}
                    width={538}
                    height={846}
                    className="w-100"
                    unoptimized
                  />
                </div>
              </div>
              <div className="col-lg-7">
                <div className="text--area">
                  <p dangerouslySetInnerHTML={{ __html: service.description }} />
                  <a href="#" className="button button-click contact--toggle">Book Consultation</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bringing Brands Section */}
        <section className="bringing--area section-light section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="bringing--content--box">
                  <h3 className="common--heading" data-aos="fade-up" data-aos-duration="1000">
                    Bringing <span className="primary--dark">Brands & Business</span> to Life<br />
                    with <span className="primary--dark">strategy & design.</span>
                  </h3>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    Empower your brand with Softvence Agency – where strategy meets design. Our skilled team
                    brings brands to life through thoughtful planning and creative design. Join us to experience
                    the seamless blend of strategy and design that propels businesses to new heights!
                  </p>
                  <div className="bring--image" data-aos="fade-up" data-aos-duration="1000">
                    <img
                      src="https://softvence.agency/wp-content/uploads/al_opt_content/IMAGE/softvence.agency/wp-content/uploads/2024/02/Frame-17.png"
                      alt="Bringing Brands to Life"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Showcase Slider */}
        <section className="showcase--slider--area section-dark section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="owl-carousel showcase--slider">
                  {relatedCaseStudies.map((caseStudy: any, index: number) => (
                    <div className="item" key={index}>
                      <div className="showcase--item" data-aos="fade-In" data-aos-duration="1000">
                        {caseStudy.image && (
                          <Image
                            src={caseStudy.image}
                            alt={caseStudy.title}
                            width={1080}
                            height={1080}
                            unoptimized
                          />
                        )}
                        <div className="showcase--text">
                          <p className="category">Case Study</p>
                          <h3 className="common--heading">{caseStudy.title}</h3>
                          <p className="desc">{caseStudy.description}</p>
                          <Link href={`/case-studies/${caseStudy.slug}`} className="button button-click">View Details</Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services We Provide - FAQ */}
        <section className="faq--area service--provided--faq--area section-light section" data-aos="fade-In" data-aos-duration="1800">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mt_25">
                <div className="section--title">
                  <h3 className="common--sub--heading text--left" data-aos="fade-up" data-aos-duration="1000">SERVICES WE PROVIDE</h3>
                </div>
              </div>
              <div className="col-lg-8 mt_20">
                <div className="testimonial--right--title">
                  <h3 className="common--heading" data-aos="fade-up" data-aos-duration="1000">
                    Transform Your Brand With Our<br />
                    <span className="primary--dark">{service.title} Services</span>
                  </h3>
                </div>
                <div className="accordion mt_85" id="accordionExample">
                  {service.features.map((feature: any, index: number) => (
                    <div className="accordion-item" key={index} data-aos="fade-up" data-aos-duration="1000">
                      <h2 className="accordion-header">
                        <button
                          className={`accordion-button ${activeServiceAccordion === index ? '' : 'collapsed'} open-faq`}
                          type="button"
                          onClick={() => setActiveServiceAccordion(index)}
                        >
                          <p>{index + 1}. {feature.title}</p>
                        </button>
                      </h2>
                      <div
                        id={`serviceFaq${index + 1}`}
                        className={`accordion-collapse collapse ${activeServiceAccordion === index ? 'show' : ''}`}
                      >
                        <div className="accordion-body">
                          <p>{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Client Works Marquee */}
        <section className="client--works--marquee--area section-dark section" data-aos="fade-In" data-aos-duration="1000">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 mt_20">
                <div className="single--title">
                  <h3 className="common--sub--heading mt_10" data-aos="fade-up" data-aos-duration="1000">CLIENT WORK</h3>
                </div>
              </div>
              <div className="col-lg-9 mt_20">
                <div className="about--right--text">
                  <h2 className="common--heading" data-aos="fade-up" data-aos-duration="1000">
                    Explore our portfolio of impactful<br />
                    <span className="primary--color">collaborations and success stories.</span>
                  </h2>
                  <div className="portfolio--links">
                    <Link href="/work" className="button buttonv2 button-click" data-aos="fade-up" data-aos-duration="1000">Our Portfolio</Link>
                    <ul className="hover--portfolio--icons">
                      <li><a href="https://www.facebook.com/softvence" target="_blank" className="button-click"><i className="ri-facebook-fill"></i></a></li>
                      <li><a href="https://www.instagram.com/softvence" target="_blank" className="button-click"><i className="ri-instagram-line"></i></a></li>
                      <li><a href="https://www.linkedin.com/company/softvence-agency" target="_blank" className="button-click"><i className="ri-linkedin-fill"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel--wrapper mt_65">
            <div className="owl-carousel clients--slider" data-aos="fade-In" data-aos-duration="1000">
              {relatedCaseStudies.map((caseStudy: any, index: number) => (
                <div className="item" key={index}>
                  <div className="team--box">
                    {caseStudy.image && (
                      <Image
                        src={caseStudy.image}
                        alt={caseStudy.title}
                        width={400}
                        height={400}
                        unoptimized
                      />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Design Process */}
        <ServiceProcessScroll serviceTitle={service.title} processSteps={service.process} />

        {/* FAQ Section */}
        <section className="faq--area service--faq section-light section" data-aos="fade-In" data-aos-duration="1800">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 mt_20">
                <div className="section--title">
                  <h3 className="common--sub--heading text--left" data-aos="fade-up" data-aos-duration="1000">FAQ</h3>
                </div>
              </div>
              <div className="col-lg-9 mt_20">
                <div className="testimonial--right--title">
                  <h3 className="common--heading" data-aos="fade-up" data-aos-duration="1000">
                    Frequently <span className="primary--color">Asked Questions</span>
                  </h3>
                </div>
                <div className="accordion mt_50" id="faqAccordion">
                  {service.faqs.map((faq: any, index: number) => (
                    <div className="accordion-item" key={index} data-aos="fade-up" data-aos-duration="1000">
                      <h2 className="accordion-header">
                        <button
                          className={`accordion-button ${activeFaqAccordion === index ? '' : 'collapsed'} open-faq`}
                          type="button"
                          onClick={() => setActiveFaqAccordion(activeFaqAccordion === index ? null : index)}
                        >
                          <p>{faq.question}</p>
                        </button>
                      </h2>
                      <div className={`accordion-collapse collapse ${activeFaqAccordion === index ? 'show' : ''}`}>
                        <div className="accordion-body">
                          <p>{faq.answer}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Scheduled Area (Missing Section Added) */}
        <section className="scheduled--area section-dark section">
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <div className="schedule-content text-center">
                  <h3>Got any questions? <br /> <span className="primary--color">Schedule a FREE consultation with our experts.</span></h3>
                  <a href="#" className="button button-click contact--toggle">Appointment</a>
                </div>
              </div>
            </div>
          </div>
        </section>

      </main>
      <ContactMarquee />
      <Footer />
      <ContactPopup />
    </>
  );
}
