import React from 'react'

const Education = () => {
    return (
        <>
            <br />
            <br />
            {/* start section education */}
            <div id="education">
                <div className="container">
                    <h2 className='text-center'>EDUCATION</h2>
                    <br />
                    <br />
                    <div className="row">
                        <div className="col-sm-6" >
                            <img src="gu.png" alt="gu" style={{ width: '150px', height: '150px' }} />
                            <h2>2022-2024</h2>
                            <h3>GALGOTIAS UNIVERSITY </h3>
                            <h4 style={{ color: 'black' }}>GREATER NOIDA U.P(203201)</h4>
                            <h2>MASTER OF COMPUTER APPLICATIONS(MCA)</h2>
                        </div>
                        <div className="col-sm-6">
                            <img src="sns.jpeg" alt="gu" style={{ width: '150px', height: '150px' }} />
                            <h2>2018-2021</h2>
                            <h3>S.N.SINHA COLLEGE</h3>
                            <h4 style={{ color: 'black' }}>JEHANABAD BIHAR(804408)</h4>
                            <h2> BACHELOR OF COMPUTER APPLICATIONS(BCA)</h2>
                        </div>
                    </div>
                </div>
            </div>
            {/* end section education */}
        </>
    )
}

export default Education