import React from 'react'
import { useSelector } from 'react-redux'
import { SidebarChatItem } from './SidebarChatItem'

export const Sidebar = () => {

    const {usuarios, typing} = useSelector(state => state.cht)
    const {uid} = useSelector(state => state.auth)

    const istyping = usuarios?.filter(usuarios => usuarios.id === typing?.uid)
    
    return (
        <div className="inbox_chat bg-dark">

            {
                usuarios.filter(usuario => usuario.id !== uid).map( (usuarios) => (
                    <SidebarChatItem key={ usuarios.id }
                    usuarios = {usuarios}
                    istyping = {istyping} />
                ))
            }

        </div>

    )
}
