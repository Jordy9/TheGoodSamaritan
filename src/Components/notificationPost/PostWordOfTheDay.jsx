import React from 'react'
import ReactPlayer from 'react-player'

export const PostWordOfTheDay = ({notificationPost}) => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex justify-content-center align-items-center">
      <ReactPlayer width = '86.7vw' height = '100vh' url={notificationPost?.image} controls />
    </div>
  )
}
