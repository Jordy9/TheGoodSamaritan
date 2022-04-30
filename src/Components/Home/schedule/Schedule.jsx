import React from 'react'
import Miercoles from '../../../heroes/Horarios.jpg'
import imagen7 from '../../../heroes/Zoom2.jpg'

export const Schedule = () => {
    return (
        <div className="container my-5">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                    <img src={imagen7} style = {{width: '100%', height: '100%'}} className = 'image-round shadowImage' alt = 'imagen' />
                </div>
            </div>
            <div className = 'shadow p-4 my-4 bg-dark image-round flex-column table-responsive'>
                <table class="table table-dark table-borderless">
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

            <div className = 'shadow d-flex justify-content-center align-items-center p-4 my-5 bg-dark image-round flex-column'>
                <img src={Miercoles} style = {{objectFit: 'cover', height: '100%', width: '100%'}} className="image-round" alt="..." />
            </div>
        </div>
    )
}
