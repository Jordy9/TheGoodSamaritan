import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas'
import { useSelector } from 'react-redux';
import { Administrador } from '../userRoleComponents/Administrador';
import { Colaborador } from '../userRoleComponents/Colaborador';
import { GestorDeContenido } from '../userRoleComponents/GestorDeContenido';
import { Pastor } from '../userRoleComponents/Pastor';
import './Sidebar.css'

export const Sidebar = () => {

    const {activeUser} = useSelector(state => state.auth)

    const [show, setShow] = useState(false);
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <i id='logo-list' style = {{cursor: 'pointer', color: 'white', fontSize: '25px', marginLeft: '30px'}} onClick={handleShow} className="bi bi-list"></i>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>{activeUser?.name} {activeUser?.lastName}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                {
                    (activeUser)
                        &&
                    (activeUser?.role === 'Administrador')
                        &&
                    <Administrador />
                }

                {
                    (activeUser)
                        &&
                    (activeUser?.role === 'Gestorcontenido')
                        &&
                    <GestorDeContenido />
                }

                {
                    (activeUser)
                        &&
                    (activeUser?.role === 'Colaborador')
                        &&
                    <Colaborador />
                }

                {
                    (activeUser)
                        &&
                    (activeUser?.role === 'Pastor')
                        &&
                    <Pastor />
                }

                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
