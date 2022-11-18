import React, { useMemo, useState } from 'react'
import { ProfileImg } from './ProfileImg'
import MaskedInput from 'react-text-mask'
import './FormProfile.css'
import { useFormik } from 'formik'
import { useDispatch, useSelector } from 'react-redux'
import * as Yup from 'yup'
import moment from 'moment'
import { startUpdateUser } from '../../../action/user'
import Swal from 'sweetalert2'
import PaisBD from '../../../PaisBD'
import ProvinciaBD from '../../../ProvinciaBD'
import { ModalProfile } from './ModalProfile'

export const FormProfile = () => {

    const newDate = moment().format('yyyy-MM-DDTHH:mm')

    const dispatch = useDispatch()

    const {activeUser} = useSelector(state => state.auth)
    const [imag, setimag] = useState()

    const options = useMemo(() => PaisBD, [])

    const options2 = useMemo(() => ProvinciaBD, [])

    const {handleSubmit, getFieldProps, touched, errors, setFieldValue} = useFormik({
        initialValues: {
            name: activeUser?.name, 
            lastName: activeUser?.lastName, 
            date: activeUser?.date,
            email: activeUser?.email,
            address: activeUser?.address,
            country: activeUser?.country,
            city: activeUser?.city,
            number: activeUser?.number,
            biliever: activeUser?.biliever,
            discipleship: activeUser?.discipleship,
            tracking: activeUser?.tracking,
            password: activeUser?.password,
            confirmPassword: activeUser?.password,
            role: activeUser?.role,
            age: activeUser?.age,
            image: '',
        },
        enableReinitialize: true,
        onSubmit: ({name, lastName, date, email, address, country, city, number, biliever, discipleship, tracking, password, image, role, age}) => {

            if (image?.type?.includes('image') === false) {
                const Toast = Swal.mixin({
                    toast: true,
                    position: 'top-end',
                    showConfirmButton: false,
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: (toast) => {
                      toast.addEventListener('mouseenter', Swal.stopTimer)
                      toast.addEventListener('mouseleave', Swal.resumeTimer)
                    }
                  })
                  
                  return Toast.fire({
                    icon: 'error',
                    title: 'Imagen con formato incorrecto'
                  })
            } else {
                dispatch(startUpdateUser(name, lastName, date, email.toLowerCase(), address, country, city, number, biliever, discipleship, tracking, password, image, role, age))
            }
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
            date: Yup.string()
                        .required('Requerido'),
            email: Yup.string()
                        .email('La dirección de email no es válida')
                        .required('Requerido'),
            address: Yup.string()
                        .max(100, 'Debe de tener 100 caracteres o menos')
                        .required('Requerido'),
            country: Yup.string()
                        .max(50, 'Debe de tener 50 caracteres o menos')
                        .required('Requerido'),
            city: Yup.string()
                        .max(50, 'Debe de tener 50 caracteres o menos')
                        .required('Requerido'),
            number: Yup.string()
                        .min(10, 'Debe de tener 10 dígitos')
                        .required('Requerido')
        })
    })

    const handledImage = () => {
        document.querySelector('#fileSelector').click()
      }

    const countryFilter = getFieldProps('country')?.value?.split(',')

    const fechainicio1 = moment(activeUser?.date, 'YYYY-MM-DD')
    const fechafin2 = moment()

    const age = fechafin2.diff(fechainicio1, 'years')

    return (
        <>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-5 col-lg-3 col-xl-3">
                    <ProfileImg imag = {imag} />
                </div>

                <div className="col-xs-12 col-sm-12 col-md-7 col-lg-9 col-xl-9">
                    <div className="mb-3" style = {{border: 'none'}}>
                        <div className = 'shadow p-2 mt-2 bg-dark image-round flex-column text-white'>
                            <h5 className="text-white text-center mt-2">Información personal</h5>
                            {
                                (activeUser?.role === 'Usuario')
                                    &&    
                                <div className='d-flex justify-content-end align-items-center mx-3'>
                                    <i data-bs-toggle="modal" data-bs-target="#exampleModalProfileSettings" style={{position: 'absolute', zIndex: 1045, fontSize: '25px', cursor: 'pointer'}} className="bi bi-gear"></i>
                                </div>
                            }
                            <div className="card-body">
                                <form onSubmit={handleSubmit} className = 'needs-validation'>
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
                                            <label>Edad</label>
                                            <input type="text" readOnly value={age || 0} className = 'form-control bg-transparent text-white' />
                                            {touched.age && errors.age && <span style={{color: 'red'}}>{errors.age}</span>}
                                        </div>

                                        <div className="col form-group">
                                            <label>Fecha de nacimiento</label>
                                            <input type="date" min={newDate} {...getFieldProps('date')} placeholder = '26/8/1996' className = 'form-control bg-transparent text-white ' />
                                            {touched.date && errors.date && <span style={{color: 'red'}}>{errors.date}</span>}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col form-group">
                                            <label>Correo Electrónico</label>
                                            <input type="text" {...getFieldProps('email')} placeholder = 'Ejemplo@hotmail.com' className = 'form-control bg-transparent text-white ' />
                                            {touched.email && errors.email && <span style={{color: 'red'}}>{errors.email}</span>}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col form-group">
                                            <label>Dirección</label>
                                            <input type="text" {...getFieldProps('address')} placeholder = 'Los Santos' className = 'form-control bg-transparent text-white' />
                                            {touched.address && errors.address && <span style={{color: 'red'}}>{errors.address}</span>}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 form-group">
                                            <label>País</label>
                                            <select {...getFieldProps('country')} id='select-rol' className="form-select form-control bg-transparent text-white">
                                                <option selected>Seleccione una opción</option>
                                                {
                                                    options.map(option => {
                                                        return (
                                                            <option key={option[1]} value = {[option[2], option[1], option[0]]}>{option[1]}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                            {touched.country && errors.country && <span style={{color: 'red'}}>{errors.country}</span>}
                                        </div>

                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 form-group">
                                            <label>Provincia</label>
                                            <select {...getFieldProps('city')} id='select-rol' className="form-select form-control bg-transparent text-white">
                                                <option selected>Seleccione una opción</option>
                                                {
                                                    (countryFilter && options2)
                                                        &&
                                                    options2?.filter(op => op[1] === countryFilter[2])?.map(option => {
                                                        return (
                                                            <option key={option} value = {[option[2]]}>{option[2]}</option>
                                                        )
                                                    })
                                                }
                                            </select>
                                            {touched.city && errors.city && <span style={{color: 'red'}}>{errors.city}</span>}
                                        </div>

                                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 form-group">
                                            <label >Número de teléfono</label>
                                            <MaskedInput
                                                {...getFieldProps('number')}
                                                className = 'form-control bg-transparent text-white'
                                                placeholder = '(809)-222-3333)'
                                                mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                                            />
                                            {touched.number && errors.number && <span style={{color: 'red'}}>{errors.number}</span>}
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col from-group">
                                            <label>Imagen</label>
                                            <button type='button' className='btn btn-outline-primary form-control my-3' onClick={handledImage}>Seleccionar foto de perfil</button>
                                            <input accept="image/*" id='fileSelector' hidden = {true} type="file" className='form-control bg-transparent text-white' name='image' onChange={(e) => {
                                                setFieldValue('image', e.currentTarget.files[0], (e.currentTarget.files[0]) ? setimag(URL.createObjectURL(e.currentTarget.files[0]) || '') : setimag())
                                            }} />
                                        </div>
                                    </div>

                                    <button type='submit' className = 'btn btn-outline-primary form-control'>Guardar</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <ModalProfile />
        </>
    )
}
