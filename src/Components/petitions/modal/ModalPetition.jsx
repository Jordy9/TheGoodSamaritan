import React from 'react'
import { useSelector } from 'react-redux'
import parse from 'html-react-parser'
import moment from 'moment'

export const ModalPetition = () => {
    const {activePetitions} = useSelector(state => state.pt)

    return (

        <div className="modal fade" id="exampleModal7" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content shadow bg-dark">
                    <div className="modal-header" style = {{border: 'none'}}>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <span className='text-right mr-4'>{moment(activePetitions?.createdAt).format('MMMM Do YYYY, h:mm a')}</span>
                    <h1 className='text-center'>{activePetitions?.title}</h1>

                    <div className="modal-body">
                        <div className = 'shadow p-4 my-2 bg-dark rounded-lg flex-column'>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12" style={{fontSize: '25px'}}>
                                    {
                                        (activePetitions)
                                            &&
                                        parse(activePetitions?.descripcion)
                                    }
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div> 
    )
}
