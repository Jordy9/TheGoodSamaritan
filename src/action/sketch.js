import { fetchSinToken } from "../helper/fetch"
import { Types } from "../types/Types"

export const startGetBosquejos = () => {
    return async(dispatch) => {
        const resp = await fetchSinToken('bosquejo')
        const body = await resp.json()

        if(body.ok) {
            dispatch(Bosquejos(body.bosquejos))
        }
    }
}

const Bosquejos = (bosquejos) => ({
    type: Types.sktgetBosquejos,
    payload: bosquejos
})

export const startSetSketch = (bosquejo) => ({
    type: Types.sktSetBosquejo,
    payload: bosquejo
})