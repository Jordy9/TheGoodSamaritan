import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import parse from 'html-react-parser'
import moment from 'moment'
import { useState } from 'react'
import { scrollToTopAnimated } from '../../../helper/ScrollToBottom'
import { Modal } from 'react-bootstrap'
import { setHide } from '../../../action/miniSerie'

export const ModalMiniSerie = () => {

  const dispatch = useDispatch()

    const {activeSerie, Show} = useSelector(state => state.mi)

    const [first, setfirst] = useState(0)

    const countArray = activeSerie?.descripcion?.length

    useEffect(() => {
      if (Show === true) {
        scrollToTopAnimated('descripcion-serie')
      }
    }, [first, Show])

    const next = () => {
      if (countArray - 1 !== first) {
        setfirst(first + 1)
      }
    }

    const prev = () => {
      if (first > 0) {
        setfirst(first - 1)
      }
    }

    const onHideModal = () => {
      dispatch(setHide())
      setfirst(0)
    }

    return (

      <>
          <Modal
            scrollable = {true}
            contentClassName='bg-dark'
            centered
            size="xl"
            show={Show}
            onHide={() => onHideModal()}
            aria-labelledby="example-modal-sizes-title-lg"
          >
            <Modal.Header id='modal-header-video' closeButton>
            </Modal.Header>
              <span className='text-right mr-4'>{moment(activeSerie?.createdAt).format('MMMM Do YYYY, h:mm a')}</span>
              <h1 className='text-center'>{activeSerie.title}</h1>
            <Modal.Body id='descripcion-serie'>                         
              <div className="modal-body">
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
            </Modal.Body>
          </Modal>
      </> 
    )
}
