import React from 'react';
import { useSelector } from 'react-redux';
import { IncomingMessage } from './IncomingMessage';
import { OutgoingMessage } from './OutgoingMessage';
import { SendMessage } from './SendMessage';

export const Messages = () => {

    const {mensajes} = useSelector(state => state.cht)
    const {uid} = useSelector(state => state.auth)

    return (
        <div className="mesgs">

            {/* <!-- Historia inicio --> */}
            <div id='messages' className="msg_history">

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
