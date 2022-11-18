import React from 'react'
import { ModalUpdate } from './modal/Modal'
import { UserList } from './userList/UserList'

export const Usuarios = () => {
    return (
        <>
            <h1 style = {{marginTop: '30px'}}>Listado de Usuarios</h1>
            <UserList />
            <ModalUpdate />
        </>
    )
}
