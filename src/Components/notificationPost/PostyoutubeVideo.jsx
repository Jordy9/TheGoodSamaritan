import React from 'react'
import ReactPlayer from 'react-player'

export const PostyoutubeVideo = ({notificationPost}) => {
  return (
    <>
      <ReactPlayer width = '100%' height = '100vh' url={notificationPost?.urlImage} controls />
    </>
  )
}
