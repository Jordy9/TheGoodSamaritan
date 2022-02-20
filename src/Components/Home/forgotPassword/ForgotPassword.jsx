import { useFormik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { forgotPassword } from '../../../action/user'
import logo from '../../../heroes/logo.png'


export const ForgotPassword = () => {

    const dispatch = useDispatch()

    const {handleSubmit, resetForm, getFieldProps, touched, errors} = useFormik({
        initialValues: {
            email: ''
        },
        enableReinitialize: true,
        onSubmit: ({email}) => {
            dispatch(forgotPassword(email))
            resetForm({
                email: ''
            })
        },
        validationSchema: Yup.object({
            email: Yup.string()
                        .email('La dirección de email no es válida')
                        .required('Requerido')
        })
    })
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 my-5 d-flex justify-content-center">
                        <div className = 'shadow p-2 bg-dark rounded-lg flex-column text-white' style = {{width: '400px', height: 'auto'}}>
                            <h4 className = 'text-center my-2'><img src={logo} className='img-fluid' style={{width: 'auto', height: '100px'}} alt="" /></h4>
                            <div className="container card-body">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">

                                        <div className="col form-group text-center">
                                            <label>Digíte su correo electrónico</label>
                                            <input autoComplete='off' type="text" {...getFieldProps('email')} placeholder = 'Ejemplo@hotmail.com' className = 'form-control bg-transparent text-white' />
                                            {touched.email && errors.email && <span style={{color: 'red'}}>{errors.email}</span>}
                                        </div>

                                    </div>

                                    <button type='submit' className = 'btn btn-outline-primary form-control my-2' style = {{borderRadius: '50px'}}>Enviar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    )
}
