import { fetchConToken, fetchSinToken } from "../helper/fetch"
import { Types } from "../types/Types"
import Swal from 'sweetalert2'

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
                timer: 5000,
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
                timer: 5000,
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


export const startUpdatePetition = (name, title, descripcion) => {
    return async(dispatch, getState) => {

        const {activePetitionsUser} = getState().pt

        const {number} = activePetitionsUser
  
        const resp = await fetchConToken(`peticionesUser/${activePetitionsUser._id}`, {name, title, descripcion, number}, 'PUT');
        const body = await resp.json()

        if (body.ok) {

            dispatch(updatePetition(body.peticion))
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

        const resp = await fetchConToken(`peticionesUser/${activePetitionsUser._id}`, activePetitionsUser, 'DELETE')
        const body = await resp.json()

        if(body.ok) {
            dispatch(deletePetition(activePetitionsUser))
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
                title: 'Petición eliminada correctamente'
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

const deletePetition = (peticiones) => ({
    type: Types.ptDeletePetition,
    payload: peticiones
})