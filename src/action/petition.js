import { fetchSinToken } from "../helper/fetch"
import { Types } from "../types/Types"

export const startGetPetitions = () => {
    return async(dispatch) => {
        const resp = await fetchSinToken('peticion')
        const body = await resp.json()

        console.log(body)

        if(body.ok) {
            dispatch(Petitions(body.peticiones))
        }
    }
}

const Petitions = (peticiones) => ({
    type: Types.ptgetPetitions,
    payload: peticiones
})