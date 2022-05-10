import { useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas'
import { NavLink, useLocation } from 'react-router-dom';
import './Sidebar.css'
import logo from '../../../heroes/logo.png'

export const Sidebar = () => {


    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [Login, setLogin] = useState(false)

    const {pathname} = useLocation()

    useEffect(() => {
        if(pathname === '/Login') {
            setLogin(true)
        } else {
            setLogin(false)
        }

    }, [pathname])
    


    return (
        <>
            <i id='logo-list' style = {{cursor: 'pointer', color: 'white', fontSize: '25px', marginLeft: '30px'}} onClick={handleShow} className="bi bi-list"></i>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Dios te bendiga</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                    <div className='d-flex justify-content-center align-items-center'>
                        <img src={logo} className='img-fluid' style={{width: 'auto', height: '150px'}} alt="" />
                    </div>

                    <ul className="list-group list-group-flush text-center mt-3">
                        <NavLink onClick={handleClose} to = '/Home' className = 'list-group-item decoration-line list-focus' activeClassName = 'true'>Inicio</NavLink>
                        <NavLink onClick={handleClose} to = '/Teleblessing' className = 'list-group-item decoration-line list-focus' activeClassName = 'true'>Telebendición</NavLink>
                        <NavLink onClick={handleClose} to = '/RadioBonaoBlessing' className = 'list-group-item decoration-line list-focus' activeClassName = 'true'>Radio Bonao Bendición</NavLink>
                        <NavLink onClick={handleClose} to = '/Devotionals' className = 'list-group-item decoration-line list-focus' activeClassName = 'true'>Devocionales</NavLink>
                        <NavLink onClick={handleClose} to = '/Schedule' className = 'list-group-item decoration-line list-focus' activeClassName = 'true'>Horarios</NavLink>
                        <NavLink onClick={handleClose} to = '/Gallery' className = 'list-group-item decoration-line list-focus' activeClassName = 'true'>Galería</NavLink>
                        <NavLink onClick={handleClose} to = '/Contact' className = 'list-group-item decoration-line list-focus' activeClassName = 'true'>Contacto</NavLink>
                    </ul>

                    <ul className="list-group list-group-flush mt-4 d-flex justify-content-center">
                        <NavLink onClick={handleClose} to = '/Login' hidden = {Login} className = 'btn btn-primary'><i className="bi bi-door-open"></i> Iniciar sesión</NavLink>
                        <NavLink onClick={handleClose} to = '/Register' hidden = {!Login} className = 'btn btn-primary'><i className="bi bi-door-open"></i> Registrate</NavLink>
                    </ul>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
