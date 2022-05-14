import React from 'react'
import { useSelector } from 'react-redux'
import { timeMonth } from '../../helper/ScrollToBottom'
import perfil1 from '../../heroes/User.png'

export const IncomingMessage = ({msg}) => {
    const {image} = useSelector(state => state.cht)

    return (
        <div className="incoming_msg">
            <div className="incoming_msg_img" style={{width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden'}}>
                {
                    (image)
                        ?
                    <img src={image} alt="imagen" className='img-fluid' style={{objectFit: 'cover'}} />
                        :
                    <img src={perfil1} alt="sunil" style={{objectFit: 'cover'}} />
                }
            </div>
            <div className="received_msg">
                <div className="received_withd_msg">
                    <p className='p-3 image-round'>{msg.message}</p>
                    <span className="time_date mb-3"> {timeMonth(msg.createdAt)}</span>
                </div>
            </div>
        </div>
    )
}
