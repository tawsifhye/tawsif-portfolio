import React, { useState, useEffect } from 'react';
import bannar_image2 from "../../images/banner-image2.jpg"
const AboutMe = () => {
    const aboutMeSubHeader = "text-3xl font-bold border-l-4 p-1 border-blue-300 mb-3";

    const skillTab = 'bg-blue-300 font-black inline-block mr-3 mt-3 py-2 px-2 ring-2 ring-indigo-800 rounded-lg';

    const [personalInfo, setPersonalInfo] = useState([]);
    const { skills, aboutMe } = personalInfo

    useEffect(() => {
        fetch("skills.json")
            .then(res => res.json())
            .then(data => setPersonalInfo(data));
    }, [])

    return (
        <>
            <div id="about" className="mt-28">

                <h1 className=" text-5xl text-center font-bold">About Me</h1>

                <div className="container grid mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 mx-auto">
                    <div className="flex sm:mt-10 flex-col justify-center ">
                        <img className="mx-auto w-3/5 rounded-full ring-8 inline-block" src={bannar_image2} alt="" />
                    </div>
                    <div className="p-5 flex flex-col align-middle justify-items-center">
                        <p className="font-black mb-5 text-justify">{aboutMe}</p>
                        <div className='mb-5'>
                            <h1 className={aboutMeSubHeader}>Experience</h1>

                            {/* <div className='w-3 h-3 bg-gray-800 border rounded-full	relative timeline'></div> */}
                            <div>
                                <p className="text-2xl font-bold">Staff Asia</p>
                                <p className=" font-bold">Web Developer & Maintainer</p>
                                <p className=" font-bold">July 2022 - Present</p>
                            </div>
                            <div className='mt-4'>
                                <p className="text-2xl font-bold">Staff Asia</p>
                                <p className=" font-bold">Frontend Developer</p>
                                <p className=" font-bold">Internship</p>
                                <p className=" font-bold">January 2022 - June 2022</p>
                            </div>
                        </div>
                        <div id="skills">
                            <h1 className={aboutMeSubHeader}>Skills</h1>

                            <div id="comfortable-skills" className="mt-3">
                                <h1 className="text-xl font-bold">Comfortable</h1>

                                {skills?.comfortable?.map(skill => (
                                    <div key={skill} className={skillTab}>{skill}</div>
                                ))}
                            </div>

                            <div id="familiar-skills" className="mt-3">
                                <h1 className="text-xl font-bold">Familiar</h1>
                                {skills?.familiar?.map(skill => (
                                    <div key={skill} className={skillTab}>{skill}</div>
                                ))}
                            </div>
                            <div id="tools" className="mt-3">
                                <h1 className="text-xl font-bold">Tools</h1>
                                {skills?.tools?.map(tool => (
                                    <div key={tool} className={skillTab}>{tool}</div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default AboutMe;

