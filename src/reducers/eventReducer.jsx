import { Types } from "../types/Types";


const initialState = {
    Eventos: null,
    activeEvent: '',
    Paginate: [],
    Porcentage: 0
}

export const eventReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.evgetEvents:
            return {
                ...state,
                Eventos: action.payload
            }
        
        case Types.evcreateEvent:
            return {
                ...state,
                Eventos: [
                    ...state.Eventos,
                    action.payload
                ]
            }

        case Types.evSetEvent:
            return {
                ...state,
                activeEvent: action.payload
            }

        case Types.evPaginateEvent:
            return {
                ...state,
                Paginate: action.payload
            }

        case Types.evClearSetEvent:
            return {
                ...state,
                activeEvent: null
            }

        case Types.evUpdateEvent:
            return {
                ...state,
                Eventos: state.Eventos.map(
                    e => (e._id ===  action.payload._id) ? action.payload : e
                ),
                activeEvent: action.payload
            }  
            
        case Types.evDeleteEvent:
            return {
                ...state,
                Eventos: state.Eventos.filter( 
                    e => (e._id !== state.activeEvent._id)
                ),
                activeSerie: null
            }

        case Types.evUpload:
            return {
                ...state,
                Porcentage: action.payload
            }

        case Types.evUploadFinish:
            return {
                ...state,
                Porcentage: 0
            }
    
        default:
            return state;
    }
}
