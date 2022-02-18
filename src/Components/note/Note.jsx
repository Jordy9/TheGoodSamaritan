import React from 'react'
import { useFormik } from 'formik'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { clearSetNota, setDeleteNota, setNota, startCreateNote, startUpdateNota } from '../../action/notas'
import { useSelector } from 'react-redux'
import Swal from 'sweetalert2'

export const Note = () => {

    const dispatch = useDispatch()

    const {notes, activeNote} = useSelector(state => state.nts)

    const handledEdit = (nota) => {
        dispatch(setNota(nota))
    }

    const handledDelete = (nota) => {
        Swal.fire({
            title: '¿Está seguro que desea eliminar esta nota?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Eliminar'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(setDeleteNota(nota))
            }
          })
    }

    const {handleSubmit, resetForm, getFieldProps, touched, errors} = useFormik({
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
                descripcion: ''
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
        <div className="modal fade" id="exampleModalNota" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content shadow bg-dark">
                    <div className="modal-header" style = {{border: 'none'}}>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                <div className="modal-body">
                    <div className="mb-3" style = {{border: 'none'}}>
                        <h5 className="text-white text-center mt-2">{activeNote ? 'Actualizar Nota' : 'Crear Nota'}</h5>
                        <div className="card-body">
                            <form onSubmit={handleSubmit} className = 'needs-validation'>
                                <div className="row">
                                    <div className="col-6">
                                        <div className="row">
                                            <div className="col-12 form-group">
                                                <label>Título</label>
                                                <input type="text" {...getFieldProps('title')} placeholder = 'Dios es bueno' className = 'form-control bg-transparent text-white' />
                                                {touched.name && errors.name && <span style={{color: 'red'}}>{errors.name}</span>}
                                            </div>
                                        </div>
                                        
                                        <div className="row">
                                            <div className="col-12 form-group">
                                                <label>Descripción</label>
                                                <textarea style = {{resize: 'none'}} type="text" rows = '5' {...getFieldProps('descripcion')} placeholder = 'Tu descripción aqui' className = 'form-control bg-transparent text-white' />
                                                {touched.descripcion && errors.descripcion && <span style={{color: 'red'}}>{errors.descripcion}</span>}
                                            </div>
                                        </div>
                                    </div>

                                    <div style={{overflowY: 'auto', height: '250px'}} className="col-6">
                                        <div className="row">
                                            <div className="col-12 form-group">
                                                <h5 className="text-white text-center mt-2">Listado de Notas</h5>
                                            </div>
                                        </div>

                                        <div className="row">
                                            <div className="col-12 form-group">
                                                {
                                                    notes?.map(notes => {
                                                        return (
                                                            <div key={notes._id}>
                                                                <div className='shadow text-center p-4 flex-column'>{notes?.title}</div>
                                                                <div className='row'>
                                                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                                                        <button type='button' onClick={() => handledEdit(notes)} className='btn btn-outline-primary form-control my-3'>Ver/Editar</button>
                                                                    </div>

                                                                    <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                                                                        <button type='button' onClick={() => handledDelete(notes)} className='btn btn-outline-danger form-control my-3'>Eliminar</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        )
                                                    })
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <button type='submit' className = 'btn btn-outline-primary form-control'>Guardar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}
