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

export const ModalOpenVideo = (state) => ({
    type: Types.vwdModalOpen,
    payload: state
})

export const ModalCloseVideo = (state) => ({
    type: Types.vwdModalClose,
    payload: state
})