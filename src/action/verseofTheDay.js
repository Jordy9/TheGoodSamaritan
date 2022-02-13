import { fetchSinToken } from "../helper/fetch";
import { Types } from "../types/Types";

export const startGetVerseofTheDay = () => {
    return async(dispatch) => {
        const resp = await fetchSinToken('versiculoDelDia')
        const body = await resp.json()

        console.log(body)

        if(body.ok) {
            dispatch(getVerseofTheDay(...body.versiculo))
        }
    }
}

const getVerseofTheDay = (verse) => ({
    type: Types.vsgetVerse,
    payload: verse
})