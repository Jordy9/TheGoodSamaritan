import React from 'react'
import { Carousel } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import './home.css'


export const Carrousel = () => {

    const {Mains} = useSelector(state => state.ma)

    const filterMain = () => {
        const allMain = [ ...Mains ]

        return allMain.slice(0, 10)
    }

    return (
        <div className='mb-5'>
            <Carousel fade = {true} touch = {true} className = 'shadowImage image-round'>
                {
                    (Mains)
                        &&
                    filterMain()?.map(main => {
                        return (
                        <Carousel.Item key = {main._id}>
                            <img
                                style={{objectFit: 'cover', height: '100%', width: '100%'}}
                                className="img-fluid image-round"
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
