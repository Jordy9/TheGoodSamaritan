import { Types } from '../types/Types';

const initialState = {
    Beleaver: '',
    activeBeleaver: '',
    Porcentage: 0
}

export const beleaverReducer = (state = initialState, action) => {
    switch (action.type) {
        case Types.blgetBeleaver:
            return {
                ...state,
                Beleaver: action.payload
            }

        case Types.blcreateBeleaver:
            return {
                ...state,
                Beleaver: [
                    ...state.Beleaver,
                    action.payload
                ]
            }

        case Types.blSetBeleaver:
            return {
                ...state,
                activeBeleaver: action.payload
            }

        case Types.blClearSetBeleaver:
            return {
                ...state,
                activeBeleaver: null
            }

        case Types.blUpdateBeleaver:
            return {
                ...state,
                Beleaver: state.Beleaver.map(
                    e => (e._id ===  action.payload._id) ? action.payload : e
                ),
                activeBeleaver: action.payload
            }  
            
        case Types.blDeleteBeleaver:
            return {
                ...state,
                Beleaver: state.Beleaver.filter( 
                    e => (e._id !== state.activeBeleaver._id)
                ),
                activeBeleaver: null
            }

        case Types.blUpload:
            return {
                ...state,
                Porcentage: action.payload
            }

        case Types.blUploadFinish:
            return {
                ...state,
                Porcentage: 0
            }
    
        default:
            return state;
    }
}
