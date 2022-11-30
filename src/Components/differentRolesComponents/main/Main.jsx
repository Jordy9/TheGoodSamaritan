import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startCreateMain } from '../../../action/main'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Swal from 'sweetalert2';

export const Main = () => {

    const {activeUser} = useSelector(state => state.auth)

    const {Porcentage} = useSelector(state => state.ma)

    const dispatch = useDispatch()

    const [imag, setimag] = useState([])

    const [imagen, setimagen] = useState([])

    useEffect(() => {
        let arreglo = []
      for (let index = 0; index < imag?.length; index++) {
          const element = imag[index];

          arreglo.push([URL.createObjectURL(element)])    
      }
      setimagen(arreglo)
    }, [imag])

    const {handleSubmit, resetForm, getFieldProps, touched, errors, setFieldValue} = useFormik({
        initialValues: {
            title: '', 
            image: '',
            descripcion: ''
        },
        enableReinitialize: true,
        onSubmit: ({title, descripcion, image}) => {
            if (activeUser?.role === 'Gestorcontenido' || activeUser?.role === 'Administrador') {

                for (let index = 0; index < image.length; index++) {
                const imagen = image[index];

                if (imagen.type.includes('image') === false) {
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
                dispatch(startCreateMain(title, descripcion, imagen))
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
                image: document.getElementsByName('image').value = '',
                descripcion: ''
            })
            setimag()
        },
        validationSchema: Yup.object({
            image: Yup.string()
                        .required('Requerido'),
        })
    })

    const handledImage = () => {
        document.querySelector('#fileSelector').click()
      }

    return (
        <>
        <h1 style={{marginTop: '30px'}}>Carrusel Principal</h1>
        <form onSubmit = {handleSubmit}>
            <div className = 'row'>
                <h4 className='text-center'>Tamaño requerido para la imagen: 1280 x 1280</h4>
                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <div className="form-group">
                        <label>Título</label>
                        <input type="text" className = 'form-control bg-transparent text-white' {...getFieldProps('title')} />
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-5 col-xl-5">
                    <div className="form-group">
                        <label>Imagen</label>
                        <button type='button' className='btn btn-outline-primary form-control' onClick={handledImage}>Seleccionar imagen</button>
                        <input accept="image/*" multiple id='fileSelector' hidden = {true} type="file" className='form-control bg-transparent text-white' name='image' onChange={(e) => {
                            setFieldValue('image', e.currentTarget.files, (e.currentTarget.files.length > 0) ? setimag(e.currentTarget.files || '') : setimag())
                        }} />
                        {touched.image && errors.image && <span style={{color: 'red'}}>{errors.image}</span>}
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-4 col-lg-3 col-xl-3">
                    <div className="form-group">
                        <label>Descripción</label>
                        <input type="text" className = 'form-control bg-transparent text-white' {...getFieldProps('descripcion')} />
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
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: `${Porcentage}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{Porcentage}%</div>
                        </div>
                    </div>
                }

                {
                    (imagen)
                        &&
                    imagen?.map((imagen, index) => {
                        return (
                            <div key={imagen + index} className="col-3 d-flex justify-content-center">
                                <img key={imagen} src = {imagen || ''} className="img-fluid rounded my-2" alt="" style = {{ cursor: 'pointer', height: '225px', width: '100%'}} />
                            </div>
                        )
                    })
                }
                
                <div className="col-12">
                    <div className="form-group d-flex justify-content-center">
                        {/* <img src = {imag} style = {{ cursor: 'pointer', height: '200px', maxWidth: '400px' }} className = 'img-fluid rounded' alt=''/> */}
                        {/* <img src = {imag || ''} className="img-fluid rounded" alt="" style = {{ cursor: 'pointer', maxHeight: '225px'}} /> */}
                    </div> 
                </div>
            </div>
            <button type='submit' className = 'btn btn-outline-primary form-control my-3'>Guardar</button>
        </form>
        </>
    )
}
