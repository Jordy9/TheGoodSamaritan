import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Navb.css'
import { useDispatch } from 'react-redux'
import { setActiveUser, startLogout } from '../../action/user'
import { useSelector } from 'react-redux'
import logo from '../../heroes/logo.png'
import { useEffect, useState } from 'react'

export const Navb = () => {

    const dispatch = useDispatch()

    const {activeUser, uid} = useSelector(state => state.auth)

    const {notificaciones} = useSelector(state => state.nt)

    const logout = () => {
        dispatch(startLogout())
    }

    const [changeColor, setChangeColor] = useState(false);

    useEffect(() => {
        if (notificaciones.filter(not => not.to === uid).length !== 0) {
            notificaciones?.map(notificaciones => (notificaciones.to === uid && notificaciones.length !== 0) && setChangeColor(true))
        } else {
            setChangeColor(false)
        }
    }, [notificaciones, uid]);

    return (
        <>
            <Navbar fixed = 'top' className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12' expand="lg" bg = 'dark' variant="dark">
                <Container>
                    <Navbar.Brand style = {{cursor: 'pointer', margin: 0, padding: 0}} >
                        <span className = 'Navb-tittle d-flex justify-content-end align-items-center'>
                            <img src={logo} className='img-fluid' style={{width: 'auto', height: '40px'}} alt="" />
                            <NavLink id='tituloNav' style = {{textDecoration: 'none', color: 'white'}} to = '/Dashboard'>Centro Cristiano El Buen Samaritano</NavLink>
                        </span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                
                        <Nav className="mx-auto">
                            <NavLink to = '/Dashboard' className = 'nav-link'>Inicio</NavLink>
                            <NavLink to = '/Zoom' className = 'nav-link'>Zoom</NavLink>
                            <NavLink to = '/YoutubeVideos' className = 'nav-link'>Videos</NavLink>
                            <NavLink to = '/Petitions' className = 'nav-link'>Peticiones</NavLink>
                            <NavLink to = '/Chat' className = 'nav-link'>Chat <i className="bi bi-chat-text-fill" style={{color: (changeColor) && 'red'}}></i></NavLink>
                            <NavLink to = '/Bible' className = 'nav-link'>Biblia</NavLink>
                            <NavLink to = '/Search' className = 'nav-link'>Buscador <i className="bi bi-search"></i></NavLink>
                        </Nav>

                        <Nav>
                            <NavLink onClick={() => dispatch(setActiveUser())} to = '/Profile'>{(activeUser?.urlImage) ? <img src={activeUser?.urlImage} className='img-fluid rounded-circle mt-2' style = {{width: '32px', height: '32px', cursor: 'pointer'}} alt='' /> : <i className="bi bi-person-circle" style = {{fontSize: '32px', cursor: 'pointer', color: 'white'}}></i>}</NavLink>
                            <NavLink to = '/Home' onClick={logout} className = 'nav-link mt-1'>Cerrar sesión</NavLink>
                        </Nav>

                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}
