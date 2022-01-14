import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { useSelector } from 'react-redux';

export const SendMessage = () => {

    const {socket} = useSelector(state => state.sk)
    const {uid} = useSelector(state => state.auth)
    const {chatActivo} = useSelector(state => state.cht)

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

    return (
        <form onSubmit={handleSubmit}>
            <div className="row">
                <div className="col-xs-6 col-sm-6 col-md-6 col-lg-10 col-xl-10">
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
