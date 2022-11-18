import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startUpdateEvento } from '../../../../action/event'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Swal from 'sweetalert2';

export const EventModal = () => {

    const {activeUser} = useSelector(state => state.auth)

    const {activeEvent} = useSelector(state => state.ev)

    const {Porcentage} = useSelector(state => state.ev)

    const dispatch = useDispatch()

    const [imag, setimag] = useState()


    const {handleSubmit, getFieldProps, touched, errors, setFieldValue} = useFormik({
        initialValues: {
            title: activeEvent?.title,
            descripcion: activeEvent?.descripcion,
            image: ''
        },
        enableReinitialize: true,
        onSubmit: ({title, descripcion, image}) => {
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
                dispatch(startUpdateEvento(title, descripcion, image))
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
                    title: 'No tiene el privilegio de editar este evento'
                  })
            }
        },
        validationSchema: Yup.object({
        })
    })

    const handledImage = () => {
        document.querySelector('#fileSelector').click()
    }

    return (
        <>
            <div className="modal fade" id="exampleModal4" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content shadow bg-dark">
                        <div className="modal-header" style = {{border: 'none'}}>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    <div className="modal-body">
                        <div className="col-12">
                            <div className="mb-3" style = {{border: 'none'}}>
                                <h5 className="text-white text-center mt-2">Editar Evento</h5>
                                <div className="card-body">
                                <form onSubmit = {handleSubmit}>
                                        <div className = 'row'>
                                        <h5 className='text-center'>Tamaño requerido para la imagen: 1280 x 1280</h5>

                                            <div className="col-12">
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
                                            <div className="col-12">

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
                                                
                                                <div className="form-group d-flex justify-content-center">
                                                    <img src = {imag || activeEvent?.image} className="img-fluid rounded" alt="" style = {{ cursor: 'pointer', maxHeight: '225px'}} />
                                                </div> 
                                            </div>
                                        </div>

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
