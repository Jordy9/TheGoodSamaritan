import axios from "axios"
import Swal from "sweetalert2"
import { fetchConToken, fetchSinToken } from "../helper/fetch"
import { Types } from "../types/Types"

export const startGetMains = () => {
    return async(dispatch) => {
        const resp = await fetchSinToken('carrusel')
        const body = await resp.json()

        if(body.ok) {
            dispatch(Mains(body.carrusel))
        }
    }
}

const Mains = (carrusel) => ({
    type: Types.magetMains,
    payload: carrusel
})

export const startGetPaginateMains = (page) => {
    return async(dispatch) => {
        const resp = await fetchSinToken(`carrusel/ca?page=${page || 1}`)
        const body = await resp.json()

        if(body.ok) {
            dispatch(Mains(body.carrusel))
            dispatch(PaginateMain({
                page: body.page,
                total: body.total
            }))
        }
    }
}

const PaginateMain = (carrusel) => ({
    type: Types.maPaginateMain,
    payload: carrusel
})

export const startCreateMain = (title, descripcion, file) => {
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
                const resp = await fetchConToken('carrusel', {title, image, idImage, descripcion}, 'POST');
                const body = await resp.json()

                if (body.ok) {

                    dispatch(createMain(body))
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
                        title: 'Carrusel creado correctamente'
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
  type: Types.maUploadFinish
})

const upload = (progress) => ({
  type: Types.maUpload,
  payload: progress
})

const createMain = (carrusel) => ({
    type: Types.macreateMain,
    payload: carrusel
})

export const SetActiveMain = (carrusel) => ({
    type: Types.maSetMain,
    payload: carrusel
});

export const clearSetActiveMain = () => ({
    type: Types.maClearSetMain
});


export const startUpdateMain = (title, descripcion, fileupload) => {
    return async(dispatch, getState) => {

        const {activeMain} = getState().ma

        const token = localStorage.getItem('token') || '';

            if(fileupload) {
              
              const formData = new FormData()
              formData.append('file', fileupload)
              formData.append('title', activeMain.title)
              
              const res = await axios.post(`${process.env.REACT_APP_API_URL}/image/upload`, formData, {
                headers: {'x-token': token},
                onUploadProgress: (e) =>
                {dispatch(upload(Math.round( (e.loaded * 100) / e.total )))}
              })
              
              if(res.data.ok) {
                const image = res.data.image.url
                const idImage = res.data.image.id
                const resp = await fetchConToken(`carrusel/${activeMain._id}`, {title, image, idImage, descripcion}, 'PUT');
                const body = await resp.json()
                
                if (body.ok) {
                  
                  dispatch(updateMain(body.carrusel))
                  dispatch(UploadFish())
                  const ress = await axios.delete(`${process.env.REACT_APP_API_URL}/image/upload/${activeMain.idImage}`, {headers: {'x-token': token}})
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
                                title: 'Carrusel actualizado correctamente'
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

                const {image, idImage} = activeMain
                const resp = await fetchConToken(`carrusel/${activeMain._id}`, {title, image, idImage, descripcion}, 'PUT');
                const body = await resp.json()

                if (body.ok) {

                    dispatch(updateMain(body.carrusel))
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
                        title: 'Carrusel actualizado correctamente'
                      })
                }
            }

            

    }
}

const updateMain = (evento) => ({
    type: Types.maUpdateMain,
    payload: evento
})


export const startDeleteMain = () => {
    return async(dispatch, getState) => {
        const {activeMain} = getState().ma

        const token = localStorage.getItem('token') || '';

        if(activeMain.idImage) {
            await axios.delete(`${process.env.REACT_APP_API_URL}/image/upload/${activeMain.idImage}`, {headers: {'x-token': token}})

            const resp = await fetchConToken(`carrusel/${activeMain._id}`, activeMain, 'DELETE')
            const body = await resp.json()
    
            if(body.ok) {
                dispatch(deleteMain(activeMain))
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
                    title: 'Carrusel eliminado correctamente'
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
            const resp = await fetchConToken(`carrusel/${activeMain._id}`, activeMain, 'DELETE')
            const body = await resp.json()
    
            if(body.ok) {
                dispatch(deleteMain(activeMain))
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
                    title: 'Carrusel eliminado correctamente'
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

const deleteMain = (carrusel) => ({
    type: Types.maDeleteMain,
    payload: carrusel
})
