import { fetchConToken } from "../helper/fetch";
import { scrollToBottom } from "../helper/ScrollToBottom";
import { Types } from "../types/Types";

export const UsuariosCargados = (usuarios) => ({
    type: Types.chtUsuariosCargados,
    payload: usuarios
})

export const activeChat = (usuarios) => ({
    type: Types.chtActiveChat,
    payload: usuarios
})

export const activeMessage = (message) => ({
    type: Types.chtActiveMessage,
    payload: message
})

export const cargarChat = (id) => {
    return async(dispatch, getState) => {

        const {usuarios, chatActivo} = getState().cht

        const imageUserMessage = await usuarios.find(user => user.id === chatActivo)

        const resp = await fetchConToken(`mensaje/${id}`)

        const body = await resp.json()

        dispatch(chatCarga(body.message))
        dispatch(imageMessage(imageUserMessage?.urlImage))

        scrollToBottom('messages')
    }
}

const imageMessage = (image) => ({
    type: Types.chtImageMessage,
    payload: image
})


const chatCarga = (chat) => ({
    type: Types.chtCargarChat,
    payload: chat
})

export const clearChat = () => ({
    type: Types.chtClearState
})

export const isTyping = (typing) => ({
    type: Types.chtTyping,
    payload: typing
})
