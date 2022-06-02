import { fetchSinToken } from "../helper/fetch"
import { Types } from "../types/Types"


export const startGetNotificationsUser = () => {
    return async(dispatch) => {

        const resp = await fetchSinToken('notificationsUser')
        const body = await resp.json()

        if (body.ok) {
            dispatch(getNotificationsUser(body.notificationsUser))
        }
    }
}

export const StartUpdateNotificationUser = (notification) => ({
    type: Types.NUupdateNotificationsUserUpdate,
    payload: notification
})

const getNotificationsUser = (notification) => ({
    type: Types.NUgetnotificationsUser,
    payload: notification
})

export const UpdateNotifications = (updateNotifications) => ({
    type: Types.NUupdateNotificationsUser,
    payload: updateNotifications
})