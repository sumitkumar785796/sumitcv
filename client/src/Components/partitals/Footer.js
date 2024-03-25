import React, { useEffect, useState } from 'react'
import axios from 'axios'
const Footer = () => {
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
            {/* start section footer */}
            <div id="footer" className="text-center">
                <div className="container">
                    <div className="socials-media text-center">
                    <ul className="list-unstyled list-social">
                    {
                      view.map((element, index) => (
                        <li key={index}><a href={element.link} target='_blank'><i className={`ion-social-${element.iconName}`} /></a></li>
                      ))
                    }
                  </ul>
                    </div>
                    <p>© Copyrights Sumit Kumar. All rights reserved.</p>
                    <div className="credits">
                        Designed by Sumit
                    </div>
                </div>
            </div>
            {/* End section footer */}
        </>
    )
}

export default Footer