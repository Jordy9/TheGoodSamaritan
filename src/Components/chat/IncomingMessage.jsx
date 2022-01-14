import React from 'react'
import { useSelector } from 'react-redux'
import { timeMonth } from '../../helper/ScrollToBottom'
import user from '../../heroes/user-profile.png'

export const IncomingMessage = ({msg}) => {
    const {image} = useSelector(state => state.cht)

    return (
        <div className="incoming_msg">
            <div className="incoming_msg_img">
                {
                    (image)
                        ?
                    <img src={image} alt="imagen" className='img-fluid rounded-circle' />
                        :
                    <img src={user} alt="sunil" />
                }
            </div>
            <div className="received_msg">
                <div className="received_withd_msg">
                    <p>{msg.message}</p>
                    <span className="time_date mb-3"> {timeMonth(msg.createdAt)}</span>
                </div>
            </div>
        </div>
    )
}
