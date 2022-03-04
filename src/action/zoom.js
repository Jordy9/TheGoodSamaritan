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