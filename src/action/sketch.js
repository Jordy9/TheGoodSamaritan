import axios from "axios"
import Swal from "sweetalert2"
import { fetchConToken, fetchSinToken } from "../helper/fetch"
import { Types } from "../types/Types"

export const startGetBosquejos = () => {
    return async(dispatch) => {
        const resp = await fetchSinToken('bosquejo')
        const body = await resp.json()

        if(body.ok) {
            dispatch(Bosquejos(body.bosquejos))
        }
    }
}

const Bosquejos = (bosquejos) => ({
    type: Types.sktgetBosquejos,
    payload: bosquejos
})

export const startSetSketch = (bosquejo) => ({
    type: Types.sktSetBosquejo,
    payload: bosquejo
})

export const startGetPaginateBosquejos = (page) => {
    return async(dispatch) => {
        const resp = await fetchSinToken(`bosquejo/bosquejos?page=${page || 1}`)
        const body = await resp.json()

        if(body.ok) {
            dispatch(Bosquejos(body.bosquejos))
            dispatch(PaginateBosquejos({
                page: body.page,
                total: body.total
            }))
        }
    }
}

const PaginateBosquejos = (bosquejos) => ({
    type: Types.sktPaginateBosquejo,
    payload: bosquejos
})

export const startCreateBosquejo = (title, descripcion, file) => {
    return async(dispatch, getState) => {

        const {socket} = getState().sk

        const token = localStorage.getItem('token') || '';

            const formData = new FormData()
            formData.append('file', file)
            formData.append('title', title)

            const res = await axios.post(`${process.env.REACT_APP_API_URL}/image/upload/seriesBosquejos`, formData, {
              headers: {'x-token': token}, 
              onUploadProgress: (e) =>
                {dispatch(upload(Math.round( (e.loaded * 100) / e.total )))}
            })
            
            if(res.data.ok) {
                const image = res.data.image.url
                const idImage = res.data.image.id
                const resp = await fetchConToken('bosquejo', {title, image, idImage, descripcion}, 'POST');
                const body = await resp.json()
                
                if (body.ok) {

                    dispatch(createBosquejo(body))

                    const subtitle = 'Nuevo Bosquejo agregado'

                    const content = body.bosquejoguardado

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
                        title: 'Bosquejo creado correctamente'
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
    }
}

const UploadFish = () => ({
  type: Types.sktUploadFinish
})

const upload = (progress) => ({
  type: Types.sktUpload,
  payload: progress
})

const createBosquejo = (bosquejo) => ({
    type: Types.sktcreateBosquejo,
    payload: bosquejo
})

export const SetActiveBosquejo = (bosquejo) => ({
    type: Types.sktSetBosquejo,
    payload: bosquejo
});

export const clearSetActiveBosquejo = () => ({
    type: Types.sktClearSetBosquejo
});


export const startUpdateBosquejo = (title, descripcion, fileupload) => {
    return async(dispatch, getState) => {

        const {activeBosquejo} = getState().skt

        const {socket} = getState().sk

        const {activeUser} = getState().auth

        const token = localStorage.getItem('token') || '';

          if (activeBosquejo?.user === activeUser?.id) {
            
            if(fileupload) {
              
              const formData = new FormData()
              formData.append('file', fileupload)
              formData.append('title', activeBosquejo.title)
              
              const res = await axios.post(`${process.env.REACT_APP_API_URL}/image/upload/seriesBosquejos`, formData, {
                headers: {'x-token': token}, 
                onUploadProgress: (e) =>
                {dispatch(upload(Math.round( (e.loaded * 100) / e.total )))}
              })
              
              if(res.data.ok) {
                const image = res.data.image.url
                const idImage = res.data.image.id
                const resp = await fetchConToken(`bosquejo/${activeBosquejo._id}`, {title, image, idImage, descripcion}, 'PUT');
                const body = await resp.json()
                
                if (body.ok) {
                  
                  dispatch(updateBosquejo(body.bosquejo))
                  dispatch(UploadFish())
                  socket?.emit('notifications-admin-to-user-update', body.bosquejo)
                  const ress = await axios.delete(`${process.env.REACT_APP_API_URL}/image/upload/${activeBosquejo.idImage}`, {headers: {'x-token': token}})
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
                                title: 'Bosquejo actualizado correctamente'
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

                const {image, idImage} = activeBosquejo
                const resp = await fetchConToken(`bosquejo/${activeBosquejo._id}`, {title, image, idImage, descripcion}, 'PUT');
                const body = await resp.json()

                if (body.ok) {
                    dispatch(updateBosquejo(body.bosquejo))
                    socket?.emit('notifications-admin-to-user-update', body.bosquejo)
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
                        title: 'Bosquejo actualizado correctamente'
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
                title: 'No tiene el privilegio para editar este bosquejo'
              })
        }  
    }
}

const updateBosquejo = (user) => ({
    type: Types.sktUpdateBosquejo,
    payload: user
})


export const startDeleteBosquejo = () => {
    return async(dispatch, getState) => {
        const {activeBosquejo} = getState().skt

        const {socket} = getState().sk

        const {activeUser} = getState().auth

        const token = localStorage.getItem('token') || '';

        if (activeBosquejo?.user === activeUser?.id) {
          
          if(activeBosquejo.idImage) {
              await axios.delete(`${process.env.REACT_APP_API_URL}/image/upload/${activeBosquejo.idImage}`, {headers: {'x-token': token}})
  
              const resp = await fetchConToken(`bosquejo/${activeBosquejo._id}`, activeBosquejo, 'DELETE')
              const body = await resp.json()
      
              if(body.ok) {
                  dispatch(deleteBosquejo(activeBosquejo))
                  socket?.emit('notifications-admin-to-user-delete', activeBosquejo._id)
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
                      title: 'Bosquejo eliminado correctamente'
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
              const resp = await fetchConToken(`bosquejo/${activeBosquejo._id}`, activeBosquejo, 'DELETE')
      
              if(resp.ok) {
                  dispatch(deleteBosquejo(activeBosquejo))
                  socket?.emit('notifications-admin-to-user-delete', activeBosquejo._id)
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
                      title: 'Bosquejo eliminado correctamente'
                    })
              }
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
            title: 'No tiene el privilegio para eliminar este bosquejo'
          })
        }


    }
}

const deleteBosquejo = (bosquejo) => ({
    type: Types.sktDeleteBosquejo,
    payload: bosquejo
})