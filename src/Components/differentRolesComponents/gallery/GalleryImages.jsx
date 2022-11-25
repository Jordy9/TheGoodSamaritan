import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startCreateGallery } from '../../../action/gallery'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Swal from 'sweetalert2';

export const GalleryImages = () => {

    const {activeUser} = useSelector(state => state.auth)

    const {Porcentage} = useSelector(state => state.ga)

    const dispatch = useDispatch()

    const [imagen, setimagen] = useState([])

    const [previewImages, setPreviewImages] = useState([])

    const onSeletedImages = (imgs) => {
        const selectedFilesArray = Array.from(imgs)
    
        const imagesArray = selectedFilesArray.map(file => {
          return URL.createObjectURL(file)
        })
    
        const allFilesArray = [...previewImages, ...imagesArray]
    
        setPreviewImages(allFilesArray)
      }
    
      const removeImage = (img) => {
        setPreviewImages(previewImages?.filter(image => image !== img))
      }

    const {handleSubmit, resetForm, getFieldProps, touched, errors, setFieldValue} = useFormik({
        initialValues: {
            title: '',
            image: ''
        },
        enableReinitialize: true,
        onSubmit: ({title, image}) => {
            if (activeUser?.role === 'Gestorcontenido' || activeUser?.role === 'Administrador') {

                console.log(image)

                for (let index = 0; index < image.length; index++) {
                    const imagen = image[index];
                    
                    if (imagen.type.includes('image/x-icon') === true || imagen.type.includes('image') === false) {
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
                    dispatch(startCreateGallery(title, imagen))
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
                    title: 'No tiene el privilegio de subir esta imagen'
                  })
            }
            resetForm({
                title: '', 
                image: document.getElementsByName('image').value = ''
            })
            setPreviewImages([])
        },
        validationSchema: Yup.object({
            image: Yup.string()
                        .required('Requerido')
        })
    })

    const handledImage = () => {
        document.querySelector('#fileSelector').click()
      }

    return (
        <form onSubmit = {handleSubmit}>
            <h1 style={{marginTop: '30px'}}>Galería</h1>
            <div className = 'row'>
                <h4 className='text-center'>Tamaño requerido para la imagen: 1440 x 960</h4>

                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <div className="form-group">
                        <label>Imagen</label>
                        <button type='button' className='btn btn-outline-primary form-control' onClick={handledImage}>Seleccionar imagen</button>
                        <input multiple accept="image/*" id='fileSelector' hidden = {true} type="file" className='form-control bg-transparent text-white' name='image' onChange={({target}) => {
                            setFieldValue('image', target?.files, onSeletedImages(target?.files))
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
                
                
                {
                    (previewImages?.length !== 0)
                        &&
                        previewImages?.map((imagen, index) => {
                        return (
                            <div key={imagen + index} className="col-3 p-4 cardMouse my-2">
                                <img key={imagen} src={imagen} alt="" className='img-fluid' style={{width: '100px', height: '100px', position: 'relative'}} />
                                <i onClick={() => removeImage(imagen)} style={{position: 'absolute', top: 0, right: 5, fontSize: '20px', cursor: 'pointer'}} className="bi bi-x-circle-fill text-danger"></i>
                            </div>
                        )
                    })
                }
            </div> 
                
            <button type='submit' className = 'btn btn-outline-primary form-control my-3'>Guardar</button>
        </form>
    )
}
