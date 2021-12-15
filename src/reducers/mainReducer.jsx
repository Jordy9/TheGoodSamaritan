import { Types } from '../types/Types';

const initialState = {
    Mains: null,
    activeMain: ''
}


export const mainReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.magetMains:
            return {
                ...state,
                Mains: action.payload
            }
    
        default:
            return state;
    }
}
