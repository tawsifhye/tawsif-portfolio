import React from 'react';





const SingleProject = ({ project }) => {
    const { id, title, details, technologies, website, githubClient, githubServer, features } = project;
    const technologyTab = 'bg-blue-400 inline-block mr-3 mt-3 py-2 px-2 ring-2 ring-indigo-800 rounded-lg'
    return (
        <>
            <div className="rounded-lg bg-gray-500 w-md-75 w-md-100 h-80 overflow-y-scroll p-3 mx-auto">
                <div className="w-full px-3">
                    <div className="w-full text-white">

                        <div className="text-2xl ">{id}. {title}</div>
                        <div className="text-normal">
                            <p className="border-b border-dashed border-gray-500 pb-1">
                                {details}
                            </p>
                            <div className="mt-1 py-2">
                                <h4 >Technology Used:</h4>
                                {
                                    technologies.map(technology => (<p className={technologyTab} key={technology}>{technology}</p>))

                                }
                                <ul>
                                    {features.map(feature => <li key={feature} className="px-3"> <span className="px-1">➼</span>{feature}</li>)}
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

        </>
    );
};

export default SingleProject;