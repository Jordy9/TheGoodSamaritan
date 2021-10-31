import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Route
} from 'react-router-dom';
import { Login } from '../Components/Wayding/login/Login';
import { Register } from '../Components/Wayding/register/Register';
import { AuthRouter } from './AuthRouter';

export const AppRouter = () => {

    return (
        <Router>

            <div>

                <Switch>
                    <Route exact path = '/Login' component = {Login} />

                    <Route exact path = '/Register' component = {Register} />

                    <Route path = '/' component = {AuthRouter} />

                    <Redirect to = '/Login' />
                </Switch>

            </div>

        </Router>
    )
}
