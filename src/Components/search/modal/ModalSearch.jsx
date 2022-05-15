import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import parse from 'html-react-parser'
import moment from 'moment'
import { scrollToTopAnimated } from '../../../helper/ScrollToBottom'
import { setHide } from '../../../action/search'
import { Modal } from 'react-bootstrap'
import perfil1 from '../../../heroes/User.png'

export const ModalSearch = () => {

    const dispatch = useDispatch()

    const {activeSearch, Show} = useSelector(state => state.bd)

    const [first, setfirst] = useState(0)

    let countArray

    if (Array.isArray(activeSearch?.descripcion)) {
        countArray = activeSearch?.descripcion?.length
    }

    useEffect(() => {
        if (Show === true) {
            scrollToTopAnimated('description-Serie')
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

      const {usuarios} = useSelector(state => state.cht)

      const searchCount = usuarios?.filter(user => user.id === activeSearch?.user || user.id === activeSearch?.user?.id)

    return (

        <div className="modal fade" id="exampleModalSearch" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content shadow bg-dark">
                    <div className="modal-header" style = {{border: 'none'}}>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>

                    {/* <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-6 d-flex justify-content-start align-items-center">
                                    <img src={(searchCount[0]?.urlImage) ? searchCount[0]?.urlImage : perfil1} style = {{objectFit: 'cover', width: '50px', height: '50px', borderRadius: '50%'}} className='img-fluid image-round imgag shadowImage mx-2' alt=''/>
                                    <span className='text-center'>Pr. {searchCount[0]?.name} {searchCount[0]?.lastName}</span>
                                </div>
                        
                                <div className="col-6 d-flex justify-content-end align-items-center">
                                    <span id='dateMobile' className='text-right mr-4'>{moment(activeSearch?.createdAt).format('MMMM Do YYYY')}</span>
                                    <span id='dateDeskLap' className='text-right mr-4'>{moment(activeSearch?.createdAt).format('MMMM Do YYYY, h:mm a')}</span>
                                </div>
                            </div>
                            <h1 className='text-center'>{activeSearch?.title}</h1>
                        </div>
                    </div> */}
                    {/* <span className='text-right mr-4'>{moment(activeSearch?.createdAt).format('MMMM Do YYYY, h:mm a')}</span>
                    <h1 className='text-center'>{activeSearch?.title}</h1> */}

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
                            <div className="row">
                                <div className="col-12">
                                    <div className="row">
                                        <div className="col-6 d-flex justify-content-start align-items-center">
                                            <img src={(searchCount[0]?.urlImage) ? searchCount[0]?.urlImage : perfil1} style = {{objectFit: 'cover', width: '50px', height: '50px', borderRadius: '50%'}} className='img-fluid image-round imgag shadowImage mx-2' alt=''/>
                                            <span className='text-center'>Pr. {searchCount[0]?.name} {searchCount[0]?.lastName}</span>
                                        </div>
                                
                                        <div className="col-6 d-flex justify-content-end align-items-center">
                                            <span id='dateMobile' className='text-right mr-4'>{moment(activeSearch?.createdAt).format('MMMM Do YYYY')}</span>
                                            <span id='dateDeskLap' className='text-right mr-4'>{moment(activeSearch?.createdAt).format('MMMM Do YYYY, h:mm a')}</span>
                                        </div>
                                    </div>
                                    <h1 className='text-center mx-2'>{activeSearch?.title}</h1>
                                </div>
                            </div>

                        <Modal.Body id='description-Serie'>                         
                            <div className="modal-body">
                                <div className="row">
                                    {
                                        (Array.isArray(activeSearch?.descripcion))
                                            &&
                                        (first === 0)
                                            &&
                                        <img src={activeSearch?.image} style = {{objectFit: 'cover', height: '100%', width: '100%'}} className="image-round img-fluid" alt="..." />
                                    }
                                    <div className={(Array.isArray(activeSearch?.descripcion)) ? 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 my-3' : 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 my-3'}>
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
                                            <div className="carousel-item active">
                                                <img src={activeSearch.image} style = {{objectFit: 'cover', height: '100%', width: '100%'}} className="image-round img-fluid" alt="..." />
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
                        </Modal.Body>
                    </Modal>


                </div>
            </div>
        </div> 
    )
}
