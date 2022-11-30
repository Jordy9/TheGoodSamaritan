import { Types } from '../types/Types';

const initialState = {
    checking: true,
    users: [],
    activeUser: '',
    setUser: '',
    forgotPassword: '',
    Porcentage: 0,
    notificationPost: '',
    modalOpen: false,
    showFooter: true
}

export const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.authLogin:
            return {
                ...state,
                checking: false,
                ...action.payload
            }
            
        case Types.authStartRegister:
            return {
                ...state,
                users: [
                    ...state.users,
                    action.payload
                ]
            }

        case Types.authStartGetUsers:
            return {
                ...state,
                users: action.payload
            }

        case Types.authStartUpdateUser:
            return {
                ...state,
                users: state.users.map(
                    e => (e.id ===  action.payload.id) ? action.payload : e
                )
            }

        case Types.authDeleteUser:
            return {
                ...state,
                users: state.users.filter(
                    e => (e.id !==  action.payload.id)
                )
            }

        case Types.authSetUser:
            return {
                ...state,
                activeUser: action.payload
            }

        case Types.authModalOpen:
            return {
                ...state,
                modalOpen: action.payload
            }

        case Types.authActiveSetUser:
            return {
                ...state,
                setUser: action.payload
            }

        case Types.authSetUserRegister:
            return {
                ...state,
                activeUser: action.payload
            }

        case Types.authForgotPassword:
            return {
                ...state,
                forgotPassword: action.payload
            }

        case Types.authCheckingFinish:
            return {
                ...state,
                checking: false,
            }

        case Types.authLogout:
            return {
                checking: false,
            }

        case Types.authUpload:
            return {
                ...state,
                Porcentage: action.payload
            }

        case Types.authUploadFinish:
            return {
                ...state,
                Porcentage: 0
            }

        case Types.authshowFooter:
            return {
                ...state,
                showFooter: action.payload
            }

        case Types.authsetNotificationPost:
            return {
                ...state,
                notificationPost: action.payload
            }
    
        default:
            return state;
    }
}
