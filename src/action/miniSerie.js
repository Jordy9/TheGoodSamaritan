import { fetchSinToken } from "../helper/fetch"
import { Types } from "../types/Types"

export const startGetMiniSeries = () => {
    return async(dispatch) => {
        const resp = await fetchSinToken('miniserie')
        const body = await resp.json()

        if(body.ok) {
            dispatch(miniSeries(body.miniSeries))
        }
    }
}

const miniSeries = (series) => ({
    type: Types.migetSeries,
    payload: series
})
export const setSeries = (series) => ({
    type: Types.miSetSerie,
    payload: series
})