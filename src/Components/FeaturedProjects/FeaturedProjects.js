import React, { useEffect, useState } from 'react';
import project_preview3 from "../../images/real-estate-preview1.png"
import SingleProject from '../SingleProject/SingleProject';

const FeaturedProjects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('featuredprojects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    return (
        <>
            <div id="about" className="mt-28">
                <h1 className=" text-5xl text-center text-green-800 font-bold">Featured Projects</h1>
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