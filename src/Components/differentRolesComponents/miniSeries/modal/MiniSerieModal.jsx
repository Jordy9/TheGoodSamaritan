import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getImageApi, startUpdateSerie } from '../../../../action/miniSerie'
import { Editor } from '@tinymce/tinymce-react'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Swal from 'sweetalert2';
import { sendEmail } from '../../../../action/sendEmail';
import { useRef } from 'react';
import { Pagination } from '../formSeries/pagination/Pagination';

export const MiniSerieModal = () => {

    const {activeSerie} = useSelector(state => state.mi)

    const {activeUser, uid} = useSelector(state => state.auth)

    const {Porcentage} = useSelector(state => state.mi)

    const dispatch = useDispatch()

    const [imag, setimag] = useState()

    const [selectedImage, setSelectedImage] = useState('')

    const [first, setfirst] = useState()

    const {handleSubmit, getFieldProps, touched, errors, setFieldValue} = useFormik({
        initialValues: {
            title: activeSerie?.title,
            descripcion: first,
            image: ''
        },
        enableReinitialize: true,
        onSubmit: ({title, descripcion, image}) => {
            if (activeUser?.role === 'Pastor' && activeSerie?.user === uid) {

                dispatch(startUpdateSerie(title, descripcion, image))
                dispatch(sendEmail(title, 'Nuevo contenido'))
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
                    title: 'No tiene el privilegio de editar esta miniserie'
                  })
            }

        },
        validationSchema: Yup.object({
            title: Yup.string()
                        .max(100, 'Debe de tener 100 caracteres o menos')
                        .min(3, 'Debe de tener 3 caracteres o más')
                        .required('Requerido'),
            descripcion: Yup.array()
                        // .min(3, 'Debe de tener 3 caracteres o más')
                        .required('Requerido')
        })
    })

    const handledImage = () => {
        document.querySelector('#fileSelector').click()
      }

      useEffect(() => {
        setfirst(activeSerie?.descripcion)
      }, [activeSerie?.descripcion])
      


      const agregar = () => {
        setfirst([...first, ''])
      }
  
      const eliminar = () => {
          let newFormValues = [...first];
          newFormValues.pop();
          setfirst(newFormValues)
      }

    //   Para las imagenes

      const [modalOpen, setModalOpen] = useState(false)

      const [newImage, setNewImage] = useState({
        hits: [],
        total: 0,
        totalHits: 0, 
        
    })

    const [searchParam, setsearchParam] = useState('')
    
    const debounceRef = useRef()

    const onQueryChange = (target) => {

        setsearchParam(target.value)

        if (target.value === '') return

        if (debounceRef.current) {
            clearTimeout(debounceRef.current)
        }

        debounceRef.current = setTimeout(() => {
            dispatch(getImageApi(target.value, setNewImage))
        }, 350);
    }

    const handledSelected = (webformatURL) => {
        setSelectedImage(webformatURL)
        setFieldValue('image', webformatURL)
        setModalOpen(false)
    }

    const handledSelectedUpload = (e) => {
        setSelectedImage('')
        setFieldValue('image', e.currentTarget.files[0], (e.currentTarget.files[0]) ? setimag(URL.createObjectURL(e.currentTarget.files[0]) || '') : setimag())
        setModalOpen(false)
    }

    return (
        <>
            <div className="modal fade" id="exampleModal3" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content shadow bg-dark">
                        <div className="modal-header" style = {{border: 'none'}}>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    <div className="modal-body">
                        {
                            (!modalOpen)
                                ?

                            <div className="col-12">
                                <div className="mb-3" style = {{border: 'none'}}>
                                    <h5 className="text-white text-center mt-2">Editar Mini Serie</h5>
                                    <div className="card-body">
                                        <form onSubmit = {handleSubmit}>
                                            <div className = 'row'>
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
                                                        <button type='button' className='btn btn-outline-primary form-control' onClick={() => setModalOpen(true)}>Seleccionar imagen</button>
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
                                                        <img src = {selectedImage || imag || activeSerie?.image} className="img-fluid rounded" alt="" style = {{ cursor: 'pointer', maxHeight: '225px'}} />
                                                    </div> 
                                                </div>
                                            </div>

                                            <div className = 'row'>
                                                <div className="col-12">
                                                    {
                                                        first?.map((element, index) => {
                                                            return (
                                                                <div className='mb-2' key={element + index}>
                                                                    <Editor
                                                                        initialValue = {element}
                                                                        name = 'descripcion'
                                                                        onEditorChange = {(e) => setFieldValue(`descripcion[${index}]`, e)}
                                                                        content="<p>This is the initial content of the editor</p>"
                                                                        init={{
                                                                        plugins: 'autolink link image lists print preview',
                                                                        contextmenu: false,
                                                                        toolbar: 'undo redo | formatselect | fontselect | fontsizeselect ' +
                                                                        'bold italic backcolor | alignleft aligncenter ' +
                                                                        'alignright alignjustify | bullist numlist outdent indent | ' +
                                                                        'removeformat',
                                                                        content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:18px }', 
                                                                        language: 'es'
                                                                        }}
                                                                        // onChange={this.handleEditorChange}
                                                                    />
                                                                    {touched.descripcion && errors.descripcion && <span style={{color: 'red'}}>{errors.descripcion}</span>}
                                                                </div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            </div>
                                            <div className="row">
                                                <div className="col">
                                                <i className="bi bi-plus-circle mx-2 text-success" onClick={agregar} style = {{fontSize: '32px', cursor: 'pointer'}}></i>
                                                    {
                                                        (first?.length > 1)
                                                            &&
                                                        <i className="bi bi-x-circle mx-2 text-danger" onClick={eliminar} style = {{fontSize: '32px', cursor: 'pointer'}}></i>
                                                    }
                                                </div>
                                            </div>
                                            <button type='submit' className = 'btn btn-outline-primary form-control my-3'>Guardar</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                                :
                            <div style={{height: '500px'}}>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <div className="col-4">
                                        <div className="form-group">
                                            <button type='button' className='btn btn-outline-primary form-control' onClick={handledImage}>Subir imagen</button>
                                            <input accept="image/*" id='fileSelector' hidden = {true} type="file" className='form-control bg-transparent text-white' name='image' onChange={(e) => handledSelectedUpload(e)}/>
                                        </div>
                                    </div>

                                    <div className="input-group justify-content-end mb-3">
                                        <div className="form-outline">
                                            <input placeholder='Buscador' type="search" onChange={({target}) => onQueryChange(target)} className="form-control bg-transparent text-white" />
                                        </div>
                                    </div>
                                </div>

                                <div className="row">
                                    {
                                        (newImage?.hits?.length !== 0)
                                            ?
                                        newImage?.hits?.map(({webformatURL}) => {
                                            return (
                                                <div onClick={() => handledSelected(webformatURL)} key={webformatURL} className = 'col-xs-12 col-sm-12 col-md-6 col-lg-3 col-xl-3 col-xxl-3 mt-2'>
                                                    <img src={webformatURL} className = 'rounded' style = {{width: '100%', height: '100%', cursor: 'pointer'}} alt="" />
                                                </div>
                                            )
                                        })
                                            :
                                        <>
                                            <h1 className="text-center image-round bg-dark p-4">
                                                Por favor escriba una referencia de la imagen que necesita o suba alguna que tenga.
                                            </h1>
                                        </>
                                    }
                                </div>

                                <div className='d-flex justify-content-center my-3'>
                                    {
                                        (newImage?.totalHits !== 0)
                                            &&
                                        <Pagination searchParam={searchParam} newImage = {newImage} setNewImage = {setNewImage} />
                                    }
                                </div>
                            </div>
                        }
                    </div>
                </div>
                </div>
            </div>
        </>
    )
}
