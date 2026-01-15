'use client';

import { notFound } from 'next/navigation';
import servicesData from '@/data/services.json';
import caseStudiesData from '@/data/caseStudies.json';
import Image from 'next/image';
import { useState } from 'react';
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
  const [activeFaqAccordion, setActiveFaqAccordion] = useState<number | null>(null);

  // Get related case studies based on service
  const relatedCaseStudies = caseStudiesData.caseStudies.slice(0, 6);

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
                      <path d="M55 0L60.0256 50.0829L109.21 39.386L63.1315 59.6421L88.5038 103.114L55 65.55L21.4962 103.114L46.8685 59.6421L0.78978 39.386L49.9744 50.0829L55 0Z" fill="#00AB0C"/>
                    </svg>
                    <br/>
                  </h1>
                  <h2 data-splitting>
                    <span className="primary--dark">{service.title.split(' ').slice(2).join(' ')}</span>
                  </h2>
                  <div className="service--hero--para">
                    <p dangerouslySetInnerHTML={{ __html: service.description }} />
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
                    Bringing <span className="primary--dark">Brands & Business</span> to Life<br/> 
                    with <span className="primary--dark">strategy & design.</span>
                  </h3>
                  <p data-aos="fade-up" data-aos-duration="1000">
                    Empower your brand with Softvence Agency – where strategy meets design. Our skilled team 
                    brings brands to life through thoughtful planning and creative design. Join us to experience 
                    the seamless blend of strategy and design that propels businesses to new heights!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Showcase Slider */}
        <section className="showcase--slider--area section-dark section">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 col-md-3">
                <div className="showcase--title">
                  <h3 className="common--sub--heading">SHOWCASE</h3>
                </div>
              </div>
              <div className="col-lg-8 col-md-9">
                <div className="showcase--text">
                  <h2 className="common--heading">
                    Step into our<br/>
                    <span className="primary--color">Portfolio Parade!</span>
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel--wrapper mt_65">
            <div className="owl-carousel case-study--slider">
              {relatedCaseStudies.map((caseStudy: any, index: number) => (
                <div className="item" key={index}>
                  <div className="case--study--box">
                    <a href={`/case-studies/${caseStudy.slug}`}>
                      {caseStudy.image && (
                        <Image 
                          src={caseStudy.image}
                          alt={caseStudy.title}
                          width={400}
                          height={300}
                          unoptimized
                        />
                      )}
                      <h4>{caseStudy.title}</h4>
                      <p>{caseStudy.description}</p>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services We Provide - FAQ */}
        <section className="faq--area service--provided--faq--area section-light section">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mt_25">
                <h3 className="common--sub--heading text--left">SERVICES WE PROVIDE</h3>
              </div>
              <div className="col-lg-8 mt_20">
                <h3 className="common--heading">
                  Transform Your Brand With Our<br/> 
                  <span className="primary--dark">{service.title} Services</span>
                </h3>
                <div className="accordion mt_85" id="accordionExample">
                  {service.features.map((feature: any, index: number) => (
                    <div className="accordion-item" key={index}>
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
        <section className="client--works--marquee--area section-dark section">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 mt_20">
                <h3 className="common--sub--heading mt_10">CLIENT WORK</h3>
              </div>
              <div className="col-lg-9 mt_20">
                <h2 className="common--heading">
                  Explore our portfolio of impactful<br/>
                  <span className="primary--color">collaborations and success stories.</span>
                </h2>
                <div className="hover--portfolio--icons">
                  <ul className="social--icons">
                    <li><a href="https://www.facebook.com/softvence" target="_blank"><i className="ri-facebook-fill"></i></a></li>
                    <li><a href="https://www.instagram.com/softvence" target="_blank"><i className="ri-instagram-line"></i></a></li>
                    <li><a href="https://www.linkedin.com/company/softvence-agency" target="_blank"><i className="ri-linkedin-fill"></i></a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="carousel--wrapper mt_65">
            <div className="owl-carousel clients--slider">
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
        <section className="design--process--area service--design--process section-dark section">
          <div className="container">
            <div className="row">
              <div className="col-lg-3 mt_20">
                <h3 className="common--sub--heading mt_10">
                  {service.title.toUpperCase()}<br/> DESIGN PROCESS
                </h3>
              </div>
              <div className="col-lg-9 mt_20">
                <h3 className="common--heading">
                  Embark on a journey of strategic planning and<br/>
                  <span className="primary--color">creative execution with our process.</span>
                </h3>
              </div>
            </div>
          </div>
          <div id="horizontal-scoll">
            <div className="horizontal-scoll-wrapper">
              <div className="horizontal">
                {service.process.map((step: any, index: number) => (
                  <div key={index}>
                    <div className="design--card">
                      <h4>{index + 1}. {step.title}</h4>
                      <p>{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="faq--area section-light section">
          <div className="container">
            <div className="row">
              <div className="col-lg-4 mt_25">
                <h3 className="common--sub--heading text--left">FAQ</h3>
              </div>
              <div className="col-lg-8 mt_20">
                <h3 className="common--heading">
                  Frequently Asked<br/> 
                  <span className="primary--dark">Questions</span>
                </h3>
                <div className="accordion mt_85" id="faqAccordion">
                  {service.faqs.map((faq: any, index: number) => (
                    <div className="accordion-item" key={index}>
                      <h2 className="accordion-header">
                        <button 
                          className={`accordion-button ${activeFaqAccordion === index ? '' : 'collapsed'}`}
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
      </main>
      <ContactMarquee />
      <Footer />
      <ContactPopup />
    </>
  );
}
