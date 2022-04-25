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
        <Carousel fade = {true} touch = {true} className = 'shadowImage' style={{borderRadius: '100px'}}>
            {
                Eventos?.map(evento => {
                    return (
                        <Carousel.Item key = {evento._id}>
                            <img
                                style={{height: '698px', width: '100%'}}
                                className="image-round img-fluid d-block w-100"
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
