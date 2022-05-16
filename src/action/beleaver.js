import { fetchSinToken } from "../helper/fetch"
import { Types } from "../types/Types"

export const startGetBeleaver = () => {
    return async(dispatch) => {
        const resp = await fetchSinToken('Beleaver')
        const body = await resp.json()

        if(body.ok) {
            dispatch(Beleaver(body.beleaver))
        }
        console.log(body.beleaver)
    }
}

const Beleaver = (beleaver) => ({
    type: Types.blgetBeleaver,
    payload: beleaver
})