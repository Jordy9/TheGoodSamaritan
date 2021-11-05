import React from 'react'
import { useForm } from '../../../hooks/useForm'

export const Conctact = () => {
    const [HandledInputChange, {nombre, correo, descripcion}] = useForm({
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
         <h5 className="text-white text-center">Formulario de contacto</h5>
            <div className="container">
                <div className="row">
                    <div className="col-8 my-5">
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
                                                <label>Correo Electrónico</label>
                                                <input name = 'correo' type="text" onChange = {HandledInputChange} value = {correo} placeholder = 'Juan123@hotmail.com' className = 'form-control bg-transparent text-white ' />
                                            </div>
                                        </div>
                                        
                                        <div className="row">
                                            <div className="col form-group">
                                                <label>Descripción</label>
                                                <textarea style = {{resize: 'none'}} name = 'descripcion' type="text" rows = '5' onChange = {HandledInputChange} value = {descripcion} placeholder = 'Tu descripción aqui' className = 'form-control bg-transparent text-white' />
                                            </div>
                                        </div>
                                    </form>
                                    <button className = 'btn btn-outline-primary form-control' style = {{borderRadius: '50px'}}>Enviar</button>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-4 d-flex justify-content-center align-items-center my-5">
                        <div className="row">
                            <div className="col-3">
                                <i className="bi bi-telephone" style = {{fontSize: '32px'}}></i>
                            </div>

                            <div className="col-9">
                                <p>Nuestro numero de telefono es: 809-000-1111</p>
                            </div>

                            <div className="col-3">
                                <i className="bi bi-geo-alt" style = {{fontSize: '32px'}}></i>
                            </div>

                            <div className="col-9">
                                <p>Republica dominicana La vega 41000</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    )
}
