import { Types } from "../types/Types";

const initialState = {
    videos: [],
    activeVideo: null,
}

export const VideoWordOfTheDayReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.vwdgetVideoWordOfTheDay:
            return {
                ...state,
                videos: action.payload
            }

        case Types.vwdsetVideoWordOfTheDay:
            return {
                ...state,
                activeVideo: action.payload
            }
    
        default:
            return state;
    }
}
