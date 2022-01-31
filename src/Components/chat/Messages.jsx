import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { scrollToBottomAnimated } from '../../helper/ScrollToBottom';
import { IncomingMessage } from './IncomingMessage';
import { OutgoingMessage } from './OutgoingMessage';
import { SendMessage } from './SendMessage';

export const Messages = () => {

    const scrollRef = useRef()

    const {mensajes} = useSelector(state => state.cht)
    const {uid} = useSelector(state => state.auth)

    useEffect(() => {
            
        scrollRef.current?.addEventListener('DOMNodeInserted', scrollToBottomAnimated('messages'))

    }, [mensajes])

    return (
        <div className="mesgs">

            {/* <!-- Historia inicio --> */}
            <div ref={scrollRef} id='messages' className="msg_history">

                {
                    mensajes.map( msg => (
                        ( msg.to === uid )
                            ? <IncomingMessage key={ msg._id } msg = {msg} />
                            : <OutgoingMessage key={ msg._id } msg = {msg} />
                    ))
                }

            </div>
            {/* <!-- Historia Fin --> */}

           <SendMessage />

        </div>
    )
}
