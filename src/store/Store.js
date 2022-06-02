import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import { beleaverReducer } from '../reducers/beleaverReducer';
import { capsuleReducer } from '../reducers/capsuleReducer';
import { chatReducer } from '../reducers/chatReducer';
import { eventReducer } from '../reducers/eventReducer';
import { galleryReducer } from '../reducers/galleryReducer';
import { ImageVideoReducer } from '../reducers/imageVideo';
import { mainReducer } from '../reducers/mainReducer';
import { messagesReducer } from '../reducers/messagesReducer';
import { miniSerieReducer } from '../reducers/miniSerieReducer';
import { noBeleaverReducer } from '../reducers/noBeleaverReducer';
import { noteReducer } from '../reducers/noteReducer';
import { notificacionReducer } from '../reducers/notificacionReducer';
import { notificationUserReducer } from '../reducers/notificationUserReducer ';
import { petitionReducer } from '../reducers/petitionReducer';
import { searchReducer } from '../reducers/searchReducer';
import { sketchReducer } from '../reducers/sketchReducer';
import { socketReducer } from '../reducers/socketReducer';
import { usersReducer } from '../reducers/users';
import { verseReducer } from '../reducers/verseReducer';
import { VideoWordOfTheDayReducer } from '../reducers/VideoWordOfTheDayReducer';
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
    nt: notificacionReducer,
    bd: searchReducer,
    vs: verseReducer,
    nts: noteReducer,
    vwd: VideoWordOfTheDayReducer,
    nb: noBeleaverReducer,
    bl: beleaverReducer,
    iv: ImageVideoReducer,
    mg: messagesReducer,
    nu: notificationUserReducer
});

export const store =  createStore(
    reducers,
    composeEnhancers(
        applyMiddleware(thunk)
    )

);