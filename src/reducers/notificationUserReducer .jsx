import { Types } from "../types/Types";

const initialState = {
    notificaciones: [],
    updateNotifications: null
}

export const notificationUserReducer  = (state = initialState, action) => {
    switch (action.type) {
        case Types.NUgetnotificationsUser:
            return {
                ...state,
                notificaciones: [...action.payload]
            }

        case Types.NUupdateNotificationsUser:
            return {
                ...state,
                updateNotifications: action.payload
            }

        case Types.NUupdateNotificationsUserUpdate:
            return {
                ...state,
                notificaciones: state.notificaciones.map(
                    e => (e._id ===  action.payload._id) ? action.payload : e
                )
            }
    
        default:
            return state;
    }
}