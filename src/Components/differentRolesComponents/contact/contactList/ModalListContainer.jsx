import React from 'react'
import { useSelector } from 'react-redux'
import { ModalContainer } from './ModalContainer'

export const ModalListContainer = ({title}) => {
    const {Contactos} = useSelector(state => state.co)
    return (
        <>
            {
                (Contactos)
                    &&
                    Contactos.filter(Contactos => (title === '') ? Contactos : (Contactos.name.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,""))) && Contactos
                    ).map(Contacto => {
                        return (
                            <ModalContainer key = {Contacto._id} {...Contacto} />
                        )
                    })
            }
        </>
    )
}
