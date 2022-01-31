import Swal from "sweetalert2"
import { fetchSinToken } from "../helper/fetch"
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

export const ZoomAnuncio = (zoom) => {
    return () => {
        const Toast = Swal.mixin({
            toast: true,
            position: 'top-end',
            showConfirmButton: false,
            timer: 10000,
            showCloseButton: true,
            background: '#292b2c',
        })
    
        return Toast.fire({
            color: 'white',
            imageHeight: '200px',
            imageWidth: '250px',
            imageUrl: `${zoom?.image}`,
            title: `${zoom?.title}`
        })
    }
}