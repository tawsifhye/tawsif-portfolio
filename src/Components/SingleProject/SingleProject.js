import React from 'react';
import Slider from 'react-slick';
import '../ComponentGlobal.css'
const SingleProject = ({ project }) => {
    const { id, title, details, technologies, previews, website, github } = project;
    console.log(project.previews);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <>
            <div className="flex flex-row flex-wrap p-3">
                <div className="mx-auto w-full">
                    <div className="rounded-lg shadow-lg bg-gray-600 w-full flex flex-row flex-wrap p-3 antialiased">

                        <div class="w-full px-3 flex flex-row flex-wrap">
                            <div class="w-full text-gray-700 font-semibold pt-3 md:pt-0">
                                <div class="text-2xl text-white leading-tight">{id}. {title}</div>
                                <div>
                                    <Slider {...settings} className="slider ">

                                        {
                                            previews.map(preview => <div ke={id}>
                                                <img className="" src={preview} alt="" />
                                            </div>)
                                        }

                                    </Slider>
                                </div>
                                <div class="text-normal text-gray-300">
                                    <p class="border-b border-dashed border-gray-500 pb-1">
                                        {details}
                                    </p>
                                    <div className="mt-1 py-2">
                                        <h4 >Technology Used:</h4>
                                        <p>{technologies}</p>
                                    </div>
                                </div>
                                <a className="mr-2 " href={github} rel="noreferrer" target="_blank">
                                    <button class="mt-2 bg-blue-400 p-3 px-4 rounded-lg font-bold hover:bg-green-200">
                                        GitHub
                                    </button>
                                </a>
                                <a href={website} rel="noreferrer" target="_blank">
                                    <button class="mt-2 bg-blue-400 p-3 px-4 rounded-lg font-bold hover:bg-green-200">
                                        Website
                                    </button>
                                </a>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleProject;