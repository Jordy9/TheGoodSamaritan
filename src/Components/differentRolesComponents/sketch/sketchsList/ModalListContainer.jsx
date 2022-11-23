import React from 'react'
import { useSelector } from 'react-redux'
import { ModalContainer } from './ModalContainer'

export const ModalListContainer = () => {
    const {Bosquejos} = useSelector(state => state.skt)
    return (
        <>
            {
                (Bosquejos)
                    &&
                    Bosquejos.map(Bosquejo => {
                        return (
                            <ModalContainer key = {Bosquejo._id} {...Bosquejo} />
                        )
                    })
            }
        </>
    )
}
