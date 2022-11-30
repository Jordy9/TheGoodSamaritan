import { useEffect, useState } from 'react'
import { Container, Dropdown, DropdownButton, Nav, Navbar } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink, useHistory, useLocation } from 'react-router-dom'
import { setActiveUser, setNotificationsPost, startLogout } from '../../../action/user'
import logo from '../../../heroes/logo.png'
import user from '../../../heroes/Userr.png'
import { Sidebar } from '../sidebar/Sidebar'
import './Navb.css'
import { UpdateNotifications } from '../../../action/notificationsUser'

export const Navb = () => {
    const dispatch = useDispatch()

    const {activeUser, uid} = useSelector(state => state.auth)

    const {socket} = useSelector(state => state.sk)

    const {notificaciones: notificacionesAdmin, updateNotifications} = useSelector(state => state.nu)

    const handledLogout = () => {
      dispatch(startLogout())
    }

    useEffect(() => {

      if (notificacionesAdmin && notificacionesAdmin[0]?.users?.filter(not => not === uid)?.length !== 0) {
        dispatch(UpdateNotifications(false))
      }

      if (notificacionesAdmin && notificacionesAdmin[0]?.users?.filter(not => not === uid)?.length === 0) {
        dispatch(UpdateNotifications(true))
      }
    }, [dispatch, notificacionesAdmin, uid])

    useEffect(() => {

      let isMountede = true
      socket?.on('notifications-admin', () => {

        if (isMountede) {
          dispatch(UpdateNotifications(true))
        }
      })

      return () => {
        isMountede = false
      }
    }, [socket, dispatch, uid])

    const onClick = () => {
      if (notificacionesAdmin?.length !== 0) {
        socket?.emit('Delete-Notifications-count-admin', uid)
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
            history.push('/Dashboard')
        }
        return () => window.removeEventListener('resize', changeWidth)
        
    }, [pathname, width, history]);

    const setNotify = (noti) => {
        dispatch(setNotificationsPost(noti))
        history.push(`/NotificationPost/${noti._id}`)
    }

    return (
        <Navbar className = 'col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12' expand="lg" bg = 'dark' variant="dark">
            <Container fluid>
            <Sidebar />
                <Navbar.Brand style = {{cursor: 'pointer', margin: 0, padding: 0}} >
                    <span className = 'Navb-tittle d-flex justify-content-end align-items-center'>
                        <img id='logo-logo' src={logo} className='img-fluid' style={{width: 'auto', height: '40px', marginLeft: (width < 991) ? '20px' : '60px'}} alt="" />
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

                {/* {
                    (activeUser?.role === 'Administrador' || activeUser?.role === 'Colaborador')
                        &&    
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
                } */}

                {/* {
                    (activeUser?.role === 'Administrador' || activeUser?.role === 'Colaborador')
                        &&
                    <DropdownButton
                    className='mr-2 d-flex align-items-center'
                    title = {
                        <i onClick={onClick} style={{fontSize: '20px', cursor: 'pointer', margin: 0}} className="bi bi-bell d-flex align-items-center">
                            <span style={{margin: 0}} className={`${(updateNotifications === true) && 'p-1 bg-danger border border-light rounded-circle'}`}></span>
                        </i>}
                    align={'end'}
                    variant="dark"
                    id="input-group-dropdown-2"
                    >
                        <div style={{overflowY: 'scroll', height: '400px'}}>
                            {
                                notificacionesAdmin?.map((notifications, index) => {
                                    return (
                                        <Dropdown.Item onClick={() => setNotify(notifications)} className='shadow my-2 bg-dark p-3 flex-column' key={notifications+ index} style={{width: 'auto', height: 'auto'}}>
                                            <h6 className='text-white text-center'>{notifications.subtitle}</h6>
                                            <div className="row">
                                                {
                                                    (notifications.image)
                                                        ?
                                                    <>
                                                        <div className="col-8">
                                                            <h5 className='text-white'>
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
                                                            <img className='img-fluid' style={{width: '50px', height: 'auto'}} src={notifications.image} alt="" />    
                                                        </div>
                                                    </>
                                                    :
                                                    <div className="col-12">
                                                        <h4 className='text-white'>
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
                } */}

                <Nav id='nav-hidden-right'>
                    <NavLink onClick={() => dispatch(setActiveUser())} to = '/Profile'>{(activeUser?.urlImage || user) && <img src={activeUser?.urlImage || user} className='img-fluid rounded-circle mt-2' style = {{width: '32px', height: '32px', cursor: 'pointer', margin: 0}} alt='' />}</NavLink>
                    <NavLink to = '/Login' onClick = {handledLogout} className = 'nav-link mt-1'>Cerrar sesión</NavLink>
                </Nav>

                <DropdownButton
                    title = {
                        <i className="bi bi-caret-down-fill"></i>
                    }
                    align={'end'}
                    variant="outline-secondary"
                    id="input-group-dropdown-1"
                    >
                    <Dropdown.Item><NavLink className='nav-link' style={{color: 'whitesmoke'}} onClick={() => dispatch(setActiveUser())} to = '/Profile'>{(activeUser?.urlImage) ? <img src={activeUser?.urlImage} className='img-fluid rounded-circle' style = {{width: '20px', height: '20px', cursor: 'pointer', margin: 0}} alt='' /> : <i className="bi bi-person-circle" style = {{cursor: 'pointer', color: 'white', margin: 0}}></i>} Perfil</NavLink></Dropdown.Item>
                    <Dropdown.Divider />
                    <Dropdown.Item><NavLink style={{color: 'whitesmoke'}} to = '/Login' onClick = {handledLogout} className = 'nav-link'>Cerrar sesión</NavLink></Dropdown.Item>
                </DropdownButton>

            </Container>
        </Navbar>
    )
}
