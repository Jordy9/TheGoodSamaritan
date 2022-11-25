import { useFormik } from 'formik'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import * as Yup from 'yup'
import { newPassword } from '../../../action/user'
import { userMessageToRedirect } from '../../../helper/userMessageToRedirect'
import logo from '../../../heroes/logo.png'
import { Spinner } from '../../spinner/Spinner'


export const ResetPassword = () => {

    const dispatch = useDispatch()

    const history = useHistory()

    const { users } = useSelector(state => state.auth);

    const [userToChange, setUserToChange] = useState()

    const [tokenToVerify, setTokenToVerify] = useState()

    const [tokenToSpinner, seTtokenToSpinner] = useState('')

    useEffect(() => {
        const tokenResetPassword = window.location.href.split('/')

        if (users?.length !== 0) {

            seTtokenToSpinner(tokenResetPassword[tokenResetPassword.length - 1])

            const tokenUser = tokenResetPassword[tokenResetPassword.length - 1]

            if (!tokenUser) {
                return (
                    userMessageToRedirect(),
                    history.replace('/Login')
                )
            }

            const usuarioToRoute = users?.find(usuario => usuario?.tokenUser === tokenUser)

            setUserToChange(usuarioToRoute)
            setTokenToVerify(tokenUser)
    
            if (!usuarioToRoute) {
                userMessageToRedirect(usuarioToRoute)
                history.replace('/Login')
            }
        }
    
    }, [users, tokenToVerify])

    const {handleSubmit, resetForm, getFieldProps, touched, errors} = useFormik({
        initialValues: {
            password: '',
            confirmPassword: ''
        },
        enableReinitialize: true,
        onSubmit: ({password}) => {
            dispatch(newPassword(userToChange?.id, userToChange?.name, userToChange?.lastName, userToChange?.date, userToChange?.email.toLowerCase(), password, userToChange?.role, userToChange?.team, userToChange?.urlImage, tokenToVerify))
            resetForm({
                password: '',
                confirmPassword: ''
            })

            history.replace('/Login')
        },
        validationSchema: Yup.object({
            password: Yup.string()
                        .required('Requerido'),
            confirmPassword: Yup.string()
                        .oneOf([Yup.ref('password')], 'Las contraseñas deben ser iguales')
                        .required('Requerido')
        })
    })
    
    return (
        <>
            {
                (tokenToSpinner)
                    ?
                <div className="container">
                    <div className="row">
                        <div className="col-12 my-5 d-flex justify-content-center">
                            <div className = 'shadow p-2 bg-dark image-round flex-column text-white' style = {{width: '400px', height: 'auto'}}>
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
                    :
                <Spinner />
            }
        </>
    )
}
