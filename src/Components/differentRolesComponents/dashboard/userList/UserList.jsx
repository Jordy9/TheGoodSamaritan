import React, { useState } from 'react'
import { useEffect } from 'react';
import { Pagination } from '../../pagination/Pagination';
import { ModalListContainer } from './ModalListContainer';

export const UserList = () => {

    const [currentPage, setCurrentPage] = useState(0)
    
    useEffect(() => {
      setCurrentPage(0)
    }, [])

    const [title, setTitle] = useState('')

    return (
      <>
        <div className="input-group justify-content-end mb-3">
          <div className="form-outline">
            <input placeholder='Buscador' type="search" value={title} onChange={({target}) => setTitle(target.value)} className="form-control bg-transparent text-white" />
          </div>
        </div>
      
        <div className='table-responsive'>
          <table className="table text-white bg-dark text-center">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Correo Electrónico</th>
                <th>País</th>
                <th>Rol</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              <ModalListContainer title = {title} currentPage = {currentPage} />
            </tbody>
          </table>

          <Pagination setCurrentPage = {setCurrentPage} />
        </div>
      </>
    )
}
