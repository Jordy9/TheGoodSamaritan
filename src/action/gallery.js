import { fetchSinToken } from "../helper/fetch"
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