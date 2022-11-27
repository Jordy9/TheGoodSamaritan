import React from 'react'
import { useSelector } from 'react-redux'
import { ModalContainer } from './ModalContainer'

export const ModalListContainer = () => {
    const {Bosquejos} = useSelector(state => state.skt)
    return (
        <>
            {
                (Bosquejos?.length !== 0)
                    &&
                    Bosquejos.map((Bosquejo, index) => {
                        return (
                            <ModalContainer key = {Bosquejo?._id + index} {...Bosquejo} />
                        )
                    })
            }
        </>
    )
}
