import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { UiReducer } from '../reducers/UiReducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    ui: UiReducer
});

export const store =  createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )

);