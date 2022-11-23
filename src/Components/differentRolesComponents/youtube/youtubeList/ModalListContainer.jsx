import React from 'react'
import { useSelector } from 'react-redux'
import { ModalContainer } from './ModalContainer'

export const ModalListContainer = () => {
    const {Youtube} = useSelector(state => state.yt)
    return (
        <>
            {
                (Youtube)
                    &&
                    Youtube.map(youtube => {
                        return (
                            <ModalContainer key = {youtube._id} {...youtube} />
                        )
                    })
            }
        </>
    )
}
