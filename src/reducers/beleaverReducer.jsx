import { Types } from '../types/Types';

const initialState = {
    Beleaver: ''
}

export const beleaverReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.blgetBeleaver:
            return {
                ...state,
                Beleaver: action.payload
            }
    
        default:
            return state;
    }
}
