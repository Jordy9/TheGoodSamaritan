import axios from "axios"
import Swal from "sweetalert2"
import { fetchConToken, fetchSinToken } from "../helper/fetch"
import { Types } from "../types/Types"

export const startGetGallery = () => {
    return async(dispatch) => {
        const resp = await fetchSinToken('galeria')
        const body = await resp.json()

        if(body.ok) {
            dispatch(Gallerys(body.galeria))
        }
    }
}

const Gallerys = (galeria) => ({
    type: Types.gagetGallerys,
    payload: galeria
})

export const startGetPaginateGallery = (page) => {
    return async(dispatch) => {
        const resp = await fetchSinToken(`galeria/ga?page=${page || 1}`)
        const body = await resp.json()

        if(body.ok) {
            dispatch(Gallerys(body.galeria))
            dispatch(PaginateGallery({
                page: body.page,
                total: body.total
            }))
        }
    }
}

const PaginateGallery = (eventos) => ({
    type: Types.gaPaginateGallery,
    payload: eventos
})

export const startCreateGallery = (title, file) => {
    return async(dispatch) => {

        const token = localStorage.getItem('token') || '';

            const formData = new FormData()
            formData.append('file', file)
            formData.append('title', title)

            const res = await axios.post(`${process.env.REACT_APP_API_URL}/image/upload/gallery`, formData, {
              headers: {'x-token': token},
              onUploadProgress: (e) =>
                {dispatch(upload(Math.round( (e.loaded * 100) / e.total )))}
            })
            
            if(res.data.ok) {
                const image = res.data.image.url
                const idImage = res.data.image.id
                const resp = await fetchConToken('galeria', {title, image, idImage}, 'POST');
                const body = await resp.json()

                if (body.ok) {

                    dispatch(createGallery(body))

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
                        title: 'Imagen de la galería creada correctamente'
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

const UploadFish = () => ({
  type: Types.gaUploadFinish
})

const upload = (progress) => ({
  type: Types.gaUpload,
  payload: progress
})

const createGallery = (galeria) => ({
    type: Types.gacreateGallery,
    payload: galeria
})

export const SetActiveGallery = (galeria) => ({
    type: Types.gaSetGallery,
    payload: galeria
});

export const clearSetActiveGallery = () => ({
    type: Types.gaClearSetGallery
});


export const startUpdateGallery = (title, fileupload) => {
    return async(dispatch, getState) => {

        const {activeGallery} = getState().ga

        const token = localStorage.getItem('token') || '';

            if(fileupload) {
              
              const formData = new FormData()
              formData.append('file', fileupload)
              formData.append('title', activeGallery.title)
              
              const res = await axios.post(`${process.env.REACT_APP_API_URL}/image/upload/gallery`, formData, {
                headers: {'x-token': token},
                onUploadProgress: (e) =>
                {dispatch(upload(Math.round( (e.loaded * 100) / e.total )))}
              })
              
              if(res.data.ok) {
                const image = res.data.image.url
                const idImage = res.data.image.id
                const resp = await fetchConToken(`galeria/${activeGallery._id}`, {title, image, idImage}, 'PUT');
                const body = await resp.json()
                
                if (body.ok) {
                  
                  dispatch(updateGallery(body.galeria))
                  dispatch(UploadFish())
                  const ress = await axios.delete(`${process.env.REACT_APP_API_URL}/image/upload/${activeGallery.idImage}`, {headers: {'x-token': token}})
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
                                title: 'Imagen de la galería actualizada correctamente'
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

                const {image, idImage} = activeGallery
                const resp = await fetchConToken(`galeria/${activeGallery._id}`, {title, image, idImage}, 'PUT');
                const body = await resp.json()

                if (body.ok) {

                    dispatch(updateGallery(body.galeria))
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
                        title: 'Imagen de la galeria actualizada correctamente'
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

const updateGallery = (galeria) => ({
    type: Types.gaUpdateGallery,
    payload: galeria
})


export const startDeleteGallery = () => {
    return async(dispatch, getState) => {
        const {activeGallery} = getState().ga

        const token = localStorage.getItem('token') || '';

        if(activeGallery.idImage) {
          
          const resp = await fetchConToken(`galeria/${activeGallery._id}`, activeGallery, 'DELETE')
          const body = await resp.json()
          
          if(body.ok) {
            dispatch(deleteGallery(activeGallery))
            await axios.delete(`${process.env.REACT_APP_API_URL}/image/upload/${activeGallery.idImage}`, {headers: {'x-token': token}})
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
                    title: 'Imagen de la galeria eliminada correctamente'
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
            const resp = await fetchConToken(`galeria/${activeGallery._id}`, activeGallery, 'DELETE')
            const body = await resp.json()
    
            if(body.ok) {
                dispatch(deleteGallery(activeGallery))
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
                    title: 'Imagen de la galeria eliminada correctamente'
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
                icon: 'success',
                title: body.msg
              })
            }
        }

    }
}

const deleteGallery = (galeria) => ({
    type: Types.gaDeleteGallery,
    payload: galeria
})