import React from 'react'
import { Container } from 'react-bootstrap'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Navb } from '../Components/differentRolesComponents/navbar/Navb'
import { Dashboard } from '../Components/dashboard/Dashboard'
import { Bible } from '../Components/bible/Bible'
import { Lives } from '../Components/lives/Lives'
import { Petitions } from '../Components/petitions/Petitions'
import { YoutubeVideo } from '../Components/youtubeVideo/YoutubeVideo'
import { Search } from '../Components/search/Search'
// import { NotificationPost } from '../Components/notificationPost/NotificationPost'
// import { NotificationResponsive } from '../Components/notificationResponsive/NotificationResponsive'
import { Profile } from '../Components/profile/Profile'
import { VideoWordOfTheDay } from '../Components/differentRolesComponents/videoWordOfTheDay/VideoWordOfTheDay'
import { VideoWordOfTheDayList } from '../Components/differentRolesComponents/videoWordOfTheDay/videoWordOfTheDayList/VideoWordOfTheDayList'
import { Events } from '../Components/differentRolesComponents/event/Events'
import { EventsList } from '../Components/differentRolesComponents/event/eventsList/EventsList'
import { Beleaver } from '../Components/differentRolesComponents/Beleaver/Beleaver'
import { BeleaverList } from '../Components/differentRolesComponents/Beleaver/BeleaverList/BeleaverList'
import { NoBeleaverVideo } from '../Components/differentRolesComponents/noBeleaver/NoBeleaverVideo'
import { Youtube } from '../Components/differentRolesComponents/youtube/Youtube'
import { YoutubeList } from '../Components/differentRolesComponents/youtube/youtubeList/YoutubeList'
import { GalleryImages } from '../Components/differentRolesComponents/gallery/GalleryImages'
import { GalleryList } from '../Components/differentRolesComponents/gallery/galleryList/GalleryList'
import { ImageVideo } from '../Components/differentRolesComponents/imageVideo/ImageVideo'
import { Main } from '../Components/differentRolesComponents/main/Main'
import { MainList } from '../Components/differentRolesComponents/main/mainsList/MainList'
import { LivesZoom } from '../Components/differentRolesComponents/live/LivesZoom'

export const GestorContenido = () => {
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
                {/* <Route path = '/Chat' component = {ChatScreen} /> */}
                <Route path = '/Search' component = {Search} />
                <Route path = '/Bible' component = {Bible} />
                {/* <Route path = '/NotificationResponsive' component = {NotificationResponsive} />
                <Route path = '/NotificationPost/:id' component = {NotificationPost} /> */}
                <Route path = '/Profile' component = {Profile} />
                <Route path = '/WordOfTheDay' component = {VideoWordOfTheDay} />
                <Route path = '/WordOfTheDayList' component = {VideoWordOfTheDayList} />
                <Route path = '/Event' component = {Events} />
                <Route path = '/EventsList' component = {EventsList} />
                <Route path = '/LivesZoom' component = {LivesZoom} />
                <Route path = '/Main' component = {Main} />
                <Route path = '/MainList' component = {MainList} />
                <Route path = '/imageVideo' component = {ImageVideo} />
                <Route path = '/Gallery-images' component = {GalleryImages} />
                <Route path = '/GalleryList' component = {GalleryList} />
                <Route path = '/LinkYoutube' component = {Youtube} />
                <Route path = '/YoutubeList' component = {YoutubeList} />
                <Route path = '/NoBeleaver' component = {NoBeleaverVideo} />
                <Route path = '/Beleaver' component = {Beleaver} />
                <Route path = '/BeleaverList' component = {BeleaverList} />

                <Redirect to = '/Dashboard' />
            </Switch>
          </div>
      </Container>
    </>
  )
}
