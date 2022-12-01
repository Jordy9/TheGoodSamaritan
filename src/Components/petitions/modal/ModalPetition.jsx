import React from 'react'
import { useSelector } from 'react-redux'
import parse from 'html-react-parser'
import moment from 'moment'
import perfil1 from '../../../heroes/User.png'

export const ModalPetition = () => {
    const {activePetitions} = useSelector(state => state.pt)

    const {users} = useSelector(state => state.auth)

    const petitionsCountUsers = users?.filter(user => (activePetitions?.name !== 'Anónimo') && user.id === activePetitions?.id)

    return (

        <div className="modal fade" id="exampleModal7" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-md modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content shadow bg-dark">
                    <div className="modal-header" style = {{border: 'none'}}>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <span className='text-right mr-4'>{moment(activePetitions?.createdAt).format('MMMM Do YYYY, h:mm a')}</span>

                    <div className='d-flex flex-row align-items-center'>
                        <img src={(petitionsCountUsers[0]?.urlImage) ? petitionsCountUsers[0]?.urlImage : perfil1} style = {{objectFit: 'cover', width: '100px', height: '100px', borderRadius: '50%'}} className='img-fluid image-round imgag shadowImage mx-2' alt=''/>
                        <h4 className='text-center'>{activePetitions?.user?.name}</h4>
                    </div>

                    <h1 className='text-center'>{activePetitions?.title}</h1>

                    <div className="modal-body">
                        {
                            (activePetitions?.showDesc)
                                &&
                            <div className = 'shadow p-4 my-2 bg-dark image-round flex-column'>
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
                        }
                    </div>
                </div>
            </div>
        </div> 
    )
}
