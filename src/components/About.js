import React from 'react';

const About = () => {
    return (
        <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000"
             data-aos-easing="ease-in-out">
            <div className="col-lg-10 pt-small-5 pb-small-5 pt-10 pb-20">
                <div className="section-tags">
                    <div id="about"></div>
                </div>
                <h2 className="tan mb-4">About Me</h2>
                <div className="row">
                    <div className="col-md-7 col-lg-8 pb-5 pb-md-0">
                        <p>
                            Initially, I aspired to be in the music industry. I then later earned my undergrad in
                            accounting. During that time, I self-studied computer science concepts in my 3rd year of
                            undergrad because I knew accounting wasn't for me. After graduating, I found an entry-level
                            developer position. At the same time, I was taking courses for my master's in computer
                            science. Fast-forward to the present, and this is the stack I currently work with at LA
                            Showroom
                        </p>

                        <div className="row justify-content-start mb-3 tan">
                            <div className="col-4">
                                <p className="mb-0 text-nowrap">▹ PHP</p>
                                <p className="mb-0 text-nowrap">▹ Symphony</p>
                            </div>
                            <div className="col-4">
                                <p className="mb-0 text-nowrap">▹ Javascript</p>
                            </div>
                        </div>

                        <p>
                            This is my current favorite stack
                        </p>

                        <div className="row justify-content-start tan">
                            <div className="col-4">
                                <p className="mb-0 text-nowrap">▹ Python</p>
                                <p className="mb-0 text-nowrap">▹ Flask</p>
                            </div>
                            <div className="col-4">
                                <p className="mb-0 text-nowrap">▹ Javascript</p>
                                <p className="mb-0 text-nowrap">▹ React</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5 col-lg-4">
                        <div className="about-me__picture text-center">
                            <img className="w-100"
                                 src="https://media-exp1.licdn.com/dms/image/C5603AQGPYPBtm321EA/profile-displayphoto-shrink_800_800/0/1613701378861?e=1623283200&v=beta&t=ks0icZPF2BDyNOTrnimul44y0TvdGTq8Rq-gkYoCb90"
                                 alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;