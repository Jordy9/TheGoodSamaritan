import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { eventReducer } from '../reducers/eventReducer';
import { mainReducer } from '../reducers/mainReducer';
import { miniSerieReducer } from '../reducers/miniSerieReducer';
import { petitionReducer } from '../reducers/petitionReducer';
import { sketchReducer } from '../reducers/sketchReducer';
import { UiReducer } from '../reducers/UiReducer';
import { zoomReducer } from '../reducers/zoomReducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    ui: UiReducer,
    mi: miniSerieReducer,
    ev: eventReducer,
    skt: sketchReducer,
    zm: zoomReducer,
    pt: petitionReducer,
    ma: mainReducer
});

export const store =  createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )

);