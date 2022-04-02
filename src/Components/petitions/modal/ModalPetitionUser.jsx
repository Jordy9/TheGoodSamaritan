import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startDeletePetition, startUpdatePetition } from '../../../action/petition'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Swal from 'sweetalert2';

export const PetitionModalUser = () => {

    const {activePetitionsUser} = useSelector(state => state.pt)

    const dispatch = useDispatch()

    const {handleSubmit, getFieldProps, touched, errors} = useFormik({
        initialValues: {
            name: activePetitionsUser?.name, 
            title: activePetitionsUser?.title, 
            descripcion: activePetitionsUser?.descripcion,
        },
        enableReinitialize: true,
        onSubmit: ({name, title, descripcion}) => {
            dispatch(startUpdatePetition(name, title, descripcion))
        },
        validationSchema: Yup.object({
            name: Yup.string()
                        .max(50, 'Debe de tener 50 caracteres o menos')
                        .min(3, 'Debe de tener 3 caracteres o más')
                        .required('Requerido'),
            title: Yup.string()
                        .max(100, 'Debe de tener 100 caracteres o menos')
                        .min(3, 'Debe de tener 3 caracteres o más')
                        .required('Requerido'),
            descripcion: Yup.string()
                        .min(3, 'Debe de tener 3 caracteres o más')
                        .required('Requerido')
        })
    })

    const handledDelete = () => {
        Swal.fire({
            title: '¿Está seguro que desea eliminar esta petición?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Eliminar'
          }).then((result) => {
            if (result.isConfirmed) {
              dispatch(startDeletePetition())
            }
          })
    }

    return (
        <>
            <div className="modal fade" id="exampleModal10" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content shadow bg-dark">
                        <div className="modal-header" style = {{border: 'none'}}>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    <div className="modal-body">
                        <div className="col-12">
                            <div className="mb-3" style = {{border: 'none'}}>
                                <h5 className="text-white text-center mt-2">Editar Petición</h5>
                                <div className="card-body">
                                    <form onSubmit = {handleSubmit}>
                                        <div className = 'row'>
                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label>Nombre</label>
                                                    <input type="text" className = 'form-control bg-transparent text-white' {...getFieldProps('name')} />
                                                    {touched.title && errors.title && <span style={{color: 'red'}}>{errors.title}</span>}
                                                </div>
                                            </div>

                                            <div className="col-6">
                                                <div className="form-group">
                                                    <label>Propósito</label>
                                                    <input type="text" className = 'form-control bg-transparent text-white' {...getFieldProps('title')} />
                                                    {touched.title && errors.title && <span style={{color: 'red'}}>{errors.title}</span>}
                                                </div>
                                            </div>
                                        </div>

                                        <div className = 'row'>
                                            <div className="col-12">
                                                <div>
                                                <textarea style = {{resize: 'none'}} rows = '5' className = 'form-control bg-transparent text-white' {...getFieldProps('descripcion')} />
                                                    {touched.descripcion && errors.descripcion && <span style={{color: 'red'}}>{errors.descripcion}</span>}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col">
                                                <button type='submit' className = 'btn btn-outline-primary form-control my-3'>Guardar</button>
                                            </div>
                                            
                                            <div className="col">
                                                <button type='button' onClick={handledDelete} className = 'btn btn-outline-danger form-control my-3' data-bs-dismiss="modal">Eliminar</button>
                                            </div>
                                        </div>
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
