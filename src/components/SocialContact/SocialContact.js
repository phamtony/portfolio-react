import React from 'react';

const SocialContact = ({data}) => {
    return (
        <>
            <div className="social-media">
                <div className="social-media__container">
                    <ul className="list-unstyled">
                        <li className="py-1"><a href={`mailto:${data.general.email}`} target="_blank" rel="noopener noreferrer">
                            <img width="42" src="./images/email.svg" alt=""/></a>
                        </li>
                        <li className="py-1"><a href={data.general.github} target="_blank" rel="noopener noreferrer">
                            <img width="42" src="./images/github.svg" alt=""/></a>
                        </li>
                        <li className="py-1"><a href={data.general.linkedin} target="_blank" rel="noopener noreferrer">
                            <img width="42" src="./images/linkedin.svg" alt=""/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default SocialContact;