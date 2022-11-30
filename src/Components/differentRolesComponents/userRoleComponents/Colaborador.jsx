import React from 'react'
import Offcanvas from 'react-bootstrap/Offcanvas'
import { NavLink } from 'react-router-dom'
import { useResponsive } from '../../../hooks/useResponsive'

export const Colaborador = () => {

    const [ respWidth ] = useResponsive()

  return (
    <>
        {
            (respWidth < 991)
                &&
            <>
                <Offcanvas.Header>
                    <Offcanvas.Title>Vista de usuario</Offcanvas.Title>
                </Offcanvas.Header>

                <ul className="list-group list-group-flush">
                    <NavLink to = '/Dashboard' className = 'list-group-item decoration-line list-focus' activeClassName = 'true'>Inicio</NavLink>
                    <NavLink to = '/Zoom' className = 'list-group-item decoration-line list-focus' activeClassName = 'true'>Zoom</NavLink>
                    <NavLink to = '/YoutubeVideos' className = 'list-group-item decoration-line list-focus' activeClassName = 'true'>Videos</NavLink>
                    <NavLink to = '/Petitions' className = 'list-group-item decoration-line list-focus' activeClassName = 'true'>Peticiones de oración</NavLink>
                    {/* <NavLink to = '/Chat' className = 'list-group-item decoration-line list-focus' activeClassName = 'true'>Chat <i className="bi bi-chat-text-fill" style={{color: (changeColor) && 'red'}}></i></NavLink> */}
                    <NavLink to = '/Bible' className = 'list-group-item decoration-line list-focus' activeClassName = 'true'>Biblia</NavLink>
                    <NavLink to = '/Search' className = 'list-group-item decoration-line list-focus' activeClassName = 'true'>Buscador <i className="bi bi-search"></i></NavLink>
                </ul>
            </>
        }

        <Offcanvas.Header>
            <Offcanvas.Title>Peticiones de oración</Offcanvas.Title>
        </Offcanvas.Header>

        <ul className="list-group list-group-flush">
            <NavLink to = '/PetitionsList' className = 'list-group-item decoration-line list-focus' activeClassName = 'true'><i className="bi bi-list-ul"> </i>Listado de Peticiones de oración</NavLink>
        </ul>

        <Offcanvas.Header>
            <Offcanvas.Title>Listado de Contactos</Offcanvas.Title>
        </Offcanvas.Header>

        <ul className="list-group list-group-flush">        
            <NavLink to = '/ContactList' className = 'list-group-item decoration-line list-focus' activeClassName = 'true'><i className="bi bi-list-ul"> </i>Listado de Contactos</NavLink>
        </ul>
    </>
  )
}
