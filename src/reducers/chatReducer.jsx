import { Types } from "../types/Types";

const initialState = {
    uid: '',
    chatActivo: null,
    image: '',
    usuarios: [],
    mensajes: [],
    typing: [],
    id: null
}

export const chatReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.chtUsuariosCargados:
            return {
                ...state,
                usuarios: [...action.payload]
            }

        case Types.chtActiveChat:
            if (state.chatActivo === action.payload) return state
            return {
                ...state,
                chatActivo: action.payload,
                id: action.payload,
                mensajes: []
            }
            
        case Types.chtActiveMessage:
            if (state.chatActivo === action.payload.from || 
                state.chatActivo === action.payload.to
            ) {
                return {
                    ...state,
                    mensajes: [...state.mensajes, action.payload]
                }

            } else {
                return state
            }

        case Types.chtCargarChat:
            return {
                ...state,
                mensajes: [...action.payload]
            }

        case Types.chtImageMessage:
            return {
                ...state,
                image: action.payload
            }

        case Types.chtClearState:
            return {
                uid: '',
                chatActivo: null,
                usuarios: [],
                mensajes: []
            }

        case Types.chtTyping:
            return {
                ...state,
                typing: action.payload
            }

        case Types.chtClearChatActive:
            return {
                ...state,
                chatActivo: null
            }

        case Types.MGRemoveMessage:
            return {
                ...state,
                mensajes: state.mensajes.filter(
                    e => (e._id !== action.payload)
                )
            }
    
        default:
            return state;
    }
}