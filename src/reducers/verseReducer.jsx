import { Types } from '../types/Types';

const initialState = {
    verse: null,
    book: null,
    search: false
}


export const verseReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.vsgetVerse:
            return {
                ...state,
                verse: action.payload
            }

        case Types.vsBook:
            return {
                ...state,
                book: action.payload
            }

        case Types.vsBookClear:
            return {
                ...state,
                book: null
            }

        case Types.vsSearchBibleTrue:
            return {
                ...state,
                search: true
            }

        case Types.vsSearchBibleFalse:
            return {
                ...state,
                search: false
            }
    
        default:
            return state;
    }
}
