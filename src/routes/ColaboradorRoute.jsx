import React from 'react'
import { Container } from 'react-bootstrap'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Dashboard } from '../Components/dashboard/Dashboard'
import { Navb } from '../Components/differentRolesComponents/navbar/Navb'
import { Bible } from '../Components/bible/Bible'
import { Lives } from '../Components/lives/Lives'
import { Petitions } from '../Components/petitions/Petitions'
import { YoutubeVideo } from '../Components/youtubeVideo/YoutubeVideo'
import { Search } from '../Components/search/Search'
// import { NotificationPost } from '../Components/notificationPost/NotificationPost'
// import { NotificationResponsive } from '../Components/notificationResponsive/NotificationResponsive'
import { Profile } from '../Components/profile/Profile'
import { PetitionList } from '../Components/differentRolesComponents/petition/petitionsList/PetitionList'
import { ContactList } from '../Components/differentRolesComponents/contact/contactList/ContactList'

export const ColaboradorRoute = () => {
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
                <Route path = '/PetitionsList' component = {PetitionList} />
                <Route path = '/ContactList' component = {ContactList} />

                <Redirect to = '/Dashboard' />
            </Switch>
          </div>
      </Container>
    </>
  )
}
