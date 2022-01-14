import React from 'react';
import { ChatSelect } from './ChatSelect';
import { InboxPeople } from './InboxPeople';
import { Messages } from './Messages';

import './chat.css';
import { useSelector } from 'react-redux';

export const ChatPage = () => {

    const {chatActivo} = useSelector(state => state.cht)

    return (
        <div style={{marginTop: '18vh'}}>
            <div className="shadow p-2 bg-dark rounded-lg flex-column">
                <div className="row">
                    <div className="col-xs-5 col-sm-5 col-md-4 col-lg-4 col-xl-4 ">
                        <div className="inbox_msg">

                            <InboxPeople />
                            
                        </div>
                    </div>

                    <div className="col-xs-7 col-sm-7 col-md-8 col-lg-8 col-xl-8">
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
