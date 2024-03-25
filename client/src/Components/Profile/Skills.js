import React, { useEffect, useState } from 'react'
import axios from 'axios'
import SkillsStore from '../Store/SkillsStore'
const Skills = () => {
    const [view, setView] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await axios.get('/skills')
                setView(resp.data.view)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
    return (
        <>
            <br />
            <br />
            {/* start section services */}
            <div id="services">
                <div className="container">
                    <h2 className='text-center'>SKILLS</h2>
                    <br />
                    <br />
                    <div className="row">
                        {
                            view?.map((element, index) => (
                                <SkillsStore
                                    image={element.image}
                                    skillname={element.skillname}
                                    desc={element.desc}
                                    key={index}
                                    index={index}
                                />
                            ))
                        }
                    </div>
                </div>
            </div>
            {/* end section services */}
        </>
    )
}

export default Skills