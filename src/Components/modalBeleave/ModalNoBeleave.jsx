import React, { useEffect, useState } from 'react'
import { Modal } from 'react-bootstrap'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'

export const ModalNoBeleave = () => {

    const {Video} = useSelector(state => state.nb)

    const video = Video[0]
    
    const ShowNow = localStorage.getItem('noBeleaver')

    const [Show, setShow] = useState()

    const onHideModal = () => {
        if (!ShowNow) {
          setShow(false)
          localStorage.setItem('noBeleaver', true)
        }
      }

    const ShowModal = () => {
        setShow(true)
      }
  
      useEffect(() => {
        const timer = setTimeout(() => {
          if (!ShowNow) {
            ShowModal()
          }
        }, 3000);
  
        return () => {
          clearTimeout(timer);
        }
      }, [])

  return (
        <Modal
            contentClassName='bg-dark'
            centered
            size="lg"
            show={Show}
            onHide={() => onHideModal()}
            aria-labelledby="example-modal-sizes-title-lg"
        >
        <Modal.Header id='modal-header-video' closeButton>
        </Modal.Header>
        <Modal.Body> 
            <h1 className='text-center'>{video.title}</h1>
            <ReactPlayer controls style={{cursor: 'pointer'}} width = '100%' height = '100%' url={video?.image} />
        </Modal.Body>
        </Modal>
  )
}
