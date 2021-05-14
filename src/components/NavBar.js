import React from 'react';

const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm sticky-top px-sm-3 py-2 text-white dark-blue-bg">
                <div className="container-fluid align-items-center justify-content-end">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <img width="40" src="./images/burger.svg" alt="" />
                    </button>

                    <div className="collapse off-canvas navbar-collapse align-items-center justify-content-end"
                         id="navbarNav">
                        <a href="#about" className="nav-link text-white">
                            About
                        </a>
                        <a href="#experience" className="nav-link text-white">
                            Experience
                        </a>
                        <a href="#projects" className="nav-link text-white">
                            Projects
                        </a>
                        <a href="#skills" className="nav-link text-white">
                            Skills/Education
                        </a>
                        <a href="#connect" className="nav-link text-white">
                            Connect
                        </a>
                    </div>

                </div>
            </nav>
        </>
    );
};

export default NavBar;