import axios from "axios"
import Swal from "sweetalert2"
import { fetchConToken, fetchSinToken } from "../helper/fetch"
import { Types } from "../types/Types"

export const startGetNoBeleaverVideo = () => {
    return async(dispatch) => {
        const resp = await fetchSinToken('VideoNoBeleaver')
        const body = await resp.json()

        if(body.ok) {
            dispatch(NoBeleaverVideo(body.videoNoBeleaver))
        }
    }
}

const NoBeleaverVideo = (video) => ({
    type: Types.nbGetVideo,
    payload: video
})

export const startCreateNoBeleaverVideo = (title, file) => {
    return async(dispatch, getState) => {

        const {Video} = getState().nb

        const video = Video[0]

        const token = localStorage.getItem('token') || '';

        const formData = new FormData()
        formData.append('file', file)
        formData.append('title', title)

        if(video) {

            const res = await axios.post(`${process.env.REACT_APP_API_URL}/image/upload/video`, formData, {
                headers: {'x-token': token},
                onUploadProgress: (e) =>
                {dispatch(upload(Math.round( (e.loaded * 100) / e.total )))}
            })
            
            if(res.data.ok) {
                const image = res.data.image.url
                const idImage = res.data.image.id
                const resp = await fetchConToken(`VideoNoBeleaver/${video._id}`, {title, image, idImage}, 'PUT');
                const body = await resp.json()
                
                if (body.ok) {
                    dispatch(createNoBeleaverVideo(body.videoNoBeleaver))
                    
                    dispatch(startGetNoBeleaverVideo())
                    
                    dispatch(UploadFish())
                    
                    const ress = await axios.delete(`${process.env.REACT_APP_API_URL}/image/upload/${video.idImage}`, {headers: {'x-token': token}})
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
                            title: body.msg
                        })
                    }
                    
                }
        } else {
            const res = await axios.post(`${process.env.REACT_APP_API_URL}/image/upload/video`, formData, {
                headers: {'x-token': token},
                onUploadProgress: (e) =>
                    {dispatch(upload(Math.round( (e.loaded * 100) / e.total )))}
            })
            
            if(res.data.ok) {
                const image = res.data.image.url
                const idImage = res.data.image.id
                const resp = await fetchConToken('VideoNoBeleaver', {title, image, idImage}, 'POST');
                const body = await resp.json()

                if (body.ok) {
                    dispatch(createNoBeleaverVideo(body.videoNoBeleaver))
                    dispatch(startGetNoBeleaverVideo())

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
}

const UploadFish = () => ({
    type: Types.nbUploadFinish
  })
  
  const upload = (progress) => ({
    type: Types.nbUpload,
    payload: progress
  })

const createNoBeleaverVideo = (video) => ({
    type: Types.nbcreateVideo,
    payload: video
})

export const SetActiveNoBeleaverVideo = (video) => ({
    type: Types.nbSetVideo,
    payload: video
});

export const clearSetNoBeleaverVideo = (video) => ({
    type: Types.nbClearSetVideo,
    payload: video
});