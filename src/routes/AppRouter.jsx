import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
} from 'react-router-dom';
import { Footer } from '../Components/footer/Footer';
import { AboutUs } from '../Components/Wayding/about us/AboutUs';
import { Conctact } from '../Components/Wayding/contact/Conctact';
import { HomeScreen } from '../Components/Wayding/login/HomeScreen';
import { LoginScreen } from '../Components/Wayding/login/LoginScreen';
import { NavbHomeScreen } from '../Components/Wayding/login/navbar/NavbHomeScreen';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {
    

    return (
        <Router>

            <div>
                <NavbHomeScreen />

                <Switch>
                    {/* <Route exact path = '/Login' component = {Login} /> */}

                    <Route exact path = '/Home' component = {HomeScreen} />

                    <Route exact path = '/AboutUs' component = {AboutUs} />

                    <Route exact path = '/Contact' component = {Conctact} />

                    <Route exact path = '/Login' component = {LoginScreen} />


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
