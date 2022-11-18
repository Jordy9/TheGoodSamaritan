import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import { startUpdateYoutube } from '../../../../action/youtubeImage';
import Swal from 'sweetalert2';

export const YoutubeModal = () => {

    const {activeUser} = useSelector(state => state.auth)

    const {activeYoutube} = useSelector(state => state.yt)

    const dispatch = useDispatch()

    const {handleSubmit, resetForm, getFieldProps, touched, errors} = useFormik({
        initialValues: {
            link: activeYoutube?.urlImage
        },
        enableReinitialize: true,
        onSubmit: ({title, link}) => {
            if (activeUser?.role === 'Gestorcontenido' || activeUser?.role === 'Administrador') {

                if (link?.includes('?v=')) {
                    const normalUrl = link?.split('?v=')
                    const urlAlter = normalUrl[1]?.slice(0, 11)
                    const urlModif = `https://www.youtube.com/embed/${urlAlter}`
                    dispatch(startUpdateYoutube(urlModif))
                    resetForm({
                        link: ''
                    })
                    return
                }

                if (link?.includes('youtu.be')) {
                    const normalUrl = link?.split('/')
                    const urlAlter = normalUrl[3]
                    const urlModif = `https://www.youtube.com/embed/${urlAlter}`
                    dispatch(startUpdateYoutube(urlModif))
                    resetForm({
                        link: ''
                    })
                    return
                }

                if (link?.includes('embed')) {
                    const normalUrl = link?.split('/')
                    const urlAlter = normalUrl[4]
                    const urlModif = `https://www.youtube.com/embed/${urlAlter}`
                    dispatch(startUpdateYoutube(urlModif))
                    resetForm({
                        link: ''
                    })
                    return
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
                    title: 'No tiene el privilegio de editar este video'
                  })
            }
        },
        validationSchema: Yup.object({
            link: Yup.string()
                    .min(3, 'Debe de tener minimo 3 caracteres')
                    .required('Requerido')
        })
    })

    return (
        <>
            <div className="modal fade" id="exampleModal12" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content shadow bg-dark">
                        <div className="modal-header" style = {{border: 'none'}}>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    <div className="modal-body">
                        <div className="col-12">
                            <div className="mb-3" style = {{border: 'none'}}>
                                <h5 className="text-white text-center mt-2">Editar Video</h5>
                                <div className="card-body">
                                <form onSubmit = {handleSubmit}>
                                        <div className = 'row'>
                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label>Link</label>
                                                    <input type="text" className = 'form-control bg-transparent text-white' {...getFieldProps('link')} />
                                                    {touched.link && errors.link && <span style={{color: 'red'}}>{errors.link}</span>}
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
