import React from 'react'
import { useSelector } from 'react-redux'
import { SidebarChat } from './SidebarChat'

export const Sidebar = () => {

    const {usuarios, typing} = useSelector(state => state.cht)
    const {uid} = useSelector(state => state.auth)

    const istyping = usuarios?.filter(usuarios => usuarios.id === typing?.uid)

  return (
    <div style={{height: '77.2vh', overflowY: 'auto', overflowX: 'hidden'}}>
        {
            usuarios.filter(usuario => usuario.id !== uid && usuario.role !== 'Pastor' &&  usuario.role !== 'Gestorcontenido').map( (usuarios) => (
                <SidebarChat key={ usuarios.id }
                usuarios = {usuarios}
                istyping = {istyping} />
            ))
        }
    </div>
  )
}
