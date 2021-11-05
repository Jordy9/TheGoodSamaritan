import React from 'react'
import { Carousel } from 'react-bootstrap'
import arrow from '../../../../heroes/dc-arrow.jpg'
import batman from '../../../../heroes/dc-batman.jpg'
import superman from '../../../../heroes/dc-superman.jpg'

export const Carrousel = () => {
    return (
        <>
            <Carousel fade>
                <Carousel.Item>
                    <img
                    style = {{maxHeight: '300px'}}
                    className="d-block w-100"
                    src = {arrow}
                    alt="First slide"
                    />
                    <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    style = {{maxHeight: '300px'}}
                    className="d-block w-100"
                    src = {batman}
                    alt="Second slide"
                    />

                    <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    style = {{maxHeight: '300px'}}
                    className="d-block w-100"
                    src = {superman}
                    alt="Third slide"
                    />

                    <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </>
    )
}
