import React from 'react'

const About = () => {
    return (
        <>

            {/* start section about us */}
            <div id="about" className="paddsection">
                <div className="container">
                    <div className="row justify-content-between">
                        <div className="col-lg-4 ">
                            <div className="div-img-bg">
                                <div className="about-img">
                                    <img src="images/me.jpg" className="img-responsive" alt="me" />
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="about-descr">
                                <p className="p-heading" style={{ textAlign: 'justify' }}>I am an enthusiastic MERN Stack Developer eager to secure a dynamic role where I can apply my expertise in web development.Possessing a robust foundation in MongoDB, Express.js, React, and Node.js, I am keen on contributing my skills to tackle challenging projects in the field.</p>
                                <p className="separator">SOFTWARE ENGINEER || WEB DEVELOPMENT </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* end section about us */}
        </>
    )
}

export default About