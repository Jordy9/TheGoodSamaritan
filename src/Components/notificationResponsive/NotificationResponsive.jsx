import React, { useEffect } from 'react'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { setNotificationsPost } from '../../action/user'
import { useHistory } from 'react-router-dom'
import { UpdateNotifications } from '../../action/notificationsUser'

export const NotificationResponsive = () => {

    const {uid} = useSelector(state => state.auth)
    const {socket} = useSelector(state => state.sk)

    const dispatch = useDispatch()

    const history = useHistory()

    const {notificaciones} = useSelector(state => state.nu)

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

    const setNotify = (noti) => {
        if (noti?.subtitle !== 'Transmitiendo reunión de Zoom') {
            dispatch(setNotificationsPost(noti))
            history.push(`/NotificationPost/${noti._id}`)
        } else {
            history.push('/Zoom')
        }
    }

  return (
    <div className='container'>
        <div className="row">
            <h1>Notificaciones</h1>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div style={{overflowY: 'auto'}}>
                    {
                        notificaciones?.map((notifications, index) => {
                            return (
                                <div className='shadow image-round my-2 bg-dark p-3 flex-column' onClick={() => setNotify(notifications)} style={{cursor: 'pointer'}} key={notifications+ index}>
                                    <h6 className='text-white text-center'>{notifications.subtitle}</h6>
                                    <div className="row">
                                        {
                                            (notifications.image)
                                                ?
                                            <>
                                                <div className="col-8">
                                                    <h5 className='text-white' style={{wordBreak: 'break-word'}}>
                                                        {
                                                            notifications.title
                                                        }
                                                    </h5>
                                                </div>
                                            
                                                <div className="col-4 d-flex justify-content-end">
                                                    <img className='img-fluid' style={{width: '50px', height: '50px', borderRadius: '18px'}} src={notifications.image} alt="" />    
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
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    </div>
  )
}
