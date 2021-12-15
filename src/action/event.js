import { fetchSinToken } from "../helper/fetch"
import { Types } from "../types/Types"

export const startGetEventos = () => {
    return async(dispatch) => {
        const resp = await fetchSinToken('evento')
        const body = await resp.json()

        if(body.ok) {
            dispatch(Eventos(body.eventos))
        }
    }
}

const Eventos = (eventos) => ({
    type: Types.evgetEvents,
    payload: eventos
})