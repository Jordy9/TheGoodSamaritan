import { fetchSinToken } from "../helper/fetch"
import { Types } from "../types/Types"

export const startGetYoutube = () => {
    return async(dispatch) => {
        const resp = await fetchSinToken('youtube')
        const body = await resp.json()

        console.log(body)

        if(body.ok) {
            dispatch(Youtube(body.youtube))
            dispatch(YoutubeStart(body.youtube[body.youtube.length-1]))

        }
    }
}

const Youtube = (youtube) => ({
    type: Types.ytgetYoutube,
    payload: youtube
})

export const SetActiveYoutube = (youtube) => ({
    type: Types.ytSetYoutube,
    payload: youtube
});

const YoutubeStart = (youtube) => ({
    type: Types.ytSetYoutubeStart,
    payload: youtube
})