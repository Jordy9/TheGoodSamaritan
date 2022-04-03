import React from 'react'
import { Carousel } from 'react-bootstrap'
import {useSelector} from 'react-redux'
import moment from 'moment'

export const CarrouselEvents = () => {

    const {Eventos} = useSelector(state => state.ev)
    return (
        <>
        <h1>Eventos</h1>
        <Carousel fade = {true} touch = {true}>
            {
                Eventos?.map(evento => {
                    return (
                        <Carousel.Item key = {evento._id}>
                            <img
                                style={{height: '698px', width: '100%'}}
                                className="rounded img-fluid d-block w-100"
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
