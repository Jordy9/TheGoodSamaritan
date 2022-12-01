import { fetchConToken, fetchSinToken } from "../helper/fetch"
import { Types } from "../types/Types"
import Swal from 'sweetalert2'

export const startGetPaginatePetitions = (page) => {
  return async(dispatch) => {
      const resp = await fetchSinToken(`peticion/pet?page=${page || 1}`)
      const body = await resp.json()

      if(body.ok) {
          dispatch(CreatePaginatePetitionsAll(body.peticiones))
          dispatch(PaginatePetitions({
            page: body.page,
            total: body.total
          }))
      }
  }
}

export const startGetPaginatePetitionsAdmin = (page) => {
  return async(dispatch) => {
      const resp = await fetchSinToken(`peticion/pet?page=${page || 1}`)
      const body = await resp.json()

      if(body.ok) {
          dispatch(getPaginatePetitionsAll(body.peticiones))
          dispatch(PaginatePetitions({
              page: body.page,
              total: body.total
          }))
      }
  }
}

export const startGetPaginatePetitionsUser = (page, id) => {
  return async(dispatch) => {
      const resp = await fetchSinToken(`peticion/user?page=${page || 1}&id=${id}`)
      const body = await resp.json()

      if(body.ok) {
          dispatch(CreatePaginatePetitions(body.misPeticiones))
          dispatch(PaginatePetitionsMyPetitions({
              page: body.page,
              total: body.total
          }))
      }
  }
}

const PaginatePetitions = (peticiones) => ({
  type: Types.ptPaginatePetition,
  payload: peticiones
})

const PaginatePetitionsMyPetitions = (peticiones) => ({
  type: Types.ptPaginatePetitionUser,
  payload: peticiones
})

const CreatePaginatePetitions = (peticiones) => ({
  type: Types.ptCreatePetitionMyPetitions,
  payload: peticiones
})

const CreatePaginatePetitionsNew = (peticiones) => ({
  type: Types.ptCreatePetitionNew,
  payload: peticiones
})

const CreatePaginatePetitionsAll = (peticiones) => ({
  type: Types.ptCreatePetition,
  payload: peticiones
})

const getPaginatePetitionsAll = (peticiones) => ({
  type: Types.ptgetPetitions,
  payload: peticiones
})

export const SetActivePetition = (peticiones) => ({
  type: Types.ptSetPetition,
  payload: peticiones
});

export const clearSetActivePetition = () => ({
  type: Types.ptClearSetPetition
});

export const startCreatePetition = (name, title, descripcion, id, role, showDesc) => {
    return async(dispatch) => {

        const resp = await fetchConToken('peticion', {name, title, descripcion, id, role, showDesc}, 'POST');
        const body = await resp.json()
        
        if (body.ok) {
          if (id !== 'Anónimo') {
            dispatch(CreatePaginatePetitionsNew(body.peticion))
          }
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              return Toast.fire({
                icon: 'success',
                title: 'Petición creada correctamente'
              })
        } else {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000,
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

export const setPetition = (petition) => ({
  type: Types.ptSetPetition,
  payload: petition
})

export const setPetitionUser = (petition) => ({
  type: Types.ptSetPetitionesUser,
  payload: petition
})

export const startUpdatePetition = (name, title, descripcion, id, role, showDesc) => {
    return async(dispatch, getState) => {

        const {activePetitionsUser} = getState().pt
  
        const resp = await fetchConToken(`peticion/${activePetitionsUser._id}`, {name, title, descripcion, id, role, showDesc}, 'PUT');
        const body = await resp.json()

        if (body.ok) {

            dispatch(updatePetition(body.peticion))
            
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              return Toast.fire({
                icon: 'success',
                title: 'Petición actualizada correctamente'
              })
        } else {
            Swal.fire('Error', body.errors, 'error')
        }

    }
}

const updatePetition = (peticiones) => ({
  type: Types.ptUpdatePetition,
  payload: peticiones
})

export const startDeletePetition = () => {
    return async(dispatch, getState) => {
        const {activePetitionsUser} = getState().pt

        const resp = await fetchConToken(`peticion/${activePetitionsUser._id}`, activePetitionsUser, 'DELETE')
        const body = await resp.json()

        if(body.ok) {
            dispatch(deletePetition(activePetitionsUser))
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 2000,
                timerProgressBar: true,
                didOpen: (toast) => {
                  toast.addEventListener('mouseenter', Swal.stopTimer)
                  toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
              })
              
              return Toast.fire({
                icon: 'success',
                title: 'Petición eliminada correctamente'
              })
        } else {
          const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 2000,
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

const deletePetition = (peticiones) => ({
    type: Types.ptDeletePetition,
    payload: peticiones
})