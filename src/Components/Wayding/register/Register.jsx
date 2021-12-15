import React from 'react'
import { useForm } from '../../../hooks/useForm'
import MaskedInput from 'react-text-mask'
import './FormProfile.css'


export const Register = () => {

    const [HandledInputChange, {nombre, apellido, edad, fecha, correo, direccion, pais, ciudad, numero, contrasena, confirmar, recuerdame}] = useForm({
        nombre: '', 
        apellido: '', 
        edad: '',
        fecha: '',
        correo: '',
        usuario: '', 
        direccion: '', 
        pais: '', 
        ciudad: '', 
        numero: '',
        contrasena: '', 
        confirmar: '',
        recuerdame: ''
    })

    return (
        <>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex justify-content-center align-items-center mt-5">
                    <div style = {{border: 'none'}}>
                        <div className = 'shadow p-2 mt-2 bg-dark rounded-lg flex-column text-white'>
                            <h5 className="text-white text-center mt-2">Formulario de Registro</h5>
                            <div className="card-body">
                                <form className = 'needs-validation'>
                                    <div className="row">
                                        <div className="col form-group">
                                            <label>Nombre</label>
                                            <input name = 'nombre' type="text" onChange = {HandledInputChange} value = {nombre} placeholder = 'Juan' className = 'form-control bg-transparent text-white' />
                                        </div>

                                        <div className="col form-group">
                                            <label>Apellido</label>
                                            <input name = 'apellido' type="text" onChange = {HandledInputChange} value = {apellido} placeholder = 'Taveras' className = 'form-control bg-transparent text-white' />
                                        </div>
                                    </div>
                                    
                                    <div className="row">
                                        <div className="col form-group">
                                            <label>Edad</label>
                                            <input name = 'edad' type="text" onChange = {HandledInputChange} value = {edad} placeholder = '25' className = 'form-control bg-transparent text-white' />
                                        </div>

                                        <div className="col form-group">
                                            <label>Fecha de nacimiento</label>
                                            <input name = 'fecha' type="date" onChange = {HandledInputChange} value = {fecha} placeholder = '26/8/1996' className = 'form-control bg-transparent text-white ' />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col form-group">
                                            <label>Correo Electrónico</label>
                                            <input name = 'correo' type="text" onChange = {HandledInputChange} value = {correo} placeholder = 'Juan123@hotmail.com' className = 'form-control bg-transparent text-white ' />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col form-group">
                                            <label>Dirección</label>
                                            <input name = 'direccion' type="text" onChange = {HandledInputChange} value = {direccion} placeholder = 'Los Santos' className = 'form-control bg-transparent text-white' />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col form-group">
                                            <label>País</label>
                                            <input name = 'pais' type="text" onChange = {HandledInputChange} value = {pais} placeholder = 'República Dominicana' className = 'form-control bg-transparent text-white' />
                                        </div>

                                        <div className="col form-group">
                                            <label>Ciudad</label>
                                            <input name = 'ciudad' type="text" onChange = {HandledInputChange} value = {ciudad} placeholder = 'Bonao' className = 'form-control bg-transparent text-white' />
                                        </div>

                                        <div className="col form-group">
                                            <label cl>Numero de teléfono</label>
                                            <MaskedInput
                                                name = 'numero'
                                                value = {numero}
                                                onChange = {HandledInputChange}
                                                className = 'form-control bg-transparent text-white'
                                                placeholder = '(809)-222-3333'
                                                mask={['(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/]}
                                            />
                                        </div>
                                    </div>

                                    <div className="row">
                                        <div className="col-4">
                                            <div className="form-check">
                                                <input name = 'recuerdame' value = {recuerdame} type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                <label className="form-check-label">¿Es Nuevo creyente?</label>
                                            </div>
                                        </div>

                                        <div className="col-4">
                                            <div className="form-check">
                                                <input name = 'recuerdame' value = {recuerdame} type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                <label className="form-check-label">¿Desea hacer Discipulado?</label>
                                            </div>
                                        </div>
                                        
                                        <div className="col-4">
                                            <div className="form-check">
                                                <input name = 'recuerdame' value = {recuerdame} type="checkbox" className="form-check-input" id="exampleCheck1" />
                                                <label className="form-check-label">¿Desea seguimiento para crecer en el Señor?</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col form-group">
                                            <label>Contrasena</label>
                                            <input name = 'contrasena' type="text" onChange = {HandledInputChange} value = {contrasena} placeholder = '********' className = 'form-control bg-transparent text-white' />
                                        </div>


                                        <div className="col form-group">
                                            <label>Confirmar Contrasena</label>
                                            <input name = 'confirmar' type="text" onChange = {HandledInputChange} value = {confirmar} placeholder = '********' className = 'form-control bg-transparent text-white' />
                                        </div>
                                    </div>
                                </form>
                                <button className = 'btn btn-outline-primary form-control'>Guardar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
