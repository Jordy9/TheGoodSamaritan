import { Types } from "../types/Types";

const initialState = {
    activeSearch: null,
    activePage: 0,
    Show: false
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

        case Types.bdSetShow:
            return {
                ...state,
                Show: true
            }

        case Types.bdSetHide:
            return {
                ...state,
                Show: false
            }
    
        default:
            return state;
    }
}