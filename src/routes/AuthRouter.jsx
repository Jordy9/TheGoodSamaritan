import React from 'react'
import { useSelector } from 'react-redux'
import { AdminRoute } from './AdminRoute';
import { ColaboradorRoute } from './ColaboradorRoute';
import { GestorContenido } from './GestorContenido';
import { PastorRoute } from './PastorRoute';
import { UsersRoute } from './UsersRoute'

export const AuthRouter = () => {

    const { activeUser } = useSelector(state => state.auth);
    
  return (
    <>
        {
            (activeUser?.role === 'Administrador')
                &&
            <AdminRoute />
        }

        {
            (activeUser?.role === 'Pastor')
                &&
            <PastorRoute />
        }

        {
            (activeUser?.role === 'Gestorcontenido')
                &&
            <GestorContenido />
        }

        {
            (activeUser?.role === 'Colaborador')
                &&
            <ColaboradorRoute />
        }

        {
            (activeUser?.role === 'Usuario')
                &&
            <UsersRoute />
        }
    </>
  )
}
