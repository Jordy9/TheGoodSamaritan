import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { capsuleReducer } from '../reducers/capsuleReducer';
import { chatReducer } from '../reducers/chatReducer';
import { eventReducer } from '../reducers/eventReducer';
import { galleryReducer } from '../reducers/galleryReducer';
import { mainReducer } from '../reducers/mainReducer';
import { miniSerieReducer } from '../reducers/miniSerieReducer';
import { notificacionReducer } from '../reducers/notificacionReducer';
import { petitionReducer } from '../reducers/petitionReducer';
import { sketchReducer } from '../reducers/sketchReducer';
import { socketReducer } from '../reducers/socketReducer';
import { usersReducer } from '../reducers/users';
import { youtubeReducer } from '../reducers/youtubeReducer';
import { zoomReducer } from '../reducers/zoomReducer';


const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    mi: miniSerieReducer,
    ev: eventReducer,
    skt: sketchReducer,
    zm: zoomReducer,
    pt: petitionReducer,
    ma: mainReducer,
    ga: galleryReducer,
    ca: capsuleReducer,
    auth: usersReducer,
    yt: youtubeReducer,
    sk: socketReducer,
    cht: chatReducer,
    nt: notificacionReducer
});

export const store =  createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )

);