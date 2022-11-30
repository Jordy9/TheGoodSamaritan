import { Types } from '../types/Types';

const initialState = {
    Peticiones: [],
    MyPetitions: [],
    activePetitions: '',
    activePetitionsUser: '',
    Paginate: [],
    PaginateUser: []
}

export const petitionReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.ptgetPetitions:
            return {
                ...state,
                Peticiones: action.payload
            }

        case Types.ptPaginatePetition:
            return {
                ...state,
                Paginate: action.payload
            }

        case Types.ptPaginatePetitionUser:
            return {
                ...state,
                PaginateUser: action.payload
            }

        case Types.ptCreatePetitionNew:
            return {
                ...state,
                MyPetitions: [
                    action.payload,
                    ...state.MyPetitions,
                ]
            }

        case Types.ptCreatePetition:
            return {
                ...state,
                Peticiones: [
                    ...state.Peticiones,
                    ...action.payload
                ]
            }

        case Types.ptCreatePetitionMyPetitions:
            return {
                ...state,
                MyPetitions: [
                    ...state.MyPetitions,
                    ...action.payload
                ]
            }

        case Types.ptSetPetition:
            return {
                ...state,
                activePetitions: action.payload
            }

        case Types.ptSetPetitionesUser:
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

                Peticiones: state.Peticiones.map(
                    e => (e._id === action.payload._id) ? action.payload : e
                )
            }

        case Types.ptDeletePetition:
            return {
                ...state,
                MyPetitions: state.MyPetitions.filter( 
                    e => (e._id !== state.activePetitionsUser._id)
                ),
                
                Peticiones: state.Peticiones.filter( 
                    e => (e._id !== state.activePetitionsUser._id)
                )
            }
    
        default:
            return state;
    }
}
