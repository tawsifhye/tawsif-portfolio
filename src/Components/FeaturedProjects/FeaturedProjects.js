import React, { useEffect, useState } from 'react';
import { Fade } from 'react-reveal';
import SingleProject from '../SingleProject/SingleProject';

const FeaturedProjects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('allprojects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <>
            <div id="projects" className="mt-28 mb-16">
                <Fade right>
                    <h1 className=" text-5xl text-center text-green-800 font-bold">Featured Projects</h1>
                </Fade>
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