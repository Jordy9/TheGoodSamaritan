import axios from "axios"
import moment from "moment"
import Swal from "sweetalert2"
import { fetchConToken, fetchSinToken } from "../helper/fetch"
import { Types } from "../types/Types"

export const startGetImageVideo = () => {
    return async(dispatch) => {
        const resp = await fetchSinToken('imageVideo')
        const body = await resp.json()

        if(body.ok) {
            dispatch(ImageVideo(body.imageVideo))
        }
    }
}

const ImageVideo = (imageVideo) => ({
    type: Types.ivgetImageVideo,
    payload: imageVideo
})

export const setActiveImage = (image) => ({
    type: Types.ivsetImageVideo,
    payload: image
})

export const startCreateImageVideo = (file, url) => {
    return async(dispatch, getState) => {

        const title = moment()

        const {ImageVideo} = getState().iv

        const imageVideo = ImageVideo[0]

        const token = localStorage.getItem('token') || '';

        if (imageVideo) {

          if (file) {
  
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
                const resp = await fetchConToken(`imageVideo/${imageVideo._id}`, {title, image, idImage, url}, 'PUT');
                const body = await resp.json()
                
                if (body.ok) {
    
                    dispatch(createImageVideo(body.imageVideo))
                    dispatch(startGetImageVideo())
    
                    dispatch(UploadFish())
  
                    if (imageVideo?.image) {
                      const ress = await axios.delete(`${process.env.REACT_APP_API_URL}/image/upload/${imageVideo.idImage}`, {headers: {'x-token': token}})
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
                        title: 'Contenido para el banner de la página de home creado correctamente'
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
  
          if (url) {
            const image = ''
            const idImage = ''
            const resp = await fetchConToken(`imageVideo/${imageVideo._id}`, {title, url, image, idImage }, 'PUT');
            const body = await resp.json()
  
            if (body.ok) {
    
              dispatch(createImageVideo(body.imageVideo))
              dispatch(startGetImageVideo())
  
              dispatch(UploadFish())

              if (imageVideo.image) {
                const ress = await axios.delete(`${process.env.REACT_APP_API_URL}/image/upload/${imageVideo.idImage}`, {headers: {'x-token': token}})
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
                  title: 'Contenido para el banner de la página de home creado correctamente'
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

          if (file) {
  
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
                const resp = await fetchConToken('imageVideo', {title, image, idImage}, 'POST');
                const body = await resp.json()
                
                if (body.ok) {
    
                    dispatch(createImageVideo(body.imageVideoguardado))
                    dispatch(startGetImageVideo())
    
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
                        title: 'Contenido para el banner de la página de home creado correctamente'
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
  
          if (url) {
            const resp = await fetchConToken('imageVideo', {title, url}, 'POST');
            const body = await resp.json()
  
            if (body.ok) {
    
              dispatch(createImageVideo(body.imageVideoguardado))
              dispatch(startGetImageVideo())
  
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
                  title: 'Contenido para el banner de la página de home creado correctamente'
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

const UploadFish = () => ({
  type: Types.ivUploadFinish
})

const upload = (progress) => ({
  type: Types.ivUpload,
  payload: progress
})

const createImageVideo = (imageVideo) => ({
    type: Types.ivcreateImageVideo,
    payload: imageVideo
})

export const SetactiveImageVideo = (imageVideo) => ({
    type: Types.ivSetImageVideo,
    payload: imageVideo
});

export const clearSetactiveImageVideo = () => ({
    type: Types.ivClearSetImageVideo
});