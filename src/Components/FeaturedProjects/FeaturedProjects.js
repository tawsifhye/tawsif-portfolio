import React, { useEffect, useState, useRef } from 'react';
import Slider from 'react-slick/lib/slider';
import SingleProject from '../SingleProject/SingleProject';
import { FaArrowRight } from "react-icons/fa";
import { FaArrowLeft } from "react-icons/fa";
import '../ComponentGlobal.css'
const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
};


const FeaturedProjects = () => {
    const [projects, setProjects] = useState([]);
    const sliderRef = useRef(null);
    console.log(sliderRef);
    useEffect(() => {
        fetch('allprojects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <>
            <div id="projects" className=" container mt-28 mb-16">
                <h1 className=" text-5xl text-center text-green-800 font-bold">Featured Projects</h1>
                <div className='flex justify-end mt-3'>
                    <span className='nextPrev' onClick={() => sliderRef?.current?.slickPrev()}><FaArrowLeft /></span>

                    <span className='nextPrev' onClick={() => sliderRef?.current?.slickNext()}><FaArrowRight /></span>
                </div>
                <div className="container mt-10">

                    <Slider {...settings} ref={sliderRef}>

                        {
                            projects.map(project => <SingleProject key={project.id} project={project}></SingleProject>)
                        }
                    </Slider>

                </div>
            </div>
        </>
    );
};

export default FeaturedProjects;