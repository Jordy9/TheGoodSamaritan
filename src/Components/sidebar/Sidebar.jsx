import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas'
import { NavLink } from 'react-router-dom';
import './Sidebar.css'

export const Sidebar = () => {

        const [show, setShow] = useState(false);
      
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);

    return (
        <>
            <i style = {{cursor: 'pointer', color: 'white', fontSize: '25px', marginLeft: '30px'}} onClick={handleShow} className="bi bi-list"></i>

            <Offcanvas backdropClassNameName = 'Side-size' show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                <ul className="list-group list-group-flush">
                    <NavLink to = '/' className = 'list-group-item decoration-line list-focus' activeClassName = 'true'><i className="bi bi-house-door-fill"> </i>Tablero</NavLink>
                    <NavLink to = '/Plans' className = 'list-group-item decoration-line list-focus' activeClassName = 'true' ><i className="bi bi-ui-checks-grid"> </i>Planes</NavLink>
                    <NavLink to = '/Reports' className = 'list-group-item decoration-line list-focus' activeClassName = 'true' ><i className="bi bi-file-text"> </i>Informes</NavLink>
                    <NavLink to = '/subscriptions' className = 'list-group-item decoration-line list-focus' activeClassName = 'true' ><i className="bi bi-bank2"> </i>Suscripciones</NavLink>
                    <NavLink to = '/Referred' className = 'list-group-item decoration-line list-focus' activeClassName = 'true' ><i className="bi bi-person-plus-fill"> </i>Referidos</NavLink>
                    <NavLink to = '/Invoices' className = 'list-group-item decoration-line list-focus' activeClassName = 'true' ><i className="bi bi-ui-checks-grid"> </i>Facturas</NavLink>
                </ul>

                <Offcanvas.Header>
                <Offcanvas.Title>Cuentas</Offcanvas.Title>
                </Offcanvas.Header>

                <ul className="list-group list-group-flush">
                    <NavLink to = '/PayOuts' className = 'list-group-item decoration-line list-focus' activeClassName = 'true' ><i className="bi bi-credit-card-2-back-fill"> </i>Pagos</NavLink>
                    <NavLink to = '/Profile' className = 'list-group-item decoration-line list-focus' activeClassName = 'true' ><i className="bi bi-person-fill"></i>Perfil</NavLink>
                </ul>

                <Offcanvas.Header>
                <Offcanvas.Title>Comportamiento</Offcanvas.Title>
                </Offcanvas.Header>

                <ul className="list-group list-group-flush">
                    <li className="list-group-item decoration-line"><i className="bi bi-house-door-fill">Cerrar sesión</i></li>
                </ul>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
