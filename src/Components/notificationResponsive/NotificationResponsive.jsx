import React, { useEffect, useState } from 'react'
import moment from 'moment'
import { useDispatch, useSelector } from 'react-redux'
import { setNotificationsPost } from '../../action/user'
import { useHistory } from 'react-router-dom'

export const NotificationResponsive = () => {

    const {activeUser, uid} = useSelector(state => state.auth)
    const {socket} = useSelector(state => state.sk)

    const dispatch = useDispatch()

    const history = useHistory()

    const [activeUserChange, setActiveUserChange] = useState(activeUser)

    useEffect(() => {
        socket?.on('notifications-user', (users) => {

            const user = users?.find(user => user.id === uid)

            setActiveUserChange(user)
        })
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
    <div style={{marginTop: '70px'}} className='container'>
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
                <div style={{overflowY: 'auto'}}>
                    {
                        activeUserChange?.notifications?.map((notifications, index) => {
                            return (
                                <div className='shadow image-round my-2 bg-dark p-3 flex-column' onClick={() => setNotify(notifications)} style={{cursor: 'pointer'}} key={notifications+ index}>
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
                                                            notifications.title.slice(0, 20) + '...'
                                                            :
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
