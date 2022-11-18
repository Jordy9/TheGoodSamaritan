import React from 'react'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import h2p from 'html2plaintext'
import { SetactiveBeleaver, startDeleteBeleaver } from '../../../../action/beleaver'

export const ModalContainer = (props) => {

  const {title, descripcion, image} = props

    const dispatch = useDispatch()

    const handledSet = () => {
      dispatch(SetactiveBeleaver(props))
    }

    const Handleddelete = () => {
      dispatch(SetactiveBeleaver(props))
        Swal.fire({
          title: '¿Esta seguro que desea eliminar esta información para nuevos creyentes?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Eliminar'
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(startDeleteBeleaver())
          }
        })
      }
    return (
        <>
          <tr>
              <th>{title}</th>
              <td>
                {
                  (h2p(descripcion).length > 9)
                    ?
                  h2p(descripcion).slice(0, 10) + '...'
                    :
                  h2p(descripcion)
                }
              </td>
              <td><img src = {image} alt="" style = {{height: '60px', width: '60px'}} /></td>
              <td>
                  <button onClick = {handledSet} className = 'btn btn-outline-primary mr-1 mt-2' data-bs-toggle="modal" data-bs-target="#exampleModalbl" style = {{borderRadius: '100%'}}><i className="bi bi-eye" style = {{color: '#0D6EFD'}}></i></button>
                  <button onClick = {Handleddelete} className = 'btn btn-outline-danger ml-1 mt-2' style = {{borderRadius: '100%'}}><i className="bi bi-trash" style = {{color: 'red'}}></i></button>
              </td>
          </tr>
        </>
    )
}
