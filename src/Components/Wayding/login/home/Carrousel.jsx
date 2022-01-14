import React from 'react'
import { Carousel } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import './home.css'


export const Carrousel = () => {

    const {Mains} = useSelector(state => state.ma)
    return (
        <div className='mb-5'>
            <Carousel fade = {true} touch = {true}>
                {
                    Mains?.map(main => {
                        return (
                        <Carousel.Item key = {main._id}>
                            <img
                                style={{height: '700px'}}
                                className="d-block w-100 img-fluid"
                                src = {main.image}
                                alt="First slide"
                                />
                            <Carousel.Caption>
                                <h3 className = 'overlay'>{main.title}</h3>
                                <p className = 'overlay'>{main.descripcion}</p>
                            </Carousel.Caption>
                        </Carousel.Item>
                        )
                    })
                }
            </Carousel>
        </div>
    )
}
