import axios from "axios"
import moment from "moment"
import Swal from "sweetalert2"
import { fetchConToken, fetchSinToken } from "../helper/fetch"
import { Types } from "../types/Types"

export const getImageApi = (searchParam, setnewImage, page, changeSwitch) => {
  return async(dispatch) => {

    let newSearchParams = encodeURIComponent(searchParam)

    if (!changeSwitch) {
      const { data } = await axios.get(`https://pixabay.com/api/?key=31553456-6c1c8a5d0a38b1f411c5a2bbf&q=${newSearchParams}&page=${page || 1}&per_page=20&safesearch=true&lang=es`)
      setnewImage(data)
    } else {
      const { data } = await axios.get(`https://api.unsplash.com/search/photos?query=${newSearchParams}&client_id=EpVfB-lVXXkHDwLSMeAQm2nYUNLPBnA6lz1hPeCAZJw&page=${page || 1}&per_page=5&lang=es`)
      setnewImage({hits: data.results, total: data.total_pages, totalHits: data.total})
    }
  }
}

export const startGetPaginateMiniSeries = (page) => {
    return async(dispatch) => {
      const resp = await fetchSinToken(`miniserie/series?page=${page || 1}`)
      const body = await resp.json()

      if(body.ok) {
          dispatch(getMiniSerie(body.miniSeries))
          dispatch(PaginateminiSeries({
              page: body.page,
              total: body.total
          }))
      }
    }
}

export const startGetPaginateMiniserieSearch = (page, searchParam) => {
  return async(dispatch) => {
      const resp = await fetchSinToken(`miniserie/search?page=${page || 1}&size=10&searchParam=${searchParam || ''}`)
      const body = await resp.json()

      if(body.ok) {
        dispatch(miniSeries(body.miniSeries))
        dispatch(PaginateminiSeries({
          page: body.page,
          total: body.total
        }))
      }
  }
}

const PaginateminiSeries = (series) => ({
    type: Types.miPaginateSerie,
    payload: series
})

export const updateSerie = (serie) => ({
    type: Types.miUpdateSerie,
    payload: serie
})

const miniSeries = (series) => ({
    type: Types.migetSeries,
    payload: series
})

export const MiniSerieStart = (serie) => ({
    type: Types.miSetSerieStart,
    payload: serie
})

export const setSeries = (series) => ({
    type: Types.miSetSerie,
    payload: series
})

export const setShow = () => ({
    type: Types.miSetSerieShow
})

export const setHide = () => ({
  type: Types.miSetSerieHide
})

export const startCreateMiniSerie = (title, descripcion, file) => {
    return async(dispatch, getState) => {

        const updateCount = moment()

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
              const resp = await fetchConToken('miniSerie', {title, image, idImage, descripcion, updateCount}, 'POST');
              const body = await resp.json()
  
              if (body.ok) {
  
                  dispatch(getMiniSerieNew(body.miniSerie))
  
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
                      title: 'Mini Serie creada correctamente'
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
  type: Types.miUploadFinish
})

const upload = (progress) => ({
  type: Types.miUpload,
  payload: progress
})

const getMiniSerie = (Serie) => ({
    type: Types.micreateSerie,
    payload: Serie
})

const getMiniSerieNew = (Serie) => ({
    type: Types.micreateSerieNew,
    payload: Serie
})

export const SetActiveSerie = (serie) => ({
    type: Types.miSetSerie,
    payload: serie
});

export const clearSetActiveSerie = () => ({
    type: Types.miClearSetSerie
});

export const startUpdateSerie = (title, descripcion, fileupload) => {
    return async(dispatch, getState) => {

        const count = descripcion?.length - 1

        const {activeSerie} = getState().mi

        const {activeUser} = getState().auth

        const updateCount = moment()

        const token = localStorage.getItem('token') || '';

        if (activeSerie?.user === activeUser?.id) {
          if(fileupload) {
            const formData = new FormData()
            formData.append('file', fileupload)
            formData.append('title', activeSerie.title)
            
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/image/upload/seriesBosquejos`, formData, {
              headers: {'x-token': token},
              onUploadProgress: (e) =>
              {dispatch(upload(Math.round( (e.loaded * 100) / e.total )))}
            })
            
            if(res.data.ok) {
              const image = res.data.image.url
              const idImage = res.data.image.id
              const resp = await fetchConToken(`miniSerie/${activeSerie._id}`, {title, image, idImage, descripcion, updateCount, count}, 'PUT');
              const body = await resp.json()
              
              if (body.ok) {
                
                dispatch(updateSerie(body.miniSerie))
                dispatch(UploadFish())

                if (activeSerie?.idImage) {
                  const ress = await axios.delete(`${process.env.REACT_APP_API_URL}/image/upload/${activeSerie.idImage}`, {headers: {'x-token': token}})
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
                  title: 'Mini Serie actualizada correctamente'
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
            const {image, idImage} = activeSerie
            const resp = await fetchConToken(`miniSerie/${activeSerie._id}`, {title, image, idImage, descripcion, updateCount, count}, 'PUT');
            const body = await resp.json()

            if (body.ok) {

                dispatch(updateSerie(body.miniSerie))

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
                    title: 'Mini Serie actualizada correctamente'
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
              title: 'No tiene el privilegio para editar esta mini serie'
            })
      }
    }
}
    
export const startDeleteSerie = () => {
    return async(dispatch, getState) => {

        const {activeSerie} = getState().mi

        const {activeUser} = getState().auth

        const token = localStorage.getItem('token') || '';

        if (activeSerie?.user === activeUser?.id) {
            if(activeSerie.idImage) {
                await axios.delete(`${process.env.REACT_APP_API_URL}/image/upload/${activeSerie.idImage}`, {headers: {'x-token': token}})
    
                const resp = await fetchConToken(`miniSerie/${activeSerie._id}`, activeSerie, 'DELETE')
                const body = await resp.json()
        
                if(body.ok) {
                    dispatch(deleteSerie(activeSerie))
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
                        title: 'Mini Serie eliminada correctamente'
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
                const resp = await fetchConToken(`miniSerie/${activeSerie._id}`, activeSerie, 'DELETE')
                const body = await resp.json()
        
                if(body.ok) {
                    dispatch(deleteSerie(activeSerie))
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
                        title: 'Mini Serie eliminada correctamente'
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
                title: 'No tiene el privilegio para eliminar esta mini serie'
            })
        }

        }

        
}

const deleteSerie = (user) => ({
    type: Types.miDeleteSerie,
    payload: user
})