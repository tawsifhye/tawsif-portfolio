import React from 'react';
import '../ComponentGlobal.css'
import bannar_image2 from "../../images/banner-image2.jpg"
const Banner = () => {
    return (
        <>
            <div className="flex flex-col justify-center align-middle banner-container">
                <div className="mx-auto font-semibold py-2">
                    <h1 className="text-8xl py-2" >Hi, I am Tawsif</h1>
                    <h1 className="text-5xl py-2 text-gray-700">A Web Developer</h1>
                </div>
                <div className="mx-auto text-3xl banner-icons" >
                    <a href="http://" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
                    <a href="http://" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square"></i></a>
                    <a href="mailto: tawsifulhye@gmail.com"><i className="fas fa-envelope"></i></a>
                </div>

            </div>

        </>
    );
};

export default Banner;