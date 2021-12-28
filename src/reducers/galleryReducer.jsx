import React from 'react'
import { Types } from '../types/Types';

const initialState = {
    Gallery: null
}

export const galleryReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.gagetGallerys:
            return {
                ...state,
                Gallery: action.payload
            }
    
        default:
            return state;
    }
}
