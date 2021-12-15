import React from 'react'
import { Carousel } from 'react-bootstrap'
import Domingos from '../../../heroes/Domingo.jpeg'
import carousel1 from '../../../heroes/carrousel1.jpg'
import carousel2 from '../../../heroes/carrousel2.jpg'
import carousel3 from '../../../heroes/carrousel3.jpg'
import './Sketch.css'
import Slider from "react-slick";

export const Sketch = () => {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
    return (
        <div className="container my-5"> 
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

            <div className = 'row my-5'>
        <Slider {...settings}>
          <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
            <img src={Domingos} className="d-block w-100 rounded imgag" alt="..." />
          </div>
          <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
            <img src={carousel1} className="d-block w-100 rounded imgag" alt="..." />
          </div>
          <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
            <img src={carousel2} className="d-block w-100 rounded imgag" alt="..." />
          </div>
          <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
            <img src={carousel3} className="d-block w-100 rounded imgag" alt="..." />
          </div>
        </Slider>
      </div>

            {/* <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 form-group d-flex justify-content-center align-items-center">
                        <Carousel fade>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src = {carousel1}
                            alt="Sobre el amor de Dios"
                            />
                            <Carousel.Caption>
                            <h3>Sobre el amor de Dios</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src = {carousel2}
                            alt="Sobre el amor de Dios"
                            />

                            <Carousel.Caption>
                            <h3>Sobre el amor de Dios</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src = {carousel3}
                            alt="Sobre el amor de Dios"
                            />

                            <Carousel.Caption>
                            <h3>Sobre el amor de Dios</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        </Carousel>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 form-group d-flex justify-content-center align-items-center">
                        <Carousel fade>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src = {carousel1}
                            alt="La justicia de Dios"
                            />
                            <Carousel.Caption>
                            <h3>La justicia de Dios</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src = {carousel2}
                            alt="La justicia de Dios"
                            />

                            <Carousel.Caption>
                            <h3>La justicia de Dios</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src = {carousel3}
                            alt="La justicia de Dios"
                            />

                            <Carousel.Caption>
                            <h3>La justicia de Dios</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        </Carousel>
                    </div>
                    
                    <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4 form-group d-flex justify-content-center align-items-center">
                        <Carousel fade>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src = {carousel1}
                            alt="Dios con nosotros"
                            />
                            <Carousel.Caption>
                            <h3>Dios con nosotros</h3>
                            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src = {carousel2}
                            alt="Dios con nosotros"
                            />

                            <Carousel.Caption>
                            <h3>Dios con nosotros</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img
                            className="d-block w-100"
                            src = {carousel3}
                            alt="Dios con nosotros"
                            />

                            <Carousel.Caption>
                            <h3>Dios con nosotros</h3>
                            <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        </Carousel>
                    </div>
                </div> */}
            </div>

    )
}
