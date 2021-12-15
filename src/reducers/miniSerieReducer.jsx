import { Types } from "../types/Types";

const initialState = {
    miniSeries: null,
    activeSerie: '',
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
    
        default:
            return state;
    }
}
