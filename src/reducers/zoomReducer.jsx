import React from 'react'
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
    
        default:
            return state;
    }
}
