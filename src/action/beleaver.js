import axios from "axios"
import Swal from "sweetalert2"
import { fetchConToken, fetchSinToken } from "../helper/fetch"
import { Types } from "../types/Types"

export const startGetBeleaver = () => {
    return async(dispatch) => {
        const resp = await fetchSinToken('Beleaver')
        const body = await resp.json()

        if(body.ok) {
            dispatch(Beleaver(body.beleaver))
        }
    }
}

const Beleaver = (beleaver) => ({
    type: Types.blgetBeleaver,
    payload: beleaver
})

export const startCreateBeleaver = (title, descripcion, file) => {
    return async(dispatch) => {

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
                const resp = await fetchConToken('Beleaver', {title, image, idImage, descripcion}, 'POST');
                const body = await resp.json()
                
                if (body.ok) {

                    dispatch(createBeleaver(body.beleaverguardado))

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
                        title: 'Información para nuevos creyentes creada correctamente'
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
  type: Types.blUploadFinish
})

const upload = (progress) => ({
  type: Types.blUpload,
  payload: progress
})

const createBeleaver = (beleaver) => ({
    type: Types.blcreateBeleaver,
    payload: beleaver
})

export const SetactiveBeleaver = (beleaver) => ({
    type: Types.blSetBeleaver,
    payload: beleaver
});

export const clearSetactiveBeleaver = () => ({
    type: Types.blClearSetBeleaver
});


export const startUpdateBeleaver = (title, descripcion, fileupload) => {
    return async(dispatch, getState) => {

        const {activeBeleaver} = getState().bl

        const token = localStorage.getItem('token') || '';

        if(fileupload) {
            
            const formData = new FormData()
            formData.append('file', fileupload)
            formData.append('title', activeBeleaver.title)
            
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/image/upload`, formData, {
              headers: {'x-token': token}, 
              onUploadProgress: (e) =>
              {dispatch(upload(Math.round( (e.loaded * 100) / e.total )))}
            })
            
            if(res.data.ok) {
              const image = res.data.image.url
              const idImage = res.data.image.id
              const resp = await fetchConToken(`Beleaver/${activeBeleaver._id}`, {title, image, idImage, descripcion}, 'PUT');
              const body = await resp.json()
              
              if (body.ok) {
                
                dispatch(updateBeleaver(body.beleaver))
                dispatch(UploadFish())
                const ress = await axios.delete(`${process.env.REACT_APP_API_URL}/image/upload/${activeBeleaver.idImage}`, {headers: {'x-token': token}})
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
                            title: 'Información para nuevos creyentes actualizada correctamente'
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

            const {image, idImage} = activeBeleaver
            const resp = await fetchConToken(`Beleaver/${activeBeleaver._id}`, {title, image, idImage, descripcion}, 'PUT');
            const body = await resp.json()

            if (body.ok) {
                dispatch(updateBeleaver(body.beleaver))
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
                    title: 'Información para nuevos creyentes actualizada correctamente'
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

const updateBeleaver = (beleaver) => ({
    type: Types.blUpdateBeleaver,
    payload: beleaver
})


export const startDeleteBeleaver = () => {
    return async(dispatch, getState) => {
        const {activeBeleaver} = getState().bl

        const {activeUser} = getState().auth

        const token = localStorage.getItem('token') || '';
          
        if(activeBeleaver.idImage) {
            await axios.delete(`${process.env.REACT_APP_API_URL}/image/upload/${activeBeleaver.idImage}`, {headers: {'x-token': token}})

            const resp = await fetchConToken(`Beleaver/${activeBeleaver._id}`, activeBeleaver, 'DELETE')
            const body = await resp.json()
    
            if(body.ok) {
                dispatch(deleteBeleaver(activeBeleaver))
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
                    title: 'Información para nuevos creyentes eliminada correctamente'
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
            const resp = await fetchConToken(`Beleaver/${activeBeleaver._id}`, activeBeleaver, 'DELETE')
            const body = await resp.json()
    
            if(body.ok) {
                dispatch(deleteBeleaver(activeBeleaver))
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
                    title: 'Información para nuevos creyentes eliminada correctamente'
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

const deleteBeleaver = (beleaver) => ({
    type: Types.blDeleteBeleaver,
    payload: beleaver
})