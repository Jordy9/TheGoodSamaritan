import { fetchSinToken } from "../helper/fetch"
import { Types } from "../types/Types"

export const startGetImageVideo = () => {
    return async(dispatch) => {
        const resp = await fetchSinToken('imageVideo')
        const body = await resp.json()

        if(body.ok) {
            dispatch(ImageVideo(body.imageVideo))
        }
    }
}

const ImageVideo = (imageVideo) => ({
    type: Types.ivgetImageVideo,
    payload: imageVideo
})

export const setActiveImage = (image) => ({
    type: Types.ivsetImageVideo,
    payload: image
})