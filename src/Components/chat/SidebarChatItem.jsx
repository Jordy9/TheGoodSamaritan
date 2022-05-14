import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { activeChat, cargarChat } from '../../action/chat'
import { BorrarNotificaciones } from '../../action/notifications'
import perfil1 from '../../heroes/User.png'

export const SidebarChatItem = ({usuarios, istyping}) => {

    const dispatch = useDispatch()

    const {chatActivo, typing} = useSelector(state => state.cht)

    const {uid} = useSelector(state => state.auth)

    const {notificaciones} = useSelector(state => state.nt)

    const onclick = () => {
        dispatch(activeChat(usuarios.id))

        dispatch(cargarChat(usuarios.id))

        if (notificaciones.length !== 0) {
            dispatch(BorrarNotificaciones(uid, chatActivo))
        } else {
            return
        }
    }

    const lol = notificaciones.filter(not => not.from === usuarios.id)

    const notify = lol.filter(not => not.to === uid)

    return (
        <div className={`chat_list row ${(usuarios.id === chatActivo) && 'active_chat'}`} onClick={onclick}>
            {/* active_chat */}
            <div className="chat_people col-12">
                <div className="row">
                    <div className="chat_img col-xs-2 col-sm-2 col-md-4 col-lg-3 col-xl-2">
                        <div style={{width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden'}}>
                        {
                            (usuarios.urlImage)
                                ?
                            <img src={usuarios.urlImage} alt="sunil" style={{objectFit: 'cover'}} />
                                :
                            <img src={perfil1} alt="sunil" />
                        }
                        </div>
                        <span hidden = {notify.length === 0} className="badge bg-danger">{notify.length}</span>
                    </div>
                    <div className="chat_ib col-xs-10 col-sm-10 col-md-8 col-lg-9 col-xl-10">
                        <h5 className='text-white'>{usuarios.name} {usuarios.lastName}</h5>
                        {
                            (istyping[0] === usuarios && typing?.typing === false)
                                &&
                                <>
                            <span className="d-flex text-secondary">Escribiendo</span>
                                </>

                        }
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
        </div>
    )
}
