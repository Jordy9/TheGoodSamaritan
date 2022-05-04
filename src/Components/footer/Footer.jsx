import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

export const Footer = () => {

    const {uid} = useSelector(state => state.auth)

    const [Show, setShow] = useState(false)

    useEffect(() => {
        if (uid) {
            setShow(true)
        } else {
            setShow(false)
        }
    }, [uid])

    const fbigl = () => {
        window.open('https://www.facebook.com/ccbsbonao')
    }

    const fbrd = () => {
        window.open('https://www.facebook.com/radiobonaobendicio')
    }

    const fbIns = () => {
        window.open('https://www.instagram.com/ccbsbonao/?hl=es-la')
    }

    const fbiYT = () => {
        window.open('https://www.youtube.com/c/Centrocristiano100')
    }
    return (
        <>
            <footer hidden = {Show} className="shadow p-4 bg-dark rounded-lg flex-column text-white pt-5">

                <div className="container text-center text-md-left">

                    <div className="row text-center text-md-left">

                        <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Centro Cristiano El Buen Samaritano</h5>
                            <p>Somos una gran familia, unida para amar y servir a Dios, comprometido con alcanzar el perdido y equiparlo hasta que tenga el carácter de Cristo.</p>
                            
                        </div>

                        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Nuestros Servicios</h5>
                        <p>
                            <NavLink to='/Messages' className="text-white" style={{textDecoration: "none"}}> Telebendición</NavLink>
                        </p>
                        <p>
                            <NavLink to='/RadioBonaoBlessing' className="text-white" style={{textDecoration: "none"}}> Radio Bonao Bendición</NavLink>
                        </p>
                        <p>
                            <NavLink  to='/YoutubeVideos'className="text-white" style={{textDecoration: "none"}}> Cultos</NavLink>
                        </p>
                        <p>
                            <NavLink  to='/NextSteps'className="text-white" style={{textDecoration: "none"}}> Oraciones, Estudios Biblicos, y más...</NavLink>
                        </p>

                        </div>

                        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                            <h5 className="text-uppercase mb-4 font-weight-bold text-primary">Nuestros Links</h5>
                        <p style={{cursor: 'pointer'}}>
                            <span onClick={fbigl} className="text-white" style={{textDecoration: "none"}}> Facebook De La Iglesia</span>
                        </p>
                        <p style={{cursor: 'pointer'}}>
                            <span onClick={fbrd} className="text-white" style={{textDecoration: "none"}}> Facebook De Radio Bonao Bendición</span>
                        </p>
                        <p style={{cursor: 'pointer'}}>
                            <span onClick={fbIns} className="text-white" style={{textDecoration: "none"}}> Instagram</span>
                        </p>
                        <p style={{cursor: 'pointer'}}>
                            <span onClick={fbiYT} className="text-white" style={{textDecoration: "none"}}> Youtube</span>
                        </p>
                        </div>

                        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                            <h5 className="text-uppercase mb-4 font-weight-bold text-primary" >Contacto</h5>
                            <p>
                                <i className="fas fa-home mr-3"></i>República Dominicana, Bonao, Padre Fantino.
                            </p>
                            <p>
                                <i className="fas fa-envelope mr-3"></i>centrocristiano777@gmai.com
                            </p>
                            <p>
                                <i className="fas fa-phone mr-3"></i>+1 (809)-296-1771
                            </p>
                        </div>
                        
                    </div>

                    <hr className="mb-4" />

                    <div className="row align-items-center">

                        <div className="col text-center">
                            <p>	Copyright ©2022 All rights reserved by:
                                <span style={{textDecoration: "none"}}>
                                    <strong> Centro Cristiano El Buen Samaritano</strong>
                                </span></p>
                            
                        </div>
                        
                    </div>

                </div>

            </footer>

        </>
    )
}
