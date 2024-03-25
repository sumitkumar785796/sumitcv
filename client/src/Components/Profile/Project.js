import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'
const Project = () => {
    const [view, setView] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await axios.get('/project')
                setView(resp.data.view)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
    
    return (
        <>
            {/* start section journal */}
            <div id="journal" className="text-left paddsection">
                <div className="container">
                    <div className="section-title text-center">
                        <h2>Project</h2>
                    </div>
                </div>
                <div className="container">
                    <div className="journal-block">
                        <div className="row">
                            {
                                view?.map((element, index) => (
                                    <div className="col-lg-4 col-md-6" key={index}>
                                        <div className="journal-info" >
                                            <NavLink to={`/view/${element._id}`}><img src={element.image} className="img-responsive" alt={index} style={{ width: '350px', height: '250px' }} />
                                                <div className="journal-txt">
                                                    <h4 style={{ color: 'red' }}>{element.projectname}</h4>
                                                </div>
                                            </NavLink>
                                        </div>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </div>
            {/* End section journal */}


        </>
    )
}

export default Project