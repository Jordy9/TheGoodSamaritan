import { Types } from '../types/Types';

const initialState = {
    verse: null
}


export const verseReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.vsgetVerse:
            return {
                ...state,
                verse: action.payload
            }
    
        default:
            return state;
    }
}
