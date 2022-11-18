import React from 'react'
import { useSelector } from 'react-redux'
import { ModalContainerUser } from './ModalContainer'

export const ModalListContainerUser = ({title}) => {
    const {PeticionesUser} = useSelector(state => state.pt)
    return (
        <>
            {
                (PeticionesUser)
                    &&
                    PeticionesUser.filter(PeticionesUser => (title === '') ? PeticionesUser : (PeticionesUser.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,""))) && PeticionesUser
                    ).map(Peticion => {
                        return (
                            <ModalContainerUser key = {Peticion._id} {...Peticion} />
                        )
                    })
            }
        </>
    )
}
