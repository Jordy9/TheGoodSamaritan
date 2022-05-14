import React, { useEffect } from 'react';
import { ChatSelect } from './ChatSelect';
import { InboxPeople } from './InboxPeople';
import { Messages } from './Messages';

import './chat.css';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { clearChatAtive } from '../../action/chat';
import { useNoticeChat } from '../../hooks/useNoticeChat';

export const ChatPage = () => {

    const dispatch = useDispatch()

    const [width, setWidth] = useState(window.innerWidth);

    const {chatActivo} = useSelector(state => state.cht)

    const changeWidth = () => {
        setWidth(window.innerWidth)
    }

    const [first, setfirst] = useState(false);

    useEffect(() => {
        window.addEventListener('resize', changeWidth)
        if (width <= 820) {
            if (chatActivo !== null) {
                setfirst(true)
            } else {
                setfirst(false)
            }
        } else {
            setfirst(false)
        }

        return () => window.removeEventListener('resize', changeWidth)
        
    }, [chatActivo, width]);  

    const click = () => {
        dispatch(clearChatAtive())
    }

    useNoticeChat()

    return (
        <div>
            <h1>Chat</h1>
            <div className="shadow p-2 bg-dark image-round flex-column">
                <div className="row">
                    <div hidden = {first} className="col-xs-5 col-sm-12 col-md-4 col-lg-4 col-xl-4 ">
                        <div className="inbox_msg" style={{borderBottomLeftRadius: '40px'}}>

                            <InboxPeople />
                            
                        </div>
                    </div>

                    <div className={`${(!first) ? 'col-xs-7 col-sm-12 col-md-8 col-lg-8 col-xl-8' : 'col-xs-7 col-sm-12 col-md-12 col-lg-8 col-xl-8'}`}>
                        <i onClick={click} hidden = {(!first)} className="bi bi-arrow-left ml-2" style={{margin: 0, cursor: 'pointer'}}></i>
                        {
                            (chatActivo)
                                ? 
                            <Messages />
                                :
                            <ChatSelect />
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
