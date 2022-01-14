import React from 'react'
import imagen7 from '../../../../heroes/Zoom2.jpg'

export const ImageMain = () => {
    return (
        <>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <img src={imagen7} style = {{width: '100%', height: '100%'}} className = 'rounded' alt = 'imagen' />
                </div>
            </div>
        </>
    )
}
