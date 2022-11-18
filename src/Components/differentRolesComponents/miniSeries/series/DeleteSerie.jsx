import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import Swal from 'sweetalert2'
import { startDeleteSerie } from '../../../action/miniSerie'
import './DeleteSerie.css'

export const DeleteSerie = () => {
    const dispatch = useDispatch()

    const {activeSerie} = useSelector(state => state.mi)

    const Handleddelete = () => {
        Swal.fire({
          title: '¿Esta seguro que desea eliminar esta mini serie?',
          icon: 'warning',
          showCancelButton: true,
          confirmButtonColor: '#d33',
          cancelButtonColor: '#3085d6',
          confirmButtonText: 'Eliminar'
        }).then((result) => {
          if (result.isConfirmed) {
            dispatch(startDeleteSerie(activeSerie))
            Swal.fire(
              'Eliminado!',
              'Usuario eliminado exitosamente',
              'success'
            )
          }
        })
      }
    return (
        <i className="bi bi-x-circle fabDelete" onClick = {Handleddelete}></i>
    )
}
