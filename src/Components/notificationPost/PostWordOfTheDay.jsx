import React from 'react'
import ReactPlayer from 'react-player'

export const PostWordOfTheDay = ({notificationPost}) => {
  return (
    <>
      <ReactPlayer width = '100%' height = '100%' url={notificationPost?.image} controls />
    </>
  )
}
