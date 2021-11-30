import React from 'react';
import project1_preview from "../../images/project1.png"
import project2_preview from "../../images/project2.png"
import project_preview3 from "../../images/real-estate-preview1.png"

const FeaturedProjects = () => {
    const projects = [
        {
            "id": "1",
            "title": "Real Estate",
            "previews": {
                "image1": "",
                "image2": "",
                "image3": "",
            },
            "details": "MERN Real Estate website, where users can book favorite house, cancel order, add reviews. Dashboard with admin pane, where user's & admin's routes are different.Admin can add new services, delete services, update status.",
            "technologies": "",
            "github": "https://github.com/tawsifhye/real-estate-client",
            "website": "https://real-estate-fcbd3.web.app/"
        },
        {
            "id": "",
            "title": "",
            "image": "",
            "details": "",
            "github": "",
            "website": ""
        },
    ]
    return (
        <>
            <div id="about" className="mt-28">
                <h1 className=" text-5xl text-center text-green-800 font-bold">Featured Projects</h1>
                <div className="container mt-10">
                    {/* *******************project1************** */}
                    <div className="flex flex-row flex-wrap p-3">
                        <div className="mx-auto w-4/5">
                            <div className="grid md:grid-cols-1 lg:grid-cols-2 rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased">
                                <div className="w-auto">
                                    <img className="rounded-lg shadow-lg antialiased" src={project_preview3} alt="" />
                                </div>
                                <div class="w-full px-3 flex flex-row flex-wrap">
                                    <div class="w-full text-gray-700 font-semibold relative pt-3 md:pt-0">
                                        <div class="text-2xl text-white leading-tight">Real Estate</div>
                                        <div class="text-normal text-gray-300 hover:text-gray-400">
                                            <p class="border-b border-dashed border-gray-500 pb-1">
                                                MERN Real Estate website, where users can book favorite house, cancel order, add reviews. Dashboard with admin pane, where user's & admin's routes are different.Admin can add new services, delete services, update status.
                                            </p>
                                        </div>
                                        <a className="mr-2 " href="https://github.com/tawsifhye/real-estate-client" rel="noreferrer" target="_blank">
                                            <button class="mt-2 bg-blue-400 p-3 px-4 rounded-lg font-bold hover:bg-green-200">
                                                GitHub
                                            </button>
                                        </a>
                                        <a href="https://real-estate-fcbd3.web.app/" rel="noreferrer" target="_blank">
                                            <button class="mt-2 bg-blue-400 p-3 px-4 rounded-lg font-bold hover:bg-green-200">
                                                Website
                                            </button>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* *******************project1************** */}


                </div>
            </div>
        </>
    );
};

export default FeaturedProjects;