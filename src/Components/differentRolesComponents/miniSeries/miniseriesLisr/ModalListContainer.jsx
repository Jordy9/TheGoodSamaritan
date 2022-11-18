import React from 'react'
import { useSelector } from 'react-redux'
import { ModalContainer } from './ModalContainer'

export const ModalListContainer = ({title}) => {
    const {miniSeries} = useSelector(state => state.mi)
    return (
        <>
            {
                (miniSeries)
                    &&
                    miniSeries.filter(miniSeries => (title === '') ? miniSeries : (miniSeries.title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,"").includes(title.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g,""))) && miniSeries
                    ).map(series => {
                        return (
                            <ModalContainer key = {series._id} {...series} />
                        )
                    })
            }
        </>
    )
}
