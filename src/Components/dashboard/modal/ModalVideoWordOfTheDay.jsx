import React, { useState } from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { Modal, OverlayTrigger, Popover } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { ModalCloseVideo } from '../../../action/VideoWordOfTheDay'
import { useResponsive } from '../../../hooks/useResponsive'

export const ModalVideoWordOfTheDay = () => {
    const {activeVideo, modalOpen} = useSelector(state => state.vwd)

    const dispatch = useDispatch()

    const dispHide = () => {
        dispatch(ModalCloseVideo(false))
    }

    const [checkResolution, setCheckResolution] = useState('720p')

    useEffect(() => {
        if (currentT.current)
        currentT.current.src = activeVideo?.image[0]
        return () => setCheckResolution('720p')
    }, [activeVideo])
    
    const [onTimeUpdate, setOnTimeUpdate] = useState(0)

    const changeQuality = (calidad, index) => {
        if (checkResolution === calidad) return
        setCheckResolution(calidad)
        currentT.current.src = activeVideo?.image[index]
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
        if (currentT.current)
        currentT.current.currentTime = onTimeUpdate
    }, [checkResolution])
    
    useEffect(() => {
        if (currentT.current)

        if (navigator && navigator.connection.effectiveType === '4g') {
            currentT.current.src = activeVideo?.image[0]
            setCheckResolution('720p')
        } else if (navigator && navigator.connection.effectiveType === '3g') {
            currentT.current.src = activeVideo?.image[1]
            setCheckResolution('480p')
        } else if(navigator && navigator.connection.effectiveType === '2g') {
            currentT.current.src = activeVideo?.image[2]
            setCheckResolution('360p')
        }
    }, [navigator.connection.effectiveType])

    const [ respwidth ] = useResponsive()

    const [onMouse, setOnMouse] = useState(false)
    
    return (

        <Modal
            contentClassName='bg-dark'
            fullscreen
            show={modalOpen}
            onHide={() => dispHide()}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header id='modal-header-video' closeButton>
            </Modal.Header>
                <Modal.Title className='text-center'>{activeVideo?.title}</Modal.Title>
            <Modal.Body onMouseEnter={() => setOnMouse(true)} onMouseLeave = {() => setOnMouse(false)}> 
                <video ref={currentT} onTimeUpdate={({target}) => setOnTimeUpdate(target.currentTime)} autoPlay className = 'image-round' controls = {(onMouse) ? true : false} style={{width: '100%', height: '100%'}}></video>
                {
                    (onMouse)
                        &&
                    <OverlayTrigger rootClose trigger="click" placement="top" overlay={popover}>
                        {
                            (respwidth > 991)
                                ?
                            <div className='controls active' style={{position: 'absolute', bottom: 60, right: 240, cursor: 'pointer'}}>{checkResolution}</div>
                                :
                            <div style={{position: 'absolute', bottom: 55, right: 170, cursor: 'pointer'}}>{checkResolution}</div>
                        }
                    </OverlayTrigger>
                }
            </Modal.Body>
        </Modal>
    )
}
