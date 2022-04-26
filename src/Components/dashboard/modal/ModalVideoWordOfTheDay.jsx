import React from 'react'
import { Modal } from 'react-bootstrap'
import ReactPlayer from 'react-player'
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
                <ReactPlayer stopOnUnmount = {true} width = '100%' height = '100%' controls playing url={activeVideo?.image} alt="..." />
            </Modal.Body>
        </Modal>
    )
}
