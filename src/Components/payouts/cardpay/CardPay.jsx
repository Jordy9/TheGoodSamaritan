import React from 'react'
import { NavLink } from 'react-router-dom'

export const CardPay = () => {
    return (
        <>
            <div className="row">
                <div className="col-3">
                    <div class="card">
                        <h5 class="card-header bg-dark text-white">Saldo en la cuenta</h5>
                        <div class="card-body">
                            <p class="card-text text-muted" style = {{fontSize: '32px'}}><i className="bi bi-wallet-fill" style = {{color: 'black'}}> </i>100 TRX</p>
                            <NavLink to = 'Withdrawal' className = 'd-flex justify-content-center btn btn-primary text-white'>Retirar</NavLink>
                        </div>
                    </div>
                </div>

                <div className="col-5">
                    <div class="card">
                        <h5 class="card-header bg-dark text-white">Datos de su tarjeta</h5>
                        <div class="card-body">
                            <input className = 'form-control' placeholder = 'Digite el nombre de su tarjeta' /> <i className="bi bi-mastodon"></i>
                            <input type = 'number' className = 'form-control mt-2' placeholder = 'Número de tarjeta' />
                            <input className = 'form-control mt-2' placeholder = 'Fecha de expiración' />
                            <input type = 'number' className = 'form-control mt-2' placeholder = 'Código CVV' />
                            <button className = 'btn btn-primary form-control text-white mt-3'>Guardar</button>
                        </div>
                    </div>
                </div>

                <div className="col-4">
                    <div class="card">
                        <h5 class="card-header bg-dark text-white">Tarjeta vinculada</h5>
                        <div class="card-body">
                        <div className="row">
                                <div className = 'col-6'>
                                    <p className="card-text text-muted hover"><i className="bi bi-person-fill"> </i>Fecha de Creación</p>
                                    <p className="card-text text-muted hover"><i className="bi bi-activity"> </i>Última Conexión</p>
                                    <p className="card-text text-muted hover"><i className="bi bi-check-circle-fill"> </i>Plan activo</p>
                                    <p className="card-text text-muted hover"><i className="bi bi-people-fill"> </i>Patrocinador</p>
                                </div>
                                    
                                <div className = 'col-6'>
                                    <p className="card-text d-flex justify-content-end">27 de Septiembre del 2021</p>
                                    <p className="card-text d-flex justify-content-end">21 de Agosto del 2021</p>
                                    <p className="card-text d-flex justify-content-end">Si</p>
                                    <p className="card-text d-flex justify-content-end">Juancito de los palotes</p>
                                </div>
                            </div>

                            <div className="d-grid gap-2 d-md-flex justify-content-md-center">
                                <button className = 'btn btn-primary form-control text-white mt-3'>Editar</button>
                                <button className = 'btn btn-danger form-control text-white mt-3'>Eliminar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
