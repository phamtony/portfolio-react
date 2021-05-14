import React, {useEffect} from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import 'aos/dist/aos.css';
import AOS from 'aos';

import './app.css';
import NavBar from './NavBar';
import SocialContact from './SocialContact';
import Intro from './Intro';
import About from './About';
import Experience from './Experience';
import Project from './Project';
import SkillsEducation from './SkillsEducation';
import Connect from './Connect';
import Footer from './Footer';

const App = () => {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <NavBar/>
            <SocialContact/>

            <div className="container">
                <Intro/>
                <About/>
                <Experience/>
                <Project/>
                <SkillsEducation/>
                <Connect/>
            </div>

            <Footer/>
        </>
    );
};

export default App;