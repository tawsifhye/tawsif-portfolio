import React from 'react';
import bannar_image2 from "../../images/banner-image2.jpg"
const AboutMe = () => {
    return (
        <>
            <div id="about" className="container mt-28 grid grid-cols-2">
                <div className="">
                    <img className="mx-auto w-1/2 rounded-full ring-8 " src={bannar_image2} alt="" />
                </div>
                <div>
                    <h1 className="text-5xl text-center text-green-800 font-bold">About Me</h1>
                    <p className="mt-10 p-5 font-black">I'm a web developer with hands-on experience in JavaScript. I am passionate to build any kind of web development solution. I am an aspiring web developer, learning every aspect of web development. Alongside, I have achieved my CCNA certification. I have the experience to work as Technical Support Engineer. I am a quick learner, a team performer, and can stick to something until I achieve positive results.</p>
                </div>
                <div id="skills">

                </div>
            </div>
        </>
    );
};

export default AboutMe;