import React, { useEffect } from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import FeaturedProjects from '../FeaturedProjects/FeaturedProjects';

const Home = () => {
    useEffect(() => {
        document.title = "Tawsif Dot Dev | Home"
    }, [])
    return (
        <>
            <div className='' id="home">
                <Banner />

                <AboutMe />

                <FeaturedProjects />

                <Contact />
            </div>
        </>
    );
};

export default Home;