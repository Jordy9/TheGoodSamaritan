import { Types } from '../types/Types';

const initialState = {
    Respond: false,
    messageRespond: null,
    messageOutGoing: ''
}

export const messagesReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.MGRespondMessages:
            return {
                ...state,
                Respond: true,
                messageRespond: action.payload
            }

        case Types.MGStopRespondMessages:
            return {
                ...state,
                Respond: false,
                messageRespond: null
            }

        case Types.MGScrollMessageClear:
            return {
                ...state,
                messageOutGoing: ''
            }

        case Types.MGScrollMessageOutGing:
            return {
                ...state,
                messageOutGoing: action.payload
            }
    
        default:
            return state;
    }
}
