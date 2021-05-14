import React from 'react';

const Experience = () => {
    return (
        <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000"
             data-aos-easing="ease-in-out">
            <div className="col-lg-8 pt-small-5 pb-small-5 pt-10 pb-20">
                <div className="section-tags">
                    <div id="experience"></div>
                </div>
                <h2 className="tan mb-4">Experience</h2>

                <div className="experience-accordion">
                    <div className="d-sm-flex">

                        <ul className="nav nav-pills mb-3 d-flex flex-nowrap d-sm-block" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="nav-link active" id="pills-lashowroom-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-lashowroom" type="button" role="tab"
                                        aria-controls="pills-lashowroom" aria-selected="true">LA Showroom
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-hotelsathome-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-hotelsathome" type="button" role="tab"
                                        aria-controls="pills-hotelsathome" aria-selected="false">Hotels At Home
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-sfg-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-sfg" type="button" role="tab" aria-controls="pills-sfg"
                                        aria-selected="false">SFG - Freelance
                                </button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="nav-link" id="pills-lacada-tab" data-bs-toggle="pill"
                                        data-bs-target="#pills-lacada" type="button" role="tab"
                                        aria-controls="pills-lacada" aria-selected="false">LA Cada - Freelance
                                </button>
                            </li>
                        </ul>
                        <div className="tab-content pt-4 py-sm-1 ps-sm-5" id="pills-tabContent">

                            <div className="tab-pane fade show active" id="pills-lashowroom" role="tabpanel"
                                 aria-labelledby="pills-lashowroom-tab">
                                <h6 className="mb-0">Lead Software Engineer - <span className="fw-light"><a
                                    className="text-decoration-none tan" href="https://www.lashowroom.com/"
                                    target="_blank" rel="noopener noreferrer">LA Showroom</a></span></h6>
                                <p className="mb-3">Apr. 2015 - Present</p>

                                <p>Flagship (B2B e-commerce) service/product with over 500+ vendors and 1000s of
                                    wholesalers.</p>

                                <ul>
                                    <li><a className="text-decoration-none" href="https://www.lashowroom.com"
                                           target="_blank" rel="noopener noreferrer">www.lashowroom.com</a></li>
                                </ul>

                                <p>E-commerce sites we built for individual vendors</p>
                                <ul>
                                    <li><a className="text-decoration-none" href="https://www.easelonline.com"
                                           target="_blank" rel="noopener noreferrer">www.easelonline.com</a></li>
                                    <li><a className="text-decoration-none" href="https://www.shopcrescentla.com/"
                                           target="_blank" rel="noopener noreferrer">www.shopcrescentla.com</a></li>
                                    <li><a className="text-decoration-none" href="https://mystree.com/"
                                           target="_blank" rel="noopener noreferrer">mystree.com</a></li>
                                    <li><a className="text-decoration-none" href="https://umgeewholesale.com"
                                           target="_blank" rel="noopener noreferrer">umgeewholesale.com</a></li>
                                </ul>
                            </div>

                            <div className="tab-pane fade" id="pills-hotelsathome" role="tabpanel"
                                 aria-labelledby="pills-hotelsathome-tab">
                                <h6 className="mb-0">Front-end Web Developer - <span className="fw-light"><a
                                    className="text-decoration-none tan" href="https://www.hotelsathome.com/"
                                    target="_blank" rel="noopener noreferrer">Hotels At Home</a></span></h6>
                                <p className="mb-3">Nov. 2013 - Apr. 2015</p>

                                <p>Brochure site of the company</p>

                                <ul>
                                    <li><a className="text-decoration-none" href="https://www.hotelsathome.com"
                                           target="_blank" rel="noopener noreferrer">www.hotelsathome.com</a></li>
                                </ul>

                                <p>Few of the e-commerce sites we built for companies that are part of the Fortune
                                    500.</p>
                                <ul>
                                    <li><a className="text-decoration-none" href="https://www.shopmarriott.com"
                                           target="_blank" rel="noopener noreferrer">www.shopmarriott.com</a></li>
                                    <li><a className="text-decoration-none" href="https://www.westinstore.com/"
                                           target="_blank" rel="noopener noreferrer">www.westinstore.com</a></li>
                                    <li><a className="text-decoration-none" href="https://www.whotelsthestore.com/"
                                           target="_blank" rel="noopener noreferrer">www.whotelsthestore.com</a></li>
                                    <li><a className="text-decoration-none" href="https://www.ritzcarltonshops.com"
                                           target="_blank" rel="noopener noreferrer">www.ritzcarltonshops.com</a></li>
                                </ul>
                            </div>

                            <div className="tab-pane fade" id="pills-sfg" role="tabpanel"
                                 aria-labelledby="pills-sfg-tab">
                                <h6 className="mb-0">Developer - <span className="fw-light"><a
                                    className="text-decoration-none tan" href="https://www.sfgproductions.com/"
                                    target="_blank" rel="noopener noreferrer">SFG Productions</a></span></h6>
                                <p className="mb-3">2020</p>

                                <p>Worked for Sean Gannet (Film Director)</p>

                                <ul>
                                    <li><a className="text-decoration-none" href="https://www.sfgproductions.com/"
                                           target="_blank" rel="noopener noreferrer">www.sfgproductions.com</a></li>
                                </ul>
                            </div>

                            <div className="tab-pane fade" id="pills-lacada" role="tabpanel"
                                 aria-labelledby="pills-lacada-tab">
                                <h6 className="mb-0">Developer - <span className="fw-light"><a
                                    className="text-decoration-none tan" href="https://www.lacada.com/" target="_blank" rel="noopener noreferrer">LA Cada</a></span>
                                </h6>
                                <p className="mb-3">2014</p>

                                <p>Built LA Cada a new site and donated it to them.</p>

                                <ul>
                                    <li><a className="text-decoration-none" href="https://www.lacada.com/"
                                           target="_blank" rel="noopener noreferrer">www.lacada.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Experience;