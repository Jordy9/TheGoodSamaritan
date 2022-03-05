import { Types } from "../types/Types";

const initialState = {
    videos: [],
    activeVideo: null,
    modalOpen: false
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

        case Types.vwdModalOpen:
            return {
                ...state,
                modalOpen: action.payload
            }

        case Types.vwdModalClose:
            return {
                ...state,
                modalOpen: action.payload
            }
    
        default:
            return state;
    }
}
