import axios from "axios"
import Swal from "sweetalert2"
import { fetchConToken, fetchSinToken } from "../helper/fetch"
import { Types } from "../types/Types"

export const startGetPaginateVideos = (page) => {
    return async(dispatch) => {
        const resp = await fetchSinToken(`VideoWordOfTheDay/videos?page=${page || 1}`)
        const body = await resp.json()

        if(body.ok) {
            dispatch(VideoWordOfTheDay(body.video))
            dispatch(PaginateVideos({
                page: body.page,
                total: body.total
            }))
        }
    }
}

const PaginateVideos = (videos) => ({
    type: Types.vwdPaginateVideo,
    payload: videos
})

export const startGetVideoWordOfTheDay = () => {
    return async(dispatch) => {
        const resp = await fetchSinToken('VideoWordOfTheDay')
        const body = await resp.json()

        if(body.ok) {
            dispatch(VideoWordOfTheDay(body.video))
        }
    }
}

const UploadFish = () => ({
    type: Types.vwdUploadFinish
})
  
const upload = (progress) => ({
type: Types.vwdUpload,
payload: progress
})

export const SetActiveVideoWordOfTheDay = (video) => ({
    type: Types.vwdSetVideoWordOfTheDay,
    payload: video
});

export const startCreateVideoWordOfTheDay = (title, file) => {
    return async(dispatch, getState) => {

        const {socket} = getState().sk

        const token = localStorage.getItem('token') || '';

            const formData = new FormData()
            formData.append('file', file)
            formData.append('title', title)

            const res = await axios.post(`${process.env.REACT_APP_API_URL}/image/upload/video`, formData, {
              headers: {'x-token': token},
              onUploadProgress: (e) =>
                {dispatch(upload(Math.round( (e.loaded * 100) / e.total )))}
            })
            
            if(res.data.ok) {
                const image = res.data.image.url
                const idImage = res.data.image.id
                const resp = await fetchConToken('VideoWordOfTheDay', {title, image, idImage}, 'POST');
                const body = await resp.json()

                if (body.ok) {

                    dispatch(createVideoWordOfTheDay(body.video))

                    const subtitle = 'Nueva Palabra del Día agregada'

                    const content = body.video

                    const payload = {title, subtitle, content}

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
                        title: 'Video creado correctamente'
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
}

const createVideoWordOfTheDay = (video) => ({
    type: Types.vwdcreateVideoWordOfTheDay,
    payload: video
})

const VideoWordOfTheDay = (video) => ({
    type: Types.vwdgetVideoWordOfTheDay,
    payload: video
})

export const setVideoWordOfTheDay = (video) => ({
    type: Types.vwdsetVideoWordOfTheDay,
    payload: video
})

export const ModalOpenVideo = (state) => ({
    type: Types.vwdModalOpen,
    payload: state
})

export const ModalCloseVideo = (state) => ({
    type: Types.vwdModalClose,
    payload: state
})

export const startUpdateVideoWordOfTheDay = (title, fileupload) => {
    return async(dispatch, getState) => {

        const {activeVideo} = getState().vwd

        const {socket} = getState().sk

        const token = localStorage.getItem('token') || '';

        if(fileupload) {
          
          const formData = new FormData()
          formData.append('file', fileupload)
          formData.append('title', activeVideo.title)
          
          const res = await axios.post(`${process.env.REACT_APP_API_URL}/image/upload/video`, formData, {
            headers: {'x-token': token},
            onUploadProgress: (e) =>
            {dispatch(upload(Math.round( (e.loaded * 100) / e.total )))}
          })
          
          if(res.data.ok) {
            const image = res.data.image.url
            const idImage = res.data.image.id
            const resp = await fetchConToken(`VideoWordOfTheDay/${activeVideo._id}`, {title, image, idImage}, 'PUT');
            const body = await resp.json()
            
            if (body.ok) {
              
              dispatch(updateVideoWordOfTheDay(body.video))
              dispatch(UploadFish())

              const subtitle = 'Nueva Palabra del Día agregada'

              const content = body.video

              const payload = {title, subtitle, content}

              socket?.emit('notifications-admin-to-user-update', payload)
              const ress = await axios.delete(`${process.env.REACT_APP_API_URL}/image/upload/${activeVideo.idImage}`, {headers: {'x-token': token}})
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
                            title: 'Video actualizado correctamente'
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

        } else {
            const {image, idImage} = activeVideo
            const resp = await fetchConToken(`VideoWordOfTheDay/${activeVideo._id}`, {title, image, idImage}, 'PUT');
            const body = await resp.json()

            if (body.ok) {

                dispatch(updateVideoWordOfTheDay(body.video))

                const subtitle = 'Nueva Palabra del Día agregada'

                const content = body.video

                const payload = {title, subtitle, content}

                socket?.emit('notifications-admin-to-user-update', payload)
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
                    title: 'Video actualizado correctamente'
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

const updateVideoWordOfTheDay = (video) => ({
    type: Types.vwdUpdateVideoWordOfTheDay,
    payload: video
})

export const startDeleteVideoWordOfTheDay = () => {
    return async(dispatch, getState) => {
        const {activeVideo} = getState().vwd

        const {socket} = getState().sk

        const token = localStorage.getItem('token') || '';

        if(activeVideo.idImage) {
            await axios.delete(`${process.env.REACT_APP_API_URL}/image/upload/${activeVideo.idImage}`, {headers: {'x-token': token}})

            const resp = await fetchConToken(`VideoWordOfTheDay/${activeVideo._id}`, activeVideo, 'DELETE')
            const body = await resp.json()
    
            if(body.ok) {
                dispatch(deleteVideoWordOfTheDay(activeVideo))
                socket?.emit('notifications-admin-to-user-delete', activeVideo._id)
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
                    title: 'Video eliminado correctamente'
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
            const resp = await fetchConToken(`VideoWordOfTheDay/${activeVideo._id}`, activeVideo, 'DELETE')
    
            if(resp.ok) {
                dispatch(VideoWordOfTheDay(activeVideo))
                socket?.emit('notifications-admin-to-user-delete', activeVideo._id)
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
                    title: 'Video eliminado correctamente'
                  })
            }
        }

        }

        
}

const deleteVideoWordOfTheDay = (video) => ({
type: Types.vwdDeleteVideoWordOfTheDay,
payload: video
})