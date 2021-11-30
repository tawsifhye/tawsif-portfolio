import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import '../ComponentGlobal.css'
const Navbar = () => {
    return (
        <>
            <nav class="navbar navbar-expand-lg navbar-light">
                <div class="container-fluid">
                    <a class="navbar-brand" href="#">Tawsif.Dev</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <Link class="nav-link" to="/home">Home</Link>
                            </li>
                            <li class="nav-item">
                                <HashLink class="nav-link" to="/home#about">About Me</HashLink>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/projects">Projects</Link>
                            </li>
                            <li class="nav-item">
                                <Link class="nav-link" to="/blogs">Blogs</Link>
                            </li>

                            <li class="nav-item">
                                <a href="https://drive.google.com/open?id=1tzS5Nl_Jd-xyoQveGLvuamb1z__XQnlE&authuser=tawsifulhye%40gmail.com&usp=drive_fs" target="_blank" rel="noreferrer">
                                    <button type="button" class="btn btn-success">
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