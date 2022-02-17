import { Types } from '../types/Types';

const initialState = {
    verse: null,
    book: null
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
    
        default:
            return state;
    }
}
