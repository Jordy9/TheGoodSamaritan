import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Editor } from '@tinymce/tinymce-react'
import { startUpdatePetition } from '../../../../action/petition'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import h2p from 'html2plaintext'
import Swal from 'sweetalert2';

export const PetitionModal = () => {

    const {activePetitions} = useSelector(state => state.pt)

    const {activeUser, uid} = useSelector(state => state.auth)

    const dispatch = useDispatch()

    const {handleSubmit, getFieldProps, touched, errors, setFieldValue} = useFormik({
        initialValues: {
            title: activePetitions?.title,
            descripcion: activePetitions?.descripcion,
        },
        enableReinitialize: true,
        onSubmit: ({title, descripcion}) => {
            if (activeUser?.role === 'Pastor' && activePetitions?.user === uid) {
                dispatch(startUpdatePetition(title, descripcion))
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
                    title: 'No tiene el privilegio de editar esta petición'
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

    return (
        <>
            <div className="modal fade" id="exampleModal5" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content shadow bg-dark">
                        <div className="modal-header" style = {{border: 'none'}}>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    <div className="modal-body">
                        <div className="col-12">
                            <div className="mb-3" style = {{border: 'none'}}>
                                {
                                    (activeUser?.role === 'Pastor')
                                        ?
                                    <h5 className="text-white text-center mt-2">Editar petición</h5>
                                        :
                                    <h5 className="text-white text-center mt-2">Petición de oración</h5>
                                }
                                <div className="card-body">
                                    <form onSubmit = {handleSubmit}>
                                        <div className = 'row'>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label>Título</label>
                                                    <input type="text" className = 'form-control bg-transparent text-white' {...getFieldProps('title')} />
                                                    {touched.title && errors.title && <span style={{color: 'red'}}>{errors.title}</span>}
                                                </div>
                                            </div>
                                        </div>

                                        <div className = 'row'>
                                            <div className="col-12">

                                                {
                                                    (activeUser?.role !== 'Pastor')
                                                        ?
                                                    <div>
                                                        <textarea style = {{resize: 'none'}} readOnly rows = '5' className = 'form-control bg-transparent text-white' value={h2p(activePetitions?.descripcion)} />
                                                    </div>
                                                        :
                                                    <div>
                                                        <Editor
                                                            initialValue = {activePetitions?.descripcion}
                                                            name = 'descripcion'
                                                            onEditorChange = {(e) => setFieldValue('descripcion', e)}
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
                                                }
                                            </div>
                                        </div>
                                        <button hidden = {(activeUser?.role !== 'Pastor')} type='submit' className = 'btn btn-outline-primary form-control my-3'>Guardar</button>
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
