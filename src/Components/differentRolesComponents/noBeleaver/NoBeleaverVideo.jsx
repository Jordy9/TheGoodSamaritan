import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Swal from 'sweetalert2';
import { clearSetNoBeleaverVideo, startCreateNoBeleaverVideo } from '../../../action/NoBeleaver';

export const NoBeleaverVideo = () => {

    const dispatch = useDispatch()

    const [imag, setimag] = useState()

    const {activeUser} = useSelector(state => state.auth)

    const {Video, Porcentage} = useSelector(state => state.nb)
    
    const video = Video[0]

    const [processVideo, setProcessVideo] = useState(false)
    
    const {handleSubmit, resetForm, getFieldProps, touched, errors, setFieldValue} = useFormik({
        initialValues: {
            title: '',
            image: ''
        },
        enableReinitialize: true,
        onSubmit: ({title, image}) => {
            if (activeUser?.role === 'Administrador' || activeUser?.role === 'Gestorcontenido') {

                if (image.type.includes('video') === false) {
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
                dispatch(startCreateNoBeleaverVideo(title, image, setProcessVideo))
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
                    title: 'No tiene el privilegio de subir este video'
                  })
            }
            resetForm({
                title: '',
                image: document.getElementsByName('image').value = ''
            })
            dispatch(clearSetNoBeleaverVideo())
            setimag()
        },
        validationSchema: Yup.object({
            title: Yup.string()
                        .max(100, 'Debe de tener 100 caracteres o menos')
                        .min(3, 'Debe de tener 3 caracteres o más')
                        .required('Requerido'),
            image: Yup.string()
                        .required('Requerido')
        })
    })

    const handledImage = () => {
        document.querySelector('#fileSelector').click()
    }

    return (
        <div style = {{marginTop: '30px'}} className='row'>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-8 col-xl-8">
            <h1>Video para no creyentes</h1>
                <form onSubmit = {handleSubmit}>
                <div className = 'row'>
                    <h4 className='text-center'>Tamaño requerido para el video: 1920 x 1080</h4>
                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div className="form-group">
                            <label>Título</label>
                            <input type="text" className = 'form-control bg-transparent text-white' {...getFieldProps('title')} />
                            {touched.title && errors.title && <span style={{color: 'red'}}>{errors.title}</span>}
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                        <div className="form-group">
                            <label>Video</label>
                            <button type='button' className='btn btn-outline-primary form-control' onClick={handledImage}>Seleccionar video</button>
                            <input accept="video/*" id='fileSelector' hidden = {true} type="file" className='form-control bg-transparent text-white' name='image' onChange={(e) => {
                                setFieldValue('image', e.currentTarget.files[0], (e.currentTarget.files[0]) ? setimag(URL.createObjectURL(e.currentTarget.files[0]) || '') : setimag())
                            }} />
                            {touched.image && errors.image && <span style={{color: 'red'}}>{errors.image}</span>}
                        </div>
                    </div>
                </div>

                <div className="row">

                    {
                        (processVideo)
                            &&
                        <di className="col-12 mb-2">
                            <label className='d-flex justify-content-center'>Procesando video</label>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" aria-label="Animated striped example" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100" style={{width: '100%'}}></div>
                            </div>
                        </di>
                    }

                    {
                        (Porcentage > 0)
                            &&
                        <div className="col-12 mb-2">
                            <label className='d-flex justify-content-center'>Subiendo video</label>
                            <div className="progress">
                                <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: `${Porcentage}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{Porcentage}%</div>
                            </div>
                        </div>
                    }

                    {
                        (imag)
                            &&
                        <div className="col-12">
                            <div className="form-group d-flex justify-content-center">
                                {/* <img src = {imag} style = {{ cursor: 'pointer', height: '200px', maxWidth: '400px' }} className = 'img-fluid rounded' alt=''/> */}
                                <video src = {imag || ''} className="img-fluid rounded" alt="" style = {{ cursor: 'pointer', maxHeight: '225px'}} />
                            </div> 
                        </div>
                    }
                    
                </div>

                <button type='submit' className = 'btn btn-outline-primary form-control my-3'>Guardar</button>
                </form>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4">
                <h1>Video actual</h1>
                <div className = 'shadow d-flex justify-content-center align-items-center p-4 my-2 bg-dark rounded-lg flex-column'>

                    <div className="person-name">
                        <h3 className = 'text-white'>{video?.title}</h3>
                    </div>

                    <div className="info">
                        <video className='img-fluid rounded'style={{height: 'auto'}} src={video?.image} alt="" />
                    </div>
                </div>  
            </div>
        </div>
    )
}
