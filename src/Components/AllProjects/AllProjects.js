import React, { useEffect, useState } from 'react';
import '../ComponentGlobal.css'
import SingleProject from '../SingleProject/SingleProject';
const AllProjects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        fetch('allprojects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <>
            <h1 className="mt-10 text-5xl text-center text-green-800 font-bold">Projects</h1>
            <div className="container mt-10">
                {
                    projects.map(project => <SingleProject key={project.id} project={project}></SingleProject>)
                }

            </div>
        </>
    );
};

export default AllProjects;