import React from 'react'
import { useSelector } from 'react-redux'
import { ModalContainer } from './ModalContainer'

export const ModalListContainer = ({title}) => {
    const {Peticiones} = useSelector(state => state.pt)
    return (
        <>
            {
                (Peticiones)
                    &&
                    Peticiones.filter(Peticiones => (title === '') ? Peticiones : (Peticiones.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,""))) && Peticiones
                    ).map(Peticion => {
                        return (
                            <ModalContainer key = {Peticion._id} {...Peticion} />
                        )
                    })
            }
        </>
    )
}
