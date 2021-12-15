import { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router'
import './NavbLogin.css'

export const NavbHomeScreen = () => {

    const location = useLocation()

    
    const locat = location.pathname
    
    console.log(locat)

    const [state, setState] = useState(false)

   useEffect(() => {
    if (locat === '/Petitions' || locat === '/Dashboard' || locat === '/Lives' || locat === '/Referred' || locat === '/Investments' || locat === '/History' || locat === '/Profile') {
        setState(true)
    } else {
        setState(false)
    }
   }, [locat])
    


    // const locat = history.location.pathname

    return (
        <div hidden = {state}>
            <Navbar className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12' expand="lg" bg = 'dark' variant="dark">
                <Container>
                    <Navbar.Brand style = {{cursor: 'pointer'}} >
                        <span className = 'Navb-tittle d-flex justify-content-end'>
                            <NavLink style = {{textDecoration: 'none', color: 'white'}} to = '/Dashboard'>El Buen Samaritano</NavLink>
                        </span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                
                        <Nav className="mx-auto">
                            <NavLink to = '/Home' className = 'nav-link'>Inicio</NavLink>
                            <NavLink to = '/Messages' className = 'nav-link'>Mensajes</NavLink>
                            <NavLink to = '/Sketch' className = 'nav-link'>Bosquejos</NavLink>
                            <NavLink to = '/Schedule' className = 'nav-link'>Horarios</NavLink>
                            <NavLink to = '/NextSteps' className = 'nav-link'>Siguiente paso</NavLink>
                            <NavLink to = '/Gallery' className = 'nav-link'>Galería</NavLink>
                            <NavLink to = '/Contact' className = 'nav-link'>Contacto</NavLink>
                            <NavLink to = '/Location' className = 'nav-link'>Localízanos</NavLink>
                        </Nav>

                        <Nav>
                            <NavLink to = '/Login' hidden = {state} className = 'nav-link btn btn-primary'><i className="bi bi-door-open"></i> Login</NavLink>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}
