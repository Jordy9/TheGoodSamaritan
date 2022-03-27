import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import moment from 'moment'
import { PostMiniSerie } from './PostMiniSerie'
import { PostyoutubeVideo } from './PostyoutubeVideo'
import { PostCapsule } from './PostCapsule'
import { PostWordOfTheDay } from './PostWordOfTheDay'
import { PostSketch } from './PostSketch'
import { PostEvents } from './PostEvents'

export const NotificationPost = () => {
    const history = useHistory()

    const {notificationPost} = useSelector(state => state.auth)

    useEffect(() => {
      if (notificationPost === '') {
        history.goBack()
      }
    }, [notificationPost])
    
  return (
    <div className="modal-body" style={{marginTop: '70px'}}>
        <div className="shadow bg-dark p-3 rounded">
            <span className='d-flex justify-content-end mr-4'>{(moment(notificationPost?.content?.date).format('MMMM Do YYYY, h:mm a') !== 'Fecha inválida') && moment(notificationPost?.content?.date).format('MMMM Do YYYY, h:mm a')}</span>
            <h1 className='text-center'>{notificationPost?.content?.title}</h1>
            <div className = 'd-flex justify-content-center align-items-center p-4 my-2 flex-column'>
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
              </div>
            </div>  
        </div>
    </div>
  )
}
