import React from 'react'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { SetActiveYoutube, startDeleteYoutube } from '../../../../action/youtubeImage'
import h2p from 'html2plaintext'
import moment from 'moment'

export const ModalContainer = (props) => {

  const {title, createdAt, urlImage} = props

    const dispatch = useDispatch()

    const handledSet = () => {
      dispatch(SetActiveYoutube(props))
    }

    const Handleddelete = () => {
      dispatch(SetActiveYoutube(props))
        Swal.fire({
          title: '¿Esta seguro que desea eliminar este video?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Eliminar'
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(startDeleteYoutube())
          }
        })
      }
    return (
        <>
          <tr>
              <th>{title}</th>
              <th>{moment(createdAt).format('MMMM Do YYYY, h:mm a')}</th>
              <td>
                {
                  (h2p(urlImage).length > 9)
                    ?
                  h2p(urlImage).slice(0, 40) + '...'
                    :
                  h2p(urlImage)
                }
              </td>
              <td>
                  <button onClick = {handledSet} className = 'btn btn-outline-primary mr-1 mt-2' data-bs-toggle="modal" data-bs-target="#exampleModal12" style = {{borderRadius: '100%'}}><i className="bi bi-eye" style = {{color: '#0D6EFD'}}></i></button>
                  <button onClick = {Handleddelete} className = 'btn btn-outline-danger ml-1 mt-2' style = {{borderRadius: '100%'}}><i className="bi bi-trash" style = {{color: 'red'}}></i></button>
              </td>
          </tr>
        </>
    )
}
