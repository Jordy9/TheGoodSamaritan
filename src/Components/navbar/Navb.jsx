import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Navb.css'

export const Navb = () => {
    return (
        <div className = 'floatt'>
            <Navbar bg = 'dark' variant="dark">
                <Container>
                <Navbar.Brand>
                    <span className = 'Navb-tittle d-flex justify-content-end'>
                        WAYDING
                    </span></Navbar.Brand>
                <Nav className="me-auto">
                    <NavLink to = '/Dashboard' className = 'nav-link'>Inicio</NavLink>
                    <NavLink to = '/subscriptions' className = 'nav-link'>Suscripciones</NavLink>
                    <NavLink to = '/Referred' className = 'nav-link'>Referidos</NavLink>
                    <NavLink to = '/Reports' className = 'nav-link'>Informes</NavLink>
                    <NavLink to = '/Invoices' className = 'nav-link'>Facturas</NavLink>
                    <NavLink to = '/PayOuts' className = 'nav-link'>Pagos</NavLink>
                </Nav>
                
                <Nav>
                    <NavLink to = '/Profile'><i className="bi bi-person-circle" style = {{fontSize: '32px', cursor: 'pointer', color: 'white'}}></i></NavLink>
                    <NavLink to = '/Home' className = 'nav-link mt-1'>Cerrar sesión</NavLink>
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
