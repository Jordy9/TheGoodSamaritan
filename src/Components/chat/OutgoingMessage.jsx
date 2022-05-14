import React from 'react'
import { timeMonth } from '../../helper/ScrollToBottom'

export const OutgoingMessage = ({msg}) => {
    return (
        <div className="outgoing_msg">
            <div className="sent_msg">
                <p className='p-3 image-round'>{msg.message}</p>
                <span className="time_date"> {timeMonth(msg.createdAt)}</span>
            </div>
        </div>
    )
}
