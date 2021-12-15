import React from 'react'
import { Carousel } from 'react-bootstrap'
import {useSelector} from 'react-redux'
import parse from 'html-react-parser'


export const CarrouselEvents = () => {

    const {Eventos} = useSelector(state => state.ev)
    return (
        <>
        <h1>Eventos</h1>
            <Carousel fade = {true} touch = {true}>
                {
                    Eventos?.map(evento => {
                        return (
                            <Carousel.Item key = {evento.id}>
                                <img
                                    style={{height: '650px'}}
                                    className="d-block w-100 rounded"
                                    src = {evento.image}
                                    alt="First slide"
                                />
                                <Carousel.Caption>
                                    <h3 className = 'overlay'>{evento.title}</h3>
                                    <p className = 'overlay'>{parse(evento.descripcion)}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </>
    )
}
