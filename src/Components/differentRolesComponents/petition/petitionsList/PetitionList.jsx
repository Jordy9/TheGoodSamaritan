import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { startGetPaginatePetitions } from '../../../../action/petition';
import {PetitionModal} from '../modal/PetitionModal'
import { PaginatePetition } from '../paginate/PaginatePetition';
import { ModalListContainer } from './ModalListContainer';

export const PetitionList = () => {

  const dispatch = useDispatch()

  const [title, setTitle] = useState('')

  useEffect(() => {
    dispatch(startGetPaginatePetitions())
  }, [dispatch])


    return (
        <>
          <h1 style = {{marginTop: '30px'}}>Listado de Peticiones de oración de pastores</h1>
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
                  <th>Fecha</th>
                  <th>Descripción</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                <ModalListContainer title={title} />
              </tbody>
            </table>
          </div>

             <PetitionModal />

             <PaginatePetition />
        </>
    )
}
