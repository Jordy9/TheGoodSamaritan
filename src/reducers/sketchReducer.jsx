import { Types } from "../types/Types";

const initialState = {
    Bosquejos: null,
    activeBosquejo: ''
}

export const sketchReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.sktgetBosquejos:
            return {
                ...state,
                Bosquejos: action.payload
            }

        case Types.sktSetBosquejo:
            return {
                ...state,
                activeBosquejo: action.payload
            }
    
        default:
            return state;
    }
}
