import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import h2p from 'html2plaintext'
import { SetActivePetitionSinCuenta, startDeletePetitionSinCuenta } from '../../../../action/petition'
import moment from 'moment'

export const ModalContainerSinCuenta = (props) => {

  const {socket} = useSelector(state => state.sk)

  const {_id, title, name, number, createdAt, descripcion, check} = props

    const dispatch = useDispatch()

    const handledSet = () => {
      dispatch(SetActivePetitionSinCuenta(props))
    }

    const [checkcont, setCheckcont] = useState(check)

    useEffect(() => {
      setCheckcont(check)
    }, [check])

    const handledChangeCheck = () => {
      if (checkcont === false) {
        setCheckcont(true)
      } else {
        setCheckcont(false)
      }
      socket?.emit('check-petitions-sin-cuenta', _id)
    }

    const Handleddelete = () => {
      dispatch(SetActivePetitionSinCuenta(props))
        Swal.fire({
          title: '¿Esta seguro que desea eliminar esta petición de oración?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Eliminar'
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(startDeletePetitionSinCuenta())
          }
        })
      }
    return (
        <>
          <tr style={{backgroundColor: (checkcont) && 'green'}}>
              <th>{title}</th>
              <th>{name}</th>
              <th>{number}</th>
              <td>{moment(createdAt).format('MMMM Do YYYY, h:mm a')}</td>
              <td>
                {
                  (h2p(descripcion).length > 9)
                    ?
                  h2p(descripcion).slice(0, 40) + '...'
                    :
                  h2p(descripcion)
                }
              </td>
              <td>
                  <button onClick = {handledSet} className = 'btn btn-outline-primary mr-1 mt-2' data-bs-toggle="modal" data-bs-target="#exampleModal11" style = {{borderRadius: '100%'}}><i className="bi bi-eye" style = {{color: '#0D6EFD'}}></i></button>
                  <button onClick = {Handleddelete} className = 'btn btn-outline-danger ml-1 mt-2' style = {{borderRadius: '100%'}}><i className="bi bi-trash" style = {{color: 'red'}}></i></button>
                  <button onClick={handledChangeCheck} className = 'btn btn-outline-success ml-1 mt-2' style = {{borderRadius: '100%'}}><i className="bi bi-check-lg text-success"></i></button>
              </td>
          </tr>
        </>
    )
}
