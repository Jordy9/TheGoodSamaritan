import { Types } from "../types/Types";

const initialState = {
    miniSeries: null,
    activeSerie: '',
    Show: false
}

export const miniSerieReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.migetSeries:
            return {
                ...state,
                miniSeries: action.payload
            }

        case Types.miSetSerie:
            return {
                ...state,
                activeSerie: action.payload
            }

        case Types.miSetSerieShow:
            return {
                ...state,
                Show: true
            }

        case Types.miSetSerieHide:
            return {
                ...state,
                Show: false
            }
    
        default:
            return state;
    }
}
