import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { startUpdateVideoWordOfTheDay } from '../../../../action/VideoWordOfTheDay';
import Swal from 'sweetalert2';

export const VideoWordOfTheDayModal = () => {

    const {activeVideo} = useSelector(state => state.vwd)

    const {activeUser} = useSelector(state => state.auth)

    const {Porcentage} = useSelector(state => state.vwd)

    const dispatch = useDispatch()

    const [vide, setvide] = useState()

    const {handleSubmit, getFieldProps, touched, errors, setFieldValue} = useFormik({
        initialValues: {
            title: activeVideo?.title, 
            video: ''
        },
        enableReinitialize: true,
        onSubmit: ({title, video}) => {
            if (activeUser?.role === 'Gestorcontenido' || activeUser?.role === 'Administrador') {

                if (video?.type?.includes('video') === false) {
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
                        title: 'Video con formato incorrecto'
                      })
                } else {
                dispatch(startUpdateVideoWordOfTheDay(title, video))
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
                    title: 'No tiene el privilegio de editar esta palabra del día'
                  })
            }

        },
        validationSchema: Yup.object({
            title: Yup.string()
                        .max(100, 'Debe de tener 100 caracteres o menos')
                        .min(3, 'Debe de tener 3 caracteres o más')
                        .required('Requerido'),
        })
    })

    const handledvideo = () => {
        document.querySelector('#fileSelector').click()
      }

    return (
        <>
            <div className="modal fade" id="exampleModalVideoWordOfTheDayModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content shadow bg-dark">
                        <div className="modal-header" style = {{border: 'none'}}>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    <div className="modal-body">
                        <div className="col-12">
                            <div className="mb-3" style = {{border: 'none'}}>
                                <h5 className="text-white text-center mt-2">Editar Palabra Del Día</h5>
                                <div className="card-body">
                                    <form onSubmit = {handleSubmit}>
                                        <div className = 'row'>
                                        <h4 className='text-center'>Tamaño requerido para el video: 1920 x 1080</h4>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label>Título</label>
                                                    <input type="text" className = 'form-control bg-transparent text-white' {...getFieldProps('title')} />
                                                    {touched.title && errors.title && <span style={{color: 'red'}}>{errors.title}</span>}
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label>Video</label>
                                                    <button type='button' className='btn btn-outline-primary form-control' onClick={handledvideo}>Seleccionar video</button>
                                                    <input accept="video/*" id='fileSelector' hidden = {true} type="file" className='form-control bg-transparent text-white' name='video' onChange={(e) => {
                                                        setFieldValue('video', e.currentTarget.files[0], (e.currentTarget.files[0]) ? setvide(URL.createObjectURL(e.currentTarget.files[0]) || '') : setvide())
                                                    }} />
                                                    {touched.video && errors.video && <span style={{color: 'red'}}>{errors.video}</span>}
                                                </div>
                                            </div>
                                        </div>


                                        {
                                            (vide || activeVideo)
                                                &&
                                            <div className="row">

                                                {
                                                    (Porcentage > 0)
                                                        &&
                                                    <div className="col-12 mb-2">
                                                        <label className='d-flex justify-content-center'>Subiendo video</label>
                                                        <div className="progress">
                                                            <div className="progress-bar" role="progressbar" style={{width: `${Porcentage}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{Porcentage}%</div>
                                                        </div>
                                                    </div>
                                                }
                                                <div className="col-12">
                                                    <div className="form-group d-flex justify-content-center">
                                                        {/* <img src = {vide} style = {{ cursor: 'pointer', height: '200px', maxWidth: '400px' }} className = 'img-fluid rounded' alt=''/> */}
                                                        <video src = {vide || activeVideo?.image} className="img-fluid rounded" alt="" style = {{ cursor: 'pointer', maxHeight: '225px'}}></video>
                                                    </div> 
                                                </div>
                                            </div>
                                        }
                                        <button type='submit' className = 'btn btn-outline-primary form-control my-3'>Guardar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
