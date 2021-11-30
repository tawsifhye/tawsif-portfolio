import React from 'react';
import AboutMe from '../AboutMe/AboutMe';
import Banner from '../Banner/Banner';
import MyProjects from '../MyProjects/MyProjects';

const Home = () => {
    return (
        <>
            <div>
                <Banner></Banner>
                <AboutMe></AboutMe>
                <MyProjects></MyProjects>
            </div>
        </>
    );
};

export default Home;