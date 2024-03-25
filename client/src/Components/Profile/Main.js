import React from 'react'
import About from './About'
import Skills from './Skills'
import Footer from '../partitals/Footer'
import NavBar from '../partitals/NavBar'
import Project from './Project'
import Profile from './Profile'
import Contact from './Contact'
import Education from './Education'

const Main = () => {
    return (
        <>
            <NavBar />
            <Profile />
            <About />
            <Skills />
            <Education/>
            <Project />
            <Contact/>
            <Footer />
        </>
    )
}

export default Main