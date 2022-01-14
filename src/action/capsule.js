import { fetchSinToken } from "../helper/fetch"
import { Types } from "../types/Types"

export const startGetCapsules = () => {
    return async(dispatch) => {
        const resp = await fetchSinToken('capsule')
        const body = await resp.json()

        if(body.ok) {
            dispatch(Capsules(body.capsules))
            dispatch(CapsuleStart(body.capsules[0]))
        }
    }
}

const Capsules = (capsules) => ({
    type: Types.cagetCapsules,
    payload: capsules
})

const CapsuleStart = (capsule) => ({
    type: Types.caSetCapsuleStart,
    payload: capsule
})

export const startSetCapsule = (capsule) => ({
    type: Types.caSetCapsule,
    payload: capsule
})