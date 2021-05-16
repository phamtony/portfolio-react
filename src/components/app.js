import React, {useEffect, useState} from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import 'aos/dist/aos.css';
import AOS from 'aos';

import './app.css';
import {mobileMenu, stickyHeader} from './page';
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
    const [data, setData] = useState('');

    const fetchPortfolio = async () => {
        const response = await axios.get('https://portfolio-api.com/json', {
            params: {
                api: 'sJfvLXK6yNeszieYlwGotBrf'
            }
        });
        setData(response.data);
    };

    useEffect(() => {
        if (data === '') {
            AOS.init();
            // mobileMenu();
            // stickyHeader();
        }

        fetchPortfolio();
    }, []);

    if (data === '') {
        return (
            <div>Still Loading...</div>
        );
    }


    return (
        <>
            <NavBar/>
            <SocialContact data={data}/>

            <div className="container">
                <Intro data={data}/>
                <About data={data}/>
                <Experience data={data.experience}/>
                <Project data={data.projects}/>
                <SkillsEducation data={data}/>
                <Connect email={data.general.email}/>
            </div>

            <Footer data={data}/>
        </>
    );
};

export default App;