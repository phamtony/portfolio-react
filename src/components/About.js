import React from 'react';

const About = ({data}) => {
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
                        <div dangerouslySetInnerHTML={{__html: data.about.intro}} />
                    </div>

                    <div className="col-md-5 col-lg-4">
                        <div className="about-me__picture text-center">
                            <img className="w-100"
                                 src={`${window.imagePath}/${data.about.image}`}
                                 alt="portrait of me" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;