import React from 'react'
import { Carousel } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import moment from 'moment'
import ReactPlayer from 'react-player'

export const Events = () => {
    const {Eventos} = useSelector(state => state.ev)
    return (
        <div className = 'container'>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4 d-flex justify-content-center align-items-center">
                    <h1>Dios esta haciendo su obra en cada evento hecho</h1>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8 col-xl-8">
                    <div className = 'shadow d-flex justify-content-center align-items-center p-4 bg-dark rounded-lg flex-column'>
                        <Carousel fade = {true} controls = {false}>
                            {
                                Eventos?.map(evento => {
                                    return (
                                            <Carousel.Item key = {evento.id}>
                                                {
                                                    (evento.image.includes('video'))
                                                        ?
                                                        <ReactPlayer style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} width = '155.5%' height = '100%' url={evento.image} playing loop />
                                                        :
                                                    <img
                                                        style={{height: '698px', width: '810px'}}
                                                        // className="d-block w-100"
                                                        src={evento.image}
                                                        alt="First slide"
                                                    />
                                                }
                                                <Carousel.Caption>
                                                    <h3>{evento.title}</h3>
                                                    <p>{(evento.date) ? moment(evento?.date).format('MMMM Do YYYY, h:mm a') : ''}</p>
                                                </Carousel.Caption>
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
