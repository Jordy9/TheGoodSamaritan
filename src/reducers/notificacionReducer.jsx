import { Types } from "../types/Types";

const initialState = {
    notificaciones: []
}

export const notificacionReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.ntCargarNotificaciones:
            return {
                ...state,
                notificaciones: [...action.payload]
            }

        case Types.ntNotificacionesCargadas:
            return {
                ...state,
                notificaciones: [...action.payload]
            }

        case Types.ntDeleteNotification:
            return {
                ...state,
                notificaciones: state.notificaciones.filter(
                    e => e.from !== action.payload.id && e.to !== action.payload.uid
                )
            }
            
        // case Types.chtActiveMessage:
        //     if (state.chatActivo === action.payload.from || 
        //         state.chatActivo === action.payload.to
        //     ) {
        //         return {
        //             ...state,
        //             mensajes: [...state.mensajes, action.payload]
        //         }

        //     } else {
        //         return state
        //     }

        // case Types.chtCargarChat:
        //     return {
        //         ...state,
        //         mensajes: [...action.payload]
        //     }

        // case Types.chtImageMessage:
        //     return {
        //         ...state,
        //         image: action.payload
        //     }

        // case Types.chtClearState:
        //     return {
        //         uid: '',
        //         chatActivo: null,
        //         usuarios: [],
        //         mensajes: []
        //     }
            
    
        default:
            return state;
    }
}