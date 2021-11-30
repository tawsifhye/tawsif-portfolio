import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../ComponentGlobal.css'
const Navbar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/home">Tawsif.Dev</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarText">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" to="/home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <HashLink className="nav-link" to="/home#about">About Me</HashLink>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/projects">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/blogs">Blogs</Link>
                            </li>
                            <li className="mr-2 nav-item">
                                <Link className="nav-link" to="/contact">Contact Me</Link>
                            </li>

                            <li className="nav-item">
                                <a href="https://drive.google.com/open?id=1tzS5Nl_Jd-xyoQveGLvuamb1z__XQnlE&authuser=tawsifulhye%40gmail.com&usp=drive_fs" target="_blank" rel="noreferrer">
                                    <button type="button" className="btn btn-success">
                                        Resume</button>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;