import { Types } from "../types/Types"

const initialState = {
    notes: [],
    activeNote: null,
    activeDeleteNote: null
}

export const noteReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.ntsGetNota:
            return {
                ...state,
                notes: action.payload
            }
            
        case Types.ntsCrearNota:
            return {
                ...state,
                notes: [
                    ...state.notes,
                    action.payload
                ]
            }

        case Types.ntsUpdateNota:
            return {
                ...state,
                notes: state.notes.map(
                    e => (e._id ===  action.payload._id) ? action.payload : e
                )
            }
        case Types.ntsSetNota:
            return {
                ...state,
                activeNote: action.payload
            }

        case Types.ntsSetDeleteNota:
            return {
                ...state,
                activeDeleteNote: action.payload
            }

        case Types.ntsClearSetNota:
            return {
                ...state,
                activeNote: null
            }

        case Types.ntsDeleteNota:
            return {
                ...state,
                notes: state.notes.filter( 
                    e => (e._id !== state.activeNote._id)
                ),
            }
    
        default:
            return state;
    }
}