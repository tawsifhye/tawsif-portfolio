import React from 'react';
import Slider from 'react-slick';
import '../ComponentGlobal.css'
const SingleProject = ({ project }) => {
    const { id, title, details, technologies, previews, website, githubClient, githubServer, features } = project;
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: true,
        autoplaySpeed: 5000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <div className="flex flex-row flex-wrap p-3">
                <div className="mx-auto w-full">
                    <div className="rounded-lg bg-gray-600 w-full p-3">
                        <div className="w-full px-3">
                            <div className="w-full text-gray-700 font-semibold">
                                <div className="text-2xl text-white">{id}. {title}</div>
                                <div>
                                    <Slider {...settings} className="slider ">

                                        {
                                            previews.map(preview => <div key={id}>
                                                <img className="" src={preview} alt="" />
                                            </div>)
                                        }

                                    </Slider>
                                </div>
                                <div className="text-normal text-gray-300">
                                    <p className="border-b border-dashed border-gray-500 pb-1">
                                        {details}
                                    </p>
                                    <div className="mt-1 py-2">
                                        <h4 >Technology Used:</h4>
                                        <p>{technologies}</p>
                                        <ul>
                                            {features.map(feature => <li key={id} className="px-2"> <span className="px-1">➼</span> {feature}</li>)}
                                        </ul>

                                    </div>
                                </div>
                                <a className="mr-2" href={website} rel="noreferrer" target="_blank">
                                    <button className="mt-2 bg-blue-400 p-3 px-2 rounded-lg font-bold hvr-sweep-to-right"> <i className="fas fa-link text-xl"></i>
                                        Website
                                    </button>
                                </a>
                                <a className="mr-2" href={githubClient} rel="noreferrer" target="_blank">
                                    <button className="mt-2 bg-blue-400 p-3 px-2 rounded-lg font-bold hvr-sweep-to-right"> <i className="fab fa-github text-xl"></i>
                                        Client Code
                                    </button>
                                </a>
                                {
                                    githubServer && <a className="mr-2" href={githubServer} rel="noreferrer" target="_blank">
                                        <button className="mt-2 bg-blue-400 p-3 px-2 rounded-lg font-bold hvr-sweep-to-right"> <i className="fab fa-github text-xl"></i>
                                            Server Code
                                        </button>
                                    </a>
                                }

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProject;