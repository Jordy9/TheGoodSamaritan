import { Types } from "../types/Types";


export const respondMessage = (message) => ({
    type: Types.MGRespondMessages,
    payload: message
})

export const stopRespondMessage = () => ({
    type: Types.MGStopRespondMessages
})

export const scrollMessageClear = () => ({
    type: Types.MGScrollMessageClear
})

export const scrollMessageOutGoing = (id) => ({
    type: Types.MGScrollMessageOutGing,
    payload: id
})

export const deleteMessage = (id) => {
    return (dispatch, getState) => {
        const {socket} = getState().sk

        socket?.emit('delete-mensaje-personal', id)
        // dispatch(removeMessage(id))
    }
}

export const hiddeMessage = (id) => {
    return (dispatch, getState) => {
        const {socket} = getState().sk

        const {uid} = getState().auth

        socket?.emit('hidde-mensaje-personal', id, uid)
        // dispatch(removeMessage(id))
    }
}

export const removeMessage = (id) => ({
    type: Types.MGRemoveMessage,
    payload: id
})