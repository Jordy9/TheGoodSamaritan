import axios from "axios"
import Swal from "sweetalert2"
import { fetchConToken, fetchSinToken } from "../helper/fetch"
import { Types } from "../types/Types"

export const startGetEventos = () => {
    return async(dispatch) => {
        const resp = await fetchSinToken('evento')
        const body = await resp.json()

        if(body.ok) {
            dispatch(Eventos(body.eventos))
        }
    }
}

const Eventos = (eventos) => ({
    type: Types.evgetEvents,
    payload: eventos
})

export const startGetPaginateEventos = (page) => {
    return async(dispatch) => {
        const resp = await fetchSinToken(`evento/eve?page=${page || 1}`)
        const body = await resp.json()

        if(body.ok) {
            dispatch(Eventos(body.eventos))
            dispatch(PaginateEventos({
                page: body.page,
                total: body.total
            }))
        }
    }
}

const PaginateEventos = (eventos) => ({
    type: Types.evPaginateEvent,
    payload: eventos
})

export const startCreateEvento = (title, file, descripcion) => {
    return async(dispatch, getState) => {

        const {socket} = getState().sk

        const token = localStorage.getItem('token') || '';

            const formData = new FormData()
            formData.append('file', file)
            formData.append('title', title)

            const res = await axios.post(`${process.env.REACT_APP_API_URL}/image/upload`, formData, {
              headers: {'x-token': token},
              onUploadProgress: (e) =>
              {dispatch(upload(Math.round( (e.loaded * 100) / e.total )))}
            })
            
            if(res.data.ok) {
                const image = res.data.image.url
                const idImage = res.data.image.id
                const resp = await fetchConToken('evento', {title, image, idImage, descripcion}, 'POST');
                const body = await resp.json()

                dispatch(createEvento(body))

                const subtitle = 'Nuevo Evento agregado'

                const content = body.eventoguardado

                const payload = {title, subtitle, image, content}

                socket?.emit('notifications-admin-to-user', payload)

                dispatch(UploadFish())

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
                    title: 'Evento creado correctamente'
                  })
                
            }
    }
}

const UploadFish = () => ({
  type: Types.evUploadFinish
})

const upload = (progress) => ({
  type: Types.evUpload,
  payload: progress
})

const createEvento = (evento) => ({
    type: Types.evcreateEvent,
    payload: evento
})

export const SetActiveEvent = (evento) => ({
    type: Types.evSetEvent,
    payload: evento
});

export const clearSetActiveEvent = () => ({
    type: Types.evClearSetEvent
});


export const startUpdateEvento = (title, descripcion, fileupload) => {
    return async(dispatch, getState) => {

        const {activeEvent} = getState().ev

        const {socket} = getState().sk

        const token = localStorage.getItem('token') || '';

            if(fileupload) {
              
              const formData = new FormData()
              formData.append('file', fileupload)
              formData.append('title', activeEvent.title)
              
              const res = await axios.post(`${process.env.REACT_APP_API_URL}/image/upload`, formData, {
                headers: {'x-token': token}, 
                onUploadProgress: (e) =>
                {dispatch(upload(Math.round( (e.loaded * 100) / e.total )))}
              })
              
              if(res.data.ok) {
                const image = res.data.image.url
                const idImage = res.data.image.id
                const resp = await fetchConToken(`evento/${activeEvent._id}`, {title, image, idImage, descripcion}, 'PUT');
                const body = await resp.json()
                
                if (body.ok) {
                  
                  dispatch(updateEvento(body.evento))
                  dispatch(UploadFish())
                  socket?.emit('notifications-admin-to-user-update', body.evento)
                  const ress = await axios.delete(`${process.env.REACT_APP_API_URL}/image/upload/${activeEvent.idImage}`, {headers: {'x-token': token}})
                  console.log(ress)
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
                                title: 'Evento actualizado correctamente'
                              })
                        }
                
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
                            title: `${res.errors}`
                          })
                    }
            } else {

                const {image, idImage} = activeEvent
                const resp = await fetchConToken(`evento/${activeEvent._id}`, {title, image, idImage, descripcion}, 'PUT');
                const body = await resp.json()

                if (body.ok) {

                    dispatch(updateEvento(body.evento))
                    socket?.emit('notifications-admin-to-user-update', body.evento)
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
                        title: 'Evento actualizado correctamente'
                      })
                }
            }

            

    }
}

const updateEvento = (evento) => ({
    type: Types.evUpdateEvent,
    payload: evento
})


export const startDeleteEvento = () => {
    return async(dispatch, getState) => {
        const {activeEvent} = getState().ev

        const {socket} = getState().sk

        const token = localStorage.getItem('token') || '';

        if(activeEvent.idImage) {
            await axios.delete(`${process.env.REACT_APP_API_URL}/image/upload/${activeEvent.idImage}`, {headers: {'x-token': token}})

            const resp = await fetchConToken(`evento/${activeEvent._id}`, activeEvent, 'DELETE')
            const body = await resp.json()
    
            if(body.ok) {
                dispatch(deleteEvento(activeEvent))
                socket?.emit('notifications-admin-to-user-delete', activeEvent._id)
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
                    title: 'Evento eliminado correctamente'
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

        } else {
            const resp = await fetchConToken(`evento/${activeEvent._id}`, activeEvent, 'DELETE')
            const body = await resp.json()
    
            if(body.ok) {
                dispatch(deleteEvento(activeEvent))
                socket?.emit('notifications-admin-to-user-delete', activeEvent._id)
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
                    title: 'Evento eliminado correctamente'
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
}

const deleteEvento = (evento) => ({
    type: Types.evDeleteEvent,
    payload: evento
})