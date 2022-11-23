import { fetchSinToken } from "../helper/fetch";
import { Types } from "../types/Types";

export const activeSearch = (filtro) => ({
    type: Types.bdActivefilter,
    payload: filtro
})

export const startGetAll = (searchTerm, setFiltroDeBusqueda) => {
    return async(dispatch) => {
        const resp = await fetchSinToken(`find?searchParam=${searchTerm || ''}`)
        const body = await resp.json()

        console.log(body.busqueda)

        setFiltroDeBusqueda(body.busqueda)
    }
}

export const ActivePaginate = (number) => ({
    type: Types.bdActivePaginate,
    payload: number
})

export const clearActivePaginate = () => ({
    type: Types.bdClearActivePaginate
})

export const setShow = () => ({
    type: Types.bdSetShow
})

export const setHide = () => ({
    type: Types.bdSetHide
})