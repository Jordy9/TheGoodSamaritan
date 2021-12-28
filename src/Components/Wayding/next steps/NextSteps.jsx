import React from 'react'
import imagen7 from '../../../heroes/imagen7.jpg'
import Domingo from '../../../heroes/Domingo.jpeg'
import { NavLink } from 'react-router-dom'

export const NextSteps = () => {
    return (
        <>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <img src={imagen7} style = {{width: '100%', height: '400px'}} className = 'rounded' alt = 'imagen' />
                </div>
            </div>

            <div className="container">
            <div className = 'shadow d-flex justify-content-center align-items-center p-4 my-4 bg-dark rounded-lg flex-column'>
                <div className="row">

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 form-group">
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={Domingo} className="d-block w-100 rounded" alt="..." />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center align-items-center p-4 my-2 bg-dark rounded-lg flex-column">
                        <label className = ''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam suscipit obcaecati cupiditate soluta vitae, a expedita tempore esse quas temporibus iure unde aspernatur minus porro fugiat, deserunt voluptates ducimus qui?</label>
                        <NavLink  to = '/AboutUs' style = {{textDecoration: 'none', borderRadius: '100px'}} className = 'btn btn-outline-primary form-control'>Unete</NavLink>
                    </div>
                </div>
            </div>

            <div className = 'shadow d-flex justify-content-center align-items-center p-4 my-5 bg-dark rounded-lg flex-column'>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center align-items-center p-4 my-2 bg-dark rounded-lg flex-column">
                        <label className = ''>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam suscipit obcaecati cupiditate soluta vitae, a expedita tempore esse quas temporibus iure unde aspernatur minus porro fugiat, deserunt voluptates ducimus qui?</label>
                        <NavLink  to = '/AboutUs' style = {{textDecoration: 'none', borderRadius: '100px'}} className = 'btn btn-outline-primary form-control'>Unete</NavLink>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 form-group">
                        <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src={Domingo} className="d-block w-100 rounded" alt="..." />
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
        </>
    )
}
