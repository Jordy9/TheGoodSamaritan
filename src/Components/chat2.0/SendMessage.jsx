import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sendEmailAdminChat } from '../../action/chat'
import { stopRespondMessage } from '../../action/message'
import * as Yup from 'yup'
import Arrow from '../../heroes/3682321.png'
import { ModalImageSendMessage } from './ModalImageSendMessage'

export const SendMessage = () => {

    const dispatch = useDispatch()

    const {socket} = useSelector(state => state.sk)
    const {uid} = useSelector(state => state.auth)
    const {chatActivo, usuarios} = useSelector(state => state.cht)
    const {Respond, messageRespond} = useSelector(state => state.mg)

    let typing = true

    const {handleSubmit, resetForm, getFieldProps} = useFormik({
        initialValues: {
            message: ''
        },
        enableReinitialize: true,
        onSubmit: ({message}) => {
            if (message.includes('http://') || message.includes('https://') || message.includes('www')) {
                setShow(true)
                resetForm({
                    message: ''
                })
            } else {
                socket.emit('mensaje-personal', {
                    from: uid,
                    to: chatActivo,
                    message,
                    respond: messageRespond
                })
            }

            dispatch(stopRespondMessage())
            dispatch(sendEmailAdminChat(chatActivo))

            socket.emit('notificacion-personal', {
                from: uid,
                to: chatActivo,
                notificacion: message
            })

            socket?.emit('usuario-escribiendo-admin', {typing, chatActivo, uid})
            resetForm({
                message: ''
            })
            resetForm({
                message: ''
            })
            resetForm({
                message: ''
            })
        },
        validationSchema: Yup.object({
            message: Yup.string()
                        .min(1, ('Debe de contener mínimo 1 caracter para enviar un mensaje'))
                        .required('Requerido')
        })
    })

    useEffect(() => {
        const {value} = getFieldProps('message')
        let typing = false
        setTimeout(() => {
            if (value.trim().length > 0 && chatActivo) {
                typing = false
                socket?.emit('usuario-escribiendo-admin', {typing, chatActivo, uid})
            } else {
                typing = true
                socket?.emit('usuario-escribiendo-admin', {typing, chatActivo, uid})
            }
        }, 500);
    }, [socket, chatActivo, uid, getFieldProps]);
    

    const clickSubmit = () => {
        document.querySelector('#clickSubmit').click()
    }

    const user = usuarios?.filter(usuarios => usuarios.id === chatActivo)

    const NextRow = getFieldProps('message')?.value?.length >= 74

    const [Show, setShow] = useState(false)

    const onShow = () => {
        setShow(true)
    }

  return (
    <form onSubmit={handleSubmit} style={{height: 'auto'}}>
        {
            (Respond)
                &&
            <div className='row'>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div className='p-4' style={{position: 'absolute', height: 'auto', width: '95.6%', background: '#212529', bottom: '0px', opacity: 0.9}}>
                        <div className='d-flex justify-content-end'>
                            <button onClick={() => dispatch(stopRespondMessage())} type="button" className="btn-close position-absolute"></button>
                        </div>
                        <p>Respondiendo a {user[0]?.name}</p>

                        <h6 className='p-3' style={{background: '#FFFFFF6C', borderTopRightRadius: '40px', borderBottomLeftRadius: '40px', borderBottomRightRadius: '40px', wordWrap: 'break-word'}}>
                            {messageRespond?.message}
                        </h6>
                    </div>
                </div>
            </div>
        }
        
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                        <div className='mx-2 p-2 d-flex align-items-center'>
                            <i onClick={onShow} style={{fontSize: '25px', cursor: 'pointer'}} className="bi bi-paperclip mx-2"></i>
                            <textarea autoFocus {...getFieldProps('message')} className='mx-2 rounded p-3' style={{backgroundColor: '#181818', color: 'white', resize: 'none', border: 'none', outline: 'none'}} cols = '80' rows={`${(NextRow ? '2' : '1')}`}></textarea>
                            <img onClick={clickSubmit} src = {Arrow} style = {{width: '30px', height: '30px', cursor: 'pointer'}} alt="" />
                            <button hidden id='clickSubmit' type='submit'></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <ModalImageSendMessage Show = {Show} setShow = {setShow} />
    </form>
  )
}
