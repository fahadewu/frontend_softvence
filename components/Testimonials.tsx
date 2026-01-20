import React from 'react';
import testimonialsData from '../data/testimonials.json';

const Testimonials = () => {
    const { testimonials } = testimonialsData;

    return (
        <section className="testimonial--area section section-light">
            <div className="container">
                <div className="row title--row">
                    <div className="col-lg-3 mt_20">
                        <div className="single--title">
                            <h3 className="common--sub--heading mt_10" data-aos="fade-up" data-aos-duration="1000">
                                TESTIMONIALS
                            </h3>
                        </div>
                    </div>
                    <div className="col-lg-9 mt_20">
                        <div className="testimonial--right--title">
                            <h3 className="common--heading" data-aos="fade-up" data-aos-duration="1000">
                                We value each and every client’s <span className="primary--dark">feedback</span> which helps us to<br />
                                <span className="primary--dark">improve.</span>
                            </h3>
                        </div>
                    </div>
                    <div className="col-md-12">
                        {testimonials.length > 0 ? (
                            <div className="owl-carousel testi--slider" data-aos="fade-In" data-aos-duration="2000">
                                {testimonials.map((testimonial) => (
                                    <div className="item" key={testimonial.id}>
                                        <div className="testi--box">
                                            <div className="client--img--area">
                                                <img
                                                    src={testimonial.image || "/assets/images/logo.jpg"}
                                                    loading="lazy"
                                                    alt={testimonial.name}
                                                    onError={(e) => {
                                                        (e.target as HTMLImageElement).src = `https://placehold.co/200x200?text=${encodeURIComponent(testimonial.name)}`;
                                                    }}
                                                />
                                                <a href="#" className="play--review">
                                                    <svg viewBox="0 0 18 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fill="#000">
                                                        <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                                        <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                                        <g id="SVGRepo_iconCarrier">
                                                            <title>multimedia / 9 - multimedia, play icon</title>
                                                            <g id="Free-Icons" stroke="none" strokeWidth="1" fill="#000" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                                                                <g transform="translate(-749.000000, -379.000000)" id="Group" stroke="#000" strokeWidth="2">
                                                                    <g transform="translate(745.000000, 376.000000)" id="Shape">
                                                                        <path d="M5,4.67805648 C5,4.56284567 5.03231968,4.44953549 5.09390785,4.34882312 C5.29405709,4.02152811 5.74836552,3.90360587 6.10863414,4.08543644 L20.6160344,11.4074417 C20.7378493,11.4689227 20.8382812,11.5601626 20.9059562,11.6708284 C21.1061054,11.9981234 20.976303,12.4108512 20.6160344,12.5926818 L6.10863414,19.9146871 C5.99777542,19.9706384 5.87304972,20 5.7462319,20 C5.3340994,20 5,19.6964791 5,19.322067 L5,4.67805648 Z"></path>
                                                                    </g>
                                                                </g>
                                                            </g>
                                                        </g>
                                                    </svg>
                                                </a>
                                            </div>
                                            <div className="client--content">
                                                <p>{testimonial.content}</p>
                                                <div className="company--name">
                                                    <h4>{testimonial.name}. <span>{testimonial.role}</span></h4>
                                                    {testimonial.companyLogo && (
                                                        <img
                                                            src={testimonial.companyLogo}
                                                            loading="lazy"
                                                            alt={`${testimonial.name} Company Logo`}
                                                            onError={(e) => {
                                                                (e.target as HTMLImageElement).style.display = 'none';
                                                            }}
                                                        />
                                                    )}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <div className="text-center py-5">
                                <p className="common--para italic text-gray-400">Our clients speak for our quality. Reviews coming soon!</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
