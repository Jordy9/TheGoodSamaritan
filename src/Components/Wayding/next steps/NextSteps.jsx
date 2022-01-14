import React from 'react'
import imagen7 from '../../../heroes/Zoom2.jpg'
import Domingo from '../../../heroes/Domingo.jpeg'
import { NavLink } from 'react-router-dom'

export const NextSteps = () => {
    return (
        <>

            <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <img src={imagen7} style = {{width: '100%', height: '100%'}} className = 'rounded' alt = 'imagen' />
                </div>
            </div>
            <div className = 'shadow p-4 my-4 bg-dark rounded-lg flex-column'>
                <table class="table table-dark table-borderless responsive">
                    <thead>
                        <tr>
                            <th><h5>Lunes: Oración Congregacional</h5></th>
                            <th><h5>Martes: Discipulado  De Nuevos Creyentes</h5></th>
                            <th><h5>Jueves: Estudio Bíblico</h5></th>
                            <th><h5>Sábado: Matutino Congregacional</h5></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className='text-center'>
                            <td><h5>8:00 PM</h5></td>
                            <td><h5>8:00 PM</h5></td>
                            <td><h5>8:00 PM</h5></td>
                            <td><h5>5:45 AM</h5></td>
                        </tr>
                    </tbody>
                </table>
            </div>
            </div>
        </>
    )
}
