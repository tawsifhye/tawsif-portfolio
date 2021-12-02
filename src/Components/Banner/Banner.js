import React from 'react';
import MovingComponent from 'react-moving-text'
import '../ComponentGlobal.css'
const Banner = () => {
    return (
        <>
            <div className="flex flex-col justify-center align-middle banner-container">
                <div className="mx-auto font-semibold p-2">
                    <MovingComponent
                        type="zoomIn"
                        duration="2000ms"
                        delay="0s"
                        direction="normal"
                        timing="ease"
                        iteration="1"
                        fillMode="backwards">
                        <h1 className="text-8xl py-2" >Hi, I am Tawsif</h1>
                    </MovingComponent>
                    <MovingComponent
                        type="zoomOut"
                        duration="2000ms"
                        delay="0s"
                        direction="normal"
                        timing="ease"
                        iteration="1"
                        fillMode="backwards">
                        <h1 className="text-5xl py-2 text-gray-700">A Web Developer</h1>
                    </MovingComponent>


                </div>
                <div className="mx-auto text-3xl banner-icons" >
                    <MovingComponent
                        type="jelly"
                        duration="2000ms"
                        delay="2s"
                        direction="normal"
                        timing="linear"
                        iteration="3"
                        fillMode="none">
                        <a href="https://www.linkedin.com/in/md-tawsif-ul-hye-chowdhury/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin hvr-pulse"></i></a>
                        <a href="https://github.com/tawsifhye" target="_blank" rel="noopener noreferrer"><i className="fab fa-github-square hvr-pulse"></i></a>
                        <a href="mailto: tawsifulhye@gmail.com"><i className="fas fa-envelope hvr-pulse"></i></a>
                    </MovingComponent>


                </div>

            </div>

        </>
    );
};

export default Banner;


