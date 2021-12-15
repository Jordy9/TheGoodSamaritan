import { Provider } from 'react-redux';
import './App.css'
import { AppRouter } from './routes/AppRouter';
import { store } from './store/Store';


export const GoodSamaritan = () => {
    return (
        <Provider store = {store}>
            <AppRouter />
        </Provider>
    )
}
