import { fetchSinToken } from "../helper/fetch";
import { Types } from "../types/Types";

export const startGetVerseofTheDay = () => {
    return async(dispatch) => {
        const resp = await fetchSinToken('versiculoDelDia')
        const body = await resp.json()

        if(body.ok) {
            dispatch(getVerseofTheDay(...body.versiculo))
        }
    }
}

const getVerseofTheDay = (verse) => ({
    type: Types.vsgetVerse,
    payload: verse
})

export const getBook = (book) => ({
    type: Types.vsBook,
    payload: book
})

export const BookClear = () => ({
    type: Types.vsBookClear,
})

export const searchBible = () => ({
    type: Types.vsSearchBibleTrue
})

export const searchBibleFalse = () => ({
    type: Types.vsSearchBibleFalse
})