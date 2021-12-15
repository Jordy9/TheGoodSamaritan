import React from 'react'
import { NavLink } from 'react-router-dom'
import { useForm } from '../../../hooks/useForm'

export const LoginScreen = () => {
    const [HandledInputChange, {correo, contrasena, recuerdame}] = useForm({
        correo: '',
        contrasena: '', 
        recuerdame: '', 
    })

    console.log(recuerdame)

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-12 my-5 d-flex justify-content-center">
                        <div className = 'shadow p-2 mt-2 bg-dark rounded-lg flex-column text-white' style = {{width: '400px', height: '525px'}}>
                            <h4 className = 'text-center my-4'>Login</h4>
                            <div className="container card-body">
                                <form className = 'my-4'>
                                    <div className="row">

                                        <div className="col form-group">
                                            <label>Correo electrónico</label>
                                            <input name = 'correo' type="text" onChange = {HandledInputChange} value = {correo} placeholder = 'Juan@hotmail.com' className = 'form-control bg-transparent text-white' />
                                        </div>

                                    </div>

                                    <div className="row">

                                        <div className="col form-group">
                                            <label>Contraseña</label>
                                            <input name = 'contrasena' type="password" onChange = {HandledInputChange} value = {contrasena} placeholder = '********' className = 'form-control bg-transparent text-white' />
                                        </div>

                                    </div>

                                    <div className="form-check">
                                        <input name = 'recuerdame' value = {recuerdame} type="checkbox" className="form-check-input" id="exampleCheck1" />
                                        <label className="form-check-label">Recuerdame</label>
                                    </div>
                                </form>
                                <NavLink to = '/Dashboard' className = 'btn btn-outline-primary form-control' style = {{borderRadius: '50px'}}>Iniciar sesión</NavLink>

                                <div className = 'text-center my-4'>
                                    <NavLink to = '/Register' style = {{borderRadius: '50px', textDecoration: 'none'}}>¿Aun no tienes una cuenta? Registrate</NavLink>
                                </div>
                                
                                <div className = 'text-center'>
                                    <NavLink to = '/Home' style = {{borderRadius: '50px', textDecoration: 'none'}}>¿Olvidaste tu contraseña?</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    )
}
