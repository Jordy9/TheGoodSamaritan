import { Types } from "../types/Types";

export const activeSearch = (filtro) => ({
    type: Types.bdActivefilter,
    payload: filtro
})

export const ActivePaginate = (number) => ({
    type: Types.bdActivePaginate,
    payload: number
})

export const clearActivePaginate = () => ({
    type: Types.bdClearActivePaginate
})