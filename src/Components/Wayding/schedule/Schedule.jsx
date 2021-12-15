import React from 'react'
import Domingos from '../../../heroes/Domingo.jpeg'
import Miercoles from '../../../heroes/Miercoles.jpeg'
import Jovenes from '../../../heroes/Jovenes.jpeg'

export const Schedule = () => {
    return (
        <div className="container my-5">
            <div className = 'shadow d-flex justify-content-center align-items-center p-4 my-5 bg-dark rounded-lg flex-column'>
                <div className="row">

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 form-group">
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={Miercoles} className="d-block w-100 rounded" alt="..." />
                                </div>
                                {/* <div className="carousel-item">
                                    <img src={imagen6} className="d-block w-100 rounded" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={imagen7} className="d-block w-100 rounded" alt="..." />
                                </div> */}
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 form-group d-flex justify-content-center align-items-center">
                        <label className = ''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam suscipit obcaecati cupiditate soluta vitae, a expedita tempore esse quas temporibus iure unde aspernatur minus porro fugiat, deserunt voluptates ducimus qui?</label>
                    </div>
                </div>
            </div>

            <div className = 'shadow d-flex justify-content-center align-items-center p-4 my-2 bg-dark rounded-lg flex-column'>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 form-group d-flex justify-content-center align-items-center">
                        <label className = ''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam suscipit obcaecati cupiditate soluta vitae, a expedita tempore esse quas temporibus iure unde aspernatur minus porro fugiat, deserunt voluptates ducimus qui?</label>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 form-group">
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={Domingos} className="d-block w-100 rounded" alt="..." />
                                </div>
                                {/* <div className="carousel-item">
                                    <img src={imagen6} className="d-block w-100 rounded" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={imagen7} className="d-block w-100 rounded" alt="..." />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className = 'shadow d-flex justify-content-center align-items-center p-4 my-5 bg-dark rounded-lg flex-column'>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 form-group d-flex justify-content-center align-items-center">
                        <label className = ''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam suscipit obcaecati cupiditate soluta vitae, a expedita tempore esse quas temporibus iure unde aspernatur minus porro fugiat, deserunt voluptates ducimus qui?</label>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 form-group">
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={Jovenes} className="d-block w-100 rounded" alt="..." />
                                </div>
                                {/* <div className="carousel-item">
                                    <img src={imagen6} className="d-block w-100 rounded" alt="..." />
                                </div>
                                <div className="carousel-item">
                                    <img src={imagen7} className="d-block w-100 rounded" alt="..." />
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
