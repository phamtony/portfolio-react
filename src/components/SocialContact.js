import React from 'react';

const SocialContact = () => {
    return (
        <>
            <div className="social-media">
                <div className="social-media__container">
                    <ul className="list-unstyled">
                        <li className="py-1"><a href="mailto:tonypham.programmer@gmail.com" target="_blank" rel="noopener noreferrer">
                            <img width="42" src="./images/email.svg" alt=""/></a>
                        </li>
                        <li className="py-1"><a href="https://www.github.com/phamtony" target="_blank" rel="noopener noreferrer">
                            <img width="42" src="./images/github.svg" alt=""/></a>
                        </li>
                        <li className="py-1"><a href="https://www.linkedin.com/in/mrtonypham/" target="_blank" rel="noopener noreferrer">
                            <img width="42" src="./images/linkedin.svg" alt=""/></a>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default SocialContact;