import React, {useEffect, useState} from 'react';
import axios from 'axios';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min';
import 'aos/dist/aos.css';
import AOS from 'aos';

import '../styles/app.css';
import {mobileMenu, stickyHeader, anchorReload} from '../custom';
import * as Constants from '../constants';
import NavBar from './NavBar/NavBar';
import SocialContact from './SocialContact/SocialContact';
import Intro from './Intro/Intro';
import About from './About/About';
import Experience from './Experience/Experience';
import Project from './Project/Project';
import SkillsEducation from './SkillsEducation/SkillsEducation';
import Connect from './Connect/Connect';
import Footer from './Footer/Footer';
import Loader from './Loader/Loader';


const App = () => {
    const [data, setData] = useState('');
    const imagePath = Constants.imageAWSlink;

    const fetchPortfolio = async () => {
        const response = await axios.get(Constants.portfolioAPI, {
            params: {
                api: Constants.apiKey,
            }
        });
        setData(response.data);

        AOS.init();
        mobileMenu();
        stickyHeader();
        anchorReload();
    };

    useEffect(() => {
        fetchPortfolio();
    }, []);


    if (data === '') {
        return (
            <Loader />
        );
    }

    return (
        <>
            <NavBar/>
            <SocialContact data={data}/>

            <div className="container">
                <Intro data={data}/>
                <About data={data} imagePath={imagePath}/>
                <Experience data={data.experience}/>
                <Project data={data.projects} imagePath={imagePath}/>
                <SkillsEducation data={data}/>
                <Connect email={data.general.email}/>
            </div>

            <Footer data={data}/>
        </>
    );
};

export default App;