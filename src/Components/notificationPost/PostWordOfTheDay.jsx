import React from 'react'
import ReactPlayer from 'react-player'
import '../Home/messages/Messages.css'

export const PostWordOfTheDay = ({notificationPost}) => {
  return (
    <>
      <ReactPlayer className = 'react-player' width = '100%' height = '100%' url={notificationPost?.image} controls />
    </>
  )
}
