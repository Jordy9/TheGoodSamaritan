import React from 'react'
import { useState } from 'react';
import { startGetPaginateBosquejoSearch } from '../../../../action/sketch';
import { useDebounce } from '../../../../hooks/useDebounce';
import { SketchModal } from '../modal/SketchModal';
import { PaginateSketch } from '../paginate/PaginateSketch';
import { ModalListContainer } from './ModalListContainer';

export const SketchsList = () => {

    const { onQueryChange } = useDebounce(startGetPaginateBosquejoSearch)

    const [searchParam, setSearchParam] = useState('')

    const onChange = (target) => {
      onQueryChange(target)
      setSearchParam(target.value)
    }

    return (
        <>
          <h1 style = {{marginTop: '30px'}}>Listado de Bosquejos</h1>
          <div className="input-group justify-content-end mb-3">
            <div className="form-outline">
              <input placeholder='Buscador' type="search" onChange={({target}) => onChange(target)} className="form-control bg-transparent text-white" />
            </div>
          </div>
          <div className="table-responsive">
            <table className="table text-white bg-dark text-center">
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Fecha</th>
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

             <SketchModal />

             <PaginateSketch searchParam = {searchParam} />
        </>
    )
}
