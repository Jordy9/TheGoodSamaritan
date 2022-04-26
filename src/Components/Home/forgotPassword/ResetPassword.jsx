import { useFormik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'
import { newPassword } from '../../../action/user'
import logo from '../../../heroes/logo.png'


export const ResetPassword = () => {

    const dispatch = useDispatch()

    const history = useHistory()

    const {handleSubmit, resetForm, getFieldProps, touched, errors} = useFormik({
        initialValues: {
            password: '',
            confirmPassword: ''
        },
        enableReinitialize: true,
        onSubmit: ({password}) => {
            dispatch(newPassword(password))
            resetForm({
                password: '',
                confirmPassword: ''
            })

            history.push('Login')
        },
        validationSchema: Yup.object({
            password: Yup.string()
                        .min(8, 'Debe de tener 8 caracteres o más')
                        .matches(/(?=.*[A-Z])/, "Debe contener como mínimo una letra mayúscula")
                        .matches(/(?=.*[a-z])/, "Debe contener como mínimo una letra minuscula")
                        .matches(/(?=.*[0-9])/, "Debe contener como mínimo un número")
                        .matches(/(?=.*[@$!%*#?&])/, "Debe contener como mínimo un caracter especial @$!%*#?&")
                        .required('Requerido'),
            confirmPassword: Yup.string()
                        .oneOf([Yup.ref('password')], 'Las contraseñas deben ser iguales')
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
                                            <label>Contraseña</label>
                                            <input autoComplete='off' type="password" {...getFieldProps('password')} placeholder = '********' className = 'form-control bg-transparent text-white' />
                                            {touched.password && errors.password && <span style={{color: 'red'}}>{errors.password}</span>}
                                        </div>

                                    </div>

                                    <div className="row">

                                        <div className="col form-group text-center">
                                            <label>Confirmar contraseña</label>
                                            <input autoComplete='off' type="password" {...getFieldProps('confirmPassword')} placeholder = '********' className = 'form-control bg-transparent text-white' />
                                            {touched.confirmPassword && errors.confirmPassword && <span style={{color: 'red'}}>{errors.confirmPassword}</span>}
                                        </div>

                                    </div>

                                    <button type='submit' className = 'btn btn-outline-primary form-control my-2' style = {{borderRadius: '50px'}}>Cambiar contraseña</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    )
}
