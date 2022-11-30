import axios from "axios"
import Swal from "sweetalert2"
import { fetchConToken, fetchSinToken } from "../helper/fetch"
import { Types } from "../types/Types"

export const startGetPaginateVideos = (page) => {
    return async(dispatch) => {
        const resp = await fetchSinToken(`VideoWordOfTheDay/videos?page=${page || 1}`)
        const body = await resp.json()

        if(body.ok) {
            dispatch(createVideoWordOfTheDay(body.video))
            dispatch(PaginateVideos({
              page: body.page,
              total: body.total
            }))
        }
    }
}

export const startGetPaginateVideosSearch = (page, searchParam) => {
    return async(dispatch) => {
        const resp = await fetchSinToken(`VideoWordOfTheDay/search?page=${page || 1}&size=10&searchParam=${searchParam || ''}`)
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

export const startCreateVideoWordOfTheDay = (title, file, setProcessVideo) => {
    return async(dispatch, getState) => {

        const token = localStorage.getItem('token') || '';

        setProcessVideo(true)

            const formData = new FormData()
            formData.append('file', file)
            formData.append('title', title)

            const ress = await axios.post(`${process.env.REACT_APP_API_URL}/image/upload/resize`, formData, {headers: {'x-token': token}})

            if (ress.data.ok) {
              setProcessVideo(false)

              const res = await axios.post(`${process.env.REACT_APP_API_URL}/image/upload/video`, formData, {
                headers: {'x-token': token},
                onUploadProgress: (e) =>
                  {dispatch(upload(Math.round( (e.loaded * 100) / e.total )))}
              })
              
              if(res.data.ok) {
                  let image = []
                  let idImage = []
                  res.data.image.map(img => image.push(img.url))
                  res.data.image.map(img => idImage.push(img.id))
                  const resp = await fetchConToken('VideoWordOfTheDay', {title, image, idImage}, 'POST');
                  const body = await resp.json()
  
                  if (body.ok) {
  
                      dispatch(createVideoWordOfTheDayNew(body.video))
  
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
}

const createVideoWordOfTheDay = (video) => ({
    type: Types.vwdcreateVideoWordOfTheDay,
    payload: video
})

const createVideoWordOfTheDayNew = (video) => ({
    type: Types.vwdcreateVideoWordOfTheDayNew,
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

export const startUpdateVideoWordOfTheDay = (title, fileupload, setProcessVideo) => {
    return async(dispatch, getState) => {

        const {activeVideo} = getState().vwd

        const token = localStorage.getItem('token') || '';

        if(fileupload) {
          setProcessVideo(true)
          
          const formData = new FormData()
          formData.append('file', fileupload)
          formData.append('title', activeVideo.title)

          const ress = await axios.post(`${process.env.REACT_APP_API_URL}/image/upload/resize`, formData, {headers: {'x-token': token}})

          if (ress.data.ok) {
            setProcessVideo(false)

            const res = await axios.post(`${process.env.REACT_APP_API_URL}/image/upload/video`, formData, {
              headers: {'x-token': token},
              onUploadProgress: (e) =>
              {dispatch(upload(Math.round( (e.loaded * 100) / e.total )))}
            })
            
            if(res.data.ok) {
              let image = []
              let idImage = []
              res.data.image.map(img => image.push(img.url))
              res.data.image.map(img => idImage.push(img.id))
              const resp = await fetchConToken(`VideoWordOfTheDay/${activeVideo._id}`, {title, image, idImage}, 'PUT');
              const body = await resp.json()
              
              if (body.ok) {
                
                dispatch(updateVideoWordOfTheDay(body.video))
                dispatch(UploadFish())
  
                for (let index = 0; index < activeVideo.idImage.length; index++) {
                  const element = activeVideo.idImage[index];
                  const ress = await axios.delete(`${process.env.REACT_APP_API_URL}/image/upload/${element}`, {headers: {'x-token': token}})
                  console.log(ress)
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
          }
          
        } else {
            const {image, idImage} = activeVideo
            const resp = await fetchConToken(`VideoWordOfTheDay/${activeVideo._id}`, {title, image, idImage}, 'PUT');
            const body = await resp.json()

            if (body.ok) {

                dispatch(updateVideoWordOfTheDay(body.video))

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

export const startDeleteVideoWordOfTheDay = (props) => {
    return async(dispatch, getState) => {

        const token = localStorage.getItem('token') || '';

        if(props.idImage?.length !== 0) {

            for (let index = 0; index < props.idImage.length; index++) {
              const element = props.idImage[index];
              
              await axios.delete(`${process.env.REACT_APP_API_URL}/image/upload/${element}`, {headers: {'x-token': token}})
            }

            const resp = await fetchConToken(`VideoWordOfTheDay/${props._id}`, props, 'DELETE')
            const body = await resp.json()
    
            if(body.ok) {
                dispatch(deleteVideoWordOfTheDay(props))
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
            const resp = await fetchConToken(`VideoWordOfTheDay/${props._id}`, props, 'DELETE')
    
            if(resp.ok) {
                dispatch(VideoWordOfTheDay(props))
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