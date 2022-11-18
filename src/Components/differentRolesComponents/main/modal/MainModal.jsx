import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startUpdateMain } from '../../../../action/main'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Swal from 'sweetalert2';

export const MainModal = () => {
    const {activeMain} = useSelector(state => state.ma)

    const {activeUser} = useSelector(state => state.auth)

    const {Porcentage} = useSelector(state => state.ma)

    const dispatch = useDispatch()

    const [imag, setimag] = useState()

    const {handleSubmit, getFieldProps, setFieldValue} = useFormik({
        initialValues: {
            title: activeMain?.title, 
            descripcion: activeMain?.descripcion,
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
                dispatch(startUpdateMain(title, descripcion, image))
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
                    title: 'No tiene el privilegio de editar esta imagen'
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
            <div className="modal fade" id="exampleModal7" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content shadow bg-dark">
                        <div className="modal-header" style = {{border: 'none'}}>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    <div className="modal-body">
                        <div className="col-12">
                            <div className="mb-3" style = {{border: 'none'}}>
                                <h5 className="text-white text-center mt-2">Imagen del carrusel</h5>
                                <div className="card-body">
                                    <form onSubmit = {handleSubmit}>
                                        <div className = 'row'>
                                            <h4 className='text-center'>Tamaño requerido para la imagen: 1280 x 1280</h4>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label>Título</label>
                                                    <input type="text" className = 'form-control bg-transparent text-white' {...getFieldProps('title')} />
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label>Descripción</label>
                                                    <input type="text" placeholder='Dios tiene todo el control' className = 'form-control bg-transparent text-white' {...getFieldProps('descripcion')} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label>Imagen</label>
                                                    <button type='button' className='btn btn-outline-primary form-control' onClick={handledImage}>Seleccionar imagen</button>
                                                    <input accept="image/*" id='fileSelector' hidden = {true} type="file" className='form-control bg-transparent text-white' name='image' onChange={(e) => {
                                                        setFieldValue('image', e.currentTarget.files[0], (e.currentTarget.files[0]) ? setimag(URL.createObjectURL(e.currentTarget.files[0]) || '') : setimag())
                                                    }} />
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
                                                    <img src = {imag || activeMain?.image} className="img-fluid rounded" alt="" style = {{ cursor: 'pointer', maxHeight: '225px'}} />
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
