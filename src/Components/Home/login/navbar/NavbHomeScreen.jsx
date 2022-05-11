import { useEffect, useState } from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import { useLocation } from 'react-router'
import './NavbLogin.css'
import { startGetUsers } from '../../../../action/user'
import { useDispatch, useSelector } from 'react-redux'
import logo from '../../../../heroes/logo.png'
import { Sidebar } from '../sidebar/Sidebar'

export const NavbHomeScreen = () => {

    const {uid} = useSelector(state => state.auth)

    const dispatch = useDispatch()
    
    const location = useLocation()

    const locat = location.pathname

    const log = locat

    const [state, setState] = useState(false)
    const [Login, setLogin] = useState(false)

   useEffect(() => {
    if (uid) {
        setState(true)
    } else {
        setState(false)
    }

    if(log === '/Login') {
        setLogin(true)
    } else {
        setLogin(false)
    }

    if(locat === '/Home' || locat === '/Login') {
        dispatch(startGetUsers())
    }

   }, [locat, log, dispatch, uid])

   const [width, setWidth] = useState(window.innerWidth);
      
      const changeWidth = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
      window.addEventListener('resize', changeWidth)

      return () => window.removeEventListener('resize', changeWidth)
      
  }, [width]);
  
    return (
        <div hidden = {state}>
            <Navbar className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12' expand="lg" bg = 'dark' variant="dark">
                <Container fluid = {(width <= 991) ? true : false}>
                    <Navbar.Brand style = {{cursor: 'pointer', margin: 0, padding: 0}} >
                        <span className = 'Navb-tittle d-flex justify-content-end align-items-center'>
                            <img src={logo} className='img-fluid' style={{width: 'auto', height: '40px', marginLeft: (width > 991) ?'60px' : '20px'}} alt="" />
                            <NavLink id='tituloNav' style = {{textDecoration: 'none', color: 'white'}} to = '/Home'>Centro Cristiano El Buen Samaritano</NavLink>
                        </span>
                    </Navbar.Brand>
                
                        <Nav className="mx-auto">
                            {
                                (width > 991)
                                    &&
                                <>
                                    <NavLink to = '/Home' className = 'nav-link'>Inicio</NavLink>
                                    <NavLink to = '/Teleblessing' className = 'nav-link'>Telebendición</NavLink>
                                    <NavLink to = '/RadioBonaoBlessing' className = 'nav-link'>Radio Bonao Bendición</NavLink>
                                    <NavLink to = '/Devotionals' className = 'nav-link'>Devocionales</NavLink>
                                    <NavLink to = '/Schedule' className = 'nav-link'>Horarios</NavLink>
                                    <NavLink to = '/Gallery' className = 'nav-link'>Galería</NavLink>
                                    <NavLink to = '/Contact' className = 'nav-link'>Contacto</NavLink>
                                </>
                            }
                        </Nav>

                            {
                                (width <= 991)
                                    &&
                                <Sidebar />
                            }
                                
                            {
                                (width > 991)
                                    &&
                                <Nav>
                                    <NavLink to = '/Login' hidden = {Login} className = 'nav-link btn btn-primary'><i className="bi bi-door-open"></i> Iniciar sesión</NavLink>
                                    <NavLink to = '/Register' hidden = {!Login} className = 'nav-link btn btn-primary'><i className="bi bi-door-open"></i> Registrate</NavLink>
                                </Nav>
                            }
                </Container>
            </Navbar>
        </div>
    )
}
