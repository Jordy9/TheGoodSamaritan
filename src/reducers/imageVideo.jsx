import { Types } from '../types/Types';

const initialState = {
    ImageVideo: [],
    activeImage: ''
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
    
        default:
            return state;
    }
}
