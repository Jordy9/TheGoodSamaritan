import React from 'react'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { SetActiveBosquejo, startDeleteBosquejo } from '../../../../action/sketch'
import h2p from 'html2plaintext'
import moment from 'moment'

export const ModalContainer = (props) => {

  const {title, createdAt, descripcion, image} = props

    const dispatch = useDispatch()

    const handledSet = () => {
      dispatch(SetActiveBosquejo(props))
    }

    const Handleddelete = () => {
      dispatch(SetActiveBosquejo(props))
        Swal.fire({
          title: '¿Esta seguro que desea eliminar este bosquejo?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Eliminar'
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(startDeleteBosquejo())
          }
        })
      }
    return (
        <>
          <tr>
              <th>{title}</th>
              <td>{moment(createdAt).format('MMMM Do YYYY, h:mm a')}</td>
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
                  <button onClick = {handledSet} className = 'btn btn-outline-primary mr-1 mt-2' data-bs-toggle="modal" data-bs-target="#exampleModal4" style = {{borderRadius: '100%'}}><i className="bi bi-eye" style = {{color: '#0D6EFD'}}></i></button>
                  <button onClick = {Handleddelete} className = 'btn btn-outline-danger ml-1 mt-2' style = {{borderRadius: '100%'}}><i className="bi bi-trash" style = {{color: 'red'}}></i></button>
              </td>
          </tr>
        </>
    )
}
