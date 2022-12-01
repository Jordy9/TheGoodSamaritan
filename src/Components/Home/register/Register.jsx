import { useFormik } from 'formik'
// import moment from 'moment'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
// import MaskedInput from 'react-text-mask'
import * as Yup from 'yup'
import { startRegister } from '../../../action/user'
import './FormProfile.css'
// import PaisBD from '../../../PaisBD'
// import ProvinciaBD from '../../../ProvinciaBD'
import { useHistory } from 'react-router-dom'

export const Register = () => {

    // const newDate = moment().format('yyyy-MM-DDTHH:mm')

    const dispatch = useDispatch()

    // const options = useMemo(() => PaisBD, [])

    // const options2 = useMemo(() => ProvinciaBD, [])

    const [first, setfirst] = useState(false)

    const history = useHistory()

    useEffect(() => {
        if (first) {
            history.push('/Login')
        }
    }, [first, history])
    

    const {handleSubmit, resetForm, getFieldProps, touched, errors} = useFormik({
        initialValues: {
            name: '', 
            lastName: '', 
            email: '',
            noBeleaver: false,
            password: '',
            confirmPassword: ''
        },
        enableReinitialize: true,
        onSubmit: ({name, lastName, email, noBeleaver, password}) => {
            dispatch(startRegister(name, lastName, email.toLowerCase(), noBeleaver, password, setfirst))
            resetForm({
                name: '', 
                lastName: '', 
                email: '',
                noBeleaver: false,
                password: '',
                confirmPassword: ''
            })
        },
        validationSchema: Yup.object({
            name: Yup.string()
                        .max(50, 'Debe de tener 50 caracteres o menos')
                        .min(3, 'Debe de tener 3 caracteres o más')
                        .required('Requerido'),
            lastName: Yup.string()
                        .max(50, 'Debe de tener 50 caracteres o menos')
                        .min(3, 'Debe de tener 3 caracteres o más')
                        .required('Requerido'),
            email: Yup.string()
                        .email('La dirección de email no es válida')
                        .required('Requerido'),
            password: Yup.string()
                        .required('Requerido'),
            confirmPassword: Yup.string()
                        .oneOf([Yup.ref('password')], 'Las contraseñas deben ser iguales')
                        .required('Requerido')
        })
    })

    // const countryFilter = getFieldProps('country')?.value?.split(',')

    return (
        <>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex justify-content-center align-items-center mt-5">
                    <div style = {{border: 'none'}}>
                        <div className = 'shadow p-2 mt-2 bg-dark image-round flex-column text-white' style = {{width: '400px', height: 'auto'}}>
                            <h5 className="text-white text-center my-4">Formulario de Registro</h5>
                            <div className="card-body">
                                <form onSubmit={handleSubmit} className = 'my-4'>
                                    <div className="row">
                                        <div className="col form-group">
                                            <label>Nombre</label>
                                            <input type="text" {...getFieldProps('name')} placeholder = 'Juan' className = 'form-control bg-transparent text-white' />
                                            {touched.name && errors.name && <span style={{color: 'red'}}>{errors.name}</span>}
                                        </div>

                                        <div className="col form-group">
                                            <label>Apellido</label>
                                            <input type="text" {...getFieldProps('lastName')} placeholder = 'Taveras' className = 'form-control bg-transparent text-white' />
                                            {touched.lastName && errors.lastName && <span style={{color: 'red'}}>{errors.lastName}</span>}
                                        </div>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col form-group">
                                            <label>Correo Electrónico</label>
                                            <input type="text" {...getFieldProps('email')} placeholder = 'Juan123@hotmail.com' className = 'form-control bg-transparent text-white ' />
                                            {touched.email && errors.email && <span style={{color: 'red'}}>{errors.email}</span>}
                                        </div>
                                    </div>

                                    {/* <div className="row">
                                        <div className="col form-check">
                                            <input {...getFieldProps('noBeleaver')} type="checkbox" className="form-check-input" id="exampleCheck4" />
                                            <label className="form-check-label">¿Deseas darle tu vida al Señor?</label>
                                        </div>
                                    </div> */}

                                    <div className="row mt-3">
                                        <div className="col form-group">
                                            <label>Contrasena</label>
                                            <input type="password" autoComplete='off' {...getFieldProps('password')} placeholder = '********' className = 'form-control bg-transparent text-white' />
                                            {touched.password && errors.password && <span style={{color: 'red'}}>{errors.password}</span>}
                                        </div>


                                        <div className="col form-group">
                                            <label>Confirmar Contrasena</label>
                                            <input type="password" autoComplete='off' {...getFieldProps('confirmPassword')} placeholder = '********' className = 'form-control bg-transparent text-white' />
                                            {touched.confirmPassword && errors.confirmPassword && <span style={{color: 'red'}}>{errors.confirmPassword}</span>}
                                        </div>
                                    </div>
                                    <button type='submit' className = 'btn btn-outline-primary form-control mt-4' style = {{borderRadius: '50px'}}>Registrarse</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
