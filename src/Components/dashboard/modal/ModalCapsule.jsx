import React from 'react'
import { useSelector } from 'react-redux'
import parse from 'html-react-parser'
import moment from 'moment'

export const ModalCapsule = () => {
    const {activeCapsule} = useSelector(state => state.ca)

    return (

        <div className="modal fade" id="exampleModal9" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content shadow bg-dark">
                    <div className="modal-header" style = {{border: 'none'}}>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <span className='text-right mr-4'>{moment(activeCapsule?.createdAt).format('MMMM Do YYYY, h:mm a')}</span>
                    <h1 className='text-center'>{activeCapsule.title}</h1>

                    <div className="modal-body">
                        <div className = 'shadow d-flex justify-content-center align-items-center p-4 my-2 bg-dark image-round flex-column'>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 form-group">
                                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src={activeCapsule.image} style = {{objectFit: 'cover', height: '100%', width: '100%'}} className="image-round img-fluid" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    {
                                        (activeCapsule)
                                            &&
                                        parse(activeCapsule.descripcion)
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
