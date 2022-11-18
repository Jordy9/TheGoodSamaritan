import { Types } from '../types/Types';

const initialState = {
    ImageVideo: [],
    activeImageVideo: '',
    Porcentage: 0
}

export const ImageVideoReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.ivgetImageVideo:
            return {
                ...state,
                ImageVideo: action.payload
            }

        case Types.ivsetImageVideo:
            return {
                ...state,
                activeImage: action.payload
            }

        case Types.ivcreateImageVideo:
            return {
                ...state,
                ImageVideo: action.payload
            }

        case Types.ivSetImageVideo:
            return {
                ...state,
                activeImageVideo: action.payload
            }

        case Types.ivClearSetImageVideo:
            return {
                ...state,
                activeImageVideo: null
            }

        case Types.ivUpdateImageVideo:
            return {
                ...state,
                ImageVideo: state.ImageVideo.map(
                    e => (e._id ===  action.payload._id) ? action.payload : e
                ),
                activeImageVideo: action.payload
            }  
            
        case Types.ivDeleteImageVideo:
            return {
                ...state,
                ImageVideo: state.ImageVideo.filter( 
                    e => (e._id !== state.activeImageVideo._id)
                ),
                activeImageVideo: null
            }

        case Types.ivUpload:
            return {
                ...state,
                Porcentage: action.payload
            }

        case Types.ivUploadFinish:
            return {
                ...state,
                Porcentage: 0
            }
    
        default:
            return state;
    }
}
