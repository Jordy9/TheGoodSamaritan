import React, { useEffect } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useSelector } from 'react-redux';

export const SendMessage = () => {

    const {socket} = useSelector(state => state.sk)
    const {uid} = useSelector(state => state.auth)
    const {chatActivo} = useSelector(state => state.cht)

    let typing = true

    const {handleSubmit, resetForm, getFieldProps} = useFormik({
        initialValues: {
            message: ''
        },
        enableReinitialize: true,
        onSubmit: ({message}) => {
            socket.emit('mensaje-personal', {
                from: uid,
                to: chatActivo,
                message
            })

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
        }, 3000);
    }, [socket, chatActivo, uid, getFieldProps]);

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-xs-6 col-sm-8 col-md-6 col-lg-10 col-xl-10">
                    <input type="text" autoComplete='off' className="form-control bg-transparent text-white" placeholder="Mensaje..." {...getFieldProps('message')} />
                </div>

                <div className="col-xs-4 col-sm-4 col-md-4 col-lg-2 col-xl-2">
                    <button type = 'submit' className="btn btn-primary btn-block mt-3">
                        enviar
                    </button>
                </div>
            </div>
        </form>
    )
}
