import { Types } from "../types/Types";

const initialState = {
    activeSearch: null,
    activePage: 0
}

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.bdActivefilter:
            return {
                activeSearch: action.payload
            }

        case Types.bdActivePaginate:
            return {
                activePage: action.payload
            }

        case Types.bdClearActivePaginate:
            return {
                activePage: 0
            }
    
        default:
            return state;
    }
}