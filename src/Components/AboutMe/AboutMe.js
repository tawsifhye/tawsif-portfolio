import React from 'react';
import bannar_image2 from "../../images/banner-image2.jpg"
const AboutMe = () => {

    const skillTab = 'bg-blue-300 font-black inline-block mr-3 mt-3 py-2 px-2 ring-2 ring-indigo-800 rounded-lg'
    return (
        <>
            <div id="about" className="mt-28">

                <h1 className=" text-5xl text-center text-green-800 font-bold">About Me</h1>

                <div className="container grid mt-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 mx-auto">
                    <div className="flex sm:mt-10 flex-col justify-center ">
                        <img className="mx-auto w-3/5 rounded-full ring-8 inline-block" src={bannar_image2} alt="" />
                    </div>
                    <div className="p-5 flex flex-col align-middle justify-items-center">
                        <p className="font-black mb-5 text-justify">I'm a web developer with hands-on experience in JavaScript. I am passionate to build any kind of web development solution. I am an aspiring web developer, learning every aspect of web development. I am a quick learner, a team performer, and can stick to something until I achieve positive results.</p>
                        <div className='mb-5'>
                            <h1 className="text-3xl font-bold border-l-4 p-1 border-blue-500 mb-3">Experience</h1>
                            <p className="text-2xl font-bold">Staff Asia</p>
                            <p className=" font-bold">Web Developer</p>
                            <p className=" font-bold">Internship</p>
                            <p className=" font-bold">January 2022 - Present</p>
                        </div>
                        <div id="skills">
                            <h1 className="text-3xl font-bold border-l-4 p-1 border-blue-500">Skills</h1>

                            <div id="comfortable-skills" className="mt-3">
                                <h1 className="text-xl font-bold">Comfortable</h1>
                                <div className={skillTab}>JavaScript/ES6</div>
                                <div className={skillTab}>React.js</div>
                                <div className={skillTab}>Material UI</div>
                                <div className={skillTab}>JSON</div>
                                <div className={skillTab}>DOM</div>
                                <div className={skillTab}>SASS</div>
                                <div className={skillTab}>Bootstrap</div>
                                <div className={skillTab}>Tailwind</div>
                                <div className={skillTab}>HTML/CSS</div>
                            </div>

                            <div id="familiar-skills" className="mt-3">
                                <h1 className="text-xl font-bold">Familiar</h1>
                                <div className={skillTab}>Next.js</div>
                                <div className={skillTab}>MongoDB</div>
                                <div className={skillTab}>Node.js/Express.js</div>
                                <div className={skillTab}>Redux</div>
                                <div className={skillTab}>PHP</div>
                                <div className={skillTab}>WordPress</div>
                            </div>
                            <div id="tools" className="mt-3">
                                <h1 className="text-xl font-bold">Tools</h1>
                                <div className={skillTab}>Git</div>
                                <div className={skillTab}>VS Code</div>
                                <div className={skillTab}>Chrome Dev tool</div>
                                <div className={skillTab}>Firebase</div>
                                <div className={skillTab}>Netlify</div>
                                <div className={skillTab}>Heroku</div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default AboutMe;

