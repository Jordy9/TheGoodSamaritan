import { useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas'
import { NavLink, useLocation } from 'react-router-dom';
import './Sidebar.css'
import logo from '../../../../heroes/logo.png'
import { useSelector } from 'react-redux';

export const Sidebar = () => {

    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [Login, setLogin] = useState(false)

    const {uid} = useSelector(state => state.auth)

    const {pathname} = useLocation()

    useEffect(() => {
        if(pathname === '/Login') {
            setLogin(true)
        } else {
            setLogin(false)
        }

        if (!uid) {
            handleClose()
        }

    }, [pathname, uid])
    


    return (
        <>
            <i id='logo-list' style = {{cursor: 'pointer', color: 'white', fontSize: '25px'}} onClick={handleShow} className="bi bi-list"></i>

            <Offcanvas placement='end' show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Dios te bendiga</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                    {/* <div className='d-flex justify-content-center align-items-center'>
                        <img src={logo} className='img-fluid' style={{width: 'auto', height: '150px'}} alt="" />
                    </div> */}

                    <ul className="list-group list-group-flush text-center mt-3">
                        <NavLink to = '/Home' className = 'list-group-item decoration-line list-focus' activeClassName = 'true'>Inicio</NavLink>
                        <NavLink to = '/Teleblessing' className = 'list-group-item decoration-line list-focus' activeClassName = 'true'>Telebendición</NavLink>
                        <NavLink to = '/RadioBonaoBlessing' className = 'list-group-item decoration-line list-focus' activeClassName = 'true'>Radio Bonao Bendición</NavLink>
                        <NavLink to = '/Devotionals' className = 'list-group-item decoration-line list-focus' activeClassName = 'true'>Devocionales</NavLink>
                        <NavLink to = '/Schedule' className = 'list-group-item decoration-line list-focus' activeClassName = 'true'>Horarios</NavLink>
                        <NavLink to = '/Gallery' className = 'list-group-item decoration-line list-focus' activeClassName = 'true'>Galería</NavLink>
                        <NavLink to = '/Contact' className = 'list-group-item decoration-line list-focus' activeClassName = 'true'>Contacto</NavLink>
                    </ul>

                    <ul className="list-group list-group-flush mt-4 d-flex justify-content-center">
                        <NavLink to = '/Login' hidden = {Login} className = 'btn btn-primary'><i className="bi bi-door-open"></i> Iniciar sesión</NavLink>
                        <NavLink to = '/Register' hidden = {!Login} className = 'btn btn-primary'><i className="bi bi-door-open"></i> Registrate</NavLink>
                    </ul>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
