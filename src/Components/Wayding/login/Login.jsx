import React from 'react'
import { NavLink } from 'react-router-dom'
import './Login.css'
import wayding from '../../../heroes/Wayding.png'
import { useForm } from '../../../hooks/useForm'

export const Login = () => {

    const [HandledInputChange, {correo, contrasena}] = useForm({
        correo: '',
        contrasena: ''
    })

    return (
        <>
            <div className="container login-container">
                <div className="row mt-5">
                    <div className="col-md-6 login-form-1">
                        <h3 className = 'mt-5'>WAYDING</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, maxime magnam ad aliquam iste dolorem quisquam cumque eum. Provident voluptates rem voluptate, nostrum maiores earum blanditiis magnam neque voluptatibus? Dolore.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptatibus ipsum odit delectus vero, adipisci ducimus doloribus qui iure. Praesentium modi, esse aliquam quod fugiat hic minus consequuntur labore accusamus.</p>
                        <img src= {wayding} alt="Wayding" className = 'img-fluid mx-auto d-block' />
                    </div>

                    <div className="col-md-6 login-form-2">
                        <h3 className = 'mt-5'>Iniciar Sesión</h3>
                        <form>
                            <div className="form-group">
                                <input
                                    name = 'correo'
                                    type="email"
                                    className="form-control"
                                    placeholder="Correo/nombre de usuario"
                                    value = {correo}
                                    onChange = {HandledInputChange}
                                />
                            </div>
                            
                            <div className="form-group">
                                <input
                                    name = 'contrasena'
                                    type="password"
                                    className="form-control"
                                    placeholder="Contraseña" 
                                    value = {contrasena}
                                    onChange = {HandledInputChange}
                                />
                            </div>

                            <div className="form-group">
                                <NavLink 
                                    to = '/Dashboard'
                                    type="submit" 
                                    className="btnSubmit text-center" 
                                    style = {{textDecoration: 'none'}}
                                    >Iniciar sesión</NavLink>
                            </div>
                            <NavLink to = '/Register' style = {{border: 'none', textDecoration: 'none'}}><p className = 'text-white text-center'>¿Aun no tienes una cuenta? !REGISTRATE!</p></NavLink>
                            <NavLink to = '/' style = {{border: 'none', textDecoration: 'none'}}><p className = 'text-white text-center'>¿Olvidaste tu contrasena?</p></NavLink>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
