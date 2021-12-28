import React from 'react'
// import RadioBonaoBend from '../../../heroes/RadioBonao.png'
import RadioBonaoBend from '../../../heroes/Radio.png'

export const RadioBonaoBlessing = () => {
    
    const RadioBonaoBendicion = 'http://178.33.166.7:7504/;stream.nsv'

    return (
        <div className='Container'>
            <div className="row">
                <div className="col d-flex justify-content-center align-items-center flex-column my-5">
                    <img src={RadioBonaoBend} className='img-fluid my-3' style={{borderRadius: '100%'}} alt="" />
                    <audio controls autoPlay src={RadioBonaoBendicion}></audio>
                </div>
            </div>
        </div>
    )
}
