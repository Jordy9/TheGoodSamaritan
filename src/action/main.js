import { fetchSinToken } from "../helper/fetch"
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
