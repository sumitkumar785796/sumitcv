import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Profile = () => {
  const [view, setView] = useState([])
  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await axios.get('/link')
        setView(resp.data.view)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  return (
    <>
      {/* start section header */}
      <div id="header" className="home">
        <div className="container">
          <div className="header-content">
            <h1>I'm <span className="typed" /></h1>
            <p>MERN Stack Enthusiast </p>
            <p>Specializing in Modern Web Development Technologies</p>
            <ul className="list-unstyled list-social">
              {
                view.map((element, index) => (
                  <li key={index}><a href={element.link} target='_blank'><i className={`ion-social-${element.iconName}`} /></a></li>
                ))
              }
            </ul>
          </div>
        </div>
      </div>
      {/* End section header */}
    </>
  )
}

export default Profile