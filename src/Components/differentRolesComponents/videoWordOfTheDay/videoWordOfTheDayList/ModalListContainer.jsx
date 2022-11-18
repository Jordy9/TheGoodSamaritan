import React from 'react'
import { useSelector } from 'react-redux'
import { ModalContainer } from './ModalContainer'

export const ModalListContainer = ({title}) => {
    const {videos} = useSelector(state => state.vwd)
    return (
        <>
            {
                (videos)
                    &&
                    videos.filter(videos => (title === '') ? videos : (videos.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,""))) && videos
                    ).map(videos => {
                        return (
                            <ModalContainer key = {videos._id} {...videos} />
                        )
                    })
            }
        </>
    )
}
