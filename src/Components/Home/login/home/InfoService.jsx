import React from 'react'
import { NavLink } from 'react-router-dom'
import './home.css'

export const InfoService = () => {

    const redirectToAmanecer = () => {
        window.open('https://www.elamanecer.org/?sapurl=Lys1MGExL2xiL2xpLyszaGJuMmZ0P2JyYW5kaW5nPXRydWUmZW1iZWQ9dHJ1ZSZyZWNlbnRSb3V0ZT1hcHAud2ViLWFwcC5saWJyYXJ5Lmxpc3QmcmVjZW50Um91dGVTbHVnPSUyQjNoYm4yZnQ%3D')
    }

    const redirectToAPR = () => {
        window.open('https://www.alospiesdelrey.org')
    }

    const redirectToG = () => {
        window.open('https://www.iglesiacristianagosen.com')
    }

    return (
        <div className = 'bg-dark d-flex justify-content-center align-items-center my-5'>
            <div className="container">
                <div className="row">
                    <div className="col-xs-2 col-sm-6 col-md-6 col-lg-3 col-xl-3 p-4 hom" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        <i className="fas fa-pray d-flex justify-content-center" style = {{fontSize: '32px'}}></i>
                        <h4 className = 'text-center'>¿Necesitas oración?</h4>
                    </div>

                    <div className="col-xs-2 col-sm-6 col-md-6 col-lg-3 col-xl-3 p-4 hom" onClick={redirectToAmanecer}>
                        <i className="fa-solid fa-church d-flex justify-content-center" style = {{fontSize: '32px'}}></i>
                        <h4 className = 'text-center'>Ministerios El Amanecer de la Esperanza, NY</h4>
                    </div>

                    <div className="col-xs-2 col-sm-6 col-md-6 col-lg-3 col-xl-3 p-4 hom" onClick={redirectToAPR}>
                        <i className="fa-solid fa-place-of-worship d-flex justify-content-center" style = {{fontSize: '32px'}}></i>
                        <h4 className = 'text-center'>Ministerios A Los Pies del Rey, Murcia España</h4>
                    </div>

                    <div className="col-xs-2 col-sm-6 col-md-6 col-lg-3 col-xl-3 p-4 hom" onClick={redirectToG}>
                        <i className="fa-solid fa-cross d-flex justify-content-center" style = {{fontSize: '32px'}}></i>
                        <h4 className = 'text-center'>Iglesia Cristiana Gosén</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
