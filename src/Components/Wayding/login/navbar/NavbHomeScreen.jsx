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
    if (locat === '/Login') {
        setState(true)
    } else {
        setState(false)
    }
   }, [locat])
    


    // const locat = history.location.pathname

    return (
        <div>
            <Navbar bg = 'transparent' variant="dark">
                <Container>
                <Navbar.Brand>
                    <span className = 'Navb-tittle d-flex justify-content-end'>
                        WAYDING
                    </span></Navbar.Brand>
                
                <Nav>
                    <NavLink to = '/Home' className = 'nav-link'>Inicio</NavLink>
                    <NavLink to = '/AboutUs' className = 'nav-link'>Sobre nosotros</NavLink>
                    <NavLink to = '/Contact' className = 'nav-link'>Contacto</NavLink>
                    <NavLink to = '/Login' hidden = {state} className = 'nav-link btn btn-primary'><i className="bi bi-door-open"></i> Login</NavLink>
                </Nav>
                </Container>
            </Navbar>
        </div>
    )
}
