import { Types } from "../types/Types";

const initialState = {
    Bosquejos: null,
    activeBosquejo: '',
    Paginate: [],
    Porcentage: 0
}

export const sketchReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.sktgetBosquejos:
            return {
                ...state,
                Bosquejos: action.payload
            }

        case Types.sktSetBosquejo:
            return {
                ...state,
                activeBosquejo: action.payload
            }

        case Types.sktcreateBosquejo:
            return {
                ...state,
                Bosquejos: [
                    ...state.Bosquejos,
                    action.payload
                ]
            }

        case Types.sktPaginateBosquejo:
            return {
                ...state,
                Paginate: action.payload
            }

        case Types.sktClearSetBosquejo:
            return {
                ...state,
                activeBosquejo: null
            }

        case Types.sktUpdateBosquejo:
            return {
                ...state,
                Bosquejos: state.Bosquejos.map(
                    e => (e._id ===  action.payload._id) ? action.payload : e
                ),
                activeBosquejo: action.payload
            }  
            
        case Types.sktDeleteBosquejo:
            return {
                ...state,
                Bosquejos: state.Bosquejos.filter( 
                    e => (e._id !== state.activeBosquejo._id)
                ),
                activeBosquejo: null
            }

        case Types.sktUpload:
            return {
                ...state,
                Porcentage: action.payload
            }

        case Types.sktUploadFinish:
            return {
                ...state,
                Porcentage: 0
            }
    
        default:
            return state;
    }
}
