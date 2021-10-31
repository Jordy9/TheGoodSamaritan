import { Provider } from 'react-redux';
import './App.css'
import { AppRouter } from './routes/AppRouter';
import { store } from './store/Store';


export const CryptoMoney = () => {
    return (
        <Provider store = {store}>
            <AppRouter />
        </Provider>
    )
}
