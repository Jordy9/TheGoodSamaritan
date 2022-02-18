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
import { startUpdateUserDate } from '../action/user';
import { useEffect } from 'react';
import { YoutubeVideo } from '../Components/youtubeVideo/YoutubeVideo';
import { ChatPage } from '../Components/chat/ChatPage';
import { Search } from '../Components/search/Search';
// import { Bible } from '../Components/bible/Bible';

export const AuthRouter = () => {

    const dispatch = useDispatch()

    const {uid, users, activeUser} = useSelector(state => state.auth)
    const user = users?.find(user => user.id === uid)

    const StateNow = localStorage.getItem('State')

    useEffect(() => {

        if(activeUser?.biliever || activeUser?.discipleship || activeUser?.tracking) {

            if (!StateNow) {
                if (moment(user?.createdAt, "YYYYMMDD").fromNow() > 'hace 18 días') {
                    setTimeout(() => {
                        dispatch(startUpdateUserDate())
                        localStorage.setItem('State', true)
                    }, 1000 * 10);
                }
            }
            
        }

    }, [dispatch, user?.createdAt, StateNow, activeUser?.biliever, activeUser?.discipleship, activeUser?.tracking])

    return (
        <>
        <Navb />
        <Container>
            <div className = 'my-5'>
        {(activeUser?.biliever || activeUser?.discipleship || activeUser?.tracking) && <ModalBileve />}
                <Switch>
                    <Route path = '/Dashboard' component = {Dashboard} />
                    <Route path = '/Lives' component = {Lives} />
                    <Route path = '/YoutubeVideos' component = {YoutubeVideo} />
                    <Route path = '/Petitions' component = {Petitions} />
                    <Route path = '/Chat' component = {ChatPage} />
                    <Route path = '/Search' component = {Search} />
                    {/* <Route path = '/Bible' component = {Bible} /> */}
                    <Route path = '/Profile' component = {Profile} />

                    <Redirect to = '/Dashboard' />
                </Switch>
            </div>
        </Container>
    </>
    )
}
