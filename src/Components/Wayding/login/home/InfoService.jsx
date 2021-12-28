import React from 'react'
import { NavLink } from 'react-router-dom'
import './home.css'

export const InfoService = () => {
    return (
        <div className = 'bg-dark d-flex justify-content-center align-items-center my-5'>
            <div className="container">
                <div className="row">
                    <div className="col-xs-2 col-sm-6 col-md-6 col-lg-3 col-xl-3 p-4 hom" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="fas fa-pray d-flex justify-content-center" style = {{fontSize: '32px'}}></i>
                        <h4 className = 'text-center'>¿Deseas oración?</h4>
                    </div>

                    <NavLink className="col-xs-2 col-sm-6 col-md-6 col-lg-3 col-xl-3 p-4 hom"  to = '/schedule' style = {{textDecoration: 'none', color: '#FFFFFF'}}>
                        <i className="fas fa-calendar-alt d-flex justify-content-center" style = {{fontSize: '32px'}}></i>
                        <h4 className = 'text-center'>Nuestro horario de servicio</h4>
                    </NavLink>

                    <NavLink className="col-xs-2 col-sm-6 col-md-6 col-lg-3 col-xl-3 p-4 hom"  to = '/Messages' style = {{textDecoration: 'none', color: '#FFFFFF'}}>
                        <i className="bi bi-cast d-flex justify-content-center" style = {{fontSize: '32px'}}></i>
                        <h4 className = 'text-center'>Transmisión en vivo de nuestro canal</h4>
                    </NavLink>

                    <NavLink className="col-xs-2 col-sm-6 col-md-6 col-lg-3 col-xl-3 p-4 hom" to = '/Capsule' style = {{textDecoration: 'none', color: '#FFFFFF'}}>
                        <i className="bi bi-chat-square-text d-flex justify-content-center" style = {{fontSize: '32px'}}></i>
                        <h4 className = 'text-center'>Lea nuestra cápsula del día</h4>
                    </NavLink>
                </div>
            </div>
        </div>
    )
}
