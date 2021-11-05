import React from 'react'
import MaskedInput from 'react-text-mask'
import { useForm } from '../../../../hooks/useForm'
import { Info } from './Info'

export const Form = () => {
    const [HandledInputChange, {nombre, apellido, edad, fecha, correo, usuario, direccion, pais, ciudad, numero, contrasena, confirmar}] = useForm({
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
        confirmar: ''
    })
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-5 my-5">
                        <div className="mb-3" style = {{border: 'none'}}>
                            <div className = 'text-white'>
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

                                            <div className="col form-group">
                                                <label>Nombre de usuario</label>
                                                <input name = 'usuario' type="text" onChange = {HandledInputChange} value = {usuario} placeholder = 'Juan123' className = 'form-control bg-transparent text-white' />
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
                                                <label>Numero de teléfono</label>
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
                                    <button className = 'btn btn-outline-primary form-control' style = {{borderRadius: '50px'}}>Comencemos</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-7 d-flex justify-content-center align-items-center">
                        <Info />
                    </div>
                </div>
            </div>   
        </>
    )
}
