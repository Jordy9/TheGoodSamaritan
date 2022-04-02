import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import parse from 'html-react-parser'
import moment from 'moment'
import { scrollToTopAnimated } from '../../../helper/ScrollToBottom'

export const ModalSearch = () => {
    const {activeSearch} = useSelector(state => state.bd)

    const [first, setfirst] = useState(0)

    let countArray

    if (Array.isArray(activeSearch?.descripcion)) {
        countArray = activeSearch?.descripcion?.length
    }

    useEffect(() => {
      scrollToTopAnimated('description-Serie')
    }, [first])

    const next = () => {
      if (countArray - 1 !== first) {
        setfirst(first + 1)
      }
    }

    console.log(first)

    const prev = () => {
      if (first > 0) {
        setfirst(first - 1)
      }
    }

    return (

        <div className="modal fade" id="exampleModalSearch" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content shadow bg-dark">
                    <div className="modal-header" style = {{border: 'none'}}>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <span className='text-right mr-4'>{moment(activeSearch?.createdAt).format('MMMM Do YYYY, h:mm a')}</span>
                    <h1 className='text-center'>{activeSearch?.title}</h1>

                    <div id='description-Serie' className="modal-body">
                        <div className = 'shadow d-flex justify-content-center align-items-center p-4 my-2 bg-dark rounded-lg flex-column'>
                            <div className="row">
                                <div className={(Array.isArray(activeSearch?.descripcion)) ? 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'}>
                                    {
                                        (Array.isArray(activeSearch?.descripcion))
                                            ?
                                        <>
                                            {parse(activeSearch?.descripcion[first])}
                                            <div className="row">
                                                <div className="col-6 justify-content-start">
                                                    <button className='btn btn-outline-secondary' style={{borderRadius: '10px', color: 'white'}} hidden = {(first <= 0)} onClick = {prev}><i className="fa-solid fa-angle-left"></i> Anterior</button>
                                                </div>

                                                <div className="col-6 justify-content-end text-end">
                                                    <button className='btn btn-outline-secondary' style={{borderRadius: '10px', color: 'white'}} hidden = {(countArray - 1 === first)} onClick = {next}>Siguiente <i className="fa-solid fa-angle-right"></i></button>
                                                </div>
                                            </div>
                                        </>
                                            :
                                        (activeSearch)
                                            &&
                                        <div className="carousel-item active" style={{width: '100%', height: '350px'}}>
                                            <img src={activeSearch.image} style = {{height: '100%', width: '100%'}} className="d-block w-100 rounded img-fluid" alt="..." />
                                        </div>
                                    }
                                </div>

                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 mt-3">
                                    {
                                        (Array.isArray(activeSearch?.descripcion) === false)
                                            &&
                                        <>
                                            {
                                                (activeSearch)
                                                    &&
                                                parse(activeSearch?.descripcion)
                                            }
                                        </>
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
