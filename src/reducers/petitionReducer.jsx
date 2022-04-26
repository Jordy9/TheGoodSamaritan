import { Types } from '../types/Types';

const initialState = {
    Peticiones: null,
    PeticionesUser: null,
    MyPetitions: null,
    activePetitions: '',
    activePetitionsUser: ''
}

export const petitionReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.ptgetPetitions:
            return {
                ...state,
                Peticiones: action.payload
            }

        case Types.ptgetMyPetitions:
            return {
                ...state,
                MyPetitions: action.payload
            }

        case Types.ptgetPetitionesUser:
            return {
                ...state,
                PeticionesUser: action.payload
            }

        case Types.ptCreatePetition:
            return {
                ...state,
                MyPetitions: [
                    ...state.MyPetitions,
                    action.payload
                ]
            }

        case Types.ptSetPetition:
            return {
                ...state,
                activePetitions: action.payload
            }

        case Types.ptSetPetitionUser:
            return {
                ...state,
                activePetitionsUser: action.payload
            }

        case Types.ptUpdatePetition:
            return {
                ...state,
                MyPetitions: state.MyPetitions.map(
                    e => (e._id === action.payload._id) ? action.payload : e
                ),

                PeticionesUser: state.PeticionesUser.map(
                    e => (e._id === action.payload._id) ? action.payload : e
                )
            }

        case Types.ptDeletePetition:
            return {
                ...state,
                MyPetitions: state.MyPetitions.filter( 
                    e => (e._id !== state.activePetitionsUser._id)
                ),
                
                PeticionesUser: state.PeticionesUser.filter( 
                    e => (e._id !== state.activePetitionsUser._id)
                )
            }
    
        default:
            return state;
    }
}
