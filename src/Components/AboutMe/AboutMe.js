import React, { useEffect } from 'react';
import bannar_image2 from "../../images/banner-image2.jpg"
const AboutMe = () => {
    useEffect(() => {
    }, [])

    return (
        <>
            <div id="about" className="mt-28">

                <h1 className=" text-5xl text-center text-green-800 font-bold">About Me</h1>

                <div className="container grid mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 mx-auto">
                    <div data-aos="fade-right" className="flex sm:mt-10 flex-col justify-center ">
                        <img className="mx-auto w-3/5 rounded-full ring-8 inline-block" src={bannar_image2} alt="" />
                    </div>
                    <div data-aos="fade-left" className="p-5 flex flex-col align-middle justify-items-center">
                        <p className="font-black mb-5 text-justify">I'm a React Developer with hands-on experience. I am passionate to build any kind of web development solution. I am an aspiring web developer, learning every aspect of web development. I am a quick learner, a team performer, and can stick to something until I achieve positive results.</p>
                        <div data-aos="zoom-in" id="skills">
                            <h1 className="text-3xl font-bold border-l-4 p-1 border-blue-500">Skills</h1>

                            <div id="comfortable-skills" className="mt-3">
                                <h1 className="text-xl font-bold">Comfortable</h1>
                                <div className="bg-blue-300 font-black inline-block mr-3 mt-3 py-2 px-2 ring-2 ring-indigo-800 rounded-lg ">JavaScript/ES6</div>
                                <div className="bg-blue-300 font-black inline-block mr-3 mt-3 py-2 px-2 ring-2 ring-indigo-800 rounded-lg ">React.js</div>
                                <div className="bg-blue-300 font-black inline-block mr-3 mt-3 py-2 px-2 ring-2 ring-indigo-800 rounded-lg ">Material UI</div>
                                <div className="bg-blue-300 font-black inline-block mr-3 mt-3 py-2 px-2 ring-2 ring-indigo-800 rounded-lg ">REST API</div>
                                <div className="bg-blue-300 font-black inline-block mr-3 mt-3 py-2 px-2 ring-2 ring-indigo-800 rounded-lg ">JSON</div>
                                <div className="bg-blue-300 font-black inline-block mr-3 mt-3 py-2 px-2 ring-2 ring-indigo-800 rounded-lg ">DOM</div>
                                <div className="bg-blue-300 font-black inline-block mr-3 mt-3 py-2 px-2 ring-2 ring-indigo-800 rounded-lg ">SASS</div>
                                <div className="bg-blue-300 font-black inline-block mr-3 mt-3 py-2 px-2 ring-2 ring-indigo-800 rounded-lg ">Bootstrap</div>
                                <div className="bg-blue-300 font-black inline-block mr-3 mt-3 py-2 px-2 ring-2 ring-indigo-800 rounded-lg">Tailwind</div>
                                <div className="bg-blue-300 font-black inline-block mr-3 mt-3 py-2 px-2 ring-2 ring-indigo-800 rounded-lg ">HTML/CSS</div>
                            </div>

                            <div id="familiar-skills" className="mt-3">
                                <h1 className="text-xl font-bold">Familiar</h1>
                                <div className="bg-blue-300 font-black inline-block mr-3 mt-3 py-2 px-2 ring-2 ring-indigo-800 rounded-lg ">MongoDB</div>
                                <div className="bg-blue-300 font-black inline-block mr-3 mt-3 py-2 px-2 ring-2 ring-indigo-800 rounded-lg ">Node.js/Express.js</div>
                                <div className="bg-blue-300 font-black inline-block mr-3 mt-3 py-2 px-2 ring-2 ring-indigo-800 rounded-lg ">Redux</div>
                                <div className="bg-blue-300 font-black inline-block mr-3 mt-3 py-2 px-2 ring-2 ring-indigo-800 rounded-lg ">PHP</div>
                                <div className="bg-blue-300 font-black inline-block mr-3 mt-3 py-2 px-2 ring-2 ring-indigo-800 rounded-lg ">WordPress</div>
                            </div>
                            <div id="tools" className="mt-3">
                                <h1 className="text-xl font-bold">Tools</h1>
                                <div className="bg-blue-300 font-black inline-block mr-3 mt-3 py-2 px-2 ring-2 ring-indigo-800 rounded-lg ">Git</div>
                                <div className="bg-blue-300 font-black inline-block mr-3 mt-3 py-2 px-2 ring-2 ring-indigo-800 rounded-lg ">VS Code</div>
                                <div className="bg-blue-300 font-black inline-block mr-3 mt-3 py-2 px-2 ring-2 ring-indigo-800 rounded-lg ">Chrome Dev tool</div>
                                <div className="bg-blue-300 font-black inline-block mr-3 mt-3 py-2 px-2 ring-2 ring-indigo-800 rounded-lg ">Firebase</div>
                                <div className="bg-blue-300 font-black inline-block mr-3 mt-3 py-2 px-2 ring-2 ring-indigo-800 rounded-lg ">Netlify</div>
                                <div className="bg-blue-300 font-black inline-block mr-3 mt-3 py-2 px-2 ring-2 ring-indigo-800 rounded-lg ">Heroku</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default AboutMe;

