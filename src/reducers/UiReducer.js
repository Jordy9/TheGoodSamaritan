import { Types } from "../types/Types";

const InitiLState = ({
    
})


export const UiReducer = ( state = InitiLState, action) => {
    switch (action.type) {
        case Types.uiOpenDepositModal:
            return {

            }
    
        default:
            return state;
    }
}