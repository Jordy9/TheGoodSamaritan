import moment from 'moment';
import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
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
import { startGetGallery } from '../action/gallery';
import { startGetMains } from '../action/main';
import { startGetMiniSeries } from '../action/miniSerie';
import { startGetPetitionesUser, startGetPetitions } from '../action/petition';
import { startGetBosquejos } from '../action/sketch';
import { startSocket } from '../action/socket';
import { setActiveUser, startAuthCheking, startGetUsers } from '../action/user';
import { startGetYoutube } from '../action/youtubeImage';
// import { startGetYoutube } from '../action/youtubeImage';
import { startGetZoom } from '../action/zoom';
import { Footer } from '../Components/footer/Footer';
import { ScrollToTop } from '../Components/scrollToTop/ScrollToTop';
import { Capsule } from '../Components/Home/capsule/Capsule';
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
import { startGetVideoWordOfTheDay } from '../action/VideoWordOfTheDay';
import { startGetNoBeleaverVideo } from '../action/NoBeleaver';
import { startGetBeleaver } from '../action/beleaver';
import { startGetImageVideo } from '../action/imageVideo';

moment.locale('es');

export const AppRouter = () => {

    const dispatch = useDispatch()
    const {checking, uid} = useSelector(state => state.auth)

    const {socket, online, conectarSocket, desconectarSocket} = useSocket('https://good-samaritan-backend.herokuapp.com')

    const token = localStorage.getItem('tokenn')

    useEffect(() => {
        dispatch(startAuthCheking());
        dispatch(startGetMiniSeries())
        dispatch(startGetEventos())
        dispatch(startGetBosquejos())
        dispatch(startGetZoom())
        dispatch(startGetPetitionesUser())
        dispatch(startGetPetitions())
        dispatch(startGetMains())
        dispatch(startGetGallery())
        dispatch(startGetCapsules())
        dispatch(startGetUsers())
        dispatch(setActiveUser())
        dispatch(startGetYoutube())
        dispatch(cargarNotificaciones())
        dispatch(startGetVerseofTheDay())
        dispatch(startGetNotes())
        dispatch(startGetVideoWordOfTheDay())
        dispatch(startGetNoBeleaverVideo())
        dispatch(startGetBeleaver())
        dispatch(startGetImageVideo())
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
                    <Route exact path = '/Capsule' component = {Capsule} />
                    <Route exact path = '/Schedule' component = {Schedule} />
                    <Route exact path = '/Gallery' component = {Galleryy} />
                    <Route exact path = '/ForgotPassword' component = {ForgotPassword} />
                    <Route exact path = {`/resetPassword/${token}`} component = {ResetPassword} />

                    <PrivateRoute path = '/' component = {AuthRouter} isAuthenticated = {!!uid} />

                    <Redirect to = '/Home' />
                </Switch>

            </div>
            <div className = 'mt-5'>
                <Footer />
            </div>

        </Router>
    )
}
