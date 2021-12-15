import { Types } from '../types/Types';

const initialState = {
    Peticiones: null,
    activePetitions: ''
}

export const petitionReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.ptgetPetitions:
            return {
                ...state,
                Peticiones: action.payload
            }
    
        default:
            return state;
    }
}
