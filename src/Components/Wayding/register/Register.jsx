import React from 'react'
import { NavLink } from 'react-router-dom'
import './Register.css'
import wayding from '../../../heroes/Wayding.png'
import { useForm } from '../../../hooks/useForm'


export const Register = () => {

    const [HandledInputChange, {nombre, apellido, fecha, usuario, correo, contrasena, confirmar}] = useForm({
        nombre: '',
        apellido: '',
        fecha: '',
        usuario: '',
        correo: '',
        contrasena: '',
        confirmar: '',
    })

    return (
        <>
            <div className="container Register-container">
                <div className="row">
                    <div className="col-md-6 Register-Formulario-1">
                        <h3 className = 'mt-1'>WAYDING</h3>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus, maxime magnam ad aliquam iste dolorem quisquam cumque eum. Provident voluptates rem voluptate, nostrum maiores earum blanditiis magnam neque voluptatibus? Dolore.</p>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores voluptatibus ipsum odit delectus vero, adipisci ducimus doloribus qui iure. Praesentium modi, esse aliquam quod fugiat hic minus consequuntur labore accusamus.</p>
                        <img src= {wayding} alt="Wayding" className = 'img-fluid mx-auto d-block' />
                    </div>

                    <div className="col-md-6 Register-Formulario-2">
                        <h3 className = 'mt-1'>Registro</h3>
                        <form>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label className = 'text-white'>Nombre</label>
                                        <input
                                            name = 'nombre'
                                            type="text"
                                            className="form-control"
                                            placeholder="Juan"
                                            value = {nombre}
                                            onChange = {HandledInputChange}
                                        />
                                    </div>

                                </div>

                                <div className="col">
                                    <div className="form-group">
                                        <label className = 'text-white'>Apellido</label>
                                        <input
                                            name = 'apellido'
                                            type="text"
                                            className="form-control"
                                            placeholder="Taveras"
                                            value = {apellido}
                                            onChange = {HandledInputChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label className = 'text-white'>Fecha de nacimiento</label>
                                        <input
                                            name = 'fecha'
                                            type="date"
                                            className="form-control"
                                            value = {fecha}
                                            onChange = {HandledInputChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label className = 'text-white'>Nombre de usuario</label>
                                        <input
                                            name = 'usuario'
                                            type="text"
                                            className="form-control"
                                            placeholder="Juan123"
                                            value = {usuario}
                                            onChange = {HandledInputChange}
                                        />
                                    </div>

                                </div>

                                <div className="col">
                                    <div className="form-group">
                                        <label className = 'text-white'>Correo electrónico</label>
                                        <input
                                            name = 'correo'
                                            type="email"
                                            className="form-control"
                                            placeholder="Juan123@hotmail.com"
                                            value = {correo}
                                            onChange = {HandledInputChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <label className = 'text-white'>Contraseña</label>
                                        <input
                                            name = 'contrasena'
                                            type="password"
                                            className="form-control"
                                            placeholder="********"
                                            value = {contrasena}
                                            onChange = {HandledInputChange}
                                        />
                                    </div>

                                </div>

                                <div className="col">
                                    <div className="form-group">
                                        <label className = 'text-white'>Confirmar contraseña</label>
                                        <input
                                            name = 'confirmar'
                                            type="password"
                                            className="form-control"
                                            placeholder="********"
                                            value = {confirmar}
                                            onChange = {HandledInputChange}
                                        />
                                    </div>
                                </div>
                            </div>

                            <div className="form-group">
                                <NavLink 
                                    to = '/Dashboard'
                                    type="submit" 
                                    className="btnSubmit mt-3 text-center"
                                    style = {{textDecoration: 'none'}} 
                                    >Crear cuenta</NavLink>
                            </div>
                            <NavLink to = '/Login' style = {{border: 'none', textDecoration: 'none'}}><p className = 'text-white text-center'>¿Ya tienes una cuenta? !INICIA SESIÓN!</p></NavLink>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
