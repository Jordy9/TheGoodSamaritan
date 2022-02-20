import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import * as Yup from 'yup'
import { startLogin } from '../../../action/user'

export const LoginScreen = () => {
    const dispatch = useDispatch()

    const email = localStorage.getItem('email')

    const [remember, setRemember] = useState();

    useEffect(() => {
      if (email) {
        setRemember(true)
      }
    }, [email]);
    
    
    const {handleSubmit, getFieldProps, touched, errors} = useFormik({
        initialValues: {
            email: localStorage.getItem('email') || '', 
            password: '', 
            rememberme: (email) ? true : false
        },
        enableReinitialize: true,
        onSubmit: ({email, password, rememberme}) => {
            (rememberme)
                ?
            localStorage.setItem('email', email)
            :
            localStorage.removeItem('email')
            dispatch(startLogin(email, password))

        },
        validationSchema: Yup.object({
            email: Yup.string()
                        .email('La dirección de email no es válida')
                        .required('Requerido'),
            password: Yup.string()
                        .min(6, 'Debe de tener 6 caracteres o más')
                        .required('Requerido')
        })
    })

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 my-5 d-flex justify-content-center">
                        <div className = 'shadow p-2 mt-2 bg-dark rounded-lg flex-column text-white' style = {{width: '400px', height: '525px'}}>
                            <h4 className = 'text-center my-4'>Iniciar sesión</h4>
                            <div className="container card-body">
                                <form onSubmit={handleSubmit} className = 'my-4'>
                                    <div className="row">

                                        <div className="col form-group">
                                            <label>Correo electrónico</label>
                                            <input autoComplete='off' type="text" {...getFieldProps('email')} placeholder = 'Ejemplo@hotmail.com' className = 'form-control bg-transparent text-white' />
                                            {touched.email && errors.email && <span style={{color: 'red'}}>{errors.email}</span>}
                                        </div>

                                    </div>

                                    <div className="row">

                                        <div className="col form-group">
                                            <label>Contraseña</label>
                                            <input type="password" {...getFieldProps('password')} placeholder = '********' className = 'form-control bg-transparent text-white' />
                                            {touched.password && errors.password && <span style={{color: 'red'}}>{errors.password}</span>}
                                        </div>

                                    </div>

                                    <div className="form-check">
                                        <input {...getFieldProps('rememberme')} defaultChecked = {(email) && true} type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label">Recuerdame</label>
                                    </div>
                                    <button type='submit' className = 'btn btn-outline-primary form-control mt-4' style = {{borderRadius: '50px'}}>Iniciar sesión</button>
                                </form>

                                <div className = 'text-center my-4'>
                                    <NavLink to = '/Register' style = {{borderRadius: '50px', textDecoration: 'none'}}>¿Aun no tienes una cuenta? Registrate</NavLink>
                                </div>
                                
                                <div className = 'text-center'>
                                    <NavLink to = '/ForgotPassword' style = {{borderRadius: '50px', textDecoration: 'none'}}>¿Olvidaste tu contraseña?</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    )
}
