import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import * as Yup from 'yup'
import { startLogin, startLoginFacebook, startLoginGoogle } from '../../../action/user'
import { GoogleLogin } from '@react-oauth/google';
import FacebookLogin from 'react-facebook-login';

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
            dispatch(startLogin(email.toLowerCase(), password))

        },
        validationSchema: Yup.object({
        })
    })
    
    const onSuccessLogin = async (response) => {        
        dispatch(startLoginGoogle(response))
    }
    const onErrorLogin = (response) => {
        console.log(response)
    }

    const responseFacebook = (response) => {
        dispatch(startLoginFacebook(response))
      }

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 my-5 d-flex justify-content-center">
                        <div className = 'shadow p-2 mt-2 bg-dark image-round flex-column text-white' style = {{width: '400px', height: 'auto'}}>
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

                                    <div className='text-center my-4'>Inicia sesión con las redes sociales</div>

                                    <div className="row">
                                        <div className="col-12 mb-4 d-flex justify-content-center">
                                            <GoogleLogin
                                                onSuccess={onSuccessLogin}
                                                onError={onErrorLogin}
                                                theme = 'filled_black'
                                                size='medium'
                                                useOneTap = {false}
                                            />
                                        </div>

                                        <div className="col-12 d-flex justify-content-center">
                                            <FacebookLogin
                                                appId="587079659439993"
                                                autoLoad={false}
                                                callback={responseFacebook}
                                                size = 'small'
                                                icon = {<i style={{fontSize: '20px'}} className="bi bi-facebook mr-1"></i>}
                                                buttonStyle = {{width: 'auto', height: 'auto', display: 'flex', justifyContent: 'center', alignItems: 'center', borderRadius: '50px'}}
                                                textButton = 'Iniciar sesión con Facebook'
                                                // size = 'small'
                                                isMobile
                                                // disableMobileRedirect
                                            />
                                        </div>
                                    </div>
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
