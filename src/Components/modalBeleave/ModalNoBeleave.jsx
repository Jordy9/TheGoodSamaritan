import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import { useDispatch, useSelector } from 'react-redux'

export const ModalNoBeleave = () => {

    const dispatch = useDispatch()

    const {Video} = useSelector(state => state.nb)

    const video = Video[0]
    
    const ShowNow = localStorage.getItem('noBeleaver')

    const [Show, setShow] = useState(!ShowNow)

    useEffect(() => {
        if (!ShowNow) {
            setTimeout(() => {
                // setShow(true)
            }, 1500);
            if (Show === false) {
                localStorage.setItem('noBeleaver', false)
            } else {
                setTimeout(() => {
                    localStorage.setItem('noBeleaver', false)
                }, 1000 * 500);}
        }
        if (Show === false) {
            setShow(false)
        }
    }, [Show, ShowNow, dispatch])

  return (
        <Modal
            contentClassName='bg-dark'
            centered
            size="xl"
            show={Show}
            onHide={() => setShow(false)}
            aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header id='modal-header-video' closeButton>
        </Modal.Header>
        <Modal.Body> 
            <ReactPlayer controls style={{cursor: 'pointer'}} width = '100%' height = '100%' url={video?.image} />
        </Modal.Body>
        </Modal>
  )
}
