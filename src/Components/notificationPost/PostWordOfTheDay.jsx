import React from 'react'
import ReactPlayer from 'react-player'

export const PostWordOfTheDay = ({notificationPost}) => {
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 d-flex justify-content-center align-items-center">
      <ReactPlayer width = '100%' height = '100%' url={notificationPost?.image} controls />
    </div>
  )
}
