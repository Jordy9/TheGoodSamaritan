import React from 'react'
import { Types } from '../types/Types';

const initialState = {
    chatTrue: false
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
