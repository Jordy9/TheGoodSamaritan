import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import parse from 'html-react-parser'
import moment from 'moment'
import { scrollToTopAnimated } from '../../../helper/ScrollToBottom'
import { setHide } from '../../../action/search'
import { Modal, OverlayTrigger, Popover } from 'react-bootstrap'
import perfil1 from '../../../heroes/User.png'
import { useResponsive } from '../../../hooks/useResponsive'
import { MiniserieNormal } from '../../dashboard/componentsModal/MiniserieNormal'
import { MiniserieResponsive } from '../../dashboard/componentsModal/MiniserieResponsive'
import { SketchNormal } from '../../dashboard/componentsModal/SketchNormal'
import { SketchResponsive } from '../../dashboard/componentsModal/SketchResponsive'
import { useRef } from 'react'

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

      const {users} = useSelector(state => state.auth)

      const searchCount = users?.filter(user => user.id === activeSearch?.user || user.id === activeSearch?.user?.id)

      const [ respWidth ] = useResponsive()

      const [heightScroll, setHeightScroll] = useState(0)

      const [checkResolution, setCheckResolution] = useState('720p')

      useEffect(() => {
          if (currentT.current && activeSearch && !activeSearch?.descripcion)
          currentT.current.src = activeSearch?.image[0]
          return () => setCheckResolution('720p')
      }, [activeSearch])
      
      const [onTimeUpdate, setOnTimeUpdate] = useState(0)
  
      const changeQuality = (calidad, index) => {
          if (checkResolution === calidad) return
          setCheckResolution(calidad)
          currentT.current.src = activeSearch?.image[index]
      }
  
      const popover = (
          <Popover id="popover-basic">
            <Popover.Header style={{color: 'black'}} as="h3">Cambiar calidad</Popover.Header>
            <Popover.Body>
              {
                  ['720p', '480p', '360p'].map((calidad, index) => {
                      return (
                          <div onClick={() => changeQuality(calidad, index)} key={calidad} style = {{display: 'flex', justifyContent: 'space-between', cursor: 'pointer'}}>
                              <div>{calidad}</div>
                              {
                                  (checkResolution === calidad)
                                      &&
                                  <i className="bi bi-check-lg"></i>
                              }
                          </div>
                      )
                  })
              }
            </Popover.Body>
          </Popover>
        );
  
      const currentT = useRef()
  
      useEffect(() => {
          if (currentT.current && activeSearch && !activeSearch?.descripcion)
          currentT.current.currentTime = onTimeUpdate
      }, [checkResolution])
      
      useEffect(() => {
          if (currentT.current && activeSearch && !activeSearch?.descripcion)
  
          if (navigator && navigator.connection.effectiveType === '4g') {
              currentT.current.src = activeSearch?.image[0]
              setCheckResolution('720p')
          } else if (navigator && navigator.connection.effectiveType === '3g') {
              currentT.current.src = activeSearch?.image[1]
              setCheckResolution('480p')
          } else if(navigator && navigator.connection.effectiveType === '2g') {
              currentT.current.src = activeSearch?.image[2]
              setCheckResolution('360p')
          }
      }, [navigator.connection.effectiveType])
    
      const [onMouse, setOnMouse] = useState(false)

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
                        contentClassName='bg-dark'
                        centered
                        fullscreen
                        show={Show}
                        onHide={() => onHideModal()}
                        aria-labelledby="example-modal-sizes-title-lg"
                    >
                        <Modal.Header id='modal-header-video' closeButton>
                        </Modal.Header>
                            {
                                (activeSearch?.descripcion)
                                    ?
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
                                    :
                                <Modal.Title className='text-center'>{activeSearch?.title}</Modal.Title>
                            }

                        <Modal.Body onMouseEnter={() => setOnMouse(true)} onMouseLeave = {() => setOnMouse(false)} onScroll={({target}) => setHeightScroll(target?.scrollTop)} id='description-Serie'>                         
                            <div className="modal-body">
                                {
                                    (activeSearch?.descripcion)
                                        ?
                                    <div className="row">
                                        {
                                            (Array.isArray(activeSearch?.descripcion))
                                                ?
                                            <>
                                                {    
                                                    (respWidth > 991)
                                                        ?
                                                    <MiniserieNormal 
                                                        activeSerie={activeSearch} 
                                                        first = {first} 
                                                        parse = {parse} 
                                                    />
                                                        :
                                                    <>
                                                        <MiniserieResponsive
                                                        activeSerie={activeSearch} 
                                                        first = {first} 
                                                        parse = {parse} 
                                                        />
                                                        <div className='mt-3'>
                                                        {
                                                            (activeSearch)
                                                            &&
                                                            parse(activeSearch?.descripcion[first])
                                                        }
                                                        </div>
                                                    </>
                                                }
                                            </>
                                                :

                                            (respWidth > 991)
                                                ?
                                            <SketchNormal activeBosquejo={activeSearch} parse = {parse} />
                                                :
                                            <>
                                                <SketchResponsive activeBosquejo={activeSearch} heightScroll = {heightScroll} />
                                                <div className='mt-3'>
                                                    {
                                                        parse(activeSearch.descripcion || '')
                                                    }
                                                </div>
                                            </>
                                            }
                                            


                                    </div>
                                        :
                                    <>
                                        <video ref={currentT} onTimeUpdate={({target}) => setOnTimeUpdate(target.currentTime)} autoPlay className = 'image-round' controls = {(onMouse) ? true : false} style={{width: '100%', height: '100%'}}></video>
                                        {
                                            (onMouse)
                                                &&
                                            <OverlayTrigger rootClose trigger="click" placement="top" overlay={popover}>
                                                {
                                                    (respWidth > 991)
                                                        ?
                                                    <div className='controls active' style={{position: 'absolute', bottom: 60, right: 240, cursor: 'pointer'}}>{checkResolution}</div>
                                                        :
                                                    <div style={{position: 'absolute', bottom: 55, right: 170, cursor: 'pointer'}}>{checkResolution}</div>
                                                }
                                            </OverlayTrigger>
                                        }
                                    </>
                                }
                            </div>
                        </Modal.Body>

                        {
                            (Array.isArray(activeSearch?.descripcion))
                                &&
                            <Modal.Footer style={{display: 'flex', justifyContent: 'space-between', border: 'none'}}>
                                <button className='btn btn-outline-secondary' style={{borderRadius: '10px', color: 'white'}} hidden = {(first <= 0)} onClick = {prev}><i className="fa-solid fa-angle-left"></i> Anterior</button>

                                <button className='btn btn-outline-secondary ml-auto' style={{borderRadius: '10px', color: 'white'}} hidden = {(countArray - 1 === first)} onClick = {next}>Siguiente <i className="fa-solid fa-angle-right"></i></button>
                            </Modal.Footer>
                        }

                    </Modal>


                </div>
            </div>
        </div> 
    )
}
