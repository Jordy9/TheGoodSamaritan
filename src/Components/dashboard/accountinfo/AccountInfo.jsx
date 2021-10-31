import React from 'react';
import { Ticker } from 'react-tradingview-embed'
import './AccountInfo.css'



export const AccountInfo = () => {
    return (
        <>
            <div className = 'row'>
                <div className = 'col-5 mt-3 style-size'>
                    <div className="card border-dark text-dark bg-light mb-3" style = {{boxShadow: '0px 0px 3px 0px'}}>
                        <div className="card-header bg-dark"><strong style = {{color: 'white'}}><i className="bi bi-person-badge-fill"> </i>Estado de la cuenta {`activo, inactivo`}</strong></div>
                        <div className="card-body">
                            <div className="row">
                                <div className = 'col-6'>
                                    <p className="card-text text-muted hover"><i className="bi bi-person-fill date"> </i>Fecha de Creación</p>
                                    <p className="card-text text-muted hover"><i className="bi bi-activity conection"> </i>Última Conexión</p>
                                    <p className="card-text text-muted hover"><i className="bi bi-check-circle-fill active"> </i>Plan activo</p>
                                    <p className="card-text text-muted hover"><i className="bi bi-people-fill sponsor"> </i>Patrocinador</p>
                                </div>
                                    
                                <div className = 'col-6'>
                                    <p className="card-text d-flex justify-content-end">27 de Septiembre del 2021</p>
                                    <p className="card-text d-flex justify-content-end">21 de Agosto del 2021</p>
                                    <p className="card-text d-flex justify-content-end">Si</p>
                                    <p className="card-text d-flex justify-content-end">Juancito de los palotes</p>
                                </div>
                            </div>
                        </div>        
                    </div>
                </div>

                <div className="col-7 mt-3">
                    <div className="card text-dark bg-light mb-3" style = {{boxShadow: '0px 0px 3px 0px', height: '218.5px'}}>
                        <div className="card-body">
                            <Ticker widgetPropsAny={{"newProp": true, 'width': 710, 'height': '185'}} />
                        </div>        
                    </div>
                </div>
            </div>
        </>
    )
}
