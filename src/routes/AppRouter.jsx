import moment from 'moment';
import { useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route,
    useHistory
} from 'react-router-dom';
import { startGetCapsules } from '../action/capsule';
import { activeMessage } from '../action/chat';
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
import { Capsule } from '../Components/Wayding/capsule/Capsule';
import { Conctact } from '../Components/Wayding/contact/Conctact';
import { ForgotPassword } from '../Components/Wayding/forgotPassword/ForgotPassword';
import { ResetPassword } from '../Components/Wayding/forgotPassword/ResetPassword';
import { Galleryy } from '../Components/Wayding/gallery/Gallery';
import { Location } from '../Components/Wayding/location/Location';
import { Home } from '../Components/Wayding/login/home/Home';
import { LoginScreen } from '../Components/Wayding/login/LoginScreen';
import { NavbHomeScreen } from '../Components/Wayding/login/navbar/NavbHomeScreen';
import { Messages } from '../Components/Wayding/messages/Messages';
import { NextSteps } from '../Components/Wayding/next steps/NextSteps';
import { RadioBonaoBlessing } from '../Components/Wayding/radioBonaoBlessing/RadioBonaoBlessing';
import { Register } from '../Components/Wayding/register/Register';
import { Schedule } from '../Components/Wayding/schedule/Schedule';
import { scrollToBottomAnimated } from '../helper/ScrollToBottom';
import { useSocket } from '../hooks/useSocket';
// import { Sketch } from '../Components/Wayding/sketch/Sketch';
import { AuthRouter } from './AuthRouter';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

moment.locale('es');

export const AppRouter = () => {

    const dispatch = useDispatch()
    const {checking, uid} = useSelector(state => state.auth)

    const {socket, online, conectarSocket, desconectarSocket} = useSocket('http://localhost:4000')

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

            scrollToBottomAnimated('messages')
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
                    <Route exact path = '/Messages' component = {Messages} />
                    <Route exact path = '/RadioBonaoBlessing' component = {RadioBonaoBlessing} />
                    <Route exact path = '/Contact' component = {Conctact} />
                    <Route exact path = '/Capsule' component = {Capsule} />
                    <Route exact path = '/Schedule' component = {Schedule} />
                    <Route exact path = '/NextSteps' component = {NextSteps} />
                    <Route exact path = '/Gallery' component = {Galleryy} />
                    <Route exact path = '/Location' component = {Location} />
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
