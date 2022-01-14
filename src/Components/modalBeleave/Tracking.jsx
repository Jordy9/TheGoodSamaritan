import React from 'react'
import { useSelector } from 'react-redux'
import ModalBiliever from '../../heroes/ZM.png'

export const Tracking = () => {

    const {Zoom} = useSelector(state => state.zm)

    const zoom = Zoom[0]

    return (
        <>
            <h1 className='my-2 text-center'>Alimenta tu corazón con nuestro zoom de {zoom?.title} </h1>
            <img src={ModalBiliever} className='img-fluid' alt="" />
        </>
    )
}
