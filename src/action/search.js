import { Types } from "../types/Types";

export const activeSearch = (filtro) => ({
    type: Types.bdActivefilter,
    payload: filtro
})