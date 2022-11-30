import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { startDeletePetition, startUpdatePetition } from '../../../action/petition'
import { useFormik } from 'formik';
import * as Yup from 'yup'
import Swal from 'sweetalert2';

export const PetitionModalUser = () => {

    const {activePetitionsUser} = useSelector(state => state.pt)

    const {activeUser} = useSelector(state => state.auth)

    const dispatch = useDispatch()

    const [showDescripcion, setShowDescripcion] = useState((activePetitionsUser.name === 'Anónimo') ? false : true)

    const [showAnonimo, setShowAnonimo] = useState((activePetitionsUser.role === 'Anónimo') ? false : true)

    const {handleSubmit, getFieldProps, touched, errors} = useFormik({
        initialValues: {
            name: activeUser?.name,
            title: activePetitionsUser?.title, 
            descripcion: activePetitionsUser?.descripcion,
        },
        enableReinitialize: true,
        onSubmit: ({name, title, descripcion}) => {

            let id = activeUser?.id
            let role = activeUser?.role
            if (showAnonimo) {
                name = 'Anónimo'
                role = 'Anónimo'
            }
            dispatch(startUpdatePetition(name, title, descripcion, id, role))
        },
        validationSchema: Yup.object({
            title: Yup.string()
                        .max(100, 'Debe de tener 100 caracteres o menos')
                        .min(3, 'Debe de tener 3 caracteres o más')
                        .required('Requerido'),
            descripcion: Yup.string()
                        .min(3, 'Debe de tener 3 caracteres o más')
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

                                            <div className="col-12">
                                                <div className="form-group">
                                                    <label>Motivo de oración</label>
                                                    <input type="text" className = 'form-control bg-transparent text-white' {...getFieldProps('title')} />
                                                    {touched.title && errors.title && <span style={{color: 'red'}}>{errors.title}</span>}
                                                </div>
                                            </div>
                                        </div>

                                        <div className = 'row'>
                                           <div className = 'col-12 form-group'>
                                              <h4>¿Te gustaria dar más detalle sobre tu petición de oración?</h4>
                                                <div style={{display: 'flex'}}>
                                                    <div className="form-check mr-4">
                                                        <input defaultChecked = {(showDescripcion)} onClick={() => setShowDescripcion(true)} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" value="option1" />
                                                        <label className="form-check-label">Si</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input defaultChecked = {(!showDescripcion)} onClick={() => setShowDescripcion(false)} className="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" value="option2" />
                                                        <label className="form-check-label">No</label>
                                                    </div>
                                                </div>
                                           </div>
                                        </div>

                                        <div className = 'row'>
                                           <div className = 'col-12 form-group'>
                                              <h4>¿Pedir oración de forma anónima?</h4>
                                                <div style={{display: 'flex'}}>
                                                    <div className="form-check mr-4">
                                                        <input defaultChecked = {(showAnonimo)} onClick={() => setShowAnonimo(true)} className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault3" value="option3" />
                                                        <label className="form-check-label">Si</label>
                                                    </div>
                                                    <div className="form-check">
                                                        <input defaultChecked = {(!showAnonimo)} onClick={() => setShowAnonimo(false)} className="form-check-input" type="radio" name="flexRadioDefault2" id="flexRadioDefault4" value="option4" />
                                                        <label className="form-check-label">No</label>
                                                    </div>
                                                </div>
                                           </div>
                                        </div>

                                        {
                                            (showDescripcion)
                                                &&
                                            <div className = 'row'>
                                                <div className="col-12">
                                                    <div>
                                                    <textarea style = {{resize: 'none'}} rows = '5' className = 'form-control bg-transparent text-white' {...getFieldProps('descripcion')} />
                                                        {touched.descripcion && errors.descripcion && <span style={{color: 'red'}}>{errors.descripcion}</span>}
                                                    </div>
                                                </div>
                                            </div>
                                        }

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
