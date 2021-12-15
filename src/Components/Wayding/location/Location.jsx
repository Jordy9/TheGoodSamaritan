import React from 'react'
import Domingos from '../../../heroes/Domingo.jpeg'


export const Location = () => {

    const redirect = () => {
        window.open('https://www.google.es/maps/place/Centro+Cristiano+El+Buen+Samaritano+Inc./@18.9440073,-70.4099232,17z/data=!4m5!3m4!1s0x8eafdf6b2a7c9287:0x6e2367cc556b399b!8m2!3d18.9440507!4d-70.4078234?hl=es')
    }

    return (
            <div className = 'container'>
                <div className = 'shadow p-4 my-2 bg-dark rounded-lg flex-column my-5'>
                    <div className="row">
                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6 d-flex justify-content-center align-items-center">
                            <div onClick = {redirect} style = {{color: 'white', textDecoration: 'none', cursor: 'pointer'}} className = 'text-center'>
                                <i className="bi bi-geo-alt-fill" style = {{fontSize: '100px'}}></i>
                                <h2 style = {{fontSize: '50px'}}>República Dominicana</h2>
                                <p style = {{fontSize: '20px'}}>Padre Fantino, Bonao 42000</p>
                            </div>
                        </div>

                        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6 col-xl-6">
                            <img src={Domingos} className="d-block w-100 rounded" alt="..." />
                        </div>
                    </div>
                </div>
            </div>
    )
}
