import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { startGetPaginatePetitionUser } from '../../../../action/petition';
import { PetitionModalUser } from '../modal/PetitionModalUser';
import { PaginatePetitionUser } from '../paginate/PaginatePetitionUser';
import { ModalListContainerUser } from './ModalListContainer';

export const PetitionListUser = () => {

  const dispatch = useDispatch()

  const [title, setTitle] = useState('')

  useEffect(() => {
    dispatch(startGetPaginatePetitionUser())
  }, [dispatch])


    return (
        <>
          <h1 style = {{marginTop: '30px'}}>Listado de Peticiones de oración de usuarios</h1>
          <div className="input-group justify-content-end mb-3">
            <div className="form-outline">
              <input placeholder='Buscador' type="search" value={title} onChange={({target}) => setTitle(target.value)} className="form-control bg-transparent text-white" />
            </div>
          </div>
          <div className="table-responsive">
            <table className="table text-white bg-dark text-center">
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Nombre</th>
                  <th>Número de teléfono</th>
                  <th>Fecha</th>
                  <th>Descripción</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                <ModalListContainerUser title = {title} />
              </tbody>
            </table>
          </div>
             <PetitionModalUser />

             <PaginatePetitionUser />
        </>
    )
}
