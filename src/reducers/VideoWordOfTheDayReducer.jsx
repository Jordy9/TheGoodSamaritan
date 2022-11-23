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

        case Types.vwdcreateVideoWordOfTheDay:
            return {
                ...state,
                videos: [
                    ...state.videos,
                    ...action.payload
                ]
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

        case Types.vwdUpdateVideoWordOfTheDay:
            return {
                ...state,
                videos: state.videos.map(
                    e => (e._id ===  action.payload._id) ? action.payload : e
                ),
                activeVideo: action.payload
            }  
            
        case Types.vwdDeleteVideoWordOfTheDay:
            return {
                ...state,
                videos: state.videos.filter( 
                    e => (e._id !== state.activeVideo._id)
                ),
                activeVideo: null
            }

        case Types.vwdUpload:
            return {
                ...state,
                Porcentage: action.payload
            }

        case Types.vwdUploadFinish:
            return {
                ...state,
                Porcentage: 0
            }

        case Types.vwdPaginateVideo:
            return {
                ...state,
                Paginate: action.payload
            }
    
        default:
            return state;
    }
}
