import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'Case Studies - Softvence Agency',
    description: 'Explore our latest case studies and success stories.',
};

export default function CaseStudiesPage() {
    const caseStudiesDir = path.join(process.cwd(), 'case_studies');
    let caseStudies: string[] = [];

    try {
        if (fs.existsSync(caseStudiesDir)) {
            caseStudies = fs.readdirSync(caseStudiesDir).filter((file) => {
                return fs.statSync(path.join(caseStudiesDir, file)).isDirectory();
            });
        }
    } catch (error) {
        console.error("Error reading case studies directory:", error);
    }

    return (
        <div id="page" className="site">
            <div className="parent--wrapper active">
                <Header />
                <main>
                    <section className="inner--hero--area section section-light">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-12">
                                    <div className="inner--hero--text">
                                        <h1 className="splitting-text">Our Recent <br /> <span className="primary--dark">Works</span></h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>

                    <section className="case--studies--area section section-dark" style={{ paddingTop: '50px' }}>
                        <div className="container">
                            <div className="row">
                                {caseStudies.length > 0 ? (
                                    caseStudies.map((slug) => (
                                        <div key={slug} className="col-lg-6 col-md-6 mt_20">
                                            <a href={`/case-studies/${slug}`} className="project--box">
                                                <div className="img--area" style={{ background: '#222', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '20px', overflow: 'hidden' }}>
                                                    {/* Placeholder for thumbnail since we don't have metadata yet */}
                                                    <h3 style={{ color: '#fff', textTransform: 'capitalize' }}>{slug.replace(/-/g, ' ')}</h3>
                                                </div>
                                                <div className="content--area mt_20">
                                                    <h4 style={{ textTransform: 'capitalize' }}>{slug.replace(/-/g, ' ')}</h4>
                                                    <p className="primary--color">View Case Study</p>
                                                </div>
                                            </a>
                                        </div>
                                    ))
                                ) : (
                                    <div className="col-12">
                                        <p>No case studies found.</p>
                                    </div>
                                )}
                            </div>
                        </div>
                    </section>
                </main>
                <Footer />
            </div>
        </div>
    );
}
