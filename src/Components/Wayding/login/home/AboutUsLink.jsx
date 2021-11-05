import React from 'react'
import { NavLink } from 'react-router-dom'

export const AboutUsLink = () => {
    return (
        <div>
            <div className = 'd-flex justify-content-center align-items-center my-5' style = {{height: '200px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <h4>Aprende sobre nosotros, nuestra historia y por que fundamos Wayding</h4>
                        </div>

                        <div className="col-6">
                            <div className = 'd-flex justify-Content-center'>
                                <button className = 'btn btn-outline-primary form-control' style = {{borderRadius: '50px'}} type="text"><NavLink to = '/AboutUs' style = {{textDecoration: 'none'}}>Sobre Nosotros</NavLink></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
