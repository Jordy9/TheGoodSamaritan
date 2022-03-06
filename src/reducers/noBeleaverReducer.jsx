import { Types } from "../types/Types";

const initialState = {
    Video: null
}

export const noBeleaverReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.nbGetVideo:
            return {
                Video: action.payload
            }
    
        default:
            return state;
    }
}