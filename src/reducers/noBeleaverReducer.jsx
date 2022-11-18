import { Types } from "../types/Types";

const initialState = {
    Video: null,
    activeVideo: '',
    Porcentage: 0
}

export const noBeleaverReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.nbGetVideo:
            return {
                Video: action.payload
            }

        case Types.nbcreateVideo:
            return {
                ...state,
                Video: action.payload
            }

        case Types.nbSetVideo:
            return {
                ...state,
                activeVideo: action.payload
            }

        case Types.nbClearSetVideo:
            return {
                ...state,
                activeVideo: null
            }

        case Types.nbUpload:
            return {
                ...state,
                Porcentage: action.payload
            }

        case Types.nbUploadFinish:
            return {
                ...state,
                Porcentage: 0
            }
    
        default:
            return state;
    }
}