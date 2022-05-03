import { Types } from '../types/Types';

const initialState = {
    ImageVideo: []
}

export const ImageVideoReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.ivgetImageVideo:
            return {
                ...state,
                ImageVideo: action.payload
            }
    
        default:
            return state;
    }
}
