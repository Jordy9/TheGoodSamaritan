import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { activeChat, cargarChat } from '../../action/chat'
import user from '../../heroes/user-profile.png'

export const SidebarChatItem = ({usuarios}) => {

    const dispatch = useDispatch()

    const {chatActivo} = useSelector(state => state.cht)

    const onclick = () => {
        dispatch(activeChat(usuarios.id))

        dispatch(cargarChat(usuarios.id))
    }

    return (
        <div className={`chat_list ${(usuarios.id === chatActivo) && 'active_chat'}`} onClick={onclick}>
            {/* active_chat */}
            <div className="chat_people">
                <div className="chat_img"> 
                    {
                        (usuarios.urlImage)
                            ?
                        <img src={usuarios.urlImage} alt="sunil" className='rounded-circle' />
                            :
                        <img src={user} alt="sunil" />
                    }
                </div>
                <div className="chat_ib">
                    <h5 className='text-white'>{usuarios.name} {usuarios.lastName}</h5>
                    {
                        (usuarios.online)
                            ?
                        <span className="text-success">Conectado</span>
                            :
                        <span className="text-danger">Desconectado</span>
                    }
                </div>
            </div>
        </div>
    )
}
