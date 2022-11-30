import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Swal from 'sweetalert2';
import { startCreateImageVideo } from '../../../../action/imageVideo';
import ReactPlayer from 'react-player'

export const FormImageVideo = () => {

    const {activeUser} = useSelector(state => state.auth)

    const {Porcentage, ImageVideo} = useSelector(state => state.iv)

    const imageVideo = ImageVideo[0]

    const dispatch = useDispatch()

    const [imag, setimag] = useState()

    const {handleSubmit, resetForm, getFieldProps, touched, errors, setFieldValue} = useFormik({
        initialValues: {
            image: '',
            url: ''
        },
        enableReinitialize: true,
        onSubmit: ({image, url}) => {
            if (activeUser?.role !== 'Colaborador') {

                if (url) {
                    if (url?.includes('?v=')) {
                        const normalUrl = url?.split('?v=')
                        const urlAlter = normalUrl[1]?.slice(0, 11)
                        const urlModif = `https://www.youtube.com/embed/${urlAlter}`
                        dispatch(startCreateImageVideo(image, urlModif))
                        resetForm({
                            url: ''
                        })
                        return
                    }

                    if (url?.includes('youtu.be')) {
                        const normalUrl = url?.split('/')
                        const urlAlter = normalUrl[3]
                        const urlModif = `https://www.youtube.com/embed/${urlAlter}`
                        dispatch(startCreateImageVideo(image, urlModif))
                        resetForm({
                            url: ''
                        })
                        return
                    }
                }

                let confirmType = (image?.type.includes('video')) ? 'video' : 'image'
                if (image?.type?.includes(`${confirmType}`) === false) {
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
                        title: 'Archivo con formato incorrecto'
                      })
                } else {
                    dispatch(startCreateImageVideo(image, url))
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
                    title: 'No tiene el privilegio de crear contenido en el banner de la página de home'
                  })
            }
            resetForm({
                image: document.getElementsByName('image').value = ''
            })
            setimag()
        },
        validationSchema: Yup.object({
        })
    })

    const handledImage = () => {
        document.querySelector('#fileSelector').click()
      }

    return (
        <>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                    <form onSubmit = {handleSubmit}>
                        <div className = 'row'>
                            <h1 style = {{marginTop: '30px'}}>Banner de la página de home</h1>
                            <h5 className='text-center'>Tamaño requerido para la imagen o video: 1920 x 632</h5>
                            {
                                (getFieldProps('image')?.value?.length === 0)
                                    &&
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <div className="form-group">
                                        <label>Link</label>
                                        <input type="text" className = 'form-control bg-transparent text-white' {...getFieldProps('url')} />
                                        {touched.url && errors.url && <span style={{color: 'red'}}>{errors.url}</span>}
                                    </div>
                                </div>
                            }
                        </div>

                        <div className = 'row'>      
                            {
                                (getFieldProps('url')?.value?.length === 0)
                                    &&
                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                                    <div className="form-group">
                                        <label>Imagen</label>
                                        <button type='button' className='btn btn-outline-primary form-control' onClick={handledImage}>Seleccionar imagen</button>
                                        <input accept="image/*, video/mp4,video/x-m4v,video/*" id='fileSelector' hidden = {true} type="file" className='form-control bg-transparent text-white' name='image' onChange={(e) => {
                                            setFieldValue('image', e.currentTarget.files[0], (e.currentTarget.files[0]) ? setimag(URL.createObjectURL(e.currentTarget.files[0]) || '') : setimag())
                                        }} />
                                        {touched.image && errors.image && <span style={{color: 'red'}}>{errors.image}</span>}
                                    </div>
                                </div>
                            }


                        </div>

                        <div className="row">
                            <div className="col-12">

                                {
                                    (Porcentage > 0)
                                        &&
                                    <div className="col-12 mb-2">
                                        <label className='d-flex justify-content-center'>Subiendo imagen</label>
                                        <div className="progress">
                                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: `${Porcentage}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{Porcentage}%</div>
                                        </div>
                                    </div>
                                }

                                {
                                    (getFieldProps('image').value?.type?.includes('video'))
                                        &&
                                    <div className="form-group d-flex justify-content-center">
                                        <video src = {imag || ''} className="img-fluid rounded" alt="" style = {{ cursor: 'pointer', maxHeight: '225px'}}></video>
                                    </div> 
                                }

                                {
                                    (getFieldProps('image').value?.type?.includes('image'))
                                        &&
                                    <div className="form-group d-flex justify-content-center">
                                        <img src = {imag || ''} className="img-fluid rounded" alt="" style = {{ cursor: 'pointer', maxHeight: '225px'}} />
                                    </div> 
                                }
                                
                            </div>
                        </div>

                        <button type='submit' className = 'btn btn-outline-primary form-control my-3'>Guardar</button>
                  </form>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <h1 style = {{marginTop: '30px'}}>Video actual</h1>
                    <div className = 'shadow d-flex justify-content-center align-items-center p-4 my-2 bg-dark rounded-lg flex-column'>
                        {
                            (imageVideo)
                                &&
                            (imageVideo?.image?.includes('.mp4') || imageVideo?.url?.includes('.youtube'))
                                ?
                                (imageVideo?.image)
                                    ?
                                <ReactPlayer playing = {false} controls url = {imageVideo.image} width = '100%' height = '31vh' />
                                    :
                                <ReactPlayer playing = {false} controls url = {imageVideo.url} width = '100%' height = '31vh' />
                        
                                :
                            <img src={imageVideo?.image} alt="" style={{objectFit: 'cover', maxHeight: '31vh', cursor: 'pointer', width: '100%'}} className="img-fluid image-round" />
                        }
                    </div>  
                </div>
            </div>
        </>
    )
}
