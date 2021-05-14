import React from 'react';

const Intro = () => {
    return (
        <div className="row whole-page" data-aos="fade-right" data-aos-delay="50" data-aos-duration="1000"
             data-aos-easing="ease-in-out">
            <div className="col-12">
                <div className="hero">
                    <p className="mb-2">Hello, my name is</p>
                    <h1>Tony Pham. <br />
                        <span className="tan">Software Engineer.</span>
                    </h1>
                    <ul className="list-unstyled">
                        <li className="lh-lg"><img width="30" src="./images/girldad.svg" alt="girldad" /> girldad</li>
                        <li className="lh-lg"><img width="30" src="./images/bball.svg" alt="basketball" /> hooper</li>
                        <li className="lh-lg"><img width="30" src="./images/guitar.svg" alt="guitar" /> noob guitarist</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Intro;