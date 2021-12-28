import { Container, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Navb.css'
import { useDispatch } from 'react-redux'
import { setActiveUser, startLogout } from '../../action/user'
import { useSelector } from 'react-redux'
export const Navb = () => {

    const dispatch = useDispatch()

    const {activeUser} = useSelector(state => state.auth)

    const logout = () => {
        dispatch(startLogout())
    }

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
                            <NavLink to = '/Lives' className = 'nav-link'>Zoom</NavLink>
                            <NavLink to = '/YoutubeVideos' className = 'nav-link'>Mensajes</NavLink>
                            <NavLink to = '/Petitions' className = 'nav-link'>Peticiones</NavLink>
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
