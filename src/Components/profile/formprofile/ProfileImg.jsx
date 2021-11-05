import React from 'react'
import wayding from '../../../heroes/Jordy.jpg'

export const ProfileImg = () => {
    return (
        <>
            <div className = 'shadow d-flex justify-content-center align-items-center p-4 my-2 bg-dark rounded-lg flex-column'>
                <div className="person-img">
                    <img src = {wayding} className="img-fluid rounded-circle" alt="..." style = {{height: '350px', width: '300px'}} />
                </div>

                <div className="person-name my-3">
                    <h3 className = 'text-white'>Juan Taveras</h3>
                </div>

                <div className="my-3">
                    <h6 className = 'text-white'>Plan Normal</h6>
                </div>

                <div className="info my-3">
                    <h6 className = 'text-white'>Reinversiones</h6>
                </div>
                
                <button type = 'submit' className = 'my-1 btn btn-secondary btn-lg btn-block'>Subir Foto</button>
            </div>  
        </>
    )
}
