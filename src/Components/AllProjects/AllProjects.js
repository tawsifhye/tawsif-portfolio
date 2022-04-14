/* import React, { Suspense, useEffect, useState } from 'react';
import '../ComponentGlobal.css'
import SingleProject from '../SingleProject/SingleProject';
const AllProjects = () => {
    const [projects, setProjects] = useState([]);
    useEffect(() => {
        document.title = "Tawsif Dot Dev | Projects"
        fetch('allprojects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <>
            <h1 className="mt-2 text-5xl text-center text-green-800 font-bold">Projects</h1>
            <Suspense fallback={<div className="d-flex justify-content-center mt-5">
                <div className="spinner-grow text-info" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>}>
                <div className="container mt-10 mb-16">
                    {
                        projects.map(project => <SingleProject key={project.id} project={project}></SingleProject>)
                    }

                </div>
            </Suspense>




        </>
    );
};

export default AllProjects; */