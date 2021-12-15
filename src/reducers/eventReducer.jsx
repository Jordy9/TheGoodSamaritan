import { Types } from "../types/Types";


const initialState = {
    Eventos: null,
    activeEvent: ''
}

export const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.evgetEvents:
            return {
                ...state,
                Eventos: action.payload
            }
    
        default:
            return state;
    }
}
