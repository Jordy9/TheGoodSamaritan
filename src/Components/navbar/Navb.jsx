import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Navb.css'
import GS from '../../heroes/GS.jpg' 

export const Navb = () => {
    return (
        <>
            <Navbar fixed = 'top' className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12' expand="lg" bg = 'dark' variant="dark">
                <Container>
                    <Navbar.Brand style = {{cursor: 'pointer'}} >
                        <span className = 'Navb-tittle d-flex justify-content-end'>
                            <NavLink style = {{textDecoration: 'none', color: 'white'}} to = '/Dashboard'>El Buen Samaritano</NavLink>
                        </span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                
                        <Nav className="mx-auto">
                            <NavLink to = '/Dashboard' className = 'nav-link'>Inicio</NavLink>
                            <NavLink to = '/Lives' className = 'nav-link'>En vivo</NavLink>
                            <NavLink to = '/Petitions' className = 'nav-link'>Peticiones</NavLink>
                        </Nav>

                        <Nav>
                            <NavLink to = '/Profile'><i className="bi bi-person-circle" style = {{fontSize: '32px', cursor: 'pointer', color: 'white'}}></i></NavLink>
                            <NavLink to = '/Home' className = 'nav-link mt-1'>Cerrar sesión</NavLink>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
