import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { startGetPaginateContact } from '../../../../action/contact';
import { ContactModal } from '../modal/ContactModal';
import { PaginateContact } from '../paginate/PaginateContact';
import { ModalListContainer } from './ModalListContainer';

export const ContactList = () => {

  const dispatch = useDispatch()

  const [title, setTitle] = useState('')

  useEffect(() => {
    dispatch(startGetPaginateContact())
  }, [dispatch])


    return (
        <div className='table-responsive'>
          <div className="input-group justify-content-end mb-3">
            <div className="form-outline">
              <input placeholder='Buscador' type="search" value={title} onChange={({target}) => setTitle(target.value)} className="form-control bg-transparent text-white" />
            </div>
          </div>
          <table className="table text-white bg-dark text-center">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Fecha</th>
                <th>Correo electrónico</th>
                <th>Descripción</th>
                <th>Acción</th>
              </tr>
            </thead>
            <tbody>
              <ModalListContainer title = {title} />
            </tbody>
          </table>

             <ContactModal />

             <PaginateContact />
          </div>
    )
}
