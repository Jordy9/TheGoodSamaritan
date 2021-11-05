import React from 'react'
import wayding from '../../../heroes/dc-arrow.jpg'

export const CardsSubscription = () => {
    return (
        <>
            <div className="row">
                <div className="col-4">
                    <div className = 'shadow d-flex justify-content-center align-items-center p-4 my-2 bg-dark rounded-lg flex-column'>

                        <div className="price">
                            <div className="row">
                                <div className="col" style = {{fontSize: '20px'}}>
                                    <span>$</span>
                                </div>

                                    <div className="col">
                                    <h1 style = {{fontSize: '70px'}}>9</h1>
                                    </div>

                                <div className="col mt-4">
                                    <span style = {{fontSize: '35px'}}>/mes</span>
                                </div>
                            </div>
                        </div>

                        <div className="person-img">
                            <img src = {wayding} className="img-fluid rounded-circle" alt="..." style = {{height: '350px', width: '300px'}} />
                        </div>

                        <div className="person-name my-3">
                            <h5 className = 'text-white text-center'>Acceso solo a las recompensas de este paquete</h5>
                        </div>

                        <div className="my-3">
                            <h6 className = 'text-white'>Subscripción Normal</h6>
                        </div>

                        <div className="info my-3">
                            <h6 className = 'text-white'>Duración: 30 dias</h6>
                        </div>
                        
                        <button type = 'submit' className = 'my-1 btn btn-secondary btn-lg btn-block'>Subscribirme</button>
                    </div>  
                </div>

                <div className="col-4">
                    <div className = 'shadow d-flex justify-content-center align-items-center p-4 my-2 bg-dark rounded-lg flex-column'>

                        <div className="price">
                            <div className="row">
                                <div className="col" style = {{fontSize: '20px'}}>
                                    <span>$</span>
                                </div>

                                    <div className="col">
                                    <h1 style = {{fontSize: '70px'}}>18</h1>
                                    </div>

                                <div className="col mt-4">
                                    <span style = {{fontSize: '35px'}}>/mes</span>
                                </div>
                            </div>
                        </div>

                        <div className="person-img">
                            <img src = {wayding} className="img-fluid rounded-circle" alt="..." style = {{height: '350px', width: '300px'}} />
                        </div>

                        <div className="person-name my-3">
                            <h5 className = 'text-white text-center'>Acceso solo a las recompensas de este paquete</h5>
                        </div>

                        <div className="my-3">
                            <h6 className = 'text-white'>Subscripción Premium</h6>
                        </div>

                        <div className="info my-3">
                            <h6 className = 'text-white'>Duración: 30 dias</h6>
                        </div>
                        
                        <button type = 'submit' className = 'my-1 btn btn-secondary btn-lg btn-block'>Subscribirme</button>
                    </div>  
                </div>

                <div className="col-4">
                    <div className = 'shadow d-flex justify-content-center align-items-center p-4 my-2 bg-dark rounded-lg flex-column'>

                        <div className="price">
                            <div className="row">
                                <div className="col" style = {{fontSize: '20px'}}>
                                    <span>$</span>
                                </div>

                                    <div className="col">
                                    <h1 style = {{fontSize: '70px'}}>36</h1>
                                    </div>

                                <div className="col mt-4">
                                    <span style = {{fontSize: '35px'}}>/mes</span>
                                </div>
                            </div>
                        </div>

                        <div className="person-img">
                            <img src = {wayding} className="img-fluid rounded-circle" alt="..." style = {{height: '350px', width: '300px'}} />
                        </div>

                        <div className="person-name my-3">
                            <h5 className = 'text-white text-center'>Acceso a todas las recompensas de todos los paquetes</h5>
                        </div>

                        <div className="my-3">
                            <h6 className = 'text-white'>Subscripción Elite</h6>
                        </div>

                        <div className="info my-3">
                            <h6 className = 'text-white'>Duración: 30 dias</h6>
                        </div>
                        
                        <button type = 'submit' className = 'my-1 btn btn-secondary btn-lg btn-block'>Subscribirme</button>
                    </div>  
                </div>
            </div>
        </>
    )
}
