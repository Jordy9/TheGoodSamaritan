import React, { useEffect, useState } from 'react'
import { Chat } from './Chat'
import perfil1 from '../../heroes/User.png'
import { SelectChat } from './SelectChat'
import { Sidebar } from './Sidebar'
import { useNoticeChat } from '../../hooks/useNoticeChat'
import { clearChatAtive } from '../../action/chat'
import { useDispatch, useSelector } from 'react-redux'
import { ModalImage } from './ModalImage'

export const ChatScreen = () => {

    const dispatch = useDispatch()

    const [width, setWidth] = useState(window.innerWidth);

    const {chatActivo, image, usuarios} = useSelector(state => state.cht)

    const user = usuarios?.filter(usuarios => usuarios.id === chatActivo)

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
    <div className='row'>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12">
            <div className="row">
                <div hidden = {first} className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
                    <div className='shadow p-4 bg-dark image-round flex-column text-white'>
                        <Sidebar />
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-8 col-xl-8">
                    <div className='shadow p-2 bg-dark image-round flex-column text-white'>
                        {
                            (!chatActivo)
                                ?
                            <SelectChat />
                                :
                            <>
                            <div className='d-flex align-items-center'>
                                <i onClick={click} hidden = {(!first)} className="bi bi-arrow-left ml-2 mr-3" style={{margin: 0, cursor: 'pointer'}}></i>
                                <div style={{width: '50px', height: '50px', borderRadius: '50%', overflow: 'hidden'}}>
                                    {
                                        (image)
                                            ?
                                        <img data-bs-toggle="modal" data-bs-target="#exampleModalImageChatUser" src={image} alt="sunil" style={{objectFit: 'cover', cursor: 'pointer'}} />
                                            :
                                        <img data-bs-toggle="modal" data-bs-target="#exampleModalImageChatUser" src={perfil1} style = {{cursor: 'pointer'}} alt="sunil" />
                                    }
                                </div>
                                <span style = {{cursor: 'pointer'}} data-bs-toggle="modal" data-bs-target="#exampleModalImageChatUser" className='mx-2'><strong>{user[0].name} {user[0].lastName}</strong></span>
                                <span className={`${user[0]?.online ? 'text-success' : 'text-danger'}`}>{user[0]?.online ? 'En linea' : 'Sin conexión'}</span>
                            </div>
                            <Chat />
                            </>
                        }
                    </div>
                </div>
            </div>
        </div>
        {
            (chatActivo)
                &&
            <ModalImage image={image} perfil = {perfil1} user = {user} />
        }
    </div>
  )
}
