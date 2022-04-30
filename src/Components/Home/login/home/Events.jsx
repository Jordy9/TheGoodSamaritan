import React from 'react'
import { Carousel } from 'react-bootstrap'
import { useSelector } from 'react-redux'

export const Events = () => {
    const {Eventos} = useSelector(state => state.ev)
    return (
        <div className = 'container'>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 d-flex justify-content-center align-items-center">
                    <h1 className='text-center'>Dios esta haciendo su obra en cada evento hecho</h1>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8 col-xl-8">
                    <div className = 'shadow d-flex justify-content-center align-items-center p-4 bg-dark image-round flex-column'>
                        <Carousel fade = {true} controls = {false} className = 'shadowImage image-round'>
                            {
                                Eventos?.map(evento => {
                                    return (
                                            <Carousel.Item key = {evento._id}>
                                                <img
                                                    style={{objectFit: 'cover', height: '100%', width: '100%'}}
                                                    className="image-round"
                                                    src={evento.image}
                                                    alt="First slide"
                                                />
                                            </Carousel.Item>
                                    )
                                })
                            }
                        </Carousel>
                    </div>
                </div>  
            </div>
        </div>
    )
}
