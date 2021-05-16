import React from 'react';

const Footer = ({data}) => {
    return (
        <>
        <footer>
            <div className="row">
                <div className="col-12 pt-10 pb-2">
                    <div className="footer__social-media">
                        <div className="footer__social-media--container">
                            <ul className="list-unstyled d-flex justify-content-center">
                                <li className="px-3"><a href={`mailto:${data.general.email}`} rel="noopener noreferrer" target="_blank"><img
                                    width="42" src="./images/email.svg" alt="email" /></a></li>
                                <li className="px-3"><a href={data.general.github} rel="noopener noreferrer" target="_blank"><img
                                    width="42" src="./images/github.svg" alt="github" /></a></li>
                                <li className="px-3"><a href={data.general.linkedin} rel="noopener noreferrer"
                                                        target="_blank"><img width="42" src="./images/linkedin.svg"
                                                                             alt="linkedin" /></a></li>
                            </ul>
                        </div>
                    </div>

                    <p className="tan text-center fw-light">Built by {data.general.name}</p>
                </div>
            </div>
        </footer>
        </>
    );
};

export default Footer;