import React from 'react'
import { ModalBeleaver } from '../modal/ModalBeleaver';
import { ModalListContainer } from './ModalListContainer';

export const BeleaverList = () => {

    return (
        <>
          <h1 style = {{marginTop: '30px'}}>Listado de información para nuevos creyentes</h1>
          <div className="table-responsive">
            <table className="table text-white bg-dark text-center">
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Descripción</th>
                  <th>Imagen</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                <ModalListContainer />
              </tbody>
            </table>
          </div>

             <ModalBeleaver />
        </>
    )
}
