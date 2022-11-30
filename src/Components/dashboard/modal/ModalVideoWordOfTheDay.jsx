import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { ModalCloseVideo } from '../../../action/VideoWordOfTheDay'
import Player from 'griffith'

export const ModalVideoWordOfTheDay = () => {
    const {activeVideo, modalOpen} = useSelector(state => state.vwd)

    const dispatch = useDispatch()

    const dispHide = () => {
        dispatch(ModalCloseVideo(false))
    }

    const [resolution, setResolution] = useState('sd')
    
    useEffect(() => {
        
        if (navigator && navigator.connection.effectiveType === '4g') {
            setResolution('fhd')
        } else if (navigator && navigator.connection.effectiveType === '3g') {
            setResolution('hd')
        } else if(navigator && navigator.connection.effectiveType === '2g') {
            setResolution('sd')
        }
        
    }, [activeVideo])

    const sources = {
        fhd: {
          play_url: activeVideo?.image[0],
        },
        hd: {
          play_url: activeVideo?.image[1],
        },
        sd : {
          play_url: activeVideo?.image[2],
        }
    }

    const props = {
        sources,
        useAutoQuality: true,
        defaultQuality: resolution
    }
    
    return (
        <Modal
            centered
            contentClassName='bg-dark'
            size = 'lg'
            show={modalOpen}
            onHide={() => dispHide()}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header id='modal-header-video' closeButton>
            </Modal.Header>
                <Modal.Title className='text-center'>{activeVideo?.title}</Modal.Title>
            <Modal.Body> 
                <Player {...props} />
            </Modal.Body>
        </Modal>
    )
}
