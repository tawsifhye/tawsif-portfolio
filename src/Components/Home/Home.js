import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import FeaturedProjects from '../FeaturedProjects/FeaturedProjects';

const Home = () => {
    return (
        <>
            <div>
                <Banner />

                <AboutMe />

                <FeaturedProjects />
            </div>
        </>
    );
};

export default Home;