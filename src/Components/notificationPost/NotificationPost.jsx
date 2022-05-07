import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory, Redirect } from 'react-router-dom'
import moment from 'moment'
import { PostMiniSerie } from './PostMiniSerie'
import { PostyoutubeVideo } from './PostyoutubeVideo'
import { PostCapsule } from './PostCapsule'
import { PostWordOfTheDay } from './PostWordOfTheDay'
import { PostSketch } from './PostSketch'
import { PostEvents } from './PostEvents'
import perfil1 from '../../heroes/User.png'

export const NotificationPost = () => {
    const history = useHistory()

    const {notificationPost} = useSelector(state => state.auth)

    useEffect(() => {
      if (notificationPost === '') {
        history.push('/Dashboard')
      }
    }, [notificationPost, history])

    const {usuarios} = useSelector(state => state.cht)

    const postNotify = usuarios?.filter(user => user.id === notificationPost?.content?.user)
    console.log(postNotify)
    
  return (
    <div style={{marginTop: '70px'}}>
        <div className="shadow bg-dark p-3 image-round">
          {
            (notificationPost.subtitle === 'Nueva MiniSerie agregada' || notificationPost.subtitle === 'Nuevo Bosquejo agregado')
              ?
            <div className="row">
              <div className="col-12">
                <div className="row">
                  <div className="col-6 d-flex justify-content-start align-items-center">
                      <img src={(postNotify[0]?.urlImage) ? postNotify[0]?.urlImage : perfil1} style = {{objectFit: 'cover', width: '50px', height: '50px', borderRadius: '50%'}} className='img-fluid image-round imgag shadowImage mx-2' alt=''/>
                      <span className='text-center'>Pr. {postNotify[0]?.name} {postNotify[0]?.lastName}</span>
                  </div>
        
                  <div className="col-6 d-flex justify-content-end align-items-center">
                      <span id='dateMobile' className='text-right mr-4'>{moment(notificationPost?.createdAt).format('MMMM Do YYYY')}</span>
                      <span id='dateDeskLap' className='text-right mr-4'>{moment(notificationPost?.createdAt).format('MMMM Do YYYY, h:mm a')}</span>
                  </div>
                </div>
                  <h1 className='text-center'>{notificationPost?.content?.title}</h1>
              </div>
            </div>
              :
            <>
              <span className='d-flex justify-content-end mr-4'>{(moment(notificationPost?.content?.createdAt).format('MMMM Do YYYY, h:mm a') !== 'Fecha inválida') && moment(notificationPost?.content?.createdAt).format('MMMM Do YYYY, h:mm a')}</span>
              <h1 className='text-center'>{notificationPost?.content?.title}</h1>
            </>
          }
            <div className='col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12'>
              {
                (notificationPost.subtitle === 'Nueva MiniSerie agregada')
                  &&
                <PostMiniSerie notificationPost = {notificationPost?.content} />
              }

              {
                (notificationPost.subtitle === 'Nueva Cápsula agregada')
                  &&
                <PostCapsule notificationPost = {notificationPost?.content} />
              }

              {
                (notificationPost.subtitle === 'Nueva Palabra del Día agregada')
                  &&
                <PostWordOfTheDay notificationPost = {notificationPost?.content} />
              }

              {
                (notificationPost.subtitle === 'Nuevo Bosquejo agregado')
                  &&
                <PostSketch notificationPost = {notificationPost?.content} />
              }

              {
                (notificationPost.subtitle === 'Nuevo Evento agregado')
                  &&
                <PostEvents notificationPost = {notificationPost?.content} />
              }

              {
                (notificationPost.subtitle === 'Nuevo video de youtube agregado')
                  &&
                <PostyoutubeVideo notificationPost = {notificationPost?.content} />
              }

              {
                (notificationPost.subtitle === 'Transmitiendo reunión de Zoom')
                  &&
                <Redirect to = '/Zoom' />
              }
            </div> 
        </div>
    </div>
  )
}
