import React from 'react'
import { Container } from 'react-bootstrap'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Bible } from '../Components/bible/Bible'
import { Dashboard } from '../Components/dashboard/Dashboard'
import { Beleaver } from '../Components/differentRolesComponents/Beleaver/Beleaver'
import { BeleaverList } from '../Components/differentRolesComponents/Beleaver/BeleaverList/BeleaverList'
import { Contact } from '../Components/differentRolesComponents/contact/Contact'
import { ContactList } from '../Components/differentRolesComponents/contact/contactList/ContactList'
import { Usuarios } from '../Components/differentRolesComponents/dashboard/Dashboard'
import { Events } from '../Components/differentRolesComponents/event/Events'
import { EventsList } from '../Components/differentRolesComponents/event/eventsList/EventsList'
import { GalleryImages } from '../Components/differentRolesComponents/gallery/GalleryImages'
import { GalleryList } from '../Components/differentRolesComponents/gallery/galleryList/GalleryList'
import { ImageVideo } from '../Components/differentRolesComponents/imageVideo/ImageVideo'
import { LivesZoom } from '../Components/differentRolesComponents/live/LivesZoom'
import { Main } from '../Components/differentRolesComponents/main/Main'
import { MainList } from '../Components/differentRolesComponents/main/mainsList/MainList'
import { Navb } from '../Components/differentRolesComponents/navbar/Navb'
import { NoBeleaverVideo } from '../Components/differentRolesComponents/noBeleaver/NoBeleaverVideo'
import { PetitionList } from '../Components/differentRolesComponents/petition/petitionsList/PetitionList'
import { PetitionListSinCuenta } from '../Components/differentRolesComponents/petition/petitionsListSinCuenta/PetitionListSinCuenta'
import { PetitionListUser } from '../Components/differentRolesComponents/petition/petitionsListUser/PetitionListUser'
import { VideoWordOfTheDay } from '../Components/differentRolesComponents/videoWordOfTheDay/VideoWordOfTheDay'
import { VideoWordOfTheDayList } from '../Components/differentRolesComponents/videoWordOfTheDay/videoWordOfTheDayList/VideoWordOfTheDayList'
import { Youtube } from '../Components/differentRolesComponents/youtube/Youtube'
import { YoutubeList } from '../Components/differentRolesComponents/youtube/youtubeList/YoutubeList'
import { Lives } from '../Components/lives/Lives'
import { NotificationPost } from '../Components/notificationPost/NotificationPost'
import { NotificationResponsive } from '../Components/notificationResponsive/NotificationResponsive'
import { Petitions } from '../Components/petitions/Petitions'
import { Profile } from '../Components/profile/Profile'
import { Search } from '../Components/search/Search'
import { YoutubeVideo } from '../Components/youtubeVideo/YoutubeVideo'

export const AdminRoute = () => {
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
                    <Route path = '/NotificationResponsive' component = {NotificationResponsive} />
                    <Route path = '/NotificationPost/:id' component = {NotificationPost} />
                    <Route path = '/Profile' component = {Profile} />
                    <Route path = '/Usuarios' component = {Usuarios} />
                    <Route path = '/WordOfTheDay' component = {VideoWordOfTheDay} />
                    <Route path = '/WordOfTheDayList' component = {VideoWordOfTheDayList} />
                    <Route path = '/PetitionsList' component = {PetitionList} />
                    <Route path = '/PetitionsListUser' component = {PetitionListUser} />
                    <Route path = '/PetitionsListwhithoutAccount' component = {PetitionListSinCuenta} />
                    <Route path = '/Event' component = {Events} />
                    <Route path = '/EventsList' component = {EventsList} />
                    <Route path = '/LivesZoom' component = {LivesZoom} />
                    <Route path = '/Main' component = {Main} />
                    <Route path = '/MainList' component = {MainList} />
                    <Route path = '/imageVideo' component = {ImageVideo} />
                    <Route path = '/Gallery-images' component = {GalleryImages} />
                    <Route path = '/GalleryList' component = {GalleryList} />
                    <Route path = '/Contact' component = {Contact} />
                    <Route path = '/ContactList' component = {ContactList} />
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
