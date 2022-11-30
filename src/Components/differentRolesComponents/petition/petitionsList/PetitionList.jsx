import React from 'react'
import {PetitionModal} from '../modal/PetitionModal'
import { PaginatePetition } from '../paginate/PaginatePetition';
import { ModalListContainer } from './ModalListContainer';

export const PetitionList = () => {

    return (
        <>
          <h1 style = {{marginTop: '30px'}}>Listado de Peticiones de oración</h1>
          <div className="table-responsive">
            <table className="table text-white bg-dark text-center">
              <thead>
                <tr>
                  <th>Nombre</th>
                  <th>Título</th>
                  <th>Fecha</th>
                  <th>Descripción</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                <ModalListContainer />
              </tbody>
            </table>
          </div>

             <PetitionModal />

             <PaginatePetition />
        </>
    )
}
