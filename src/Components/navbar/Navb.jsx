import { Container, Dropdown, DropdownButton, Nav, Navbar } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'
import './Navb.css'
import { useDispatch } from 'react-redux'
import { setActiveUser, setNotificationsPost, startLogout } from '../../action/user'
import { useSelector } from 'react-redux'
import logo from '../../heroes/logo.png'
import { useEffect, useState } from 'react'
import moment from 'moment'
import { useLocation, useHistory } from 'react-router'
import { Sidebar } from '../sidebar/Sidebar'
import { UpdateNotifications } from '../../action/notificationsUser'

export const Navb = () => {

    const dispatch = useDispatch()

    const {activeUser, uid} = useSelector(state => state.auth)

    const {notificaciones, updateNotifications} = useSelector(state => state.nu)

    const {socket} = useSelector(state => state.sk)
    
    const logout = () => {
        dispatch(startLogout())
        localStorage.removeItem('noBeleaver')
        localStorage.removeItem('State')
        localStorage.removeItem('Show')
        localStorage.removeItem('discipleship')
        localStorage.removeItem('noticeChat')
        localStorage.removeItem('resetBeleaver')
    }

    useEffect(() => {

      if (notificaciones && notificaciones[0]?.users?.filter(not => not === uid)?.length !== 0) {
        dispatch(UpdateNotifications(false))
      }

      if (notificaciones && notificaciones[0]?.users?.filter(not => not === uid)?.length === 0) {
        dispatch(UpdateNotifications(true))
      }
    }, [dispatch, notificaciones, uid])
    
    useEffect(() => {

        let isMountede = true
        socket?.on('notifications-user', () => {

            if (isMountede) {
                dispatch(UpdateNotifications(true))
            }
        })

        return () => {
            isMountede = false
        }
    }, [socket, dispatch, uid])

    const [changeColor, setChangeColor] = useState(false);

    useEffect(() => {
        if (notificaciones.filter(not => not.to === uid).length !== 0) {
            notificaciones?.map(notificaciones => (notificaciones.to === uid && notificaciones.length !== 0) && setChangeColor(true))
        } else {
            setChangeColor(false)
        }
    }, [notificaciones, uid]);

    const onClick = () => {
        if (notificaciones?.length !== 0) {
            socket?.emit('Delete-Notifications-count', uid)
            dispatch(UpdateNotifications(false))
        }
    }
    
    const {pathname} = useLocation()

    const history = useHistory()

    const [width, setWidth] = useState(window.innerWidth);

    const changeWidth = () => {
        setWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', changeWidth)
        if (pathname === '/NotificationResponsive' && width > 991) {
            history.push('Dashboard')
        }
        return () => window.removeEventListener('resize', changeWidth)
        
    }, [pathname, width, history]);

    const setNotify = (noti) => {
        if (noti?.subtitle !== 'Transmitiendo reunión de Zoom') {
            dispatch(setNotificationsPost(noti))
            history.push(`/NotificationPost/${noti._id}`)
        } else {
            history.push('/Zoom')
        }
    }
    
    return (
        <>
            <Navbar expand="lg" bg = 'dark' variant="dark">
                <Container fluid = {(width <= 991) ? true : false}>
                    <Navbar.Brand style = {{cursor: 'pointer', margin: 0, padding: 0}} >
                        <span className = 'Navb-tittle d-flex justify-content-end align-items-center'>
                            <img src={logo} className='img-fluid' style={{width: 'auto', height: '40px', marginLeft: (width <= 991) && '20px'}} alt="" />
                            <NavLink id='tituloNav' style = {{textDecoration: 'none', color: 'white'}} to = '/Dashboard'>Centro Cristiano El Buen Samaritano</NavLink>
                        </span>
                    </Navbar.Brand>
                
                        <Nav className="mx-auto">
                            {
                                (width > 991)
                                    &&
                                <>
                                    <NavLink to = '/Dashboard' className = 'nav-link'>Inicio</NavLink>
                                    <NavLink to = '/Zoom' className = 'nav-link'>Zoom</NavLink>
                                    <NavLink to = '/YoutubeVideos' className = 'nav-link'>Videos</NavLink>
                                    <NavLink to = '/Petitions' className = 'nav-link'>Peticiones de oración</NavLink>
                                    {/* <NavLink to = '/Chat' className = 'nav-link'>Chat <i className="bi bi-chat-text-fill" style={{color: (changeColor) && 'red'}}></i></NavLink> */}
                                    <NavLink to = '/Bible' className = 'nav-link'>Biblia</NavLink>
                                    <NavLink to = '/Search' className = 'nav-link'>Buscador <i className="bi bi-search"></i></NavLink>
                                </>
                            }
                        </Nav>

                        <Nav id="input-group-dropdown-responsive">
                            <NavLink
                                style={{textDecoration: 'none', color: 'white'}}
                                to = '/NotificationResponsive'
                                className='mr-2 d-flex align-items-center'
                            >
                                <i onClick={onClick} style={{fontSize: '20px', cursor: 'pointer', margin: 0}} className="bi bi-bell d-flex align-items-center">
                                    <span style={{margin: 0}} className={`${(updateNotifications === true) && 'p-1 bg-danger border border-light rounded-circle'}`}></span>
                                </i>
                            </NavLink>
                        </Nav>

                        <Nav>
                            <DropdownButton
                                className='mr-2 d-flex align-items-center'
                                title = {
                                    <i onClick={onClick} style={{fontSize: '20px', cursor: 'pointer', margin: 0}} className="bi bi-bell d-flex align-items-center">
                                        <span style={{margin: 0}} className={`${(updateNotifications === true) && 'p-1 bg-danger border border-light rounded-circle'}`}></span>
                                    </i>}
                                align={'end'}
                                variant="dark"
                                id="input-group-dropdown-1"
                                >
                                    <div style={{overflowY: 'scroll', height: '400px'}}>
                                        {
                                            notificaciones?.map((notifications, index) => {
                                                return (
                                                    <Dropdown.Item onClick={() => setNotify(notifications)} className='shadow my-2 bg-dark p-3 flex-column image-round' key={notifications+ index} style={{width: 'auto', height: 'auto'}}>
                                                        <h6 className='text-white text-center'>{notifications.subtitle}</h6>
                                                        <div className="row">
                                                            {
                                                                (notifications.image)
                                                                    ?
                                                                <>
                                                                    <div className="col-8">
                                                                        <h5 className='text-white' style={{width: '225px'}}>
                                                                            {
                                                                            (notifications.title.length > 15)
                                                                                ?
                                                                                notifications.title.slice(0, 15) + '...'
                                                                                :
                                                                            notifications.title
                                                                            }
                                                                        </h5>
                                                                    </div>
                                                                
                                                                    <div className="col-4 d-flex justify-content-end">
                                                                        <img className='img-fluid' style={{objectFit: 'cover', width: '50px', height: 'auto', borderRadius: '18px'}} src={notifications.image} alt="" />    
                                                                    </div>
                                                                </>
                                                                :
                                                                <div className="col-12">
                                                                    <h4 className='text-white' style={{wordBreak: 'break-word'}}>
                                                                        {
                                                                            notifications.title
                                                                        }
                                                                    </h4>
                                                                </div>
                                                            }
                                                        </div>
                                                        <span style={{fontSize: '14px'}} className='text-white'>{moment(notifications.createdAt).fromNow()}</span>
                                                    </Dropdown.Item>
                                                )
                                            })
                                        }
                                    </div>
                            </DropdownButton>

                            {
                                (width <= 991)
                                    &&
                                <Sidebar />
                            }
                            
                            {
                                (width > 991)
                                    &&
                                <>
                                    <NavLink className = 'd-flex align-items-center' onClick={() => dispatch(setActiveUser())} to = '/Profile'>{(activeUser?.urlImage) ? <img src={activeUser?.urlImage} className='img-fluid rounded-circle' style = {{objectFit: 'cover', width: '32px', height: '32px', cursor: 'pointer'}} alt='' /> : <i className="bi bi-person-circle" style = {{fontSize: '32px', cursor: 'pointer', color: 'white', objectFit: 'cover'}}></i>}</NavLink>
                                    <NavLink to = '/Home' onClick={logout} className = 'nav-link d-flex align-items-center'>Cerrar sesión</NavLink>
                                </>
                            }
                        </Nav>

                </Container>
            </Navbar>
        </>
    )
}
