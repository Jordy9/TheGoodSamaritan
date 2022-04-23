import Swal from "sweetalert2"
import { fetchConToken } from "../helper/fetch"
import { Types } from "../types/Types"


export const startGetNotes = () => {
    return async(dispatch) => {

        const resp = await fetchConToken('notas')
        const body = await resp.json()

        if(body.ok) {
          dispatch(Notes(body.notas))
        }
    }
}

const Notes = (notas) => ({
    type: Types.ntsGetNota,
    payload: notas
})


export const startCreateNote = (title, descripcion) => {
    return async(dispatch) => {

        const resp = await fetchConToken('notas', {title, descripcion}, 'POST');
        const body = await resp.json()

        if (body.ok) {

            dispatch(createNota(body.nota))
            dispatch(startGetNotes())
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 5000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              return Toast.fire({
                icon: 'success',
                title: 'Nota creada correctamente'
              })
        } else {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 5000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              return Toast.fire({
                icon: 'error',
                title: `${body.msg}`
              })
        }

        
    }
}

const createNota = (nota) => ({
    type: Types.ntsCrearNota,
    payload: nota
})

export const startUpdateNota = (title, descripcion) => {
    return async(dispatch, getState) => {

        const {activeNote} = getState().nts
  
        const resp = await fetchConToken(`notas/${activeNote._id}`, {title, descripcion}, 'PUT');
        const body = await resp.json()

        if (body.ok) {

            dispatch(updateNota(body.nota))
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 5000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              return Toast.fire({
                icon: 'success',
                title: 'Nota actualizada correctamente'
              })
        } else {
            Swal.fire('Error', body.msg, 'error')
        }

    }
}

const updateNota = (nota) => ({
    type: Types.ntsUpdateNota,
    payload: nota
})

export const startDeleteNota = () => {
    return async(dispatch, getState) => {
      
        const {activeDeleteNote} = getState().nts

        const resp = await fetchConToken(`notas/${activeDeleteNote._id}`, activeDeleteNote, 'DELETE')

        const body = await resp.json()

        if(body.ok) {
            dispatch(deleteNota(activeDeleteNote))
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 5000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              return Toast.fire({
                icon: 'success',
                title: 'Nota eliminada correctamente'
              })
        } else {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 5000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })
          
          return Toast.fire({
            icon: 'error',
            title: body.msg
          })
        }
    }

}

const deleteNota = (nota) => ({
    type: Types.ntsDeleteNota,
    payload: nota
})

export const setNota = (nota) => ({
    type: Types.ntsSetNota,
    payload: nota
})

export const setDeleteNota = (nota) => ({
    type: Types.ntsSetDeleteNota,
    payload: nota
})

export const clearSetNota = () => ({
    type: Types.ntsSetNota
})