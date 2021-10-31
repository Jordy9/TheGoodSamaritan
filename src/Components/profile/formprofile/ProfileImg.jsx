import React from 'react'
import wayding from '../../../heroes/Wayding.png'

export const ProfileImg = () => {
    return (
        <>
            <div class="card">
                <h5 class="card-header bg-dark text-white">Foto de Perfil</h5>
                <div class="card-body">
                    <div className="row">
                        <div className="col-6">
                            <img src = {wayding} className="img-thumbnail" alt="..." style = {{boxShadow: '0px 0PX 3px 0px'}} />
                        </div>

                        <div className="col-6">
                            <button className = 'form-control btn btn-dark mt-5'>Subir foto de perfil <i className="bi bi-person-bounding-box"></i></button>
                        </div>
                    </div>
                </div>
            </div>   
        </>
    )
}
