import React from 'react';

const Experience = ({data}) => {

    const renderJobList = data.map((store, index) => {
        const storeName = store.name.replace(/ /g, '').toLowerCase();
        const startIndex = index === 0 ? true : false;

        return (
            <li className="nav-item" role="presentation" key={index}>
                <button className={`nav-link ${startIndex ? 'active' : ''}`} id={`pills-${storeName}-tab`} data-bs-toggle="pill"
                        data-bs-target={`#pills-${storeName}`} type="button" role="tab"
                        aria-controls={`pills-${storeName}`} aria-selected={startIndex ? 'true' : 'false'}>
                    {store.name}
                </button>
            </li>
        );
    });

    const renderJobDetails = data.map((store, index) => {
        const storeName = store.name.replace(/ /g, '').toLowerCase();
        const startIndex = index === 0 ? true : false;

        return (
            <div className={`tab-pane fade ${startIndex ? 'show active' : ''}`} id={`pills-${storeName}`} role="tabpanel"
                 aria-labelledby={`pills-${storeName}-tab`}>
                <h6 className="mb-0">{store.position} - <span className="fw-light"><a
                    className="text-decoration-none tan" href={store.link}
                    target="_blank" rel="noopener noreferrer">{store.name}</a></span></h6>
                <p className="mb-3">{store.time}</p>

                <div dangerouslySetInnerHTML={{__html: store.description}} />
            </div>
        );
    });

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
                            {renderJobList}
                        </ul>

                        <div className="tab-content pt-4 py-sm-1 ps-sm-5" id="pills-tabContent">
                            {renderJobDetails}
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Experience;