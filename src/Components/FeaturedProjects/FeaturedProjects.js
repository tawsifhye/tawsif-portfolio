import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css'
import SingleProject from '../SingleProject/SingleProject';

const FeaturedProjects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        Aos.init()
        fetch('allprojects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <>
            <div id="about" className="mt-28 mb-16">
                <h1 data-aos="zoom-out-down" className=" text-5xl text-center text-green-800 font-bold">Featured Projects</h1>
                <div className="container mt-10">
                    {
                        projects.map(project => <SingleProject key={project.id} project={project}></SingleProject>)
                    }

                </div>
            </div>
        </>
    );
};

export default FeaturedProjects;