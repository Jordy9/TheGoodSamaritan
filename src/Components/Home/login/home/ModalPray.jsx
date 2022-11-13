import { useFormik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import { startCreatePetition } from '../../../../action/petition'
import * as Yup from 'yup'
import MaskedInput from 'react-text-mask'

export const ModalPray = () => {

    const dispatch = useDispatch()

    const {handleSubmit, resetForm, getFieldProps, touched, errors} = useFormik({
        initialValues: {
            name: '', 
            number: '', 
            descripcion: ''
        },
        enableReinitialize: true,
        onSubmit: ({name, number, descripcion}) => {
            dispatch(startCreatePetition(name, number, descripcion))
            resetForm({
                name: '', 
                number: '', 
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
                        .required('Requerido')
        })
    })

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
                                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 form-group">
                                                    <label>Nombre</label>
                                                    <input autoComplete='off' type="text" {...getFieldProps('name')} placeholder = 'Juan' className = 'form-control bg-transparent text-white' />
                                                    {touched.name && errors.name && <span style={{color: 'red'}}>{errors.name}</span>}
                                                </div>

                                                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-6 form-group">
                                                    <label>Número de teléfono</label>
                                                    <MaskedInput
                                                        {...getFieldProps('number')}
                                                        autoComplete = 'off'
                                                        className = 'form-control bg-transparent text-white'
                                                        placeholder = '(809)-222-3333)'
                                                        mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                                                    />
                                                    {touched.number && errors.number && <span style={{color: 'red'}}>{errors.number}</span>}
                                                </div>
                                            </div>
                                                
                                            <div className="row">
                                                <div className="col-12 form-group">
                                                    <label>Descripción</label>
                                                    <textarea style = {{resize: 'none'}} type="text" rows = '5' {...getFieldProps('descripcion')} placeholder = 'Tu descripción aqui' className = 'form-control bg-transparent text-white' />
                                                    {touched.descripcion && errors.descripcion && <span style={{color: 'red'}}>{errors.descripcion}</span>}
                                                </div>
                                            </div>
                    
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
