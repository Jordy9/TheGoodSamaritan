import React from 'react'
import { useSelector } from 'react-redux'
import { ModalContainer } from './ModalContainer'

export const ModalListContainer = ({title}) => {
    const {Bosquejos} = useSelector(state => state.skt)
    return (
        <>
            {
                (Bosquejos)
                    &&
                    Bosquejos.filter(Bosquejos => (title === '') ? Bosquejos : (Bosquejos.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,""))) && Bosquejos).map(Bosquejo => {
                        return (
                            <ModalContainer key = {Bosquejo._id} {...Bosquejo} />
                        )
                    })
            }
        </>
    )
}
