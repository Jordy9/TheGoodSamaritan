import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import parse from 'html-react-parser'
import moment from 'moment'
import { useState } from 'react'
import { scrollToTopAnimated } from '../../../helper/ScrollToBottom'

export const ModalMiniSerie = () => {
    const {activeSerie} = useSelector(state => state.mi)

    const [first, setfirst] = useState(0)

    const countArray = activeSerie?.descripcion?.length

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

        <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content shadow bg-dark">
                    <div className="modal-header" style = {{border: 'none'}}>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <span className='text-right mr-4'>{moment(activeSerie?.date).format('MMMM Do YYYY, h:mm a')}</span>
                    <h1 className='text-center'>{activeSerie.title}</h1>

                    <div id='description-Serie' className="modal-body">
                        <div className="row">
                            <div className="bg-dark shadow p-5 col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                              <div className="p-2">
                                  {
                                    (activeSerie)
                                      &&
                                      parse(activeSerie?.descripcion[first])
                                  }

                                  <div className="row">
                                    <div className="col-6 justify-content-start">
                                      <button className='btn btn-outline-secondary' style={{borderRadius: '10px', color: 'white'}} hidden = {(first <= 0)} onClick = {prev}><i className="fa-solid fa-angle-left"></i> Anterior</button>
                                    </div>

                                    <div className="col-6 justify-content-end text-end">
                                      <button className='btn btn-outline-secondary' style={{borderRadius: '10px', color: 'white'}} hidden = {(countArray - 1 === first)} onClick = {next}>Siguiente <i className="fa-solid fa-angle-right"></i></button>
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
