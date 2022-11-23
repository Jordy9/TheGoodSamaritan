import React from 'react'
import { Carousel } from 'react-bootstrap'
import {useSelector} from 'react-redux'

export const CarrouselEvents = () => {

    const {Eventos} = useSelector(state => state.ev)
    return (
        <>
        {
            (Eventos?.length > 0)
                &&
            <h1>Eventos</h1>
        }
        <Carousel fade = {true} touch = {true} className = 'text-center' style={{borderRadius: '40px'}}>
            {
                Eventos?.map(evento => {
                    return (
                        <Carousel.Item key = {evento._id}>
                            <img
                                style={{objectFit: 'contain', maxHeight: '96.81vh', maxWidth: '100%', height: 'auto', width: 'auto'}}
                                className="image-round img-fluid"
                                src = {evento.image}
                                alt="First slide"
                            />
                        </Carousel.Item>
                    )
                })
            }
        </Carousel>
        </>
    )
}
