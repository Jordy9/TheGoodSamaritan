import React from 'react'
import { Modal } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { ModalCloseVideo } from '../../../action/VideoWordOfTheDay'

export const ModalVideoWordOfTheDay = () => {
    const {activeVideo, modalOpen} = useSelector(state => state.vwd)

    const dispatch = useDispatch()

    const dispHide = () => {
        dispatch(ModalCloseVideo(false))
    }
    
    return (

        <Modal
            contentClassName='bg-dark'
            centered
            size="lg"
            show={modalOpen}
            onHide={() => dispHide()}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header id='modal-header-video' closeButton>
            </Modal.Header>
                <Modal.Title className='text-center'>{activeVideo?.title}</Modal.Title>
            <Modal.Body> 
                <video autoPlay src={activeVideo?.image} className = 'image-round' controls style={{width: '100%', height: '100%'}}></video>
            </Modal.Body>
        </Modal>
    )
}
