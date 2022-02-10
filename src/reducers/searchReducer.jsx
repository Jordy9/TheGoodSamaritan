import { Types } from "../types/Types";

const initialState = {
    activeSearch: null
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.bdActivefilter:
            return {
                activeSearch: action.payload
            }
    
        default:
            return state;
    }
}