import React, { useState } from 'react'
import { startGetPaginateYoutubeSearch } from '../../../../action/youtubeImage';
import { useDebounce } from '../../../../hooks/useDebounce';
import { YoutubeModal } from '../modal/YoutubeModal';
import { PaginateYoutube } from '../paginate/PaginateYoutube';
import { ModalListContainer } from './ModalListContainer';

export const YoutubeList = () => {

    const { onQueryChange } = useDebounce(startGetPaginateYoutubeSearch)

    const [searchParam, setSearchParam] = useState('')

    const onChange = (target) => {
      onQueryChange(target)
      setSearchParam(target.value)
    }

    return (
        <>
          <h1 style = {{marginTop: '30px'}}>Listado de links de videos</h1>
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
                  <th>Link</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                <ModalListContainer />
              </tbody>
            </table>
          </div>

             <YoutubeModal />

             <PaginateYoutube searchParam = {searchParam} />
        </>
    )
}
