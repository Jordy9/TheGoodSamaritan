import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { clearSetZoom, SetActiveZoom, startCreateZoom } from '../../../action/zoom'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Swal from 'sweetalert2';
import { sendEmail } from '../../../action/sendEmail';

export const LivesZoom = () => {

    const {activeUser} = useSelector(state => state.auth)

    const dispatch = useDispatch()

    const [imag, setimag] = useState()

    const {Zoom, activeZoom} = useSelector(state => state.zm)

    const {Porcentage} = useSelector(state => state.zm)

    const zoom = Zoom[0]
    
    const {handleSubmit, resetForm, getFieldProps, touched, errors, setFieldValue} = useFormik({
        initialValues: {
            title: activeZoom?.title || '',
            image: '',
            id: activeZoom?.id || '',
            password: activeZoom?.password || ''
        },
        enableReinitialize: true,
        onSubmit: ({title, image, id, password}) => {
            if (activeUser?.role === 'Gestorcontenido' || activeUser?.role === 'Administrador') {

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
                    if (zoom?.image) {
                        dispatch(startCreateZoom(title, image, id, password))
                        dispatch(sendEmail(title, null, 'Nueva reunión de zoom agregada, titulada:'))
                    } else {
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
                            title: 'Debe de seleccionar alguna imagen'
                          }) 
                    }
                }
            } else {
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
                    title: 'No tiene el privilegio de crear este zoom'
                  })
            }
            resetForm({
                title: '',
                image: document.getElementsByName('image').value = '',
                id: '',
                password: ''
            })
            dispatch(clearSetZoom())
            setimag()
        },
        validationSchema: Yup.object({
            title: Yup.string()
                        .max(100, 'Debe de tener 100 caracteres o menos')
                        .min(3, 'Debe de tener 3 caracteres o más')
                        .required('Requerido'),
            id:    Yup.string()
                        .max(11, 'Debe de tener 11 caracteres')
                        .min(11, 'Debe de tener 11 caracteres')
                        .required('Requerido'),
        })
    })

    const handledImage = () => {
        document.querySelector('#fileSelector').click()
    }

    const handledSetZoom = () => {
        dispatch(SetActiveZoom(zoom))
        setimag(zoom?.image)
    }

    return (
        <div style = {{marginTop: '30px'}} className='row'>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
            <h1>Anunciar reunión de zoom</h1>
                <form onSubmit = {handleSubmit}>
                <div className = 'row'>
                    <h4 className='text-center'>Tamaño requerido para la imagen: 1280 x 1280</h4>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div className="form-group">
                            <label>Título</label>
                            <input type="text" className = 'form-control bg-transparent text-white' {...getFieldProps('title')} />
                            {touched.title && errors.title && <span style={{color: 'red'}}>{errors.title}</span>}
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div className="form-group">
                            <label>Imagen</label>
                            <button type='button' className='btn btn-outline-primary form-control' onClick={handledImage}>Seleccionar imagen</button>
                            <input accept="image/*" id='fileSelector' hidden = {true} type="file" className='form-control bg-transparent text-white' name='image' onChange={(e) => {
                                setFieldValue('image', e.currentTarget.files[0], (e.currentTarget.files[0]) ? setimag(URL.createObjectURL(e.currentTarget.files[0]) || '') : setimag())
                            }} />
                            {touched.image && errors.image && <span style={{color: 'red'}}>{errors.image}</span>}
                        </div>
                    </div>
                </div>

                <div className="row">

                    {
                        (Porcentage > 0)
                            &&
                        <div className="col-12 mb-2">
                            <label className='d-flex justify-content-center'>Subiendo imagen</label>
                            <div className="progress">
                                <div className="progress-bar" role="progressbar" style={{width: `${Porcentage}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{Porcentage}%</div>
                            </div>
                        </div>
                    }
                    
                    <div className="col-12">
                        <div className="form-group d-flex justify-content-center">
                            {/* <img src = {imag} style = {{ cursor: 'pointer', height: '200px', maxWidth: '400px' }} className = 'img-fluid rounded' alt=''/> */}
                            <img src = {imag || ''} className="img-fluid rounded" alt="" style = {{ cursor: 'pointer', maxHeight: '225px'}} />
                        </div> 
                    </div>
                </div>

                <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="form-group">
                        <label>Id de la reunión</label>
                        <input type="Number" className = 'form-control bg-transparent text-white' {...getFieldProps('id')} />
                        {touched.id && errors.id && <span style={{color: 'red'}}>{errors.id}</span>}
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                    <div className="form-group">
                        <label>Contraseña</label>
                        <input type="text" className = 'form-control bg-transparent text-white' {...getFieldProps('password')} />
                    </div>
                </div>
            </div>

                <button type='submit' className = 'btn btn-outline-primary form-control my-3'>Guardar</button>
                </form>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                <h1>Zoom actual</h1>
                <div className = 'shadow d-flex justify-content-center align-items-center p-4 my-2 bg-dark rounded-lg flex-column'>

                <div className="person-name my-3">
                    <h3 className = 'text-white'>{zoom?.title}</h3>
                </div>

                <div className="my-3">
                    <h6 className = 'text-white'>{zoom?.createdAt}</h6>
                </div>

                <div className="info my-3">
                    <img className='img-fluid rounded'style={{height: '350px'}} src={zoom?.image} alt="" />
                </div>

                <button onClick={handledSetZoom} className='btn btn-outline-success form-control'>Editar</button>
                </div>  
            </div>
        </div>
    )
}
