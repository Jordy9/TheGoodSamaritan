import React from 'react'
import { Container } from 'react-bootstrap'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Bible } from '../Components/bible/Bible'
import { Dashboard } from '../Components/dashboard/Dashboard'
import { MiniSeries } from '../Components/differentRolesComponents/miniSeries/MiniSeries'
import { MiniSeriesList } from '../Components/differentRolesComponents/miniSeries/miniseriesLisr/MiniSeriesList'
import { Navb } from '../Components/differentRolesComponents/navbar/Navb'
import { Sketch } from '../Components/differentRolesComponents/sketch/Sketch'
import { SketchsList } from '../Components/differentRolesComponents/sketch/sketchsList/SketchsList'
import { Lives } from '../Components/lives/Lives'
import { NotificationPost } from '../Components/notificationPost/NotificationPost'
import { NotificationResponsive } from '../Components/notificationResponsive/NotificationResponsive'
import { Petitions } from '../Components/petitions/Petitions'
import { Profile } from '../Components/profile/Profile'
import { Search } from '../Components/search/Search'
import { YoutubeVideo } from '../Components/youtubeVideo/YoutubeVideo'

export const PastorRoute = () => {
  return (
    <>
        <Navb />
        <Container>
            <div className = 'my-3'>
                <Switch>
                    <Route path = '/Dashboard' component = {Dashboard} />
                    <Route path = '/Zoom' component = {Lives} />
                    <Route path = '/YoutubeVideos' component = {YoutubeVideo} />
                    <Route path = '/Petitions' component = {Petitions} />
                    <Route path = '/Search' component = {Search} />
                    <Route path = '/Bible' component = {Bible} />
                    <Route path = '/NotificationResponsive' component = {NotificationResponsive} />
                    <Route path = '/NotificationPost/:id' component = {NotificationPost} />
                    <Route path = '/Profile' component = {Profile} />
                    <Route path = '/MiniSerie' component = {MiniSeries} />
                    <Route path = '/MiniSeriesList' component = {MiniSeriesList} />
                    <Route path = '/Sketch' component = {Sketch} />
                    <Route path = '/SketchsList' component = {SketchsList} />

                    <Redirect to = '/MiniSerie' />
                </Switch>
            </div>
        </Container>
    </>
  )
}
