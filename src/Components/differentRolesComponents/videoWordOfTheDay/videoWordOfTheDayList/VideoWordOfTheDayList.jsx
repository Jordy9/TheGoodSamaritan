import React from 'react'
import { useState } from 'react';
import { startGetPaginateVideosSearch } from '../../../../action/VideoWordOfTheDay';
import { useDebounce } from '../../../../hooks/useDebounce';
import { VideoWordOfTheDayModal } from '../modal/VideoWordOfTheDayModalModal';
import { PaginateVideo } from '../paginate/PaginateVideo';
import { ModalListContainer } from './ModalListContainer';

export const VideoWordOfTheDayList = () => {

    const { onQueryChange } = useDebounce(startGetPaginateVideosSearch)

    const [searchParam, setSearchParam] = useState('')

    const onChange = (target) => {
      onQueryChange(target)
      setSearchParam(target.value)
    }

    return (
        <>
          <h1 style = {{marginTop: '30px'}}>Listado de Palabra Del Día</h1>
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
                  <th>Video</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                <ModalListContainer />
              </tbody>
            </table>
          </div>
            <VideoWordOfTheDayModal />

            <PaginateVideo searchParam = {searchParam} />
        </>
    )
}
