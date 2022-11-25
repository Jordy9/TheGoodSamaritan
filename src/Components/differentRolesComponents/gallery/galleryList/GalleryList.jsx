import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { startGetPaginateGallery } from '../../../../action/gallery';
import { GalleryModal } from '../modal/GalleryModal';
import { PaginateGallery } from '../paginate/PaginateGallery';
import { ModalListContainer } from './ModalListContainer';

export const GalleryList = () => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(startGetPaginateGallery())

  }, [dispatch])

    return (
        <>
          <h1 style = {{marginTop: '30px'}}>Listado de la galería</h1>
          <div className="table-responsive">
            <table className="table text-white bg-dark text-center">
              <thead>
                <tr>
                  <th>Título</th>
                  <th>Imagen</th>
                  <th>Acción</th>
                </tr>
              </thead>
              <tbody>
                <ModalListContainer />
              </tbody>
            </table>
          </div>

            <GalleryModal />

            <PaginateGallery />
        </>
    )
}
