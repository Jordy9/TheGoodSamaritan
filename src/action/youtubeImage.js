import axios from "axios"
import Swal from "sweetalert2"
import { fetchConToken, fetchSinToken } from "../helper/fetch"
import { Types } from "../types/Types"

export const startGetPaginateYoutube = (page) => {
    return async(dispatch) => {
        const resp = await fetchSinToken(`youtube/you?page=${page || 1}`)
        const body = await resp.json()

        const startVideo = body.youtube[0]

        if(body.ok) {
            dispatch(createYoutube(body.youtube))
            dispatch(YoutubeStart(startVideo))
            dispatch(PaginateYoutube({
                page: body.page,
                total: body.total
            }))
        }
    }
}

export const startGetPaginateYoutubeSearch = (page, searchParam) => {
  return async(dispatch) => {
      const resp = await fetchSinToken(`youtube/search?page=${page || 1}&size=10&searchParam=${searchParam || ''}`)
      const body = await resp.json()

      if(body.ok) {
        dispatch(Youtube(body.youtube))
        dispatch(PaginateYoutube({
          page: body.page,
          total: body.total
        }))
      }
  }
}

const PaginateYoutube = (youtube) => ({
    type: Types.ytPaginateYoutube,
    payload: youtube
})

const Youtube = (youtube) => ({
    type: Types.ytgetYoutube,
    payload: youtube
})

export const SetActiveYoutube = (youtube) => ({
    type: Types.ytSetYoutube,
    payload: youtube
});

const YoutubeStart = (youtube) => ({
    type: Types.ytSetYoutubeStart,
    payload: youtube
})

export const startCreateYoutube = (urlImage) => {
    return async(dispatch, getState) => {

        const {socket} = getState().sk

        let urlId = ''

        let image = ''

        let title = ''

        if (urlImage.includes('embed')) {

          const urlSplit = urlImage.split('/')
  
          urlId = urlSplit[4]

          const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDCqVlIi7y-mB1LyucS_cwWQcFXjYs-Sy8&channelId=UCRO3cOB_J0lgG-sULwpnviA&part=snippet,id&id=${urlId}`)

          image = data?.items[0].snippet?.thumbnails?.maxres?.url

          title = data?.items[0].snippet?.title
        }

        const resp = await fetchConToken('youtube', {title, urlImage, image}, 'POST');
        const body = await resp.json()

        if (body.ok) {

            dispatch(createYoutubeNew(body))
            const subtitle = 'Nuevo video de youtube agregado'

            const content = body.youtube

            const payload = {title, subtitle, content}

            socket?.emit('notifications-admin-to-user', payload)
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

const createYoutube = (youtube) => ({
    type: Types.ytcreateYoutube,
    payload: youtube
})

const createYoutubeNew = (youtube) => ({
    type: Types.ytcreateYoutubeNew,
    payload: youtube
})

export const startUpdateYoutube = (urlImage) => {
    return async(dispatch, getState) => {

        const {activeYoutube} = getState().yt

        const {socket} = getState().sk

        let urlId = ''

        let image = ''

        let title = ''

        if (urlImage.includes('embed')) {

          const urlSplit = urlImage.split('/')
  
          urlId = urlSplit[4]

          const { data } = await axios.get(`https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDCqVlIi7y-mB1LyucS_cwWQcFXjYs-Sy8&channelId=UCRO3cOB_J0lgG-sULwpnviA&part=snippet,id&id=${urlId}`)

          image = data?.items[0].snippet?.thumbnails?.maxres?.url

          title = data?.items[0].snippet?.title
        }
        
        const resp = await fetchConToken(`youtube/${activeYoutube._id}`, {title, urlImage, image}, 'PUT');
        const body = await resp.json()

        if (body.ok) {

            dispatch(updateYoutube(body.youtube))
            socket?.emit('notifications-admin-to-user-update', body.youtube)
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

    }
}

const updateYoutube = (youtube) => ({
    type: Types.ytUpdateYoutube,
    payload: youtube
})


export const startDeleteYoutube = () => {
    return async(dispatch, getState) => {
        const {activeYoutube} = getState().yt

        const {socket} = getState().sk

        const resp = await fetchConToken(`youtube/${activeYoutube._id}`, activeYoutube, 'DELETE')
        const body = await resp.json()

        if(body.ok) {
            dispatch(deleteYoutube(activeYoutube))
            socket?.emit('notifications-admin-to-user-delete', activeYoutube._id)
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
                title: `${body.msg}`
              })
        }
    }

}

const deleteYoutube = (youtube) => ({
    type: Types.ytDeleteYoutube,
    payload: youtube
})