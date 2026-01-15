
'use client';
import React, { useEffect } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ContactMarquee from '@/components/ContactMarquee';
import ContactPopup from '@/components/ContactPopup';

export default function ContactPage() {
    useEffect(() => {
        if (typeof window !== 'undefined' && (window as any).Splitting) {
            (window as any).Splitting();
        }
        setTimeout(() => {
            if ((window as any).AOS) (window as any).AOS.refresh();
        }, 500);
    }, []);

    return (
        <div id="page" className="site">
            <div className="parent--wrapper">
                <Header />
                <main>
            <section className="contact--marquee--area" data-aos="fade-In" data-aos-duration="1800">
                <div className="container" style={{ paddingTop: '150px', paddingBottom: '100px' }}>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="section--title text-center">
                                <h3 className="common--heading">Get In Touch</h3>
                                <p>Share what you need from us.</p>
                            </div>
                        </div>
                    </div>

                    <div className="contact--form--wrapper mt_50">
                        <form action="#" method="post" className="wpcf7-form init">
                            <div className="row">
                                <div className="col-md-6 mt_20">
                                    <div className="input--group">
                                        <input type="text" name="text-710" placeholder="Your Name" required />
                                    </div>
                                    <div className="input--group mt_20">
                                        <input type="email" name="email-377" placeholder="Your Email" required />
                                    </div>
                                    <div className="input--group mt_20">
                                        <textarea name="textarea-849" rows={5} placeholder="Tell Us About Your Project" required></textarea>
                                    </div>
                                </div>
                                <div className="col-md-6 mt_20">
                                    <h4>I’m Interested In:</h4>
                                    <div className="pop--tags--box">
                                        <ul className="d-flex flex-wrap" style={{ gap: '10px', listStyle: 'none', padding: 0 }}>
                                            <li><label><input type="checkbox" name="interest[]" value="Accounting" /> Accounting</label></li>
                                            <li><label><input type="checkbox" name="interest[]" value="Data Analytics" /> Data Analytics</label></li>
                                            <li><label><input type="checkbox" name="interest[]" value="Branding" /> Branding</label></li>
                                            <li><label><input type="checkbox" name="interest[]" value="UI/UX" /> UI/UX</label></li>
                                            <li><label><input type="checkbox" name="interest[]" value="Web Dev" /> Web Dev</label></li>
                                        </ul>
                                    </div>
                                    <div className="input--group mt_20">
                                        <select name="budget" className="w-100 p-2">
                                            <option value="">Select your Budget (USD)</option>
                                            <option value="500-5000">500$-5000$</option>
                                            <option value="5000-15000">5000$-15000$</option>
                                            <option value="More">More</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div className="btn--area text-center mt_40">
                                <input className="button" type="submit" value="Submit" />
                            </div>
                        </form>
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
