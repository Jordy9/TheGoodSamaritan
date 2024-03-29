import React, { useState } from 'react'
import { Editor } from '@tinymce/tinymce-react';
import { useDispatch, useSelector } from 'react-redux';
import { startCreateMiniSerie } from '../../../../action/miniSerie';
import { useFormik } from 'formik';
import * as Yup from 'yup'
import tinymce from 'tinymce/tinymce';
import Swal from 'sweetalert2';
import { sendEmail } from '../../../../action/sendEmail';
import { ModalImage } from './ModalImage';

export const FormSeries = () => {

    const {activeUser} = useSelector(state => state.auth)

    const {Porcentage} = useSelector(state => state.mi)

    const dispatch = useDispatch()

    const [imag, setimag] = useState()

    const [selectedImage, setSelectedImage] = useState('')

    const {handleSubmit, resetForm, getFieldProps, touched, errors, setFieldValue} = useFormik({
        initialValues: {
            title: '',
            descripcion: '',
            image: ''
        },
        enableReinitialize: true,
        onSubmit: ({title, descripcion, image}) => {
            if (activeUser?.role === 'Pastor') {
                dispatch(startCreateMiniSerie(title, descripcion, image))
                resetForm({
                    title: '',
                    descripcion: tinymce.activeEditor.setContent(''),
                    image: document.getElementsByName('image').value = ''
                })
                setfirst([])
                setfirst([getFieldProps('descripcion').value = ''])
                setimag()
                setSelectedImage('')
                dispatch(sendEmail(title, null, 'Nueva miniserie agregada, titulada:'))
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
                    title: 'No tiene el privilegio de crear esta miniserie'
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
                        .required('Requerido'),
            image: Yup.string()
                        .required('Requerido'),
        })
    })

    const [first, setfirst] = useState([getFieldProps('descripcion').value])

    const agregar = () => {
        setfirst([...first, getFieldProps('descripcion').value])
    }

    const eliminar = () => {
        let newFormValues = [...first];
        newFormValues.pop();
        setfirst(newFormValues)
    }

    const [modalOpen, setModalOpen] = useState(false)

    return (
        <>
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
                            <div className="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style={{width: `${Porcentage}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">{Porcentage}%</div>
                        </div>
                    </div>
                }

                <div className="col-12">
                    <div className="form-group d-flex justify-content-center">
                        {/* <img src = {imag} style = {{ cursor: 'pointer', height: '200px', maxWidth: '400px' }} className = 'img-fluid rounded' alt=''/> */}
                        <img src = {selectedImage || imag || ''} className="img-fluid rounded" alt="" style = {{ cursor: 'pointer', maxHeight: '225px'}} />
                    </div> 
                </div>
            </div>

            <div className = 'row'>
                <div className="col-12">
                    {
                        first.map((element, index) => {
                            return (
                                <div className='mb-2' key={element + index}>
                                    <Editor
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
                            (first.length > 1)
                                &&
                            <i className="bi bi-x-circle mx-2 text-danger" onClick={eliminar} style = {{fontSize: '32px', cursor: 'pointer'}}></i>
                        }
                </div>
            </div>
            <button type='submit' className = 'btn btn-outline-primary form-control my-3'>Guardar</button>
        </form>

        <ModalImage setFieldValue = {setFieldValue} setimag = {setimag} modalOpen={modalOpen} setModalOpen = {setModalOpen} setSelectedImage = {setSelectedImage} />
        </>
    )
}
