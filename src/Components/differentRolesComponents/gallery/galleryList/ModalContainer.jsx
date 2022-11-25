import React from 'react'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { SetActiveGallery, startDeleteGallery } from '../../../../action/gallery'

export const ModalContainer = (props) => {

  const {title, image} = props

    const dispatch = useDispatch()

    const handledSet = () => {
      dispatch(SetActiveGallery(props))
    }

    const Handleddelete = () => {
      dispatch(SetActiveGallery(props))
        Swal.fire({
          title: '¿Esta seguro que desea eliminar esta imagen de la galería?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Eliminar'
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(startDeleteGallery(props))
          }
        })
      }
    return (
        <>
          <tr>
              <th>{title}</th>
              <td><img src = {image} alt="" style = {{height: '60px', width: '60px'}} /></td>
              <td>
                  <button onClick = {handledSet} className = 'btn btn-outline-primary mr-1 mt-2' data-bs-toggle="modal" data-bs-target="#exampleModal8" style = {{borderRadius: '100%'}}><i className="bi bi-eye" style = {{color: '#0D6EFD'}}></i></button>
                  <button onClick = {Handleddelete} className = 'btn btn-outline-danger ml-1 mt-2' style = {{borderRadius: '100%'}}><i className="bi bi-trash" style = {{color: 'red'}}></i></button>
              </td>
          </tr>
        </>
    )
}
