import React from 'react'
import { useSelector } from 'react-redux'
import { ModalContainer } from './ModalContainer'

export const ModalListContainer = () => {
    const {Eventos} = useSelector(state => state.ev)
    return (
        <>
            {
                (Eventos)
                    &&
                    Eventos.map(Evento => {
                        return (
                            <ModalContainer key = {Evento._id} {...Evento} />
                        )
                    })
            }
        </>
    )
}
