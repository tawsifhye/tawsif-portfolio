import React, { useEffect } from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import FeaturedProjects from '../FeaturedProjects/FeaturedProjects';

const Home = () => {
    useEffect(() => {
        document.title = "Tawsif Dot Dev | Home"
    }, [])
    return (
        <>
            <div id="home">
                <Banner />

                <AboutMe />

                <FeaturedProjects />
            </div>
        </>
    );
};

export default Home;