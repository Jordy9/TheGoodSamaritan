import { Types } from "../types/Types";

const initialState = {
    miniSeries: null,
    activeSerie: '',
    miniSerieStart: null,
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

        case Types.miSetSerieStart:
            return {
                ...state,
                miniSerieStart: action.payload
            }
    
        default:
            return state;
    }
}
