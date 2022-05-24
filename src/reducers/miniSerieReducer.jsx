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
            
        case Types.miUpdateSerie:
            return {
                ...state,
                miniSeries: state.miniSeries.map(
                    e => (e._id === action.payload._id) ? action.payload : e
                )
            }
    
        default:
            return state;
    }
}
