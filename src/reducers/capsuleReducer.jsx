import { Types } from "../types/Types";

const initialState = {
    Capsules: null,
    activeCapsule: '',
    Capsulestart: ''
}

export const capsuleReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.cagetCapsules:
            return {
                ...state,
                Capsules: action.payload
            }

        case Types.caSetCapsule:
            return {
                ...state,
                activeCapsule: action.payload
            }

        case Types.caSetCapsuleStart:
            return {
                ...state,
                Capsulestart: action.payload
            }
    
        default:
            return state;
    }
}
