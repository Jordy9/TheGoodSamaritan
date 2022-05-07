import { fetchSinToken } from "../helper/fetch"
import { Types } from "../types/Types"

export const startGetMiniSeries = () => {
    return async(dispatch) => {
        const resp = await fetchSinToken('miniserie')
        const body = await resp.json()

        if(body.ok) {
            dispatch(miniSeries(body.miniSeries))
            dispatch(MiniSerieStart(body.miniSeries[0]))
        }
    }
}

const miniSeries = (series) => ({
    type: Types.migetSeries,
    payload: series
})

const MiniSerieStart = (serie) => ({
    type: Types.miSetSerieStart,
    payload: serie
})

export const setSeries = (series) => ({
    type: Types.miSetSerie,
    payload: series
})

export const setShow = () => ({
    type: Types.miSetSerieShow
})

export const setHide = () => ({
    type: Types.miSetSerieHide
})