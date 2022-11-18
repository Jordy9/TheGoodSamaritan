import React from 'react'
import { useSelector } from 'react-redux'
import { ModalContainer } from './ModalContainer'

export const ModalListContainer = ({title}) => {
    const {Youtube} = useSelector(state => state.yt)
    return (
        <>
            {
                (Youtube)
                    &&
                    Youtube.filter(Youtube => (title === '') ? Youtube : (Youtube.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,""))) && Youtube
                    ).map(youtube => {
                        return (
                            <ModalContainer key = {youtube._id} {...youtube} />
                        )
                    })
            }
        </>
    )
}
