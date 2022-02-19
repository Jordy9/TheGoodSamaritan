import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'

export const ModalVideoWordOfTheDay = () => {
    const {activeVideo} = useSelector(state => state.vwd)

    return (

        <div className="modal fade" id="exampleModalVideoWordOfTheDay" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content shadow bg-dark">
                    <div className="modal-header" style = {{border: 'none'}}>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <h1 className='text-center'>{activeVideo?.title}</h1>

                    <div className="modal-body">
                        <div className = 'shadow d-flex justify-content-center align-items-center p-4 bg-dark rounded-lg flex-column'>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 form-group">
                                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <ReactPlayer width = '100%' height = '100%' controls playing loop url={activeVideo?.image} className="d-block w-100 rounded img-fluid" alt="..." />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>  
                    </div>
                </div>
            </div>
        </div> 
    )
}
