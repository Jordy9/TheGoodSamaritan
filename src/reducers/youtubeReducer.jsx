import { Types } from "../types/Types";

const initialState = {
    Youtube: [],
    activeYoutube: '',
    youtubeStart: '',
    Paginate: []
}

export const youtubeReducer = (state = initialState, action) => {

    switch (action.type) {
        case Types.ytgetYoutube:
            return {
            ...state,
            Youtube: action.payload
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

        case Types.ytcreateYoutube:
            return {
                ...state,
                Youtube: [
                    ...state.Youtube,
                    ...action.payload
                ]
            }
        
        case Types.ytPaginateYoutube:
            return {
                ...state,
                Paginate: action.payload
            }

        case Types.ytUpdateYoutube:
            return {
                ...state,
                Youtube: state.Youtube.map(
                    e => (e._id ===  action.payload._id) ? action.payload : e
                ),
                activeYoutube: action.payload
            }  
            
        case Types.ytDeleteYoutube:
            return {
                ...state,
                Youtube: state.Youtube.filter( 
                    e => (e._id !== state.activeYoutube._id)
                )
            }

        default:
                return state;
        }
}