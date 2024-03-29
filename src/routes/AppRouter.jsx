import moment from 'moment';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
} from 'react-router-dom';
import { startGetCapsules } from '../action/capsule';
import { activeMessage, isTyping } from '../action/chat';
import { startGetEventos } from '../action/event';
import { startGetPaginateGallery } from '../action/gallery';
import { startGetMains } from '../action/main';
import { startGetPaginateMiniSeries } from '../action/miniSerie';
import { startGetPaginateBosquejos } from '../action/sketch';
import { startSocket } from '../action/socket';
import { setActiveUser, startAuthCheking, startGetUsers } from '../action/user';
import { startGetPaginateYoutube } from '../action/youtubeImage';
// import { startGetYoutube } from '../action/youtubeImage';
import { startGetZoom } from '../action/zoom';
import { Footer } from '../Components/footer/Footer';
import { ScrollToTop } from '../Components/scrollToTop/ScrollToTop';
// import { Capsule } from '../Components/Home/capsule/Capsule';
import { Conctact } from '../Components/Home/contact/Conctact';
import { ForgotPassword } from '../Components/Home/forgotPassword/ForgotPassword';
import { ResetPassword } from '../Components/Home/forgotPassword/ResetPassword';
import { Galleryy } from '../Components/Home/gallery/Gallery';
import { Home } from '../Components/Home/login/home/Home';
import { LoginScreen } from '../Components/Home/login/LoginScreen';
import { NavbHomeScreen } from '../Components/Home/login/navbar/NavbHomeScreen';
import { Messages } from '../Components/Home/messages/Messages';
import { RadioBonaoBlessing } from '../Components/Home/radioBonaoBlessing/RadioBonaoBlessing';
import { Register } from '../Components/Home/register/Register';
import { Schedule } from '../Components/Home/schedule/Schedule';
import { useSocket } from '../hooks/useSocket';
// import { Sketch } from '../Components/Home/sketch/Sketch';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';
import 'moment/locale/es'
import { cargarNotificaciones } from '../action/notifications';
import { startGetVerseofTheDay } from '../action/verseofTheDay';
import { startGetNotes } from '../action/notas';
import { startGetPaginateVideos } from '../action/VideoWordOfTheDay';
import { startGetNoBeleaverVideo } from '../action/NoBeleaver';
import { startGetBeleaver } from '../action/beleaver';
import { startGetImageVideo } from '../action/imageVideo';
import { MiniSerie } from '../Components/Home/miniSeries/MiniSerie';
import { useNotice } from '../hooks/useNotice';
import { startGetNotificationsUser } from '../action/notificationsUser';
import { Spinner } from '../Components/spinner/Spinner';
import { startGetPaginatePetitions, startGetPaginatePetitionsUser } from '../action/petition';

moment.locale('es');

export const AppRouter = () => {

    const dispatch = useDispatch()
    const {checking, uid, activeUser, showFooter} = useSelector(state => state.auth)

    useNotice(activeUser?.discipleship)

    const {socket, online, conectarSocket, desconectarSocket} = useSocket(`${process.env.REACT_APP_API_URL.split('/api')[0]}`)

    const token = localStorage.getItem('tokenn')

    useEffect(() => {
        if (uid) {
            dispatch(startGetPaginatePetitionsUser(1, uid))
            dispatch(startGetPaginatePetitions())
        }
    }, [dispatch, uid])

    useEffect(() => {
        dispatch(startGetUsers())
        dispatch(startAuthCheking());
        dispatch(startGetPaginateMiniSeries())
        dispatch(startGetEventos())
        dispatch(startGetPaginateBosquejos())
        dispatch(startGetZoom())
        dispatch(startGetMains())
        dispatch(startGetPaginateGallery())
        dispatch(startGetCapsules())
        dispatch(setActiveUser())
        dispatch(startGetPaginateYoutube())
        dispatch(cargarNotificaciones())
        dispatch(startGetVerseofTheDay())
        dispatch(startGetNotes())
        dispatch(startGetPaginateVideos())
        dispatch(startGetNoBeleaverVideo())
        dispatch(startGetBeleaver())
        dispatch(startGetImageVideo())
        dispatch(startGetNotificationsUser())
    }, [dispatch])

    useEffect(() => {
        if (uid) {
            conectarSocket()
        }
    }, [uid, conectarSocket])

    useEffect(() => {
        if (!uid) {
            desconectarSocket()
        }
    }, [uid, desconectarSocket])

    useEffect(() => {
        dispatch(startSocket(socket, online))
    }, [dispatch, socket, online])

    useEffect(() => {
        socket?.on('mensaje-personal', (mensaje) => {
            dispatch(activeMessage(mensaje))
        })
    }, [socket, dispatch])

    useEffect(() => {
        socket?.on('escribiendo', (typing) => {
            dispatch(isTyping(typing))
        })
    }, [socket, dispatch])

    if (checking) {
        return <Spinner />
    }

    return (
        <Router>
            <ScrollToTop />
            <NavbHomeScreen />
            <div>

                <Switch>
                    <PublicRoute exact path = '/Login' component = {LoginScreen} isAuthenticated = {!!uid} />
                    <PublicRoute exact path = '/Register' component = {Register} isAuthenticated = {!!uid} />
                    <Route exact path = '/Home' component = {Home} />
                    <Route exact path = '/Teleblessing' component = {Messages} />
                    <Route exact path = '/RadioBonaoBlessing' component = {RadioBonaoBlessing} />
                    <Route exact path = '/Contact' component = {Conctact} />
                    <Route exact path = '/Devotionals' component = {MiniSerie} />
                    <Route exact path = '/Schedule' component = {Schedule} />
                    <Route exact path = '/Gallery' component = {Galleryy} />
                    <Route exact path = '/ForgotPassword' component = {ForgotPassword} />
                    <Route exact path = '/resetPassword/:id' component = {ResetPassword} />

                    <PrivateRoute path = '/' component = {AuthRouter} isAuthenticated = {!!uid} />

                    <Redirect to = '/Home' />
                </Switch>

            </div>

            {
                (showFooter)
                    &&
                <div className = 'mt-5'>
                    <Footer />
                </div>
            }

        </Router>
    )
}
