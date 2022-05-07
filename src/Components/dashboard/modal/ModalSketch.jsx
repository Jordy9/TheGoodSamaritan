import React from 'react'
import { useSelector } from 'react-redux'
import parse from 'html-react-parser'
import moment from 'moment'
import perfil1 from '../../../heroes/User.png'

export const ModalSketch = () => {
    const {activeBosquejo} = useSelector(state => state.skt)

    const {usuarios} = useSelector(state => state.cht)

    const bosquejoCount = usuarios?.filter(user => user.id === activeBosquejo?.user?.id)

    console.log(bosquejoCount)

    return (

        <div className="modal fade" id="exampleModal2" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content shadow bg-dark">
                    <div className="modal-header" style = {{border: 'none'}}>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="row">
                                    <div className="col-6 d-flex justify-content-start align-items-center">
                                        <img src={(bosquejoCount[0]?.urlImage) ? bosquejoCount[0]?.urlImage : perfil1} style = {{objectFit: 'cover', width: '50px', height: '50px', borderRadius: '50%'}} className='img-fluid image-round imgag shadowImage mx-2' alt=''/>
                                        <span className='text-center'>Pr. {bosquejoCount[0]?.name} {bosquejoCount[0]?.lastName}</span>
                                    </div>
                            
                                    <div className="col-6 d-flex justify-content-end align-items-center">
                                        <span id='dateMobile' className='text-right mr-4'>{moment(activeBosquejo?.createdAt).format('MMMM Do YYYY')}</span>
                                        <span id='dateDeskLap' className='text-right mr-4'>{moment(activeBosquejo?.createdAt).format('MMMM Do YYYY, h:mm a')}</span>
                                    </div>
                                </div>
                            <h1 className='text-center'>{activeBosquejo?.title}</h1>
                            </div>
                        </div>

                    <div className="modal-body">
                        <div className = 'my-2 bg-dark image-round flex-column'>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 form-group">
                                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src={activeBosquejo.image} style = {{objectFit: 'cover', height: '100%', width: '100%'}} className="image-round img-fluid" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    {
                                        (activeBosquejo)
                                            &&
                                        parse(activeBosquejo.descripcion)
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
