import { fetchConToken, fetchSinToken } from "../helper/fetch"
import { Types } from "../types/Types"
import Swal from 'sweetalert2'

export const startGetPaginatePetitions = (page) => {
  return async(dispatch) => {
      const resp = await fetchSinToken(`peticion/pet?page=${page || 1}`)
      const body = await resp.json()

      if(body.ok) {
          dispatch(Petitions(body.peticiones))
          dispatch(PaginatePetitions({
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

export const startGetPaginatePetitionUser = (page) => {
  return async(dispatch) => {
      const resp = await fetchSinToken(`peticionesUser/pet?page=${page || 1}`)
      const body = await resp.json()

      if(body.ok) {
          dispatch(PetitionesUser(body.peticionesUser))
          dispatch(PaginatePetitionUser({
              page: body.page,
              total: body.total
          }))
      }
  }
}

const PaginatePetitionUser = (peticiones) => ({
  type: Types.ptPaginatePetitionUser,
  payload: peticiones
})

export const startGetPetitionesUser = () => {
    return async(dispatch, getState) => {

        const {uid} = getState().auth
        const {PeticionesUser} = getState().pt

        const resp = await fetchSinToken('peticionesUser')
        const body = await resp.json()

        if(body.ok) {
          const MPetitions = PeticionesUser?.filter(p => p.user?.id === uid)
          dispatch(PetitionesUser(body.peticionesUser))
          await dispatch(MyPetitions(MPetitions))
        }
    }
}

const MyPetitions = (peticiones) => ({
  type: Types.ptgetMyPetitions,
  payload: peticiones
})

const PetitionesUser = (peticiones) => ({
    type: Types.ptgetPetitionesUser,
    payload: peticiones
})

export const startGetPaginatePetitionSinCuenta = (page) => {
  return async(dispatch) => {
      const resp = await fetchSinToken(`peticionSinCuenta/pet?page=${page || 1}`)
      const body = await resp.json()

      if(body.ok) {
          dispatch(PetitionSinCuenta(body.peticiones))
          dispatch(PaginatePetitionSinCuenta({
              page: body.page,
              total: body.total
          }))
      }
  }
}

const PaginatePetitionSinCuenta = (peticiones) => ({
  type: Types.ptPaginatePetitionSinCuenta,
  payload: peticiones
})

const PetitionSinCuenta = (peticiones) => ({
  type: Types.ptgetPetitionSinCuenta,
  payload: peticiones
})

export const startGetPetitions = () => {
    return async(dispatch) => {

        const resp = await fetchSinToken('peticion')
        const body = await resp.json()

        if(body.ok) {
          dispatch(Petitions(body.peticiones))
        }
    }
}

const Petitions = (peticiones) => ({
    type: Types.ptgetPetitions,
    payload: peticiones
})

export const SetActivePetition = (peticiones) => ({
  type: Types.ptSetPetition,
  payload: peticiones
});

export const SetActivePetitionesUser = (peticiones) => ({
  type: Types.ptSetPetitionesUser,
  payload: peticiones
});

export const SetActivePetitionSinCuenta = (peticiones) => ({
  type: Types.ptSetPetitionSinCuenta,
  payload: peticiones
});

export const clearSetActivePetition = () => ({
  type: Types.ptClearSetPetition
});

export const startCreatePetition = (name, number, descripcion) => {
    return async(dispatch) => {

        const title = 'Usuario sin cuenta'

        const resp = await fetchSinToken('peticionSinCuenta', {title, name, number, descripcion}, 'POST');
        const body = await resp.json()

        const subtitle = 'Nueva petición de oración agregada de un: '
        
        if (body.ok) {
          
          const content = body.peticion

          await fetchSinToken('notificacionAdmin', {title, subtitle, content}, 'POST');

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

export const startCreatePetitionUser = (name, title, descripcion) => {
    return async(dispatch, getState) => {
        const {uid, users} = getState().auth
        const {socket} = getState().sk

        const numberuser = users?.find(user => user.id === uid)

        const number = numberuser?.number

        const resp = await fetchConToken('peticionesUser', {title, name, number, descripcion}, 'POST');
        const body = await resp.json()

        if (body.ok) {

          dispatch(createPetition(body.peticion))

          const subtitle = 'Nueva petición de oración de usuario agregada'

          const title = name

          const content = body.peticion

          const payload = {title, subtitle, content}

          socket?.emit('notifications-user-to-admin', payload)

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

const createPetition = (petition) => ({
    type: Types.ptCreatePetition,
    payload: petition
})

export const setPetition = (petition) => ({
    type: Types.ptSetPetition,
    payload: petition
})

export const setPetitionUser = (petition) => ({
    type: Types.ptSetPetitionUser,
    payload: petition
})


export const startUpdatePetition = (title, descripcion) => {
    return async(dispatch, getState) => {

        const {activePetitionsUser} = getState().pt

        const {socket} = getState().sk

        const {number, name} = activePetitionsUser
  
        const resp = await fetchConToken(`peticionesUser/${activePetitionsUser._id}`, {name, title, descripcion, number}, 'PUT');
        const body = await resp.json()

        if (body.ok) {

            dispatch(updatePetition(body.peticion))

            socket?.emit('notifications-user-to-admin-update', body.peticion)
            
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

        const {socket} = getState().sk

        const resp = await fetchConToken(`peticionesUser/${activePetitionsUser._id}`, activePetitionsUser, 'DELETE')
        const body = await resp.json()

        if(body.ok) {
            dispatch(deletePetition(activePetitionsUser))
            socket?.emit('notifications-user-to-admin-delete', activePetitionsUser._id)
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

export const startDeletePetitionesUser = () => {
  return async(dispatch, getState) => {
      const {activePetitionesUser} = getState().pt

      const {socket} = getState().sk

      const resp = await fetchConToken(`peticionesUser/${activePetitionesUser._id}`, activePetitionesUser, 'DELETE')
      const body = await resp.json()

      if(body.ok) {
          dispatch(deletePetitionesUser(activePetitionesUser))
          socket?.emit('notifications-user-to-admin-delete', activePetitionesUser._id)
          
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

const deletePetitionesUser = (peticiones) => ({
  type: Types.ptDeletePetitionesUser,
  payload: peticiones
})

export const startDeletePetitionSinCuenta = () => {
  return async(dispatch, getState) => {
      const {activePetitionSinCuenta} = getState().pt

      const {socket} = getState().sk

      const resp = await fetchConToken(`peticionSinCuenta/${activePetitionSinCuenta._id}`, activePetitionSinCuenta, 'DELETE')

      if(resp.ok) {
          dispatch(deletePetitionSinCuenta(activePetitionSinCuenta))
          socket?.emit('notifications-user-to-admin-delete', activePetitionSinCuenta._id)
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
      }
  }

}

const deletePetitionSinCuenta = (peticiones) => ({
  type: Types.ptDeletePetitionSinCuenta,
  payload: peticiones
})