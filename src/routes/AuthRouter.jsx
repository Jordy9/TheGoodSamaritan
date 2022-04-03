import { Container } from 'react-bootstrap';
import {
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import { Dashboard } from '../Components/dashboard/Dashboard';
import { Lives } from '../Components/lives/Lives';
import { Navb } from '../Components/navbar/Navb';
import { Petitions } from '../Components/petitions/Petitions';
import { Profile } from '../Components/profile/Profile';
import {ModalBileve} from '../Components/modalBeleave/ModalBileve'
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { startUpdateUserDate, startUpdateUserNoBeleaver } from '../action/user';
import { useEffect } from 'react';
import { YoutubeVideo } from '../Components/youtubeVideo/YoutubeVideo';
import { ChatPage } from '../Components/chat/ChatPage';
import { Search } from '../Components/search/Search';
import { Bible } from '../Components/bible/Bible';
import { NotificationResponsive } from '../Components/notificationResponsive/NotificationResponsive';
import { ModalNoBeleave } from '../Components/modalBeleave/ModalNoBeleave';
import { startGetPetitionesUser } from '../action/petition';
import { NotificationPost } from '../Components/notificationPost/NotificationPost';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

export const AuthRouter = () => {

    const dispatch = useDispatch()

    const history = useHistory()

    const {pathname} = useLocation()

    const {activeUser, uid, notificationPost} = useSelector(state => state.auth)
    
    const StateNow = localStorage.getItem('State')

    const nb = localStorage.getItem('noBeleaver')

    useEffect(() => {

        if(activeUser?.biliever || activeUser?.discipleship || activeUser?.tracking) {

            if (!StateNow) {
                if (moment(activeUser?.createdAt, 'YYYY-MM-DD[T]HH:mm:ss').fromNow() !== 'Fecha inválida') {
                    if (moment(activeUser?.createdAt, 'YYYY-MM-DD[T]HH:mm:ss').fromNow() > 'hace un mes') {
                        setTimeout(() => {
                            dispatch(startUpdateUserDate())
                            localStorage.setItem('State', true)
                        }, 1000 * 10);
                    }
                }
            }
            
        }

    }, [dispatch, activeUser?.createdAt, StateNow, activeUser?.biliever, activeUser?.discipleship, activeUser?.tracking])

    useEffect(() => {
      if (activeUser?.noBeleaver === true && !nb === false) {
        dispatch(startUpdateUserNoBeleaver())
      }
    }, [dispatch, activeUser?.noBeleaver, nb])

    useEffect(() => {
      dispatch(startGetPetitionesUser())
    }, [uid, dispatch])

    useEffect(() => {
        if (pathname === '/NotificationPost' && notificationPost === '') {
          history.push('/Dashboard')
        }
      }, [notificationPost, history, pathname])

    return (
        <>
        <Navb />
        <Container>
            <div className = 'my-5'>
                {(activeUser?.noBeleaver) && <ModalNoBeleave />}
                {(activeUser?.biliever || activeUser?.discipleship || activeUser?.tracking) && <ModalBileve />}
                <Switch>
                    <Route path = '/Dashboard' component = {Dashboard} />
                    <Route path = '/Zoom' component = {Lives} />
                    <Route path = '/YoutubeVideos' component = {YoutubeVideo} />
                    <Route path = '/Petitions' component = {Petitions} />
                    <Route path = '/Chat' component = {ChatPage} />
                    <Route path = '/Search' component = {Search} />
                    <Route path = '/Bible' component = {Bible} />
                    <Route path = '/NotificationResponsive' component = {NotificationResponsive} />
                    <Route path = '/NotificationPost/:id' component = {NotificationPost} />
                    <Route path = '/Profile' component = {Profile} />

                    <Redirect to = '/Dashboard' />
                </Switch>
            </div>
        </Container>
    </>
    )
}
