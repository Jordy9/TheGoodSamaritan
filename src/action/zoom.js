import axios from "axios"
import Swal from "sweetalert2"
import { fetchConToken, fetchSinToken } from "../helper/fetch"
import { Types } from "../types/Types"

export const startGetZoom = () => {
    return async(dispatch) => {
        const resp = await fetchSinToken('zoom')
        const body = await resp.json()

        if(body.ok) {
            dispatch(Zooms(body.zoom))
        }
    }
}

const Zooms = (zoom) => ({
    type: Types.zmgetZooms,
    payload: zoom
})

export const startCreateZoom = (title, file, id, password) => {
    return async(dispatch, getState) => {

        const {Zoom} = getState().zm
        const {socket} = getState().sk

        const zoom = Zoom[0]

        const token = localStorage.getItem('token') || '';

        const formData = new FormData()
        formData.append('file', file)
        formData.append('title', title)

        if(zoom) {

            if (file) {
                const res = await axios.post(`${process.env.REACT_APP_API_URL}/image/upload`, formData, {
                    headers: {'x-token': token},
                    onUploadProgress: (e) =>
                    {dispatch(upload(Math.round( (e.loaded * 100) / e.total )))}
                })
                
                if(res.data.ok) {
                    const image = res.data.image.url
                    const idImage = res.data.image.id
                    const resp = await fetchConToken(`zoom/${zoom._id}`, {title, image, idImage, id, password}, 'PUT');
                    const body = await resp.json()
    
                        dispatch(createZoom(body.zoom))
                        dispatch(startGetZoom())
    
                        const subtitle = 'Transmitiendo reunión de Zoom'
    
                        const content = body.zoom
    
                        const payload = {title, subtitle, image, content}
    
                        socket?.emit('notifications-admin-to-user', payload)
    
                        dispatch(UploadFish())
    
                        const respe = await axios.delete(`${process.env.REACT_APP_API_URL}/image/upload/${zoom.idImage}`, {headers: {'x-token': token}})
                        console.log(respe)
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
                            title: 'Zoom creado correctamente'
                          })
                        
                    }
            } else {
                const {image, idImage} = zoom
                const resp = await fetchConToken(`zoom/${zoom._id}`, {title, image, idImage, id, password}, 'PUT');
                const body = await resp.json()

                dispatch(createZoom(body.zoom))
                dispatch(startGetZoom())

                const subtitle = 'Transmitiendo reunión de Zoom'

                const content = body.zoom

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
                    title: 'Zoom creado correctamente'
                    })
            }

        } else {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/image/upload`, formData, {
                headers: {'x-token': token},
                onUploadProgress: (e) =>
                    {dispatch(upload(Math.round( (e.loaded * 100) / e.total )))}
            })
            
            if(res.data.ok) {
                const image = res.data.image.url
                const idImage = res.data.image.id
                const resp = await fetchConToken('zoom', {title, image, idImage, id, password}, 'POST');
                const body = await resp.json()

                dispatch(createZoom(body))
                dispatch(startGetZoom())

                const subtitle = 'Transmitiendo reunión de Zoom'

                const content = body.zoom

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
                    title: 'Zoom actualizado correctamente'
                  })
                
            }
        }
    }
}

const UploadFish = () => ({
    type: Types.zmUploadFinish
})
  
  const upload = (progress) => ({
    type: Types.zmUpload,
    payload: progress
})

const createZoom = (zoom) => ({
    type: Types.zmcreateZoom,
    payload: zoom
})

export const SetActiveZoom = (zoom) => ({
    type: Types.zmSetZoom,
    payload: zoom
});

export const clearSetZoom = (zoom) => ({
    type: Types.zmClearSetZoom,
    payload: zoom
});