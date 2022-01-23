import { fetchConToken } from "../helper/fetch";
import { Types } from "../types/Types";

export const NotificacionesCargadas = (notificaciones) => ({
    type: Types.ntNotificacionesCargadas,
    payload: notificaciones
})

export const deleteNotification = (notificaciones) => ({
    type: Types.ntDeleteNotification,
    payload: notificaciones
})

export const cargarNotificaciones = () => {
    return async(dispatch) => {

        const resp = await fetchConToken(`notificacion`)

        const body = await resp.json()

        dispatch(NotificacionCarga(body.notificacion))
    }
}

export const BorrarNotificaciones = () => {
    return async(dispatch, gestState) => {

        const {uid} = gestState().auth
        const {chatActivo} = gestState().cht

        const {notificaciones} = gestState().nt

        // const usuario = chatActivo

        if (notificaciones[notificaciones.length-1].from === chatActivo) {
            dispatch(deleteNotification({
                uid: uid,
                id: chatActivo
            }))
        }
        
        if (uid && chatActivo) {
            const resp = await fetchConToken('notificacion', {uid, chatActivo}, 'DELETE')

            const body = await resp.json()

            console.log(body)
        }

    }
}

const NotificacionCarga = (chat) => ({
    type: Types.ntCargarNotificaciones,
    payload: chat
})