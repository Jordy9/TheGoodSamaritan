import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Domingos from '../../../heroes/Domingo.jpeg'

export const PrayLives = () => {

    const [JoinMeeting, setJoinMeeting] = useState(false)

    const {Zoom} = useSelector(state => state.zm)

    const zoom = Zoom[0]

    return (

      <div className="container my-5">
            <div className = 'shadow d-flex justify-content-center align-items-center p-4 my-2 bg-dark rounded-lg flex-column'>
                <button className = 'btn btn-outline-primary my-4' onClick = {() => setJoinMeeting(true)}>Unirme al zoom</button>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 form-group d-flex justify-content-center align-items-center">
                        <h1>{zoom?.title}</h1>
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
