import React from 'react'

export const PostEvents = ({notificationPost}) => {
  return (
    <img
        style={{objectFit: 'cover', height: '100%', width: '100%'}}
        className="image-round img-fluid"
        src = {notificationPost?.image}
        alt="First slide"
    />
  )
}
