import { fetchSinToken } from "../helper/fetch"
import { Types } from "../types/Types"


export const startGetNoBeleaverVideo = () => {
    return async(dispatch) => {
        const resp = await fetchSinToken('VideoNoBeleaver')
        const body = await resp.json()

        if(body.ok) {
            dispatch(NoBeleaverVideo(body.videoNoBeleaver))
        }
    }
}

const NoBeleaverVideo = (video) => ({
    type: Types.nbGetVideo,
    payload: video
})