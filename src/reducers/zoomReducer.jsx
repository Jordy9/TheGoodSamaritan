import { Types } from '../types/Types';

const initialState = {
    Zoom: '',
    activeZoom: ''
}


export const zoomReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.zmgetZooms:
            return {
                ...state,
                Zoom: action.payload
            }
    
        case Types.zmAnuncio:
            return {
                ...state,
                Zoom: action.payload
            }
    
        default:
            return state;
    }
}
