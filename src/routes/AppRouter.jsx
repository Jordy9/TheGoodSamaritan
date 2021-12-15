import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
} from 'react-router-dom';
import { startGetEventos } from '../action/event';
import { startGetMains } from '../action/main';
import { startGetMiniSeries } from '../action/miniSerie';
import { startGetPetitions } from '../action/petition';
import { startGetBosquejos } from '../action/sketch';
import { startGetZoom } from '../action/zoom';
import { Footer } from '../Components/footer/Footer';
import { Conctact } from '../Components/Wayding/contact/Conctact';
import { Gallery } from '../Components/Wayding/gallery/Gallery';
import { Location } from '../Components/Wayding/location/Location';
import { Home } from '../Components/Wayding/login/home/Home';
import { LoginScreen } from '../Components/Wayding/login/LoginScreen';
import { NavbHomeScreen } from '../Components/Wayding/login/navbar/NavbHomeScreen';
import { Messages } from '../Components/Wayding/messages/Messages';
import { NextSteps } from '../Components/Wayding/next steps/NextSteps';
import { Register } from '../Components/Wayding/register/Register';
import { Schedule } from '../Components/Wayding/schedule/Schedule';
import { Sketch } from '../Components/Wayding/sketch/Sketch';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {

    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startGetMiniSeries())
        dispatch(startGetEventos())
        dispatch(startGetBosquejos())
        dispatch(startGetZoom())
        dispatch(startGetPetitions())
        dispatch(startGetMains())
    }, [dispatch])
    

    return (
        <Router>

            <NavbHomeScreen />
            <div>

                <Switch>
                    <Route exact path = '/Login' component = {LoginScreen} />
                    <Route exact path = '/Register' component = {Register} />
                    <Route exact path = '/Home' component = {Home} />
                    <Route exact path = '/Messages' component = {Messages} />
                    <Route exact path = '/Contact' component = {Conctact} />
                    <Route exact path = '/Sketch' component = {Sketch} />
                    <Route exact path = '/Schedule' component = {Schedule} />
                    <Route exact path = '/NextSteps' component = {NextSteps} />
                    <Route exact path = '/Gallery' component = {Gallery} />
                    <Route exact path = '/Location' component = {Location} />

                    <Route path = '/' component = {AuthRouter} />

                    <Redirect to = '/Home' />
                </Switch>

            </div>
            <div className = 'mt-5'>
                <Footer />
            </div>

        </Router>
    )
}
