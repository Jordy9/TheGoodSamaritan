import React from 'react'
import { NavLink } from 'react-router-dom'

export const AboutUsLink = () => {
    return (
        <div>
            <div className = 'd-flex justify-content-center align-items-center my-5' style = {{height: '200px'}}>
                <div className="container">
                    <div className="row">
                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            <h4 className = 'text-center'>Conoce al Señor junto con nosotros, ven y registrate</h4>
                        </div>

                        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xl-6">
                            <div className = 'd-flex justify-Content-center'>
                                <NavLink  to = '/Register' style = {{textDecoration: 'none', borderRadius: '100px'}} className = 'btn btn-outline-primary form-control'>Conozcamoslo</NavLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
