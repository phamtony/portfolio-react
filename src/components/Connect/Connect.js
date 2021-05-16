import React from 'react';

const Connect = ({email}) => {
    return (
        <div className="row justify-content-center" data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000"
             data-aos-easing="ease-in-out">
            <div className="col-sm-8 col-lg-6 pb-small-5 pt-10 pb-20">
                <div className="section-tags">
                    <div id="connect"></div>
                </div>
                <h2 className="tan mb-4 text-center">Let's Connect</h2>
                <div className="row justify-content-center">
                    <div className="col-md-8">
                        <p className="text-center">
                            Want to collab, ask me questions, or just chat? Email me or message me via LinkedIn!
                        </p>
                        <div className="text-center pt-4">
                            <a href={`mailto:${email}`}>
                                <button className="connect-button button-strip">Connect</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Connect;