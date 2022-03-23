import React, { useEffect } from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { clearSetNota, startCreateNote, startGetNotes, startUpdateNota } from '../../action/notas'
import { useSelector } from 'react-redux'
import tinymce from 'tinymce/tinymce';
import { Editor } from '@tinymce/tinymce-react'

export const NoteForm = ({setShow}) => {

    const dispatch = useDispatch()

    const {activeNote} = useSelector(state => state.nts)

    const {handleSubmit, resetForm, getFieldProps, setFieldValue, touched, errors} = useFormik({
        initialValues: {
            title: activeNote?.title || '', 
            descripcion: activeNote?.descripcion || '' 
        },
        enableReinitialize: true,
        onSubmit: ({title, descripcion}) => {
            if (activeNote) {
                dispatch(startUpdateNota(title, descripcion))
                dispatch(clearSetNota())
            } else {
                dispatch(startCreateNote(title, descripcion))
            }
            resetForm({
                title: '', 
                descripcion: tinymce.activeEditor.setContent('')
            })
        },
        validationSchema: Yup.object({
            title: Yup.string()
                        .max(50, 'Debe de tener 50 caracteres o menos')
                        .min(3, 'Debe de tener 3 caracteres o más')
                        .required('Requerido'),
            descripcion: Yup.string()
                        .min(3, 'Debe de tener 3 caracteres o más')
                        .required('Requerido')
        })
    })

  return (
    <>
        <div className="mb-3" style = {{border: 'none'}}>
            <h5 className="text-white text-center mt-2">{activeNote ? 'Actualizar Nota' : 'Crear Nota'}</h5>
            <div className='d-flex justify-content-end'>
                <button onClick={() => setShow(true)} className='btn btn-outline-primary'>Ver listado de notas</button>
            </div>
            <div className="card-body">
                <form onSubmit={handleSubmit} className = 'needs-validation'>
                    <div className="row">
                        <div className="col-12">
                            <div className="row">
                                <div className="col-12 form-group">
                                    <label>Título</label>
                                    <input type="text" {...getFieldProps('title')} placeholder = 'Dios es bueno' className = 'form-control bg-transparent text-white' />
                                    {touched.name && errors.name && <span style={{color: 'red'}}>{errors.name}</span>}
                                </div>
                            </div>
                            
                            <div className = 'row'>
                                <div className="col-12">
                                    <div>
                                        <Editor
                                            initialValue={activeNote?.descripcion}
                                            name = 'descripcion'
                                            onEditorChange = {(e) => setFieldValue('descripcion', e)}
                                            content="<p>This is the initial content of the editor</p>"
                                            init={{
                                            plugins: 'autolink link image lists print preview',
                                            toolbar: 'undo redo | formatselect | fontselect | fontsizeselect ' +
                                            'bold italic backcolor | alignleft aligncenter ' +
                                            'alignright alignjustify | bullist numlist outdent indent | ' +
                                            'removeformat',
                                            content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
                                            }}
                                            // onChange={this.handleEditorChange}
                                        />
                                        {touched.descripcion && errors.descripcion && <span style={{color: 'red'}}>{errors.descripcion}</span>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button type='submit' className = 'btn btn-outline-primary form-control mt-3'>Guardar</button>
                </form>
            </div>
        </div>
    </>
  )
}
