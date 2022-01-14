import { Types } from "../types/Types"


export const startSocket = (socket, online) => {
    return (dispatch) => {
        dispatch(Socket(socket, online))
    }
}

const Socket = (socket, online) => ({
    type: Types.skStatusSocket,
    payload: {socket, online}
})