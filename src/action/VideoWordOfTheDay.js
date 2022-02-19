import { fetchSinToken } from "../helper/fetch"
import { Types } from "../types/Types"

export const startGetVideoWordOfTheDay = () => {
    return async(dispatch) => {
        const resp = await fetchSinToken('VideoWordOfTheDay')
        const body = await resp.json()

        if(body.ok) {
            dispatch(VideoWordOfTheDay(body.video))
        }
    }
}

const VideoWordOfTheDay = (video) => ({
    type: Types.vwdgetVideoWordOfTheDay,
    payload: video
})
export const setVideoWordOfTheDay = (video) => ({
    type: Types.vwdsetVideoWordOfTheDay,
    payload: video
})