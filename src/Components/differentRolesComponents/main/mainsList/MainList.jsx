import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { startGetPaginateMains } from '../../../../action/main';
import { MainModal } from '../modal/MainModal';
import { PaginateMain } from '../paginate/PaginateGallery';
import { ModalListContainer } from './ModalListContainer';

export const MainList = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startGetPaginateMains())

  }, [dispatch])

    return (
        <>
          <h1 style = {{marginTop: '30px'}}>Listado del carrusel</h1>
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

             <MainModal />

             <PaginateMain />
        </>
    )
}
