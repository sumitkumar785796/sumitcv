import React, { useCallback, useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink, useParams } from 'react-router-dom'
const SpecificProjectView = () => {
    const { id } = useParams("");
    const [view, setView] = useState({});
    const getData = useCallback(async () => {
        try {
            const res = await axios.get(`/project/${id}`);
            const userData = res.data.view;
            setView(userData);
        } catch (error) {
            console.log(error);
        }
    }, [id]);
    useEffect(() => {
        if (id) {
            getData();
        }
    }, [getData, id]);
    return (
        <>
            {/* start section education */}
            <h2 className='text-center text-white' style={{ background: 'black' }}>View Project</h2>
            <div id="education">
                <div className="container">
                    <NavLink to='/' className='btn btn-danger'>Back Home</NavLink>
                    <h1>{view.projectname} <NavLink to={view.url} className='btn btn-success' target='_blank'>view project</NavLink></h1>
                    <img src={view.image} alt={view._id} style={{ width: '100%', height: '1000px' }} />
                    <h3 style={{ background: 'black', color:'white'}}>{view.desc}</h3>
                </div>
            </div>
            {/* end section education */}
        </>
    )
}

export default SpecificProjectView