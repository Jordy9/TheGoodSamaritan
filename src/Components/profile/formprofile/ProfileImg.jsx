import React from 'react'
import { useSelector } from 'react-redux'
import perfil1 from '../../../heroes/User.png'

export const ProfileImg = ({imag}) => {

    const {activeUser} = useSelector(state => state.auth)
    return (
        <>
            <div className = 'shadow d-flex justify-content-center align-items-center p-4 my-2 bg-dark rounded-lg flex-column'>
                <div className="person-img">
                    {
                        (activeUser?.urlImage)
                        ?
                        <img src = {imag || activeUser?.urlImage} className="img-fluid rounded-circle" alt="..." style = {{height: '350px', width: '300px'}} />
                        :
                        <img src = {imag || perfil1} className="img-fluid rounded-circle" alt="..." style = {{height: '350px', width: '300px'}} />
                    }
                </div>

                <div className="person-name my-3">
                    <h3 className = 'text-white'>{activeUser?.name} {activeUser?.lastName}</h3>
                </div>
                
            </div>  
        </>
    )
}
