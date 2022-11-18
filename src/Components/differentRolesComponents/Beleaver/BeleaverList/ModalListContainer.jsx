import React from 'react'
import { useSelector } from 'react-redux'
import { ModalContainer } from './ModalContainer'

export const ModalListContainer = () => {
    const {Beleaver} = useSelector(state => state.bl)
    return (
        <>
            {
                (Beleaver)
                    &&
                    Beleaver.map(Beleaver => {
                        return (
                            <ModalContainer key = {Beleaver._id} {...Beleaver} />
                        )
                    })
            }
        </>
    )
}
