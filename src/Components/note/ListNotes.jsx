import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Swal from 'sweetalert2'
import { setDeleteNota, setNota, startDeleteNota, startGetNotes } from '../../action/notas'
import h2p from 'html2plaintext'
import moment from 'moment'

export const ListNotes = ({setShow}) => {

    const dispatch = useDispatch()

    const {notes} = useSelector(state => state.nts)
    const {uid} = useSelector(state => state.auth)

    const handledEdit = (nota) => {
        dispatch(setNota(nota))
        setShow(false)
    }

    const handledDelete = (nota) => {
        Swal.fire({
            title: '¿Está seguro que desea eliminar esta nota?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Eliminar'
          }).then((result) => {
            if (result.isConfirmed) {
                dispatch(setDeleteNota(nota))
                dispatch(startDeleteNota())
            }
          })
    }

    useEffect(() => {
        dispatch(startGetNotes())
    }, [dispatch])

  return (
    <div style={{overflowY: 'auto', height: '450px'}} className="col-12">
        <div className="row">
            <div className="col-12 form-group">
                <h5 className="text-white text-center mt-2">Listado de Notas</h5>
            </div>
            <div className='d-flex justify-content-end mb-3'>
                <button onClick={() => setShow(false)} className='btn btn-outline-primary'>Crear una nota</button>
            </div>
        </div>

        <div className="table-responsive">
            <table className="table text-white bg-dark text-center">
                <thead>
                    <tr>
                    <th>Título</th>
                    <th>Fecha</th>
                    <th>Descripción</th>
                    <th>Acción</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        notes?.filter(notes => notes.user.id === uid).map(notes => {
                            return (
                                <tr key={notes._id}>
                                    <th>{notes?.title}</th>
                                    <th>{moment(notes?.createdAt).format('MMMM Do YYYY, h:mm a')}</th>
                                    <td>
                                        {
                                        (h2p(notes?.descripcion).length > 9)
                                            ?
                                        h2p(notes?.descripcion).slice(0, 40) + '...'
                                            :
                                        h2p(notes?.descripcion)
                                        }
                                    </td>
                                    <td>
                                        <button onClick={() => handledEdit(notes)} className = 'btn btn-outline-primary mr-1 mt-2' style = {{borderRadius: '100%'}}><i className="bi bi-eye" style = {{color: '#0D6EFD'}}></i></button>
                                        <button onClick={() => handledDelete(notes)} className = 'btn btn-outline-danger ml-1 mt-2' style = {{borderRadius: '100%'}}><i className="bi bi-trash" style = {{color: 'red'}}></i></button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    </div>
  )
}
