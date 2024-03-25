import React from 'react'

const NavBar = () => {
    return (
        <>
            {/* start section navbar */}
            <nav id="main-nav">
                <div className="row">
                    <div className="container">
                        <div className="logo">
                            <a href="index.html"><img src="logo.png" alt="logo" /></a>
                        </div>
                        <div className="responsive"><i data-icon="m" className="ion-navicon-round" /></div>
                        <ul className="nav-menu list-unstyled">
                            <li><a href="#header" className="smoothScroll">Home</a></li>
                            <li><a href="#about" className="smoothScroll">About</a></li>
                            <li><a href="#education" className="smoothScroll">Education</a></li>
                            <li><a href="#journal" className="smoothScroll">Project</a></li>
                            <li><a href="#contact" className="smoothScroll">Contact</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            {/* End section navbar */}
        </>
    )
}

export default NavBar