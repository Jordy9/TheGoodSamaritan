import { Types } from "../types/Types";

const initialState = {
    Youtube: null,
    activeYoutube: '',
    youtubeStart: ''
}

export const youtubeReducer = (state = initialState, action) => {

    switch (action.type) {
        case Types.ytgetYoutube:
            return {
            ...state,
            Youtube: [...action.payload]
        }

        case Types.ytSetYoutube:
            return {
                ...state,
                activeYoutube: action.payload
            }

        case Types.ytSetYoutubeStart:
            return {
                ...state,
                youtubeStart: action.payload
            }


        default:
                return state;
        }
}