import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Editor } from '@tinymce/tinymce-react'
import { startUpdateBosquejo } from '../../../../action/sketch'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Swal from 'sweetalert2';
import { useRef } from 'react';
import { getImageApi } from '../../../../action/miniSerie';
import { Pagination } from '../../miniSeries/formSeries/pagination/Pagination';
import { ImageGallery } from '../../miniSeries/formSeries/ImageGallery';
import { useEffect } from 'react';

export const SketchModal = () => {

    const {activeBosquejo} = useSelector(state => state.skt)

    const {activeUser, uid} = useSelector(state => state.auth)

    const {Porcentage} = useSelector(state => state.skt)

    const dispatch = useDispatch()

    const [imag, setimag] = useState()

    const [selectedImage, setSelectedImage] = useState('')

    const {handleSubmit, getFieldProps, touched, errors, setFieldValue} = useFormik({
        initialValues: {
            title: activeBosquejo?.title,
            descripcion: activeBosquejo?.descripcion,
            image: ''
        },
        enableReinitialize: true,
        onSubmit: ({title, descripcion, image}) => {
            if (activeUser?.role === 'Pastor' && activeBosquejo?.user === uid) {

                dispatch(startUpdateBosquejo(title, descripcion, image))
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
                    title: 'No tiene el privilegio de editar este bosquejo'
                  })
            }

        },
        validationSchema: Yup.object({
            title: Yup.string()
                        .max(100, 'Debe de tener 100 caracteres o menos')
                        .min(3, 'Debe de tener 3 caracteres o más')
                        .required('Requerido'),
            descripcion: Yup.string()
                        .min(3, 'Debe de tener 3 caracteres o más')
                        .required('Requerido')
        })
    })

    const handledImage = () => {
        document.querySelector('#fileSelector').click()
    }

    //   Para las imagenes

    const [modalOpen, setModalOpen] = useState(false)

    const [newImage, setNewImage] = useState({
      hits: [],
      total: 0,
      totalHits: 0, 
      
    })

    const [changeSwitch, setChangeSwitch] = useState(false)

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

    const handledSelected = (webformatURL, id) => {
        setSelectedImage(webformatURL)
        setModalOpen(false)

        const toDataURL = (url) => fetch(url)
            .then(response => response.blob())
            .then(blob => new Promise((resolve, reject) => {
                const reader = new FileReader()
                reader.onloadend = () => resolve(reader.result)
                reader.onerror = reject
                reader.readAsDataURL(blob)
            }))

        // ***Here is code for converting "Base64" to javascript "File Object".***

        const dataURLtoFile = (dataurl, filename) => {
            let arr = dataurl.split(','), mime = arr[0].match(/:(.*?);/)[1],
            bstr = atob(arr[1]), n = bstr.length, u8arr = new Uint8Array(n);
            while(n--){
                u8arr[n] = bstr.charCodeAt(n);
            }
            return new File([u8arr], filename, {type:mime});
        }

        // *** Calling both function ***

        toDataURL(webformatURL)
        .then(dataUrl => {
            let fileData = dataURLtoFile(dataUrl, `${id}.jpg`);
            if (fileData) {
                setFieldValue('image', fileData)
            }
        })
    }

    const handledSelectedUpload = (e) => {
        setSelectedImage('')
        setFieldValue('image', e.currentTarget.files[0], (e.currentTarget.files[0]) ? setimag(URL.createObjectURL(e.currentTarget.files[0]) || '') : setimag())
        setModalOpen(false)
    }

    useEffect(() => {
        if (searchParam?.length > 0) {
            dispatch(getImageApi(searchParam, setNewImage, null, changeSwitch))
        }
    }, [changeSwitch])

    useEffect(() => {
      if (!modalOpen) {
        setChangeSwitch(false)
        setNewImage({
            hits: [],
            total: 0,
            totalHits: 0, 
        })
        setsearchParam('')
      }
    }, [modalOpen])

    return (
        <>
            <div className="modal fade" id="exampleModal4" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content shadow bg-dark">
                        <div className="modal-header" style = {{border: 'none'}}>
                            {
                                (modalOpen)
                                    &&
                                <i onClick={() => setModalOpen(false)} style = {{cursor: 'pointer'}} className="bi bi-arrow-left"></i>
                            }
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    <div className="modal-body" id='modalImage'>
                        {
                            (!modalOpen)
                                ?
                            <div className="col-12">
                                <div className="mb-3" style = {{border: 'none'}}>
                                    <h5 className="text-white text-center mt-2">Editar Bosquejo</h5>
                                    <div className="card-body">
                                        <form onSubmit = {handleSubmit}>
                                            <div className = 'row'>
                                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                                    <div className="form-group">
                                                        <label>Título</label>
                                                        <input type="text" className = 'form-control bg-transparent text-white' {...getFieldProps('title')} />
                                                        {touched.title && errors.title && <span style={{color: 'red'}}>{errors.title}</span>}
                                                    </div>
                                                </div>

                                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 col-xxl-6">
                                                    <div className="form-group">
                                                        <label>Imagen</label>
                                                        <button type='button' className='btn btn-outline-primary form-control' onClick={() => setModalOpen(true)}>Seleccionar imagen</button>
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
                                                        {/* <img src = {imag} style = {{ cursor: 'pointer', height: '200px', maxWidth: '400px' }} className = 'img-fluid rounded' alt=''/> */}
                                                        <img src = {selectedImage || imag || activeBosquejo?.image} className="img-fluid rounded" alt="" style = {{ cursor: 'pointer', maxHeight: '225px'}} />
                                                    </div> 
                                                </div>
                                            </div>

                                            <div className = 'row'>
                                                <div className="col-12">
                                                    <div>
                                                        <Editor
                                                            initialValue = {activeBosquejo?.descripcion}
                                                            name = 'descripcion'
                                                            onEditorChange = {(e) => setFieldValue('descripcion', e)}
                                                            content="<p>This is the initial content of the editor</p>"
                                                            init={{
                                                            language: 'es',
                                                            plugins: ['autolink', 'link', 'image', 'lists', 'print', 'preview'],
                                                            contextmenu: false,
                                                            toolbar: 'undo redo | formatselect | fontselect | fontsizeselect ' +
                                                            'bold italic backcolor | alignleft aligncenter ' +
                                                            'alignright alignjustify | bullist numlist outdent indent | ' +
                                                            'removeformat',
                                                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:18px }'
                                                            }}
                                                            // onChange={this.handleEditorChange}
                                                        />
                                                        {touched.descripcion && errors.descripcion && <span style={{color: 'red'}}>{errors.descripcion}</span>}
                                                    </div>
                                                </div>
                                            </div>
                                            <button type='submit' className = 'btn btn-outline-primary form-control my-3'>Guardar</button>
                                        </form>
                                    </div>
                                </div>
                            </div>
                                :
                            <>
                                <div style={{height: '500px'}}>
                                    <div className = 'row'>
                                        <div className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12' style={{display: 'flex', justifyContent: 'space-between'}}>
                                            <label className="form-check-label">Buscar imagenes en pixabay</label>
                                            <div onChange={({target}) => setChangeSwitch(target.checked)} className="form-check form-switch">
                                                <input defaultChecked = {changeSwitch} className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                                            </div>
                                            <label className="form-check-label">Buscar imagenes en unsplash</label>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col-12">
                                            <div className = 'row' style={{display: 'flex', justifyContent: 'space-between'}}>
                                                <div className = 'col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 col-xxl-5'>
                                                    <div className="form-group">
                                                        <button type='button' className='btn btn-outline-primary form-control' onClick={handledImage}>Subir imagen</button>
                                                        <input accept="image/*" id='fileSelector' hidden = {true} type="file" className='form-control bg-transparent text-white' name='image' onChange={(e) => handledSelectedUpload(e)}/>
                                                    </div>
                                                </div>

                                                <div className = 'col-xs-12 col-sm-12 col-md-6 col-lg-5 col-xl-5 col-xxl-5'>
                                                    <div className="form-outline">
                                                        <input placeholder='Buscador' type="search" onChange={({target}) => onQueryChange(target)} className="form-control bg-transparent text-white" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="row">
                                        <ImageGallery changeSwitch={changeSwitch} handledSelected = {handledSelected} newImage = {newImage} />
                                    </div>
                                </div>
                            </>
                        }
                    </div>

                    {
                        (modalOpen)
                            &&
                        <div className='d-flex justify-content-center modal-footer'>
                            {
                                (newImage?.totalHits !== 0)
                                    &&
                                <Pagination searchParam={searchParam} newImage = {newImage} setNewImage = {setNewImage} changeSwitch = {changeSwitch} number = {(changeSwitch) ? 5 : 20} />
                            }
                        </div>
                    }
                </div>
                </div>
            </div>
        </>
    )
}
