import { useFormik } from 'formik'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { startCreatePetition } from '../../../../action/petition'
import * as Yup from 'yup'

export const ModalPray = () => {

    const dispatch = useDispatch()

    const {handleSubmit, resetForm, getFieldProps, touched, errors} = useFormik({
        initialValues: {
            title: '', 
            descripcion: '',
            role: 'Anónimo',
            id: 'Anónimo'
        },
        enableReinitialize: true,
        onSubmit: ({name, title, descripcion, role, id}) => {
            dispatch(startCreatePetition(name, title, descripcion, id, role))
                resetForm({
                    title: '', 
                    descripcion: ''
                })
        },
        validationSchema: Yup.object({
            name: Yup.string()
                        .max(50, 'Debe de tener 50 caracteres o menos')
                        .min(3, 'Debe de tener 3 caracteres o más')
                        .required('Requerido'),
            // number: Yup.string()
            //             .min(10, 'Debe de tener 10 caracteres')
            //             .required('Requerido'),
            descripcion: Yup.string()
                        .min(3, 'Debe de tener 3 caracteres o más')
        })
    })

    const [showDescripcion, setShowDescripcion] = useState(false)

    return (
        <>
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content shadow bg-dark">
                        <div className="modal-header" style = {{border: 'none'}}>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                    <div className="modal-body">
                        <div className="row">
                            <div className="col-12">
                                <div className="mb-3" style = {{border: 'none'}}>
                                    <h5 className="text-white text-center mt-2">Petición de oración</h5>
                                    <div className="card-body">
                                        <form onSubmit={handleSubmit} className = 'needs-validation'>
                                            <div className="row">
                                                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 form-group">
                                                    <label>Motivo de oración</label>
                                                    <input autoComplete='off' type="text" {...getFieldProps('title')} placeholder = 'Oración por fortaleza' className = 'form-control bg-transparent text-white' />
                                                    {touched.title && errors.title && <span style={{color: 'red'}}>{errors.title}</span>}
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

                                            {
                                                (showDescripcion)
                                                    &&
                                                <div className="row">
                                                    <div className="col-12 form-group">
                                                        <label>Descripción</label>
                                                        <textarea style = {{resize: 'none'}} type="text" rows = '5' {...getFieldProps('descripcion')} placeholder = 'Tu descripción aqui' className = 'form-control bg-transparent text-white' />
                                                        {touched.descripcion && errors.descripcion && <span style={{color: 'red'}}>{errors.descripcion}</span>}
                                                    </div>
                                                </div>
                                            }

                                            <button type='submit' className = 'btn btn-outline-primary form-control'>Enviar</button>
                                        </form>
                                    </div>
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
