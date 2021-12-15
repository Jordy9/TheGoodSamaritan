import React from 'react'
import { useSelector } from 'react-redux'
import parse from 'html-react-parser'

export const ModalMiniSerie = () => {
    const {activeSerie} = useSelector(state => state.mi)

    return (

        <div className="modal fade" id="exampleModal3" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content shadow bg-dark">
                    <div className="modal-header" style = {{border: 'none'}}>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <h1 className='d-flex justify-content-center'>{activeSerie.title}</h1>

                    <div className="modal-body">
                        <div className = 'shadow d-flex justify-content-center align-items-center p-4 my-2 bg-dark rounded-lg flex-column'>
                            <div className="row">
                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                                    {
                                        (activeSerie)
                                            &&
                                            parse(activeSerie.descripcion)
                                    }
                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 form-group">
                                    <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
                                        <div className="carousel-inner">
                                            <div className="carousel-item active">
                                                <img src={activeSerie.image} className="d-block w-100 rounded" alt="..." />
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
