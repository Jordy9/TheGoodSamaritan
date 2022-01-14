import { Types } from "../types/Types";

const initialState = {
    socket: null,
}

export const socketReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.skStatusSocket:
            return {
                ...state,
                ...action.payload,
            }
            
    
        default:
            return state;
    }
}