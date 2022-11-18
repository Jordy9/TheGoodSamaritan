import React from 'react'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { SetActiveVideoWordOfTheDay, startDeleteVideoWordOfTheDay } from '../../../../action/VideoWordOfTheDay'
import moment from 'moment'

export const ModalContainer = (props) => {

  const {title, createdAt, image} = props

    const dispatch = useDispatch()

    const handledSet = () => {
      dispatch(SetActiveVideoWordOfTheDay(props))
    }

    const Handleddelete = () => {
      dispatch(SetActiveVideoWordOfTheDay(props))
        Swal.fire({
          title: '¿Esta seguro que desea eliminar este video?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Eliminar'
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(startDeleteVideoWordOfTheDay())
          }
        })
      }
    return (
        <>
          <tr>
              <th>{title}</th>
              <th>{moment(createdAt).format('MMMM Do YYYY, h:mm a')}</th>
              <td><video autoPlay = {false} src={image} style = {{height: '60px', width: '60px'}}></video></td>
              <td>
                  <button onClick = {handledSet} className = 'btn btn-outline-primary mr-1 mt-2' data-bs-toggle="modal" data-bs-target="#exampleModalVideoWordOfTheDayModal" style = {{borderRadius: '100%'}}><i className="bi bi-eye" style = {{color: '#0D6EFD'}}></i></button>
                  <button onClick = {Handleddelete} className = 'btn btn-outline-danger ml-1 mt-2' style = {{borderRadius: '100%'}}><i className="bi bi-trash" style = {{color: 'red'}}></i></button>
              </td>
          </tr>
        </>
    )
}
