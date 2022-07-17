import { Provider } from 'react-redux';
import './App.css'
import { AppRouter } from './routes/AppRouter';
import { store } from './store/Store';
import { GoogleOAuthProvider } from '@react-oauth/google';


export const GoodSamaritan = () => {
    return (
        <Provider store = {store}>
            <GoogleOAuthProvider clientId="32338107925-fq85kgsa9jpj5sidj8073b3piua2kru9.apps.googleusercontent.com">
                <AppRouter />
            </GoogleOAuthProvider>
        </Provider>
    )
}
