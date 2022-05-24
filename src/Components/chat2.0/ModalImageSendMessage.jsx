import { useFormik } from 'formik'
import React from 'react'
import { Modal } from 'react-bootstrap'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import * as Yup from 'yup'
import Arrow from '../../heroes/3682321.png'

export const ModalImageSendMessage = ({Show, setShow}) => {

    const {socket} = useSelector(state => state.sk)

    const {uid} = useSelector(state => state.auth)

    const {chatActivo} = useSelector(state => state.cht)

    const onHideModal = () => {
        setShow(false)
    }

    const {handleSubmit, resetForm, getFieldProps} = useFormik({
        initialValues: {
            link: ''
        },
        enableReinitialize: true,
        onSubmit: ({link}) => {

            if (link?.includes('.jpg') || link?.includes('.png') || link?.includes('.jpeg') || link?.includes('.svg')) {
                socket.emit('mensaje-personal', {
                    from: uid,
                    to: chatActivo,
                    message: link,
                })

                resetForm({
                    link: ''
                })
    
                socket.emit('notificacion-personal', {
                    from: uid,
                    to: chatActivo,
                    notificacion: link
                })
    
                setShow(false)
                
                return
            }

            if (link?.includes('?v=')) {
                const normalUrl = link?.split('?v=')
                const urlAlter = normalUrl[1]?.slice(0, 11)
                const message = `https://www.youtube.com/embed/${urlAlter}`
                socket.emit('mensaje-personal', {
                    from: uid,
                    to: chatActivo,
                    message,
                })

                resetForm({
                    message: ''
                })
    
                socket.emit('notificacion-personal', {
                    from: uid,
                    to: chatActivo,
                    notificacion: message
                })
    
                setShow(false)
                
                return
            }

            if (link?.includes('youtu.be')) {
                const normalUrl = link?.split('/')
                const urlAlter = normalUrl[3]
                const message = `https://www.youtube.com/embed/${urlAlter}`
                socket.emit('mensaje-personal', {
                    from: uid,
                    to: chatActivo,
                    message,
                })
                
                resetForm({
                    message: ''
                })
    
                socket.emit('notificacion-personal', {
                    from: uid,
                    to: chatActivo,
                    notificacion: message
                })
    
                setShow(false)

                return
            }

            if (link) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 5000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  
                  return Toast.fire({
                    icon: 'error',
                    title: 'Link con formato no soportado'
                  })
            }

            resetForm({
                link: ''
            })
        },
        validationSchema: Yup.object({
            link: Yup.string()
                        .min(1, ('Debe de contener mínimo 1 caracter para enviar un mensaje'))
                        .required('Requerido')
        })
    })

    const NextRow = getFieldProps('message')?.value?.length >= 74

    const clickSubmit = () => {
        document.querySelector('#clickSubmitLink').click()
    }
    
  return (
    <Modal
    contentClassName='bg-dark'
    centered
    size="md"
    show={Show}
    onHide={() => onHideModal()}
    aria-labelledby="example-modal-sizes-title-lg"
>
    <Modal.Header id='modal-header-video' closeButton>
    </Modal.Header>
    <Modal.Body> 
    <form onSubmit={handleSubmit} style={{height: 'auto'}}>
        {/* <div className="modal-body" style={{overflow: 'hidden'}}>     
            <div className="row">
                <div className="col-12">
                    <img src = {image} style = {{width: '100%', height: '355px', objectFit: 'cover'}} className = 'img-fluid' alt="" />
                </div>
            </div>
        </div> */}

        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <h1 className='text-center'>Ingrese el link que desea enviar</h1>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className='mx-2 p-2 d-flex align-items-center'>
                            <textarea autoFocus {...getFieldProps('link')} className='mx-2 rounded p-3' style={{backgroundColor: '#181818', color: 'white', resize: 'none', border: 'none', outline: 'none'}} cols = '80' rows={`${(NextRow ? '2' : '1')}`}></textarea>
                            <img onClick={clickSubmit} src = {Arrow} style = {{width: '30px', height: '30px', cursor: 'pointer'}} alt="" />
                            <button hidden id='clickSubmitLink' type='submit'></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </form>
    </Modal.Body>
</Modal>
  )
}
