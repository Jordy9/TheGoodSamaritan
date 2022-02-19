import React from 'react'
import { Carousel } from 'react-bootstrap'
import {useSelector} from 'react-redux'
import moment from 'moment'
import ReactPlayer from 'react-player'

export const CarrouselEvents = () => {

    const {Eventos} = useSelector(state => state.ev)
    return (
        <>
        <h1>Eventos</h1>
        <div className = 'shadow d-flex justify-content-center align-items-center p-4 bg-dark rounded-lg flex-column'>
            <Carousel fade = {true} touch = {true}>
                {
                    Eventos?.map(evento => {
                        return (
                            <Carousel.Item key = {evento.id}>
                                {
                                    (evento.image.includes('video'))
                                        ?
                                    <ReactPlayer style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} width = '100%' height = '100%' url={evento.image} playing loop />
                                        :
                                    <img
                                        style={{height: '650px', width: '100vw'}}
                                        className="rounded"
                                        src = {evento.image}
                                        alt="First slide"
                                    />
                                }
                                <Carousel.Caption>
                                    <h3 className = 'overlay'>{evento?.title}</h3>
                                    <p className = 'overlay'>{(evento.date) ? moment(evento?.date).format('MMMM Do YYYY, h:mm a') : ''}</p>
                                </Carousel.Caption>
                            </Carousel.Item>
                        )
                    })
                }
            </Carousel>
            </div>
        </>
    )
}
