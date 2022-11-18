import React from 'react'
import { useSelector } from 'react-redux'
import { ModalContainer } from './ModalContainer'

export const ModalListContainer = () => {
    const {Mains} = useSelector(state => state.ma)
    return (
        <>
            {
                (Mains)
                    &&
                    Mains.map(main => {
                        return (
                            <ModalContainer key = {main._id} {...main} />
                        )
                    })
            }
        </>
    )
}
