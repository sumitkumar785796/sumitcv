import React from 'react'

const SkillsStore = ({ image, skillname, index, desc }) => {
    return (
        <>

            <div className="col-sm-6">
                <img src={image} alt={index} style={{ height: '40px', width: '40px' }} />
                <h3>{skillname}</h3>
                <p style={{ color: 'black', textAlign: 'justify' }}>
                    {desc}
                </p>
            </div>
        </>
    )
}

export default SkillsStore