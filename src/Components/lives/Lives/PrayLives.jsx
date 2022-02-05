import React, { useState } from 'react'
import { useSelector } from 'react-redux'

export const PrayLives = () => {

    const {Zoom} = useSelector(state => state.zm)

    const zoom = Zoom[0]
    
    const handledImage = () => {
        document.querySelector('#idZoom').click()
    }

    return (

      <div className="container my-5">
            <div className = 'shadow d-flex justify-content-center align-items-center p-4 my-2 bg-dark rounded-lg flex-column'>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 form-group d-flex justify-content-center align-items-center">
                        <div className="row">
                            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                <span style={{fontSize: '20px'}} className='d-flex justify-content-center'>{zoom?.date}</span>
                                <h1>{zoom?.title}</h1>
                                <button onClick={handledImage} className = 'btn btn-outline-primary my-4 form-control' style={{fontSize: '20px'}}>Unirme al zoom <i className="bi bi-camera-video"></i></button>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 form-group">
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={zoom?.image} className="d-block w-100 rounded" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
