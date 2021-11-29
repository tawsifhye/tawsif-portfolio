import React from 'react';
import '../ComponentGlobal.css'
import bannar_image1 from "../../images/banner-image1.png"
import bannar_image2 from "../../images/banner-image2.jpg"
const Banner = () => {
    return (
        <>
            <div className="grid grid-cols-2 banner-container">
                <div className=" text-5xl flex flex-col justify-center align-middle  banner-title">
                    <div className="mx-auto">
                        <h1>I am Tawsif</h1>
                        <h1>A Web Developer</h1>
                    </div>
                </div>
                <div className="flex flex-col justify-center align-middle banner-image p-5">
                    <img className="w-3/5 rounded-full ring-8 " src={bannar_image2} alt="" />
                </div>
            </div>

        </>
    );
};

export default Banner;