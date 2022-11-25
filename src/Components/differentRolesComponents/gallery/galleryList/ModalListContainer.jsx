import React from 'react'
import { useSelector } from 'react-redux'
import { ModalContainer } from './ModalContainer'

export const ModalListContainer = () => {
    const {Gallery} = useSelector(state => state.ga)
    return (
        <>
            {
                (Gallery)
                    &&
                    Gallery.map((gallery, index) => {
                        return (
                            <ModalContainer key = {gallery._id + index} {...gallery} />
                        )
                    })
            }
        </>
    )
}
