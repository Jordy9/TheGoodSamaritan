import React from 'react'
import './home.css'

export const InfoService = () => {
    return (
        <div className = 'bg-dark d-flex justify-content-center align-items-center my-5' style = {{height: '200px'}}>
            <div className="container">
                <div className="row">
                    <div className="col-3 hom">
                        <i className="bi bi-globe d-flex justify-content-center" style = {{fontSize: '32px'}}></i>
                        <h4>Disponible en todo el mundo</h4>
                    </div>

                    <div className="col-3 hom">
                        <i className="bi bi-bank2 d-flex justify-content-center" style = {{fontSize: '32px'}}></i>
                        <h4>Transacciones Rapidas y sin comisiones</h4>
                    </div>

                    <div className="col-3 hom">
                        <i className="bi bi-cash-stack d-flex justify-content-center" style = {{fontSize: '32px'}}></i>
                        <h4>Eficiencia con nuestro trabajo</h4>
                    </div>

                    <div className="col-3 hom">
                        <i className="bi bi-currency-dollar d-flex justify-content-center" style = {{fontSize: '32px'}}></i>
                        <h4>La mejor plataforma de inversion</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
