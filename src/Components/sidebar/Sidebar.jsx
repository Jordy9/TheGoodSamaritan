import { useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useLocation } from 'react-router-dom';
import { setActiveUser, startLogout } from '../../action/user';
import './Sidebar.css'

export const Sidebar = () => {

    const dispatch = useDispatch()

    const [show, setShow] = useState(false);

    const {activeUser, uid} = useSelector(state => state.auth)
    
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const {pathname} = useLocation()

    useEffect(() => {
        if (uid) {
            handleClose()
        }
    }, [pathname, uid])

    const logout = () => {
        dispatch(startLogout())
        localStorage.removeItem('noBeleaver')
        localStorage.removeItem('State')
        localStorage.removeItem('Show')
        localStorage.removeItem('discipleship')
    }

    return (
        <>
            <i id='logo-list' style = {{cursor: 'pointer', color: 'white', fontSize: '25px', marginLeft: '30px'}} onClick={handleShow} className="bi bi-list"></i>

            <Offcanvas placement='end' show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>{activeUser?.name} {activeUser?.lastName}</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>

                    <ul className="list-group list-group-flush mb-3">
                        <NavLink className = 'd-flex justify-content-center align-items-center' onClick={() => dispatch(setActiveUser())} to = '/Profile'>{(activeUser?.urlImage) ? <img src={activeUser?.urlImage} className='img-fluid rounded-circle mt-2' style = {{objectFit: 'cover', width: '150px', height: '150px', cursor: 'pointer'}} alt='' /> : <i className="bi bi-person-circle" style = {{fontSize: '150px', cursor: 'pointer', color: 'white'}}></i>}</NavLink>
                    </ul>

                    <ul className="list-group list-group-flush text-center">
                        <NavLink to = '/Dashboard' className = 'list-group-item decoration-line list-focus' activeClassName = 'true'>Inicio</NavLink>
                        <NavLink to = '/Zoom' className = 'list-group-item decoration-line list-focus' activeClassName = 'true'>Zoom</NavLink>
                        <NavLink to = '/YoutubeVideos' className = 'list-group-item decoration-line list-focus' activeClassName = 'true'>Videos</NavLink>
                        <NavLink to = '/Petitions' className = 'list-group-item decoration-line list-focus' activeClassName = 'true'>Peticiones de oración</NavLink>
                        {/* <NavLink to = '/Chat' className = 'list-group-item decoration-line list-focus' activeClassName = 'true'>Chat <i className="bi bi-chat-text-fill" style={{color: (changeColor) && 'red'}}></i></NavLink> */}
                        <NavLink to = '/Bible' className = 'list-group-item decoration-line list-focus' activeClassName = 'true'>Biblia</NavLink>
                        <NavLink to = '/Search' className = 'list-group-item decoration-line list-focus' activeClassName = 'true'>Buscador <i className="bi bi-search"></i></NavLink>
                    </ul>

                    <ul className='list-group list-group-flush mt-4'>
                        <NavLink to = '/Home' onClick={logout} className = 'btn btn-secondary d-flex justify-content-center'>Cerrar sesión</NavLink>
                    </ul>

                </Offcanvas.Body>
            </Offcanvas>
        </>
    )
}
