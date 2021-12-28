import { useFormik } from 'formik'
import React from 'react'
import { useDispatch } from 'react-redux'
import * as Yup from 'yup'
import { startCreateContact } from '../../../action/contact'

export const Conctact = () => {

    const dispatch = useDispatch()

    const {handleSubmit, resetForm, getFieldProps, touched, errors} = useFormik({
        initialValues: {
            name: '', 
            email: '', 
            descripcion: ''
        },
        enableReinitialize: true,
        onSubmit: ({name, email, descripcion}) => {
            dispatch(startCreateContact(name, email, descripcion))
            resetForm({
                name: '', 
                email: '', 
                descripcion: ''
            })
        },
        validationSchema: Yup.object({
            name: Yup.string()
                        .max(50, 'Debe de tener 50 caracteres o menos')
                        .min(3, 'Debe de tener 3 caracteres o más')
                        .required('Requerido'),
            email: Yup.string()
                        .email('Debe ser un email valido')
                        .required('Requerido'),
            descripcion: Yup.string()
                        .min(3, 'Debe de tener 3 caracteres o más')
                        .required('Requerido')
        })
    })
    return (
        <>
         <h5 className="text-white text-center my-5">Formulario de contacto</h5>
            <div className="container">
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-7 col-lg-8 col-xl-8">
                        <div className="mb-3" style = {{border: 'none'}}>
                            <div className = 'text-white'>
                                <div className="card-body">
                                    <form onSubmit={handleSubmit} className = 'needs-validation'>
                                        <div className="row">
                                            <div className="col form-group">
                                                <label>Nombre</label>
                                                <input type="text" {...getFieldProps('name')} placeholder = 'Juan' className = 'form-control bg-transparent text-white' />
                                                {touched.name && errors.name && <span style={{color: 'red'}}>{errors.name}</span>}
                                            </div>

                                            <div className="col form-group">
                                                <label>Correo electrónico</label>
                                                <input type="text" {...getFieldProps('email')} placeholder='Juan@gmail.com' className='form-control bg-transparent text-white'/>
                                                {touched.email && errors.email && <span style={{color: 'red'}}>{errors.email}</span>}
                                            </div>
                                        </div>
                                        
                                        <div className="row">
                                            <div className="col form-group">
                                                <label>Descripción</label>
                                                <textarea style = {{resize: 'none'}} type="text" rows = '5' {...getFieldProps('descripcion')} placeholder = 'Tu descripción aqui' className = 'form-control bg-transparent text-white' />
                                                {touched.descripcion && errors.descripcion && <span style={{color: 'red'}}>{errors.descripcion}</span>}
                                            </div>
                                        </div>
                                        <button type='submit' className = 'btn btn-outline-primary form-control' style = {{borderRadius: '50px'}}>Enviar</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-5 col-lg-4 col-xl-4 d-flex justify-content-center align-items-center my-5">
                        <div className="row">
                            <div className="col-3">
                                <i className="bi bi-telephone" style = {{fontSize: '32px'}}></i>
                            </div>

                            <div className="col-9">
                                <p>Nuestro numero de telefono es: 809-296-1771</p>
                            </div>

                            <div className="col-3">
                                <i className="bi bi-geo-alt" style = {{fontSize: '32px'}}></i>
                            </div>

                            <div className="col-9">
                                <p>Republica dominicana, Padre Fantino, Bonao 42000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    )
}
