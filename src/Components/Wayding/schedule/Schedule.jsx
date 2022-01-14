import React from 'react'
import Miercoles from '../../../heroes/Horarios.jpg'

export const Schedule = () => {
    return (
        <div className="container my-5">
            <div className = 'shadow d-flex justify-content-center align-items-center p-4 my-5 bg-dark rounded-lg flex-column'>
                <div className="row">

                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 form-group">
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={Miercoles} className="d-block w-100 rounded" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
